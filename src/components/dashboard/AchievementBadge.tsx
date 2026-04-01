import { cn } from '@/lib/utils'
import type { Achievement } from '@/lib/dashboard/types'

interface AchievementBadgeProps {
  achievement: Achievement
}

export function AchievementBadge({ achievement }: AchievementBadgeProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center gap-1 rounded-clay p-3 text-center shadow-clay-sm transition-opacity',
        achievement.earned ? 'opacity-100' : 'opacity-40 grayscale'
      )}
    >
      <span className="text-2xl">{achievement.icon}</span>
      <span className="text-xs font-medium text-foreground">{achievement.label}</span>
    </div>
  )
}
