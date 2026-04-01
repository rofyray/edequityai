'use client'

import { useState, useEffect } from 'react'
import { Download, Check, Loader2 } from 'lucide-react'
import { ClayButton } from '../clay/ClayButton'
import { useOfflineStore } from '@/lib/stores/offline-store'
import { isModuleDownloaded } from '@/lib/offline/download-manager'

interface DownloadButtonProps {
  moduleId: string
}

export function DownloadButton({ moduleId }: DownloadButtonProps) {
  const [isDownloaded, setIsDownloaded] = useState(false)
  const { downloadModule, isDownloading, downloadProgress, error } = useOfflineStore()

  useEffect(() => {
    isModuleDownloaded(moduleId).then(setIsDownloaded).catch(() => {})
  }, [moduleId])

  if (isDownloaded) {
    return (
      <ClayButton variant="ghost" size="sm" disabled>
        <Check className="h-3.5 w-3.5 mr-1 text-green-600" />
        <span className="text-xs">Saved</span>
      </ClayButton>
    )
  }

  const handleDownload = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const result = await downloadModule(moduleId)
    if (result.success) setIsDownloaded(true)
  }

  return (
    <div className="relative">
      <ClayButton
        variant="ghost"
        size="sm"
        onClick={handleDownload}
        disabled={isDownloading}
        aria-label="Download for offline"
      >
        {isDownloading ? (
          <Loader2 className="h-3.5 w-3.5 animate-spin" />
        ) : (
          <Download className="h-3.5 w-3.5" />
        )}
      </ClayButton>

      {/* Download progress bar */}
      {isDownloading && downloadProgress !== null && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300 rounded-full"
            style={{ width: `${downloadProgress}%` }}
          />
        </div>
      )}

      {error && (
        <div role="alert" className="absolute top-full mt-1 left-0 right-0 text-xs text-destructive whitespace-nowrap">
          {error}
        </div>
      )}
    </div>
  )
}
