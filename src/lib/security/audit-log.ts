/**
 * Audit logging for sensitive operations.
 * Logs to session_events table for visibility in teacher/admin dashboards.
 */
export async function logAuditEvent(
  userId: string,
  action: string,
  resourceType: string,
  resourceId: string,
  metadata?: Record<string, unknown>
): Promise<void> {
  try {
    const { createServiceRoleClient } = await import('../supabase/server')
    const supabase = await createServiceRoleClient()

    // Get or create a session for the audit log
    const { data: session } = await supabase
      .from('sessions')
      .select('id')
      .eq('student_id', userId)
      .is('ended_at', null)
      .order('started_at', { ascending: false })
      .limit(1)
      .single()

    const sessionId = session?.id
    if (!sessionId) return // No active session — skip audit (non-critical)

    await supabase.from('session_events').insert({
      session_id: sessionId,
      student_id: userId,
      event_type: 'explanation_given', // Repurpose for audit events
      metadata: {
        audit: true,
        action,
        resourceType,
        resourceId,
        timestamp: new Date().toISOString(),
        ...metadata,
      },
    })
  } catch {
    // Audit failure is non-critical — don't break the request
  }
}
