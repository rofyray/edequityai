import { createServerSupabaseClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import type { UserRole } from './types'

export async function requireAuth(allowedRoles?: UserRole[]) {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const role = (user.user_metadata?.role as UserRole) || 'student'

  if (allowedRoles && !allowedRoles.includes(role)) {
    // Redirect to appropriate dashboard based on actual role
    const routes: Record<UserRole, string> = {
      student: '/dashboard',
      teacher: '/teacher',
      parent: '/parent',
      admin: '/admin',
    }
    redirect(routes[role])
  }

  return { user, role }
}

export async function requireStudent() {
  return requireAuth(['student'])
}

export async function requireTeacher() {
  return requireAuth(['teacher'])
}

export async function requireParent() {
  return requireAuth(['parent'])
}

export async function requireAdmin() {
  return requireAuth(['admin'])
}
