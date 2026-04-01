'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { ClayButton } from '../clay/ClayButton'

interface ModuleHeaderProps {
  title: string
  progress: number // 0-100
}

export function ModuleHeader({ title, progress }: ModuleHeaderProps) {
  return (
    <header className="flex items-center gap-3 px-4 py-3 border-b border-border bg-card shadow-clay">
      <Link href="/dashboard">
        <ClayButton variant="ghost" size="sm">
          <ArrowLeft className="h-4 w-4" />
        </ClayButton>
      </Link>

      <div className="flex-1 min-w-0">
        <h1 className="text-sm font-bold font-serif truncate">{title}</h1>
        <div className="mt-1 h-2 w-full rounded-full bg-muted overflow-hidden">
          <div
            className="h-full rounded-full bg-primary transition-all duration-500"
            style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
          />
        </div>
      </div>

      <span className="text-xs text-muted-foreground whitespace-nowrap">
        {Math.round(progress)}%
      </span>
    </header>
  )
}
