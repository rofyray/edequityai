'use client'

import type { LinkedChild } from '@/lib/dashboard/parent-types'

interface ChildSelectorProps {
  children: LinkedChild[]
  selectedId: string | null
  onSelect: (id: string) => void
}

export function ChildSelector({ children, selectedId, onSelect }: ChildSelectorProps) {
  if (children.length <= 1) return null

  return (
    <select
      value={selectedId ?? ''}
      onChange={(e) => onSelect(e.target.value)}
      className="text-sm bg-card border border-border rounded-lg px-3 py-2 shadow-clay"
      aria-label="Select child"
    >
      {children.map((child) => (
        <option key={child.id} value={child.id}>
          {child.fullName} — Grade {child.grade === 0 ? 'K' : child.grade}
        </option>
      ))}
    </select>
  )
}
