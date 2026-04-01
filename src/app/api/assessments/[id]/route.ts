import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import type { AssessmentItem } from '@/types/progress'

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { data: assessment } = await supabase
    .from('assessments')
    .select('*')
    .eq('id', id)
    .eq('student_id', user.id)
    .single()

  if (!assessment) {
    return NextResponse.json({ error: 'Assessment not found' }, { status: 404 })
  }

  const items = assessment.items as AssessmentItem[]

  // If not completed, hide correct answers
  const safeItems = assessment.completed
    ? items
    : items.map(({ correctAnswer: _ca, ...rest }) => rest)

  return NextResponse.json({
    id: assessment.id,
    subject: assessment.subject,
    grade: assessment.grade,
    standardCode: assessment.standard_code,
    difficulty: assessment.difficulty,
    completed: assessment.completed,
    score: assessment.score,
    items: safeItems,
  })
}
