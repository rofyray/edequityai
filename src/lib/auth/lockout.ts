import { redis } from '@/lib/redis/client'

const MAX_ATTEMPTS = 5
const LOCKOUT_DURATION = 15 * 60 // 15 minutes in seconds

function lockoutKey(email: string): string {
  return `lockout:${email.toLowerCase()}`
}

function attemptsKey(email: string): string {
  return `login_attempts:${email.toLowerCase()}`
}

export async function checkAccountLockStatus(email: string) {
  const lockedUntil = await redis.get<number>(lockoutKey(email))
  if (lockedUntil && Date.now() < lockedUntil) {
    return {
      isLocked: true,
      unlockAt: new Date(lockedUntil),
    }
  }
  return { isLocked: false, unlockAt: null }
}

export async function recordFailedAttempt(email: string): Promise<{ isLocked: boolean }> {
  const key = attemptsKey(email)
  const attempts = ((await redis.get<number>(key)) ?? 0) + 1

  if (attempts >= MAX_ATTEMPTS) {
    const unlockAt = Date.now() + LOCKOUT_DURATION * 1000
    await redis.set(lockoutKey(email), unlockAt, { ex: LOCKOUT_DURATION })
    await redis.del(key)
    return { isLocked: true }
  }

  await redis.set(key, attempts, { ex: LOCKOUT_DURATION })
  return { isLocked: false }
}

export async function clearFailedAttempts(email: string): Promise<void> {
  await redis.del(attemptsKey(email))
}
