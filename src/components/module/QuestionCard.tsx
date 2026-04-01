'use client'

import { useState } from 'react'
import { Check, X } from 'lucide-react'
import { ClayCard } from '../clay/ClayCard'
import { ClayButton } from '../clay/ClayButton'
import { ClayInput } from '../clay/ClayInput'
import { HintPanel } from './HintPanel'
import type { PracticeQuestion, AssessmentQuestion } from '@/lib/ingestion/types'
import type { QuestionState } from '@/types/module-player'

interface QuestionCardProps {
  question: PracticeQuestion | AssessmentQuestion
  state: QuestionState
  isPractice: boolean
  onSelectAnswer: (answer: string) => void
  onSubmit: () => void
  onRequestHint?: () => void
}

export function QuestionCard({
  question,
  state,
  isPractice,
  onSelectAnswer,
  onSubmit,
  onRequestHint,
}: QuestionCardProps) {
  const [textInput, setTextInput] = useState('')
  const isAnswered = state.isCorrect !== null
  const showFeedback = isAnswered

  return (
    <ClayCard className="p-6 space-y-4">
      <p className="text-base font-semibold">{question.question}</p>

      {/* Multiple choice */}
      {question.type === 'multiple-choice' && question.options && (
        <div className="space-y-2">
          {question.options.map((option) => (
            <button
              key={option}
              onClick={() => !isAnswered && onSelectAnswer(option)}
              disabled={isAnswered}
              className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all text-sm ${
                state.selectedAnswer === option
                  ? isAnswered
                    ? state.isCorrect
                      ? 'border-green-500 bg-green-50 dark:bg-green-950/20'
                      : option === question.correctAnswer
                        ? 'border-green-500 bg-green-50 dark:bg-green-950/20'
                        : 'border-red-500 bg-red-50 dark:bg-red-950/20'
                    : 'border-primary bg-primary/10'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}

      {/* Short answer / Fill blank */}
      {(question.type === 'short-answer' || question.type === 'fill-blank') && (
        <div>
          <ClayInput
            value={state.selectedAnswer ?? textInput}
            onChange={(e) => {
              setTextInput(e.target.value)
              onSelectAnswer(e.target.value)
            }}
            placeholder={question.type === 'fill-blank' ? 'Fill in the blank...' : 'Type your answer...'}
            disabled={isAnswered}
            aria-label="answer"
          />
        </div>
      )}

      {/* Submit button */}
      {!isAnswered && state.selectedAnswer && (
        <ClayButton onClick={onSubmit} data-testid="check-btn">
          Check Answer
        </ClayButton>
      )}

      {/* Feedback */}
      {showFeedback && (
        <div
          data-testid="feedback"
          className={`flex items-center gap-2 p-3 rounded-xl ${
            state.isCorrect
              ? 'bg-green-50 dark:bg-green-950/20 text-green-700 dark:text-green-300'
              : 'bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-300'
          }`}
        >
          {state.isCorrect ? (
            <>
              <Check className="h-5 w-5" />
              <span className="font-semibold">Correct!</span>
            </>
          ) : (
            <>
              <X className="h-5 w-5" />
              <span>Not quite — let&apos;s look at this together.</span>
            </>
          )}
        </div>
      )}

      {/* Explanation after answering (practice only) */}
      {showFeedback && isPractice && 'explanation' in question && (
        <p className="text-sm text-muted-foreground">{(question as PracticeQuestion).explanation}</p>
      )}

      {/* Hint panel (practice only) */}
      {isPractice && !isAnswered && onRequestHint && (
        <HintPanel
          question={question as PracticeQuestion}
          hintLevel={state.hintLevel}
          onRequestHint={onRequestHint}
        />
      )}
    </ClayCard>
  )
}
