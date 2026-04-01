import { ClayCard } from '@/components/clay'
import { Zap } from 'lucide-react'

interface XPCounterProps {
  xp: number
}

export function XPCounter({ xp }: XPCounterProps) {
  return (
    <ClayCard size="sm" className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
        <Zap className="h-6 w-6 text-primary" />
      </div>
      <div>
        <p data-testid="xp-count" className="font-sans text-2xl font-bold text-foreground">
          {xp.toLocaleString()}
        </p>
        <p className="text-sm text-muted-foreground">total XP</p>
      </div>
    </ClayCard>
  )
}
