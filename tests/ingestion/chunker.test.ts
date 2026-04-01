import { describe, it, expect } from 'vitest'
import { chunkModuleContent } from '@/lib/ingestion/chunker'
import { mockModuleSeed } from '../fixtures/curriculum'

describe('chunkModuleContent', () => {
  it('produces at least one chunk per segment', () => {
    const chunks = chunkModuleContent(mockModuleSeed)
    // 3 segments + 1 practice chunk = at least 4
    expect(chunks.length).toBeGreaterThanOrEqual(4)
  })

  it('attaches correct metadata to each chunk', () => {
    const chunks = chunkModuleContent(mockModuleSeed)
    for (const chunk of chunks) {
      expect(chunk.metadata.moduleSlug).toBe('grade5-math-adding-fractions-test')
      expect(chunk.metadata.subject).toBe('math')
      expect(chunk.metadata.grade).toBe(5)
      expect(chunk.metadata.gradeBand).toBe('k5')
      expect(chunk.metadata.topicCluster).toBe('Number & Operations—Fractions')
      expect(chunk.metadata.standardCodes).toContain('5.NF.1')
    }
  })

  it('includes intro text in the first segment chunk', () => {
    const chunks = chunkModuleContent(mockModuleSeed)
    const firstChunk = chunks.find((c) => c.metadata.segmentIndex === 0)
    expect(firstChunk).toBeDefined()
    expect(firstChunk!.text).toContain('Adding Fractions')
    expect(firstChunk!.text).toContain('Like Denominators')
  })

  it('creates practice chunks with segmentIndex -1', () => {
    const chunks = chunkModuleContent(mockModuleSeed)
    const practiceChunks = chunks.filter((c) => c.metadata.segmentIndex === -1)
    expect(practiceChunks.length).toBeGreaterThanOrEqual(1)
    expect(practiceChunks[0].text).toContain('Practice:')
  })

  it('chunk text is non-empty', () => {
    const chunks = chunkModuleContent(mockModuleSeed)
    for (const chunk of chunks) {
      expect(chunk.text.trim().length).toBeGreaterThan(0)
    }
  })

  it('handles a module with minimal content', () => {
    const minimal = {
      ...mockModuleSeed,
      slug: 'minimal-test',
      content: {
        ...mockModuleSeed.content,
        segments: [
          { index: 0, title: 'Short', text: 'A short segment.', keyVocabulary: [] },
        ],
        practice: [],
      },
    }
    const chunks = chunkModuleContent(minimal)
    expect(chunks.length).toBeGreaterThanOrEqual(1)
  })
})
