'use client'

import ReactMarkdown from 'react-markdown'
import { ClayBadge } from '../clay/ClayBadge'
import { cn } from '@/lib/utils'
import type { TutorMessage } from '@/types/tutor'

interface ChatMessageProps {
  message: TutorMessage
  isStreaming?: boolean
}

export function ChatMessage({ message, isStreaming }: ChatMessageProps) {
  const isUser = message.role === 'user'

  return (
    <div className={cn('flex w-full', isUser ? 'justify-end' : 'justify-start')}>
      <div
        className={cn(
          'max-w-[85%] rounded-2xl px-4 py-3 shadow-clay',
          isUser
            ? 'bg-primary text-primary-foreground'
            : 'bg-card text-card-foreground'
        )}
      >
        {isUser ? (
          <p className="text-sm leading-relaxed">{message.content}</p>
        ) : (
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <ReactMarkdown>{message.content}</ReactMarkdown>
            {isStreaming && (
              <span className="inline-block w-2 h-4 bg-foreground/50 animate-pulse ml-0.5" />
            )}
          </div>
        )}

        {message.citations && message.citations.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2 pt-2 border-t border-border/30">
            {message.citations.map((c, i) => (
              <ClayBadge key={i} color="info">
                {c.standardCode}
              </ClayBadge>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
