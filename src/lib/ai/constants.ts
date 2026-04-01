/** Primary streaming tutor model. PRD specifies GPT-5.4-nano — using gpt-4o-mini until available. */
export const TUTOR_MODEL = 'gpt-4o-mini'

/** Structured output model for assessments and question generation */
export const STRUCTURED_MODEL = 'gpt-4o'

/** Maximum tool-call iterations in the agentic loop to prevent runaway */
export const MAX_TOOL_ITERATIONS = 5

/** Maximum conversation messages to include in context (system prompt + recent history) */
export const MAX_CONVERSATION_MESSAGES = 50

/** ElevenLabs TTS model */
export const TTS_MODEL = 'eleven_v3'

/** Region-specific voice IDs */
export const VOICE_IDS: Record<string, string> = {
  appalachia: 'couN5S3V0eJuteg6V4KR',
  delta: 'couN5S3V0eJuteg6V4KR',
  tribal: 'oW9YKneTau5rzVeRsNio',
}
