import { describe, it, expect } from 'vitest'
import { BAND2_CURRICULUM } from '@/lib/ingestion/curriculum-catalog'

describe('Band 2 (6-8) Curriculum Catalog', () => {
  it('contains exactly 90 modules', () => {
    expect(BAND2_CURRICULUM).toHaveLength(90)
  })

  it('has 45 math modules and 45 ELA modules', () => {
    const math = BAND2_CURRICULUM.filter((m) => m.subject === 'math')
    const ela = BAND2_CURRICULUM.filter((m) => m.subject === 'ela')
    expect(math).toHaveLength(45)
    expect(ela).toHaveLength(45)
  })

  it('has 15 math and 15 ELA modules per grade (6-8)', () => {
    for (let grade = 6; grade <= 8; grade++) {
      const gradeModules = BAND2_CURRICULUM.filter((m) => m.grade === grade)
      const math = gradeModules.filter((m) => m.subject === 'math')
      const ela = gradeModules.filter((m) => m.subject === 'ela')
      expect(math).toHaveLength(15)
      expect(ela).toHaveLength(15)
    }
  })

  it('has all unique slugs', () => {
    const slugs = BAND2_CURRICULUM.map((m) => m.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('all modules have gradeBand 6-8', () => {
    for (const module of BAND2_CURRICULUM) {
      expect(module.gradeBand).toBe('6-8')
    }
  })

  it('all modules have at least 1 standard code', () => {
    for (const module of BAND2_CURRICULUM) {
      expect(module.standardCodes.length).toBeGreaterThanOrEqual(1)
    }
  })

  it('all modules have 3-5 segments', () => {
    for (const module of BAND2_CURRICULUM) {
      expect(module.content.segments.length).toBeGreaterThanOrEqual(3)
      expect(module.content.segments.length).toBeLessThanOrEqual(5)
    }
  })

  it('all modules have 5-10 practice questions', () => {
    for (const module of BAND2_CURRICULUM) {
      expect(module.content.practice.length).toBeGreaterThanOrEqual(5)
      expect(module.content.practice.length).toBeLessThanOrEqual(10)
    }
  })

  it('all modules have 3-5 assessment questions', () => {
    for (const module of BAND2_CURRICULUM) {
      expect(module.content.assessment.questions.length).toBeGreaterThanOrEqual(3)
      expect(module.content.assessment.questions.length).toBeLessThanOrEqual(5)
    }
  })
})
