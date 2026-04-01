'use client'

import { useState, useEffect } from 'react'
import { X, Clock, Zap } from 'lucide-react'
import { ClayCard } from '../clay/ClayCard'
import { ClayButton } from '../clay/ClayButton'
import { ClayBadge } from '../clay/ClayBadge'
import type { ModuleListItem } from '@/lib/ingestion/types'

interface ModulePickerProps {
  studentId: string
  studentName: string
  onAssign: (studentId: string, moduleId: string) => void
  onClose: () => void
}

export function ModulePicker({ studentId, studentName, onAssign, onClose }: ModulePickerProps) {
  const [modules, setModules] = useState<ModuleListItem[]>([])
  const [subject, setSubject] = useState<'math' | 'ela' | ''>('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const params = new URLSearchParams({ limit: '50' })
    if (subject) params.set('subject', subject)

    fetch(`/api/curriculum/modules?${params}`)
      .then((r) => r.json())
      .then((data) => setModules(data.modules ?? []))
      .finally(() => setLoading(false))
  }, [subject])

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" data-testid="module-picker">
      <ClayCard className="w-full max-w-lg max-h-[80vh] flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div>
            <h3 className="font-semibold">Assign Module</h3>
            <p className="text-xs text-muted-foreground">to {studentName}</p>
          </div>
          <ClayButton variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </ClayButton>
        </div>

        <div className="p-3 border-b border-border">
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value as 'math' | 'ela' | '')}
            className="text-sm bg-card border border-border rounded-lg px-3 py-2 w-full"
          >
            <option value="">All Subjects</option>
            <option value="math">Math</option>
            <option value="ela">ELA</option>
          </select>
        </div>

        <div className="flex-1 overflow-y-auto p-3 space-y-2">
          {loading && <p className="text-sm text-muted-foreground text-center py-4">Loading...</p>}
          {!loading && modules.map((mod) => (
            <div
              key={mod.id}
              className="flex items-center justify-between p-3 rounded-xl border border-border hover:bg-muted/50 transition-colors"
            >
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium truncate">{mod.title}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
                  <ClayBadge color={mod.subject === 'math' ? 'info' : 'success'}>
                    {mod.subject.toUpperCase()}
                  </ClayBadge>
                  <span className="flex items-center gap-0.5">
                    <Clock className="h-3 w-3" /> {mod.estimatedMinutes}m
                  </span>
                  <span className="flex items-center gap-0.5">
                    <Zap className="h-3 w-3" /> {mod.xpReward} XP
                  </span>
                </div>
              </div>
              <ClayButton
                size="sm"
                onClick={() => onAssign(studentId, mod.id)}
              >
                Assign
              </ClayButton>
            </div>
          ))}
        </div>
      </ClayCard>
    </div>
  )
}
