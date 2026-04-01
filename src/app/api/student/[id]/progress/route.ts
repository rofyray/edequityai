import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { getStudentMasterySnapshot } from '@/lib/progress/mastery'
import { getRecommendedDifficulty } from '@/lib/progress/adaptive'

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

  // Students can view own; teachers/parents must have verified relationship
  if (user.id !== id) {
    const role = user.user_metadata?.role
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

  // Mastery by standard
  const mastery = await getStudentMasterySnapshot(id)

  // Module completion stats
  const { data: progress } = await supabase
    .from('student_progress')
    .select('module_id, score, completed, xp_earned, completed_at')
    .eq('student_id', id)

  const { data: modules } = await supabase
    .from('modules')
    .select('id, subject, title')
    .eq('is_placeholder', false)

  const moduleMap = new Map((modules ?? []).map((m) => [m.id, m]))

  const mathCompleted = (progress ?? []).filter((p) => p.completed && moduleMap.get(p.module_id)?.subject === 'math').length
  const elaCompleted = (progress ?? []).filter((p) => p.completed && moduleMap.get(p.module_id)?.subject === 'ela').length
  const mathTotal = (modules ?? []).filter((m) => m.subject === 'math').length
  const elaTotal = (modules ?? []).filter((m) => m.subject === 'ela').length

  // Recent completions
  const recentCompletions = (progress ?? [])
    .filter((p) => p.completed)
    .sort((a, b) => new Date(b.completed_at!).getTime() - new Date(a.completed_at!).getTime())
    .slice(0, 10)
    .map((p) => ({
      moduleTitle: moduleMap.get(p.module_id)?.title ?? 'Unknown',
      subject: moduleMap.get(p.module_id)?.subject ?? 'math',
      score: Number(p.score),
      xpEarned: p.xp_earned,
      completedAt: p.completed_at,
    }))

  // Recommended difficulty
  const difficulty = await getRecommendedDifficulty(id)

  return NextResponse.json({
    mastery,
    modules: {
      math: { completed: mathCompleted, total: mathTotal },
      ela: { completed: elaCompleted, total: elaTotal },
    },
    recentCompletions,
    difficulty,
  })
}
