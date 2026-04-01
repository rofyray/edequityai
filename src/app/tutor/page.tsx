import { createServerSupabaseClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { TutorPageClient } from './TutorPageClient'

export default async function TutorPage() {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  // Verify student role
  const role = user.user_metadata?.role
  if (role !== 'student') {
    redirect('/dashboard')
  }

  // Load student profile
  const { data: student } = await supabase
    .from('students')
    .select('id, grade, region, state, subjects')
    .eq('id', user.id)
    .single()

  const { data: userProfile } = await supabase
    .from('users')
    .select('full_name')
    .eq('id', user.id)
    .single()

  if (!student) {
    redirect('/onboarding')
  }

  return (
    <TutorPageClient
      studentId={student.id}
      grade={student.grade}
      region={student.region as 'appalachia' | 'delta' | 'tribal'}
      fullName={userProfile?.full_name ?? 'Student'}
    />
  )
}
