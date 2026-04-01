import type { TutorMessage, TutorSubject, TutorRegion } from '@/types/tutor'

async function getClient() {
  const { createServiceRoleClient } = await import('../supabase/server')
  return createServiceRoleClient()
}

/** Create a new tutor conversation. Returns the conversation ID. */
export async function createConversation(
  studentId: string,
  subject: TutorSubject,
  region: TutorRegion
): Promise<string> {
  const supabase = await getClient()
  const { data, error } = await supabase
    .from('tutor_conversations')
    .insert({
      student_id: studentId,
      subject,
      region,
      messages: [],
    })
    .select('id')
    .single()

  if (error || !data) {
    throw new Error(`Failed to create conversation: ${error?.message}`)
  }

  return data.id
}

/** Load messages for an existing conversation. Verifies student ownership. */
export async function loadConversation(
  conversationId: string,
  studentId: string
): Promise<TutorMessage[]> {
  const supabase = await getClient()
  const { data, error } = await supabase
    .from('tutor_conversations')
    .select('messages')
    .eq('id', conversationId)
    .eq('student_id', studentId)
    .single()

  if (error || !data) {
    return []
  }

  return (data.messages as TutorMessage[]) ?? []
}

/** Save updated messages to a conversation. */
export async function saveConversation(
  conversationId: string,
  studentId: string,
  messages: TutorMessage[],
  subject: TutorSubject,
  region: TutorRegion
): Promise<void> {
  const supabase = await getClient()
  const { error } = await supabase
    .from('tutor_conversations')
    .update({
      messages,
      subject,
      region,
    })
    .eq('id', conversationId)
    .eq('student_id', studentId)

  if (error) {
    throw new Error(`Failed to save conversation: ${error.message}`)
  }
}

/** List recent conversations for a student. */
export async function listConversations(
  studentId: string
): Promise<{ id: string; subject: string; updatedAt: string; preview: string }[]> {
  const supabase = await getClient()
  const { data, error } = await supabase
    .from('tutor_conversations')
    .select('id, subject, updated_at, messages')
    .eq('student_id', studentId)
    .order('updated_at', { ascending: false })
    .limit(20)

  if (error || !data) return []

  return data.map((c) => {
    const msgs = (c.messages as TutorMessage[]) ?? []
    const lastMsg = msgs[msgs.length - 1]
    return {
      id: c.id,
      subject: c.subject ?? 'math',
      updatedAt: c.updated_at,
      preview: lastMsg?.content?.slice(0, 100) ?? 'New conversation',
    }
  })
}
