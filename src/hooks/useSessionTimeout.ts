'use client'

import { useEffect, useRef, useCallback } from 'react'

const TIMEOUT_MS = 30 * 60 * 1000 // 30 minutes
const WARNING_MS = 25 * 60 * 1000 // 25 minutes (warn 5 min before)

interface UseSessionTimeoutOptions {
  onWarning?: () => void
  onTimeout?: () => void
}

/**
 * Client-side session timeout hook.
 * Tracks user activity and forces logout after 30 minutes of inactivity.
 */
export function useSessionTimeout(options?: UseSessionTimeoutOptions) {
  const lastActivity = useRef(Date.now())
  const warningFired = useRef(false)
  const timeoutRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const resetActivity = useCallback(() => {
    lastActivity.current = Date.now()
    warningFired.current = false
  }, [])

  useEffect(() => {
    // Track user activity
    const events = ['mousedown', 'keydown', 'scroll', 'touchstart']
    events.forEach((e) => window.addEventListener(e, resetActivity))

    // Check every minute
    timeoutRef.current = setInterval(() => {
      const elapsed = Date.now() - lastActivity.current

      if (elapsed >= TIMEOUT_MS) {
        // Force logout
        options?.onTimeout?.()
        fetch('/api/auth/logout', { method: 'POST' }).then(() => {
          window.location.href = '/login'
        })
      } else if (elapsed >= WARNING_MS && !warningFired.current) {
        warningFired.current = true
        options?.onWarning?.()
      }
    }, 60000)

    return () => {
      events.forEach((e) => window.removeEventListener(e, resetActivity))
      if (timeoutRef.current) clearInterval(timeoutRef.current)
    }
  }, [resetActivity, options])
}
