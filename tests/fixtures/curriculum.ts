import type { ModuleSeed, ModuleContent } from '@/lib/ingestion/types'

export const mockModuleContent: ModuleContent = {
  intro: {
    title: 'Adding Fractions',
    text: 'Today we will learn how to add fractions with like and unlike denominators.',
  },
  segments: [
    {
      index: 0,
      title: 'Like Denominators',
      text: 'When fractions have the same denominator, adding them is simple. Just add the numerators and keep the denominator the same. For example, one third plus one third equals two thirds. The denominator stays as three because the size of the pieces does not change.',
      keyVocabulary: ['numerator', 'denominator', 'like denominators'],
      example: '1/3 + 1/3 = 2/3',
    },
    {
      index: 1,
      title: 'Unlike Denominators',
      text: 'When fractions have different denominators, we need to find a common denominator first. A common denominator is a number that both denominators divide into evenly. For example, to add one half plus one third, we convert both to sixths: three sixths plus two sixths equals five sixths.',
      keyVocabulary: ['unlike denominators', 'common denominator', 'convert'],
      example: '1/2 + 1/3 = 3/6 + 2/6 = 5/6',
    },
    {
      index: 2,
      title: 'Simplifying Sums',
      text: 'After adding fractions, always check if the answer can be simplified. A fraction is simplified when the numerator and denominator share no common factors other than one. For example, two fourths simplifies to one half because both two and four are divisible by two.',
      keyVocabulary: ['simplify', 'common factor', 'reduce'],
    },
  ],
  practice: [
    {
      index: 0,
      question: '1/4 + 2/4 = ?',
      type: 'short-answer',
      correctAnswer: '3/4',
      hint: 'The denominators are the same, so just add the numerators.',
      explanation: '1/4 + 2/4 = 3/4. Add numerators: 1 + 2 = 3. Keep denominator: 4.',
      standardCode: '5.NF.1',
    },
    {
      index: 1,
      question: '1/2 + 1/4 = ?',
      type: 'short-answer',
      correctAnswer: '3/4',
      hint: 'Convert 1/2 to fourths first.',
      explanation: '1/2 = 2/4. Then 2/4 + 1/4 = 3/4.',
      standardCode: '5.NF.1',
    },
    {
      index: 2,
      question: 'What is the first step when adding fractions with unlike denominators?',
      type: 'multiple-choice',
      options: ['Add the numerators', 'Find a common denominator', 'Simplify', 'Multiply'],
      correctAnswer: 'Find a common denominator',
      hint: 'You need the pieces to be the same size.',
      explanation: 'Before adding fractions with unlike denominators, find a common denominator so both fractions have equal-sized parts.',
      standardCode: '5.NF.1',
    },
    {
      index: 3,
      question: '2/6 + 1/6 = ?',
      type: 'short-answer',
      correctAnswer: '3/6',
      hint: 'Same denominator — just add the tops.',
      explanation: '2/6 + 1/6 = 3/6, which simplifies to 1/2.',
      standardCode: '5.NF.1',
    },
    {
      index: 4,
      question: '1/3 + 1/6 = ?',
      type: 'short-answer',
      correctAnswer: '3/6',
      hint: 'Convert 1/3 to sixths: 1/3 = 2/6.',
      explanation: '1/3 = 2/6. Then 2/6 + 1/6 = 3/6, which simplifies to 1/2.',
      standardCode: '5.NF.1',
    },
  ],
  assessment: {
    questions: [
      { question: '3/8 + 2/8 = ?', type: 'short-answer', correctAnswer: '5/8', standardCode: '5.NF.1' },
      { question: '1/3 + 1/3 = ?', type: 'short-answer', correctAnswer: '2/3', standardCode: '5.NF.1' },
      { question: '1/4 + 1/2 = ?', type: 'short-answer', correctAnswer: '3/4', standardCode: '5.NF.1' },
    ],
  },
}

export const mockModuleSeed: ModuleSeed = {
  slug: 'grade5-math-adding-fractions-test',
  title: 'Adding Fractions',
  description: 'Learn to add fractions with like and unlike denominators',
  subject: 'math',
  grade: 5,
  gradeBand: 'k5',
  topicCluster: 'Number & Operations—Fractions',
  standardCodes: ['5.NF.1', '5.NF.2'],
  content: mockModuleContent,
}

/** A fake 1536-dim embedding vector for testing (all zeros with a few non-zero values) */
export function createFakeEmbedding(seed: number = 0): number[] {
  const embedding = new Array<number>(1536).fill(0)
  embedding[0] = 0.1 + seed * 0.01
  embedding[1] = 0.2 + seed * 0.01
  embedding[100] = 0.5
  // Normalize
  const norm = Math.sqrt(embedding.reduce((sum, v) => sum + v * v, 0))
  return embedding.map((v) => v / norm)
}
