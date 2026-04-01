export interface StudentDashboardData {
  student: {
    id: string
    fullName: string
    grade: number
    region: 'appalachia' | 'delta' | 'tribal'
    state: string
    streakDays: number
    xpTotal: number
  }
  progress: {
    math: { percent: number; modulesCompleted: number; totalModules: number }
    ela: { percent: number; modulesCompleted: number; totalModules: number }
  }
  recommendedModules: RecommendedModule[]
  recentActivity: RecentActivity[]
  achievements: Achievement[]
}

export interface RecommendedModule {
  id: string
  slug: string
  title: string
  subject: 'math' | 'ela'
  grade: number
  topicCluster: string
  estimatedMinutes: number
  xpReward: number
  region: string
}

export interface RecentActivity {
  id: string
  moduleTitle: string
  subject: 'math' | 'ela'
  score?: number
  completedAt: string
  eventType: string
}

export interface Achievement {
  id: string
  label: string
  icon: string
  earned: boolean
  earnedAt?: string
}
