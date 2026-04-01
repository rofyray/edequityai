import { describe, it, expect, vi } from 'vitest'

// Mock supabase
const mockSelect = vi.fn()
const mockEq = vi.fn()
const mockIn = vi.fn()
const mockGte = vi.fn()

vi.mock('@/lib/supabase/server', () => ({
  createServiceRoleClient: vi.fn().mockResolvedValue({
    from: vi.fn().mockReturnValue({
      select: mockSelect,
      upsert: vi.fn().mockResolvedValue({ error: null }),
    }),
  }),
}))

// Chain mocks
mockSelect.mockReturnValue({ eq: mockEq })
mockEq.mockReturnValue({ eq: mockEq, in: mockIn, gte: mockGte, order: vi.fn().mockReturnValue({ data: [] }) })
mockIn.mockReturnValue({ gte: mockGte })

import { calculateStandardMastery } from '@/lib/progress/mastery'

describe('calculateStandardMastery', () => {
  it('returns 0% with no data', async () => {
    mockGte.mockResolvedValueOnce({ data: [] })

    const result = await calculateStandardMastery('student-1', '5.NF.1', 7)
    expect(result.percentage).toBe(0)
    expect(result.dataPoints).toBe(0)
  })

  it('calculates correct percentage from events', async () => {
    mockGte.mockResolvedValueOnce({
      data: [
        { event_type: 'correct_answer' },
        { event_type: 'correct_answer' },
        { event_type: 'incorrect_answer' },
        { event_type: 'correct_answer' },
      ],
    })

    const result = await calculateStandardMastery('student-1', '5.NF.1', 7)
    expect(result.percentage).toBe(75) // 3/4
    expect(result.dataPoints).toBe(4)
  })

  it('returns 100% when all answers correct', async () => {
    mockGte.mockResolvedValueOnce({
      data: [
        { event_type: 'correct_answer' },
        { event_type: 'correct_answer' },
      ],
    })

    const result = await calculateStandardMastery('student-1', '5.NF.1', 7)
    expect(result.percentage).toBe(100)
  })
})
