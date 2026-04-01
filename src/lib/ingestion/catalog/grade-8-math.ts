import type { ModuleSeed } from '../types'

export const GRADE_8_MATH: ModuleSeed[] = [
  // ============================================
  // The Number System (3 modules)
  // ============================================
  {
    slug: 'grade8-math-irrational-numbers',
    title: 'Understanding Irrational Numbers',
    description: 'Explore numbers that cannot be written as fractions and understand why they go on forever without repeating',
    subject: 'math',
    grade: 8,
    gradeBand: '6-8',
    topicCluster: 'The Number System',
    standardCodes: ['8.NS.1'],
    content: {
      intro: {
        title: 'Understanding Irrational Numbers',
        text: 'You have worked with fractions and decimals that either stop or repeat. But some numbers, like the square root of 2, never stop and never repeat. These are called irrational numbers. In this module you will discover what makes a number irrational and why these numbers matter in the real world — from the diagonal of a square to the circumference of a circle.',
      },
      segments: [
        {
          index: 0,
          title: 'What Are Rational Numbers?',
          text: 'A rational number is any number that can be expressed as a fraction a/b where a and b are integers and b is not zero. This includes whole numbers like 5 (which is 5/1), negative numbers like −3/4, and decimals that terminate like 0.75 or repeat like 0.333... Every fraction you have used so far is a rational number. The key idea is that the decimal form of a rational number always either ends or falls into a repeating pattern.',
          keyVocabulary: ['rational number', 'integer', 'terminating decimal', 'repeating decimal'],
          example: '0.75 = 3/4 (terminates); 0.333... = 1/3 (repeats).',
        },
        {
          index: 1,
          title: 'Introducing Irrational Numbers',
          text: 'An irrational number cannot be written as a fraction of two integers. Its decimal expansion goes on forever without any repeating block. The most famous examples are the square root of 2, pi, and the square root of 3. When the ancient Greeks discovered that the diagonal of a unit square could not be expressed as a fraction, it changed mathematics forever. You cannot write these numbers exactly as decimals, so we use symbols like √2 and π.',
          keyVocabulary: ['irrational number', 'non-repeating', 'non-terminating', 'square root'],
          example: '√2 = 1.41421356... — the digits never settle into a repeating pattern.',
        },
        {
          index: 2,
          title: 'The Real Number Line',
          text: 'Together, rational and irrational numbers make up the set of real numbers. Every point on the number line corresponds to exactly one real number. Rational numbers are scattered densely along the line, but between any two rational numbers there are infinitely many irrational numbers as well. Understanding this helps you see that the number line has no gaps — it is completely filled by real numbers.',
          keyVocabulary: ['real numbers', 'number line', 'dense', 'classify'],
        },
      ],
      practice: [
        { index: 0, question: 'Is 0.121212... rational or irrational?', type: 'multiple-choice', options: ['Rational', 'Irrational'], correctAnswer: 'Rational', hint: 'Does the decimal repeat?', explanation: 'The digits 12 repeat, so the decimal is repeating. Every repeating decimal is rational — it equals 12/99 = 4/33.', standardCode: '8.NS.1' },
        { index: 1, question: 'Which of the following is irrational?', type: 'multiple-choice', options: ['0.5', '1/3', '√5', '−7'], correctAnswer: '√5', hint: '5 is not a perfect square.', explanation: 'Since 5 is not a perfect square, √5 cannot be expressed as a fraction and its decimal never repeats.', standardCode: '8.NS.1' },
        { index: 2, question: 'True or false: π can be written as 22/7 exactly.', type: 'multiple-choice', options: ['True', 'False'], correctAnswer: 'False', hint: '22/7 is only an approximation.', explanation: '22/7 = 3.142857... which is close to π = 3.14159... but not equal. π is irrational and has no exact fraction.', standardCode: '8.NS.1' },
        { index: 3, question: 'What type of number is √16?', type: 'multiple-choice', options: ['Rational', 'Irrational'], correctAnswer: 'Rational', hint: 'What whole number times itself gives 16?', explanation: '√16 = 4, which is a whole number and therefore rational.', standardCode: '8.NS.1' },
        { index: 4, question: 'Explain why 0.1010010001... (where the number of zeros increases each time) is irrational.', type: 'short-answer', correctAnswer: 'The pattern never repeats in a fixed block, so it cannot be written as a fraction.', hint: 'Look at whether a fixed block of digits ever repeats.', explanation: 'Although there is a pattern in how the digits are arranged, no fixed block of digits repeats endlessly. A rational number must have an eventually repeating block, so this number is irrational.', standardCode: '8.NS.1' },
      ],
      assessment: {
        questions: [
          { question: 'Classify each number as rational or irrational: √9, √10, 0.757575...', type: 'short-answer', correctAnswer: '√9 is rational (equals 3), √10 is irrational, 0.757575... is rational (repeating)', standardCode: '8.NS.1' },
          { question: 'Which number is irrational?', type: 'multiple-choice', options: ['0.25', '√49', '√3', '−2/5'], correctAnswer: '√3', standardCode: '8.NS.1' },
          { question: 'Why is every repeating decimal a rational number?', type: 'short-answer', correctAnswer: 'Because every repeating decimal can be converted into a fraction of two integers.', standardCode: '8.NS.1' },
        ],
      },
    },
  },
  {
    slug: 'grade8-math-approximating-square-roots',
    title: 'Approximating Square Roots',
    description: 'Estimate the value of irrational square roots and place them on the number line',
    subject: 'math',
    grade: 8,
    gradeBand: '6-8',
    topicCluster: 'The Number System',
    standardCodes: ['8.NS.2'],
    content: {
      intro: {
        title: 'Approximating Square Roots',
        text: 'When a square root is irrational, you cannot write it as an exact decimal. But you can estimate where it falls on the number line. Knowing that √9 = 3 and √16 = 4 tells you that √12 is somewhere between 3 and 4. In this module you will learn strategies to pin down square roots with increasing precision.',
      },
      segments: [
        {
          index: 0,
          title: 'Identifying Perfect Squares',
          text: 'A perfect square is the product of a whole number multiplied by itself: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, and so on. Memorizing these helps you quickly estimate other square roots. For example, because 49 = 7² and 64 = 8², you know that √50 is just a little more than 7.',
          keyVocabulary: ['perfect square', 'square root', 'estimate'],
          example: 'Perfect squares near 50: 49 (7²) and 64 (8²).',
        },
        {
          index: 1,
          title: 'Narrowing the Estimate',
          text: 'To approximate √50 more precisely, try values between 7 and 8. Calculate 7.1² = 50.41 — that is slightly more than 50, so √50 is a little less than 7.1. Try 7.07² = 49.9849 — very close to 50 but slightly under. So √50 is between 7.07 and 7.08. You can keep going to get more decimal places, but for most purposes one or two decimal places is enough.',
          keyVocabulary: ['approximate', 'decimal place', 'precision', 'trial and error'],
          example: '7.07² = 49.98, 7.08² = 50.13, so √50 ≈ 7.07.',
        },
        {
          index: 2,
          title: 'Placing Square Roots on the Number Line',
          text: 'Once you have estimated a square root, you can place it on the number line. Mark the two consecutive whole numbers it falls between, then estimate its position. √20 is between 4 and 5 because 4² = 16 and 5² = 25. Since 20 is closer to 16 than to 25, √20 is closer to 4 than to 5 — approximately 4.47.',
          keyVocabulary: ['number line', 'consecutive integers', 'between'],
        },
      ],
      practice: [
        { index: 0, question: 'Between which two consecutive whole numbers does √30 fall?', type: 'multiple-choice', options: ['4 and 5', '5 and 6', '6 and 7', '7 and 8'], correctAnswer: '5 and 6', hint: 'Find perfect squares near 30.', explanation: '5² = 25 and 6² = 36. Since 25 < 30 < 36, √30 is between 5 and 6.', standardCode: '8.NS.2' },
        { index: 1, question: 'Approximate √10 to one decimal place.', type: 'short-answer', correctAnswer: '3.2', hint: '3² = 9 and 3.2² = 10.24.', explanation: '3.1² = 9.61 and 3.2² = 10.24. Since 10 is between these, √10 ≈ 3.2 (closer to 3.16).', standardCode: '8.NS.2' },
        { index: 2, question: 'Which is larger: √45 or 6.5?', type: 'multiple-choice', options: ['√45', '6.5'], correctAnswer: '√45', hint: 'Calculate 6.5² and compare to 45.', explanation: '6.5² = 42.25, which is less than 45, so √45 > 6.5. In fact √45 ≈ 6.71.', standardCode: '8.NS.2' },
        { index: 3, question: 'Approximate √75 to one decimal place.', type: 'short-answer', correctAnswer: '8.7', hint: '8² = 64 and 9² = 81.', explanation: '8.6² = 73.96 and 8.7² = 75.69. Since 75 is between these, √75 ≈ 8.7.', standardCode: '8.NS.2' },
        { index: 4, question: 'Place √2 on a number line: is it closer to 1, 1.5, or 2?', type: 'multiple-choice', options: ['1', '1.5', '2'], correctAnswer: '1.5', hint: '√2 ≈ 1.414.', explanation: '√2 ≈ 1.414, which is closest to 1.5 among the three choices.', standardCode: '8.NS.2' },
      ],
      assessment: {
        questions: [
          { question: 'Between which two consecutive whole numbers does √90 fall?', type: 'multiple-choice', options: ['8 and 9', '9 and 10', '10 and 11', '7 and 8'], correctAnswer: '9 and 10', standardCode: '8.NS.2' },
          { question: 'Approximate √55 to one decimal place.', type: 'short-answer', correctAnswer: '7.4', standardCode: '8.NS.2' },
          { question: 'Order from least to greatest: √18, 4, √10.', type: 'short-answer', correctAnswer: '√10, 4, √18', standardCode: '8.NS.2' },
        ],
      },
    },
  },
  {
    slug: 'grade8-math-rational-vs-irrational',
    title: 'Rational vs Irrational Numbers',
    description: 'Classify numbers as rational or irrational and perform operations that combine both types',
    subject: 'math',
    grade: 8,
    gradeBand: '6-8',
    topicCluster: 'The Number System',
    standardCodes: ['8.NS.1', '8.NS.2'],
    content: {
      intro: {
        title: 'Rational vs Irrational Numbers',
        text: 'Now that you understand what rational and irrational numbers are individually, it is time to put them together. What happens when you add a rational number to an irrational number? Is the result rational or irrational? In this module you will classify numbers and explore what happens when you combine different types.',
      },
      segments: [
        {
          index: 0,
          title: 'Quick Classification Review',
          text: 'Rational numbers include integers, fractions, terminating decimals, and repeating decimals. Irrational numbers include non-repeating, non-terminating decimals such as √2, √3, π, and √5. Perfect square roots like √25 = 5 are rational. Always check if a square root simplifies to a whole number before calling it irrational.',
          keyVocabulary: ['classify', 'rational', 'irrational', 'perfect square'],
          example: '√36 = 6 (rational); √37 ≈ 6.083... (irrational).',
        },
        {
          index: 1,
          title: 'Sums and Products of Rational and Irrational Numbers',
          text: 'The sum of a rational number and an irrational number is always irrational. For example, 3 + √2 is irrational — you cannot simplify it to a fraction. The product of a nonzero rational number and an irrational number is also irrational. So 5√3 is irrational. However, the sum or product of two irrational numbers can sometimes be rational. For instance, √2 + (−√2) = 0, which is rational.',
          keyVocabulary: ['sum', 'product', 'closure', 'counterexample'],
          example: '2 + π is irrational; √2 × √2 = 2 is rational.',
        },
        {
          index: 2,
          title: 'Using Rational Approximations',
          text: 'Even though irrational numbers have no exact decimal, we use rational approximations in everyday life. Engineers use π ≈ 3.14 or 3.14159 depending on how much precision they need. When you approximate, the result becomes rational, but it introduces a small error. Understanding how close your approximation is helps you decide if it is good enough for the task at hand.',
          keyVocabulary: ['approximation', 'precision', 'error', 'significant digits'],
        },
      ],
      practice: [
        { index: 0, question: 'Is 3 + √7 rational or irrational?', type: 'multiple-choice', options: ['Rational', 'Irrational'], correctAnswer: 'Irrational', hint: 'A rational plus an irrational is always...', explanation: 'The sum of a rational number (3) and an irrational number (√7) is always irrational.', standardCode: '8.NS.1' },
        { index: 1, question: 'Is √2 × √8 rational or irrational?', type: 'multiple-choice', options: ['Rational', 'Irrational'], correctAnswer: 'Rational', hint: 'Multiply under one radical: √(2 × 8).', explanation: '√2 × √8 = √16 = 4, which is rational.', standardCode: '8.NS.1' },
        { index: 2, question: 'Classify: −3/11', type: 'multiple-choice', options: ['Rational', 'Irrational'], correctAnswer: 'Rational', hint: 'Is it a fraction of two integers?', explanation: '−3/11 is a ratio of two integers, so it is rational.', standardCode: '8.NS.1' },
        { index: 3, question: 'Give an example of two irrational numbers whose sum is rational.', type: 'short-answer', correctAnswer: '√5 and −√5', hint: 'Think about additive inverses.', explanation: '√5 + (−√5) = 0, which is rational. Any irrational number plus its opposite gives 0.', standardCode: '8.NS.1' },
        { index: 4, question: 'Is 0.101001000100001... rational or irrational?', type: 'multiple-choice', options: ['Rational', 'Irrational'], correctAnswer: 'Irrational', hint: 'Does a fixed block of digits repeat?', explanation: 'No fixed block of digits repeats (the number of zeros keeps increasing), so this number is irrational.', standardCode: '8.NS.1' },
      ],
      assessment: {
        questions: [
          { question: 'Is 4√5 rational or irrational? Explain.', type: 'short-answer', correctAnswer: 'Irrational, because the product of a nonzero rational and an irrational number is irrational.', standardCode: '8.NS.1' },
          { question: 'Which expression results in a rational number?', type: 'multiple-choice', options: ['π + 1', '√3 × √3', '√2 + √3', '5 + √11'], correctAnswer: '√3 × √3', standardCode: '8.NS.1' },
          { question: 'Approximate √17 to one decimal place and classify your approximation as rational or irrational.', type: 'short-answer', correctAnswer: '√17 ≈ 4.1; the approximation 4.1 is rational, but √17 itself is irrational.', standardCode: '8.NS.2' },
        ],
      },
    },
  },

  // ============================================
  // Expressions & Equations (4 modules)
  // ============================================
  {
    slug: 'grade8-math-linear-equations',
    title: 'Solving Linear Equations',
    description: 'Solve linear equations in one variable, including equations with one solution, no solution, or infinitely many solutions',
    subject: 'math',
    grade: 8,
    gradeBand: '6-8',
    topicCluster: 'Expressions & Equations',
    standardCodes: ['8.EE.7'],
    content: {
      intro: {
        title: 'Solving Linear Equations',
        text: 'Linear equations are the workhorses of algebra. Whether you are figuring out how long a road trip will take or how much money you will save over time, linear equations help you find unknown values. In this module you will learn to solve equations that have one solution, no solution, or infinitely many solutions.',
      },
      segments: [
        {
          index: 0,
          title: 'One-Step and Two-Step Equations Review',
          text: 'A linear equation is an equation where the variable has an exponent of 1. To solve, use inverse operations to isolate the variable. For x + 5 = 12, subtract 5 from both sides to get x = 7. For 3x − 4 = 11, add 4 to both sides (3x = 15), then divide by 3 (x = 5). Always check by substituting back.',
          keyVocabulary: ['linear equation', 'inverse operation', 'isolate', 'variable'],
          example: '2x + 3 = 11 → 2x = 8 → x = 4. Check: 2(4) + 3 = 11 ✓',
        },
        {
          index: 1,
          title: 'Equations with Variables on Both Sides',
          text: 'When the variable appears on both sides, collect variable terms on one side and constants on the other. For 5x + 2 = 3x + 10, subtract 3x from both sides to get 2x + 2 = 10, then subtract 2 to get 2x = 8, and divide by 2 to get x = 4. The goal is always to end up with the variable alone on one side.',
          keyVocabulary: ['both sides', 'collect terms', 'combine like terms'],
          example: '7x − 3 = 4x + 9 → 3x = 12 → x = 4.',
        },
        {
          index: 2,
          title: 'Equations with the Distributive Property',
          text: 'Some equations have parentheses that you need to expand first. Use the distributive property: a(b + c) = ab + ac. For example, 2(x + 3) = 14 becomes 2x + 6 = 14, then 2x = 8, and x = 4. More complex cases involve distribution on both sides: 3(2x − 1) = 2(x + 5) becomes 6x − 3 = 2x + 10, then 4x = 13, and x = 13/4.',
          keyVocabulary: ['distributive property', 'expand', 'parentheses'],
        },
        {
          index: 3,
          title: 'No Solution and Infinitely Many Solutions',
          text: 'Not every equation has exactly one answer. If simplifying leads to a false statement like 0 = 5, the equation has no solution — no value of x makes it true. If simplifying leads to a true statement like 3 = 3, the equation has infinitely many solutions — every value of x works. For example, 2x + 4 = 2(x + 2) simplifies to 2x + 4 = 2x + 4, then 0 = 0, which is always true.',
          keyVocabulary: ['no solution', 'infinitely many solutions', 'identity', 'contradiction'],
          example: 'x + 1 = x + 3 → 1 = 3 — false, so no solution.',
        },
      ],
      practice: [
        { index: 0, question: 'Solve: 4x − 7 = 13', type: 'short-answer', correctAnswer: 'x = 5', hint: 'Add 7 to both sides, then divide by 4.', explanation: '4x = 20, so x = 5.', standardCode: '8.EE.7' },
        { index: 1, question: 'Solve: 3(x + 2) = 2x + 10', type: 'short-answer', correctAnswer: 'x = 4', hint: 'Distribute the 3 first.', explanation: '3x + 6 = 2x + 10 → x = 4.', standardCode: '8.EE.7' },
        { index: 2, question: 'How many solutions does 5x + 3 = 5x + 3 have?', type: 'multiple-choice', options: ['None', 'Exactly one', 'Infinitely many'], correctAnswer: 'Infinitely many', hint: 'Subtract 5x + 3 from both sides.', explanation: 'Subtracting gives 0 = 0, which is always true. Every value of x is a solution.', standardCode: '8.EE.7' },
        { index: 3, question: 'Solve: 6x − 2 = 4x + 8', type: 'short-answer', correctAnswer: 'x = 5', hint: 'Subtract 4x from both sides.', explanation: '2x − 2 = 8 → 2x = 10 → x = 5.', standardCode: '8.EE.7' },
        { index: 4, question: 'How many solutions does 2(x + 1) = 2x + 5 have?', type: 'multiple-choice', options: ['None', 'Exactly one', 'Infinitely many'], correctAnswer: 'None', hint: 'Distribute and simplify.', explanation: '2x + 2 = 2x + 5 → 2 = 5, which is false. No solution.', standardCode: '8.EE.7' },
      ],
      assessment: {
        questions: [
          { question: 'Solve: 7 − 3x = x + 3', type: 'short-answer', correctAnswer: 'x = 1', standardCode: '8.EE.7' },
          { question: 'How many solutions does 4(x − 1) = 4x − 4 have?', type: 'multiple-choice', options: ['None', 'Exactly one', 'Infinitely many'], correctAnswer: 'Infinitely many', standardCode: '8.EE.7' },
          { question: 'Solve: 2(3x + 4) = 5x + 1', type: 'short-answer', correctAnswer: 'x = −7', standardCode: '8.EE.7' },
        ],
      },
    },
  },
  {
    slug: 'grade8-math-systems-of-equations',
    title: 'Systems of Linear Equations',
    description: 'Solve systems of two linear equations using graphing, substitution, and elimination',
    subject: 'math',
    grade: 8,
    gradeBand: '6-8',
    topicCluster: 'Expressions & Equations',
    standardCodes: ['8.EE.8'],
    content: {
      intro: {
        title: 'Systems of Linear Equations',
        text: 'Sometimes one equation is not enough. If you need to find two unknowns, you need two equations — a system. For example, if you know the total cost of apples and oranges and another fact relating them, you can find the price of each. In this module you will solve systems by graphing, substitution, and elimination.',
      },
      segments: [
        {
          index: 0,
          title: 'Understanding Systems of Equations',
          text: 'A system of linear equations is a set of two or more equations with the same variables. A solution to the system is a pair of values (x, y) that makes both equations true at the same time. Graphically, it is the point where the two lines intersect. A system can have one solution (the lines cross), no solution (the lines are parallel), or infinitely many solutions (the lines are the same).',
          keyVocabulary: ['system of equations', 'solution', 'intersection', 'parallel'],
          example: 'y = 2x + 1 and y = −x + 4 intersect at (1, 3).',
        },
        {
          index: 1,
          title: 'Solving by Graphing',
          text: 'To solve by graphing, plot both lines on the same coordinate plane and find where they cross. Write each equation in slope-intercept form (y = mx + b) so you can identify the slope and y-intercept. Plot the y-intercept, use the slope to find a second point, and draw the line. The coordinates of the intersection point are the solution. Graphing gives an approximate answer, so always check by substituting into both equations.',
          keyVocabulary: ['slope-intercept form', 'coordinate plane', 'y-intercept', 'slope'],
        },
        {
          index: 2,
          title: 'Solving by Substitution',
          text: 'Substitution works well when one equation is already solved for a variable. If y = 3x − 2, substitute 3x − 2 for y in the other equation: 2x + (3x − 2) = 8 becomes 5x − 2 = 8, so 5x = 10 and x = 2. Then y = 3(2) − 2 = 4. The solution is (2, 4).',
          keyVocabulary: ['substitution', 'replace', 'back-substitute'],
          example: 'Given y = x + 1 and 2x + y = 7: substitute to get 2x + (x + 1) = 7 → 3x = 6 → x = 2, y = 3.',
        },
        {
          index: 3,
          title: 'Solving by Elimination',
          text: 'Elimination works by adding or subtracting the two equations to cancel one variable. For 3x + 2y = 12 and x − 2y = 4, adding the equations gives 4x = 16, so x = 4. Substitute back: 4 − 2y = 4, so y = 0. If the coefficients do not cancel, multiply one or both equations by a constant first.',
          keyVocabulary: ['elimination', 'cancel', 'add equations', 'multiply'],
        },
      ],
      practice: [
        { index: 0, question: 'Solve by substitution: y = 2x, x + y = 9', type: 'short-answer', correctAnswer: 'x = 3, y = 6', hint: 'Replace y with 2x in the second equation.', explanation: 'x + 2x = 9 → 3x = 9 → x = 3, y = 6.', standardCode: '8.EE.8' },
        { index: 1, question: 'Solve by elimination: x + y = 5, x − y = 1', type: 'short-answer', correctAnswer: 'x = 3, y = 2', hint: 'Add the two equations to eliminate y.', explanation: '2x = 6 → x = 3, then 3 + y = 5 → y = 2.', standardCode: '8.EE.8' },
        { index: 2, question: 'How many solutions does this system have: y = 2x + 1, y = 2x + 3?', type: 'multiple-choice', options: ['One', 'None', 'Infinitely many'], correctAnswer: 'None', hint: 'Compare the slopes and y-intercepts.', explanation: 'Both lines have slope 2 but different y-intercepts, so they are parallel and never intersect.', standardCode: '8.EE.8' },
        { index: 3, question: 'Solve: 2x + 3y = 12, x = y + 1', type: 'short-answer', correctAnswer: 'x = 3, y = 2', hint: 'Substitute x = y + 1 into the first equation.', explanation: '2(y + 1) + 3y = 12 → 5y + 2 = 12 → y = 2, x = 3.', standardCode: '8.EE.8' },
        { index: 4, question: 'What does it mean graphically if a system has infinitely many solutions?', type: 'short-answer', correctAnswer: 'The two equations represent the same line.', hint: 'Think about what the graph looks like.', explanation: 'If every point on one line is also on the other, the lines are identical, so there are infinitely many intersection points.', standardCode: '8.EE.8' },
      ],
      assessment: {
        questions: [
          { question: 'Solve: y = −x + 5, y = 3x − 3', type: 'short-answer', correctAnswer: 'x = 2, y = 3', standardCode: '8.EE.8' },
          { question: 'How many solutions: y = 4x − 1, 2y = 8x − 2?', type: 'multiple-choice', options: ['One', 'None', 'Infinitely many'], correctAnswer: 'Infinitely many', standardCode: '8.EE.8' },
          { question: 'Solve by elimination: 3x + y = 10, x + y = 4', type: 'short-answer', correctAnswer: 'x = 3, y = 1', standardCode: '8.EE.8' },
        ],
      },
    },
  },
  {
    slug: 'grade8-math-exponents',
    title: 'Integer Exponents and Powers',
    description: 'Apply the properties of integer exponents to generate equivalent expressions',
    subject: 'math',
    grade: 8,
    gradeBand: '6-8',
    topicCluster: 'Expressions & Equations',
    standardCodes: ['8.EE.1'],
    content: {
      intro: {
        title: 'Integer Exponents and Powers',
        text: 'Exponents are a shorthand for repeated multiplication. You already know that 2³ = 8. But what does 2⁻³ mean? Or 2⁰? In this module you will learn the rules for working with integer exponents, including zero and negative exponents, and use them to simplify expressions.',
      },
      segments: [
        {
          index: 0,
          title: 'Review of Positive Exponents',
          text: 'An exponent tells you how many times to multiply the base by itself. In the expression 5⁴, the base is 5 and the exponent is 4, so 5⁴ = 5 × 5 × 5 × 5 = 625. The product rule says that when you multiply powers with the same base, you add the exponents: aᵐ × aⁿ = aᵐ⁺ⁿ. The power rule says that (aᵐ)ⁿ = aᵐⁿ.',
          keyVocabulary: ['base', 'exponent', 'power', 'product rule', 'power rule'],
          example: '2³ × 2⁴ = 2⁷ = 128.',
        },
        {
          index: 1,
          title: 'Zero and Negative Exponents',
          text: 'Any nonzero number raised to the power of 0 equals 1: a⁰ = 1. This follows from the quotient rule: aⁿ ÷ aⁿ = aⁿ⁻ⁿ = a⁰, and since any number divided by itself is 1, a⁰ = 1. A negative exponent means to take the reciprocal: a⁻ⁿ = 1/aⁿ. So 2⁻³ = 1/2³ = 1/8. Negative exponents do not make the answer negative — they flip the base to the denominator.',
          keyVocabulary: ['zero exponent', 'negative exponent', 'reciprocal', 'quotient rule'],
          example: '3⁻² = 1/3² = 1/9.',
        },
        {
          index: 2,
          title: 'Exponent Rules Summary',
          text: 'Here are the key rules: Product rule: aᵐ × aⁿ = aᵐ⁺ⁿ. Quotient rule: aᵐ ÷ aⁿ = aᵐ⁻ⁿ. Power rule: (aᵐ)ⁿ = aᵐⁿ. Power of a product: (ab)ⁿ = aⁿbⁿ. Power of a quotient: (a/b)ⁿ = aⁿ/bⁿ. Zero exponent: a⁰ = 1. Negative exponent: a⁻ⁿ = 1/aⁿ. Combining these rules lets you simplify complex expressions step by step.',
          keyVocabulary: ['power of a product', 'power of a quotient', 'simplify'],
        },
      ],
      practice: [
        { index: 0, question: 'Simplify: 3⁴ × 3²', type: 'short-answer', correctAnswer: '3⁶ or 729', hint: 'Add the exponents.', explanation: '3⁴ × 3² = 3⁶ = 729.', standardCode: '8.EE.1' },
        { index: 1, question: 'What is 5⁰?', type: 'multiple-choice', options: ['0', '1', '5', 'Undefined'], correctAnswer: '1', hint: 'Any nonzero number to the zero power equals...', explanation: 'By definition, any nonzero number raised to the 0 power equals 1.', standardCode: '8.EE.1' },
        { index: 2, question: 'Simplify: 2⁻⁴', type: 'short-answer', correctAnswer: '1/16', hint: 'A negative exponent means reciprocal.', explanation: '2⁻⁴ = 1/2⁴ = 1/16.', standardCode: '8.EE.1' },
        { index: 3, question: 'Simplify: (x³)²', type: 'short-answer', correctAnswer: 'x⁶', hint: 'Multiply the exponents.', explanation: '(x³)² = x³ˣ² = x⁶.', standardCode: '8.EE.1' },
        { index: 4, question: 'Simplify: 4⁵ ÷ 4²', type: 'short-answer', correctAnswer: '4³ or 64', hint: 'Subtract the exponents.', explanation: '4⁵ ÷ 4² = 4³ = 64.', standardCode: '8.EE.1' },
      ],
      assessment: {
        questions: [
          { question: 'Simplify: (2³ × 2⁻¹)²', type: 'short-answer', correctAnswer: '2⁴ or 16', standardCode: '8.EE.1' },
          { question: 'Which expression equals 1/27?', type: 'multiple-choice', options: ['3³', '3⁻³', '(−3)³', '27⁰'], correctAnswer: '3⁻³', standardCode: '8.EE.1' },
          { question: 'Simplify: x⁵ × x⁻² ÷ x', type: 'short-answer', correctAnswer: 'x²', standardCode: '8.EE.1' },
        ],
      },
    },
  },
  {
    slug: 'grade8-math-scientific-notation',
    title: 'Scientific Notation',
    description: 'Express, compare, and compute with very large and very small numbers using scientific notation',
    subject: 'math',
    grade: 8,
    gradeBand: '6-8',
    topicCluster: 'Expressions & Equations',
    standardCodes: ['8.EE.3', '8.EE.4'],
    content: {
      intro: {
        title: 'Scientific Notation',
        text: 'The distance from Earth to the Sun is about 93,000,000 miles. The width of a human hair is about 0.00007 meters. Writing all those zeros is inconvenient and error-prone. Scientific notation gives you a compact way to express very large and very small numbers, and it makes calculations with them much easier.',
      },
      segments: [
        {
          index: 0,
          title: 'Writing Numbers in Scientific Notation',
          text: 'A number in scientific notation has the form a × 10ⁿ, where 1 ≤ a < 10 and n is an integer. To convert, move the decimal point until you have a number between 1 and 10, then count how many places you moved. If the original number is large, n is positive; if the original number is small (between 0 and 1), n is negative. For example, 93,000,000 = 9.3 × 10⁷ and 0.00007 = 7 × 10⁻⁵.',
          keyVocabulary: ['scientific notation', 'coefficient', 'exponent', 'power of ten'],
          example: '450,000 = 4.5 × 10⁵; 0.0032 = 3.2 × 10⁻³.',
        },
        {
          index: 1,
          title: 'Comparing Numbers in Scientific Notation',
          text: 'To compare two numbers in scientific notation, first compare the exponents. A larger exponent means a larger number (for positive coefficients). If the exponents are the same, compare the coefficients. For example, 3.2 × 10⁸ is larger than 8.1 × 10⁶ because 10⁸ is greater than 10⁶, regardless of the coefficients.',
          keyVocabulary: ['compare', 'order of magnitude', 'greater than', 'less than'],
          example: '5.0 × 10⁴ vs 2.3 × 10⁴ — same exponent, so compare 5.0 > 2.3.',
        },
        {
          index: 2,
          title: 'Computing with Scientific Notation',
          text: 'To multiply, multiply the coefficients and add the exponents: (3 × 10⁴)(2 × 10³) = 6 × 10⁷. To divide, divide the coefficients and subtract the exponents: (8 × 10⁶) ÷ (2 × 10²) = 4 × 10⁴. If the resulting coefficient is not between 1 and 10, adjust it. For example, (5 × 10³)(4 × 10²) = 20 × 10⁵ = 2.0 × 10⁶.',
          keyVocabulary: ['multiply', 'divide', 'adjust coefficient', 'add exponents'],
        },
      ],
      practice: [
        { index: 0, question: 'Write 6,200,000 in scientific notation.', type: 'short-answer', correctAnswer: '6.2 × 10⁶', hint: 'Move the decimal 6 places to the left.', explanation: '6,200,000 → 6.2 with the decimal moved 6 places left = 6.2 × 10⁶.', standardCode: '8.EE.3' },
        { index: 1, question: 'Write 0.00045 in scientific notation.', type: 'short-answer', correctAnswer: '4.5 × 10⁻⁴', hint: 'Move the decimal to the right until you have 4.5.', explanation: 'Move decimal 4 places right: 4.5 × 10⁻⁴.', standardCode: '8.EE.3' },
        { index: 2, question: 'Which is larger: 7.1 × 10⁵ or 2.9 × 10⁶?', type: 'multiple-choice', options: ['7.1 × 10⁵', '2.9 × 10⁶'], correctAnswer: '2.9 × 10⁶', hint: 'Compare the exponents first.', explanation: '10⁶ > 10⁵, so 2.9 × 10⁶ is larger.', standardCode: '8.EE.3' },
        { index: 3, question: 'Compute: (3 × 10⁴) × (2 × 10⁵)', type: 'short-answer', correctAnswer: '6 × 10⁹', hint: 'Multiply coefficients and add exponents.', explanation: '3 × 2 = 6 and 10⁴⁺⁵ = 10⁹, so the answer is 6 × 10⁹.', standardCode: '8.EE.4' },
        { index: 4, question: 'Compute: (9 × 10⁷) ÷ (3 × 10²)', type: 'short-answer', correctAnswer: '3 × 10⁵', hint: 'Divide coefficients and subtract exponents.', explanation: '9 ÷ 3 = 3 and 10⁷⁻² = 10⁵, so the answer is 3 × 10⁵.', standardCode: '8.EE.4' },
      ],
      assessment: {
        questions: [
          { question: 'Write 0.0000081 in scientific notation.', type: 'short-answer', correctAnswer: '8.1 × 10⁻⁶', standardCode: '8.EE.3' },
          { question: 'Order from least to greatest: 4.2 × 10³, 1.5 × 10⁵, 9.8 × 10²', type: 'short-answer', correctAnswer: '9.8 × 10², 4.2 × 10³, 1.5 × 10⁵', standardCode: '8.EE.3' },
          { question: 'Compute: (4 × 10³)(5 × 10⁴)', type: 'multiple-choice', options: ['20 × 10⁷', '2 × 10⁸', '2 × 10⁷', '9 × 10⁷'], correctAnswer: '2 × 10⁸', standardCode: '8.EE.4' },
        ],
      },
    },
  },

  // ============================================
  // Functions (4 modules)
  // ============================================
  {
    slug: 'grade8-math-define-functions',
    title: 'Defining and Evaluating Functions',
    description: 'Understand that a function assigns exactly one output to each input and evaluate functions from rules, tables, and graphs',
    subject: 'math',
    grade: 8,
    gradeBand: '6-8',
    topicCluster: 'Functions',
    standardCodes: ['8.F.1'],
    content: {
      intro: {
        title: 'Defining and Evaluating Functions',
        text: 'A vending machine is a good model for a function: you press a button (input) and get exactly one item (output). In mathematics, a function is a rule that assigns each input exactly one output. In this module you will learn to recognize functions, describe them with rules, and evaluate them for given inputs.',
      },
      segments: [
        {
          index: 0,
          title: 'What Is a Function?',
          text: 'A function is a relationship where every input has exactly one output. If you input 3 into the rule "double and add 1," you always get 7 — never anything else. We write this as f(x) = 2x + 1. The input x is called the independent variable, and the output f(x) is the dependent variable. Not every relationship is a function: if one input could give two different outputs, it is not a function.',
          keyVocabulary: ['function', 'input', 'output', 'independent variable', 'dependent variable'],
          example: 'f(x) = 2x + 1 → f(3) = 2(3) + 1 = 7.',
        },
        {
          index: 1,
          title: 'Functions from Tables and Mappings',
          text: 'A table of values shows inputs and outputs in two columns. To check if a table represents a function, make sure no input value appears with two different outputs. A mapping diagram draws arrows from inputs to outputs. If any input has two arrows pointing to different outputs, it is not a function.',
          keyVocabulary: ['table of values', 'mapping diagram', 'vertical line test'],
          example: 'Table: x = 1 → y = 4, x = 2 → y = 7, x = 3 → y = 10. Each input has one output, so it is a function.',
        },
        {
          index: 2,
          title: 'Functions from Graphs',
          text: 'On a graph, use the vertical line test: if any vertical line touches the graph in more than one point, the graph does not represent a function. A standard line or parabola passes the test. A circle does not, because a vertical line through the middle crosses the circle twice.',
          keyVocabulary: ['graph', 'vertical line test', 'curve'],
        },
      ],
      practice: [
        { index: 0, question: 'If f(x) = 3x − 5, what is f(4)?', type: 'short-answer', correctAnswer: '7', hint: 'Substitute 4 for x.', explanation: 'f(4) = 3(4) − 5 = 12 − 5 = 7.', standardCode: '8.F.1' },
        { index: 1, question: 'Does this table represent a function? x: 1,2,3,1 y: 5,8,11,6', type: 'multiple-choice', options: ['Yes', 'No'], correctAnswer: 'No', hint: 'Check if any x-value has more than one y-value.', explanation: 'x = 1 maps to both 5 and 6, so it is not a function.', standardCode: '8.F.1' },
        { index: 2, question: 'If g(x) = x² + 1, what is g(−3)?', type: 'short-answer', correctAnswer: '10', hint: 'Square −3 first.', explanation: 'g(−3) = (−3)² + 1 = 9 + 1 = 10.', standardCode: '8.F.1' },
        { index: 3, question: 'Does a circle pass the vertical line test?', type: 'multiple-choice', options: ['Yes', 'No'], correctAnswer: 'No', hint: 'Imagine a vertical line through the center of the circle.', explanation: 'A vertical line through the center hits the circle at two points, so a circle is not a function.', standardCode: '8.F.1' },
        { index: 4, question: 'If h(x) = −2x + 10, what is h(0)?', type: 'short-answer', correctAnswer: '10', hint: 'Substitute 0 for x.', explanation: 'h(0) = −2(0) + 10 = 10.', standardCode: '8.F.1' },
      ],
      assessment: {
        questions: [
          { question: 'If f(x) = 4x − 3, find f(−2).', type: 'short-answer', correctAnswer: '−11', standardCode: '8.F.1' },
          { question: 'Which of these is NOT a function?', type: 'multiple-choice', options: ['y = 2x + 1', 'x² + y² = 25', 'y = x²', 'y = |x|'], correctAnswer: 'x² + y² = 25', standardCode: '8.F.1' },
          { question: 'A table shows x: 0,1,2,3 and y: 5,5,5,5. Is this a function? Explain.', type: 'short-answer', correctAnswer: 'Yes, because each input has exactly one output. Multiple inputs can share the same output.', standardCode: '8.F.1' },
        ],
      },
    },
  },
  {
    slug: 'grade8-math-compare-functions',
    title: 'Comparing Functions',
    description: 'Compare properties of two functions represented in different ways — equations, tables, graphs, and verbal descriptions',
    subject: 'math',
    grade: 8,
    gradeBand: '6-8',
    topicCluster: 'Functions',
    standardCodes: ['8.F.2'],
    content: {
      intro: {
        title: 'Comparing Functions',
        text: 'Functions can be described using equations, tables, graphs, or words. Sometimes you need to compare two functions that are given in different formats. Which one grows faster? Which starts higher? In this module you will learn to extract key properties from any representation and compare functions side by side.',
      },
      segments: [
        {
          index: 0,
          title: 'Key Properties for Comparison',
          text: 'When comparing functions, focus on these properties: the rate of change (slope for linear functions), the initial value (y-intercept or the output when x = 0), and the overall behavior (increasing, decreasing, or constant). Two functions might have the same slope but different starting points, or the same starting point but different slopes.',
          keyVocabulary: ['rate of change', 'initial value', 'slope', 'y-intercept'],
          example: 'f(x) = 2x + 3 has slope 2 and initial value 3; g(x) = 4x + 1 has slope 4 and initial value 1.',
        },
        {
          index: 1,
          title: 'Extracting Information from Tables and Graphs',
          text: 'From a table, find the rate of change by calculating the difference in y-values divided by the difference in x-values for consecutive rows. The initial value is the y-value when x = 0 (if shown) or can be found by working backward. From a graph, read the y-intercept directly and calculate the slope by choosing two clear points and using rise over run.',
          keyVocabulary: ['rise over run', 'consecutive', 'extract', 'rate of change'],
        },
        {
          index: 2,
          title: 'Comparing Across Representations',
          text: 'Suppose function A is given as y = 3x + 2 and function B is given as a table: x = 0 → y = 5, x = 1 → y = 7, x = 2 → y = 9. For B, the rate of change is (7 − 5)/(1 − 0) = 2 and the initial value is 5. Now compare: A has slope 3 and initial value 2; B has slope 2 and initial value 5. A grows faster, but B starts higher. They will cross at some point.',
          keyVocabulary: ['cross', 'intersection', 'representation'],
          example: 'A: slope 3, start 2. B: slope 2, start 5. They cross when 3x + 2 = 2x + 5, at x = 3.',
        },
      ],
      practice: [
        { index: 0, question: 'Function A: y = 5x + 1. Function B has a table where x = 0 → y = 3 and x = 1 → y = 6. Which has a greater rate of change?', type: 'multiple-choice', options: ['A', 'B', 'They are equal'], correctAnswer: 'A', hint: 'Find the slope of B from the table.', explanation: 'Slope of A = 5. Slope of B = (6 − 3)/(1 − 0) = 3. A has a greater rate of change.', standardCode: '8.F.2' },
        { index: 1, question: 'Function P: y = 2x + 7. Function Q: y = 4x + 1. Which function has a greater initial value?', type: 'multiple-choice', options: ['P', 'Q'], correctAnswer: 'P', hint: 'The initial value is the y-intercept.', explanation: 'P has y-intercept 7 and Q has y-intercept 1, so P starts higher.', standardCode: '8.F.2' },
        { index: 2, question: 'A table shows x: 0,1,2 y: 10,8,6. What is the rate of change?', type: 'short-answer', correctAnswer: '−2', hint: 'Calculate (8 − 10)/(1 − 0).', explanation: 'The y-values decrease by 2 for each increase of 1 in x, so the rate of change is −2.', standardCode: '8.F.2' },
        { index: 3, question: 'Function M has slope 3 and y-intercept 0. Function N has slope 1 and y-intercept 8. At what x-value are they equal?', type: 'short-answer', correctAnswer: 'x = 4', hint: 'Set 3x = x + 8 and solve.', explanation: '3x = x + 8 → 2x = 8 → x = 4.', standardCode: '8.F.2' },
        { index: 4, question: 'Two functions have the same slope but different y-intercepts. How do their graphs relate?', type: 'short-answer', correctAnswer: 'They are parallel lines that never intersect.', hint: 'Same slope means...', explanation: 'Lines with equal slopes are parallel. Different y-intercepts mean they are not the same line, so they never cross.', standardCode: '8.F.2' },
      ],
      assessment: {
        questions: [
          { question: 'Function A: y = −x + 6. Function B table: x: 0,2,4 y: 1,5,9. Which grows faster?', type: 'short-answer', correctAnswer: 'B, with slope 2, grows faster than A, with slope −1.', standardCode: '8.F.2' },
          { question: 'Which function has the greater y-intercept: y = 3x + 4 or a function passing through (0, 7) with slope 1?', type: 'multiple-choice', options: ['y = 3x + 4', 'The function through (0, 7)'], correctAnswer: 'The function through (0, 7)', standardCode: '8.F.2' },
          { question: 'Function C: y = 2x + 3. Function D: y = 2x + 3. Compare these functions.', type: 'short-answer', correctAnswer: 'They are the same function — same slope and same y-intercept. Their graphs are identical.', standardCode: '8.F.2' },
        ],
      },
    },
  },
  {
    slug: 'grade8-math-represent-functions',
    title: 'Representing Functions',
    description: 'Describe functional relationships using equations, tables, graphs, and verbal descriptions and translate between them',
    subject: 'math',
    grade: 8,
    gradeBand: '6-8',
    topicCluster: 'Functions',
    standardCodes: ['8.F.1', '8.F.2'],
    content: {
      intro: {
        title: 'Representing Functions',
        text: 'A function can wear many outfits — an equation, a table, a graph, or a story. Each representation highlights different features. A graph shows the overall shape, a table gives exact values, an equation provides the rule, and a description explains the context. In this module you will move fluently between these representations.',
      },
      segments: [
        {
          index: 0,
          title: 'From Equations to Tables and Graphs',
          text: 'Start with an equation like y = 2x − 1. Choose several x-values, substitute them to find y, and fill in a table. Then plot the ordered pairs on a coordinate plane and connect them. For a linear function, the points form a straight line. For example, when x = 0, y = −1; x = 1, y = 1; x = 2, y = 3. Plot these three points and draw the line through them.',
          keyVocabulary: ['ordered pair', 'coordinate plane', 'plot', 'linear'],
          example: 'y = 2x − 1: (0, −1), (1, 1), (2, 3) — a straight line with slope 2.',
        },
        {
          index: 1,
          title: 'From Tables and Graphs to Equations',
          text: 'Given a table, find the rate of change (slope) and initial value (y-intercept) to write the equation. Slope = change in y ÷ change in x. If x: 0,1,2 and y: 4,7,10, the slope is 3 and the y-intercept is 4, so y = 3x + 4. From a graph, identify two clear points, calculate the slope, and read the y-intercept from where the line crosses the y-axis.',
          keyVocabulary: ['slope', 'y-intercept', 'equation of a line'],
        },
        {
          index: 2,
          title: 'Verbal Descriptions',
          text: 'Real-world problems are often described in words. A plumber charges a $50 service fee plus $30 per hour. The function is C(h) = 30h + 50, where h is hours and C is cost. The initial value ($50) is the y-intercept, and the hourly rate ($30) is the slope. Practice translating word problems into equations to unlock the power of functions in everyday contexts.',
          keyVocabulary: ['verbal description', 'context', 'define variables'],
          example: 'A taxi charges $3 base plus $2/mile: C(m) = 2m + 3.',
        },
      ],
      practice: [
        { index: 0, question: 'Write the equation for a function with slope 4 and y-intercept −2.', type: 'short-answer', correctAnswer: 'y = 4x − 2', hint: 'Use y = mx + b form.', explanation: 'Slope m = 4, y-intercept b = −2, so y = 4x − 2.', standardCode: '8.F.1' },
        { index: 1, question: 'A table shows x: 0,1,2,3 and y: 6,6,6,6. What is the equation?', type: 'short-answer', correctAnswer: 'y = 6', hint: 'The output never changes.', explanation: 'The slope is 0 and the y-intercept is 6, so y = 6 (a constant function).', standardCode: '8.F.1' },
        { index: 2, question: 'A gym charges $25/month plus a $40 signup fee. Write a function for total cost after m months.', type: 'short-answer', correctAnswer: 'C(m) = 25m + 40', hint: 'The monthly charge is the slope, the signup fee is the y-intercept.', explanation: 'The rate of change is $25/month and the initial cost is $40, so C(m) = 25m + 40.', standardCode: '8.F.2' },
        { index: 3, question: 'From the table x: 1,2,3 y: 5,9,13, find the slope.', type: 'short-answer', correctAnswer: '4', hint: 'Calculate the change in y over the change in x.', explanation: '(9 − 5)/(2 − 1) = 4.', standardCode: '8.F.1' },
        { index: 4, question: 'A graph passes through (0, 3) and (2, 9). Write the equation.', type: 'short-answer', correctAnswer: 'y = 3x + 3', hint: 'Find slope: (9 − 3)/(2 − 0).', explanation: 'Slope = 6/2 = 3, y-intercept = 3, so y = 3x + 3.', standardCode: '8.F.2' },
      ],
      assessment: {
        questions: [
          { question: 'Write the equation for a line through (0, −1) with slope 5.', type: 'short-answer', correctAnswer: 'y = 5x − 1', standardCode: '8.F.1' },
          { question: 'A car rental costs $20/day plus a $50 insurance fee. Which equation represents the total cost for d days?', type: 'multiple-choice', options: ['C = 50d + 20', 'C = 20d + 50', 'C = 70d', 'C = 20d − 50'], correctAnswer: 'C = 20d + 50', standardCode: '8.F.2' },
          { question: 'From table x: 0,3,6 y: 2,8,14, write the equation.', type: 'short-answer', correctAnswer: 'y = 2x + 2', standardCode: '8.F.1' },
        ],
      },
    },
  },
  {
    slug: 'grade8-math-linear-functions-slope',
    title: 'Linear Functions and Slope',
    description: 'Interpret the equation y = mx + b as defining a linear function and understand slope as a rate of change',
    subject: 'math',
    grade: 8,
    gradeBand: '6-8',
    topicCluster: 'Functions',
    standardCodes: ['8.F.3', '8.F.4'],
    content: {
      intro: {
        title: 'Linear Functions and Slope',
        text: 'The equation y = mx + b is one of the most important in all of mathematics. It describes a straight line, where m is the slope (steepness) and b is the y-intercept (starting point). Understanding slope helps you describe how fast things change — the speed of a car, the growth of savings, or the rate at which water fills a pool.',
      },
      segments: [
        {
          index: 0,
          title: 'Slope as Rate of Change',
          text: 'Slope measures how much y changes for each unit increase in x. It is calculated as rise over run: m = (y₂ − y₁)/(x₂ − x₁). A positive slope means the line goes up from left to right; a negative slope means it goes down. A slope of zero is a horizontal line, and an undefined slope is a vertical line. In context, slope is the rate of change — dollars per hour, miles per gallon, or degrees per minute.',
          keyVocabulary: ['slope', 'rate of change', 'rise', 'run', 'positive slope', 'negative slope'],
          example: 'Points (1, 3) and (4, 9): slope = (9 − 3)/(4 − 1) = 6/3 = 2.',
        },
        {
          index: 1,
          title: 'The y-intercept',
          text: 'The y-intercept is the point where the line crosses the y-axis, which occurs when x = 0. In y = mx + b, the y-intercept is b. In real-world problems, the y-intercept often represents a starting value or fixed cost. A phone plan that costs $30/month with a $100 activation fee has y-intercept 100.',
          keyVocabulary: ['y-intercept', 'initial value', 'starting point'],
          example: 'y = 3x + 5: when x = 0, y = 5, so the y-intercept is (0, 5).',
        },
        {
          index: 2,
          title: 'Constructing Linear Functions from Context',
          text: 'To write a linear function from a real-world situation, identify the rate of change (slope) and the initial value (y-intercept). A candle is 12 inches tall and burns 0.5 inches per hour. Height h after t hours: h = −0.5t + 12. The slope is negative because the candle gets shorter over time.',
          keyVocabulary: ['construct', 'model', 'context', 'interpret'],
          example: 'A plant is 3 cm tall and grows 2 cm/week: h = 2w + 3.',
        },
        {
          index: 3,
          title: 'Linear vs Nonlinear Functions',
          text: 'A linear function has a constant rate of change — its graph is a straight line. A nonlinear function has a rate of change that varies. If you compute the slope between consecutive points in a table and get different values, the function is nonlinear. For example, y = x² is nonlinear because the rate of change increases as x increases.',
          keyVocabulary: ['linear', 'nonlinear', 'constant rate', 'varying rate'],
        },
      ],
      practice: [
        { index: 0, question: 'Find the slope of the line through (2, 5) and (6, 13).', type: 'short-answer', correctAnswer: '2', hint: 'Use (y₂ − y₁)/(x₂ − x₁).', explanation: '(13 − 5)/(6 − 2) = 8/4 = 2.', standardCode: '8.F.4' },
        { index: 1, question: 'What is the y-intercept of y = −3x + 7?', type: 'short-answer', correctAnswer: '7', hint: 'In y = mx + b, b is the y-intercept.', explanation: 'The y-intercept is b = 7.', standardCode: '8.F.3' },
        { index: 2, question: 'A pool fills at 50 gallons per hour. It already has 200 gallons. Write a function for gallons g after h hours.', type: 'short-answer', correctAnswer: 'g = 50h + 200', hint: 'Rate of change is 50, initial value is 200.', explanation: 'Slope = 50 (gallons/hour), y-intercept = 200 (initial amount), so g = 50h + 200.', standardCode: '8.F.4' },
        { index: 3, question: 'Is the function y = x³ linear or nonlinear?', type: 'multiple-choice', options: ['Linear', 'Nonlinear'], correctAnswer: 'Nonlinear', hint: 'Check if the graph is a straight line.', explanation: 'y = x³ produces a curve, not a straight line, so it is nonlinear.', standardCode: '8.F.3' },
        { index: 4, question: 'A line has slope −1 and passes through (0, 4). Write the equation.', type: 'short-answer', correctAnswer: 'y = −x + 4', hint: 'Use y = mx + b with m = −1 and b = 4.', explanation: 'y = (−1)x + 4 = −x + 4.', standardCode: '8.F.4' },
      ],
      assessment: {
        questions: [
          { question: 'Find the slope and y-intercept of the line through (0, −2) and (3, 7).', type: 'short-answer', correctAnswer: 'Slope = 3, y-intercept = −2', standardCode: '8.F.4' },
          { question: 'Which equation is nonlinear?', type: 'multiple-choice', options: ['y = 5x − 1', 'y = x² + 3', 'y = −2x', 'y = 0.5x + 10'], correctAnswer: 'y = x² + 3', standardCode: '8.F.3' },
          { question: 'A balloon rises at 15 feet per second from a platform 6 feet high. Write the height function.', type: 'short-answer', correctAnswer: 'h = 15t + 6', standardCode: '8.F.4' },
        ],
      },
    },
  },

  // ============================================
  // Geometry (4 modules)
  // ============================================
  {
    slug: 'grade8-math-transformations',
    title: 'Geometric Transformations',
    description: 'Understand and perform translations, reflections, rotations, and dilations on the coordinate plane',
    subject: 'math',
    grade: 8,
    gradeBand: '6-8',
    topicCluster: 'Geometry',
    standardCodes: ['8.G.1', '8.G.3'],
    content: {
      intro: {
        title: 'Geometric Transformations',
        text: 'When you slide, flip, turn, or resize a shape, you are performing a transformation. These movements are everywhere — from the symmetry of a butterfly to the design of a tile floor. In this module you will learn four types of transformations and how to perform them on a coordinate plane.',
      },
      segments: [
        {
          index: 0,
          title: 'Translations',
          text: 'A translation slides every point of a figure the same distance in the same direction. It does not change the shape or size. On a coordinate plane, a translation shifts (x, y) to (x + a, y + b). For example, translating a triangle 3 units right and 2 units up means adding 3 to every x-coordinate and 2 to every y-coordinate. The resulting triangle is congruent to the original.',
          keyVocabulary: ['translation', 'slide', 'congruent', 'coordinate'],
          example: 'Translate (1, 4) by (3, −2): new point is (4, 2).',
        },
        {
          index: 1,
          title: 'Reflections',
          text: 'A reflection flips a figure over a line called the line of reflection. Each point and its image are the same distance from the line. When reflecting over the x-axis, (x, y) becomes (x, −y). When reflecting over the y-axis, (x, y) becomes (−x, y). The reflected figure is congruent to the original but has a reversed orientation, like a mirror image.',
          keyVocabulary: ['reflection', 'flip', 'line of reflection', 'mirror image'],
          example: 'Reflect (3, 5) over the x-axis: new point is (3, −5).',
        },
        {
          index: 2,
          title: 'Rotations',
          text: 'A rotation turns a figure around a fixed point called the center of rotation. Common rotations are 90°, 180°, and 270° counterclockwise around the origin. For a 90° counterclockwise rotation, (x, y) becomes (−y, x). For 180°, (x, y) becomes (−x, −y). Rotations preserve size and shape, so the image is congruent to the original.',
          keyVocabulary: ['rotation', 'turn', 'center of rotation', 'degrees'],
        },
        {
          index: 3,
          title: 'Dilations',
          text: 'A dilation resizes a figure by a scale factor from a center point. If the scale factor is greater than 1, the figure gets larger; if it is between 0 and 1, the figure gets smaller. For a dilation centered at the origin with scale factor k, (x, y) becomes (kx, ky). Dilations produce similar figures — same shape but not necessarily the same size.',
          keyVocabulary: ['dilation', 'scale factor', 'similar', 'enlarge', 'reduce'],
          example: 'Dilate (2, 3) by scale factor 4 from origin: new point is (8, 12).',
        },
      ],
      practice: [
        { index: 0, question: 'Translate the point (5, −1) by (−3, 4). What is the new point?', type: 'short-answer', correctAnswer: '(2, 3)', hint: 'Add −3 to x and 4 to y.', explanation: '(5 + (−3), −1 + 4) = (2, 3).', standardCode: '8.G.3' },
        { index: 1, question: 'Reflect (−2, 7) over the y-axis.', type: 'short-answer', correctAnswer: '(2, 7)', hint: 'Change the sign of the x-coordinate.', explanation: 'Reflecting over the y-axis: (−(−2), 7) = (2, 7).', standardCode: '8.G.3' },
        { index: 2, question: 'Rotate (3, 1) 90° counterclockwise about the origin.', type: 'short-answer', correctAnswer: '(−1, 3)', hint: '(x, y) → (−y, x).', explanation: '(3, 1) → (−1, 3).', standardCode: '8.G.3' },
        { index: 3, question: 'Dilate (4, −2) by a scale factor of 3 from the origin.', type: 'short-answer', correctAnswer: '(12, −6)', hint: 'Multiply both coordinates by 3.', explanation: '(4 × 3, −2 × 3) = (12, −6).', standardCode: '8.G.3' },
        { index: 4, question: 'Which transformation changes the size of a figure?', type: 'multiple-choice', options: ['Translation', 'Reflection', 'Rotation', 'Dilation'], correctAnswer: 'Dilation', hint: 'Which one involves a scale factor?', explanation: 'Only dilation changes the size. Translations, reflections, and rotations all preserve size.', standardCode: '8.G.1' },
      ],
      assessment: {
        questions: [
          { question: 'Reflect (−3, 4) over the x-axis, then translate by (2, 1). What is the final point?', type: 'short-answer', correctAnswer: '(−1, −3)', standardCode: '8.G.3' },
          { question: 'A triangle has vertices (1, 1), (3, 1), (1, 4). After a dilation by scale factor 2 from the origin, what are the new vertices?', type: 'short-answer', correctAnswer: '(2, 2), (6, 2), (2, 8)', standardCode: '8.G.3' },
          { question: 'Which transformation produces a congruent figure?', type: 'multiple-choice', options: ['Dilation by factor 2', 'Reflection over the x-axis', 'Dilation by factor 0.5', 'None of the above'], correctAnswer: 'Reflection over the x-axis', standardCode: '8.G.1' },
        ],
      },
    },
  },
  {
    slug: 'grade8-math-pythagorean-theorem',
    title: 'The Pythagorean Theorem',
    description: 'Understand and apply the Pythagorean theorem to find unknown side lengths and distances in real-world and mathematical problems',
    subject: 'math',
    grade: 8,
    gradeBand: '6-8',
    topicCluster: 'Geometry',
    standardCodes: ['8.G.6', '8.G.7', '8.G.8'],
    content: {
      intro: {
        title: 'The Pythagorean Theorem',
        text: 'Over 2,500 years ago, mathematicians discovered a powerful relationship between the sides of a right triangle: a² + b² = c², where c is the longest side (the hypotenuse). This theorem helps you find distances, check if angles are right angles, and solve countless real-world problems — from construction to navigation.',
      },
      segments: [
        {
          index: 0,
          title: 'Understanding the Theorem',
          text: 'In a right triangle, the side opposite the right angle is the hypotenuse (c), and the other two sides are the legs (a and b). The Pythagorean theorem states that a² + b² = c². This means that if you build squares on each side, the area of the square on the hypotenuse equals the combined areas of the squares on the two legs. For a triangle with legs 3 and 4, c² = 9 + 16 = 25, so c = 5.',
          keyVocabulary: ['Pythagorean theorem', 'hypotenuse', 'legs', 'right triangle'],
          example: 'Legs 3 and 4: 3² + 4² = 9 + 16 = 25. Hypotenuse = √25 = 5.',
        },
        {
          index: 1,
          title: 'Finding a Missing Side',
          text: 'To find the hypotenuse, add the squares of the legs and take the square root: c = √(a² + b²). To find a leg, rearrange: a = √(c² − b²). For example, if the hypotenuse is 13 and one leg is 5, the other leg is √(169 − 25) = √144 = 12. Always check that the hypotenuse is the longest side.',
          keyVocabulary: ['missing side', 'solve', 'square root', 'rearrange'],
          example: 'Hypotenuse 10, leg 6: other leg = √(100 − 36) = √64 = 8.',
        },
        {
          index: 2,
          title: 'The Converse and Verifying Right Triangles',
          text: 'The converse of the Pythagorean theorem says: if a² + b² = c² for the three sides of a triangle, then the triangle is a right triangle. This is useful for checking. For sides 5, 12, 13: 25 + 144 = 169 = 13². Yes, it is a right triangle. For sides 4, 5, 7: 16 + 25 = 41 ≠ 49. Not a right triangle.',
          keyVocabulary: ['converse', 'verify', 'Pythagorean triple'],
        },
        {
          index: 3,
          title: 'Distance on the Coordinate Plane',
          text: 'The Pythagorean theorem lets you find the distance between any two points on the coordinate plane. For points (x₁, y₁) and (x₂, y₂), draw a right triangle using the horizontal and vertical distances as legs. The distance is d = √((x₂ − x₁)² + (y₂ − y₁)²). For (1, 2) and (4, 6): d = √(9 + 16) = √25 = 5.',
          keyVocabulary: ['distance formula', 'coordinate plane', 'horizontal', 'vertical'],
          example: 'Distance from (0, 0) to (3, 4) = √(9 + 16) = 5.',
        },
      ],
      practice: [
        { index: 0, question: 'A right triangle has legs 6 and 8. Find the hypotenuse.', type: 'short-answer', correctAnswer: '10', hint: 'c = √(6² + 8²).', explanation: '36 + 64 = 100. √100 = 10.', standardCode: '8.G.7' },
        { index: 1, question: 'A ladder leans against a wall. The ladder is 13 feet long and the base is 5 feet from the wall. How high up the wall does it reach?', type: 'short-answer', correctAnswer: '12 feet', hint: 'The ladder is the hypotenuse.', explanation: 'h = √(13² − 5²) = √(169 − 25) = √144 = 12.', standardCode: '8.G.7' },
        { index: 2, question: 'Is a triangle with sides 7, 24, 25 a right triangle?', type: 'multiple-choice', options: ['Yes', 'No'], correctAnswer: 'Yes', hint: 'Check if 7² + 24² = 25².', explanation: '49 + 576 = 625 = 25². Yes, it is a right triangle.', standardCode: '8.G.6' },
        { index: 3, question: 'Find the distance between (−1, 3) and (2, 7).', type: 'short-answer', correctAnswer: '5', hint: 'd = √((2−(−1))² + (7−3)²).', explanation: 'd = √(9 + 16) = √25 = 5.', standardCode: '8.G.8' },
        { index: 4, question: 'A right triangle has hypotenuse 15 and one leg 9. Find the other leg.', type: 'short-answer', correctAnswer: '12', hint: 'a = √(15² − 9²).', explanation: '225 − 81 = 144. √144 = 12.', standardCode: '8.G.7' },
      ],
      assessment: {
        questions: [
          { question: 'A rectangular field is 40 m by 30 m. What is the length of the diagonal?', type: 'short-answer', correctAnswer: '50 m', standardCode: '8.G.7' },
          { question: 'Is a triangle with sides 5, 10, 12 a right triangle?', type: 'multiple-choice', options: ['Yes', 'No'], correctAnswer: 'No', standardCode: '8.G.6' },
          { question: 'Find the distance between (3, −2) and (−1, 1).', type: 'short-answer', correctAnswer: '5', standardCode: '8.G.8' },
        ],
      },
    },
  },
  {
    slug: 'grade8-math-volume-cones-spheres',
    title: 'Volume of Cones, Cylinders, and Spheres',
    description: 'Apply volume formulas for cones, cylinders, and spheres to solve real-world and mathematical problems',
    subject: 'math',
    grade: 8,
    gradeBand: '6-8',
    topicCluster: 'Geometry',
    standardCodes: ['8.G.9'],
    content: {
      intro: {
        title: 'Volume of Cones, Cylinders, and Spheres',
        text: 'How much water does a cylindrical tank hold? How much ice cream fits in a cone? How much air is inside a basketball? To answer these questions, you need volume formulas for three-dimensional shapes. In this module you will learn and apply the formulas for cylinders, cones, and spheres.',
      },
      segments: [
        {
          index: 0,
          title: 'Volume of a Cylinder',
          text: 'A cylinder has two circular bases and a curved surface connecting them. Its volume is the area of the base times the height: V = πr²h, where r is the radius of the base and h is the height. Think of stacking thin circular disks on top of each other — the total volume is the area of each disk times how many you stack. For a cylinder with radius 3 cm and height 10 cm: V = π(3²)(10) = 90π ≈ 282.7 cm³.',
          keyVocabulary: ['cylinder', 'radius', 'height', 'volume', 'π (pi)'],
          example: 'r = 5, h = 8: V = π(25)(8) = 200π ≈ 628.3 cubic units.',
        },
        {
          index: 1,
          title: 'Volume of a Cone',
          text: 'A cone has one circular base and a point (apex) at the top. Its volume is exactly one-third of a cylinder with the same base and height: V = (1/3)πr²h. You can demonstrate this by filling a cone with water three times to fill a matching cylinder. For a cone with radius 4 cm and height 9 cm: V = (1/3)π(16)(9) = 48π ≈ 150.8 cm³.',
          keyVocabulary: ['cone', 'apex', 'one-third', 'base area'],
          example: 'r = 3, h = 12: V = (1/3)π(9)(12) = 36π ≈ 113.1 cubic units.',
        },
        {
          index: 2,
          title: 'Volume of a Sphere',
          text: 'A sphere is the set of all points the same distance from the center. Its volume is V = (4/3)πr³. For a sphere with radius 6 cm: V = (4/3)π(216) = 288π ≈ 904.8 cm³. Notice the formula uses r³ (radius cubed) because a sphere extends in three dimensions from its center.',
          keyVocabulary: ['sphere', 'radius cubed', 'four-thirds'],
          example: 'r = 10: V = (4/3)π(1000) = 4000π/3 ≈ 4188.8 cubic units.',
        },
      ],
      practice: [
        { index: 0, question: 'Find the volume of a cylinder with radius 7 and height 10. Use π ≈ 3.14.', type: 'short-answer', correctAnswer: '1538.6', hint: 'V = πr²h.', explanation: 'V = 3.14 × 49 × 10 = 1538.6 cubic units.', standardCode: '8.G.9' },
        { index: 1, question: 'Find the volume of a cone with radius 3 and height 12. Use π ≈ 3.14.', type: 'short-answer', correctAnswer: '113.04', hint: 'V = (1/3)πr²h.', explanation: 'V = (1/3)(3.14)(9)(12) = (1/3)(339.12) = 113.04 cubic units.', standardCode: '8.G.9' },
        { index: 2, question: 'Find the volume of a sphere with radius 3. Use π ≈ 3.14.', type: 'short-answer', correctAnswer: '113.04', hint: 'V = (4/3)πr³.', explanation: 'V = (4/3)(3.14)(27) = (4/3)(84.78) = 113.04 cubic units.', standardCode: '8.G.9' },
        { index: 3, question: 'A cone and a cylinder share the same radius and height. How do their volumes compare?', type: 'multiple-choice', options: ['The cone is half the cylinder', 'The cone is one-third the cylinder', 'They are equal', 'The cone is two-thirds the cylinder'], correctAnswer: 'The cone is one-third the cylinder', hint: 'Compare V = πr²h and V = (1/3)πr²h.', explanation: 'The cone formula has a factor of 1/3, so the cone volume is one-third the cylinder volume.', standardCode: '8.G.9' },
        { index: 4, question: 'A basketball has a diameter of 24 cm. What is its volume? Use π ≈ 3.14.', type: 'short-answer', correctAnswer: '7234.56', hint: 'Radius = diameter ÷ 2 = 12 cm.', explanation: 'V = (4/3)(3.14)(12³) = (4/3)(3.14)(1728) = (4/3)(5425.92) = 7234.56 cm³.', standardCode: '8.G.9' },
      ],
      assessment: {
        questions: [
          { question: 'A water tank is a cylinder with radius 5 m and height 8 m. What is its volume? Use π ≈ 3.14.', type: 'short-answer', correctAnswer: '628 m³', standardCode: '8.G.9' },
          { question: 'Which has a greater volume: a sphere of radius 3 or a cone of radius 3 and height 12? Use π ≈ 3.14.', type: 'multiple-choice', options: ['Sphere', 'Cone', 'They are equal'], correctAnswer: 'They are equal', standardCode: '8.G.9' },
          { question: 'An ice cream cone has radius 4 cm and height 10 cm. How much ice cream can it hold? Use π ≈ 3.14.', type: 'short-answer', correctAnswer: '167.47 cm³', standardCode: '8.G.9' },
        ],
      },
    },
  },
  {
    slug: 'grade8-math-congruence-similarity',
    title: 'Congruence and Similarity',
    description: 'Understand congruence and similarity through transformations, and apply angle relationships in triangles',
    subject: 'math',
    grade: 8,
    gradeBand: '6-8',
    topicCluster: 'Geometry',
    standardCodes: ['8.G.2', '8.G.4', '8.G.5'],
    content: {
      intro: {
        title: 'Congruence and Similarity',
        text: 'Two shapes are congruent if they are the same size and shape — one can be moved exactly onto the other using translations, reflections, and rotations. Two shapes are similar if they have the same shape but possibly different sizes — one can be transformed into the other using a dilation. In this module you will explore these ideas and use angle relationships to prove properties of figures.',
      },
      segments: [
        {
          index: 0,
          title: 'Congruence Through Transformations',
          text: 'Two figures are congruent if one can be mapped onto the other through a sequence of translations, reflections, and rotations. These are called rigid motions because they preserve both size and shape. If triangle ABC can be reflected then translated to land exactly on triangle DEF, the triangles are congruent. Corresponding sides have equal lengths and corresponding angles have equal measures.',
          keyVocabulary: ['congruent', 'rigid motion', 'corresponding sides', 'corresponding angles'],
          example: 'Triangle (0,0), (3,0), (0,4) reflected over y-axis gives (0,0), (−3,0), (0,4) — congruent.',
        },
        {
          index: 1,
          title: 'Similarity Through Transformations',
          text: 'Two figures are similar if one can be mapped onto the other through a sequence of rigid motions and a dilation. Similar figures have the same shape but may differ in size. Corresponding angles are equal and corresponding sides are proportional. If triangle PQR is dilated by scale factor 2, each side doubles in length but all angles stay the same, producing a similar triangle.',
          keyVocabulary: ['similar', 'dilation', 'proportional', 'scale factor'],
          example: 'A 3-4-5 triangle and a 6-8-10 triangle are similar with scale factor 2.',
        },
        {
          index: 2,
          title: 'Angle Relationships',
          text: 'The angles in a triangle always add up to 180°. When a transversal crosses parallel lines, it creates several angle pairs: corresponding angles are equal, alternate interior angles are equal, and co-interior (same-side interior) angles are supplementary (add to 180°). These relationships help you find missing angles and prove that triangles are similar.',
          keyVocabulary: ['angle sum', 'transversal', 'parallel lines', 'corresponding angles', 'alternate interior angles'],
          example: 'In a triangle with angles 40° and 75°, the third angle is 180° − 40° − 75° = 65°.',
        },
        {
          index: 3,
          title: 'Applying Angle Relationships to Triangles',
          text: 'The exterior angle of a triangle equals the sum of the two non-adjacent interior angles. If two angles of one triangle equal two angles of another triangle, the triangles are similar by the AA (angle-angle) criterion. This is powerful because you only need two angle measurements to establish similarity, which then guarantees proportional sides.',
          keyVocabulary: ['exterior angle', 'AA criterion', 'interior angle', 'similar triangles'],
        },
      ],
      practice: [
        { index: 0, question: 'Triangle A has angles 50°, 60°, 70°. Triangle B has angles 50°, 60°, 70°. Are they similar?', type: 'multiple-choice', options: ['Yes', 'No'], correctAnswer: 'Yes', hint: 'Compare all three angle measures.', explanation: 'All corresponding angles are equal, so the triangles are similar by AA criterion.', standardCode: '8.G.5' },
        { index: 1, question: 'A triangle has angles 35° and 90°. What is the third angle?', type: 'short-answer', correctAnswer: '55°', hint: 'Angles in a triangle sum to 180°.', explanation: '180° − 35° − 90° = 55°.', standardCode: '8.G.5' },
        { index: 2, question: 'Two parallel lines are cut by a transversal. One alternate interior angle is 72°. What is the other?', type: 'short-answer', correctAnswer: '72°', hint: 'Alternate interior angles are equal.', explanation: 'Alternate interior angles formed by parallel lines and a transversal are congruent, so both are 72°.', standardCode: '8.G.5' },
        { index: 3, question: 'Triangle P has sides 3, 4, 5. Triangle Q has sides 9, 12, 15. Are they similar? What is the scale factor?', type: 'short-answer', correctAnswer: 'Yes, scale factor 3.', hint: 'Check if corresponding sides are proportional.', explanation: '9/3 = 12/4 = 15/5 = 3. All ratios are equal, so the triangles are similar with scale factor 3.', standardCode: '8.G.4' },
        { index: 4, question: 'Which sequence of transformations shows that two figures are congruent?', type: 'multiple-choice', options: ['A translation then a dilation', 'A reflection then a translation', 'A dilation then a rotation', 'A dilation only'], correctAnswer: 'A reflection then a translation', hint: 'Congruence requires only rigid motions.', explanation: 'Rigid motions (translations, reflections, rotations) preserve size and shape. A dilation changes size, so it does not preserve congruence.', standardCode: '8.G.2' },
      ],
      assessment: {
        questions: [
          { question: 'Two triangles have angles 30° and 110°. Must they be similar?', type: 'multiple-choice', options: ['Yes', 'No'], correctAnswer: 'Yes', standardCode: '8.G.5' },
          { question: 'An exterior angle of a triangle is 130°. The two non-adjacent interior angles are x° and 50°. Find x.', type: 'short-answer', correctAnswer: '80°', standardCode: '8.G.5' },
          { question: 'Describe a sequence of transformations that maps a 2-3-4 triangle onto a 4-6-8 triangle.', type: 'short-answer', correctAnswer: 'Apply a dilation with scale factor 2 (centered at the origin or a vertex). The triangles are similar.', standardCode: '8.G.4' },
        ],
      },
    },
  },
]
