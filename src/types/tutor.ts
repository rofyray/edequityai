// ============================================
// Core tutor types
// ============================================

export type TutorRegion = 'appalachia' | 'delta' | 'tribal'
export type TutorSubject = 'math' | 'ela'

export interface Citation {
  standardCode: string
  snippet: string
}

export interface TutorMessage {
  role: 'user' | 'assistant'
  content: string
  citations?: Citation[]
  timestamp: string
}

export interface StudentContext {
  id: string
  grade: number
  region: TutorRegion
  subject: TutorSubject
  fullName: string
}

// ============================================
// SSE event types (server → client)
// ============================================

export interface SSEDeltaEvent {
  type: 'delta'
  content: string
}

export interface SSEToolEvent {
  type: 'tool_start' | 'tool_end'
  name: string
}

export interface SSEDoneEvent {
  type: 'done'
  citations?: Citation[]
  conversationId: string
}

export interface SSEErrorEvent {
  type: 'error'
  message: string
}

export type SSEEvent = SSEDeltaEvent | SSEToolEvent | SSEDoneEvent | SSEErrorEvent

// ============================================
// API request/response types
// ============================================

export interface TutorAskRequest {
  message: string
  conversationId?: string
  subject: TutorSubject
}

// ============================================
// Tool parameter types (OpenAI function calling)
// ============================================

export interface SearchCurriculumToolParams {
  query: string
  subject: TutorSubject
  grade: number
  region?: TutorRegion
}

export interface GenerateQuestionsToolParams {
  standardCode: string
  count: number
  difficulty: 'foundational' | 'grade_level' | 'advanced'
  region: TutorRegion
}

export interface TrackProgressToolParams {
  studentId: string
  eventType: 'explanation_given' | 'question_attempted' | 'hint_used' | 'correct_answer' | 'module_complete'
  standardCode?: string
  metadata?: Record<string, unknown>
}

export interface GetStudentProgressToolParams {
  studentId: string
  subject?: TutorSubject
}
