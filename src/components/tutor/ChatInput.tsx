'use client'

import { useState, useCallback } from 'react'
import { Send } from 'lucide-react'
import { ClayButton } from '../clay/ClayButton'
import { ClayInput } from '../clay/ClayInput'
import { VoiceOrb } from '../clay/VoiceOrb'
import { useMediaRecorder } from '@/hooks/useMediaRecorder'
import { useTutorStore } from '@/lib/stores/tutor-store'

export function ChatInput() {
  const [text, setText] = useState('')
  const [voiceState, setVoiceState] = useState<'idle' | 'listening' | 'processing'>('idle')
  const { sendMessage, isStreaming } = useTutorStore()
  const { start, stop, isRecording } = useMediaRecorder()

  const handleSubmit = useCallback(() => {
    const trimmed = text.trim()
    if (!trimmed || isStreaming) return
    sendMessage(trimmed)
    setText('')
  }, [text, isStreaming, sendMessage])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault()
        handleSubmit()
      }
    },
    [handleSubmit]
  )

  const handleVoiceClick = useCallback(async () => {
    if (voiceState === 'idle') {
      await start()
      setVoiceState('listening')
    } else if (voiceState === 'listening') {
      setVoiceState('processing')
      const blob = await stop()

      if (blob.size > 0) {
        const formData = new FormData()
        formData.append('audio', blob, 'recording.webm')

        try {
          const response = await fetch('/api/voice/transcribe', {
            method: 'POST',
            body: formData,
          })

          if (response.ok) {
            const { text: transcript } = await response.json()
            if (transcript) {
              sendMessage(transcript)
            }
          }
        } catch {
          // Voice transcription failure is non-critical
        }
      }

      setVoiceState('idle')
    }
  }, [voiceState, start, stop, sendMessage])

  return (
    <div className="flex items-end gap-2 p-4 border-t border-border bg-background">
      <div className="flex-1">
        <ClayInput
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask NAANO anything..."
          disabled={isStreaming}
        />
      </div>
      <ClayButton
        onClick={handleSubmit}
        disabled={!text.trim() || isStreaming}
        size="sm"
      >
        <Send className="h-4 w-4" />
      </ClayButton>
      <VoiceOrb
        state={isRecording ? 'listening' : voiceState}
        onClick={handleVoiceClick}
      />
    </div>
  )
}
