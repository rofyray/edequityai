'use client'

import { QuestionCard } from './QuestionCard'
import type { PracticeQuestion } from '@/lib/ingestion/types'
import type { QuestionState } from '@/types/module-player'

interface PracticeViewProps {
  questions: PracticeQuestion[]
  states: QuestionState[]
  currentIndex: number
  onSelectAnswer: (index: number, answer: string) => void
  onSubmit: (index: number) => void
  onRequestHint: (index: number) => void
}

export function PracticeView({
  questions,
  states,
  currentIndex,
  onSelectAnswer,
  onSubmit,
  onRequestHint,
}: PracticeViewProps) {
  const question = questions[currentIndex]
  const state = states[currentIndex]
  if (!question || !state) return null

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-serif font-bold">Practice</h2>
        <span className="text-xs text-muted-foreground">
          Question {currentIndex + 1} of {questions.length}
        </span>
      </div>

      <QuestionCard
        question={question}
        state={state}
        isPractice
        onSelectAnswer={(answer) => onSelectAnswer(currentIndex, answer)}
        onSubmit={() => onSubmit(currentIndex)}
        onRequestHint={() => onRequestHint(currentIndex)}
      />
    </div>
  )
}
