'use client'

import { useState, useEffect } from 'react'
import { WifiOff } from 'lucide-react'

export function OfflineBanner() {
  const [isOffline, setIsOffline] = useState(false)

  useEffect(() => {
    setIsOffline(!navigator.onLine)

    function handleOnline() { setIsOffline(false) }
    function handleOffline() { setIsOffline(true) }

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  if (!isOffline) return null

  return (
    <div
      role="alert"
      data-testid="offline-indicator"
      className="flex items-center gap-2 rounded-clay-input bg-[#c0a050]/15 px-4 py-3 text-sm font-medium text-[#8a7030]"
    >
      <WifiOff className="h-4 w-4" />
      You&apos;re offline. Downloaded lessons are still available.
    </div>
  )
}
