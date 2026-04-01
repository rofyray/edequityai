import { createServerSupabaseClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { ParentDashboardClient } from './ParentDashboardClient'

export default async function ParentDashboardPage() {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/login')
  if (user.user_metadata?.role !== 'parent') redirect('/dashboard')

  return <ParentDashboardClient parentId={user.id} />
}
