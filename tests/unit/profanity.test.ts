import { describe, it, expect } from 'vitest'
import { containsProfanity, PROFANITY_REDIRECT_MESSAGE } from '@/lib/ai/profanity'

describe('containsProfanity', () => {
  it('detects common profanity', () => {
    expect(containsProfanity('this is shit')).toBe(true)
    expect(containsProfanity('what the fuck')).toBe(true)
    expect(containsProfanity('damn this math')).toBe(true)
  })

  it('is case insensitive', () => {
    expect(containsProfanity('SHIT')).toBe(true)
    expect(containsProfanity('Fuck')).toBe(true)
  })

  it('handles common obfuscations', () => {
    expect(containsProfanity('f*ck this')).toBe(true)
    expect(containsProfanity('sh*t')).toBe(true)
  })

  it('allows clean input', () => {
    expect(containsProfanity('Can you help me with fractions?')).toBe(false)
    expect(containsProfanity('What is 3/4 + 1/4?')).toBe(false)
    expect(containsProfanity('I need help understanding multiplication')).toBe(false)
    expect(containsProfanity('')).toBe(false)
  })

  it('does not false-positive on words containing blocked substrings', () => {
    // "class" contains "ass" but as a word the token is "class"
    expect(containsProfanity('I have class tomorrow')).toBe(false)
    expect(containsProfanity('The assessment was hard')).toBe(false)
  })

  it('has a redirect message', () => {
    expect(PROFANITY_REDIRECT_MESSAGE).toContain('friendly')
  })
})
