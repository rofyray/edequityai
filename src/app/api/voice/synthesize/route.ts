import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { synthesizeSpeech } from '@/lib/voice/synthesize'
import type { TutorRegion } from '@/types/tutor'

const synthesizeSchema = z.object({
  text: z.string().min(1).max(5000),
})

export async function POST(req: NextRequest) {
  // Auth
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Parse body
  let body: z.infer<typeof synthesizeSchema>
  try {
    const raw = await req.json()
    body = synthesizeSchema.parse(raw)
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  // Load student region
  const { data: student } = await supabase
    .from('students')
    .select('region')
    .eq('id', user.id)
    .single()

  const region = (student?.region as TutorRegion) ?? 'appalachia'

  // Synthesize
  const audioBuffer = await synthesizeSpeech(body.text, region)

  return new Response(new Uint8Array(audioBuffer), {
    headers: {
      'Content-Type': 'audio/mpeg',
      'Content-Length': audioBuffer.length.toString(),
      'Cache-Control': 'private, max-age=1800',
    },
  })
}
