import { z } from 'zod'

export const registerStudentSchema = z.object({
  email: z.string().email('Valid email required'),
  password: z.string().min(8, 'Password must be at least 8 characters').regex(/^(?=.*[A-Z])(?=.*[0-9])/, 'Password must include at least 1 uppercase letter and 1 number'),
  fullName: z.string().min(2, 'Full name required'),
  dateOfBirth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Date format: YYYY-MM-DD'),
  parentEmail: z.string().email().optional(),
})

export const registerTeacherSchema = z.object({
  email: z.string().email('Valid email required'),
  password: z.string().min(8, 'Password must be at least 8 characters').regex(/^(?=.*[A-Z])(?=.*[0-9])/, 'Password must include at least 1 uppercase letter and 1 number'),
  fullName: z.string().min(2, 'Full name required'),
  schoolName: z.string().optional(),
  region: z.enum(['appalachia', 'delta', 'tribal']).optional(),
  state: z.string().min(2).max(2).optional(),
})

export const registerParentSchema = z.object({
  email: z.string().email('Valid email required'),
  password: z.string().min(8, 'Password must be at least 8 characters').regex(/^(?=.*[A-Z])(?=.*[0-9])/, 'Password must include at least 1 uppercase letter and 1 number'),
  fullName: z.string().min(2, 'Full name required'),
  studentEmail: z.string().email().optional(),
})

export const loginSchema = z.object({
  email: z.string().email('Valid email required'),
  password: z.string().min(1, 'Password required'),
})

export function calculateAge(dateOfBirth: string): number {
  const today = new Date()
  const birth = new Date(dateOfBirth)
  let age = today.getFullYear() - birth.getFullYear()
  const monthDiff = today.getMonth() - birth.getMonth()
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--
  }
  return age
}

export function requiresCoppa(dateOfBirth: string): boolean {
  return calculateAge(dateOfBirth) < 13
}
