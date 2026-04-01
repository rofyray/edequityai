import type { PlayerSnapshot } from '@/types/module-player'
import { debounce } from './debounce'

/** Transport interface — M5 will add IndexedDBSaveTransport */
export interface SaveTransport {
  saveProgress(snapshot: PlayerSnapshot): Promise<void>
}

/** Online transport: calls POST /api/module/progress */
export class FetchSaveTransport implements SaveTransport {
  async saveProgress(snapshot: PlayerSnapshot): Promise<void> {
    await fetch('/api/module/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        moduleId: snapshot.moduleId,
        segmentIndex: snapshot.segmentIndex,
        phase: snapshot.phase,
      }),
    })
  }
}

/** Create a debounced auto-save function */
export function createAutoSave(
  transport: SaveTransport,
  delayMs = 500
): (snapshot: PlayerSnapshot) => void {
  return debounce((snapshot: PlayerSnapshot) => {
    transport.saveProgress(snapshot).catch(() => {
      // Auto-save failure is non-critical
    })
  }, delayMs) as (snapshot: PlayerSnapshot) => void
}
