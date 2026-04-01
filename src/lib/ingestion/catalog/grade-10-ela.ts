import type { ModuleSeed } from '../types'

export const GRADE_10_ELA: ModuleSeed[] = [
  // ─── Reading Literature (3 modules) ─────────────────────────────
  {
    slug: 'grade10-ela-analyzing-complex-characters',
    title: 'Analyzing Complex Characters',
    description:
      'Examine how authors develop multidimensional characters through conflicting motivations, moral ambiguity, and evolving relationships, and analyze the impact of those complexities on theme.',
    subject: 'ela',
    grade: 10,
    gradeBand: '9-12',
    topicCluster: 'Reading Literature',
    standardCodes: ['9-10.RL.3', '9-10.RL.1'],
    content: {
      intro: {
        title: 'Analyzing Complex Characters',
        text: 'Great literature rarely gives us simple heroes or villains. Instead, characters struggle with competing desires, hidden fears, and moral gray areas. In this module you will learn to trace how an author builds a complex character over the course of a text and explain how that complexity advances the work\'s deeper themes.',
        culturalHook:
          'Think of someone in your community who surprised you — someone whose actions didn\'t match what you first expected. That surprise is the same tension great authors create in their characters.',
      },
      segments: [
        {
          index: 0,
          title: 'What Makes a Character Complex',
          text: 'A complex character possesses conflicting motivations, contradictory traits, or evolving beliefs. Authors signal complexity through interior monologue, dialogue that contrasts with action, and reactions that shift as the plot progresses. When you identify these signals, you move beyond surface-level description to genuine analysis.',
          keyVocabulary: ['complex character', 'conflicting motivations', 'interior monologue', 'character arc'],
        },
        {
          index: 1,
          title: 'Tracking Character Development',
          text: 'To trace how a character changes, create a character map that notes key moments: the character\'s initial presentation, pivotal decisions, moments of self-awareness, and final state. At each point, record what the character says, does, and thinks — and note any contradictions. These contradictions are the heart of complexity.',
          keyVocabulary: ['character map', 'pivotal decision', 'self-awareness', 'contradiction'],
          example:
            'In a novel, a character publicly champions honesty yet secretly withholds a painful truth from a friend. The gap between the public stance and private action reveals moral complexity and advances the theme of self-deception.',
        },
        {
          index: 2,
          title: 'Connecting Character Complexity to Theme',
          text: 'Complex characters embody the thematic tensions of a work. When a protagonist\'s internal conflict mirrors the text\'s central question — such as justice versus mercy — the character becomes a vehicle for exploring that question. In your analysis, show how specific moments of character complexity illuminate the broader theme.',
          keyVocabulary: ['thematic tension', 'internal conflict', 'vehicle for theme'],
        },
        {
          index: 3,
          title: 'Writing an Analytical Paragraph',
          text: 'Craft a paragraph that names the character, identifies a specific complexity (e.g., a contradiction between belief and action), provides a direct quotation, and explains how that complexity develops a theme. Use the pattern: claim → context → evidence → analysis → connection to theme.',
          keyVocabulary: ['analytical paragraph', 'claim', 'textual evidence', 'analysis'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'Which of the following best describes a complex character?',
          type: 'multiple-choice',
          options: [
            'A character with conflicting motivations and evolving beliefs.',
            'A character who is always brave and never makes mistakes.',
            'A character described with many physical details.',
            'A character who appears in more than one chapter.',
          ],
          correctAnswer:
            'A character with conflicting motivations and evolving beliefs.',
          hint: 'Complexity is about inner tensions, not outer descriptions.',
          explanation:
            'Complex characters are defined by internal contradictions, moral ambiguity, and growth — not by physical description or frequency of appearance.',
          standardCode: '9-10.RL.3',
        },
        {
          index: 1,
          question:
            'A character tells her community she values tradition above all else, yet she secretly applies to a distant university. What literary technique does this illustrate, and how does it develop complexity?',
          type: 'short-answer',
          correctAnswer:
            'This illustrates a contradiction between dialogue and action. The gap between her stated values and her secret ambition creates moral complexity, suggesting an internal conflict between loyalty and personal desire.',
          hint: 'Focus on the gap between what the character says and what she does.',
          explanation:
            'When speech and action diverge, the reader must reconcile two versions of the character. This contradiction signals depth and invites analysis of the character\'s true motivations.',
          standardCode: '9-10.RL.3',
        },
        {
          index: 2,
          question:
            'What is the purpose of creating a character map when analyzing a complex character?',
          type: 'multiple-choice',
          options: [
            'To track key moments of change, contradiction, and self-awareness across the text.',
            'To memorize every detail about the character\'s appearance.',
            'To count the number of times the character speaks.',
            'To predict the sequel to the novel.',
          ],
          correctAnswer:
            'To track key moments of change, contradiction, and self-awareness across the text.',
          hint: 'A character map organizes your observations about development.',
          explanation:
            'A character map helps you systematically record pivotal moments so you can identify patterns of growth, contradiction, and complexity.',
          standardCode: '9-10.RL.1',
        },
        {
          index: 3,
          question:
            'Explain how a character\'s internal conflict can serve as a vehicle for a text\'s theme.',
          type: 'short-answer',
          correctAnswer:
            'When a character struggles internally — for example, between justice and mercy — that struggle mirrors the broader thematic question the author is exploring. The character\'s choices and consequences bring the abstract theme to life through concrete human experience.',
          hint: 'Think about how a character\'s personal struggle mirrors a larger idea in the text.',
          explanation:
            'Characters who embody thematic tensions allow readers to experience abstract ideas through personal, emotional narratives, making the theme vivid and compelling.',
          standardCode: '9-10.RL.3',
        },
        {
          index: 4,
          question:
            'In the analytical paragraph pattern (claim → context → evidence → analysis → connection to theme), what role does the "analysis" step play?',
          type: 'multiple-choice',
          options: [
            'It explains how the evidence demonstrates the character\'s complexity and links to the theme.',
            'It restates the quotation in simpler words.',
            'It provides background on the author\'s biography.',
            'It summarizes the entire plot of the text.',
          ],
          correctAnswer:
            'It explains how the evidence demonstrates the character\'s complexity and links to the theme.',
          hint: 'Analysis is where you show your thinking, not just repeat facts.',
          explanation:
            'The analysis step is where the writer interprets the evidence, showing exactly how it supports the claim about character complexity and connects to the text\'s larger meaning.',
          standardCode: '9-10.RL.1',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Read the following passage: "Marcus stood at the podium, his speech about unity memorized and ready. Yet in his pocket, he clutched the resignation letter he planned to deliver that evening." What does this moment reveal about Marcus as a complex character?',
            type: 'short-answer',
            correctAnswer:
              'The contrast between Marcus\'s public speech about unity and his private resignation letter reveals conflicting motivations — a desire to inspire others while simultaneously withdrawing from the community. This contradiction makes him a complex character with unresolved internal tensions.',
            standardCode: '9-10.RL.3',
          },
          {
            question:
              'Which element is essential to an analytical paragraph about character complexity?',
            type: 'multiple-choice',
            options: [
              'A direct quotation connected to a specific claim about the character\'s contradictions.',
              'A summary of every event in the text.',
              'A comparison with a character from a different novel.',
              'A list of the character\'s physical traits.',
            ],
            correctAnswer:
              'A direct quotation connected to a specific claim about the character\'s contradictions.',
            standardCode: '9-10.RL.1',
          },
          {
            question:
              'How does tracking a character\'s pivotal decisions throughout a text help a reader understand the work\'s theme?',
            type: 'short-answer',
            correctAnswer:
              'Pivotal decisions reveal what a character values most when under pressure. By tracing these decisions and their consequences, a reader can identify the thematic questions the author is exploring — such as whether loyalty should outweigh personal ambition — because the character\'s choices dramatize those questions.',
            standardCode: '9-10.RL.3',
          },
        ],
      },
    },
  },
  {
    slug: 'grade10-ela-multiple-themes',
    title: 'Analyzing Multiple Themes in a Text',
    description:
      'Identify and analyze how two or more themes interact within a single literary work, examining how the author uses structure, symbolism, and character development to weave themes together.',
    subject: 'ela',
    grade: 10,
    gradeBand: '9-12',
    topicCluster: 'Reading Literature',
    standardCodes: ['9-10.RL.2', '9-10.RL.5'],
    content: {
      intro: {
        title: 'Analyzing Multiple Themes in a Text',
        text: 'Most significant literary works explore more than one theme. A novel about freedom may simultaneously examine responsibility; a play about love may also probe jealousy and power. In this module you will learn to identify multiple themes, trace how they develop and interact, and explain how an author\'s structural choices support that interplay.',
        culturalHook:
          'Think about a story from your family or community that carries more than one lesson. How do those lessons connect to — or even contradict — each other?',
      },
      segments: [
        {
          index: 0,
          title: 'Identifying Multiple Themes',
          text: 'Begin by listing possible themes as complete statements (e.g., "Power corrupts those who lack accountability"). Then look for evidence that the text develops more than one such statement. Recurring motifs, subplots, and secondary characters often signal additional themes that run alongside the primary one.',
          keyVocabulary: ['theme statement', 'motif', 'subplot', 'secondary character'],
        },
        {
          index: 1,
          title: 'How Themes Interact',
          text: 'Themes can reinforce, complicate, or directly oppose each other. A theme of hope may be complicated by a parallel theme of disillusionment. Identify the relationship: Do the themes create tension? Does one qualify or deepen the other? Authors often use turning points in the plot to shift the balance between competing themes.',
          keyVocabulary: ['thematic interaction', 'tension', 'reinforce', 'complicate'],
          example:
            'In a novel where the themes of ambition and family loyalty both operate, a scene in which the protagonist chooses a career opportunity over a family obligation shifts the balance toward ambition while revealing the cost to loyalty.',
        },
        {
          index: 2,
          title: 'Structural Choices and Theme',
          text: 'An author\'s structural decisions — chapter breaks, parallel storylines, shifts in point of view, flashbacks — shape how themes emerge. A dual-narrative structure might develop two themes separately before merging them in the climax. Analyzing structure helps you explain not just what the themes are but how the author builds them.',
          keyVocabulary: ['structure', 'dual narrative', 'point of view', 'flashback', 'climax'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'What is the best first step when identifying multiple themes in a text?',
          type: 'multiple-choice',
          options: [
            'State each potential theme as a complete sentence and look for textual evidence supporting more than one.',
            'Choose the theme you like best and ignore the rest.',
            'Count the number of characters in the text.',
            'Read only the first and last chapters.',
          ],
          correctAnswer:
            'State each potential theme as a complete sentence and look for textual evidence supporting more than one.',
          hint: 'Themes are ideas, not single words — express them as full statements.',
          explanation:
            'Articulating themes as complete sentences forces you to be specific and makes it easier to find evidence for multiple, distinct ideas within the text.',
          standardCode: '9-10.RL.2',
        },
        {
          index: 1,
          question:
            'How can subplots help an author develop a secondary theme?',
          type: 'short-answer',
          correctAnswer:
            'Subplots give the author space to explore a secondary theme through different characters and events. The subplot\'s resolution may reinforce, contrast with, or complicate the primary theme, adding depth to the work as a whole.',
          hint: 'Think about what the secondary storyline adds that the main plot does not.',
          explanation:
            'Subplots allow parallel exploration of ideas. When a subplot echoes or contrasts the main plot, it develops additional thematic layers that enrich the reader\'s understanding.',
          standardCode: '9-10.RL.2',
        },
        {
          index: 2,
          question:
            'Two themes in a novel are "freedom requires sacrifice" and "community demands conformity." What is the relationship between these themes?',
          type: 'multiple-choice',
          options: [
            'They create tension because pursuing freedom may conflict with the community\'s demand for conformity.',
            'They are identical themes stated differently.',
            'They have no connection to each other.',
            'The second theme is a subplot, not a theme.',
          ],
          correctAnswer:
            'They create tension because pursuing freedom may conflict with the community\'s demand for conformity.',
          hint: 'Consider whether the two ideas pull in the same or opposite directions.',
          explanation:
            'These themes oppose each other, creating productive tension. The text likely dramatizes characters caught between personal freedom and communal expectations.',
          standardCode: '9-10.RL.2',
        },
        {
          index: 3,
          question:
            'Explain how a shift in point of view within a novel can reveal a new theme.',
          type: 'short-answer',
          correctAnswer:
            'When the narrative shifts to a different character\'s perspective, the reader gains access to different values, concerns, and conflicts. This new perspective can introduce a theme that was invisible from the original viewpoint, broadening the work\'s thematic scope.',
          hint: 'Think about what you learn when you see events through a different character\'s eyes.',
          explanation:
            'Point-of-view shifts expose the reader to new internal conflicts and priorities, which can surface entirely new thematic concerns that deepen the text.',
          standardCode: '9-10.RL.5',
        },
        {
          index: 4,
          question:
            'Which structural technique most directly supports the development of two parallel themes?',
          type: 'multiple-choice',
          options: [
            'A dual-narrative structure that alternates between two storylines.',
            'A single first-person narrator who never changes perspective.',
            'An epilogue that summarizes the plot.',
            'Short chapter titles.',
          ],
          correctAnswer:
            'A dual-narrative structure that alternates between two storylines.',
          hint: 'Parallel themes often emerge from parallel structures.',
          explanation:
            'Alternating storylines allow an author to develop separate thematic threads that can intersect and influence each other, making the dual-narrative structure ideal for exploring multiple themes.',
          standardCode: '9-10.RL.5',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'A novel alternates between a mother\'s story set in 1960 and her daughter\'s story set in the present. The mother\'s chapters explore the theme of resilience under oppression, while the daughter\'s chapters explore the theme of inherited trauma. How does the dual-narrative structure support both themes?',
            type: 'short-answer',
            correctAnswer:
              'The alternating structure lets the reader see how the mother\'s resilience came at a personal cost that was passed down as trauma to the daughter. By juxtaposing the two timelines, the author shows that the themes are connected: resilience under oppression and inherited trauma are cause and effect, and the structure makes that relationship visible.',
            standardCode: '9-10.RL.5',
          },
          {
            question:
              'Which of the following best describes how two themes can "complicate" each other?',
            type: 'multiple-choice',
            options: [
              'One theme qualifies or limits the other, preventing a simple interpretation.',
              'Both themes say exactly the same thing.',
              'One theme cancels the other out entirely.',
              'The themes appear in separate texts by different authors.',
            ],
            correctAnswer:
              'One theme qualifies or limits the other, preventing a simple interpretation.',
            standardCode: '9-10.RL.2',
          },
          {
            question:
              'Identify two themes that could interact in a play about a community rebuilding after a natural disaster, and explain one way they might reinforce each other.',
            type: 'short-answer',
            correctAnswer:
              'Two possible themes: "collective action creates strength" and "crisis reveals true character." They reinforce each other because the characters who show courage during the crisis become the leaders of the collective effort, demonstrating that revealed character fuels the community\'s collective strength.',
            standardCode: '9-10.RL.2',
          },
        ],
      },
    },
  },
  {
    slug: 'grade10-ela-comparing-genres',
    title: 'Comparing Genres: How Form Shapes Meaning',
    description:
      'Compare how the same subject or theme is treated across different literary genres — such as novel, drama, and poetry — analyzing how each genre\'s conventions shape meaning, tone, and reader experience.',
    subject: 'ela',
    grade: 10,
    gradeBand: '9-12',
    topicCluster: 'Reading Literature',
    standardCodes: ['9-10.RL.5', '9-10.RL.9'],
    content: {
      intro: {
        title: 'Comparing Genres: How Form Shapes Meaning',
        text: 'A war story told as a novel reads very differently from one performed as a play or distilled into a poem. Each genre brings its own set of tools — narration, stage presence, line breaks — that shape how meaning reaches the audience. In this module you will compare texts across genres and analyze how form influences interpretation.',
        culturalHook:
          'Consider a local event that was covered in a newspaper article and also retold as a spoken-word piece or song. How did the two versions make you feel differently about the same event?',
      },
      segments: [
        {
          index: 0,
          title: 'Genre Conventions Review',
          text: 'Novels and short stories use narrative voice, pacing, and description. Drama relies on dialogue, stage directions, and visual spectacle. Poetry condenses meaning through imagery, meter, sound devices, and white space. Before comparing, catalog the specific conventions each genre employs so your analysis is grounded in concrete details.',
          keyVocabulary: ['narrative voice', 'stage directions', 'meter', 'imagery', 'white space'],
        },
        {
          index: 1,
          title: 'Analyzing Tone Across Genres',
          text: 'Tone — the author\'s attitude toward the subject — is created differently in each genre. A novelist might use an ironic narrator; a playwright might convey irony through the gap between what a character says and what the audience knows (dramatic irony); a poet might achieve it through unexpected juxtapositions. When comparing, ask: How does each genre\'s toolkit produce the tone?',
          keyVocabulary: ['tone', 'ironic narrator', 'dramatic irony', 'juxtaposition'],
          example:
            'A novelist describes a soldier\'s fear in a long interior monologue, a playwright shows the soldier joking nervously before battle (stage direction: "hands trembling"), and a poet compresses the fear into the image "his boots / rooted / to mud and prayer." Each achieves a tone of dread through different means.',
        },
        {
          index: 2,
          title: 'Building a Cross-Genre Comparison Essay',
          text: 'Structure your comparison around a central analytical question — for example, "How does genre shape the depiction of loss?" Use a point-by-point organization: for each element (e.g., character development, tone, use of time), discuss both texts before moving to the next element. This keeps the comparison focused and prevents mere summary.',
          keyVocabulary: ['analytical question', 'point-by-point', 'cross-genre comparison'],
        },
        {
          index: 3,
          title: 'Evaluating Genre Effectiveness',
          text: 'After comparing, evaluate which genre\'s conventions are most effective for the particular subject. Effectiveness is not about personal preference alone — support your judgment with evidence. Consider audience, purpose, and emotional impact. A drama\'s immediacy may suit a subject that demands empathy, while a poem\'s compression may better capture a fleeting emotion.',
          keyVocabulary: ['effectiveness', 'audience', 'purpose', 'emotional impact'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'Why is it important to catalog genre conventions before comparing texts?',
          type: 'multiple-choice',
          options: [
            'It ensures your analysis is grounded in the specific tools each genre uses rather than vague impressions.',
            'It makes your essay longer.',
            'It is required by all teachers.',
            'It helps you memorize the texts.',
          ],
          correctAnswer:
            'It ensures your analysis is grounded in the specific tools each genre uses rather than vague impressions.',
          hint: 'Concrete details make for stronger analysis.',
          explanation:
            'Cataloging conventions gives you a framework for comparison. Without it, analysis tends to stay at the surface level of personal opinion.',
          standardCode: '9-10.RL.5',
        },
        {
          index: 1,
          question:
            'A playwright uses dramatic irony to convey a character\'s fear, while a poet uses stark imagery. How do these genre-specific techniques differ in their effect on the audience?',
          type: 'short-answer',
          correctAnswer:
            'Dramatic irony creates tension because the audience knows something the character does not, producing anxiety and empathy over time. Stark imagery in a poem hits the reader immediately with a concentrated emotional impact. The playwright builds fear gradually through situation; the poet delivers it in a compressed instant.',
          hint: 'Think about timing — how quickly does each technique deliver its emotional effect?',
          explanation:
            'Drama unfolds in real time before an audience, so irony builds gradually. Poetry compresses experience, so imagery can strike with immediate force. Both convey fear, but through different temporal experiences.',
          standardCode: '9-10.RL.9',
        },
        {
          index: 2,
          question:
            'What is the advantage of point-by-point organization in a cross-genre comparison essay?',
          type: 'multiple-choice',
          options: [
            'It keeps the comparison focused by discussing both texts for each element before moving on.',
            'It lets you write about one text completely before mentioning the other.',
            'It removes the need for textual evidence.',
            'It is shorter than other organizational methods.',
          ],
          correctAnswer:
            'It keeps the comparison focused by discussing both texts for each element before moving on.',
          hint: 'Think about what helps the reader see connections between the two texts.',
          explanation:
            'Point-by-point organization ensures that every analytical element is directly compared, preventing the essay from becoming two separate summaries.',
          standardCode: '9-10.RL.9',
        },
        {
          index: 3,
          question:
            'When evaluating which genre is most effective for a given subject, what should you base your judgment on?',
          type: 'short-answer',
          correctAnswer:
            'Base the judgment on evidence about audience, purpose, and emotional impact — not personal preference alone. Explain how the genre\'s conventions serve or limit the communication of the subject.',
          hint: 'Effectiveness requires more than "I liked it better."',
          explanation:
            'A well-supported evaluation considers how the genre\'s tools connect to the audience and purpose, providing evidence rather than relying on subjective taste.',
          standardCode: '9-10.RL.5',
        },
        {
          index: 4,
          question:
            'Which genre would most likely use white space and line breaks to convey the theme of isolation?',
          type: 'multiple-choice',
          options: [
            'Poetry',
            'Novel',
            'Drama',
            'Essay',
          ],
          correctAnswer: 'Poetry',
          hint: 'Think about which genre uses the physical arrangement of words on a page as a meaning-making tool.',
          explanation:
            'Poetry uses white space and line breaks as deliberate tools for meaning. The visual isolation of words on a page can mirror the theme of isolation in a way other genres cannot easily replicate.',
          standardCode: '9-10.RL.5',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'A short story and a one-act play both address the subject of immigration. The story uses a reflective first-person narrator; the play uses rapid-fire dialogue between characters at a border crossing. Compare how these genre conventions shape the audience\'s understanding of immigration differently.',
            type: 'short-answer',
            correctAnswer:
              'The first-person narrator in the story provides deep interior access, letting the reader understand the emotional and psychological dimensions of immigration through reflection and memory. The rapid dialogue in the play creates immediacy and tension, emphasizing the external pressures and human interactions at the border. The story fosters empathy through introspection; the play generates urgency through real-time conflict.',
            standardCode: '9-10.RL.9',
          },
          {
            question:
              'Which organizational approach is most effective for a cross-genre comparison essay?',
            type: 'multiple-choice',
            options: [
              'Point-by-point, discussing both texts for each analytical element.',
              'Summarizing each text in full before comparing.',
              'Listing quotations without analysis.',
              'Writing only about the text you preferred.',
            ],
            correctAnswer:
              'Point-by-point, discussing both texts for each analytical element.',
            standardCode: '9-10.RL.9',
          },
          {
            question:
              'Explain why a poet might choose compressed imagery rather than extended narration to convey the theme of grief, and evaluate the effectiveness of that choice.',
            type: 'short-answer',
            correctAnswer:
              'Compressed imagery can capture grief\'s sudden, overwhelming intensity in a few powerful words, mirroring how grief often strikes in sharp, unexpected moments rather than in orderly sequences. This is effective because the brevity forces the reader to slow down and feel the weight of each image, creating an emotional impact that extended narration — which might dilute the rawness — cannot easily achieve.',
            standardCode: '9-10.RL.5',
          },
        ],
      },
    },
  },

  // ─── Reading Informational (3 modules) ──────────────────────────
  {
    slug: 'grade10-ela-evaluating-arguments-across-texts',
    title: 'Evaluating Arguments Across Texts',
    description:
      'Analyze and evaluate the reasoning, evidence, and rhetorical strategies used in two or more informational texts that address the same topic, identifying strengths, weaknesses, and logical fallacies.',
    subject: 'ela',
    grade: 10,
    gradeBand: '9-12',
    topicCluster: 'Reading Informational',
    standardCodes: ['9-10.RI.8', '9-10.RI.9'],
    content: {
      intro: {
        title: 'Evaluating Arguments Across Texts',
        text: 'In a world of competing claims — from news editorials to policy briefs — the ability to evaluate arguments is essential. This module teaches you to dissect the reasoning and evidence in multiple texts on the same topic, compare their persuasive strategies, and determine which arguments are most valid and well-supported.',
        culturalHook:
          'Think about a debate in your community — perhaps about a new development project or a school policy. Different people presented different arguments. How did you decide which argument was strongest?',
      },
      segments: [
        {
          index: 0,
          title: 'Anatomy of an Argument',
          text: 'Every argument has a claim (the position), reasons (the logic supporting the claim), and evidence (the facts, data, or examples that back up the reasons). Strong arguments also include counterarguments and rebuttals. When evaluating, first identify each component. If any component is missing or weak, the argument is vulnerable.',
          keyVocabulary: ['claim', 'reasons', 'evidence', 'counterargument', 'rebuttal'],
        },
        {
          index: 1,
          title: 'Identifying Logical Fallacies',
          text: 'Logical fallacies are errors in reasoning that undermine an argument. Common fallacies include ad hominem (attacking the person instead of the idea), straw man (misrepresenting the opposing view), false dilemma (presenting only two options when more exist), and hasty generalization (drawing broad conclusions from limited evidence). Spotting fallacies helps you assess the validity of each argument.',
          keyVocabulary: ['logical fallacy', 'ad hominem', 'straw man', 'false dilemma', 'hasty generalization'],
          example:
            'An editorial argues, "Anyone who opposes the new highway is simply afraid of progress." This is an ad hominem attack because it dismisses opponents\' reasoning by labeling them rather than addressing their actual concerns about environmental impact or cost.',
        },
        {
          index: 2,
          title: 'Comparing Arguments Side by Side',
          text: 'When two texts address the same topic, create a comparison chart: list each text\'s claim, key reasons, types of evidence, acknowledged counterarguments, and any fallacies. Then evaluate: Which text uses stronger evidence? Which addresses counterarguments more honestly? Which relies on emotional appeals versus logical reasoning? This systematic approach prevents you from being swayed by style alone.',
          keyVocabulary: ['comparison chart', 'emotional appeal', 'logical reasoning', 'systematic evaluation'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'What are the three essential components of an argument?',
          type: 'multiple-choice',
          options: [
            'Claim, reasons, and evidence.',
            'Title, introduction, and conclusion.',
            'Characters, setting, and plot.',
            'Thesis, antithesis, and synthesis.',
          ],
          correctAnswer: 'Claim, reasons, and evidence.',
          hint: 'Think about what makes an argument persuasive at its most basic level.',
          explanation:
            'An argument must assert a position (claim), explain why it is valid (reasons), and support those reasons with concrete backing (evidence).',
          standardCode: '9-10.RI.8',
        },
        {
          index: 1,
          question:
            'An author writes: "We must choose between funding the arts or funding science — there is no middle ground." What logical fallacy is this?',
          type: 'multiple-choice',
          options: [
            'False dilemma',
            'Ad hominem',
            'Straw man',
            'Hasty generalization',
          ],
          correctAnswer: 'False dilemma',
          hint: 'The author presents only two options. Are there really no other possibilities?',
          explanation:
            'A false dilemma reduces a complex issue to only two choices when, in reality, multiple options or compromises may exist.',
          standardCode: '9-10.RI.8',
        },
        {
          index: 2,
          question:
            'Why is it important to check whether an argument addresses counterarguments?',
          type: 'short-answer',
          correctAnswer:
            'An argument that addresses counterarguments shows that the author has considered opposing viewpoints and can still defend the claim. Without this, the argument may appear one-sided, and the reader cannot trust that all relevant perspectives have been weighed.',
          hint: 'Think about what it means when a writer ignores the other side.',
          explanation:
            'Engaging with counterarguments demonstrates intellectual honesty and strengthens credibility. Ignoring them suggests the author is either unaware of or unwilling to confront challenges to the claim.',
          standardCode: '9-10.RI.8',
        },
        {
          index: 3,
          question:
            'When comparing two editorials on the same topic, what is the advantage of creating a comparison chart?',
          type: 'multiple-choice',
          options: [
            'It organizes each argument\'s components for systematic, objective evaluation.',
            'It makes the editorials shorter.',
            'It eliminates the need to read the texts carefully.',
            'It guarantees you will agree with one side.',
          ],
          correctAnswer:
            'It organizes each argument\'s components for systematic, objective evaluation.',
          hint: 'A chart helps you see patterns you might miss in casual reading.',
          explanation:
            'A comparison chart lays out claims, evidence, and reasoning side by side, making strengths and weaknesses visible and reducing the influence of rhetorical style on your judgment.',
          standardCode: '9-10.RI.9',
        },
        {
          index: 4,
          question:
            'Text A uses statistical data from a peer-reviewed study, while Text B relies primarily on personal anecdotes. Which text likely provides stronger evidence, and why?',
          type: 'short-answer',
          correctAnswer:
            'Text A likely provides stronger evidence because peer-reviewed statistical data is verifiable, replicable, and drawn from systematic research. Personal anecdotes, while compelling, represent individual experiences that may not be representative of broader trends.',
          hint: 'Consider the reliability and generalizability of each type of evidence.',
          explanation:
            'Peer-reviewed data undergoes expert scrutiny and is based on methodology designed to minimize bias, making it generally more reliable than anecdotal evidence for supporting broad claims.',
          standardCode: '9-10.RI.8',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Editorial A argues that renewable energy is too expensive, citing a single outdated cost analysis. Editorial B argues that renewable energy is increasingly affordable, citing multiple recent studies and addressing the cost concern directly. Evaluate which argument is stronger and explain your reasoning.',
            type: 'short-answer',
            correctAnswer:
              'Editorial B is stronger because it uses multiple recent sources, which are more current and reliable than a single outdated analysis. It also directly addresses the opposing view (cost concerns), demonstrating awareness of counterarguments. Editorial A\'s reliance on one outdated source is a weakness, and its failure to acknowledge the declining cost trend undermines its credibility.',
            standardCode: '9-10.RI.9',
          },
          {
            question:
              'Which of the following is an example of a straw man fallacy?',
            type: 'multiple-choice',
            options: [
              'Misrepresenting an opponent\'s position to make it easier to attack.',
              'Using statistics from a reliable source.',
              'Acknowledging a counterargument before rebutting it.',
              'Providing a personal anecdote as evidence.',
            ],
            correctAnswer:
              'Misrepresenting an opponent\'s position to make it easier to attack.',
            standardCode: '9-10.RI.8',
          },
          {
            question:
              'Explain why evaluating arguments across texts — rather than reading only one perspective — leads to better-informed conclusions.',
            type: 'short-answer',
            correctAnswer:
              'Reading multiple perspectives exposes you to different evidence, reasoning strategies, and potential weaknesses. By comparing arguments, you can identify which claims withstand scrutiny, spot logical fallacies, and weigh the quality of evidence from multiple angles — resulting in a more balanced, informed judgment than any single text could provide.',
            standardCode: '9-10.RI.9',
          },
        ],
      },
    },
  },
  {
    slug: 'grade10-ela-authors-purpose-and-bias',
    title: 'Author\'s Purpose and Bias',
    description:
      'Analyze how an author\'s purpose, perspective, and potential biases shape the content, structure, and rhetoric of informational texts, and evaluate how these factors affect the reliability of information.',
    subject: 'ela',
    grade: 10,
    gradeBand: '9-12',
    topicCluster: 'Reading Informational',
    standardCodes: ['9-10.RI.6', '9-10.RI.8'],
    content: {
      intro: {
        title: 'Author\'s Purpose and Bias',
        text: 'Every informational text is shaped by the author\'s purpose — to inform, to persuade, to call to action — and by the author\'s perspective, which inevitably includes biases. Recognizing purpose and bias does not mean rejecting a text; it means reading critically so you can weigh the information accurately.',
        culturalHook:
          'Think about two people in your community describing the same event. Each one highlights different details because of their own experiences and viewpoints. The same thing happens in writing.',
      },
      segments: [
        {
          index: 0,
          title: 'Identifying Author\'s Purpose',
          text: 'Author\'s purpose falls on a spectrum from informing (presenting facts neutrally) to persuading (advocating a position) to entertaining or provoking. Look at word choice, text structure, and the inclusion or exclusion of counterarguments. A text that presents only one side and uses charged language is likely persuasive; one that includes multiple perspectives and neutral language aims to inform.',
          keyVocabulary: ['author\'s purpose', 'inform', 'persuade', 'word choice', 'text structure'],
        },
        {
          index: 1,
          title: 'Detecting Bias',
          text: 'Bias is a leaning toward or against a particular position, group, or idea. It can appear through selection bias (choosing which facts to include or omit), language bias (using loaded words), and source bias (relying on sources that share the author\'s viewpoint). To detect bias, ask: What information is missing? Whose voices are absent? What language choices reveal a slant?',
          keyVocabulary: ['bias', 'selection bias', 'language bias', 'source bias', 'loaded words'],
          example:
            'An article about a factory closure that only interviews the company\'s CEO and never quotes affected workers shows selection bias — the omission of workers\' perspectives tilts the narrative toward the company\'s viewpoint.',
        },
        {
          index: 2,
          title: 'Evaluating Reliability in Light of Purpose and Bias',
          text: 'A text with clear bias is not automatically unreliable, but you must account for the bias when weighing its claims. Cross-reference key claims with other sources. Check whether the evidence is verifiable. Consider whether the author\'s purpose might lead to exaggeration or omission. Strong critical readers can extract valuable information even from biased texts by reading with awareness.',
          keyVocabulary: ['reliability', 'cross-reference', 'verifiable evidence', 'critical reading'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'Which clue most strongly suggests that an informational text has a persuasive purpose?',
          type: 'multiple-choice',
          options: [
            'The text uses charged language and presents only one side of the issue.',
            'The text includes a table of contents.',
            'The text is published in a well-known magazine.',
            'The text has footnotes.',
          ],
          correctAnswer:
            'The text uses charged language and presents only one side of the issue.',
          hint: 'Persuasive texts try to move the reader toward a particular position.',
          explanation:
            'Charged language and one-sided presentation are strong indicators that the author\'s primary goal is to persuade rather than to inform objectively.',
          standardCode: '9-10.RI.6',
        },
        {
          index: 1,
          question:
            'What is selection bias in the context of informational writing?',
          type: 'short-answer',
          correctAnswer:
            'Selection bias occurs when an author chooses to include facts, examples, or sources that support a particular viewpoint while omitting information that contradicts or complicates that viewpoint.',
          hint: 'Think about what happens when a writer picks and chooses which facts to share.',
          explanation:
            'By controlling which information appears in the text, an author can create a skewed impression even without stating anything false. Recognizing what is missing is key to detecting selection bias.',
          standardCode: '9-10.RI.6',
        },
        {
          index: 2,
          question:
            'An article about a school policy uses the phrase "reckless decision" instead of "recent change." What type of bias does this word choice illustrate?',
          type: 'multiple-choice',
          options: [
            'Language bias',
            'Source bias',
            'Confirmation bias',
            'Selection bias',
          ],
          correctAnswer: 'Language bias',
          hint: 'Focus on how the word choice itself carries a judgment.',
          explanation:
            'Language bias uses loaded or emotionally charged words to influence the reader\'s perception. "Reckless decision" carries a negative judgment that "recent change" does not.',
          standardCode: '9-10.RI.6',
        },
        {
          index: 3,
          question:
            'Why can a biased text still be useful to a critical reader?',
          type: 'short-answer',
          correctAnswer:
            'A biased text can still contain accurate data, expert insights, or valid arguments. A critical reader who recognizes the bias can extract useful information while accounting for what may be exaggerated, omitted, or slanted — and can cross-reference claims with other sources for verification.',
          hint: 'Bias does not automatically mean all information is false.',
          explanation:
            'Dismissing every biased source would eliminate most of the information available. Critical reading means adjusting for bias, not avoiding all imperfect texts.',
          standardCode: '9-10.RI.8',
        },
        {
          index: 4,
          question:
            'What is the most effective way to check the reliability of a claim made in a potentially biased text?',
          type: 'multiple-choice',
          options: [
            'Cross-reference the claim with independent, credible sources.',
            'Accept the claim if the author sounds confident.',
            'Reject the claim automatically because the text is biased.',
            'Check whether the text has a professional layout.',
          ],
          correctAnswer:
            'Cross-reference the claim with independent, credible sources.',
          hint: 'Verification requires looking beyond the single text.',
          explanation:
            'Cross-referencing with independent sources is the gold standard for checking claims. Confidence, layout, and blanket rejection are not reliable evaluation methods.',
          standardCode: '9-10.RI.8',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Read two descriptions of the same event: one from an environmental organization and one from an industry trade group. Explain how the purpose of each source likely shapes its presentation of the facts.',
            type: 'short-answer',
            correctAnswer:
              'The environmental organization likely aims to persuade readers that the event has negative ecological consequences, so it may emphasize environmental damage, use urgent language, and cite ecological studies. The industry trade group likely aims to minimize concerns and protect business interests, so it may emphasize economic benefits, use reassuring language, and downplay environmental impact. Both select and present facts in ways that align with their organizational purpose.',
            standardCode: '9-10.RI.6',
          },
          {
            question:
              'Which strategy is most effective for detecting selection bias in a text?',
            type: 'multiple-choice',
            options: [
              'Ask what information or perspectives are missing from the text.',
              'Count the number of paragraphs.',
              'Check whether the author uses a formal tone.',
              'Look for spelling errors.',
            ],
            correctAnswer:
              'Ask what information or perspectives are missing from the text.',
            standardCode: '9-10.RI.6',
          },
          {
            question:
              'A news article about a proposed local development quotes three business owners who support it but no residents who oppose it. Identify the type of bias, explain its effect on the reader, and suggest how the article could be more balanced.',
            type: 'short-answer',
            correctAnswer:
              'This is selection bias: the article includes only supporters and omits opponents. The effect is that the reader may conclude the development is universally welcomed. To be more balanced, the article should include quotes from residents who oppose the project, present data on potential drawbacks, and acknowledge the existence of community disagreement.',
            standardCode: '9-10.RI.8',
          },
        ],
      },
    },
  },
  {
    slug: 'grade10-ela-integrating-quantitative-data',
    title: 'Integrating Quantitative Data with Text',
    description:
      'Analyze how quantitative information — charts, graphs, tables, and statistics — interacts with written text in informational sources, and evaluate whether the data supports, contradicts, or complicates the author\'s claims.',
    subject: 'ela',
    grade: 10,
    gradeBand: '9-12',
    topicCluster: 'Reading Informational',
    standardCodes: ['9-10.RI.7', '9-10.RI.8'],
    content: {
      intro: {
        title: 'Integrating Quantitative Data with Text',
        text: 'Informational texts increasingly combine written arguments with charts, graphs, tables, and statistics. A skilled reader does not skip the data — they analyze how quantitative information and text work together. Sometimes data strengthens a claim; sometimes it quietly contradicts it. In this module you will learn to read data critically and integrate it with textual analysis.',
        culturalHook:
          'Think about a time someone in your community used numbers to make a point — maybe about job creation, school funding, or health outcomes. Did the numbers tell the whole story, or was something left out?',
      },
      segments: [
        {
          index: 0,
          title: 'Reading Quantitative Data',
          text: 'Before integrating data with text, you must read it accurately. For charts and graphs, identify the axes, units, scale, and time period. For tables, note the column headers and what is being measured. For statistics, check the source, sample size, and date. Misreading data — such as confusing correlation with causation — leads to flawed analysis.',
          keyVocabulary: ['axes', 'scale', 'sample size', 'correlation', 'causation'],
        },
        {
          index: 1,
          title: 'Data-Text Alignment',
          text: 'After reading the data, compare it with the author\'s written claims. Ask: Does the data support the claim? Does it only partially support it? Does it contradict the claim? Authors sometimes present data that, upon careful inspection, does not actually prove what they say it proves. Look for gaps between what the data shows and what the text asserts.',
          keyVocabulary: ['data-text alignment', 'support', 'contradict', 'gap', 'assertion'],
          example:
            'An article claims, "Graduation rates have improved dramatically." The accompanying graph shows an increase from 78% to 80% over five years. The data shows improvement, but "dramatically" overstates a modest two-percentage-point gain.',
        },
        {
          index: 2,
          title: 'Evaluating Data Quality and Presentation',
          text: 'Not all data presentations are honest. Watch for manipulated scales (a y-axis that starts at 90% instead of 0%, making small changes look enormous), cherry-picked time ranges, or unlabeled sources. Evaluate whether the data is current, relevant, and from a credible source. Strong critical readers question the data as rigorously as they question the prose.',
          keyVocabulary: ['manipulated scale', 'cherry-picked data', 'credible source', 'data literacy'],
        },
        {
          index: 3,
          title: 'Synthesizing Data and Text in Your Own Writing',
          text: 'When you incorporate quantitative data into your own analytical writing, introduce the data, explain what it shows, and connect it to your argument. Never drop in a statistic without context. Use language like "According to [source], the data indicate that..." followed by your analysis of what the data means in relation to your claim.',
          keyVocabulary: ['synthesize', 'introduce data', 'contextualize', 'analytical writing'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'What should you identify first when reading a graph?',
          type: 'multiple-choice',
          options: [
            'The axes, units, scale, and time period.',
            'The color scheme of the graph.',
            'The author\'s name.',
            'The graph\'s position on the page.',
          ],
          correctAnswer: 'The axes, units, scale, and time period.',
          hint: 'You need to understand what is being measured before you can interpret the data.',
          explanation:
            'The axes, units, scale, and time period establish the framework for interpreting any graph. Without understanding these, you cannot accurately read the data.',
          standardCode: '9-10.RI.7',
        },
        {
          index: 1,
          question:
            'An article claims test scores "soared" but the accompanying data shows an increase of 2 points out of 100. What is the problem?',
          type: 'short-answer',
          correctAnswer:
            'The language "soared" dramatically overstates a very modest improvement. The data shows only a 2-point increase, which does not align with the claim\'s intensity. This is a gap between the data and the text\'s assertion.',
          hint: 'Compare the strength of the language with the size of the change.',
          explanation:
            'When the language in the text exaggerates what the data actually shows, the author may be misleading readers — intentionally or not. Critical readers catch these gaps.',
          standardCode: '9-10.RI.7',
        },
        {
          index: 2,
          question:
            'A graph\'s y-axis starts at 95% instead of 0%. What effect does this have on the reader\'s perception?',
          type: 'multiple-choice',
          options: [
            'It makes small differences appear much larger than they actually are.',
            'It makes the graph easier to read.',
            'It has no effect on perception.',
            'It makes the differences appear smaller.',
          ],
          correctAnswer:
            'It makes small differences appear much larger than they actually are.',
          hint: 'Think about how the visual height of bars or lines changes when you zoom in on a narrow range.',
          explanation:
            'A truncated y-axis exaggerates visual differences. A change from 96% to 98% looks enormous when the axis starts at 95%, but tiny when it starts at 0%. This is a common data manipulation technique.',
          standardCode: '9-10.RI.7',
        },
        {
          index: 3,
          question:
            'Why should you never "drop in" a statistic without context in your own writing?',
          type: 'short-answer',
          correctAnswer:
            'A statistic without context — such as its source, what it measures, and how it connects to your argument — is meaningless to the reader. The reader cannot evaluate its relevance or reliability, and it does not advance your analysis. Contextualized data strengthens your argument; uncontextualized data weakens it.',
          hint: 'Think about what a reader needs to know in order to trust and understand a number.',
          explanation:
            'Data gains meaning through context. Introducing the source, explaining the measure, and connecting it to your claim transforms a raw number into persuasive evidence.',
          standardCode: '9-10.RI.8',
        },
        {
          index: 4,
          question:
            'Which of the following is an example of cherry-picked data?',
          type: 'multiple-choice',
          options: [
            'Showing only the three years when sales increased while omitting the five years when they declined.',
            'Presenting a complete ten-year trend line with all data points.',
            'Using data from a peer-reviewed journal.',
            'Including a footnote with the data source.',
          ],
          correctAnswer:
            'Showing only the three years when sales increased while omitting the five years when they declined.',
          hint: 'Cherry-picking means selecting only the data that supports your point.',
          explanation:
            'Cherry-picked data presents a misleading picture by including only favorable data points and hiding unfavorable ones. Complete data sets are more honest and reliable.',
          standardCode: '9-10.RI.8',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'An article about water quality includes a table showing contaminant levels in three local rivers over ten years. The text claims all three rivers are now safe. The table shows that two rivers improved but one actually worsened. Evaluate the alignment between the data and the claim.',
            type: 'short-answer',
            correctAnswer:
              'The claim that all three rivers are now safe is not fully supported by the data. While two rivers improved, one worsened, meaning the blanket statement is inaccurate. The author may be generalizing from partial data or ignoring an inconvenient data point. A critical reader should note this gap and question whether the conclusion is reliable.',
            standardCode: '9-10.RI.7',
          },
          {
            question:
              'What is the most important reason to check the source and date of a statistic?',
            type: 'multiple-choice',
            options: [
              'To determine whether the data is credible, current, and relevant to the claim being made.',
              'To find out the author\'s educational background.',
              'To see if the statistic uses large numbers.',
              'To ensure the statistic was published in a book rather than online.',
            ],
            correctAnswer:
              'To determine whether the data is credible, current, and relevant to the claim being made.',
            standardCode: '9-10.RI.8',
          },
          {
            question:
              'Write a sentence that properly introduces and contextualizes the following data point: "According to the 2024 State Education Report, the district\'s reading proficiency rate rose from 62% to 71% over three years." Then explain how you would connect this data to an argument about the effectiveness of a new literacy program.',
            type: 'short-answer',
            correctAnswer:
              'Sample introduction: "According to the 2024 State Education Report, the district\'s reading proficiency rate rose from 62% to 71% over three years, suggesting meaningful progress." To connect this to an argument about a literacy program, you would note when the program was implemented relative to the data\'s time frame, establish that other variables (such as funding changes or demographic shifts) were controlled for, and explain how the nine-percentage-point gain supports the claim that the program was effective.',
            standardCode: '9-10.RI.7',
          },
        ],
      },
    },
  },

  // ─── Writing (3 modules) ────────────────────────────────────────
  {
    slug: 'grade10-ela-argument-essay-structure',
    title: 'Argument Essay Structure',
    description:
      'Learn to construct a well-organized argument essay with a precise claim, logical body structure, effective use of evidence, counterargument integration, and a compelling conclusion.',
    subject: 'ela',
    grade: 10,
    gradeBand: '9-12',
    topicCluster: 'Writing',
    standardCodes: ['9-10.W.1', '9-10.W.1a', '9-10.W.1b'],
    content: {
      intro: {
        title: 'Argument Essay Structure',
        text: 'An argument essay does more than state an opinion — it builds a logical case that can withstand scrutiny. In this module you will learn the structural components that make an argument essay effective: a precise claim, organized reasons supported by evidence, a genuine engagement with counterarguments, and a conclusion that reinforces the argument\'s significance.',
        culturalHook:
          'Think about the last time you tried to convince someone of something important — a family member, a teacher, a friend. What made your case strong? What would have made it stronger?',
      },
      segments: [
        {
          index: 0,
          title: 'Crafting a Precise Claim',
          text: 'A claim is the essay\'s central argument, stated clearly and specifically. Avoid vague claims like "Education is important." Instead, write something arguable and focused: "Rural school districts should receive proportionally higher state funding to offset the resource gaps caused by lower local tax bases." A precise claim gives your essay direction and gives the reader something concrete to evaluate.',
          keyVocabulary: ['claim', 'arguable', 'precise', 'thesis statement'],
        },
        {
          index: 1,
          title: 'Organizing Reasons and Evidence',
          text: 'Each body paragraph should develop one reason that supports the claim. Open with a topic sentence that states the reason, follow with evidence (data, expert testimony, examples), and close with analysis that explains how the evidence supports the reason and, by extension, the claim. Arrange paragraphs in a logical order — often from strongest reason to second-strongest, with a compelling reason last for emphasis.',
          keyVocabulary: ['topic sentence', 'evidence', 'analysis', 'logical order'],
          example:
            'Reason: Rural districts face higher per-pupil transportation costs. Evidence: "According to the National Center for Education Statistics, rural districts spend 14% more per pupil on transportation than suburban districts." Analysis: This cost disparity diverts funds from instruction, demonstrating that equal funding formulas produce unequal outcomes.',
        },
        {
          index: 2,
          title: 'Integrating Counterarguments',
          text: 'A mature argument acknowledges the strongest opposing view and responds to it. This is not a weakness — it is a sign of thorough thinking. Introduce the counterargument fairly ("Some argue that..."), then rebut it with evidence or logic ("However, this position overlooks..."). Placing the counterargument after your strongest reasons ensures the reader encounters your case before the opposition\'s.',
          keyVocabulary: ['counterargument', 'rebuttal', 'concession', 'opposing view'],
        },
        {
          index: 3,
          title: 'Writing a Compelling Conclusion',
          text: 'The conclusion should not merely restate the claim. Instead, synthesize the argument\'s key points, reaffirm the claim\'s significance, and leave the reader with a forward-looking statement — a call to action, a broader implication, or a provocative question. The conclusion is your last chance to demonstrate why your argument matters.',
          keyVocabulary: ['synthesis', 'significance', 'call to action', 'implication'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'Which of the following is the most precise and arguable claim?',
          type: 'multiple-choice',
          options: [
            'State funding formulas should weight rural district allocations to offset higher transportation and infrastructure costs.',
            'Schools need more money.',
            'Education is the key to success.',
            'Rural areas are nice places to live.',
          ],
          correctAnswer:
            'State funding formulas should weight rural district allocations to offset higher transportation and infrastructure costs.',
          hint: 'A strong claim is specific, arguable, and focused on a concrete policy or idea.',
          explanation:
            'This claim is specific (about funding formulas), arguable (someone could disagree), and focused (on rural transportation and infrastructure costs). The others are too vague or not arguable.',
          standardCode: '9-10.W.1a',
        },
        {
          index: 1,
          question:
            'What are the three components of an effective body paragraph in an argument essay?',
          type: 'short-answer',
          correctAnswer:
            'An effective body paragraph contains a topic sentence (stating the reason), evidence (data, examples, or expert testimony), and analysis (explaining how the evidence supports the claim).',
          hint: 'Think about the pattern: state the reason, prove it, explain why it matters.',
          explanation:
            'The topic sentence-evidence-analysis structure ensures each paragraph makes a clear point, backs it up, and connects it to the overarching argument.',
          standardCode: '9-10.W.1b',
        },
        {
          index: 2,
          question:
            'Why should an argument essay include a counterargument?',
          type: 'multiple-choice',
          options: [
            'It shows the writer has considered opposing views and can defend the claim against them.',
            'It confuses the reader and weakens the essay.',
            'It is only necessary if the teacher requires it.',
            'It replaces the need for evidence in body paragraphs.',
          ],
          correctAnswer:
            'It shows the writer has considered opposing views and can defend the claim against them.',
          hint: 'Think about what makes an argument trustworthy.',
          explanation:
            'Engaging with counterarguments demonstrates intellectual honesty, builds credibility, and strengthens the argument by showing it can withstand challenges.',
          standardCode: '9-10.W.1b',
        },
        {
          index: 3,
          question:
            'Explain the difference between a conclusion that merely restates the claim and one that synthesizes the argument.',
          type: 'short-answer',
          correctAnswer:
            'A conclusion that restates the claim simply repeats the thesis, adding nothing new. A conclusion that synthesizes draws together the key reasons and evidence, shows how they combine to support the claim, and extends the argument by addressing its broader significance or implications.',
          hint: 'Synthesis means combining ideas into something greater, not just repeating them.',
          explanation:
            'Synthesis demonstrates that the writer understands how the parts of the argument work together and can articulate the argument\'s larger meaning — a higher-order skill than mere repetition.',
          standardCode: '9-10.W.1',
        },
        {
          index: 4,
          question:
            'What is the recommended order for presenting reasons in an argument essay?',
          type: 'multiple-choice',
          options: [
            'Strongest reason first, second-strongest last, weaker reasons in the middle.',
            'Weakest reason first, strongest reason last.',
            'Random order.',
            'Alphabetical order based on topic sentence.',
          ],
          correctAnswer:
            'Strongest reason first, second-strongest last, weaker reasons in the middle.',
          hint: 'Think about where the reader\'s attention is highest — the beginning and end.',
          explanation:
            'Leading with the strongest reason captures the reader\'s attention, and ending with a compelling reason leaves a lasting impression. Weaker reasons are buffered in the middle.',
          standardCode: '9-10.W.1a',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Write a precise, arguable claim for an essay about whether high schools should require community service for graduation.',
            type: 'short-answer',
            correctAnswer:
              'High schools should require 40 hours of community service for graduation because structured service learning develops civic responsibility, strengthens college applications, and connects students to their communities in ways that classroom instruction alone cannot.',
            standardCode: '9-10.W.1a',
          },
          {
            question:
              'Which of the following best describes the role of analysis in a body paragraph?',
            type: 'multiple-choice',
            options: [
              'It explains how the evidence supports the reason and connects to the overall claim.',
              'It introduces a new topic unrelated to the paragraph.',
              'It provides a second piece of evidence.',
              'It summarizes the entire essay.',
            ],
            correctAnswer:
              'It explains how the evidence supports the reason and connects to the overall claim.',
            standardCode: '9-10.W.1b',
          },
          {
            question:
              'Draft a counterargument and rebuttal for the following claim: "Schools should replace traditional letter grades with narrative evaluations."',
            type: 'short-answer',
            correctAnswer:
              'Counterargument: Some argue that narrative evaluations are impractical because they are time-consuming for teachers and difficult for colleges to compare across applicants. Rebuttal: However, several schools that have adopted narrative evaluations report that the detailed feedback improves student learning, and a growing number of colleges accept portfolio-based assessments — suggesting that the system is feasible and increasingly accepted.',
            standardCode: '9-10.W.1b',
          },
        ],
      },
    },
  },
  {
    slug: 'grade10-ela-research-methodology',
    title: 'Research Methodology',
    description:
      'Develop a systematic research process: formulating focused research questions, selecting credible sources, evaluating source reliability, taking organized notes, and avoiding plagiarism through proper attribution.',
    subject: 'ela',
    grade: 10,
    gradeBand: '9-12',
    topicCluster: 'Writing',
    standardCodes: ['9-10.W.7', '9-10.W.8'],
    content: {
      intro: {
        title: 'Research Methodology',
        text: 'Strong research writing begins long before the first draft — it starts with a clear question and a disciplined process for finding, evaluating, and organizing information. In this module you will learn how to conduct research that is focused, credible, and ethically grounded.',
        culturalHook:
          'Imagine your community is considering a major change — a new school, a road expansion, or a health initiative. What questions would you need to answer before you could form an informed opinion? That process of questioning and investigating is research methodology.',
      },
      segments: [
        {
          index: 0,
          title: 'Formulating Research Questions',
          text: 'A good research question is focused, open-ended, and researchable. It should not be answerable with a simple yes or no. Transform a broad topic into a specific question: instead of "pollution," ask "How do agricultural runoff policies in the Mississippi Delta affect local water quality?" A focused question guides your source selection and prevents aimless browsing.',
          keyVocabulary: ['research question', 'focused', 'open-ended', 'researchable'],
        },
        {
          index: 1,
          title: 'Selecting and Evaluating Sources',
          text: 'Use the CRAAP test to evaluate sources: Currency (is it recent enough?), Relevance (does it address your question?), Authority (is the author qualified?), Accuracy (is the information supported by evidence?), and Purpose (why was it written — to inform, persuade, sell?). Prefer peer-reviewed articles, government data, and established news outlets over unvetted websites.',
          keyVocabulary: ['CRAAP test', 'currency', 'relevance', 'authority', 'accuracy', 'purpose', 'peer-reviewed'],
          example:
            'For a research paper on water quality, a peer-reviewed study from an environmental science journal (Authority, Accuracy) published in 2023 (Currency) that directly measures Delta water contaminants (Relevance) for informational purposes (Purpose) passes the CRAAP test.',
        },
        {
          index: 2,
          title: 'Organized Note-Taking and Avoiding Plagiarism',
          text: 'As you gather sources, record bibliographic information immediately (author, title, date, URL or publication). Summarize key ideas in your own words, paraphrase carefully, and use direct quotations sparingly — always with quotation marks and citations. Plagiarism — presenting someone else\'s words or ideas as your own — is both an ethical violation and an academic offense. Proper attribution is a non-negotiable research skill.',
          keyVocabulary: ['bibliographic information', 'paraphrase', 'direct quotation', 'citation', 'plagiarism', 'attribution'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'Which of the following is the most effective research question?',
          type: 'multiple-choice',
          options: [
            'How do agricultural runoff policies in the Mississippi Delta affect local water quality?',
            'Is pollution bad?',
            'What is water?',
            'Do people like clean water?',
          ],
          correctAnswer:
            'How do agricultural runoff policies in the Mississippi Delta affect local water quality?',
          hint: 'Look for the question that is specific, open-ended, and researchable.',
          explanation:
            'This question names a specific geographic area, a specific cause (agricultural runoff policies), and a specific effect (water quality), making it focused and researchable. The others are too vague or too simple.',
          standardCode: '9-10.W.7',
        },
        {
          index: 1,
          question:
            'What does the "A" for Authority in the CRAAP test ask you to evaluate?',
          type: 'short-answer',
          correctAnswer:
            'Authority asks whether the author or organization is qualified to write on the topic — considering credentials, expertise, institutional affiliation, and reputation in the relevant field.',
          hint: 'Think about whether the person writing the source is an expert.',
          explanation:
            'Authoritative sources are produced by individuals or organizations with relevant expertise. Checking authority helps you avoid relying on unqualified or biased voices.',
          standardCode: '9-10.W.8',
        },
        {
          index: 2,
          question:
            'Why should you record bibliographic information as soon as you find a source?',
          type: 'multiple-choice',
          options: [
            'So you can properly cite it later and avoid accidental plagiarism.',
            'To make your notes look professional.',
            'Because teachers always require a bibliography on the first day.',
            'To increase the word count of your paper.',
          ],
          correctAnswer:
            'So you can properly cite it later and avoid accidental plagiarism.',
          hint: 'Think about what happens if you lose track of where information came from.',
          explanation:
            'Recording bibliographic details immediately ensures you can attribute every idea and quotation to its source, preventing accidental plagiarism and making the citation process efficient.',
          standardCode: '9-10.W.8',
        },
        {
          index: 3,
          question:
            'What is the difference between paraphrasing and plagiarizing?',
          type: 'short-answer',
          correctAnswer:
            'Paraphrasing means restating someone else\'s idea in your own words and sentence structure while giving credit to the original source through a citation. Plagiarizing means using someone else\'s words or ideas without attribution, presenting them as your own.',
          hint: 'The key difference involves both your own language and proper credit.',
          explanation:
            'Paraphrasing requires genuine rewording (not just swapping a few synonyms) and a citation. Plagiarism is the failure to credit the original source, regardless of whether the words are changed.',
          standardCode: '9-10.W.8',
        },
        {
          index: 4,
          question:
            'A website about nutrition has no listed author, was last updated in 2011, and sells dietary supplements. Based on the CRAAP test, how would you evaluate this source?',
          type: 'multiple-choice',
          options: [
            'It fails on Currency (outdated), Authority (no author), and Purpose (commercial) — it is not a reliable research source.',
            'It is excellent because it is about nutrition.',
            'It is reliable because it is published on the internet.',
            'It passes the CRAAP test because it has information about the topic.',
          ],
          correctAnswer:
            'It fails on Currency (outdated), Authority (no author), and Purpose (commercial) — it is not a reliable research source.',
          hint: 'Apply each criterion of the CRAAP test to this specific source.',
          explanation:
            'The source is outdated (2011), lacks identifiable authority (no author), and has a commercial purpose (selling supplements), which creates a conflict of interest. It fails three of the five criteria.',
          standardCode: '9-10.W.8',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Transform the broad topic "climate change" into a focused, open-ended research question.',
            type: 'short-answer',
            correctAnswer:
              'How have rising temperatures over the past two decades affected crop yields in Appalachian farming communities? This question is focused (specific region, specific timeframe, specific impact), open-ended (requires investigation, not a yes/no answer), and researchable (data on temperature and crop yields is available).',
            standardCode: '9-10.W.7',
          },
          {
            question:
              'Which source type is generally most reliable for academic research?',
            type: 'multiple-choice',
            options: [
              'A peer-reviewed journal article by a credentialed expert.',
              'An anonymous blog post.',
              'A social media thread with many likes.',
              'A promotional brochure from a company.',
            ],
            correctAnswer:
              'A peer-reviewed journal article by a credentialed expert.',
            standardCode: '9-10.W.8',
          },
          {
            question:
              'Explain why proper attribution is both an ethical obligation and a practical research skill.',
            type: 'short-answer',
            correctAnswer:
              'Ethically, attribution respects the intellectual labor of others and maintains academic integrity — failing to credit sources is a form of dishonesty. Practically, citations allow readers to verify claims, trace ideas to their origins, and evaluate the quality of the sources supporting your argument. Without proper attribution, your research loses both credibility and verifiability.',
            standardCode: '9-10.W.8',
          },
        ],
      },
    },
  },
  {
    slug: 'grade10-ela-synthesizing-sources',
    title: 'Synthesizing Multiple Sources',
    description:
      'Learn to combine information from multiple sources into a cohesive analysis: identifying connections and contradictions across sources, organizing synthesized information, and integrating it smoothly into research writing.',
    subject: 'ela',
    grade: 10,
    gradeBand: '9-12',
    topicCluster: 'Writing',
    standardCodes: ['9-10.W.7', '9-10.W.9'],
    content: {
      intro: {
        title: 'Synthesizing Multiple Sources',
        text: 'Research writing at the high school level demands more than summarizing one source at a time. Synthesis means weaving information from multiple sources into a unified analysis — showing where sources agree, disagree, and complement each other. This module teaches you to move from source-by-source reporting to genuine synthesis.',
        culturalHook:
          'Imagine you are investigating why a local stream is polluted. You talk to a farmer, a scientist, and a city official — each gives you different information. Synthesis is how you combine those perspectives into one clear picture.',
      },
      segments: [
        {
          index: 0,
          title: 'From Summary to Synthesis',
          text: 'Summarizing means restating what one source says. Synthesizing means combining ideas from multiple sources to create a new understanding. In synthesis, you are the thinker — you identify patterns, contradictions, and gaps across your sources and explain what they mean together. The shift from summary to synthesis is the shift from reporting to analyzing.',
          keyVocabulary: ['summary', 'synthesis', 'pattern', 'contradiction', 'gap'],
        },
        {
          index: 1,
          title: 'Identifying Connections Across Sources',
          text: 'After reading your sources, create a synthesis matrix: list your sources in rows and key themes or ideas in columns. Note what each source says about each theme. Where multiple sources agree, you have corroboration. Where they disagree, you have a point of debate. Where only one source addresses a topic, you may have a gap. The matrix makes these relationships visible.',
          keyVocabulary: ['synthesis matrix', 'corroboration', 'point of debate', 'thematic analysis'],
          example:
            'Three sources discuss the causes of rural food deserts. Source A emphasizes transportation barriers, Source B focuses on economic factors, and Source C discusses both. Your synthesis might argue that transportation and economics are interconnected causes, using all three sources as support.',
        },
        {
          index: 2,
          title: 'Integrating Sources into Your Writing',
          text: 'When writing a synthesis, organize by theme — not by source. Each paragraph should develop one idea, drawing on multiple sources. Use signal phrases that show relationships: "Similarly, Johnson (2023) found..."; "In contrast, Garcia (2022) argues..."; "Building on data from both studies, it is clear that..." This approach demonstrates that you are in control of the conversation among your sources.',
          keyVocabulary: ['organize by theme', 'signal phrases', 'integration', 'conversational framing'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'What is the key difference between summarizing and synthesizing?',
          type: 'multiple-choice',
          options: [
            'Summarizing restates what one source says; synthesizing combines ideas from multiple sources to create new understanding.',
            'Summarizing is longer than synthesizing.',
            'Synthesizing means copying from sources without citation.',
            'There is no difference.',
          ],
          correctAnswer:
            'Summarizing restates what one source says; synthesizing combines ideas from multiple sources to create new understanding.',
          hint: 'Think about whether you are reporting or analyzing.',
          explanation:
            'Summary is a lower-order skill (restating); synthesis is a higher-order skill (combining, comparing, and generating insight). Research writing requires synthesis.',
          standardCode: '9-10.W.9',
        },
        {
          index: 1,
          question:
            'How does a synthesis matrix help a researcher?',
          type: 'short-answer',
          correctAnswer:
            'A synthesis matrix organizes information from multiple sources by theme, making it easy to see where sources agree (corroboration), disagree (debate), or leave gaps. This visual tool helps the researcher identify patterns and plan a thematic organization for the paper.',
          hint: 'Think about what the matrix reveals that reading sources one at a time does not.',
          explanation:
            'The matrix provides a bird\'s-eye view of the research landscape, preventing source-by-source reporting and enabling genuine thematic synthesis.',
          standardCode: '9-10.W.7',
        },
        {
          index: 2,
          question:
            'In a synthesis essay, how should paragraphs be organized?',
          type: 'multiple-choice',
          options: [
            'By theme, with each paragraph drawing on multiple sources.',
            'By source, with one paragraph per source.',
            'In alphabetical order by author last name.',
            'By the date each source was published.',
          ],
          correctAnswer:
            'By theme, with each paragraph drawing on multiple sources.',
          hint: 'Synthesis is about ideas, not individual sources.',
          explanation:
            'Organizing by theme ensures that each paragraph develops an analytical point supported by multiple sources, which is the hallmark of synthesis. Source-by-source organization produces summaries, not synthesis.',
          standardCode: '9-10.W.9',
        },
        {
          index: 3,
          question:
            'Write a sentence that synthesizes the following two findings: Source A says rural students travel an average of 45 minutes to school; Source B says long commute times correlate with lower academic engagement.',
          type: 'short-answer',
          correctAnswer:
            'The 45-minute average commute reported by Martinez (Source A) may contribute to the lower academic engagement that Thompson (Source B) documents, suggesting that transportation barriers are not merely inconveniences but factors that directly affect educational outcomes.',
          hint: 'Show how the two findings connect to create a new insight.',
          explanation:
            'This sentence does not simply list the two findings — it connects them causally, demonstrating synthesis by generating an insight that neither source states on its own.',
          standardCode: '9-10.W.9',
        },
        {
          index: 4,
          question:
            'Which signal phrase best introduces a source that contradicts another?',
          type: 'multiple-choice',
          options: [
            '"In contrast, Garcia (2022) argues..."',
            '"Similarly, Garcia (2022) found..."',
            '"Garcia (2022) also agrees that..."',
            '"As everyone knows..."',
          ],
          correctAnswer: '"In contrast, Garcia (2022) argues..."',
          hint: 'The signal phrase should tell the reader the relationship between the sources.',
          explanation:
            '"In contrast" explicitly signals disagreement, helping the reader understand the relationship between the sources. Accurate signal phrases are essential for clear synthesis.',
          standardCode: '9-10.W.9',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Three sources discuss the impact of after-school programs: Source A reports improved test scores, Source B finds no significant academic change but notes improved social skills, and Source C reports both academic and social benefits but only for students who attended consistently. Synthesize these findings in a short paragraph.',
            type: 'short-answer',
            correctAnswer:
              'Research on after-school programs presents a nuanced picture. While Source A and Source C both document academic gains, Source B finds no significant academic improvement — though it does identify social skill development. Source C may explain this discrepancy: academic benefits appear only among consistent attendees, suggesting that program effectiveness depends on attendance patterns. Together, these sources indicate that after-school programs can yield both academic and social benefits, but consistent participation is likely a critical factor.',
            standardCode: '9-10.W.9',
          },
          {
            question:
              'What is the primary advantage of organizing a research paper by theme rather than by source?',
            type: 'multiple-choice',
            options: [
              'It allows each paragraph to develop an analytical point supported by multiple perspectives.',
              'It makes the paper shorter.',
              'It eliminates the need for citations.',
              'It lets the writer avoid reading all the sources.',
            ],
            correctAnswer:
              'It allows each paragraph to develop an analytical point supported by multiple perspectives.',
            standardCode: '9-10.W.7',
          },
          {
            question:
              'Explain what a synthesis matrix is, how to create one, and why it is a valuable pre-writing tool for research papers.',
            type: 'short-answer',
            correctAnswer:
              'A synthesis matrix is a chart with sources listed in rows and key themes or research sub-questions in columns. For each cell, the researcher notes what that source says about that theme. Creating one involves reading all sources, identifying recurring themes, and filling in the grid. It is valuable because it reveals patterns (where sources agree), debates (where they disagree), and gaps (topics only one source addresses) — enabling the writer to plan a thematically organized, genuinely synthesized paper rather than a series of summaries.',
            standardCode: '9-10.W.7',
          },
        ],
      },
    },
  },

  // ─── Language (3 modules) ───────────────────────────────────────
  {
    slug: 'grade10-ela-academic-vocabulary',
    title: 'Academic Vocabulary in Context',
    description:
      'Build and apply academic vocabulary by using context clues, word roots, and reference tools to determine the meaning of unfamiliar words in complex texts, and by incorporating precise language into writing and discussion.',
    subject: 'ela',
    grade: 10,
    gradeBand: '9-12',
    topicCluster: 'Language',
    standardCodes: ['9-10.L.4', '9-10.L.6'],
    content: {
      intro: {
        title: 'Academic Vocabulary in Context',
        text: 'Academic vocabulary — the formal, precise language used in scholarly and professional communication — is the gateway to understanding complex texts and expressing sophisticated ideas. In this module you will learn strategies for unlocking unfamiliar words and for choosing the most precise terms in your own writing.',
        culturalHook:
          'Every community has words and phrases with special meaning — insider language that signals belonging. Academic vocabulary works the same way in school and professional settings. Building it does not mean losing your own voice; it means adding new tools to your toolkit.',
      },
      segments: [
        {
          index: 0,
          title: 'Using Context Clues',
          text: 'When you encounter an unfamiliar word, look at the surrounding sentences for clues. Context clues include definitions embedded in the text, synonyms or antonyms nearby, examples that illustrate the word, and the general logic of the sentence. For instance, in "The policy was untenable — no one could defend it," the phrase "no one could defend it" defines "untenable" as indefensible.',
          keyVocabulary: ['context clues', 'definition clue', 'synonym', 'antonym', 'inference'],
        },
        {
          index: 1,
          title: 'Word Roots, Prefixes, and Suffixes',
          text: 'Many academic words derive from Latin and Greek roots. Knowing common roots (e.g., "bene" = good, "mal" = bad, "aud" = hear, "scrib/script" = write) and affixes (e.g., "un-" = not, "-tion" = act of, "-ous" = full of) lets you decode unfamiliar words even without context. Combine root analysis with context clues for the most accurate interpretation.',
          keyVocabulary: ['root', 'prefix', 'suffix', 'etymology', 'morphology'],
          example:
            'The word "benevolent" combines "bene" (good) and "vol" (will) — literally "good will." In context, "The benevolent donor funded scholarships for students in need," the meaning is confirmed: kind, generous.',
        },
        {
          index: 2,
          title: 'Applying Precise Vocabulary in Writing',
          text: 'Precise vocabulary strengthens your writing by conveying exact meaning. Instead of "The policy had a bad effect," write "The policy had a detrimental effect on enrollment." Choose words that match your intended tone and level of formality. When in doubt, consult a thesaurus for options, but always verify that the synonym fits the specific context — not all synonyms are interchangeable.',
          keyVocabulary: ['precise language', 'word choice', 'tone', 'register', 'thesaurus'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'In the sentence "The committee\'s decision was immutable — once made, it could never be changed," what does "immutable" mean?',
          type: 'multiple-choice',
          options: [
            'Unchangeable',
            'Unpopular',
            'Immediate',
            'Impressive',
          ],
          correctAnswer: 'Unchangeable',
          hint: 'The phrase after the dash defines the word.',
          explanation:
            'The context clue "once made, it could never be changed" directly defines "immutable" as unchangeable. The dash signals that a definition follows.',
          standardCode: '9-10.L.4',
        },
        {
          index: 1,
          question:
            'Break the word "malfeasance" into its root parts and infer its meaning.',
          type: 'short-answer',
          correctAnswer:
            '"Mal" means bad or evil, and "feasance" relates to doing or performing (from the Latin "facere," to do). Malfeasance therefore means wrongdoing or illegal action, especially by a public official.',
          hint: 'Start with the prefix "mal-" — what does it usually mean?',
          explanation:
            'Root analysis breaks unfamiliar words into recognizable parts. "Mal" (bad) + "feasance" (doing) = bad doing, or misconduct. This strategy works across many academic words with Latin and Greek roots.',
          standardCode: '9-10.L.4',
        },
        {
          index: 2,
          question:
            'Which revision uses more precise vocabulary? Original: "The experiment had a big impact on the results."',
          type: 'multiple-choice',
          options: [
            '"The variable produced a significant effect on the experimental outcomes."',
            '"The experiment did a lot to the stuff."',
            '"Things changed because of the experiment."',
            '"The experiment was really important and changed everything."',
          ],
          correctAnswer:
            '"The variable produced a significant effect on the experimental outcomes."',
          hint: 'Look for the option with the most specific, academic-level word choices.',
          explanation:
            'Replacing "big impact" with "significant effect," "experiment" with "variable" (more precise cause), and "results" with "experimental outcomes" elevates the register and specificity.',
          standardCode: '9-10.L.6',
        },
        {
          index: 3,
          question:
            'Why should you verify a synonym in context before using it in your writing?',
          type: 'short-answer',
          correctAnswer:
            'Synonyms often have different connotations, registers, or shades of meaning. A word that is technically synonymous may not fit the specific context, tone, or level of formality of your sentence. Verifying ensures the word conveys exactly what you intend.',
          hint: 'Think about whether "cheap" and "economical" mean the same thing in every context.',
          explanation:
            'Synonyms are not perfectly interchangeable. "Cheap" can imply low quality, while "economical" implies wise spending. Context determines which word is appropriate.',
          standardCode: '9-10.L.6',
        },
        {
          index: 4,
          question:
            'The prefix "un-" means "not." Based on this, what does "unprecedented" most likely mean?',
          type: 'multiple-choice',
          options: [
            'Never done or experienced before.',
            'Very popular.',
            'Repeated many times.',
            'Officially approved.',
          ],
          correctAnswer: 'Never done or experienced before.',
          hint: '"Precedent" means something that came before. Add "un-" (not) to get the meaning.',
          explanation:
            '"Precedent" refers to something that has happened before and serves as an example. "Un-" negates it, so "unprecedented" means without precedent — never done before.',
          standardCode: '9-10.L.4',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Read the sentence: "The senator\'s intransigent stance on the budget alienated even her closest allies." Use context clues and root analysis to determine the meaning of "intransigent."',
            type: 'short-answer',
            correctAnswer:
              'Context clue: the stance "alienated even her closest allies," suggesting stubbornness. Root analysis: "in-" (not) + "transigent" (from Latin "transigere," to come to an agreement) = unwilling to compromise. "Intransigent" means stubbornly refusing to change one\'s views or to compromise.',
            standardCode: '9-10.L.4',
          },
          {
            question:
              'Which strategy should you try first when encountering an unfamiliar word in a text?',
            type: 'multiple-choice',
            options: [
              'Look at the surrounding sentences for context clues.',
              'Skip the word and keep reading.',
              'Replace the word with a simpler one.',
              'Ask someone else to read the passage.',
            ],
            correctAnswer:
              'Look at the surrounding sentences for context clues.',
            standardCode: '9-10.L.4',
          },
          {
            question:
              'Rewrite the following sentence using more precise academic vocabulary: "The project was good and helped a lot of people in the area."',
            type: 'short-answer',
            correctAnswer:
              'The initiative was effective and benefited a significant portion of the local population. ("Initiative" is more precise than "project," "effective" more specific than "good," "benefited" more formal than "helped," "significant portion of the local population" more precise than "a lot of people in the area.")',
            standardCode: '9-10.L.6',
          },
        ],
      },
    },
  },
  {
    slug: 'grade10-ela-rhetorical-devices',
    title: 'Rhetorical Devices',
    description:
      'Identify and analyze rhetorical devices — including ethos, pathos, logos, parallelism, antithesis, and rhetorical questions — and evaluate how authors use them to strengthen arguments and engage audiences.',
    subject: 'ela',
    grade: 10,
    gradeBand: '9-12',
    topicCluster: 'Language',
    standardCodes: ['9-10.L.3', '9-10.L.5'],
    content: {
      intro: {
        title: 'Rhetorical Devices',
        text: 'Rhetorical devices are the tools writers and speakers use to make language more persuasive, memorable, and emotionally powerful. From political speeches to advertising, rhetorical devices shape how audiences think and feel. In this module you will learn to identify these devices, analyze their effects, and evaluate whether they strengthen or merely decorate an argument.',
        culturalHook:
          'Think of a speech, sermon, or community leader\'s words that moved you. Chances are, the speaker used rhetorical devices — repetition, vivid imagery, a question that lingered — to make the message stick.',
      },
      segments: [
        {
          index: 0,
          title: 'The Rhetorical Appeals: Ethos, Pathos, Logos',
          text: 'Aristotle identified three primary appeals. Ethos appeals to the speaker\'s credibility ("As a physician with 20 years of experience..."). Pathos appeals to emotion ("Imagine a child who has never seen a library..."). Logos appeals to logic and evidence ("Studies show a 30% increase in literacy rates..."). Most effective texts use all three, but the balance depends on audience and purpose.',
          keyVocabulary: ['ethos', 'pathos', 'logos', 'rhetorical appeal', 'credibility'],
        },
        {
          index: 1,
          title: 'Structural Rhetorical Devices',
          text: 'Parallelism repeats a grammatical structure for emphasis ("We will fight on the beaches, we will fight on the landing grounds, we will fight in the fields"). Antithesis places contrasting ideas side by side ("Ask not what your country can do for you — ask what you can do for your country"). Rhetorical questions engage the audience without expecting an answer ("If not now, when?"). Each device creates rhythm and sharpens the message.',
          keyVocabulary: ['parallelism', 'antithesis', 'rhetorical question', 'rhythm', 'emphasis'],
          example:
            'Martin Luther King Jr.\'s "I Have a Dream" speech uses parallelism ("I have a dream that...") to build emotional momentum, antithesis ("not by the color of their skin but by the content of their character") to sharpen the moral contrast, and rhetorical questions to challenge the audience\'s complacency.',
        },
        {
          index: 2,
          title: 'Evaluating Rhetorical Effectiveness',
          text: 'Identifying a device is only the first step. Evaluate whether it serves the argument or merely distracts. Effective use of pathos connects emotion to evidence; manipulative use substitutes emotion for evidence. Effective parallelism reinforces a logical progression; empty repetition just sounds rhythmic. Ask: Does this device make the argument stronger, or is it masking a weak argument?',
          keyVocabulary: ['rhetorical effectiveness', 'manipulation', 'substantive', 'decorative'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'A speaker begins, "As someone who grew up in this community and served on the school board for ten years..." Which rhetorical appeal is this?',
          type: 'multiple-choice',
          options: [
            'Ethos',
            'Pathos',
            'Logos',
            'Antithesis',
          ],
          correctAnswer: 'Ethos',
          hint: 'The speaker is establishing personal credibility.',
          explanation:
            'By citing personal experience and community service, the speaker builds ethos — the audience\'s trust in the speaker\'s qualifications and character.',
          standardCode: '9-10.L.3',
        },
        {
          index: 1,
          question:
            'Identify the rhetorical device in this sentence: "It was the best of times, it was the worst of times."',
          type: 'multiple-choice',
          options: [
            'Antithesis',
            'Rhetorical question',
            'Logos',
            'Simile',
          ],
          correctAnswer: 'Antithesis',
          hint: 'Look for two contrasting ideas placed side by side in a parallel structure.',
          explanation:
            'Antithesis juxtaposes opposite ideas ("best" and "worst") in a balanced sentence structure, creating emphasis through contrast.',
          standardCode: '9-10.L.5',
        },
        {
          index: 2,
          question:
            'How can pathos be used effectively rather than manipulatively?',
          type: 'short-answer',
          correctAnswer:
            'Pathos is effective when the emotional appeal is connected to real evidence and genuinely serves the argument — for example, sharing a true story that illustrates a data-supported trend. It becomes manipulative when emotion is used to replace evidence, distract from weak logic, or exploit the audience\'s fears without factual grounding.',
          hint: 'Think about the relationship between emotion and evidence.',
          explanation:
            'Effective rhetorical use of emotion supplements logical reasoning. When emotion substitutes for reasoning, it becomes manipulation rather than persuasion.',
          standardCode: '9-10.L.5',
        },
        {
          index: 3,
          question:
            'What effect does parallelism create in a speech or essay?',
          type: 'multiple-choice',
          options: [
            'It creates rhythm and emphasis, reinforcing key ideas through repetition of structure.',
            'It makes the text shorter.',
            'It eliminates the need for evidence.',
            'It confuses the audience.',
          ],
          correctAnswer:
            'It creates rhythm and emphasis, reinforcing key ideas through repetition of structure.',
          hint: 'Think about how repeated patterns build momentum.',
          explanation:
            'Parallelism\'s repeated structure creates a rhythmic pattern that emphasizes the content, makes ideas memorable, and builds emotional momentum.',
          standardCode: '9-10.L.5',
        },
        {
          index: 4,
          question:
            'A politician says, "Are we going to accept mediocrity, or are we going to demand excellence?" Identify two rhetorical devices in this sentence.',
          type: 'short-answer',
          correctAnswer:
            'The sentence contains a rhetorical question (it is posed to the audience but does not expect a literal answer) and antithesis (it contrasts "mediocrity" with "excellence" in a parallel structure). Together, these devices engage the audience and sharpen the contrast between the two options.',
          hint: 'Look for both a question structure and a contrast.',
          explanation:
            'Layering multiple rhetorical devices amplifies the effect. The rhetorical question engages the audience while the antithesis makes the preferred choice obvious.',
          standardCode: '9-10.L.5',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Read the following passage from a speech: "I have seen the empty classrooms. I have spoken with the frustrated teachers. I have heard the parents pleading for change. The data confirm what our eyes and ears already know: our schools are underfunded." Identify the rhetorical devices used and evaluate their effectiveness.',
            type: 'short-answer',
            correctAnswer:
              'The passage uses parallelism ("I have seen... I have spoken... I have heard...") to build emotional momentum through repeated structure. It employs pathos (vivid images of empty classrooms, frustrated teachers, pleading parents) to engage the audience emotionally. It then transitions to logos ("The data confirm...") to ground the emotional appeal in evidence. The combination is effective because the emotional buildup prepares the audience to receive the data with urgency, and the data validates the emotions — neither appeal stands alone.',
            standardCode: '9-10.L.5',
          },
          {
            question:
              'Which of the following best describes the difference between ethos and logos?',
            type: 'multiple-choice',
            options: [
              'Ethos appeals to the speaker\'s credibility; logos appeals to logic and evidence.',
              'Ethos appeals to emotion; logos appeals to credibility.',
              'Ethos and logos are the same thing.',
              'Ethos is used in writing; logos is used in speeches.',
            ],
            correctAnswer:
              'Ethos appeals to the speaker\'s credibility; logos appeals to logic and evidence.',
            standardCode: '9-10.L.3',
          },
          {
            question:
              'Write a sentence that uses antithesis to argue for investing in education.',
            type: 'short-answer',
            correctAnswer:
              'We can invest in our children\'s classrooms today, or we can pay for the consequences of their failure tomorrow. This antithesis contrasts "invest today" with "pay tomorrow" and "classrooms" with "consequences of failure," making the choice stark and the preferred action clear.',
            standardCode: '9-10.L.5',
          },
        ],
      },
    },
  },
  {
    slug: 'grade10-ela-syntax-for-style',
    title: 'Syntax for Style',
    description:
      'Analyze and apply syntactic choices — sentence length, structure, and variety — to create specific stylistic effects in writing, understanding how syntax shapes meaning, tone, pace, and emphasis.',
    subject: 'ela',
    grade: 10,
    gradeBand: '9-12',
    topicCluster: 'Language',
    standardCodes: ['9-10.L.3', '9-10.L.3a'],
    content: {
      intro: {
        title: 'Syntax for Style',
        text: 'Syntax — the arrangement of words and phrases in sentences — is one of the most powerful tools a writer has. A short, blunt sentence can shock. A long, flowing sentence can immerse the reader in description. In this module you will learn how deliberate syntactic choices create tone, control pacing, and direct emphasis.',
        culturalHook:
          'Listen to a great storyteller in your community. Notice how they speed up during exciting parts (short, punchy sentences) and slow down during emotional moments (longer, more detailed ones). That instinctive variation is syntax at work.',
      },
      segments: [
        {
          index: 0,
          title: 'Sentence Length and Pacing',
          text: 'Short sentences create urgency, emphasis, and clarity. Long sentences slow the reader down, build complexity, and create a sense of immersion. The key to effective pacing is variety: alternating between short and long sentences prevents monotony and mirrors the emotional rhythm of your content. A paragraph of identical sentence lengths feels flat; a paragraph with strategic variation feels alive.',
          keyVocabulary: ['sentence length', 'pacing', 'urgency', 'variety', 'rhythm'],
        },
        {
          index: 1,
          title: 'Sentence Types and Their Effects',
          text: 'Simple sentences (one independent clause) are direct and forceful. Compound sentences (two independent clauses joined by a conjunction) show equal relationships. Complex sentences (an independent clause with one or more dependent clauses) establish hierarchy, showing which idea is primary and which is subordinate. Periodic sentences withhold the main idea until the end for dramatic effect; loose sentences deliver the main idea first and then add detail.',
          keyVocabulary: ['simple sentence', 'compound sentence', 'complex sentence', 'periodic sentence', 'loose sentence', 'subordination'],
          example:
            'Periodic: "After years of struggle, after countless setbacks, after losing nearly everything, she finally succeeded." The main clause ("she finally succeeded") arrives last, building suspense. Loose: "She finally succeeded, after years of struggle, after countless setbacks, after losing nearly everything." The main idea comes first, and the details follow.',
        },
        {
          index: 2,
          title: 'Syntax and Tone',
          text: 'Syntax directly shapes tone. Formal writing tends toward longer, more complex sentences with careful subordination. Informal writing uses shorter sentences and fragments. An ironic tone might pair a lofty dependent clause with a blunt independent clause for contrast. When analyzing an author\'s style, examine not just what they say but how their sentence structure says it.',
          keyVocabulary: ['tone', 'formal register', 'informal register', 'fragment', 'ironic contrast'],
        },
        {
          index: 3,
          title: 'Revising for Syntactic Effect',
          text: 'During revision, read your writing aloud. Listen for monotonous patterns — too many sentences starting with "I" or "The," too many sentences of equal length, too many compound sentences in a row. Revise by varying openers (begin with a prepositional phrase, a participial phrase, or a dependent clause), adjusting sentence length, and choosing the sentence type that best matches your intended effect.',
          keyVocabulary: ['revision', 'sentence opener', 'prepositional phrase', 'participial phrase', 'syntactic variety'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'What effect do short, simple sentences typically create in writing?',
          type: 'multiple-choice',
          options: [
            'Urgency, emphasis, and directness.',
            'Complexity and immersion.',
            'A formal, academic tone.',
            'Confusion and ambiguity.',
          ],
          correctAnswer: 'Urgency, emphasis, and directness.',
          hint: 'Think about how a short sentence feels compared to a long one.',
          explanation:
            'Short sentences hit the reader quickly, creating a sense of urgency or emphasis. They are especially effective after longer sentences, where the contrast amplifies their impact.',
          standardCode: '9-10.L.3',
        },
        {
          index: 1,
          question:
            'What is the difference between a periodic sentence and a loose sentence?',
          type: 'short-answer',
          correctAnswer:
            'A periodic sentence withholds the main clause until the end, building suspense or emphasis as the reader waits for the key idea. A loose sentence delivers the main clause first and then adds modifying details, creating a more relaxed, natural flow.',
          hint: 'Think about where the main idea appears — at the beginning or the end.',
          explanation:
            'The placement of the main clause determines the sentence\'s dramatic structure. Periodic sentences create anticipation; loose sentences provide immediate clarity followed by elaboration.',
          standardCode: '9-10.L.3a',
        },
        {
          index: 2,
          question:
            'A writer uses the fragment "Gone." as a standalone sentence after a long paragraph about a character\'s departure. What is the stylistic effect?',
          type: 'multiple-choice',
          options: [
            'The abrupt fragment creates emotional impact through contrast with the longer paragraph.',
            'The fragment is a grammatical error that should be corrected.',
            'The fragment has no particular effect.',
            'The fragment makes the writing informal and unprofessional.',
          ],
          correctAnswer:
            'The abrupt fragment creates emotional impact through contrast with the longer paragraph.',
          hint: 'Fragments can be deliberate stylistic choices, not just errors.',
          explanation:
            'When used intentionally, fragments create stark emphasis. After a long passage, a single-word fragment can deliver emotional punch, mirroring the finality of the character\'s departure.',
          standardCode: '9-10.L.3',
        },
        {
          index: 3,
          question:
            'Why is it helpful to read your writing aloud during revision?',
          type: 'short-answer',
          correctAnswer:
            'Reading aloud reveals rhythmic patterns that the eye might miss — such as monotonous sentence lengths, repetitive openers, or awkward phrasing. Your ear detects when the writing feels flat or rushed, allowing you to revise for better syntactic variety and pacing.',
          hint: 'Think about what your ear catches that your eye might not.',
          explanation:
            'The ear is sensitive to rhythm, repetition, and flow. Reading aloud transforms writing from a visual activity into an auditory one, exposing syntactic issues that are difficult to spot silently.',
          standardCode: '9-10.L.3a',
        },
        {
          index: 4,
          question:
            'Which revision adds the most syntactic variety? Original: "The team practiced hard. The team improved. The team won the championship."',
          type: 'multiple-choice',
          options: [
            '"After months of grueling practice, the team improved steadily — and when the championship arrived, they won."',
            '"The team practiced hard and the team improved and the team won the championship."',
            '"The team practiced. The team improved. The team won."',
            '"They practiced really hard and got better and won it all."',
          ],
          correctAnswer:
            '"After months of grueling practice, the team improved steadily — and when the championship arrived, they won."',
          hint: 'Look for the option that varies sentence structure and combines ideas logically.',
          explanation:
            'This revision opens with a prepositional phrase, uses a complex sentence with subordination, and varies sentence length — replacing three monotonous simple sentences with a more dynamic, readable structure.',
          standardCode: '9-10.L.3a',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Rewrite the following passage for greater syntactic variety and effect: "The storm hit the town. The power went out. The streets flooded. People were scared."',
            type: 'short-answer',
            correctAnswer:
              'When the storm hit the town, the power went out within minutes and the streets flooded under a relentless downpour. People were scared. The revision combines the first three sentences into a complex sentence that builds momentum, then isolates "People were scared" as a short, emphatic sentence that delivers the emotional impact. The contrast between the long buildup and the blunt conclusion creates urgency.',
            standardCode: '9-10.L.3a',
          },
          {
            question:
              'Which sentence type withholds its main idea until the end for dramatic effect?',
            type: 'multiple-choice',
            options: [
              'Periodic sentence',
              'Loose sentence',
              'Simple sentence',
              'Compound sentence',
            ],
            correctAnswer: 'Periodic sentence',
            standardCode: '9-10.L.3',
          },
          {
            question:
              'Analyze how the following author uses syntax to create tone: "She walked in. She sat down. She said nothing. For three hours, she said absolutely nothing, and the silence filled the room like water filling a glass — slowly, steadily, until there was no space left for anyone to breathe." Explain how the shift in sentence structure mirrors a shift in tone.',
            type: 'short-answer',
            correctAnswer:
              'The three opening sentences are short, simple, and abrupt, creating a tense, clipped tone that mirrors the character\'s restrained behavior. The final sentence is long, complex, and richly detailed, with a simile and rhythmic modifiers ("slowly, steadily") that create a tone of mounting oppression. The syntactic shift — from short and controlled to long and immersive — mirrors the escalation from quiet tension to suffocating silence, making the reader feel the weight of the character\'s wordlessness.',
            standardCode: '9-10.L.3',
          },
        ],
      },
    },
  },
]
