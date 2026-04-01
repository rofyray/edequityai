import { NextRequest, NextResponse } from 'next/server'
import { checkAccountLockStatus, recordFailedAttempt, clearFailedAttempts } from '@/lib/auth/lockout'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email(),
  action: z.enum(['check', 'record-failure', 'record-success']),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, action } = schema.parse(body)

    if (action === 'check') {
      const lockStatus = await checkAccountLockStatus(email)
      if (lockStatus.isLocked) {
        return NextResponse.json(
          { ok: false, isLocked: true, unlockAt: lockStatus.unlockAt },
          { status: 429 }
        )
      }
      return NextResponse.json({ ok: true, isLocked: false })
    }

    if (action === 'record-failure') {
      const { isLocked } = await recordFailedAttempt(email)
      if (isLocked) {
        return NextResponse.json(
          { ok: false, isLocked: true },
          { status: 429 }
        )
      }
      return NextResponse.json({ ok: true, isLocked: false })
    }

    if (action === 'record-success') {
      await clearFailedAttempts(email)
      return NextResponse.json({ ok: true })
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Validation failed' }, { status: 400 })
    }
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
