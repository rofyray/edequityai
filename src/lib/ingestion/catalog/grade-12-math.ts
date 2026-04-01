import type { ModuleSeed } from '../types'

export const GRADE_12_MATH: ModuleSeed[] = [
  // ============================================
  // Trigonometric Functions (3 modules)
  // ============================================
  {
    slug: 'grade12-math-unit-circle',
    title: 'The Unit Circle',
    description: 'Understand how the unit circle defines sine, cosine, and tangent for any angle and use it to find exact trigonometric values',
    subject: 'math',
    grade: 12,
    gradeBand: '9-12',
    topicCluster: 'Trigonometric Functions',
    standardCodes: ['HSF-TF.A.1', 'HSF-TF.A.2'],
    content: {
      intro: {
        title: 'The Unit Circle',
        text: 'The unit circle is a circle with radius 1 centered at the origin. It is the foundation for defining trigonometric functions for all real numbers, not just acute angles in right triangles. By wrapping the number line around this circle you can assign a sine and cosine value to every angle. In this module you will learn to navigate the unit circle, find coordinates for key angles, and connect those coordinates to trigonometric values.',
      },
      segments: [
        {
          index: 0,
          title: 'Radian Measure and Arc Length',
          text: 'A radian is the measure of an angle whose arc length on the unit circle equals the radius. Since the circumference of the unit circle is 2π, a full rotation is 2π radians. Converting between degrees and radians uses the relationship 180° = π radians. For example, 90° = π/2 radians and 60° = π/3 radians. Working in radians connects angle measure directly to arc length on the unit circle.',
          keyVocabulary: ['radian', 'arc length', 'unit circle', 'conversion factor'],
          example: 'To convert 45° to radians: 45 × (π/180) = π/4 radians.',
        },
        {
          index: 1,
          title: 'Coordinates on the Unit Circle',
          text: 'For an angle θ measured from the positive x-axis, the terminal point on the unit circle has coordinates (cos θ, sin θ). This means the x-coordinate is cosine and the y-coordinate is sine. For the key angles π/6, π/4, and π/3 you should memorize the exact coordinate pairs: (√3/2, 1/2), (√2/2, √2/2), and (1/2, √3/2). These reference values extend to all four quadrants by adjusting signs.',
          keyVocabulary: ['terminal point', 'reference angle', 'quadrant', 'coordinate pair'],
          example: 'At θ = π/4 the coordinates are (√2/2, √2/2), so cos(π/4) = √2/2 and sin(π/4) = √2/2.',
        },
        {
          index: 2,
          title: 'Tangent and the Four Quadrants',
          text: 'Tangent is defined as sin θ / cos θ, which equals the y-coordinate divided by the x-coordinate on the unit circle. In Quadrant I both sine and cosine are positive so tangent is positive. In Quadrant II sine is positive and cosine is negative so tangent is negative. The mnemonic All-Students-Take-Calculus helps remember which functions are positive in each quadrant: All in QI, Sine in QII, Tangent in QIII, Cosine in QIV.',
          keyVocabulary: ['tangent', 'quotient identity', 'sign convention', 'ASTC mnemonic'],
          example: 'tan(5π/4) = sin(5π/4)/cos(5π/4) = (−√2/2)/(−√2/2) = 1.',
        },
      ],
      practice: [
        { index: 0, question: 'Convert 120° to radians.', type: 'multiple-choice', options: ['π/3', '2π/3', '3π/4', '5π/6'], correctAnswer: '2π/3', hint: 'Multiply 120 by π/180.', explanation: '120 × π/180 = 120π/180 = 2π/3.', standardCode: 'HSF-TF.A.1' },
        { index: 1, question: 'What are the exact coordinates of the point on the unit circle at θ = π/6?', type: 'multiple-choice', options: ['(1/2, √3/2)', '(√3/2, 1/2)', '(√2/2, √2/2)', '(0, 1)'], correctAnswer: '(√3/2, 1/2)', hint: 'The cosine value is the x-coordinate.', explanation: 'At π/6, cos(π/6) = √3/2 and sin(π/6) = 1/2, giving coordinates (√3/2, 1/2).', standardCode: 'HSF-TF.A.2' },
        { index: 2, question: 'Find the exact value of sin(3π/4).', type: 'short-answer', correctAnswer: '√2/2', hint: 'The reference angle for 3π/4 is π/4 and sine is positive in Quadrant II.', explanation: 'The reference angle is π − 3π/4 = π/4. Since sine is positive in QII, sin(3π/4) = sin(π/4) = √2/2.', standardCode: 'HSF-TF.A.2' },
        { index: 3, question: 'In which quadrant is both sin θ < 0 and cos θ < 0?', type: 'multiple-choice', options: ['Quadrant I', 'Quadrant II', 'Quadrant III', 'Quadrant IV'], correctAnswer: 'Quadrant III', hint: 'Both coordinates are negative in one specific quadrant.', explanation: 'In Quadrant III both x and y are negative, so sin θ < 0 and cos θ < 0.', standardCode: 'HSF-TF.A.2' },
        { index: 4, question: 'Find the exact value of tan(π/3).', type: 'short-answer', correctAnswer: '√3', hint: 'Use tan = sin/cos with the known values at π/3.', explanation: 'tan(π/3) = sin(π/3)/cos(π/3) = (√3/2)/(1/2) = √3.', standardCode: 'HSF-TF.A.2' },
      ],
      assessment: {
        questions: [
          { question: 'Convert 5π/6 radians to degrees.', type: 'short-answer', correctAnswer: '150°', standardCode: 'HSF-TF.A.1' },
          { question: 'Find the exact value of cos(7π/6).', type: 'multiple-choice', options: ['√3/2', '−√3/2', '1/2', '−1/2'], correctAnswer: '−√3/2', standardCode: 'HSF-TF.A.2' },
          { question: 'If sin θ = −1/2 and θ is in Quadrant IV, find cos θ.', type: 'short-answer', correctAnswer: '√3/2', standardCode: 'HSF-TF.A.2' },
        ],
      },
    },
  },
  {
    slug: 'grade12-math-trig-identities',
    title: 'Trigonometric Identities',
    description: 'Learn and apply the fundamental trigonometric identities including the Pythagorean identity, sum and difference formulas, and double-angle formulas',
    subject: 'math',
    grade: 12,
    gradeBand: '9-12',
    topicCluster: 'Trigonometric Functions',
    standardCodes: ['HSF-TF.C.8', 'HSF-TF.C.9'],
    content: {
      intro: {
        title: 'Trigonometric Identities',
        text: 'Trigonometric identities are equations that are true for all values of the variable where both sides are defined. They allow you to simplify complex expressions, solve equations, and prove new relationships. The most important identity — sin²θ + cos²θ = 1 — comes directly from the unit circle and the Pythagorean theorem. In this module you will master this and other key identities that form the toolkit of pre-calculus and calculus.',
      },
      segments: [
        {
          index: 0,
          title: 'The Pythagorean Identity',
          text: 'Since any point on the unit circle satisfies x² + y² = 1, and x = cos θ and y = sin θ, we get sin²θ + cos²θ = 1. Dividing through by cos²θ gives 1 + tan²θ = sec²θ, and dividing by sin²θ gives 1 + cot²θ = csc²θ. These three forms of the Pythagorean identity let you convert between trigonometric functions and simplify expressions that seem complicated at first glance.',
          keyVocabulary: ['Pythagorean identity', 'sin²θ + cos²θ = 1', 'secant', 'cosecant'],
          example: 'If sin θ = 3/5 and θ is in QI, then cos²θ = 1 − 9/25 = 16/25, so cos θ = 4/5.',
        },
        {
          index: 1,
          title: 'Sum and Difference Formulas',
          text: 'The sum formula for sine is sin(A + B) = sin A cos B + cos A sin B. For cosine, cos(A + B) = cos A cos B − sin A sin B. The difference formulas swap the sign in the middle. These identities let you find exact values for angles like 75° = 45° + 30° and are essential for proving other identities. They also appear when analyzing wave interference and signal processing.',
          keyVocabulary: ['sum formula', 'difference formula', 'compound angle', 'exact value'],
          example: 'sin(75°) = sin(45° + 30°) = sin 45° cos 30° + cos 45° sin 30° = (√2/2)(√3/2) + (√2/2)(1/2) = (√6 + √2)/4.',
        },
        {
          index: 2,
          title: 'Double-Angle Formulas',
          text: 'Setting A = B in the sum formulas gives the double-angle identities: sin(2θ) = 2 sin θ cos θ, and cos(2θ) = cos²θ − sin²θ. The cosine double-angle formula has two alternate forms: cos(2θ) = 2cos²θ − 1 and cos(2θ) = 1 − 2sin²θ. These identities are used frequently in calculus for integration and in physics for modeling oscillations.',
          keyVocabulary: ['double-angle formula', 'sin(2θ)', 'cos(2θ)', 'alternate form'],
          example: 'If sin θ = 3/5 and cos θ = 4/5, then sin(2θ) = 2(3/5)(4/5) = 24/25.',
        },
      ],
      practice: [
        { index: 0, question: 'If cos θ = 5/13 and θ is in Quadrant I, find sin θ using the Pythagorean identity.', type: 'short-answer', correctAnswer: '12/13', hint: 'Use sin²θ = 1 − cos²θ.', explanation: 'sin²θ = 1 − 25/169 = 144/169, so sin θ = 12/13 (positive in QI).', standardCode: 'HSF-TF.C.8' },
        { index: 1, question: 'Find the exact value of cos(15°) using the difference formula.', type: 'multiple-choice', options: ['(√6 + √2)/4', '(√6 − √2)/4', '(√3 + 1)/4', '√3/2'], correctAnswer: '(√6 + √2)/4', hint: '15° = 45° − 30°.', explanation: 'cos(15°) = cos(45° − 30°) = cos 45° cos 30° + sin 45° sin 30° = (√2/2)(√3/2) + (√2/2)(1/2) = (√6 + √2)/4.', standardCode: 'HSF-TF.C.9' },
        { index: 2, question: 'Simplify: sin²θ + cos²θ + tan²θ.', type: 'short-answer', correctAnswer: 'sec²θ', hint: 'Replace sin²θ + cos²θ with 1, then use a Pythagorean identity.', explanation: 'sin²θ + cos²θ = 1, so the expression becomes 1 + tan²θ = sec²θ.', standardCode: 'HSF-TF.C.8' },
        { index: 3, question: 'Find sin(2θ) if sin θ = −4/5 and θ is in Quadrant III.', type: 'multiple-choice', options: ['24/25', '−24/25', '7/25', '−7/25'], correctAnswer: '24/25', hint: 'First find cos θ (negative in QIII), then use sin(2θ) = 2 sin θ cos θ.', explanation: 'cos θ = −3/5 in QIII. sin(2θ) = 2(−4/5)(−3/5) = 24/25.', standardCode: 'HSF-TF.C.9' },
        { index: 4, question: 'Which expression is equivalent to cos(2θ)?', type: 'multiple-choice', options: ['2cos²θ − 1', '2sinθ cosθ', '1 + 2sin²θ', 'cos²θ + sin²θ'], correctAnswer: '2cos²θ − 1', hint: 'Recall the double-angle formulas for cosine.', explanation: 'cos(2θ) = cos²θ − sin²θ. Replacing sin²θ with 1 − cos²θ gives 2cos²θ − 1.', standardCode: 'HSF-TF.C.9' },
      ],
      assessment: {
        questions: [
          { question: 'Prove that (1 − cos²θ)/sin θ = sin θ for sin θ ≠ 0.', type: 'short-answer', correctAnswer: '1 − cos²θ = sin²θ by the Pythagorean identity, so sin²θ/sin θ = sin θ.', standardCode: 'HSF-TF.C.8' },
          { question: 'Find the exact value of sin(105°).', type: 'multiple-choice', options: ['(√6 + √2)/4', '(√6 − √2)/4', '(√2 − √6)/4', '√3/2'], correctAnswer: '(√6 + √2)/4', standardCode: 'HSF-TF.C.9' },
          { question: 'If cos θ = 7/25, find cos(2θ).', type: 'short-answer', correctAnswer: '−527/625', standardCode: 'HSF-TF.C.9' },
        ],
      },
    },
  },
  {
    slug: 'grade12-math-graphing-trig',
    title: 'Graphing Trigonometric Functions',
    description: 'Graph sine, cosine, and tangent functions and identify the effects of amplitude, period, phase shift, and vertical shift',
    subject: 'math',
    grade: 12,
    gradeBand: '9-12',
    topicCluster: 'Trigonometric Functions',
    standardCodes: ['HSF-TF.B.5'],
    content: {
      intro: {
        title: 'Graphing Trigonometric Functions',
        text: 'Trigonometric functions produce smooth, repeating wave patterns when graphed. Understanding how to read and transform these graphs is essential for modeling periodic phenomena like sound waves, tides, and seasonal temperatures. In this module you will learn how changes to the equation of a trig function affect its graph, including amplitude, period, phase shift, and vertical shift.',
      },
      segments: [
        {
          index: 0,
          title: 'The Parent Sine and Cosine Graphs',
          text: 'The graph of y = sin x starts at the origin, rises to a maximum of 1 at π/2, returns to 0 at π, drops to −1 at 3π/2, and completes one cycle at 2π. The graph of y = cos x has the same shape but starts at its maximum of 1. Both functions have amplitude 1 (half the distance from peak to trough) and period 2π (the length of one complete cycle). Recognizing these parent graphs is the first step in graphing any transformation.',
          keyVocabulary: ['amplitude', 'period', 'cycle', 'parent function'],
          example: 'y = sin x has amplitude 1, period 2π, and passes through (0, 0).',
        },
        {
          index: 1,
          title: 'Amplitude and Period Changes',
          text: 'In the general form y = A sin(Bx), the amplitude is |A| and the period is 2π/|B|. When A > 1 the graph stretches vertically; when 0 < A < 1 it compresses. When B > 1 the graph completes more cycles in the same horizontal space (shorter period); when 0 < B < 1 it stretches horizontally. A negative A reflects the graph over the x-axis.',
          keyVocabulary: ['vertical stretch', 'horizontal compression', 'reflection', 'frequency'],
          example: 'y = 3 sin(2x) has amplitude 3 and period 2π/2 = π.',
        },
        {
          index: 2,
          title: 'Phase Shift and Vertical Shift',
          text: 'In y = A sin(B(x − C)) + D, C is the phase shift (horizontal translation) and D is the vertical shift. A positive C shifts the graph right, and a positive D shifts it up. The midline of the graph moves from y = 0 to y = D. When modeling real-world data, the phase shift aligns the graph to match the starting point of the data, and the vertical shift centers it on the correct baseline.',
          keyVocabulary: ['phase shift', 'vertical shift', 'midline', 'horizontal translation'],
          example: 'y = 2 sin(x − π/3) + 1 has amplitude 2, period 2π, phase shift π/3 right, and midline y = 1.',
        },
        {
          index: 3,
          title: 'Graphing Tangent',
          text: 'The tangent function y = tan x has a period of π, not 2π. It has vertical asymptotes where cosine equals zero: x = π/2 + nπ for any integer n. The graph passes through the origin and increases without bound as it approaches each asymptote. The general form y = A tan(Bx − C) + D changes the period to π/|B|, shifts the asymptotes, and translates the graph vertically.',
          keyVocabulary: ['tangent graph', 'vertical asymptote', 'period π', 'undefined'],
          example: 'y = tan(x) has asymptotes at x = ±π/2, ±3π/2, etc.',
        },
      ],
      practice: [
        { index: 0, question: 'What is the amplitude and period of y = 4 sin(3x)?', type: 'short-answer', correctAnswer: 'Amplitude 4, period 2π/3', hint: 'Use amplitude = |A| and period = 2π/|B|.', explanation: 'A = 4 so amplitude is 4. B = 3 so period is 2π/3.', standardCode: 'HSF-TF.B.5' },
        { index: 1, question: 'Which transformation does y = sin(x) + 5 represent?', type: 'multiple-choice', options: ['Vertical shift up 5', 'Horizontal shift right 5', 'Amplitude 5', 'Period 5'], correctAnswer: 'Vertical shift up 5', hint: 'The +5 is outside the sine function.', explanation: 'Adding 5 outside the function shifts the entire graph up by 5 units. The midline moves to y = 5.', standardCode: 'HSF-TF.B.5' },
        { index: 2, question: 'Find the phase shift of y = cos(2x − π).', type: 'short-answer', correctAnswer: 'π/2 to the right', hint: 'Factor out the coefficient of x first: 2(x − π/2).', explanation: 'Rewrite as y = cos(2(x − π/2)). The phase shift is π/2 to the right.', standardCode: 'HSF-TF.B.5' },
        { index: 3, question: 'What is the period of y = tan(x/2)?', type: 'multiple-choice', options: ['π/2', 'π', '2π', '4π'], correctAnswer: '2π', hint: 'The period of tan is π/|B|.', explanation: 'B = 1/2, so the period is π/(1/2) = 2π.', standardCode: 'HSF-TF.B.5' },
        { index: 4, question: 'Describe the graph of y = −2 cos(x) + 3 compared to y = cos(x).', type: 'short-answer', correctAnswer: 'Reflected over the x-axis, amplitude 2, shifted up 3 units with midline y = 3', hint: 'The negative sign reflects, the 2 stretches, and the +3 shifts up.', explanation: 'The negative A reflects over the x-axis. |A| = 2 doubles the amplitude. D = 3 shifts the midline up to y = 3.', standardCode: 'HSF-TF.B.5' },
      ],
      assessment: {
        questions: [
          { question: 'Write the equation of a sine function with amplitude 5, period π, and vertical shift down 2.', type: 'short-answer', correctAnswer: 'y = 5 sin(2x) − 2', standardCode: 'HSF-TF.B.5' },
          { question: 'What is the phase shift and period of y = 3 sin(4x − π) + 1?', type: 'short-answer', correctAnswer: 'Phase shift π/4 right, period π/2', standardCode: 'HSF-TF.B.5' },
          { question: 'Where are the vertical asymptotes of y = tan(2x)?', type: 'multiple-choice', options: ['x = π/4 + nπ/2', 'x = π/2 + nπ', 'x = π + 2nπ', 'x = nπ'], correctAnswer: 'x = π/4 + nπ/2', standardCode: 'HSF-TF.B.5' },
        ],
      },
    },
  },

  // ============================================
  // Limits Introduction (2 modules)
  // ============================================
  {
    slug: 'grade12-math-concept-of-limits',
    title: 'The Concept of Limits',
    description: 'Understand what it means for a function to approach a value and develop intuition for limits using tables and graphs',
    subject: 'math',
    grade: 12,
    gradeBand: '9-12',
    topicCluster: 'Limits Introduction',
    standardCodes: ['HSF-TF.A.1'],
    content: {
      intro: {
        title: 'The Concept of Limits',
        text: 'A limit describes the value a function approaches as its input gets closer and closer to a particular number. Limits are the gateway to calculus and help explain instantaneous rates of change and areas under curves. Even without formal calculus, understanding limits deepens your grasp of function behavior near points where a function might be undefined or where it changes dramatically.',
      },
      segments: [
        {
          index: 0,
          title: 'Approaching a Value',
          text: 'Consider the function f(x) = (x² − 1)/(x − 1). This function is undefined at x = 1 because the denominator is zero. But if you plug in values close to 1 — like 0.9, 0.99, 0.999, and 1.1, 1.01, 1.001 — the outputs get closer and closer to 2. We say the limit of f(x) as x approaches 1 is 2, written lim(x→1) f(x) = 2. The limit exists even though the function is not defined at that exact point.',
          keyVocabulary: ['limit', 'approaches', 'undefined', 'removable discontinuity'],
          example: 'f(0.999) = (0.999² − 1)/(0.999 − 1) = (−0.001999)/(−0.001) = 1.999 ≈ 2.',
        },
        {
          index: 1,
          title: 'One-Sided Limits',
          text: 'Sometimes a function approaches different values depending on whether x approaches from the left (values less than a) or from the right (values greater than a). The left-hand limit is written lim(x→a⁻) f(x) and the right-hand limit is lim(x→a⁺) f(x). The overall limit exists only when both one-sided limits are equal. For example, the function f(x) = |x|/x has a left-hand limit of −1 and a right-hand limit of 1 at x = 0, so the overall limit does not exist.',
          keyVocabulary: ['one-sided limit', 'left-hand limit', 'right-hand limit', 'does not exist'],
          example: 'For f(x) = |x|/x: as x → 0⁻, f(x) → −1; as x → 0⁺, f(x) → 1.',
        },
        {
          index: 2,
          title: 'Limits from Graphs and Tables',
          text: 'You can estimate limits from a graph by observing what y-value the curve approaches as x gets close to the target value. From a table, calculate output values for inputs increasingly close to the target and watch for convergence. If the outputs grow without bound (toward infinity), the limit does not exist in the ordinary sense but we may say the limit is infinity. A hole in a graph indicates the function is undefined there but the limit may still exist.',
          keyVocabulary: ['convergence', 'infinity', 'hole in graph', 'estimate'],
        },
      ],
      practice: [
        { index: 0, question: 'What is lim(x→2) (x² − 4)/(x − 2)?', type: 'multiple-choice', options: ['0', '2', '4', 'Does not exist'], correctAnswer: '4', hint: 'Factor the numerator.', explanation: '(x² − 4)/(x − 2) = (x + 2)(x − 2)/(x − 2) = x + 2 for x ≠ 2. As x → 2, x + 2 → 4.', standardCode: 'HSF-TF.A.1' },
        { index: 1, question: 'Does lim(x→0) |x|/x exist? Explain.', type: 'short-answer', correctAnswer: 'No, because the left-hand limit is −1 and the right-hand limit is 1.', hint: 'Check the left and right limits separately.', explanation: 'From the left, x is negative so |x|/x = −x/x = −1. From the right, |x|/x = x/x = 1. Since −1 ≠ 1, the limit does not exist.', standardCode: 'HSF-TF.A.1' },
        { index: 2, question: 'Use a table to estimate lim(x→0) sin(x)/x.', type: 'multiple-choice', options: ['0', '0.5', '1', 'Does not exist'], correctAnswer: '1', hint: 'Try x = 0.1, 0.01, 0.001 in radians.', explanation: 'sin(0.1)/0.1 ≈ 0.9983, sin(0.01)/0.01 ≈ 0.99998. The values approach 1.', standardCode: 'HSF-TF.A.1' },
        { index: 3, question: 'If a graph has a hole at (3, 5), what is lim(x→3) f(x)?', type: 'multiple-choice', options: ['3', '5', '0', 'Does not exist'], correctAnswer: '5', hint: 'A hole means the function is not defined there, but the curve approaches a specific y-value.', explanation: 'The hole at (3, 5) indicates the curve approaches y = 5 as x → 3, so the limit is 5.', standardCode: 'HSF-TF.A.1' },
        { index: 4, question: 'What is lim(x→0) 1/x²?', type: 'multiple-choice', options: ['0', '1', '∞', 'Does not exist'], correctAnswer: '∞', hint: 'As x gets close to 0, the denominator gets very small and the fraction gets very large.', explanation: 'As x → 0 from either side, x² → 0⁺ so 1/x² → +∞. We say the limit is infinity.', standardCode: 'HSF-TF.A.1' },
      ],
      assessment: {
        questions: [
          { question: 'Evaluate lim(x→3) (x² − 9)/(x − 3).', type: 'short-answer', correctAnswer: '6', standardCode: 'HSF-TF.A.1' },
          { question: 'True or false: A function must be defined at x = a for lim(x→a) f(x) to exist.', type: 'multiple-choice', options: ['True', 'False'], correctAnswer: 'False', standardCode: 'HSF-TF.A.1' },
          { question: 'Find the left-hand and right-hand limits of f(x) = 1/(x − 2) as x → 2.', type: 'short-answer', correctAnswer: 'Left-hand limit is −∞ and right-hand limit is +∞, so the limit does not exist.', standardCode: 'HSF-TF.A.1' },
        ],
      },
    },
  },
  {
    slug: 'grade12-math-evaluating-limits',
    title: 'Evaluating Limits',
    description: 'Apply algebraic techniques such as factoring, rationalizing, and direct substitution to evaluate limits of functions',
    subject: 'math',
    grade: 12,
    gradeBand: '9-12',
    topicCluster: 'Limits Introduction',
    standardCodes: ['HSF-TF.A.2'],
    content: {
      intro: {
        title: 'Evaluating Limits',
        text: 'While tables and graphs give estimates, algebra gives exact answers. Many limits can be found by simply substituting the value of x into the function. When substitution gives 0/0 — an indeterminate form — you need algebraic techniques to simplify the expression before substituting. In this module you will learn systematic methods for evaluating limits exactly.',
      },
      segments: [
        {
          index: 0,
          title: 'Direct Substitution',
          text: 'If a function is continuous at x = a, the limit equals the function value: lim(x→a) f(x) = f(a). Polynomial and rational functions (where the denominator is not zero) are continuous at all points in their domain. So for f(x) = 3x² + 1, lim(x→2) f(x) = 3(4) + 1 = 13. Always try direct substitution first — it is the simplest method and works more often than you might expect.',
          keyVocabulary: ['direct substitution', 'continuous', 'polynomial', 'domain'],
          example: 'lim(x→5) (2x + 3) = 2(5) + 3 = 13.',
        },
        {
          index: 1,
          title: 'Factoring and Canceling',
          text: 'When direct substitution gives 0/0, try factoring the numerator and denominator and canceling the common factor. For example, lim(x→3) (x² − 9)/(x − 3): substitution gives 0/0, but factoring gives (x + 3)(x − 3)/(x − 3) = x + 3 for x ≠ 3. Now substituting gives 3 + 3 = 6. This technique works whenever the 0/0 form arises from a shared linear factor.',
          keyVocabulary: ['indeterminate form', '0/0', 'factor', 'cancel'],
          example: 'lim(x→−1) (x² + 3x + 2)/(x + 1) = lim(x→−1) (x + 2)(x + 1)/(x + 1) = lim(x→−1) (x + 2) = 1.',
        },
        {
          index: 2,
          title: 'Rationalizing',
          text: 'When a limit involves a square root and substitution gives 0/0, multiply the numerator and denominator by the conjugate. For lim(x→0) (√(x + 4) − 2)/x, multiply by (√(x + 4) + 2)/(√(x + 4) + 2). The numerator becomes (x + 4) − 4 = x. Cancel the x, then substitute to get 1/(√4 + 2) = 1/4. Rationalizing is essential for limits involving radical expressions.',
          keyVocabulary: ['rationalize', 'conjugate', 'radical expression', 'simplify'],
          example: 'lim(x→0) (√(x + 4) − 2)/x = 1/4 after rationalizing.',
        },
      ],
      practice: [
        { index: 0, question: 'Evaluate lim(x→4) (2x − 3).', type: 'short-answer', correctAnswer: '5', hint: 'Try direct substitution.', explanation: 'The function is a polynomial, so substitute directly: 2(4) − 3 = 5.', standardCode: 'HSF-TF.A.2' },
        { index: 1, question: 'Evaluate lim(x→−2) (x² − 4)/(x + 2).', type: 'multiple-choice', options: ['−4', '0', '4', 'Does not exist'], correctAnswer: '−4', hint: 'Factor x² − 4.', explanation: '(x² − 4)/(x + 2) = (x − 2)(x + 2)/(x + 2) = x − 2. Substituting x = −2 gives −4.', standardCode: 'HSF-TF.A.2' },
        { index: 2, question: 'Evaluate lim(x→0) (√(x + 9) − 3)/x.', type: 'short-answer', correctAnswer: '1/6', hint: 'Rationalize by multiplying by (√(x + 9) + 3)/(√(x + 9) + 3).', explanation: 'After rationalizing: (x + 9 − 9)/[x(√(x + 9) + 3)] = 1/(√(x + 9) + 3). At x = 0: 1/(3 + 3) = 1/6.', standardCode: 'HSF-TF.A.2' },
        { index: 3, question: 'Evaluate lim(x→1) (x³ − 1)/(x − 1).', type: 'multiple-choice', options: ['1', '2', '3', '0'], correctAnswer: '3', hint: 'Factor x³ − 1 as (x − 1)(x² + x + 1).', explanation: '(x³ − 1)/(x − 1) = (x − 1)(x² + x + 1)/(x − 1) = x² + x + 1. At x = 1: 1 + 1 + 1 = 3.', standardCode: 'HSF-TF.A.2' },
        { index: 4, question: 'What does it mean when direct substitution gives 0/0?', type: 'short-answer', correctAnswer: 'It is an indeterminate form that requires further algebraic simplification before the limit can be evaluated.', hint: '0/0 does not tell you the limit — it signals more work is needed.', explanation: 'The form 0/0 means both numerator and denominator approach zero, so the ratio could be any value. You must simplify by factoring, rationalizing, or other techniques to find the actual limit.', standardCode: 'HSF-TF.A.2' },
      ],
      assessment: {
        questions: [
          { question: 'Evaluate lim(x→5) (x² − 25)/(x − 5).', type: 'short-answer', correctAnswer: '10', standardCode: 'HSF-TF.A.2' },
          { question: 'Evaluate lim(x→0) (√(1 + x) − 1)/x.', type: 'multiple-choice', options: ['0', '1/2', '1', '2'], correctAnswer: '1/2', standardCode: 'HSF-TF.A.2' },
          { question: 'True or false: If lim(x→a) f(x) exists, then f(a) must be defined.', type: 'multiple-choice', options: ['True', 'False'], correctAnswer: 'False', standardCode: 'HSF-TF.A.2' },
        ],
      },
    },
  },

  // ============================================
  // Statistics (3 modules)
  // ============================================
  {
    slug: 'grade12-math-normal-distribution',
    title: 'The Normal Distribution',
    description: 'Understand the bell curve, the empirical rule, and how to use z-scores to find probabilities for normally distributed data',
    subject: 'math',
    grade: 12,
    gradeBand: '9-12',
    topicCluster: 'Statistics',
    standardCodes: ['HSS-IC.A.1', 'HSS-IC.B.6'],
    content: {
      intro: {
        title: 'The Normal Distribution',
        text: 'The normal distribution is the most important probability distribution in statistics. Its bell-shaped curve appears in heights, test scores, measurement errors, and countless other natural phenomena. Understanding the normal distribution allows you to calculate the probability of events, identify unusual observations, and form the basis for statistical inference.',
      },
      segments: [
        {
          index: 0,
          title: 'The Bell Curve',
          text: 'A normal distribution is symmetric about its mean μ. The standard deviation σ controls the spread: a small σ produces a tall, narrow bell, while a large σ produces a short, wide bell. The total area under the curve is 1, representing 100% probability. The curve never touches the x-axis but gets infinitely close. The mean, median, and mode are all equal and located at the center of the distribution.',
          keyVocabulary: ['normal distribution', 'mean', 'standard deviation', 'symmetric', 'bell curve'],
          example: 'Test scores with μ = 75 and σ = 10 form a bell curve centered at 75.',
        },
        {
          index: 1,
          title: 'The Empirical Rule (68-95-99.7)',
          text: 'For any normal distribution, approximately 68% of data falls within one standard deviation of the mean, about 95% falls within two standard deviations, and about 99.7% falls within three standard deviations. This is called the empirical rule or the 68-95-99.7 rule. It provides a quick way to estimate probabilities without a table or calculator. Values beyond three standard deviations from the mean are considered extremely rare.',
          keyVocabulary: ['empirical rule', '68-95-99.7', 'within one sigma', 'outlier'],
          example: 'If μ = 100 and σ = 15, about 68% of values fall between 85 and 115.',
        },
        {
          index: 2,
          title: 'Z-Scores and the Standard Normal Distribution',
          text: 'A z-score converts any normal value to the standard normal distribution (μ = 0, σ = 1) using z = (x − μ)/σ. This lets you compare values from different distributions and look up probabilities in a standard normal table. A z-score of 1.5 means the value is 1.5 standard deviations above the mean. Negative z-scores indicate values below the mean.',
          keyVocabulary: ['z-score', 'standard normal', 'standardize', 'probability table'],
          example: 'If μ = 70 and σ = 5, then x = 80 has z = (80 − 70)/5 = 2.0.',
        },
      ],
      practice: [
        { index: 0, question: 'In a normal distribution with μ = 50 and σ = 8, what percentage of data falls between 42 and 58?', type: 'multiple-choice', options: ['34%', '68%', '95%', '99.7%'], correctAnswer: '68%', hint: '42 = 50 − 8 and 58 = 50 + 8, which is one standard deviation from the mean.', explanation: '42 to 58 is μ ± σ. By the empirical rule, about 68% of data falls within one standard deviation.', standardCode: 'HSS-IC.A.1' },
        { index: 1, question: 'Find the z-score for x = 85 when μ = 70 and σ = 10.', type: 'short-answer', correctAnswer: '1.5', hint: 'Use z = (x − μ)/σ.', explanation: 'z = (85 − 70)/10 = 15/10 = 1.5.', standardCode: 'HSS-IC.B.6' },
        { index: 2, question: 'About what percentage of data in a normal distribution lies below two standard deviations above the mean?', type: 'multiple-choice', options: ['68%', '84%', '95%', '97.5%'], correctAnswer: '97.5%', hint: '95% is between μ − 2σ and μ + 2σ, so 2.5% is in each tail.', explanation: '95% lies between μ − 2σ and μ + 2σ. The remaining 5% is split equally in the two tails: 2.5% each. So 97.5% lies below μ + 2σ.', standardCode: 'HSS-IC.A.1' },
        { index: 3, question: 'A student scores 92 on a test with μ = 80 and σ = 6. Is this score unusual?', type: 'short-answer', correctAnswer: 'Yes, the z-score is 2.0, which is at the boundary of unusual (beyond 2 standard deviations).', hint: 'Calculate the z-score and compare to 2.', explanation: 'z = (92 − 80)/6 = 2.0. Scores beyond z = 2 are typically considered unusual since only about 5% of scores fall beyond 2 standard deviations.', standardCode: 'HSS-IC.B.6' },
        { index: 4, question: 'Two classes have test means of 78 and 82 with standard deviations of 4 and 8 respectively. In which class is a score of 90 more impressive?', type: 'short-answer', correctAnswer: 'Class 1, where the z-score is 3.0, compared to 1.0 in Class 2.', hint: 'Calculate the z-score for each class.', explanation: 'Class 1: z = (90 − 78)/4 = 3.0. Class 2: z = (90 − 82)/8 = 1.0. The higher z-score in Class 1 means 90 is more exceptional relative to that class.', standardCode: 'HSS-IC.B.6' },
      ],
      assessment: {
        questions: [
          { question: 'In a normal distribution with μ = 200 and σ = 25, between what two values does 95% of the data fall?', type: 'short-answer', correctAnswer: 'Between 150 and 250', standardCode: 'HSS-IC.A.1' },
          { question: 'Find the z-score for x = 56 if μ = 64 and σ = 4.', type: 'short-answer', correctAnswer: '−2', standardCode: 'HSS-IC.B.6' },
          { question: 'What property of the normal distribution makes the mean equal to the median?', type: 'multiple-choice', options: ['It is bimodal', 'It is symmetric', 'It is skewed right', 'It is uniform'], correctAnswer: 'It is symmetric', standardCode: 'HSS-IC.A.1' },
        ],
      },
    },
  },
  {
    slug: 'grade12-math-confidence-intervals',
    title: 'Confidence Intervals',
    description: 'Construct and interpret confidence intervals for population means and proportions using sample data',
    subject: 'math',
    grade: 12,
    gradeBand: '9-12',
    topicCluster: 'Statistics',
    standardCodes: ['HSS-IC.A.1', 'HSS-IC.B.4'],
    content: {
      intro: {
        title: 'Confidence Intervals',
        text: 'When you measure something about a sample, you want to draw conclusions about the entire population. A confidence interval gives a range of plausible values for a population parameter along with a level of confidence. Instead of saying the average is exactly 72, you can say you are 95% confident the true average is between 68 and 76. This module teaches you to build and interpret these intervals.',
      },
      segments: [
        {
          index: 0,
          title: 'From Sample to Population',
          text: 'A sample statistic like the sample mean x̄ is an estimate of the population mean μ. Different samples give different estimates, creating sampling variability. The standard error measures this variability: SE = σ/√n for means (or √(p̂(1−p̂)/n) for proportions). Larger samples produce smaller standard errors and therefore more precise estimates. The standard error is the foundation of the confidence interval.',
          keyVocabulary: ['sample statistic', 'population parameter', 'standard error', 'sampling variability'],
          example: 'If σ = 10 and n = 25, then SE = 10/√25 = 10/5 = 2.',
        },
        {
          index: 1,
          title: 'Building a Confidence Interval',
          text: 'A confidence interval has the form: point estimate ± margin of error. The margin of error is the critical value times the standard error. For a 95% confidence interval using the normal distribution, the critical value z* is approximately 1.96. So a 95% CI for the mean is x̄ ± 1.96(σ/√n). For 90% confidence, z* ≈ 1.645, and for 99%, z* ≈ 2.576. The wider the interval, the more confident you are that it contains the true parameter.',
          keyVocabulary: ['margin of error', 'critical value', 'confidence level', 'point estimate'],
          example: 'If x̄ = 72, σ = 10, n = 25: 95% CI = 72 ± 1.96(2) = 72 ± 3.92 = (68.08, 75.92).',
        },
        {
          index: 2,
          title: 'Interpreting Confidence Intervals',
          text: 'A 95% confidence interval means that if you repeated the sampling process many times, about 95% of the resulting intervals would contain the true population parameter. It does not mean there is a 95% probability that the true value is in this specific interval — the true value is fixed, and the interval either contains it or does not. Common misinterpretations include treating the confidence level as a probability about the parameter rather than about the procedure.',
          keyVocabulary: ['interpretation', 'repeated sampling', 'confidence level meaning', 'fixed parameter'],
        },
      ],
      practice: [
        { index: 0, question: 'A sample of 36 students has mean score 80 and the population standard deviation is 12. Find the 95% confidence interval.', type: 'short-answer', correctAnswer: '(76.08, 83.92)', hint: 'SE = 12/√36 = 2, then 80 ± 1.96(2).', explanation: 'SE = 12/6 = 2. Margin of error = 1.96 × 2 = 3.92. CI = (80 − 3.92, 80 + 3.92) = (76.08, 83.92).', standardCode: 'HSS-IC.B.4' },
        { index: 1, question: 'Which increases the width of a confidence interval?', type: 'multiple-choice', options: ['Increasing sample size', 'Decreasing confidence level', 'Increasing confidence level', 'Decreasing variability'], correctAnswer: 'Increasing confidence level', hint: 'More confidence requires a wider net.', explanation: 'A higher confidence level means a larger critical value, which increases the margin of error and widens the interval.', standardCode: 'HSS-IC.B.4' },
        { index: 2, question: 'If a 95% CI for a mean is (45, 55), what is the point estimate?', type: 'short-answer', correctAnswer: '50', hint: 'The point estimate is the center of the interval.', explanation: '(45 + 55)/2 = 50. The point estimate is the midpoint of the confidence interval.', standardCode: 'HSS-IC.B.4' },
        { index: 3, question: 'A poll finds 60% support with a margin of error of ±3%. What is the 95% confidence interval?', type: 'multiple-choice', options: ['(57%, 63%)', '(54%, 66%)', '(60%, 63%)', '(55%, 65%)'], correctAnswer: '(57%, 63%)', hint: 'Add and subtract the margin of error from the point estimate.', explanation: '60% ± 3% gives (57%, 63%).', standardCode: 'HSS-IC.B.4' },
        { index: 4, question: 'True or false: A 99% confidence interval is narrower than a 95% confidence interval for the same data.', type: 'multiple-choice', options: ['True', 'False'], correctAnswer: 'False', hint: 'More confidence requires a wider interval.', explanation: 'A higher confidence level requires a larger critical value, producing a wider interval.', standardCode: 'HSS-IC.B.4' },
      ],
      assessment: {
        questions: [
          { question: 'A sample of 100 has mean 50 and σ = 10. Construct a 90% confidence interval.', type: 'short-answer', correctAnswer: '(48.355, 51.645)', standardCode: 'HSS-IC.B.4' },
          { question: 'Explain what it means to say you are 95% confident in a confidence interval.', type: 'short-answer', correctAnswer: 'If the sampling procedure were repeated many times, about 95% of the intervals produced would contain the true population parameter.', standardCode: 'HSS-IC.B.4' },
          { question: 'To cut the margin of error in half, by what factor must the sample size increase?', type: 'multiple-choice', options: ['2', '4', '8', '16'], correctAnswer: '4', standardCode: 'HSS-IC.A.1' },
        ],
      },
    },
  },
  {
    slug: 'grade12-math-statistical-inference',
    title: 'Statistical Inference',
    description: 'Use hypothesis tests and significance levels to draw conclusions about populations from sample data',
    subject: 'math',
    grade: 12,
    gradeBand: '9-12',
    topicCluster: 'Statistics',
    standardCodes: ['HSS-IC.A.1', 'HSS-IC.B.5'],
    content: {
      intro: {
        title: 'Statistical Inference',
        text: 'Statistical inference uses sample data to make decisions about a population. The core question is: could the pattern we observe in our sample have occurred by chance, or does it reflect a real effect in the population? Hypothesis testing provides a structured framework for answering this question. In this module you will learn to set up hypotheses, calculate test statistics, and interpret p-values.',
      },
      segments: [
        {
          index: 0,
          title: 'Null and Alternative Hypotheses',
          text: 'Every hypothesis test starts with two competing claims. The null hypothesis H₀ represents the status quo — usually that there is no effect or no difference. The alternative hypothesis Hₐ is what you want to provide evidence for. For example, if you believe a new teaching method improves test scores, H₀ might be μ = 75 (no improvement) and Hₐ might be μ > 75. You never prove H₀ true; you either reject it or fail to reject it based on the evidence.',
          keyVocabulary: ['null hypothesis', 'alternative hypothesis', 'status quo', 'reject'],
          example: 'H₀: μ = 75 (no change). Hₐ: μ > 75 (scores improved).',
        },
        {
          index: 1,
          title: 'Test Statistics and P-Values',
          text: 'A test statistic measures how far your sample result is from the null hypothesis value, in standard error units. For a population mean with known σ, the z-test statistic is z = (x̄ − μ₀)/(σ/√n). The p-value is the probability of observing a test statistic as extreme as or more extreme than what you got, assuming H₀ is true. A small p-value (typically below 0.05) suggests the data are unlikely under H₀, providing evidence to reject it.',
          keyVocabulary: ['test statistic', 'p-value', 'significance level', 'z-test'],
          example: 'If x̄ = 78, μ₀ = 75, σ = 10, n = 25: z = (78 − 75)/(10/5) = 1.5. P-value ≈ 0.067.',
        },
        {
          index: 2,
          title: 'Making a Decision',
          text: 'Compare the p-value to the significance level α (commonly 0.05). If p ≤ α, reject H₀ and conclude there is statistically significant evidence for Hₐ. If p > α, fail to reject H₀ — the data do not provide enough evidence. Failing to reject H₀ is not the same as proving H₀ true. Be aware of Type I errors (rejecting H₀ when it is true) and Type II errors (failing to reject H₀ when it is false).',
          keyVocabulary: ['significance level', 'statistically significant', 'Type I error', 'Type II error'],
        },
      ],
      practice: [
        { index: 0, question: 'A factory claims its light bulbs last 1000 hours on average. You suspect they last less. State H₀ and Hₐ.', type: 'short-answer', correctAnswer: 'H₀: μ = 1000, Hₐ: μ < 1000', hint: 'The null is the claim; the alternative is your suspicion.', explanation: 'H₀ states the claim (μ = 1000). Since you suspect they last less, Hₐ: μ < 1000 (one-tailed, left).', standardCode: 'HSS-IC.B.5' },
        { index: 1, question: 'If the p-value is 0.03 and α = 0.05, what is the decision?', type: 'multiple-choice', options: ['Reject H₀', 'Fail to reject H₀', 'Accept H₀', 'Need more data'], correctAnswer: 'Reject H₀', hint: 'Compare p to α.', explanation: 'Since 0.03 < 0.05, the p-value is less than α, so we reject H₀. The result is statistically significant.', standardCode: 'HSS-IC.B.5' },
        { index: 2, question: 'A sample of 49 has x̄ = 52 and the null hypothesis is μ = 50 with σ = 7. Find the z-test statistic.', type: 'short-answer', correctAnswer: '2.0', hint: 'z = (x̄ − μ₀)/(σ/√n).', explanation: 'z = (52 − 50)/(7/√49) = 2/(7/7) = 2/1 = 2.0.', standardCode: 'HSS-IC.B.5' },
        { index: 3, question: 'What does a Type I error represent?', type: 'multiple-choice', options: ['Rejecting H₀ when H₀ is true', 'Failing to reject H₀ when H₀ is false', 'Accepting Hₐ when Hₐ is false', 'Getting a large sample'], correctAnswer: 'Rejecting H₀ when H₀ is true', hint: 'Type I is a false positive.', explanation: 'A Type I error occurs when you reject the null hypothesis even though it is actually true — a false positive.', standardCode: 'HSS-IC.B.5' },
        { index: 4, question: 'If α = 0.01 and the p-value is 0.04, what is the conclusion?', type: 'multiple-choice', options: ['Reject H₀', 'Fail to reject H₀'], correctAnswer: 'Fail to reject H₀', hint: 'The p-value must be less than or equal to α to reject.', explanation: '0.04 > 0.01, so the result is not significant at the 1% level. We fail to reject H₀.', standardCode: 'HSS-IC.B.5' },
      ],
      assessment: {
        questions: [
          { question: 'A company claims at least 90% of customers are satisfied. A sample finds 85% satisfied. State the hypotheses for a test.', type: 'short-answer', correctAnswer: 'H₀: p ≥ 0.90, Hₐ: p < 0.90', standardCode: 'HSS-IC.B.5' },
          { question: 'If the test statistic z = 2.4 and the test is two-tailed at α = 0.05, what is the decision?', type: 'multiple-choice', options: ['Reject H₀', 'Fail to reject H₀'], correctAnswer: 'Reject H₀', standardCode: 'HSS-IC.B.5' },
          { question: 'Explain the difference between a Type I and a Type II error.', type: 'short-answer', correctAnswer: 'A Type I error rejects a true null hypothesis (false positive). A Type II error fails to reject a false null hypothesis (false negative).', standardCode: 'HSS-IC.B.5' },
        ],
      },
    },
  },

  // ============================================
  // Probability (2 modules)
  // ============================================
  {
    slug: 'grade12-math-conditional-probability',
    title: 'Conditional Probability',
    description: 'Calculate and interpret the probability of an event given that another event has occurred using formulas and two-way tables',
    subject: 'math',
    grade: 12,
    gradeBand: '9-12',
    topicCluster: 'Probability',
    standardCodes: ['HSS-CP.A.3', 'HSS-CP.B.6'],
    content: {
      intro: {
        title: 'Conditional Probability',
        text: 'Conditional probability answers the question: if one event has already happened, how does that change the likelihood of another event? Knowing that a card drawn is red changes the probability that it is a heart. This concept is fundamental to medical testing, weather forecasting, and everyday decision-making. In this module you will learn to compute and reason about conditional probabilities.',
      },
      segments: [
        {
          index: 0,
          title: 'The Conditional Probability Formula',
          text: 'The probability of event A given event B is written P(A|B) and calculated as P(A ∩ B)/P(B), provided P(B) > 0. The vertical bar means "given that." This formula restricts the sample space to only outcomes where B has occurred, then asks how many of those also satisfy A. For example, if 30% of students play sports and take honors classes, and 50% play sports, then P(honors | sports) = 0.30/0.50 = 0.60.',
          keyVocabulary: ['conditional probability', 'P(A|B)', 'intersection', 'restricted sample space'],
          example: 'P(A ∩ B) = 0.12, P(B) = 0.40, so P(A|B) = 0.12/0.40 = 0.30.',
        },
        {
          index: 1,
          title: 'Two-Way Tables and Tree Diagrams',
          text: 'Two-way tables organize data by two categorical variables and make conditional probabilities easy to read. To find P(A|B), look at the row (or column) for B and find what fraction corresponds to A. Tree diagrams show sequences of events with probabilities on each branch. Multiplying along a path gives the joint probability, and you can use Bayes-style reasoning to reverse the conditioning.',
          keyVocabulary: ['two-way table', 'tree diagram', 'joint probability', 'marginal probability'],
          example: 'In a table with 200 students: 80 are female athletes, 120 are female total. P(athlete | female) = 80/120 = 2/3.',
        },
        {
          index: 2,
          title: 'Independence and Conditional Probability',
          text: 'Two events are independent if knowing one gives no information about the other: P(A|B) = P(A). Equivalently, P(A ∩ B) = P(A) × P(B). If P(A|B) ≠ P(A), the events are dependent. Testing for independence using conditional probability is a critical skill. For example, if P(passing | studied) = 0.90 but P(passing) = 0.60, studying and passing are dependent events — studying changes the probability of passing.',
          keyVocabulary: ['independence', 'dependent events', 'multiplication rule', 'P(A|B) = P(A)'],
        },
      ],
      practice: [
        { index: 0, question: 'If P(A ∩ B) = 0.15 and P(B) = 0.30, find P(A|B).', type: 'short-answer', correctAnswer: '0.5', hint: 'Use P(A|B) = P(A ∩ B)/P(B).', explanation: 'P(A|B) = 0.15/0.30 = 0.50.', standardCode: 'HSS-CP.B.6' },
        { index: 1, question: 'A bag has 5 red and 3 blue marbles. You draw one marble and it is red. What is the probability the second marble (without replacement) is also red?', type: 'multiple-choice', options: ['5/8', '4/7', '4/8', '5/7'], correctAnswer: '4/7', hint: 'After removing one red marble, there are 4 red out of 7 total.', explanation: 'After drawing one red: 4 red left out of 7 total. P(2nd red | 1st red) = 4/7.', standardCode: 'HSS-CP.A.3' },
        { index: 2, question: 'In a class of 40 students, 25 passed the test and 15 studied more than 5 hours. Of those who studied more than 5 hours, 12 passed. Find P(passed | studied > 5 hours).', type: 'short-answer', correctAnswer: '12/15 = 4/5 = 0.80', hint: 'Restrict to students who studied > 5 hours, then find the fraction who passed.', explanation: '12 out of 15 students who studied > 5 hours passed. P = 12/15 = 0.80.', standardCode: 'HSS-CP.B.6' },
        { index: 3, question: 'Are events A and B independent if P(A) = 0.4, P(B) = 0.5, and P(A ∩ B) = 0.2?', type: 'multiple-choice', options: ['Yes', 'No'], correctAnswer: 'Yes', hint: 'Check if P(A ∩ B) = P(A) × P(B).', explanation: 'P(A) × P(B) = 0.4 × 0.5 = 0.2 = P(A ∩ B), so A and B are independent.', standardCode: 'HSS-CP.A.3' },
        { index: 4, question: 'A medical test has a 95% true positive rate and a 3% false positive rate. If 1% of the population has the disease, what is the probability a person who tests positive actually has the disease?', type: 'multiple-choice', options: ['About 24%', 'About 50%', 'About 76%', 'About 95%'], correctAnswer: 'About 24%', hint: 'Use the formula P(disease | positive) = P(positive | disease) × P(disease) / P(positive).', explanation: 'P(+|D)P(D) = 0.95 × 0.01 = 0.0095. P(+|no D)P(no D) = 0.03 × 0.99 = 0.0297. P(D|+) = 0.0095/(0.0095 + 0.0297) ≈ 0.242 or about 24%.', standardCode: 'HSS-CP.B.6' },
      ],
      assessment: {
        questions: [
          { question: 'P(A) = 0.6, P(B) = 0.3, P(A ∩ B) = 0.1. Find P(B|A).', type: 'short-answer', correctAnswer: '1/6 ≈ 0.167', standardCode: 'HSS-CP.B.6' },
          { question: 'If P(rain) = 0.4 and P(rain | cloudy) = 0.7, are rain and cloudy independent?', type: 'multiple-choice', options: ['Yes', 'No'], correctAnswer: 'No', standardCode: 'HSS-CP.A.3' },
          { question: 'In a two-way table, 60 of 200 surveyed prefer coffee. Of the 80 women surveyed, 35 prefer coffee. Find P(coffee | woman).', type: 'short-answer', correctAnswer: '35/80 = 7/16 = 0.4375', standardCode: 'HSS-CP.B.6' },
        ],
      },
    },
  },
  {
    slug: 'grade12-math-expected-value',
    title: 'Expected Value',
    description: 'Calculate and interpret the expected value of a random variable and use it to make informed decisions',
    subject: 'math',
    grade: 12,
    gradeBand: '9-12',
    topicCluster: 'Probability',
    standardCodes: ['HSS-MD.A.1', 'HSS-MD.A.2'],
    content: {
      intro: {
        title: 'Expected Value',
        text: 'Expected value is the long-run average outcome of a random process. It tells you what to expect on average if you repeated an experiment many times. Insurance companies, game designers, and investors all use expected value to make decisions under uncertainty. In this module you will learn to calculate expected values for discrete random variables and apply them to real-world situations.',
      },
      segments: [
        {
          index: 0,
          title: 'Probability Distributions for Discrete Random Variables',
          text: 'A discrete random variable takes on a countable number of values, each with a specific probability. A probability distribution lists all possible values and their probabilities. The probabilities must be between 0 and 1, and they must sum to 1. For example, if X is the number of heads in 2 coin flips, P(X=0) = 1/4, P(X=1) = 1/2, P(X=2) = 1/4. This distribution is the foundation for computing expected value.',
          keyVocabulary: ['discrete random variable', 'probability distribution', 'sum to 1', 'outcome'],
          example: 'Roll a die: P(X=1) = P(X=2) = ... = P(X=6) = 1/6.',
        },
        {
          index: 1,
          title: 'Computing Expected Value',
          text: 'The expected value E(X) is the sum of each value multiplied by its probability: E(X) = Σ[x · P(x)]. For a fair six-sided die, E(X) = 1(1/6) + 2(1/6) + 3(1/6) + 4(1/6) + 5(1/6) + 6(1/6) = 21/6 = 3.5. Notice the expected value does not have to be a value the variable can actually take. It represents the theoretical long-run average.',
          keyVocabulary: ['expected value', 'E(X)', 'weighted average', 'long-run average'],
          example: 'E(X) = 0(1/4) + 1(1/2) + 2(1/4) = 0 + 0.5 + 0.5 = 1 for X = number of heads in 2 flips.',
        },
        {
          index: 2,
          title: 'Decision-Making with Expected Value',
          text: 'Expected value helps compare options under uncertainty. If a lottery ticket costs $2 and offers a 1/1000 chance to win $500, the expected payoff is 500(1/1000) = $0.50, which is less than the $2 cost — a net expected loss of $1.50. In business, expected value guides decisions about investments, insurance premiums, and project risks. The option with the highest expected value is often (but not always) the best choice.',
          keyVocabulary: ['expected payoff', 'net expected value', 'fair game', 'decision analysis'],
          example: 'A $5 bet with a 1/5 chance to win $20: E = 20(1/5) − 5 = 4 − 5 = −$1. On average you lose $1 per play.',
        },
      ],
      practice: [
        { index: 0, question: 'Find the expected value of X with the distribution: P(X=1)=0.3, P(X=2)=0.5, P(X=3)=0.2.', type: 'short-answer', correctAnswer: '1.9', hint: 'E(X) = 1(0.3) + 2(0.5) + 3(0.2).', explanation: 'E(X) = 0.3 + 1.0 + 0.6 = 1.9.', standardCode: 'HSS-MD.A.2' },
        { index: 1, question: 'What is the expected value of rolling a fair six-sided die?', type: 'multiple-choice', options: ['3', '3.5', '4', '6'], correctAnswer: '3.5', hint: 'Sum all values times 1/6.', explanation: 'E(X) = (1+2+3+4+5+6)/6 = 21/6 = 3.5.', standardCode: 'HSS-MD.A.2' },
        { index: 2, question: 'A game costs $3 to play. You win $10 with probability 0.2 and $0 otherwise. What is the expected net gain?', type: 'short-answer', correctAnswer: '−$1', hint: 'Expected winnings minus cost.', explanation: 'E(winnings) = 10(0.2) + 0(0.8) = $2. Net = $2 − $3 = −$1.', standardCode: 'HSS-MD.A.1' },
        { index: 3, question: 'A raffle sells 500 tickets at $2 each for a $200 prize. What is the expected value for a ticket buyer?', type: 'multiple-choice', options: ['−$1.60', '−$0.40', '$0.40', '$1.60'], correctAnswer: '−$1.60', hint: 'Expected prize value minus ticket cost.', explanation: 'E(prize) = 200(1/500) = $0.40. Net = $0.40 − $2.00 = −$1.60.', standardCode: 'HSS-MD.A.1' },
        { index: 4, question: 'If E(X) = 4 and E(Y) = 7, what is E(X + Y)?', type: 'multiple-choice', options: ['3', '7', '11', '28'], correctAnswer: '11', hint: 'Expected value of a sum equals the sum of expected values.', explanation: 'By linearity of expectation, E(X + Y) = E(X) + E(Y) = 4 + 7 = 11.', standardCode: 'HSS-MD.A.2' },
      ],
      assessment: {
        questions: [
          { question: 'Compute E(X) for P(X=0)=0.1, P(X=5)=0.6, P(X=10)=0.3.', type: 'short-answer', correctAnswer: '6.0', standardCode: 'HSS-MD.A.2' },
          { question: 'Is a game fair if it costs $5 to play and pays $25 with probability 1/5?', type: 'multiple-choice', options: ['Yes, it is fair', 'No, it favors the player', 'No, it favors the house'], correctAnswer: 'Yes, it is fair', standardCode: 'HSS-MD.A.1' },
          { question: 'An insurance policy costs $100/year. It pays $10,000 with probability 0.005 and $0 otherwise. What is the expected profit for the insurance company per policy?', type: 'short-answer', correctAnswer: '$50', standardCode: 'HSS-MD.A.1' },
        ],
      },
    },
  },

  // ============================================
  // Sequences and Series (2 modules)
  // ============================================
  {
    slug: 'grade12-math-arithmetic-geometric-sequences',
    title: 'Arithmetic and Geometric Sequences',
    description: 'Identify, write formulas for, and find terms of arithmetic and geometric sequences',
    subject: 'math',
    grade: 12,
    gradeBand: '9-12',
    topicCluster: 'Sequences and Series',
    standardCodes: ['HSF-TF.A.1', 'HSF-TF.A.2'],
    content: {
      intro: {
        title: 'Arithmetic and Geometric Sequences',
        text: 'Sequences are ordered lists of numbers that follow a pattern. An arithmetic sequence grows by adding the same amount each time, while a geometric sequence grows by multiplying by the same factor. These patterns appear in finance (loan payments, compound interest), nature (population growth), and music (frequency ratios). In this module you will learn to recognize both types and write formulas that let you find any term without listing them all.',
      },
      segments: [
        {
          index: 0,
          title: 'Arithmetic Sequences',
          text: 'An arithmetic sequence has a constant difference d between consecutive terms. If the first term is a₁, the nth term is aₙ = a₁ + (n − 1)d. For example, 3, 7, 11, 15, ... has a₁ = 3 and d = 4, so the 20th term is 3 + 19(4) = 79. To check if a sequence is arithmetic, subtract consecutive terms and see if the difference is always the same.',
          keyVocabulary: ['arithmetic sequence', 'common difference', 'nth term formula', 'linear growth'],
          example: '2, 5, 8, 11, ... has d = 3. The 10th term is 2 + 9(3) = 29.',
        },
        {
          index: 1,
          title: 'Geometric Sequences',
          text: 'A geometric sequence has a constant ratio r between consecutive terms. If the first term is a₁, the nth term is aₙ = a₁ · r^(n−1). For example, 2, 6, 18, 54, ... has a₁ = 2 and r = 3, so the 8th term is 2 · 3⁷ = 4374. Geometric sequences can model exponential growth (r > 1) or decay (0 < r < 1). When |r| < 1, the terms get smaller and approach zero.',
          keyVocabulary: ['geometric sequence', 'common ratio', 'exponential growth', 'exponential decay'],
          example: '100, 50, 25, 12.5, ... has r = 0.5. The 6th term is 100(0.5)⁵ = 3.125.',
        },
        {
          index: 2,
          title: 'Writing and Applying Formulas',
          text: 'Given any two terms of a sequence, you can determine the type and write the formula. For arithmetic: use the two terms to find d, then find a₁. For geometric: divide one term by the other to find r (accounting for how many steps apart they are), then find a₁. These formulas are powerful tools: a financial advisor uses them to calculate loan balances, and a scientist uses them to model bacterial growth over time.',
          keyVocabulary: ['explicit formula', 'recursive formula', 'modeling', 'application'],
          example: 'If a₃ = 12 and a₇ = 48 in a geometric sequence: r⁴ = 48/12 = 4, so r = √2. Then a₁ = 12/r² = 12/2 = 6.',
        },
      ],
      practice: [
        { index: 0, question: 'Find the 15th term of the arithmetic sequence 4, 9, 14, 19, ...', type: 'short-answer', correctAnswer: '74', hint: 'd = 5, a₁ = 4. Use aₙ = a₁ + (n−1)d.', explanation: 'a₁₅ = 4 + 14(5) = 4 + 70 = 74.', standardCode: 'HSF-TF.A.2' },
        { index: 1, question: 'Is the sequence 3, 6, 12, 24, ... arithmetic or geometric?', type: 'multiple-choice', options: ['Arithmetic', 'Geometric', 'Neither'], correctAnswer: 'Geometric', hint: 'Check if consecutive terms have a constant difference or constant ratio.', explanation: '6/3 = 2, 12/6 = 2, 24/12 = 2. The common ratio is 2, so it is geometric.', standardCode: 'HSF-TF.A.1' },
        { index: 2, question: 'Find the 6th term of the geometric sequence with a₁ = 5 and r = 2.', type: 'multiple-choice', options: ['32', '64', '160', '320'], correctAnswer: '160', hint: 'a₆ = a₁ · r⁵.', explanation: 'a₆ = 5 · 2⁵ = 5 · 32 = 160.', standardCode: 'HSF-TF.A.2' },
        { index: 3, question: 'An arithmetic sequence has a₁ = 100 and d = −7. What is a₁₀?', type: 'short-answer', correctAnswer: '37', hint: 'a₁₀ = 100 + 9(−7).', explanation: 'a₁₀ = 100 + 9(−7) = 100 − 63 = 37.', standardCode: 'HSF-TF.A.2' },
        { index: 4, question: 'A bacteria population doubles every hour, starting with 500 bacteria. Write a formula for the population after n hours and find the population after 5 hours.', type: 'short-answer', correctAnswer: 'aₙ = 500 · 2ⁿ; after 5 hours: 16,000', hint: 'This is geometric with a₀ = 500 and r = 2.', explanation: 'aₙ = 500 · 2ⁿ. At n = 5: 500 · 2⁵ = 500 · 32 = 16,000.', standardCode: 'HSF-TF.A.2' },
      ],
      assessment: {
        questions: [
          { question: 'Find the common difference and the 25th term of the sequence 7, 3, −1, −5, ...', type: 'short-answer', correctAnswer: 'd = −4, a₂₅ = 7 + 24(−4) = −89', standardCode: 'HSF-TF.A.2' },
          { question: 'Find the 7th term of the geometric sequence 4, −12, 36, −108, ...', type: 'multiple-choice', options: ['2916', '−2916', '8748', '−8748'], correctAnswer: '2916', standardCode: 'HSF-TF.A.2' },
          { question: 'A car depreciates 15% per year. If it is worth $30,000 now, write a formula for its value after n years.', type: 'short-answer', correctAnswer: 'V(n) = 30000 · (0.85)ⁿ', standardCode: 'HSF-TF.A.1' },
        ],
      },
    },
  },
  {
    slug: 'grade12-math-sigma-notation',
    title: 'Sigma Notation and Series',
    description: 'Use sigma notation to represent and evaluate finite arithmetic and geometric series',
    subject: 'math',
    grade: 12,
    gradeBand: '9-12',
    topicCluster: 'Sequences and Series',
    standardCodes: ['HSF-TF.A.1', 'HSF-TF.A.2'],
    content: {
      intro: {
        title: 'Sigma Notation and Series',
        text: 'While a sequence is a list of numbers, a series is the sum of those numbers. Sigma notation (Σ) provides a compact way to write long sums. Adding up the first 100 terms of a sequence by hand would be tedious, but formulas for arithmetic and geometric series let you find the total in one calculation. In this module you will learn to read and write sigma notation and apply sum formulas to solve problems.',
      },
      segments: [
        {
          index: 0,
          title: 'Understanding Sigma Notation',
          text: 'The Greek letter Σ (sigma) means "sum." The expression Σ(i=1 to n) aᵢ means add up the terms a₁ + a₂ + ... + aₙ. The variable i is the index of summation, the number below Σ is the starting value, and the number above is the ending value. For example, Σ(i=1 to 4) i² = 1² + 2² + 3² + 4² = 1 + 4 + 9 + 16 = 30. Learning to read and write this notation is a key skill for advanced mathematics.',
          keyVocabulary: ['sigma notation', 'index of summation', 'lower bound', 'upper bound'],
          example: 'Σ(i=1 to 5) 2i = 2 + 4 + 6 + 8 + 10 = 30.',
        },
        {
          index: 1,
          title: 'Arithmetic Series Formula',
          text: 'An arithmetic series is the sum of an arithmetic sequence. The formula is Sₙ = n/2 · (a₁ + aₙ) or equivalently Sₙ = n/2 · (2a₁ + (n−1)d). The famous story of young Gauss adding 1 + 2 + ... + 100 = 100/2 · (1 + 100) = 5050 illustrates this formula perfectly. It works because pairing the first and last terms gives equal sums.',
          keyVocabulary: ['arithmetic series', 'sum formula', 'Gauss', 'pairing strategy'],
          example: 'Sum of first 20 terms where a₁ = 3, d = 4: S₂₀ = 20/2 · (2(3) + 19(4)) = 10 · 82 = 820.',
        },
        {
          index: 2,
          title: 'Geometric Series Formula',
          text: 'A geometric series sums a geometric sequence. For a finite geometric series with first term a₁, common ratio r ≠ 1, and n terms: Sₙ = a₁(1 − rⁿ)/(1 − r). When |r| < 1 and n → ∞, the infinite sum converges to S = a₁/(1 − r). This infinite sum formula explains why 0.999... = 1, and it is used in calculating present values of annuities in finance.',
          keyVocabulary: ['geometric series', 'finite sum', 'infinite sum', 'convergence'],
          example: 'Σ(i=0 to 4) 3·2ⁱ = 3(1 − 2⁵)/(1 − 2) = 3(−31)/(−1) = 93.',
        },
        {
          index: 3,
          title: 'Applications of Series',
          text: 'Series appear in many real contexts. A savings plan where you deposit the same amount each month is an arithmetic series. An investment earning compound interest is a geometric series. Even the total distance a bouncing ball travels can be modeled as an infinite geometric series. Being able to set up and evaluate these sums connects abstract algebra to practical financial and scientific questions.',
          keyVocabulary: ['annuity', 'compound interest', 'bouncing ball', 'financial model'],
        },
      ],
      practice: [
        { index: 0, question: 'Expand and evaluate Σ(i=1 to 4) (3i + 1).', type: 'short-answer', correctAnswer: '34', hint: 'Plug in i = 1, 2, 3, 4 and add.', explanation: '(3·1+1) + (3·2+1) + (3·3+1) + (3·4+1) = 4 + 7 + 10 + 13 = 34.', standardCode: 'HSF-TF.A.1' },
        { index: 1, question: 'Find the sum of the arithmetic series 5 + 8 + 11 + ... + 50.', type: 'short-answer', correctAnswer: '440', hint: 'Find n first: 50 = 5 + (n−1)3, so n = 16. Then use Sₙ = n/2(a₁ + aₙ).', explanation: 'n = (50 − 5)/3 + 1 = 16. S₁₆ = 16/2 · (5 + 50) = 8 · 55 = 440.', standardCode: 'HSF-TF.A.2' },
        { index: 2, question: 'Find the sum of the geometric series Σ(i=0 to 5) 4·(1/2)ⁱ.', type: 'multiple-choice', options: ['7.875', '7.5', '8', '6'], correctAnswer: '7.875', hint: 'Use Sₙ = a₁(1 − rⁿ)/(1 − r) with a₁ = 4, r = 1/2, n = 6 terms.', explanation: 'S₆ = 4(1 − (1/2)⁶)/(1 − 1/2) = 4(1 − 1/64)/(1/2) = 4(63/64)(2) = 504/64 = 7.875.', standardCode: 'HSF-TF.A.2' },
        { index: 3, question: 'Write in sigma notation: 2 + 4 + 6 + 8 + ... + 40.', type: 'short-answer', correctAnswer: 'Σ(i=1 to 20) 2i', hint: 'Each term is 2 times the index.', explanation: 'The terms are 2(1), 2(2), ..., 2(20). In sigma notation: Σ(i=1 to 20) 2i.', standardCode: 'HSF-TF.A.1' },
        { index: 4, question: 'Find the sum of the infinite geometric series 10 + 5 + 2.5 + 1.25 + ...', type: 'multiple-choice', options: ['15', '18.75', '20', 'Does not converge'], correctAnswer: '20', hint: 'r = 0.5 and |r| < 1, so use S = a₁/(1 − r).', explanation: 'S = 10/(1 − 0.5) = 10/0.5 = 20.', standardCode: 'HSF-TF.A.2' },
      ],
      assessment: {
        questions: [
          { question: 'Evaluate Σ(i=1 to 50) i.', type: 'short-answer', correctAnswer: '1275', standardCode: 'HSF-TF.A.2' },
          { question: 'Find the sum of the first 8 terms of the geometric series with a₁ = 3 and r = 2.', type: 'multiple-choice', options: ['255', '510', '765', '1530'], correctAnswer: '765', standardCode: 'HSF-TF.A.2' },
          { question: 'A ball is dropped from 10 meters. Each bounce reaches 60% of the previous height. Find the total distance traveled (up and down) before it comes to rest.', type: 'short-answer', correctAnswer: '40 meters', standardCode: 'HSF-TF.A.1' },
        ],
      },
    },
  },
]
