import { ElevenLabsClient } from '@elevenlabs/elevenlabs-js'
import type { TutorRegion } from '@/types/tutor'

let client: ElevenLabsClient | null = null

function getClient(): ElevenLabsClient {
  if (!client) {
    client = new ElevenLabsClient({ apiKey: process.env.ELEVENLABS_API_KEY })
  }
  return client
}

export interface TranscriptionResult {
  text: string
  confidence: number
}

/**
 * Transcribe audio using ElevenLabs Speech-to-Text.
 * Accepts audio buffer (webm/opus from MediaRecorder or wav).
 * Returns transcribed text with confidence score.
 */
export async function transcribeAudio(
  audioBuffer: Buffer,
  _region: TutorRegion
): Promise<TranscriptionResult> {
  const eleven = getClient()

  // Convert Buffer to a File-like Blob for the SDK
  const audioBlob = new Blob([new Uint8Array(audioBuffer)], { type: 'audio/webm' })

  const result = await eleven.speechToText.convert({
    file: audioBlob,
    modelId: 'scribe_v2',
  })

  const text = (result as unknown as { text?: string })?.text ?? ''

  return {
    text: text.trim(),
    confidence: text.length > 0 ? 0.9 : 0, // ElevenLabs Scribe doesn't return confidence — estimate
  }
}
