import type { OnboardingState } from './types'

export const ONBOARDING_STEPS = [
  { step: 1, label: 'Grade', description: 'What grade are you in?' },
  { step: 2, label: 'Region', description: 'Where are you from?' },
  { step: 3, label: 'Subjects', description: 'What do you want to learn?' },
  { step: 4, label: 'Voice', description: 'How should NAANO talk to you?' },
  { step: 5, label: 'Offline', description: 'Download lessons for offline?' },
] as const

export const TOTAL_STEPS = ONBOARDING_STEPS.length

export function getInitialOnboardingState(): OnboardingState {
  return {
    completedSteps: [],
    nextStep: 1,
    data: {},
  }
}

export function computeNextStep(completedSteps: number[]): number {
  for (let i = 1; i <= TOTAL_STEPS; i++) {
    if (!completedSteps.includes(i)) return i
  }
  return TOTAL_STEPS + 1 // All complete
}

export function isOnboardingComplete(completedSteps: number[]): boolean {
  return completedSteps.length >= TOTAL_STEPS
}
