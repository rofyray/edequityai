export type StudentStatusLevel = 'at-risk' | 'on-track' | 'excelling'

export interface StudentStatus {
  id: string
  fullName: string
  grade: number
  region: string
  state: string
  lastActive: string | null
  currentModule: string | null
  recentScores: number[]
  status: StudentStatusLevel
  mastery: {
    math: number
    ela: number
  }
  xpTotal: number
  streakDays: number
  modulesCompleted: number
}

export interface TeacherClassRoster {
  students: StudentStatus[]
  stats: {
    totalStudents: number
    atRiskCount: number
    excellingCount: number
    avgMastery: number
    avgCompletion: number
  }
}

export interface ModuleAssignment {
  id: string
  teacherId: string
  studentId: string
  studentName: string
  moduleId: string
  moduleTitle: string
  assignedAt: string
  completedAt: string | null
}

export interface ClassExportRow {
  name: string
  grade: number
  region: string
  mathMastery: number
  elaMastery: number
  modulesCompleted: number
  avgScore: number
  status: StudentStatusLevel
  lastActive: string
}
