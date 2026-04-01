import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { getStudentMasterySnapshot } from '@/lib/progress/mastery'
import { generateProgressPDF } from '@/lib/progress/export-pdf'
import type { ProgressReport } from '@/types/progress'

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

  // Verify relationship for non-self access
  const role = user.user_metadata?.role
  if (user.id !== id) {
    if (role === 'teacher') {
      const { data: assignment } = await supabase
        .from('teacher_class_assignments')
        .select('id')
        .eq('teacher_id', user.id)
        .eq('student_id', id)
        .single()
      if (!assignment) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    } else if (role === 'parent') {
      const { data: link } = await supabase
        .from('parent_student_links')
        .select('id')
        .eq('parent_id', user.id)
        .eq('student_id', id)
        .eq('verified', true)
        .single()
      if (!link) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    } else if (role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }
  }

  // Load student profile
  const { data: student } = await supabase
    .from('students')
    .select('id, grade, region, state')
    .eq('id', id)
    .single()

  const { data: userProfile } = await supabase
    .from('users')
    .select('full_name')
    .eq('id', id)
    .single()

  if (!student || !userProfile) {
    return NextResponse.json({ error: 'Student not found' }, { status: 404 })
  }

  // Mastery
  const mastery = await getStudentMasterySnapshot(id)

  // Module stats
  const { data: progress } = await supabase
    .from('student_progress')
    .select('module_id, score, completed, completed_at')
    .eq('student_id', id)

  const { data: modules } = await supabase
    .from('modules')
    .select('id, subject, title')
    .eq('is_placeholder', false)

  const moduleMap = new Map((modules ?? []).map((m) => [m.id, m]))

  const mathProgress = (progress ?? []).filter((p) => moduleMap.get(p.module_id)?.subject === 'math')
  const elaProgress = (progress ?? []).filter((p) => moduleMap.get(p.module_id)?.subject === 'ela')

  const avgScore = (items: typeof mathProgress) => {
    const completed = items.filter((p) => p.completed && p.score !== null)
    if (completed.length === 0) return 0
    return Math.round(completed.reduce((s, p) => s + Number(p.score), 0) / completed.length)
  }

  const report: ProgressReport = {
    student: {
      id,
      fullName: userProfile.full_name,
      grade: student.grade,
      region: student.region,
      state: student.state,
    },
    generatedAt: new Date().toISOString(),
    modules: [
      { subject: 'math', completed: mathProgress.filter((p) => p.completed).length, total: (modules ?? []).filter((m) => m.subject === 'math').length, averageScore: avgScore(mathProgress) },
      { subject: 'ela', completed: elaProgress.filter((p) => p.completed).length, total: (modules ?? []).filter((m) => m.subject === 'ela').length, averageScore: avgScore(elaProgress) },
    ],
    mastery,
    recentActivity: (progress ?? [])
      .filter((p) => p.completed)
      .sort((a, b) => new Date(b.completed_at!).getTime() - new Date(a.completed_at!).getTime())
      .slice(0, 10)
      .map((p) => ({
        moduleTitle: moduleMap.get(p.module_id)?.title ?? 'Unknown',
        score: Number(p.score ?? 0),
        completedAt: p.completed_at!,
      })),
    achievements: [],
  }

  const pdfBuffer = await generateProgressPDF(report)

  return new Response(new Uint8Array(pdfBuffer), {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="progress-${id.slice(0, 8)}.pdf"`,
    },
  })
}
