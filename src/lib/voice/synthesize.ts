import { ElevenLabsClient } from '@elevenlabs/elevenlabs-js'
import { VOICE_IDS, TTS_MODEL } from '../ai/constants'
import { redis } from '../redis/client'
import type { TutorRegion } from '@/types/tutor'

const TTL_AUDIO = 30 * 60 // 30 minutes

let client: ElevenLabsClient | null = null

function getClient(): ElevenLabsClient {
  if (!client) {
    client = new ElevenLabsClient({ apiKey: process.env.ELEVENLABS_API_KEY })
  }
  return client
}

function cacheKey(text: string, region: TutorRegion): string {
  // Simple hash for cache key
  let hash = 0
  for (let i = 0; i < text.length; i++) {
    const chr = text.charCodeAt(i)
    hash = ((hash << 5) - hash) + chr
    hash |= 0
  }
  return `tts:${Math.abs(hash).toString(36)}:${region}`
}

/**
 * Synthesize text to speech using ElevenLabs v3.
 * Selects voice based on student region. Caches audio in Redis (30min TTL).
 * Returns raw audio buffer (mp3).
 */
export async function synthesizeSpeech(
  text: string,
  region: TutorRegion
): Promise<Buffer> {
  // Check cache
  const key = cacheKey(text, region)
  const cached = await redis.get<string>(key)
  if (cached) {
    return Buffer.from(cached, 'base64')
  }

  const voiceId = VOICE_IDS[region] ?? VOICE_IDS.appalachia
  const eleven = getClient()

  const response = await eleven.textToSpeech.convert(voiceId, {
    text,
    modelId: TTS_MODEL,
    outputFormat: 'mp3_44100_128',
  })

  // The SDK returns a ReadableStream<Uint8Array> — collect into Buffer
  const chunks: Uint8Array[] = []
  const stream = response as unknown as ReadableStream<Uint8Array>
  const reader = stream.getReader()
  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    chunks.push(value)
  }

  const audioBuffer = Buffer.concat(chunks)

  // Cache as base64 (Redis stores strings)
  await redis.set(key, audioBuffer.toString('base64'), { ex: TTL_AUDIO })

  return audioBuffer
}
