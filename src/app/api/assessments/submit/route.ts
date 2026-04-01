import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { updateStandardMastery } from '@/lib/progress/mastery'
import { checkAdaptiveTrigger, logAdaptiveTrigger } from '@/lib/progress/adaptive'
import type { AssessmentItem } from '@/types/progress'

const submitSchema = z.object({
  assessmentId: z.string().uuid(),
  answers: z.array(
    z.object({
      itemIndex: z.number().int().min(0),
      answer: z.string(),
    })
  ),
})

export async function POST(req: NextRequest) {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let body: z.infer<typeof submitSchema>
  try {
    body = submitSchema.parse(await req.json())
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const admin = await createServiceRoleClient()

  // Fetch assessment
  const { data: assessment } = await admin
    .from('assessments')
    .select('*')
    .eq('id', body.assessmentId)
    .eq('student_id', user.id)
    .single()

  if (!assessment) {
    return NextResponse.json({ error: 'Assessment not found' }, { status: 404 })
  }

  if (assessment.completed) {
    return NextResponse.json({ error: 'Assessment already completed' }, { status: 400 })
  }

  // Score answers
  const items = assessment.items as AssessmentItem[]
  let correct = 0
  const itemResults = body.answers.map((a) => {
    const item = items[a.itemIndex]
    if (!item) return { itemIndex: a.itemIndex, correct: false }
    const isCorrect = a.answer.trim().toLowerCase() === item.correctAnswer.trim().toLowerCase()
    if (isCorrect) correct++
    return { itemIndex: a.itemIndex, correct: isCorrect }
  })

  const total = items.length
  const score = total > 0 ? Math.round((correct / total) * 100) : 0

  // Update assessment
  await admin
    .from('assessments')
    .update({
      score,
      completed: true,
      completed_at: new Date().toISOString(),
    })
    .eq('id', body.assessmentId)

  // Update standard mastery
  await updateStandardMastery(user.id, assessment.standard_code, assessment.subject)

  // Check adaptive trigger
  const trigger = await checkAdaptiveTrigger(user.id)
  if (trigger) {
    await logAdaptiveTrigger(trigger)
  }

  return NextResponse.json({
    assessmentId: body.assessmentId,
    score,
    correct,
    total,
    masteryUpdated: true,
    adaptiveTrigger: trigger,
  })
}
