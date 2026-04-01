import type { ModuleSeed } from '../types'

export const GRADE_7_ELA: ModuleSeed[] = [
  // ── Reading Literature (4 modules) ──────────────────────────

  {
    slug: 'grade7-ela-theme-analysis',
    title: 'Theme Analysis',
    description:
      'Analyze how a theme develops over the course of a text and how it is shaped by specific details',
    subject: 'ela',
    grade: 7,
    gradeBand: '6-8',
    topicCluster: 'Reading Literature',
    standardCodes: ['7.RL.2'],
    content: {
      intro: {
        title: 'Theme Analysis',
        text: 'Great stories carry big ideas beneath the surface. A theme is the underlying message or insight about life that an author weaves through the characters, conflicts, and events of a text. In seventh grade you will move beyond simply naming a theme — you will trace how it develops from the beginning of a story to its resolution, showing exactly which details make the theme clear.',
        culturalHook:
          'Think of a proverb or saying passed down in your community. Stories often develop the same kind of wisdom — one scene at a time.',
      },
      segments: [
        {
          index: 0,
          title: 'Identifying Theme Versus Topic',
          text: 'A topic is a single word or short phrase — "courage," "justice," "belonging." A theme is a full statement the text makes about that topic, such as "True courage means standing up for others even when it costs you." To move from topic to theme, ask: What does the author seem to believe about this topic? What do the characters learn? The answer, expressed as a complete sentence, is the theme.',
          keyVocabulary: ['theme', 'topic', 'inference', 'universal message'],
        },
        {
          index: 1,
          title: 'Tracing Theme Development',
          text: 'A theme is not stated all at once. It develops as the plot unfolds. Early in a text the author may introduce a conflict that hints at the theme. In the middle, characters face choices that test the theme. By the resolution the theme becomes clear through the consequences of those choices. Tracking theme development means annotating how key moments — turning points, dialogue, and internal thoughts — build toward the central message.',
          keyVocabulary: ['development', 'turning point', 'resolution', 'annotate'],
          example:
            'In a story about a boy who refuses to help a newcomer, gets stranded himself, and is rescued by that same newcomer, the theme "kindness repays itself" develops through three stages: rejection, vulnerability, and rescue.',
        },
        {
          index: 2,
          title: 'Supporting Theme with Textual Evidence',
          text: 'Strong literary analysis requires evidence. When you claim a text has a particular theme, you must point to specific quotes, scenes, or character actions that prove it. Use a pattern like: "The author develops the theme of _____ when [character] [action/dialogue], which shows that _____." Embedding evidence this way makes your analysis convincing and grounded in the text rather than personal opinion alone.',
          keyVocabulary: ['textual evidence', 'cite', 'embed', 'analysis'],
        },
        {
          index: 3,
          title: 'Multiple Themes in a Single Text',
          text: 'Complex texts often carry more than one theme. A novel may explore both the importance of honesty and the pain of growing up. When you encounter multiple themes, determine which is the central theme — the one most strongly supported by key events and the resolution — and which are secondary. Recognizing multiple themes shows mature reading and prepares you for richer literary discussions.',
          keyVocabulary: ['central theme', 'secondary theme', 'complexity', 'literary discussion'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'Which of the following is a theme rather than a topic?',
          type: 'multiple-choice',
          options: [
            'Friendship',
            'True friends accept you for who you are.',
            'A boy and his dog',
            'Loyalty',
          ],
          correctAnswer: 'True friends accept you for who you are.',
          hint: 'A theme is a complete sentence that states a message about life.',
          explanation:
            '"Friendship" and "Loyalty" are topics — single words. "A boy and his dog" is a subject. Only "True friends accept you for who you are" expresses a full message, making it a theme.',
          standardCode: '7.RL.2',
        },
        {
          index: 1,
          question:
            'A character brags about doing everything alone but fails a big challenge until she asks for help. Which detail most strongly develops the theme?',
          type: 'multiple-choice',
          options: [
            'The setting is a small town.',
            'She fails when she refuses help and succeeds when she accepts it.',
            'Her favorite color is blue.',
            'The story is told in first person.',
          ],
          correctAnswer:
            'She fails when she refuses help and succeeds when she accepts it.',
          hint: 'Look for the detail that shows a change connected to the lesson the character learns.',
          explanation:
            'The contrast between failing alone and succeeding with help directly develops the theme that asking for help is a sign of strength, not weakness.',
          standardCode: '7.RL.2',
        },
        {
          index: 2,
          question:
            'Explain how the resolution of a story helps reveal its theme. Use an example in your answer.',
          type: 'short-answer',
          correctAnswer:
            'The resolution shows the consequences of the characters\' choices, which reveals the author\'s message. For example, if a character who lied loses a friend at the end, the resolution reveals a theme about the cost of dishonesty.',
          hint: 'Think about what happens at the very end of a story and what it teaches the reader.',
          explanation:
            'The resolution wraps up the conflict and shows whether the characters\' decisions led to positive or negative outcomes, clarifying what the author wants readers to understand.',
          standardCode: '7.RL.2',
        },
        {
          index: 3,
          question:
            'A novel explores both "the power of forgiveness" and "the difficulty of growing up." How do you determine which is the central theme?',
          type: 'multiple-choice',
          options: [
            'The central theme is whichever you like best.',
            'The central theme is the one most supported by key events and the resolution.',
            'A text can only have one theme.',
            'The secondary theme is always more important.',
          ],
          correctAnswer:
            'The central theme is the one most supported by key events and the resolution.',
          hint: 'Which theme is backed up by the most evidence in the story?',
          explanation:
            'The central theme is the message most strongly developed through events, character choices, and the resolution. Secondary themes are present but receive less emphasis.',
          standardCode: '7.RL.2',
        },
        {
          index: 4,
          question:
            'Write a sentence that embeds textual evidence to support a theme. Use this pattern: "The author develops the theme of _____ when [character] [action]."',
          type: 'short-answer',
          correctAnswer:
            'Example: "The author develops the theme of perseverance when Maria continues to train for the race even after her injury, which shows that determination can overcome obstacles."',
          hint: 'Fill in the blanks with a theme, a character, and a specific action from a story you know.',
          explanation:
            'Embedding evidence means weaving a quote or detail into your own sentence so the reader can see exactly how the text supports your claim about theme.',
          standardCode: '7.RL.2',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'In a story, a character ignores warnings and ventures into a dangerous forest alone. After nearly getting lost, he is saved by a stranger who teaches him to listen. Which statement best expresses the theme?',
            type: 'multiple-choice',
            options: [
              'Forests are dangerous places.',
              'Listening to the advice of others can keep you safe.',
              'Strangers are always trustworthy.',
              'Being alone is always fun.',
            ],
            correctAnswer:
              'Listening to the advice of others can keep you safe.',
            standardCode: '7.RL.2',
          },
          {
            question:
              'Describe two details from a text you have read that develop its theme. Explain how each detail contributes to the overall message.',
            type: 'short-answer',
            correctAnswer:
              'Answers will vary. A strong response names two specific details (e.g., a character\'s choice and a consequence) and explains how each one builds toward the theme.',
            standardCode: '7.RL.2',
          },
          {
            question:
              'A poem repeats the phrase "still I rise" after each stanza describing hardship. What role does this repetition play in developing the theme?',
            type: 'short-answer',
            correctAnswer:
              'The repetition emphasizes the theme of resilience by reinforcing the speaker\'s refusal to be defeated, no matter how many hardships are described.',
            standardCode: '7.RL.2',
          },
        ],
      },
    },
  },

  {
    slug: 'grade7-ela-authors-craft',
    title: "Author's Craft",
    description:
      'Analyze how an author uses literary devices, word choice, and narrative techniques to shape meaning and tone',
    subject: 'ela',
    grade: 7,
    gradeBand: '6-8',
    topicCluster: 'Reading Literature',
    standardCodes: ['7.RL.4', '7.RL.6'],
    content: {
      intro: {
        title: "Author's Craft",
        text: "Every author makes deliberate choices about the words, images, and structures they use. These choices — collectively called the author's craft — create tone, build mood, and shape the way readers experience a text. In this module you will learn to identify and explain how specific craft moves affect meaning.",
        culturalHook:
          'Think about a storyteller in your family or community. The way they pause, raise their voice, or choose vivid words is their craft. Authors do the same thing on paper.',
      },
      segments: [
        {
          index: 0,
          title: 'Word Choice and Connotation',
          text: 'Authors select words not only for their dictionary meaning (denotation) but also for the feelings they carry (connotation). "Home" and "house" refer to the same structure, but "home" feels warm and personal. When analyzing craft, ask: Why did the author choose this word instead of a synonym? What feeling does it create? Tracking connotation helps you understand tone — the author\'s attitude toward the subject.',
          keyVocabulary: ['connotation', 'denotation', 'tone', 'word choice'],
        },
        {
          index: 1,
          title: 'Figurative Language',
          text: 'Figurative language — simile, metaphor, personification, hyperbole — is a core tool of craft. A simile such as "her smile was like sunshine" creates a vivid image. A metaphor like "the classroom was a zoo" makes a direct comparison that carries emotional weight. Personification gives human qualities to non-human things, and hyperbole exaggerates for effect. Recognizing these devices is the first step; explaining their impact on meaning and mood is what makes your analysis strong.',
          keyVocabulary: ['simile', 'metaphor', 'personification', 'hyperbole', 'figurative language'],
          example:
            'In the sentence "The wind whispered secrets through the trees," personification makes the setting feel mysterious and alive.',
        },
        {
          index: 2,
          title: 'Narrative Point of View',
          text: "Point of view determines what readers know and how they experience events. A first-person narrator lets you inside one character's mind but limits your knowledge. A third-person omniscient narrator reveals multiple characters' thoughts, providing a broader view. An author's choice of point of view shapes sympathy, suspense, and understanding. When you analyze craft, consider how the story would change if told from a different perspective.",
          keyVocabulary: ['first person', 'third person', 'omniscient', 'perspective', 'narrator'],
        },
        {
          index: 3,
          title: 'Pacing and Structure',
          text: 'Authors control pacing — how quickly or slowly events unfold — through sentence length, paragraph breaks, and the balance between action and description. Short, choppy sentences speed the reader up and create tension. Long, descriptive passages slow things down and build atmosphere. Flashbacks and foreshadowing are structural techniques that manipulate time to deepen meaning. Noticing these choices helps you appreciate how form supports content.',
          keyVocabulary: ['pacing', 'flashback', 'foreshadowing', 'tension', 'atmosphere'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'An author describes a character\'s old neighborhood as a "forgotten corner of the world." What connotation does the word "forgotten" carry?',
          type: 'multiple-choice',
          options: [
            'It suggests the neighborhood is new and exciting.',
            'It suggests neglect, sadness, and being overlooked.',
            'It means the neighborhood does not exist.',
            'It has a positive, hopeful feeling.',
          ],
          correctAnswer:
            'It suggests neglect, sadness, and being overlooked.',
          hint: 'Think about how "forgotten" makes you feel — positive or negative?',
          explanation:
            '"Forgotten" has a negative connotation: it implies the neighborhood has been neglected and ignored, creating a sad or somber tone.',
          standardCode: '7.RL.4',
        },
        {
          index: 1,
          question:
            'Identify the figurative language in this sentence and explain its effect: "The stars danced across the midnight sky."',
          type: 'short-answer',
          correctAnswer:
            'Personification — stars cannot literally dance. The effect is to create a lively, magical mood that makes the night sky feel full of energy.',
          hint: 'What human action is given to a non-human thing?',
          explanation:
            'Giving stars the ability to "dance" is personification. It transforms a still image into something vibrant and enchanting.',
          standardCode: '7.RL.4',
        },
        {
          index: 2,
          question:
            'How would a story about a surprise party change if the point of view shifted from the guest of honor (first person) to an all-knowing narrator (third-person omniscient)?',
          type: 'short-answer',
          correctAnswer:
            'In first person the reader shares the guest\'s surprise. In third-person omniscient, the reader knows about the party in advance, which removes the surprise but may build suspense about the guest\'s reaction.',
          hint: 'Think about what each narrator would know and how that affects the reader\'s experience.',
          explanation:
            'Point of view controls information. First person limits knowledge to one character, creating surprise. Omniscient reveals everything, shifting the tension from what happens to how a character reacts.',
          standardCode: '7.RL.6',
        },
        {
          index: 3,
          question:
            'An author writes: "He ran. Stumbled. Got up. Ran again." What effect does the short sentence structure create?',
          type: 'multiple-choice',
          options: [
            'It slows the pace and creates a calm mood.',
            'It speeds the pace and creates urgency or tension.',
            'It has no effect on the reader.',
            'It makes the story humorous.',
          ],
          correctAnswer:
            'It speeds the pace and creates urgency or tension.',
          hint: 'Read the sentences aloud. Do they feel fast or slow?',
          explanation:
            'Short, fragmented sentences quicken the pace and mimic the breathless action, creating a sense of urgency and tension.',
          standardCode: '7.RL.4',
        },
        {
          index: 4,
          question:
            'What is the difference between foreshadowing and flashback? Give a brief example of each.',
          type: 'short-answer',
          correctAnswer:
            'Foreshadowing hints at future events (e.g., dark clouds before a disaster). Flashback jumps back in time to reveal past events (e.g., a character remembers a childhood promise).',
          hint: 'One looks forward in time; the other looks backward.',
          explanation:
            'Foreshadowing plants clues about what will happen later, building suspense. Flashback interrupts the present to show a past event, adding context or emotional depth.',
          standardCode: '7.RL.4',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'An author writes, "The old house groaned under the weight of years." Identify the figurative device and explain how it contributes to the mood.',
            type: 'short-answer',
            correctAnswer:
              'Personification — the house "groaned" as if it were alive and tired. This creates a somber, almost eerie mood that suggests decay and the passage of time.',
            standardCode: '7.RL.4',
          },
          {
            question:
              'Which craft choice would most increase suspense in a chase scene?',
            type: 'multiple-choice',
            options: [
              'Using long, flowing sentences with lots of description.',
              'Using short, fragmented sentences and quick dialogue.',
              'Switching to a flashback about the character\'s childhood.',
              'Removing all dialogue.',
            ],
            correctAnswer:
              'Using short, fragmented sentences and quick dialogue.',
            standardCode: '7.RL.4',
          },
          {
            question:
              'Explain how an author\'s choice of first-person point of view affects the reader\'s understanding of a character\'s motives. Use an example.',
            type: 'short-answer',
            correctAnswer:
              'First person gives direct access to the narrator\'s thoughts and feelings, so the reader understands motives from the inside. For example, if a character says "I lied because I was terrified of losing my friend," the reader immediately grasps the emotional reason behind the action.',
            standardCode: '7.RL.6',
          },
        ],
      },
    },
  },

  {
    slug: 'grade7-ela-comparing-texts',
    title: 'Comparing Texts',
    description:
      'Compare and contrast how different authors approach the same theme or topic across genres',
    subject: 'ela',
    grade: 7,
    gradeBand: '6-8',
    topicCluster: 'Reading Literature',
    standardCodes: ['7.RL.7', '7.RL.9'],
    content: {
      intro: {
        title: 'Comparing Texts',
        text: 'Different authors can address the same theme — such as the cost of war or the search for identity — in very different ways. One may write a poem, another a short story, and another a graphic novel. Comparing texts means examining how genre, structure, tone, and craft choices create different experiences for readers even when the underlying theme is the same.',
        culturalHook:
          'Think about two songs that tackle the same topic, like leaving home. Even though the topic is the same, each artist makes it feel different. Literature works the same way.',
      },
      segments: [
        {
          index: 0,
          title: 'Setting Up a Comparison',
          text: 'Before you compare two texts, identify what they share. Do they address the same theme, topic, or historical event? Once you establish the common ground, you can explore differences. A useful framework is to compare purpose, audience, genre, tone, and key details. Organizing your observations in a Venn diagram or T-chart makes patterns easier to see.',
          keyVocabulary: ['compare', 'contrast', 'Venn diagram', 'common ground'],
        },
        {
          index: 1,
          title: 'Comparing Across Genres',
          text: 'A poem and a short story about loss will feel very different. The poem might use compressed imagery and rhythm to evoke emotion quickly. The short story might develop characters over several pages, giving the reader time to build a relationship with them. Recognizing how genre shapes the reading experience helps you appreciate why an author chose a particular form.',
          keyVocabulary: ['genre', 'imagery', 'rhythm', 'form'],
          example:
            'A haiku about autumn creates a snapshot of change in three lines, while a short story about autumn might follow a character through weeks of transition. Both explore change, but the experiences are vastly different.',
        },
        {
          index: 2,
          title: 'Comparing Tone and Perspective',
          text: 'Two texts on the same theme may adopt opposite tones. One author may treat the theme of growing up with humor, while another approaches it with sadness. Perspective matters too: a story told by a child will feel different from one told by an adult looking back. When comparing, note how tone and perspective influence the reader\'s emotional response and understanding of the theme.',
          keyVocabulary: ['tone', 'perspective', 'emotional response', 'humor', 'nostalgia'],
        },
        {
          index: 3,
          title: 'Writing a Comparative Analysis',
          text: 'A strong comparative analysis does more than list similarities and differences. It argues a point: for example, "Although both texts explore the theme of justice, Text A uses satire to expose unfairness while Text B uses a personal narrative to inspire empathy." Use a point-by-point structure (comparing one element at a time across both texts) or a block structure (discussing one text fully, then the other, then synthesizing). Always use textual evidence from both sources.',
          keyVocabulary: ['comparative analysis', 'point-by-point', 'block structure', 'synthesize'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'What is the first step when comparing two literary texts?',
          type: 'multiple-choice',
          options: [
            'Decide which text is better.',
            'Identify what the two texts have in common, such as theme or topic.',
            'Count the number of pages in each text.',
            'Read only one of the texts.',
          ],
          correctAnswer:
            'Identify what the two texts have in common, such as theme or topic.',
          hint: 'You need a basis for comparison before you can find differences.',
          explanation:
            'Effective comparison begins by establishing common ground — shared theme, topic, or subject — so that differences become meaningful.',
          standardCode: '7.RL.9',
        },
        {
          index: 1,
          question:
            'How might a poem and a short story about loneliness differ in the way they convey the theme?',
          type: 'short-answer',
          correctAnswer:
            'A poem might use concentrated imagery and rhythm to evoke loneliness in a few lines, while a short story might develop a character\'s experience over time through plot and dialogue.',
          hint: 'Think about the tools each genre uses — imagery vs. plot, brevity vs. development.',
          explanation:
            'Genre affects how themes are delivered. Poetry relies on compression and sound; fiction relies on character, setting, and narrative arc.',
          standardCode: '7.RL.7',
        },
        {
          index: 2,
          question:
            'Two stories about immigration have different tones: one is hopeful, the other is sorrowful. What most likely accounts for the difference?',
          type: 'multiple-choice',
          options: [
            'They are written in the same genre.',
            'The authors have different perspectives and craft choices.',
            'Tone cannot vary across texts on the same topic.',
            'One text is longer than the other.',
          ],
          correctAnswer:
            'The authors have different perspectives and craft choices.',
          hint: 'Authors bring their own viewpoints and choose language to match.',
          explanation:
            'Tone is shaped by word choice, perspective, and purpose. Different authors naturally bring different attitudes to the same topic.',
          standardCode: '7.RL.9',
        },
        {
          index: 3,
          question:
            'What is the difference between a point-by-point and a block structure in a comparative essay?',
          type: 'short-answer',
          correctAnswer:
            'Point-by-point compares one element at a time across both texts. Block structure discusses all elements of one text first, then the other, before synthesizing.',
          hint: 'One alternates between texts; the other covers each text separately.',
          explanation:
            'Point-by-point keeps the comparison tight by toggling between texts on each element. Block structure gives a fuller picture of each text before drawing connections.',
          standardCode: '7.RL.9',
        },
        {
          index: 4,
          question:
            'Why is it important to use textual evidence from both texts in a comparative analysis?',
          type: 'multiple-choice',
          options: [
            'So the essay is longer.',
            'To prove your claims with specific support from each source.',
            'Because only one text has evidence.',
            'Teachers require a minimum number of quotes.',
          ],
          correctAnswer:
            'To prove your claims with specific support from each source.',
          hint: 'Evidence grounds your comparison in the actual texts.',
          explanation:
            'Using evidence from both texts shows that your comparison is grounded in what the authors actually wrote, making your analysis credible and specific.',
          standardCode: '7.RL.9',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'A poem and a short story both address the theme of courage. The poem uses a battlefield metaphor; the story follows a student standing up to a bully. How does the genre affect the reader\'s experience of the theme?',
            type: 'short-answer',
            correctAnswer:
              'The poem\'s compressed metaphor creates a powerful, immediate emotional impact, while the story\'s detailed narrative lets the reader build empathy with the character over time. Both convey courage, but the reader connects differently.',
            standardCode: '7.RL.7',
          },
          {
            question:
              'Which organizational structure alternates between two texts on each point of comparison?',
            type: 'multiple-choice',
            options: [
              'Block structure',
              'Point-by-point structure',
              'Chronological structure',
              'Cause-and-effect structure',
            ],
            correctAnswer: 'Point-by-point structure',
            standardCode: '7.RL.9',
          },
          {
            question:
              'Explain one similarity and one difference you might find when comparing a fictional story and a memoir that both deal with the theme of family.',
            type: 'short-answer',
            correctAnswer:
              'Similarity: Both explore what family means and how relationships shape identity. Difference: The fictional story can invent events for dramatic effect, while the memoir draws on real experiences, lending it authenticity and personal voice.',
            standardCode: '7.RL.9',
          },
        ],
      },
    },
  },

  {
    slug: 'grade7-ela-analyzing-structure',
    title: 'Analyzing Structure',
    description:
      'Analyze how a text\'s structure — including how sections and stanzas contribute to meaning and the development of ideas',
    subject: 'ela',
    grade: 7,
    gradeBand: '6-8',
    topicCluster: 'Reading Literature',
    standardCodes: ['7.RL.5'],
    content: {
      intro: {
        title: 'Analyzing Structure',
        text: 'The way a text is organized is not accidental. Authors choose structures — chronological order, flashback, parallel plotlines, stanza breaks — to control how readers experience a story or poem. Understanding structure means seeing how the arrangement of parts creates suspense, reveals character, and reinforces theme.',
        culturalHook:
          'Think about how a good joke is structured: setup, buildup, punchline. If you rearranged those parts, the joke would fall flat. Stories work the same way.',
      },
      segments: [
        {
          index: 0,
          title: 'Common Narrative Structures',
          text: 'Most stories follow a basic arc: exposition, rising action, climax, falling action, and resolution. However, authors frequently rearrange this arc. A story might begin in media res — in the middle of the action — to hook the reader immediately. Another might use a frame narrative, where a character tells a story within the story. Recognizing the structure helps you understand why the author chose to tell the story in that particular order.',
          keyVocabulary: ['exposition', 'climax', 'in media res', 'frame narrative', 'narrative arc'],
        },
        {
          index: 1,
          title: 'How Sections and Chapters Function',
          text: 'In longer texts, sections and chapters serve specific purposes. A chapter break can create a cliffhanger, shift the point of view, or jump forward in time. Authors may use short chapters to increase pace or long chapters to slow things down. When analyzing structure, ask: Why does this section end here? What effect does the break have on the reader?',
          keyVocabulary: ['chapter', 'section', 'cliffhanger', 'pacing', 'time shift'],
          example:
            'A novel with alternating chapters between two characters builds suspense because the reader must wait to find out what happens to each character.',
        },
        {
          index: 2,
          title: 'Structure in Poetry',
          text: 'Poems use stanzas, line breaks, and sometimes refrains to create meaning. A stanza break can signal a shift in time, mood, or idea — similar to a paragraph break in prose. Enjambment (continuing a sentence past the end of a line) pulls the reader forward, while end-stopped lines create pauses. The overall form — sonnet, free verse, ballad — also shapes how readers experience the poem.',
          keyVocabulary: ['stanza', 'enjambment', 'end-stopped', 'refrain', 'free verse'],
        },
        {
          index: 3,
          title: 'Connecting Structure to Theme',
          text: 'Structure is not just about organization; it supports meaning. A story told in reverse chronological order might emphasize the consequences of a choice before revealing the choice itself, reinforcing a theme about responsibility. A poem with a repeating refrain might stress the persistence of a feeling. When you connect structure to theme, you show that you understand not just what the author said but how the arrangement of the text deepens the message.',
          keyVocabulary: ['reverse chronological', 'reinforce', 'arrangement', 'deepen'],
        },
      ],
      practice: [
        {
          index: 0,
          question: 'What does "in media res" mean?',
          type: 'multiple-choice',
          options: [
            'Starting a story at the very end.',
            'Starting a story in the middle of the action.',
            'Telling a story in reverse order.',
            'Using a narrator who is not a character.',
          ],
          correctAnswer: 'Starting a story in the middle of the action.',
          hint: 'The Latin phrase translates to "in the middle of things."',
          explanation:
            'In media res means beginning the narrative in the midst of action, which immediately engages the reader and creates questions that drive the plot forward.',
          standardCode: '7.RL.5',
        },
        {
          index: 1,
          question:
            'A novel alternates chapters between two characters who do not meet until the final chapter. What effect does this structure create?',
          type: 'short-answer',
          correctAnswer:
            'It builds suspense and anticipation, because the reader wonders how and when the two characters will meet, and it allows the reader to understand both perspectives before the meeting.',
          hint: 'Think about what the reader experiences while waiting for the characters to connect.',
          explanation:
            'Alternating perspectives keeps the reader engaged by creating parallel storylines that converge, building anticipation for the moment the characters\' paths cross.',
          standardCode: '7.RL.5',
        },
        {
          index: 2,
          question:
            'In poetry, what is enjambment?',
          type: 'multiple-choice',
          options: [
            'A poem with no stanzas.',
            'A line that ends with punctuation.',
            'A sentence that continues past the end of a line into the next.',
            'A repeated chorus in a poem.',
          ],
          correctAnswer:
            'A sentence that continues past the end of a line into the next.',
          hint: 'It is the opposite of an end-stopped line.',
          explanation:
            'Enjambment occurs when a thought runs over from one line to the next without punctuation, pulling the reader forward and creating momentum.',
          standardCode: '7.RL.5',
        },
        {
          index: 3,
          question:
            'How might a story told in reverse chronological order reinforce a theme about the consequences of choices?',
          type: 'short-answer',
          correctAnswer:
            'By showing the consequences first, the reader feels their weight before learning about the choice that caused them. This structure emphasizes that every choice has lasting effects.',
          hint: 'Think about what the reader learns first and how that shapes understanding.',
          explanation:
            'Reverse order puts the outcome before the cause, making the reader reflect on how one decision led to everything that followed.',
          standardCode: '7.RL.5',
        },
        {
          index: 4,
          question:
            'Why might an author use very short chapters in the middle of a novel?',
          type: 'multiple-choice',
          options: [
            'To bore the reader.',
            'To slow down the pacing.',
            'To increase the pace and build tension.',
            'To add more description.',
          ],
          correctAnswer: 'To increase the pace and build tension.',
          hint: 'Short chapters make you turn pages faster.',
          explanation:
            'Short chapters create a sense of urgency and keep the reader turning pages quickly, which is especially effective during high-tension moments.',
          standardCode: '7.RL.5',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'A story begins with the main character sitting in a courtroom, then flashes back to the events that led there. How does this structure affect the reader?',
            type: 'short-answer',
            correctAnswer:
              'It creates immediate questions — Why is the character in a courtroom? What happened? — that hook the reader and build suspense as the flashback reveals the answer.',
            standardCode: '7.RL.5',
          },
          {
            question:
              'Which structural choice would best create a sense of urgency?',
            type: 'multiple-choice',
            options: [
              'Long, descriptive paragraphs.',
              'Short chapters ending on cliffhangers.',
              'Footnotes with background information.',
              'A detailed prologue.',
            ],
            correctAnswer: 'Short chapters ending on cliffhangers.',
            standardCode: '7.RL.5',
          },
          {
            question:
              'Explain how a poet\'s use of stanza breaks can signal a shift in mood or idea. Provide an example.',
            type: 'short-answer',
            correctAnswer:
              'A stanza break separates ideas the way a paragraph break does in prose. For example, if the first stanza describes a joyful memory and the second stanza shifts to the present where that joy is gone, the break signals a change in mood from happiness to loss.',
            standardCode: '7.RL.5',
          },
        ],
      },
    },
  },

  // ── Reading Informational (4 modules) ───────────────────────

  {
    slug: 'grade7-ela-analyzing-multiple-sources',
    title: 'Analyzing Multiple Sources',
    description:
      'Evaluate how two or more informational sources address the same topic and where they agree or disagree',
    subject: 'ela',
    grade: 7,
    gradeBand: '6-8',
    topicCluster: 'Reading Informational',
    standardCodes: ['7.RI.7', '7.RI.9'],
    content: {
      intro: {
        title: 'Analyzing Multiple Sources',
        text: 'Informed readers do not rely on a single source. By examining how different authors present the same topic, you can identify gaps, biases, and conflicting information. This module teaches you to read across sources, compare their evidence, and draw your own well-supported conclusions.',
        culturalHook:
          'Imagine hearing two neighbors describe the same storm. One focuses on the damage; the other focuses on how the community came together. Both are true, but each gives you only part of the story.',
      },
      segments: [
        {
          index: 0,
          title: 'Why Multiple Sources Matter',
          text: 'No single source tells the whole story. One article may emphasize statistics while another shares personal interviews. One may reflect a particular bias based on the author\'s background or the publication\'s audience. Reading multiple sources gives you a more complete and balanced understanding of a topic and prepares you to think critically about the information you consume.',
          keyVocabulary: ['bias', 'source', 'balanced', 'critical thinking'],
        },
        {
          index: 1,
          title: 'Comparing Evidence and Claims',
          text: 'When you read two sources on the same topic, compare the central claims each one makes. Do they agree? Do they offer different evidence? Sometimes one source uses data (numbers, studies) while another uses anecdotes (personal stories). Both types of evidence have value, but they appeal to the reader in different ways. Note where evidence overlaps (strengthening a claim) and where it conflicts (raising questions).',
          keyVocabulary: ['claim', 'evidence', 'data', 'anecdote', 'overlap', 'conflict'],
          example:
            'Source A claims school start times should be later, citing sleep studies. Source B agrees but adds survey data from students. The overlapping evidence strengthens the argument.',
        },
        {
          index: 2,
          title: 'Identifying Bias and Purpose',
          text: 'Every source has a purpose: to inform, persuade, entertain, or some combination. The purpose affects what information is included and what is left out. An editorial may omit counterarguments. A press release may highlight only positive data. Ask: Who wrote this? For whom? What might they want me to think or do? Answering these questions helps you spot bias and weigh the reliability of each source.',
          keyVocabulary: ['purpose', 'editorial', 'reliability', 'omit', 'counterargument'],
        },
        {
          index: 3,
          title: 'Synthesizing Information from Multiple Sources',
          text: 'Synthesis means combining ideas from different sources into a new, unified understanding. Rather than summarizing each source separately, synthesis weaves them together: "While Source A focuses on the economic impact, Source B highlights the environmental cost, and together they show the full scope of the issue." Synthesis is a higher-order skill that moves beyond comparison into original thinking.',
          keyVocabulary: ['synthesis', 'integrate', 'unified understanding', 'higher-order thinking'],
        },
      ],
      practice: [
        {
          index: 0,
          question: 'Why should you consult more than one source when researching a topic?',
          type: 'multiple-choice',
          options: [
            'One source always has all the information.',
            'Multiple sources help you see different perspectives, evidence, and potential biases.',
            'Teachers require at least two sources.',
            'Reading more sources is only for college students.',
          ],
          correctAnswer:
            'Multiple sources help you see different perspectives, evidence, and potential biases.',
          hint: 'Think about what you might miss if you read only one account.',
          explanation:
            'Each source has its own perspective and limitations. Reading multiple sources gives a fuller picture and helps you identify bias.',
          standardCode: '7.RI.9',
        },
        {
          index: 1,
          question:
            'Source A uses statistics to argue that recycling reduces waste. Source B uses a personal story about a family that started recycling. How do the two types of evidence differ?',
          type: 'short-answer',
          correctAnswer:
            'Statistics (data) provide measurable proof, while a personal story (anecdote) creates an emotional connection. Together they make a stronger case than either alone.',
          hint: 'One type appeals to logic; the other appeals to emotion.',
          explanation:
            'Data-based evidence shows scale and trends, while anecdotes illustrate individual impact. Effective analysis recognizes the value and limitations of each.',
          standardCode: '7.RI.7',
        },
        {
          index: 2,
          question:
            'An editorial argues for longer school lunches but does not mention any drawbacks. What does this suggest about the source?',
          type: 'multiple-choice',
          options: [
            'It is perfectly balanced.',
            'It may be biased because it omits counterarguments.',
            'Editorials are always unreliable.',
            'The author has no opinion.',
          ],
          correctAnswer:
            'It may be biased because it omits counterarguments.',
          hint: 'If a source only presents one side, what might be missing?',
          explanation:
            'Omitting counterarguments is a sign of potential bias. A balanced source acknowledges and addresses opposing viewpoints.',
          standardCode: '7.RI.9',
        },
        {
          index: 3,
          question:
            'What is the difference between comparing sources and synthesizing them?',
          type: 'short-answer',
          correctAnswer:
            'Comparing means identifying similarities and differences between sources. Synthesizing means combining their ideas into a new, unified understanding.',
          hint: 'One focuses on how sources relate; the other builds something new from them.',
          explanation:
            'Comparison is a step toward synthesis. Synthesis goes further by integrating ideas into an original analysis or conclusion.',
          standardCode: '7.RI.9',
        },
        {
          index: 4,
          question:
            'Two articles discuss the effects of social media on teens. Article A says it improves connection; Article B says it increases anxiety. What should a critical reader do?',
          type: 'multiple-choice',
          options: [
            'Believe whichever article was published first.',
            'Examine the evidence each article uses and consider whether both could be partially true.',
            'Ignore both articles.',
            'Accept the longer article as more accurate.',
          ],
          correctAnswer:
            'Examine the evidence each article uses and consider whether both could be partially true.',
          hint: 'A nuanced topic may have truth on more than one side.',
          explanation:
            'Critical readers evaluate evidence rather than choosing sides. Both articles may capture different aspects of a complex topic.',
          standardCode: '7.RI.9',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Two articles discuss the benefits of community gardens. Article A emphasizes nutrition data; Article B shares stories from gardeners. Write a synthesis sentence that combines both.',
            type: 'short-answer',
            correctAnswer:
              'Community gardens improve neighborhoods both nutritionally, as shown by data on increased vegetable consumption (Article A), and socially, as gardeners report stronger neighborhood bonds (Article B).',
            standardCode: '7.RI.9',
          },
          {
            question:
              'What question should you ask to determine whether a source may be biased?',
            type: 'multiple-choice',
            options: [
              'How long is the article?',
              'Who wrote it and what might their purpose be?',
              'Does it have pictures?',
              'Was it published this year?',
            ],
            correctAnswer: 'Who wrote it and what might their purpose be?',
            standardCode: '7.RI.9',
          },
          {
            question:
              'Explain why overlapping evidence across two sources strengthens a claim.',
            type: 'short-answer',
            correctAnswer:
              'When two independent sources present similar evidence, it increases the credibility of the claim because the finding is corroborated, reducing the chance that one source\'s bias or error skewed the information.',
            standardCode: '7.RI.7',
          },
        ],
      },
    },
  },

  {
    slug: 'grade7-ela-evaluating-arguments',
    title: 'Evaluating Arguments',
    description:
      'Assess whether an author\'s argument is supported by sound reasoning and sufficient, relevant evidence',
    subject: 'ela',
    grade: 7,
    gradeBand: '6-8',
    topicCluster: 'Reading Informational',
    standardCodes: ['7.RI.8'],
    content: {
      intro: {
        title: 'Evaluating Arguments',
        text: 'Not every argument is a good argument. Some rely on weak evidence, faulty reasoning, or emotional manipulation rather than facts. In this module you will learn to break an argument into its parts — claim, reasons, and evidence — and judge whether each part is sound, relevant, and sufficient.',
        culturalHook:
          'Think about a time someone tried to convince you of something. Did they give you solid reasons, or did they just repeat their opinion louder? Evaluating arguments is about telling the difference.',
      },
      segments: [
        {
          index: 0,
          title: 'Parts of an Argument',
          text: 'An argument has three main parts: the claim (the author\'s position), the reasons (logical explanations for why the claim is valid), and the evidence (facts, data, examples, or expert opinions that support the reasons). A strong argument connects these parts clearly. If any link is weak — say, evidence that doesn\'t actually support the reason — the argument falls apart.',
          keyVocabulary: ['claim', 'reason', 'evidence', 'argument', 'support'],
        },
        {
          index: 1,
          title: 'Sound Reasoning',
          text: 'Sound reasoning means the logic connecting claim, reasons, and evidence holds up. Watch for common logical fallacies: hasty generalization (drawing a big conclusion from too few examples), ad hominem (attacking the person instead of the argument), false dilemma (presenting only two options when more exist), and bandwagon (arguing something is right because everyone does it). Spotting fallacies helps you evaluate whether an argument is truly convincing.',
          keyVocabulary: ['logical fallacy', 'hasty generalization', 'ad hominem', 'false dilemma', 'bandwagon'],
          example:
            'Saying "Everyone is switching to electric cars, so they must be the best option" is a bandwagon fallacy. Popularity alone does not prove quality.',
        },
        {
          index: 2,
          title: 'Sufficient and Relevant Evidence',
          text: 'Evidence must be both sufficient (enough to prove the point) and relevant (directly connected to the claim). One anecdote is usually not sufficient to support a broad claim. Data from an unrelated topic is not relevant. When evaluating evidence, ask: Is there enough? Does it directly support the claim? Is it from a credible source? If the answer to any of these is no, the argument is weakened.',
          keyVocabulary: ['sufficient', 'relevant', 'credible', 'anecdote'],
        },
        {
          index: 3,
          title: 'Evaluating an Argument Step by Step',
          text: 'Use this process: (1) Identify the claim. (2) List the reasons the author gives. (3) Examine the evidence for each reason. (4) Check for logical fallacies. (5) Decide whether the argument is convincing and explain why. Writing out these steps ensures your evaluation is thorough and grounded in the text rather than personal opinion.',
          keyVocabulary: ['evaluate', 'thorough', 'process', 'grounded'],
        },
      ],
      practice: [
        {
          index: 0,
          question: 'What are the three main parts of an argument?',
          type: 'multiple-choice',
          options: [
            'Introduction, body, conclusion.',
            'Claim, reasons, evidence.',
            'Topic, details, summary.',
            'Hook, thesis, clincher.',
          ],
          correctAnswer: 'Claim, reasons, evidence.',
          hint: 'Think about what an author is trying to prove and how they support it.',
          explanation:
            'An argument rests on a claim (position), reasons (logical explanations), and evidence (supporting facts or data).',
          standardCode: '7.RI.8',
        },
        {
          index: 1,
          question:
            'A writer argues that homework should be banned and offers one student\'s complaint as evidence. Is this evidence sufficient? Explain.',
          type: 'short-answer',
          correctAnswer:
            'No. One student\'s complaint is a single anecdote, which is not sufficient to support a broad claim. The argument needs more evidence, such as research studies or data from many students.',
          hint: 'Can one person\'s opinion prove a claim about all homework?',
          explanation:
            'Sufficient evidence requires enough support to prove the point. A single anecdote is too limited to back a sweeping claim.',
          standardCode: '7.RI.8',
        },
        {
          index: 2,
          question:
            'Which of the following is an example of an ad hominem fallacy?',
          type: 'multiple-choice',
          options: [
            '"The data shows that exercise reduces stress."',
            '"You can\'t trust her argument because she\'s only a seventh grader."',
            '"Most scientists agree that climate change is real."',
            '"If we don\'t act now, the consequences will be severe."',
          ],
          correctAnswer:
            '"You can\'t trust her argument because she\'s only a seventh grader."',
          hint: 'This fallacy attacks the person rather than the argument.',
          explanation:
            'Ad hominem attacks the person\'s character or identity instead of addressing the logic and evidence of the argument.',
          standardCode: '7.RI.8',
        },
        {
          index: 3,
          question:
            'An article argues that schools should have longer recess because students in one school performed better after the change. Is this evidence relevant? Is it sufficient?',
          type: 'short-answer',
          correctAnswer:
            'It is relevant because it directly relates to the claim. However, it is not sufficient because it comes from only one school and may not apply broadly.',
          hint: 'Ask: Does this evidence connect to the claim? And is one example enough?',
          explanation:
            'Relevance and sufficiency are separate qualities. Evidence can be on-topic but still too limited to prove a broad point.',
          standardCode: '7.RI.8',
        },
        {
          index: 4,
          question:
            'List the five steps for evaluating an argument.',
          type: 'short-answer',
          correctAnswer:
            '1) Identify the claim. 2) List the reasons. 3) Examine the evidence. 4) Check for fallacies. 5) Decide if the argument is convincing and explain why.',
          hint: 'Start by finding the main position, then work through the support and logic.',
          explanation:
            'Following a step-by-step process ensures your evaluation is systematic and thorough.',
          standardCode: '7.RI.8',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'An author claims that reading fiction makes people more empathetic, citing three research studies. Is this argument well-supported? Explain.',
            type: 'short-answer',
            correctAnswer:
              'Yes, it is well-supported because the claim is backed by multiple research studies (sufficient) that directly relate to empathy and reading (relevant and credible).',
            standardCode: '7.RI.8',
          },
          {
            question:
              'Which logical fallacy presents only two choices when more options exist?',
            type: 'multiple-choice',
            options: [
              'Hasty generalization',
              'Bandwagon',
              'False dilemma',
              'Ad hominem',
            ],
            correctAnswer: 'False dilemma',
            standardCode: '7.RI.8',
          },
          {
            question:
              'Explain why evidence must be both relevant and sufficient to make an argument convincing.',
            type: 'short-answer',
            correctAnswer:
              'Relevant evidence ensures the support actually connects to the claim. Sufficient evidence ensures there is enough proof. Without both, the argument either misses the point or lacks the weight needed to be convincing.',
            standardCode: '7.RI.8',
          },
        ],
      },
    },
  },

  {
    slug: 'grade7-ela-central-idea-development',
    title: 'Central Idea Development',
    description:
      'Determine the central idea of an informational text and analyze how it is developed by supporting details',
    subject: 'ela',
    grade: 7,
    gradeBand: '6-8',
    topicCluster: 'Reading Informational',
    standardCodes: ['7.RI.2'],
    content: {
      intro: {
        title: 'Central Idea Development',
        text: 'Every informational text has a central idea — the most important point the author wants you to understand. Unlike a topic (one or two words), the central idea is a full statement that captures the text\'s main message. In this module you will practice identifying the central idea, tracing how supporting details develop it, and writing an objective summary.',
        culturalHook:
          'Think of a news story you heard recently. If you had to explain it in one sentence, that sentence would be close to the central idea.',
      },
      segments: [
        {
          index: 0,
          title: 'Central Idea Versus Topic',
          text: 'The topic of a text might be "ocean pollution." The central idea goes further: "Ocean pollution caused by plastic waste is endangering marine life at an alarming rate." The central idea tells the reader what the author is saying about the topic. To find it, read the full text, pay attention to repeated ideas, and ask: What point is the author making?',
          keyVocabulary: ['central idea', 'topic', 'main point', 'repeated ideas'],
        },
        {
          index: 1,
          title: 'How Supporting Details Develop the Central Idea',
          text: 'Supporting details are the facts, statistics, examples, anecdotes, and expert quotes that build the central idea. Each paragraph in a well-organized text usually contributes one key detail. These details work together like bricks in a wall — individually they are small, but together they construct a solid argument or explanation. When analyzing development, show how each detail connects back to the central idea.',
          keyVocabulary: ['supporting details', 'statistics', 'anecdote', 'expert quote', 'develop'],
          example:
            'If the central idea is that community volunteers improve public parks, supporting details might include the number of volunteer hours donated, before-and-after photos, and quotes from park visitors.',
        },
        {
          index: 2,
          title: 'Writing an Objective Summary',
          text: 'An objective summary captures the central idea and the most important supporting details without including personal opinions. It is shorter than the original text and uses your own words. To write one: (1) Identify the central idea. (2) Select the key details that develop it. (3) Put them together in a logical order. (4) Leave out minor details and your own reactions.',
          keyVocabulary: ['objective', 'summary', 'paraphrase', 'logical order'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'What is the difference between a topic and a central idea?',
          type: 'multiple-choice',
          options: [
            'They are the same thing.',
            'A topic is a word or phrase; a central idea is a full statement about the topic.',
            'A central idea is shorter than a topic.',
            'A topic includes opinions; a central idea does not.',
          ],
          correctAnswer:
            'A topic is a word or phrase; a central idea is a full statement about the topic.',
          hint: 'One is broad; the other makes a specific point.',
          explanation:
            'The topic names the subject. The central idea states what the author is saying about that subject.',
          standardCode: '7.RI.2',
        },
        {
          index: 1,
          question:
            'An article about school gardens includes data on improved test scores, quotes from students, and before-and-after photos of the garden. What central idea might these details support?',
          type: 'short-answer',
          correctAnswer:
            'School gardens benefit students academically and personally, as shown by higher test scores, positive student feedback, and visible transformation of the space.',
          hint: 'What big point do all three details have in common?',
          explanation:
            'When details about academics, student voice, and visible change all point in the same direction, the central idea is that school gardens have broad positive effects.',
          standardCode: '7.RI.2',
        },
        {
          index: 2,
          question:
            'Which of the following should NOT appear in an objective summary?',
          type: 'multiple-choice',
          options: [
            'The central idea of the text.',
            'Key supporting details.',
            'Your personal opinion about the topic.',
            'Paraphrased information from the text.',
          ],
          correctAnswer: 'Your personal opinion about the topic.',
          hint: '"Objective" means without personal bias.',
          explanation:
            'An objective summary presents only the author\'s ideas, not the reader\'s opinions or reactions.',
          standardCode: '7.RI.2',
        },
        {
          index: 3,
          question:
            'How do supporting details "develop" a central idea?',
          type: 'short-answer',
          correctAnswer:
            'Supporting details develop the central idea by providing evidence, examples, and explanations that make the main point clearer, more convincing, and more complete.',
          hint: 'Think about what the text would be like without those details.',
          explanation:
            'Without supporting details, a central idea is just an unsupported claim. Details give it depth, proof, and clarity.',
          standardCode: '7.RI.2',
        },
        {
          index: 4,
          question:
            'An article repeats the idea that "access to clean water is a basic human right" in the introduction, body, and conclusion. What does this repetition suggest?',
          type: 'multiple-choice',
          options: [
            'The author ran out of ideas.',
            'The repeated idea is likely the central idea of the text.',
            'Repetition always weakens an argument.',
            'The article is poorly written.',
          ],
          correctAnswer:
            'The repeated idea is likely the central idea of the text.',
          hint: 'Authors repeat what they consider most important.',
          explanation:
            'Repetition of an idea across sections signals that it is the text\'s central message, reinforced for emphasis.',
          standardCode: '7.RI.2',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Read a short article about endangered species. Identify the central idea and list two supporting details that develop it.',
            type: 'short-answer',
            correctAnswer:
              'Answers will vary. A strong response states the central idea as a complete sentence and lists two specific details (facts, quotes, or examples) that directly support it.',
            standardCode: '7.RI.2',
          },
          {
            question:
              'Which element is most important to include in an objective summary?',
            type: 'multiple-choice',
            options: [
              'Your personal reaction to the text.',
              'The central idea and key supporting details in your own words.',
              'Every detail from the text.',
              'A critique of the author\'s writing style.',
            ],
            correctAnswer:
              'The central idea and key supporting details in your own words.',
            standardCode: '7.RI.2',
          },
          {
            question:
              'Explain why identifying repeated ideas across a text is a useful strategy for determining the central idea.',
            type: 'short-answer',
            correctAnswer:
              'Repeated ideas signal what the author considers most important. If the same message appears in the introduction, body, and conclusion, it is very likely the central idea.',
            standardCode: '7.RI.2',
          },
        ],
      },
    },
  },

  {
    slug: 'grade7-ela-authors-point-of-view',
    title: "Author's Point of View",
    description:
      'Determine an author\'s point of view or purpose and analyze how the author distinguishes his or her position from others',
    subject: 'ela',
    grade: 7,
    gradeBand: '6-8',
    topicCluster: 'Reading Informational',
    standardCodes: ['7.RI.6'],
    content: {
      intro: {
        title: "Author's Point of View",
        text: 'Every author writes from a particular point of view — a set of beliefs, experiences, and goals that shape what they say and how they say it. Understanding point of view helps you see not just what the text says but why the author wrote it. In this module you will learn to identify an author\'s position, analyze the language that reveals it, and compare how that position differs from opposing viewpoints presented in the same text.',
        culturalHook:
          'Imagine two people witnessing the same basketball game — one is a fan of the winning team, the other a fan of the losing team. Their descriptions of the game would differ. Authors are no different.',
      },
      segments: [
        {
          index: 0,
          title: 'Identifying Point of View and Purpose',
          text: 'An author\'s point of view is their attitude or position on a topic. Purpose is why they wrote the text: to inform, persuade, entertain, or explain. Sometimes purpose and point of view overlap — a persuasive essay clearly reveals the author\'s position. Other times, as in a news article, the author tries to be neutral, but subtle word choices may still reveal a lean. Identifying both helps you read more critically.',
          keyVocabulary: ['point of view', 'purpose', 'neutral', 'persuade', 'inform'],
        },
        {
          index: 1,
          title: 'Language That Reveals Point of View',
          text: 'Authors reveal their position through word choice, tone, and emphasis. Loaded language — words with strong positive or negative connotations — is a clear signal. If an author calls a policy "reckless" rather than "bold," the word choice shows disapproval. Similarly, what an author chooses to include or exclude is telling. If an article about a new highway mentions only the benefits and ignores the environmental cost, the author\'s point of view is likely favorable.',
          keyVocabulary: ['loaded language', 'connotation', 'emphasis', 'inclusion', 'exclusion'],
          example:
            'Describing protestors as "passionate advocates" versus "angry mobs" shows two very different points of view through word choice alone.',
        },
        {
          index: 2,
          title: 'Distinguishing the Author\'s Position from Others',
          text: 'Skilled authors acknowledge opposing viewpoints — and then counter them. This move is called a concession and rebuttal. By showing awareness of other perspectives, the author appears fair-minded. However, the way the author frames the opposing view can still reveal bias. Does the author present the counterargument fairly, or does the author weaken it with dismissive language? Analyzing this dynamic deepens your understanding of the text.',
          keyVocabulary: ['concession', 'rebuttal', 'counterargument', 'fair-minded', 'framing'],
        },
        {
          index: 3,
          title: 'Comparing Points of View Across Texts',
          text: 'When two authors write about the same topic from different points of view, comparing them reveals how perspective shapes content. One may highlight economic benefits; the other may stress social costs. By placing the two side by side, you can evaluate whose evidence is stronger, whose reasoning is more sound, and whose position is more balanced. This comparative reading skill is essential for informed citizenship.',
          keyVocabulary: ['comparative reading', 'perspective', 'balanced', 'informed citizenship'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'What is the difference between an author\'s point of view and an author\'s purpose?',
          type: 'multiple-choice',
          options: [
            'They are the same thing.',
            'Point of view is the author\'s position on a topic; purpose is why the author wrote the text.',
            'Purpose is always to entertain; point of view is always neutral.',
            'Point of view is only found in fiction.',
          ],
          correctAnswer:
            'Point of view is the author\'s position on a topic; purpose is why the author wrote the text.',
          hint: 'One is about what the author thinks; the other is about what the author intends to do.',
          explanation:
            'Point of view reflects the author\'s stance. Purpose reflects the goal of the writing — to inform, persuade, entertain, or explain.',
          standardCode: '7.RI.6',
        },
        {
          index: 1,
          question:
            'An author describes a new park as "a waste of taxpayer money." What does this language reveal about the author\'s point of view?',
          type: 'short-answer',
          correctAnswer:
            'The loaded phrase "waste of taxpayer money" reveals a negative point of view — the author opposes the park project.',
          hint: 'Is "waste" a positive or negative word?',
          explanation:
            'Loaded language carries strong connotations. Calling something a "waste" clearly signals disapproval.',
          standardCode: '7.RI.6',
        },
        {
          index: 2,
          question:
            'What is a concession and rebuttal in an argument?',
          type: 'multiple-choice',
          options: [
            'Agreeing with the opposition and ending the argument.',
            'Acknowledging the opposing view and then countering it.',
            'Ignoring all other perspectives.',
            'Restating your claim louder.',
          ],
          correctAnswer:
            'Acknowledging the opposing view and then countering it.',
          hint: 'The author shows awareness of the other side before arguing against it.',
          explanation:
            'A concession admits the opposing view has some merit. A rebuttal then explains why the author\'s position is still stronger.',
          standardCode: '7.RI.6',
        },
        {
          index: 3,
          question:
            'Two editorials discuss a school uniform policy. One calls uniforms "equalizers"; the other calls them "restrictions on expression." How does word choice reveal each author\'s point of view?',
          type: 'short-answer',
          correctAnswer:
            '"Equalizers" has a positive connotation, suggesting uniforms promote fairness. "Restrictions on expression" has a negative connotation, suggesting uniforms limit individuality. Each author\'s word choice reveals their stance.',
          hint: 'Look at the connotation of the key word each author chose.',
          explanation:
            'Connotation is a window into point of view. Positive words signal support; negative words signal opposition.',
          standardCode: '7.RI.6',
        },
        {
          index: 4,
          question:
            'Why is it important to notice what an author excludes from a text?',
          type: 'multiple-choice',
          options: [
            'Exclusions have no effect on the reader.',
            'What is left out can reveal bias by hiding information that might challenge the author\'s position.',
            'Authors never leave anything out.',
            'Exclusions only matter in fiction.',
          ],
          correctAnswer:
            'What is left out can reveal bias by hiding information that might challenge the author\'s position.',
          hint: 'Sometimes what is missing tells you as much as what is present.',
          explanation:
            'Strategic exclusion can make an argument seem stronger than it is by keeping inconvenient evidence from the reader.',
          standardCode: '7.RI.6',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'An article about a new factory mentions jobs created but does not discuss pollution. What does this exclusion suggest about the author\'s point of view?',
            type: 'short-answer',
            correctAnswer:
              'The exclusion suggests the author supports the factory and may be biased, since omitting pollution hides a significant drawback.',
            standardCode: '7.RI.6',
          },
          {
            question:
              'Which technique does an author use when acknowledging the opposing view before arguing against it?',
            type: 'multiple-choice',
            options: [
              'Foreshadowing',
              'Concession and rebuttal',
              'Flashback',
              'Personification',
            ],
            correctAnswer: 'Concession and rebuttal',
            standardCode: '7.RI.6',
          },
          {
            question:
              'Compare two short texts on the same topic and explain how each author\'s word choice reveals a different point of view.',
            type: 'short-answer',
            correctAnswer:
              'Answers will vary. A strong response identifies specific loaded words from each text, explains their connotations, and connects them to each author\'s position on the topic.',
            standardCode: '7.RI.6',
          },
        ],
      },
    },
  },

  // ── Writing (4 modules) ─────────────────────────────────────

  {
    slug: 'grade7-ela-argument-with-counterclaim',
    title: 'Argument with Counterclaim',
    description:
      'Write an argument essay that introduces a clear claim, acknowledges counterclaims, and supports reasoning with relevant evidence',
    subject: 'ela',
    grade: 7,
    gradeBand: '6-8',
    topicCluster: 'Writing',
    standardCodes: ['7.W.1'],
    content: {
      intro: {
        title: 'Argument with Counterclaim',
        text: 'A strong argument does more than state an opinion — it defends a claim with logical reasoning and evidence while also addressing what the other side thinks. Seventh-grade argument writing requires you to acknowledge counterclaims — opposing positions — and explain why your claim is still stronger. This makes your writing more persuasive and shows maturity as a thinker.',
        culturalHook:
          'Think of a time you had to convince a family member of something. You were more convincing when you understood their concerns and addressed them, right? That is exactly what a counterclaim does in writing.',
      },
      segments: [
        {
          index: 0,
          title: 'Crafting a Clear Claim',
          text: 'A claim is a debatable statement — not a fact and not just an opinion. "Ice cream is delicious" is a preference, not a claim. "Schools should offer healthier lunch options" is a claim because reasonable people could disagree. Your claim should be specific enough to argue in a short essay. State it clearly in your introduction so the reader knows exactly what you will defend.',
          keyVocabulary: ['claim', 'debatable', 'specific', 'introduction'],
        },
        {
          index: 1,
          title: 'Supporting with Reasons and Evidence',
          text: 'Each body paragraph should present one reason that supports your claim, backed by evidence. Evidence can include facts, statistics, expert opinions, and real-world examples. Organize your reasons from least to most convincing so your essay builds in strength. Use transition words — "furthermore," "in addition," "most importantly" — to guide the reader through your logic.',
          keyVocabulary: ['reason', 'evidence', 'transition words', 'organize', 'logic'],
          example:
            'Claim: Schools should start later. Reason 1: Teens need more sleep (evidence: sleep study data). Reason 2: Later starts improve attendance (evidence: district report). Reason 3: Academic performance rises (evidence: national research).',
        },
        {
          index: 2,
          title: 'Acknowledging and Rebutting Counterclaims',
          text: 'A counterclaim is the opposing side\'s best argument. Acknowledging it shows you understand the issue fully. After stating the counterclaim fairly, explain why it is weaker than your claim. This is called a rebuttal. Use phrases like "While some argue that…, this view overlooks…" or "Although opponents claim…, the evidence shows…" Addressing counterclaims makes your argument harder to dismiss.',
          keyVocabulary: ['counterclaim', 'rebuttal', 'acknowledge', 'opposing'],
        },
        {
          index: 3,
          title: 'Writing a Strong Conclusion',
          text: 'Your conclusion should do more than restate your claim. It should synthesize your argument by briefly connecting your strongest evidence to your claim and leaving the reader with something to think about — a call to action, a question, or a broader implication. Avoid introducing new evidence in the conclusion; instead, reinforce what you have already proven.',
          keyVocabulary: ['conclusion', 'synthesize', 'call to action', 'implication'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'Which of the following is a debatable claim?',
          type: 'multiple-choice',
          options: [
            'Water freezes at 0 degrees Celsius.',
            'Chocolate is the best flavor of ice cream.',
            'Schools should require students to learn a second language.',
            'The Earth orbits the Sun.',
          ],
          correctAnswer:
            'Schools should require students to learn a second language.',
          hint: 'A claim must be arguable — not a fact or a pure preference.',
          explanation:
            'Facts are not debatable, and pure preferences cannot be proven. "Schools should require a second language" is debatable because people can reasonably disagree.',
          standardCode: '7.W.1',
        },
        {
          index: 1,
          question:
            'Why should you organize reasons from least to most convincing?',
          type: 'short-answer',
          correctAnswer:
            'This structure builds momentum so the essay ends on its strongest point, leaving the most powerful impression on the reader.',
          hint: 'Think about what the reader remembers most — the beginning or the end.',
          explanation:
            'Ending with the strongest reason creates a climactic effect that makes the overall argument more persuasive.',
          standardCode: '7.W.1',
        },
        {
          index: 2,
          question:
            'What is a counterclaim?',
          type: 'multiple-choice',
          options: [
            'A claim that supports your argument.',
            'The opposing side\'s best argument against your claim.',
            'A summary of your essay.',
            'A type of evidence.',
          ],
          correctAnswer:
            'The opposing side\'s best argument against your claim.',
          hint: 'It represents what someone who disagrees with you would say.',
          explanation:
            'A counterclaim is the strongest point the opposition can make. Addressing it shows thorough understanding of the issue.',
          standardCode: '7.W.1',
        },
        {
          index: 3,
          question:
            'Write a sentence that acknowledges a counterclaim and provides a rebuttal about school start times.',
          type: 'short-answer',
          correctAnswer:
            'Example: "While some argue that later start times would shorten the school day, research shows that even a 30-minute shift improves focus without reducing instructional time."',
          hint: 'Use the pattern: "While some argue…, [rebuttal]."',
          explanation:
            'Effective rebuttals acknowledge the opposing view and then present evidence or reasoning that counters it.',
          standardCode: '7.W.1',
        },
        {
          index: 4,
          question:
            'What should a strong conclusion do?',
          type: 'multiple-choice',
          options: [
            'Introduce a brand-new argument.',
            'Simply repeat the introduction word for word.',
            'Synthesize the argument and leave the reader with something to think about.',
            'List all the evidence again in bullet points.',
          ],
          correctAnswer:
            'Synthesize the argument and leave the reader with something to think about.',
          hint: 'A conclusion wraps up — it does not start over or copy.',
          explanation:
            'A strong conclusion ties together the key points and ends with a call to action, question, or broader implication that resonates with the reader.',
          standardCode: '7.W.1',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Write a claim and one counterclaim for the topic: "Should students be allowed to use phones in class?"',
            type: 'short-answer',
            correctAnswer:
              'Claim: Students should be allowed to use phones for educational purposes during class. Counterclaim: Opponents argue that phones are distracting and reduce focus on lessons.',
            standardCode: '7.W.1',
          },
          {
            question:
              'Which transition phrase best introduces a counterclaim?',
            type: 'multiple-choice',
            options: [
              '"For example,"',
              '"In conclusion,"',
              '"While some may argue that,"',
              '"First of all,"',
            ],
            correctAnswer: '"While some may argue that,"',
            standardCode: '7.W.1',
          },
          {
            question:
              'Explain why addressing a counterclaim strengthens rather than weakens your argument.',
            type: 'short-answer',
            correctAnswer:
              'Addressing a counterclaim shows you understand the full issue. By presenting the opposing view and then rebutting it with evidence, you demonstrate that your position holds up even when challenged, making your argument more credible.',
            standardCode: '7.W.1',
          },
        ],
      },
    },
  },

  {
    slug: 'grade7-ela-informational-essay',
    title: 'Informational Essay',
    description:
      'Write an informational essay that examines a topic, conveys ideas through organization, and uses precise language',
    subject: 'ela',
    grade: 7,
    gradeBand: '6-8',
    topicCluster: 'Writing',
    standardCodes: ['7.W.2'],
    content: {
      intro: {
        title: 'Informational Essay',
        text: 'An informational essay teaches the reader about a topic. Unlike an argument, it does not take a side — its job is to inform clearly and thoroughly. Strong informational writing organizes ideas logically, uses precise vocabulary, and includes facts, definitions, details, and examples that help the reader understand the subject.',
        culturalHook:
          'Think about how a park ranger explains an ecosystem or how a coach breaks down the rules of a game. They are not arguing — they are teaching. That is what informational writing does.',
      },
      segments: [
        {
          index: 0,
          title: 'Choosing and Narrowing a Topic',
          text: 'A broad topic like "the ocean" is too big for one essay. Narrowing it to "how coral reefs support marine ecosystems" gives you a focused, manageable subject. A good informational topic is specific enough to cover in depth but broad enough to find sufficient information. Once you narrow your topic, write a thesis statement that tells the reader what the essay will explain.',
          keyVocabulary: ['narrow', 'thesis statement', 'focused', 'manageable'],
        },
        {
          index: 1,
          title: 'Organizing Ideas',
          text: 'Clear organization is essential. Common structures include: cause and effect, compare and contrast, chronological order, and problem and solution. Choose the structure that best fits your topic. Use headings, topic sentences, and transitions to guide the reader from one section to the next. Each paragraph should focus on one main idea that connects back to the thesis.',
          keyVocabulary: ['organization', 'cause and effect', 'chronological', 'topic sentence', 'transitions'],
          example:
            'An essay about the water cycle might use chronological order: evaporation, condensation, precipitation, collection — each stage in its own paragraph.',
        },
        {
          index: 2,
          title: 'Using Precise Language and Domain-Specific Vocabulary',
          text: 'Informational writing demands precision. Instead of "a lot of water," write "approximately 71 percent of Earth\'s surface is covered by water." Use domain-specific vocabulary — the technical terms of the subject — and define them for the reader. Precise language shows expertise and builds the reader\'s trust in your information.',
          keyVocabulary: ['precise language', 'domain-specific vocabulary', 'define', 'expertise'],
        },
        {
          index: 3,
          title: 'Integrating Facts, Details, and Examples',
          text: 'Every claim in an informational essay needs support. Integrate facts (verifiable pieces of information), concrete details (specific descriptions), and examples (real-world illustrations) smoothly into your sentences. Avoid dropping in facts without context — always explain how each piece of evidence connects to the paragraph\'s main idea.',
          keyVocabulary: ['facts', 'concrete details', 'integrate', 'context'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'Which of the following is the best narrowed topic for an informational essay?',
          type: 'multiple-choice',
          options: [
            'Animals',
            'How honeybees communicate through dance',
            'Science',
            'Things in nature',
          ],
          correctAnswer: 'How honeybees communicate through dance',
          hint: 'The best topic is specific enough to cover in depth.',
          explanation:
            '"Animals," "Science," and "Things in nature" are too broad. "How honeybees communicate through dance" is specific and focused.',
          standardCode: '7.W.2',
        },
        {
          index: 1,
          question:
            'What organizational structure would work best for an essay explaining how a thunderstorm forms?',
          type: 'multiple-choice',
          options: [
            'Compare and contrast',
            'Chronological / sequential order',
            'Problem and solution',
            'Persuasive',
          ],
          correctAnswer: 'Chronological / sequential order',
          hint: 'A process that happens in stages fits a time-based structure.',
          explanation:
            'Thunderstorm formation follows a sequence of stages, making chronological order the natural organizational choice.',
          standardCode: '7.W.2',
        },
        {
          index: 2,
          question:
            'Rewrite this vague sentence with precise language: "Lots of people use the internet."',
          type: 'short-answer',
          correctAnswer:
            'Example: "According to recent data, approximately 5.3 billion people worldwide use the internet."',
          hint: 'Replace "lots of" with a specific number or statistic.',
          explanation:
            'Precise language replaces vague words with specific data, making the writing more informative and credible.',
          standardCode: '7.W.2',
        },
        {
          index: 3,
          question:
            'Why is it important to define domain-specific vocabulary in an informational essay?',
          type: 'short-answer',
          correctAnswer:
            'Not all readers will know the technical terms. Defining them ensures the essay is accessible and educational for a broad audience.',
          hint: 'Think about readers who are learning about the topic for the first time.',
          explanation:
            'Domain-specific vocabulary shows expertise, but definitions ensure the essay fulfills its purpose of informing all readers.',
          standardCode: '7.W.2',
        },
        {
          index: 4,
          question:
            'What is wrong with this sentence in an informational essay: "The Amazon rainforest is huge. (National Geographic)"?',
          type: 'multiple-choice',
          options: [
            'It is too long.',
            'It drops a fact without context or integration into a sentence.',
            'It uses a reliable source.',
            'Nothing is wrong.',
          ],
          correctAnswer:
            'It drops a fact without context or integration into a sentence.',
          hint: 'Facts should be woven into sentences, not pasted in.',
          explanation:
            'Good informational writing integrates evidence smoothly: "According to National Geographic, the Amazon rainforest spans approximately 5.5 million square kilometers."',
          standardCode: '7.W.2',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Write a thesis statement for an informational essay about the benefits of reading.',
            type: 'short-answer',
            correctAnswer:
              'Example: "Reading regularly improves vocabulary, strengthens critical thinking, and reduces stress, making it one of the most beneficial daily habits."',
            standardCode: '7.W.2',
          },
          {
            question:
              'Which sentence uses domain-specific vocabulary correctly?',
            type: 'multiple-choice',
            options: [
              '"The thing in the sky makes weather happen."',
              '"The jet stream, a narrow band of strong wind in the upper atmosphere, influences weather patterns across the continent."',
              '"Weather is complicated and has many parts."',
              '"It rains because of clouds."',
            ],
            correctAnswer:
              '"The jet stream, a narrow band of strong wind in the upper atmosphere, influences weather patterns across the continent."',
            standardCode: '7.W.2',
          },
          {
            question:
              'Explain why each paragraph in an informational essay should have a clear topic sentence.',
            type: 'short-answer',
            correctAnswer:
              'A topic sentence tells the reader what the paragraph will be about, keeping the essay organized and ensuring each paragraph contributes a distinct idea to the thesis.',
            standardCode: '7.W.2',
          },
        ],
      },
    },
  },

  {
    slug: 'grade7-ela-research',
    title: 'Research',
    description:
      'Conduct short research projects to answer a question, drawing on several sources and generating additional focused questions',
    subject: 'ela',
    grade: 7,
    gradeBand: '6-8',
    topicCluster: 'Writing',
    standardCodes: ['7.W.7', '7.W.8'],
    content: {
      intro: {
        title: 'Research',
        text: 'Research is the process of asking a question, finding reliable information, and synthesizing what you learn into your own writing. In seventh grade, you will conduct short research projects that draw on multiple sources, evaluate credibility, and avoid plagiarism by paraphrasing and citing. Along the way you will generate new questions that deepen your investigation.',
        culturalHook:
          'Research is like being a detective — you start with a question, gather clues from different sources, and piece together the answer. The best detectives check their clues twice.',
      },
      segments: [
        {
          index: 0,
          title: 'Developing a Research Question',
          text: 'A good research question is open-ended, specific, and researchable. "What causes tornadoes?" is better than "Do tornadoes happen?" because it requires explanation, not just a yes or no. As you read, you may discover sub-questions that focus your research even further — such as "How do tornadoes form differently in Tornado Alley versus the Southeast?" These focused questions drive deeper investigation.',
          keyVocabulary: ['research question', 'open-ended', 'sub-question', 'focused'],
        },
        {
          index: 1,
          title: 'Finding and Evaluating Sources',
          text: 'Not all sources are equal. Evaluate sources using the CRAAP test: Currency (Is it up to date?), Relevance (Does it address your question?), Authority (Who wrote it and what are their credentials?), Accuracy (Is the information supported by evidence?), and Purpose (Why was it written?). Use a mix of source types — books, articles, reputable websites, and databases — to build a well-rounded understanding.',
          keyVocabulary: ['CRAAP test', 'currency', 'authority', 'accuracy', 'credibility'],
          example:
            'A government health website (.gov) is generally more authoritative on medical topics than a personal blog.',
        },
        {
          index: 2,
          title: 'Taking Notes and Avoiding Plagiarism',
          text: 'When you take notes, paraphrase — put the information in your own words. If you copy a phrase exactly, use quotation marks and note the source. Plagiarism is presenting someone else\'s words or ideas as your own, and it is a serious academic offense. Keep a running list of your sources so you can cite them properly. Even paraphrased ideas need attribution if the idea itself is not common knowledge.',
          keyVocabulary: ['paraphrase', 'plagiarism', 'quotation', 'cite', 'attribution'],
        },
        {
          index: 3,
          title: 'Synthesizing and Presenting Findings',
          text: 'Synthesis means combining information from multiple sources into a coherent response to your research question. Organize your findings around key themes or sub-questions rather than summarizing one source at a time. Include a bibliography or works-cited list. Your final product — whether an essay, presentation, or report — should clearly answer your research question with evidence drawn from multiple credible sources.',
          keyVocabulary: ['synthesis', 'bibliography', 'works-cited', 'coherent', 'findings'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'Which is the best research question?',
          type: 'multiple-choice',
          options: [
            'Is water important?',
            'What are the primary causes of water pollution in the Great Lakes region?',
            'Water.',
            'Do fish live in water?',
          ],
          correctAnswer:
            'What are the primary causes of water pollution in the Great Lakes region?',
          hint: 'The best question is open-ended and specific.',
          explanation:
            'This question is specific (Great Lakes), open-ended (requires explanation), and researchable (multiple sources can address it).',
          standardCode: '7.W.7',
        },
        {
          index: 1,
          question:
            'What does the "A" in the CRAAP test stand for, and why does it matter?',
          type: 'short-answer',
          correctAnswer:
            'Authority — it asks who wrote the source and what their credentials are. It matters because information from a qualified expert is more trustworthy than information from an unknown or unqualified author.',
          hint: 'Think about who the author is and why that matters.',
          explanation:
            'Authority helps you judge whether the source\'s creator has the expertise to write accurately on the topic.',
          standardCode: '7.W.8',
        },
        {
          index: 2,
          question:
            'Paraphrase this sentence: "Coral reefs support approximately 25 percent of all marine species despite covering less than 1 percent of the ocean floor."',
          type: 'short-answer',
          correctAnswer:
            'Example: "Even though coral reefs occupy a tiny fraction of the ocean\'s surface — under 1 percent — they are home to about a quarter of all marine life."',
          hint: 'Restate the idea in your own words without changing the meaning.',
          explanation:
            'Effective paraphrasing changes both the structure and the wording while preserving the original meaning.',
          standardCode: '7.W.8',
        },
        {
          index: 3,
          question:
            'Why should you organize research findings by theme rather than by source?',
          type: 'multiple-choice',
          options: [
            'It is easier to copy from one source at a time.',
            'Organizing by theme shows synthesis and creates a more coherent response to the research question.',
            'Themes are less important than sources.',
            'Teachers do not care about organization.',
          ],
          correctAnswer:
            'Organizing by theme shows synthesis and creates a more coherent response to the research question.',
          hint: 'Synthesis combines ideas; source-by-source summaries do not.',
          explanation:
            'Theme-based organization weaves information from multiple sources together, demonstrating synthesis rather than simple summary.',
          standardCode: '7.W.7',
        },
        {
          index: 4,
          question:
            'What is plagiarism, and how can you avoid it?',
          type: 'short-answer',
          correctAnswer:
            'Plagiarism is presenting someone else\'s words or ideas as your own. Avoid it by paraphrasing, using quotation marks for direct quotes, and citing all sources.',
          hint: 'Think about giving credit where credit is due.',
          explanation:
            'Proper paraphrasing, quoting, and citation ensure you give credit to original authors and maintain academic integrity.',
          standardCode: '7.W.8',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'You are researching the effects of deforestation. Write one focused research question and one sub-question that could guide your investigation.',
            type: 'short-answer',
            correctAnswer:
              'Research question: "How does deforestation in the Amazon affect global carbon dioxide levels?" Sub-question: "What role do tropical trees play in absorbing carbon dioxide?"',
            standardCode: '7.W.7',
          },
          {
            question:
              'Which source would be most credible for a research project on nutrition?',
            type: 'multiple-choice',
            options: [
              'A social media post by a celebrity.',
              'A peer-reviewed study published in a medical journal.',
              'A blog post by an anonymous writer.',
              'A comment on a news article.',
            ],
            correctAnswer:
              'A peer-reviewed study published in a medical journal.',
            standardCode: '7.W.8',
          },
          {
            question:
              'Explain the difference between summarizing a source and synthesizing multiple sources.',
            type: 'short-answer',
            correctAnswer:
              'Summarizing restates the main ideas of one source. Synthesizing combines ideas from multiple sources into a new, unified understanding that addresses the research question.',
            standardCode: '7.W.7',
          },
        ],
      },
    },
  },

  {
    slug: 'grade7-ela-narrative-with-dialogue',
    title: 'Narrative with Dialogue',
    description:
      'Write a narrative that uses dialogue, pacing, and description to develop experiences, events, and characters',
    subject: 'ela',
    grade: 7,
    gradeBand: '6-8',
    topicCluster: 'Writing',
    standardCodes: ['7.W.3'],
    content: {
      intro: {
        title: 'Narrative with Dialogue',
        text: 'Narrative writing tells a story — real or imagined — and brings it to life through vivid details, well-drawn characters, and purposeful structure. Dialogue is one of the most powerful tools in a narrator\'s toolkit. It reveals character, advances the plot, and creates a sense of authenticity. In this module you will learn to craft dialogue that sounds natural and serves a purpose in your story.',
        culturalHook:
          'Listen to the way people in your community actually talk — the rhythms, the slang, the pauses. Great dialogue on the page captures that real-life music.',
      },
      segments: [
        {
          index: 0,
          title: 'Elements of Narrative Writing',
          text: 'Every narrative needs characters, a setting, a conflict, and a resolution. Characters are the people (or beings) in the story. Setting is where and when the story takes place. Conflict is the problem the characters face. Resolution is how that problem is solved. These elements work together to create a meaningful experience for the reader.',
          keyVocabulary: ['character', 'setting', 'conflict', 'resolution', 'narrative'],
        },
        {
          index: 1,
          title: 'Writing Effective Dialogue',
          text: 'Good dialogue does at least one of three things: reveals character, advances the plot, or provides information. Avoid dialogue that simply fills space ("Hi, how are you?" "I\'m fine."). Instead, make every line count. Use dialogue tags — "she said," "he whispered" — sparingly and vary them when a different tag adds meaning. Remember the punctuation rules: quotation marks around the spoken words, commas before tags, and new paragraphs for each new speaker.',
          keyVocabulary: ['dialogue', 'dialogue tag', 'quotation marks', 'advance the plot'],
          example:
            '"You can\'t keep running from this," Mom said, setting down her coffee. "I know," Jada muttered, but her eyes were already on the door.',
        },
        {
          index: 2,
          title: 'Pacing: Speeding Up and Slowing Down',
          text: 'Pacing controls the rhythm of your story. Speed up during exciting moments by using short sentences, quick dialogue, and action verbs. Slow down during important emotional moments by adding description, internal thoughts, and sensory details. Balancing fast and slow sections keeps the reader engaged and gives the story a natural rise and fall.',
          keyVocabulary: ['pacing', 'sensory details', 'internal thoughts', 'rhythm'],
        },
        {
          index: 3,
          title: 'Using Description to Set the Scene',
          text: 'Description creates the world of your story. Use sensory details — what characters see, hear, smell, taste, and touch — to make scenes come alive. Be selective: include details that matter to the mood, theme, or character. A description of a creaking floorboard in a dark hallway builds tension. A description of a warm kitchen filled with the smell of bread builds comfort. Every detail should earn its place.',
          keyVocabulary: ['sensory details', 'mood', 'selective', 'setting', 'vivid'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'What three things can effective dialogue do in a narrative?',
          type: 'short-answer',
          correctAnswer:
            'Effective dialogue can reveal character, advance the plot, and provide important information.',
          hint: 'Think about why an author includes a line of dialogue.',
          explanation:
            'Each line of dialogue should serve a purpose. If it doesn\'t reveal character, move the story forward, or share key information, it may be unnecessary.',
          standardCode: '7.W.3',
        },
        {
          index: 1,
          question:
            'Which line of dialogue best reveals character?',
          type: 'multiple-choice',
          options: [
            '"Hello," she said.',
            '"I don\'t need anyone\'s help — I never have," he snapped, crossing his arms.',
            '"The weather is nice today."',
            '"Okay," she replied.',
          ],
          correctAnswer:
            '"I don\'t need anyone\'s help — I never have," he snapped, crossing his arms.',
          hint: 'Which line tells you the most about what kind of person the character is?',
          explanation:
            'This line reveals the character\'s pride, stubbornness, and possibly insecurity. The dialogue tag "snapped" and the action "crossing his arms" add further characterization.',
          standardCode: '7.W.3',
        },
        {
          index: 2,
          question:
            'How would you speed up the pacing during an action scene?',
          type: 'multiple-choice',
          options: [
            'Add long paragraphs of description.',
            'Use short sentences, quick dialogue, and strong action verbs.',
            'Remove all dialogue.',
            'Use only internal thoughts.',
          ],
          correctAnswer:
            'Use short sentences, quick dialogue, and strong action verbs.',
          hint: 'Fast moments need fast writing.',
          explanation:
            'Short sentences and action verbs create a breathless pace that mirrors the urgency of the scene.',
          standardCode: '7.W.3',
        },
        {
          index: 3,
          question:
            'Write a two-sentence description of a setting that creates a mood of tension. Include at least two sensory details.',
          type: 'short-answer',
          correctAnswer:
            'Example: "The hallway stretched ahead, lit only by a flickering bulb that buzzed like an angry wasp. The air tasted stale and metallic, and somewhere behind a closed door, a floorboard groaned."',
          hint: 'Use sight, sound, smell, taste, or touch to build an uneasy atmosphere.',
          explanation:
            'Sensory details like flickering light (sight), buzzing (sound), and stale air (taste/smell) work together to create tension.',
          standardCode: '7.W.3',
        },
        {
          index: 4,
          question:
            'Fix the punctuation in this dialogue: She said I am not going',
          type: 'short-answer',
          correctAnswer:
            'She said, "I am not going."',
          hint: 'Add a comma after the tag and place quotation marks around the spoken words.',
          explanation:
            'Dialogue requires quotation marks around spoken words, a comma between the tag and the dialogue, and end punctuation inside the closing quotation mark.',
          standardCode: '7.W.3',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Write a short exchange of dialogue (3-4 lines) between two characters that reveals a conflict between them. Use correct punctuation.',
            type: 'short-answer',
            correctAnswer:
              'Answers will vary. A strong response includes quotation marks, proper comma placement, a new paragraph for each speaker, and dialogue that clearly shows disagreement or tension.',
            standardCode: '7.W.3',
          },
          {
            question:
              'Which technique slows pacing to emphasize an emotional moment?',
            type: 'multiple-choice',
            options: [
              'Short, punchy sentences.',
              'Removing all description.',
              'Adding sensory details, internal thoughts, and longer descriptions.',
              'Using only dialogue.',
            ],
            correctAnswer:
              'Adding sensory details, internal thoughts, and longer descriptions.',
            standardCode: '7.W.3',
          },
          {
            question:
              'Explain why every descriptive detail in a narrative should "earn its place."',
            type: 'short-answer',
            correctAnswer:
              'Details should contribute to mood, theme, or character development. Including irrelevant details clutters the writing and distracts the reader from what matters in the story.',
            standardCode: '7.W.3',
          },
        ],
      },
    },
  },

  // ── Language (3 modules) ────────────────────────────────────

  {
    slug: 'grade7-ela-vocabulary-acquisition',
    title: 'Vocabulary Acquisition',
    description:
      'Use context clues, Greek and Latin affixes, and reference materials to determine and clarify word meanings',
    subject: 'ela',
    grade: 7,
    gradeBand: '6-8',
    topicCluster: 'Language',
    standardCodes: ['7.L.4', '7.L.6'],
    content: {
      intro: {
        title: 'Vocabulary Acquisition',
        text: 'Building a strong vocabulary is one of the most powerful things you can do as a reader, writer, and thinker. In seventh grade you will sharpen three key strategies: using context clues to infer meaning, breaking words apart using Greek and Latin roots and affixes, and verifying your understanding with reference materials such as dictionaries and thesauruses.',
        culturalHook:
          'Every community has words and expressions that outsiders might not understand. Learning vocabulary strategies is like getting a universal decoder ring — it helps you unlock meaning no matter where you encounter an unfamiliar word.',
      },
      segments: [
        {
          index: 0,
          title: 'Context Clues',
          text: 'Context clues are hints within the surrounding text that help you figure out an unfamiliar word. Common types include definition clues (the meaning is stated directly), synonym clues (a similar word appears nearby), antonym clues (an opposite word provides contrast), and example clues (examples illustrate the meaning). When you encounter an unknown word, read the full sentence — and sometimes the sentences before and after — to gather clues.',
          keyVocabulary: ['context clue', 'synonym', 'antonym', 'definition clue', 'infer'],
        },
        {
          index: 1,
          title: 'Greek and Latin Roots and Affixes',
          text: 'Many English words are built from Greek and Latin parts. A root is the core meaning of a word. A prefix is added to the beginning, and a suffix is added to the end. Knowing common roots, prefixes, and suffixes lets you decode unfamiliar words on the fly. For example, "bene-" means good (benefit, benevolent), "mal-" means bad (malfunction, malice), and "-ology" means the study of (biology, psychology).',
          keyVocabulary: ['root', 'prefix', 'suffix', 'affix', 'decode'],
          example:
            'The word "incredible" breaks down as "in-" (not) + "cred" (believe) + "-ible" (able to be) = not able to be believed.',
        },
        {
          index: 2,
          title: 'Using Reference Materials',
          text: 'Context clues and word parts get you close, but reference materials confirm meaning. A dictionary provides definitions, pronunciation, part of speech, and etymology (word origin). A thesaurus provides synonyms and antonyms, helping you choose the most precise word for your writing. Online tools can be fast, but make sure you use reputable sources. Always check which definition fits the context in which you found the word.',
          keyVocabulary: ['dictionary', 'thesaurus', 'etymology', 'definition', 'pronunciation'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'In the sentence "The arid landscape stretched for miles, with cracked earth and no sign of water," what does "arid" most likely mean?',
          type: 'multiple-choice',
          options: [
            'Wet and tropical',
            'Extremely dry',
            'Covered in snow',
            'Full of flowers',
          ],
          correctAnswer: 'Extremely dry',
          hint: 'Look at the clues: "cracked earth" and "no sign of water."',
          explanation:
            'The context clues — cracked earth and absence of water — point to "arid" meaning extremely dry.',
          standardCode: '7.L.4',
        },
        {
          index: 1,
          question:
            'Break the word "autobiography" into its Greek parts and explain its meaning.',
          type: 'short-answer',
          correctAnswer:
            '"Auto-" means self, "bio-" means life, "-graphy" means writing. An autobiography is a written account of one\'s own life.',
          hint: 'There are three Greek parts in this word.',
          explanation:
            'Knowing that "auto" = self, "bio" = life, and "graph" = write allows you to decode "autobiography" as self-life-writing.',
          standardCode: '7.L.4',
        },
        {
          index: 2,
          question:
            'What type of context clue is used here: "The teacher was ubiquitous — she seemed to be everywhere at once"?',
          type: 'multiple-choice',
          options: [
            'Antonym clue',
            'Example clue',
            'Definition clue',
            'No clue is given',
          ],
          correctAnswer: 'Definition clue',
          hint: 'The meaning is stated directly after the dash.',
          explanation:
            'The phrase after the dash defines "ubiquitous" as being everywhere at once. This is a definition clue.',
          standardCode: '7.L.4',
        },
        {
          index: 3,
          question:
            'Why should you check which dictionary definition fits the context of the word?',
          type: 'short-answer',
          correctAnswer:
            'Many words have multiple definitions. Choosing the wrong one can lead to misunderstanding the text. The context in which the word appears determines which definition applies.',
          hint: 'Think about a word like "bark" — it has very different meanings depending on context.',
          explanation:
            'Words are often polysemous (having multiple meanings). Matching the correct definition to the context ensures accurate comprehension.',
          standardCode: '7.L.4',
        },
        {
          index: 4,
          question:
            'The prefix "mis-" means "wrongly." What does "misconception" mean?',
          type: 'multiple-choice',
          options: [
            'A correct understanding',
            'A wrong or mistaken idea',
            'A type of experiment',
            'A formal greeting',
          ],
          correctAnswer: 'A wrong or mistaken idea',
          hint: 'Apply the prefix meaning to the root "conception" (an idea or understanding).',
          explanation:
            '"Mis-" (wrongly) + "conception" (an idea) = a wrong idea or mistaken belief.',
          standardCode: '7.L.4',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Use context clues to determine the meaning of "benevolent" in this sentence: "The benevolent neighbor brought meals to every family affected by the storm."',
            type: 'short-answer',
            correctAnswer:
              '"Benevolent" means kind and generous. The context — bringing meals to families in need — shows kindness and goodwill.',
            standardCode: '7.L.4',
          },
          {
            question:
              'Which word contains a Latin root meaning "to carry"?',
            type: 'multiple-choice',
            options: [
              'Transport',
              'Telephone',
              'Bicycle',
              'Microscope',
            ],
            correctAnswer: 'Transport',
            standardCode: '7.L.4',
          },
          {
            question:
              'Explain a strategy for figuring out an unfamiliar word when context clues are not enough.',
            type: 'short-answer',
            correctAnswer:
              'Break the word into recognizable roots, prefixes, and suffixes. If that is not enough, use a dictionary to look up the word and find the definition that fits the context.',
            standardCode: '7.L.4',
          },
        ],
      },
    },
  },

  {
    slug: 'grade7-ela-syntax',
    title: 'Syntax',
    description:
      'Use phrases and clauses to convey specific meanings and add variety and interest to writing',
    subject: 'ela',
    grade: 7,
    gradeBand: '6-8',
    topicCluster: 'Language',
    standardCodes: ['7.L.1'],
    content: {
      intro: {
        title: 'Syntax',
        text: 'Syntax is the way words and phrases are arranged to create sentences. Strong writers vary their syntax — mixing short and long sentences, starting with different structures, and combining ideas with phrases and clauses. This variety keeps writing interesting and helps convey meaning precisely. In this module you will learn to use phrases, independent and dependent clauses, and sentence combining to strengthen your writing.',
        culturalHook:
          'Think of syntax like a music playlist. If every song had the same tempo, you would get bored fast. Mixing up your sentence structures is like mixing tempos — it keeps the audience engaged.',
      },
      segments: [
        {
          index: 0,
          title: 'Phrases and Clauses',
          text: 'A phrase is a group of words that adds detail but lacks a subject-verb pair: "running through the rain," "with great enthusiasm." A clause has a subject and a verb. An independent clause can stand alone as a sentence: "She finished the race." A dependent (subordinate) clause cannot stand alone: "Although she was exhausted." Knowing the difference helps you build complex sentences that express layered ideas.',
          keyVocabulary: ['phrase', 'clause', 'independent clause', 'dependent clause', 'subordinate'],
        },
        {
          index: 1,
          title: 'Types of Sentences',
          text: 'There are four sentence types: simple (one independent clause), compound (two independent clauses joined by a conjunction or semicolon), complex (one independent and one or more dependent clauses), and compound-complex (at least two independent clauses and one dependent clause). Using a variety of sentence types makes your writing more dynamic and allows you to show relationships between ideas such as cause and effect, contrast, and condition.',
          keyVocabulary: ['simple', 'compound', 'complex', 'compound-complex', 'conjunction'],
          example:
            'Simple: "The dog barked." Compound: "The dog barked, and the cat hid." Complex: "Because the dog barked, the cat hid." Compound-complex: "Because the dog barked, the cat hid, and the bird flew away."',
        },
        {
          index: 2,
          title: 'Sentence Combining',
          text: 'Short, choppy sentences can be combined to create smoother writing. Use coordinating conjunctions (for, and, nor, but, or, yet, so — FANBOYS) to join equal ideas. Use subordinating conjunctions (because, although, when, if, since) to show that one idea depends on another. Use relative pronouns (who, which, that) to embed extra information. Combining sentences reduces repetition and shows how ideas connect.',
          keyVocabulary: ['coordinating conjunction', 'subordinating conjunction', 'relative pronoun', 'FANBOYS'],
        },
        {
          index: 3,
          title: 'Varying Sentence Openings',
          text: 'Starting every sentence with "I" or "The" becomes monotonous. Vary your openings by beginning with an adverb ("Quickly, she turned"), a prepositional phrase ("In the distance, a light flickered"), a dependent clause ("Although the rain had stopped, the streets were still flooded"), or a participial phrase ("Exhausted from the climb, he collapsed on the summit"). Varied openings create rhythm and draw the reader in.',
          keyVocabulary: ['adverb', 'prepositional phrase', 'participial phrase', 'varied openings'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'Which of the following is a dependent clause?',
          type: 'multiple-choice',
          options: [
            'She ran to school.',
            'Because she was late.',
            'The bus arrived on time.',
            'He opened the door and walked in.',
          ],
          correctAnswer: 'Because she was late.',
          hint: 'A dependent clause cannot stand alone as a complete sentence.',
          explanation:
            '"Because she was late" has a subject and verb but begins with a subordinating conjunction, making it dependent — it needs an independent clause to complete the thought.',
          standardCode: '7.L.1',
        },
        {
          index: 1,
          question:
            'Combine these two sentences into one complex sentence: "The power went out. We lit candles."',
          type: 'short-answer',
          correctAnswer:
            'Example: "When the power went out, we lit candles." or "Because the power went out, we lit candles."',
          hint: 'Use a subordinating conjunction to show the relationship between the ideas.',
          explanation:
            'A subordinating conjunction like "when" or "because" turns one sentence into a dependent clause and joins it to the other, creating a complex sentence.',
          standardCode: '7.L.1',
        },
        {
          index: 2,
          question:
            'What type of sentence is this: "The team practiced every day, and they won the championship"?',
          type: 'multiple-choice',
          options: [
            'Simple',
            'Complex',
            'Compound',
            'Compound-complex',
          ],
          correctAnswer: 'Compound',
          hint: 'Count the independent clauses and check for dependent clauses.',
          explanation:
            'There are two independent clauses ("The team practiced every day" and "they won the championship") joined by "and." No dependent clause is present, so it is a compound sentence.',
          standardCode: '7.L.1',
        },
        {
          index: 3,
          question:
            'Rewrite this sentence so it begins with a prepositional phrase: "A hawk circled in the clear sky."',
          type: 'short-answer',
          correctAnswer:
            '"In the clear sky, a hawk circled."',
          hint: 'Move the prepositional phrase to the front of the sentence.',
          explanation:
            'Starting with "In the clear sky" varies the opening and puts the setting detail first, creating a more visual introduction.',
          standardCode: '7.L.1',
        },
        {
          index: 4,
          question:
            'What are the FANBOYS conjunctions?',
          type: 'multiple-choice',
          options: [
            'For, and, nor, but, or, yet, so',
            'First, also, next, before, over, yesterday, soon',
            'Find, add, name, bring, open, yell, sit',
            'From, after, near, by, of, yes, still',
          ],
          correctAnswer: 'For, and, nor, but, or, yet, so',
          hint: 'FANBOYS is an acronym for coordinating conjunctions.',
          explanation:
            'The seven coordinating conjunctions — for, and, nor, but, or, yet, so — are used to join independent clauses in compound sentences.',
          standardCode: '7.L.1',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Write a compound-complex sentence about a school event.',
            type: 'short-answer',
            correctAnswer:
              'Example: "Although the weather was cold, the students gathered in the courtyard, and the principal gave an inspiring speech." (one dependent clause + two independent clauses)',
            standardCode: '7.L.1',
          },
          {
            question:
              'Which sentence opening adds the most variety?',
            type: 'multiple-choice',
            options: [
              'The boy ran home.',
              'He was tired after school.',
              'Exhausted from the long day, the boy ran home.',
              'The boy, he ran home.',
            ],
            correctAnswer:
              'Exhausted from the long day, the boy ran home.',
            standardCode: '7.L.1',
          },
          {
            question:
              'Explain why varying sentence types improves writing.',
            type: 'short-answer',
            correctAnswer:
              'Varying sentence types creates rhythm, prevents monotony, and allows the writer to show different relationships between ideas — such as cause and effect, contrast, and addition — making the writing clearer and more engaging.',
            standardCode: '7.L.1',
          },
        ],
      },
    },
  },

  {
    slug: 'grade7-ela-punctuation-for-effect',
    title: 'Punctuation for Effect',
    description:
      'Use commas, semicolons, dashes, and other punctuation marks to clarify meaning and create effect in writing',
    subject: 'ela',
    grade: 7,
    gradeBand: '6-8',
    topicCluster: 'Language',
    standardCodes: ['7.L.2'],
    content: {
      intro: {
        title: 'Punctuation for Effect',
        text: 'Punctuation does more than follow rules — it shapes how readers experience your writing. A well-placed dash can create surprise. A semicolon can link closely related ideas. A comma can prevent confusion. In this module you will learn to use punctuation not just correctly but strategically, as a tool that enhances clarity and style.',
        culturalHook:
          'Punctuation is like the pauses and emphasis in speech. A dramatic pause before a punchline, a quick rush of words during excitement — that is punctuation in action, just on the page instead of in the air.',
      },
      segments: [
        {
          index: 0,
          title: 'Commas for Clarity',
          text: 'Commas separate elements to prevent misreading. Use commas after introductory phrases ("After the storm, we checked for damage"), between items in a series ("apples, oranges, and bananas"), before coordinating conjunctions in compound sentences ("She studied hard, but she still felt nervous"), and to set off non-essential information ("My brother, who is ten, loves soccer"). Missing or misplaced commas can change meaning entirely: "Let\'s eat, Grandma" versus "Let\'s eat Grandma."',
          keyVocabulary: ['comma', 'introductory phrase', 'series', 'non-essential', 'compound sentence'],
        },
        {
          index: 1,
          title: 'Semicolons and Colons',
          text: 'A semicolon joins two closely related independent clauses without a conjunction: "The concert was sold out; we watched it online instead." It signals a tighter connection than a period. A colon introduces a list, an explanation, or a quotation that follows an independent clause: "She had one goal: to finish the race." Use these marks to show relationships between ideas and to add variety to your sentence structure.',
          keyVocabulary: ['semicolon', 'colon', 'independent clause', 'list', 'explanation'],
          example:
            'Semicolon: "The trail was steep; every step demanded effort." Colon: "He packed three essentials: water, a map, and a flashlight."',
        },
        {
          index: 2,
          title: 'Dashes and Parentheses for Emphasis and Aside',
          text: 'A dash (—) creates a dramatic pause or emphasizes information: "She opened the door — and froze." Dashes can also set off a sudden interruption or an important aside. Parentheses, by contrast, downplay information, tucking it away as an afterthought: "The experiment (conducted over three weeks) produced surprising results." Choose dashes when you want the reader to pay attention and parentheses when the information is supplementary.',
          keyVocabulary: ['dash', 'parentheses', 'emphasis', 'aside', 'interruption'],
        },
        {
          index: 3,
          title: 'Using Punctuation Strategically',
          text: 'Great writers think about punctuation as a craft choice, not just a rule. A series of short sentences with periods creates a staccato effect. Ellipses (…) suggest trailing off or hesitation. An exclamation point conveys strong emotion — but loses power if overused. Before you finalize any piece of writing, review your punctuation and ask: Does each mark help the reader understand and feel what I intend?',
          keyVocabulary: ['staccato', 'ellipsis', 'exclamation point', 'strategic', 'craft choice'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'Where should a comma be placed in this sentence: "After the long hike we sat down to rest"?',
          type: 'multiple-choice',
          options: [
            'After "After"',
            'After "hike"',
            'After "we"',
            'No comma is needed.',
          ],
          correctAnswer: 'After "hike"',
          hint: 'A comma follows an introductory phrase.',
          explanation:
            '"After the long hike" is an introductory phrase. A comma after "hike" separates it from the main clause for clarity.',
          standardCode: '7.L.2',
        },
        {
          index: 1,
          question:
            'Join these two sentences with a semicolon: "The library was quiet. Everyone was focused on studying."',
          type: 'short-answer',
          correctAnswer:
            '"The library was quiet; everyone was focused on studying."',
          hint: 'Replace the period with a semicolon and lowercase the next word.',
          explanation:
            'A semicolon joins two closely related independent clauses, showing the connection between the quiet and the focus.',
          standardCode: '7.L.2',
        },
        {
          index: 2,
          question:
            'What is the effect of the dash in this sentence: "He opened the letter — and his hands began to shake"?',
          type: 'multiple-choice',
          options: [
            'It creates a dramatic pause that builds suspense.',
            'It shows the sentence is incomplete.',
            'It replaces a comma.',
            'It has no effect.',
          ],
          correctAnswer:
            'It creates a dramatic pause that builds suspense.',
          hint: 'Read the sentence aloud and notice the pause.',
          explanation:
            'The dash forces a pause that heightens the reader\'s anticipation before the emotional reaction is revealed.',
          standardCode: '7.L.2',
        },
        {
          index: 3,
          question:
            'When should you use parentheses instead of dashes?',
          type: 'short-answer',
          correctAnswer:
            'Use parentheses when the information is supplementary or less important. Use dashes when you want to emphasize or draw attention to the information.',
          hint: 'One downplays; the other highlights.',
          explanation:
            'Parentheses tuck information away quietly, while dashes spotlight it. The choice depends on how much attention you want the reader to give the aside.',
          standardCode: '7.L.2',
        },
        {
          index: 4,
          question:
            'Add a colon to this sentence: "She needed three things for the project a poster board markers and glue."',
          type: 'short-answer',
          correctAnswer:
            '"She needed three things for the project: a poster board, markers, and glue."',
          hint: 'The colon goes after the independent clause that introduces the list.',
          explanation:
            'A colon after "project" introduces the list. Commas separate the items in the series.',
          standardCode: '7.L.2',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Rewrite this passage using a semicolon and a dash for effect: "The storm passed. The sun broke through the clouds. It was the most beautiful sight."',
            type: 'short-answer',
            correctAnswer:
              'Example: "The storm passed; the sun broke through the clouds — it was the most beautiful sight."',
            standardCode: '7.L.2',
          },
          {
            question:
              'Which punctuation mark is best for introducing a list after an independent clause?',
            type: 'multiple-choice',
            options: [
              'Semicolon',
              'Dash',
              'Colon',
              'Comma',
            ],
            correctAnswer: 'Colon',
            standardCode: '7.L.2',
          },
          {
            question:
              'Explain why overusing exclamation points weakens writing.',
            type: 'short-answer',
            correctAnswer:
              'When every sentence ends with an exclamation point, none of them feel truly emphatic. The mark loses its power because the reader becomes desensitized. Saving exclamation points for moments of genuine strong emotion makes them more effective.',
            standardCode: '7.L.2',
          },
        ],
      },
    },
  },
]
