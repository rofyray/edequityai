import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { calculateXP } from '@/lib/module-player/hints'
import { updateStandardMastery } from '@/lib/progress/mastery'
import { checkAdaptiveTrigger, logAdaptiveTrigger } from '@/lib/progress/adaptive'

const completeSchema = z.object({
  moduleId: z.string().uuid(),
  score: z.number().min(0).max(100),
})

export async function POST(req: NextRequest) {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let body: z.infer<typeof completeSchema>
  try {
    body = completeSchema.parse(await req.json())
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  // Use service role for cross-table updates
  const admin = await createServiceRoleClient()

  // Fetch module xp_reward
  const { data: module } = await admin
    .from('modules')
    .select('id, xp_reward')
    .eq('id', body.moduleId)
    .single()

  if (!module) {
    return NextResponse.json({ error: 'Module not found' }, { status: 404 })
  }

  const xpEarned = calculateXP(module.xp_reward, body.score)

  // Upsert student_progress
  const { error: progressErr } = await admin
    .from('student_progress')
    .upsert(
      {
        student_id: user.id,
        module_id: body.moduleId,
        completed: true,
        completed_at: new Date().toISOString(),
        score: body.score,
        xp_earned: xpEarned,
      },
      { onConflict: 'student_id,module_id' }
    )

  if (progressErr) {
    return NextResponse.json({ error: 'Failed to save progress' }, { status: 500 })
  }

  // Log module_complete event
  const { data: session } = await admin
    .from('sessions')
    .select('id')
    .eq('student_id', user.id)
    .eq('module_id', body.moduleId)
    .is('ended_at', null)
    .order('started_at', { ascending: false })
    .limit(1)
    .single()

  if (session) {
    await admin.from('session_events').insert({
      session_id: session.id,
      student_id: user.id,
      event_type: 'module_complete',
      module_id: body.moduleId,
      metadata: { score: body.score, xpEarned },
    })

    // End the session
    await admin
      .from('sessions')
      .update({ ended_at: new Date().toISOString() })
      .eq('id', session.id)
  }

  // Fetch current student data for streak logic
  const { data: student } = await admin
    .from('students')
    .select('xp_total, streak_days, streak_last_active')
    .eq('id', user.id)
    .single()

  if (!student) {
    return NextResponse.json({ error: 'Student not found' }, { status: 404 })
  }

  // Streak logic
  const today = new Date().toISOString().split('T')[0]
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]
  let streakDays = student.streak_days
  let streakUpdated = false

  if (!student.streak_last_active || student.streak_last_active === yesterday) {
    // Continue or start streak
    streakDays += 1
    streakUpdated = true
  } else if (student.streak_last_active < yesterday) {
    // Streak broken — reset
    streakDays = 1
    streakUpdated = true
  }
  // If streak_last_active === today, no change

  const newXpTotal = student.xp_total + xpEarned

  // Update student
  await admin
    .from('students')
    .update({
      xp_total: newXpTotal,
      streak_days: streakDays,
      streak_last_active: today,
    })
    .eq('id', user.id)

  // Update standard mastery for each standard in the module
  const { data: moduleData } = await admin
    .from('modules')
    .select('standard_codes, subject')
    .eq('id', body.moduleId)
    .single()

  if (moduleData?.standard_codes) {
    for (const code of moduleData.standard_codes) {
      await updateStandardMastery(user.id, code, moduleData.subject)
    }
  }

  // Check adaptive difficulty trigger
  const adaptiveTrigger = await checkAdaptiveTrigger(user.id)
  if (adaptiveTrigger) {
    await logAdaptiveTrigger(adaptiveTrigger)
  }

  return NextResponse.json({
    xpEarned,
    xpTotal: newXpTotal,
    streakDays,
    streakUpdated,
    adaptiveTrigger,
  })
}
