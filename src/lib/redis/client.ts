import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
})

// Cache key patterns and TTLs (seconds)
const TTL = {
  EMBEDDING: 24 * 60 * 60,    // 24h
  SEARCH: 4 * 60 * 60,        // 4h
  TRANSLATION: 24 * 60 * 60,  // 24h
  AUDIO: 30 * 60,             // 30min (session-scoped)
} as const

export async function getCachedEmbedding(key: string): Promise<number[] | null> {
  return redis.get<number[]>(`embed:${key}`)
}

export async function setCachedEmbedding(key: string, embedding: number[]): Promise<void> {
  await redis.set(`embed:${key}`, embedding, { ex: TTL.EMBEDDING })
}

export async function getCachedSearch(key: string): Promise<unknown | null> {
  return redis.get(`search:${key}`)
}

export async function setCachedSearch(key: string, results: unknown): Promise<void> {
  await redis.set(`search:${key}`, results, { ex: TTL.SEARCH })
}
