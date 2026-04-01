import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { determineStudentStatus } from '@/lib/progress/at-risk'
import type { StudentStatus, TeacherClassRoster } from '@/lib/dashboard/teacher-types'

export async function GET(req: NextRequest) {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user || user.user_metadata?.role !== 'teacher') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const admin = await createServiceRoleClient()

  // Get assigned students
  const { data: assignments } = await admin
    .from('teacher_class_assignments')
    .select('student_id')
    .eq('teacher_id', user.id)

  if (!assignments || assignments.length === 0) {
    return NextResponse.json({
      students: [],
      stats: { totalStudents: 0, atRiskCount: 0, excellingCount: 0, avgMastery: 0, avgCompletion: 0 },
    })
  }

  const studentIds = assignments.map((a) => a.student_id)

  // Fetch student profiles
  const { data: students } = await admin
    .from('students')
    .select('id, grade, region, state, streak_days, xp_total')
    .in('id', studentIds)

  const { data: users } = await admin
    .from('users')
    .select('id, full_name')
    .in('id', studentIds)

  const nameMap = new Map((users ?? []).map((u) => [u.id, u.full_name]))

  // Fetch progress for all students
  const { data: allProgress } = await admin
    .from('student_progress')
    .select('student_id, module_id, score, completed, completed_at')
    .in('student_id', studentIds)

  // Fetch mastery
  const { data: allMastery } = await admin
    .from('standard_mastery')
    .select('student_id, subject, mastery_percentage')
    .in('student_id', studentIds)

  // Fetch recent session events for last active
  const { data: recentEvents } = await admin
    .from('session_events')
    .select('student_id, created_at, module_id')
    .in('student_id', studentIds)
    .order('created_at', { ascending: false })

  // Fetch module titles
  const { data: modules } = await admin
    .from('modules')
    .select('id, title')
    .eq('is_placeholder', false)

  const moduleMap = new Map((modules ?? []).map((m) => [m.id, m.title]))

  // Build student status list
  const subject = req.nextUrl.searchParams.get('subject') as 'math' | 'ela' | null
  const totalModules = (modules ?? []).length

  const studentStatuses: StudentStatus[] = (students ?? []).map((s) => {
    const progress = (allProgress ?? []).filter((p) => p.student_id === s.id)
    const completedProgress = progress.filter((p) => p.completed)
    const recentScores = completedProgress
      .sort((a, b) => new Date(b.completed_at!).getTime() - new Date(a.completed_at!).getTime())
      .slice(0, 3)
      .map((p) => Number(p.score ?? 0))

    const mastery = (allMastery ?? []).filter((m) => m.student_id === s.id)
    const mathMastery = mastery.filter((m) => m.subject === 'math')
    const elaMastery = mastery.filter((m) => m.subject === 'ela')
    const avgMath = mathMastery.length > 0 ? Math.round(mathMastery.reduce((a, m) => a + Number(m.mastery_percentage), 0) / mathMastery.length) : 0
    const avgEla = elaMastery.length > 0 ? Math.round(elaMastery.reduce((a, m) => a + Number(m.mastery_percentage), 0) / elaMastery.length) : 0

    const lastEvent = (recentEvents ?? []).find((e) => e.student_id === s.id)
    const currentModuleId = lastEvent?.module_id

    return {
      id: s.id,
      fullName: nameMap.get(s.id) ?? 'Unknown',
      grade: s.grade,
      region: s.region,
      state: s.state,
      lastActive: lastEvent?.created_at ?? null,
      currentModule: currentModuleId ? (moduleMap.get(currentModuleId) ?? null) : null,
      recentScores,
      status: determineStudentStatus(recentScores),
      mastery: { math: avgMath, ela: avgEla },
      xpTotal: s.xp_total,
      streakDays: s.streak_days,
      modulesCompleted: completedProgress.length,
    }
  })

  // Filter by subject if specified
  const filtered = subject
    ? studentStatuses.filter((s) => s.mastery[subject] > 0 || s.recentScores.length > 0)
    : studentStatuses

  // Sort: at-risk first, then by name
  filtered.sort((a, b) => {
    const statusOrder = { 'at-risk': 0, 'on-track': 1, 'excelling': 2 }
    const diff = statusOrder[a.status] - statusOrder[b.status]
    return diff !== 0 ? diff : a.fullName.localeCompare(b.fullName)
  })

  // Compute stats
  const atRiskCount = filtered.filter((s) => s.status === 'at-risk').length
  const excellingCount = filtered.filter((s) => s.status === 'excelling').length
  const avgMastery = filtered.length > 0
    ? Math.round(filtered.reduce((a, s) => a + (s.mastery.math + s.mastery.ela) / 2, 0) / filtered.length)
    : 0
  const avgCompletion = totalModules > 0 && filtered.length > 0
    ? Math.round(filtered.reduce((a, s) => a + s.modulesCompleted, 0) / filtered.length / totalModules * 100)
    : 0

  const roster: TeacherClassRoster = {
    students: filtered,
    stats: {
      totalStudents: filtered.length,
      atRiskCount,
      excellingCount,
      avgMastery,
      avgCompletion,
    },
  }

  return NextResponse.json(roster)
}
