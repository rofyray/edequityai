import { describe, it, expect, vi } from 'vitest'
import { TUTOR_TOOLS, executeTool } from '@/lib/ai/tools'
import type { StudentContext } from '@/types/tutor'

// Mock search
vi.mock('@/lib/ai/search', () => ({
  searchCurriculum: vi.fn().mockResolvedValue([
    {
      contentText: 'Adding fractions with unlike denominators requires a common denominator.',
      standardCode: '5.NF.1',
      topicCluster: 'Number & Operations—Fractions',
      region: 'all',
      similarity: 0.89,
    },
  ]),
}))

// Mock supabase
vi.mock('@/lib/supabase/server', () => ({
  createServiceRoleClient: vi.fn().mockResolvedValue({
    from: vi.fn().mockReturnValue({
      select: vi.fn().mockReturnValue({
        eq: vi.fn().mockReturnValue({
          is: vi.fn().mockReturnValue({
            order: vi.fn().mockReturnValue({
              limit: vi.fn().mockReturnValue({
                single: vi.fn().mockResolvedValue({ data: { id: 'session-1' } }),
              }),
            }),
          }),
          single: vi.fn().mockResolvedValue({ data: null }),
        }),
      }),
      insert: vi.fn().mockReturnValue({
        select: vi.fn().mockReturnValue({
          single: vi.fn().mockResolvedValue({ data: { id: 'new-session' } }),
        }),
      }),
    }),
  }),
}))

const student: StudentContext = {
  id: 'student-123',
  grade: 5,
  region: 'appalachia',
  subject: 'math',
  fullName: 'Jaylen Carter',
}

describe('TUTOR_TOOLS', () => {
  it('defines exactly 4 tools', () => {
    expect(TUTOR_TOOLS).toHaveLength(4)
  })

  it('has correct tool names', () => {
    const names = TUTOR_TOOLS.map((t) => {
      const fn = t as { type: string; function: { name: string; strict?: boolean } }
      return fn.function.name
    })
    expect(names).toContain('search_curriculum')
    expect(names).toContain('generate_questions')
    expect(names).toContain('track_progress')
    expect(names).toContain('get_student_progress')
  })

  it('all tools have strict mode enabled', () => {
    for (const tool of TUTOR_TOOLS) {
      const fn = tool as { type: string; function: { name: string; strict?: boolean } }
      expect(fn.function.strict).toBe(true)
    }
  })

  it('all tools are type "function"', () => {
    for (const tool of TUTOR_TOOLS) {
      expect(tool.type).toBe('function')
    }
  })
})

describe('executeTool', () => {
  it('dispatches search_curriculum and returns results', async () => {
    const result = await executeTool(
      'search_curriculum',
      { query: 'adding fractions', subject: 'math', grade: 5 },
      student
    )
    const parsed = JSON.parse(result)
    expect(parsed.found).toBe(true)
    expect(parsed.results).toHaveLength(1)
    expect(parsed.results[0].standardCode).toBe('5.NF.1')
  })

  it('dispatches generate_questions with cultural context', async () => {
    const result = await executeTool(
      'generate_questions',
      { standardCode: '5.NF.1', count: 3, region: 'appalachia' },
      student
    )
    const parsed = JSON.parse(result)
    expect(parsed.standardCode).toBe('5.NF.1')
    expect(parsed.count).toBe(3)
    expect(parsed.culturalContext).toBeTruthy()
  })

  it('returns error for unknown tool', async () => {
    const result = await executeTool('nonexistent_tool', {}, student)
    const parsed = JSON.parse(result)
    expect(parsed.error).toContain('Unknown tool')
  })
})
