export const mockStudent = {
  id: 'student-123',
  email: 'jaylen@test.com',
  fullName: 'Jaylen Carter',
  grade: 5,
  region: 'appalachia' as const,
  state: 'NC',
  subjects: ['math', 'ela'] as const,
  streakDays: 7,
  xpTotal: 350,
  onboardingCompleted: true,
  dialectPreference: 'appalachian',
}

export const mockStudentDelta = {
  id: 'student-456',
  email: 'aaliyah@test.com',
  fullName: 'Aaliyah Johnson',
  grade: 4,
  region: 'delta' as const,
  state: 'MS',
  subjects: ['math', 'ela'] as const,
  streakDays: 3,
  xpTotal: 150,
  onboardingCompleted: true,
  dialectPreference: 'standard',
}

export const mockStudentTribal = {
  id: 'student-789',
  email: 'tommy@test.com',
  fullName: 'Tommy Sixkiller',
  grade: 5,
  region: 'tribal' as const,
  state: 'OK',
  subjects: ['math', 'ela'] as const,
  streakDays: 12,
  xpTotal: 500,
  onboardingCompleted: true,
  dialectPreference: 'standard',
}

export const mockStudents = [mockStudent, mockStudentDelta, mockStudentTribal]
