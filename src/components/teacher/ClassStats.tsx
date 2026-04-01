'use client'

import { Users, AlertTriangle, Star, TrendingUp } from 'lucide-react'
import { ClayCard } from '../clay/ClayCard'
import type { TeacherClassRoster } from '@/lib/dashboard/teacher-types'

interface ClassStatsProps {
  stats: TeacherClassRoster['stats']
}

export function ClassStats({ stats }: ClassStatsProps) {
  const items = [
    { label: 'Students', value: stats.totalStudents, icon: Users, color: 'text-primary' },
    { label: 'At Risk', value: stats.atRiskCount, icon: AlertTriangle, color: 'text-destructive' },
    { label: 'Excelling', value: stats.excellingCount, icon: Star, color: 'text-green-600' },
    { label: 'Avg Mastery', value: `${stats.avgMastery}%`, icon: TrendingUp, color: 'text-primary' },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {items.map((item) => (
        <ClayCard key={item.label} size="sm" className="p-3 text-center">
          <item.icon className={`h-5 w-5 mx-auto mb-1 ${item.color}`} />
          <p className="text-xl font-bold">{item.value}</p>
          <p className="text-xs text-muted-foreground">{item.label}</p>
        </ClayCard>
      ))}
    </div>
  )
}
