import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'

// Mock Supabase
const mockSelect = vi.fn()
const mockEq = vi.fn()
const mockIn = vi.fn()
const mockOrder = vi.fn()
const mockRange = vi.fn()
const mockSingle = vi.fn()
const mockGetUser = vi.fn()

const chainMock = () => ({
  select: mockSelect,
  eq: mockEq,
  in: mockIn,
  order: mockOrder,
  range: mockRange,
  single: mockSingle,
})

vi.mock('@/lib/supabase/server', () => ({
  createServerSupabaseClient: vi.fn().mockResolvedValue({
    auth: { getUser: mockGetUser },
    from: vi.fn().mockReturnValue(chainMock()),
  }),
}))

// We need to re-mock chain methods to return themselves for chaining
beforeEach(() => {
  vi.clearAllMocks()

  mockSelect.mockReturnValue({
    eq: mockEq,
    in: mockIn,
    order: mockOrder,
    range: mockRange,
  })
  mockEq.mockReturnValue({
    eq: mockEq,
    in: mockIn,
    order: mockOrder,
    range: mockRange,
  })
  mockIn.mockReturnValue({
    eq: mockEq,
    in: mockIn,
    order: mockOrder,
    range: mockRange,
  })
  mockOrder.mockReturnValue({
    order: mockOrder,
    range: mockRange,
  })
  mockRange.mockResolvedValue({
    data: [
      {
        id: '123e4567-e89b-12d3-a456-426614174000',
        slug: 'grade5-math-fractions',
        title: 'Adding Fractions',
        description: 'Learn to add fractions',
        subject: 'math',
        grade: 5,
        grade_band: 'k5',
        region: 'all',
        topic_cluster: 'Number & Operations—Fractions',
        segment_count: 3,
        estimated_minutes: 18,
        xp_reward: 50,
        is_placeholder: false,
      },
    ],
    count: 1,
    error: null,
  })
})

describe('GET /api/curriculum/modules', () => {
  it('returns 401 when not authenticated', async () => {
    mockGetUser.mockResolvedValueOnce({ data: { user: null } })

    const { GET } = await import('@/app/api/curriculum/modules/route')
    const req = new NextRequest('http://localhost/api/curriculum/modules')
    const res = await GET(req)

    expect(res.status).toBe(401)
  })

  it('returns paginated modules for authenticated user', async () => {
    mockGetUser.mockResolvedValueOnce({
      data: { user: { id: 'user-123' } },
    })

    const { GET } = await import('@/app/api/curriculum/modules/route')
    const req = new NextRequest('http://localhost/api/curriculum/modules?page=1&limit=10')
    const res = await GET(req)

    expect(res.status).toBe(200)
    const body = await res.json()
    expect(body).toHaveProperty('modules')
    expect(body).toHaveProperty('total')
    expect(body).toHaveProperty('page')
    expect(body).toHaveProperty('limit')
  })

  it('returns 400 for invalid query params', async () => {
    mockGetUser.mockResolvedValueOnce({
      data: { user: { id: 'user-123' } },
    })

    const { GET } = await import('@/app/api/curriculum/modules/route')
    const req = new NextRequest('http://localhost/api/curriculum/modules?grade=invalid')
    const res = await GET(req)

    expect(res.status).toBe(400)
  })
})

describe('GET /api/curriculum/module/[id]', () => {
  it('returns 401 when not authenticated', async () => {
    mockGetUser.mockResolvedValueOnce({ data: { user: null } })

    const { GET } = await import('@/app/api/curriculum/module/[id]/route')
    const req = new NextRequest('http://localhost/api/curriculum/module/123')
    const res = await GET(req, {
      params: Promise.resolve({ id: '123e4567-e89b-12d3-a456-426614174000' }),
    })

    expect(res.status).toBe(401)
  })

  it('returns 400 for invalid UUID', async () => {
    mockGetUser.mockResolvedValueOnce({
      data: { user: { id: 'user-123' } },
    })

    const { GET } = await import('@/app/api/curriculum/module/[id]/route')
    const req = new NextRequest('http://localhost/api/curriculum/module/not-a-uuid')
    const res = await GET(req, {
      params: Promise.resolve({ id: 'not-a-uuid' }),
    })

    expect(res.status).toBe(400)
  })

  it('returns 404 when module not found', async () => {
    mockGetUser.mockResolvedValueOnce({
      data: { user: { id: 'user-123' } },
    })
    mockSingle.mockResolvedValueOnce({
      data: null,
      error: { message: 'Not found' },
    })
    mockSelect.mockReturnValueOnce({
      eq: vi.fn().mockReturnValue({
        single: mockSingle,
      }),
    })

    const { GET } = await import('@/app/api/curriculum/module/[id]/route')
    const req = new NextRequest('http://localhost/api/curriculum/module/123e4567-e89b-12d3-a456-426614174000')
    const res = await GET(req, {
      params: Promise.resolve({ id: '123e4567-e89b-12d3-a456-426614174000' }),
    })

    expect(res.status).toBe(404)
  })
})
