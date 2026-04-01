import type { ModuleSeed } from '../types'

export const GRADE_10_MATH: ModuleSeed[] = [
  // ============================================
  // Congruence (3 modules)
  // ============================================
  {
    slug: 'grade10-math-triangle-congruence-proofs',
    title: 'Triangle Congruence Proofs',
    description: 'Prove triangles are congruent using SSS, SAS, ASA, AAS, and HL and write two-column and paragraph proofs',
    subject: 'math',
    grade: 10,
    gradeBand: '9-12',
    topicCluster: 'Congruence',
    standardCodes: ['HSG-CO.B.7', 'HSG-CO.B.8'],
    content: {
      intro: {
        title: 'Triangle Congruence Proofs',
        text: 'Two triangles are congruent when every pair of corresponding sides and angles is equal. But you do not need to check all six measurements — certain shortcut criteria guarantee congruence. In this module you will master the SSS, SAS, ASA, AAS, and HL criteria and learn how to build a logical proof that two triangles are congruent.',
      },
      segments: [
        {
          index: 0,
          title: 'Understanding Congruence Criteria',
          text: 'The five triangle congruence criteria are SSS (three pairs of sides equal), SAS (two sides and the included angle equal), ASA (two angles and the included side equal), AAS (two angles and a non-included side equal), and HL (hypotenuse and leg of right triangles equal). Each criterion guarantees that the six remaining parts must also match. Knowing which criterion applies is the first step of any congruence proof.',
          keyVocabulary: ['SSS', 'SAS', 'ASA', 'AAS', 'HL', 'congruence criterion'],
          example: 'If triangle ABC has AB = DE, BC = EF, and AC = DF, then triangle ABC ≅ triangle DEF by SSS.',
        },
        {
          index: 1,
          title: 'Writing Two-Column Proofs',
          text: 'A two-column proof has statements on the left and reasons on the right. Start with the given information, then use definitions, postulates, or previously proved theorems to arrive at the congruence statement. Each step must follow logically from earlier steps. Common reasons include the Reflexive Property (a segment equals itself), Vertical Angles Theorem, and the definition of a midpoint.',
          keyVocabulary: ['two-column proof', 'statement', 'reason', 'reflexive property'],
          example: 'Given: M is the midpoint of AC and BD. Statement: AM = MC. Reason: Definition of midpoint.',
        },
        {
          index: 2,
          title: 'Identifying the Right Criterion',
          text: 'When approaching a proof, mark all given congruent parts on the diagram. Count how many sides and angles you can show are congruent. If you have three sides, use SSS. Two sides and the angle between them means SAS. Two angles and a side means ASA or AAS depending on whether the side is between the angles. For right triangles, if you know the hypotenuse and one leg, use HL.',
          keyVocabulary: ['diagram marking', 'included angle', 'included side', 'right triangle'],
        },
        {
          index: 3,
          title: 'Paragraph Proofs and Strategy',
          text: 'A paragraph proof presents the same logical argument in sentence form instead of a two-column table. Write each statement connected by words like "because," "therefore," and "since." Paragraph proofs are especially useful for short arguments. Whether you use two columns or a paragraph, the logic is identical — state what you know, cite your reason, and build toward the congruence conclusion.',
          keyVocabulary: ['paragraph proof', 'logical argument', 'conclusion'],
        },
      ],
      practice: [
        { index: 0, question: 'Which congruence criterion applies if you know AB = DE, angle B = angle E, and BC = EF?', type: 'multiple-choice', options: ['SSS', 'SAS', 'ASA', 'AAS'], correctAnswer: 'SAS', hint: 'The known angle is between the two known sides.', explanation: 'Since the angle is included between the two pairs of congruent sides, the criterion is SAS.', standardCode: 'HSG-CO.B.8' },
        { index: 1, question: 'In a two-column proof, what reason justifies that a segment is equal to itself?', type: 'multiple-choice', options: ['Symmetric Property', 'Reflexive Property', 'Transitive Property', 'Definition of Congruence'], correctAnswer: 'Reflexive Property', hint: 'Think about a property where something equals itself.', explanation: 'The Reflexive Property states that any segment or angle is congruent to itself, often used when triangles share a side.', standardCode: 'HSG-CO.B.7' },
        { index: 2, question: 'True or false: SSA (two sides and a non-included angle) is a valid congruence criterion.', type: 'multiple-choice', options: ['True', 'False'], correctAnswer: 'False', hint: 'Think about whether SSA can produce two different triangles.', explanation: 'SSA is not a valid criterion because two different triangles can sometimes be formed with the same two sides and non-included angle (the ambiguous case).', standardCode: 'HSG-CO.B.8' },
        { index: 3, question: 'Given right triangles with hypotenuse AC = DF and leg AB = DE, which criterion proves congruence?', type: 'multiple-choice', options: ['SSS', 'SAS', 'HL', 'AAS'], correctAnswer: 'HL', hint: 'This criterion is specific to right triangles.', explanation: 'The Hypotenuse-Leg (HL) theorem states that if the hypotenuse and one leg of a right triangle are congruent to those of another right triangle, the triangles are congruent.', standardCode: 'HSG-CO.B.8' },
        { index: 4, question: 'Explain why knowing two angles and the included side (ASA) guarantees triangle congruence.', type: 'short-answer', correctAnswer: 'The two angles fix the shape of the triangle and the included side fixes the size, so only one triangle is possible.', hint: 'Think about how the angles determine direction and the side determines scale.', explanation: 'Once two angles are fixed, the third angle is determined (angles sum to 180°). The included side sets the scale, so only one triangle can be constructed with those measurements.', standardCode: 'HSG-CO.B.8' },
      ],
      assessment: {
        questions: [
          { question: 'Given: angle A = angle D, angle B = angle E, and BC = EF. Which criterion proves triangle ABC ≅ triangle DEF?', type: 'multiple-choice', options: ['SSS', 'SAS', 'ASA', 'AAS'], correctAnswer: 'AAS', standardCode: 'HSG-CO.B.8' },
          { question: 'Write the missing reason: "BD = BD because ___."', type: 'short-answer', correctAnswer: 'Reflexive Property of Congruence', standardCode: 'HSG-CO.B.7' },
          { question: 'Why is AAA not sufficient to prove two triangles congruent?', type: 'short-answer', correctAnswer: 'AAA proves the triangles have the same shape (similar) but not necessarily the same size, so they may not be congruent.', standardCode: 'HSG-CO.B.8' },
        ],
      },
    },
  },
  {
    slug: 'grade10-math-congruence-transformations',
    title: 'Congruence Transformations',
    description: 'Use reflections, rotations, and translations to demonstrate that two figures are congruent',
    subject: 'math',
    grade: 10,
    gradeBand: '9-12',
    topicCluster: 'Congruence',
    standardCodes: ['HSG-CO.A.2', 'HSG-CO.A.5', 'HSG-CO.B.6'],
    content: {
      intro: {
        title: 'Congruence Transformations',
        text: 'A congruence transformation — also called a rigid motion — moves a figure without changing its size or shape. Reflections, rotations, and translations are the three basic rigid motions. If one figure can be mapped onto another using a sequence of these transformations, the two figures are congruent. This module connects the visual idea of "same shape and size" to a precise mathematical definition.',
      },
      segments: [
        {
          index: 0,
          title: 'Translations',
          text: 'A translation slides every point of a figure the same distance in the same direction. You describe a translation using a vector, such as (3, −2), which means move 3 units right and 2 units down. Because every point moves identically, distances and angles are preserved, making the image congruent to the pre-image.',
          keyVocabulary: ['translation', 'vector', 'pre-image', 'image', 'rigid motion'],
          example: 'Translating triangle ABC by (4, 0) moves every vertex 4 units to the right.',
        },
        {
          index: 1,
          title: 'Reflections',
          text: 'A reflection flips a figure across a line called the line of reflection. Each point and its image are the same distance from the line but on opposite sides. Reflections preserve side lengths and angle measures, but they reverse orientation — a clockwise labeling becomes counterclockwise. Common lines of reflection include the x-axis, y-axis, and the line y = x.',
          keyVocabulary: ['reflection', 'line of reflection', 'orientation', 'perpendicular bisector'],
          example: 'Reflecting point (2, 5) over the x-axis gives (2, −5).',
        },
        {
          index: 2,
          title: 'Rotations',
          text: 'A rotation turns a figure around a fixed point called the center of rotation by a given angle. Positive angles typically indicate counterclockwise rotation. Like translations and reflections, rotations preserve distances and angles. A 180° rotation about the origin maps (x, y) to (−x, −y). A 90° counterclockwise rotation maps (x, y) to (−y, x).',
          keyVocabulary: ['rotation', 'center of rotation', 'angle of rotation', 'counterclockwise'],
          example: 'Rotating (3, 1) by 90° counterclockwise about the origin gives (−1, 3).',
        },
        {
          index: 3,
          title: 'Sequences of Transformations',
          text: 'Sometimes a single transformation is not enough to map one figure onto another. You may need a sequence — for example, a reflection followed by a translation (called a glide reflection). The composition of rigid motions is still a rigid motion, so the final image is congruent to the original. When describing a sequence, perform each transformation in order and track the coordinates carefully.',
          keyVocabulary: ['composition', 'sequence', 'glide reflection', 'congruent figures'],
        },
      ],
      practice: [
        { index: 0, question: 'What are the coordinates of point (5, −3) after a translation by vector (−2, 4)?', type: 'multiple-choice', options: ['(3, 1)', '(7, −7)', '(3, −7)', '(7, 1)'], correctAnswer: '(3, 1)', hint: 'Add the vector components to the original coordinates.', explanation: '(5 + (−2), −3 + 4) = (3, 1).', standardCode: 'HSG-CO.A.2' },
        { index: 1, question: 'What is the image of (4, 2) after reflection over the y-axis?', type: 'multiple-choice', options: ['(−4, 2)', '(4, −2)', '(−4, −2)', '(2, 4)'], correctAnswer: '(−4, 2)', hint: 'Reflecting over the y-axis changes the sign of the x-coordinate.', explanation: 'Reflection over the y-axis maps (x, y) to (−x, y), so (4, 2) becomes (−4, 2).', standardCode: 'HSG-CO.A.5' },
        { index: 2, question: 'Where does (1, 3) end up after a 180° rotation about the origin?', type: 'multiple-choice', options: ['(−1, −3)', '(−3, 1)', '(3, −1)', '(1, −3)'], correctAnswer: '(−1, −3)', hint: 'A 180° rotation maps (x, y) to (−x, −y).', explanation: 'A 180° rotation about the origin sends (x, y) to (−x, −y), so (1, 3) goes to (−1, −3).', standardCode: 'HSG-CO.A.5' },
        { index: 3, question: 'Which transformation changes the orientation of a figure?', type: 'multiple-choice', options: ['Translation', 'Rotation', 'Reflection', 'All of the above'], correctAnswer: 'Reflection', hint: 'Think about which transformation creates a mirror image.', explanation: 'Reflections reverse the orientation (clockwise becomes counterclockwise), while translations and rotations preserve orientation.', standardCode: 'HSG-CO.B.6' },
        { index: 4, question: 'Describe a sequence of rigid motions that maps triangle with vertices (0, 0), (3, 0), (0, 4) to the triangle with vertices (2, 1), (5, 1), (2, 5).', type: 'short-answer', correctAnswer: 'Translate by vector (2, 1).', hint: 'Compare corresponding vertices to find how far each moved.', explanation: 'Each vertex moves right 2 and up 1: (0+2, 0+1) = (2, 1), (3+2, 0+1) = (5, 1), (0+2, 4+1) = (2, 5). A single translation by (2, 1) maps the first triangle onto the second.', standardCode: 'HSG-CO.A.5' },
      ],
      assessment: {
        questions: [
          { question: 'What is the image of (−2, 6) after a 90° counterclockwise rotation about the origin?', type: 'multiple-choice', options: ['(−6, −2)', '(6, −2)', '(−6, 2)', '(2, 6)'], correctAnswer: '(−6, −2)', standardCode: 'HSG-CO.A.5' },
          { question: 'Explain why a sequence of two reflections over parallel lines is equivalent to a translation.', type: 'short-answer', correctAnswer: 'Each reflection moves points to the opposite side of a line, and with parallel lines the net effect is a slide (translation) perpendicular to the lines by twice the distance between them.', standardCode: 'HSG-CO.B.6' },
          { question: 'True or false: A dilation is a rigid motion.', type: 'multiple-choice', options: ['True', 'False'], correctAnswer: 'False', standardCode: 'HSG-CO.A.2' },
        ],
      },
    },
  },
  {
    slug: 'grade10-math-cpctc',
    title: 'CPCTC — Corresponding Parts of Congruent Triangles',
    description: 'Apply CPCTC to prove that specific sides or angles are congruent after establishing triangle congruence',
    subject: 'math',
    grade: 10,
    gradeBand: '9-12',
    topicCluster: 'Congruence',
    standardCodes: ['HSG-CO.B.7', 'HSG-CO.B.8'],
    content: {
      intro: {
        title: 'CPCTC — Corresponding Parts of Congruent Triangles',
        text: 'Once you prove two triangles are congruent, you unlock a powerful tool: every pair of corresponding parts — sides and angles — must also be congruent. This principle is abbreviated CPCTC. Many geometry proofs do not end at triangle congruence; they use CPCTC as the final step to show that a particular segment or angle pair is equal.',
      },
      segments: [
        {
          index: 0,
          title: 'What CPCTC Means',
          text: 'CPCTC stands for Corresponding Parts of Congruent Triangles are Congruent. If you have proved that triangle ABC ≅ triangle DEF, then AB = DE, BC = EF, AC = DF, angle A = angle D, angle B = angle E, and angle C = angle F. You can cite any of these equalities as a consequence of the congruence you already established.',
          keyVocabulary: ['CPCTC', 'corresponding parts', 'congruent triangles'],
          example: 'If triangle PQR ≅ triangle STU by SAS, then PR = SU by CPCTC.',
        },
        {
          index: 1,
          title: 'Using CPCTC in Proofs',
          text: 'A CPCTC proof typically has two phases. First, prove two triangles congruent using SSS, SAS, ASA, AAS, or HL. Second, state that the desired pair of corresponding parts is congruent by CPCTC. The key is correctly identifying which parts correspond. Always match vertices in the order given by the congruence statement.',
          keyVocabulary: ['proof structure', 'vertex correspondence', 'two-phase proof'],
          example: 'To prove that angle 1 = angle 2, first show the triangles containing those angles are congruent, then apply CPCTC.',
        },
        {
          index: 2,
          title: 'Common Proof Patterns with CPCTC',
          text: 'CPCTC frequently appears in proofs involving parallelograms, isosceles triangles, and bisected segments. For example, to prove a quadrilateral is a parallelogram you might draw a diagonal, prove the two resulting triangles congruent, then use CPCTC to show opposite sides are equal. Recognizing these patterns speeds up your work.',
          keyVocabulary: ['parallelogram', 'isosceles triangle', 'diagonal', 'bisector'],
        },
      ],
      practice: [
        { index: 0, question: 'If triangle ABC ≅ triangle XYZ, which side corresponds to BC?', type: 'multiple-choice', options: ['XY', 'YZ', 'XZ', 'ZY'], correctAnswer: 'YZ', hint: 'Match the second and third letters of each triangle name.', explanation: 'In the congruence statement, B corresponds to Y and C corresponds to Z, so BC corresponds to YZ.', standardCode: 'HSG-CO.B.7' },
        { index: 1, question: 'After proving triangle RST ≅ triangle UVW by ASA, a student writes angle T = angle W by ___. Fill in the blank.', type: 'short-answer', correctAnswer: 'CPCTC', hint: 'What principle lets you equate parts of congruent triangles?', explanation: 'Once triangles are proved congruent, every pair of corresponding parts is congruent by CPCTC.', standardCode: 'HSG-CO.B.7' },
        { index: 2, question: 'True or false: You can apply CPCTC before proving the triangles are congruent.', type: 'multiple-choice', options: ['True', 'False'], correctAnswer: 'False', hint: 'CPCTC is a consequence, not a starting point.', explanation: 'CPCTC requires that triangle congruence has already been established. It cannot be used as a reason until you have proved the congruence.', standardCode: 'HSG-CO.B.8' },
        { index: 3, question: 'In quadrilateral ABCD, diagonal AC is drawn. If triangle ABC ≅ triangle CDA, what can you conclude about AB and CD?', type: 'multiple-choice', options: ['AB = CD', 'AB = AD', 'AB = AC', 'AB = BC'], correctAnswer: 'AB = CD', hint: 'Match the corresponding vertices: A↔C, B↔D, C↔A.', explanation: 'A corresponds to C and B corresponds to D, so AB corresponds to CD. By CPCTC, AB = CD.', standardCode: 'HSG-CO.B.7' },
        { index: 4, question: 'Explain why CPCTC cannot be used if you only know the triangles are similar but not congruent.', type: 'short-answer', correctAnswer: 'Similar triangles have equal angles but proportional (not necessarily equal) sides, so corresponding sides are not guaranteed to be congruent.', hint: 'Think about what similarity preserves versus what congruence preserves.', explanation: 'Similarity preserves angle measures and side ratios but not actual side lengths. CPCTC specifically requires congruence, meaning all corresponding parts are equal in measure.', standardCode: 'HSG-CO.B.8' },
      ],
      assessment: {
        questions: [
          { question: 'Given triangle LMN ≅ triangle PQR, name the angle congruent to angle M.', type: 'short-answer', correctAnswer: 'Angle Q', standardCode: 'HSG-CO.B.7' },
          { question: 'What must you prove before you can use CPCTC?', type: 'multiple-choice', options: ['The triangles are similar', 'The triangles are congruent', 'The triangles share a side', 'The triangles are right triangles'], correctAnswer: 'The triangles are congruent', standardCode: 'HSG-CO.B.8' },
          { question: 'Diagonal BD of parallelogram ABCD creates two triangles. Prove that AB = CD using congruence and CPCTC.', type: 'short-answer', correctAnswer: 'Angle ABD = angle CDB (alternate interior angles), BD = BD (Reflexive Property), angle ADB = angle CBD (alternate interior angles). Triangle ABD ≅ triangle CDB by ASA. Therefore AB = CD by CPCTC.', standardCode: 'HSG-CO.B.8' },
        ],
      },
    },
  },

  // ============================================
  // Similarity (3 modules)
  // ============================================
  {
    slug: 'grade10-math-dilations',
    title: 'Dilations and Scale Factor',
    description: 'Perform dilations on the coordinate plane and understand how scale factor affects side lengths and area',
    subject: 'math',
    grade: 10,
    gradeBand: '9-12',
    topicCluster: 'Similarity',
    standardCodes: ['HSG-SRT.A.1', 'HSG-SRT.A.1a', 'HSG-SRT.A.1b'],
    content: {
      intro: {
        title: 'Dilations and Scale Factor',
        text: 'A dilation enlarges or reduces a figure by a scale factor relative to a fixed center point. Unlike rigid motions, dilations change the size of a figure but preserve its shape. The resulting image is similar to the original. Understanding dilations is the foundation of similarity in geometry.',
      },
      segments: [
        {
          index: 0,
          title: 'What Is a Dilation?',
          text: 'A dilation is a transformation that maps each point P to a new point P\' such that the distance from the center of dilation to P\' equals the scale factor k times the distance from the center to P. When k > 1, the figure is enlarged. When 0 < k < 1, the figure is reduced. The center of dilation stays fixed.',
          keyVocabulary: ['dilation', 'scale factor', 'center of dilation', 'enlargement', 'reduction'],
          example: 'Dilation with center O and scale factor 2: every point moves twice as far from O.',
        },
        {
          index: 1,
          title: 'Dilations on the Coordinate Plane',
          text: 'When the center of dilation is the origin, multiply each coordinate by the scale factor: (x, y) → (kx, ky). For example, with k = 3, the point (2, 5) maps to (6, 15). If the center is not the origin, translate so the center is at the origin, apply the scale factor, then translate back.',
          keyVocabulary: ['coordinate rule', 'origin', 'multiply', 'scale'],
          example: 'Point (4, −1) dilated by factor 0.5 from the origin: (2, −0.5).',
        },
        {
          index: 2,
          title: 'Effects on Length and Area',
          text: 'A dilation with scale factor k multiplies all lengths by k and all areas by k². If a triangle has sides 3, 4, 5 and is dilated by factor 2, the new sides are 6, 8, 10 and the area is 4 times the original. Angles are unchanged by dilations, which is why the original and image are similar.',
          keyVocabulary: ['length ratio', 'area ratio', 'similar figures', 'proportional'],
        },
      ],
      practice: [
        { index: 0, question: 'What is the image of (6, −4) after a dilation centered at the origin with scale factor 1/2?', type: 'multiple-choice', options: ['(3, −2)', '(12, −8)', '(6, −2)', '(3, −4)'], correctAnswer: '(3, −2)', hint: 'Multiply each coordinate by the scale factor.', explanation: '(6 × 1/2, −4 × 1/2) = (3, −2).', standardCode: 'HSG-SRT.A.1' },
        { index: 1, question: 'A triangle with area 20 cm² is dilated by scale factor 3. What is the area of the image?', type: 'multiple-choice', options: ['60 cm²', '180 cm²', '120 cm²', '9 cm²'], correctAnswer: '180 cm²', hint: 'Area scales by the square of the scale factor.', explanation: 'Area of image = 20 × 3² = 20 × 9 = 180 cm².', standardCode: 'HSG-SRT.A.1b' },
        { index: 2, question: 'Is a dilation a rigid motion? Why or why not?', type: 'short-answer', correctAnswer: 'No, because a dilation changes the size of the figure (distances between points are not preserved when the scale factor is not 1).', hint: 'Rigid motions preserve distances.', explanation: 'A rigid motion preserves all distances. A dilation with scale factor other than 1 changes distances, so it is not rigid.', standardCode: 'HSG-SRT.A.1' },
        { index: 3, question: 'A segment of length 8 is dilated by factor k and the image has length 20. What is k?', type: 'short-answer', correctAnswer: '2.5', hint: 'Divide the image length by the original length.', explanation: 'k = image length / original length = 20 / 8 = 2.5.', standardCode: 'HSG-SRT.A.1a' },
        { index: 4, question: 'After dilation from the origin with scale factor 4, point P\' is at (12, −8). What was the original point P?', type: 'multiple-choice', options: ['(3, −2)', '(48, −32)', '(8, −4)', '(16, −12)'], correctAnswer: '(3, −2)', hint: 'Divide the image coordinates by the scale factor.', explanation: 'P = (12/4, −8/4) = (3, −2).', standardCode: 'HSG-SRT.A.1' },
      ],
      assessment: {
        questions: [
          { question: 'Dilate triangle with vertices (1, 2), (4, 2), (1, 6) by scale factor 2 from the origin. List the image vertices.', type: 'short-answer', correctAnswer: '(2, 4), (8, 4), (2, 12)', standardCode: 'HSG-SRT.A.1' },
          { question: 'A rectangle with perimeter 30 is dilated by factor 3. What is the perimeter of the image?', type: 'multiple-choice', options: ['90', '270', '10', '60'], correctAnswer: '90', standardCode: 'HSG-SRT.A.1a' },
          { question: 'Explain why all angles are preserved under a dilation.', type: 'short-answer', correctAnswer: 'A dilation multiplies all side lengths by the same factor, so the ratios between sides remain constant. By the law of cosines, equal side ratios produce equal angles.', standardCode: 'HSG-SRT.A.1b' },
        ],
      },
    },
  },
  {
    slug: 'grade10-math-similar-triangles',
    title: 'Similar Triangles and Proportionality',
    description: 'Identify similar triangles and use proportional reasoning to find unknown side lengths',
    subject: 'math',
    grade: 10,
    gradeBand: '9-12',
    topicCluster: 'Similarity',
    standardCodes: ['HSG-SRT.A.2', 'HSG-SRT.A.3', 'HSG-SRT.B.5'],
    content: {
      intro: {
        title: 'Similar Triangles and Proportionality',
        text: 'Two triangles are similar when their corresponding angles are equal and their corresponding sides are proportional. Similar triangles appear everywhere — from shadows on the ground to architectural blueprints. In this module you will learn to identify similar triangles, set up proportions, and solve for missing measurements.',
      },
      segments: [
        {
          index: 0,
          title: 'Definition of Similarity',
          text: 'Triangles are similar (written △ABC ~ △DEF) when all three pairs of corresponding angles are congruent and all three pairs of corresponding sides are in the same ratio. The common ratio is called the scale factor. If the scale factor is 1, the triangles are congruent — congruence is a special case of similarity.',
          keyVocabulary: ['similar triangles', 'scale factor', 'corresponding angles', 'corresponding sides', 'proportion'],
          example: 'If △ABC ~ △DEF with AB/DE = BC/EF = AC/DF = 2, then every side of △ABC is twice the corresponding side of △DEF.',
        },
        {
          index: 1,
          title: 'Setting Up Proportions',
          text: 'To find an unknown side, write a proportion using two pairs of corresponding sides. Place corresponding sides in the same position: AB/DE = BC/EF. Cross-multiply to solve. Be careful to match vertices correctly — the order in the similarity statement tells you which vertices correspond.',
          keyVocabulary: ['proportion', 'cross-multiply', 'unknown side', 'vertex correspondence'],
          example: 'If AB/DE = 6/3 and BC = 10, then 6/3 = 10/EF, so EF = 5.',
        },
        {
          index: 2,
          title: 'Triangle Proportionality Theorem',
          text: 'If a line is drawn parallel to one side of a triangle and intersects the other two sides, it divides those sides proportionally. This theorem helps you find missing lengths in figures where a line cuts across a triangle. It is also the basis for proving the AA similarity criterion.',
          keyVocabulary: ['parallel line', 'proportional segments', 'triangle proportionality theorem'],
          example: 'In △ABC, if DE is parallel to BC with D on AB and E on AC, then AD/DB = AE/EC.',
        },
      ],
      practice: [
        { index: 0, question: 'If △ABC ~ △DEF, AB = 9, DE = 3, and BC = 12, find EF.', type: 'short-answer', correctAnswer: '4', hint: 'The scale factor is AB/DE = 9/3 = 3.', explanation: 'Scale factor = 9/3 = 3. EF = BC/3 = 12/3 = 4.', standardCode: 'HSG-SRT.B.5' },
        { index: 1, question: 'In △PQR, line ST is parallel to QR with S on PQ and T on PR. If PS = 4, SQ = 6, and PT = 5, find TR.', type: 'short-answer', correctAnswer: '7.5', hint: 'Use the Triangle Proportionality Theorem: PS/SQ = PT/TR.', explanation: 'By the Triangle Proportionality Theorem, PS/SQ = PT/TR. So 4/6 = 5/TR, giving TR = 30/4 = 7.5.', standardCode: 'HSG-SRT.B.5' },
        { index: 2, question: 'Two similar triangles have a scale factor of 5:2. If the smaller triangle has a perimeter of 18 cm, what is the perimeter of the larger?', type: 'multiple-choice', options: ['45 cm', '7.2 cm', '36 cm', '90 cm'], correctAnswer: '45 cm', hint: 'Perimeters scale by the same factor as side lengths.', explanation: 'Perimeter of larger = 18 × (5/2) = 45 cm.', standardCode: 'HSG-SRT.A.2' },
        { index: 3, question: 'True or false: If two triangles have all three pairs of sides proportional, the triangles are similar.', type: 'multiple-choice', options: ['True', 'False'], correctAnswer: 'True', hint: 'This is the SSS similarity criterion.', explanation: 'If all three pairs of sides are in the same ratio, the triangles are similar by the SSS Similarity Theorem.', standardCode: 'HSG-SRT.A.3' },
        { index: 4, question: 'A 6-foot person casts a 4-foot shadow. At the same time, a tree casts a 20-foot shadow. How tall is the tree?', type: 'short-answer', correctAnswer: '30 feet', hint: 'The sun creates similar triangles with the person and the tree.', explanation: 'The triangles formed by the person and shadow and the tree and shadow are similar. 6/4 = h/20, so h = 6 × 20/4 = 30 feet.', standardCode: 'HSG-SRT.B.5' },
      ],
      assessment: {
        questions: [
          { question: '△ABC ~ △XYZ with AB = 15, XY = 5, and AC = 21. Find XZ.', type: 'short-answer', correctAnswer: '7', standardCode: 'HSG-SRT.B.5' },
          { question: 'What is the ratio of the areas of two similar triangles whose corresponding sides are in the ratio 3:7?', type: 'multiple-choice', options: ['3:7', '9:49', '6:14', '27:343'], correctAnswer: '9:49', standardCode: 'HSG-SRT.A.2' },
          { question: 'Explain why the Triangle Proportionality Theorem guarantees that a line parallel to one side of a triangle creates a smaller similar triangle.', type: 'short-answer', correctAnswer: 'The parallel line creates two corresponding angles equal to the original triangle angles (by the Corresponding Angles Postulate), so the smaller triangle shares two angles with the original and is similar by AA.', standardCode: 'HSG-SRT.B.5' },
        ],
      },
    },
  },
  {
    slug: 'grade10-math-aa-sas-sss-similarity',
    title: 'AA, SAS, and SSS Similarity Criteria',
    description: 'Prove triangles are similar using Angle-Angle, Side-Angle-Side, and Side-Side-Side similarity theorems',
    subject: 'math',
    grade: 10,
    gradeBand: '9-12',
    topicCluster: 'Similarity',
    standardCodes: ['HSG-SRT.A.2', 'HSG-SRT.A.3'],
    content: {
      intro: {
        title: 'AA, SAS, and SSS Similarity Criteria',
        text: 'Just as you can prove triangles congruent without checking all six parts, you can prove triangles similar with limited information. The three similarity criteria — AA, SAS, and SSS — give you efficient shortcuts. This module shows you how each criterion works and when to apply it in proofs and problem-solving.',
      },
      segments: [
        {
          index: 0,
          title: 'Angle-Angle (AA) Similarity',
          text: 'If two angles of one triangle are congruent to two angles of another, the triangles are similar. Since the angle sum of any triangle is 180°, knowing two angles automatically determines the third. AA is the most commonly used similarity criterion because angle information is often the easiest to find — vertical angles, parallel line angle pairs, and shared angles frequently provide the two pairs you need.',
          keyVocabulary: ['AA similarity', 'angle sum', 'vertical angles', 'alternate interior angles'],
          example: 'If angle A = angle D = 50° and angle B = angle E = 70°, then △ABC ~ △DEF by AA.',
        },
        {
          index: 1,
          title: 'Side-Angle-Side (SAS) Similarity',
          text: 'If two sides of one triangle are proportional to two sides of another and the included angles are congruent, the triangles are similar. Note the difference from congruence SAS: here the sides must be proportional, not equal. The included angle must be between the two proportional sides.',
          keyVocabulary: ['SAS similarity', 'proportional sides', 'included angle'],
          example: 'If AB/DE = AC/DF = 2 and angle A = angle D, then △ABC ~ △DEF by SAS Similarity.',
        },
        {
          index: 2,
          title: 'Side-Side-Side (SSS) Similarity',
          text: 'If all three pairs of corresponding sides of two triangles are proportional (same ratio), the triangles are similar. You check that AB/DE = BC/EF = AC/DF. If all three ratios are equal, the triangles must have the same shape and therefore the same angles.',
          keyVocabulary: ['SSS similarity', 'proportional', 'ratio', 'equal ratios'],
          example: 'Sides 4, 6, 8 and sides 6, 9, 12 have ratios 4/6 = 6/9 = 8/12 = 2/3, so the triangles are similar by SSS.',
        },
        {
          index: 3,
          title: 'Choosing the Right Criterion',
          text: 'To decide which criterion to use, inventory the information you have. If you can find two angle pairs — use AA. If you have two pairs of proportional sides with the included angle — use SAS Similarity. If you have all three pairs of proportional sides — use SSS Similarity. In most proof situations, AA is the quickest route because angles from parallel lines, vertical angles, or shared angles are easy to identify.',
          keyVocabulary: ['criterion selection', 'proof strategy', 'inventory'],
        },
      ],
      practice: [
        { index: 0, question: 'In △ABC and △DEF, angle A = angle D and angle C = angle F. Are the triangles similar? If so, by which criterion?', type: 'multiple-choice', options: ['Yes, by AA', 'Yes, by SAS', 'Yes, by SSS', 'Not enough information'], correctAnswer: 'Yes, by AA', hint: 'You know two pairs of congruent angles.', explanation: 'Two pairs of congruent angles is sufficient for AA Similarity.', standardCode: 'HSG-SRT.A.3' },
        { index: 1, question: 'Triangle 1 has sides 5, 10, 15 and Triangle 2 has sides 2, 4, 6. Are they similar?', type: 'multiple-choice', options: ['Yes, by SSS Similarity', 'No, the ratios are not equal', 'Yes, by AA', 'Not enough information'], correctAnswer: 'Yes, by SSS Similarity', hint: 'Check if 5/2 = 10/4 = 15/6.', explanation: '5/2 = 2.5, 10/4 = 2.5, 15/6 = 2.5. All ratios are equal, so the triangles are similar by SSS Similarity.', standardCode: 'HSG-SRT.A.2' },
        { index: 2, question: 'In △RST and △UVW, RS/UV = RT/UW = 3 and angle R = angle U. Which criterion proves similarity?', type: 'multiple-choice', options: ['AA', 'SAS Similarity', 'SSS Similarity', 'None'], correctAnswer: 'SAS Similarity', hint: 'You have two proportional sides and the included angle.', explanation: 'Two sides are proportional with the included angle congruent, which is exactly the SAS Similarity criterion.', standardCode: 'HSG-SRT.A.2' },
        { index: 3, question: 'Why is Angle-Angle sufficient for similarity but not for congruence?', type: 'short-answer', correctAnswer: 'Equal angles guarantee the same shape but allow different sizes, so the triangles are similar but could differ in scale. Congruence also requires equal side lengths.', hint: 'Think about what similarity allows that congruence does not.', explanation: 'Similar triangles have the same shape but can have different sizes. Congruent triangles must have the same shape and size. Two angles fix the shape, but without knowing a side length, the size is undetermined.', standardCode: 'HSG-SRT.A.3' },
        { index: 4, question: 'Triangle PQR has sides 8, 12, 16. Triangle STU has sides 10, 15, 20. Find the scale factor from △PQR to △STU.', type: 'short-answer', correctAnswer: '5/4 or 1.25', hint: 'Divide corresponding sides of STU by PQR.', explanation: '10/8 = 15/12 = 20/16 = 5/4 = 1.25.', standardCode: 'HSG-SRT.A.2' },
      ],
      assessment: {
        questions: [
          { question: 'Two right triangles share an acute angle of 35°. Are they similar? Explain.', type: 'short-answer', correctAnswer: 'Yes. Both have a 90° angle and a 35° angle, which gives two pairs of congruent angles. By AA, the triangles are similar.', standardCode: 'HSG-SRT.A.3' },
          { question: 'In △ABC, AB = 6, AC = 9, angle A = 40°. In △DEF, DE = 4, DF = 6, angle D = 40°. Are the triangles similar?', type: 'multiple-choice', options: ['Yes, by SAS Similarity', 'Yes, by SSS Similarity', 'Yes, by AA', 'No'], correctAnswer: 'Yes, by SAS Similarity', standardCode: 'HSG-SRT.A.2' },
          { question: 'Explain why SSA is not a valid similarity criterion.', type: 'short-answer', correctAnswer: 'With two sides proportional and a non-included angle congruent, more than one triangle shape is possible (the ambiguous case), so similarity cannot be guaranteed.', standardCode: 'HSG-SRT.A.3' },
        ],
      },
    },
  },

  // ============================================
  // Trigonometry (3 modules)
  // ============================================
  {
    slug: 'grade10-math-right-triangle-trig',
    title: 'Introduction to Right Triangle Trigonometry',
    description: 'Define sine, cosine, and tangent as ratios of sides in a right triangle and understand their geometric meaning',
    subject: 'math',
    grade: 10,
    gradeBand: '9-12',
    topicCluster: 'Trigonometry',
    standardCodes: ['HSG-SRT.C.6', 'HSG-SRT.C.7'],
    content: {
      intro: {
        title: 'Introduction to Right Triangle Trigonometry',
        text: 'Trigonometry connects angles and side lengths in triangles. In a right triangle, once you fix one of the acute angles, the ratios of any two sides stay the same no matter how large or small the triangle is. These fixed ratios are called sine, cosine, and tangent. This module introduces these three functions and shows why they work.',
      },
      segments: [
        {
          index: 0,
          title: 'Parts of a Right Triangle',
          text: 'Every right triangle has a hypotenuse (the side opposite the right angle and the longest side) and two legs. When you focus on one of the acute angles, the leg across from it is called the opposite side and the leg next to it is called the adjacent side. Correctly labeling these three parts is essential for using trigonometric ratios.',
          keyVocabulary: ['hypotenuse', 'opposite side', 'adjacent side', 'acute angle', 'right angle'],
          example: 'In a right triangle with acute angle A, the side across from A is "opposite" and the side next to A (not the hypotenuse) is "adjacent."',
        },
        {
          index: 1,
          title: 'Defining Sine, Cosine, and Tangent',
          text: 'For an acute angle θ in a right triangle: sin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse, and tan θ = opposite/adjacent. The mnemonic SOH-CAH-TOA helps you remember: Sine = Opposite/Hypotenuse, Cosine = Adjacent/Hypotenuse, Tangent = Opposite/Adjacent. These ratios depend only on the angle, not on the triangle size.',
          keyVocabulary: ['sine', 'cosine', 'tangent', 'SOH-CAH-TOA', 'trigonometric ratio'],
          example: 'In a 3-4-5 right triangle, if the angle is opposite the side of length 3: sin θ = 3/5, cos θ = 4/5, tan θ = 3/4.',
        },
        {
          index: 2,
          title: 'Why the Ratios Are Constant',
          text: 'All right triangles with the same acute angle are similar by AA (they share the right angle and the given angle). In similar triangles, corresponding side ratios are equal. That is why sin 30° is always 1/2 regardless of the triangle size — every right triangle with a 30° angle is similar, so the ratio of the opposite side to the hypotenuse is always the same.',
          keyVocabulary: ['similar triangles', 'constant ratio', 'AA similarity'],
        },
        {
          index: 3,
          title: 'Complementary Angle Relationship',
          text: 'In a right triangle, the two acute angles add to 90° and are complementary. The sine of one equals the cosine of the other: sin θ = cos(90° − θ). This makes sense because the "opposite" side for one angle is the "adjacent" side for the other. This relationship is built into the names: "cosine" originally meant "complement\'s sine."',
          keyVocabulary: ['complementary angles', 'cofunction', 'sin θ = cos(90° − θ)'],
        },
      ],
      practice: [
        { index: 0, question: 'In a right triangle with legs 5 and 12 and hypotenuse 13, what is sin θ if θ is the angle opposite the side of length 5?', type: 'multiple-choice', options: ['5/13', '12/13', '5/12', '13/5'], correctAnswer: '5/13', hint: 'Sine = opposite / hypotenuse.', explanation: 'sin θ = opposite/hypotenuse = 5/13.', standardCode: 'HSG-SRT.C.6' },
        { index: 1, question: 'If cos A = 7/25, what is the ratio adjacent/hypotenuse?', type: 'short-answer', correctAnswer: '7/25', hint: 'Cosine IS the ratio of adjacent to hypotenuse.', explanation: 'By definition, cos A = adjacent/hypotenuse, so the ratio is 7/25.', standardCode: 'HSG-SRT.C.6' },
        { index: 2, question: 'If sin 40° ≈ 0.643, what is cos 50°?', type: 'multiple-choice', options: ['0.643', '0.766', '0.342', '0.500'], correctAnswer: '0.643', hint: 'Use the complementary angle relationship.', explanation: 'sin 40° = cos(90° − 40°) = cos 50°. So cos 50° ≈ 0.643.', standardCode: 'HSG-SRT.C.7' },
        { index: 3, question: 'What is tan θ if the opposite side is 8 and the adjacent side is 6?', type: 'short-answer', correctAnswer: '4/3 or approximately 1.33', hint: 'Tangent = opposite / adjacent.', explanation: 'tan θ = 8/6 = 4/3 ≈ 1.333.', standardCode: 'HSG-SRT.C.6' },
        { index: 4, question: 'Explain why sin θ can never be greater than 1 in a right triangle.', type: 'short-answer', correctAnswer: 'The hypotenuse is always the longest side of a right triangle, so the opposite side is always shorter. Thus opposite/hypotenuse is always less than 1.', hint: 'Which side is always the longest in a right triangle?', explanation: 'In a right triangle the hypotenuse is always longer than either leg. Since sin θ = opposite/hypotenuse, the numerator is always less than the denominator, making the ratio less than 1.', standardCode: 'HSG-SRT.C.6' },
      ],
      assessment: {
        questions: [
          { question: 'In a right triangle, hypotenuse = 10, one leg = 6. Find sin, cos, and tan for the angle opposite the leg of length 6.', type: 'short-answer', correctAnswer: 'The other leg = 8 (by Pythagorean theorem). sin = 6/10 = 3/5, cos = 8/10 = 4/5, tan = 6/8 = 3/4.', standardCode: 'HSG-SRT.C.6' },
          { question: 'If sin X = cos Y, what can you say about angles X and Y?', type: 'multiple-choice', options: ['X = Y', 'X + Y = 90°', 'X + Y = 180°', 'X = 2Y'], correctAnswer: 'X + Y = 90°', standardCode: 'HSG-SRT.C.7' },
          { question: 'Why does every right triangle with a 45° angle have tan 45° = 1?', type: 'short-answer', correctAnswer: 'In a 45-45-90 triangle the two legs are equal, so tan 45° = opposite/adjacent = 1.', standardCode: 'HSG-SRT.C.6' },
        ],
      },
    },
  },
  {
    slug: 'grade10-math-sin-cos-tan-ratios',
    title: 'Sine, Cosine, and Tangent Ratios in Action',
    description: 'Calculate exact and approximate values of trig ratios and use special triangles (30-60-90 and 45-45-90)',
    subject: 'math',
    grade: 10,
    gradeBand: '9-12',
    topicCluster: 'Trigonometry',
    standardCodes: ['HSG-SRT.C.6', 'HSG-SRT.C.8'],
    content: {
      intro: {
        title: 'Sine, Cosine, and Tangent Ratios in Action',
        text: 'Now that you know the definitions of sine, cosine, and tangent, it is time to compute them for specific angles — both exact values from special triangles and approximate values from a calculator. This module deepens your fluency with trig ratios and prepares you to use them for solving real problems.',
      },
      segments: [
        {
          index: 0,
          title: 'The 45-45-90 Triangle',
          text: 'A 45-45-90 triangle is an isosceles right triangle. If each leg has length 1, the hypotenuse is √2 (by the Pythagorean theorem). From this: sin 45° = 1/√2 = √2/2 ≈ 0.707, cos 45° = √2/2, and tan 45° = 1. These exact values appear frequently in geometry and should be memorized.',
          keyVocabulary: ['45-45-90 triangle', 'isosceles right triangle', 'exact value', '√2'],
          example: 'sin 45° = √2/2 ≈ 0.707, cos 45° = √2/2, tan 45° = 1.',
        },
        {
          index: 1,
          title: 'The 30-60-90 Triangle',
          text: 'A 30-60-90 triangle has sides in the ratio 1 : √3 : 2. The shortest side (opposite 30°) is 1, the middle side (opposite 60°) is √3, and the hypotenuse (opposite 90°) is 2. This gives: sin 30° = 1/2, cos 30° = √3/2, tan 30° = 1/√3 = √3/3. For 60°: sin 60° = √3/2, cos 60° = 1/2, tan 60° = √3.',
          keyVocabulary: ['30-60-90 triangle', 'side ratio', '1:√3:2'],
          example: 'sin 30° = 1/2, cos 30° = √3/2 ≈ 0.866, tan 30° = √3/3 ≈ 0.577.',
        },
        {
          index: 2,
          title: 'Using a Calculator for Other Angles',
          text: 'For angles other than 30°, 45°, and 60°, use a scientific calculator. Make sure it is set to degree mode. Enter the angle and press sin, cos, or tan. For example, sin 37° ≈ 0.6018 and cos 53° ≈ 0.6018 (confirming the complementary relationship). Rounding to four decimal places is standard practice.',
          keyVocabulary: ['degree mode', 'scientific calculator', 'approximate value'],
        },
      ],
      practice: [
        { index: 0, question: 'What is the exact value of sin 60°?', type: 'multiple-choice', options: ['1/2', '√3/2', '√2/2', '1'], correctAnswer: '√3/2', hint: 'Use the 30-60-90 triangle ratios.', explanation: 'In a 30-60-90 triangle, sin 60° = side opposite 60° / hypotenuse = √3/2.', standardCode: 'HSG-SRT.C.6' },
        { index: 1, question: 'What is tan 45°?', type: 'multiple-choice', options: ['0', '1/2', '1', '√2'], correctAnswer: '1', hint: 'Both legs of a 45-45-90 triangle are equal.', explanation: 'In a 45-45-90 triangle, the legs are equal, so tan 45° = opposite/adjacent = 1.', standardCode: 'HSG-SRT.C.6' },
        { index: 2, question: 'Find cos 30° as an exact value.', type: 'short-answer', correctAnswer: '√3/2', hint: 'Use the 30-60-90 triangle with sides 1, √3, 2.', explanation: 'cos 30° = adjacent/hypotenuse = √3/2.', standardCode: 'HSG-SRT.C.6' },
        { index: 3, question: 'A 30-60-90 triangle has a hypotenuse of 10. What is the length of the side opposite the 30° angle?', type: 'multiple-choice', options: ['5', '5√3', '10√3', '10'], correctAnswer: '5', hint: 'The side opposite 30° is half the hypotenuse.', explanation: 'In a 30-60-90 triangle, the short leg = hypotenuse/2 = 10/2 = 5.', standardCode: 'HSG-SRT.C.8' },
        { index: 4, question: 'If a 45-45-90 triangle has legs of length 7, what is the hypotenuse?', type: 'short-answer', correctAnswer: '7√2', hint: 'The hypotenuse of a 45-45-90 triangle is leg × √2.', explanation: 'Hypotenuse = leg × √2 = 7√2 ≈ 9.899.', standardCode: 'HSG-SRT.C.8' },
      ],
      assessment: {
        questions: [
          { question: 'A 30-60-90 triangle has a short leg of 4. Find the exact lengths of the other two sides.', type: 'short-answer', correctAnswer: 'Long leg = 4√3, hypotenuse = 8.', standardCode: 'HSG-SRT.C.8' },
          { question: 'Which is larger: sin 50° or cos 50°?', type: 'multiple-choice', options: ['sin 50°', 'cos 50°', 'They are equal'], correctAnswer: 'sin 50°', standardCode: 'HSG-SRT.C.6' },
          { question: 'Explain why tan 60° = √3 using the 30-60-90 triangle.', type: 'short-answer', correctAnswer: 'In a 30-60-90 triangle with sides 1, √3, 2, the angle 60° has opposite side √3 and adjacent side 1. So tan 60° = √3/1 = √3.', standardCode: 'HSG-SRT.C.6' },
        ],
      },
    },
  },
  {
    slug: 'grade10-math-solving-triangles',
    title: 'Solving Right Triangles',
    description: 'Use trigonometric ratios and inverse functions to find all unknown sides and angles in right triangles',
    subject: 'math',
    grade: 10,
    gradeBand: '9-12',
    topicCluster: 'Trigonometry',
    standardCodes: ['HSG-SRT.C.8'],
    content: {
      intro: {
        title: 'Solving Right Triangles',
        text: 'To "solve" a triangle means to find every unknown side and angle. With trigonometric ratios and the Pythagorean theorem, you can solve any right triangle if you know at least one side and one acute angle (or two sides). This module teaches you a systematic approach: identify what you know, choose the right tool, and solve step by step.',
      },
      segments: [
        {
          index: 0,
          title: 'Finding a Side Using Trig Ratios',
          text: 'When you know an angle and one side, pick the trig ratio that involves the known side and the unknown side. If you know the hypotenuse and want the opposite side, use sine. If you know the adjacent side and want the opposite, use tangent. Set up the equation and solve for the unknown by multiplying or dividing.',
          keyVocabulary: ['solve for a side', 'equation setup', 'multiply', 'divide'],
          example: 'Find the opposite side: sin 35° = x/20, so x = 20 × sin 35° ≈ 20 × 0.5736 ≈ 11.47.',
        },
        {
          index: 1,
          title: 'Finding an Angle Using Inverse Trig Functions',
          text: 'When you know two sides but not the angle, use an inverse trigonometric function. If you know opposite and hypotenuse, use θ = sin⁻¹(opposite/hypotenuse). Similarly, cos⁻¹ and tan⁻¹ work with their respective ratios. On a calculator, these are often labeled sin⁻¹, cos⁻¹, and tan⁻¹ (or arcsin, arccos, arctan).',
          keyVocabulary: ['inverse sine', 'inverse cosine', 'inverse tangent', 'arcsin', 'arccos', 'arctan'],
          example: 'If opposite = 7 and hypotenuse = 10, then θ = sin⁻¹(7/10) = sin⁻¹(0.7) ≈ 44.4°.',
        },
        {
          index: 2,
          title: 'Solving Complete Triangles',
          text: 'To solve a right triangle completely: (1) Find any missing angle using the fact that acute angles sum to 90°. (2) Use trig ratios to find missing sides. (3) Check your work with the Pythagorean theorem: a² + b² = c². Always verify that your answers make sense — the hypotenuse should be the longest side, and larger angles should be opposite longer sides.',
          keyVocabulary: ['complete solution', 'verification', 'Pythagorean theorem', 'angle sum'],
        },
        {
          index: 3,
          title: 'Real-World Applications',
          text: 'Right triangle trigonometry solves real problems involving angles of elevation and depression, distances that cannot be measured directly, heights of buildings, and slopes. An angle of elevation looks up from horizontal; an angle of depression looks down. In each case, draw the right triangle, label the known and unknown parts, and apply the appropriate trig ratio.',
          keyVocabulary: ['angle of elevation', 'angle of depression', 'horizontal', 'real-world application'],
        },
      ],
      practice: [
        { index: 0, question: 'A ladder leans against a wall making a 65° angle with the ground. If the ladder is 12 feet long, how high up the wall does it reach?', type: 'short-answer', correctAnswer: 'Approximately 10.88 feet', hint: 'The height is the side opposite the 65° angle; the ladder is the hypotenuse.', explanation: 'sin 65° = height/12, so height = 12 × sin 65° ≈ 12 × 0.9063 ≈ 10.88 feet.', standardCode: 'HSG-SRT.C.8' },
        { index: 1, question: 'In a right triangle, the legs are 9 and 12. Find the measure of the smaller acute angle.', type: 'short-answer', correctAnswer: 'Approximately 36.87°', hint: 'The smaller angle is opposite the shorter side. Use inverse tangent.', explanation: 'tan θ = 9/12 = 0.75, so θ = tan⁻¹(0.75) ≈ 36.87°.', standardCode: 'HSG-SRT.C.8' },
        { index: 2, question: 'From a point 50 meters from the base of a tower, the angle of elevation to the top is 40°. How tall is the tower?', type: 'short-answer', correctAnswer: 'Approximately 41.95 meters', hint: 'The 50 m is the adjacent side; the tower height is the opposite side.', explanation: 'tan 40° = height/50, so height = 50 × tan 40° ≈ 50 × 0.8391 ≈ 41.95 meters.', standardCode: 'HSG-SRT.C.8' },
        { index: 3, question: 'Solve the right triangle: angle A = 28°, hypotenuse c = 15. Find sides a and b.', type: 'short-answer', correctAnswer: 'a ≈ 7.04, b ≈ 13.24', hint: 'a is opposite A (use sine), b is adjacent to A (use cosine).', explanation: 'a = 15 × sin 28° ≈ 15 × 0.4695 ≈ 7.04. b = 15 × cos 28° ≈ 15 × 0.8829 ≈ 13.24.', standardCode: 'HSG-SRT.C.8' },
        { index: 4, question: 'A ramp rises 3 feet over a horizontal distance of 20 feet. What angle does the ramp make with the ground?', type: 'multiple-choice', options: ['About 8.5°', 'About 15°', 'About 30°', 'About 45°'], correctAnswer: 'About 8.5°', hint: 'Use inverse tangent with opposite = 3 and adjacent = 20.', explanation: 'θ = tan⁻¹(3/20) = tan⁻¹(0.15) ≈ 8.53°.', standardCode: 'HSG-SRT.C.8' },
      ],
      assessment: {
        questions: [
          { question: 'A right triangle has an angle of 52° and the side adjacent to it is 18. Find the hypotenuse.', type: 'short-answer', correctAnswer: 'cos 52° = 18/c, so c = 18/cos 52° ≈ 18/0.6157 ≈ 29.24.', standardCode: 'HSG-SRT.C.8' },
          { question: 'From the top of a 60-meter cliff, the angle of depression to a boat is 25°. How far is the boat from the base of the cliff?', type: 'short-answer', correctAnswer: 'tan 25° = 60/d, so d = 60/tan 25° ≈ 60/0.4663 ≈ 128.67 meters.', standardCode: 'HSG-SRT.C.8' },
          { question: 'A right triangle has legs 7 and 24. Find all three angles.', type: 'short-answer', correctAnswer: '90°, tan⁻¹(7/24) ≈ 16.26°, and 90° − 16.26° ≈ 73.74°.', standardCode: 'HSG-SRT.C.8' },
        ],
      },
    },
  },

  // ============================================
  // Circles (2 modules)
  // ============================================
  {
    slug: 'grade10-math-arc-length-inscribed-angles',
    title: 'Arc Length and Inscribed Angles',
    description: 'Calculate arc length, understand the relationship between central and inscribed angles, and apply the Inscribed Angle Theorem',
    subject: 'math',
    grade: 10,
    gradeBand: '9-12',
    topicCluster: 'Circles',
    standardCodes: ['HSG-C.A.2', 'HSG-C.B.5'],
    content: {
      intro: {
        title: 'Arc Length and Inscribed Angles',
        text: 'Circles are full of elegant relationships between angles and arcs. A central angle equals its intercepted arc, but an inscribed angle is always half its intercepted arc. Understanding these relationships lets you find missing angles and calculate arc lengths — skills used in engineering, design, and navigation.',
      },
      segments: [
        {
          index: 0,
          title: 'Central Angles and Arcs',
          text: 'A central angle has its vertex at the center of the circle. The measure of a central angle equals the measure of its intercepted arc in degrees. A full circle is 360°, so a central angle of 90° intercepts a quarter of the circle. The arc length is the portion of the circumference corresponding to that central angle.',
          keyVocabulary: ['central angle', 'intercepted arc', 'arc measure', 'minor arc', 'major arc'],
          example: 'A central angle of 60° in a circle of radius 10: arc = (60/360) × 2π(10) = 10π/3 ≈ 10.47 units.',
        },
        {
          index: 1,
          title: 'Arc Length Formula',
          text: 'Arc length = (θ/360) × 2πr, where θ is the central angle in degrees and r is the radius. Equivalently, arc length = (θ/360) × πd, where d is the diameter. If the angle is in radians, the formula simplifies to arc length = rθ. Always check your units and make sure your angle measure matches the formula you use.',
          keyVocabulary: ['arc length', 'radius', 'circumference', 'radian'],
          example: 'Radius = 8 cm, central angle = 45°: arc length = (45/360) × 2π(8) = 2π ≈ 6.28 cm.',
        },
        {
          index: 2,
          title: 'Inscribed Angles',
          text: 'An inscribed angle has its vertex on the circle and its sides are chords. The Inscribed Angle Theorem states that an inscribed angle is half the measure of its intercepted arc. For example, if the intercepted arc is 100°, the inscribed angle is 50°. Conversely, if the inscribed angle is 35°, the arc is 70°.',
          keyVocabulary: ['inscribed angle', 'chord', 'Inscribed Angle Theorem', 'intercepted arc'],
          example: 'Inscribed angle = 40° → intercepted arc = 80°.',
        },
        {
          index: 3,
          title: 'Corollaries of the Inscribed Angle Theorem',
          text: 'Several important results follow from the Inscribed Angle Theorem. (1) All inscribed angles that intercept the same arc are congruent. (2) An inscribed angle that intercepts a semicircle (180° arc) is a right angle (Thales\' Theorem). (3) Opposite angles of an inscribed quadrilateral are supplementary (they add to 180°).',
          keyVocabulary: ['Thales\' Theorem', 'semicircle', 'inscribed quadrilateral', 'supplementary'],
        },
      ],
      practice: [
        { index: 0, question: 'Find the arc length for a central angle of 120° in a circle of radius 9 cm.', type: 'short-answer', correctAnswer: '6π ≈ 18.85 cm', hint: 'Arc length = (120/360) × 2π(9).', explanation: '(120/360) × 2π(9) = (1/3)(18π) = 6π ≈ 18.85 cm.', standardCode: 'HSG-C.B.5' },
        { index: 1, question: 'An inscribed angle measures 55°. What is the measure of its intercepted arc?', type: 'multiple-choice', options: ['27.5°', '55°', '110°', '180°'], correctAnswer: '110°', hint: 'An inscribed angle is half the intercepted arc.', explanation: 'If the inscribed angle is 55°, the intercepted arc = 2 × 55° = 110°.', standardCode: 'HSG-C.A.2' },
        { index: 2, question: 'A chord passes through the center of a circle. What is the measure of any inscribed angle that intercepts this chord?', type: 'multiple-choice', options: ['45°', '90°', '180°', '60°'], correctAnswer: '90°', hint: 'A chord through the center is a diameter, making a semicircle.', explanation: 'A diameter creates a semicircular arc of 180°. By the Inscribed Angle Theorem, the inscribed angle = 180°/2 = 90° (Thales\' Theorem).', standardCode: 'HSG-C.A.2' },
        { index: 3, question: 'Two inscribed angles intercept the same arc of 84°. What are their measures?', type: 'short-answer', correctAnswer: 'Both are 42°', hint: 'All inscribed angles intercepting the same arc are congruent.', explanation: 'Each inscribed angle = 84°/2 = 42°. Since they intercept the same arc, they are equal.', standardCode: 'HSG-C.A.2' },
        { index: 4, question: 'A circle has radius 5 meters. What is the arc length of a semicircle?', type: 'multiple-choice', options: ['5π m', '10π m', '25π m', '2.5π m'], correctAnswer: '5π m', hint: 'A semicircle has a central angle of 180°.', explanation: 'Arc length = (180/360) × 2π(5) = (1/2)(10π) = 5π ≈ 15.71 m.', standardCode: 'HSG-C.B.5' },
      ],
      assessment: {
        questions: [
          { question: 'Find the arc length for a 72° central angle in a circle with diameter 20 cm.', type: 'short-answer', correctAnswer: 'Arc length = (72/360) × π(20) = 4π ≈ 12.57 cm.', standardCode: 'HSG-C.B.5' },
          { question: 'In a circle, inscribed angle ABC = 48°. What is the measure of arc AC?', type: 'multiple-choice', options: ['24°', '48°', '96°', '132°'], correctAnswer: '96°', standardCode: 'HSG-C.A.2' },
          { question: 'In an inscribed quadrilateral, one angle is 110°. What is the measure of the opposite angle?', type: 'multiple-choice', options: ['70°', '110°', '90°', '55°'], correctAnswer: '70°', standardCode: 'HSG-C.A.2' },
        ],
      },
    },
  },
  {
    slug: 'grade10-math-circle-equations',
    title: 'Equations of Circles',
    description: 'Write and interpret the equation of a circle in standard form and connect it to the distance formula and Pythagorean theorem',
    subject: 'math',
    grade: 10,
    gradeBand: '9-12',
    topicCluster: 'Circles',
    standardCodes: ['HSG-C.A.1', 'HSG-C.A.3'],
    content: {
      intro: {
        title: 'Equations of Circles',
        text: 'Every circle can be described by an equation that tells you its center and radius. The standard form (x − h)² + (y − k)² = r² comes directly from the Pythagorean theorem applied to the distance from the center to any point on the circle. This module teaches you to write, graph, and interpret circle equations.',
      },
      segments: [
        {
          index: 0,
          title: 'Deriving the Standard Form',
          text: 'A circle is the set of all points at distance r from a center (h, k). Using the distance formula, any point (x, y) on the circle satisfies √((x − h)² + (y − k)²) = r. Squaring both sides gives the standard equation: (x − h)² + (y − k)² = r². This equation encodes both the center and the radius.',
          keyVocabulary: ['standard form', 'center', 'radius', 'distance formula'],
          example: 'Circle with center (3, −2) and radius 5: (x − 3)² + (y + 2)² = 25.',
        },
        {
          index: 1,
          title: 'Reading Center and Radius from the Equation',
          text: 'Given (x − h)² + (y − k)² = r², the center is (h, k) and the radius is r (the square root of the right side). Watch the signs: (x + 3) means h = −3 because x − (−3) = x + 3. If the equation is x² + y² = 49, the center is (0, 0) and the radius is 7.',
          keyVocabulary: ['identify center', 'identify radius', 'sign convention'],
          example: '(x + 1)² + (y − 4)² = 16 → center (−1, 4), radius 4.',
        },
        {
          index: 2,
          title: 'Completing the Square',
          text: 'Sometimes a circle equation is given in general form: x² + y² + Dx + Ey + F = 0. To convert to standard form, group the x-terms and y-terms separately, then complete the square for each group. Add the same values to both sides to keep the equation balanced. The result reveals the center and radius.',
          keyVocabulary: ['general form', 'completing the square', 'balance equation'],
          example: 'x² + y² − 6x + 4y − 12 = 0 → (x − 3)² + (y + 2)² = 25, center (3, −2), radius 5.',
        },
      ],
      practice: [
        { index: 0, question: 'Write the equation of a circle with center (−2, 5) and radius 3.', type: 'short-answer', correctAnswer: '(x + 2)² + (y − 5)² = 9', hint: 'Plug h = −2, k = 5, r = 3 into standard form.', explanation: '(x − (−2))² + (y − 5)² = 3² simplifies to (x + 2)² + (y − 5)² = 9.', standardCode: 'HSG-C.A.1' },
        { index: 1, question: 'What are the center and radius of (x − 7)² + (y + 1)² = 36?', type: 'short-answer', correctAnswer: 'Center (7, −1), radius 6', hint: 'The center is (h, k) and the radius is √(right side).', explanation: 'h = 7, k = −1 (note the + sign means k is negative), r = √36 = 6.', standardCode: 'HSG-C.A.1' },
        { index: 2, question: 'Convert x² + y² + 8x − 2y + 8 = 0 to standard form.', type: 'short-answer', correctAnswer: '(x + 4)² + (y − 1)² = 9', hint: 'Group x and y terms separately and complete the square.', explanation: '(x² + 8x + 16) + (y² − 2y + 1) = −8 + 16 + 1. So (x + 4)² + (y − 1)² = 9. Center (−4, 1), radius 3.', standardCode: 'HSG-C.A.3' },
        { index: 3, question: 'Does the point (5, 0) lie on the circle (x − 2)² + y² = 9?', type: 'multiple-choice', options: ['Yes', 'No'], correctAnswer: 'Yes', hint: 'Substitute x = 5 and y = 0 into the equation.', explanation: '(5 − 2)² + 0² = 9 + 0 = 9. Since this equals the right side, the point is on the circle.', standardCode: 'HSG-C.A.1' },
        { index: 4, question: 'A circle has a diameter with endpoints (1, 3) and (7, 3). Write its equation.', type: 'short-answer', correctAnswer: '(x − 4)² + (y − 3)² = 9', hint: 'The center is the midpoint of the diameter and the radius is half the diameter length.', explanation: 'Center = midpoint = ((1+7)/2, (3+3)/2) = (4, 3). Diameter = 7 − 1 = 6, so radius = 3. Equation: (x − 4)² + (y − 3)² = 9.', standardCode: 'HSG-C.A.1' },
      ],
      assessment: {
        questions: [
          { question: 'Write the equation of the circle with center at the origin and passing through (5, 12).', type: 'short-answer', correctAnswer: 'x² + y² = 169. The radius = √(25 + 144) = 13.', standardCode: 'HSG-C.A.1' },
          { question: 'Convert x² + y² − 10x + 6y + 18 = 0 to standard form and give the center and radius.', type: 'short-answer', correctAnswer: '(x − 5)² + (y + 3)² = 16. Center (5, −3), radius 4.', standardCode: 'HSG-C.A.3' },
          { question: 'Explain why (x − h)² + (y − k)² = r² represents a circle using the distance formula.', type: 'short-answer', correctAnswer: 'The equation states that the distance from any point (x, y) to the fixed point (h, k) is r. The set of all points at a fixed distance from a center point is, by definition, a circle.', standardCode: 'HSG-C.A.1' },
        ],
      },
    },
  },

  // ============================================
  // Probability (1 module)
  // ============================================
  {
    slug: 'grade10-math-geometric-probability',
    title: 'Geometric Probability',
    description: 'Calculate probabilities using area ratios, length ratios, and geometric models of chance events',
    subject: 'math',
    grade: 10,
    gradeBand: '9-12',
    topicCluster: 'Probability',
    standardCodes: ['HSS-CP.A.1', 'HSS-CP.A.2'],
    content: {
      intro: {
        title: 'Geometric Probability',
        text: 'Sometimes probability is not about counting outcomes but about measuring regions. If a dart lands randomly on a board, the probability of hitting a target area equals the target area divided by the total area. This idea — geometric probability — connects geometry and probability, letting you solve problems where outcomes are continuous rather than discrete.',
      },
      segments: [
        {
          index: 0,
          title: 'Probability as a Ratio of Areas',
          text: 'When an event is equally likely to occur at any point in a region, the probability of the event equals the favorable area divided by the total area. For example, if a circular target of radius 2 is painted on a square board with side 10, the probability that a randomly thrown dart hits the circle is π(2²)/(10²) = 4π/100 ≈ 0.1257.',
          keyVocabulary: ['geometric probability', 'favorable area', 'total area', 'uniform distribution'],
          example: 'P(hitting circle) = area of circle / area of square = 4π/100 ≈ 12.57%.',
        },
        {
          index: 1,
          title: 'Probability as a Ratio of Lengths',
          text: 'For one-dimensional situations, geometric probability uses length ratios. If a point is chosen at random on a segment of length 20 and the favorable region is a subsegment of length 5, the probability is 5/20 = 0.25. This applies to problems like bus arrival times or random points on a number line.',
          keyVocabulary: ['length ratio', 'one-dimensional', 'segment', 'random point'],
          example: 'A bus arrives at a random time in a 30-minute window. The probability of arriving in the first 10 minutes is 10/30 = 1/3.',
        },
        {
          index: 2,
          title: 'Compound Geometric Regions',
          text: 'More complex problems involve regions within regions. A dartboard may have a bullseye inside a ring inside a larger circle. Calculate each area separately: P(bullseye) = area of bullseye / area of board, P(ring) = (area of ring) / (area of board). Subtract inner areas from outer areas to find ring-shaped regions: area of ring = π(R²) − π(r²).',
          keyVocabulary: ['annulus', 'compound region', 'subtract areas', 'concentric circles'],
          example: 'Bullseye radius 1, outer circle radius 5: P(bullseye) = π/25π = 1/25 = 4%.',
        },
      ],
      practice: [
        { index: 0, question: 'A square dartboard has side 12 inches. A circular target has radius 3 inches. What is the probability of hitting the target?', type: 'short-answer', correctAnswer: '9π/144 = π/16 ≈ 19.63%', hint: 'P = area of circle / area of square.', explanation: 'Area of circle = π(3²) = 9π. Area of square = 144. P = 9π/144 = π/16 ≈ 0.1963.', standardCode: 'HSS-CP.A.1' },
        { index: 1, question: 'A point is randomly chosen on a segment from 0 to 15. What is the probability the point is between 4 and 9?', type: 'multiple-choice', options: ['1/5', '1/3', '1/4', '2/5'], correctAnswer: '1/3', hint: 'Find the length of the favorable segment and divide by the total.', explanation: 'Favorable length = 9 − 4 = 5. Total = 15. P = 5/15 = 1/3.', standardCode: 'HSS-CP.A.1' },
        { index: 2, question: 'A circular target with radius 6 has a bullseye of radius 2 at its center. What is the probability of hitting the bullseye?', type: 'short-answer', correctAnswer: '4π/36π = 1/9 ≈ 11.11%', hint: 'Divide the bullseye area by the total target area.', explanation: 'P = π(2²)/π(6²) = 4π/36π = 1/9 ≈ 0.1111.', standardCode: 'HSS-CP.A.1' },
        { index: 3, question: 'A rectangle measures 8 by 6. A triangle inside it has base 8 and height 6. What is the probability that a random point in the rectangle lands in the triangle?', type: 'multiple-choice', options: ['1/4', '1/3', '1/2', '2/3'], correctAnswer: '1/2', hint: 'Find both areas and divide.', explanation: 'Area of rectangle = 48. Area of triangle = (1/2)(8)(6) = 24. P = 24/48 = 1/2.', standardCode: 'HSS-CP.A.2' },
        { index: 4, question: 'Two friends agree to meet between 12:00 and 1:00 PM. Each will wait 15 minutes. What is the probability they meet? (Model on a 60 × 60 square.)', type: 'short-answer', correctAnswer: '7/16 ≈ 43.75%', hint: 'The favorable region is the area where |x − y| < 15 on a 60 × 60 square.', explanation: 'Total area = 3600. Unfavorable area (both miss) = 2 × (1/2)(45²) = 2025. Favorable = 3600 − 2025 = 1575. P = 1575/3600 = 7/16 ≈ 0.4375.', standardCode: 'HSS-CP.A.2' },
      ],
      assessment: {
        questions: [
          { question: 'A spinner is divided into a red sector of 120° and the rest is blue. What is the probability of landing on red?', type: 'multiple-choice', options: ['1/2', '1/3', '2/3', '1/4'], correctAnswer: '1/3', standardCode: 'HSS-CP.A.1' },
          { question: 'A circle of radius 10 has a concentric circle of radius 4 removed, creating a ring. What is the probability that a random point in the large circle lands in the ring?', type: 'short-answer', correctAnswer: 'P = (100π − 16π)/100π = 84/100 = 21/25 = 84%.', standardCode: 'HSS-CP.A.1' },
          { question: 'Explain why geometric probability requires a "uniform" or "equally likely" assumption for every point in the region.', type: 'short-answer', correctAnswer: 'Without uniform distribution, some areas would be more likely than others, and the simple area-ratio formula would not give the correct probability. The formula P = favorable area / total area assumes every point is equally likely to be selected.', standardCode: 'HSS-CP.A.2' },
        ],
      },
    },
  },
]
