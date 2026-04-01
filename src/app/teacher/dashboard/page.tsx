import { createServerSupabaseClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { TeacherDashboardClient } from './TeacherDashboardClient'

export default async function TeacherDashboardPage() {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/login')
  if (user.user_metadata?.role !== 'teacher') redirect('/dashboard')

  return <TeacherDashboardClient teacherId={user.id} />
}
