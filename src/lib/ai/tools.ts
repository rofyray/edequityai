import type { ChatCompletionTool } from 'openai/resources/chat/completions'
import type { StudentContext } from '@/types/tutor'
import { searchCurriculum } from './search'
import { getCulturalHook } from '../ingestion/cultural-variants'

/**
 * OpenAI function-calling tool definitions for the NAANO tutor agent.
 * These match PRD Section 9.1 exactly.
 */
export const TUTOR_TOOLS: ChatCompletionTool[] = [
  {
    type: 'function',
    function: {
      name: 'search_curriculum',
      description: 'Search the curriculum database for content matching the student query. Use this before answering any subject-matter question.',
      strict: true,
      parameters: {
        type: 'object',
        properties: {
          query: { type: 'string', description: 'The semantic search query' },
          subject: { type: 'string', enum: ['math', 'ela'] },
          grade: { type: 'integer' },
          region: { anyOf: [{ type: 'string', enum: ['appalachia', 'delta', 'tribal', 'all'] }, { type: 'null' }] },
        },
        required: ['query', 'subject', 'grade', 'region'],
        additionalProperties: false,
      },
    },
  },
  {
    type: 'function',
    function: {
      name: 'generate_questions',
      description: 'Generate practice questions aligned to a specific curriculum standard.',
      strict: true,
      parameters: {
        type: 'object',
        properties: {
          standardCode: { type: 'string' },
          count: { type: 'integer' },
          difficulty: { anyOf: [{ type: 'string', enum: ['foundational', 'grade_level', 'advanced'] }, { type: 'null' }] },
          region: { type: 'string', enum: ['appalachia', 'delta', 'tribal'] },
        },
        required: ['standardCode', 'count', 'difficulty', 'region'],
        additionalProperties: false,
      },
    },
  },
  {
    type: 'function',
    function: {
      name: 'track_progress',
      description: 'Record a learning interaction or assessment result to the progress database.',
      strict: true,
      parameters: {
        type: 'object',
        properties: {
          studentId: { type: 'string' },
          eventType: { type: 'string', enum: ['explanation_given', 'question_attempted', 'hint_used', 'correct_answer', 'module_complete'] },
          standardCode: { anyOf: [{ type: 'string' }, { type: 'null' }] },
          metadata: { anyOf: [{ type: 'string', description: 'JSON-encoded metadata object' }, { type: 'null' }] },
        },
        required: ['studentId', 'eventType', 'standardCode', 'metadata'],
        additionalProperties: false,
      },
    },
  },
  {
    type: 'function',
    function: {
      name: 'get_student_progress',
      description: 'Retrieve the current student progress to personalize the tutoring session.',
      strict: true,
      parameters: {
        type: 'object',
        properties: {
          studentId: { type: 'string' },
          subject: { anyOf: [{ type: 'string', enum: ['math', 'ela'] }, { type: 'null' }] },
        },
        required: ['studentId', 'subject'],
        additionalProperties: false,
      },
    },
  },
]

// ============================================
// Tool executor — dispatches by name
// ============================================

export async function executeTool(
  name: string,
  args: Record<string, unknown>,
  student: StudentContext
): Promise<string> {
  switch (name) {
    case 'search_curriculum':
      return executeSearchCurriculum(args, student)
    case 'generate_questions':
      return executeGenerateQuestions(args, student)
    case 'track_progress':
      return executeTrackProgress(args)
    case 'get_student_progress':
      return executeGetStudentProgress(args)
    default:
      return JSON.stringify({ error: `Unknown tool: ${name}` })
  }
}

async function executeSearchCurriculum(
  args: Record<string, unknown>,
  student: StudentContext
): Promise<string> {
  const results = await searchCurriculum({
    queryText: args.query as string,
    subject: (args.subject as 'math' | 'ela') ?? student.subject,
    grade: (args.grade as number) ?? student.grade,
    region: (args.region as string) ?? student.region,
    limit: 5,
  })

  if (results.length === 0) {
    return JSON.stringify({
      found: false,
      message: 'No relevant curriculum content found for this query.',
    })
  }

  return JSON.stringify({
    found: true,
    results: results.map((r) => ({
      content: r.contentText,
      standardCode: r.standardCode,
      topic: r.topicCluster,
      similarity: Math.round(r.similarity * 100) / 100,
    })),
  })
}

async function executeGenerateQuestions(
  args: Record<string, unknown>,
  student: StudentContext
): Promise<string> {
  const standardCode = args.standardCode as string
  const count = Math.min((args.count as number) ?? 3, 10)
  const region = (args.region as string) ?? student.region
  const difficulty = (args.difficulty as string) ?? 'grade_level'

  // Search for curriculum content related to this standard
  const results = await searchCurriculum({
    queryText: standardCode,
    subject: student.subject,
    grade: student.grade,
    region,
    limit: 3,
  })

  const culturalHook = getCulturalHook(
    region as 'appalachia' | 'delta' | 'tribal',
    student.subject,
    results[0]?.topicCluster ?? 'General'
  )

  return JSON.stringify({
    standardCode,
    difficulty,
    count,
    culturalContext: culturalHook,
    curriculumContent: results.map((r) => r.contentText).join('\n'),
    instruction: `Generate ${count} ${difficulty}-level practice questions for standard ${standardCode}. Use the cultural context and curriculum content provided. Return as a numbered list with answers.`,
  })
}

async function executeTrackProgress(args: Record<string, unknown>): Promise<string> {
  const { createServiceRoleClient } = await import('../supabase/server')
  const supabase = await createServiceRoleClient()

  // Create a session if none exists for today
  const studentId = args.studentId as string
  const { data: existingSession } = await supabase
    .from('sessions')
    .select('id')
    .eq('student_id', studentId)
    .is('ended_at', null)
    .order('started_at', { ascending: false })
    .limit(1)
    .single()

  let sessionId = existingSession?.id
  if (!sessionId) {
    const { data: newSession } = await supabase
      .from('sessions')
      .insert({ student_id: studentId })
      .select('id')
      .single()
    sessionId = newSession?.id
  }

  if (!sessionId) {
    return JSON.stringify({ success: false, error: 'Could not create session' })
  }

  const { error } = await supabase.from('session_events').insert({
    session_id: sessionId,
    student_id: studentId,
    event_type: args.eventType as string,
    standard_code: (args.standardCode as string) ?? null,
    metadata: typeof args.metadata === 'string' ? JSON.parse(args.metadata) : (args.metadata as Record<string, unknown>) ?? {},
  })

  if (error) {
    return JSON.stringify({ success: false, error: error.message })
  }

  return JSON.stringify({ success: true, eventType: args.eventType })
}

async function executeGetStudentProgress(args: Record<string, unknown>): Promise<string> {
  const { createServiceRoleClient } = await import('../supabase/server')
  const supabase = await createServiceRoleClient()

  const studentId = args.studentId as string
  const subject = args.subject as string | undefined

  // Get module completion
  let progressQuery = supabase
    .from('student_progress')
    .select('module_id, completed, score, xp_earned')
    .eq('student_id', studentId)

  const { data: progress } = await progressQuery

  // Get mastery by standard
  let masteryQuery = supabase
    .from('standard_mastery')
    .select('standard_code, subject, mastery_percentage, data_points')
    .eq('student_id', studentId)

  if (subject) {
    masteryQuery = masteryQuery.eq('subject', subject)
  }

  const { data: mastery } = await masteryQuery

  const completed = progress?.filter((p) => p.completed).length ?? 0
  const totalXP = progress?.reduce((sum, p) => sum + (p.xp_earned ?? 0), 0) ?? 0

  return JSON.stringify({
    modulesCompleted: completed,
    totalModules: progress?.length ?? 0,
    totalXP,
    mastery: mastery?.map((m) => ({
      standard: m.standard_code,
      subject: m.subject,
      percent: m.mastery_percentage,
      dataPoints: m.data_points,
    })) ?? [],
  })
}
