'use client'

import Link from 'next/link'
import { Trophy, Flame, Zap, RotateCcw } from 'lucide-react'
import { ClayCard } from '../clay/ClayCard'
import { ClayButton } from '../clay/ClayButton'
import type { ModuleCompletionResponse } from '@/types/module-player'

interface CompletionViewProps {
  score: number
  completionResult: ModuleCompletionResponse | null
  onReview: () => void
}

export function CompletionView({ score, completionResult, onReview }: CompletionViewProps) {
  return (
    <div className="max-w-md mx-auto px-4 py-8 space-y-6 text-center">
      <div className="text-6xl animate-bounce">
        {score >= 80 ? '🎉' : score >= 60 ? '👏' : '💪'}
      </div>

      <h2 className="text-2xl font-serif font-bold">
        {score >= 80 ? 'Amazing Work!' : score >= 60 ? 'Great Job!' : 'Good Effort!'}
      </h2>

      <ClayCard className="p-6 space-y-4">
        {/* Score */}
        <div className="flex items-center justify-center gap-2">
          <Trophy className="h-5 w-5 text-yellow-500" />
          <span className="text-2xl font-bold">{score}%</span>
        </div>

        {completionResult && (
          <>
            {/* XP */}
            <div className="flex items-center justify-center gap-2 text-primary">
              <Zap className="h-5 w-5" />
              <span className="font-semibold">+{completionResult.xpEarned} XP</span>
              <span className="text-sm text-muted-foreground">
                (Total: {completionResult.xpTotal})
              </span>
            </div>

            {/* Streak */}
            <div className="flex items-center justify-center gap-2">
              <Flame className="h-5 w-5 text-orange-500" />
              <span className="font-semibold">{completionResult.streakDays} day streak</span>
              {completionResult.streakUpdated && (
                <span className="text-xs text-green-600 font-medium">+1!</span>
              )}
            </div>
          </>
        )}
      </ClayCard>

      <div className="flex flex-col gap-3 pt-4">
        <Link href="/dashboard">
          <ClayButton className="w-full">Back to Dashboard</ClayButton>
        </Link>
        <ClayButton variant="ghost" onClick={onReview}>
          <RotateCcw className="h-4 w-4 mr-2" />
          Review Module
        </ClayButton>
      </div>
    </div>
  )
}
