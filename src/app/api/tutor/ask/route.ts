import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { buildSystemPrompt } from '@/lib/ai/system-prompt'
import { TUTOR_TOOLS } from '@/lib/ai/tools'
import { createTutorStream } from '@/lib/ai/stream'
import { containsProfanity, containsPromptInjection, PROFANITY_REDIRECT_MESSAGE, INJECTION_REDIRECT_MESSAGE } from '@/lib/ai/profanity'
import { createConversation, loadConversation, saveConversation } from '@/lib/ai/conversation'
import { MAX_CONVERSATION_MESSAGES } from '@/lib/ai/constants'
import type { StudentContext, TutorMessage, TutorRegion, TutorSubject } from '@/types/tutor'
import { tutorLimiter, checkRateLimit } from '@/lib/security/rate-limit'
import type { ChatCompletionMessageParam } from 'openai/resources/chat/completions'

const askSchema = z.object({
  message: z.string().min(1).max(2000),
  conversationId: z.string().uuid().nullish(),
  subject: z.enum(['math', 'ela']),
})

export async function POST(req: NextRequest) {
  // 1. Auth
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // 2. Parse body
  let body: z.infer<typeof askSchema>
  try {
    const raw = await req.json()
    body = askSchema.parse(raw)
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  // 2.5. Rate limit
  const { limited } = await checkRateLimit(tutorLimiter, user.id)
  if (limited) {
    return NextResponse.json({ error: 'Too many requests. Please wait a moment.' }, { status: 429 })
  }

  // 3. Profanity + prompt injection check
  if (containsProfanity(body.message)) {
    return NextResponse.json(
      { blocked: true, redirectMessage: PROFANITY_REDIRECT_MESSAGE },
      { status: 400 }
    )
  }
  if (containsPromptInjection(body.message)) {
    return NextResponse.json(
      { blocked: true, redirectMessage: INJECTION_REDIRECT_MESSAGE },
      { status: 400 }
    )
  }

  // 4. Load student profile
  const { data: student } = await supabase
    .from('students')
    .select('id, grade, region, state')
    .eq('id', user.id)
    .single()

  if (!student) {
    return NextResponse.json({ error: 'Student profile not found' }, { status: 404 })
  }

  const { data: userProfile } = await supabase
    .from('users')
    .select('full_name')
    .eq('id', user.id)
    .single()

  const studentContext: StudentContext = {
    id: student.id,
    grade: student.grade,
    region: student.region as TutorRegion,
    subject: body.subject,
    fullName: userProfile?.full_name ?? 'Student',
  }

  // 5. Load or create conversation
  let conversationId = body.conversationId
  let history: TutorMessage[] = []

  if (conversationId) {
    history = await loadConversation(conversationId, user.id)
  } else {
    conversationId = await createConversation(user.id, body.subject, studentContext.region)
  }

  // 6. Build messages array
  const systemPrompt = buildSystemPrompt(studentContext)
  const userMessage: TutorMessage = {
    role: 'user',
    content: body.message,
    timestamp: new Date().toISOString(),
  }

  // Convert history to OpenAI format, trimming to max
  const recentHistory = history.slice(-(MAX_CONVERSATION_MESSAGES - 2))
  const openaiMessages: ChatCompletionMessageParam[] = [
    { role: 'system', content: systemPrompt },
    ...recentHistory.map((m) => ({
      role: m.role as 'user' | 'assistant',
      content: m.content,
    })),
    { role: 'user', content: body.message },
  ]

  // 7. Create streaming response
  const stream = await createTutorStream(openaiMessages, TUTOR_TOOLS, studentContext)

  // 8. Tee the stream: one side goes to the client, the other collects the final response for persistence
  const [clientStream, collectorStream] = stream.tee()

  // Persist conversation in the background after streaming completes
  const decoder = new TextDecoder()
  const persistPromise = (async () => {
    let assistantContent = ''
    const reader = collectorStream.getReader()
    try {
      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const text = decoder.decode(value)
        // Parse SSE lines to extract assistant content
        for (const line of text.split('\n')) {
          if (line.startsWith('data: ')) {
            try {
              const event = JSON.parse(line.slice(6))
              if (event.type === 'delta') {
                assistantContent += event.content
              }
            } catch { /* skip non-JSON lines */ }
          }
        }
      }
    } finally {
      reader.releaseLock()
    }

    if (assistantContent) {
      const updatedHistory = [
        ...history,
        userMessage,
        {
          role: 'assistant' as const,
          content: assistantContent,
          timestamp: new Date().toISOString(),
        },
      ]
      await saveConversation(conversationId!, user.id, updatedHistory, body.subject, studentContext.region)
    }
  })()

  // Don't await — let it run in the background
  persistPromise.catch((err) => {
    console.error('Failed to persist conversation:', err)
  })

  return new Response(clientStream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
      'X-Conversation-Id': conversationId,
    },
  })
}
