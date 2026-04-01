import { describe, it, expect } from 'vitest'
import {
  getInitialOnboardingState,
  computeNextStep,
  isOnboardingComplete,
  TOTAL_STEPS,
} from '@/lib/auth/onboarding'

describe('Onboarding State', () => {
  it('starts with empty state and step 1', () => {
    const state = getInitialOnboardingState()
    expect(state.completedSteps).toEqual([])
    expect(state.nextStep).toBe(1)
    expect(state.data).toEqual({})
  })

  it('computes next step correctly from completed steps', () => {
    expect(computeNextStep([])).toBe(1)
    expect(computeNextStep([1])).toBe(2)
    expect(computeNextStep([1, 2])).toBe(3)
    expect(computeNextStep([1, 2, 3, 4])).toBe(5)
  })

  it('resumes from last completed step (partial completion)', () => {
    // Student completed grade + region, should resume at subjects
    const completedSteps = [1, 2]
    const nextStep = computeNextStep(completedSteps)
    expect(nextStep).toBe(3)
  })

  it('handles non-sequential completion', () => {
    // Skipped step 2 somehow
    expect(computeNextStep([1, 3])).toBe(2)
  })

  it('identifies when onboarding is complete', () => {
    expect(isOnboardingComplete([])).toBe(false)
    expect(isOnboardingComplete([1, 2])).toBe(false)
    expect(isOnboardingComplete([1, 2, 3, 4])).toBe(false)
    expect(isOnboardingComplete([1, 2, 3, 4, 5])).toBe(true)
  })

  it('total steps equals 5', () => {
    expect(TOTAL_STEPS).toBe(5)
  })
})
