import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { moduleIdSchema } from '@/lib/ingestion/types'
import type { ModuleDetail } from '@/lib/ingestion/types'

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const supabase = await createServerSupabaseClient()

  // Auth check
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Validate UUID
  const parsed = moduleIdSchema.safeParse({ id })
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid module ID' }, { status: 400 })
  }

  const { data: module, error } = await supabase
    .from('modules')
    .select('*')
    .eq('id', id)
    .single()

  if (error || !module) {
    return NextResponse.json({ error: 'Module not found' }, { status: 404 })
  }

  const detail: ModuleDetail = {
    id: module.id,
    slug: module.slug,
    title: module.title,
    description: module.description,
    subject: module.subject as 'math' | 'ela',
    grade: module.grade,
    gradeBand: module.grade_band as 'k5' | '6-8' | '9-12',
    region: module.region,
    topicCluster: module.topic_cluster,
    segmentCount: module.segment_count,
    estimatedMinutes: module.estimated_minutes,
    xpReward: module.xp_reward,
    isPlaceholder: module.is_placeholder,
    standardCodes: module.standard_codes ?? [],
    content: module.content,
    state: module.state,
    launchPhase: module.launch_phase as 'mvp' | 'phase2' | 'phase3',
  }

  return NextResponse.json(detail)
}
