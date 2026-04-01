import { describe, it, expect } from 'vitest'
import { BAND3_CURRICULUM } from '@/lib/ingestion/curriculum-catalog'

describe('Band 3 (9-12) Curriculum Catalog', () => {
  it('contains exactly 96 modules', () => {
    expect(BAND3_CURRICULUM).toHaveLength(96)
  })

  it('has 48 math modules and 48 ELA modules', () => {
    const math = BAND3_CURRICULUM.filter((m) => m.subject === 'math')
    const ela = BAND3_CURRICULUM.filter((m) => m.subject === 'ela')
    expect(math).toHaveLength(48)
    expect(ela).toHaveLength(48)
  })

  it('has 12 math and 12 ELA modules per grade (9-12)', () => {
    for (let grade = 9; grade <= 12; grade++) {
      const gradeModules = BAND3_CURRICULUM.filter((m) => m.grade === grade)
      const math = gradeModules.filter((m) => m.subject === 'math')
      const ela = gradeModules.filter((m) => m.subject === 'ela')
      expect(math).toHaveLength(12)
      expect(ela).toHaveLength(12)
    }
  })

  it('has all unique slugs', () => {
    const slugs = BAND3_CURRICULUM.map((m) => m.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('all modules have gradeBand 9-12', () => {
    for (const module of BAND3_CURRICULUM) {
      expect(module.gradeBand).toBe('9-12')
    }
  })

  it('all modules have at least 1 standard code', () => {
    for (const module of BAND3_CURRICULUM) {
      expect(module.standardCodes.length).toBeGreaterThanOrEqual(1)
    }
  })

  it('all modules have 3-5 segments', () => {
    for (const module of BAND3_CURRICULUM) {
      expect(module.content.segments.length).toBeGreaterThanOrEqual(3)
      expect(module.content.segments.length).toBeLessThanOrEqual(5)
    }
  })

  it('all modules have 5-10 practice questions', () => {
    for (const module of BAND3_CURRICULUM) {
      expect(module.content.practice.length).toBeGreaterThanOrEqual(5)
      expect(module.content.practice.length).toBeLessThanOrEqual(10)
    }
  })

  it('all modules have 3-5 assessment questions', () => {
    for (const module of BAND3_CURRICULUM) {
      expect(module.content.assessment.questions.length).toBeGreaterThanOrEqual(3)
      expect(module.content.assessment.questions.length).toBeLessThanOrEqual(5)
    }
  })
})
