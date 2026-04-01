import { describe, it, expect } from 'vitest'
import { buildSystemPrompt } from '@/lib/ai/system-prompt'
import type { StudentContext } from '@/types/tutor'

const appalachiaStudent: StudentContext = {
  id: 'test-1',
  grade: 5,
  region: 'appalachia',
  subject: 'math',
  fullName: 'Jaylen Carter',
}

const deltaStudent: StudentContext = {
  id: 'test-2',
  grade: 3,
  region: 'delta',
  subject: 'ela',
  fullName: 'Aaliyah Thomas',
}

const tribalStudent: StudentContext = {
  id: 'test-3',
  grade: 0,
  region: 'tribal',
  subject: 'math',
  fullName: 'Tommy Redhawk',
}

describe('buildSystemPrompt', () => {
  it('includes Appalachia persona for Appalachian students', () => {
    const prompt = buildSystemPrompt(appalachiaStudent)
    expect(prompt).toContain('McDowell County')
    expect(prompt).toContain('Cumberland Gap')
    expect(prompt).toContain('Ethan')
  })

  it('includes Delta persona for Delta students', () => {
    const prompt = buildSystemPrompt(deltaStudent)
    expect(prompt).toContain('Sunflower County')
    expect(prompt).toContain('Mississippi River')
    expect(prompt).toContain('Marcus')
  })

  it('includes Tribal persona for Tribal students', () => {
    const prompt = buildSystemPrompt(tribalStudent)
    expect(prompt).toContain('Cherokee Nation')
    expect(prompt).toContain('Navajo Nation')
    expect(prompt).toContain('Tommy')
  })

  it('includes student name and grade', () => {
    const prompt = buildSystemPrompt(appalachiaStudent)
    expect(prompt).toContain('Jaylen Carter')
    expect(prompt).toContain('Grade 5')
  })

  it('includes subject', () => {
    const prompt = buildSystemPrompt(appalachiaStudent)
    expect(prompt).toContain('MATH')
  })

  it('includes all 10 tutor rules', () => {
    const prompt = buildSystemPrompt(appalachiaStudent)
    expect(prompt).toContain('search_curriculum')
    expect(prompt).toContain('culturally appropriate')
    expect(prompt).toContain('vocabulary')
    expect(prompt).toContain('Celebrate correct answers')
    expect(prompt).toContain("let's look at this together")
    expect(prompt).toContain("I'm not sure")
    expect(prompt).toContain('150 words')
    expect(prompt).toContain('voice OR text')
    expect(prompt).toContain('other students')
    expect(prompt).toContain('track_progress')
  })

  it('adjusts vocabulary level to 3 grades below', () => {
    const prompt = buildSystemPrompt(appalachiaStudent)
    expect(prompt).toContain('Grade 2') // grade 5 - 3 = 2
  })

  it('handles kindergarten grade (0) correctly', () => {
    const prompt = buildSystemPrompt(tribalStudent)
    expect(prompt).toContain('Grade K')
  })
})
