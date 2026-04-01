import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createServerSupabaseClient } from '@/lib/supabase/server'

const updateProfileSchema = z.object({
  fullName: z.string().min(2).max(100).optional(),
  subjects: z.array(z.enum(['math', 'ela'])).min(1).optional(),
  dialectPreference: z.enum(['standard', 'appalachian', 'southern', 'native']).optional(),
  offlineDownloadPreference: z.boolean().optional(),
})

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const supabase = await createServerSupabaseClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user || user.id !== id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let parsed: z.infer<typeof updateProfileSchema>
  try {
    parsed = updateProfileSchema.parse(await req.json())
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  // Update users table (full_name)
  if (parsed.fullName) {
    const { error } = await supabase
      .from('users')
      .update({ full_name: parsed.fullName })
      .eq('id', user.id)

    if (error) {
      return NextResponse.json({ error: 'Failed to update profile' }, { status: 500 })
    }
  }

  // Update students table (preferences)
  const studentUpdates: Record<string, unknown> = {}
  if (parsed.subjects) studentUpdates.subjects = parsed.subjects
  if (parsed.dialectPreference) studentUpdates.dialect_preference = parsed.dialectPreference
  if (parsed.offlineDownloadPreference !== undefined) {
    studentUpdates.offline_download_preference = parsed.offlineDownloadPreference
  }

  if (Object.keys(studentUpdates).length > 0) {
    const { error } = await supabase
      .from('students')
      .update(studentUpdates)
      .eq('id', user.id)

    if (error) {
      return NextResponse.json({ error: 'Failed to update preferences' }, { status: 500 })
    }
  }

  return NextResponse.json({ success: true })
}
