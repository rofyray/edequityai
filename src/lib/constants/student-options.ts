export const GRADES = Array.from({ length: 13 }, (_, i) => ({
  value: i,
  label: i === 0 ? 'Kindergarten' : `Grade ${i}`,
}))

export const REGIONS = [
  { value: 'appalachia' as const, label: 'Appalachia', states: ['NC', 'KY'] },
  { value: 'delta' as const, label: 'Mississippi Delta', states: ['MS', 'AR'] },
  { value: 'tribal' as const, label: 'Tribal Lands', states: ['OK', 'AZ'] },
]

export const STATE_NAMES: Record<string, string> = {
  NC: 'North Carolina', KY: 'Kentucky', MS: 'Mississippi',
  AR: 'Arkansas', OK: 'Oklahoma', AZ: 'Arizona',
}

export const DIALECT_OPTIONS = [
  { value: 'standard', label: 'Standard English' },
  { value: 'appalachian', label: 'Appalachian English' },
  { value: 'southern', label: 'Southern English' },
  { value: 'native', label: 'Native English Patterns' },
]

export const SUBJECT_OPTIONS = [
  { value: 'math' as const, label: 'Mathematics' },
  { value: 'ela' as const, label: 'English Language Arts' },
]
