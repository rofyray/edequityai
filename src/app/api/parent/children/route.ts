import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import type { LinkedChild } from '@/lib/dashboard/parent-types'

export async function GET(_req: NextRequest) {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user || user.user_metadata?.role !== 'parent') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const admin = await createServiceRoleClient()

  // Get verified links
  const { data: links } = await admin
    .from('parent_student_links')
    .select('student_id')
    .eq('parent_id', user.id)
    .eq('verified', true)

  if (!links || links.length === 0) {
    return NextResponse.json({ children: [] })
  }

  const studentIds = links.map((l) => l.student_id)

  const { data: students } = await admin
    .from('students')
    .select('id, grade, region, state')
    .in('id', studentIds)

  const { data: users } = await admin
    .from('users')
    .select('id, full_name')
    .in('id', studentIds)

  const nameMap = new Map((users ?? []).map((u) => [u.id, u.full_name]))

  const children: LinkedChild[] = (students ?? []).map((s) => ({
    id: s.id,
    fullName: nameMap.get(s.id) ?? 'Student',
    grade: s.grade,
    region: s.region,
    state: s.state,
  }))

  return NextResponse.json({ children })
}
