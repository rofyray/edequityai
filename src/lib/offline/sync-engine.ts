import {
  getPendingEvents,
  deletePendingEvent,
  updatePendingEvent,
  getPendingCount,
  type PendingEvent,
} from './db'

const MAX_SYNC_ATTEMPTS = 3

interface ConflictPair {
  local: { value: unknown; timestamp: number }
  remote: { value: unknown; timestamp: number }
}

/**
 * Sync engine: uploads queued offline events to the server on reconnection.
 * Implements timestamp-based last-write-wins conflict resolution.
 */
export class OfflineSyncEngine {
  private isSyncing = false
  private uploadFn: (event: PendingEvent) => Promise<{ success: boolean }>

  constructor(options?: { uploadFn?: (event: PendingEvent) => Promise<{ success: boolean }> }) {
    this.uploadFn = options?.uploadFn ?? defaultUploadFn
  }

  /** Sync all pending events to the server */
  async syncOnReconnect(): Promise<void> {
    if (this.isSyncing) return
    this.isSyncing = true

    try {
      const events = await getPendingEvents()

      for (const event of events) {
        if (event.syncAttempts >= MAX_SYNC_ATTEMPTS) {
          // Exceeded max retries — remove to prevent infinite queue growth
          await deletePendingEvent(event.id)
          continue
        }

        const result = await this.uploadFn(event)

        if (result.success) {
          await deletePendingEvent(event.id)
        } else {
          await updatePendingEvent({
            ...event,
            syncAttempts: event.syncAttempts + 1,
          })
        }
      }
    } finally {
      this.isSyncing = false
    }
  }

  /** Timestamp-based last-write-wins conflict resolution */
  resolveConflict(pair: ConflictPair): { value: unknown; timestamp: number } {
    return pair.local.timestamp >= pair.remote.timestamp ? pair.local : pair.remote
  }

  /** Get the number of pending events */
  async getPendingCount(): Promise<number> {
    return getPendingCount()
  }
}

async function defaultUploadFn(event: PendingEvent): Promise<{ success: boolean }> {
  try {
    const response = await fetch('/api/offline/sync', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: event.type,
        payload: event.payload,
        timestamp: event.timestamp,
      }),
    })
    return response.json()
  } catch {
    return { success: false }
  }
}

/**
 * Initialize the sync engine and wire it to the 'online' event.
 * Returns a cleanup function.
 */
export function initSyncEngine(): { engine: OfflineSyncEngine; cleanup: () => void } {
  const engine = new OfflineSyncEngine()

  const handler = () => engine.syncOnReconnect()
  window.addEventListener('online', handler)

  return {
    engine,
    cleanup: () => window.removeEventListener('online', handler),
  }
}
