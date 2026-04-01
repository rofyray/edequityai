import { ClayCard, ClayBadge } from '@/components/clay'
import { Clock, Zap, BookOpen, Calculator } from 'lucide-react'
import Link from 'next/link'
import type { RecommendedModule } from '@/lib/dashboard/types'

interface ModuleCardProps {
  module: RecommendedModule
}

export function ModuleCard({ module }: ModuleCardProps) {
  return (
    <Link href={`/module/${module.slug}`} data-testid={`module-card-${module.id}`}>
      <ClayCard size="sm" className="hover:translate-y-[-2px] transition-transform cursor-pointer">
        <div className="flex items-start justify-between mb-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            {module.subject === 'math'
              ? <Calculator className="h-5 w-5 text-primary" />
              : <BookOpen className="h-5 w-5 text-primary" />
            }
          </div>
          <ClayBadge color={module.subject === 'math' ? 'info' : 'success'}>
            {module.subject === 'math' ? 'Math' : 'ELA'}
          </ClayBadge>
        </div>

        <h3 className="font-sans text-base font-bold text-foreground mb-1">
          {module.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3">
          {module.topicCluster}
        </p>

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {module.estimatedMinutes} min
          </span>
          <span className="flex items-center gap-1">
            <Zap className="h-3.5 w-3.5" />
            {module.xpReward} XP
          </span>
        </div>
      </ClayCard>
    </Link>
  )
}
