import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { TOTAL_STEPS } from '@/lib/auth/onboarding'

const onboardingSchema = z.object({
  step: z.number().int().min(1).max(10),
  data: z.object({
    grade: z.number().int().min(0).max(12).nullish(),
    region: z.enum(['appalachia', 'delta', 'tribal']).nullish(),
    state: z.string().max(2).nullish(),
    subjects: z.array(z.enum(['math', 'ela'])).nullish(),
    dialectPreference: z.string().max(50).nullish(),
    offlineDownloadPreference: z.boolean().nullish(),
    dateOfBirth: z.string().nullish(),
  }).strict(),
})

export async function GET() {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { data: student } = await supabase
    .from('students')
    .select('grade, region, state, subjects, dialect_preference, offline_download_preference, onboarding_step, onboarding_completed')
    .eq('id', user.id)
    .single()

  if (!student) {
    return NextResponse.json({ error: 'Student profile not found' }, { status: 404 })
  }

  // Use onboarding_step as source of truth (field-value checks are unreliable due to DB defaults)
  const nextStep = student.onboarding_completed
    ? TOTAL_STEPS + 1
    : student.onboarding_step

  return NextResponse.json({
    nextStep,
    data: {
      grade: student.grade,
      region: student.region,
      state: student.state,
      subjects: student.subjects,
      dialectPreference: student.dialect_preference,
      offlineDownloadPreference: student.offline_download_preference,
    },
  })
}

export async function POST(req: NextRequest) {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let parsed: z.infer<typeof onboardingSchema>
  try {
    parsed = onboardingSchema.parse(await req.json())
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }
  const { step, data } = parsed

  // Build update payload based on current step
  const nextOnboardingStep = Math.min(step + 1, TOTAL_STEPS + 1)
  const updates: Record<string, unknown> = {
    onboarding_step: nextOnboardingStep,
  }

  if (data.grade != null) updates.grade = data.grade
  if (data.region) updates.region = data.region
  if (data.state) updates.state = data.state
  if (data.subjects) updates.subjects = data.subjects
  if (data.dialectPreference) updates.dialect_preference = data.dialectPreference
  if (data.offlineDownloadPreference != null) {
    updates.offline_download_preference = data.offlineDownloadPreference
  }

  // Mark onboarding complete when user finishes the final step
  if (step >= TOTAL_STEPS) {
    updates.onboarding_completed = true
  }

  const { error } = await supabase
    .from('students')
    .update(updates)
    .eq('id', user.id)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({
    success: true,
    nextStep: nextOnboardingStep,
  })
}
