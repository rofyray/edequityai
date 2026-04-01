import { describe, it, expect, vi, beforeEach } from 'vitest'

// Mock the OpenAI module
vi.mock('openai', () => {
  const mockCreate = vi.fn()
  return {
    default: class MockOpenAI {
      embeddings = { create: mockCreate }
    },
    __mockCreate: mockCreate,
  }
})

import { generateEmbedding, generateEmbeddings } from '@/lib/ai/embeddings'

function makeFakeResponse(count: number) {
  return {
    data: Array.from({ length: count }, (_, i) => ({
      index: i,
      embedding: new Array(1536).fill(0.01 * (i + 1)),
    })),
  }
}

describe('generateEmbedding', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('returns a 1536-dimension vector', async () => {
    const { __mockCreate } = await import('openai') as unknown as { __mockCreate: ReturnType<typeof vi.fn> }
    __mockCreate.mockResolvedValueOnce(makeFakeResponse(1))

    const result = await generateEmbedding('test text')
    expect(result).toHaveLength(1536)
    expect(__mockCreate).toHaveBeenCalledWith(
      expect.objectContaining({
        model: 'text-embedding-3-small',
        input: ['test text'],
        dimensions: 1536,
      })
    )
  })
})

describe('generateEmbeddings', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('returns embeddings in the same order as input', async () => {
    const { __mockCreate } = await import('openai') as unknown as { __mockCreate: ReturnType<typeof vi.fn> }
    __mockCreate.mockResolvedValueOnce(makeFakeResponse(3))

    const results = await generateEmbeddings(['a', 'b', 'c'])
    expect(results).toHaveLength(3)
    // First embedding should have value 0.01, second 0.02, third 0.03
    expect(results[0][0]).toBeCloseTo(0.01)
    expect(results[1][0]).toBeCloseTo(0.02)
    expect(results[2][0]).toBeCloseTo(0.03)
  })

  it('handles empty input', async () => {
    const results = await generateEmbeddings([])
    expect(results).toEqual([])
  })

  it('batches large inputs into groups of 100', async () => {
    const { __mockCreate } = await import('openai') as unknown as { __mockCreate: ReturnType<typeof vi.fn> }
    // 150 texts = 2 batches (100 + 50)
    __mockCreate
      .mockResolvedValueOnce(makeFakeResponse(100))
      .mockResolvedValueOnce(makeFakeResponse(50))

    const texts = Array.from({ length: 150 }, (_, i) => `text-${i}`)
    const results = await generateEmbeddings(texts)

    expect(results).toHaveLength(150)
    expect(__mockCreate).toHaveBeenCalledTimes(2)
  })
})
