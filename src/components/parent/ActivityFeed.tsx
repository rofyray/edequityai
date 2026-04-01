'use client'

import { BookOpen, Calculator } from 'lucide-react'
import { ClayCard } from '../clay/ClayCard'

interface ActivityItem {
  moduleTitle: string
  subject: string
  score: number
  completedAt: string
}

interface ActivityFeedProps {
  activities: ActivityItem[]
}

export function ActivityFeed({ activities }: ActivityFeedProps) {
  if (activities.length === 0) {
    return (
      <ClayCard className="p-4 text-center">
        <p className="text-sm text-muted-foreground">
          No recent activity yet. Completed lessons will show up here!
        </p>
      </ClayCard>
    )
  }

  return (
    <ClayCard className="p-4">
      <h3 className="text-sm font-semibold mb-3">Recent Activity</h3>
      <div className="space-y-3">
        {activities.map((act, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 shrink-0">
              {act.subject === 'math' ? (
                <Calculator className="h-4 w-4 text-primary" />
              ) : (
                <BookOpen className="h-4 w-4 text-primary" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{act.moduleTitle}</p>
              <p className="text-xs text-muted-foreground">
                Score: {act.score}% &middot; {new Date(act.completedAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </ClayCard>
  )
}
