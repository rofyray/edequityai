import type { ModuleSeed } from '../types'

export const GRADE_6_MATH: ModuleSeed[] = [
  // ============================================
  // Ratios & Proportional Relationships (3 modules)
  // ============================================
  {
    slug: 'grade6-math-ratios-and-rates',
    title: 'Understanding Ratios and Rates',
    description: 'Understand the concept of a ratio and use ratio language to describe relationships between two quantities, including unit rates',
    subject: 'math',
    grade: 6,
    gradeBand: '6-8',
    topicCluster: 'Ratios & Proportional Relationships',
    standardCodes: ['6.RP.1', '6.RP.2'],
    content: {
      intro: {
        title: 'Understanding Ratios and Rates',
        text: 'Ratios are everywhere in daily life. When a recipe says "2 cups of flour for every 1 cup of sugar," that is a ratio. A rate is a special ratio that compares two quantities with different units, like miles per hour. In this module you will learn to write ratios, find unit rates, and use ratio language to describe real-world relationships.',
      },
      segments: [
        {
          index: 0,
          title: 'What Is a Ratio?',
          text: 'A ratio compares two quantities. If a bag has 4 red marbles and 6 blue marbles, the ratio of red to blue is 4 to 6, written as 4:6 or 4/6. We can simplify ratios like fractions: 4:6 simplifies to 2:3 by dividing both parts by the greatest common factor, which is 2. The order of a ratio matters — 4:6 (red to blue) is different from 6:4 (blue to red). Ratios can also compare a part to the whole. The ratio of red marbles to all marbles is 4:10 or 2:5. Understanding which comparison a ratio describes is critical for solving problems correctly.',
          keyVocabulary: ['ratio', 'simplify', 'part-to-part', 'part-to-whole'],
          example: 'In a class of 12 boys and 18 girls, the ratio of boys to girls is 12:18 = 2:3.',
        },
        {
          index: 1,
          title: 'Equivalent Ratios',
          text: 'Equivalent ratios express the same relationship using different numbers, just like equivalent fractions. If the ratio of cats to dogs is 3:2, equivalent ratios include 6:4, 9:6, 12:8, and so on. To find equivalent ratios, multiply or divide both parts by the same nonzero number. A ratio table organizes equivalent ratios in a chart. List one quantity across the top row and the corresponding quantity in the bottom row, multiplying by the same factor each time. Ratio tables help you scale recipes, convert measurements, and plan purchases.',
          keyVocabulary: ['equivalent ratios', 'ratio table', 'scale factor', 'multiply'],
          example: 'Ratio 5:3 → multiply both by 4 → 20:12. Divide both by 1 → still 5:3.',
        },
        {
          index: 2,
          title: 'Rates and Unit Rates',
          text: 'A rate compares two quantities measured in different units. If you drive 150 miles in 3 hours, the rate is 150 miles per 3 hours. A unit rate expresses how much of one quantity corresponds to exactly one unit of the other. Divide: 150 ÷ 3 = 50 miles per hour. Unit rates make comparisons easy. If Store A sells 6 apples for $3 and Store B sells 10 apples for $4, find each unit rate: $3 ÷ 6 = $0.50 per apple versus $4 ÷ 10 = $0.40 per apple. Store B is the better deal because its unit price is lower.',
          keyVocabulary: ['rate', 'unit rate', 'per', 'unit price'],
          example: '200 words typed in 4 minutes → unit rate = 200 ÷ 4 = 50 words per minute.',
        },
      ],
      practice: [
        { index: 0, question: 'A recipe uses 3 cups of flour and 2 cups of sugar. What is the ratio of flour to sugar in simplest form?', type: 'short-answer', correctAnswer: '3:2', hint: 'Check whether 3 and 2 share a common factor.', explanation: '3 and 2 share no common factor other than 1, so the ratio is already 3:2.', standardCode: '6.RP.1' },
        { index: 1, question: 'Which ratio is equivalent to 4:5?', type: 'multiple-choice', options: ['8:9', '12:15', '16:25', '4:10'], correctAnswer: '12:15', hint: 'Multiply both parts of 4:5 by the same number.', explanation: '4 x 3 = 12 and 5 x 3 = 15, so 12:15 is equivalent to 4:5.', standardCode: '6.RP.1' },
        { index: 2, question: 'A car travels 240 miles in 4 hours. What is the unit rate?', type: 'short-answer', correctAnswer: '60 miles per hour', hint: 'Divide the total miles by the total hours.', explanation: '240 ÷ 4 = 60 miles per hour.', standardCode: '6.RP.2' },
        { index: 3, question: 'Store A sells 8 notebooks for $12. Store B sells 5 notebooks for $8. Which store has the lower unit price?', type: 'multiple-choice', options: ['Store A ($1.50 each)', 'Store B ($1.60 each)', 'They are the same price', 'Cannot be determined'], correctAnswer: 'Store A ($1.50 each)', hint: 'Find the price per notebook for each store.', explanation: 'Store A: $12 ÷ 8 = $1.50. Store B: $8 ÷ 5 = $1.60. Store A is cheaper.', standardCode: '6.RP.2' },
        { index: 4, question: 'In a bag of 30 candies, 12 are red and 18 are green. What is the ratio of red to total candies in simplest form?', type: 'short-answer', correctAnswer: '2:5', hint: 'Find the GCF of 12 and 30.', explanation: 'GCF of 12 and 30 is 6. 12/6 = 2 and 30/6 = 5, so the ratio is 2:5.', standardCode: '6.RP.1' },
      ],
      assessment: {
        questions: [
          { question: 'A runner covers 5 kilometers in 25 minutes. What is her unit rate in kilometers per minute?', type: 'short-answer', correctAnswer: '0.2', standardCode: '6.RP.2' },
          { question: 'Which ratio is NOT equivalent to 6:9?', type: 'multiple-choice', options: ['2:3', '12:18', '18:27', '8:12'], correctAnswer: '8:12', standardCode: '6.RP.1' },
          { question: 'If the ratio of boys to girls in a club is 3:5 and there are 15 girls, how many boys are there?', type: 'short-answer', correctAnswer: '9', standardCode: '6.RP.1' },
        ],
      },
    },
  },
  {
    slug: 'grade6-math-ratio-tables-and-graphs',
    title: 'Ratio Tables and Coordinate Graphs',
    description: 'Use ratio tables and coordinate graphs to represent and analyze proportional relationships',
    subject: 'math',
    grade: 6,
    gradeBand: '6-8',
    topicCluster: 'Ratios & Proportional Relationships',
    standardCodes: ['6.RP.3', '6.RP.3a'],
    content: {
      intro: {
        title: 'Ratio Tables and Coordinate Graphs',
        text: 'Ratio tables and graphs are tools that help you see patterns in proportional relationships. A ratio table lists pairs of related values, while a coordinate graph plots those pairs as points. Together they help you predict unknown values, compare rates, and solve real-world problems like planning a road trip or budgeting money.',
      },
      segments: [
        {
          index: 0,
          title: 'Building Ratio Tables',
          text: 'A ratio table shows pairs of numbers that share the same ratio. Start with a known pair and multiply or divide both values by the same factor to fill in new rows. For example, if lemonade calls for 2 cups of juice per 5 cups of water, your table might read: 2:5, 4:10, 6:15, 8:20. Each row is an equivalent ratio. You can also add rows by adding corresponding values from two existing rows: 2 + 4 = 6 and 5 + 10 = 15. This additive strategy works because equivalent ratios stay proportional when combined.',
          keyVocabulary: ['ratio table', 'equivalent ratio', 'proportional', 'additive strategy'],
          example: 'Ratio 3:7 → table entries: 3:7, 6:14, 9:21, 12:28.',
        },
        {
          index: 1,
          title: 'Plotting Ratios on a Coordinate Plane',
          text: 'Every pair in a ratio table becomes a point on a coordinate graph. Use the first quantity as the x-value and the second as the y-value. For the lemonade example, plot (2, 5), (4, 10), (6, 15), and (8, 20). If the relationship is proportional, all points lie on a straight line that passes through the origin (0, 0). The steepness of the line shows the rate. A steeper line means the y-value grows faster relative to the x-value. Graphs make it easy to read off values you did not calculate in the table.',
          keyVocabulary: ['coordinate plane', 'origin', 'x-value', 'y-value', 'straight line'],
          example: 'Plot (1, 3), (2, 6), (3, 9). The line passes through the origin — this is proportional.',
        },
        {
          index: 2,
          title: 'Using Tables and Graphs to Solve Problems',
          text: 'Suppose you earn $9 for every 2 hours of work. Build a ratio table: 2 hr → $9, 4 hr → $18, 6 hr → $27, 8 hr → $36. To find earnings for 5 hours, notice that 5 is halfway between 4 and 6, so the pay is halfway between $18 and $27, which is $22.50. On a graph you could read this directly from the line. You can also use the unit rate: $9 ÷ 2 = $4.50 per hour, then multiply $4.50 x 5 = $22.50. Tables, graphs, and unit rates are three paths to the same answer.',
          keyVocabulary: ['unit rate', 'interpolate', 'predict', 'scale'],
          example: 'If 3 tickets cost $15, use the unit rate ($5 each) to find 7 tickets cost $35.',
        },
      ],
      practice: [
        { index: 0, question: 'Complete the ratio table for 4:6 — what is the missing value? 4:6, 8:?, 12:18', type: 'short-answer', correctAnswer: '12', hint: 'Multiply 6 by 2, just as you multiplied 4 by 2 to get 8.', explanation: '4 x 2 = 8, so 6 x 2 = 12.', standardCode: '6.RP.3a' },
        { index: 1, question: 'A proportional graph passes through (0, 0) and (4, 12). What is the unit rate?', type: 'short-answer', correctAnswer: '3', hint: 'Divide the y-value by the x-value.', explanation: '12 ÷ 4 = 3. The unit rate is 3.', standardCode: '6.RP.3' },
        { index: 2, question: 'If 5 gallons of gas cost $20, how much do 8 gallons cost?', type: 'short-answer', correctAnswer: '$32', hint: 'Find the cost per gallon first.', explanation: '$20 ÷ 5 = $4 per gallon. 8 x $4 = $32.', standardCode: '6.RP.3' },
        { index: 3, question: 'Which point would NOT be on a line through the origin representing the ratio 2:5?', type: 'multiple-choice', options: ['(4, 10)', '(6, 15)', '(8, 25)', '(10, 25)'], correctAnswer: '(8, 25)', hint: 'Check whether each point simplifies to the ratio 2:5.', explanation: '(8, 25) gives 8:25, which does not simplify to 2:5. The correct point would be (8, 20).', standardCode: '6.RP.3a' },
        { index: 4, question: 'A printer prints 30 pages in 5 minutes. How many pages does it print in 12 minutes?', type: 'short-answer', correctAnswer: '72', hint: 'Find the unit rate first: pages per minute.', explanation: '30 ÷ 5 = 6 pages per minute. 6 x 12 = 72 pages.', standardCode: '6.RP.3' },
      ],
      assessment: {
        questions: [
          { question: 'Complete the ratio table: 3:8, 9:?, 15:40', type: 'short-answer', correctAnswer: '24', standardCode: '6.RP.3a' },
          { question: 'A graph shows a proportional relationship passing through (6, 18). What is the constant of proportionality?', type: 'short-answer', correctAnswer: '3', standardCode: '6.RP.3' },
          { question: 'If 7 apples cost $3.50, how much do 12 apples cost?', type: 'short-answer', correctAnswer: '$6.00', standardCode: '6.RP.3' },
        ],
      },
    },
  },
  {
    slug: 'grade6-math-percent-problems',
    title: 'Percent Problems',
    description: 'Understand percent as a rate per 100 and solve real-world percent problems including discounts, tax, and tips',
    subject: 'math',
    grade: 6,
    gradeBand: '6-8',
    topicCluster: 'Ratios & Proportional Relationships',
    standardCodes: ['6.RP.3', '6.RP.3c'],
    content: {
      intro: {
        title: 'Percent Problems',
        text: 'Percent means "per hundred." When you see a 25% off sale, it means 25 out of every 100 units of the price are subtracted. Percents connect ratios and fractions to everyday situations like shopping, tipping at restaurants, and understanding statistics. This module teaches you to convert between fractions, decimals, and percents, and to solve percent problems.',
      },
      segments: [
        {
          index: 0,
          title: 'Understanding Percent',
          text: 'A percent is a ratio with a denominator of 100. The symbol % means "per 100." So 40% means 40 out of 100, which equals the fraction 40/100 = 2/5 and the decimal 0.40. To convert a fraction to a percent, divide the numerator by the denominator and multiply by 100. For example, 3/4 = 0.75, and 0.75 x 100 = 75%. To convert a percent to a decimal, divide by 100 or move the decimal point two places to the left: 65% = 0.65. These conversions let you switch between forms depending on which is easiest for a given problem.',
          keyVocabulary: ['percent', 'per hundred', 'convert', 'decimal', 'fraction'],
          example: '1/5 = 0.20 = 20%. Moving between forms is like translating between languages.',
        },
        {
          index: 1,
          title: 'Finding a Percent of a Number',
          text: 'To find a percent of a number, convert the percent to a decimal and multiply. What is 30% of 80? Convert 30% to 0.30, then multiply: 0.30 x 80 = 24. You can also use a proportion: 30/100 = x/80, so x = 30 x 80 ÷ 100 = 24. This skill applies to real situations. If a shirt costs $40 and is 15% off, the discount is 0.15 x 40 = $6, so the sale price is $40 − $6 = $34. Tip calculations work the same way: a 20% tip on a $25 meal is 0.20 x 25 = $5.',
          keyVocabulary: ['percent of a number', 'proportion', 'discount', 'sale price'],
          example: '25% of 200: 0.25 x 200 = 50.',
        },
        {
          index: 2,
          title: 'Finding the Whole from a Percent',
          text: 'Sometimes you know the part and the percent but need to find the whole. If 40% of a number is 28, what is the number? Set up the equation: 0.40 x n = 28. Divide both sides by 0.40: n = 28 ÷ 0.40 = 70. You can also use a proportion: 40/100 = 28/n, so n = 28 x 100 ÷ 40 = 70. This type of problem appears when you know how much tax was paid and need the original price, or when a test score percentage is given and you need the total points possible.',
          keyVocabulary: ['whole', 'equation', 'divide', 'original amount'],
          example: 'If 15% of a number is 9, then n = 9 ÷ 0.15 = 60.',
        },
        {
          index: 3,
          title: 'Percent Increase and Decrease',
          text: 'A percent increase tells you how much a value grew relative to its original amount. If a plant was 20 cm tall and grew to 25 cm, the increase is 5 cm. Percent increase = (change ÷ original) x 100 = (5 ÷ 20) x 100 = 25%. Percent decrease works the same way but the value gets smaller. If a price drops from $50 to $35, the decrease is $15 and the percent decrease = (15 ÷ 50) x 100 = 30%. Always divide by the original amount, not the new amount.',
          keyVocabulary: ['percent increase', 'percent decrease', 'change', 'original amount'],
          example: 'Population goes from 800 to 1,000: increase = 200. Percent increase = 200/800 x 100 = 25%.',
        },
      ],
      practice: [
        { index: 0, question: 'Convert 3/5 to a percent.', type: 'short-answer', correctAnswer: '60%', hint: 'Divide 3 by 5, then multiply by 100.', explanation: '3 ÷ 5 = 0.60. 0.60 x 100 = 60%.', standardCode: '6.RP.3c' },
        { index: 1, question: 'What is 15% of 200?', type: 'short-answer', correctAnswer: '30', hint: 'Convert 15% to 0.15 and multiply by 200.', explanation: '0.15 x 200 = 30.', standardCode: '6.RP.3c' },
        { index: 2, question: 'A jacket costs $80 and is 25% off. What is the sale price?', type: 'short-answer', correctAnswer: '$60', hint: 'Find the discount first: 25% of $80.', explanation: '0.25 x 80 = $20 discount. $80 − $20 = $60.', standardCode: '6.RP.3c' },
        { index: 3, question: 'If 20% of a number is 14, what is the number?', type: 'multiple-choice', options: ['28', '56', '70', '80'], correctAnswer: '70', hint: 'Divide 14 by 0.20.', explanation: '14 ÷ 0.20 = 70.', standardCode: '6.RP.3c' },
        { index: 4, question: 'A town had 500 people and grew to 600. What is the percent increase?', type: 'short-answer', correctAnswer: '20%', hint: 'Find the change, then divide by the original.', explanation: 'Change = 100. 100 ÷ 500 = 0.20 = 20%.', standardCode: '6.RP.3c' },
      ],
      assessment: {
        questions: [
          { question: 'What is 45% of 360?', type: 'short-answer', correctAnswer: '162', standardCode: '6.RP.3c' },
          { question: 'A phone originally costs $120. After a discount, you pay $96. What percent discount did you get?', type: 'short-answer', correctAnswer: '20%', standardCode: '6.RP.3c' },
          { question: 'Which decimal is equal to 8%?', type: 'multiple-choice', options: ['0.8', '0.08', '8.0', '0.008'], correctAnswer: '0.08', standardCode: '6.RP.3c' },
        ],
      },
    },
  },

  // ============================================
  // The Number System (3 modules)
  // ============================================
  {
    slug: 'grade6-math-integers-and-number-line',
    title: 'Integers and the Number Line',
    description: 'Understand positive and negative integers, absolute value, and ordering on the number line',
    subject: 'math',
    grade: 6,
    gradeBand: '6-8',
    topicCluster: 'The Number System',
    standardCodes: ['6.NS.5', '6.NS.6', '6.NS.7'],
    content: {
      intro: {
        title: 'Integers and the Number Line',
        text: 'Up to now most numbers you have worked with are positive. But the world includes values below zero — temperatures drop below freezing, elevations go below sea level, and bank accounts can be overdrawn. Integers include all whole numbers and their negatives. This module introduces negative numbers, absolute value, and how to compare and order integers.',
      },
      segments: [
        {
          index: 0,
          title: 'What Are Integers?',
          text: 'Integers are the set of whole numbers and their opposites: ..., −3, −2, −1, 0, 1, 2, 3, ... Zero is an integer but is neither positive nor negative. Negative integers are written with a minus sign and represent values less than zero. In real life, negative numbers describe temperatures below zero, depths below sea level, and debts. On a horizontal number line, positive integers are to the right of zero and negative integers are to the left. Every integer has an opposite: the opposite of 5 is −5, and the opposite of −8 is 8.',
          keyVocabulary: ['integer', 'positive', 'negative', 'opposite', 'zero'],
          example: 'The opposite of −4 is 4. Both are 4 units from zero on the number line.',
        },
        {
          index: 1,
          title: 'Absolute Value',
          text: 'The absolute value of a number is its distance from zero on the number line, regardless of direction. We write absolute value with vertical bars: |−7| = 7 and |7| = 7. Both −7 and 7 are exactly 7 units away from zero. Absolute value is always zero or positive — it measures distance, and distance cannot be negative. Absolute value helps compare magnitudes. A temperature of −15°F has a greater absolute value (15) than 10°F (absolute value 10), meaning it is farther from zero even though it is a lower temperature.',
          keyVocabulary: ['absolute value', 'distance', 'magnitude', 'vertical bars'],
          example: '|−12| = 12 and |12| = 12. Both are 12 units from zero.',
        },
        {
          index: 2,
          title: 'Comparing and Ordering Integers',
          text: 'On a number line, any number to the right is greater than a number to the left. So 3 > −5 even though 5 is larger in absolute value than 3. Among negative numbers, the one closer to zero is greater: −2 > −9 because −2 is to the right of −9. To order a set of integers, plot them on a number line and read from left to right for least to greatest. For example, ordering −6, 2, −1, 4: from least to greatest gives −6, −1, 2, 4.',
          keyVocabulary: ['greater than', 'less than', 'compare', 'order'],
          example: 'Order −3, 5, −8, 0: from least to greatest → −8, −3, 0, 5.',
        },
      ],
      practice: [
        { index: 0, question: 'What is the opposite of −9?', type: 'short-answer', correctAnswer: '9', hint: 'The opposite of a negative number is positive.', explanation: 'The opposite of −9 is 9. They are the same distance from zero but on opposite sides.', standardCode: '6.NS.6' },
        { index: 1, question: 'What is |−14|?', type: 'short-answer', correctAnswer: '14', hint: 'Absolute value is the distance from zero.', explanation: '|−14| = 14 because −14 is 14 units from zero.', standardCode: '6.NS.7' },
        { index: 2, question: 'Which is greater: −3 or −7?', type: 'multiple-choice', options: ['−3', '−7', 'They are equal', 'Cannot be determined'], correctAnswer: '−3', hint: 'Which number is closer to zero on the number line?', explanation: '−3 is to the right of −7 on the number line, so −3 > −7.', standardCode: '6.NS.7' },
        { index: 3, question: 'Order these integers from least to greatest: 4, −2, 0, −5, 3', type: 'short-answer', correctAnswer: '−5, −2, 0, 3, 4', hint: 'Start with the most negative number.', explanation: 'On the number line from left to right: −5, −2, 0, 3, 4.', standardCode: '6.NS.7' },
        { index: 4, question: 'A submarine is at −200 feet and a bird is at 50 feet. What is the distance between them?', type: 'short-answer', correctAnswer: '250 feet', hint: 'Find the absolute value of the difference: |−200 − 50|.', explanation: 'The distance is |−200 − 50| = |−250| = 250 feet.', standardCode: '6.NS.5' },
      ],
      assessment: {
        questions: [
          { question: 'What is |−23| + |5|?', type: 'short-answer', correctAnswer: '28', standardCode: '6.NS.7' },
          { question: 'Which integer is less: −11 or −4?', type: 'multiple-choice', options: ['−11', '−4', 'They are equal', '0'], correctAnswer: '−11', standardCode: '6.NS.7' },
          { question: 'The temperature was −8°F in the morning and rose to 5°F by noon. How many degrees did it rise?', type: 'short-answer', correctAnswer: '13', standardCode: '6.NS.5' },
        ],
      },
    },
  },
  {
    slug: 'grade6-math-rational-numbers',
    title: 'Rational Numbers',
    description: 'Extend understanding of the number line to include all rational numbers including fractions and decimals in all four quadrants',
    subject: 'math',
    grade: 6,
    gradeBand: '6-8',
    topicCluster: 'The Number System',
    standardCodes: ['6.NS.6', '6.NS.6c', '6.NS.7'],
    content: {
      intro: {
        title: 'Rational Numbers',
        text: 'Integers are just one kind of rational number. A rational number is any number that can be written as a fraction a/b where a and b are integers and b is not zero. This includes fractions like 3/4, decimals like −2.5, and integers like 7 (which equals 7/1). In this module you will locate rational numbers on number lines and coordinate planes, and compare them.',
      },
      segments: [
        {
          index: 0,
          title: 'What Are Rational Numbers?',
          text: 'A rational number is any value that can be expressed as a fraction of two integers. Positive examples include 1/2, 3.75, and 8. Negative examples include −4/5, −0.6, and −12. Every decimal that terminates (like 0.25) or repeats (like 0.333...) is rational. To place a rational number on a number line, first identify the two integers it falls between. For instance, −1.5 is between −2 and −1, exactly halfway. Then mark the point. This extends everything you know about fractions and decimals into the negative side of the number line.',
          keyVocabulary: ['rational number', 'fraction', 'terminating decimal', 'repeating decimal'],
          example: '−3/4 is between −1 and 0 on the number line, three-fourths of the way from 0 toward −1.',
        },
        {
          index: 1,
          title: 'Rational Numbers on the Coordinate Plane',
          text: 'A coordinate plane has a horizontal x-axis and a vertical y-axis that cross at the origin (0, 0). The plane is divided into four quadrants. In Quadrant I both coordinates are positive. In Quadrant II, x is negative and y is positive. In Quadrant III both are negative. In Quadrant IV, x is positive and y is negative. You can plot rational numbers as coordinates: the point (−2.5, 3) is in Quadrant II, 2.5 units left of the origin and 3 units up.',
          keyVocabulary: ['coordinate plane', 'quadrant', 'x-axis', 'y-axis', 'origin'],
          example: 'Plot (−1, −4): move 1 unit left and 4 units down. This point is in Quadrant III.',
        },
        {
          index: 2,
          title: 'Comparing and Ordering Rational Numbers',
          text: 'To compare rational numbers, convert them to the same form — either both as decimals or both as fractions with a common denominator. For example, compare −3/8 and −0.4. Convert −3/8 to a decimal: −3 ÷ 8 = −0.375. Since −0.375 is closer to zero than −0.4, we know −3/8 > −0.4. Remember that for negative numbers, closer to zero means greater. When ordering a mixed set, place all values on the same number line to see the correct order from least to greatest.',
          keyVocabulary: ['compare', 'order', 'common denominator', 'convert'],
          example: 'Compare 2/3 and 0.65: 2/3 ≈ 0.667, so 2/3 > 0.65.',
        },
      ],
      practice: [
        { index: 0, question: 'Is −0.75 a rational number? Explain.', type: 'short-answer', correctAnswer: 'Yes', hint: 'Can you write −0.75 as a fraction of two integers?', explanation: 'Yes. −0.75 = −3/4, which is a fraction of two integers.', standardCode: '6.NS.6' },
        { index: 1, question: 'In which quadrant is the point (−3, 5)?', type: 'multiple-choice', options: ['Quadrant I', 'Quadrant II', 'Quadrant III', 'Quadrant IV'], correctAnswer: 'Quadrant II', hint: 'Check the signs: x is negative, y is positive.', explanation: 'Negative x and positive y means Quadrant II.', standardCode: '6.NS.6c' },
        { index: 2, question: 'Which is greater: −2/3 or −5/6?', type: 'short-answer', correctAnswer: '−2/3', hint: 'Convert to decimals or find a common denominator.', explanation: '−2/3 ≈ −0.667 and −5/6 ≈ −0.833. Since −0.667 is closer to zero, −2/3 > −5/6.', standardCode: '6.NS.7' },
        { index: 3, question: 'Plot the point (2, −3.5). Which quadrant is it in?', type: 'multiple-choice', options: ['Quadrant I', 'Quadrant II', 'Quadrant III', 'Quadrant IV'], correctAnswer: 'Quadrant IV', hint: 'Positive x and negative y.', explanation: 'Positive x and negative y place the point in Quadrant IV.', standardCode: '6.NS.6c' },
        { index: 4, question: 'Order from least to greatest: 1/4, −0.5, 0.3, −1/3', type: 'short-answer', correctAnswer: '−0.5, −1/3, 1/4, 0.3', hint: 'Convert all to decimals: 0.25, −0.5, 0.3, −0.333.', explanation: 'As decimals: −0.5, −0.333, 0.25, 0.3. So the order is −0.5, −1/3, 1/4, 0.3.', standardCode: '6.NS.7' },
      ],
      assessment: {
        questions: [
          { question: 'Which point is in Quadrant III?', type: 'multiple-choice', options: ['(2, −1)', '(−4, 3)', '(−5, −2)', '(1, 6)'], correctAnswer: '(−5, −2)', standardCode: '6.NS.6c' },
          { question: 'Convert −7/20 to a decimal.', type: 'short-answer', correctAnswer: '−0.35', standardCode: '6.NS.6' },
          { question: 'Order from least to greatest: 0.8, −3/4, 1/2, −0.9', type: 'short-answer', correctAnswer: '−0.9, −3/4, 1/2, 0.8', standardCode: '6.NS.7' },
        ],
      },
    },
  },
  {
    slug: 'grade6-math-gcf-lcm',
    title: 'Greatest Common Factor and Least Common Multiple',
    description: 'Find the GCF and LCM of two whole numbers and apply them to solve problems including the distributive property',
    subject: 'math',
    grade: 6,
    gradeBand: '6-8',
    topicCluster: 'The Number System',
    standardCodes: ['6.NS.4'],
    content: {
      intro: {
        title: 'Greatest Common Factor and Least Common Multiple',
        text: 'The greatest common factor and least common multiple are tools that help you simplify fractions, add fractions with different denominators, and solve grouping problems. If you need to split 24 apples and 36 oranges into equal groups with no leftovers, GCF tells you the largest group size. If two buses arrive every 8 and 12 minutes, LCM tells you when they next arrive together.',
      },
      segments: [
        {
          index: 0,
          title: 'Finding the Greatest Common Factor (GCF)',
          text: 'The greatest common factor of two numbers is the largest number that divides evenly into both. To find the GCF, list the factors of each number and identify the largest one they share. For 24 and 36: factors of 24 are 1, 2, 3, 4, 6, 8, 12, 24, and factors of 36 are 1, 2, 3, 4, 6, 9, 12, 18, 36. The common factors are 1, 2, 3, 4, 6, 12, and the greatest is 12. You can also use prime factorization: 24 = 2 x 2 x 2 x 3 and 36 = 2 x 2 x 3 x 3. Multiply the shared primes: 2 x 2 x 3 = 12.',
          keyVocabulary: ['greatest common factor', 'factor', 'prime factorization', 'common factor'],
          example: 'GCF of 18 and 27: 18 = 2 x 3 x 3, 27 = 3 x 3 x 3. Shared primes: 3 x 3 = 9.',
        },
        {
          index: 1,
          title: 'Finding the Least Common Multiple (LCM)',
          text: 'The least common multiple of two numbers is the smallest number that is a multiple of both. To find the LCM, list multiples of each number until you find the first match. Multiples of 6: 6, 12, 18, 24, 30. Multiples of 8: 8, 16, 24, 32. The first common multiple is 24, so the LCM is 24. With prime factorization, take each prime factor at its highest power: 6 = 2 x 3 and 8 = 2 x 2 x 2. The LCM uses 2^3 and 3^1: 8 x 3 = 24. LCM is essential for adding fractions with unlike denominators.',
          keyVocabulary: ['least common multiple', 'multiple', 'highest power', 'unlike denominators'],
          example: 'LCM of 4 and 10: 4 = 2^2, 10 = 2 x 5. LCM = 2^2 x 5 = 20.',
        },
        {
          index: 2,
          title: 'GCF and the Distributive Property',
          text: 'The distributive property connects GCF to expressions. You can rewrite 36 + 48 by factoring out the GCF: GCF(36, 48) = 12, so 36 + 48 = 12 x (3 + 4) = 12 x 7 = 84. This strategy simplifies mental math and is a foundation for algebra. It also helps when distributing items equally. If you have 36 pencils and 48 erasers to put into gift bags with the same number of each item, you can make 12 bags with 3 pencils and 4 erasers each.',
          keyVocabulary: ['distributive property', 'factor out', 'expression', 'rewrite'],
          example: '20 + 35 = 5(4 + 7) = 5 x 11 = 55. The GCF of 20 and 35 is 5.',
        },
      ],
      practice: [
        { index: 0, question: 'What is the GCF of 16 and 40?', type: 'short-answer', correctAnswer: '8', hint: 'List the factors of each number.', explanation: 'Factors of 16: 1, 2, 4, 8, 16. Factors of 40: 1, 2, 4, 5, 8, 10, 20, 40. GCF = 8.', standardCode: '6.NS.4' },
        { index: 1, question: 'What is the LCM of 5 and 7?', type: 'short-answer', correctAnswer: '35', hint: 'Since 5 and 7 are both prime, multiply them.', explanation: '5 and 7 share no common factors other than 1, so LCM = 5 x 7 = 35.', standardCode: '6.NS.4' },
        { index: 2, question: 'Use the distributive property to rewrite 28 + 42 using the GCF.', type: 'multiple-choice', options: ['7(4 + 6)', '14(2 + 3)', '2(14 + 21)', '7(3 + 7)'], correctAnswer: '14(2 + 3)', hint: 'Find the GCF of 28 and 42 first.', explanation: 'GCF(28, 42) = 14. 28 ÷ 14 = 2, 42 ÷ 14 = 3. So 28 + 42 = 14(2 + 3).', standardCode: '6.NS.4' },
        { index: 3, question: 'What is the LCM of 6 and 9?', type: 'short-answer', correctAnswer: '18', hint: 'List multiples of 6 and 9 until you find a match.', explanation: 'Multiples of 6: 6, 12, 18. Multiples of 9: 9, 18. LCM = 18.', standardCode: '6.NS.4' },
        { index: 4, question: 'You have 30 red beads and 45 blue beads. What is the greatest number of identical necklaces you can make using all the beads?', type: 'short-answer', correctAnswer: '15', hint: 'Find the GCF of 30 and 45.', explanation: 'GCF(30, 45) = 15. Each necklace gets 2 red and 3 blue beads.', standardCode: '6.NS.4' },
      ],
      assessment: {
        questions: [
          { question: 'What is the GCF of 54 and 72?', type: 'short-answer', correctAnswer: '18', standardCode: '6.NS.4' },
          { question: 'What is the LCM of 8 and 12?', type: 'short-answer', correctAnswer: '24', standardCode: '6.NS.4' },
          { question: 'Rewrite 24 + 36 using the distributive property and the GCF.', type: 'multiple-choice', options: ['4(6 + 9)', '6(4 + 6)', '12(2 + 3)', '3(8 + 12)'], correctAnswer: '12(2 + 3)', standardCode: '6.NS.4' },
        ],
      },
    },
  },

  // ============================================
  // Expressions & Equations (3 modules)
  // ============================================
  {
    slug: 'grade6-math-writing-expressions',
    title: 'Writing and Interpreting Expressions',
    description: 'Write, read, and evaluate numerical and algebraic expressions using variables and the order of operations',
    subject: 'math',
    grade: 6,
    gradeBand: '6-8',
    topicCluster: 'Expressions & Equations',
    standardCodes: ['6.EE.1', '6.EE.2', '6.EE.2a'],
    content: {
      intro: {
        title: 'Writing and Interpreting Expressions',
        text: 'An expression is a mathematical phrase that uses numbers, operations, and sometimes variables. Expressions are the building blocks of equations. In this module you will learn to translate word phrases into math expressions, use exponents, and understand the parts of an expression. This is your first big step into algebra.',
      },
      segments: [
        {
          index: 0,
          title: 'Numerical Expressions and Exponents',
          text: 'A numerical expression contains numbers and operations but no variables. Examples include 3 + 5 x 2 and 4^3. An exponent tells you how many times to use the base as a factor: 4^3 means 4 x 4 x 4 = 64. The base is 4 and the exponent is 3. We read 4^3 as "four to the third power" or "four cubed." Exponents make it easier to write repeated multiplication. Always evaluate exponents before multiplication or addition, following the order of operations.',
          keyVocabulary: ['numerical expression', 'exponent', 'base', 'power', 'order of operations'],
          example: '2^5 = 2 x 2 x 2 x 2 x 2 = 32. The base is 2 and the exponent is 5.',
        },
        {
          index: 1,
          title: 'Algebraic Expressions with Variables',
          text: 'An algebraic expression includes at least one variable — a letter that represents an unknown number. In the expression 3n + 7, the variable is n, the coefficient is 3, the term 3n means "3 times n," and 7 is a constant. To translate word phrases into expressions: "five more than a number" becomes n + 5; "twice a number decreased by 4" becomes 2n − 4; "the quotient of a number and 6" becomes n/6. Recognizing these patterns helps you set up real-world problems.',
          keyVocabulary: ['variable', 'coefficient', 'constant', 'term', 'algebraic expression'],
          example: '"Ten less than three times a number" translates to 3x − 10.',
        },
        {
          index: 2,
          title: 'Parts of an Expression',
          text: 'Expressions are made up of terms. In 4x + 3y − 5, there are three terms: 4x, 3y, and −5. Terms are separated by addition or subtraction. The coefficient of a term is the numerical part: in 4x the coefficient is 4. A constant term has no variable — here that is −5. Like terms have the same variable raised to the same power: 2x and 5x are like terms, but 2x and 2y are not. Identifying parts of an expression is essential for simplifying and solving equations later.',
          keyVocabulary: ['term', 'like terms', 'coefficient', 'constant term', 'simplify'],
          example: 'In 7a − 2b + 9, the terms are 7a, −2b, and 9. The constant is 9.',
        },
      ],
      practice: [
        { index: 0, question: 'Evaluate 3^4.', type: 'short-answer', correctAnswer: '81', hint: '3^4 means 3 x 3 x 3 x 3.', explanation: '3 x 3 = 9, 9 x 3 = 27, 27 x 3 = 81.', standardCode: '6.EE.1' },
        { index: 1, question: 'Write an expression for "7 less than twice a number."', type: 'short-answer', correctAnswer: '2n − 7', hint: '"Twice a number" means 2n. "Less than" means subtract.', explanation: 'Twice a number is 2n. Seven less than that is 2n − 7.', standardCode: '6.EE.2a' },
        { index: 2, question: 'How many terms are in the expression 5x + 3y − 8?', type: 'multiple-choice', options: ['2', '3', '4', '5'], correctAnswer: '3', hint: 'Count the parts separated by + or −.', explanation: 'The three terms are 5x, 3y, and −8.', standardCode: '6.EE.2' },
        { index: 3, question: 'What is the coefficient of y in the expression 9y + 4?', type: 'short-answer', correctAnswer: '9', hint: 'The coefficient is the number multiplied by the variable.', explanation: 'In 9y, the number 9 is multiplied by y, so the coefficient is 9.', standardCode: '6.EE.2' },
        { index: 4, question: 'Translate: "the sum of a number and 12, divided by 3."', type: 'multiple-choice', options: ['n + 12/3', '(n + 12)/3', '3/(n + 12)', 'n/3 + 12'], correctAnswer: '(n + 12)/3', hint: 'First find the sum, then divide the entire sum by 3.', explanation: '"The sum of a number and 12" is (n + 12). Dividing by 3 gives (n + 12)/3.', standardCode: '6.EE.2a' },
      ],
      assessment: {
        questions: [
          { question: 'Evaluate 2^6.', type: 'short-answer', correctAnswer: '64', standardCode: '6.EE.1' },
          { question: 'Write an expression for "4 times the sum of a number and 5."', type: 'short-answer', correctAnswer: '4(n + 5)', standardCode: '6.EE.2a' },
          { question: 'Which is a constant in 6m − 3n + 11?', type: 'multiple-choice', options: ['6m', '−3n', '11', 'm'], correctAnswer: '11', standardCode: '6.EE.2' },
        ],
      },
    },
  },
  {
    slug: 'grade6-math-evaluating-expressions',
    title: 'Evaluating Expressions',
    description: 'Substitute values for variables and evaluate algebraic expressions using the order of operations',
    subject: 'math',
    grade: 6,
    gradeBand: '6-8',
    topicCluster: 'Expressions & Equations',
    standardCodes: ['6.EE.2', '6.EE.2c', '6.EE.3'],
    content: {
      intro: {
        title: 'Evaluating Expressions',
        text: 'Once you know how to write expressions, the next step is evaluating them. Evaluating means replacing each variable with a given number and then computing the result using the order of operations. This skill connects algebra to real-world calculations — from figuring out total costs to computing distances. It also helps you check whether two expressions are equivalent.',
      },
      segments: [
        {
          index: 0,
          title: 'Substituting and Evaluating',
          text: 'To evaluate an expression, substitute the given value for the variable and simplify. For example, evaluate 3x + 7 when x = 4: replace x with 4 to get 3(4) + 7 = 12 + 7 = 19. If the expression has more than one variable, substitute each one. Evaluate 2a − b when a = 5 and b = 3: 2(5) − 3 = 10 − 3 = 7. Always use parentheses when substituting to avoid errors, especially when the value is negative or a fraction.',
          keyVocabulary: ['substitute', 'evaluate', 'parentheses', 'simplify'],
          example: 'Evaluate x^2 + 4 when x = 3: 3^2 + 4 = 9 + 4 = 13.',
        },
        {
          index: 1,
          title: 'Order of Operations',
          text: 'The order of operations ensures everyone gets the same answer. The sequence is: Parentheses first, then Exponents, then Multiplication and Division from left to right, and finally Addition and Subtraction from left to right. The acronym PEMDAS helps you remember. Evaluate 2 + 3 x 4: multiplication comes first, so 3 x 4 = 12, then 2 + 12 = 14. Compare with (2 + 3) x 4: parentheses first gives 5, then 5 x 4 = 20. Parentheses change the order and thus the result.',
          keyVocabulary: ['order of operations', 'PEMDAS', 'parentheses', 'left to right'],
          example: 'Evaluate 5 + 2^3 x 3: exponent first 2^3 = 8, multiply 8 x 3 = 24, add 5 + 24 = 29.',
        },
        {
          index: 2,
          title: 'Generating Equivalent Expressions',
          text: 'Two expressions are equivalent if they produce the same value for every possible input. For example, 2(x + 3) and 2x + 6 are equivalent because distributing gives the same expression. You can verify by substituting several values: when x = 1, both give 8; when x = 5, both give 16. The properties you use most are the distributive property, the commutative property (a + b = b + a), and the associative property ((a + b) + c = a + (b + c)). These let you rewrite and simplify expressions.',
          keyVocabulary: ['equivalent expressions', 'distributive property', 'commutative property', 'associative property'],
          example: '3(x + 4) = 3x + 12. Both give 21 when x = 3.',
        },
      ],
      practice: [
        { index: 0, question: 'Evaluate 5x − 2 when x = 6.', type: 'short-answer', correctAnswer: '28', hint: 'Replace x with 6 and simplify.', explanation: '5(6) − 2 = 30 − 2 = 28.', standardCode: '6.EE.2c' },
        { index: 1, question: 'Evaluate 4 + 3^2 x 2.', type: 'short-answer', correctAnswer: '22', hint: 'Follow PEMDAS: exponents first, then multiplication, then addition.', explanation: '3^2 = 9, then 9 x 2 = 18, then 4 + 18 = 22.', standardCode: '6.EE.2c' },
        { index: 2, question: 'Which expression is equivalent to 6(n + 2)?', type: 'multiple-choice', options: ['6n + 2', '6n + 8', '6n + 12', '12n'], correctAnswer: '6n + 12', hint: 'Use the distributive property.', explanation: '6(n + 2) = 6n + 12.', standardCode: '6.EE.3' },
        { index: 3, question: 'Evaluate a^2 + 2b when a = 4 and b = 3.', type: 'short-answer', correctAnswer: '22', hint: 'Substitute: 4^2 + 2(3).', explanation: '4^2 = 16. 2(3) = 6. 16 + 6 = 22.', standardCode: '6.EE.2c' },
        { index: 4, question: 'Are 3(x + 5) and 3x + 15 equivalent? Test with x = 2.', type: 'multiple-choice', options: ['Yes, both equal 21', 'No, they give different values', 'Yes, both equal 15', 'Cannot be determined'], correctAnswer: 'Yes, both equal 21', hint: 'Substitute x = 2 into both expressions.', explanation: '3(2 + 5) = 3(7) = 21. 3(2) + 15 = 6 + 15 = 21. They match.', standardCode: '6.EE.3' },
      ],
      assessment: {
        questions: [
          { question: 'Evaluate 2(x + 4) − 3 when x = 5.', type: 'short-answer', correctAnswer: '15', standardCode: '6.EE.2c' },
          { question: 'Evaluate 10 − 2^2 + 6 ÷ 3.', type: 'short-answer', correctAnswer: '8', standardCode: '6.EE.2c' },
          { question: 'Which expression is equivalent to 4x + 8?', type: 'multiple-choice', options: ['4(x + 8)', '2(2x + 4)', '4(x + 2)', '8(x + 1)'], correctAnswer: '4(x + 2)', standardCode: '6.EE.3' },
        ],
      },
    },
  },
  {
    slug: 'grade6-math-one-variable-equations',
    title: 'One-Variable Equations and Inequalities',
    description: 'Write and solve one-variable equations and inequalities and represent solutions on a number line',
    subject: 'math',
    grade: 6,
    gradeBand: '6-8',
    topicCluster: 'Expressions & Equations',
    standardCodes: ['6.EE.5', '6.EE.6', '6.EE.7', '6.EE.8'],
    content: {
      intro: {
        title: 'One-Variable Equations and Inequalities',
        text: 'An equation is a statement that two expressions are equal, like x + 3 = 10. An inequality says one side is greater or less than the other, like x > 5. Solving means finding the value or values that make the statement true. These tools let you answer questions like "how many hours must I work?" or "how much can I spend and stay within my budget?"',
      },
      segments: [
        {
          index: 0,
          title: 'Understanding Equations',
          text: 'An equation has two sides connected by an equals sign. The variable represents an unknown value you want to find. In x + 3 = 10, you need to find the number that, when 3 is added, gives 10. You can test values: try x = 5, then 5 + 3 = 8 (not 10); try x = 7, then 7 + 3 = 10 (true). So x = 7 is the solution. Writing equations from word problems is a key skill. "A number increased by 8 equals 20" becomes n + 8 = 20. Translating words to symbols is the bridge between real situations and algebra.',
          keyVocabulary: ['equation', 'solution', 'variable', 'equals sign', 'unknown'],
          example: '"Three times a number is 24" translates to 3n = 24. The solution is n = 8.',
        },
        {
          index: 1,
          title: 'Solving One-Step Equations',
          text: 'To solve an equation, isolate the variable by performing the inverse operation on both sides. For x + 9 = 15, subtract 9 from both sides: x = 15 − 9 = 6. For 4x = 28, divide both sides by 4: x = 28 ÷ 4 = 7. For x/3 = 5, multiply both sides by 3: x = 15. For x − 6 = 2, add 6 to both sides: x = 8. Always check your answer by substituting back into the original equation. This one-step process is the foundation for solving more complex equations in later grades.',
          keyVocabulary: ['inverse operation', 'isolate', 'solve', 'check'],
          example: 'Solve x − 4 = 11: add 4 to both sides → x = 15. Check: 15 − 4 = 11. Correct.',
        },
        {
          index: 2,
          title: 'Understanding and Graphing Inequalities',
          text: 'An inequality uses the symbols > (greater than), < (less than), ≥ (greater than or equal to), or ≤ (less than or equal to). The inequality x > 3 means x can be any number greater than 3, such as 3.5, 4, or 100. To graph x > 3 on a number line, draw an open circle at 3 (because 3 is not included) and shade to the right. For x ≥ 3, use a closed circle at 3 (because 3 is included). Inequalities often have infinitely many solutions, unlike equations that usually have just one.',
          keyVocabulary: ['inequality', 'greater than', 'less than', 'open circle', 'closed circle'],
          example: 'x ≤ 5: closed circle at 5, shade to the left. Any number 5 or less is a solution.',
        },
        {
          index: 3,
          title: 'Solving One-Step Inequalities',
          text: 'Solving inequalities is similar to solving equations — use inverse operations to isolate the variable. For x + 4 > 10, subtract 4 from both sides: x > 6. For 2x ≤ 14, divide both sides by 2: x ≤ 7. After solving, graph the solution on a number line. Write the solution in words: "x is greater than 6" or "x is at most 7." Applying this to real life: if you need at least $50 and already have $32, the inequality is 32 + x ≥ 50, so x ≥ 18 — you need at least $18 more.',
          keyVocabulary: ['solve inequalities', 'at least', 'at most', 'graph the solution'],
          example: 'Solve n − 5 < 12: add 5 → n < 17. Graph: open circle at 17, shade left.',
        },
      ],
      practice: [
        { index: 0, question: 'Solve: x + 7 = 15', type: 'short-answer', correctAnswer: '8', hint: 'Subtract 7 from both sides.', explanation: 'x = 15 − 7 = 8. Check: 8 + 7 = 15.', standardCode: '6.EE.7' },
        { index: 1, question: 'Solve: 5n = 45', type: 'short-answer', correctAnswer: '9', hint: 'Divide both sides by 5.', explanation: 'n = 45 ÷ 5 = 9. Check: 5(9) = 45.', standardCode: '6.EE.7' },
        { index: 2, question: 'Write an equation: "A number divided by 4 equals 9."', type: 'multiple-choice', options: ['n − 4 = 9', '4n = 9', 'n/4 = 9', 'n + 4 = 9'], correctAnswer: 'n/4 = 9', hint: '"Divided by 4" means n/4.', explanation: '"A number divided by 4" is n/4. Setting it equal to 9 gives n/4 = 9.', standardCode: '6.EE.6' },
        { index: 3, question: 'Which values are solutions to x > 4?', type: 'multiple-choice', options: ['3 and 4', '4 and 5', '5 and 6', '3 and 5'], correctAnswer: '5 and 6', hint: 'The solution must be greater than 4, not equal to 4.', explanation: '5 > 4 and 6 > 4 are both true. 4 is not greater than 4, and 3 < 4.', standardCode: '6.EE.5' },
        { index: 4, question: 'Solve: y − 3 ≤ 10', type: 'short-answer', correctAnswer: 'y ≤ 13', hint: 'Add 3 to both sides.', explanation: 'y ≤ 10 + 3, so y ≤ 13.', standardCode: '6.EE.8' },
      ],
      assessment: {
        questions: [
          { question: 'Solve: x/6 = 7', type: 'short-answer', correctAnswer: '42', standardCode: '6.EE.7' },
          { question: 'Write an equation for "12 more than a number is 31" and solve it.', type: 'short-answer', correctAnswer: '19', standardCode: '6.EE.7' },
          { question: 'Which graph represents x ≥ 2?', type: 'multiple-choice', options: ['Open circle at 2, shade right', 'Closed circle at 2, shade right', 'Open circle at 2, shade left', 'Closed circle at 2, shade left'], correctAnswer: 'Closed circle at 2, shade right', standardCode: '6.EE.8' },
        ],
      },
    },
  },

  // ============================================
  // Geometry (3 modules)
  // ============================================
  {
    slug: 'grade6-math-area-of-polygons',
    title: 'Area of Polygons',
    description: 'Find the area of triangles, quadrilaterals, and other polygons by composing and decomposing shapes',
    subject: 'math',
    grade: 6,
    gradeBand: '6-8',
    topicCluster: 'Geometry',
    standardCodes: ['6.G.1'],
    content: {
      intro: {
        title: 'Area of Polygons',
        text: 'Area measures the amount of flat space inside a shape, counted in square units. You already know how to find the area of a rectangle. In this module you will use that knowledge to find the area of triangles, parallelograms, trapezoids, and irregular polygons by breaking them into simpler pieces or combining pieces together.',
      },
      segments: [
        {
          index: 0,
          title: 'Area of Parallelograms',
          text: 'A parallelogram has two pairs of parallel sides. To find its area, you do not multiply the two side lengths — instead use the formula A = b x h, where b is the base and h is the height measured perpendicular to the base. Why does this work? Imagine cutting a right triangle from one end of the parallelogram and moving it to the other end. The shape becomes a rectangle with the same base and height. So the area of a parallelogram equals the area of the rectangle it can be rearranged into: base times height.',
          keyVocabulary: ['parallelogram', 'base', 'height', 'perpendicular', 'area'],
          example: 'A parallelogram with base 8 cm and height 5 cm has area = 8 x 5 = 40 cm².',
        },
        {
          index: 1,
          title: 'Area of Triangles',
          text: 'A triangle is exactly half of a parallelogram. If you copy a triangle, rotate the copy, and attach it to the original, you form a parallelogram. Since the parallelogram has area b x h, the triangle has area A = (1/2) x b x h. The base is any side of the triangle, and the height is the perpendicular distance from the base to the opposite vertex. For example, a triangle with base 10 in. and height 6 in. has area = (1/2)(10)(6) = 30 in². Always identify the correct height — it must form a right angle with the base.',
          keyVocabulary: ['triangle', 'vertex', 'perpendicular height', 'half'],
          example: 'Triangle with base 7 m and height 4 m: A = (1/2)(7)(4) = 14 m².',
        },
        {
          index: 2,
          title: 'Area of Trapezoids and Irregular Polygons',
          text: 'A trapezoid has exactly one pair of parallel sides called bases (b₁ and b₂). Its area formula is A = (1/2)(b₁ + b₂) x h. Think of it as averaging the two bases and multiplying by the height. For irregular polygons, decompose the shape into rectangles, triangles, and other known shapes, find each area, and add them together. You can also compose: enclose the irregular shape in a rectangle, find the rectangle area, and subtract the areas of the extra pieces.',
          keyVocabulary: ['trapezoid', 'decompose', 'compose', 'irregular polygon'],
          example: 'Trapezoid with bases 6 cm and 10 cm, height 4 cm: A = (1/2)(6 + 10)(4) = 32 cm².',
        },
      ],
      practice: [
        { index: 0, question: 'Find the area of a parallelogram with base 12 cm and height 7 cm.', type: 'short-answer', correctAnswer: '84 cm²', hint: 'Use A = base x height.', explanation: 'A = 12 x 7 = 84 cm².', standardCode: '6.G.1' },
        { index: 1, question: 'Find the area of a triangle with base 9 in. and height 6 in.', type: 'short-answer', correctAnswer: '27 in²', hint: 'Use A = (1/2) x base x height.', explanation: 'A = (1/2)(9)(6) = 27 in².', standardCode: '6.G.1' },
        { index: 2, question: 'A trapezoid has bases 5 m and 11 m and a height of 6 m. What is its area?', type: 'short-answer', correctAnswer: '48 m²', hint: 'Use A = (1/2)(b₁ + b₂) x h.', explanation: 'A = (1/2)(5 + 11)(6) = (1/2)(16)(6) = 48 m².', standardCode: '6.G.1' },
        { index: 3, question: 'An L-shaped room can be split into two rectangles: one is 4 ft by 10 ft and the other is 3 ft by 6 ft. What is the total area?', type: 'short-answer', correctAnswer: '58 ft²', hint: 'Find each rectangle area and add.', explanation: '4 x 10 = 40 and 3 x 6 = 18. Total = 40 + 18 = 58 ft².', standardCode: '6.G.1' },
        { index: 4, question: 'A triangle has an area of 24 cm² and a base of 8 cm. What is its height?', type: 'multiple-choice', options: ['3 cm', '4 cm', '6 cm', '12 cm'], correctAnswer: '6 cm', hint: 'Use 24 = (1/2)(8)(h) and solve for h.', explanation: '24 = 4h, so h = 6 cm.', standardCode: '6.G.1' },
      ],
      assessment: {
        questions: [
          { question: 'Find the area of a parallelogram with base 15 m and height 9 m.', type: 'short-answer', correctAnswer: '135 m²', standardCode: '6.G.1' },
          { question: 'A triangle has base 14 cm and height 10 cm. What is its area?', type: 'short-answer', correctAnswer: '70 cm²', standardCode: '6.G.1' },
          { question: 'A trapezoid has bases 8 ft and 12 ft and height 5 ft. What is its area?', type: 'multiple-choice', options: ['40 ft²', '50 ft²', '60 ft²', '100 ft²'], correctAnswer: '50 ft²', standardCode: '6.G.1' },
        ],
      },
    },
  },
  {
    slug: 'grade6-math-surface-area',
    title: 'Surface Area',
    description: 'Find the surface area of three-dimensional figures using nets and formulas',
    subject: 'math',
    grade: 6,
    gradeBand: '6-8',
    topicCluster: 'Geometry',
    standardCodes: ['6.G.4'],
    content: {
      intro: {
        title: 'Surface Area',
        text: 'Surface area is the total area of all the faces of a three-dimensional figure. Imagine unfolding a cereal box and laying it flat — the total area of that flat shape is the surface area. Knowing surface area helps with wrapping gifts, painting walls, and designing packaging. In this module you will use nets and formulas to find surface area of prisms and pyramids.',
      },
      segments: [
        {
          index: 0,
          title: 'Nets of 3D Figures',
          text: 'A net is a two-dimensional pattern that can be folded to form a three-dimensional figure. A rectangular prism (box) has 6 rectangular faces. When unfolded, its net shows all 6 rectangles laid flat. A triangular prism has 2 triangular faces and 3 rectangular faces. Drawing or identifying the net of a figure helps you see every face clearly, so you can calculate each face area without missing any. To find surface area, compute the area of each face in the net and add them all together.',
          keyVocabulary: ['net', 'face', 'three-dimensional', 'rectangular prism', 'triangular prism'],
          example: 'A cube net shows 6 identical squares. If each edge is 3 cm, each face is 9 cm², so SA = 54 cm².',
        },
        {
          index: 1,
          title: 'Surface Area of Rectangular Prisms',
          text: 'A rectangular prism has length l, width w, and height h. It has three pairs of identical faces: two l x w faces, two l x h faces, and two w x h faces. The surface area formula is SA = 2lw + 2lh + 2wh. For a box that is 5 cm long, 3 cm wide, and 4 cm tall: SA = 2(5)(3) + 2(5)(4) + 2(3)(4) = 30 + 40 + 24 = 94 cm². This formula works for any rectangular prism, including cubes where l = w = h.',
          keyVocabulary: ['surface area', 'length', 'width', 'height', 'formula'],
          example: 'Cube with edge 6 in.: SA = 2(6)(6) + 2(6)(6) + 2(6)(6) = 216 in², or simply 6 x 6² = 216 in².',
        },
        {
          index: 2,
          title: 'Surface Area of Triangular Prisms and Pyramids',
          text: 'A triangular prism has 2 triangular bases and 3 rectangular lateral faces. Find the area of each triangle using A = (1/2)bh and each rectangle using A = lw, then add them all. For a square pyramid, the base is a square and the 4 lateral faces are triangles. Find the area of the square base and each triangular face, then sum. The slant height of the pyramid — not the actual height — is the height used for the triangular faces. Always label your diagram to keep track of which measurements go where.',
          keyVocabulary: ['triangular prism', 'pyramid', 'lateral face', 'slant height'],
          example: 'Square pyramid, base 6 m, slant height 5 m: base area = 36, 4 triangles = 4 x (1/2)(6)(5) = 60. SA = 96 m².',
        },
      ],
      practice: [
        { index: 0, question: 'Find the surface area of a rectangular prism with l = 8, w = 5, h = 3 (all in cm).', type: 'short-answer', correctAnswer: '158 cm²', hint: 'Use SA = 2lw + 2lh + 2wh.', explanation: '2(8)(5) + 2(8)(3) + 2(5)(3) = 80 + 48 + 30 = 158 cm².', standardCode: '6.G.4' },
        { index: 1, question: 'A cube has edge length 4 in. What is its surface area?', type: 'short-answer', correctAnswer: '96 in²', hint: 'A cube has 6 identical square faces.', explanation: '6 x 4² = 6 x 16 = 96 in².', standardCode: '6.G.4' },
        { index: 2, question: 'How many faces does a triangular prism have?', type: 'multiple-choice', options: ['3', '4', '5', '6'], correctAnswer: '5', hint: 'Count the 2 triangular bases and the rectangular sides.', explanation: '2 triangular bases + 3 rectangular faces = 5 faces.', standardCode: '6.G.4' },
        { index: 3, question: 'A square pyramid has a base edge of 10 cm and a slant height of 8 cm. What is the total area of the 4 triangular faces?', type: 'short-answer', correctAnswer: '160 cm²', hint: 'Each triangle has base 10 and height 8.', explanation: 'Each triangle: (1/2)(10)(8) = 40. Four triangles: 4 x 40 = 160 cm².', standardCode: '6.G.4' },
        { index: 4, question: 'You need to wrap a box that is 12 in. long, 8 in. wide, and 6 in. tall. How much wrapping paper do you need (ignoring overlap)?', type: 'short-answer', correctAnswer: '432 in²', hint: 'Calculate the surface area.', explanation: '2(12)(8) + 2(12)(6) + 2(8)(6) = 192 + 144 + 96 = 432 in².', standardCode: '6.G.4' },
      ],
      assessment: {
        questions: [
          { question: 'Find the surface area of a rectangular prism: l = 10, w = 4, h = 7 (cm).', type: 'short-answer', correctAnswer: '236 cm²', standardCode: '6.G.4' },
          { question: 'A cube has surface area 150 cm². What is the edge length?', type: 'short-answer', correctAnswer: '5 cm', standardCode: '6.G.4' },
          { question: 'Which net folds into a triangular prism?', type: 'multiple-choice', options: ['2 triangles and 3 rectangles', '2 rectangles and 3 triangles', '4 triangles and 1 rectangle', '6 rectangles'], correctAnswer: '2 triangles and 3 rectangles', standardCode: '6.G.4' },
        ],
      },
    },
  },
  {
    slug: 'grade6-math-volume',
    title: 'Volume of Rectangular Prisms',
    description: 'Find the volume of right rectangular prisms with fractional edge lengths and solve real-world volume problems',
    subject: 'math',
    grade: 6,
    gradeBand: '6-8',
    topicCluster: 'Geometry',
    standardCodes: ['6.G.2'],
    content: {
      intro: {
        title: 'Volume of Rectangular Prisms',
        text: 'Volume measures how much space a three-dimensional object takes up, counted in cubic units. You learned to find volume of rectangular prisms with whole-number edges in fifth grade. Now you will extend that to prisms with fractional edge lengths. This skill is essential for filling containers, packing boxes, and understanding capacity in science and everyday life.',
      },
      segments: [
        {
          index: 0,
          title: 'Volume Review: V = l x w x h',
          text: 'The volume of a rectangular prism equals length times width times height. A box that is 5 cm long, 3 cm wide, and 4 cm tall has V = 5 x 3 x 4 = 60 cm³. You can also think of it as the area of the base times the height: the base is a 5 x 3 = 15 cm² rectangle, and stacking 4 layers gives 15 x 4 = 60 cm³. Both approaches give the same answer. Volume is always measured in cubic units such as cm³, in³, ft³, or m³. Choosing the right unit depends on the size of the object you are measuring.',
          keyVocabulary: ['volume', 'rectangular prism', 'cubic units', 'base area'],
          example: 'A room 12 ft x 10 ft x 8 ft has volume = 960 ft³.',
        },
        {
          index: 1,
          title: 'Volume with Fractional Edge Lengths',
          text: 'When edges include fractions, the process is the same: multiply length, width, and height. A prism that is 2 1/2 cm long, 4 cm wide, and 3 cm tall has V = 2.5 x 4 x 3 = 30 cm³. You can also convert to improper fractions: 5/2 x 4/1 x 3/1 = 60/2 = 30 cm³. Another way to think about fractional edges: fill the prism with small unit-fraction cubes. If each small cube has edges of 1/2 cm, its volume is (1/2)³ = 1/8 cm³. Count how many fit and multiply by 1/8 to find total volume.',
          keyVocabulary: ['fractional edge', 'improper fraction', 'unit-fraction cube', 'fill'],
          example: 'Prism 3/4 in. x 2 in. x 1/2 in.: V = 3/4 x 2 x 1/2 = 3/4 in³.',
        },
        {
          index: 2,
          title: 'Real-World Volume Problems',
          text: 'Volume problems appear whenever you need to fill or pack something. A fish tank is 20 in. long, 10 in. wide, and 12 in. tall. Its volume is 2,400 in³. To convert to gallons, use the fact that 1 gallon is about 231 in³: 2,400 ÷ 231 ≈ 10.4 gallons. When packing boxes into a shipping container, divide the container volume by the box volume to find how many fit. Always check that the dimensions align — you cannot rotate a box if it will not physically fit in a given orientation.',
          keyVocabulary: ['capacity', 'convert', 'packing', 'orientation'],
          example: 'How many 2 in. cubes fit in a 10 x 8 x 6 in. box? (10/2)(8/2)(6/2) = 5 x 4 x 3 = 60 cubes.',
        },
      ],
      practice: [
        { index: 0, question: 'Find the volume: l = 6, w = 4, h = 5 (all in cm).', type: 'short-answer', correctAnswer: '120 cm³', hint: 'V = l x w x h.', explanation: '6 x 4 x 5 = 120 cm³.', standardCode: '6.G.2' },
        { index: 1, question: 'A prism has edges 1/2 ft, 3 ft, and 2 ft. What is its volume?', type: 'short-answer', correctAnswer: '3 ft³', hint: 'Multiply the three dimensions.', explanation: '1/2 x 3 x 2 = 3 ft³.', standardCode: '6.G.2' },
        { index: 2, question: 'A box is 2.5 m long, 2 m wide, and 1.5 m tall. What is its volume?', type: 'short-answer', correctAnswer: '7.5 m³', hint: 'Multiply: 2.5 x 2 x 1.5.', explanation: '2.5 x 2 = 5. 5 x 1.5 = 7.5 m³.', standardCode: '6.G.2' },
        { index: 3, question: 'How many 1/3-inch cubes fit along a 2-inch edge?', type: 'multiple-choice', options: ['3', '6', '9', '12'], correctAnswer: '6', hint: 'Divide 2 by 1/3.', explanation: '2 ÷ 1/3 = 2 x 3 = 6 cubes along that edge.', standardCode: '6.G.2' },
        { index: 4, question: 'A container has volume 480 in³. If it is 10 in. long and 8 in. wide, what is its height?', type: 'short-answer', correctAnswer: '6 in.', hint: 'V = l x w x h, so h = V ÷ (l x w).', explanation: '480 ÷ (10 x 8) = 480 ÷ 80 = 6 in.', standardCode: '6.G.2' },
      ],
      assessment: {
        questions: [
          { question: 'Find the volume of a prism with edges 3/4 cm, 8 cm, and 2 cm.', type: 'short-answer', correctAnswer: '12 cm³', standardCode: '6.G.2' },
          { question: 'A storage bin is 3 ft long, 2 ft wide, and 1.5 ft tall. What is its volume?', type: 'short-answer', correctAnswer: '9 ft³', standardCode: '6.G.2' },
          { question: 'A fish tank holds 1,200 in³. If the base is 15 in. by 10 in., how deep is the water when full?', type: 'multiple-choice', options: ['6 in.', '8 in.', '10 in.', '12 in.'], correctAnswer: '8 in.', standardCode: '6.G.2' },
        ],
      },
    },
  },

  // ============================================
  // Statistics & Probability (3 modules)
  // ============================================
  {
    slug: 'grade6-math-statistical-questions-and-distribution',
    title: 'Statistical Questions and Data Distribution',
    description: 'Recognize statistical questions and describe the distribution of data using dot plots, histograms, and box plots',
    subject: 'math',
    grade: 6,
    gradeBand: '6-8',
    topicCluster: 'Statistics & Probability',
    standardCodes: ['6.SP.1', '6.SP.4'],
    content: {
      intro: {
        title: 'Statistical Questions and Data Distribution',
        text: 'Statistics begins with asking the right question. A statistical question expects variability in the answer — "How tall are sixth graders?" is statistical because heights vary, but "How tall is Maya?" is not. Once you collect data, you need ways to display and describe it. This module introduces statistical questions and three key data displays: dot plots, histograms, and box plots.',
      },
      segments: [
        {
          index: 0,
          title: 'What Makes a Question Statistical?',
          text: 'A statistical question anticipates that the data collected will vary. "How many siblings do students in our class have?" is statistical because different students have different numbers of siblings. "How many siblings does Jaylen have?" is not statistical because it has a single, fixed answer. Recognizing the difference matters because statistical questions require data collection and analysis. The variability in the data is what makes statistics interesting and useful. When you plan a survey or study, always check that your question expects a range of answers.',
          keyVocabulary: ['statistical question', 'variability', 'data', 'survey'],
          example: '"What is the average temperature in June?" is statistical — temperatures vary by day.',
        },
        {
          index: 1,
          title: 'Dot Plots and Histograms',
          text: 'A dot plot places a dot above a number line for each data value. If three students scored 85, three dots sit above 85. Dot plots show individual values and work best for small data sets. A histogram groups data into intervals (bins) and uses bars to show how many values fall in each bin. For example, test scores might be grouped into 60-69, 70-79, 80-89, 90-100. A taller bar means more data in that range. Histograms reveal the shape of a distribution — is it symmetric, skewed left, or skewed right?',
          keyVocabulary: ['dot plot', 'histogram', 'bin', 'interval', 'symmetric', 'skewed'],
          example: 'Heights of 20 plants: a histogram with bins 0-5, 5-10, 10-15, 15-20 cm shows the spread.',
        },
        {
          index: 2,
          title: 'Box Plots',
          text: 'A box plot (box-and-whisker plot) summarizes data using five values: the minimum, first quartile (Q1), median, third quartile (Q3), and maximum. The box spans from Q1 to Q3, with a line at the median. Whiskers extend from Q1 to the minimum and from Q3 to the maximum. Q1 is the median of the lower half, and Q3 is the median of the upper half. Box plots make it easy to compare distributions side by side and to spot outliers — values far from the rest of the data.',
          keyVocabulary: ['box plot', 'quartile', 'median', 'minimum', 'maximum', 'whisker', 'outlier'],
          example: 'Data: 2, 4, 5, 7, 8, 10, 12. Min = 2, Q1 = 4, Median = 7, Q3 = 10, Max = 12.',
        },
      ],
      practice: [
        { index: 0, question: 'Which is a statistical question?', type: 'multiple-choice', options: ['How old is the principal?', 'How many pages are in this book?', 'How many hours per week do students exercise?', 'What is the school mascot?'], correctAnswer: 'How many hours per week do students exercise?', hint: 'Which question expects different answers from different people?', explanation: 'Student exercise hours vary from person to person, making it a statistical question.', standardCode: '6.SP.1' },
        { index: 1, question: 'A dot plot shows the data: 3, 3, 4, 4, 4, 5, 6, 6. How many dots are above 4?', type: 'short-answer', correctAnswer: '3', hint: 'Count how many times 4 appears in the data set.', explanation: 'The value 4 appears 3 times, so there are 3 dots above 4.', standardCode: '6.SP.4' },
        { index: 2, question: 'In a histogram, the bar for 70-79 is the tallest. What does this mean?', type: 'multiple-choice', options: ['The highest score is 79', 'More data values fall between 70 and 79 than any other interval', 'The average is between 70 and 79', 'All students scored above 70'], correctAnswer: 'More data values fall between 70 and 79 than any other interval', hint: 'The height of a histogram bar represents frequency.', explanation: 'A taller bar means more data values in that interval.', standardCode: '6.SP.4' },
        { index: 3, question: 'Find Q1 for this data set: 10, 14, 18, 22, 26, 30, 34', type: 'short-answer', correctAnswer: '14', hint: 'Q1 is the median of the lower half (10, 14, 18).', explanation: 'Lower half: 10, 14, 18. The median of this half is 14.', standardCode: '6.SP.4' },
        { index: 4, question: 'On a box plot, the box stretches from 20 to 35 with a line at 28. What does the line represent?', type: 'short-answer', correctAnswer: 'The median', hint: 'The line inside the box marks a key measure of center.', explanation: 'The line inside the box represents the median of the data set.', standardCode: '6.SP.4' },
      ],
      assessment: {
        questions: [
          { question: 'Is "What is the population of our city?" a statistical question?', type: 'multiple-choice', options: ['Yes — populations vary', 'No — it has a single answer', 'It depends on the year', 'Only if you survey people'], correctAnswer: 'No — it has a single answer', standardCode: '6.SP.1' },
          { question: 'A box plot has Min = 5, Q1 = 12, Median = 18, Q3 = 25, Max = 40. What is the interquartile range?', type: 'short-answer', correctAnswer: '13', standardCode: '6.SP.4' },
          { question: 'Which data display shows individual data values?', type: 'multiple-choice', options: ['Histogram', 'Dot plot', 'Box plot', 'Circle graph'], correctAnswer: 'Dot plot', standardCode: '6.SP.4' },
        ],
      },
    },
  },
  {
    slug: 'grade6-math-measures-of-center',
    title: 'Measures of Center: Mean, Median, and Mode',
    description: 'Calculate and interpret the mean, median, and mode of a data set and understand when each measure is most useful',
    subject: 'math',
    grade: 6,
    gradeBand: '6-8',
    topicCluster: 'Statistics & Probability',
    standardCodes: ['6.SP.2', '6.SP.3', '6.SP.5'],
    content: {
      intro: {
        title: 'Measures of Center: Mean, Median, and Mode',
        text: 'When someone asks "what is a typical value in this data?" they are asking about measures of center. The mean, median, and mode are three ways to describe the center of a data set. Each has strengths and weaknesses depending on the shape of the data. In this module you will learn to calculate all three and decide which is the best summary for a given situation.',
      },
      segments: [
        {
          index: 0,
          title: 'The Mean (Average)',
          text: 'The mean is the sum of all data values divided by the number of values. For the data set 4, 7, 9, 10, 10, the sum is 40 and there are 5 values, so the mean is 40 ÷ 5 = 8. The mean uses every value in the data set, which makes it sensitive to very large or very small numbers (outliers). If one student scored 4, 7, 9, 10, and 50, the mean jumps to 16, even though most scores are much lower. Despite this, the mean is the most commonly used measure of center because it considers all data points equally.',
          keyVocabulary: ['mean', 'average', 'sum', 'outlier', 'sensitive'],
          example: 'Data: 12, 15, 18, 20, 25. Mean = 90 ÷ 5 = 18.',
        },
        {
          index: 1,
          title: 'The Median',
          text: 'The median is the middle value when data is arranged from least to greatest. For an odd number of values, the median is the exact center: in 3, 5, 7, 9, 11, the median is 7. For an even number of values, the median is the average of the two middle values: in 3, 5, 7, 9, the two middle values are 5 and 7, so the median is (5 + 7) ÷ 2 = 6. The median is not affected by outliers, making it a better measure of center when the data is skewed. For home prices in a neighborhood, the median is more representative than the mean if one mansion skews the data.',
          keyVocabulary: ['median', 'middle value', 'order', 'skewed', 'resistant'],
          example: 'Data: 2, 8, 10, 14, 20, 22. Median = (10 + 14) ÷ 2 = 12.',
        },
        {
          index: 2,
          title: 'The Mode and Choosing the Best Measure',
          text: 'The mode is the value that appears most often. In 5, 7, 7, 8, 10, the mode is 7. A data set can have no mode, one mode, or more than one mode (bimodal or multimodal). The mode is the only measure of center that works for non-numerical data — for example, the most popular lunch choice. Choosing the best measure depends on context: use the mean when data is symmetric with no outliers, the median when data is skewed or has outliers, and the mode when you want the most frequent value or when data is categorical.',
          keyVocabulary: ['mode', 'bimodal', 'categorical', 'best measure', 'context'],
          example: 'Shoe sizes sold: 7, 8, 8, 9, 9, 9, 10, 11. Mode = 9 (most common size).',
        },
      ],
      practice: [
        { index: 0, question: 'Find the mean of: 6, 8, 10, 12, 14.', type: 'short-answer', correctAnswer: '10', hint: 'Add all values and divide by 5.', explanation: '6 + 8 + 10 + 12 + 14 = 50. 50 ÷ 5 = 10.', standardCode: '6.SP.3' },
        { index: 1, question: 'Find the median of: 3, 7, 1, 9, 5.', type: 'short-answer', correctAnswer: '5', hint: 'First order the numbers from least to greatest.', explanation: 'Ordered: 1, 3, 5, 7, 9. The middle value is 5.', standardCode: '6.SP.3' },
        { index: 2, question: 'Find the median of: 4, 8, 12, 16.', type: 'short-answer', correctAnswer: '10', hint: 'There are 4 values, so average the two middle ones.', explanation: 'Ordered: 4, 8, 12, 16. Middle values are 8 and 12. (8 + 12) ÷ 2 = 10.', standardCode: '6.SP.3' },
        { index: 3, question: 'The data set is: 2, 5, 5, 5, 8, 12, 50. Which measure of center best represents the data?', type: 'multiple-choice', options: ['Mean', 'Median', 'Mode', 'Range'], correctAnswer: 'Median', hint: 'The value 50 is an outlier that will pull the mean up.', explanation: 'The outlier 50 makes the mean (12.4) higher than most values. The median (5) better represents the center.', standardCode: '6.SP.5' },
        { index: 4, question: 'What is the mode of: 4, 6, 6, 8, 8, 8, 10?', type: 'short-answer', correctAnswer: '8', hint: 'Which value appears most often?', explanation: '8 appears 3 times, more than any other value.', standardCode: '6.SP.3' },
      ],
      assessment: {
        questions: [
          { question: 'The mean of five numbers is 15. What is the sum of the five numbers?', type: 'short-answer', correctAnswer: '75', standardCode: '6.SP.3' },
          { question: 'Find the median of: 22, 18, 30, 25, 15, 28.', type: 'short-answer', correctAnswer: '23.5', standardCode: '6.SP.3' },
          { question: 'When is the median a better measure of center than the mean?', type: 'multiple-choice', options: ['When data is symmetric', 'When there are no outliers', 'When data has outliers or is skewed', 'When all values are the same'], correctAnswer: 'When data has outliers or is skewed', standardCode: '6.SP.5' },
        ],
      },
    },
  },
  {
    slug: 'grade6-math-measures-of-spread',
    title: 'Measures of Spread: Range, IQR, and MAD',
    description: 'Calculate and interpret range, interquartile range, and mean absolute deviation to describe data variability',
    subject: 'math',
    grade: 6,
    gradeBand: '6-8',
    topicCluster: 'Statistics & Probability',
    standardCodes: ['6.SP.2', '6.SP.3', '6.SP.5c'],
    content: {
      intro: {
        title: 'Measures of Spread: Range, IQR, and MAD',
        text: 'Knowing the center of a data set is only half the story. Two classes can have the same mean test score but very different spreads — one might have scores tightly packed near the mean, while the other is all over the place. Measures of spread, also called measures of variability, tell you how spread out data values are. This module covers range, interquartile range, and mean absolute deviation.',
      },
      segments: [
        {
          index: 0,
          title: 'Range',
          text: 'The range is the simplest measure of spread: subtract the minimum value from the maximum value. For the data set 12, 15, 18, 24, 30, the range is 30 − 12 = 18. A large range means the data spans a wide interval, while a small range means the values are close together. However, the range only depends on two values and can be misleading if there is an outlier. If the same data had one extra value of 95, the range would jump to 83, even though most values are still between 12 and 30.',
          keyVocabulary: ['range', 'minimum', 'maximum', 'spread', 'variability'],
          example: 'Data: 5, 7, 7, 9, 14. Range = 14 − 5 = 9.',
        },
        {
          index: 1,
          title: 'Interquartile Range (IQR)',
          text: 'The interquartile range focuses on the middle 50% of the data, ignoring extreme values. IQR = Q3 − Q1. For the data set 3, 5, 7, 9, 11, 13, 15, the median is 9, Q1 is 5, and Q3 is 13, so IQR = 13 − 5 = 8. Because the IQR does not include the lowest or highest 25% of data, it is resistant to outliers. A small IQR means the central data values are clustered together; a large IQR means they are more spread out. The IQR is directly visible on a box plot as the width of the box.',
          keyVocabulary: ['interquartile range', 'Q1', 'Q3', 'resistant', 'middle 50%'],
          example: 'Data: 2, 4, 6, 8, 10, 12. Q1 = 4, Q3 = 10. IQR = 10 − 4 = 6.',
        },
        {
          index: 2,
          title: 'Mean Absolute Deviation (MAD)',
          text: 'The mean absolute deviation measures how far, on average, each data value is from the mean. Step 1: find the mean. Step 2: find the distance of each value from the mean (absolute value of the difference). Step 3: average those distances. For data 2, 4, 6, 8, 10: the mean is 6. Distances from the mean: |2−6| = 4, |4−6| = 2, |6−6| = 0, |8−6| = 2, |10−6| = 4. Sum of distances = 12. MAD = 12 ÷ 5 = 2.4. A MAD of 2.4 means that, on average, each value is 2.4 units from the mean.',
          keyVocabulary: ['mean absolute deviation', 'MAD', 'distance from the mean', 'absolute value', 'average deviation'],
          example: 'Data: 10, 10, 10, 10. Mean = 10. All distances are 0. MAD = 0 (no spread at all).',
        },
        {
          index: 3,
          title: 'Comparing Data Sets Using Spread',
          text: 'Measures of spread are most powerful when comparing two or more data sets. Suppose Class A test scores have a mean of 80 and MAD of 3, while Class B has a mean of 80 and MAD of 10. Both classes have the same center, but Class A scores are much more consistent. You might conclude that instruction in Class A reached all students more evenly. When presenting data, always report both a measure of center and a measure of spread to give a complete picture of the distribution.',
          keyVocabulary: ['compare', 'consistent', 'distribution', 'complete picture'],
          example: 'Team A scores: range 10, IQR 4. Team B scores: range 30, IQR 15. Team A is more consistent.',
        },
      ],
      practice: [
        { index: 0, question: 'Find the range of: 14, 22, 8, 35, 19.', type: 'short-answer', correctAnswer: '27', hint: 'Subtract the minimum from the maximum.', explanation: 'Max = 35, Min = 8. Range = 35 − 8 = 27.', standardCode: '6.SP.3' },
        { index: 1, question: 'Data: 4, 6, 8, 10, 12, 14, 16. What is the IQR?', type: 'short-answer', correctAnswer: '8', hint: 'Find Q1 and Q3, then subtract.', explanation: 'Q1 = 6, Q3 = 14. IQR = 14 − 6 = 8.', standardCode: '6.SP.3' },
        { index: 2, question: 'The mean of a data set is 20. One value is 15. What is the distance of that value from the mean?', type: 'short-answer', correctAnswer: '5', hint: 'Find |15 − 20|.', explanation: '|15 − 20| = |−5| = 5.', standardCode: '6.SP.5c' },
        { index: 3, question: 'Data: 5, 5, 5, 5, 5. What is the MAD?', type: 'multiple-choice', options: ['0', '1', '5', '25'], correctAnswer: '0', hint: 'All values are the same. How far is each from the mean?', explanation: 'Mean = 5. Every distance is 0. MAD = 0.', standardCode: '6.SP.5c' },
        { index: 4, question: 'Class A has MAD = 2 and Class B has MAD = 8. Which class has more consistent scores?', type: 'multiple-choice', options: ['Class A', 'Class B', 'They are equally consistent', 'Cannot be determined'], correctAnswer: 'Class A', hint: 'A smaller MAD means values are closer to the mean.', explanation: 'Class A has a smaller MAD, meaning scores are closer to the mean and more consistent.', standardCode: '6.SP.5c' },
      ],
      assessment: {
        questions: [
          { question: 'Find the IQR of: 10, 15, 20, 25, 30, 35, 40.', type: 'short-answer', correctAnswer: '20', standardCode: '6.SP.3' },
          { question: 'Calculate the MAD for: 3, 5, 7, 9, 11. (Mean = 7)', type: 'short-answer', correctAnswer: '2.4', standardCode: '6.SP.5c' },
          { question: 'Which measure of spread is NOT affected by outliers?', type: 'multiple-choice', options: ['Range', 'IQR', 'Maximum', 'Minimum'], correctAnswer: 'IQR', standardCode: '6.SP.2' },
        ],
      },
    },
  },
]
