import type { AdaptiveTrigger, DifficultyLevel } from '@/types/progress'

const ADVANCE_THRESHOLD = 80
const REVIEW_THRESHOLD = 60
const CONSECUTIVE_MODULES = 3

const DIFFICULTY_ORDER: DifficultyLevel[] = ['foundational', 'grade_level', 'advanced']

async function getClient() {
  const { createServiceRoleClient } = await import('../supabase/server')
  return createServiceRoleClient()
}

/**
 * Check if the student's recent performance triggers a difficulty change.
 * - 3 consecutive scores >= 80 → advance
 * - 3 consecutive scores < 60 → review
 */
export async function checkAdaptiveTrigger(
  studentId: string
): Promise<AdaptiveTrigger | null> {
  const supabase = await getClient()

  const { data: recentScores } = await supabase
    .from('student_progress')
    .select('score')
    .eq('student_id', studentId)
    .eq('completed', true)
    .not('score', 'is', null)
    .order('completed_at', { ascending: false })
    .limit(CONSECUTIVE_MODULES)

  if (!recentScores || recentScores.length < CONSECUTIVE_MODULES) {
    return null
  }

  const scores = recentScores.map((r) => Number(r.score))
  const currentDifficulty = await getRecommendedDifficulty(studentId)

  // Check for advancement (all >= 80)
  if (scores.every((s) => s >= ADVANCE_THRESHOLD)) {
    const currentIdx = DIFFICULTY_ORDER.indexOf(currentDifficulty)
    if (currentIdx < DIFFICULTY_ORDER.length - 1) {
      const newDifficulty = DIFFICULTY_ORDER[currentIdx + 1]
      return {
        studentId,
        triggerType: 'advance',
        reason: `${CONSECUTIVE_MODULES} consecutive module scores ≥${ADVANCE_THRESHOLD}% (${scores.join(', ')})`,
        triggeredAt: new Date().toISOString(),
        currentDifficulty,
        newDifficulty,
      }
    }
  }

  // Check for review (all < 60)
  if (scores.every((s) => s < REVIEW_THRESHOLD)) {
    const currentIdx = DIFFICULTY_ORDER.indexOf(currentDifficulty)
    if (currentIdx > 0) {
      const newDifficulty = DIFFICULTY_ORDER[currentIdx - 1]
      return {
        studentId,
        triggerType: 'review',
        reason: `${CONSECUTIVE_MODULES} consecutive module scores <${REVIEW_THRESHOLD}% (${scores.join(', ')})`,
        triggeredAt: new Date().toISOString(),
        currentDifficulty,
        newDifficulty,
      }
    }
  }

  return null
}

/**
 * Get the recommended difficulty level for a student based on their history.
 * Defaults to 'grade_level' if no triggers exist.
 */
export async function getRecommendedDifficulty(
  studentId: string
): Promise<DifficultyLevel> {
  const supabase = await getClient()

  // Check for the most recent adaptive trigger in session_events
  const { data: events } = await supabase
    .from('session_events')
    .select('metadata')
    .eq('student_id', studentId)
    .eq('event_type', 'explanation_given') // We use this type for adaptive triggers
    .order('created_at', { ascending: false })
    .limit(1)

  if (events && events.length > 0) {
    const meta = events[0].metadata as { adaptiveTrigger?: AdaptiveTrigger } | null
    if (meta?.adaptiveTrigger?.newDifficulty) {
      return meta.adaptiveTrigger.newDifficulty
    }
  }

  return 'grade_level'
}

/**
 * Log an adaptive trigger to session_events for teacher visibility (AC-PROGRESS-03).
 */
export async function logAdaptiveTrigger(trigger: AdaptiveTrigger): Promise<void> {
  const supabase = await getClient()

  // Get an active session (or create one)
  const { data: session } = await supabase
    .from('sessions')
    .select('id')
    .eq('student_id', trigger.studentId)
    .is('ended_at', null)
    .order('started_at', { ascending: false })
    .limit(1)
    .single()

  const sessionId = session?.id
  if (!sessionId) return

  await supabase.from('session_events').insert({
    session_id: sessionId,
    student_id: trigger.studentId,
    event_type: 'explanation_given', // Repurpose for adaptive trigger logging
    metadata: { adaptiveTrigger: trigger },
  })
}
