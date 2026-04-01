import type { StandardMastery, TrendDirection } from '@/types/progress'

async function getClient() {
  const { createServiceRoleClient } = await import('../supabase/server')
  return createServiceRoleClient()
}

/**
 * Calculate standard mastery as a rolling average over a time window.
 * Counts correct_answer and incorrect_answer events for the given standard.
 */
export async function calculateStandardMastery(
  studentId: string,
  standardCode: string,
  windowDays = 7
): Promise<{ percentage: number; dataPoints: number }> {
  const supabase = await getClient()
  const cutoff = new Date(Date.now() - windowDays * 86400000).toISOString()

  const { data: events } = await supabase
    .from('session_events')
    .select('event_type')
    .eq('student_id', studentId)
    .eq('standard_code', standardCode)
    .in('event_type', ['correct_answer', 'incorrect_answer'])
    .gte('created_at', cutoff)

  if (!events || events.length === 0) {
    return { percentage: 0, dataPoints: 0 }
  }

  const correct = events.filter((e) => e.event_type === 'correct_answer').length
  const total = events.length
  const percentage = Math.round((correct / total) * 100)

  return { percentage, dataPoints: total }
}

/**
 * Recalculate and upsert mastery for a student/standard pair.
 */
export async function updateStandardMastery(
  studentId: string,
  standardCode: string,
  subject: 'math' | 'ela'
): Promise<void> {
  const supabase = await getClient()
  const { percentage, dataPoints } = await calculateStandardMastery(studentId, standardCode)

  await supabase.from('standard_mastery').upsert(
    {
      student_id: studentId,
      standard_code: standardCode,
      subject,
      mastery_percentage: percentage,
      data_points: dataPoints,
      last_assessed_at: new Date().toISOString(),
    },
    { onConflict: 'student_id,standard_code' }
  )
}

/**
 * Get full mastery snapshot for a student, optionally filtered by subject.
 */
export async function getStudentMasterySnapshot(
  studentId: string,
  subject?: 'math' | 'ela'
): Promise<StandardMastery[]> {
  const supabase = await getClient()

  let query = supabase
    .from('standard_mastery')
    .select('standard_code, subject, mastery_percentage, data_points, last_assessed_at')
    .eq('student_id', studentId)
    .order('mastery_percentage', { ascending: true })

  if (subject) {
    query = query.eq('subject', subject)
  }

  const { data } = await query
  if (!data) return []

  return data.map((row) => ({
    standardCode: row.standard_code,
    subject: row.subject as 'math' | 'ela',
    masteryPercentage: Number(row.mastery_percentage),
    dataPoints: row.data_points,
    lastAssessedAt: row.last_assessed_at,
    trend: computeTrend(Number(row.mastery_percentage), row.data_points),
  }))
}

function computeTrend(percentage: number, dataPoints: number): TrendDirection {
  // Simple heuristic: with few data points we can't determine trend
  if (dataPoints < 3) return 'stable'
  if (percentage >= 70) return 'improving'
  if (percentage < 40) return 'declining'
  return 'stable'
}
