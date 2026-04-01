import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { transcribeAudio } from '@/lib/voice/transcribe'
import { containsProfanity, PROFANITY_REDIRECT_MESSAGE } from '@/lib/ai/profanity'
import type { TutorRegion } from '@/types/tutor'

export async function POST(req: NextRequest) {
  // Auth
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Extract audio from FormData
  const formData = await req.formData()
  const audioFile = formData.get('audio')
  if (!audioFile || !(audioFile instanceof Blob)) {
    return NextResponse.json({ error: 'No audio file provided' }, { status: 400 })
  }

  // Load student region
  const { data: student } = await supabase
    .from('students')
    .select('region')
    .eq('id', user.id)
    .single()

  const region = (student?.region as TutorRegion) ?? 'appalachia'

  // Transcribe
  const arrayBuffer = await audioFile.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)

  const result = await transcribeAudio(buffer, region)

  // Profanity check on transcript
  if (result.text && containsProfanity(result.text)) {
    return NextResponse.json(
      { blocked: true, redirectMessage: PROFANITY_REDIRECT_MESSAGE },
      { status: 400 }
    )
  }

  return NextResponse.json({
    text: result.text,
    confidence: result.confidence,
  })
}
