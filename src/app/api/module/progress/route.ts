import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createServerSupabaseClient } from '@/lib/supabase/server'

const progressSchema = z.object({
  moduleId: z.string().uuid(),
  segmentIndex: z.number().int().min(0),
  phase: z.string(),
})

export async function POST(req: NextRequest) {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let body: z.infer<typeof progressSchema>
  try {
    body = progressSchema.parse(await req.json())
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const { error } = await supabase
    .from('student_progress')
    .upsert(
      {
        student_id: user.id,
        module_id: body.moduleId,
        segment_index: body.segmentIndex,
      },
      { onConflict: 'student_id,module_id' }
    )

  if (error) {
    return NextResponse.json({ error: 'Failed to save progress' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
