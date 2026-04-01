'use client'

import { Loader2 } from 'lucide-react'

const TOOL_LABELS: Record<string, string> = {
  search_curriculum: 'Searching curriculum...',
  generate_questions: 'Creating practice questions...',
  track_progress: 'Saving your progress...',
  get_student_progress: 'Checking your progress...',
}

interface ToolIndicatorProps {
  toolName: string | null
}

export function ToolIndicator({ toolName }: ToolIndicatorProps) {
  if (!toolName) return null

  return (
    <div className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground animate-pulse">
      <Loader2 className="h-4 w-4 animate-spin" />
      <span>{TOOL_LABELS[toolName] ?? 'Working...'}</span>
    </div>
  )
}
