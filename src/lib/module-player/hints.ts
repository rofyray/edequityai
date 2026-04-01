import type { PracticeQuestion } from '../ingestion/types'

/**
 * Get the hint text for a given level.
 * Level 1: question.hint
 * Level 2: first sentence of explanation
 * Level 3: full explanation minus last sentence
 * Level 4: reveals correctAnswer
 */
export function getHintForLevel(question: PracticeQuestion, level: number): string {
  switch (level) {
    case 1:
      return question.hint

    case 2: {
      const sentences = splitSentences(question.explanation)
      return sentences[0] ?? question.hint
    }

    case 3: {
      const sentences = splitSentences(question.explanation)
      if (sentences.length <= 1) return question.explanation
      return sentences.slice(0, -1).join(' ')
    }

    case 4:
      return `The answer is: ${question.correctAnswer}`

    default:
      return ''
  }
}

function splitSentences(text: string): string[] {
  // Split on sentence-ending punctuation followed by a space or end
  return text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean)
}

/** Check if a student's answer matches the correct answer */
export function checkAnswer(studentAnswer: string, correctAnswer: string): boolean {
  return studentAnswer.trim().toLowerCase() === correctAnswer.trim().toLowerCase()
}

/** Calculate module score as percentage */
export function calculateScore(correct: number, total: number): number {
  if (total === 0) return 0
  return Math.round((correct / total) * 100)
}

/** Calculate XP earned (minimum 50% of reward if completed) */
export function calculateXP(xpReward: number, scorePercent: number): number {
  const earned = Math.round(xpReward * scorePercent / 100)
  const minimum = Math.round(xpReward * 0.5)
  return Math.max(earned, minimum)
}
