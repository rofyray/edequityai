import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'

const assignSchema = z.object({
  studentIds: z.array(z.string().uuid()).min(1),
  moduleId: z.string().uuid(),
})

export async function POST(req: NextRequest) {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user || user.user_metadata?.role !== 'teacher') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let body: z.infer<typeof assignSchema>
  try {
    body = assignSchema.parse(await req.json())
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const admin = await createServiceRoleClient()

  // Insert assignments
  const rows = body.studentIds.map((studentId) => ({
    teacher_id: user.id,
    student_id: studentId,
    module_id: body.moduleId,
  }))

  const { error } = await admin.from('module_assignments').insert(rows)

  if (error) {
    return NextResponse.json({ error: 'Failed to create assignments' }, { status: 500 })
  }

  return NextResponse.json({ ok: true, count: rows.length })
}

export async function GET(req: NextRequest) {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user || user.user_metadata?.role !== 'teacher') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const admin = await createServiceRoleClient()

  const { data: assignments } = await admin
    .from('module_assignments')
    .select('id, student_id, module_id, assigned_at, completed_at')
    .eq('teacher_id', user.id)
    .order('assigned_at', { ascending: false })

  // Get student names and module titles
  const studentIds = [...new Set((assignments ?? []).map((a) => a.student_id))]
  const moduleIds = [...new Set((assignments ?? []).map((a) => a.module_id))]

  const { data: users } = studentIds.length > 0
    ? await admin.from('users').select('id, full_name').in('id', studentIds)
    : { data: [] }

  const { data: modules } = moduleIds.length > 0
    ? await admin.from('modules').select('id, title').in('id', moduleIds)
    : { data: [] }

  const nameMap = new Map((users ?? []).map((u) => [u.id, u.full_name]))
  const titleMap = new Map((modules ?? []).map((m) => [m.id, m.title]))

  return NextResponse.json({
    assignments: (assignments ?? []).map((a) => ({
      id: a.id,
      teacherId: user.id,
      studentId: a.student_id,
      studentName: nameMap.get(a.student_id) ?? 'Unknown',
      moduleId: a.module_id,
      moduleTitle: titleMap.get(a.module_id) ?? 'Unknown',
      assignedAt: a.assigned_at,
      completedAt: a.completed_at,
    })),
  })
}
