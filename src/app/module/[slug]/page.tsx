import { createServerSupabaseClient } from '@/lib/supabase/server'
import { redirect, notFound } from 'next/navigation'
import { ModulePlayerClient } from './ModulePlayerClient'

export default async function ModulePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  const role = user.user_metadata?.role
  if (role !== 'student') redirect('/dashboard')

  // Fetch module by slug
  const { data: module } = await supabase
    .from('modules')
    .select('*')
    .eq('slug', slug)
    .eq('is_placeholder', false)
    .single()

  if (!module) notFound()

  // Fetch student profile
  const { data: student } = await supabase
    .from('students')
    .select('id, grade, region, state')
    .eq('id', user.id)
    .single()

  if (!student) redirect('/onboarding')

  // Fetch existing progress
  const { data: existingProgress } = await supabase
    .from('student_progress')
    .select('segment_index, score, completed, xp_earned, attempts')
    .eq('student_id', user.id)
    .eq('module_id', module.id)
    .single()

  // Create a new session for this play
  const { data: session } = await supabase
    .from('sessions')
    .insert({
      student_id: user.id,
      module_id: module.id,
    })
    .select('id')
    .single()

  return (
    <ModulePlayerClient
      moduleId={module.id}
      moduleSlug={module.slug}
      moduleTitle={module.title}
      moduleDescription={module.description ?? ''}
      moduleContent={module.content}
      xpReward={module.xp_reward}
      sessionId={session?.id ?? ''}
      existingProgress={
        existingProgress
          ? {
              segmentIndex: existingProgress.segment_index,
              score: existingProgress.score,
              completed: existingProgress.completed,
              xpEarned: existingProgress.xp_earned,
              attempts: existingProgress.attempts,
            }
          : undefined
      }
    />
  )
}
