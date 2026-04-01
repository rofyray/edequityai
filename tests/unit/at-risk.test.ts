import { describe, it, expect } from 'vitest'
import { determineStudentStatus } from '@/lib/progress/at-risk'

describe('determineStudentStatus', () => {
  it('returns at-risk when all 3 scores < 60', () => {
    expect(determineStudentStatus([45, 52, 58])).toBe('at-risk')
  })

  it('returns excelling when all 3 scores >= 80', () => {
    expect(determineStudentStatus([85, 90, 88])).toBe('excelling')
  })

  it('returns on-track for mixed scores', () => {
    expect(determineStudentStatus([75, 50, 90])).toBe('on-track')
  })

  it('returns on-track with fewer than 3 scores', () => {
    expect(determineStudentStatus([90, 85])).toBe('on-track')
    expect(determineStudentStatus([40])).toBe('on-track')
    expect(determineStudentStatus([])).toBe('on-track')
  })

  it('handles boundary: exactly 60 is not at-risk', () => {
    expect(determineStudentStatus([60, 55, 50])).toBe('on-track')
  })

  it('handles boundary: exactly 80 is excelling', () => {
    expect(determineStudentStatus([80, 80, 80])).toBe('excelling')
  })

  it('returns on-track when 2 of 3 are at-risk level', () => {
    expect(determineStudentStatus([40, 50, 65])).toBe('on-track')
  })
})
