import type { ModuleSeed } from '../types'

export const GRADE_11_MATH: ModuleSeed[] = [
  // ============================================
  // Polynomials (3 modules)
  // ============================================
  {
    slug: 'grade11-math-factoring-polynomials',
    title: 'Factoring Polynomials',
    description: 'Factor polynomial expressions including quadratics, difference of squares, sum/difference of cubes, and factor by grouping',
    subject: 'math',
    grade: 11,
    gradeBand: '9-12',
    topicCluster: 'Polynomials',
    standardCodes: ['HSA-APR.2', 'HSA-APR.3'],
    content: {
      intro: {
        title: 'Factoring Polynomials',
        text: 'Factoring is the process of breaking a polynomial into simpler expressions whose product gives back the original polynomial. Just as 12 can be factored into 3 × 4, a polynomial like x² + 5x + 6 can be factored into (x + 2)(x + 3). Mastering factoring is essential because it unlocks the ability to solve polynomial equations, simplify rational expressions, and analyze graphs.',
      },
      segments: [
        {
          index: 0,
          title: 'Greatest Common Factor and Grouping',
          text: 'The first step in any factoring problem is to pull out the greatest common factor (GCF) from all terms. For example, 6x³ + 9x² has a GCF of 3x², giving 3x²(2x + 3). When a polynomial has four terms, you can try grouping: split it into two pairs, factor each pair, and look for a common binomial factor. For instance, x³ + 2x² + 3x + 6 groups as x²(x + 2) + 3(x + 2) = (x² + 3)(x + 2).',
          keyVocabulary: ['greatest common factor', 'factor by grouping', 'binomial factor'],
          example: '2x³ + 4x² + 3x + 6 = 2x²(x + 2) + 3(x + 2) = (2x² + 3)(x + 2).',
        },
        {
          index: 1,
          title: 'Factoring Quadratic Trinomials',
          text: 'A quadratic trinomial ax² + bx + c can often be factored by finding two numbers that multiply to ac and add to b. When a = 1, you simply need two numbers that multiply to c and add to b. When a ≠ 1, the AC method works: find two numbers that multiply to ac, rewrite the middle term, and factor by grouping. For example, 2x² + 7x + 3 requires two numbers that multiply to 6 and add to 7: those are 1 and 6. Rewrite as 2x² + x + 6x + 3, then group to get (2x + 1)(x + 3).',
          keyVocabulary: ['quadratic trinomial', 'AC method', 'leading coefficient'],
          example: 'x² − 5x + 6 = (x − 2)(x − 3) because −2 × −3 = 6 and −2 + −3 = −5.',
        },
        {
          index: 2,
          title: 'Special Factoring Patterns',
          text: 'Several patterns let you factor quickly. The difference of squares states that a² − b² = (a + b)(a − b). A perfect square trinomial has the form a² + 2ab + b² = (a + b)² or a² − 2ab + b² = (a − b)². The sum of cubes is a³ + b³ = (a + b)(a² − ab + b²), and the difference of cubes is a³ − b³ = (a − b)(a² + ab + b²). Recognizing these patterns saves time and avoids errors.',
          keyVocabulary: ['difference of squares', 'perfect square trinomial', 'sum of cubes', 'difference of cubes'],
          example: '8x³ − 27 = (2x)³ − 3³ = (2x − 3)(4x² + 6x + 9).',
        },
        {
          index: 3,
          title: 'Choosing a Strategy',
          text: 'When facing a polynomial to factor, follow a systematic approach. First, factor out any GCF. Next, count the terms: two terms suggest difference of squares or cubes; three terms suggest trinomial factoring or perfect square patterns; four terms suggest grouping. Always check your answer by multiplying the factors back together. Some polynomials are prime — they cannot be factored over the integers.',
          keyVocabulary: ['prime polynomial', 'systematic approach', 'verify'],
        },
      ],
      practice: [
        { index: 0, question: 'Factor completely: x² − 9.', type: 'short-answer', correctAnswer: '(x + 3)(x − 3)', hint: 'This is a difference of two perfect squares.', explanation: 'x² − 9 = x² − 3² = (x + 3)(x − 3) by the difference of squares pattern.', standardCode: 'HSA-APR.2' },
        { index: 1, question: 'Factor: 2x² + 5x − 3.', type: 'short-answer', correctAnswer: '(2x − 1)(x + 3)', hint: 'Use the AC method: find two numbers that multiply to −6 and add to 5.', explanation: 'ac = −6. The numbers 6 and −1 multiply to −6 and add to 5. Rewrite: 2x² + 6x − x − 3 = 2x(x + 3) − 1(x + 3) = (2x − 1)(x + 3).', standardCode: 'HSA-APR.3' },
        { index: 2, question: 'Factor: x³ + 8.', type: 'multiple-choice', options: ['(x + 2)(x² − 2x + 4)', '(x + 2)(x² + 2x + 4)', '(x − 2)(x² + 2x + 4)', '(x + 2)(x² − 4)'], correctAnswer: '(x + 2)(x² − 2x + 4)', hint: 'Recognize this as a sum of cubes: x³ + 2³.', explanation: 'Using the sum of cubes formula a³ + b³ = (a + b)(a² − ab + b²) with a = x and b = 2 gives (x + 2)(x² − 2x + 4).', standardCode: 'HSA-APR.2' },
        { index: 3, question: 'Factor completely: 3x³ − 12x.', type: 'short-answer', correctAnswer: '3x(x + 2)(x − 2)', hint: 'Start by pulling out the GCF, then look for a special pattern.', explanation: 'GCF is 3x: 3x(x² − 4). Then x² − 4 = (x + 2)(x − 2), so the answer is 3x(x + 2)(x − 2).', standardCode: 'HSA-APR.3' },
        { index: 4, question: 'Factor: x² + 6x + 9.', type: 'multiple-choice', options: ['(x + 3)²', '(x + 9)(x + 1)', '(x − 3)²', '(x + 3)(x − 3)'], correctAnswer: '(x + 3)²', hint: 'Check if this is a perfect square trinomial.', explanation: 'x² + 6x + 9 = x² + 2(3)(x) + 3² = (x + 3)². This is a perfect square trinomial.', standardCode: 'HSA-APR.2' },
      ],
      assessment: {
        questions: [
          { question: 'Factor completely: 4x² − 25.', type: 'short-answer', correctAnswer: '(2x + 5)(2x − 5)', standardCode: 'HSA-APR.2' },
          { question: 'Factor: 6x² + x − 2.', type: 'short-answer', correctAnswer: '(3x + 2)(2x − 1)', standardCode: 'HSA-APR.3' },
          { question: 'Which expression is the correct factorization of x³ − 27?', type: 'multiple-choice', options: ['(x − 3)(x² + 3x + 9)', '(x − 3)(x² − 3x + 9)', '(x + 3)(x² − 3x + 9)', '(x − 3)(x² + 9)'], correctAnswer: '(x − 3)(x² + 3x + 9)', standardCode: 'HSA-APR.2' },
        ],
      },
    },
  },
  {
    slug: 'grade11-math-polynomial-operations',
    title: 'Polynomial Operations',
    description: 'Add, subtract, multiply, and divide polynomials and understand closure properties of these operations',
    subject: 'math',
    grade: 11,
    gradeBand: '9-12',
    topicCluster: 'Polynomials',
    standardCodes: ['HSA-APR.1', 'HSA-APR.6'],
    content: {
      intro: {
        title: 'Polynomial Operations',
        text: 'Polynomials form a system where you can add, subtract, and multiply and always get another polynomial — this is called closure. Division sometimes results in a polynomial and sometimes in a rational expression. In this module you will practice all four operations and learn the important technique of polynomial long division.',
      },
      segments: [
        {
          index: 0,
          title: 'Adding and Subtracting Polynomials',
          text: 'To add polynomials, combine like terms — terms with the same variable raised to the same power. To subtract, distribute the negative sign across all terms of the polynomial being subtracted, then combine like terms. For example, (3x² + 2x − 5) − (x² − 4x + 1) becomes 3x² + 2x − 5 − x² + 4x − 1 = 2x² + 6x − 6.',
          keyVocabulary: ['like terms', 'combine', 'closure', 'distribute'],
          example: '(4x³ + x) + (2x³ − 3x + 7) = 6x³ − 2x + 7.',
        },
        {
          index: 1,
          title: 'Multiplying Polynomials',
          text: 'To multiply polynomials, distribute each term of one polynomial to every term of the other and combine like terms. For binomials, you can use FOIL (First, Outer, Inner, Last). For larger polynomials, the box method or vertical format can help organize the work. The degree of the product equals the sum of the degrees of the factors.',
          keyVocabulary: ['distribute', 'FOIL', 'degree', 'box method'],
          example: '(2x + 3)(x² − x + 4) = 2x³ − 2x² + 8x + 3x² − 3x + 12 = 2x³ + x² + 5x + 12.',
        },
        {
          index: 2,
          title: 'Polynomial Long Division',
          text: 'Polynomial long division works similarly to numerical long division. Divide the leading term of the dividend by the leading term of the divisor, write the result above the division bar, multiply, subtract, bring down the next term, and repeat. The process continues until the degree of the remainder is less than the degree of the divisor. The result can be written as quotient + remainder/divisor.',
          keyVocabulary: ['dividend', 'divisor', 'quotient', 'remainder', 'long division'],
          example: '(x³ + 2x² − 5x + 1) ÷ (x − 1) = x² + 3x − 2 remainder −1.',
        },
      ],
      practice: [
        { index: 0, question: 'Simplify: (5x² − 3x + 2) + (2x² + 7x − 4).', type: 'short-answer', correctAnswer: '7x² + 4x − 2', hint: 'Combine like terms: add the x² terms, the x terms, and the constant terms.', explanation: '5x² + 2x² = 7x², −3x + 7x = 4x, 2 + (−4) = −2. Result: 7x² + 4x − 2.', standardCode: 'HSA-APR.1' },
        { index: 1, question: 'Simplify: (4x³ − x + 6) − (2x³ + 3x² − x + 1).', type: 'short-answer', correctAnswer: '2x³ − 3x² + 5', hint: 'Distribute the negative sign first.', explanation: '4x³ − x + 6 − 2x³ − 3x² + x − 1 = 2x³ − 3x² + 0x + 5 = 2x³ − 3x² + 5.', standardCode: 'HSA-APR.1' },
        { index: 2, question: 'Multiply: (x + 4)(x − 7).', type: 'multiple-choice', options: ['x² − 3x − 28', 'x² + 3x − 28', 'x² − 3x + 28', 'x² − 11x − 28'], correctAnswer: 'x² − 3x − 28', hint: 'Use FOIL: First, Outer, Inner, Last.', explanation: 'x·x = x², x·(−7) = −7x, 4·x = 4x, 4·(−7) = −28. Sum: x² − 3x − 28.', standardCode: 'HSA-APR.1' },
        { index: 3, question: 'Find the quotient: (x² + 5x + 6) ÷ (x + 2).', type: 'short-answer', correctAnswer: 'x + 3', hint: 'Use polynomial long division or notice that x² + 5x + 6 factors.', explanation: 'x² + 5x + 6 = (x + 2)(x + 3), so dividing by (x + 2) gives x + 3.', standardCode: 'HSA-APR.6' },
        { index: 4, question: 'Multiply: (2x − 1)(3x² + x − 5).', type: 'short-answer', correctAnswer: '6x³ − x² − 11x + 5', hint: 'Distribute 2x to each term, then −1 to each term, and combine.', explanation: '2x(3x²) + 2x(x) + 2x(−5) − 1(3x²) − 1(x) − 1(−5) = 6x³ + 2x² − 10x − 3x² − x + 5 = 6x³ − x² − 11x + 5.', standardCode: 'HSA-APR.1' },
      ],
      assessment: {
        questions: [
          { question: 'Simplify: (3x³ + x² − 4) − (x³ − 2x² + 5).', type: 'short-answer', correctAnswer: '2x³ + 3x² − 9', standardCode: 'HSA-APR.1' },
          { question: 'Multiply: (x + 5)².', type: 'multiple-choice', options: ['x² + 25', 'x² + 10x + 25', 'x² + 5x + 25', '2x + 10'], correctAnswer: 'x² + 10x + 25', standardCode: 'HSA-APR.1' },
          { question: 'Find the quotient and remainder: (2x³ − 3x² + x − 5) ÷ (x − 2).', type: 'short-answer', correctAnswer: '2x² + x + 3 remainder 1', standardCode: 'HSA-APR.6' },
        ],
      },
    },
  },
  {
    slug: 'grade11-math-zeros-and-roots',
    title: 'Zeros and Roots of Polynomials',
    description: 'Find the zeros of polynomial functions using the Remainder Theorem, Factor Theorem, and Rational Root Theorem',
    subject: 'math',
    grade: 11,
    gradeBand: '9-12',
    topicCluster: 'Polynomials',
    standardCodes: ['HSA-APR.2', 'HSA-APR.3', 'HSA-REI.11'],
    content: {
      intro: {
        title: 'Zeros and Roots of Polynomials',
        text: 'The zeros of a polynomial are the x-values where the polynomial equals zero. They are also the x-intercepts of its graph. Finding zeros is one of the central tasks of algebra because it lets you solve equations, analyze functions, and understand real-world models. In this module you will learn powerful theorems that help you find zeros efficiently.',
      },
      segments: [
        {
          index: 0,
          title: 'The Remainder and Factor Theorems',
          text: 'The Remainder Theorem says that when you divide a polynomial p(x) by (x − c), the remainder equals p(c). If p(c) = 0, then (x − c) divides evenly into p(x), which means (x − c) is a factor — this is the Factor Theorem. To test whether a value is a zero, simply substitute it into the polynomial. If the result is zero, you have found both a zero and a factor.',
          keyVocabulary: ['Remainder Theorem', 'Factor Theorem', 'zero', 'factor'],
          example: 'For p(x) = x³ − 4x² + x + 6, p(2) = 8 − 16 + 2 + 6 = 0, so (x − 2) is a factor.',
        },
        {
          index: 1,
          title: 'The Rational Root Theorem',
          text: 'The Rational Root Theorem gives a list of possible rational zeros: they must have the form ±p/q, where p is a factor of the constant term and q is a factor of the leading coefficient. This narrows down the candidates you need to test. Once you find one rational root, divide it out and reduce the polynomial degree. Repeat until you reach a quadratic, which you can solve with the quadratic formula.',
          keyVocabulary: ['Rational Root Theorem', 'possible rational zeros', 'synthetic division'],
          example: 'For 2x³ − 3x² − 8x + 12, possible rational roots are ±{1, 2, 3, 4, 6, 12, 1/2, 3/2}.',
        },
        {
          index: 2,
          title: 'Finding All Zeros',
          text: 'To find all zeros of a polynomial: (1) use the Rational Root Theorem to list candidates, (2) test candidates using synthetic division, (3) factor out each root you find, (4) continue until the remaining factor is quadratic, (5) use the quadratic formula for the final roots. Remember, a polynomial of degree n has exactly n zeros when counted with multiplicity and including complex zeros.',
          keyVocabulary: ['multiplicity', 'Fundamental Theorem of Algebra', 'degree'],
        },
        {
          index: 3,
          title: 'Connecting Zeros to Graphs',
          text: 'Each real zero corresponds to an x-intercept on the graph. The multiplicity of a zero affects how the graph behaves at that intercept: odd multiplicity means the graph crosses the x-axis, while even multiplicity means it touches and bounces back. The leading term determines the end behavior. Together, the zeros and end behavior give you a clear picture of the polynomial graph.',
          keyVocabulary: ['x-intercept', 'end behavior', 'leading term', 'multiplicity'],
        },
      ],
      practice: [
        { index: 0, question: 'Use the Factor Theorem: Is (x − 3) a factor of x³ − 6x² + 11x − 6?', type: 'multiple-choice', options: ['Yes', 'No'], correctAnswer: 'Yes', hint: 'Evaluate the polynomial at x = 3.', explanation: 'p(3) = 27 − 54 + 33 − 6 = 0. Since p(3) = 0, (x − 3) is a factor by the Factor Theorem.', standardCode: 'HSA-APR.2' },
        { index: 1, question: 'List all possible rational zeros of 3x³ + x² − 12x − 4.', type: 'short-answer', correctAnswer: '±1, ±2, ±4, ±1/3, ±2/3, ±4/3', hint: 'Factors of the constant term divided by factors of the leading coefficient.', explanation: 'Constant term is −4 with factors 1, 2, 4. Leading coefficient is 3 with factors 1, 3. Possible rational zeros: ±{1, 2, 4, 1/3, 2/3, 4/3}.', standardCode: 'HSA-APR.3' },
        { index: 2, question: 'Find all zeros of x³ − 6x² + 11x − 6.', type: 'short-answer', correctAnswer: '1, 2, 3', hint: 'Try small positive integers first.', explanation: 'Testing: p(1) = 1 − 6 + 11 − 6 = 0. Divide out (x − 1) to get x² − 5x + 6 = (x − 2)(x − 3). Zeros are 1, 2, and 3.', standardCode: 'HSA-APR.3' },
        { index: 3, question: 'A polynomial has zeros at x = −1 (multiplicity 2) and x = 4. Does the graph cross or touch the x-axis at x = −1?', type: 'multiple-choice', options: ['Crosses', 'Touches and bounces back'], correctAnswer: 'Touches and bounces back', hint: 'Even multiplicity means the graph does not cross.', explanation: 'A zero with even multiplicity (2 in this case) causes the graph to touch the x-axis and bounce back without crossing.', standardCode: 'HSA-APR.3' },
        { index: 4, question: 'If p(x) divided by (x + 2) gives a remainder of 5, what is p(−2)?', type: 'multiple-choice', options: ['5', '−5', '2', '−2'], correctAnswer: '5', hint: 'Apply the Remainder Theorem directly.', explanation: 'The Remainder Theorem states that the remainder when p(x) is divided by (x − c) equals p(c). Here c = −2, so p(−2) = 5.', standardCode: 'HSA-APR.2' },
      ],
      assessment: {
        questions: [
          { question: 'Find all zeros of 2x³ − x² − 7x + 6.', type: 'short-answer', correctAnswer: '1, −2, 3/2', standardCode: 'HSA-APR.3' },
          { question: 'Which statement is true if p(5) = 0?', type: 'multiple-choice', options: ['(x + 5) is a factor of p(x)', '(x − 5) is a factor of p(x)', 'x = −5 is a zero of p(x)', '5 is the leading coefficient'], correctAnswer: '(x − 5) is a factor of p(x)', standardCode: 'HSA-APR.2' },
          { question: 'A degree-4 polynomial has zeros at x = 1 (multiplicity 2), x = −3, and x = 0. Write it in factored form with leading coefficient 1.', type: 'short-answer', correctAnswer: 'x(x − 1)²(x + 3)', standardCode: 'HSA-APR.3' },
        ],
      },
    },
  },

  // ============================================
  // Rational Expressions (2 modules)
  // ============================================
  {
    slug: 'grade11-math-simplifying-rational-expressions',
    title: 'Simplifying Rational Expressions',
    description: 'Simplify rational expressions by factoring and canceling common factors, and identify restrictions on the variable',
    subject: 'math',
    grade: 11,
    gradeBand: '9-12',
    topicCluster: 'Rational Expressions',
    standardCodes: ['HSA-APR.6', 'HSA-APR.7'],
    content: {
      intro: {
        title: 'Simplifying Rational Expressions',
        text: 'A rational expression is a fraction whose numerator and denominator are polynomials. Just as you simplify numerical fractions like 6/8 to 3/4 by canceling common factors, you can simplify rational expressions by factoring the polynomials and canceling. The critical extra step is identifying values of the variable that make the denominator zero — these values must be excluded from the domain.',
      },
      segments: [
        {
          index: 0,
          title: 'What Is a Rational Expression?',
          text: 'A rational expression has the form p(x)/q(x) where p and q are polynomials and q is not zero. Examples include (x + 1)/(x − 3) and (x² − 4)/(x² + 5x + 6). The domain is all real numbers except those that make the denominator zero. Finding these excluded values is always the first step, because even after simplifying, the original restrictions remain.',
          keyVocabulary: ['rational expression', 'domain', 'excluded values', 'restriction'],
          example: 'For (x + 1)/(x − 3), the domain excludes x = 3 because the denominator would be zero.',
        },
        {
          index: 1,
          title: 'Simplifying by Factoring',
          text: 'To simplify a rational expression: (1) factor the numerator and denominator completely, (2) identify and cancel common factors, (3) write the simplified form. Remember that you can only cancel factors, not individual terms. For example, in (x² − 9)/(x² + 6x + 9), the numerator factors as (x + 3)(x − 3) and the denominator as (x + 3)². Canceling one (x + 3) gives (x − 3)/(x + 3).',
          keyVocabulary: ['factor', 'cancel', 'common factor', 'simplified form'],
          example: '(x² − 4)/(x² − 4x + 4) = (x + 2)(x − 2)/(x − 2)² = (x + 2)/(x − 2), x ≠ 2.',
        },
        {
          index: 2,
          title: 'Recognizing Opposite Factors',
          text: 'Sometimes factors look different but are opposites. For instance, (a − b) and (b − a) are opposites: (b − a) = −(a − b). When you encounter opposite factors, factor out −1 to reveal the common factor. For example, (3 − x)/(x − 3) = −(x − 3)/(x − 3) = −1. This technique prevents missed simplifications.',
          keyVocabulary: ['opposite factors', 'factor out negative one'],
          example: '(5 − x)/(x² − 25) = −(x − 5)/((x − 5)(x + 5)) = −1/(x + 5), x ≠ 5.',
        },
      ],
      practice: [
        { index: 0, question: 'Simplify: (x² − 16)/(x + 4).', type: 'short-answer', correctAnswer: 'x − 4', hint: 'Factor the numerator as a difference of squares.', explanation: '(x² − 16)/(x + 4) = (x + 4)(x − 4)/(x + 4) = x − 4, with x ≠ −4.', standardCode: 'HSA-APR.6' },
        { index: 1, question: 'What values must be excluded from the domain of (x + 2)/(x² − x − 6)?', type: 'short-answer', correctAnswer: 'x = 3 and x = −2', hint: 'Factor the denominator and set each factor to zero.', explanation: 'x² − x − 6 = (x − 3)(x + 2). Setting each factor to zero gives x = 3 and x = −2.', standardCode: 'HSA-APR.6' },
        { index: 2, question: 'Simplify: (2x² + 6x)/(4x).', type: 'multiple-choice', options: ['(x + 3)/2', '(2x + 6)/4', 'x + 3', '(x + 6)/2'], correctAnswer: '(x + 3)/2', hint: 'Factor 2x from the numerator.', explanation: '(2x² + 6x)/(4x) = 2x(x + 3)/(4x) = (x + 3)/2, with x ≠ 0.', standardCode: 'HSA-APR.6' },
        { index: 3, question: 'Simplify: (3 − x)/(x² − 9).', type: 'short-answer', correctAnswer: '−1/(x + 3)', hint: 'Note that 3 − x = −(x − 3) and x² − 9 = (x − 3)(x + 3).', explanation: '(3 − x)/((x − 3)(x + 3)) = −(x − 3)/((x − 3)(x + 3)) = −1/(x + 3), x ≠ 3.', standardCode: 'HSA-APR.6' },
        { index: 4, question: 'True or false: (x + 2)/(x² + 2) simplifies to 1/x.', type: 'multiple-choice', options: ['True', 'False'], correctAnswer: 'False', hint: 'Can you cancel terms that are not factors?', explanation: 'False. The numerator (x + 2) is not a factor of the denominator (x² + 2). You can only cancel common factors, not terms within a sum.', standardCode: 'HSA-APR.7' },
      ],
      assessment: {
        questions: [
          { question: 'Simplify: (x² + 5x + 6)/(x² + 3x + 2).', type: 'short-answer', correctAnswer: '(x + 3)/(x + 1)', standardCode: 'HSA-APR.6' },
          { question: 'What is the domain restriction for (x − 1)/(x² − 1)?', type: 'multiple-choice', options: ['x ≠ 1', 'x ≠ −1', 'x ≠ 1 and x ≠ −1', 'No restrictions'], correctAnswer: 'x ≠ 1 and x ≠ −1', standardCode: 'HSA-APR.6' },
          { question: 'Simplify: (x² − 6x + 9)/(x² − 9).', type: 'short-answer', correctAnswer: '(x − 3)/(x + 3)', standardCode: 'HSA-APR.6' },
        ],
      },
    },
  },
  {
    slug: 'grade11-math-rational-expression-operations',
    title: 'Operations with Rational Expressions',
    description: 'Add, subtract, multiply, and divide rational expressions by finding common denominators and simplifying',
    subject: 'math',
    grade: 11,
    gradeBand: '9-12',
    topicCluster: 'Rational Expressions',
    standardCodes: ['HSA-APR.7'],
    content: {
      intro: {
        title: 'Operations with Rational Expressions',
        text: 'Just like numerical fractions, rational expressions can be added, subtracted, multiplied, and divided. Multiplication and division are straightforward — multiply across or flip and multiply. Addition and subtraction require a common denominator, which you build by factoring. These skills are essential for solving rational equations and working with complex fractions.',
      },
      segments: [
        {
          index: 0,
          title: 'Multiplying and Dividing',
          text: 'To multiply rational expressions, factor all numerators and denominators, cancel common factors, then multiply straight across. To divide, multiply by the reciprocal of the divisor. Always factor first so you can cancel before multiplying — this keeps the expressions manageable and avoids large products.',
          keyVocabulary: ['reciprocal', 'cancel common factors', 'multiply across'],
          example: '(x² − 1)/(x + 3) · (x + 3)/(x + 1) = (x − 1)(x + 1)/(x + 3) · (x + 3)/(x + 1) = x − 1.',
        },
        {
          index: 1,
          title: 'Finding the Least Common Denominator',
          text: 'To add or subtract rational expressions you need a common denominator. The least common denominator (LCD) is the least common multiple of the denominators. Factor each denominator, then take each factor to the highest power it appears. For example, for denominators (x − 1) and (x − 1)², the LCD is (x − 1)². For x² − 4 and x + 2, factor x² − 4 as (x − 2)(x + 2), so the LCD is (x − 2)(x + 2).',
          keyVocabulary: ['least common denominator', 'least common multiple', 'equivalent fractions'],
          example: 'LCD of 1/(x + 2) and 3/(x − 2) is (x + 2)(x − 2).',
        },
        {
          index: 2,
          title: 'Adding and Subtracting',
          text: 'Once you have the LCD, rewrite each fraction with that denominator by multiplying numerator and denominator by the needed factors. Then combine the numerators over the common denominator. Finally, simplify the resulting expression by factoring and canceling if possible. Be careful with subtraction — distribute the negative sign across the entire second numerator.',
          keyVocabulary: ['common denominator', 'combine numerators', 'distribute negative'],
          example: '1/(x + 1) + 2/(x − 1) = (x − 1 + 2(x + 1))/((x + 1)(x − 1)) = (3x + 1)/(x² − 1).',
        },
      ],
      practice: [
        { index: 0, question: 'Multiply: (x + 2)/(x − 1) · (x − 1)/(x² − 4).', type: 'short-answer', correctAnswer: '1/(x − 2)', hint: 'Factor x² − 4 and cancel common factors.', explanation: '(x + 2)/(x − 1) · (x − 1)/((x + 2)(x − 2)) = 1/(x − 2) after canceling (x + 2) and (x − 1).', standardCode: 'HSA-APR.7' },
        { index: 1, question: 'Divide: (x²)/(x + 3) ÷ (x)/(x² − 9).', type: 'short-answer', correctAnswer: 'x(x − 3)', hint: 'Flip the second fraction and multiply. Factor x² − 9.', explanation: '(x²)/(x + 3) · (x² − 9)/x = (x²)/(x + 3) · (x + 3)(x − 3)/x = x(x − 3).', standardCode: 'HSA-APR.7' },
        { index: 2, question: 'Add: 3/(x + 1) + 2/(x − 1).', type: 'multiple-choice', options: ['5/(x² − 1)', '(5x − 1)/(x² − 1)', '(5x + 1)/(x² − 1)', '5/(2x)'], correctAnswer: '(5x − 1)/(x² − 1)', hint: 'The LCD is (x + 1)(x − 1) = x² − 1.', explanation: '3(x − 1)/((x + 1)(x − 1)) + 2(x + 1)/((x + 1)(x − 1)) = (3x − 3 + 2x + 2)/(x² − 1) = (5x − 1)/(x² − 1).', standardCode: 'HSA-APR.7' },
        { index: 3, question: 'Subtract: x/(x + 2) − 3/(x + 2).', type: 'short-answer', correctAnswer: '(x − 3)/(x + 2)', hint: 'The denominators are already the same.', explanation: 'Since the denominators are identical, subtract the numerators: (x − 3)/(x + 2).', standardCode: 'HSA-APR.7' },
        { index: 4, question: 'Simplify: (1/x + 1/y) as a single fraction.', type: 'short-answer', correctAnswer: '(x + y)/(xy)', hint: 'The LCD of x and y is xy.', explanation: '1/x + 1/y = y/(xy) + x/(xy) = (x + y)/(xy).', standardCode: 'HSA-APR.7' },
      ],
      assessment: {
        questions: [
          { question: 'Multiply and simplify: (x² − 9)/(x² + x) · x/(x + 3).', type: 'short-answer', correctAnswer: '(x − 3)/(x + 1)', standardCode: 'HSA-APR.7' },
          { question: 'Add: 2/(x − 3) + 5/(x + 4).', type: 'short-answer', correctAnswer: '(7x − 7)/((x − 3)(x + 4))', standardCode: 'HSA-APR.7' },
          { question: 'Divide: (x² − 1)/(x + 2) ÷ (x + 1)/(x² − 4).', type: 'multiple-choice', options: ['(x − 1)(x − 2)', '(x + 1)(x − 2)', '(x − 1)(x + 2)', '(x − 1)/(x − 2)'], correctAnswer: '(x − 1)(x − 2)', standardCode: 'HSA-APR.7' },
        ],
      },
    },
  },

  // ============================================
  // Exponential & Logarithmic Functions (3 modules)
  // ============================================
  {
    slug: 'grade11-math-exponential-growth-decay',
    title: 'Exponential Growth and Decay',
    description: 'Model real-world situations with exponential functions and distinguish between growth and decay',
    subject: 'math',
    grade: 11,
    gradeBand: '9-12',
    topicCluster: 'Exponential & Logarithmic Functions',
    standardCodes: ['HSF-LE.1', 'HSF-LE.2', 'HSF-BF.1'],
    content: {
      intro: {
        title: 'Exponential Growth and Decay',
        text: 'Exponential functions model situations where a quantity multiplies by a constant factor over equal time intervals — population growth, radioactive decay, compound interest, and the spread of diseases all follow exponential patterns. Unlike linear functions that grow by adding, exponential functions grow by multiplying, which makes them increase or decrease much faster than you might expect.',
      },
      segments: [
        {
          index: 0,
          title: 'The Exponential Function',
          text: 'An exponential function has the form f(x) = a · bˣ, where a is the initial value and b is the base (growth or decay factor). When b > 1, the function models exponential growth. When 0 < b < 1, it models exponential decay. The variable x usually represents time. The graph of an exponential function has a horizontal asymptote at y = 0 and either rises steeply (growth) or falls toward zero (decay).',
          keyVocabulary: ['exponential function', 'growth factor', 'decay factor', 'horizontal asymptote'],
          example: 'f(x) = 100 · 1.05ˣ models a population starting at 100 growing 5% each period.',
        },
        {
          index: 1,
          title: 'Growth and Decay Rates',
          text: 'The growth rate r is related to the base by b = 1 + r for growth and b = 1 − r for decay. A 7% annual growth rate gives b = 1.07. A 3% annual decay rate gives b = 0.97. For continuous growth or decay, the model becomes f(t) = a · e^(kt), where k > 0 means growth and k < 0 means decay. The number e ≈ 2.718 is the natural base.',
          keyVocabulary: ['growth rate', 'decay rate', 'continuous growth', 'natural base e'],
          example: 'A car loses 15% of its value each year: V(t) = 25000 · 0.85ᵗ.',
        },
        {
          index: 2,
          title: 'Comparing Linear and Exponential Models',
          text: 'In a linear model, the rate of change is constant — you add the same amount each period. In an exponential model, the rate of change is proportional to the current value — you multiply by the same factor each period. Over time, exponential growth always overtakes linear growth. To identify which model fits data, check whether successive differences (linear) or successive ratios (exponential) are approximately constant.',
          keyVocabulary: ['constant rate of change', 'constant ratio', 'successive differences', 'successive ratios'],
        },
      ],
      practice: [
        { index: 0, question: 'A bacteria colony starts with 500 bacteria and doubles every hour. Write the function.', type: 'short-answer', correctAnswer: 'f(t) = 500 · 2ᵗ', hint: 'Doubling means the growth factor is 2.', explanation: 'The initial value is 500, the growth factor is 2, so f(t) = 500 · 2ᵗ.', standardCode: 'HSF-LE.2' },
        { index: 1, question: 'A substance decays at 10% per year. If you start with 200 grams, how much remains after 3 years?', type: 'multiple-choice', options: ['145.8 g', '140.0 g', '160.0 g', '170.0 g'], correctAnswer: '145.8 g', hint: 'Use f(t) = 200 · 0.9ᵗ and evaluate at t = 3.', explanation: 'f(3) = 200 · 0.9³ = 200 · 0.729 = 145.8 grams.', standardCode: 'HSF-LE.2' },
        { index: 2, question: 'Which function shows exponential decay?', type: 'multiple-choice', options: ['f(x) = 3 · 1.2ˣ', 'f(x) = 5 · 0.8ˣ', 'f(x) = 2x + 7', 'f(x) = x²'], correctAnswer: 'f(x) = 5 · 0.8ˣ', hint: 'Decay occurs when the base is between 0 and 1.', explanation: 'The base 0.8 is between 0 and 1, so f(x) = 5 · 0.8ˣ is exponential decay.', standardCode: 'HSF-LE.1' },
        { index: 3, question: 'You invest $1000 at 6% annual interest compounded yearly. Write the function for the balance after t years.', type: 'short-answer', correctAnswer: 'A(t) = 1000 · 1.06ᵗ', hint: 'The growth factor is 1 + 0.06 = 1.06.', explanation: 'Initial value is 1000, growth rate is 6%, so b = 1.06 and A(t) = 1000 · 1.06ᵗ.', standardCode: 'HSF-BF.1' },
        { index: 4, question: 'Data shows: year 0 → 100, year 1 → 110, year 2 → 121, year 3 → 133.1. Is this linear or exponential?', type: 'multiple-choice', options: ['Linear', 'Exponential'], correctAnswer: 'Exponential', hint: 'Check: are the differences constant or are the ratios constant?', explanation: 'Ratios: 110/100 = 1.1, 121/110 = 1.1, 133.1/121 = 1.1. The constant ratio of 1.1 indicates exponential growth.', standardCode: 'HSF-LE.1' },
      ],
      assessment: {
        questions: [
          { question: 'A town of 5000 people grows at 3% per year. What is the population after 10 years? Round to the nearest whole number.', type: 'short-answer', correctAnswer: '6720', standardCode: 'HSF-LE.2' },
          { question: 'Which scenario is best modeled by exponential decay?', type: 'multiple-choice', options: ['A car traveling at constant speed', 'The temperature of coffee cooling toward room temperature', 'A savings account with fixed monthly deposits', 'The height of a ball thrown upward'], correctAnswer: 'The temperature of coffee cooling toward room temperature', standardCode: 'HSF-LE.1' },
          { question: 'Write an exponential function for a quantity that starts at 80 and loses 25% of its value each year.', type: 'short-answer', correctAnswer: 'f(t) = 80 · 0.75ᵗ', standardCode: 'HSF-BF.1' },
        ],
      },
    },
  },
  {
    slug: 'grade11-math-logarithm-properties',
    title: 'Properties of Logarithms',
    description: 'Understand logarithms as inverses of exponentials and apply the product, quotient, and power rules',
    subject: 'math',
    grade: 11,
    gradeBand: '9-12',
    topicCluster: 'Exponential & Logarithmic Functions',
    standardCodes: ['HSF-BF.5', 'HSF-LE.4'],
    content: {
      intro: {
        title: 'Properties of Logarithms',
        text: 'A logarithm answers the question: what exponent do I need? If 2³ = 8, then log₂(8) = 3. Logarithms are the inverses of exponential functions, and their properties mirror the rules of exponents. Mastering these properties lets you simplify complex expressions and, most importantly, solve exponential equations.',
      },
      segments: [
        {
          index: 0,
          title: 'What Is a Logarithm?',
          text: 'The expression log_b(x) = y means bʸ = x. The base b must be positive and not equal to 1, and x must be positive. Common logarithm (log) has base 10, and natural logarithm (ln) has base e ≈ 2.718. Key values to remember: log_b(1) = 0 because b⁰ = 1, and log_b(b) = 1 because b¹ = b. The logarithmic function is the inverse of the exponential function.',
          keyVocabulary: ['logarithm', 'base', 'common logarithm', 'natural logarithm', 'inverse'],
          example: 'log₃(81) = 4 because 3⁴ = 81.',
        },
        {
          index: 1,
          title: 'Product, Quotient, and Power Rules',
          text: 'Three properties flow directly from exponent rules. The Product Rule: log_b(MN) = log_b(M) + log_b(N). The Quotient Rule: log_b(M/N) = log_b(M) − log_b(N). The Power Rule: log_b(Mⁿ) = n · log_b(M). These rules let you expand a single logarithm into a sum or difference, or condense a sum or difference into a single logarithm.',
          keyVocabulary: ['Product Rule', 'Quotient Rule', 'Power Rule', 'expand', 'condense'],
          example: 'log(x³y/z) = 3log(x) + log(y) − log(z).',
        },
        {
          index: 2,
          title: 'Change of Base Formula',
          text: 'Most calculators only have log (base 10) and ln (base e) keys. The Change of Base Formula lets you evaluate any logarithm: log_b(x) = log(x)/log(b) = ln(x)/ln(b). This formula is also useful for graphing logarithmic functions with any base and for comparing logarithms with different bases.',
          keyVocabulary: ['Change of Base Formula', 'evaluate', 'calculator'],
          example: 'log₅(20) = log(20)/log(5) ≈ 1.301/0.699 ≈ 1.861.',
        },
      ],
      practice: [
        { index: 0, question: 'Evaluate: log₂(32).', type: 'multiple-choice', options: ['4', '5', '6', '16'], correctAnswer: '5', hint: 'What power of 2 gives 32?', explanation: '2⁵ = 32, so log₂(32) = 5.', standardCode: 'HSF-BF.5' },
        { index: 1, question: 'Expand: log₃(x²y).', type: 'short-answer', correctAnswer: '2log₃(x) + log₃(y)', hint: 'Use the Product Rule and Power Rule.', explanation: 'log₃(x²y) = log₃(x²) + log₃(y) = 2log₃(x) + log₃(y).', standardCode: 'HSF-BF.5' },
        { index: 2, question: 'Condense: log(5) + log(4).', type: 'multiple-choice', options: ['log(9)', 'log(20)', 'log(54)', 'log(1)'], correctAnswer: 'log(20)', hint: 'The Product Rule says log(a) + log(b) = log(ab).', explanation: 'log(5) + log(4) = log(5 · 4) = log(20).', standardCode: 'HSF-BF.5' },
        { index: 3, question: 'Simplify: log₇(1).', type: 'short-answer', correctAnswer: '0', hint: 'What power of any base gives 1?', explanation: 'log_b(1) = 0 for any valid base because b⁰ = 1.', standardCode: 'HSF-BF.5' },
        { index: 4, question: 'Use the Change of Base Formula to approximate log₃(50) to two decimal places.', type: 'short-answer', correctAnswer: '3.56', hint: 'log₃(50) = log(50)/log(3).', explanation: 'log(50) ≈ 1.699 and log(3) ≈ 0.477, so log₃(50) ≈ 1.699/0.477 ≈ 3.56.', standardCode: 'HSF-LE.4' },
      ],
      assessment: {
        questions: [
          { question: 'Expand completely: ln(x³/(y²z)).', type: 'short-answer', correctAnswer: '3ln(x) − 2ln(y) − ln(z)', standardCode: 'HSF-BF.5' },
          { question: 'Which expression equals log₂(8) + log₂(4)?', type: 'multiple-choice', options: ['log₂(12)', 'log₂(32)', 'log₂(2)', '5'], correctAnswer: '5', standardCode: 'HSF-BF.5' },
          { question: 'Evaluate log₄(64) using the Change of Base Formula.', type: 'short-answer', correctAnswer: '3', standardCode: 'HSF-LE.4' },
        ],
      },
    },
  },
  {
    slug: 'grade11-math-solving-exponential-logarithmic-equations',
    title: 'Solving Exponential and Logarithmic Equations',
    description: 'Solve equations involving exponentials and logarithms using properties, the Change of Base Formula, and algebraic techniques',
    subject: 'math',
    grade: 11,
    gradeBand: '9-12',
    topicCluster: 'Exponential & Logarithmic Functions',
    standardCodes: ['HSF-LE.4', 'HSA-REI.11'],
    content: {
      intro: {
        title: 'Solving Exponential and Logarithmic Equations',
        text: 'Many real-world questions lead to equations where the variable is in an exponent or inside a logarithm. When will my investment double? How old is a fossil? What pH corresponds to a given hydrogen ion concentration? To answer these, you need techniques for isolating the variable from exponential and logarithmic expressions. Logarithms undo exponentials, and exponentials undo logarithms — this inverse relationship is the key.',
      },
      segments: [
        {
          index: 0,
          title: 'Solving Exponential Equations',
          text: 'When both sides of an equation can be rewritten with the same base, set the exponents equal. For example, 8ˣ = 32 becomes (2³)ˣ = 2⁵, so 3x = 5 and x = 5/3. When you cannot match bases, take the logarithm of both sides. For 5ˣ = 40, take log of both sides: x · log(5) = log(40), so x = log(40)/log(5) ≈ 2.29.',
          keyVocabulary: ['matching bases', 'take the logarithm', 'isolate the exponent'],
          example: '3^(2x) = 81 → 3^(2x) = 3⁴ → 2x = 4 → x = 2.',
        },
        {
          index: 1,
          title: 'Solving Logarithmic Equations',
          text: 'To solve a logarithmic equation, first isolate the logarithm, then convert to exponential form. For log₂(x − 1) = 5, convert to 2⁵ = x − 1, giving x = 33. When you have logarithms on both sides with the same base, set the arguments equal: log₃(2x + 1) = log₃(x + 8) means 2x + 1 = x + 8, so x = 7. Always check your answer — logarithms of negative numbers or zero are undefined.',
          keyVocabulary: ['convert to exponential form', 'extraneous solution', 'check domain'],
          example: 'ln(x) = 3 → x = e³ ≈ 20.09.',
        },
        {
          index: 2,
          title: 'Applications',
          text: 'Exponential and logarithmic equations arise in compound interest (solving for time), half-life problems (finding when a substance reaches a target amount), pH calculations, and decibel scales. The general approach is always the same: set up the equation from the context, isolate the exponential or logarithmic part, and use inverse operations to solve. Rounding is usually appropriate since these are real-world contexts.',
          keyVocabulary: ['half-life', 'compound interest', 'doubling time'],
          example: 'How long to double $1000 at 5%? 1000 · 1.05ᵗ = 2000 → 1.05ᵗ = 2 → t = log(2)/log(1.05) ≈ 14.2 years.',
        },
      ],
      practice: [
        { index: 0, question: 'Solve: 2ˣ = 64.', type: 'short-answer', correctAnswer: '6', hint: '64 is a power of 2.', explanation: '2⁶ = 64, so x = 6.', standardCode: 'HSF-LE.4' },
        { index: 1, question: 'Solve: 3ˣ = 20. Round to two decimal places.', type: 'short-answer', correctAnswer: '2.73', hint: 'Take log of both sides: x = log(20)/log(3).', explanation: 'x = log(20)/log(3) ≈ 1.301/0.477 ≈ 2.73.', standardCode: 'HSF-LE.4' },
        { index: 2, question: 'Solve: log₅(x) = 3.', type: 'multiple-choice', options: ['15', '125', '243', '8'], correctAnswer: '125', hint: 'Convert to exponential form: 5³ = x.', explanation: '5³ = 125, so x = 125.', standardCode: 'HSF-LE.4' },
        { index: 3, question: 'Solve: log(x + 5) = 2.', type: 'short-answer', correctAnswer: '95', hint: 'Convert to exponential form: 10² = x + 5.', explanation: '10² = x + 5 → 100 = x + 5 → x = 95. Check: log(100) = 2. ✓', standardCode: 'HSA-REI.11' },
        { index: 4, question: 'How long does it take $500 to grow to $800 at 4% annual interest compounded yearly? Round to one decimal place.', type: 'short-answer', correctAnswer: '12.0', hint: 'Set up 500 · 1.04ᵗ = 800 and solve for t.', explanation: '1.04ᵗ = 1.6 → t = log(1.6)/log(1.04) ≈ 0.2041/0.01703 ≈ 12.0 years.', standardCode: 'HSF-LE.4' },
      ],
      assessment: {
        questions: [
          { question: 'Solve: 4^(x+1) = 256.', type: 'short-answer', correctAnswer: '3', standardCode: 'HSF-LE.4' },
          { question: 'Solve: log₂(3x − 1) = 4.', type: 'multiple-choice', options: ['5', '17/3', '5.67', '15'], correctAnswer: '17/3', standardCode: 'HSA-REI.11' },
          { question: 'A fossil has 30% of its original carbon-14. The half-life is 5730 years. Estimate the age to the nearest hundred years.', type: 'short-answer', correctAnswer: '9950', standardCode: 'HSF-LE.4' },
        ],
      },
    },
  },

  // ============================================
  // Statistics (2 modules)
  // ============================================
  {
    slug: 'grade11-math-normal-distribution',
    title: 'The Normal Distribution',
    description: 'Understand the bell curve, the empirical rule, and z-scores to analyze normally distributed data',
    subject: 'math',
    grade: 11,
    gradeBand: '9-12',
    topicCluster: 'Statistics',
    standardCodes: ['HSS-ID.4'],
    content: {
      intro: {
        title: 'The Normal Distribution',
        text: 'Many natural measurements — heights, test scores, blood pressure — cluster around a central value and taper off symmetrically in both directions, forming the famous bell-shaped curve. The normal distribution is a mathematical model for this pattern. Understanding it lets you determine how unusual a particular measurement is and make predictions about populations.',
      },
      segments: [
        {
          index: 0,
          title: 'Features of the Normal Curve',
          text: 'A normal distribution is defined by two parameters: the mean (μ), which is the center, and the standard deviation (σ), which measures spread. The curve is symmetric about the mean, and the mean, median, and mode are all equal. The total area under the curve is 1, representing 100% of the data. Most data falls close to the mean, with less and less data as you move further away.',
          keyVocabulary: ['normal distribution', 'mean', 'standard deviation', 'bell curve', 'symmetric'],
          example: 'A test with μ = 75 and σ = 10 has its peak at 75, with most scores between 65 and 85.',
        },
        {
          index: 1,
          title: 'The Empirical Rule (68-95-99.7)',
          text: 'For any normal distribution, approximately 68% of data falls within 1 standard deviation of the mean, about 95% within 2 standard deviations, and about 99.7% within 3 standard deviations. This is the Empirical Rule. If μ = 100 and σ = 15, then about 68% of values fall between 85 and 115, 95% between 70 and 130, and 99.7% between 55 and 145.',
          keyVocabulary: ['Empirical Rule', '68-95-99.7 Rule', 'within one standard deviation'],
          example: 'Heights with μ = 170 cm and σ = 6 cm: about 95% of people are between 158 and 182 cm.',
        },
        {
          index: 2,
          title: 'Z-Scores',
          text: 'A z-score tells you how many standard deviations a value is from the mean: z = (x − μ)/σ. A z-score of 0 means the value equals the mean. A z-score of 2 means the value is 2 standard deviations above the mean. Z-scores let you compare values from different normal distributions and use standard normal tables or calculators to find exact percentages.',
          keyVocabulary: ['z-score', 'standard normal distribution', 'standardize'],
          example: 'If μ = 80 and σ = 5, then a score of 90 has z = (90 − 80)/5 = 2.',
        },
      ],
      practice: [
        { index: 0, question: 'A normal distribution has μ = 50 and σ = 8. What percentage of data falls between 42 and 58?', type: 'multiple-choice', options: ['50%', '68%', '95%', '99.7%'], correctAnswer: '68%', hint: '42 = 50 − 8 and 58 = 50 + 8, which is ±1 standard deviation.', explanation: '42 and 58 are each 1 standard deviation from the mean. By the Empirical Rule, about 68% of data falls within 1σ of the mean.', standardCode: 'HSS-ID.4' },
        { index: 1, question: 'Find the z-score for x = 72 when μ = 65 and σ = 10.', type: 'short-answer', correctAnswer: '0.7', hint: 'z = (x − μ)/σ.', explanation: 'z = (72 − 65)/10 = 7/10 = 0.7.', standardCode: 'HSS-ID.4' },
        { index: 2, question: 'Test scores are normally distributed with μ = 500 and σ = 100. What score is at the boundary of the top 2.5%?', type: 'multiple-choice', options: ['600', '700', '300', '800'], correctAnswer: '700', hint: 'The top 2.5% starts at μ + 2σ by the Empirical Rule.', explanation: 'By the Empirical Rule, 95% of scores are within 2σ. The top 2.5% starts at μ + 2σ = 500 + 200 = 700.', standardCode: 'HSS-ID.4' },
        { index: 3, question: 'Which z-score is more unusual: z = −2.5 or z = 1.8?', type: 'multiple-choice', options: ['z = −2.5', 'z = 1.8', 'They are equally unusual'], correctAnswer: 'z = −2.5', hint: 'Compare the absolute values.', explanation: '|−2.5| = 2.5 > |1.8| = 1.8. A larger absolute z-score means the value is farther from the mean and thus more unusual.', standardCode: 'HSS-ID.4' },
        { index: 4, question: 'In a normal distribution with μ = 30 and σ = 4, approximately what percentage of values are above 38?', type: 'short-answer', correctAnswer: '2.5%', hint: '38 = 30 + 2(4), so it is 2 standard deviations above the mean.', explanation: 'z = (38 − 30)/4 = 2. By the Empirical Rule, about 2.5% of data lies above z = 2.', standardCode: 'HSS-ID.4' },
      ],
      assessment: {
        questions: [
          { question: 'A machine fills bottles with μ = 500 mL and σ = 5 mL. What range contains about 99.7% of bottle volumes?', type: 'short-answer', correctAnswer: '485 mL to 515 mL', standardCode: 'HSS-ID.4' },
          { question: 'Compute the z-score for x = 42 when μ = 50 and σ = 4.', type: 'multiple-choice', options: ['-2', '-1', '1', '2'], correctAnswer: '-2', standardCode: 'HSS-ID.4' },
          { question: 'Two students take different tests. Student A: score 88, μ = 80, σ = 5. Student B: score 92, μ = 85, σ = 4. Who performed better relative to their class?', type: 'short-answer', correctAnswer: 'Student B (z = 1.75 vs z = 1.6)', standardCode: 'HSS-ID.4' },
        ],
      },
    },
  },
  {
    slug: 'grade11-math-data-analysis',
    title: 'Data Analysis and Interpretation',
    description: 'Summarize, represent, and interpret quantitative data using statistical measures and visual displays',
    subject: 'math',
    grade: 11,
    gradeBand: '9-12',
    topicCluster: 'Statistics',
    standardCodes: ['HSS-ID.1', 'HSS-ID.2', 'HSS-ID.3'],
    content: {
      intro: {
        title: 'Data Analysis and Interpretation',
        text: 'Data is everywhere, but raw numbers mean little until you organize and summarize them. Statistics gives you tools to describe the center, spread, and shape of a data set, identify outliers, and compare groups. In this module you will work with real data sets, choose appropriate summary statistics, and learn how the shape of a distribution guides your analysis.',
      },
      segments: [
        {
          index: 0,
          title: 'Measures of Center and Spread',
          text: 'The mean is the arithmetic average — add all values and divide by n. The median is the middle value when data is ordered. The standard deviation measures how far values typically fall from the mean. For symmetric distributions, the mean and median are close. For skewed distributions, the median is a better measure of center because it resists the pull of outliers. The interquartile range (IQR) is a resistant measure of spread.',
          keyVocabulary: ['mean', 'median', 'standard deviation', 'interquartile range', 'resistant'],
          example: 'Data: 2, 3, 4, 4, 5, 100. Mean ≈ 19.7, Median = 4. The median better represents the typical value.',
        },
        {
          index: 1,
          title: 'Displaying Data',
          text: 'Dot plots, histograms, and box plots are common displays for quantitative data. Dot plots show individual values and work well for small data sets. Histograms group data into intervals and show the shape of the distribution. Box plots display the five-number summary (min, Q1, median, Q3, max) and highlight outliers. Choosing the right display depends on the data set size and the question you want to answer.',
          keyVocabulary: ['dot plot', 'histogram', 'box plot', 'five-number summary', 'outlier'],
          example: 'A box plot shows the median as a line inside the box, with whiskers extending to the min and max (excluding outliers).',
        },
        {
          index: 2,
          title: 'Shape and Outliers',
          text: 'Distributions can be symmetric, skewed left (tail extends to the left), or skewed right (tail extends to the right). In a right-skewed distribution, the mean is pulled higher than the median. Outliers are values far from the rest of the data, often defined as values more than 1.5 · IQR below Q1 or above Q3. Outliers can result from measurement errors, data entry mistakes, or genuinely unusual cases. Always investigate outliers before deciding what to do with them.',
          keyVocabulary: ['symmetric', 'skewed left', 'skewed right', 'outlier rule', 'IQR'],
        },
      ],
      practice: [
        { index: 0, question: 'Data set: 12, 15, 14, 18, 13, 15, 16, 14, 100. Which measure of center is most appropriate and why?', type: 'multiple-choice', options: ['Mean, because it uses all values', 'Median, because the value 100 is an outlier', 'Mode, because 14 and 15 appear twice'], correctAnswer: 'Median, because the value 100 is an outlier', hint: 'Outliers pull the mean but do not affect the median.', explanation: 'The value 100 is an outlier that inflates the mean. The median (15) is resistant to outliers and better represents the typical value.', standardCode: 'HSS-ID.3' },
        { index: 1, question: 'A distribution is skewed right. Which is larger: the mean or the median?', type: 'multiple-choice', options: ['Mean', 'Median', 'They are equal'], correctAnswer: 'Mean', hint: 'The tail pulls the mean in its direction.', explanation: 'In a right-skewed distribution, the long tail on the right pulls the mean higher than the median.', standardCode: 'HSS-ID.2' },
        { index: 2, question: 'The five-number summary for a data set is: 10, 22, 35, 48, 60. What is the IQR?', type: 'short-answer', correctAnswer: '26', hint: 'IQR = Q3 − Q1.', explanation: 'IQR = Q3 − Q1 = 48 − 22 = 26.', standardCode: 'HSS-ID.1' },
        { index: 3, question: 'Using the IQR rule, is the value 90 an outlier if Q1 = 22, Q3 = 48, and IQR = 26?', type: 'multiple-choice', options: ['Yes', 'No'], correctAnswer: 'Yes', hint: 'Upper fence = Q3 + 1.5 · IQR.', explanation: 'Upper fence = 48 + 1.5(26) = 48 + 39 = 87. Since 90 > 87, it is an outlier.', standardCode: 'HSS-ID.3' },
        { index: 4, question: 'Which display is best for comparing the distributions of two groups side by side?', type: 'multiple-choice', options: ['Two dot plots', 'Two box plots', 'A single histogram', 'A pie chart'], correctAnswer: 'Two box plots', hint: 'Which display makes it easy to compare center, spread, and outliers?', explanation: 'Side-by-side box plots efficiently display and compare center, spread, and outliers for two groups.', standardCode: 'HSS-ID.1' },
      ],
      assessment: {
        questions: [
          { question: 'Data: 5, 7, 8, 9, 10, 10, 11, 13, 45. Calculate the mean and median.', type: 'short-answer', correctAnswer: 'Mean = 13.1, Median = 10', standardCode: 'HSS-ID.2' },
          { question: 'A histogram shows a distribution with a long tail to the left. Which term describes this shape?', type: 'multiple-choice', options: ['Skewed right', 'Skewed left', 'Symmetric', 'Uniform'], correctAnswer: 'Skewed left', standardCode: 'HSS-ID.2' },
          { question: 'Two classes took the same test. Class A has a mean of 78 and standard deviation of 5. Class B has a mean of 78 and standard deviation of 12. Which class had more consistent scores?', type: 'short-answer', correctAnswer: 'Class A, because its standard deviation is smaller', standardCode: 'HSS-ID.2' },
        ],
      },
    },
  },

  // ============================================
  // Complex Numbers (2 modules)
  // ============================================
  {
    slug: 'grade11-math-complex-number-operations',
    title: 'Operations with Complex Numbers',
    description: 'Define imaginary and complex numbers and perform addition, subtraction, multiplication, and division',
    subject: 'math',
    grade: 11,
    gradeBand: '9-12',
    topicCluster: 'Complex Numbers',
    standardCodes: ['HSN-CN.1', 'HSN-CN.2', 'HSN-CN.3'],
    content: {
      intro: {
        title: 'Operations with Complex Numbers',
        text: 'When you try to take the square root of a negative number, the real number system gives no answer. Mathematicians expanded the number system by defining i = √(−1). A complex number a + bi has a real part (a) and an imaginary part (b). Complex numbers are not just an abstract invention — they appear in electrical engineering, signal processing, and advanced physics. In this module you will learn to work with them as fluently as you work with real numbers.',
      },
      segments: [
        {
          index: 0,
          title: 'The Imaginary Unit and Complex Numbers',
          text: 'The imaginary unit i is defined by i² = −1, so i = √(−1). A complex number has the form a + bi where a and b are real numbers. The number a is the real part and b is the imaginary part. Pure real numbers like 5 are complex numbers with b = 0 (5 + 0i). Pure imaginary numbers like 3i have a = 0 (0 + 3i). Two complex numbers are equal when their real parts and imaginary parts are both equal.',
          keyVocabulary: ['imaginary unit', 'complex number', 'real part', 'imaginary part'],
          example: '√(−9) = √(9) · √(−1) = 3i.',
        },
        {
          index: 1,
          title: 'Adding, Subtracting, and Multiplying',
          text: 'To add or subtract complex numbers, combine real parts and imaginary parts separately: (a + bi) + (c + di) = (a + c) + (b + d)i. To multiply, use the distributive property (or FOIL) and replace i² with −1: (a + bi)(c + di) = ac + adi + bci + bdi² = (ac − bd) + (ad + bc)i. The key step is always replacing i² with −1.',
          keyVocabulary: ['combine like terms', 'FOIL', 'i squared equals negative one'],
          example: '(3 + 2i)(1 − 4i) = 3 − 12i + 2i − 8i² = 3 − 10i + 8 = 11 − 10i.',
        },
        {
          index: 2,
          title: 'Complex Conjugates and Division',
          text: 'The complex conjugate of a + bi is a − bi. When you multiply a complex number by its conjugate, the result is always a real number: (a + bi)(a − bi) = a² + b². To divide complex numbers, multiply the numerator and denominator by the conjugate of the denominator. This eliminates the imaginary part from the denominator, giving you a standard form a + bi result.',
          keyVocabulary: ['complex conjugate', 'rationalize the denominator', 'standard form'],
          example: '(2 + 3i)/(1 − i) = (2 + 3i)(1 + i)/((1 − i)(1 + i)) = (2 + 2i + 3i + 3i²)/(1 + 1) = (−1 + 5i)/2 = −1/2 + 5i/2.',
        },
      ],
      practice: [
        { index: 0, question: 'Simplify: √(−49).', type: 'multiple-choice', options: ['7i', '−7i', '7', '−7'], correctAnswer: '7i', hint: '√(−49) = √(49) · √(−1).', explanation: '√(−49) = √(49) · √(−1) = 7i.', standardCode: 'HSN-CN.1' },
        { index: 1, question: 'Add: (4 + 3i) + (−2 + 5i).', type: 'short-answer', correctAnswer: '2 + 8i', hint: 'Add real parts and imaginary parts separately.', explanation: '(4 + (−2)) + (3 + 5)i = 2 + 8i.', standardCode: 'HSN-CN.2' },
        { index: 2, question: 'Multiply: (1 + 2i)(3 − i).', type: 'short-answer', correctAnswer: '5 + 5i', hint: 'Use FOIL and replace i² with −1.', explanation: '1·3 + 1·(−i) + 2i·3 + 2i·(−i) = 3 − i + 6i − 2i² = 3 + 5i + 2 = 5 + 5i.', standardCode: 'HSN-CN.2' },
        { index: 3, question: 'What is the conjugate of 6 − 2i?', type: 'multiple-choice', options: ['6 + 2i', '−6 + 2i', '−6 − 2i', '2 − 6i'], correctAnswer: '6 + 2i', hint: 'Flip the sign of the imaginary part.', explanation: 'The conjugate of a + bi is a − bi. Here a = 6 and b = −2, so the conjugate is 6 + 2i.', standardCode: 'HSN-CN.3' },
        { index: 4, question: 'Divide: (4 + 2i)/(1 + i). Write in standard form.', type: 'short-answer', correctAnswer: '3 − i', hint: 'Multiply numerator and denominator by the conjugate of the denominator (1 − i).', explanation: '(4 + 2i)(1 − i)/((1 + i)(1 − i)) = (4 − 4i + 2i − 2i²)/(1 + 1) = (4 − 2i + 2)/2 = (6 − 2i)/2 = 3 − i.', standardCode: 'HSN-CN.3' },
      ],
      assessment: {
        questions: [
          { question: 'Simplify: i⁴ + i³ + i² + i.', type: 'multiple-choice', options: ['0', '1', '−1', 'i'], correctAnswer: '0', standardCode: 'HSN-CN.1' },
          { question: 'Multiply: (2 − 3i)².', type: 'short-answer', correctAnswer: '−5 − 12i', standardCode: 'HSN-CN.2' },
          { question: 'Divide and write in standard form: 10/(3 + i).', type: 'short-answer', correctAnswer: '3 − i', standardCode: 'HSN-CN.3' },
        ],
      },
    },
  },
  {
    slug: 'grade11-math-quadratic-formula-complex-solutions',
    title: 'Quadratic Formula with Complex Solutions',
    description: 'Use the discriminant to classify solutions and solve quadratic equations that have complex roots',
    subject: 'math',
    grade: 11,
    gradeBand: '9-12',
    topicCluster: 'Complex Numbers',
    standardCodes: ['HSN-CN.7', 'HSA-REI.4'],
    content: {
      intro: {
        title: 'Quadratic Formula with Complex Solutions',
        text: 'The quadratic formula x = (−b ± √(b² − 4ac))/(2a) solves any quadratic equation ax² + bx + c = 0. When the discriminant b² − 4ac is negative, the square root produces an imaginary number, and the solutions are complex. This means the parabola does not cross the x-axis. With complex numbers in your toolkit, every quadratic equation now has exactly two solutions (counted with multiplicity).',
      },
      segments: [
        {
          index: 0,
          title: 'The Discriminant',
          text: 'The discriminant is the expression under the radical in the quadratic formula: D = b² − 4ac. When D > 0, the equation has two distinct real solutions. When D = 0, it has exactly one real solution (a repeated root). When D < 0, it has two complex conjugate solutions. Checking the discriminant first tells you what kind of solutions to expect before you do the full calculation.',
          keyVocabulary: ['discriminant', 'distinct real solutions', 'repeated root', 'complex conjugate solutions'],
          example: 'For x² + x + 1 = 0: D = 1 − 4 = −3 < 0, so the solutions are complex.',
        },
        {
          index: 1,
          title: 'Solving with Complex Solutions',
          text: 'When D < 0, write √D = i√|D| and proceed. For x² + 2x + 5 = 0: D = 4 − 20 = −16. Then x = (−2 ± √(−16))/2 = (−2 ± 4i)/2 = −1 ± 2i. Notice the two solutions are complex conjugates: −1 + 2i and −1 − 2i. Complex solutions of quadratic equations with real coefficients always come in conjugate pairs.',
          keyVocabulary: ['complex conjugate pair', 'imaginary part', 'standard form'],
          example: 'x² + 4 = 0 → x = ±√(−4) = ±2i.',
        },
        {
          index: 2,
          title: 'Connecting to Graphs',
          text: 'A quadratic function f(x) = ax² + bx + c is a parabola. When D > 0, the parabola crosses the x-axis at two points. When D = 0, it touches the x-axis at exactly one point (the vertex). When D < 0, the parabola does not touch the x-axis at all — it lies entirely above or entirely below. The complex solutions tell you that the equation has no real x-intercepts, but the function still has algebraic roots in the complex number system.',
          keyVocabulary: ['parabola', 'vertex', 'x-intercept', 'no real roots'],
        },
      ],
      practice: [
        { index: 0, question: 'Calculate the discriminant of 2x² − 3x + 5 = 0.', type: 'multiple-choice', options: ['−31', '31', '−11', '49'], correctAnswer: '−31', hint: 'D = b² − 4ac = (−3)² − 4(2)(5).', explanation: 'D = 9 − 40 = −31. Since D < 0, the solutions are complex.', standardCode: 'HSA-REI.4' },
        { index: 1, question: 'Solve: x² + 9 = 0.', type: 'short-answer', correctAnswer: 'x = 3i and x = −3i', hint: 'Isolate x²: x² = −9, then take the square root.', explanation: 'x² = −9, so x = ±√(−9) = ±3i.', standardCode: 'HSN-CN.7' },
        { index: 2, question: 'Solve: x² + 2x + 10 = 0.', type: 'short-answer', correctAnswer: '−1 + 3i and −1 − 3i', hint: 'Use the quadratic formula with D = 4 − 40 = −36.', explanation: 'x = (−2 ± √(−36))/2 = (−2 ± 6i)/2 = −1 ± 3i.', standardCode: 'HSN-CN.7' },
        { index: 3, question: 'How many times does the graph of y = x² + 4x + 8 cross the x-axis?', type: 'multiple-choice', options: ['0', '1', '2'], correctAnswer: '0', hint: 'Compute the discriminant.', explanation: 'D = 16 − 32 = −16 < 0. A negative discriminant means no real roots, so the parabola does not cross the x-axis.', standardCode: 'HSA-REI.4' },
        { index: 4, question: 'If one solution of a quadratic equation with real coefficients is 3 − 5i, what is the other solution?', type: 'short-answer', correctAnswer: '3 + 5i', hint: 'Complex solutions come in conjugate pairs.', explanation: 'When a quadratic equation has real coefficients, complex solutions always occur in conjugate pairs. The conjugate of 3 − 5i is 3 + 5i.', standardCode: 'HSN-CN.7' },
      ],
      assessment: {
        questions: [
          { question: 'Solve: x² − 6x + 13 = 0.', type: 'short-answer', correctAnswer: '3 + 2i and 3 − 2i', standardCode: 'HSN-CN.7' },
          { question: 'A quadratic equation has discriminant D = 0. How many distinct real solutions does it have?', type: 'multiple-choice', options: ['0', '1', '2', 'Infinitely many'], correctAnswer: '1', standardCode: 'HSA-REI.4' },
          { question: 'Write a quadratic equation with real coefficients that has 2 + i as a solution.', type: 'short-answer', correctAnswer: 'x² − 4x + 5 = 0', standardCode: 'HSN-CN.7' },
        ],
      },
    },
  },
]
