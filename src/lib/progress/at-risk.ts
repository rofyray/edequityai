import type { StudentStatusLevel } from '../dashboard/teacher-types'

const AT_RISK_THRESHOLD = 60
const EXCELLING_THRESHOLD = 80
const MIN_SCORES_FOR_STATUS = 3

/**
 * Determine a student's status based on their most recent module scores.
 * - All 3 recent scores < 60 → 'at-risk'
 * - All 3 recent scores >= 80 → 'excelling'
 * - Otherwise → 'on-track'
 * - < 3 scores → 'on-track' (insufficient data)
 */
export function determineStudentStatus(recentScores: number[]): StudentStatusLevel {
  if (recentScores.length < MIN_SCORES_FOR_STATUS) {
    return 'on-track'
  }

  const last3 = recentScores.slice(0, MIN_SCORES_FOR_STATUS)

  if (last3.every((s) => s < AT_RISK_THRESHOLD)) {
    return 'at-risk'
  }

  if (last3.every((s) => s >= EXCELLING_THRESHOLD)) {
    return 'excelling'
  }

  return 'on-track'
}
