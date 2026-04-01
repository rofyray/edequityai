import type { ModuleSeed, CurriculumChunk } from './types'

// ~512 tokens ≈ 384 words (1 token ≈ 0.75 words)
const CHUNK_SIZE_WORDS = 384
const OVERLAP_WORDS = 48 // ~64 tokens

/** Split a text into overlapping word-based chunks */
function splitIntoChunks(text: string, chunkSize: number, overlap: number): string[] {
  const words = text.split(/\s+/).filter(Boolean)
  if (words.length <= chunkSize) {
    return [words.join(' ')]
  }

  const chunks: string[] = []
  let position = 0

  while (position < words.length) {
    const end = Math.min(position + chunkSize, words.length)
    chunks.push(words.slice(position, end).join(' '))
    if (end >= words.length) break
    position += chunkSize - overlap
  }

  return chunks
}

/** Chunk a module's content into CurriculumChunk objects for embedding */
export function chunkModuleContent(module: ModuleSeed): CurriculumChunk[] {
  const chunks: CurriculumChunk[] = []
  const baseMetadata = {
    moduleSlug: module.slug,
    standardCodes: module.standardCodes,
    topicCluster: module.topicCluster,
    subject: module.subject,
    grade: module.grade,
    gradeBand: module.gradeBand,
  }

  // Combine intro + segments into lesson text chunks
  const introText = `${module.title}. ${module.content.intro.text}`

  for (const segment of module.content.segments) {
    const segmentText =
      segment.index === 0
        ? `${introText} ${segment.title}. ${segment.text}`
        : `${segment.title}. ${segment.text}`

    const textChunks = splitIntoChunks(segmentText, CHUNK_SIZE_WORDS, OVERLAP_WORDS)
    for (const text of textChunks) {
      chunks.push({
        text,
        metadata: { ...baseMetadata, segmentIndex: segment.index },
      })
    }
  }

  // Chunk practice problems as separate content (useful for RAG retrieval of examples)
  const practiceTexts = module.content.practice.map(
    (p) => `Practice: ${p.question} Answer: ${p.explanation}`
  )
  const combinedPractice = practiceTexts.join(' ')
  if (combinedPractice.length > 0) {
    const practiceChunks = splitIntoChunks(combinedPractice, CHUNK_SIZE_WORDS, OVERLAP_WORDS)
    for (const text of practiceChunks) {
      chunks.push({
        text,
        metadata: { ...baseMetadata, segmentIndex: -1 }, // -1 = practice content
      })
    }
  }

  return chunks
}
