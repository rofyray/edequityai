import OpenAI from 'openai'
import type { ChatCompletionMessageParam, ChatCompletionTool } from 'openai/resources/chat/completions'
import type { StudentContext, Citation, SSEEvent } from '@/types/tutor'
import { TUTOR_MODEL, MAX_TOOL_ITERATIONS } from './constants'
import { executeTool } from './tools'

const openai = new OpenAI()
const encoder = new TextEncoder()

function encodeSSE(event: SSEEvent): Uint8Array {
  return encoder.encode(`data: ${JSON.stringify(event)}\n\n`)
}

/**
 * Create a streaming SSE response for the NAANO tutor.
 * Implements an agentic loop: streams text deltas to the client,
 * intercepts tool calls, executes them server-side, then continues.
 */
export async function createTutorStream(
  messages: ChatCompletionMessageParam[],
  tools: ChatCompletionTool[],
  student: StudentContext
): Promise<ReadableStream<Uint8Array>> {
  const collectedCitations: Citation[] = []
  let iteration = 0

  // We use a mutable messages array that grows as tool calls are resolved
  const conversationMessages = [...messages]

  return new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        while (iteration < MAX_TOOL_ITERATIONS) {
          iteration++

          const stream = await openai.chat.completions.create({
            model: TUTOR_MODEL,
            stream: true,
            max_tokens: 1024,
            messages: conversationMessages,
            tools,
            tool_choice: 'auto',
          })

          let finishReason: string | null = null
          let assistantContent = ''

          // Accumulate tool calls across chunks
          const toolCallAccumulator: Map<number, { id: string; name: string; arguments: string }> = new Map()

          for await (const chunk of stream) {
            const choice = chunk.choices[0]
            if (!choice) continue

            const delta = choice.delta

            // Text content delta — stream to client
            if (delta?.content) {
              assistantContent += delta.content
              controller.enqueue(encodeSSE({ type: 'delta', content: delta.content }))
            }

            // Tool call deltas — accumulate (they come incrementally)
            if (delta?.tool_calls) {
              for (const tc of delta.tool_calls) {
                const idx = tc.index
                if (!toolCallAccumulator.has(idx)) {
                  toolCallAccumulator.set(idx, {
                    id: tc.id ?? '',
                    name: tc.function?.name ?? '',
                    arguments: '',
                  })
                }
                const acc = toolCallAccumulator.get(idx)!
                if (tc.id) acc.id = tc.id
                if (tc.function?.name) acc.name = tc.function.name
                if (tc.function?.arguments) acc.arguments += tc.function.arguments
              }
            }

            if (choice.finish_reason) {
              finishReason = choice.finish_reason
            }
          }

          // Handle finish reason
          if (finishReason === 'tool_calls' && toolCallAccumulator.size > 0) {
            // Append the assistant message with tool calls
            const toolCalls = Array.from(toolCallAccumulator.values())

            conversationMessages.push({
              role: 'assistant' as const,
              content: assistantContent || null,
              tool_calls: toolCalls.map((tc) => ({
                id: tc.id,
                type: 'function' as const,
                function: { name: tc.name, arguments: tc.arguments },
              })),
            })

            // Execute each tool and collect results
            for (const tc of toolCalls) {
              controller.enqueue(encodeSSE({ type: 'tool_start', name: tc.name }))

              let args: Record<string, unknown> = {}
              try {
                args = JSON.parse(tc.arguments)
              } catch {
                args = {}
              }

              const result = await executeTool(tc.name, args, student)

              // Extract citations from search results
              if (tc.name === 'search_curriculum') {
                try {
                  const parsed = JSON.parse(result)
                  if (parsed.found && parsed.results) {
                    for (const r of parsed.results) {
                      if (r.standardCode) {
                        collectedCitations.push({
                          standardCode: r.standardCode,
                          snippet: r.content?.slice(0, 100) ?? '',
                        })
                      }
                    }
                  }
                } catch { /* ignore parse errors */ }
              }

              conversationMessages.push({
                role: 'tool' as const,
                tool_call_id: tc.id,
                content: result,
              })

              controller.enqueue(encodeSSE({ type: 'tool_end', name: tc.name }))
            }

            // Continue the loop — OpenAI will now respond with the tool results in context
            continue
          }

          // finish_reason === 'stop' or other — we're done
          controller.enqueue(encodeSSE({
            type: 'done',
            citations: collectedCitations.length > 0 ? collectedCitations : undefined,
            conversationId: '', // filled by the route handler
          }))
          controller.close()
          return
        }

        // Max iterations exceeded
        controller.enqueue(encodeSSE({
          type: 'done',
          citations: collectedCitations.length > 0 ? collectedCitations : undefined,
          conversationId: '',
        }))
        controller.close()
      } catch (err) {
        const message = err instanceof Error ? err.message : 'An unexpected error occurred'
        controller.enqueue(encodeSSE({ type: 'error', message }))
        controller.close()
      }
    },
  })
}

/**
 * Get the final assistant content from a completed stream.
 * Used to persist the conversation after streaming completes.
 */
export function extractAssistantMessages(
  messages: ChatCompletionMessageParam[]
): string {
  const assistantMsgs = messages.filter((m) => m.role === 'assistant' && typeof m.content === 'string')
  const last = assistantMsgs[assistantMsgs.length - 1]
  return typeof last?.content === 'string' ? last.content : ''
}
