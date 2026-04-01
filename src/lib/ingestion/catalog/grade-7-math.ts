import type { ModuleSeed } from '../types'

export const GRADE_7_MATH: ModuleSeed[] = [
  // ─── Ratios & Proportional Relationships (4 modules) ───

  {
    slug: 'grade7-math-proportional-relationships',
    title: 'Proportional Relationships',
    description: 'Determine whether two quantities are in a proportional relationship using tables, graphs, and equations',
    subject: 'math',
    grade: 7,
    gradeBand: '6-8',
    topicCluster: 'Ratios & Proportional Relationships',
    standardCodes: ['7.RP.2', '7.RP.2a'],
    content: {
      intro: {
        title: 'Proportional Relationships',
        text: 'Have you ever noticed that doubling a recipe doubles every ingredient? That is a proportional relationship — when one quantity changes, the other changes by the same factor. In this module you will learn how to recognize, represent, and use proportional relationships in tables, graphs, and equations.',
      },
      segments: [
        {
          index: 0,
          title: 'What Makes a Relationship Proportional',
          text: 'Two quantities are proportional when they always have the same ratio. If you earn $12 per hour, the ratio of pay to hours is always 12:1 whether you work 1 hour or 10 hours. A quick test is to divide each y-value by its x-value — if every quotient is the same, the relationship is proportional. If even one quotient differs, it is not.',
          keyVocabulary: ['proportional', 'ratio', 'constant ratio', 'quotient'],
          example: 'Hours: 2, 4, 6 → Pay: $24, $48, $72. Each quotient is $12, so the relationship is proportional.',
        },
        {
          index: 1,
          title: 'Tables and Graphs of Proportional Relationships',
          text: 'In a table, a proportional relationship shows equivalent ratios in every row. On a graph, the points form a straight line that passes through the origin (0, 0). If the line does not go through the origin, the relationship is not proportional even if it is linear. Plotting ordered pairs from the table and checking for a straight line through the origin is a reliable visual test.',
          keyVocabulary: ['origin', 'ordered pair', 'linear', 'equivalent ratios'],
          example: 'Plot (1, 3), (2, 6), (3, 9). The line is straight and passes through (0, 0), confirming proportionality.',
        },
        {
          index: 2,
          title: 'Writing Equations for Proportional Relationships',
          text: 'Every proportional relationship can be written as y = kx, where k is the constant of proportionality. To find k, divide any y-value by its matching x-value. Once you know k, you can predict y for any x. For example, if 3 pounds of apples cost $4.50, then k = 4.50 / 3 = 1.50, and the equation is y = 1.50x.',
          keyVocabulary: ['equation', 'constant of proportionality', 'predict'],
          example: 'k = 1.50 → Cost of 7 pounds: y = 1.50 × 7 = $10.50.',
        },
      ],
      practice: [
        { index: 0, question: 'A car travels 150 miles in 3 hours at a constant speed. What is the constant of proportionality (miles per hour)?', type: 'short-answer', correctAnswer: '50', hint: 'Divide miles by hours.', explanation: '150 ÷ 3 = 50 miles per hour.', standardCode: '7.RP.2' },
        { index: 1, question: 'Which table shows a proportional relationship? A: (1,4), (2,8), (3,13) B: (1,5), (2,10), (3,15)', type: 'multiple-choice', options: ['Table A', 'Table B', 'Both', 'Neither'], correctAnswer: 'Table B', hint: 'Check if the ratio y/x is the same for every pair.', explanation: 'Table B: 5/1 = 10/2 = 15/3 = 5. Table A: 13/3 ≠ 4.', standardCode: '7.RP.2a' },
        { index: 2, question: 'Write the equation for a proportional relationship where k = 7.', type: 'short-answer', correctAnswer: 'y = 7x', hint: 'Use the form y = kx.', explanation: 'Substitute k = 7 into y = kx to get y = 7x.', standardCode: '7.RP.2' },
        { index: 3, question: 'Does the graph of a proportional relationship always pass through the origin?', type: 'multiple-choice', options: ['Yes', 'No'], correctAnswer: 'Yes', hint: 'Think about what happens when x = 0.', explanation: 'If y = kx, then when x = 0, y = 0, so the graph must pass through (0, 0).', standardCode: '7.RP.2' },
        { index: 4, question: 'If y = 3.5x, what is y when x = 8?', type: 'short-answer', correctAnswer: '28', hint: 'Multiply 3.5 by 8.', explanation: 'y = 3.5 × 8 = 28.', standardCode: '7.RP.2' },
      ],
      assessment: {
        questions: [
          { question: 'A store sells 4 notebooks for $6. What is the unit price per notebook?', type: 'short-answer', correctAnswer: '$1.50', standardCode: '7.RP.2' },
          { question: 'Which equation represents a proportional relationship with k = 2/3?', type: 'multiple-choice', options: ['y = 2/3 + x', 'y = (2/3)x', 'y = x − 2/3', 'y = 2x/3 + 1'], correctAnswer: 'y = (2/3)x', standardCode: '7.RP.2' },
          { question: 'The points (2, 8), (5, 20), and (7, 28) lie on a line through the origin. What is the constant of proportionality?', type: 'short-answer', correctAnswer: '4', standardCode: '7.RP.2a' },
        ],
      },
    },
  },

  {
    slug: 'grade7-math-percent-change',
    title: 'Percent Change',
    description: 'Calculate percent increase, percent decrease, and percent error in real-world contexts',
    subject: 'math',
    grade: 7,
    gradeBand: '6-8',
    topicCluster: 'Ratios & Proportional Relationships',
    standardCodes: ['7.RP.3'],
    content: {
      intro: {
        title: 'Percent Change',
        text: 'Prices go up, populations go down, and test scores shift from one year to the next. Percent change tells you exactly how much something grew or shrank relative to where it started. In this module you will learn to compute percent increase, percent decrease, and percent error.',
      },
      segments: [
        {
          index: 0,
          title: 'Percent Increase',
          text: 'Percent increase measures how much a quantity grows relative to its original value. The formula is: percent increase = (new − original) / original × 100. If a shirt cost $20 last year and now costs $25, the increase is (25 − 20) / 20 × 100 = 25%. Always subtract original from new, divide by the original, and multiply by 100.',
          keyVocabulary: ['percent increase', 'original value', 'new value', 'growth'],
          example: 'Population grew from 800 to 1,000. Percent increase = (1000 − 800) / 800 × 100 = 25%.',
        },
        {
          index: 1,
          title: 'Percent Decrease',
          text: 'Percent decrease works the same way, except the quantity gets smaller. Use the formula: percent decrease = (original − new) / original × 100. If a bicycle was $200 and is on sale for $150, the decrease is (200 − 150) / 200 × 100 = 25%. Notice you still divide by the original value, not the new one.',
          keyVocabulary: ['percent decrease', 'discount', 'reduction', 'markdown'],
          example: 'A $60 game is marked down to $45. Percent decrease = (60 − 45) / 60 × 100 = 25%.',
        },
        {
          index: 2,
          title: 'Percent Error',
          text: 'Percent error tells you how far an estimate is from the actual value. The formula is: percent error = |estimated − actual| / actual × 100. The absolute value ensures the answer is always positive. If you estimated 50 students would attend an event but 40 actually came, the percent error is |50 − 40| / 40 × 100 = 25%.',
          keyVocabulary: ['percent error', 'estimate', 'actual', 'absolute value'],
          example: 'Estimated weight: 10 lb; actual: 12 lb. Percent error = |10 − 12| / 12 × 100 ≈ 16.7%.',
        },
        {
          index: 3,
          title: 'Multi-Step Percent Problems',
          text: 'Sometimes you need to apply a percent to a new amount. A $200 item marked up 10% becomes $220. If that $220 item is then discounted 10%, you get $220 × 0.90 = $198 — not back to $200! Each percent change applies to the current amount, so the order and base matter. Read problems carefully to identify which value is the base for each step.',
          keyVocabulary: ['markup', 'discount', 'successive percents', 'base amount'],
        },
      ],
      practice: [
        { index: 0, question: 'A jacket originally costs $80 and is now $100. What is the percent increase?', type: 'short-answer', correctAnswer: '25%', hint: 'Use (new − original) / original × 100.', explanation: '(100 − 80) / 80 × 100 = 25%.', standardCode: '7.RP.3' },
        { index: 1, question: 'A phone price drops from $600 to $480. What is the percent decrease?', type: 'short-answer', correctAnswer: '20%', hint: 'Use (original − new) / original × 100.', explanation: '(600 − 480) / 600 × 100 = 20%.', standardCode: '7.RP.3' },
        { index: 2, question: 'You estimated a jar held 120 marbles, but it actually held 100. What is the percent error?', type: 'short-answer', correctAnswer: '20%', hint: 'Use |estimated − actual| / actual × 100.', explanation: '|120 − 100| / 100 × 100 = 20%.', standardCode: '7.RP.3' },
        { index: 3, question: 'A $50 item is marked up 20%, then that new price is discounted 20%. What is the final price?', type: 'multiple-choice', options: ['$50.00', '$48.00', '$52.00', '$46.00'], correctAnswer: '$48.00', hint: 'Apply each percent to the current amount, not the original.', explanation: '$50 × 1.20 = $60; $60 × 0.80 = $48.', standardCode: '7.RP.3' },
        { index: 4, question: 'A town had a population of 5,000 that grew to 5,500. What is the percent increase?', type: 'short-answer', correctAnswer: '10%', hint: 'Subtract, divide by original, multiply by 100.', explanation: '(5500 - 5000) / 5000 x 100 = 10%.', standardCode: '7.RP.3' },
      ],
      assessment: {
        questions: [
          { question: 'A shirt that cost $25 now costs $30. What is the percent increase?', type: 'short-answer', correctAnswer: '20%', standardCode: '7.RP.3' },
          { question: 'You estimated a room was 200 sq ft but it measured 250 sq ft. What is the percent error?', type: 'short-answer', correctAnswer: '20%', standardCode: '7.RP.3' },
          { question: 'Which shows a 50% decrease from 80?', type: 'multiple-choice', options: ['120', '60', '40', '30'], correctAnswer: '40', standardCode: '7.RP.3' },
        ],
      },
    },
  },

  {
    slug: 'grade7-math-scale-drawings',
    title: 'Scale Drawings',
    description: 'Interpret and create scale drawings, computing actual lengths and areas from a given scale',
    subject: 'math',
    grade: 7,
    gradeBand: '6-8',
    topicCluster: 'Ratios & Proportional Relationships',
    standardCodes: ['7.RP.1', '7.G.1'],
    content: {
      intro: {
        title: 'Scale Drawings',
        text: 'Maps, blueprints, and model cars all use scales to represent real objects in a smaller (or larger) size. Understanding scale drawings lets you figure out real distances from a map or design a room layout on paper. In this module you will learn to read scales, compute actual measurements, and create your own scale drawings.',
      },
      segments: [
        {
          index: 0,
          title: 'Understanding Scale',
          text: 'A scale is a ratio that compares a measurement on a drawing to the actual measurement. For example, 1 cm : 5 m means every centimeter on the drawing represents 5 meters in real life. Scales can be written as ratios (1:50), with units (1 in = 10 ft), or as a fraction (1/50). All three forms convey the same idea: how many times larger or smaller the real object is compared to the drawing.',
          keyVocabulary: ['scale', 'ratio', 'drawing', 'actual'],
          example: 'A map scale of 1 cm : 20 km means 3 cm on the map equals 60 km in reality.',
        },
        {
          index: 1,
          title: 'Finding Actual Lengths from a Scale Drawing',
          text: 'To find an actual length, measure the distance on the drawing and multiply by the scale factor. If the scale is 1 in = 4 ft and a wall measures 3.5 inches on the blueprint, the actual wall is 3.5 × 4 = 14 feet. You can also set up a proportion: 1/4 = 3.5/x, then cross-multiply to solve for x.',
          keyVocabulary: ['scale factor', 'proportion', 'cross-multiply', 'blueprint'],
          example: 'Scale 1 cm : 3 m. Drawing length 7 cm → Actual = 7 × 3 = 21 m.',
        },
        {
          index: 2,
          title: 'Finding Drawing Lengths from Actual Measurements',
          text: 'To go the other direction, divide the actual measurement by the scale factor. If a room is 20 feet long and the scale is 1 in = 5 ft, the drawing length is 20 ÷ 5 = 4 inches. This skill is essential when creating your own scale drawing — you choose a scale that fits your paper and then convert every real measurement.',
          keyVocabulary: ['convert', 'divide', 'scale drawing creation'],
        },
        {
          index: 3,
          title: 'Area and Scale Drawings',
          text: 'When lengths are scaled by a factor of k, areas are scaled by k². If a scale is 1:10 for length, then 1 square unit on the drawing represents 10 × 10 = 100 square units in reality. A rectangle that measures 2 cm by 3 cm on the drawing has an actual area of (2 × 10) × (3 × 10) = 600 cm², which is 100 times the drawing area of 6 cm².',
          keyVocabulary: ['area', 'square', 'scale factor squared'],
          example: 'Scale 1 in : 5 ft. Drawing: 2 in × 3 in = 6 in². Actual: 10 ft × 15 ft = 150 ft² (scale factor² = 25, 6 × 25 = 150).',
        },
      ],
      practice: [
        { index: 0, question: 'A map has a scale of 1 cm : 10 km. Two cities are 4.5 cm apart on the map. What is the actual distance?', type: 'short-answer', correctAnswer: '45 km', hint: 'Multiply the map distance by 10.', explanation: '4.5 × 10 = 45 km.', standardCode: '7.G.1' },
        { index: 1, question: 'A blueprint scale is 1 in = 3 ft. A room is 18 ft long. How long is it on the blueprint?', type: 'short-answer', correctAnswer: '6 in', hint: 'Divide the actual length by 3.', explanation: '18 ÷ 3 = 6 inches.', standardCode: '7.G.1' },
        { index: 2, question: 'If a scale drawing has a scale factor of 1:20, what does 1 square cm on the drawing represent in actual area?', type: 'multiple-choice', options: ['20 sq cm', '40 sq cm', '200 sq cm', '400 sq cm'], correctAnswer: '400 sq cm', hint: 'Square the scale factor.', explanation: '20² = 400 sq cm.', standardCode: '7.G.1' },
        { index: 3, question: 'On a drawing, a hallway is 8 cm long. The scale is 1 cm : 2.5 m. What is the actual length?', type: 'short-answer', correctAnswer: '20 m', hint: 'Multiply 8 by 2.5.', explanation: '8 × 2.5 = 20 m.', standardCode: '7.G.1' },
        { index: 4, question: 'A model car is built at a 1:24 scale. The model is 7.5 inches long. How long is the actual car in inches?', type: 'short-answer', correctAnswer: '180', hint: 'Multiply the model length by 24.', explanation: '7.5 × 24 = 180 inches.', standardCode: '7.RP.1' },
      ],
      assessment: {
        questions: [
          { question: 'A map scale is 1 in : 50 mi. Two towns are 3.2 inches apart. What is the actual distance?', type: 'short-answer', correctAnswer: '160 mi', standardCode: '7.G.1' },
          { question: 'A scale drawing uses 1 cm : 4 m. A garden is 12 m wide. How wide is it on the drawing?', type: 'short-answer', correctAnswer: '3 cm', standardCode: '7.G.1' },
          { question: 'If a scale factor is 1:50, how many actual square meters does 1 sq cm on the drawing represent?', type: 'multiple-choice', options: ['50', '100', '2,500', '250'], correctAnswer: '2,500', standardCode: '7.G.1' },
        ],
      },
    },
  },

  {
    slug: 'grade7-math-constant-of-proportionality',
    title: 'Constant of Proportionality',
    description: 'Identify and interpret the constant of proportionality (unit rate) from tables, graphs, equations, and verbal descriptions',
    subject: 'math',
    grade: 7,
    gradeBand: '6-8',
    topicCluster: 'Ratios & Proportional Relationships',
    standardCodes: ['7.RP.2b', '7.RP.2c', '7.RP.2d'],
    content: {
      intro: {
        title: 'Constant of Proportionality',
        text: 'The constant of proportionality is the glue that holds a proportional relationship together. Whether you read it from a table, spot it on a graph, or pull it from an equation, it always tells you the same thing: how much of one quantity you get for each unit of the other. In this module you will practice finding and interpreting this key value across multiple representations.',
      },
      segments: [
        {
          index: 0,
          title: 'Finding the Constant from a Table',
          text: 'Given a table of x- and y-values, compute y ÷ x for any row. If the relationship is proportional, every row gives the same quotient — that quotient is k, the constant of proportionality. For a table showing gallons of gas and miles traveled (2, 56), (5, 140), (8, 224), each ratio is 28. So k = 28 miles per gallon.',
          keyVocabulary: ['constant of proportionality', 'unit rate', 'quotient'],
          example: '(3, 12), (5, 20), (10, 40) → k = 12/3 = 4.',
        },
        {
          index: 1,
          title: 'Finding the Constant from a Graph',
          text: 'On a graph of a proportional relationship, choose any point (x, y) other than the origin and compute y/x. The result is k. You can also read k directly from the point (1, k) if it is visible. The steeper the line, the greater the constant. A line through (0, 0) and (1, 7) has k = 7.',
          keyVocabulary: ['slope', 'steepness', 'coordinate'],
          example: 'Point (4, 10) on the line → k = 10/4 = 2.5.',
        },
        {
          index: 2,
          title: 'Finding the Constant from an Equation or Description',
          text: 'In y = kx, the number multiplied by x is k. In a verbal description, look for phrases like "per," "each," or "for every." "A printer produces 30 pages per minute" means k = 30. Converting the description to an equation gives p = 30t, where p is pages and t is minutes.',
          keyVocabulary: ['per', 'for every', 'rate', 'equation'],
          example: '"$4.50 for every pound" → k = 4.50, equation: c = 4.50w.',
        },
      ],
      practice: [
        { index: 0, question: 'In the equation y = 6x, what is the constant of proportionality?', type: 'short-answer', correctAnswer: '6', hint: 'The constant is the number multiplying x.', explanation: 'In y = kx, k = 6.', standardCode: '7.RP.2b' },
        { index: 1, question: 'A table shows (2, 9), (4, 18), (6, 27). What is k?', type: 'short-answer', correctAnswer: '4.5', hint: 'Divide any y-value by its x-value.', explanation: '9 ÷ 2 = 4.5; 18 ÷ 4 = 4.5; 27 ÷ 6 = 4.5.', standardCode: '7.RP.2b' },
        { index: 2, question: 'A graph passes through (0, 0) and (5, 35). What is the constant of proportionality?', type: 'short-answer', correctAnswer: '7', hint: 'Divide y by x.', explanation: '35 ÷ 5 = 7.', standardCode: '7.RP.2c' },
        { index: 3, question: '"A hose fills 8 gallons per minute." What is k?', type: 'short-answer', correctAnswer: '8', hint: 'The rate after "per" tells you k.', explanation: '8 gallons per minute means k = 8.', standardCode: '7.RP.2d' },
        { index: 4, question: 'Which equation has the greatest constant of proportionality?', type: 'multiple-choice', options: ['y = 3x', 'y = 5x', 'y = 2.5x', 'y = 4x'], correctAnswer: 'y = 5x', hint: 'Compare the numbers multiplying x.', explanation: 'k values are 3, 5, 2.5, and 4. The greatest is 5.', standardCode: '7.RP.2b' },
      ],
      assessment: {
        questions: [
          { question: 'A table shows (3, 21), (7, 49). What is the constant of proportionality?', type: 'short-answer', correctAnswer: '7', standardCode: '7.RP.2b' },
          { question: 'A line passes through (0, 0) and (4, 22). What is k?', type: 'short-answer', correctAnswer: '5.5', standardCode: '7.RP.2c' },
          { question: 'Which description matches y = 12x?', type: 'multiple-choice', options: ['12 items for $1 each', '1 item every 12 seconds', '12 miles per hour', '12 more than x'], correctAnswer: '12 miles per hour', standardCode: '7.RP.2d' },
        ],
      },
    },
  },

  // ─── The Number System (4 modules) ───

  {
    slug: 'grade7-math-operations-rational-numbers',
    title: 'Operations with Rational Numbers',
    description: 'Add, subtract, multiply, and divide positive and negative rational numbers',
    subject: 'math',
    grade: 7,
    gradeBand: '6-8',
    topicCluster: 'The Number System',
    standardCodes: ['7.NS.1', '7.NS.2'],
    content: {
      intro: {
        title: 'Operations with Rational Numbers',
        text: 'Temperatures drop below zero, bank accounts get overdrawn, and elevations go below sea level. Negative numbers are part of everyday life, and knowing how to add, subtract, multiply, and divide them is essential. In this module you will master all four operations with positive and negative rational numbers.',
      },
      segments: [
        {
          index: 0,
          title: 'Adding Rational Numbers',
          text: 'When both numbers have the same sign, add their absolute values and keep the sign. For example, −3 + (−5) = −8. When the signs differ, subtract the smaller absolute value from the larger and take the sign of the number with the greater absolute value. For example, −7 + 4 = −3 because 7 > 4 and the negative number is farther from zero.',
          keyVocabulary: ['rational number', 'absolute value', 'additive inverse', 'sign'],
          example: '−2.5 + 6.1 = 3.6 (subtract 2.5 from 6.1; positive wins).',
        },
        {
          index: 1,
          title: 'Subtracting Rational Numbers',
          text: 'Subtracting a number is the same as adding its opposite. Rewrite a − b as a + (−b). Then use the addition rules. For instance, 3 − 8 = 3 + (−8) = −5. And −4 − (−9) = −4 + 9 = 5. This one rule converts every subtraction problem into an addition problem you already know how to solve.',
          keyVocabulary: ['opposite', 'additive inverse', 'rewrite'],
          example: '−6 − (−2) = −6 + 2 = −4.',
        },
        {
          index: 2,
          title: 'Multiplying and Dividing Rational Numbers',
          text: 'The sign rules for multiplication and division are the same: same signs give a positive result; different signs give a negative result. So (−3)(−4) = 12, but (−3)(4) = −12. For division, −20 ÷ 5 = −4, and −20 ÷ (−5) = 4. Multiply or divide the absolute values first, then determine the sign.',
          keyVocabulary: ['product', 'quotient', 'sign rules'],
          example: '(−1/2) × (−3/4) = 3/8 (same signs → positive).',
        },
      ],
      practice: [
        { index: 0, question: 'What is −8 + 3?', type: 'short-answer', correctAnswer: '-5', hint: 'Subtract 3 from 8, then keep the sign of the number with the greater absolute value.', explanation: '|−8| − |3| = 5; the negative number has the greater absolute value, so the answer is −5.', standardCode: '7.NS.1' },
        { index: 1, question: 'What is 5 − (−4)?', type: 'short-answer', correctAnswer: '9', hint: 'Subtracting a negative is the same as adding.', explanation: '5 − (−4) = 5 + 4 = 9.', standardCode: '7.NS.1' },
        { index: 2, question: 'What is (−6)(−7)?', type: 'short-answer', correctAnswer: '42', hint: 'Same signs give a positive product.', explanation: '6 × 7 = 42; both negative → positive.', standardCode: '7.NS.2' },
        { index: 3, question: 'What is −24 ÷ 8?', type: 'short-answer', correctAnswer: '-3', hint: 'Different signs give a negative quotient.', explanation: '24 ÷ 8 = 3; one negative → −3.', standardCode: '7.NS.2' },
        { index: 4, question: 'What is −1/3 + 5/6?', type: 'short-answer', correctAnswer: '1/2', hint: 'Find a common denominator first.', explanation: '−1/3 = −2/6. Then −2/6 + 5/6 = 3/6 = 1/2.', standardCode: '7.NS.1' },
      ],
      assessment: {
        questions: [
          { question: 'What is −15 + (−7)?', type: 'short-answer', correctAnswer: '-22', standardCode: '7.NS.1' },
          { question: 'What is (−3)(8)?', type: 'short-answer', correctAnswer: '-24', standardCode: '7.NS.2' },
          { question: 'What is 4 − 11?', type: 'multiple-choice', options: ['7', '-7', '15', '-15'], correctAnswer: '-7', standardCode: '7.NS.1' },
        ],
      },
    },
  },

  {
    slug: 'grade7-math-converting-fractions-decimals',
    title: 'Converting Fractions and Decimals',
    description: 'Convert between fractions, decimals, and percents, including repeating decimals',
    subject: 'math',
    grade: 7,
    gradeBand: '6-8',
    topicCluster: 'The Number System',
    standardCodes: ['7.NS.2d'],
    content: {
      intro: {
        title: 'Converting Fractions and Decimals',
        text: 'Fractions, decimals, and percents are three ways to write the same value. A store might show 1/4 off, 0.25 off, or 25% off — they all mean the same discount. Being able to move fluently among these forms helps you compare values quickly and solve problems in whichever form is easiest.',
      },
      segments: [
        {
          index: 0,
          title: 'Fractions to Decimals',
          text: 'Divide the numerator by the denominator. 3/8 = 3 ÷ 8 = 0.375. Some fractions produce terminating decimals (they end), while others produce repeating decimals. 1/3 = 0.333… which is written as 0.3̄. A fraction in lowest terms terminates only when the denominator has no prime factors other than 2 and 5.',
          keyVocabulary: ['terminating decimal', 'repeating decimal', 'long division'],
          example: '5/6 = 0.8333… = 0.83̄.',
        },
        {
          index: 1,
          title: 'Decimals to Fractions',
          text: 'For a terminating decimal, write it over the appropriate power of 10 and simplify. 0.75 = 75/100 = 3/4. For a repeating decimal, use algebra: let x = 0.333…, then 10x = 3.333…, subtract to get 9x = 3, so x = 3/9 = 1/3. This technique works for any repeating decimal.',
          keyVocabulary: ['power of ten', 'simplify', 'algebra'],
          example: '0.6̄: let x = 0.666…, 10x = 6.666…, 9x = 6, x = 6/9 = 2/3.',
        },
        {
          index: 2,
          title: 'Connecting to Percents',
          text: 'To convert a decimal to a percent, multiply by 100 (move the decimal point two places right). 0.45 = 45%. To convert a percent to a decimal, divide by 100. 7% = 0.07. To go from a fraction to a percent, first convert to a decimal, then multiply by 100. 3/5 = 0.6 = 60%.',
          keyVocabulary: ['percent', 'decimal point', 'convert'],
          example: '1/8 = 0.125 = 12.5%.',
        },
      ],
      practice: [
        { index: 0, question: 'Convert 5/8 to a decimal.', type: 'short-answer', correctAnswer: '0.625', hint: 'Divide 5 by 8.', explanation: '5 ÷ 8 = 0.625.', standardCode: '7.NS.2d' },
        { index: 1, question: 'Convert 0.36 to a fraction in simplest form.', type: 'short-answer', correctAnswer: '9/25', hint: 'Write 36/100 and simplify.', explanation: '36/100 = 9/25 (divide both by 4).', standardCode: '7.NS.2d' },
        { index: 2, question: 'What is 2/3 as a repeating decimal?', type: 'multiple-choice', options: ['0.67', '0.666', '0.6̄', '0.66'], correctAnswer: '0.6̄', hint: '2 ÷ 3 never terminates.', explanation: '2 ÷ 3 = 0.6666… = 0.6̄.', standardCode: '7.NS.2d' },
        { index: 3, question: 'Convert 0.4 to a percent.', type: 'short-answer', correctAnswer: '40%', hint: 'Multiply by 100.', explanation: '0.4 × 100 = 40%.', standardCode: '7.NS.2d' },
        { index: 4, question: 'Convert 3/20 to a percent.', type: 'short-answer', correctAnswer: '15%', hint: 'First convert to a decimal.', explanation: '3 ÷ 20 = 0.15 = 15%.', standardCode: '7.NS.2d' },
      ],
      assessment: {
        questions: [
          { question: 'Convert 7/8 to a decimal.', type: 'short-answer', correctAnswer: '0.875', standardCode: '7.NS.2d' },
          { question: 'What fraction in simplest form equals 0.32?', type: 'short-answer', correctAnswer: '8/25', standardCode: '7.NS.2d' },
          { question: 'Which decimal is equivalent to 5/6?', type: 'multiple-choice', options: ['0.83', '0.83̄', '0.85', '0.8̄'], correctAnswer: '0.83̄', standardCode: '7.NS.2d' },
        ],
      },
    },
  },

  {
    slug: 'grade7-math-absolute-value',
    title: 'Absolute Value',
    description: 'Understand absolute value as distance from zero and apply it to real-world and mathematical contexts',
    subject: 'math',
    grade: 7,
    gradeBand: '6-8',
    topicCluster: 'The Number System',
    standardCodes: ['7.NS.1a', '7.NS.1b'],
    content: {
      intro: {
        title: 'Absolute Value',
        text: 'How far is −5 from zero? How far is 5 from zero? Both are exactly 5 units away. Absolute value strips away the sign and tells you only the distance. This idea is surprisingly useful — it helps you find differences, measure errors, and understand how addition of opposites works.',
      },
      segments: [
        {
          index: 0,
          title: 'Definition of Absolute Value',
          text: 'The absolute value of a number is its distance from 0 on the number line. It is always zero or positive. We write it with vertical bars: |−7| = 7 and |7| = 7. Zero is the only number whose absolute value is itself and zero at the same time: |0| = 0. Think of absolute value as answering the question "how far?" without caring about direction.',
          keyVocabulary: ['absolute value', 'distance', 'number line', 'positive'],
          example: '|−12| = 12, |3.5| = 3.5, |0| = 0.',
        },
        {
          index: 1,
          title: 'Absolute Value and Opposites',
          text: 'Two numbers that are the same distance from zero but on opposite sides are called opposites. Their absolute values are equal: |a| = |−a|. When you add opposites, the result is zero: 5 + (−5) = 0. This is the additive inverse property. Absolute value helps you see why opposites cancel — they contribute equal distances in opposite directions.',
          keyVocabulary: ['opposites', 'additive inverse', 'cancel', 'zero pair'],
          example: '−8 and 8 are opposites. |−8| = |8| = 8. Sum: −8 + 8 = 0.',
        },
        {
          index: 2,
          title: 'Applying Absolute Value',
          text: 'Absolute value shows up whenever you need distance regardless of direction. The difference between two temperatures −3°F and 10°F is |10 − (−3)| = 13 degrees. Percent error uses absolute value to ensure the result is positive. When solving |x| = 4, there are two solutions: x = 4 and x = −4, because both are 4 units from zero.',
          keyVocabulary: ['distance between points', 'temperature difference', 'equation with absolute value'],
          example: 'Distance between −6 and 2 on a number line: |−6 − 2| = |−8| = 8 units.',
        },
      ],
      practice: [
        { index: 0, question: 'What is |−15|?', type: 'short-answer', correctAnswer: '15', hint: 'Absolute value is the distance from zero.', explanation: '−15 is 15 units from zero, so |−15| = 15.', standardCode: '7.NS.1a' },
        { index: 1, question: 'What is |−4| + |3|?', type: 'short-answer', correctAnswer: '7', hint: 'Find each absolute value first, then add.', explanation: '|−4| = 4 and |3| = 3. 4 + 3 = 7.', standardCode: '7.NS.1a' },
        { index: 2, question: 'What is the distance between −5 and 8 on a number line?', type: 'short-answer', correctAnswer: '13', hint: 'Subtract and take the absolute value.', explanation: '|−5 − 8| = |−13| = 13.', standardCode: '7.NS.1b' },
        { index: 3, question: 'If |x| = 9, what are the possible values of x?', type: 'multiple-choice', options: ['9 only', '-9 only', '9 and -9', '0'], correctAnswer: '9 and -9', hint: 'Two numbers are 9 units from zero.', explanation: 'Both 9 and −9 are 9 units from zero.', standardCode: '7.NS.1b' },
        { index: 4, question: 'True or false: |a| is always greater than a.', type: 'multiple-choice', options: ['True', 'False'], correctAnswer: 'False', hint: 'Consider what happens when a is positive or zero.', explanation: 'When a ≥ 0, |a| = a, not greater than a. So the statement is false.', standardCode: '7.NS.1a' },
      ],
      assessment: {
        questions: [
          { question: 'What is |−22| − |10|?', type: 'short-answer', correctAnswer: '12', standardCode: '7.NS.1a' },
          { question: 'What is the distance between −3 and −11 on a number line?', type: 'short-answer', correctAnswer: '8', standardCode: '7.NS.1b' },
          { question: 'Which has the greatest absolute value?', type: 'multiple-choice', options: ['-18', '15', '0', '-10'], correctAnswer: '-18', standardCode: '7.NS.1a' },
        ],
      },
    },
  },

  {
    slug: 'grade7-math-number-line',
    title: 'The Number Line',
    description: 'Plot and compare rational numbers on a number line, including fractions, decimals, and negative values',
    subject: 'math',
    grade: 7,
    gradeBand: '6-8',
    topicCluster: 'The Number System',
    standardCodes: ['7.NS.1a', '7.NS.1b', '7.NS.1c'],
    content: {
      intro: {
        title: 'The Number Line',
        text: 'The number line stretches infinitely in both directions, with zero in the center, positive numbers to the right, and negative numbers to the left. It is the ultimate tool for visualizing rational numbers, comparing their values, and understanding addition and subtraction as movement. In this module you will sharpen your number line skills with all kinds of rational numbers.',
      },
      segments: [
        {
          index: 0,
          title: 'Plotting Rational Numbers',
          text: 'To plot a rational number, decide if it is positive (right of zero) or negative (left of zero), then find the correct position between two integers. For −2.75, start at −2 and move 0.75 units to the left (toward −3). For 3/4, start at 0 and move three-fourths of the way to 1. Converting to a decimal can help you place fractions more precisely.',
          keyVocabulary: ['plot', 'rational number', 'integer', 'position'],
          example: 'Plot −1 1/2: it is halfway between −1 and −2.',
        },
        {
          index: 1,
          title: 'Comparing and Ordering Rational Numbers',
          text: 'On a number line, numbers increase as you move right. So any number to the right is greater. −3 < −1 because −1 is to the right of −3. To compare fractions and decimals, convert to the same form. For example, is −2/5 or −0.35 smaller? −2/5 = −0.4, which is left of −0.35, so −2/5 < −0.35.',
          keyVocabulary: ['compare', 'order', 'greater than', 'less than'],
          example: 'Order: −1.5, 0.3, −0.8, 1 → −1.5 < −0.8 < 0.3 < 1.',
        },
        {
          index: 2,
          title: 'Addition and Subtraction on the Number Line',
          text: 'Adding a positive number means moving right; adding a negative number means moving left. Start at the first number, then move. For −2 + 5, start at −2 and move 5 units right to land on 3. For 1 − 4, start at 1 and move 4 units left to land on −3. The number line makes the direction of each operation visible.',
          keyVocabulary: ['movement', 'direction', 'positive direction', 'negative direction'],
          example: '−3 + 7: start at −3, move 7 right → land on 4.',
        },
      ],
      practice: [
        { index: 0, question: 'Which is greater, −4 or −1?', type: 'multiple-choice', options: ['-4', '-1', 'They are equal'], correctAnswer: '-1', hint: 'Which is farther right on the number line?', explanation: '−1 is to the right of −4, so −1 > −4.', standardCode: '7.NS.1a' },
        { index: 1, question: 'Plot −3/4 on a number line. Between which two integers does it fall?', type: 'multiple-choice', options: ['-2 and -1', '-1 and 0', '0 and 1', '1 and 2'], correctAnswer: '-1 and 0', hint: '−3/4 = −0.75.', explanation: '−0.75 is between −1 and 0.', standardCode: '7.NS.1a' },
        { index: 2, question: 'Order from least to greatest: 0.5, −2, −0.5, 3.', type: 'short-answer', correctAnswer: '-2, -0.5, 0.5, 3', hint: 'Negative numbers are less than positive numbers.', explanation: '−2 < −0.5 < 0.5 < 3.', standardCode: '7.NS.1a' },
        { index: 3, question: 'Use a number line: −5 + 8 = ?', type: 'short-answer', correctAnswer: '3', hint: 'Start at −5 and move 8 units right.', explanation: 'Starting at −5 and moving 8 to the right lands on 3.', standardCode: '7.NS.1b' },
        { index: 4, question: 'Use a number line: 2 − 6 = ?', type: 'short-answer', correctAnswer: '-4', hint: 'Start at 2 and move 6 units left.', explanation: 'Starting at 2 and moving 6 to the left lands on −4.', standardCode: '7.NS.1c' },
      ],
      assessment: {
        questions: [
          { question: 'Which is least: −3.2, −3.5, −2.9, or −3?', type: 'multiple-choice', options: ['-3.2', '-3.5', '-2.9', '-3'], correctAnswer: '-3.5', standardCode: '7.NS.1a' },
          { question: 'What is −7 + 10?', type: 'short-answer', correctAnswer: '3', standardCode: '7.NS.1b' },
          { question: 'Between which two integers is −5/3 located?', type: 'multiple-choice', options: ['-3 and -2', '-2 and -1', '-1 and 0', '0 and 1'], correctAnswer: '-2 and -1', standardCode: '7.NS.1a' },
        ],
      },
    },
  },

  // ─── Expressions & Equations (4 modules) ───

  {
    slug: 'grade7-math-linear-expressions',
    title: 'Linear Expressions',
    description: 'Write, simplify, and factor linear expressions using properties of operations',
    subject: 'math',
    grade: 7,
    gradeBand: '6-8',
    topicCluster: 'Expressions & Equations',
    standardCodes: ['7.EE.1', '7.EE.2'],
    content: {
      intro: {
        title: 'Linear Expressions',
        text: 'Expressions are the building blocks of equations. Before you can solve a problem, you need to write it in mathematical language and simplify it. In this module you will learn to create, rewrite, and interpret linear expressions — expressions whose variables have an exponent of 1.',
      },
      segments: [
        {
          index: 0,
          title: 'Parts of a Linear Expression',
          text: 'A linear expression is made of terms. Each term has a coefficient (the number part) and possibly a variable. In 3x + 7, the term 3x has coefficient 3 and variable x; the term 7 is a constant. Terms separated by + or − signs are called the terms of the expression. Understanding these parts helps you manipulate expressions correctly.',
          keyVocabulary: ['term', 'coefficient', 'variable', 'constant'],
          example: 'In 5y − 2 + 4y, the terms are 5y, −2, and 4y.',
        },
        {
          index: 1,
          title: 'Simplifying by Combining Like Terms',
          text: 'Like terms have the same variable raised to the same power. You can combine them by adding or subtracting their coefficients. 3x + 5x = 8x. Constants are also like terms: 4 + 9 = 13. Mix of both: 2x + 3 + 5x − 1 = 7x + 2. Unlike terms (such as 3x and 4y) cannot be combined.',
          keyVocabulary: ['like terms', 'combine', 'simplify'],
          example: '6a − 2a + 10 = 4a + 10.',
        },
        {
          index: 2,
          title: 'Distributive Property',
          text: 'The distributive property lets you remove parentheses: a(b + c) = ab + ac. For example, 3(2x + 5) = 6x + 15. You can also distribute negatives: −2(x − 4) = −2x + 8. After distributing, combine any like terms to finish simplifying.',
          keyVocabulary: ['distributive property', 'expand', 'parentheses'],
          example: '4(x + 3) − 2x = 4x + 12 − 2x = 2x + 12.',
        },
        {
          index: 3,
          title: 'Factoring Linear Expressions',
          text: 'Factoring is the reverse of distributing. Find the greatest common factor (GCF) of all terms and write the expression as a product. For 12x + 8, the GCF is 4, so 12x + 8 = 4(3x + 2). Factoring helps you see structure and can simplify further work in equations.',
          keyVocabulary: ['factor', 'greatest common factor', 'product'],
          example: '15y − 10 = 5(3y − 2).',
        },
      ],
      practice: [
        { index: 0, question: 'Simplify: 4x + 7 + 2x − 3.', type: 'short-answer', correctAnswer: '6x + 4', hint: 'Combine the x-terms and the constants separately.', explanation: '4x + 2x = 6x; 7 − 3 = 4. Answer: 6x + 4.', standardCode: '7.EE.1' },
        { index: 1, question: 'Expand: 5(2x − 3).', type: 'short-answer', correctAnswer: '10x - 15', hint: 'Multiply 5 by each term inside the parentheses.', explanation: '5 × 2x = 10x; 5 × (−3) = −15. Answer: 10x − 15.', standardCode: '7.EE.1' },
        { index: 2, question: 'Factor: 8x + 12.', type: 'short-answer', correctAnswer: '4(2x + 3)', hint: 'Find the GCF of 8 and 12.', explanation: 'GCF = 4. 8x ÷ 4 = 2x; 12 ÷ 4 = 3. Answer: 4(2x + 3).', standardCode: '7.EE.2' },
        { index: 3, question: 'Simplify: 3(x + 4) + 2x.', type: 'short-answer', correctAnswer: '5x + 12', hint: 'Distribute first, then combine like terms.', explanation: '3x + 12 + 2x = 5x + 12.', standardCode: '7.EE.1' },
        { index: 4, question: 'What is the coefficient of y in 9 − 7y + 3?', type: 'multiple-choice', options: ['9', '-7', '7', '3'], correctAnswer: '-7', hint: 'The coefficient is the number multiplying the variable.', explanation: 'The term with y is −7y, so the coefficient is −7.', standardCode: '7.EE.1' },
      ],
      assessment: {
        questions: [
          { question: 'Simplify: −2(3x − 1) + 4x.', type: 'short-answer', correctAnswer: '-2x + 2', standardCode: '7.EE.1' },
          { question: 'Factor: 6x − 9.', type: 'short-answer', correctAnswer: '3(2x - 3)', standardCode: '7.EE.2' },
          { question: 'Which expression is equivalent to 2(x + 5) + 3(x − 1)?', type: 'multiple-choice', options: ['5x + 7', '5x + 13', '5x + 4', '6x + 7'], correctAnswer: '5x + 7', standardCode: '7.EE.1' },
        ],
      },
    },
  },

  {
    slug: 'grade7-math-two-step-equations',
    title: 'Two-Step Equations',
    description: 'Solve equations of the form px + q = r and p(x + q) = r using inverse operations',
    subject: 'math',
    grade: 7,
    gradeBand: '6-8',
    topicCluster: 'Expressions & Equations',
    standardCodes: ['7.EE.4', '7.EE.4a'],
    content: {
      intro: {
        title: 'Two-Step Equations',
        text: 'A two-step equation requires exactly two inverse operations to isolate the variable. These equations pop up everywhere — figuring out how many items you can buy with a budget, calculating distances, or determining unknown measurements. In this module you will learn a reliable method for solving them every time.',
      },
      segments: [
        {
          index: 0,
          title: 'Undoing Addition and Subtraction First',
          text: 'The general strategy is to undo operations in reverse order. For px + q = r, first undo the addition or subtraction (the q), then undo the multiplication or division (the p). For 3x + 5 = 20, subtract 5 from both sides to get 3x = 15, then divide both sides by 3 to get x = 5. Always perform the same operation on both sides to keep the equation balanced.',
          keyVocabulary: ['inverse operation', 'isolate', 'balance', 'solve'],
          example: '2x − 7 = 9 → 2x = 16 → x = 8.',
        },
        {
          index: 1,
          title: 'Equations with Parentheses',
          text: 'Some equations look like p(x + q) = r. You have two choices: distribute first, or divide both sides by p first. For 4(x + 2) = 28, dividing both sides by 4 gives x + 2 = 7, then x = 5. Or distribute: 4x + 8 = 28, then 4x = 20, then x = 5. Both approaches give the same answer.',
          keyVocabulary: ['distribute', 'parentheses', 'divide first'],
          example: '3(x − 1) = 12 → x − 1 = 4 → x = 5.',
        },
        {
          index: 2,
          title: 'Checking Your Solution',
          text: 'After finding x, substitute it back into the original equation to verify. If both sides are equal, your solution is correct. For 3x + 5 = 20 with x = 5: 3(5) + 5 = 15 + 5 = 20. It checks out. Making this a habit prevents careless errors and builds confidence.',
          keyVocabulary: ['substitute', 'verify', 'check'],
          example: 'Solve 2x + 1 = 9 → x = 4. Check: 2(4) + 1 = 9 ✓.',
        },
      ],
      practice: [
        { index: 0, question: 'Solve: 5x + 3 = 28.', type: 'short-answer', correctAnswer: '5', hint: 'Subtract 3, then divide by 5.', explanation: '5x = 25, x = 5.', standardCode: '7.EE.4a' },
        { index: 1, question: 'Solve: x/4 − 2 = 3.', type: 'short-answer', correctAnswer: '20', hint: 'Add 2, then multiply by 4.', explanation: 'x/4 = 5, x = 20.', standardCode: '7.EE.4a' },
        { index: 2, question: 'Solve: 2(x + 6) = 22.', type: 'short-answer', correctAnswer: '5', hint: 'Divide both sides by 2 first.', explanation: 'x + 6 = 11, x = 5.', standardCode: '7.EE.4a' },
        { index: 3, question: 'Solve: −3x + 10 = 1.', type: 'short-answer', correctAnswer: '3', hint: 'Subtract 10, then divide by −3.', explanation: '−3x = −9, x = 3.', standardCode: '7.EE.4a' },
        { index: 4, question: 'A gym charges $15 per month plus a $30 sign-up fee. You have spent $105. How many months have you been a member?', type: 'multiple-choice', options: ['3', '5', '7', '10'], correctAnswer: '5', hint: 'Set up: 15m + 30 = 105.', explanation: '15m = 75, m = 5 months.', standardCode: '7.EE.4' },
      ],
      assessment: {
        questions: [
          { question: 'Solve: 7x − 4 = 24.', type: 'short-answer', correctAnswer: '4', standardCode: '7.EE.4a' },
          { question: 'Solve: 3(x − 5) = 18.', type: 'short-answer', correctAnswer: '11', standardCode: '7.EE.4a' },
          { question: 'Which equation has the solution x = 6?', type: 'multiple-choice', options: ['2x + 3 = 9', '4x − 1 = 23', '3x + 2 = 16', 'x/2 + 5 = 8'], correctAnswer: '4x − 1 = 23', standardCode: '7.EE.4a' },
        ],
      },
    },
  },

  {
    slug: 'grade7-math-inequalities',
    title: 'Inequalities',
    description: 'Write, solve, and graph one- and two-step inequalities on a number line',
    subject: 'math',
    grade: 7,
    gradeBand: '6-8',
    topicCluster: 'Expressions & Equations',
    standardCodes: ['7.EE.4b'],
    content: {
      intro: {
        title: 'Inequalities',
        text: 'Not every math problem has a single answer. When you have a budget and want to know how many items you can afford, the answer is a range — "5 or fewer." Inequalities describe these situations. In this module you will learn to write, solve, and graph inequalities.',
      },
      segments: [
        {
          index: 0,
          title: 'Writing Inequalities',
          text: 'An inequality uses the symbols < (less than), > (greater than), ≤ (less than or equal to), or ≥ (greater than or equal to). "You must be at least 48 inches tall" translates to h ≥ 48. "The temperature stayed below 32°F" becomes t < 32. Key words like "at least," "no more than," "fewer than," and "at most" signal which symbol to use.',
          keyVocabulary: ['inequality', 'less than', 'greater than', 'at least', 'at most'],
          example: '"No more than 10 students" → s ≤ 10.',
        },
        {
          index: 1,
          title: 'Solving Inequalities',
          text: 'Solve inequalities using the same inverse operations as equations, with one critical rule: if you multiply or divide both sides by a negative number, flip the inequality sign. For −2x > 8, divide by −2 and flip: x < −4. For 3x + 1 ≤ 10, subtract 1 to get 3x ≤ 9, then divide by 3 to get x ≤ 3. No flip needed because 3 is positive.',
          keyVocabulary: ['inverse operation', 'flip', 'negative multiplier'],
          example: '−4x ≥ 20 → x ≤ −5 (divided by −4, flipped the sign).',
        },
        {
          index: 2,
          title: 'Graphing Inequalities on a Number Line',
          text: 'To graph an inequality, draw a number line, place a circle at the boundary value, and shade the direction of the solutions. Use an open circle for < or > (the boundary is not included) and a closed circle for ≤ or ≥ (the boundary is included). For x > 3, open circle at 3 and shade right. For x ≤ −1, closed circle at −1 and shade left.',
          keyVocabulary: ['open circle', 'closed circle', 'shade', 'boundary'],
          example: 'x ≥ 2: closed circle at 2, shade to the right.',
        },
      ],
      practice: [
        { index: 0, question: 'Solve: x + 5 > 12.', type: 'short-answer', correctAnswer: 'x > 7', hint: 'Subtract 5 from both sides.', explanation: 'x > 12 − 5 = 7.', standardCode: '7.EE.4b' },
        { index: 1, question: 'Solve: 2x − 3 ≤ 11.', type: 'short-answer', correctAnswer: 'x ≤ 7', hint: 'Add 3, then divide by 2.', explanation: '2x ≤ 14, x ≤ 7.', standardCode: '7.EE.4b' },
        { index: 2, question: 'Solve: −5x < 30.', type: 'short-answer', correctAnswer: 'x > -6', hint: 'Divide by −5 and remember to flip the sign.', explanation: 'x > −6 (flip because dividing by a negative).', standardCode: '7.EE.4b' },
        { index: 3, question: 'How should x < 4 be graphed?', type: 'multiple-choice', options: ['Open circle at 4, shade left', 'Closed circle at 4, shade left', 'Open circle at 4, shade right', 'Closed circle at 4, shade right'], correctAnswer: 'Open circle at 4, shade left', hint: 'The < symbol does not include 4.', explanation: 'Less than uses an open circle; solutions are to the left.', standardCode: '7.EE.4b' },
        { index: 4, question: 'Write an inequality: "A bag can hold at most 50 pounds."', type: 'short-answer', correctAnswer: 'w ≤ 50', hint: '"At most" means less than or equal to.', explanation: 'At most 50 → w ≤ 50.', standardCode: '7.EE.4b' },
      ],
      assessment: {
        questions: [
          { question: 'Solve: 4x + 2 > 18.', type: 'short-answer', correctAnswer: 'x > 4', standardCode: '7.EE.4b' },
          { question: 'Solve: −3x ≥ 9.', type: 'short-answer', correctAnswer: 'x ≤ -3', standardCode: '7.EE.4b' },
          { question: 'Which graph represents x ≥ −2?', type: 'multiple-choice', options: ['Open circle at -2, shade right', 'Closed circle at -2, shade right', 'Open circle at -2, shade left', 'Closed circle at -2, shade left'], correctAnswer: 'Closed circle at -2, shade right', standardCode: '7.EE.4b' },
        ],
      },
    },
  },

  {
    slug: 'grade7-math-combining-like-terms',
    title: 'Combining Like Terms',
    description: 'Identify like terms and simplify expressions by combining them efficiently',
    subject: 'math',
    grade: 7,
    gradeBand: '6-8',
    topicCluster: 'Expressions & Equations',
    standardCodes: ['7.EE.1'],
    content: {
      intro: {
        title: 'Combining Like Terms',
        text: 'Imagine counting fruit: 3 apples and 5 apples is 8 apples, but 3 apples and 5 oranges stays 3 apples and 5 oranges. Combining like terms in algebra works the same way — you can only add or subtract terms that have the exact same variable part. This module gives you focused practice on this essential skill.',
      },
      segments: [
        {
          index: 0,
          title: 'Identifying Like Terms',
          text: 'Like terms have identical variable parts — the same variable(s) raised to the same power(s). 4x and −2x are like terms. 3y² and 7y² are like terms. But 5x and 5y are NOT like terms, and 2x and 2x² are NOT like terms because the exponents differ. Constants (plain numbers with no variable) are always like terms with each other.',
          keyVocabulary: ['like terms', 'variable part', 'exponent', 'constant'],
          example: 'In 3a + 2b − a + 5b, the like-term pairs are (3a, −a) and (2b, 5b).',
        },
        {
          index: 1,
          title: 'Combining Like Terms',
          text: 'To combine like terms, add or subtract their coefficients and keep the variable part unchanged. 7x + 3x = 10x. −4y + 9y = 5y. 6 − 2 + 1 = 5. When an expression has many terms, it helps to rearrange by grouping like terms together first, then combining each group.',
          keyVocabulary: ['combine', 'coefficient', 'rearrange', 'group'],
          example: '2x + 3y − x + 5y = (2x − x) + (3y + 5y) = x + 8y.',
        },
        {
          index: 2,
          title: 'Combining After Distributing',
          text: 'Often you need to distribute before you can see all the like terms. For 3(2x + 1) + 4x, first distribute: 6x + 3 + 4x. Now combine: 10x + 3. Distributing a negative changes signs inside: −2(x − 5) = −2x + 10. Always distribute first, then scan for like terms.',
          keyVocabulary: ['distribute', 'expand', 'negative distribution'],
          example: '5(x − 2) + 3(x + 4) = 5x − 10 + 3x + 12 = 8x + 2.',
        },
      ],
      practice: [
        { index: 0, question: 'Simplify: 9x − 4x.', type: 'short-answer', correctAnswer: '5x', hint: 'Subtract the coefficients.', explanation: '9 − 4 = 5, so 9x − 4x = 5x.', standardCode: '7.EE.1' },
        { index: 1, question: 'Simplify: 3a + 7 + 2a − 3.', type: 'short-answer', correctAnswer: '5a + 4', hint: 'Group the a-terms and the constants.', explanation: '3a + 2a = 5a; 7 − 3 = 4. Answer: 5a + 4.', standardCode: '7.EE.1' },
        { index: 2, question: 'Simplify: 2(x + 3) − x.', type: 'short-answer', correctAnswer: 'x + 6', hint: 'Distribute first: 2x + 6 − x.', explanation: '2x + 6 − x = x + 6.', standardCode: '7.EE.1' },
        { index: 3, question: 'Which terms are like terms?', type: 'multiple-choice', options: ['3x and 3y', '5y and −2y', '4x² and 4x', '7 and 7x'], correctAnswer: '5y and −2y', hint: 'Like terms must have the same variable and exponent.', explanation: '5y and −2y both have the variable y to the first power.', standardCode: '7.EE.1' },
        { index: 4, question: 'Simplify: −4(2m − 1) + 3m.', type: 'short-answer', correctAnswer: '-5m + 4', hint: 'Distribute −4, then combine.', explanation: '−8m + 4 + 3m = −5m + 4.', standardCode: '7.EE.1' },
      ],
      assessment: {
        questions: [
          { question: 'Simplify: 6x + 2 − 3x + 8.', type: 'short-answer', correctAnswer: '3x + 10', standardCode: '7.EE.1' },
          { question: 'Simplify: 4(y − 2) + 3(y + 5).', type: 'short-answer', correctAnswer: '7y + 7', standardCode: '7.EE.1' },
          { question: 'Which expression is equivalent to 10x − 3 + 2x + 7?', type: 'multiple-choice', options: ['12x + 4', '12x − 4', '8x + 10', '8x + 4'], correctAnswer: '12x + 4', standardCode: '7.EE.1' },
        ],
      },
    },
  },

  // ─── Geometry (3 modules) ───

  {
    slug: 'grade7-math-angle-relationships',
    title: 'Angle Relationships',
    description: 'Identify and use supplementary, complementary, vertical, and adjacent angle relationships to find unknown angles',
    subject: 'math',
    grade: 7,
    gradeBand: '6-8',
    topicCluster: 'Geometry',
    standardCodes: ['7.G.5'],
    content: {
      intro: {
        title: 'Angle Relationships',
        text: 'When two lines cross, they create angles with special relationships. Understanding these relationships lets you find unknown angle measures without a protractor. In this module you will explore supplementary, complementary, vertical, and adjacent angles and set up equations to solve for missing measures.',
      },
      segments: [
        {
          index: 0,
          title: 'Supplementary and Complementary Angles',
          text: 'Two angles are supplementary if their measures add to 180°. They often form a straight line. Two angles are complementary if their measures add to 90°. They often form a right angle. If one supplementary angle is 110°, the other is 180° − 110° = 70°. If one complementary angle is 35°, the other is 90° − 35° = 55°.',
          keyVocabulary: ['supplementary', 'complementary', 'straight angle', 'right angle'],
          example: 'Supplementary: 120° + 60° = 180°. Complementary: 25° + 65° = 90°.',
        },
        {
          index: 1,
          title: 'Vertical and Adjacent Angles',
          text: 'When two lines intersect, they form two pairs of vertical angles. Vertical angles are across from each other and are always equal. Adjacent angles share a side and together form a straight angle (180°). If one angle at an intersection is 40°, the vertical angle is also 40°, and each adjacent angle is 140°.',
          keyVocabulary: ['vertical angles', 'adjacent angles', 'intersect', 'congruent'],
          example: 'Two lines cross: angles are 75°, 105°, 75°, 105°.',
        },
        {
          index: 2,
          title: 'Solving for Unknown Angles',
          text: 'Use angle relationships to write equations. If two supplementary angles are x and 3x, then x + 3x = 180, so 4x = 180, x = 45°. The other angle is 135°. Always identify which relationship applies — supplementary, complementary, or vertical — then set up and solve the equation.',
          keyVocabulary: ['equation', 'unknown', 'variable', 'solve'],
          example: 'Complementary angles: x and (x + 20). x + x + 20 = 90 → 2x = 70 → x = 35°.',
        },
      ],
      practice: [
        { index: 0, question: 'Two supplementary angles measure x° and 130°. What is x?', type: 'short-answer', correctAnswer: '50', hint: 'Supplementary angles add to 180°.', explanation: '180 − 130 = 50.', standardCode: '7.G.5' },
        { index: 1, question: 'Two complementary angles measure x° and 55°. What is x?', type: 'short-answer', correctAnswer: '35', hint: 'Complementary angles add to 90°.', explanation: '90 − 55 = 35.', standardCode: '7.G.5' },
        { index: 2, question: 'Two lines intersect. One angle measures 72°. What does the vertical angle measure?', type: 'short-answer', correctAnswer: '72', hint: 'Vertical angles are equal.', explanation: 'Vertical angles are congruent, so it also measures 72°.', standardCode: '7.G.5' },
        { index: 3, question: 'Supplementary angles measure (2x)° and (x + 30)°. Find x.', type: 'short-answer', correctAnswer: '50', hint: 'Set up: 2x + x + 30 = 180.', explanation: '3x + 30 = 180 → 3x = 150 → x = 50.', standardCode: '7.G.5' },
        { index: 4, question: 'An angle and its complement differ by 20°. What are the two angle measures?', type: 'multiple-choice', options: ['30° and 60°', '35° and 55°', '40° and 50°', '45° and 45°'], correctAnswer: '35° and 55°', hint: 'x + (x + 20) = 90.', explanation: '2x + 20 = 90 → x = 35. The angles are 35° and 55°.', standardCode: '7.G.5' },
      ],
      assessment: {
        questions: [
          { question: 'Two supplementary angles are in the ratio 2:7. What is the larger angle?', type: 'short-answer', correctAnswer: '140', standardCode: '7.G.5' },
          { question: 'Two vertical angles are (3x + 10)° and (5x − 20)°. Find x.', type: 'short-answer', correctAnswer: '15', standardCode: '7.G.5' },
          { question: 'An angle measures 48°. Its supplement measures:', type: 'multiple-choice', options: ['42°', '132°', '48°', '138°'], correctAnswer: '132°', standardCode: '7.G.5' },
        ],
      },
    },
  },

  {
    slug: 'grade7-math-circles-area-circumference',
    title: 'Circles: Area and Circumference',
    description: 'Calculate the area and circumference of circles using the formulas A = pi * r^2 and C = pi * d',
    subject: 'math',
    grade: 7,
    gradeBand: '6-8',
    topicCluster: 'Geometry',
    standardCodes: ['7.G.4'],
    content: {
      intro: {
        title: 'Circles: Area and Circumference',
        text: 'Circles appear in wheels, clocks, pizzas, and sports fields. Two key measurements — circumference (the distance around) and area (the space inside) — let you solve practical problems like how much fencing you need for a circular garden or how much paint covers a circular wall. This module teaches you both formulas and when to use each one.',
      },
      segments: [
        {
          index: 0,
          title: 'Parts of a Circle and Pi',
          text: 'A circle has a center, a radius (distance from center to edge), and a diameter (distance across through the center). The diameter is always twice the radius: d = 2r. Pi (π) is the ratio of every circle\'s circumference to its diameter, approximately 3.14 or 22/7. No matter how big or small the circle, this ratio never changes.',
          keyVocabulary: ['radius', 'diameter', 'pi', 'circumference'],
          example: 'Radius = 5 cm → Diameter = 10 cm.',
        },
        {
          index: 1,
          title: 'Circumference',
          text: 'The circumference is the perimeter of a circle. Two equivalent formulas: C = πd or C = 2πr. Choose whichever matches the information you are given. For a circle with diameter 14 cm: C = π × 14 ≈ 43.96 cm. For a circle with radius 6 in: C = 2π × 6 ≈ 37.70 in.',
          keyVocabulary: ['circumference', 'perimeter', 'formula'],
          example: 'r = 10 m → C = 2π(10) = 20π ≈ 62.83 m.',
        },
        {
          index: 2,
          title: 'Area',
          text: 'The area of a circle is A = πr². Square the radius first, then multiply by π. For a circle with radius 7 m: A = π × 7² = 49π ≈ 153.94 m². If you are given the diameter, halve it to find the radius before using the formula. Area is measured in square units.',
          keyVocabulary: ['area', 'square units', 'radius squared'],
          example: 'd = 12 cm → r = 6 cm → A = π(6²) = 36π ≈ 113.10 cm².',
        },
        {
          index: 3,
          title: 'Working Backwards',
          text: 'Sometimes you know the circumference or area and need to find the radius or diameter. From C = 2πr, solve for r: r = C / (2π). From A = πr², solve for r²: r² = A / π, then take the square root. For example, if A = 50.24 cm², then r² = 50.24 / 3.14 = 16, so r = 4 cm.',
          keyVocabulary: ['solve for radius', 'square root', 'work backwards'],
        },
      ],
      practice: [
        { index: 0, question: 'What is the circumference of a circle with diameter 10 cm? Use π ≈ 3.14.', type: 'short-answer', correctAnswer: '31.4 cm', hint: 'Use C = πd.', explanation: 'C = 3.14 × 10 = 31.4 cm.', standardCode: '7.G.4' },
        { index: 1, question: 'What is the area of a circle with radius 3 in? Use π ≈ 3.14.', type: 'short-answer', correctAnswer: '28.26 sq in', hint: 'Use A = πr².', explanation: 'A = 3.14 × 9 = 28.26 sq in.', standardCode: '7.G.4' },
        { index: 2, question: 'A circle has a circumference of 25.12 m. What is its radius? Use π ≈ 3.14.', type: 'short-answer', correctAnswer: '4 m', hint: 'Use r = C / (2π).', explanation: 'r = 25.12 / (2 × 3.14) = 25.12 / 6.28 = 4 m.', standardCode: '7.G.4' },
        { index: 3, question: 'What is the area of a circle with diameter 20 ft? Use π ≈ 3.14.', type: 'multiple-choice', options: ['62.8 sq ft', '125.6 sq ft', '314 sq ft', '1256 sq ft'], correctAnswer: '314 sq ft', hint: 'Find the radius first: r = 10.', explanation: 'r = 10. A = 3.14 × 100 = 314 sq ft.', standardCode: '7.G.4' },
        { index: 4, question: 'A circular track has a radius of 50 m. How far do you run in one lap? Use π ≈ 3.14.', type: 'short-answer', correctAnswer: '314 m', hint: 'One lap is the circumference.', explanation: 'C = 2 × 3.14 × 50 = 314 m.', standardCode: '7.G.4' },
      ],
      assessment: {
        questions: [
          { question: 'What is the circumference of a circle with radius 8 cm? Use π ≈ 3.14.', type: 'short-answer', correctAnswer: '50.24 cm', standardCode: '7.G.4' },
          { question: 'A pizza has a diameter of 16 inches. What is its area? Use π ≈ 3.14.', type: 'short-answer', correctAnswer: '200.96 sq in', standardCode: '7.G.4' },
          { question: 'A circle has an area of 78.5 sq cm (π ≈ 3.14). What is the radius?', type: 'multiple-choice', options: ['4 cm', '5 cm', '10 cm', '25 cm'], correctAnswer: '5 cm', standardCode: '7.G.4' },
        ],
      },
    },
  },

  {
    slug: 'grade7-math-composite-shapes-scale',
    title: 'Composite Shapes and Scale',
    description: 'Find area and perimeter of composite figures and apply scale factors to two-dimensional shapes',
    subject: 'math',
    grade: 7,
    gradeBand: '6-8',
    topicCluster: 'Geometry',
    standardCodes: ['7.G.1', '7.G.6'],
    content: {
      intro: {
        title: 'Composite Shapes and Scale',
        text: 'Real-world shapes are rarely simple rectangles or circles. A room might be L-shaped, a garden might combine a rectangle and a semicircle, and an architect might need to scale a floor plan up or down. In this module you will learn to break down composite figures, calculate their measurements, and apply scale factors.',
      },
      segments: [
        {
          index: 0,
          title: 'Breaking Down Composite Figures',
          text: 'A composite figure is made of two or more simple shapes joined together. To find its area, split it into shapes you know — rectangles, triangles, circles, or semicircles — calculate each area, and add them up. Sometimes it is easier to find the area of a larger shape and subtract the area of a missing piece. Always look for the approach that uses measurements you already have.',
          keyVocabulary: ['composite figure', 'decompose', 'add areas', 'subtract areas'],
          example: 'An L-shape can be split into two rectangles.',
        },
        {
          index: 1,
          title: 'Perimeter of Composite Figures',
          text: 'The perimeter is the total distance around the outside of the figure. Trace the outer edge and add each segment. Be careful: when two shapes share an edge, that edge is inside the figure and should NOT be included in the perimeter. For an L-shape formed from two rectangles, only the outer edges count.',
          keyVocabulary: ['perimeter', 'outer edge', 'shared edge', 'boundary'],
          example: 'A rectangle (10 × 4) with a semicircle (diameter 4) on one end: perimeter = 10 + 4 + 10 + half-circumference of diameter 4.',
        },
        {
          index: 2,
          title: 'Applying Scale Factors to Shapes',
          text: 'When you scale a figure by a factor of k, every length is multiplied by k, the perimeter is multiplied by k, and the area is multiplied by k². If a triangle has sides 3, 4, 5 and is scaled by 2, the new sides are 6, 8, 10. The original area is 6 sq units; the new area is 6 × 4 = 24 sq units. Remembering that area scales as the square of the scale factor prevents common mistakes.',
          keyVocabulary: ['scale factor', 'similar figures', 'area ratio', 'perimeter ratio'],
          example: 'Scale factor 3: perimeter × 3, area × 9.',
        },
      ],
      practice: [
        { index: 0, question: 'An L-shaped figure is made of a 6 × 4 rectangle and a 3 × 2 rectangle attached to one side. What is the total area?', type: 'short-answer', correctAnswer: '30', hint: 'Add the areas of the two rectangles.', explanation: '6 × 4 = 24; 3 × 2 = 6; total = 30.', standardCode: '7.G.6' },
        { index: 1, question: 'A figure is a 10 × 8 rectangle with a 4 × 4 square cut from one corner. What is the area?', type: 'short-answer', correctAnswer: '64', hint: 'Subtract the missing square from the rectangle.', explanation: '80 − 16 = 64.', standardCode: '7.G.6' },
        { index: 2, question: 'A triangle has an area of 15 sq cm. If it is scaled by a factor of 3, what is the new area?', type: 'short-answer', correctAnswer: '135 sq cm', hint: 'Area scales by the square of the scale factor.', explanation: '15 × 3² = 15 × 9 = 135 sq cm.', standardCode: '7.G.1' },
        { index: 3, question: 'A rectangle has a perimeter of 20 cm. If scaled by a factor of 4, what is the new perimeter?', type: 'short-answer', correctAnswer: '80 cm', hint: 'Perimeter scales by the scale factor.', explanation: '20 × 4 = 80 cm.', standardCode: '7.G.1' },
        { index: 4, question: 'A shape consists of a 5 × 5 square with a semicircle (diameter 5) on top. What is its area? Use π ≈ 3.14.', type: 'multiple-choice', options: ['25 sq units', '34.81 sq units', '44.63 sq units', '50 sq units'], correctAnswer: '34.81 sq units', hint: 'Add the square area to half the circle area.', explanation: 'Square: 25. Semicircle: (3.14 × 2.5²) / 2 = 9.8125 ≈ 9.81. Total ≈ 34.81.', standardCode: '7.G.6' },
      ],
      assessment: {
        questions: [
          { question: 'A figure is made of a 12 × 5 rectangle and a right triangle with legs 5 and 4. What is the total area?', type: 'short-answer', correctAnswer: '70', standardCode: '7.G.6' },
          { question: 'A figure is scaled by a factor of 5. How does the area change?', type: 'multiple-choice', options: ['× 5', '× 10', '× 25', '× 50'], correctAnswer: '× 25', standardCode: '7.G.1' },
          { question: 'A rectangle (8 × 3) has a 2 × 2 square removed. What is the remaining area?', type: 'short-answer', correctAnswer: '20', standardCode: '7.G.6' },
        ],
      },
    },
  },
]
