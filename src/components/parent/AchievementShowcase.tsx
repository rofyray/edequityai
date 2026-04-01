'use client'

import { ClayCard } from '../clay/ClayCard'
import type { Achievement } from '@/lib/dashboard/types'

interface AchievementShowcaseProps {
  achievements: Achievement[]
}

export function AchievementShowcase({ achievements }: AchievementShowcaseProps) {
  const earned = achievements.filter((a) => a.earned)

  if (earned.length === 0) {
    return (
      <ClayCard className="p-4 text-center">
        <p className="text-sm text-muted-foreground">
          Achievements will appear here as your child completes milestones!
        </p>
      </ClayCard>
    )
  }

  return (
    <ClayCard className="p-4">
      <h3 className="text-sm font-semibold mb-3">Achievements</h3>
      <div className="grid grid-cols-3 gap-3">
        {earned.map((a) => (
          <div key={a.id} className="text-center">
            <span className="text-3xl block mb-1">{a.icon}</span>
            <p className="text-xs font-medium">{a.label}</p>
          </div>
        ))}
      </div>
    </ClayCard>
  )
}
