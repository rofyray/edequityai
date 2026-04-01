import { describe, it, expect, vi } from 'vitest'

// Mock OpenAI
vi.mock('openai', () => {
  const mockCreate = vi.fn().mockResolvedValue({
    choices: [{
      message: {
        content: JSON.stringify({
          items: [
            { question: 'What is 1/2 + 1/4?', type: 'multiple-choice', options: ['3/4', '1/3', '2/4', '1/6'], correctAnswer: '3/4', hint: 'Find a common denominator' },
            { question: 'Simplify 4/8', type: 'short-answer', correctAnswer: '1/2', hint: 'Divide top and bottom by the same number' },
            { question: 'What is 2/3 + 1/3?', type: 'multiple-choice', options: ['1', '2/3', '3/3', '3/6'], correctAnswer: '1', hint: 'Same denominator' },
            { question: 'What is 3/5 - 1/5?', type: 'multiple-choice', options: ['2/5', '4/5', '2/10', '1/5'], correctAnswer: '2/5', hint: 'Subtract numerators' },
            { question: 'Add 1/6 + 2/6', type: 'short-answer', correctAnswer: '3/6', hint: 'Keep the denominator' },
          ]
        })
      }
    }]
  })
  return {
    default: class MockOpenAI {
      chat = { completions: { create: mockCreate } }
    },
    __mockCreate: mockCreate,
  }
})

// Mock search
vi.mock('@/lib/ai/search', () => ({
  searchCurriculum: vi.fn().mockResolvedValue([
    { contentText: 'Adding fractions with unlike denominators', standardCode: '5.NF.1', topicCluster: 'Fractions', region: 'all', similarity: 0.9 },
  ]),
}))

import { generateAssessment } from '@/lib/progress/assessment-generator'

describe('generateAssessment', () => {
  it('returns 5 assessment items', async () => {
    const items = await generateAssessment({
      subject: 'math',
      grade: 5,
      standardCode: '5.NF.1',
      region: 'appalachia',
    })

    expect(items).toHaveLength(5)
  })

  it('each item has required fields', async () => {
    const items = await generateAssessment({
      subject: 'math',
      grade: 5,
      standardCode: '5.NF.1',
      region: 'delta',
    })

    for (const item of items) {
      expect(item.question).toBeTruthy()
      expect(item.correctAnswer).toBeTruthy()
      expect(item.hint).toBeTruthy()
      expect(item.standardCode).toBe('5.NF.1')
      expect(['multiple-choice', 'short-answer']).toContain(item.type)
    }
  })

  it('multiple-choice items have options', async () => {
    const items = await generateAssessment({
      subject: 'math',
      grade: 5,
      standardCode: '5.NF.1',
      region: 'tribal',
    })

    const mcItems = items.filter((i) => i.type === 'multiple-choice')
    for (const item of mcItems) {
      expect(item.options).toBeDefined()
      expect(item.options!.length).toBeGreaterThanOrEqual(2)
    }
  })

  it('applies the specified difficulty', async () => {
    const items = await generateAssessment({
      subject: 'math',
      grade: 5,
      standardCode: '5.NF.1',
      region: 'appalachia',
      difficulty: 'advanced',
    })

    for (const item of items) {
      expect(item.difficulty).toBe('advanced')
    }
  })
})
