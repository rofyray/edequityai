import type { ParentWeeklySummary } from '../dashboard/parent-types'

const ESTIMATED_MINUTES_PER_EVENT = 2

/**
 * Calculate a weekly activity summary for a student.
 * Looks at session_events from the last 7 days.
 */
export async function getWeeklySummary(studentId: string): Promise<ParentWeeklySummary> {
  const { createServiceRoleClient } = await import('../supabase/server')
  const supabase = await createServiceRoleClient()

  const weekAgo = new Date(Date.now() - 7 * 86400000).toISOString()

  // Count events this week
  const { data: events } = await supabase
    .from('session_events')
    .select('event_type, module_id, created_at')
    .eq('student_id', studentId)
    .gte('created_at', weekAgo)

  const eventCount = events?.length ?? 0
  const weeklyMinutes = eventCount * ESTIMATED_MINUTES_PER_EVENT

  // Modules completed this week
  const { data: completions } = await supabase
    .from('student_progress')
    .select('module_id, xp_earned')
    .eq('student_id', studentId)
    .eq('completed', true)
    .gte('completed_at', weekAgo)

  const modulesCompleted = completions?.length ?? 0
  const xpEarned = completions?.reduce((sum, c) => sum + (c.xp_earned ?? 0), 0) ?? 0

  // Current streak
  const { data: student } = await supabase
    .from('students')
    .select('streak_days')
    .eq('id', studentId)
    .single()

  const streakDays = student?.streak_days ?? 0

  // Top subject — count events by module subject
  const moduleIds = [...new Set((events ?? []).map((e) => e.module_id).filter(Boolean))]
  let topSubject: 'math' | 'ela' | null = null

  if (moduleIds.length > 0) {
    const { data: modules } = await supabase
      .from('modules')
      .select('id, subject')
      .in('id', moduleIds)

    const subjectCounts = { math: 0, ela: 0 }
    const moduleSubjectMap = new Map((modules ?? []).map((m) => [m.id, m.subject]))

    for (const event of events ?? []) {
      const subject = moduleSubjectMap.get(event.module_id)
      if (subject === 'math') subjectCounts.math++
      else if (subject === 'ela') subjectCounts.ela++
    }

    topSubject = subjectCounts.math >= subjectCounts.ela ? 'math' : 'ela'
    if (subjectCounts.math === 0 && subjectCounts.ela === 0) topSubject = null
  }

  return { weeklyMinutes, modulesCompleted, streakDays, topSubject, xpEarned }
}
