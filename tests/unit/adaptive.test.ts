import { describe, it, expect } from 'vitest'
import type { DifficultyLevel } from '@/types/progress'

// Test the adaptive difficulty logic directly (without DB)
function checkTrigger(
  scores: number[],
  currentDifficulty: DifficultyLevel
): { type: 'advance' | 'review'; newDifficulty: DifficultyLevel } | null {
  const ADVANCE_THRESHOLD = 80
  const REVIEW_THRESHOLD = 60
  const DIFFICULTY_ORDER: DifficultyLevel[] = ['foundational', 'grade_level', 'advanced']

  if (scores.length < 3) return null

  const last3 = scores.slice(-3)

  if (last3.every((s) => s >= ADVANCE_THRESHOLD)) {
    const idx = DIFFICULTY_ORDER.indexOf(currentDifficulty)
    if (idx < DIFFICULTY_ORDER.length - 1) {
      return { type: 'advance', newDifficulty: DIFFICULTY_ORDER[idx + 1] }
    }
  }

  if (last3.every((s) => s < REVIEW_THRESHOLD)) {
    const idx = DIFFICULTY_ORDER.indexOf(currentDifficulty)
    if (idx > 0) {
      return { type: 'review', newDifficulty: DIFFICULTY_ORDER[idx - 1] }
    }
  }

  return null
}

describe('Adaptive Difficulty Logic', () => {
  it('triggers advance after 3 consecutive scores >= 80', () => {
    const result = checkTrigger([85, 90, 82], 'grade_level')
    expect(result).not.toBeNull()
    expect(result!.type).toBe('advance')
    expect(result!.newDifficulty).toBe('advanced')
  })

  it('triggers review after 3 consecutive scores < 60', () => {
    const result = checkTrigger([45, 50, 55], 'grade_level')
    expect(result).not.toBeNull()
    expect(result!.type).toBe('review')
    expect(result!.newDifficulty).toBe('foundational')
  })

  it('returns null for mixed scores', () => {
    const result = checkTrigger([85, 50, 90], 'grade_level')
    expect(result).toBeNull()
  })

  it('returns null with fewer than 3 scores', () => {
    const result = checkTrigger([90, 85], 'grade_level')
    expect(result).toBeNull()
  })

  it('does not advance beyond advanced', () => {
    const result = checkTrigger([90, 95, 88], 'advanced')
    expect(result).toBeNull()
  })

  it('does not review below foundational', () => {
    const result = checkTrigger([30, 40, 25], 'foundational')
    expect(result).toBeNull()
  })

  it('advances from foundational to grade_level', () => {
    const result = checkTrigger([85, 80, 90], 'foundational')
    expect(result!.type).toBe('advance')
    expect(result!.newDifficulty).toBe('grade_level')
  })

  it('reviews from advanced to grade_level', () => {
    const result = checkTrigger([40, 50, 30], 'advanced')
    expect(result!.type).toBe('review')
    expect(result!.newDifficulty).toBe('grade_level')
  })
})
