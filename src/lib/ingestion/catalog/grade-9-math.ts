import type { ModuleSeed } from '../types'

export const GRADE_9_MATH: ModuleSeed[] = [
  // ============================================
  // Linear Functions (3 modules)
  // ============================================
  {
    slug: 'grade9-math-slope-and-rate-of-change',
    title: 'Slope and Rate of Change',
    description: 'Understand slope as a rate of change and calculate it from graphs, tables, and pairs of points',
    subject: 'math',
    grade: 9,
    gradeBand: '9-12',
    topicCluster: 'Linear Functions',
    standardCodes: ['HSF-IF.6', 'HSF-IF.4'],
    content: {
      intro: {
        title: 'Slope and Rate of Change',
        text: 'Every time you compare how much something changes to how long it took, you are thinking about rate of change. In algebra, we call this slope. Slope tells you how steep a line is and whether it rises or falls. In this module you will learn to calculate slope from two points, read it from a graph, and interpret what it means in real-world situations like speed, cost per item, or temperature change over time.',
      },
      segments: [
        {
          index: 0,
          title: 'What Is Slope?',
          text: 'Slope measures the steepness and direction of a line. It is defined as the ratio of the vertical change (rise) to the horizontal change (run) between any two points on the line. A positive slope means the line goes up from left to right. A negative slope means it goes down. A slope of zero gives a horizontal line, and an undefined slope corresponds to a vertical line. Slope is consistent everywhere on a straight line, which is what makes linear relationships special.',
          keyVocabulary: ['slope', 'rise', 'run', 'positive slope', 'negative slope'],
          example: 'A ramp that rises 3 feet over a horizontal distance of 12 feet has slope 3/12 = 1/4.',
        },
        {
          index: 1,
          title: 'Calculating Slope from Two Points',
          text: 'Given two points (x₁, y₁) and (x₂, y₂), slope is calculated as m = (y₂ − y₁) / (x₂ − x₁). The order of subtraction must be the same in numerator and denominator. It does not matter which point you call "first" as long as you are consistent. For example, given (2, 5) and (6, 13), the slope is (13 − 5) / (6 − 2) = 8/4 = 2. This tells you y increases by 2 for every 1 unit increase in x.',
          keyVocabulary: ['slope formula', 'ordered pair', 'change in y', 'change in x'],
          example: 'Points (1, 3) and (4, 9): m = (9 − 3)/(4 − 1) = 6/3 = 2.',
        },
        {
          index: 2,
          title: 'Interpreting Slope in Context',
          text: 'In real-world problems, slope has meaning. If a graph shows miles driven over hours, the slope is speed in miles per hour. If a graph shows total cost versus number of items, the slope is the price per item. Negative slopes indicate decreasing quantities — for example, the amount of water in a draining pool over time. Always include units when interpreting slope in context, because slope is a rate.',
          keyVocabulary: ['rate of change', 'unit rate', 'interpret', 'context'],
          example: 'A phone plan charges $0.10 per text. The slope of the cost graph is 0.10 dollars per text.',
        },
        {
          index: 3,
          title: 'Reading Slope from Tables and Graphs',
          text: 'In a table, pick any two rows and apply the slope formula. If the x-values increase by a constant amount, check whether the y-values also change by a constant amount — if they do, the relationship is linear. On a graph, choose two points where the line crosses grid intersections for accuracy. Count the rise and run between them. Remember that going down counts as negative rise and going left counts as negative run.',
          keyVocabulary: ['table of values', 'grid intersection', 'constant rate'],
        },
      ],
      practice: [
        { index: 0, question: 'Find the slope of the line through (3, 7) and (5, 11).', type: 'multiple-choice', options: ['1', '2', '3', '4'], correctAnswer: '2', hint: 'Use m = (y₂ − y₁)/(x₂ − x₁).', explanation: 'm = (11 − 7)/(5 − 3) = 4/2 = 2. The line rises 2 units for every 1 unit to the right.', standardCode: 'HSF-IF.6' },
        { index: 1, question: 'A line passes through (0, 4) and (3, −2). What is the slope?', type: 'short-answer', correctAnswer: '-2', hint: 'Subtract the y-values, then the x-values.', explanation: 'm = (−2 − 4)/(3 − 0) = −6/3 = −2. The negative slope means the line falls from left to right.', standardCode: 'HSF-IF.6' },
        { index: 2, question: 'A car travels 150 miles in 3 hours at a constant speed. What is the slope of the distance-time graph?', type: 'short-answer', correctAnswer: '50', hint: 'Slope = distance / time.', explanation: '150/3 = 50. The slope is 50 miles per hour, which represents the car\'s speed.', standardCode: 'HSF-IF.4' },
        { index: 3, question: 'Which line is steeper: one with slope 3 or one with slope −5?', type: 'multiple-choice', options: ['Slope 3', 'Slope −5', 'They are the same'], correctAnswer: 'Slope −5', hint: 'Compare absolute values.', explanation: '|−5| = 5 > |3| = 3. The steepness of a line depends on the absolute value of its slope, so the line with slope −5 is steeper.', standardCode: 'HSF-IF.6' },
        { index: 4, question: 'A table shows x-values 1, 2, 3, 4 and y-values 5, 8, 11, 14. What is the slope?', type: 'multiple-choice', options: ['2', '3', '4', '5'], correctAnswer: '3', hint: 'Find the change in y for each unit change in x.', explanation: 'Each time x increases by 1, y increases by 3 (8−5=3, 11−8=3, 14−11=3). The slope is 3.', standardCode: 'HSF-IF.6' },
      ],
      assessment: {
        questions: [
          { question: 'Find the slope of the line through (−1, 6) and (2, 0).', type: 'short-answer', correctAnswer: '-2', standardCode: 'HSF-IF.6' },
          { question: 'A gym charges a $25 sign-up fee plus $10 per month. What does the slope of the cost graph represent?', type: 'multiple-choice', options: ['The sign-up fee', 'The monthly cost', 'The total cost after one year', 'The number of months'], correctAnswer: 'The monthly cost', standardCode: 'HSF-IF.4' },
          { question: 'Points (0, −3) and (4, 5) are on a line. What is the slope?', type: 'short-answer', correctAnswer: '2', standardCode: 'HSF-IF.6' },
        ],
      },
    },
  },
  {
    slug: 'grade9-math-slope-intercept-form',
    title: 'Slope-Intercept Form of Linear Equations',
    description: 'Write, graph, and interpret linear equations in y = mx + b form',
    subject: 'math',
    grade: 9,
    gradeBand: '9-12',
    topicCluster: 'Linear Functions',
    standardCodes: ['HSA-CED.2', 'HSF-IF.7'],
    content: {
      intro: {
        title: 'Slope-Intercept Form of Linear Equations',
        text: 'One of the most useful forms for a linear equation is y = mx + b, called slope-intercept form. The letter m represents the slope and b represents the y-intercept — the point where the line crosses the y-axis. This form makes it easy to graph a line quickly and to write equations from real-world scenarios. In this module you will learn how to move between equations, graphs, and word problems with confidence.',
      },
      segments: [
        {
          index: 0,
          title: 'Understanding y = mx + b',
          text: 'In the equation y = mx + b, m is the slope and b is the y-intercept. The y-intercept is the value of y when x equals zero, so the line passes through the point (0, b). For example, y = 2x + 3 has slope 2 and y-intercept 3. This means the line crosses the y-axis at (0, 3) and rises 2 units for every 1 unit to the right. Every linear equation can be rewritten in this form by solving for y.',
          keyVocabulary: ['slope-intercept form', 'y-intercept', 'coefficient', 'linear equation'],
          example: 'y = −3x + 7 has slope −3 and y-intercept 7. The line starts at (0, 7) and falls 3 units per 1 unit right.',
        },
        {
          index: 1,
          title: 'Graphing Using Slope-Intercept Form',
          text: 'To graph y = mx + b, first plot the y-intercept (0, b). Then use the slope to find a second point. If m = 3/4, move up 3 and right 4 from the y-intercept. Draw a straight line through both points. For negative slopes, move down instead of up. Always plot at least two points and extend the line in both directions. Using this method you can sketch any linear equation in under a minute.',
          keyVocabulary: ['plot', 'y-intercept', 'slope triangle', 'extend'],
          example: 'Graph y = (1/2)x − 1: start at (0, −1), go up 1 and right 2 to reach (2, 0), then draw the line.',
        },
        {
          index: 2,
          title: 'Writing Equations from Graphs and Scenarios',
          text: 'To write an equation from a graph, identify the y-intercept and calculate the slope between two clear points. Plug both into y = mx + b. For word problems, identify the starting value (b) and the rate of change (m). A plumber who charges $50 for a house call plus $30 per hour has the equation C = 30h + 50, where C is total cost and h is hours. Recognizing these parts in context is a key algebra skill.',
          keyVocabulary: ['starting value', 'rate', 'model', 'equation from context'],
          example: 'A taxi charges $2.50 base fare plus $1.50 per mile: C = 1.50m + 2.50.',
        },
      ],
      practice: [
        { index: 0, question: 'What is the slope and y-intercept of y = −4x + 9?', type: 'short-answer', correctAnswer: 'slope = -4, y-intercept = 9', hint: 'Compare to y = mx + b.', explanation: 'In y = mx + b, m = −4 and b = 9. The slope is −4 and the y-intercept is 9, meaning the line crosses the y-axis at (0, 9).', standardCode: 'HSF-IF.7' },
        { index: 1, question: 'A line has y-intercept 2 and slope 3. What is its equation?', type: 'multiple-choice', options: ['y = 2x + 3', 'y = 3x + 2', 'y = 3x − 2', 'y = −3x + 2'], correctAnswer: 'y = 3x + 2', hint: 'Plug m and b into y = mx + b.', explanation: 'With m = 3 and b = 2, the equation is y = 3x + 2.', standardCode: 'HSA-CED.2' },
        { index: 2, question: 'Rewrite 2x + y = 6 in slope-intercept form.', type: 'short-answer', correctAnswer: 'y = -2x + 6', hint: 'Solve for y by subtracting 2x from both sides.', explanation: 'Subtract 2x from both sides: y = −2x + 6. The slope is −2 and the y-intercept is 6.', standardCode: 'HSA-CED.2' },
        { index: 3, question: 'A streaming service costs $12 per month after a one-time $5 activation fee. Write an equation for total cost C after m months.', type: 'short-answer', correctAnswer: 'C = 12m + 5', hint: 'The monthly charge is the slope; the one-time fee is the y-intercept.', explanation: 'The rate of change is $12/month (slope) and the starting value is $5 (y-intercept), so C = 12m + 5.', standardCode: 'HSA-CED.2' },
        { index: 4, question: 'Which equation represents a line that crosses the y-axis at −3 and goes up 1 unit for every 2 units to the right?', type: 'multiple-choice', options: ['y = 2x − 3', 'y = (1/2)x − 3', 'y = −3x + 1/2', 'y = (1/2)x + 3'], correctAnswer: 'y = (1/2)x − 3', hint: 'The slope is rise/run = 1/2 and the y-intercept is −3.', explanation: 'Slope = 1/2 and y-intercept = −3 gives y = (1/2)x − 3.', standardCode: 'HSF-IF.7' },
      ],
      assessment: {
        questions: [
          { question: 'Write the equation of a line with slope −2 that passes through (0, 5).', type: 'short-answer', correctAnswer: 'y = -2x + 5', standardCode: 'HSA-CED.2' },
          { question: 'What is the y-intercept of the line 3x − y = 12?', type: 'multiple-choice', options: ['12', '−12', '3', '4'], correctAnswer: '−12', standardCode: 'HSF-IF.7' },
          { question: 'A pool holds 10,000 gallons and is being drained at 250 gallons per hour. Write an equation for the gallons G remaining after h hours.', type: 'short-answer', correctAnswer: 'G = -250h + 10000', standardCode: 'HSA-CED.2' },
        ],
      },
    },
  },
  {
    slug: 'grade9-math-point-slope-and-standard-form',
    title: 'Point-Slope and Standard Form',
    description: 'Write linear equations in point-slope and standard form and convert between all three representations',
    subject: 'math',
    grade: 9,
    gradeBand: '9-12',
    topicCluster: 'Linear Functions',
    standardCodes: ['HSA-CED.2', 'HSA-REI.10'],
    content: {
      intro: {
        title: 'Point-Slope and Standard Form',
        text: 'Slope-intercept form is not the only way to write a linear equation. Point-slope form y − y₁ = m(x − x₁) is especially useful when you know a point on the line and the slope but not the y-intercept. Standard form Ax + By = C is used in systems of equations and in many real-world formulas. In this module you will learn all three forms, when to use each, and how to convert between them fluently.',
      },
      segments: [
        {
          index: 0,
          title: 'Point-Slope Form',
          text: 'Point-slope form is y − y₁ = m(x − x₁), where m is the slope and (x₁, y₁) is any known point on the line. This form is derived directly from the slope formula. For example, a line with slope 4 passing through (1, 3) is y − 3 = 4(x − 1). You can distribute and simplify to get slope-intercept form: y − 3 = 4x − 4, so y = 4x − 1. Point-slope form is the fastest way to write an equation when you are given a slope and a point.',
          keyVocabulary: ['point-slope form', 'known point', 'derive', 'distribute'],
          example: 'Slope 2, point (3, 5): y − 5 = 2(x − 3) which simplifies to y = 2x − 1.',
        },
        {
          index: 1,
          title: 'Standard Form Ax + By = C',
          text: 'Standard form writes a linear equation as Ax + By = C, where A, B, and C are integers and A is usually positive. To convert y = 2x − 7 to standard form, subtract 2x from both sides: −2x + y = −7, then multiply by −1 to get 2x − y = 7. Standard form is convenient for finding intercepts — set x = 0 to find the y-intercept and set y = 0 to find the x-intercept. It is also the preferred form for systems of equations.',
          keyVocabulary: ['standard form', 'x-intercept', 'integer coefficients', 'convert'],
          example: 'y = (3/2)x + 4 → multiply all terms by 2: 2y = 3x + 8 → −3x + 2y = 8 → 3x − 2y = −8.',
        },
        {
          index: 2,
          title: 'Converting Between Forms',
          text: 'Moving between forms is an essential algebra skill. From point-slope to slope-intercept: distribute m and solve for y. From slope-intercept to standard: move the x-term to the left and clear fractions. From standard to slope-intercept: solve for y. Practice converting the same equation into all three forms to see that they describe the same line. The form you choose depends on the information you have and the problem you need to solve.',
          keyVocabulary: ['convert', 'equivalent equations', 'clear fractions', 'solve for y'],
        },
      ],
      practice: [
        { index: 0, question: 'Write the equation of a line with slope 3 through (2, 7) in point-slope form.', type: 'short-answer', correctAnswer: 'y - 7 = 3(x - 2)', hint: 'Use y − y₁ = m(x − x₁).', explanation: 'Substituting m = 3 and (x₁, y₁) = (2, 7) gives y − 7 = 3(x − 2).', standardCode: 'HSA-CED.2' },
        { index: 1, question: 'Convert y = 5x − 3 to standard form.', type: 'multiple-choice', options: ['5x − y = 3', '5x + y = 3', '−5x + y = −3', 'x − 5y = 3'], correctAnswer: '5x − y = 3', hint: 'Move all variable terms to one side.', explanation: 'Subtract y from both sides and rearrange: −5x + y = −3, multiply by −1: 5x − y = 3.', standardCode: 'HSA-CED.2' },
        { index: 2, question: 'Rewrite 4x + 2y = 10 in slope-intercept form.', type: 'short-answer', correctAnswer: 'y = -2x + 5', hint: 'Solve for y by isolating it on one side.', explanation: '2y = −4x + 10, so y = −2x + 5. The slope is −2 and y-intercept is 5.', standardCode: 'HSA-REI.10' },
        { index: 3, question: 'A line passes through (−1, 4) and (3, 12). Write its equation in slope-intercept form.', type: 'short-answer', correctAnswer: 'y = 2x + 6', hint: 'First find the slope, then use point-slope form and simplify.', explanation: 'm = (12 − 4)/(3 − (−1)) = 8/4 = 2. Using point (−1, 4): y − 4 = 2(x + 1) → y = 2x + 6.', standardCode: 'HSA-CED.2' },
        { index: 4, question: 'What are the x-intercept and y-intercept of 3x + 6y = 18?', type: 'short-answer', correctAnswer: 'x-intercept = 6, y-intercept = 3', hint: 'Set y = 0 to find the x-intercept and x = 0 to find the y-intercept.', explanation: 'When y = 0: 3x = 18, x = 6. When x = 0: 6y = 18, y = 3. The intercepts are (6, 0) and (0, 3).', standardCode: 'HSA-REI.10' },
      ],
      assessment: {
        questions: [
          { question: 'Write the equation of a line through (4, −1) with slope −2 in all three forms.', type: 'short-answer', correctAnswer: 'Point-slope: y + 1 = -2(x - 4); Slope-intercept: y = -2x + 7; Standard: 2x + y = 7', standardCode: 'HSA-CED.2' },
          { question: 'Convert 6x − 3y = 9 to slope-intercept form.', type: 'multiple-choice', options: ['y = 2x − 3', 'y = −2x + 3', 'y = 6x − 3', 'y = 2x + 3'], correctAnswer: 'y = 2x − 3', standardCode: 'HSA-REI.10' },
          { question: 'A line passes through (0, −4) and (2, 0). Write the equation in standard form.', type: 'short-answer', correctAnswer: '2x - y = 4', standardCode: 'HSA-CED.2' },
        ],
      },
    },
  },

  // ============================================
  // Quadratic Functions (3 modules)
  // ============================================
  {
    slug: 'grade9-math-intro-to-quadratics',
    title: 'Introduction to Quadratic Functions',
    description: 'Explore the shape, features, and standard form of quadratic functions and their parabolic graphs',
    subject: 'math',
    grade: 9,
    gradeBand: '9-12',
    topicCluster: 'Quadratic Functions',
    standardCodes: ['HSF-IF.4', 'HSF-IF.7'],
    content: {
      intro: {
        title: 'Introduction to Quadratic Functions',
        text: 'Not every relationship is linear. When you throw a ball into the air, its height follows a curved path called a parabola. The equations that describe parabolas are called quadratic functions, and they have the form y = ax² + bx + c. In this module you will learn what makes a function quadratic, how to identify key features of its graph, and why quadratics appear in so many real-world situations.',
      },
      segments: [
        {
          index: 0,
          title: 'What Makes a Function Quadratic?',
          text: 'A quadratic function has the form f(x) = ax² + bx + c where a, b, and c are constants and a is not zero. The highest power of x is 2, which is why it is called a second-degree polynomial. If a is positive the parabola opens upward like a cup; if a is negative it opens downward. The value of a also controls the width — larger absolute values of a produce narrower parabolas while smaller values produce wider ones.',
          keyVocabulary: ['quadratic function', 'parabola', 'standard form', 'second-degree polynomial', 'coefficient'],
          example: 'f(x) = 2x² − 3x + 1 is quadratic (a = 2, opens up). g(x) = −x² + 4 is quadratic (a = −1, opens down).',
        },
        {
          index: 1,
          title: 'The Vertex and Axis of Symmetry',
          text: 'Every parabola has a vertex, the highest or lowest point on the curve. For y = ax² + bx + c, the x-coordinate of the vertex is x = −b/(2a). Plug this back in to find the y-coordinate. The vertical line x = −b/(2a) is the axis of symmetry — the parabola is a mirror image on either side. When a is positive the vertex is the minimum; when a is negative it is the maximum. The vertex tells you the optimal value in many applications.',
          keyVocabulary: ['vertex', 'axis of symmetry', 'minimum', 'maximum'],
          example: 'For y = x² − 6x + 8, the vertex x-coordinate is −(−6)/(2·1) = 3. Then y = 9 − 18 + 8 = −1. Vertex: (3, −1).',
        },
        {
          index: 2,
          title: 'Graphing Quadratics by Plotting Points',
          text: 'To graph a quadratic, start by finding the vertex and axis of symmetry. Then choose x-values on both sides of the axis and compute the corresponding y-values. Because of symmetry, each point on one side has a mirror point on the other. Plot these points, draw a smooth curve through them, and label the vertex. Also note where the parabola crosses the x-axis (the zeros or roots) and where it crosses the y-axis (the point (0, c)).',
          keyVocabulary: ['zeros', 'roots', 'y-intercept', 'symmetry', 'smooth curve'],
        },
      ],
      practice: [
        { index: 0, question: 'Does the parabola y = −3x² + 6x − 1 open upward or downward?', type: 'multiple-choice', options: ['Upward', 'Downward'], correctAnswer: 'Downward', hint: 'Look at the sign of a.', explanation: 'Since a = −3 is negative, the parabola opens downward.', standardCode: 'HSF-IF.7' },
        { index: 1, question: 'Find the vertex of y = x² + 4x + 3.', type: 'short-answer', correctAnswer: '(-2, -1)', hint: 'Use x = −b/(2a) to find the x-coordinate.', explanation: 'x = −4/(2·1) = −2. y = (−2)² + 4(−2) + 3 = 4 − 8 + 3 = −1. The vertex is (−2, −1).', standardCode: 'HSF-IF.4' },
        { index: 2, question: 'What is the axis of symmetry for y = 2x² − 8x + 5?', type: 'multiple-choice', options: ['x = 2', 'x = 4', 'x = −2', 'x = 8'], correctAnswer: 'x = 2', hint: 'Use x = −b/(2a).', explanation: 'x = −(−8)/(2·2) = 8/4 = 2. The axis of symmetry is x = 2.', standardCode: 'HSF-IF.4' },
        { index: 3, question: 'What is the y-intercept of y = 3x² − x + 7?', type: 'short-answer', correctAnswer: '7', hint: 'The y-intercept occurs when x = 0.', explanation: 'When x = 0, y = 3(0) − 0 + 7 = 7. The y-intercept is (0, 7).', standardCode: 'HSF-IF.7' },
        { index: 4, question: 'A ball is launched upward with height h = −16t² + 48t + 5. Is the vertex a maximum or minimum?', type: 'multiple-choice', options: ['Maximum', 'Minimum'], correctAnswer: 'Maximum', hint: 'What is the sign of a?', explanation: 'Since a = −16 is negative, the parabola opens downward, so the vertex is the maximum height.', standardCode: 'HSF-IF.4' },
      ],
      assessment: {
        questions: [
          { question: 'Find the vertex and axis of symmetry of y = −x² + 2x + 8.', type: 'short-answer', correctAnswer: 'Vertex: (1, 9); axis of symmetry: x = 1', standardCode: 'HSF-IF.4' },
          { question: 'Which function has a wider parabola: y = 4x² or y = (1/2)x²?', type: 'multiple-choice', options: ['y = 4x²', 'y = (1/2)x²'], correctAnswer: 'y = (1/2)x²', standardCode: 'HSF-IF.7' },
          { question: 'What is the y-intercept and vertex of y = x² − 2x − 3?', type: 'short-answer', correctAnswer: 'y-intercept: -3; vertex: (1, -4)', standardCode: 'HSF-IF.4' },
        ],
      },
    },
  },
  {
    slug: 'grade9-math-factoring-quadratics',
    title: 'Factoring Quadratic Expressions',
    description: 'Factor trinomials and use the zero-product property to solve quadratic equations',
    subject: 'math',
    grade: 9,
    gradeBand: '9-12',
    topicCluster: 'Quadratic Functions',
    standardCodes: ['HSA-SSE.3', 'HSA-REI.4'],
    content: {
      intro: {
        title: 'Factoring Quadratic Expressions',
        text: 'Factoring is one of the most important skills in algebra. It lets you break a quadratic expression into simpler pieces, which makes solving equations much easier. When you factor x² + 5x + 6 into (x + 2)(x + 3), you transform a complex expression into a product of two binomials. In this module you will learn systematic methods for factoring trinomials and use the zero-product property to find the solutions of quadratic equations.',
      },
      segments: [
        {
          index: 0,
          title: 'Factoring When a = 1',
          text: 'To factor x² + bx + c, find two numbers that multiply to c and add to b. For x² + 7x + 12, you need two numbers that multiply to 12 and add to 7. Those numbers are 3 and 4, so the factored form is (x + 3)(x + 4). If c is negative, one of the numbers must be negative. For x² + 2x − 15, the numbers are 5 and −3 because 5(−3) = −15 and 5 + (−3) = 2. The factored form is (x + 5)(x − 3). Always check by multiplying the factors back out.',
          keyVocabulary: ['factor', 'trinomial', 'binomial', 'product-sum method'],
          example: 'x² − x − 6: find two numbers that multiply to −6 and add to −1. They are −3 and 2. So x² − x − 6 = (x − 3)(x + 2).',
        },
        {
          index: 1,
          title: 'The Zero-Product Property',
          text: 'The zero-product property states that if the product of two factors is zero, then at least one factor must be zero. So if (x + 2)(x − 5) = 0, either x + 2 = 0 or x − 5 = 0, giving x = −2 or x = 5. This is why factoring is so powerful for solving equations: factor the quadratic, set each factor equal to zero, and solve. The solutions are the x-intercepts of the parabola. These values are also called the roots or zeros of the function.',
          keyVocabulary: ['zero-product property', 'roots', 'zeros', 'x-intercepts', 'solutions'],
          example: 'Solve x² − 9 = 0: factor as (x − 3)(x + 3) = 0, so x = 3 or x = −3.',
        },
        {
          index: 2,
          title: 'Special Factoring Patterns',
          text: 'Some quadratics follow special patterns. A difference of two squares factors as a² − b² = (a − b)(a + b). A perfect square trinomial factors as a² + 2ab + b² = (a + b)² or a² − 2ab + b² = (a − b)². Recognizing these patterns saves time. For example, 4x² − 25 = (2x − 5)(2x + 5) and x² + 10x + 25 = (x + 5)². Always look for a greatest common factor (GCF) first — for example, 3x² + 12x + 12 = 3(x² + 4x + 4) = 3(x + 2)².',
          keyVocabulary: ['difference of squares', 'perfect square trinomial', 'greatest common factor'],
          example: '9x² − 1 = (3x − 1)(3x + 1). x² − 8x + 16 = (x − 4)².',
        },
      ],
      practice: [
        { index: 0, question: 'Factor x² + 9x + 20.', type: 'multiple-choice', options: ['(x + 4)(x + 5)', '(x + 2)(x + 10)', '(x + 1)(x + 20)', '(x + 3)(x + 7)'], correctAnswer: '(x + 4)(x + 5)', hint: 'Find two numbers that multiply to 20 and add to 9.', explanation: '4 × 5 = 20 and 4 + 5 = 9, so x² + 9x + 20 = (x + 4)(x + 5).', standardCode: 'HSA-SSE.3' },
        { index: 1, question: 'Solve x² − 3x − 10 = 0.', type: 'short-answer', correctAnswer: 'x = 5 or x = -2', hint: 'Factor first, then use the zero-product property.', explanation: 'x² − 3x − 10 = (x − 5)(x + 2) = 0. So x = 5 or x = −2.', standardCode: 'HSA-REI.4' },
        { index: 2, question: 'Factor 25x² − 16.', type: 'short-answer', correctAnswer: '(5x - 4)(5x + 4)', hint: 'This is a difference of two squares.', explanation: '25x² = (5x)² and 16 = 4². Using a² − b² = (a − b)(a + b): (5x − 4)(5x + 4).', standardCode: 'HSA-SSE.3' },
        { index: 3, question: 'Factor x² + 6x + 9.', type: 'multiple-choice', options: ['(x + 3)²', '(x + 9)(x + 1)', '(x + 6)(x + 3)', '(x − 3)²'], correctAnswer: '(x + 3)²', hint: 'Check if this is a perfect square trinomial.', explanation: 'x² + 6x + 9 = x² + 2(3)x + 3² = (x + 3)². This is a perfect square trinomial.', standardCode: 'HSA-SSE.3' },
        { index: 4, question: 'Solve 2x² + 8x = 0.', type: 'short-answer', correctAnswer: 'x = 0 or x = -4', hint: 'Factor out the GCF first.', explanation: '2x² + 8x = 2x(x + 4) = 0. So 2x = 0 or x + 4 = 0, giving x = 0 or x = −4.', standardCode: 'HSA-REI.4' },
      ],
      assessment: {
        questions: [
          { question: 'Factor and solve x² − 5x + 6 = 0.', type: 'short-answer', correctAnswer: '(x - 2)(x - 3) = 0; x = 2 or x = 3', standardCode: 'HSA-REI.4' },
          { question: 'Factor 4x² − 49.', type: 'multiple-choice', options: ['(2x − 7)(2x + 7)', '(4x − 7)(x + 7)', '(2x − 49)(2x + 1)', '(4x − 49)(x + 1)'], correctAnswer: '(2x − 7)(2x + 7)', standardCode: 'HSA-SSE.3' },
          { question: 'Factor completely: 3x² + 18x + 27.', type: 'short-answer', correctAnswer: '3(x + 3)²', standardCode: 'HSA-SSE.3' },
        ],
      },
    },
  },
  {
    slug: 'grade9-math-quadratic-formula',
    title: 'The Quadratic Formula',
    description: 'Use the quadratic formula and discriminant to solve any quadratic equation and determine the nature of its solutions',
    subject: 'math',
    grade: 9,
    gradeBand: '9-12',
    topicCluster: 'Quadratic Functions',
    standardCodes: ['HSA-REI.4', 'HSA-SSE.3'],
    content: {
      intro: {
        title: 'The Quadratic Formula',
        text: 'Some quadratic equations are difficult or impossible to factor with integers. The quadratic formula x = (−b ± √(b² − 4ac)) / (2a) works for every quadratic equation ax² + bx + c = 0. It is one of the most powerful tools in algebra. In this module you will learn to apply the formula step by step, use the discriminant to predict how many solutions an equation has, and understand when solutions are real or complex.',
      },
      segments: [
        {
          index: 0,
          title: 'Deriving and Applying the Formula',
          text: 'The quadratic formula comes from completing the square on the general equation ax² + bx + c = 0. For any equation in this form, the solutions are x = (−b ± √(b² − 4ac)) / (2a). To use it, identify a, b, and c, then substitute carefully. For 2x² + 3x − 5 = 0, a = 2, b = 3, c = −5. The discriminant is 3² − 4(2)(−5) = 9 + 40 = 49. So x = (−3 ± 7)/4, giving x = 1 or x = −5/2. Always simplify your answers fully.',
          keyVocabulary: ['quadratic formula', 'substitute', 'simplify', 'completing the square'],
          example: 'x² + 2x − 8 = 0: a=1, b=2, c=−8. x = (−2 ± √(4+32))/2 = (−2 ± 6)/2, so x = 2 or x = −4.',
        },
        {
          index: 1,
          title: 'The Discriminant',
          text: 'The expression b² − 4ac under the square root is called the discriminant. It tells you how many real solutions the equation has before you finish solving. If the discriminant is positive, there are two distinct real solutions. If it equals zero, there is exactly one real solution (a repeated root). If it is negative, there are no real solutions — the parabola does not cross the x-axis. Checking the discriminant first can save work and give insight into the graph.',
          keyVocabulary: ['discriminant', 'two real solutions', 'repeated root', 'no real solutions'],
          example: 'For x² + 4x + 4 = 0: discriminant = 16 − 16 = 0, so there is exactly one solution: x = −2.',
        },
        {
          index: 2,
          title: 'Choosing a Solution Method',
          text: 'You now have multiple ways to solve quadratics: factoring, completing the square, and the quadratic formula. Factoring is fastest when the expression factors neatly with integers. The quadratic formula always works but involves more computation. Completing the square is useful when converting to vertex form. For a timed test, try factoring first — if it does not work quickly, switch to the formula. On real-world problems where exact answers are needed, the formula is reliable.',
          keyVocabulary: ['solution method', 'efficient', 'exact answer', 'vertex form'],
        },
      ],
      practice: [
        { index: 0, question: 'Use the quadratic formula to solve x² − 6x + 5 = 0.', type: 'short-answer', correctAnswer: 'x = 1 or x = 5', hint: 'Identify a = 1, b = −6, c = 5 and substitute into the formula.', explanation: 'Discriminant = 36 − 20 = 16. x = (6 ± 4)/2, so x = 5 or x = 1.', standardCode: 'HSA-REI.4' },
        { index: 1, question: 'What is the discriminant of 3x² + 2x + 5 = 0?', type: 'multiple-choice', options: ['−56', '56', '64', '−64'], correctAnswer: '-56', hint: 'Calculate b² − 4ac.', explanation: 'b² − 4ac = 4 − 60 = −56. Since the discriminant is negative, there are no real solutions.', standardCode: 'HSA-REI.4' },
        { index: 2, question: 'How many real solutions does x² + 8x + 16 = 0 have?', type: 'multiple-choice', options: ['0', '1', '2'], correctAnswer: '1', hint: 'Compute the discriminant.', explanation: 'Discriminant = 64 − 64 = 0. A discriminant of zero means exactly one real solution (x = −4).', standardCode: 'HSA-REI.4' },
        { index: 3, question: 'Solve 2x² − 7x + 3 = 0 using the quadratic formula.', type: 'short-answer', correctAnswer: 'x = 3 or x = 1/2', hint: 'a = 2, b = −7, c = 3.', explanation: 'Discriminant = 49 − 24 = 25. x = (7 ± 5)/4. So x = 12/4 = 3 or x = 2/4 = 1/2.', standardCode: 'HSA-REI.4' },
        { index: 4, question: 'A quadratic equation has discriminant 0. What does this tell you about its graph?', type: 'multiple-choice', options: ['The parabola crosses the x-axis at two points', 'The parabola touches the x-axis at exactly one point', 'The parabola does not touch the x-axis', 'The parabola is a straight line'], correctAnswer: 'The parabola touches the x-axis at exactly one point', hint: 'Think about what one solution means for the graph.', explanation: 'Discriminant = 0 means one repeated real root, so the vertex of the parabola sits exactly on the x-axis.', standardCode: 'HSA-SSE.3' },
      ],
      assessment: {
        questions: [
          { question: 'Solve x² + 3x − 10 = 0 using the quadratic formula.', type: 'short-answer', correctAnswer: 'x = 2 or x = -5', standardCode: 'HSA-REI.4' },
          { question: 'What is the discriminant of 5x² − 4x + 1 = 0, and how many real solutions are there?', type: 'short-answer', correctAnswer: 'Discriminant = -4; no real solutions', standardCode: 'HSA-REI.4' },
          { question: 'Which method is best for solving x² − 9 = 0?', type: 'multiple-choice', options: ['Quadratic formula', 'Factoring (difference of squares)', 'Completing the square', 'Graphing'], correctAnswer: 'Factoring (difference of squares)', standardCode: 'HSA-SSE.3' },
        ],
      },
    },
  },

  // ============================================
  // Systems of Equations (2 modules)
  // ============================================
  {
    slug: 'grade9-math-solving-systems-graphing-substitution',
    title: 'Solving Systems by Graphing and Substitution',
    description: 'Solve systems of two linear equations using graphing and the substitution method',
    subject: 'math',
    grade: 9,
    gradeBand: '9-12',
    topicCluster: 'Systems of Equations',
    standardCodes: ['HSA-REI.6', 'HSA-REI.11'],
    content: {
      intro: {
        title: 'Solving Systems by Graphing and Substitution',
        text: 'A system of equations is a set of two or more equations with the same variables. The solution is the point (or points) where all equations are true at the same time. Graphically, this is where the lines intersect. In this module you will learn to solve systems by graphing both lines and by using substitution — replacing one variable with an expression from the other equation.',
      },
      segments: [
        {
          index: 0,
          title: 'Solving by Graphing',
          text: 'To solve a system by graphing, write each equation in slope-intercept form, graph both lines on the same coordinate plane, and identify the point of intersection. For example, to solve y = 2x + 1 and y = −x + 7, graph both lines. They intersect at (2, 5). Check: 5 = 2(2) + 1 = 5 and 5 = −2 + 7 = 5. Both equations are satisfied. Graphing gives a visual understanding of systems but may be imprecise when the intersection is not at integer coordinates.',
          keyVocabulary: ['system of equations', 'intersection', 'solution', 'coordinate plane'],
          example: 'y = x + 1 and y = −2x + 7 intersect at (2, 3). Check: 3 = 2+1 and 3 = −4+7.',
        },
        {
          index: 1,
          title: 'The Substitution Method',
          text: 'Substitution works by solving one equation for one variable and plugging that expression into the other equation. Given y = 3x − 1 and 2x + y = 9, substitute the first equation into the second: 2x + (3x − 1) = 9. Simplify: 5x − 1 = 9, so 5x = 10 and x = 2. Then y = 3(2) − 1 = 5. The solution is (2, 5). Substitution is especially efficient when one equation is already solved for a variable.',
          keyVocabulary: ['substitution', 'isolate', 'substitute', 'back-substitute'],
          example: 'x + y = 10 and y = 2x + 1. Substitute: x + (2x + 1) = 10 → 3x = 9 → x = 3, y = 7.',
        },
        {
          index: 2,
          title: 'Types of Solutions',
          text: 'A system of two linear equations can have exactly one solution (the lines intersect at one point), no solution (the lines are parallel — same slope, different intercepts), or infinitely many solutions (the lines are identical — same slope and same intercept). When using substitution, no solution appears as a false statement like 0 = 5, while infinitely many solutions appear as a true identity like 0 = 0. Recognizing these cases prevents confusion.',
          keyVocabulary: ['one solution', 'no solution', 'infinitely many solutions', 'parallel', 'coincident'],
        },
      ],
      practice: [
        { index: 0, question: 'Solve by substitution: y = x + 3 and 2x + y = 12.', type: 'short-answer', correctAnswer: 'x = 3, y = 6', hint: 'Substitute x + 3 for y in the second equation.', explanation: '2x + (x + 3) = 12 → 3x + 3 = 12 → 3x = 9 → x = 3. Then y = 3 + 3 = 6.', standardCode: 'HSA-REI.6' },
        { index: 1, question: 'What is the solution of y = 2x − 1 and y = 2x + 4?', type: 'multiple-choice', options: ['(0, −1)', '(2, 3)', 'No solution', 'Infinitely many solutions'], correctAnswer: 'No solution', hint: 'Compare the slopes and y-intercepts.', explanation: 'Both lines have slope 2 but different y-intercepts, so they are parallel and never intersect.', standardCode: 'HSA-REI.6' },
        { index: 2, question: 'Solve: x = 4y and 3x − 2y = 20.', type: 'short-answer', correctAnswer: 'x = 8, y = 2', hint: 'Substitute 4y for x in the second equation.', explanation: '3(4y) − 2y = 20 → 12y − 2y = 20 → 10y = 20 → y = 2. Then x = 4(2) = 8.', standardCode: 'HSA-REI.6' },
        { index: 3, question: 'Two lines intersect at (−1, 4). Which system could they represent?', type: 'multiple-choice', options: ['y = 2x + 6 and y = −x + 3', 'y = x + 5 and y = 3x + 7', 'y = 2x + 4 and y = −x − 1', 'y = x and y = −x'], correctAnswer: 'y = 2x + 6 and y = −x + 3', hint: 'Plug (−1, 4) into both equations of each option.', explanation: 'Check: 4 = 2(−1) + 6 = 4 ✓ and 4 = −(−1) + 3 = 4 ✓. The point (−1, 4) satisfies both equations.', standardCode: 'HSA-REI.11' },
        { index: 4, question: 'If solving a system by substitution gives you 0 = 0, what does that mean?', type: 'multiple-choice', options: ['No solution', 'Exactly one solution', 'Infinitely many solutions', 'The answer is x = 0'], correctAnswer: 'Infinitely many solutions', hint: '0 = 0 is always true.', explanation: 'A true identity like 0 = 0 means the two equations represent the same line, so every point on that line is a solution.', standardCode: 'HSA-REI.6' },
      ],
      assessment: {
        questions: [
          { question: 'Solve by substitution: y = −2x + 10 and 3x + y = 13.', type: 'short-answer', correctAnswer: 'x = 3, y = 4', standardCode: 'HSA-REI.6' },
          { question: 'A system has equations with the same slope but different y-intercepts. How many solutions does it have?', type: 'multiple-choice', options: ['0', '1', 'Infinitely many'], correctAnswer: '0', standardCode: 'HSA-REI.6' },
          { question: 'Solve: 2x + y = 7 and x − y = 2.', type: 'short-answer', correctAnswer: 'x = 3, y = 1', standardCode: 'HSA-REI.6' },
        ],
      },
    },
  },
  {
    slug: 'grade9-math-solving-systems-elimination',
    title: 'Solving Systems by Elimination',
    description: 'Use the elimination (addition) method to solve systems of linear equations and apply systems to real-world problems',
    subject: 'math',
    grade: 9,
    gradeBand: '9-12',
    topicCluster: 'Systems of Equations',
    standardCodes: ['HSA-REI.5', 'HSA-REI.6', 'HSA-CED.3'],
    content: {
      intro: {
        title: 'Solving Systems by Elimination',
        text: 'The elimination method solves a system by adding or subtracting the equations to eliminate one variable. This is especially useful when neither equation is already solved for a variable. You may need to multiply one or both equations by a constant first so that the coefficients of one variable are opposites. In this module you will master elimination and apply systems of equations to real-world situations involving mixtures, rates, and comparisons.',
      },
      segments: [
        {
          index: 0,
          title: 'The Elimination Process',
          text: 'To use elimination, align the equations vertically. If the coefficients of one variable are opposites, add the equations. For example, with 3x + 2y = 16 and 3x − 2y = 8, adding eliminates y: 6x = 24, so x = 4. Substitute back: 3(4) + 2y = 16, so 2y = 4 and y = 2. If the coefficients are not already opposites, multiply one or both equations by constants to create them. Multiply 2x + y = 5 by 3 and x + 3y = 10 by −1 if you want to eliminate a specific variable.',
          keyVocabulary: ['elimination', 'add equations', 'opposite coefficients', 'multiply by a constant'],
          example: '2x + 3y = 12 and 2x − y = 4. Subtract the second from the first: 4y = 8, y = 2, then x = 3.',
        },
        {
          index: 1,
          title: 'Multiplying to Create Opposite Coefficients',
          text: 'When coefficients do not cancel directly, adjust them. To solve 3x + 4y = 25 and 5x + 2y = 23, multiply the second equation by −2 to get −10x − 4y = −46. Now add to the first: 3x − 10x + 4y − 4y = 25 − 46, giving −7x = −21, so x = 3. Then 3(3) + 4y = 25, 4y = 16, y = 4. Choose multipliers that make the coefficients of one variable opposites. The least common multiple of the coefficients helps you find the smallest multipliers.',
          keyVocabulary: ['least common multiple', 'multiplier', 'adjust coefficients'],
          example: '4x + 3y = 10 and 2x + 5y = 12. Multiply the second by −2: −4x − 10y = −24. Add: −7y = −14, y = 2.',
        },
        {
          index: 2,
          title: 'Applications of Systems',
          text: 'Systems of equations model many real situations. If you buy 3 notebooks and 2 pens for $11 and 1 notebook and 4 pens for $10, you can set up 3n + 2p = 11 and n + 4p = 10 to find the price of each. Mixture problems, rate problems (boats traveling with and against a current), and break-even analysis in business all use systems. Define your variables clearly, write two equations from the problem conditions, and solve using the method of your choice.',
          keyVocabulary: ['application', 'define variables', 'mixture problem', 'break-even'],
          example: 'Adult tickets cost $8, child tickets $5. 200 tickets sold for $1,300. 8a + 5c = 1300 and a + c = 200.',
        },
      ],
      practice: [
        { index: 0, question: 'Solve by elimination: x + y = 10 and x − y = 4.', type: 'short-answer', correctAnswer: 'x = 7, y = 3', hint: 'Add the two equations to eliminate y.', explanation: 'Adding: 2x = 14, x = 7. Then 7 + y = 10, y = 3.', standardCode: 'HSA-REI.6' },
        { index: 1, question: 'Solve: 2x + 3y = 7 and 4x − 3y = 11.', type: 'short-answer', correctAnswer: 'x = 3, y = 1/3', hint: 'The y-coefficients are already opposites.', explanation: 'Add: 6x = 18, x = 3. Then 2(3) + 3y = 7, 3y = 1, y = 1/3.', standardCode: 'HSA-REI.6' },
        { index: 2, question: 'Solve: 5x + 2y = 20 and 3x + 2y = 12.', type: 'multiple-choice', options: ['(4, 0)', '(2, 5)', '(3, 2.5)', '(1, 7.5)'], correctAnswer: '(4, 0)', hint: 'Subtract the second equation from the first.', explanation: 'Subtract: 2x = 8, x = 4. Then 5(4) + 2y = 20, 2y = 0, y = 0.', standardCode: 'HSA-REI.5' },
        { index: 3, question: 'A store sells a total of 50 large and small coffees. Large coffees cost $4 and small cost $2. Total revenue is $140. How many large coffees were sold?', type: 'short-answer', correctAnswer: '20', hint: 'Set up: L + S = 50 and 4L + 2S = 140.', explanation: 'From the first equation S = 50 − L. Substitute: 4L + 2(50 − L) = 140 → 2L + 100 = 140 → L = 20.', standardCode: 'HSA-CED.3' },
        { index: 4, question: 'Solve: 3x + 5y = 21 and 2x + 3y = 13.', type: 'short-answer', correctAnswer: 'x = 2, y = 3', hint: 'Multiply the first equation by 2 and the second by −3 to eliminate x.', explanation: 'Multiply first by 2: 6x + 10y = 42. Multiply second by −3: −6x − 9y = −39. Add: y = 3. Then 2x + 9 = 13, x = 2.', standardCode: 'HSA-REI.5' },
      ],
      assessment: {
        questions: [
          { question: 'Solve by elimination: 4x + y = 14 and 2x + 3y = 12.', type: 'short-answer', correctAnswer: 'x = 3, y = 2', standardCode: 'HSA-REI.6' },
          { question: 'A boat travels 36 miles downstream in 2 hours and 24 miles upstream in 2 hours. Find the boat speed in still water and the current speed.', type: 'short-answer', correctAnswer: 'Boat speed = 15 mph, current speed = 3 mph', standardCode: 'HSA-CED.3' },
          { question: 'Solve: 7x − 2y = 3 and 3x + 4y = 23.', type: 'short-answer', correctAnswer: 'x = 1, y = 5', standardCode: 'HSA-REI.5' },
        ],
      },
    },
  },

  // ============================================
  // Data Analysis (2 modules)
  // ============================================
  {
    slug: 'grade9-math-two-way-frequency-tables',
    title: 'Two-Way Frequency Tables',
    description: 'Organize categorical data into two-way tables and calculate joint, marginal, and conditional relative frequencies',
    subject: 'math',
    grade: 9,
    gradeBand: '9-12',
    topicCluster: 'Data Analysis',
    standardCodes: ['HSS-ID.5'],
    content: {
      intro: {
        title: 'Two-Way Frequency Tables',
        text: 'When data involves two categories — like grade level and preferred sport — a two-way frequency table organizes it into rows and columns so you can spot patterns. These tables help you answer questions like "What fraction of 9th graders prefer basketball?" or "Is there a relationship between grade and sport preference?" In this module you will build two-way tables, calculate relative frequencies, and interpret results in context.',
      },
      segments: [
        {
          index: 0,
          title: 'Building a Two-Way Table',
          text: 'A two-way frequency table has rows for one categorical variable and columns for another. Each cell shows how many data points fall into that combination. The rightmost column and bottom row show totals, called marginal frequencies. For example, if you survey students about their favorite season, the rows might be grade 9 and grade 10, the columns might be spring, summer, fall, and winter, and each cell shows the count of students with that combination.',
          keyVocabulary: ['two-way table', 'categorical variable', 'frequency', 'marginal frequency'],
          example: 'A table with rows Boys/Girls and columns Soccer/Basketball. Cell (Boys, Soccer) = 15 means 15 boys chose soccer.',
        },
        {
          index: 1,
          title: 'Joint and Marginal Relative Frequencies',
          text: 'A joint relative frequency is found by dividing a cell count by the grand total. It tells you the proportion of all data points in that category combination. A marginal relative frequency divides a row total or column total by the grand total. For example, if 30 out of 200 students are boys who prefer soccer, the joint relative frequency is 30/200 = 0.15 or 15%. If 80 out of 200 students are boys total, the marginal relative frequency for boys is 80/200 = 0.40.',
          keyVocabulary: ['joint relative frequency', 'marginal relative frequency', 'proportion', 'grand total'],
          example: 'Grand total = 100. Cell value = 25. Joint relative frequency = 25/100 = 0.25 = 25%.',
        },
        {
          index: 2,
          title: 'Conditional Relative Frequencies',
          text: 'A conditional relative frequency answers "given that" questions. It divides a cell count by its row or column total, not the grand total. If 15 out of 40 girls prefer summer, the conditional relative frequency of summer given girl is 15/40 = 37.5%. Comparing conditional frequencies across rows or columns helps you see whether one category is associated with another. If the conditional frequencies are similar across rows, the variables may be independent.',
          keyVocabulary: ['conditional relative frequency', 'given that', 'association', 'independent'],
        },
      ],
      practice: [
        { index: 0, question: 'In a two-way table with grand total 250, the cell for (Freshman, Soccer) shows 40. What is the joint relative frequency?', type: 'multiple-choice', options: ['10%', '16%', '25%', '40%'], correctAnswer: '16%', hint: 'Divide the cell count by the grand total.', explanation: '40/250 = 0.16 = 16%.', standardCode: 'HSS-ID.5' },
        { index: 1, question: 'The row total for boys is 120 and the grand total is 300. What is the marginal relative frequency for boys?', type: 'short-answer', correctAnswer: '40%', hint: 'Divide the row total by the grand total.', explanation: '120/300 = 0.40 = 40%.', standardCode: 'HSS-ID.5' },
        { index: 2, question: 'Of 50 girls surveyed, 20 prefer math. Of 50 boys, 30 prefer math. Are the conditional frequencies the same?', type: 'multiple-choice', options: ['Yes, both are 50%', 'No, girls 40% and boys 60%', 'No, girls 20% and boys 30%', 'Yes, both are 25%'], correctAnswer: 'No, girls 40% and boys 60%', hint: 'Find each conditional frequency: cell/row total.', explanation: 'Girls: 20/50 = 40%. Boys: 30/50 = 60%. The conditional frequencies differ, suggesting an association.', standardCode: 'HSS-ID.5' },
        { index: 3, question: 'A two-way table shows 25 freshmen in band and 75 freshmen total. What is the conditional relative frequency of being in band given you are a freshman?', type: 'short-answer', correctAnswer: '1/3 or about 33.3%', hint: 'Divide the cell by the row total for freshmen.', explanation: '25/75 = 1/3 ≈ 33.3%. Given that a student is a freshman, there is a 33.3% chance they are in band.', standardCode: 'HSS-ID.5' },
        { index: 4, question: 'If two variables in a two-way table are independent, what is true about their conditional relative frequencies?', type: 'multiple-choice', options: ['They are all zero', 'They are approximately equal across rows', 'They add up to 100%', 'They are all different'], correctAnswer: 'They are approximately equal across rows', hint: 'Independence means one variable does not influence the other.', explanation: 'If variables are independent, knowing the row category does not change the column distribution, so conditional frequencies are similar across rows.', standardCode: 'HSS-ID.5' },
      ],
      assessment: {
        questions: [
          { question: 'A survey of 200 students finds 30 are sophomores who walk to school. What is the joint relative frequency?', type: 'short-answer', correctAnswer: '15%', standardCode: 'HSS-ID.5' },
          { question: 'In a two-way table, the column total for "prefers reading" is 90 and 36 of those are boys. What is the conditional relative frequency of boys given that a student prefers reading?', type: 'short-answer', correctAnswer: '40%', standardCode: 'HSS-ID.5' },
          { question: 'What does it mean if conditional relative frequencies are very different across rows of a two-way table?', type: 'multiple-choice', options: ['The variables are independent', 'There is an association between the variables', 'The data is incorrect', 'The sample size is too small'], correctAnswer: 'There is an association between the variables', standardCode: 'HSS-ID.5' },
        ],
      },
    },
  },
  {
    slug: 'grade9-math-scatter-plots-and-correlation',
    title: 'Scatter Plots and Correlation',
    description: 'Create and interpret scatter plots, identify correlation direction and strength, and distinguish correlation from causation',
    subject: 'math',
    grade: 9,
    gradeBand: '9-12',
    topicCluster: 'Data Analysis',
    standardCodes: ['HSS-ID.6', 'HSS-ID.8'],
    content: {
      intro: {
        title: 'Scatter Plots and Correlation',
        text: 'When you want to see whether two quantitative variables are related — like study hours and test scores — a scatter plot is the tool to use. Each data point is plotted as a dot on a coordinate plane. The pattern of dots reveals whether there is a positive association, a negative association, or no clear relationship. In this module you will build scatter plots, describe correlations, fit trend lines, and learn the critical difference between correlation and causation.',
      },
      segments: [
        {
          index: 0,
          title: 'Creating and Reading Scatter Plots',
          text: 'A scatter plot uses a horizontal axis for one variable and a vertical axis for another. Each pair of values becomes a point. For instance, if one student studied 3 hours and scored 85, plot the point (3, 85). After plotting all data points, look at the overall pattern. If the points trend upward from left to right, there is a positive association. If they trend downward, the association is negative. If the points are scattered with no trend, there is no clear association.',
          keyVocabulary: ['scatter plot', 'positive association', 'negative association', 'no association', 'data point'],
          example: 'Plotting hours of sleep vs. alertness score for 20 students shows an upward trend — more sleep correlates with higher alertness.',
        },
        {
          index: 1,
          title: 'Describing Correlation Strength',
          text: 'Correlation describes both the direction and strength of a linear relationship. The correlation coefficient r ranges from −1 to 1. Values near 1 indicate a strong positive linear relationship; values near −1 indicate a strong negative one. Values near 0 indicate a weak or no linear relationship. An r of 0.92 means a strong positive correlation. An r of −0.45 means a moderate negative correlation. You can estimate r by looking at how tightly the points cluster around a line.',
          keyVocabulary: ['correlation coefficient', 'strong', 'weak', 'moderate', 'direction'],
          example: 'Temperature and ice cream sales: r ≈ 0.87 (strong positive). Temperature and hot chocolate sales: r ≈ −0.80 (strong negative).',
        },
        {
          index: 2,
          title: 'Trend Lines and Predictions',
          text: 'A trend line (or line of best fit) is a straight line drawn through the middle of the scatter plot data to summarize the overall pattern. You can use it to make predictions. If the trend line for study hours vs. test score is roughly y = 8x + 50, then a student who studies 5 hours might score about 8(5) + 50 = 90. Predictions within the data range are called interpolation; predictions outside the range are extrapolation and are less reliable.',
          keyVocabulary: ['trend line', 'line of best fit', 'prediction', 'interpolation', 'extrapolation'],
        },
        {
          index: 3,
          title: 'Correlation vs. Causation',
          text: 'Correlation does not imply causation. Just because two variables are correlated does not mean one causes the other. Ice cream sales and drowning incidents both increase in summer, but ice cream does not cause drowning — the lurking variable is hot weather. To establish causation you need a controlled experiment. Always think critically about why two variables might be associated before concluding that one causes the other.',
          keyVocabulary: ['causation', 'lurking variable', 'confounding', 'controlled experiment'],
        },
      ],
      practice: [
        { index: 0, question: 'A scatter plot shows points rising from lower left to upper right. What type of association is this?', type: 'multiple-choice', options: ['Positive', 'Negative', 'No association', 'Curved'], correctAnswer: 'Positive', hint: 'As x increases, what happens to y?', explanation: 'Points going from lower left to upper right indicate a positive association — as one variable increases, so does the other.', standardCode: 'HSS-ID.6' },
        { index: 1, question: 'A correlation coefficient is r = −0.92. Describe the relationship.', type: 'short-answer', correctAnswer: 'Strong negative linear relationship', hint: 'Consider the sign and how close the value is to −1.', explanation: 'The negative sign means a negative relationship (as one increases, the other decreases). The value 0.92 is close to 1, so it is strong.', standardCode: 'HSS-ID.8' },
        { index: 2, question: 'A trend line equation is y = 3x + 20. Predict y when x = 10.', type: 'short-answer', correctAnswer: '50', hint: 'Substitute x = 10 into the equation.', explanation: 'y = 3(10) + 20 = 50.', standardCode: 'HSS-ID.6' },
        { index: 3, question: 'Students who eat breakfast tend to have higher grades. Does this prove breakfast causes better grades?', type: 'multiple-choice', options: ['Yes, the data proves it', 'No, correlation does not imply causation', 'Yes, if the correlation is strong', 'Only if r > 0.90'], correctAnswer: 'No, correlation does not imply causation', hint: 'Think about lurking variables.', explanation: 'There could be lurking variables (such as overall healthy habits or family support). Correlation alone cannot prove causation.', standardCode: 'HSS-ID.8' },
        { index: 4, question: 'Which r value indicates the weakest linear relationship?', type: 'multiple-choice', options: ['r = 0.85', 'r = −0.90', 'r = 0.12', 'r = −0.67'], correctAnswer: 'r = 0.12', hint: 'The closer |r| is to 0, the weaker the relationship.', explanation: '|0.12| = 0.12 is closest to 0, indicating the weakest linear association.', standardCode: 'HSS-ID.8' },
      ],
      assessment: {
        questions: [
          { question: 'A scatter plot of hours of exercise per week and resting heart rate shows a downward trend. Describe the association.', type: 'short-answer', correctAnswer: 'Negative association — more exercise is associated with lower resting heart rate', standardCode: 'HSS-ID.6' },
          { question: 'A dataset has r = 0.03. What can you conclude about the linear relationship?', type: 'multiple-choice', options: ['Strong positive', 'Strong negative', 'Very weak or no linear relationship', 'Perfect correlation'], correctAnswer: 'Very weak or no linear relationship', standardCode: 'HSS-ID.8' },
          { question: 'A researcher finds a strong positive correlation between shoe size and reading ability in children. What is the most likely explanation?', type: 'short-answer', correctAnswer: 'Age is a lurking variable — older children have larger feet and better reading skills', standardCode: 'HSS-ID.8' },
        ],
      },
    },
  },

  // ============================================
  // Sequences and Patterns (2 modules)
  // ============================================
  {
    slug: 'grade9-math-arithmetic-sequences',
    title: 'Arithmetic Sequences',
    description: 'Identify arithmetic sequences, find the common difference, and write explicit and recursive formulas',
    subject: 'math',
    grade: 9,
    gradeBand: '9-12',
    topicCluster: 'Sequences and Patterns',
    standardCodes: ['HSF-IF.3', 'HSA-SSE.1'],
    content: {
      intro: {
        title: 'Arithmetic Sequences',
        text: 'A sequence is an ordered list of numbers that follows a pattern. When the difference between consecutive terms is always the same, you have an arithmetic sequence. Examples are everywhere: house numbers on a street (101, 103, 105, ...), weekly savings deposits, and counting by fives. In this module you will learn to identify arithmetic sequences, compute the common difference, and write formulas that let you find any term without listing them all.',
      },
      segments: [
        {
          index: 0,
          title: 'Identifying Arithmetic Sequences',
          text: 'An arithmetic sequence has a constant difference between consecutive terms. This constant is called the common difference, written as d. To check if a sequence is arithmetic, subtract each term from the next. If the result is always the same, the sequence is arithmetic. For 3, 7, 11, 15, 19, the differences are 4, 4, 4, 4 — so it is arithmetic with d = 4. For 2, 4, 8, 16, the differences are 2, 4, 8 — not constant — so it is not arithmetic.',
          keyVocabulary: ['arithmetic sequence', 'common difference', 'consecutive terms', 'constant'],
          example: 'Sequence: 10, 7, 4, 1, −2. Common difference: 7 − 10 = −3. It is arithmetic with d = −3.',
        },
        {
          index: 1,
          title: 'Explicit Formula: aₙ = a₁ + (n − 1)d',
          text: 'The explicit formula lets you find any term directly. If the first term is a₁ and the common difference is d, then the nth term is aₙ = a₁ + (n − 1)d. For the sequence 5, 9, 13, 17, ..., a₁ = 5 and d = 4. The 20th term is a₂₀ = 5 + (20 − 1)(4) = 5 + 76 = 81. The explicit formula is efficient for finding terms far out in the sequence without listing every term before it.',
          keyVocabulary: ['explicit formula', 'nth term', 'first term', 'direct computation'],
          example: 'a₁ = 2, d = 5. a₁₀ = 2 + (10 − 1)(5) = 2 + 45 = 47.',
        },
        {
          index: 2,
          title: 'Recursive Formula and Connections to Linear Functions',
          text: 'A recursive formula defines each term using the previous one: aₙ = aₙ₋₁ + d with a given a₁. This is useful when building a sequence step by step. Notice that the explicit formula aₙ = a₁ + (n − 1)d can be rewritten as aₙ = dn + (a₁ − d), which looks like y = mx + b. An arithmetic sequence is essentially a linear function whose domain is the positive integers. The common difference d corresponds to the slope.',
          keyVocabulary: ['recursive formula', 'previous term', 'linear function', 'domain'],
          example: 'a₁ = 3, d = 2. Recursive: aₙ = aₙ₋₁ + 2. Explicit: aₙ = 2n + 1.',
        },
      ],
      practice: [
        { index: 0, question: 'Is the sequence 6, 10, 14, 18, 22 arithmetic? If so, what is d?', type: 'short-answer', correctAnswer: 'Yes, d = 4', hint: 'Subtract consecutive terms.', explanation: '10 − 6 = 4, 14 − 10 = 4, 18 − 14 = 4, 22 − 18 = 4. The common difference is 4, so it is arithmetic.', standardCode: 'HSF-IF.3' },
        { index: 1, question: 'Find the 15th term of the sequence 3, 8, 13, 18, ...', type: 'short-answer', correctAnswer: '73', hint: 'Use aₙ = a₁ + (n − 1)d with a₁ = 3 and d = 5.', explanation: 'a₁₅ = 3 + (15 − 1)(5) = 3 + 70 = 73.', standardCode: 'HSA-SSE.1' },
        { index: 2, question: 'Write the explicit formula for the sequence 100, 93, 86, 79, ...', type: 'multiple-choice', options: ['aₙ = 100 + 7(n − 1)', 'aₙ = 100 − 7(n − 1)', 'aₙ = 93n + 7', 'aₙ = 100 − 7n'], correctAnswer: 'aₙ = 100 − 7(n − 1)', hint: 'Find d first: 93 − 100 = −7.', explanation: 'a₁ = 100 and d = −7. The explicit formula is aₙ = 100 + (n − 1)(−7) = 100 − 7(n − 1).', standardCode: 'HSA-SSE.1' },
        { index: 3, question: 'The 5th term of an arithmetic sequence is 22 and the common difference is 3. What is the first term?', type: 'short-answer', correctAnswer: '10', hint: 'Use aₙ = a₁ + (n − 1)d and solve for a₁.', explanation: '22 = a₁ + (5 − 1)(3) = a₁ + 12. So a₁ = 10.', standardCode: 'HSF-IF.3' },
        { index: 4, question: 'Write a recursive formula for the sequence 4, 11, 18, 25, ...', type: 'short-answer', correctAnswer: 'a₁ = 4, aₙ = aₙ₋₁ + 7', hint: 'Each term equals the previous term plus the common difference.', explanation: 'd = 11 − 4 = 7. The recursive formula is a₁ = 4 and aₙ = aₙ₋₁ + 7.', standardCode: 'HSF-IF.3' },
      ],
      assessment: {
        questions: [
          { question: 'Find the 50th term of the sequence 2, 5, 8, 11, ...', type: 'short-answer', correctAnswer: '149', standardCode: 'HSA-SSE.1' },
          { question: 'An arithmetic sequence has a₁ = −4 and d = 6. Which term equals 50?', type: 'short-answer', correctAnswer: 'The 10th term', standardCode: 'HSF-IF.3' },
          { question: 'If the explicit formula of a sequence is aₙ = 3n − 1, what are the first four terms?', type: 'short-answer', correctAnswer: '2, 5, 8, 11', standardCode: 'HSA-SSE.1' },
        ],
      },
    },
  },
  {
    slug: 'grade9-math-geometric-sequences',
    title: 'Geometric Sequences',
    description: 'Identify geometric sequences, find the common ratio, and write explicit formulas for exponential growth and decay patterns',
    subject: 'math',
    grade: 9,
    gradeBand: '9-12',
    topicCluster: 'Sequences and Patterns',
    standardCodes: ['HSF-IF.3', 'HSA-SSE.1'],
    content: {
      intro: {
        title: 'Geometric Sequences',
        text: 'While arithmetic sequences grow by adding the same amount, geometric sequences grow by multiplying by the same amount. Doubling your money each year (1, 2, 4, 8, ...) is a geometric sequence. So is the decay of a medicine in your bloodstream that halves every hour. Geometric sequences model exponential growth and decay, making them essential in science, finance, and everyday life. In this module you will identify geometric sequences, find their common ratio, and write formulas to calculate any term.',
      },
      segments: [
        {
          index: 0,
          title: 'Identifying Geometric Sequences',
          text: 'A geometric sequence has a constant ratio between consecutive terms. This constant is called the common ratio, written as r. To find it, divide any term by the previous term. For 3, 6, 12, 24, 48, each term divided by the one before gives 2, so r = 2. For 100, 50, 25, 12.5, the ratio is 0.5. If the ratio is greater than 1, the sequence grows. If it is between 0 and 1, the sequence shrinks. A negative ratio causes the terms to alternate between positive and negative.',
          keyVocabulary: ['geometric sequence', 'common ratio', 'multiply', 'growth', 'decay'],
          example: '5, 15, 45, 135: each term is 3 times the previous. Common ratio r = 3.',
        },
        {
          index: 1,
          title: 'Explicit Formula: aₙ = a₁ · rⁿ⁻¹',
          text: 'The explicit formula for a geometric sequence is aₙ = a₁ · rⁿ⁻¹, where a₁ is the first term, r is the common ratio, and n is the term number. For the sequence 2, 10, 50, 250, ..., a₁ = 2 and r = 5. The 6th term is a₆ = 2 · 5⁵ = 2 · 3125 = 6250. This formula is powerful because it lets you jump directly to any term. Notice how quickly geometric sequences grow compared to arithmetic ones — this is exponential growth.',
          keyVocabulary: ['explicit formula', 'exponent', 'exponential growth', 'exponential decay'],
          example: 'a₁ = 4, r = 3. a₅ = 4 · 3⁴ = 4 · 81 = 324.',
        },
        {
          index: 2,
          title: 'Growth, Decay, and Real-World Applications',
          text: 'When r > 1, the sequence models exponential growth: populations, compound interest, viral spread. When 0 < r < 1, it models exponential decay: radioactive half-life, depreciation, cooling. A car that loses 15% of its value each year has a common ratio of 0.85. If it starts at $20,000, after n years the value is 20000 · 0.85ⁿ⁻¹. Geometric sequences give you a foundation for understanding exponential functions that you will study in greater depth later.',
          keyVocabulary: ['exponential growth', 'exponential decay', 'depreciation', 'compound interest', 'half-life'],
          example: 'A $1,000 investment earning 10% per year: 1000, 1100, 1210, 1331, ... with r = 1.1.',
        },
      ],
      practice: [
        { index: 0, question: 'Is the sequence 4, 12, 36, 108 geometric? If so, what is r?', type: 'short-answer', correctAnswer: 'Yes, r = 3', hint: 'Divide each term by the previous one.', explanation: '12/4 = 3, 36/12 = 3, 108/36 = 3. The common ratio is 3, so it is geometric.', standardCode: 'HSF-IF.3' },
        { index: 1, question: 'Find the 7th term of the sequence 2, 6, 18, 54, ...', type: 'short-answer', correctAnswer: '1458', hint: 'Use aₙ = a₁ · rⁿ⁻¹ with a₁ = 2 and r = 3.', explanation: 'a₇ = 2 · 3⁶ = 2 · 729 = 1458.', standardCode: 'HSA-SSE.1' },
        { index: 2, question: 'A bacteria colony starts with 500 cells and triples every hour. How many cells are there after 4 hours?', type: 'multiple-choice', options: ['6,000', '40,500', '13,500', '2,000'], correctAnswer: '40,500', hint: 'Use a₅ = 500 · 3⁴ (the starting count is hour 0, so after 4 hours is the 5th term).', explanation: 'a₅ = 500 · 3⁴ = 500 · 81 = 40,500 cells.', standardCode: 'HSA-SSE.1' },
        { index: 3, question: 'A ball is dropped from 80 feet and bounces to 60% of its previous height each time. What height does it reach after the 3rd bounce?', type: 'short-answer', correctAnswer: '17.28 feet', hint: 'a₁ = 80 · 0.6 = 48 (first bounce height), r = 0.6.', explanation: 'Bounce heights: 48, 28.8, 17.28. Or use a₃ = 48 · (0.6)² = 48 · 0.36 = 17.28 feet.', standardCode: 'HSF-IF.3' },
        { index: 4, question: 'Write the explicit formula for the sequence 1000, 500, 250, 125, ...', type: 'multiple-choice', options: ['aₙ = 1000 · 2ⁿ⁻¹', 'aₙ = 1000 · (1/2)ⁿ⁻¹', 'aₙ = 1000 − 500(n − 1)', 'aₙ = 500ⁿ'], correctAnswer: 'aₙ = 1000 · (1/2)ⁿ⁻¹', hint: 'Find the common ratio: 500/1000 = 1/2.', explanation: 'a₁ = 1000 and r = 1/2. The explicit formula is aₙ = 1000 · (1/2)ⁿ⁻¹.', standardCode: 'HSA-SSE.1' },
      ],
      assessment: {
        questions: [
          { question: 'Find the 8th term of the geometric sequence 3, 12, 48, 192, ...', type: 'short-answer', correctAnswer: '49152', standardCode: 'HSA-SSE.1' },
          { question: 'A car worth $30,000 depreciates by 20% per year. Write a formula for its value after n years.', type: 'short-answer', correctAnswer: 'V = 30000 · (0.8)ⁿ', standardCode: 'HSF-IF.3' },
          { question: 'Which sequence shows exponential decay?', type: 'multiple-choice', options: ['2, 4, 8, 16', '100, 80, 60, 40', '81, 27, 9, 3', '1, 1, 1, 1'], correctAnswer: '81, 27, 9, 3', standardCode: 'HSF-IF.3' },
        ],
      },
    },
  },
]
