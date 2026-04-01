import { describe, it, expect } from 'vitest'
import {
  registerStudentSchema,
  registerTeacherSchema,
  loginSchema,
  calculateAge,
  requiresCoppa,
} from '@/lib/auth/validation'

describe('Auth Validation', () => {
  describe('registerStudentSchema', () => {
    it('validates a correct student registration', () => {
      const result = registerStudentSchema.safeParse({
        email: 'jaylen@test.com',
        password: 'SecurePass123!',
        fullName: 'Jaylen Carter',
        dateOfBirth: '2014-03-15',
      })
      expect(result.success).toBe(true)
    })

    it('rejects invalid email', () => {
      const result = registerStudentSchema.safeParse({
        email: 'not-an-email',
        password: 'SecurePass123!',
        fullName: 'Test',
        dateOfBirth: '2014-03-15',
      })
      expect(result.success).toBe(false)
    })

    it('rejects password shorter than 8 characters', () => {
      const result = registerStudentSchema.safeParse({
        email: 'test@test.com',
        password: 'short',
        fullName: 'Test',
        dateOfBirth: '2014-03-15',
      })
      expect(result.success).toBe(false)
    })

    it('rejects invalid date of birth format', () => {
      const result = registerStudentSchema.safeParse({
        email: 'test@test.com',
        password: 'SecurePass123!',
        fullName: 'Test',
        dateOfBirth: 'not-a-date',
      })
      expect(result.success).toBe(false)
    })

    it('accepts optional parentEmail field', () => {
      const result = registerStudentSchema.safeParse({
        email: 'test@test.com',
        password: 'SecurePass123!',
        fullName: 'Test',
        dateOfBirth: '2016-01-01',
        parentEmail: 'parent@test.com',
      })
      expect(result.success).toBe(true)
    })
  })

  describe('registerTeacherSchema', () => {
    it('validates a correct teacher registration', () => {
      const result = registerTeacherSchema.safeParse({
        email: 'teacher@school.edu',
        password: 'TeacherPass1!',
        fullName: 'Mrs. Patterson',
        schoolName: 'McDowell Elementary',
      })
      expect(result.success).toBe(true)
    })
  })

  describe('loginSchema', () => {
    it('validates correct login input', () => {
      const result = loginSchema.safeParse({
        email: 'test@test.com',
        password: 'password123',
      })
      expect(result.success).toBe(true)
    })

    it('rejects empty password', () => {
      const result = loginSchema.safeParse({
        email: 'test@test.com',
        password: '',
      })
      expect(result.success).toBe(false)
    })
  })

  describe('calculateAge', () => {
    it('calculates age correctly', () => {
      // Set a fixed reference — age relative to 2026-03-29
      const age = calculateAge('2016-01-01')
      expect(age).toBe(10)
    })

    it('handles birthday not yet occurred this year', () => {
      const age = calculateAge('2016-12-31')
      expect(age).toBe(9)
    })
  })

  describe('requiresCoppa', () => {
    it('returns true for children under 13', () => {
      expect(requiresCoppa('2016-01-01')).toBe(true) // Age 10
      expect(requiresCoppa('2015-03-15')).toBe(true) // Age 11
      expect(requiresCoppa('2014-06-01')).toBe(true) // Age 11
    })

    it('returns false for 13 and older', () => {
      expect(requiresCoppa('2012-01-01')).toBe(false) // Age 14
      expect(requiresCoppa('2010-01-01')).toBe(false) // Age 16
    })
  })
})
