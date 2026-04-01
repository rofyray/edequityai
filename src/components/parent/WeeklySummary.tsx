'use client'

import { Clock, BookOpen, Flame, Zap } from 'lucide-react'
import { ClayCard } from '../clay/ClayCard'
import type { ParentWeeklySummary } from '@/lib/dashboard/parent-types'

interface WeeklySummaryProps {
  summary: ParentWeeklySummary
}

export function WeeklySummary({ summary }: WeeklySummaryProps) {
  const items = [
    { label: 'Minutes', value: summary.weeklyMinutes, icon: Clock },
    { label: 'Modules', value: summary.modulesCompleted, icon: BookOpen },
    { label: 'Streak', value: `${summary.streakDays}d`, icon: Flame },
    { label: 'XP Earned', value: `+${summary.xpEarned}`, icon: Zap },
  ]

  return (
    <ClayCard className="p-4">
      <h3 className="text-sm font-semibold mb-3">This Week</h3>
      <div className="grid grid-cols-2 gap-3">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
              <item.icon className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-lg font-bold">{item.value}</p>
              <p className="text-xs text-muted-foreground">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
      {summary.topSubject && (
        <p className="text-xs text-muted-foreground mt-3">
          Top subject: {summary.topSubject === 'math' ? 'Mathematics' : 'English Language Arts'}
        </p>
      )}
    </ClayCard>
  )
}
