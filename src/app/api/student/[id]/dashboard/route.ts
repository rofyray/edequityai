import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import type { StudentDashboardData } from '@/lib/dashboard/types'

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const supabase = await createServerSupabaseClient()

  // Verify authenticated user matches requested student
  const { data: { user } } = await supabase.auth.getUser()
  if (!user || user.id !== id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Fetch student profile
  const { data: student, error: studentError } = await supabase
    .from('students')
    .select('id, grade, region, state, streak_days, xp_total, subjects')
    .eq('id', id)
    .single()

  if (studentError || !student) {
    return NextResponse.json({ error: 'Student not found' }, { status: 404 })
  }

  const { data: userProfile } = await supabase
    .from('users')
    .select('full_name')
    .eq('id', id)
    .single()

  // Fetch progress per subject
  const { data: mathProgress } = await supabase
    .from('student_progress')
    .select('completed, module_id')
    .eq('student_id', id)
    .eq('completed', true)

  const { data: mathModules } = await supabase
    .from('modules')
    .select('id, subject')
    .in('region', [student.region, 'all'])
    .eq('grade', student.grade)

  const mathTotal = mathModules?.filter(m => m.subject === 'math').length ?? 0
  const elaTotal = mathModules?.filter(m => m.subject === 'ela').length ?? 0
  const completedIds = new Set(mathProgress?.filter(p => p.completed).map(p => p.module_id) ?? [])

  const mathCompleted = mathModules?.filter(m => m.subject === 'math' && completedIds.has(m.id)).length ?? 0
  const elaCompleted = mathModules?.filter(m => m.subject === 'ela' && completedIds.has(m.id)).length ?? 0

  // Fetch recommended modules (not yet completed, matching student's grade/region/subjects)
  const subjects = student.subjects ?? ['math', 'ela']
  const { data: recommended } = await supabase
    .from('modules')
    .select('id, slug, title, subject, grade, topic_cluster, estimated_minutes, xp_reward, region')
    .in('region', [student.region, 'all'])
    .eq('grade', student.grade)
    .eq('is_placeholder', false)
    .in('subject', subjects)
    .limit(20)

  const available = (recommended ?? []).filter(m => !completedIds.has(m.id))

  // Balance subjects: when both are selected, pick at least 2 of each
  let picked: typeof available
  if (subjects.length >= 2) {
    const mathMods = available.filter(m => m.subject === 'math')
    const elaMods = available.filter(m => m.subject === 'ela')
    picked = [...mathMods.slice(0, 2), ...elaMods.slice(0, 2)]
    if (picked.length < 4) {
      const pickedIds = new Set(picked.map(m => m.id))
      const remaining = available.filter(m => !pickedIds.has(m.id))
      picked.push(...remaining.slice(0, 4 - picked.length))
    }
  } else {
    picked = available.slice(0, 4)
  }

  const recommendedModules = picked.slice(0, 4).map(m => ({
    id: m.id,
    slug: m.slug,
    title: m.title,
    subject: m.subject as 'math' | 'ela',
    grade: m.grade,
    topicCluster: m.topic_cluster,
    estimatedMinutes: m.estimated_minutes,
    xpReward: m.xp_reward,
    region: m.region,
  }))

  // Fetch recent activity
  const { data: recentEvents } = await supabase
    .from('session_events')
    .select('id, event_type, module_id, created_at, metadata')
    .eq('student_id', id)
    .order('created_at', { ascending: false })
    .limit(5)

  // Map module IDs to titles
  const moduleIds = [...new Set(recentEvents?.map(e => e.module_id).filter(Boolean) ?? [])]
  const { data: moduleTitles } = moduleIds.length > 0
    ? await supabase.from('modules').select('id, title, subject').in('id', moduleIds)
    : { data: [] }

  const titleMap = new Map((moduleTitles ?? []).map(m => [m.id, { title: m.title, subject: m.subject }]))

  const recentActivity = (recentEvents ?? []).map(e => ({
    id: e.id,
    moduleTitle: titleMap.get(e.module_id)?.title ?? 'Unknown',
    subject: (titleMap.get(e.module_id)?.subject ?? 'math') as 'math' | 'ela',
    score: e.metadata?.score as number | undefined,
    completedAt: e.created_at,
    eventType: e.event_type,
  }))

  // Build achievements
  const achievements = [
    { id: 'first-lesson', label: 'First Lesson', icon: '📚', earned: completedIds.size >= 1 },
    { id: 'streak-3', label: '3-Day Streak', icon: '🔥', earned: student.streak_days >= 3 },
    { id: 'streak-7', label: 'Week Warrior', icon: '⭐', earned: student.streak_days >= 7 },
    { id: 'math-5', label: 'Math Explorer', icon: '🧮', earned: mathCompleted >= 5 },
    { id: 'ela-5', label: 'Word Wizard', icon: '📖', earned: elaCompleted >= 5 },
    { id: 'xp-100', label: 'Century Club', icon: '💯', earned: student.xp_total >= 100 },
  ]

  const dashboard: StudentDashboardData = {
    student: {
      id: student.id,
      fullName: userProfile?.full_name ?? '',
      grade: student.grade,
      region: student.region as 'appalachia' | 'delta' | 'tribal',
      state: student.state,
      streakDays: student.streak_days,
      xpTotal: student.xp_total,
    },
    progress: {
      math: {
        percent: mathTotal > 0 ? Math.round((mathCompleted / mathTotal) * 100) : 0,
        modulesCompleted: mathCompleted,
        totalModules: mathTotal,
      },
      ela: {
        percent: elaTotal > 0 ? Math.round((elaCompleted / elaTotal) * 100) : 0,
        modulesCompleted: elaCompleted,
        totalModules: elaTotal,
      },
    },
    recommendedModules,
    recentActivity,
    achievements,
  }

  return NextResponse.json(dashboard)
}
