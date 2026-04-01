import OpenAI from 'openai'

const EMBEDDING_MODEL = 'text-embedding-3-small'
const EMBEDDING_DIMENSIONS = 1536
const BATCH_SIZE = 100
const MAX_RETRIES = 3
const BASE_DELAY_MS = 1000

function getClient(): OpenAI {
  return new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
}

async function withRetry<T>(fn: () => Promise<T>): Promise<T> {
  let lastError: Error | undefined
  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    try {
      return await fn()
    } catch (err: unknown) {
      lastError = err as Error
      const status = (err as { status?: number }).status
      if (status === 429 || (status && status >= 500)) {
        const delay = BASE_DELAY_MS * Math.pow(2, attempt)
        await new Promise((r) => setTimeout(r, delay))
        continue
      }
      throw err
    }
  }
  throw lastError
}

/** Generate embedding for a single text string */
export async function generateEmbedding(text: string): Promise<number[]> {
  const results = await generateEmbeddings([text])
  return results[0]
}

/** Batch-generate embeddings for multiple texts. Processes in groups of 100. */
export async function generateEmbeddings(texts: string[]): Promise<number[][]> {
  const client = getClient()
  const allEmbeddings: number[][] = []

  for (let i = 0; i < texts.length; i += BATCH_SIZE) {
    const batch = texts.slice(i, i + BATCH_SIZE)

    const response = await withRetry(() =>
      client.embeddings.create({
        model: EMBEDDING_MODEL,
        input: batch,
        dimensions: EMBEDDING_DIMENSIONS,
      })
    )

    // Sort by index to ensure order matches input
    const sorted = response.data.sort((a, b) => a.index - b.index)
    for (const item of sorted) {
      allEmbeddings.push(item.embedding)
    }
  }

  return allEmbeddings
}
