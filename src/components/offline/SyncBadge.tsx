'use client'

import { useEffect } from 'react'
import { RefreshCw } from 'lucide-react'
import { useOfflineStore } from '@/lib/stores/offline-store'

export function SyncBadge() {
  const { pendingCount, refreshPendingCount } = useOfflineStore()

  useEffect(() => {
    refreshPendingCount()
    const interval = setInterval(refreshPendingCount, 5000) // Poll every 5s
    return () => clearInterval(interval)
  }, [refreshPendingCount])

  if (pendingCount === 0) return null

  return (
    <div className="inline-flex items-center gap-1.5 rounded-full bg-yellow-100 dark:bg-yellow-900/30 px-3 py-1 text-xs font-medium text-yellow-700 dark:text-yellow-300">
      <RefreshCw className="h-3 w-3 animate-spin" />
      {pendingCount} pending
    </div>
  )
}
