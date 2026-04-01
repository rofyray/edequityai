import { describe, it, expect, vi, beforeEach } from 'vitest'

// Mock OpenAI embeddings
vi.mock('@/lib/ai/embeddings', () => ({
  generateEmbedding: vi.fn().mockResolvedValue(new Array(1536).fill(0.01)),
}))

// Mock Supabase server client
const mockRpc = vi.fn()
vi.mock('@/lib/supabase/server', () => ({
  createServiceRoleClient: vi.fn().mockResolvedValue({
    rpc: mockRpc,
  }),
}))

import { searchCurriculum } from '@/lib/ai/search'
import { generateEmbedding } from '@/lib/ai/embeddings'

describe('searchCurriculum', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('calls Supabase RPC with correct parameters', async () => {
    mockRpc.mockResolvedValueOnce({
      data: [
        {
          content_text: 'Adding fractions with unlike denominators',
          standard_code: '5.NF.1',
          topic_cluster: 'Number & Operations—Fractions',
          region: 'all',
          similarity: 0.89,
        },
      ],
      error: null,
    })

    const results = await searchCurriculum({
      queryText: 'how to add fractions',
      region: 'appalachia',
      subject: 'math',
      grade: 5,
      limit: 3,
    })

    expect(generateEmbedding).toHaveBeenCalledWith('how to add fractions')
    expect(mockRpc).toHaveBeenCalledWith('search_curriculum', {
      query_embedding: expect.any(Array),
      student_region: 'appalachia',
      search_subject: 'math',
      search_grade: 5,
      result_limit: 3,
    })

    expect(results).toHaveLength(1)
    expect(results[0].contentText).toBe('Adding fractions with unlike denominators')
    expect(results[0].standardCode).toBe('5.NF.1')
    expect(results[0].similarity).toBe(0.89)
  })

  it('uses default limit of 5', async () => {
    mockRpc.mockResolvedValueOnce({ data: [], error: null })

    await searchCurriculum({
      queryText: 'test',
      region: 'delta',
      subject: 'ela',
      grade: 3,
    })

    expect(mockRpc).toHaveBeenCalledWith(
      'search_curriculum',
      expect.objectContaining({ result_limit: 5 })
    )
  })

  it('returns empty array when no results', async () => {
    mockRpc.mockResolvedValueOnce({ data: [], error: null })

    const results = await searchCurriculum({
      queryText: 'nonexistent topic',
      region: 'tribal',
      subject: 'math',
      grade: 1,
    })

    expect(results).toEqual([])
  })

  it('throws on RPC error', async () => {
    mockRpc.mockResolvedValueOnce({
      data: null,
      error: { message: 'Function not found' },
    })

    await expect(
      searchCurriculum({
        queryText: 'test',
        region: 'all',
        subject: 'math',
        grade: 5,
      })
    ).rejects.toThrow('Curriculum search failed: Function not found')
  })
})
