import type { ModuleSeed } from './types'

import { GRADE_K_MATH } from './catalog/grade-k-math'
import { GRADE_K_ELA } from './catalog/grade-k-ela'
import { GRADE_1_MATH } from './catalog/grade-1-math'
import { GRADE_1_ELA } from './catalog/grade-1-ela'
import { GRADE_2_MATH } from './catalog/grade-2-math'
import { GRADE_2_ELA } from './catalog/grade-2-ela'
import { GRADE_3_MATH } from './catalog/grade-3-math'
import { GRADE_3_ELA } from './catalog/grade-3-ela'
import { GRADE_4_MATH } from './catalog/grade-4-math'
import { GRADE_4_ELA } from './catalog/grade-4-ela'
import { GRADE_5_MATH } from './catalog/grade-5-math'
import { GRADE_5_ELA } from './catalog/grade-5-ela'
import { GRADE_6_MATH } from './catalog/grade-6-math'
import { GRADE_6_ELA } from './catalog/grade-6-ela'
import { GRADE_7_MATH } from './catalog/grade-7-math'
import { GRADE_7_ELA } from './catalog/grade-7-ela'
import { GRADE_8_MATH } from './catalog/grade-8-math'
import { GRADE_8_ELA } from './catalog/grade-8-ela'
import { GRADE_9_MATH } from './catalog/grade-9-math'
import { GRADE_9_ELA } from './catalog/grade-9-ela'
import { GRADE_10_MATH } from './catalog/grade-10-math'
import { GRADE_10_ELA } from './catalog/grade-10-ela'
import { GRADE_11_MATH } from './catalog/grade-11-math'
import { GRADE_11_ELA } from './catalog/grade-11-ela'
import { GRADE_12_MATH } from './catalog/grade-12-math'
import { GRADE_12_ELA } from './catalog/grade-12-ela'

/** All 144 K-5 modules (72 Math + 72 ELA, 12 per grade) */
export const K5_CURRICULUM: ModuleSeed[] = [
  ...GRADE_K_MATH,
  ...GRADE_K_ELA,
  ...GRADE_1_MATH,
  ...GRADE_1_ELA,
  ...GRADE_2_MATH,
  ...GRADE_2_ELA,
  ...GRADE_3_MATH,
  ...GRADE_3_ELA,
  ...GRADE_4_MATH,
  ...GRADE_4_ELA,
  ...GRADE_5_MATH,
  ...GRADE_5_ELA,
]

/** All 90 6-8 modules (45 Math + 45 ELA, 15 per grade) */
export const BAND2_CURRICULUM: ModuleSeed[] = [
  ...GRADE_6_MATH,
  ...GRADE_6_ELA,
  ...GRADE_7_MATH,
  ...GRADE_7_ELA,
  ...GRADE_8_MATH,
  ...GRADE_8_ELA,
]

/** All 96 9-12 modules (48 Math + 48 ELA, 12 per grade) */
export const BAND3_CURRICULUM: ModuleSeed[] = [
  ...GRADE_9_MATH,
  ...GRADE_9_ELA,
  ...GRADE_10_MATH,
  ...GRADE_10_ELA,
  ...GRADE_11_MATH,
  ...GRADE_11_ELA,
  ...GRADE_12_MATH,
  ...GRADE_12_ELA,
]

/** All K-12 modules combined (330 total) */
export const ALL_CURRICULUM: ModuleSeed[] = [
  ...K5_CURRICULUM,
  ...BAND2_CURRICULUM,
  ...BAND3_CURRICULUM,
]

// Re-export individual grade arrays for selective use
export {
  GRADE_K_MATH,
  GRADE_K_ELA,
  GRADE_1_MATH,
  GRADE_1_ELA,
  GRADE_2_MATH,
  GRADE_2_ELA,
  GRADE_3_MATH,
  GRADE_3_ELA,
  GRADE_4_MATH,
  GRADE_4_ELA,
  GRADE_5_MATH,
  GRADE_5_ELA,
  GRADE_6_MATH,
  GRADE_6_ELA,
  GRADE_7_MATH,
  GRADE_7_ELA,
  GRADE_8_MATH,
  GRADE_8_ELA,
  GRADE_9_MATH,
  GRADE_9_ELA,
  GRADE_10_MATH,
  GRADE_10_ELA,
  GRADE_11_MATH,
  GRADE_11_ELA,
  GRADE_12_MATH,
  GRADE_12_ELA,
}
