import { describe, it, expect } from 'vitest'
import { generateClassCSV } from '@/lib/progress/export-csv'
import type { StudentStatus } from '@/lib/dashboard/teacher-types'

const mockStudents: StudentStatus[] = [
  {
    id: 's1',
    fullName: 'Jaylen Carter',
    grade: 5,
    region: 'appalachia',
    state: 'NC',
    lastActive: '2026-03-30T10:00:00Z',
    currentModule: 'Adding Fractions',
    recentScores: [85, 90, 75],
    status: 'on-track',
    mastery: { math: 72, ela: 65 },
    xpTotal: 350,
    streakDays: 5,
    modulesCompleted: 8,
  },
  {
    id: 's2',
    fullName: 'Aaliyah Thomas',
    grade: 3,
    region: 'delta',
    state: 'MS',
    lastActive: null,
    currentModule: null,
    recentScores: [45, 50, 40],
    status: 'at-risk',
    mastery: { math: 35, ela: 42 },
    xpTotal: 100,
    streakDays: 0,
    modulesCompleted: 3,
  },
]

describe('generateClassCSV', () => {
  it('includes header row', () => {
    const csv = generateClassCSV(mockStudents)
    const lines = csv.split('\n')
    expect(lines[0]).toContain('Name')
    expect(lines[0]).toContain('Grade')
    expect(lines[0]).toContain('Status')
    expect(lines[0]).toContain('Math Mastery')
  })

  it('includes one row per student', () => {
    const csv = generateClassCSV(mockStudents)
    const lines = csv.split('\n')
    expect(lines).toHaveLength(3) // header + 2 students
  })

  it('contains student data', () => {
    const csv = generateClassCSV(mockStudents)
    expect(csv).toContain('Jaylen Carter')
    expect(csv).toContain('Aaliyah Thomas')
    expect(csv).toContain('on-track')
    expect(csv).toContain('at-risk')
  })

  it('handles empty array', () => {
    const csv = generateClassCSV([])
    const lines = csv.split('\n')
    expect(lines).toHaveLength(1) // just header
  })

  it('escapes fields with commas', () => {
    const students: StudentStatus[] = [{
      ...mockStudents[0],
      fullName: 'Carter, Jaylen',
    }]
    const csv = generateClassCSV(students)
    expect(csv).toContain('"Carter, Jaylen"')
  })
})
