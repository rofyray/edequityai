import { describe, it, expect } from 'vitest'
import { getHintForLevel, checkAnswer, calculateScore, calculateXP } from '@/lib/module-player/hints'
import type { PracticeQuestion } from '@/lib/ingestion/types'

const mockQuestion: PracticeQuestion = {
  index: 0,
  question: '1/4 + 2/4 = ?',
  type: 'short-answer',
  correctAnswer: '3/4',
  hint: 'The denominators are the same, so just add the numerators.',
  explanation: 'Add numerators: 1 + 2 = 3. Keep denominator: 4. The answer is 3/4.',
  standardCode: '5.NF.1',
}

const singleSentenceQuestion: PracticeQuestion = {
  ...mockQuestion,
  explanation: 'The answer is simply 3/4.',
}

describe('getHintForLevel', () => {
  it('level 1 returns the hint field', () => {
    expect(getHintForLevel(mockQuestion, 1)).toBe(mockQuestion.hint)
  })

  it('level 2 returns first sentence of explanation', () => {
    expect(getHintForLevel(mockQuestion, 2)).toBe('Add numerators: 1 + 2 = 3.')
  })

  it('level 3 returns explanation minus last sentence', () => {
    const result = getHintForLevel(mockQuestion, 3)
    expect(result).toContain('Add numerators')
    expect(result).toContain('Keep denominator')
    expect(result).not.toContain('The answer is 3/4')
  })

  it('level 4 reveals the correct answer', () => {
    expect(getHintForLevel(mockQuestion, 4)).toContain('3/4')
  })

  it('level 0 returns empty string', () => {
    expect(getHintForLevel(mockQuestion, 0)).toBe('')
  })

  it('handles single-sentence explanation for levels 2 and 3', () => {
    const level2 = getHintForLevel(singleSentenceQuestion, 2)
    const level3 = getHintForLevel(singleSentenceQuestion, 3)
    // Both should return the full explanation
    expect(level2).toBe('The answer is simply 3/4.')
    expect(level3).toBe('The answer is simply 3/4.')
  })
})

describe('checkAnswer', () => {
  it('matches case-insensitively', () => {
    expect(checkAnswer('Three Fourths', 'three fourths')).toBe(true)
  })

  it('trims whitespace', () => {
    expect(checkAnswer('  3/4  ', '3/4')).toBe(true)
  })

  it('rejects wrong answers', () => {
    expect(checkAnswer('1/2', '3/4')).toBe(false)
  })
})

describe('calculateScore', () => {
  it('calculates percentage', () => {
    expect(calculateScore(7, 10)).toBe(70)
  })

  it('returns 0 for no questions', () => {
    expect(calculateScore(0, 0)).toBe(0)
  })

  it('rounds to nearest integer', () => {
    expect(calculateScore(1, 3)).toBe(33)
  })
})

describe('calculateXP', () => {
  it('gives full XP for 100% score', () => {
    expect(calculateXP(50, 100)).toBe(50)
  })

  it('gives proportional XP', () => {
    expect(calculateXP(50, 80)).toBe(40)
  })

  it('gives minimum 50% XP when completed', () => {
    expect(calculateXP(50, 10)).toBe(25) // min is 25 (50% of 50)
  })

  it('gives minimum 50% even at 0% score', () => {
    expect(calculateXP(50, 0)).toBe(25)
  })
})
