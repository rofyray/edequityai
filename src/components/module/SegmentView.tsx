'use client'

import { ClayCard } from '../clay/ClayCard'
import { ClayBadge } from '../clay/ClayBadge'
import type { ModuleSegment } from '@/lib/ingestion/types'

interface SegmentViewProps {
  segment: ModuleSegment
  segmentIndex: number
  totalSegments: number
}

export function SegmentView({ segment, segmentIndex, totalSegments }: SegmentViewProps) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-serif font-bold">{segment.title}</h2>
        <span className="text-xs text-muted-foreground">
          Lesson {segmentIndex + 1} of {totalSegments}
        </span>
      </div>

      <ClayCard className="p-6">
        <p className="text-base leading-relaxed whitespace-pre-line">{segment.text}</p>
      </ClayCard>

      {segment.example && (
        <ClayCard className="p-4 bg-primary/5 border-l-4 border-primary">
          <p className="text-xs font-semibold text-muted-foreground mb-1">Example</p>
          <p className="text-sm font-mono">{segment.example}</p>
        </ClayCard>
      )}

      {segment.keyVocabulary.length > 0 && (
        <div>
          <p className="text-xs font-semibold text-muted-foreground mb-2">Key Words</p>
          <div className="flex flex-wrap gap-2">
            {segment.keyVocabulary.map((word) => (
              <ClayBadge key={word} color="info">
                {word}
              </ClayBadge>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
