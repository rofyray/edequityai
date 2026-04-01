'use client'

import { ClayCard } from '../clay/ClayCard'
import { ClayButton } from '../clay/ClayButton'
import type { ModuleIntro } from '@/lib/ingestion/types'

interface IntroViewProps {
  intro: ModuleIntro
  description: string
  onStart: () => void
}

export function IntroView({ intro, description, onStart }: IntroViewProps) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-serif font-bold mb-2">{intro.title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>

      <ClayCard className="p-6">
        <p className="text-base leading-relaxed">{intro.text}</p>
      </ClayCard>

      {intro.culturalHook && (
        <ClayCard className="p-4 border-l-4 border-primary bg-primary/5">
          <p className="text-sm italic text-foreground/80">{intro.culturalHook}</p>
        </ClayCard>
      )}

      <div className="flex justify-center pt-4">
        <ClayButton onClick={onStart} size="lg">
          Start Learning
        </ClayButton>
      </div>
    </div>
  )
}
