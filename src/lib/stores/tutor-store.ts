'use client'

import { create } from 'zustand'
import type { TutorMessage, TutorSubject, SSEEvent, Citation } from '@/types/tutor'

interface TutorState {
  // Conversation
  conversationId: string | null
  messages: TutorMessage[]
  streamingContent: string
  isStreaming: boolean
  isToolRunning: boolean
  activeToolName: string | null

  // Voice
  ttsEnabled: boolean

  // UI
  error: string | null
  subject: TutorSubject

  // Actions
  sendMessage: (text: string) => Promise<void>
  setSubject: (s: TutorSubject) => void
  toggleTTS: () => void
  setConversationId: (id: string | null) => void
  loadMessages: (messages: TutorMessage[]) => void
  newConversation: () => void
  clearError: () => void
}

export const useTutorStore = create<TutorState>((set, get) => ({
  conversationId: null,
  messages: [],
  streamingContent: '',
  isStreaming: false,
  isToolRunning: false,
  activeToolName: null,
  ttsEnabled: false,
  error: null,
  subject: 'math',

  setSubject: (subject) => set({ subject }),
  toggleTTS: () => set((s) => ({ ttsEnabled: !s.ttsEnabled })),
  setConversationId: (id) => set({ conversationId: id }),
  loadMessages: (messages) => set({ messages }),
  clearError: () => set({ error: null }),

  newConversation: () =>
    set({
      conversationId: null,
      messages: [],
      streamingContent: '',
      isStreaming: false,
      error: null,
    }),

  sendMessage: async (text: string) => {
    const state = get()
    if (state.isStreaming) return

    const userMessage: TutorMessage = {
      role: 'user',
      content: text,
      timestamp: new Date().toISOString(),
    }

    set({
      messages: [...state.messages, userMessage],
      streamingContent: '',
      isStreaming: true,
      error: null,
      isToolRunning: false,
      activeToolName: null,
    })

    try {
      const response = await fetch('/api/tutor/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          conversationId: state.conversationId,
          subject: state.subject,
        }),
      })

      if (!response.ok) {
        const errorBody = await response.json().catch(() => ({}))
        if (errorBody.blocked) {
          set({
            isStreaming: false,
            error: errorBody.redirectMessage,
            // Remove the user message since it was blocked
            messages: state.messages,
          })
          return
        }
        throw new Error(errorBody.error ?? `HTTP ${response.status}`)
      }

      // Get conversation ID from header
      const convId = response.headers.get('X-Conversation-Id')
      if (convId) {
        set({ conversationId: convId })
      }

      // Parse SSE stream
      const reader = response.body?.getReader()
      if (!reader) throw new Error('No response body')

      const decoder = new TextDecoder()
      let buffer = ''
      let citations: Citation[] | undefined

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split('\n')
        buffer = lines.pop() ?? '' // Keep incomplete line in buffer

        for (const line of lines) {
          if (!line.startsWith('data: ')) continue
          const jsonStr = line.slice(6).trim()
          if (!jsonStr) continue

          try {
            const event: SSEEvent = JSON.parse(jsonStr)

            switch (event.type) {
              case 'delta':
                set((s) => ({
                  streamingContent: s.streamingContent + event.content,
                }))
                break

              case 'tool_start':
                set({ isToolRunning: true, activeToolName: event.name })
                break

              case 'tool_end':
                set({ isToolRunning: false, activeToolName: null })
                break

              case 'done':
                citations = event.citations
                break

              case 'error':
                set({ error: event.message, isStreaming: false })
                return
            }
          } catch {
            // Skip malformed JSON
          }
        }
      }

      // Finalize: move streaming content into a proper message
      const finalContent = get().streamingContent
      if (finalContent) {
        const assistantMessage: TutorMessage = {
          role: 'assistant',
          content: finalContent,
          citations,
          timestamp: new Date().toISOString(),
        }
        set((s) => ({
          messages: [...s.messages, assistantMessage],
          streamingContent: '',
          isStreaming: false,
        }))

        // If TTS enabled, synthesize audio
        if (get().ttsEnabled) {
          try {
            const audioResponse = await fetch('/api/voice/synthesize', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ text: finalContent.slice(0, 5000) }),
            })
            if (audioResponse.ok) {
              const blob = await audioResponse.blob()
              const audio = new Audio(URL.createObjectURL(blob))
              audio.play()
            }
          } catch {
            // TTS failure is non-critical
          }
        }
      } else {
        set({ isStreaming: false })
      }
    } catch (err) {
      set({
        isStreaming: false,
        error: err instanceof Error ? err.message : 'An unexpected error occurred',
      })
    }
  },
}))
