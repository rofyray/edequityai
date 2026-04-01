import { openDB, type DBSchema, type IDBPDatabase } from 'idb'
import type { ModuleContent } from '../ingestion/types'

// ============================================
// IndexedDB Schema (PRD Section 10.2)
// ============================================

export interface PendingEvent {
  id: string
  type: 'progress' | 'session' | 'assessment'
  payload: Record<string, unknown>
  timestamp: number
  syncAttempts: number
}

export interface CachedModule {
  moduleId: string
  slug: string
  title: string
  content: ModuleContent
  downloadedAt: number
  grade: number
  subject: 'math' | 'ela'
  xpReward: number
}

export interface OfflineProgress {
  studentId: string
  moduleId: string
  segmentIndex: number
  score?: number
  completedAt?: number
  synced: boolean
}

interface EdEquityDB extends DBSchema {
  pending_events: {
    key: string
    value: PendingEvent
    indexes: { by_timestamp: number }
  }
  cached_modules: {
    key: string
    value: CachedModule
  }
  offline_progress: {
    key: [string, string] // [studentId, moduleId]
    value: OfflineProgress
  }
}

// ============================================
// DB Singleton
// ============================================

let dbInstance: IDBPDatabase<EdEquityDB> | null = null

export async function getDB(): Promise<IDBPDatabase<EdEquityDB>> {
  if (dbInstance) return dbInstance

  dbInstance = await openDB<EdEquityDB>('edequity-v1', 1, {
    upgrade(db) {
      const events = db.createObjectStore('pending_events', { keyPath: 'id' })
      events.createIndex('by_timestamp', 'timestamp')
      db.createObjectStore('cached_modules', { keyPath: 'moduleId' })
      db.createObjectStore('offline_progress', { keyPath: ['studentId', 'moduleId'] })
    },
  })

  return dbInstance
}

// ============================================
// Pending Events (sync queue)
// ============================================

export async function addPendingEvent(event: Omit<PendingEvent, 'id' | 'syncAttempts'>): Promise<void> {
  const db = await getDB()
  await db.put('pending_events', {
    ...event,
    id: `${event.type}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    syncAttempts: 0,
  })
}

export async function getPendingEvents(): Promise<PendingEvent[]> {
  const db = await getDB()
  return db.getAllFromIndex('pending_events', 'by_timestamp')
}

export async function deletePendingEvent(id: string): Promise<void> {
  const db = await getDB()
  await db.delete('pending_events', id)
}

export async function updatePendingEvent(event: PendingEvent): Promise<void> {
  const db = await getDB()
  await db.put('pending_events', event)
}

export async function getPendingCount(): Promise<number> {
  const db = await getDB()
  return db.count('pending_events')
}

// ============================================
// Cached Modules (offline playback)
// ============================================

export async function getCachedModule(moduleId: string): Promise<CachedModule | undefined> {
  const db = await getDB()
  return db.get('cached_modules', moduleId)
}

export async function cacheModule(module: CachedModule): Promise<void> {
  const db = await getDB()
  await db.put('cached_modules', module)
}

export async function getCachedModuleCount(): Promise<number> {
  const db = await getDB()
  return db.count('cached_modules')
}

export async function listCachedModules(): Promise<CachedModule[]> {
  const db = await getDB()
  return db.getAll('cached_modules')
}

export async function deleteCachedModule(moduleId: string): Promise<void> {
  const db = await getDB()
  await db.delete('cached_modules', moduleId)
}

// ============================================
// Offline Progress (resume support)
// ============================================

export async function saveOfflineProgress(progress: OfflineProgress): Promise<void> {
  const db = await getDB()
  await db.put('offline_progress', progress)
}

export async function getOfflineProgress(
  studentId: string,
  moduleId: string
): Promise<OfflineProgress | undefined> {
  const db = await getDB()
  return db.get('offline_progress', [studentId, moduleId])
}
