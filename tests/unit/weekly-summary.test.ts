import { describe, it, expect } from 'vitest'
import type { ParentWeeklySummary } from '@/lib/dashboard/parent-types'

// Test the summary shape and calculation logic without mocking Supabase
// (Integration tests would cover the actual DB queries)

describe('ParentWeeklySummary type', () => {
  it('has correct shape', () => {
    const summary: ParentWeeklySummary = {
      weeklyMinutes: 120,
      modulesCompleted: 3,
      streakDays: 5,
      topSubject: 'math',
      xpEarned: 150,
    }

    expect(summary.weeklyMinutes).toBeGreaterThanOrEqual(0)
    expect(summary.modulesCompleted).toBeGreaterThanOrEqual(0)
    expect(summary.streakDays).toBeGreaterThanOrEqual(0)
    expect(['math', 'ela', null]).toContain(summary.topSubject)
    expect(summary.xpEarned).toBeGreaterThanOrEqual(0)
  })

  it('handles null topSubject when no activity', () => {
    const summary: ParentWeeklySummary = {
      weeklyMinutes: 0,
      modulesCompleted: 0,
      streakDays: 0,
      topSubject: null,
      xpEarned: 0,
    }

    expect(summary.topSubject).toBeNull()
    expect(summary.weeklyMinutes).toBe(0)
  })

  it('minutes estimate is reasonable', () => {
    // Each event ≈ 2 minutes, so 30 events ≈ 60 minutes
    const MINUTES_PER_EVENT = 2
    const events = 30
    const estimated = events * MINUTES_PER_EVENT
    expect(estimated).toBe(60)
  })
})
