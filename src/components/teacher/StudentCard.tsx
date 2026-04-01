'use client'

import { Clock, Zap, Flame, BookOpen } from 'lucide-react'
import { ClayCard } from '../clay/ClayCard'
import { ClayBadge } from '../clay/ClayBadge'
import { ProgressRing } from '../clay/ProgressRing'
import type { StudentStatus } from '@/lib/dashboard/teacher-types'

interface StudentCardProps {
  student: StudentStatus
  onClick?: () => void
}

const STATUS_COLORS = {
  'at-risk': 'destructive' as const,
  'on-track': 'warn' as const,
  excelling: 'success' as const,
}

const STATUS_LABELS = {
  'at-risk': 'At Risk',
  'on-track': 'On Track',
  excelling: 'Excelling',
}

export function StudentCard({ student, onClick }: StudentCardProps) {
  const avgMastery = Math.round((student.mastery.math + student.mastery.ela) / 2)
  const lastActiveText = student.lastActive
    ? formatTimeAgo(student.lastActive)
    : 'Never'

  return (
    <ClayCard
      className="p-4 cursor-pointer hover:translate-y-[-2px] transition-transform"
      data-testid={`student-card`}
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-semibold text-sm">{student.fullName}</h3>
          <p className="text-xs text-muted-foreground">
            Grade {student.grade === 0 ? 'K' : student.grade} &middot; {student.region}
          </p>
        </div>
        <ClayBadge
          color={STATUS_COLORS[student.status]}
          data-testid={student.status === 'at-risk' ? 'at-risk-badge' : undefined}
        >
          {STATUS_LABELS[student.status]}
        </ClayBadge>
      </div>

      <div className="flex items-center gap-4 mb-3">
        <ProgressRing percent={student.mastery.math} label="Math" color="primary" />
        <ProgressRing percent={student.mastery.ela} label="ELA" color="primary" />
      </div>

      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <Clock className="h-3 w-3" />
          {lastActiveText}
        </span>
        <span className="flex items-center gap-1">
          <BookOpen className="h-3 w-3" />
          {student.modulesCompleted} modules
        </span>
        <span className="flex items-center gap-1">
          <Zap className="h-3 w-3" />
          {student.xpTotal} XP
        </span>
        <span className="flex items-center gap-1">
          <Flame className="h-3 w-3" />
          {student.streakDays}d streak
        </span>
      </div>

      {student.currentModule && (
        <p className="text-xs text-muted-foreground mt-2 truncate" data-testid="active-subject">
          Current: {student.currentModule}
        </p>
      )}
    </ClayCard>
  )
}

function formatTimeAgo(dateStr: string): string {
  const now = Date.now()
  const then = new Date(dateStr).getTime()
  const diff = now - then
  const hours = Math.floor(diff / 3600000)
  if (hours < 1) return 'Just now'
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  if (days < 7) return `${days}d ago`
  return new Date(dateStr).toLocaleDateString()
}
