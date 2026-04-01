import OpenAI from 'openai'
import { STRUCTURED_MODEL } from '../ai/constants'
import { searchCurriculum } from '../ai/search'
import { getCulturalHook } from '../ingestion/cultural-variants'
import type { AssessmentItem, GenerateAssessmentRequest, DifficultyLevel } from '@/types/progress'
import type { Region } from '../ingestion/types'

const openai = new OpenAI()

const ASSESSMENT_SCHEMA = {
  name: 'assessment',
  strict: true,
  schema: {
    type: 'object' as const,
    properties: {
      items: {
        type: 'array' as const,
        items: {
          type: 'object' as const,
          properties: {
            question: { type: 'string' as const },
            type: { type: 'string' as const, enum: ['multiple-choice', 'short-answer'] },
            options: { type: 'array' as const, items: { type: 'string' as const } },
            correctAnswer: { type: 'string' as const },
            distractors: { type: 'array' as const, items: { type: 'string' as const } },
            hint: { type: 'string' as const },
          },
          required: ['question', 'type', 'correctAnswer', 'hint'] as const,
          additionalProperties: false,
        },
      },
    },
    required: ['items'] as const,
    additionalProperties: false,
  },
}

/**
 * Generate an assessment using GPT-4o structured output.
 * Returns 5+ items aligned to a specific curriculum standard.
 */
export async function generateAssessment(
  params: GenerateAssessmentRequest
): Promise<AssessmentItem[]> {
  const { subject, grade, standardCode, region, difficulty = 'grade_level' } = params

  // Get curriculum context via RAG
  const curriculumResults = await searchCurriculum({
    queryText: standardCode,
    subject,
    grade,
    region,
    limit: 5,
  })

  const curriculumContext = curriculumResults
    .map((r) => `[${r.standardCode}] ${r.contentText}`)
    .join('\n\n')

  const culturalHook = getCulturalHook(region as Region, subject, curriculumResults[0]?.topicCluster ?? 'General')

  const gradeLabel = grade === 0 ? 'Kindergarten' : `Grade ${grade}`
  const difficultyGuide = {
    foundational: 'below grade level, focusing on basic concepts',
    grade_level: 'at grade level, matching the standard expectations',
    advanced: 'above grade level, requiring deeper analysis and application',
  }

  const response = await openai.chat.completions.create({
    model: STRUCTURED_MODEL,
    response_format: {
      type: 'json_schema',
      json_schema: ASSESSMENT_SCHEMA,
    },
    messages: [
      {
        role: 'system',
        content: `You are an expert K-12 assessment creator. Generate assessment items that are culturally relevant, age-appropriate, and aligned to specific curriculum standards. ${culturalHook}`,
      },
      {
        role: 'user',
        content: `Generate exactly 5 assessment items for:
- Subject: ${subject.toUpperCase()}
- Grade: ${gradeLabel}
- Standard: ${standardCode}
- Difficulty: ${difficulty} (${difficultyGuide[difficulty]})
- Cultural context: ${region}

Curriculum content for reference:
${curriculumContext}

Requirements:
- Mix of multiple-choice (3-4 items) and short-answer (1-2 items)
- Multiple-choice items must have exactly 4 options
- Each item must include a helpful hint
- Use culturally appropriate names and contexts for the ${region} region
- Ensure mathematical/factual accuracy`,
      },
    ],
  })

  const content = response.choices[0]?.message?.content
  if (!content) throw new Error('No response from assessment generator')

  const parsed = JSON.parse(content) as { items: Omit<AssessmentItem, 'standardCode' | 'difficulty'>[] }

  // Enrich with standardCode and difficulty
  return parsed.items.map((item) => ({
    ...item,
    standardCode,
    difficulty,
  }))
}
