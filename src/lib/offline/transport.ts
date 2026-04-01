import type { SaveTransport } from '../module-player/auto-save'
import type { PlayerSnapshot } from '@/types/module-player'
import { FetchSaveTransport } from '../module-player/auto-save'
import { addPendingEvent, saveOfflineProgress } from './db'

/**
 * Saves progress to IndexedDB when offline.
 * Events are queued for sync when connection resumes.
 */
export class IndexedDBSaveTransport implements SaveTransport {
  private studentId: string

  constructor(studentId: string) {
    this.studentId = studentId
  }

  async saveProgress(snapshot: PlayerSnapshot): Promise<void> {
    // Queue as pending event for later sync
    await addPendingEvent({
      type: 'progress',
      payload: {
        moduleId: snapshot.moduleId,
        segmentIndex: snapshot.segmentIndex,
        phase: snapshot.phase,
        studentId: this.studentId,
      },
      timestamp: Date.now(),
    })

    // Also save to offline_progress for local resume
    await saveOfflineProgress({
      studentId: this.studentId,
      moduleId: snapshot.moduleId,
      segmentIndex: snapshot.segmentIndex,
      score: snapshot.score ?? undefined,
      synced: false,
    })
  }
}

/**
 * Automatically routes saves to Fetch (online) or IndexedDB (offline).
 */
export class SmartSaveTransport implements SaveTransport {
  private fetchTransport: FetchSaveTransport
  private indexedDBTransport: IndexedDBSaveTransport

  constructor(studentId: string) {
    this.fetchTransport = new FetchSaveTransport()
    this.indexedDBTransport = new IndexedDBSaveTransport(studentId)
  }

  async saveProgress(snapshot: PlayerSnapshot): Promise<void> {
    if (typeof navigator !== 'undefined' && navigator.onLine) {
      try {
        await this.fetchTransport.saveProgress(snapshot)
        return
      } catch {
        // Network failed — fall through to IndexedDB
      }
    }

    await this.indexedDBTransport.saveProgress(snapshot)
  }
}
