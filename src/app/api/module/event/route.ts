import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createServerSupabaseClient } from '@/lib/supabase/server'

const eventSchema = z.object({
  moduleId: z.string().uuid(),
  eventType: z.enum([
    'explanation_given', 'question_attempted', 'hint_used',
    'correct_answer', 'incorrect_answer', 'module_complete',
    'segment_complete', 'voice_interaction', 'tts_played',
  ]),
  standardCode: z.string().optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
})

export async function POST(req: NextRequest) {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let body: z.infer<typeof eventSchema>
  try {
    body = eventSchema.parse(await req.json())
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  // Get or create an active session
  const { data: existingSession } = await supabase
    .from('sessions')
    .select('id')
    .eq('student_id', user.id)
    .eq('module_id', body.moduleId)
    .is('ended_at', null)
    .order('started_at', { ascending: false })
    .limit(1)
    .single()

  let sessionId = existingSession?.id
  if (!sessionId) {
    const { data: newSession } = await supabase
      .from('sessions')
      .insert({ student_id: user.id, module_id: body.moduleId })
      .select('id')
      .single()
    sessionId = newSession?.id
  }

  if (!sessionId) {
    return NextResponse.json({ error: 'Failed to create session' }, { status: 500 })
  }

  const { error } = await supabase.from('session_events').insert({
    session_id: sessionId,
    student_id: user.id,
    event_type: body.eventType,
    module_id: body.moduleId,
    standard_code: body.standardCode ?? null,
    metadata: body.metadata ?? {},
  })

  if (error) {
    return NextResponse.json({ error: 'Failed to log event' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
