'use client'

import { Lightbulb, Eye } from 'lucide-react'
import { ClayButton } from '../clay/ClayButton'
import { ClayCard } from '../clay/ClayCard'
import { getHintForLevel } from '@/lib/module-player/hints'
import type { PracticeQuestion } from '@/lib/ingestion/types'

interface HintPanelProps {
  question: PracticeQuestion
  hintLevel: number
  onRequestHint: () => void
}

export function HintPanel({ question, hintLevel, onRequestHint }: HintPanelProps) {
  if (hintLevel === 0) {
    return (
      <ClayButton variant="ghost" size="sm" onClick={onRequestHint}>
        <Lightbulb className="h-4 w-4 mr-1" />
        Need a hint?
      </ClayButton>
    )
  }

  const hintText = getHintForLevel(question, hintLevel)
  const isAnswerRevealed = hintLevel >= 4

  return (
    <div className="space-y-2">
      <ClayCard className="p-3 bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-400">
        <div className="flex items-start gap-2">
          {isAnswerRevealed ? (
            <Eye className="h-4 w-4 text-yellow-600 mt-0.5 shrink-0" />
          ) : (
            <Lightbulb className="h-4 w-4 text-yellow-600 mt-0.5 shrink-0" />
          )}
          <p className="text-sm" data-testid={isAnswerRevealed ? 'answer-revealed' : undefined}>
            {hintText}
          </p>
        </div>
      </ClayCard>

      {!isAnswerRevealed && (
        <ClayButton variant="ghost" size="sm" onClick={onRequestHint}>
          {hintLevel >= 3 ? (
            <>
              <Eye className="h-4 w-4 mr-1" />
              Show Answer
            </>
          ) : (
            <>
              <Lightbulb className="h-4 w-4 mr-1" />
              Another Hint ({hintLevel}/3)
            </>
          )}
        </ClayButton>
      )}

      <span data-testid="hint-level" className="sr-only">
        {hintLevel}
      </span>
    </div>
  )
}
