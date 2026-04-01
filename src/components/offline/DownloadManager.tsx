'use client'

import { useEffect } from 'react'
import { Trash2, HardDrive, BookOpen, Calculator } from 'lucide-react'
import { ClayCard } from '../clay/ClayCard'
import { ClayButton } from '../clay/ClayButton'
import { ClayBadge } from '../clay/ClayBadge'
import { useOfflineStore } from '@/lib/stores/offline-store'

export function DownloadManager() {
  const { downloadedModules, refreshDownloaded, removeModule } = useOfflineStore()

  useEffect(() => {
    refreshDownloaded()
  }, [refreshDownloaded])

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <HardDrive className="h-4 w-4 text-muted-foreground" />
          <h3 className="text-sm font-semibold">Downloaded Modules</h3>
        </div>
        <ClayBadge color={downloadedModules.length >= 5 ? 'warn' : 'info'}>
          {downloadedModules.length}/5
        </ClayBadge>
      </div>

      {downloadedModules.length === 0 ? (
        <p className="text-sm text-muted-foreground text-center py-4">
          No modules downloaded yet. Download modules to study offline!
        </p>
      ) : (
        <div className="space-y-2">
          {downloadedModules.map((mod) => (
            <ClayCard key={mod.moduleId} size="sm" className="flex items-center justify-between p-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 shrink-0">
                  {mod.subject === 'math' ? (
                    <Calculator className="h-4 w-4 text-primary" />
                  ) : (
                    <BookOpen className="h-4 w-4 text-primary" />
                  )}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium truncate">{mod.title}</p>
                  <p className="text-xs text-muted-foreground">
                    Grade {mod.grade === 0 ? 'K' : mod.grade} &middot; {mod.subject.toUpperCase()}
                  </p>
                </div>
              </div>
              <ClayButton
                variant="ghost"
                size="sm"
                onClick={() => removeModule(mod.moduleId)}
                aria-label={`Remove ${mod.title}`}
              >
                <Trash2 className="h-4 w-4 text-destructive" />
              </ClayButton>
            </ClayCard>
          ))}
        </div>
      )}
    </div>
  )
}
