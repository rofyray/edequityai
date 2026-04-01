'use client'

import { useState, useEffect } from 'react'
import { ProgressRing, RegionPill } from '@/components/clay'
import {
  StreakCounter,
  ModuleCard,
  OfflineBanner,
  AchievementBadge,
  XPCounter,
} from '@/components/dashboard'
import type { StudentDashboardData, RecommendedModule, Achievement } from '@/lib/dashboard/types'

interface Props {
  studentId: string
  studentName: string
  grade: number
  region: 'appalachia' | 'delta' | 'tribal'
  state: string
  streakDays: number
  xpTotal: number
  subjects: string[]
}

export function StudentDashboardClient({
  studentId,
  studentName,
  grade,
  region,
  state,
  streakDays,
  xpTotal,
  subjects,
}: Props) {
  const [dashboardData, setDashboardData] = useState<StudentDashboardData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchDashboard() {
      try {
        const res = await fetch(`/api/student/${studentId}/dashboard`)
        if (res.ok) {
          const data = await res.json()
          setDashboardData(data)
        }
      } catch {
        // Use fallback server-side data
      } finally {
        setLoading(false)
      }
    }
    fetchDashboard()
  }, [studentId])

  const mathPercent = dashboardData?.progress.math.percent ?? 0
  const elaPercent = dashboardData?.progress.ela.percent ?? 0
  const recommended: RecommendedModule[] = dashboardData?.recommendedModules ?? []
  const achievements: Achievement[] = dashboardData?.achievements ?? [
    { id: 'first-lesson', label: 'First Lesson', icon: '📚', earned: false },
    { id: 'streak-3', label: '3-Day Streak', icon: '🔥', earned: streakDays >= 3 },
    { id: 'streak-7', label: 'Week Warrior', icon: '⭐', earned: streakDays >= 7 },
  ]

  return (
    <div data-testid="dashboard-loaded" className="flex flex-col gap-6">
      {/* Offline banner */}
      <OfflineBanner />

      {/* Header */}
      <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-2">
        <div>
          <h2 className="font-sans text-2xl font-bold text-foreground">
            Hey, {studentName.split(' ')[0]}!
          </h2>
          <p className="text-sm text-muted-foreground">
            Grade {grade} &middot; {state}
          </p>
        </div>
        <RegionPill region={region} />
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 gap-3">
        <StreakCounter days={streakDays} />
        <XPCounter xp={xpTotal} />
      </div>

      {/* Progress rings */}
      <div className="flex flex-col gap-3">
        <h3 className="font-sans text-lg font-bold text-foreground">Your Progress</h3>
        <div className="flex items-center justify-center gap-8" data-testid="progress-section">
          {subjects.includes('math') && (
            <ProgressRing
              percent={mathPercent}
              label="Math"
              color="var(--chart-1)"
              data-testid="progress-ring-math"
            />
          )}
          {subjects.includes('ela') && (
            <ProgressRing
              percent={elaPercent}
              label="ELA"
              color="var(--chart-3)"
              data-testid="progress-ring-ela"
            />
          )}
        </div>
      </div>

      {/* Recommended lessons */}
      {recommended.length > 0 && (
        <div className="flex flex-col gap-3">
          <h3 className="font-sans text-lg font-bold text-foreground">Recommended for You</h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-3">
            {recommended.map((mod) => (
              <ModuleCard key={mod.id} module={mod} />
            ))}
          </div>
        </div>
      )}

      {loading && recommended.length === 0 && (
        <div className="flex flex-col gap-3">
          <h3 className="font-sans text-lg font-bold text-foreground">Recommended for You</h3>
          <p className="text-sm text-muted-foreground">Loading your personalized lessons...</p>
        </div>
      )}

      {/* Achievements */}
      <div className="flex flex-col gap-3">
        <h3 className="font-sans text-lg font-bold text-foreground">Achievements</h3>
        <div className="grid grid-cols-3 xs:grid-cols-6 gap-2">
          {achievements.map((a) => (
            <AchievementBadge key={a.id} achievement={a} />
          ))}
        </div>
      </div>
    </div>
  )
}
