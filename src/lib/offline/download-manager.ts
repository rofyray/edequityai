import {
  getCachedModule,
  cacheModule,
  getCachedModuleCount,
  listCachedModules,
  deleteCachedModule,
  type CachedModule,
} from './db'

const MAX_DOWNLOADED_MODULES = 5

export interface DownloadResult {
  success: boolean
  blocked?: boolean
  error?: string
}

/**
 * Download a module for offline playback.
 * Fetches module content from API and stores in IndexedDB.
 * Enforces max 5 module limit (AC-OFFLINE-07).
 */
export async function downloadModuleForOffline(
  moduleId: string,
  onProgress?: (percent: number) => void
): Promise<DownloadResult> {
  // Check max limit
  const count = await getCachedModuleCount()
  if (count >= MAX_DOWNLOADED_MODULES) {
    return { success: false, blocked: true, error: 'Storage limit reached (max 5 modules). Remove a module to download a new one.' }
  }

  // Check if already downloaded
  const existing = await getCachedModule(moduleId)
  if (existing) {
    return { success: true } // Already cached
  }

  onProgress?.(10)

  try {
    // Fetch module detail from API
    const response = await fetch(`/api/curriculum/module/${moduleId}`)
    if (!response.ok) {
      return { success: false, error: 'Failed to fetch module' }
    }

    onProgress?.(50)

    const module = await response.json()

    onProgress?.(80)

    // Store in IndexedDB
    await cacheModule({
      moduleId: module.id,
      slug: module.slug,
      title: module.title,
      content: module.content,
      downloadedAt: Date.now(),
      grade: module.grade,
      subject: module.subject,
      xpReward: module.xpReward,
    })

    onProgress?.(100)
    return { success: true }
  } catch (err) {
    return { success: false, error: err instanceof Error ? err.message : 'Download failed' }
  }
}

/** Check if a module is cached for offline use */
export async function isModuleDownloaded(moduleId: string): Promise<boolean> {
  const cached = await getCachedModule(moduleId)
  return cached !== undefined
}

/** Remove a downloaded module from offline cache */
export async function removeDownloadedModule(moduleId: string): Promise<void> {
  await deleteCachedModule(moduleId)
}

/** List all downloaded modules */
export async function getDownloadedModules(): Promise<CachedModule[]> {
  return listCachedModules()
}

/** Get the number of downloaded modules */
export async function getDownloadedCount(): Promise<number> {
  return getCachedModuleCount()
}
