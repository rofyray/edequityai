export type UserRole = 'student' | 'teacher' | 'parent' | 'admin'

export interface RegisterStudentInput {
  email: string
  password: string
  fullName: string
  dateOfBirth: string
  parentEmail?: string
}

export interface RegisterTeacherInput {
  email: string
  password: string
  fullName: string
  schoolName?: string
  region?: 'appalachia' | 'delta' | 'tribal'
  state?: string
}

export interface RegisterParentInput {
  email: string
  password: string
  fullName: string
  studentEmail?: string
}

export interface LoginInput {
  email: string
  password: string
}

export interface OnboardingState {
  completedSteps: number[]
  nextStep: number
  data: {
    grade?: number
    region?: 'appalachia' | 'delta' | 'tribal'
    state?: string
    subjects?: ('math' | 'ela')[]
    dialectPreference?: string
    offlineDownloadPreference?: boolean
  }
}
