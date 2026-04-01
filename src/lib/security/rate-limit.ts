import { Ratelimit } from '@upstash/ratelimit'
import { redis } from '../redis/client'

/**
 * Rate limiters for API endpoints.
 * Uses Upstash Redis sliding window.
 */
export const tutorLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(20, '1 m'),
  prefix: 'rl:tutor',
})

export const voiceLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, '1 m'),
  prefix: 'rl:voice',
})

export const assessmentLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, '1 m'),
  prefix: 'rl:assessment',
})

export const authLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, '1 m'),
  prefix: 'rl:auth',
})

/**
 * Check rate limit for a user. Returns 429 response if exceeded.
 */
export async function checkRateLimit(
  limiter: Ratelimit,
  identifier: string
): Promise<{ limited: boolean; remaining: number }> {
  const { success, remaining } = await limiter.limit(identifier)
  return { limited: !success, remaining }
}
