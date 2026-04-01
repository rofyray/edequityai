import { describe, it, expect } from 'vitest'
import { K5_CURRICULUM } from '@/lib/ingestion/curriculum-catalog'

describe('K5 Curriculum Catalog', () => {
  it('contains exactly 144 modules', () => {
    expect(K5_CURRICULUM).toHaveLength(144)
  })

  it('has 72 math modules and 72 ELA modules', () => {
    const math = K5_CURRICULUM.filter((m) => m.subject === 'math')
    const ela = K5_CURRICULUM.filter((m) => m.subject === 'ela')
    expect(math).toHaveLength(72)
    expect(ela).toHaveLength(72)
  })

  it('has 12 math and 12 ELA modules per grade (K-5)', () => {
    for (let grade = 0; grade <= 5; grade++) {
      const gradeModules = K5_CURRICULUM.filter((m) => m.grade === grade)
      const math = gradeModules.filter((m) => m.subject === 'math')
      const ela = gradeModules.filter((m) => m.subject === 'ela')
      expect(math).toHaveLength(12)
      expect(ela).toHaveLength(12)
    }
  })

  it('has all unique slugs', () => {
    const slugs = K5_CURRICULUM.map((m) => m.slug)
    const uniqueSlugs = new Set(slugs)
    expect(uniqueSlugs.size).toBe(slugs.length)
  })

  it('slugs match expected pattern', () => {
    for (const module of K5_CURRICULUM) {
      expect(module.slug).toMatch(/^grade[K0-5]-(?:math|ela)-[a-z0-9-]+$/)
    }
  })

  it('all modules have gradeBand k5', () => {
    for (const module of K5_CURRICULUM) {
      expect(module.gradeBand).toBe('k5')
    }
  })

  it('all modules have at least 1 standard code', () => {
    for (const module of K5_CURRICULUM) {
      expect(module.standardCodes.length).toBeGreaterThanOrEqual(1)
    }
  })

  it('all modules have 3-5 segments', () => {
    for (const module of K5_CURRICULUM) {
      expect(module.content.segments.length).toBeGreaterThanOrEqual(3)
      expect(module.content.segments.length).toBeLessThanOrEqual(5)
    }
  })

  it('all modules have 5-10 practice questions', () => {
    for (const module of K5_CURRICULUM) {
      expect(module.content.practice.length).toBeGreaterThanOrEqual(5)
      expect(module.content.practice.length).toBeLessThanOrEqual(10)
    }
  })

  it('all modules have 3-5 assessment questions', () => {
    for (const module of K5_CURRICULUM) {
      expect(module.content.assessment.questions.length).toBeGreaterThanOrEqual(3)
      expect(module.content.assessment.questions.length).toBeLessThanOrEqual(5)
    }
  })

  it('all segments have non-empty text', () => {
    for (const module of K5_CURRICULUM) {
      for (const segment of module.content.segments) {
        expect(segment.text.trim().length).toBeGreaterThan(0)
        expect(segment.title.trim().length).toBeGreaterThan(0)
      }
    }
  })

  it('all practice questions have hints and explanations', () => {
    for (const module of K5_CURRICULUM) {
      for (const q of module.content.practice) {
        expect(q.hint.trim().length).toBeGreaterThan(0)
        expect(q.explanation.trim().length).toBeGreaterThan(0)
        expect(q.correctAnswer.trim().length).toBeGreaterThan(0)
        expect(q.standardCode.trim().length).toBeGreaterThan(0)
      }
    }
  })

  it('intro text is non-empty for all modules', () => {
    for (const module of K5_CURRICULUM) {
      expect(module.content.intro.text.trim().length).toBeGreaterThan(0)
      expect(module.content.intro.title.trim().length).toBeGreaterThan(0)
    }
  })
})
