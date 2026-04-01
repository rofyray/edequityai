/**
 * Lightweight profanity filter using a blocklist.
 * No AI calls — fast check for student input safety (AC-TUTOR-10).
 */

const BLOCKLIST = new Set([
  // Common profanity (abbreviated set — expand as needed)
  'ass', 'asshole', 'bastard', 'bitch', 'bullshit', 'crap', 'cunt',
  'damn', 'dick', 'dumbass', 'fag', 'fuck', 'fucker', 'fucking',
  'goddamn', 'hell', 'jackass', 'motherfucker', 'nigga', 'nigger',
  'piss', 'pussy', 'shit', 'shitty', 'slut', 'stfu', 'whore',
  'wtf', 'wth', 'stfu', 'gtfo', 'lmfao',
  // Common obfuscations
  'f*ck', 'sh*t', 'b*tch', 'a$$', 'azz', 'fuk', 'fck', 'sht',
  'btch', 'cnt', 'dck', 'fcking', 'fking', 'fuking',
])

function normalizeToken(token: string): string {
  return token
    .toLowerCase()
    .replace(/[^a-z*$@]/g, '') // strip punctuation except common substitution chars
    .replace(/[@]/g, 'a')
    .replace(/[$]/g, 's')
    .replace(/[0]/g, 'o')
    .replace(/[1]/g, 'i')
    .replace(/[3]/g, 'e')
}

/** Check if text contains profanity. Returns true if any blocked word is found. */
export function containsProfanity(text: string): boolean {
  const tokens = text.split(/\s+/)
  return tokens.some((token) => BLOCKLIST.has(normalizeToken(token)))
}

/** The friendly redirect message shown when profanity is detected. */
export const PROFANITY_REDIRECT_MESSAGE =
  "Let's keep it friendly! I'm here to help you learn. Try rephrasing your question and I'll do my best to help."

// ============================================
// Prompt Injection Detection
// ============================================

const PROMPT_INJECTION_PATTERNS = [
  /ignore\s+(?:your|the|all|previous)\s+(?:instructions|rules|guidelines)/i,
  /system\s+prompt/i,
  /forget\s+(?:everything|all|your)/i,
  /you\s+are\s+now\s+(?:a|an|the)/i,
  /act\s+as\s+(?:a|an|if)/i,
  /pretend\s+(?:you|to\s+be)/i,
  /disregard\s+(?:your|the|all)/i,
  /override\s+(?:your|the|all)/i,
  /new\s+instructions/i,
  /jailbreak/i,
  /do\s+anything\s+now/i,
  /bypass\s+(?:your|the|all)\s+(?:rules|filters|restrictions)/i,
]

/** Check if text contains prompt injection attempts. */
export function containsPromptInjection(text: string): boolean {
  return PROMPT_INJECTION_PATTERNS.some((pattern) => pattern.test(text))
}

/** Message shown when prompt injection is detected. */
export const INJECTION_REDIRECT_MESSAGE =
  "I noticed something unusual in your message. I'm here to help with your schoolwork! Try asking a question about Math or ELA."
