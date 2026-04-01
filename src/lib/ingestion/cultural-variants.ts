import type { Region } from './types'

export interface CulturalContext {
  states: string[]
  characterNames: string[]
  geography: string[]
  mathContexts: string[]
  elaTopics: string[]
  voiceDialect: string
}

export const CULTURAL_CONTEXTS: Record<Region, CulturalContext> = {
  appalachia: {
    states: ['NC', 'KY'],
    characterNames: ['Ethan', 'Lily', 'Mason', 'Cora', 'Elijah', 'Ruby'],
    geography: [
      'McDowell County',
      'Cumberland Gap',
      'Great Smoky Mountains',
      'local creeks',
      'coal towns',
      'eastern Kentucky hollers',
    ],
    mathContexts: [
      'farming yields',
      'timber measurements',
      'quilting patterns',
      'county fairs',
      'coal tonnage',
    ],
    elaTopics: [
      'Appalachian folk tales',
      'family stories',
      'mountain ecology',
      'mining heritage',
    ],
    voiceDialect: 'Appalachian English phonemes, rhoticity, vowel patterns of NC/KY',
  },
  delta: {
    states: ['MS', 'AR'],
    characterNames: ['Marcus', 'Aaliyah', 'Deja', 'Jerome', 'Latoya', 'DeShawn'],
    geography: [
      'Sunflower County',
      'Mississippi River',
      'Yazoo City',
      'Arkansas Delta',
      'cotton fields',
      'bayou',
      'Little Rock',
    ],
    mathContexts: [
      'catfish farming',
      'cotton bales',
      'bayou distances',
      'rice fields',
      'Delta fishing',
    ],
    elaTopics: [
      'Blues music history',
      'civil rights movement',
      'Delta farming culture',
      'Great Migration',
    ],
    voiceDialect: 'AAVE features, Southern drawl accommodation, Arkansas Delta vernacular',
  },
  tribal: {
    states: ['OK', 'AZ'],
    characterNames: ['Tommy', 'Shawnee', 'Dakota', 'Nayeli', 'Koda', 'Winona'],
    geography: [
      'Tahlequah',
      'Cherokee Nation',
      'Navajo Nation',
      'Flagstaff',
      'reservation schools',
      'powwow grounds',
    ],
    mathContexts: [
      'beadwork counting',
      'reservation land measurements',
      'seasonal harvest counts',
      'tribal market sales',
    ],
    elaTopics: [
      'Cherokee/Navajo oral traditions',
      'Indigenous history',
      'sovereignty and land rights',
      'tribal government',
    ],
    voiceDialect: 'Standard English with Cherokee/Navajo phoneme accommodation; Oklahoma Native English patterns',
  },
}

/** Generate a culturally-framed intro hook for a module */
export function getCulturalHook(
  region: Region,
  subject: 'math' | 'ela',
  topicCluster: string
): string {
  const ctx = CULTURAL_CONTEXTS[region]
  const name = ctx.characterNames[Math.floor(Math.random() * ctx.characterNames.length)]
  const place = ctx.geography[Math.floor(Math.random() * ctx.geography.length)]

  if (subject === 'math') {
    const mathCtx = ctx.mathContexts[Math.floor(Math.random() * ctx.mathContexts.length)]
    return `${name} from ${place} is working on a problem about ${mathCtx}. Let's learn about ${topicCluster.toLowerCase()} together!`
  }

  const elaCtx = ctx.elaTopics[Math.floor(Math.random() * ctx.elaTopics.length)]
  return `${name} from ${place} loves learning through ${elaCtx}. Today we'll explore ${topicCluster.toLowerCase()} together!`
}
