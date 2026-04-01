import { createServerSupabaseClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { StudentDashboardClient } from './StudentDashboardClient'

export default async function StudentDashboardPage() {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  // Fetch student profile for server-side rendering
  const { data: student } = await supabase
    .from('students')
    .select('grade, region, state, streak_days, xp_total, subjects, onboarding_completed')
    .eq('id', user.id)
    .single()

  if (!student) redirect('/onboarding')
  if (!student.onboarding_completed) redirect('/onboarding')

  const { data: userProfile } = await supabase
    .from('users')
    .select('full_name')
    .eq('id', user.id)
    .single()

  return (
    <StudentDashboardClient
      studentId={user.id}
      studentName={userProfile?.full_name ?? 'Student'}
      grade={student.grade}
      region={student.region as 'appalachia' | 'delta' | 'tribal'}
      state={student.state}
      streakDays={student.streak_days}
      xpTotal={student.xp_total}
      subjects={student.subjects}
    />
  )
}
