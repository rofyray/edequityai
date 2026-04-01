'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ClayButton } from '../clay/ClayButton'
import type { ModulePhase } from '@/types/module-player'

interface ModuleNavigationProps {
  phase: ModulePhase
  canGoBack: boolean
  canGoForward: boolean
  onBack: () => void
  onNext: () => void
}

export function ModuleNavigation({
  phase,
  canGoBack,
  canGoForward,
  onBack,
  onNext,
}: ModuleNavigationProps) {
  // Don't show navigation on intro (has its own Start button) or complete
  if (phase === 'intro' || phase === 'complete') return null

  return (
    <div className="flex items-center justify-between px-4 py-3 border-t border-border bg-card">
      <ClayButton
        variant="secondary"
        size="sm"
        onClick={onBack}
        disabled={!canGoBack}
      >
        <ChevronLeft className="h-4 w-4 mr-1" />
        Back
      </ClayButton>

      <ClayButton
        size="sm"
        onClick={onNext}
        disabled={!canGoForward}
      >
        Next
        <ChevronRight className="h-4 w-4 ml-1" />
      </ClayButton>
    </div>
  )
}
