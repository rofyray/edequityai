'use client'

import { useRef, useEffect } from 'react'
import { ArrowLeft, Hand } from 'lucide-react'
import Link from 'next/link'
import { useTutorStore } from '@/lib/stores/tutor-store'
import { ChatMessage } from '@/components/tutor/ChatMessage'
import { ChatInput } from '@/components/tutor/ChatInput'
import { ToolIndicator } from '@/components/tutor/ToolIndicator'
import { TTSToggle } from '@/components/tutor/TTSToggle'
import { ClayButton } from '@/components/clay/ClayButton'
import type { TutorRegion, TutorSubject } from '@/types/tutor'

interface TutorPageClientProps {
  studentId: string
  grade: number
  region: TutorRegion
  fullName: string
}

export function TutorPageClient({ grade, region, fullName }: TutorPageClientProps) {
  const {
    messages,
    streamingContent,
    isStreaming,
    isToolRunning,
    activeToolName,
    error,
    subject,
    setSubject,
    clearError,
  } = useTutorStore()

  const scrollRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    })
  }, [messages, streamingContent])

  const gradeLabel = grade === 0 ? 'K' : grade.toString()

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 border-b border-border bg-card shadow-clay">
        <div className="flex items-center gap-3">
          <Link href="/dashboard">
            <ClayButton variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4" />
            </ClayButton>
          </Link>
          <div>
            <h1 className="text-lg font-bold font-serif">NAANO Tutor</h1>
            <p className="text-xs text-muted-foreground">
              Grade {gradeLabel} &middot; {region.charAt(0).toUpperCase() + region.slice(1)} &middot; {fullName}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value as TutorSubject)}
            className="text-sm bg-card border border-border rounded-lg px-2 py-1 shadow-clay"
          >
            <option value="math">Math</option>
            <option value="ela">ELA</option>
          </select>
          <TTSToggle />
        </div>
      </header>

      {/* Messages area */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-4 py-4 space-y-4"
      >
        {messages.length === 0 && !isStreaming && (
          <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
            <Hand className="h-10 w-10 text-primary mb-4" />
            <h2 className="text-xl font-serif font-bold mb-2">
              Hi {fullName}!
            </h2>
            <p className="text-sm max-w-sm">
              I&apos;m NAANO, your personal tutor. Ask me anything about{' '}
              {subject === 'math' ? 'Math' : 'English Language Arts'} and
              I&apos;ll help you learn!
            </p>
          </div>
        )}

        {messages.map((msg, i) => (
          <ChatMessage key={i} message={msg} />
        ))}

        {/* Streaming in-progress message */}
        {isStreaming && streamingContent && (
          <ChatMessage
            message={{
              role: 'assistant',
              content: streamingContent,
              timestamp: new Date().toISOString(),
            }}
            isStreaming
          />
        )}

        {/* Tool indicator */}
        {isToolRunning && <ToolIndicator toolName={activeToolName} />}

        {/* Error display */}
        {error && (
          <div className="flex justify-center">
            <div className="bg-destructive/10 text-destructive rounded-lg px-4 py-2 text-sm max-w-sm text-center">
              {error}
              <button
                onClick={clearError}
                className="block mx-auto mt-1 text-xs text-primary font-semibold hover:opacity-80"
              >
                Dismiss
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Input bar */}
      <ChatInput />
    </div>
  )
}
