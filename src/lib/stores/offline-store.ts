'use client'

import { create } from 'zustand'
import { getPendingCount, listCachedModules, type CachedModule } from '../offline/db'
import {
  downloadModuleForOffline,
  removeDownloadedModule,
  type DownloadResult,
} from '../offline/download-manager'

interface OfflineState {
  isOffline: boolean
  pendingCount: number
  downloadedModules: CachedModule[]
  downloadProgress: number | null
  isDownloading: boolean
  error: string | null

  // Actions
  setOffline: (offline: boolean) => void
  refreshPendingCount: () => Promise<void>
  refreshDownloaded: () => Promise<void>
  downloadModule: (moduleId: string) => Promise<DownloadResult>
  removeModule: (moduleId: string) => Promise<void>
  clearError: () => void
}

export const useOfflineStore = create<OfflineState>((set, get) => ({
  isOffline: false,
  pendingCount: 0,
  downloadedModules: [],
  downloadProgress: null,
  isDownloading: false,
  error: null,

  setOffline: (offline) => set({ isOffline: offline }),
  clearError: () => set({ error: null }),

  refreshPendingCount: async () => {
    try {
      const count = await getPendingCount()
      set({ pendingCount: count })
    } catch {
      // IndexedDB may not be available in SSR
    }
  },

  refreshDownloaded: async () => {
    try {
      const modules = await listCachedModules()
      set({ downloadedModules: modules })
    } catch {
      // IndexedDB may not be available in SSR
    }
  },

  downloadModule: async (moduleId: string) => {
    if (get().isDownloading) {
      return { success: false, error: 'Download already in progress' }
    }

    set({ isDownloading: true, downloadProgress: 0, error: null })

    const result = await downloadModuleForOffline(moduleId, (percent) => {
      set({ downloadProgress: percent })
    })

    set({ isDownloading: false, downloadProgress: null })

    if (result.blocked) {
      set({ error: result.error ?? 'Storage limit reached' })
    } else if (!result.success) {
      set({ error: result.error ?? 'Download failed' })
    } else {
      // Refresh the list
      await get().refreshDownloaded()
    }

    return result
  },

  removeModule: async (moduleId: string) => {
    await removeDownloadedModule(moduleId)
    await get().refreshDownloaded()
  },
}))
