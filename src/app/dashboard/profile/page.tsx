import { createServerSupabaseClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { StudentProfileClient } from './StudentProfileClient'

export default async function StudentProfilePage() {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  const { data: student } = await supabase
    .from('students')
    .select('grade, region, state, subjects, dialect_preference, offline_download_preference, streak_days, xp_total, created_at')
    .eq('id', user.id)
    .single()

  if (!student) redirect('/onboarding')

  const { data: profile } = await supabase
    .from('users')
    .select('full_name, email')
    .eq('id', user.id)
    .single()

  return (
    <StudentProfileClient
      studentId={user.id}
      fullName={profile?.full_name ?? ''}
      email={profile?.email ?? user.email ?? ''}
      grade={student.grade}
      region={student.region as 'appalachia' | 'delta' | 'tribal'}
      state={student.state}
      subjects={student.subjects as ('math' | 'ela')[]}
      dialectPreference={student.dialect_preference ?? 'standard'}
      offlineDownloadPreference={student.offline_download_preference ?? false}
      streakDays={student.streak_days}
      xpTotal={student.xp_total}
      memberSince={student.created_at}
    />
  )
}
