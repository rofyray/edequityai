/**
 * Log a module interaction event immediately (not debounced).
 * Fires POST /api/module/event for session_events tracking.
 */
export async function logModuleEvent(
  moduleId: string,
  eventType: string,
  standardCode?: string,
  metadata?: Record<string, unknown>
): Promise<void> {
  try {
    await fetch('/api/module/event', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        moduleId,
        eventType,
        standardCode,
        metadata,
      }),
    })
  } catch {
    // Event logging failure is non-critical — don't break the player
  }
}
