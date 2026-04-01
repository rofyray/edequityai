import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { generateAssessment } from '@/lib/progress/assessment-generator'
import { getRecommendedDifficulty } from '@/lib/progress/adaptive'
import type { TutorRegion } from '@/types/tutor'

const generateSchema = z.object({
  subject: z.enum(['math', 'ela']),
  standardCode: z.string().min(1),
  difficulty: z.enum(['foundational', 'grade_level', 'advanced']).optional(),
})

export async function POST(req: NextRequest) {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let body: z.infer<typeof generateSchema>
  try {
    body = generateSchema.parse(await req.json())
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  // Load student profile
  const { data: student } = await supabase
    .from('students')
    .select('grade, region')
    .eq('id', user.id)
    .single()

  if (!student) {
    return NextResponse.json({ error: 'Student not found' }, { status: 404 })
  }

  // Get recommended difficulty if not specified
  const difficulty = body.difficulty ?? await getRecommendedDifficulty(user.id)

  // Generate assessment items
  const items = await generateAssessment({
    subject: body.subject,
    grade: student.grade,
    standardCode: body.standardCode,
    region: student.region as TutorRegion,
    difficulty,
  })

  // Save to DB
  const admin = await createServiceRoleClient()
  const { data: assessment, error } = await admin
    .from('assessments')
    .insert({
      student_id: user.id,
      subject: body.subject,
      grade: student.grade,
      standard_code: body.standardCode,
      items,
      difficulty,
    })
    .select('id')
    .single()

  if (error || !assessment) {
    return NextResponse.json({ error: 'Failed to save assessment' }, { status: 500 })
  }

  // Return items without correctAnswer (student shouldn't see answers yet)
  const safeItems = items.map(({ correctAnswer: _ca, ...rest }) => rest)

  return NextResponse.json({
    assessmentId: assessment.id,
    items: safeItems,
    difficulty,
  })
}
