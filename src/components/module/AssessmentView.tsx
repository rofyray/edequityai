'use client'

import { QuestionCard } from './QuestionCard'
import type { AssessmentQuestion } from '@/lib/ingestion/types'
import type { QuestionState } from '@/types/module-player'

interface AssessmentViewProps {
  questions: AssessmentQuestion[]
  states: QuestionState[]
  currentIndex: number
  onSelectAnswer: (index: number, answer: string) => void
  onSubmit: (index: number) => void
}

export function AssessmentView({
  questions,
  states,
  currentIndex,
  onSelectAnswer,
  onSubmit,
}: AssessmentViewProps) {
  const question = questions[currentIndex]
  const state = states[currentIndex]
  if (!question || !state) return null

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-serif font-bold">Mini-Assessment</h2>
        <span className="text-xs text-muted-foreground">
          Question {currentIndex + 1} of {questions.length}
        </span>
      </div>

      <QuestionCard
        question={question}
        state={state}
        isPractice={false}
        onSelectAnswer={(answer) => onSelectAnswer(currentIndex, answer)}
        onSubmit={() => onSubmit(currentIndex)}
      />
    </div>
  )
}
