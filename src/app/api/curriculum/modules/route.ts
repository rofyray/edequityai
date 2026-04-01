import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { modulesQuerySchema } from '@/lib/ingestion/types'
import type { ModuleListItem } from '@/lib/ingestion/types'

export async function GET(req: NextRequest) {
  const supabase = await createServerSupabaseClient()

  // Auth check
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Parse query params
  const searchParams = Object.fromEntries(req.nextUrl.searchParams)
  const parsed = modulesQuerySchema.safeParse(searchParams)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Invalid query parameters', details: parsed.error.flatten() },
      { status: 400 }
    )
  }

  const { grade, subject, region, gradeBand, page, limit } = parsed.data
  const offset = (page - 1) * limit

  // Build query
  let query = supabase
    .from('modules')
    .select('id, slug, title, description, subject, grade, grade_band, region, topic_cluster, segment_count, estimated_minutes, xp_reward, is_placeholder', { count: 'exact' })
    .eq('is_placeholder', false)

  if (grade !== undefined) query = query.eq('grade', grade)
  if (subject) query = query.eq('subject', subject)
  if (region) query = query.in('region', [region, 'all'])
  if (gradeBand) query = query.eq('grade_band', gradeBand)

  query = query.order('grade').order('subject').range(offset, offset + limit - 1)

  const { data, count, error } = await query

  if (error) {
    return NextResponse.json({ error: 'Failed to fetch modules' }, { status: 500 })
  }

  const modules: ModuleListItem[] = (data ?? []).map((m) => ({
    id: m.id,
    slug: m.slug,
    title: m.title,
    description: m.description,
    subject: m.subject as 'math' | 'ela',
    grade: m.grade,
    gradeBand: m.grade_band as 'k5' | '6-8' | '9-12',
    region: m.region,
    topicCluster: m.topic_cluster,
    segmentCount: m.segment_count,
    estimatedMinutes: m.estimated_minutes,
    xpReward: m.xp_reward,
    isPlaceholder: m.is_placeholder,
  }))

  return NextResponse.json({
    modules,
    total: count ?? 0,
    page,
    limit,
  })
}
