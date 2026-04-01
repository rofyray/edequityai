import type { Achievement } from './types'

export interface LinkedChild {
  id: string
  fullName: string
  grade: number
  region: string
  state: string
}

export interface ParentWeeklySummary {
  weeklyMinutes: number
  modulesCompleted: number
  streakDays: number
  topSubject: 'math' | 'ela' | null
  xpEarned: number
}

export interface ParentDashboardData {
  child: LinkedChild
  summary: ParentWeeklySummary
  progress: {
    math: { percent: number; modulesCompleted: number; totalModules: number }
    ela: { percent: number; modulesCompleted: number; totalModules: number }
  }
  achievements: Achievement[]
  recentActivity: {
    moduleTitle: string
    subject: string
    score: number
    completedAt: string
  }[]
}
