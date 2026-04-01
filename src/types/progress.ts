export type DifficultyLevel = 'foundational' | 'grade_level' | 'advanced'
export type TrendDirection = 'improving' | 'declining' | 'stable'

export interface StandardMastery {
  standardCode: string
  subject: 'math' | 'ela'
  masteryPercentage: number
  dataPoints: number
  lastAssessedAt: string
  trend: TrendDirection
}

export interface AdaptiveTrigger {
  studentId: string
  triggerType: 'advance' | 'review'
  reason: string
  triggeredAt: string
  currentDifficulty: DifficultyLevel
  newDifficulty: DifficultyLevel
}

export interface AssessmentItem {
  question: string
  type: 'multiple-choice' | 'short-answer'
  options?: string[]
  correctAnswer: string
  distractors?: string[]
  standardCode: string
  hint: string
  difficulty: DifficultyLevel
}

export interface GenerateAssessmentRequest {
  subject: 'math' | 'ela'
  grade: number
  standardCode: string
  region: 'appalachia' | 'delta' | 'tribal'
  difficulty?: DifficultyLevel
}

export interface AssessmentSubmission {
  assessmentId: string
  answers: { itemIndex: number; answer: string }[]
}

export interface AssessmentResult {
  assessmentId: string
  score: number
  correct: number
  total: number
  masteryUpdated: boolean
  adaptiveTrigger?: AdaptiveTrigger | null
}

export interface ProgressReport {
  student: {
    id: string
    fullName: string
    grade: number
    region: string
    state: string
  }
  generatedAt: string
  modules: {
    subject: string
    completed: number
    total: number
    averageScore: number
  }[]
  mastery: StandardMastery[]
  recentActivity: {
    moduleTitle: string
    score: number
    completedAt: string
  }[]
  achievements: { label: string; earned: boolean }[]
}
