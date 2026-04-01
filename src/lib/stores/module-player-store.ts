'use client'

import { create } from 'zustand'
import type { ModuleContent, PracticeQuestion, AssessmentQuestion } from '../ingestion/types'
import type {
  ModulePhase,
  QuestionState,
  PlayerSnapshot,
  ModuleCompletionResponse,
  ExistingProgress,
} from '@/types/module-player'
import { checkAnswer, calculateScore, calculateXP } from '../module-player/hints'
import { logModuleEvent } from '../module-player/log-event'

interface ModulePlayerState {
  // Module data
  moduleId: string
  moduleSlug: string
  moduleContent: ModuleContent | null
  xpReward: number
  sessionId: string

  // Navigation
  phase: ModulePhase
  segmentIndex: number
  maxSegmentReached: number

  // Practice
  practiceIndex: number
  practiceStates: QuestionState[]

  // Assessment
  assessmentIndex: number
  assessmentStates: QuestionState[]

  // Results
  score: number | null
  completionResult: ModuleCompletionResponse | null
  isSaving: boolean
  error: string | null

  // Actions
  initialize: (
    moduleId: string,
    slug: string,
    content: ModuleContent,
    xpReward: number,
    sessionId: string,
    existing?: ExistingProgress
  ) => void
  nextStep: () => void
  prevStep: () => void
  selectAnswer: (index: number, answer: string, isPractice: boolean) => void
  submitAnswer: (index: number, isPractice: boolean) => void
  requestHint: (index: number) => void
  completeModule: () => Promise<void>
  getSnapshot: () => PlayerSnapshot
}

function initQuestionStates(count: number): QuestionState[] {
  return Array.from({ length: count }, (_, i) => ({
    questionIndex: i,
    hintLevel: 0,
    selectedAnswer: null,
    isCorrect: null,
    attempts: 0,
  }))
}

export const useModulePlayerStore = create<ModulePlayerState>((set, get) => ({
  moduleId: '',
  moduleSlug: '',
  moduleContent: null,
  xpReward: 50,
  sessionId: '',
  phase: 'intro',
  segmentIndex: 0,
  maxSegmentReached: 0,
  practiceIndex: 0,
  practiceStates: [],
  assessmentIndex: 0,
  assessmentStates: [],
  score: null,
  completionResult: null,
  isSaving: false,
  error: null,

  initialize: (moduleId, slug, content, xpReward, sessionId, existing) => {
    const resumeSegment = existing?.segmentIndex ?? 0
    set({
      moduleId,
      moduleSlug: slug,
      moduleContent: content,
      xpReward,
      sessionId,
      phase: existing?.completed ? 'complete' : 'intro',
      segmentIndex: resumeSegment,
      maxSegmentReached: resumeSegment,
      practiceIndex: 0,
      practiceStates: initQuestionStates(content.practice.length),
      assessmentIndex: 0,
      assessmentStates: initQuestionStates(content.assessment.questions.length),
      score: existing?.score ?? null,
      completionResult: null,
      isSaving: false,
      error: null,
    })
  },

  nextStep: () => {
    const state = get()
    const content = state.moduleContent
    if (!content) return

    switch (state.phase) {
      case 'intro':
        set({ phase: 'segment', segmentIndex: 0 })
        break

      case 'segment': {
        const nextSeg = state.segmentIndex + 1
        if (nextSeg < content.segments.length) {
          const maxReached = Math.max(state.maxSegmentReached, nextSeg)
          set({ segmentIndex: nextSeg, maxSegmentReached: maxReached })
          logModuleEvent(state.moduleId, 'segment_complete', undefined, {
            segmentIndex: state.segmentIndex,
          })
        } else {
          // All segments done — move to practice
          set({ phase: 'practice', practiceIndex: 0 })
          logModuleEvent(state.moduleId, 'segment_complete', undefined, {
            segmentIndex: state.segmentIndex,
          })
        }
        break
      }

      case 'practice': {
        const nextQ = state.practiceIndex + 1
        if (nextQ < content.practice.length) {
          set({ practiceIndex: nextQ })
        } else {
          set({ phase: 'assessment', assessmentIndex: 0 })
        }
        break
      }

      case 'assessment': {
        const nextQ = state.assessmentIndex + 1
        if (nextQ < content.assessment.questions.length) {
          set({ assessmentIndex: nextQ })
        } else {
          // Assessment done — trigger completion
          get().completeModule()
        }
        break
      }

      default:
        break
    }
  },

  prevStep: () => {
    const state = get()
    switch (state.phase) {
      case 'segment':
        if (state.segmentIndex > 0) {
          set({ segmentIndex: state.segmentIndex - 1 })
        } else {
          set({ phase: 'intro' })
        }
        break

      case 'practice':
        if (state.practiceIndex > 0) {
          set({ practiceIndex: state.practiceIndex - 1 })
        } else {
          // Go back to last segment
          const lastSeg = (state.moduleContent?.segments.length ?? 1) - 1
          set({ phase: 'segment', segmentIndex: lastSeg })
        }
        break

      case 'assessment':
        if (state.assessmentIndex > 0) {
          set({ assessmentIndex: state.assessmentIndex - 1 })
        }
        break

      default:
        break
    }
  },

  selectAnswer: (index, answer, isPractice) => {
    const stateKey = isPractice ? 'practiceStates' : 'assessmentStates'
    const states = [...get()[stateKey]]
    states[index] = { ...states[index], selectedAnswer: answer }
    set({ [stateKey]: states } as Partial<ModulePlayerState>)
  },

  submitAnswer: (index, isPractice) => {
    const state = get()
    const stateKey = isPractice ? 'practiceStates' : 'assessmentStates'
    const states = [...state[stateKey]]
    const qs = states[index]
    if (!qs.selectedAnswer) return

    const content = state.moduleContent
    if (!content) return

    const question: PracticeQuestion | AssessmentQuestion = isPractice
      ? content.practice[index]
      : content.assessment.questions[index]

    const correct = checkAnswer(qs.selectedAnswer, question.correctAnswer)
    states[index] = {
      ...qs,
      isCorrect: correct,
      attempts: qs.attempts + 1,
    }
    set({ [stateKey]: states } as Partial<ModulePlayerState>)

    // Log event
    const standardCode = question.standardCode
    logModuleEvent(
      state.moduleId,
      correct ? 'correct_answer' : 'incorrect_answer',
      standardCode,
      { questionIndex: index, isPractice, attempts: qs.attempts + 1 }
    )
    logModuleEvent(state.moduleId, 'question_attempted', standardCode, {
      questionIndex: index,
      isPractice,
    })
  },

  requestHint: (index) => {
    const state = get()
    const states = [...state.practiceStates]
    const qs = states[index]
    if (qs.hintLevel >= 4) return

    states[index] = { ...qs, hintLevel: qs.hintLevel + 1 }
    set({ practiceStates: states })

    const question = state.moduleContent?.practice[index]
    logModuleEvent(state.moduleId, 'hint_used', question?.standardCode, {
      questionIndex: index,
      hintLevel: qs.hintLevel + 1,
    })
  },

  completeModule: async () => {
    const state = get()
    if (state.isSaving) return
    set({ isSaving: true, error: null })

    // Calculate score from practice + assessment
    const practiceCorrect = state.practiceStates.filter((q) => q.isCorrect === true).length
    const assessmentCorrect = state.assessmentStates.filter((q) => q.isCorrect === true).length
    const totalQuestions = state.practiceStates.length + state.assessmentStates.length
    const scorePercent = calculateScore(practiceCorrect + assessmentCorrect, totalQuestions)

    try {
      const response = await fetch('/api/module/complete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          moduleId: state.moduleId,
          score: scorePercent,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to complete module')
      }

      const result: ModuleCompletionResponse = await response.json()
      set({
        phase: 'complete',
        score: scorePercent,
        completionResult: result,
        isSaving: false,
      })
    } catch (err) {
      set({
        error: err instanceof Error ? err.message : 'Failed to save completion',
        isSaving: false,
      })
    }
  },

  getSnapshot: () => {
    const state = get()
    return {
      moduleId: state.moduleId,
      phase: state.phase,
      segmentIndex: state.segmentIndex,
      practiceStates: state.practiceStates,
      assessmentStates: state.assessmentStates,
      score: state.score,
      startedAt: new Date().toISOString(),
    }
  },
}))
