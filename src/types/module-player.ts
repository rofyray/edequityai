export type ModulePhase = 'intro' | 'segment' | 'practice' | 'assessment' | 'complete'

export interface QuestionState {
  questionIndex: number
  hintLevel: number // 0=none, 1-3=hint levels, 4=answer revealed
  selectedAnswer: string | null
  isCorrect: boolean | null
  attempts: number
}

export interface PlayerSnapshot {
  moduleId: string
  phase: ModulePhase
  segmentIndex: number
  practiceStates: QuestionState[]
  assessmentStates: QuestionState[]
  score: number | null
  startedAt: string
}

export interface ModuleCompletionResponse {
  xpEarned: number
  xpTotal: number
  streakDays: number
  streakUpdated: boolean
}

export interface ExistingProgress {
  segmentIndex: number
  score: number | null
  completed: boolean
  xpEarned: number
  attempts: number
}
