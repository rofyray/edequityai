import { describe, it, expect, vi } from 'vitest'
import { calculateXP } from '@/lib/module-player/hints'

describe('Module Completion — XP Calculation', () => {
  it('awards full XP for 100% score', () => {
    expect(calculateXP(50, 100)).toBe(50)
  })

  it('awards proportional XP for partial score', () => {
    expect(calculateXP(50, 60)).toBe(30)
  })

  it('enforces 50% minimum XP', () => {
    expect(calculateXP(50, 20)).toBe(25) // 50% of 50
  })

  it('handles 0% score with minimum', () => {
    expect(calculateXP(100, 0)).toBe(50) // 50% of 100
  })

  it('handles large XP rewards', () => {
    expect(calculateXP(200, 75)).toBe(150)
  })
})

describe('Module Completion — Streak Logic', () => {
  function computeStreak(
    currentStreak: number,
    lastActive: string | null,
    today: string,
    yesterday: string
  ): { streakDays: number; streakUpdated: boolean } {
    let streakDays = currentStreak
    let streakUpdated = false

    if (!lastActive || lastActive === yesterday) {
      streakDays += 1
      streakUpdated = true
    } else if (lastActive < yesterday) {
      streakDays = 1
      streakUpdated = true
    }
    // If lastActive === today, no change

    return { streakDays, streakUpdated }
  }

  it('increments streak when last active was yesterday', () => {
    const result = computeStreak(5, '2026-03-29', '2026-03-30', '2026-03-29')
    expect(result.streakDays).toBe(6)
    expect(result.streakUpdated).toBe(true)
  })

  it('starts streak when no previous activity', () => {
    const result = computeStreak(0, null, '2026-03-30', '2026-03-29')
    expect(result.streakDays).toBe(1)
    expect(result.streakUpdated).toBe(true)
  })

  it('resets streak when gap is more than 1 day', () => {
    const result = computeStreak(10, '2026-03-27', '2026-03-30', '2026-03-29')
    expect(result.streakDays).toBe(1)
    expect(result.streakUpdated).toBe(true)
  })

  it('does not change streak when already active today', () => {
    const result = computeStreak(5, '2026-03-30', '2026-03-30', '2026-03-29')
    expect(result.streakDays).toBe(5)
    expect(result.streakUpdated).toBe(false)
  })
})
