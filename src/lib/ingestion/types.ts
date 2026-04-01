import { z } from 'zod'

// ============================================
// Module Content JSONB shape (stored in modules.content)
// ============================================

export interface ModuleIntro {
  title: string
  text: string
  culturalHook?: string
}

export interface ModuleSegment {
  index: number
  title: string
  text: string
  keyVocabulary: string[]
  example?: string
}

export interface PracticeQuestion {
  index: number
  question: string
  type: 'multiple-choice' | 'short-answer' | 'fill-blank'
  options?: string[]
  correctAnswer: string
  hint: string
  explanation: string
  standardCode: string
}

export interface AssessmentQuestion {
  question: string
  type: 'multiple-choice' | 'short-answer' | 'fill-blank'
  options?: string[]
  correctAnswer: string
  standardCode: string
}

export interface ModuleContent {
  intro: ModuleIntro
  segments: ModuleSegment[]
  practice: PracticeQuestion[]
  assessment: {
    questions: AssessmentQuestion[]
  }
}

// ============================================
// Seed / Catalog types
// ============================================

export type Subject = 'math' | 'ela'
export type GradeBand = 'k5' | '6-8' | '9-12'
export type Region = 'appalachia' | 'delta' | 'tribal'
export type LaunchPhase = 'mvp' | 'phase2' | 'phase3'

export interface ModuleSeed {
  slug: string
  title: string
  description: string
  subject: Subject
  grade: number // K=0, 1-12
  gradeBand: GradeBand
  topicCluster: string
  standardCodes: string[]
  content: ModuleContent
}

// ============================================
// Curriculum chunk (pre-embedding row for curriculum_content)
// ============================================

export interface CurriculumChunk {
  text: string
  metadata: {
    moduleSlug: string
    segmentIndex: number
    standardCodes: string[]
    topicCluster: string
    subject: Subject
    grade: number
    gradeBand: GradeBand
  }
}

// ============================================
// RAG search types
// ============================================

export interface SearchCurriculumParams {
  queryText: string
  region: string
  subject: Subject
  grade: number
  limit?: number
}

export interface SearchCurriculumResult {
  contentText: string
  standardCode: string | null
  topicCluster: string
  region: string
  similarity: number
}

// ============================================
// API response types
// ============================================

export interface ModuleListItem {
  id: string
  slug: string
  title: string
  description: string | null
  subject: Subject
  grade: number
  gradeBand: GradeBand
  region: string
  topicCluster: string
  segmentCount: number
  estimatedMinutes: number
  xpReward: number
  isPlaceholder: boolean
}

export interface ModuleDetail extends ModuleListItem {
  standardCodes: string[]
  content: ModuleContent | null
  state: string
  launchPhase: LaunchPhase
}

// ============================================
// Zod schemas for API validation
// ============================================

export const modulesQuerySchema = z.object({
  grade: z.coerce.number().int().min(0).max(12).optional(),
  subject: z.enum(['math', 'ela']).optional(),
  region: z.enum(['appalachia', 'delta', 'tribal', 'all']).optional(),
  gradeBand: z.enum(['k5', '6-8', '9-12']).optional(),
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(50).default(20),
})

export const moduleIdSchema = z.object({
  id: z.string().uuid(),
})
