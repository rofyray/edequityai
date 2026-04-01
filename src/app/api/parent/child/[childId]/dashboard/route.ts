import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { getWeeklySummary } from '@/lib/progress/weekly-summary'
import type { ParentDashboardData } from '@/lib/dashboard/parent-types'

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ childId: string }> }
) {
  const { childId } = await params
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user || user.user_metadata?.role !== 'parent') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const admin = await createServiceRoleClient()

  // Verify parent-student link
  const { data: link } = await admin
    .from('parent_student_links')
    .select('id')
    .eq('parent_id', user.id)
    .eq('student_id', childId)
    .eq('verified', true)
    .single()

  if (!link) {
    return NextResponse.json({ error: 'Not linked to this student' }, { status: 403 })
  }

  // Fetch child profile
  const { data: student } = await admin
    .from('students')
    .select('id, grade, region, state, streak_days, xp_total')
    .eq('id', childId)
    .single()

  const { data: userProfile } = await admin
    .from('users')
    .select('full_name')
    .eq('id', childId)
    .single()

  if (!student || !userProfile) {
    return NextResponse.json({ error: 'Student not found' }, { status: 404 })
  }

  // Weekly summary
  const summary = await getWeeklySummary(childId)

  // Progress per subject
  const { data: progress } = await admin
    .from('student_progress')
    .select('module_id, completed')
    .eq('student_id', childId)

  const { data: modules } = await admin
    .from('modules')
    .select('id, subject, title')
    .eq('is_placeholder', false)

  const moduleMap = new Map((modules ?? []).map((m) => [m.id, m]))
  const completedIds = new Set((progress ?? []).filter((p) => p.completed).map((p) => p.module_id))

  const mathTotal = (modules ?? []).filter((m) => m.subject === 'math').length
  const elaTotal = (modules ?? []).filter((m) => m.subject === 'ela').length
  const mathCompleted = (modules ?? []).filter((m) => m.subject === 'math' && completedIds.has(m.id)).length
  const elaCompleted = (modules ?? []).filter((m) => m.subject === 'ela' && completedIds.has(m.id)).length

  // Recent completions (summary-level: title, score, date — no granular data per AC-PARENT-05)
  const { data: recentProgress } = await admin
    .from('student_progress')
    .select('module_id, score, completed_at')
    .eq('student_id', childId)
    .eq('completed', true)
    .order('completed_at', { ascending: false })
    .limit(5)

  const recentActivity = (recentProgress ?? []).map((p) => {
    const mod = moduleMap.get(p.module_id)
    return {
      moduleTitle: mod?.title ?? 'Unknown',
      subject: mod?.subject ?? 'math',
      score: Number(p.score ?? 0),
      completedAt: p.completed_at!,
    }
  })

  // Achievements
  const achievements = [
    { id: 'first-lesson', label: 'First Lesson', icon: '📚', earned: completedIds.size >= 1 },
    { id: 'streak-3', label: '3-Day Streak', icon: '🔥', earned: student.streak_days >= 3 },
    { id: 'streak-7', label: 'Week Warrior', icon: '⭐', earned: student.streak_days >= 7 },
    { id: 'math-5', label: 'Math Explorer', icon: '🧮', earned: mathCompleted >= 5 },
    { id: 'ela-5', label: 'Word Wizard', icon: '📖', earned: elaCompleted >= 5 },
    { id: 'xp-100', label: 'Century Club', icon: '💯', earned: student.xp_total >= 100 },
  ]

  const dashboard: ParentDashboardData = {
    child: {
      id: student.id,
      fullName: userProfile.full_name,
      grade: student.grade,
      region: student.region,
      state: student.state,
    },
    summary,
    progress: {
      math: {
        percent: mathTotal > 0 ? Math.round((mathCompleted / mathTotal) * 100) : 0,
        modulesCompleted: mathCompleted,
        totalModules: mathTotal,
      },
      ela: {
        percent: elaTotal > 0 ? Math.round((elaCompleted / elaTotal) * 100) : 0,
        modulesCompleted: elaCompleted,
        totalModules: elaTotal,
      },
    },
    achievements,
    recentActivity,
  }

  return NextResponse.json(dashboard)
}
