import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'

const syncEventSchema = z.object({
  type: z.enum(['progress', 'session', 'assessment']),
  payload: z.record(z.string(), z.unknown()),
  timestamp: z.number(),
})

export async function POST(req: NextRequest) {
  // Auth
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  }

  let body: z.infer<typeof syncEventSchema>
  try {
    body = syncEventSchema.parse(await req.json())
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid body' }, { status: 400 })
  }

  // Timestamp validation — reject future or stale events
  const MAX_FUTURE_MS = 5 * 60 * 1000 // 5 minutes
  const MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000 // 7 days
  const now = Date.now()

  if (body.timestamp > now + MAX_FUTURE_MS) {
    return NextResponse.json({ success: false, error: 'Timestamp too far in the future' }, { status: 400 })
  }
  if (body.timestamp < now - MAX_AGE_MS) {
    return NextResponse.json({ success: false, error: 'Event too old to sync' }, { status: 400 })
  }

  // Clamp timestamp to prevent future overwrites
  const safeTimestamp = Math.min(body.timestamp, now)

  const admin = await createServiceRoleClient()

  try {
    switch (body.type) {
      case 'progress': {
        const { moduleId, segmentIndex } = body.payload as {
          moduleId: string
          segmentIndex: number
        }

        // Conflict resolution: only update if this event is newer
        const { data: existing } = await admin
          .from('student_progress')
          .select('updated_at')
          .eq('student_id', user.id)
          .eq('module_id', moduleId)
          .single()

        if (existing) {
          const existingTime = new Date(existing.updated_at).getTime()
          if (safeTimestamp <= existingTime) {
            // Server data is newer — skip this update
            return NextResponse.json({ success: true, skipped: true })
          }
        }

        await admin.from('student_progress').upsert(
          {
            student_id: user.id,
            module_id: moduleId,
            segment_index: segmentIndex,
          },
          { onConflict: 'student_id,module_id' }
        )
        break
      }

      case 'session': {
        const { moduleId, eventType, standardCode, metadata } = body.payload as {
          moduleId: string
          eventType: string
          standardCode?: string
          metadata?: Record<string, unknown>
        }

        // Get or create session
        const { data: session } = await admin
          .from('sessions')
          .select('id')
          .eq('student_id', user.id)
          .eq('module_id', moduleId)
          .is('ended_at', null)
          .order('started_at', { ascending: false })
          .limit(1)
          .single()

        let sessionId = session?.id
        if (!sessionId) {
          const { data: newSession } = await admin
            .from('sessions')
            .insert({ student_id: user.id, module_id: moduleId })
            .select('id')
            .single()
          sessionId = newSession?.id
        }

        if (sessionId) {
          await admin.from('session_events').insert({
            session_id: sessionId,
            student_id: user.id,
            event_type: eventType,
            module_id: moduleId,
            standard_code: standardCode ?? null,
            metadata: metadata ?? {},
          })
        }
        break
      }

      case 'assessment': {
        const { moduleId, score, xpEarned } = body.payload as {
          moduleId: string
          score: number
          xpEarned: number
        }

        // Conflict resolution: only update if timestamp is newer
        const { data: existing } = await admin
          .from('student_progress')
          .select('updated_at, completed')
          .eq('student_id', user.id)
          .eq('module_id', moduleId)
          .single()

        if (existing?.completed) {
          // Already completed — don't overwrite
          return NextResponse.json({ success: true, skipped: true })
        }

        await admin.from('student_progress').upsert(
          {
            student_id: user.id,
            module_id: moduleId,
            completed: true,
            completed_at: new Date(body.timestamp).toISOString(),
            score,
            xp_earned: xpEarned,
          },
          { onConflict: 'student_id,module_id' }
        )

        // Update student XP
        const { data: student } = await admin
          .from('students')
          .select('xp_total')
          .eq('id', user.id)
          .single()

        if (student) {
          await admin
            .from('students')
            .update({ xp_total: student.xp_total + xpEarned })
            .eq('id', user.id)
        }
        break
      }
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({
      success: false,
      error: err instanceof Error ? err.message : 'Sync failed',
    })
  }
}
