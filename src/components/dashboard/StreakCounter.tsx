import { ClayCard } from '@/components/clay'
import { Flame } from 'lucide-react'

interface StreakCounterProps {
  days: number
}

export function StreakCounter({ days }: StreakCounterProps) {
  return (
    <ClayCard size="sm" className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c0a050]/20">
        <Flame className="h-6 w-6 text-[#c0a050]" />
      </div>
      <div>
        <p data-testid="streak-count" className="font-sans text-2xl font-bold text-foreground">
          {days}
        </p>
        <p className="text-sm text-muted-foreground">
          day{days !== 1 ? 's' : ''} streak
        </p>
      </div>
    </ClayCard>
  )
}
