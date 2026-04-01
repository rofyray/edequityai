import type { ModuleSeed } from '../types'

export const GRADE_8_ELA: ModuleSeed[] = [
  // ─── Reading Literature (4 modules) ───────────────────────────
  {
    slug: 'grade8-ela-comparing-themes-across-genres',
    title: 'Comparing Themes Across Genres',
    description:
      'Analyze how different genres — short stories, poems, and dramas — approach the same theme, noting how each genre shapes meaning through its unique conventions.',
    subject: 'ela',
    grade: 8,
    gradeBand: '6-8',
    topicCluster: 'Reading Literature',
    standardCodes: ['8.RL.2', '8.RL.9'],
    content: {
      intro: {
        title: 'Comparing Themes Across Genres',
        text: 'A single theme — such as the cost of ambition or the search for identity — can appear in a novel, a poem, and a play, yet each genre communicates the idea differently. Today you will learn to trace the same theme across multiple genres and explain how each genre\'s tools (stanzas, stage directions, narrative voice) shape the reader\'s understanding.',
        culturalHook:
          'Think about a story your community tells and then imagine it retold as a song or a play. How would the message feel different?',
      },
      segments: [
        {
          index: 0,
          title: 'Theme as a Universal Thread',
          text: 'A theme is an insight about life that an author conveys through characters, events, and imagery. When comparing themes across genres, first identify the central theme in each text. State it as a complete sentence — for example, "Unchecked ambition can lead to isolation." Then look at how each text develops that theme through its own genre conventions.',
          keyVocabulary: ['theme', 'genre conventions', 'universal insight'],
        },
        {
          index: 1,
          title: 'Genre Tools That Shape Theme',
          text: 'Fiction uses narrative voice, pacing, and internal monologue to develop theme. Poetry relies on imagery, sound devices, and line breaks. Drama communicates through dialogue, stage directions, and acts. When you compare how two genres handle the same theme, focus on which tools each genre uses and what effect those tools have on the reader or audience.',
          keyVocabulary: ['narrative voice', 'imagery', 'stage directions', 'dialogue'],
          example:
            'A short story about loss might describe a character\'s private grief in long, flowing paragraphs, while a poem about loss might use spare, broken lines that mirror the feeling of emptiness.',
        },
        {
          index: 2,
          title: 'Building a Comparative Argument',
          text: 'To write or speak about themes across genres, organize your analysis with a clear claim: "Both texts address the theme of _____, yet they differ in _____." Support the claim with textual evidence from each genre. Explain how each piece of evidence connects to the theme and why the genre\'s conventions matter. End by reflecting on what the comparison reveals about the theme itself.',
          keyVocabulary: ['claim', 'textual evidence', 'comparative analysis'],
        },
        {
          index: 3,
          title: 'Practice: Side-by-Side Reading',
          text: 'Read a poem and a short story excerpt that both explore the theme of courage under pressure. Annotate each text for key details that develop the theme. Then write a short paragraph comparing how the two genres present courage differently. Use at least one quotation from each text.',
          keyVocabulary: ['annotate', 'quotation', 'side-by-side comparison'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'What is the first step when comparing themes across genres?',
          type: 'multiple-choice',
          options: [
            'Identify the central theme in each text and state it as a complete sentence.',
            'Count the number of pages in each text.',
            'Decide which genre is better.',
            'Memorize the author biographies.',
          ],
          correctAnswer:
            'Identify the central theme in each text and state it as a complete sentence.',
          hint: 'Before comparing, you need to know what idea both texts share.',
          explanation:
            'You must first identify and articulate the theme in each text so you have a basis for comparison.',
          standardCode: '8.RL.2',
        },
        {
          index: 1,
          question:
            'A poem uses short, broken lines to convey loss, while a short story uses long internal monologues. How do these different genre tools affect the reader\'s experience of the same theme?',
          type: 'short-answer',
          correctAnswer:
            'The broken lines create a feeling of emptiness and pauses that mirror grief, while the long monologue lets the reader deeply enter the character\'s inner sorrow. Both develop the theme of loss but through different emotional effects.',
          hint: 'Think about how the form of each genre makes you feel the theme differently.',
          explanation:
            'Genre conventions shape emotional impact. Poetry\'s brevity and rhythm create one experience of loss, while fiction\'s extended narration creates another. Recognizing these differences deepens comparative analysis.',
          standardCode: '8.RL.9',
        },
        {
          index: 2,
          question:
            'Which of the following is the best claim for a comparative essay about theme across genres?',
          type: 'multiple-choice',
          options: [
            'Both the poem and the play explore the theme of justice, yet the poem emphasizes personal conscience while the play highlights societal consequences.',
            'The poem is better than the play.',
            'Justice is an important topic.',
            'Poems have line breaks and plays have dialogue.',
          ],
          correctAnswer:
            'Both the poem and the play explore the theme of justice, yet the poem emphasizes personal conscience while the play highlights societal consequences.',
          hint: 'A strong claim names the shared theme and states a key difference.',
          explanation:
            'An effective comparative claim identifies the common theme and clearly states how the two genres differ in their treatment of it.',
          standardCode: '8.RL.9',
        },
        {
          index: 3,
          question:
            'Why is it important to include textual evidence from both genres when comparing themes?',
          type: 'short-answer',
          correctAnswer:
            'Textual evidence from both genres shows how each text develops the theme through its own conventions, making the comparison specific and well-supported rather than vague.',
          hint: 'Think about what happens if you only quote one text.',
          explanation:
            'Without evidence from both texts, the comparison is one-sided and unsubstantiated. Evidence anchors your analysis in the actual language and techniques of each genre.',
          standardCode: '8.RL.9',
        },
        {
          index: 4,
          question:
            'A drama uses a long silence indicated by a stage direction to show a character\'s grief. What genre convention is this an example of?',
          type: 'multiple-choice',
          options: [
            'Stage directions',
            'Rhyme scheme',
            'First-person narration',
            'Stanza breaks',
          ],
          correctAnswer: 'Stage directions',
          hint: 'This convention is unique to plays and scripts.',
          explanation:
            'Stage directions are instructions in a drama that describe actions, settings, or silences. They are a genre-specific tool that shapes how the audience experiences the theme.',
          standardCode: '8.RL.2',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'How does comparing the same theme across a poem and a short story deepen a reader\'s understanding of that theme?',
            type: 'short-answer',
            correctAnswer:
              'Seeing the same theme expressed through different genre conventions reveals new dimensions of the idea, showing that a single theme can evoke different emotions and insights depending on the form.',
            standardCode: '8.RL.9',
          },
          {
            question:
              'Which element is unique to drama and cannot be found in poetry or fiction?',
            type: 'multiple-choice',
            options: [
              'Stage directions',
              'Metaphor',
              'Conflict',
              'Setting',
            ],
            correctAnswer: 'Stage directions',
            standardCode: '8.RL.2',
          },
          {
            question:
              'Write a comparative claim about how a poem and a novel might both address the theme of resilience but through different genre conventions.',
            type: 'short-answer',
            correctAnswer:
              'Both the poem and the novel explore resilience, yet the poem conveys it through compressed imagery and rhythm, while the novel develops it through extended character growth and plot events.',
            standardCode: '8.RL.9',
          },
        ],
      },
    },
  },
  {
    slug: 'grade8-ela-irony',
    title: 'Understanding Irony',
    description:
      'Identify and analyze verbal, situational, and dramatic irony in literary texts and explain how irony shapes meaning and tone.',
    subject: 'ela',
    grade: 8,
    gradeBand: '6-8',
    topicCluster: 'Reading Literature',
    standardCodes: ['8.RL.4', '8.RL.6'],
    content: {
      intro: {
        title: 'Understanding Irony',
        text: 'Irony occurs when there is a gap between what is expected and what actually happens or is said. Skilled authors use irony to add humor, suspense, or deeper meaning to their writing. In this module you will learn to recognize three types of irony — verbal, situational, and dramatic — and explain how each one affects tone and meaning.',
        culturalHook:
          'Have you ever said "Great weather!" while standing in a downpour? That everyday sarcasm is a form of verbal irony.',
      },
      segments: [
        {
          index: 0,
          title: 'Verbal Irony',
          text: 'Verbal irony happens when a speaker says one thing but means the opposite. It is different from lying because the speaker expects the audience to understand the true meaning. Sarcasm is the most common form of verbal irony. In literature, verbal irony can reveal a character\'s attitude or create humor. To identify it, ask: "Does the character mean the opposite of what they are saying?"',
          keyVocabulary: ['verbal irony', 'sarcasm', 'tone', 'intention'],
        },
        {
          index: 1,
          title: 'Situational Irony',
          text: 'Situational irony occurs when the outcome of a situation is the opposite of what was expected. A fire station burning down is situationally ironic. Authors use it to surprise readers, reveal deeper truths, or critique human behavior. To spot it, compare what a character (or reader) expects with what actually happens.',
          keyVocabulary: ['situational irony', 'expectation', 'outcome', 'surprise'],
          example:
            'In O. Henry\'s "The Gift of the Magi," a wife sells her hair to buy her husband a watch chain, while the husband sells his watch to buy her hair combs. The outcome is the opposite of what each expected.',
        },
        {
          index: 2,
          title: 'Dramatic Irony',
          text: 'Dramatic irony exists when the audience or reader knows something that a character does not. This creates tension, suspense, or humor because the audience watches the character act in ignorance. Shakespeare frequently used dramatic irony. To recognize it, ask: "Do I, as the reader, know something this character does not?"',
          keyVocabulary: ['dramatic irony', 'tension', 'suspense', 'audience awareness'],
        },
        {
          index: 3,
          title: 'How Irony Shapes Meaning and Tone',
          text: 'Irony does more than surprise. It shapes the overall tone of a work — making it satirical, bittersweet, or darkly humorous. When you analyze irony, explain what the irony reveals about the characters, the situation, or the author\'s message. A story filled with dramatic irony may feel tense, while one full of verbal irony may feel playful or cutting.',
          keyVocabulary: ['tone', 'satirical', 'bittersweet', 'author\'s message'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'A character who is terrified of water becomes a lifeguard to impress someone and ends up saving a drowning swimmer. What type of irony is this?',
          type: 'multiple-choice',
          options: [
            'Situational irony',
            'Verbal irony',
            'Dramatic irony',
            'No irony is present.',
          ],
          correctAnswer: 'Situational irony',
          hint: 'Think about whether the outcome is the opposite of what you would expect.',
          explanation:
            'It is situational irony because the character who fears water is the one who performs a water rescue — the opposite of what we would expect.',
          standardCode: '8.RL.6',
        },
        {
          index: 1,
          question:
            'Define verbal irony and explain how it differs from a lie.',
          type: 'short-answer',
          correctAnswer:
            'Verbal irony is when a speaker says one thing but means the opposite, expecting the audience to understand the true meaning. A lie is meant to deceive, while verbal irony is meant to be understood as the opposite.',
          hint: 'Consider the speaker\'s intention and the audience\'s understanding.',
          explanation:
            'The key distinction is intent and audience awareness. With verbal irony the speaker expects the listener to detect the real meaning; with a lie the speaker hopes to conceal it.',
          standardCode: '8.RL.4',
        },
        {
          index: 2,
          question:
            'In a horror film, the audience sees a villain hiding in the closet while the character happily enters the room. What type of irony is this?',
          type: 'multiple-choice',
          options: [
            'Dramatic irony',
            'Situational irony',
            'Verbal irony',
            'Coincidence',
          ],
          correctAnswer: 'Dramatic irony',
          hint: 'Does the audience know something the character does not?',
          explanation:
            'The audience knows the villain is hiding, but the character does not. This gap in knowledge is dramatic irony and creates suspense.',
          standardCode: '8.RL.6',
        },
        {
          index: 3,
          question:
            'How can irony affect the tone of a literary work? Give an example.',
          type: 'short-answer',
          correctAnswer:
            'Irony can make a work feel humorous, bitter, tense, or satirical. For example, a story filled with dramatic irony may feel suspenseful because the reader knows danger is coming while the character does not.',
          hint: 'Think about how different types of irony make you feel as a reader.',
          explanation:
            'Irony shapes tone by creating contrasts between appearance and reality. Verbal irony can produce humor or sarcasm, situational irony can produce shock or reflection, and dramatic irony can build tension.',
          standardCode: '8.RL.4',
        },
        {
          index: 4,
          question:
            'A pilot in a story is named "Captain Crash." This is an example of which device?',
          type: 'multiple-choice',
          options: [
            'Verbal irony',
            'Dramatic irony',
            'Situational irony',
            'Alliteration only',
          ],
          correctAnswer: 'Verbal irony',
          hint: 'The name suggests the opposite of what you would want in a pilot.',
          explanation:
            'Naming a pilot "Captain Crash" is verbally ironic because the name implies disaster — the opposite of the safety a pilot should represent.',
          standardCode: '8.RL.4',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Explain the difference between situational irony and dramatic irony using an original example for each.',
            type: 'short-answer',
            correctAnswer:
              'Situational irony is when the outcome is the opposite of what is expected (e.g., a locksmith locked out of their own house). Dramatic irony is when the audience knows something a character does not (e.g., readers know a letter contains bad news while the character excitedly opens it).',
            standardCode: '8.RL.6',
          },
          {
            question:
              'Which type of irony creates suspense by giving the audience information a character lacks?',
            type: 'multiple-choice',
            options: [
              'Dramatic irony',
              'Verbal irony',
              'Situational irony',
              'Cosmic irony',
            ],
            correctAnswer: 'Dramatic irony',
            standardCode: '8.RL.6',
          },
          {
            question:
              'A story about a self-proclaimed "world\'s greatest chef" who burns toast every morning uses irony to create a humorous tone. Identify the type of irony and explain its effect.',
            type: 'short-answer',
            correctAnswer:
              'This is situational irony because the chef\'s inability to make toast contradicts the title of "world\'s greatest chef." The contrast creates humor and may also serve as a critique of arrogance.',
            standardCode: '8.RL.4',
          },
        ],
      },
    },
  },
  {
    slug: 'grade8-ela-satire',
    title: 'Satire in Literature',
    description:
      'Recognize satire in literary and informational texts, identifying how authors use humor, exaggeration, and irony to critique society.',
    subject: 'ela',
    grade: 8,
    gradeBand: '6-8',
    topicCluster: 'Reading Literature',
    standardCodes: ['8.RL.4', '8.RL.6'],
    content: {
      intro: {
        title: 'Satire in Literature',
        text: 'Satire is a literary technique in which humor, exaggeration, or ridicule is used to expose and criticize people\'s foolishness, vices, or societal problems. From ancient fables to modern cartoons, satire has always been a tool for social commentary. In this module you will learn to identify satirical techniques and explain the author\'s purpose.',
        culturalHook:
          'Think of a comedian or cartoon that makes fun of something serious. That is satire at work — using laughter to make a point.',
      },
      segments: [
        {
          index: 0,
          title: 'What Is Satire?',
          text: 'Satire is writing that uses humor to criticize or expose flaws in individuals, institutions, or society. Unlike simple comedy, satire has a purpose beyond entertainment — it wants the audience to think critically about a problem. Satirists use techniques such as exaggeration (hyperbole), understatement, irony, and parody to make their point.',
          keyVocabulary: ['satire', 'hyperbole', 'understatement', 'parody', 'social commentary'],
        },
        {
          index: 1,
          title: 'Techniques of Satire',
          text: 'Exaggeration magnifies flaws so they become impossible to ignore. Irony says one thing while meaning another, forcing the reader to think. Parody imitates a familiar work or style to mock it. Understatement minimizes something important to highlight its absurdity. Skilled satirists often combine several of these techniques in a single work.',
          keyVocabulary: ['exaggeration', 'irony', 'parody', 'understatement'],
          example:
            'Jonathan Swift\'s "A Modest Proposal" uses extreme exaggeration — suggesting that the poor sell their children as food — to shock readers into recognizing the real suffering caused by English policies in Ireland.',
        },
        {
          index: 2,
          title: 'Author\'s Purpose in Satire',
          text: 'When analyzing satire, ask three questions: What is the target? What technique does the author use? What change does the author want? The target is the person, institution, or idea being criticized. The technique is how the author delivers the criticism. The intended change is the author\'s deeper purpose — to shift public opinion, spark reform, or simply make people aware of a problem.',
          keyVocabulary: ['target', 'technique', 'author\'s purpose', 'reform'],
        },
      ],
      practice: [
        {
          index: 0,
          question: 'What distinguishes satire from ordinary comedy?',
          type: 'multiple-choice',
          options: [
            'Satire has a critical purpose beyond entertainment.',
            'Satire is never funny.',
            'Comedy always criticizes society.',
            'There is no difference between the two.',
          ],
          correctAnswer: 'Satire has a critical purpose beyond entertainment.',
          hint: 'Think about what the author wants the audience to do after laughing.',
          explanation:
            'While both comedy and satire use humor, satire aims to expose flaws and provoke thought or change, going beyond simple entertainment.',
          standardCode: '8.RL.6',
        },
        {
          index: 1,
          question:
            'A newspaper column describes a politician who promises to "solve every problem in the country by next Tuesday." What satirical technique is the author using?',
          type: 'multiple-choice',
          options: [
            'Exaggeration (hyperbole)',
            'Understatement',
            'Alliteration',
            'Flashback',
          ],
          correctAnswer: 'Exaggeration (hyperbole)',
          hint: 'Is the claim realistic, or has it been inflated to make a point?',
          explanation:
            'Promising to solve every problem by Tuesday is an obvious exaggeration designed to mock unrealistic political promises.',
          standardCode: '8.RL.4',
        },
        {
          index: 2,
          question:
            'Explain how irony functions as a tool of satire. Provide an example.',
          type: 'short-answer',
          correctAnswer:
            'Irony in satire says the opposite of what is meant, forcing the reader to recognize the truth. For example, an author might praise a corrupt leader\'s "honesty" to highlight the leader\'s dishonesty.',
          hint: 'Remember that irony creates a gap between what is said and what is meant.',
          explanation:
            'Ironic praise of something negative forces the reader to see the contrast between appearance and reality, which is the core mechanism of satirical criticism.',
          standardCode: '8.RL.4',
        },
        {
          index: 3,
          question:
            'What three questions should you ask when analyzing a satirical text?',
          type: 'short-answer',
          correctAnswer:
            'What is the target? What technique does the author use? What change or awareness does the author want?',
          hint: 'Think about the target, the method, and the purpose.',
          explanation:
            'These three questions form a framework for analysis: identifying what is being criticized, how the criticism is delivered, and why the author wrote the piece.',
          standardCode: '8.RL.6',
        },
        {
          index: 4,
          question:
            'A parody imitates a familiar work or style in order to:',
          type: 'multiple-choice',
          options: [
            'Mock or critique the original.',
            'Plagiarize the original.',
            'Summarize the original accurately.',
            'Translate the original into another language.',
          ],
          correctAnswer: 'Mock or critique the original.',
          hint: 'Parody is a form of satire, so it has a critical edge.',
          explanation:
            'Parody imitates a work\'s style or content to humorously critique it, making the audience see the original in a new, often critical, light.',
          standardCode: '8.RL.4',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Describe the difference between exaggeration and understatement as satirical techniques and give an example of each.',
            type: 'short-answer',
            correctAnswer:
              'Exaggeration magnifies a flaw to make it absurd (e.g., saying a messy room looks like a tornado hit it). Understatement downplays something significant to highlight its absurdity (e.g., calling a massive oil spill "a small inconvenience").',
            standardCode: '8.RL.4',
          },
          {
            question:
              'Which of the following best describes the author\'s purpose in satire?',
            type: 'multiple-choice',
            options: [
              'To use humor to expose flaws and provoke thought or change.',
              'To entertain the audience with jokes.',
              'To provide a factual news report.',
              'To write a biography of a famous person.',
            ],
            correctAnswer:
              'To use humor to expose flaws and provoke thought or change.',
            standardCode: '8.RL.6',
          },
          {
            question:
              'Read the following satirical statement: "Our school cafeteria serves only the finest gourmet cuisine — mystery meat Mondays and soggy fry Fridays." Identify the type of irony used and explain what is being satirized.',
            type: 'short-answer',
            correctAnswer:
              'This is verbal irony because the speaker calls unappetizing food "finest gourmet cuisine." The satire targets the low quality of school cafeteria food.',
            standardCode: '8.RL.4',
          },
        ],
      },
    },
  },
  {
    slug: 'grade8-ela-analyzing-dialogue',
    title: 'Analyzing Dialogue',
    description:
      'Analyze how dialogue in stories and dramas reveals character traits, advances the plot, and provokes decisions.',
    subject: 'ela',
    grade: 8,
    gradeBand: '6-8',
    topicCluster: 'Reading Literature',
    standardCodes: ['8.RL.3', '8.RL.6'],
    content: {
      intro: {
        title: 'Analyzing Dialogue',
        text: 'Dialogue — the words characters speak to one another — is one of the most powerful tools an author uses to reveal personality, build tension, and move the plot forward. In this module you will learn to analyze dialogue for what it reveals about character, conflict, and theme.',
        culturalHook:
          'Think about a heated conversation you have witnessed. The words people choose — and what they leave unsaid — tell you a lot about who they are.',
      },
      segments: [
        {
          index: 0,
          title: 'Dialogue Reveals Character',
          text: 'What a character says — and how they say it — reveals personality, education, mood, and values. A character who speaks in short, clipped sentences may be impatient or secretive. One who uses elaborate vocabulary may be educated or pretentious. Pay attention to word choice, sentence length, and dialect to build a picture of who the character is.',
          keyVocabulary: ['dialogue', 'characterization', 'word choice', 'dialect'],
        },
        {
          index: 1,
          title: 'Dialogue Advances Plot',
          text: 'Dialogue often pushes the story forward by revealing new information, creating conflict, or forcing characters to make decisions. When a character says, "I know your secret," the plot shifts immediately. Analyze moments where dialogue changes the direction of the story.',
          keyVocabulary: ['plot', 'conflict', 'revelation', 'turning point'],
          example:
            'In a mystery novel, a witness says, "I was not at the scene." Later, another character contradicts this. The conflicting dialogue creates tension and propels the investigation forward.',
        },
        {
          index: 2,
          title: 'Dialogue and Point of View',
          text: 'Dialogue also reveals differences in perspective. Two characters may describe the same event very differently, and their dialogue shows the reader each character\'s point of view. This technique helps authors develop themes of truth, bias, and understanding.',
          keyVocabulary: ['point of view', 'perspective', 'bias', 'subjectivity'],
        },
        {
          index: 3,
          title: 'Subtext: What Is Left Unsaid',
          text: 'Sometimes what a character does NOT say is as important as what they do say. Subtext is the meaning beneath the surface of dialogue. A character who answers "I\'m fine" while clenching their fists is communicating something very different from the literal words. Analyzing subtext requires attention to stage directions, body language descriptions, and context.',
          keyVocabulary: ['subtext', 'implication', 'body language', 'context'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'A character speaks in long, formal sentences and avoids slang. What might this dialogue reveal about the character?',
          type: 'multiple-choice',
          options: [
            'The character may be well-educated, formal, or distant.',
            'The character is always dishonest.',
            'The character is the youngest in the story.',
            'The character is the villain.',
          ],
          correctAnswer:
            'The character may be well-educated, formal, or distant.',
          hint: 'Think about what word choice and sentence style suggest about personality.',
          explanation:
            'Formal language and long sentences often suggest education, social status, or emotional distance. Dialogue style is a key tool for indirect characterization.',
          standardCode: '8.RL.3',
        },
        {
          index: 1,
          question:
            'How can conflicting dialogue between two characters advance the plot?',
          type: 'short-answer',
          correctAnswer:
            'Conflicting dialogue creates tension and forces characters to react, make decisions, or reveal hidden information, which moves the plot toward its next event.',
          hint: 'Think about what happens when two characters disagree.',
          explanation:
            'Disagreement in dialogue introduces or escalates conflict, which is the engine of plot. Each conflict requires a response, pushing the story forward.',
          standardCode: '8.RL.3',
        },
        {
          index: 2,
          question: 'What is subtext in dialogue?',
          type: 'multiple-choice',
          options: [
            'The meaning beneath the surface of what a character says.',
            'The footnotes at the bottom of a page.',
            'The literal definition of each word spoken.',
            'The title of a chapter.',
          ],
          correctAnswer:
            'The meaning beneath the surface of what a character says.',
          hint: 'Sub- means "under." What is under the text?',
          explanation:
            'Subtext is the unspoken meaning communicated through context, tone, and what is left unsaid. It adds depth to dialogue and characterization.',
          standardCode: '8.RL.6',
        },
        {
          index: 3,
          question:
            'A character says "Sure, whatever you want" while crossing their arms and looking away. What does the subtext suggest?',
          type: 'short-answer',
          correctAnswer:
            'The subtext suggests the character disagrees or is upset but is choosing not to argue openly. The body language contradicts the agreeable words.',
          hint: 'Compare the words to the body language described.',
          explanation:
            'When body language contradicts spoken words, the subtext reveals the character\'s true feelings. This technique adds complexity to characterization.',
          standardCode: '8.RL.6',
        },
        {
          index: 4,
          question:
            'Which of the following best explains how dialogue reveals point of view?',
          type: 'multiple-choice',
          options: [
            'Different characters describe the same event differently, showing their unique perspectives.',
            'All characters use the same words.',
            'Dialogue only tells the reader what happened, not how characters feel.',
            'Point of view is only shown through narration, never dialogue.',
          ],
          correctAnswer:
            'Different characters describe the same event differently, showing their unique perspectives.',
          hint: 'Think about how two witnesses might tell different versions of the same event.',
          explanation:
            'Dialogue is a key vehicle for point of view because each character filters events through their own perspective, values, and biases.',
          standardCode: '8.RL.6',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Explain how an author can use dialogue to indirectly characterize a person without ever describing them directly.',
            type: 'short-answer',
            correctAnswer:
              'An author can show a character\'s personality through their word choice, sentence structure, dialect, and what they choose to say or leave unsaid. For example, a character who interrupts others and uses commanding language is indirectly characterized as domineering.',
            standardCode: '8.RL.3',
          },
          {
            question:
              'Subtext in dialogue is best described as:',
            type: 'multiple-choice',
            options: [
              'The hidden meaning beneath what a character literally says.',
              'The dialogue written in italics.',
              'Stage directions that appear after dialogue.',
              'A character\'s name.',
            ],
            correctAnswer:
              'The hidden meaning beneath what a character literally says.',
            standardCode: '8.RL.6',
          },
          {
            question:
              'Give an example of how dialogue can serve as a turning point in a story\'s plot.',
            type: 'short-answer',
            correctAnswer:
              'A character might reveal a secret in dialogue — such as "I was the one who sent the letter" — that changes other characters\' understanding and forces new decisions, redirecting the entire plot.',
            standardCode: '8.RL.3',
          },
        ],
      },
    },
  },

  // ─── Reading Informational (4 modules) ────────────────────────
  {
    slug: 'grade8-ela-evaluating-conflicting-evidence',
    title: 'Evaluating Conflicting Evidence',
    description:
      'Evaluate two or more texts that present conflicting evidence or interpretations of the same topic, determining which is more convincing and why.',
    subject: 'ela',
    grade: 8,
    gradeBand: '6-8',
    topicCluster: 'Reading Informational',
    standardCodes: ['8.RI.9'],
    content: {
      intro: {
        title: 'Evaluating Conflicting Evidence',
        text: 'In the real world, sources often disagree. Two articles about the same scientific study may reach opposite conclusions. Learning to evaluate conflicting evidence is essential for making informed decisions. In this module you will learn to compare sources, weigh evidence, and determine which argument is stronger.',
        culturalHook:
          'Imagine two neighbors giving different accounts of a storm. How would you decide whose version is more accurate?',
      },
      segments: [
        {
          index: 0,
          title: 'Identifying Conflicting Claims',
          text: 'The first step is to identify where two sources disagree. Read each text carefully and highlight the central claim. Then note where the claims contradict each other. The disagreement might be about facts, interpretations, or policy recommendations.',
          keyVocabulary: ['conflicting claims', 'central claim', 'contradiction'],
        },
        {
          index: 1,
          title: 'Weighing the Evidence',
          text: 'Once you identify the conflict, examine the evidence each source provides. Consider the quantity (how much evidence), quality (how reliable), and relevance (how directly connected to the claim). A source that relies on peer-reviewed studies is generally stronger than one that relies on personal anecdotes alone.',
          keyVocabulary: ['quantity', 'quality', 'relevance', 'peer-reviewed', 'anecdote'],
          example:
            'Article A claims that screen time harms sleep and cites three peer-reviewed studies. Article B claims screen time has no effect and cites one blog post. Article A\'s evidence is stronger in both quantity and quality.',
        },
        {
          index: 2,
          title: 'Considering Bias and Purpose',
          text: 'Every source has a purpose. Some inform, some persuade, and some sell a product. Consider who wrote the text, who published it, and what they might gain from the reader accepting their claim. Bias does not automatically make a source wrong, but it should make you examine the evidence more carefully.',
          keyVocabulary: ['bias', 'purpose', 'credibility', 'source evaluation'],
        },
        {
          index: 3,
          title: 'Making a Judgment',
          text: 'After weighing evidence and considering bias, state which source you find more convincing and explain why. Use specific details from both texts to support your judgment. Acknowledge the strengths of the weaker argument — this shows balanced, critical thinking.',
          keyVocabulary: ['judgment', 'balanced analysis', 'critical thinking'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'What is the first step when evaluating conflicting evidence?',
          type: 'multiple-choice',
          options: [
            'Identify where the two sources disagree.',
            'Pick the longer article as the winner.',
            'Ignore the sources and form your own opinion.',
            'Read only the first paragraph of each source.',
          ],
          correctAnswer: 'Identify where the two sources disagree.',
          hint: 'You cannot evaluate a conflict until you know what the conflict is.',
          explanation:
            'Before weighing evidence, you must clearly identify each source\'s central claim and pinpoint where they contradict each other.',
          standardCode: '8.RI.9',
        },
        {
          index: 1,
          question:
            'Source A cites three peer-reviewed studies; Source B cites one personal blog. Which source has stronger evidence, and why?',
          type: 'short-answer',
          correctAnswer:
            'Source A has stronger evidence because peer-reviewed studies are more reliable and it provides more of them, giving both higher quality and quantity of evidence.',
          hint: 'Consider the reliability and number of sources cited.',
          explanation:
            'Peer-reviewed studies undergo expert scrutiny, making them more credible than a personal blog. Quantity also matters — three studies outweigh one blog.',
          standardCode: '8.RI.9',
        },
        {
          index: 2,
          question:
            'Why is it important to consider the author\'s purpose when evaluating evidence?',
          type: 'multiple-choice',
          options: [
            'An author\'s purpose can influence how they select and present evidence.',
            'Purpose has no effect on evidence.',
            'Only the reader\'s purpose matters.',
            'Authors never have a purpose.',
          ],
          correctAnswer:
            'An author\'s purpose can influence how they select and present evidence.',
          hint: 'Think about how wanting to sell a product might change what evidence someone presents.',
          explanation:
            'Authors with a persuasive or commercial purpose may cherry-pick evidence that supports their claim and omit contradictory data.',
          standardCode: '8.RI.9',
        },
        {
          index: 3,
          question:
            'What does it mean to "acknowledge the strengths of the weaker argument"?',
          type: 'short-answer',
          correctAnswer:
            'It means recognizing valid points in the less convincing source, which shows balanced and fair-minded analysis.',
          hint: 'Even a weaker argument may have some valid points.',
          explanation:
            'Acknowledging strengths in the opposing argument demonstrates intellectual honesty and makes your own argument more credible.',
          standardCode: '8.RI.9',
        },
        {
          index: 4,
          question:
            'Bias in a source means the source is automatically wrong.',
          type: 'multiple-choice',
          options: [
            'False — bias means you should examine the evidence more carefully, not dismiss it.',
            'True — biased sources are always wrong.',
            'True — only unbiased sources exist.',
            'False — bias makes a source more reliable.',
          ],
          correctAnswer:
            'False — bias means you should examine the evidence more carefully, not dismiss it.',
          hint: 'Does having an opinion automatically make someone incorrect?',
          explanation:
            'All sources carry some degree of bias. Bias is a signal to scrutinize the evidence, not an automatic disqualification.',
          standardCode: '8.RI.9',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Describe three criteria you should use when weighing evidence from conflicting sources.',
            type: 'short-answer',
            correctAnswer:
              'Quantity (how much evidence is provided), quality (how reliable and credible the evidence is), and relevance (how directly the evidence connects to the claim).',
            standardCode: '8.RI.9',
          },
          {
            question:
              'Which factor is LEAST useful when evaluating the strength of an argument?',
            type: 'multiple-choice',
            options: [
              'The length of the article.',
              'The credibility of cited sources.',
              'The relevance of the evidence to the claim.',
              'The presence of peer-reviewed research.',
            ],
            correctAnswer: 'The length of the article.',
            standardCode: '8.RI.9',
          },
          {
            question:
              'Two articles disagree about whether homework improves grades. Article A cites a national study of 10,000 students; Article B cites the author\'s personal classroom experience. Evaluate which is more convincing and explain why.',
            type: 'short-answer',
            correctAnswer:
              'Article A is more convincing because a national study of 10,000 students provides large-scale, systematic evidence, while personal experience from one classroom is anecdotal and may not generalize.',
            standardCode: '8.RI.9',
          },
        ],
      },
    },
  },
  {
    slug: 'grade8-ela-analyzing-structure',
    title: 'Analyzing Text Structure',
    description:
      'Analyze how an author structures a text, including how major sections contribute to the whole and to the development of ideas.',
    subject: 'ela',
    grade: 8,
    gradeBand: '6-8',
    topicCluster: 'Reading Informational',
    standardCodes: ['8.RI.5'],
    content: {
      intro: {
        title: 'Analyzing Text Structure',
        text: 'The way an author organizes a text is a deliberate choice that shapes how the reader understands the information. Whether an author uses chronological order, compare-contrast, cause-effect, or problem-solution structure, each choice emphasizes different aspects of the topic. In this module you will identify structures and explain how they develop the author\'s ideas.',
        culturalHook:
          'Think about how a recipe is organized step by step. Imagine if the steps were in random order — the structure matters.',
      },
      segments: [
        {
          index: 0,
          title: 'Common Text Structures',
          text: 'Informational texts typically use one or more of these structures: chronological/sequential order, compare and contrast, cause and effect, problem and solution, and description. Each structure has signal words. Chronological uses "first," "then," "finally." Compare-contrast uses "however," "similarly," "on the other hand." Cause-effect uses "because," "as a result," "therefore."',
          keyVocabulary: ['chronological', 'compare-contrast', 'cause-effect', 'problem-solution', 'signal words'],
        },
        {
          index: 1,
          title: 'How Sections Build the Whole',
          text: 'Each section of a well-structured text serves a purpose: introducing the topic, presenting evidence, addressing counterarguments, or drawing conclusions. Analyze how each section contributes to the overall argument or explanation. Ask: "Why did the author place this section here? What would change if it were removed or moved?"',
          keyVocabulary: ['section', 'contribution', 'argument', 'organization'],
          example:
            'An article about climate change might open with a description of effects, follow with causes, and conclude with solutions. This problem-solution structure makes the reader understand the urgency before presenting answers.',
        },
        {
          index: 2,
          title: 'Evaluating Structural Choices',
          text: 'Authors choose structures to achieve specific effects. A cause-and-effect structure can make an argument feel logical and inevitable. A compare-contrast structure can highlight differences the author wants to emphasize. When evaluating structure, consider whether the author\'s organizational choice effectively supports the central idea.',
          keyVocabulary: ['structural choice', 'effectiveness', 'central idea'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'Which signal words indicate a cause-and-effect structure?',
          type: 'multiple-choice',
          options: [
            '"Because," "as a result," "therefore."',
            '"First," "next," "finally."',
            '"However," "on the other hand."',
            '"For example," "such as."',
          ],
          correctAnswer: '"Because," "as a result," "therefore."',
          hint: 'Think about words that connect a reason to an outcome.',
          explanation:
            'Cause-and-effect signal words show a relationship between a reason (cause) and an outcome (effect).',
          standardCode: '8.RI.5',
        },
        {
          index: 1,
          question:
            'An article opens with a vivid description of a polluted river, then explains the industrial causes, and ends with proposed cleanup solutions. What structure does this follow?',
          type: 'multiple-choice',
          options: [
            'Problem-solution with cause-effect elements.',
            'Chronological order.',
            'Compare and contrast.',
            'Description only.',
          ],
          correctAnswer: 'Problem-solution with cause-effect elements.',
          hint: 'The article starts with a problem, explains its causes, and offers solutions.',
          explanation:
            'The text presents a problem (pollution), explains its causes (industry), and offers solutions (cleanup). This combines problem-solution and cause-effect structures.',
          standardCode: '8.RI.5',
        },
        {
          index: 2,
          question:
            'Why might an author choose to begin an article with a counterargument before presenting their own claim?',
          type: 'short-answer',
          correctAnswer:
            'Beginning with a counterargument allows the author to acknowledge opposing views and then systematically refute them, which can make their own claim appear stronger and more credible.',
          hint: 'Think about the strategic advantage of addressing the opposition first.',
          explanation:
            'This structural choice demonstrates fairness and builds credibility. By addressing and refuting the opposing view first, the author clears the way for their own argument.',
          standardCode: '8.RI.5',
        },
        {
          index: 3,
          question:
            'What question should you ask to evaluate whether a section contributes to the whole text?',
          type: 'short-answer',
          correctAnswer:
            'Ask: "What would change if this section were removed or moved? Does it support the central idea?"',
          hint: 'Think about the role each section plays.',
          explanation:
            'Asking what would be lost if a section were removed helps you understand its purpose within the larger structure.',
          standardCode: '8.RI.5',
        },
        {
          index: 4,
          question:
            'A compare-contrast structure is most useful when the author wants to:',
          type: 'multiple-choice',
          options: [
            'Highlight similarities and differences between two subjects.',
            'Tell a story in time order.',
            'Describe a single event in detail.',
            'List random facts about a topic.',
          ],
          correctAnswer:
            'Highlight similarities and differences between two subjects.',
          hint: 'The name of the structure is a clue.',
          explanation:
            'Compare-contrast structure is designed to organize information around similarities and differences, making it ideal for analyzing two subjects side by side.',
          standardCode: '8.RI.5',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Identify three common text structures and provide a signal word for each.',
            type: 'short-answer',
            correctAnswer:
              'Chronological ("first" or "then"), cause-effect ("because" or "as a result"), compare-contrast ("however" or "similarly").',
            standardCode: '8.RI.5',
          },
          {
            question:
              'An author presents data on two cities\' education systems side by side. What structure is this?',
            type: 'multiple-choice',
            options: [
              'Compare and contrast',
              'Chronological order',
              'Problem and solution',
              'Narrative',
            ],
            correctAnswer: 'Compare and contrast',
            standardCode: '8.RI.5',
          },
          {
            question:
              'Explain how an author\'s structural choice can strengthen or weaken their central argument.',
            type: 'short-answer',
            correctAnswer:
              'A well-chosen structure (e.g., cause-effect for a logical argument) can make the central idea feel inevitable and convincing. A poorly chosen structure (e.g., random description for a persuasive essay) can make the argument feel disorganized and unconvincing.',
            standardCode: '8.RI.5',
          },
        ],
      },
    },
  },
  {
    slug: 'grade8-ela-delineating-arguments',
    title: 'Delineating and Evaluating Arguments',
    description:
      'Delineate and evaluate the argument and specific claims in a text, assessing whether the reasoning is sound and the evidence is relevant and sufficient.',
    subject: 'ela',
    grade: 8,
    gradeBand: '6-8',
    topicCluster: 'Reading Informational',
    standardCodes: ['8.RI.8'],
    content: {
      intro: {
        title: 'Delineating and Evaluating Arguments',
        text: 'An argument is a claim supported by reasons and evidence. Not all arguments are equally strong. In this module you will learn to break down (delineate) an argument into its parts, assess whether the reasoning is sound, and determine if the evidence is relevant and sufficient.',
        culturalHook:
          'Imagine a friend tries to convince you to change your plans. You naturally ask "Why?" and evaluate their reasons. That is argument evaluation in everyday life.',
      },
      segments: [
        {
          index: 0,
          title: 'Parts of an Argument',
          text: 'Every argument has a claim (the main point), reasons (why the claim is true), and evidence (facts, data, examples that support the reasons). Some arguments also include a counterargument (an opposing view) and a rebuttal (a response to the counterargument). To delineate an argument, identify each of these parts.',
          keyVocabulary: ['claim', 'reasons', 'evidence', 'counterargument', 'rebuttal'],
        },
        {
          index: 1,
          title: 'Sound Reasoning',
          text: 'Reasoning is the logical connection between evidence and claim. Sound reasoning means the evidence actually supports the claim without logical fallacies. Common fallacies include hasty generalizations (drawing broad conclusions from limited examples), ad hominem attacks (attacking the person instead of the argument), and false dilemmas (presenting only two options when more exist).',
          keyVocabulary: ['sound reasoning', 'logical fallacy', 'hasty generalization', 'ad hominem', 'false dilemma'],
          example:
            'Claim: "Our school should start later." Reason: "Students perform better with more sleep." Evidence: "A study of 500 schools found that later start times improved test scores by 10%." This reasoning is sound because the evidence directly supports the reason and the claim.',
        },
        {
          index: 2,
          title: 'Relevant and Sufficient Evidence',
          text: 'Evidence is relevant if it directly relates to the claim. Evidence is sufficient if there is enough of it to be convincing. A single example is rarely sufficient; multiple, varied pieces of evidence are stronger. When evaluating, ask: "Does this evidence actually connect to the claim? Is there enough evidence to be convincing?"',
          keyVocabulary: ['relevant', 'sufficient', 'varied evidence'],
        },
      ],
      practice: [
        {
          index: 0,
          question: 'What are the three essential parts of an argument?',
          type: 'multiple-choice',
          options: [
            'Claim, reasons, and evidence.',
            'Title, introduction, and conclusion.',
            'Characters, setting, and plot.',
            'Vocabulary, grammar, and spelling.',
          ],
          correctAnswer: 'Claim, reasons, and evidence.',
          hint: 'Think about what makes an argument convincing.',
          explanation:
            'A claim states the position, reasons explain why the position is valid, and evidence provides factual support.',
          standardCode: '8.RI.8',
        },
        {
          index: 1,
          question:
            'A writer argues that dogs are the best pets because "my dog is really cute." Is this evidence relevant and sufficient? Explain.',
          type: 'short-answer',
          correctAnswer:
            'The evidence is somewhat relevant (it relates to dogs as pets) but not sufficient because one personal example cannot prove that dogs are the best pets for everyone.',
          hint: 'Consider whether one personal opinion is enough to prove a broad claim.',
          explanation:
            'Sufficient evidence requires multiple, varied sources. One personal anecdote is too limited to support a broad claim about all dogs and all pets.',
          standardCode: '8.RI.8',
        },
        {
          index: 2,
          question:
            'Which of the following is a hasty generalization?',
          type: 'multiple-choice',
          options: [
            '"I met two rude people from that city, so everyone there must be rude."',
            '"Studies show that exercise improves mood in most people."',
            '"This book has five-star reviews from thousands of readers."',
            '"The data from three national surveys all point to the same trend."',
          ],
          correctAnswer:
            '"I met two rude people from that city, so everyone there must be rude."',
          hint: 'Which option draws a broad conclusion from very limited evidence?',
          explanation:
            'A hasty generalization draws a sweeping conclusion from too few examples. Meeting two rude people is not enough to judge an entire city.',
          standardCode: '8.RI.8',
        },
        {
          index: 3,
          question:
            'What is the purpose of a rebuttal in an argument?',
          type: 'short-answer',
          correctAnswer:
            'A rebuttal responds to a counterargument by explaining why the opposing view is flawed or less convincing, strengthening the original claim.',
          hint: 'Think about what comes after acknowledging the other side.',
          explanation:
            'A rebuttal addresses the counterargument head-on, demonstrating that the original claim still holds despite the opposition.',
          standardCode: '8.RI.8',
        },
        {
          index: 4,
          question:
            'An ad hominem fallacy occurs when someone:',
          type: 'multiple-choice',
          options: [
            'Attacks the person making the argument instead of the argument itself.',
            'Uses too many facts.',
            'Agrees with the opposing side.',
            'Provides a strong counterargument.',
          ],
          correctAnswer:
            'Attacks the person making the argument instead of the argument itself.',
          hint: '"Ad hominem" means "to the person" in Latin.',
          explanation:
            'An ad hominem fallacy diverts attention from the argument to the person, which is a logical error because a person\'s character does not determine whether their argument is valid.',
          standardCode: '8.RI.8',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Explain the difference between relevant evidence and sufficient evidence.',
            type: 'short-answer',
            correctAnswer:
              'Relevant evidence directly connects to the claim. Sufficient evidence means there is enough of it to be convincing. Evidence can be relevant but not sufficient (one good example is not enough) or sufficient in quantity but not relevant (many facts that do not connect to the claim).',
            standardCode: '8.RI.8',
          },
          {
            question:
              'Which logical fallacy presents only two options when more exist?',
            type: 'multiple-choice',
            options: [
              'False dilemma',
              'Hasty generalization',
              'Ad hominem',
              'Bandwagon',
            ],
            correctAnswer: 'False dilemma',
            standardCode: '8.RI.8',
          },
          {
            question:
              'Delineate the following argument by identifying the claim, reason, and evidence: "Schools should offer free breakfast because hungry students cannot focus. A 2022 study found that schools providing free breakfast saw a 15% increase in student attention spans."',
            type: 'short-answer',
            correctAnswer:
              'Claim: Schools should offer free breakfast. Reason: Hungry students cannot focus. Evidence: A 2022 study found that free breakfast schools saw a 15% increase in attention spans.',
            standardCode: '8.RI.8',
          },
        ],
      },
    },
  },
  {
    slug: 'grade8-ela-analyzing-rhetoric',
    title: 'Analyzing Rhetoric',
    description:
      'Analyze how authors use rhetorical appeals — ethos, pathos, and logos — to persuade an audience in speeches and essays.',
    subject: 'ela',
    grade: 8,
    gradeBand: '6-8',
    topicCluster: 'Reading Informational',
    standardCodes: ['8.RI.6', '8.RI.8'],
    content: {
      intro: {
        title: 'Analyzing Rhetoric',
        text: 'Rhetoric is the art of persuasion. Every time someone tries to convince you of something — in a speech, an advertisement, or an essay — they use rhetorical strategies. The three classical appeals are ethos (credibility), pathos (emotion), and logos (logic). In this module you will learn to identify these appeals and evaluate how effectively an author uses them.',
        culturalHook:
          'Think about a public figure whose words moved a crowd. Were they trusted? Did they stir emotions? Did they present strong facts? They were using rhetoric.',
      },
      segments: [
        {
          index: 0,
          title: 'Ethos: The Appeal to Credibility',
          text: 'Ethos is an appeal to the author\'s or speaker\'s credibility. Authors build ethos by demonstrating expertise, citing reputable sources, and presenting themselves as trustworthy. A doctor writing about health has built-in ethos; a student can build ethos by citing research and showing knowledge of the topic.',
          keyVocabulary: ['ethos', 'credibility', 'expertise', 'trustworthy'],
        },
        {
          index: 1,
          title: 'Pathos: The Appeal to Emotion',
          text: 'Pathos appeals to the audience\'s emotions — sympathy, fear, anger, hope, or pride. Authors create pathos through vivid descriptions, personal stories, and emotionally charged language. While pathos is powerful, relying on it alone without evidence can be manipulative. Effective writers balance pathos with logos.',
          keyVocabulary: ['pathos', 'emotion', 'vivid description', 'emotionally charged language'],
          example:
            'A speech about homelessness might describe a single mother shivering on a park bench with her children. This vivid image creates sympathy (pathos) and makes the audience more receptive to the speaker\'s argument.',
        },
        {
          index: 2,
          title: 'Logos: The Appeal to Logic',
          text: 'Logos uses facts, statistics, data, and logical reasoning to persuade. A logos-heavy argument walks the reader through a clear chain of reasoning: "If A is true, and B follows from A, then C must also be true." Charts, numbers, and expert studies are common tools of logos.',
          keyVocabulary: ['logos', 'logic', 'statistics', 'data', 'reasoning'],
        },
        {
          index: 3,
          title: 'Evaluating Rhetorical Effectiveness',
          text: 'To evaluate rhetoric, identify which appeals the author uses, assess whether they are appropriate for the audience and purpose, and determine whether the appeals work together or undermine each other. A speech that is all pathos and no logos may be emotionally moving but intellectually weak. A paper that is all logos and no ethos may fail to gain the reader\'s trust.',
          keyVocabulary: ['rhetorical effectiveness', 'audience', 'purpose', 'balance'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'A scientist begins an article by listing her degrees and years of research experience. Which rhetorical appeal is she building?',
          type: 'multiple-choice',
          options: ['Ethos', 'Pathos', 'Logos', 'Irony'],
          correctAnswer: 'Ethos',
          hint: 'She is establishing her credibility.',
          explanation:
            'By listing credentials, the scientist builds ethos — she is showing the audience that she is a trustworthy and knowledgeable source.',
          standardCode: '8.RI.6',
        },
        {
          index: 1,
          question:
            'An advertisement shows a sad puppy and asks viewers to donate to an animal shelter. What rhetorical appeal is being used?',
          type: 'multiple-choice',
          options: ['Pathos', 'Logos', 'Ethos', 'Hyperbole'],
          correctAnswer: 'Pathos',
          hint: 'Think about what emotion the image is designed to provoke.',
          explanation:
            'The sad puppy is designed to evoke sympathy, which is an appeal to pathos — the audience\'s emotions.',
          standardCode: '8.RI.6',
        },
        {
          index: 2,
          question:
            'Why is it important to balance pathos with logos in a persuasive text?',
          type: 'short-answer',
          correctAnswer:
            'Balancing pathos with logos ensures the argument is both emotionally compelling and logically sound. Pathos alone can be manipulative, while logos alone may not engage the audience.',
          hint: 'Think about what happens when one appeal dominates completely.',
          explanation:
            'An effective argument engages both the heart and the mind. Overreliance on one appeal creates weaknesses that a critical reader will notice.',
          standardCode: '8.RI.8',
        },
        {
          index: 3,
          question:
            'A speech includes the statistic: "Seventy percent of students support longer recess." Which appeal does this represent?',
          type: 'multiple-choice',
          options: ['Logos', 'Pathos', 'Ethos', 'Metaphor'],
          correctAnswer: 'Logos',
          hint: 'Statistics and data are tools of which appeal?',
          explanation:
            'Statistics are factual data used to support a logical argument, making this an example of logos.',
          standardCode: '8.RI.8',
        },
        {
          index: 4,
          question:
            'Explain how an author could use all three rhetorical appeals in a single paragraph about clean water access.',
          type: 'short-answer',
          correctAnswer:
            'The author could cite their experience studying water systems (ethos), describe a family drinking contaminated water (pathos), and present data showing that 2 billion people lack clean water (logos).',
          hint: 'Think about including credibility, emotion, and facts together.',
          explanation:
            'Combining ethos, pathos, and logos in a single paragraph creates a well-rounded, persuasive argument that engages the audience on multiple levels.',
          standardCode: '8.RI.6',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Define ethos, pathos, and logos and explain how each contributes to persuasion.',
            type: 'short-answer',
            correctAnswer:
              'Ethos appeals to credibility and trust. Pathos appeals to emotions. Logos appeals to logic and evidence. Together they create a persuasive argument that is credible, emotionally engaging, and logically sound.',
            standardCode: '8.RI.6',
          },
          {
            question:
              'An argument that relies entirely on emotional stories without any factual evidence is weak because it lacks:',
            type: 'multiple-choice',
            options: ['Logos', 'Pathos', 'A title', 'Dialogue'],
            correctAnswer: 'Logos',
            standardCode: '8.RI.8',
          },
          {
            question:
              'Read the following excerpt: "As a 20-year veteran firefighter, I have seen firsthand how smoke detectors save lives. Last year alone, detectors alerted families in 300,000 fires nationwide. Please — install one today before it is too late." Identify the ethos, pathos, and logos in this passage.',
            type: 'short-answer',
            correctAnswer:
              'Ethos: "20-year veteran firefighter" establishes credibility. Logos: "300,000 fires nationwide" provides factual data. Pathos: "Please — install one today before it is too late" appeals to urgency and fear.',
            standardCode: '8.RI.6',
          },
        ],
      },
    },
  },

  // ─── Writing (4 modules) ──────────────────────────────────────
  {
    slug: 'grade8-ela-argument-writing',
    title: 'Argument Writing with Sophisticated Structure',
    description:
      'Write arguments to support claims with clear reasons and relevant evidence, using an organized structure that includes counterarguments and rebuttals.',
    subject: 'ela',
    grade: 8,
    gradeBand: '6-8',
    topicCluster: 'Writing',
    standardCodes: ['8.W.1'],
    content: {
      intro: {
        title: 'Argument Writing with Sophisticated Structure',
        text: 'Strong argument writing goes beyond simply stating an opinion. It presents a clear claim, supports it with relevant evidence, addresses counterarguments, and provides rebuttals — all within a logical, well-organized structure. In this module you will learn to craft arguments that are compelling and fair-minded.',
        culturalHook:
          'Think of a time you had to convince a parent or teacher to change a rule. The stronger your reasons and the more you anticipated their objections, the better your chances.',
      },
      segments: [
        {
          index: 0,
          title: 'Crafting a Clear Claim',
          text: 'A claim is a debatable statement that takes a clear position. "Pizza is delicious" is an opinion; "Schools should serve healthier lunches to improve student performance" is a claim. A strong claim is specific, arguable, and sets up the rest of the essay. Avoid vague claims that cannot be supported with evidence.',
          keyVocabulary: ['claim', 'debatable', 'specific', 'arguable'],
        },
        {
          index: 1,
          title: 'Organizing Evidence and Reasoning',
          text: 'After your claim, organize body paragraphs around distinct reasons. Each reason should be supported by specific evidence — statistics, expert quotes, case studies, or examples. Use transitions to connect ideas logically: "Furthermore," "In addition," "As a result." End each paragraph by explaining how the evidence supports the claim.',
          keyVocabulary: ['body paragraph', 'transitions', 'supporting evidence', 'reasoning'],
          example:
            'Claim: "Schools should start later." Reason 1: Students need more sleep. Evidence: A CDC study found that 73% of high school students do not get enough sleep. Explanation: This lack of sleep directly impairs academic performance, supporting the need for later start times.',
        },
        {
          index: 2,
          title: 'Counterarguments and Rebuttals',
          text: 'Acknowledging the opposing side makes your argument stronger, not weaker. Introduce a counterargument with phrases like "Some may argue that..." or "Critics claim that..." Then provide a rebuttal explaining why the counterargument is less convincing. This shows you have considered multiple perspectives and strengthens your credibility.',
          keyVocabulary: ['counterargument', 'rebuttal', 'credibility', 'opposing view'],
        },
        {
          index: 3,
          title: 'Writing a Strong Conclusion',
          text: 'Your conclusion should restate your claim in a new way, summarize your strongest evidence, and leave the reader with a call to action or thought-provoking statement. Avoid introducing new evidence in the conclusion. Instead, emphasize the significance of your argument and why it matters.',
          keyVocabulary: ['conclusion', 'call to action', 'significance', 'restate'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'Which of the following is a strong, arguable claim?',
          type: 'multiple-choice',
          options: [
            '"Schools should require community service because it builds empathy and civic responsibility."',
            '"Community service is nice."',
            '"Some people like community service."',
            '"Community service exists in many schools."',
          ],
          correctAnswer:
            '"Schools should require community service because it builds empathy and civic responsibility."',
          hint: 'A strong claim takes a clear position and provides a reason.',
          explanation:
            'This claim is specific, debatable, and includes a reason, making it suitable as the foundation of an argument essay.',
          standardCode: '8.W.1',
        },
        {
          index: 1,
          question:
            'Why does addressing a counterargument strengthen your essay?',
          type: 'short-answer',
          correctAnswer:
            'Addressing a counterargument shows you have considered other perspectives and can still defend your position, which increases your credibility and makes your argument more persuasive.',
          hint: 'Think about what ignoring the other side suggests to the reader.',
          explanation:
            'Readers are more likely to trust a writer who acknowledges opposing views than one who ignores them. A rebuttal demonstrates thorough, fair-minded thinking.',
          standardCode: '8.W.1',
        },
        {
          index: 2,
          question:
            'What should each body paragraph in an argument essay contain?',
          type: 'multiple-choice',
          options: [
            'A reason, supporting evidence, and an explanation connecting the evidence to the claim.',
            'Only personal opinions.',
            'A list of vocabulary words.',
            'A summary of the entire essay.',
          ],
          correctAnswer:
            'A reason, supporting evidence, and an explanation connecting the evidence to the claim.',
          hint: 'Think about the three-part structure of a body paragraph.',
          explanation:
            'Each body paragraph should present one reason, back it up with evidence, and explain how the evidence supports the overall claim.',
          standardCode: '8.W.1',
        },
        {
          index: 3,
          question:
            'Write a counterargument and rebuttal for the claim: "Students should be allowed to use phones in class for educational purposes."',
          type: 'short-answer',
          correctAnswer:
            'Counterargument: Some may argue that phones are distracting and students will use them for social media. Rebuttal: While distraction is a valid concern, schools can implement app-blocking software and clear usage policies to keep students focused on educational tasks.',
          hint: 'First state what the opposition would say, then explain why your claim still holds.',
          explanation:
            'A strong counterargument-rebuttal pair acknowledges the opposing concern and provides a practical solution or logical response.',
          standardCode: '8.W.1',
        },
        {
          index: 4,
          question:
            'Which of the following should NOT appear in a conclusion?',
          type: 'multiple-choice',
          options: [
            'New evidence not previously discussed.',
            'A restatement of the claim.',
            'A summary of the strongest evidence.',
            'A call to action.',
          ],
          correctAnswer: 'New evidence not previously discussed.',
          hint: 'The conclusion wraps up; it does not introduce new material.',
          explanation:
            'Introducing new evidence in the conclusion confuses the reader and weakens the essay\'s structure. The conclusion should synthesize and emphasize, not add new information.',
          standardCode: '8.W.1',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Explain the role of a counterargument and rebuttal in an argument essay.',
            type: 'short-answer',
            correctAnswer:
              'A counterargument presents an opposing view, and a rebuttal explains why that view is less convincing. Together they strengthen the essay by showing the writer has considered other perspectives.',
            standardCode: '8.W.1',
          },
          {
            question:
              'A strong claim must be:',
            type: 'multiple-choice',
            options: [
              'Specific, debatable, and supportable with evidence.',
              'A fact that everyone agrees on.',
              'As vague as possible.',
              'An emotional outburst.',
            ],
            correctAnswer: 'Specific, debatable, and supportable with evidence.',
            standardCode: '8.W.1',
          },
          {
            question:
              'Draft a claim, one supporting reason with evidence, and a brief counterargument with rebuttal on the topic of year-round schooling.',
            type: 'short-answer',
            correctAnswer:
              'Claim: Schools should adopt year-round schedules to reduce learning loss. Reason: Students forget material during long summer breaks. Evidence: Research shows students lose up to two months of math skills over summer. Counterargument: Some argue families need summer for vacations. Rebuttal: Year-round schedules include frequent shorter breaks that still allow family time.',
            standardCode: '8.W.1',
          },
        ],
      },
    },
  },
  {
    slug: 'grade8-ela-sustained-research',
    title: 'Sustained Research Projects',
    description:
      'Conduct short as well as more sustained research projects to answer a question, drawing on several sources and generating additional related questions for further research.',
    subject: 'ela',
    grade: 8,
    gradeBand: '6-8',
    topicCluster: 'Writing',
    standardCodes: ['8.W.7', '8.W.8'],
    content: {
      intro: {
        title: 'Sustained Research Projects',
        text: 'Research is a process of asking questions, finding credible sources, synthesizing information, and drawing conclusions. In eighth grade, you are expected to conduct both short, focused inquiries and longer projects that require multiple sources and deeper investigation. This module walks you through the research process from question to final product.',
        culturalHook:
          'Think of a topic you are genuinely curious about — the history of your town, how a technology works, or a social issue you care about. Research starts with real curiosity.',
      },
      segments: [
        {
          index: 0,
          title: 'Developing a Research Question',
          text: 'A strong research question is focused, open-ended, and researchable. Avoid questions that can be answered with a simple yes or no. Instead, ask "How" or "Why" questions: "How has deforestation affected biodiversity in the Amazon?" Your question should be narrow enough to explore thoroughly but broad enough to find multiple sources.',
          keyVocabulary: ['research question', 'focused', 'open-ended', 'researchable'],
        },
        {
          index: 1,
          title: 'Finding and Evaluating Sources',
          text: 'Use a variety of sources: books, academic articles, reputable websites, interviews, and primary documents. Evaluate each source for credibility by checking the author\'s expertise, the publication\'s reputation, the date of publication, and whether the information is corroborated by other sources. Avoid relying on a single source.',
          keyVocabulary: ['credibility', 'primary source', 'secondary source', 'corroborate'],
          example:
            'For a research project on water pollution, you might use a government environmental report (primary source), a university textbook chapter (secondary source), and a news article from a reputable outlet (secondary source).',
        },
        {
          index: 2,
          title: 'Synthesizing Information',
          text: 'Synthesis means combining information from multiple sources to create a new understanding. Do not simply summarize each source one at a time. Instead, organize your findings by theme or subtopic, drawing connections between sources. Note where sources agree, disagree, or provide complementary information.',
          keyVocabulary: ['synthesis', 'theme', 'complementary', 'connections'],
        },
        {
          index: 3,
          title: 'Generating Further Questions',
          text: 'Good research often raises new questions. As you investigate, note gaps in the available information or new directions that emerge. These "further questions" can extend your project, lead to additional research, or become the basis for future inquiry. Including them in your conclusion shows intellectual curiosity.',
          keyVocabulary: ['further questions', 'gaps', 'intellectual curiosity', 'inquiry'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'Which of the following is the strongest research question?',
          type: 'multiple-choice',
          options: [
            '"How has social media usage affected teen mental health over the past decade?"',
            '"Is social media bad?"',
            '"Do teenagers use social media?"',
            '"Social media."',
          ],
          correctAnswer:
            '"How has social media usage affected teen mental health over the past decade?"',
          hint: 'A strong research question is specific, open-ended, and researchable.',
          explanation:
            'This question is focused (teen mental health), open-ended (requires analysis, not yes/no), and researchable (can be investigated with data and studies).',
          standardCode: '8.W.7',
        },
        {
          index: 1,
          question:
            'What does it mean to synthesize sources rather than summarize them?',
          type: 'short-answer',
          correctAnswer:
            'Synthesizing means combining information from multiple sources by theme or idea to create a new understanding, rather than summarizing each source separately.',
          hint: 'Think about weaving sources together versus listing them.',
          explanation:
            'Synthesis integrates multiple perspectives into a cohesive analysis. Summarizing treats each source in isolation.',
          standardCode: '8.W.8',
        },
        {
          index: 2,
          question:
            'Why should you use multiple sources in a research project?',
          type: 'multiple-choice',
          options: [
            'Multiple sources provide different perspectives and help verify information.',
            'One source is always wrong.',
            'Teachers require it but it does not matter.',
            'Multiple sources make the bibliography longer.',
          ],
          correctAnswer:
            'Multiple sources provide different perspectives and help verify information.',
          hint: 'Think about credibility and completeness.',
          explanation:
            'Using multiple sources allows you to cross-check facts, see different perspectives, and build a more comprehensive understanding of the topic.',
          standardCode: '8.W.8',
        },
        {
          index: 3,
          question:
            'Explain why generating further questions is a sign of good research.',
          type: 'short-answer',
          correctAnswer:
            'Generating further questions shows intellectual curiosity and demonstrates that the researcher has engaged deeply enough with the topic to notice gaps, complexities, and new directions.',
          hint: 'Think about what it means when research raises more questions.',
          explanation:
            'Further questions indicate depth of engagement. They show the researcher is thinking critically rather than simply collecting surface-level information.',
          standardCode: '8.W.7',
        },
        {
          index: 4,
          question:
            'Which criterion is LEAST important when evaluating a source\'s credibility?',
          type: 'multiple-choice',
          options: [
            'The font size used in the article.',
            'The author\'s expertise.',
            'The reputation of the publisher.',
            'Whether the information is corroborated by other sources.',
          ],
          correctAnswer: 'The font size used in the article.',
          hint: 'Think about what actually affects the reliability of information.',
          explanation:
            'Font size is a formatting choice that has no bearing on credibility. Author expertise, publisher reputation, and corroboration are all meaningful criteria.',
          standardCode: '8.W.8',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'List four criteria for evaluating the credibility of a research source.',
            type: 'short-answer',
            correctAnswer:
              'Author\'s expertise, publication\'s reputation, date of publication, and corroboration by other sources.',
            standardCode: '8.W.8',
          },
          {
            question:
              'Synthesis in research means:',
            type: 'multiple-choice',
            options: [
              'Combining information from multiple sources to create a new understanding.',
              'Copying information from one source.',
              'Writing a summary of a single article.',
              'Listing sources alphabetically.',
            ],
            correctAnswer:
              'Combining information from multiple sources to create a new understanding.',
            standardCode: '8.W.8',
          },
          {
            question:
              'Write a focused research question about a topic of your choice and explain why it is strong.',
            type: 'short-answer',
            correctAnswer:
              'Example: "How do community gardens in urban areas affect neighborhood health and social cohesion?" This is strong because it is specific (community gardens, urban areas), open-ended (requires analysis), and researchable (data and studies exist).',
            standardCode: '8.W.7',
          },
        ],
      },
    },
  },
  {
    slug: 'grade8-ela-narrative-with-pacing',
    title: 'Narrative Writing with Pacing',
    description:
      'Write narratives using effective technique, relevant descriptive details, and well-structured event sequences with deliberate pacing.',
    subject: 'ela',
    grade: 8,
    gradeBand: '6-8',
    topicCluster: 'Writing',
    standardCodes: ['8.W.3'],
    content: {
      intro: {
        title: 'Narrative Writing with Pacing',
        text: 'Great narratives do not just tell what happened — they control how the reader experiences the events. Pacing is the speed at which a story unfolds. By slowing down during tense moments and speeding up through transitions, writers create rhythm and suspense. In this module you will learn techniques to control pacing and craft engaging narratives.',
        culturalHook:
          'Think of a storyteller who makes you lean in during the scary part and rush through the boring details. That is pacing at work.',
      },
      segments: [
        {
          index: 0,
          title: 'Understanding Pacing',
          text: 'Pacing is the rate at which events unfold in a narrative. Fast pacing uses short sentences, quick dialogue, and action verbs to create excitement or urgency. Slow pacing uses longer sentences, detailed descriptions, and internal reflection to build tension or develop character. Effective writers vary pacing throughout a story to keep the reader engaged.',
          keyVocabulary: ['pacing', 'fast pacing', 'slow pacing', 'rhythm'],
        },
        {
          index: 1,
          title: 'Techniques for Slowing Down',
          text: 'To slow pacing, use sensory details, internal monologue, and expanded descriptions. Describe what the character sees, hears, smells, and feels. Show the character\'s thoughts. Stretch a single moment across several sentences. This is especially effective during climactic scenes where you want the reader to feel every second.',
          keyVocabulary: ['sensory details', 'internal monologue', 'expanded description'],
          example:
            'Instead of "She opened the door," write: "Her fingers trembled on the cold brass handle. She could hear her own heartbeat in the silence. Slowly, she turned the knob, feeling the click reverberate up her arm."',
        },
        {
          index: 2,
          title: 'Techniques for Speeding Up',
          text: 'To speed up pacing, use short sentences, fragments, and rapid dialogue. Cut unnecessary descriptions. Summarize less important events in a sentence or two. Time transitions like "Three weeks later" or "By morning" skip over uneventful periods.',
          keyVocabulary: ['short sentences', 'fragments', 'time transitions', 'summary'],
        },
        {
          index: 3,
          title: 'Structuring the Event Sequence',
          text: 'A well-paced narrative has a clear structure: an engaging opening that hooks the reader, rising action that builds tension, a climax where pacing often slows for maximum impact, falling action, and a resolution. Plan your pacing by deciding which moments deserve slow, detailed treatment and which should move quickly.',
          keyVocabulary: ['rising action', 'climax', 'falling action', 'resolution', 'structure'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'What is pacing in narrative writing?',
          type: 'multiple-choice',
          options: [
            'The rate at which events unfold in a story.',
            'The number of pages in a story.',
            'The font size of the text.',
            'The number of characters in a story.',
          ],
          correctAnswer: 'The rate at which events unfold in a story.',
          hint: 'Think about speed and rhythm in storytelling.',
          explanation:
            'Pacing controls how quickly or slowly the reader moves through events, creating effects like suspense, excitement, or reflection.',
          standardCode: '8.W.3',
        },
        {
          index: 1,
          question:
            'Which technique slows pacing during a tense scene?',
          type: 'multiple-choice',
          options: [
            'Expanding sensory details and internal monologue.',
            'Using short fragments and summary.',
            'Skipping to the next scene.',
            'Removing all description.',
          ],
          correctAnswer: 'Expanding sensory details and internal monologue.',
          hint: 'To slow down, you add more detail to stretch the moment.',
          explanation:
            'Sensory details and internal monologue stretch a moment, making the reader experience it in near-real-time, which increases tension.',
          standardCode: '8.W.3',
        },
        {
          index: 2,
          question:
            'Rewrite the sentence "He ran away" using slow pacing techniques.',
          type: 'short-answer',
          correctAnswer:
            'His legs burned as his sneakers pounded the gravel. Each breath came ragged and sharp. Behind him, the sound of footsteps grew louder, and his mind screamed one word: faster.',
          hint: 'Add sensory details, internal thoughts, and stretch the moment.',
          explanation:
            'Expanding a single action into multiple sensory and emotional details slows the pacing and draws the reader into the character\'s experience.',
          standardCode: '8.W.3',
        },
        {
          index: 3,
          question:
            'When in a story should pacing typically slow down the most?',
          type: 'multiple-choice',
          options: [
            'During the climax or most tense moments.',
            'During the opening sentence only.',
            'During the bibliography.',
            'During time transitions.',
          ],
          correctAnswer: 'During the climax or most tense moments.',
          hint: 'Think about which moment deserves the most attention.',
          explanation:
            'Slowing pacing at the climax allows the reader to fully experience the most important and dramatic moment of the story.',
          standardCode: '8.W.3',
        },
        {
          index: 4,
          question:
            'How do time transitions like "Three weeks later" affect pacing?',
          type: 'short-answer',
          correctAnswer:
            'Time transitions speed up pacing by skipping over uneventful periods, moving the story quickly to the next important event.',
          hint: 'Think about what happens to the in-between time.',
          explanation:
            'Time transitions are a pacing tool that condenses or eliminates less important periods, keeping the narrative focused and moving forward.',
          standardCode: '8.W.3',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Explain the difference between fast pacing and slow pacing, and give one technique for each.',
            type: 'short-answer',
            correctAnswer:
              'Fast pacing uses short sentences and summary to move quickly through events. Slow pacing uses sensory details and internal monologue to stretch important moments.',
            standardCode: '8.W.3',
          },
          {
            question:
              'Which of the following best demonstrates slow pacing?',
            type: 'multiple-choice',
            options: [
              '"The candle flickered. Shadows danced across the wall. She held her breath, counting the seconds."',
              '"She left. It was over. The end."',
              '"Three years passed and everything changed."',
              '"He ate, slept, and went to school."',
            ],
            correctAnswer:
              '"The candle flickered. Shadows danced across the wall. She held her breath, counting the seconds."',
            standardCode: '8.W.3',
          },
          {
            question:
              'Write a three-sentence opening for a narrative that uses slow pacing to build suspense.',
            type: 'short-answer',
            correctAnswer:
              'The floorboard creaked beneath her foot, and she froze. Somewhere in the darkness ahead, a faucet dripped in a slow, steady rhythm. She strained her ears, waiting for the sound she hoped would never come.',
            standardCode: '8.W.3',
          },
        ],
      },
    },
  },
  {
    slug: 'grade8-ela-informational-writing',
    title: 'Informational Writing',
    description:
      'Write informative/explanatory texts to examine a topic and convey ideas through the selection, organization, and analysis of relevant content.',
    subject: 'ela',
    grade: 8,
    gradeBand: '6-8',
    topicCluster: 'Writing',
    standardCodes: ['8.W.2'],
    content: {
      intro: {
        title: 'Informational Writing',
        text: 'Informational writing explains a topic clearly and thoroughly. Unlike argument writing, it does not take a side — it informs. Eighth-grade informational writing requires you to organize complex ideas, use precise language, incorporate evidence, and develop a topic with well-chosen facts, definitions, details, and examples.',
        culturalHook:
          'Think about a how-to guide or encyclopedia entry you have read. The writer\'s job was not to persuade you but to help you understand. That is informational writing.',
      },
      segments: [
        {
          index: 0,
          title: 'Introducing the Topic',
          text: 'An effective introduction previews the topic, provides necessary background, and includes a thesis statement that tells the reader what the text will explain. Use a hook — a surprising fact, a question, or a vivid scenario — to draw the reader in. Then narrow the focus to your specific topic.',
          keyVocabulary: ['introduction', 'thesis statement', 'hook', 'background'],
        },
        {
          index: 1,
          title: 'Organizing Ideas',
          text: 'Choose an organizational structure that fits your topic: definition, classification, comparison, cause-effect, or process. Use headings, topic sentences, and transitions to guide the reader through each section. Each paragraph should focus on one subtopic and connect logically to the next.',
          keyVocabulary: ['organizational structure', 'headings', 'topic sentences', 'transitions'],
          example:
            'An informational text about renewable energy might use classification structure: one section on solar, one on wind, one on hydroelectric, each with its own topic sentence, evidence, and analysis.',
        },
        {
          index: 2,
          title: 'Developing the Topic with Evidence',
          text: 'Develop your topic with well-chosen facts, concrete details, quotations, and examples. Each piece of evidence should be followed by analysis — explain what the evidence means and how it relates to your topic. Avoid dropping in facts without context.',
          keyVocabulary: ['facts', 'concrete details', 'quotations', 'analysis'],
        },
        {
          index: 3,
          title: 'Precise Language and Formal Style',
          text: 'Informational writing requires precise, domain-specific vocabulary and a formal tone. Avoid slang, contractions, and first person ("I think"). Define technical terms when you introduce them. Use varied sentence structures to maintain reader interest while keeping the tone objective.',
          keyVocabulary: ['precise language', 'domain-specific vocabulary', 'formal tone', 'objective'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'What is the purpose of informational writing?',
          type: 'multiple-choice',
          options: [
            'To explain a topic clearly and help the reader understand.',
            'To persuade the reader to agree with a position.',
            'To entertain with a fictional story.',
            'To express personal feelings in a journal.',
          ],
          correctAnswer:
            'To explain a topic clearly and help the reader understand.',
          hint: 'Informational writing informs rather than persuades or entertains.',
          explanation:
            'The primary purpose of informational writing is to convey information objectively, helping the reader gain understanding of a topic.',
          standardCode: '8.W.2',
        },
        {
          index: 1,
          question:
            'Why should you include analysis after presenting a piece of evidence?',
          type: 'short-answer',
          correctAnswer:
            'Analysis explains what the evidence means and how it connects to the topic, preventing the reader from misunderstanding or missing the significance of the evidence.',
          hint: 'What happens when you present a fact without explaining it?',
          explanation:
            'Evidence without analysis is just a disconnected fact. Analysis bridges the gap between evidence and the reader\'s understanding.',
          standardCode: '8.W.2',
        },
        {
          index: 2,
          question:
            'Which of the following best demonstrates formal, informational writing style?',
          type: 'multiple-choice',
          options: [
            '"Photosynthesis is the process by which plants convert sunlight into energy."',
            '"Plants are totally awesome at making food from the sun, LOL."',
            '"I think plants are cool because they make their own food."',
            '"Plants. Sun. Food. Done."',
          ],
          correctAnswer:
            '"Photosynthesis is the process by which plants convert sunlight into energy."',
          hint: 'Look for precise vocabulary, formal tone, and objective language.',
          explanation:
            'This sentence uses domain-specific vocabulary ("photosynthesis"), formal tone, and objective language — all hallmarks of informational writing.',
          standardCode: '8.W.2',
        },
        {
          index: 3,
          question:
            'What role do headings and topic sentences play in informational writing?',
          type: 'short-answer',
          correctAnswer:
            'Headings and topic sentences organize the text by signaling what each section or paragraph will cover, helping the reader navigate and understand the structure of the information.',
          hint: 'Think about how you scan a textbook chapter.',
          explanation:
            'Headings provide a roadmap for the text, and topic sentences focus each paragraph on a single subtopic, making complex information accessible.',
          standardCode: '8.W.2',
        },
        {
          index: 4,
          question:
            'Which organizational structure would work best for a text explaining the steps of the water cycle?',
          type: 'multiple-choice',
          options: [
            'Process/sequential order.',
            'Compare and contrast.',
            'Argument with counterargument.',
            'Narrative with dialogue.',
          ],
          correctAnswer: 'Process/sequential order.',
          hint: 'The water cycle happens in a sequence of stages.',
          explanation:
            'The water cycle follows a series of steps (evaporation, condensation, precipitation, collection), making a process/sequential structure the best fit.',
          standardCode: '8.W.2',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Explain the difference between informational writing and argument writing.',
            type: 'short-answer',
            correctAnswer:
              'Informational writing objectively explains a topic without taking a side. Argument writing takes a clear position (claim) and supports it with evidence to persuade the reader.',
            standardCode: '8.W.2',
          },
          {
            question:
              'Precise, domain-specific vocabulary is important in informational writing because it:',
            type: 'multiple-choice',
            options: [
              'Conveys information accurately and establishes the writer\'s knowledge.',
              'Makes the text harder to read.',
              'Is required only in science, not ELA.',
              'Replaces the need for evidence.',
            ],
            correctAnswer:
              'Conveys information accurately and establishes the writer\'s knowledge.',
            standardCode: '8.W.2',
          },
          {
            question:
              'Write an introductory paragraph for an informational text about the causes of deforestation. Include a hook, background, and thesis statement.',
            type: 'short-answer',
            correctAnswer:
              'Every minute, an area of forest the size of 27 soccer fields is destroyed. Deforestation — the clearing of trees on a large scale — has accelerated dramatically over the past century. This text examines the primary causes of deforestation, including agricultural expansion, logging, and urban development, and explains how each contributes to the loss of the world\'s forests.',
            standardCode: '8.W.2',
          },
        ],
      },
    },
  },

  // ─── Speaking & Listening (3 modules) ─────────────────────────
  {
    slug: 'grade8-ela-collaborative-discussion',
    title: 'Collaborative Discussion',
    description:
      'Engage effectively in a range of collaborative discussions, coming prepared, building on others\' ideas, and posing questions that connect contributions.',
    subject: 'ela',
    grade: 8,
    gradeBand: '6-8',
    topicCluster: 'Speaking & Listening',
    standardCodes: ['8.SL.1'],
    content: {
      intro: {
        title: 'Collaborative Discussion',
        text: 'Collaborative discussion is more than just talking in a group. It requires preparation, active listening, thoughtful responses, and the ability to build on others\' ideas. In this module you will learn strategies for engaging productively in discussions, including how to prepare, how to respond to peers, and how to pose questions that deepen the conversation.',
        culturalHook:
          'Think about a time your family or community came together to make a decision. Everyone\'s voice mattered. That is collaborative discussion.',
      },
      segments: [
        {
          index: 0,
          title: 'Coming Prepared',
          text: 'Effective discussion begins before you speak. Read or study the material ahead of time. Take notes on key ideas, questions, and connections to other topics. Having evidence and examples ready allows you to contribute meaningfully rather than sharing uninformed opinions.',
          keyVocabulary: ['preparation', 'evidence', 'notes', 'informed contribution'],
        },
        {
          index: 1,
          title: 'Building on Others\' Ideas',
          text: 'Active listeners do not simply wait for their turn to talk. They pay attention to what others say and build on those ideas. Use phrases like "I agree with ___ because..." or "That\'s an interesting point, and it connects to..." or "I see it differently because..." This creates a conversation rather than a series of unrelated monologues.',
          keyVocabulary: ['active listening', 'building on ideas', 'connecting', 'conversation'],
          example:
            'If a peer says, "I think the author uses symbolism to show loneliness," you might respond, "I agree, and I noticed the repeated image of empty rooms supports that interpretation."',
        },
        {
          index: 2,
          title: 'Posing Thoughtful Questions',
          text: 'Good questions move discussions forward. Ask clarifying questions ("Can you explain what you mean by...?"), probing questions ("What evidence supports that?"), and connecting questions ("How does that relate to what ___ said earlier?"). Avoid questions that shut down conversation, such as "Don\'t you think you\'re wrong?"',
          keyVocabulary: ['clarifying question', 'probing question', 'connecting question'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'Why is it important to come prepared to a collaborative discussion?',
          type: 'multiple-choice',
          options: [
            'Preparation allows you to contribute informed ideas supported by evidence.',
            'Preparation is not important; discussions should be spontaneous.',
            'You only need to prepare if you are the leader.',
            'Preparation means memorizing a script.',
          ],
          correctAnswer:
            'Preparation allows you to contribute informed ideas supported by evidence.',
          hint: 'Think about the quality of your contributions when you have studied the material.',
          explanation:
            'Coming prepared with notes, evidence, and questions ensures meaningful contributions and moves the discussion forward productively.',
          standardCode: '8.SL.1',
        },
        {
          index: 1,
          question:
            'Which phrase best demonstrates building on a peer\'s idea?',
          type: 'multiple-choice',
          options: [
            '"That connects to what Maria said earlier about symbolism, and I\'d add..."',
            '"That\'s wrong."',
            '"I wasn\'t listening. What did you say?"',
            '"Let me change the topic."',
          ],
          correctAnswer:
            '"That connects to what Maria said earlier about symbolism, and I\'d add..."',
          hint: 'Building on ideas means connecting to what someone else said.',
          explanation:
            'This response acknowledges a peer\'s contribution, connects it to another idea, and extends the discussion — all hallmarks of building on others\' ideas.',
          standardCode: '8.SL.1',
        },
        {
          index: 2,
          question:
            'What is the difference between a clarifying question and a probing question?',
          type: 'short-answer',
          correctAnswer:
            'A clarifying question asks the speaker to explain or restate something unclear. A probing question pushes deeper, asking for evidence or further reasoning behind the speaker\'s point.',
          hint: 'One seeks understanding; the other seeks depth.',
          explanation:
            'Clarifying questions resolve confusion, while probing questions extend thinking. Both are valuable in collaborative discussion.',
          standardCode: '8.SL.1',
        },
        {
          index: 3,
          question:
            'Which type of question should you avoid in a collaborative discussion?',
          type: 'multiple-choice',
          options: [
            'Questions that attack the speaker personally or shut down conversation.',
            'Clarifying questions.',
            'Probing questions.',
            'Connecting questions.',
          ],
          correctAnswer:
            'Questions that attack the speaker personally or shut down conversation.',
          hint: 'Think about which questions are not constructive.',
          explanation:
            'Personal attacks and dismissive questions undermine the collaborative environment. Effective discussions require respect and openness.',
          standardCode: '8.SL.1',
        },
        {
          index: 4,
          question:
            'Give an example of a connecting question you might ask during a book discussion.',
          type: 'short-answer',
          correctAnswer:
            '"How does your point about the character\'s motivation connect to what James said earlier about the theme of sacrifice?"',
          hint: 'A connecting question links two different contributions together.',
          explanation:
            'Connecting questions weave together different participants\' ideas, creating a richer and more cohesive discussion.',
          standardCode: '8.SL.1',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Describe three strategies for engaging productively in collaborative discussion.',
            type: 'short-answer',
            correctAnswer:
              'Come prepared with notes and evidence, build on others\' ideas by referencing what they said, and pose thoughtful questions that deepen the conversation.',
            standardCode: '8.SL.1',
          },
          {
            question:
              'Active listening in a discussion means:',
            type: 'multiple-choice',
            options: [
              'Paying attention to what others say and responding to their ideas.',
              'Waiting silently for your turn without listening.',
              'Preparing your response while someone else is talking.',
              'Agreeing with everything others say.',
            ],
            correctAnswer:
              'Paying attention to what others say and responding to their ideas.',
            standardCode: '8.SL.1',
          },
          {
            question:
              'Write a response that builds on the following peer statement: "I think the poem\'s repeated use of darkness represents the character\'s depression."',
            type: 'short-answer',
            correctAnswer:
              '"I agree that darkness symbolizes depression, and I\'d add that the brief mentions of light in stanzas three and five might represent moments of hope, creating a contrast that makes the darkness feel even heavier."',
            standardCode: '8.SL.1',
          },
        ],
      },
    },
  },
  {
    slug: 'grade8-ela-presenting-claims',
    title: 'Presenting Claims and Findings',
    description:
      'Present claims and findings, emphasizing salient points in a focused manner with relevant evidence, sound reasoning, and well-chosen details.',
    subject: 'ela',
    grade: 8,
    gradeBand: '6-8',
    topicCluster: 'Speaking & Listening',
    standardCodes: ['8.SL.4'],
    content: {
      intro: {
        title: 'Presenting Claims and Findings',
        text: 'Presenting claims effectively means organizing your ideas, selecting the most important evidence, and delivering your argument clearly and confidently. Whether you are presenting research findings or arguing a position, you need to emphasize key points, use evidence strategically, and engage your audience. This module prepares you to present with clarity and impact.',
        culturalHook:
          'Think of a speaker who held your attention. What did they do? Chances are they were organized, passionate, and supported their ideas with strong evidence.',
      },
      segments: [
        {
          index: 0,
          title: 'Organizing Your Presentation',
          text: 'Structure your presentation with a clear opening, body, and closing. The opening should state your claim and preview your main points. The body presents evidence organized by key reasons. The closing summarizes your argument and ends with a memorable statement or call to action. Use transitions between sections to guide your audience.',
          keyVocabulary: ['opening', 'body', 'closing', 'transitions', 'preview'],
        },
        {
          index: 1,
          title: 'Emphasizing Salient Points',
          text: 'Not all evidence is equally important. Identify your strongest, most compelling points and give them the most time and emphasis. Use vocal emphasis — pausing before a key point, speaking slowly during important evidence, or raising your voice slightly. Visual aids such as charts or images can also highlight key information.',
          keyVocabulary: ['salient points', 'vocal emphasis', 'visual aids', 'compelling'],
          example:
            'If your strongest evidence is a statistic showing a 30% improvement, pause before stating it, say the number slowly and clearly, and display it on a slide.',
        },
        {
          index: 2,
          title: 'Using Evidence and Reasoning',
          text: 'Every claim you present should be supported by specific evidence. Cite your sources briefly ("According to a 2023 study by..."). After presenting evidence, explain how it supports your claim. This reasoning is what makes your presentation persuasive rather than just informative.',
          keyVocabulary: ['cite sources', 'specific evidence', 'reasoning', 'persuasive'],
        },
        {
          index: 3,
          title: 'Engaging Your Audience',
          text: 'Make eye contact, vary your tone, and use appropriate gestures. Invite questions at the end and respond thoughtfully. If you are presenting to peers, acknowledge their potential concerns and address them. An engaged audience is more likely to be persuaded by your argument.',
          keyVocabulary: ['eye contact', 'tone variation', 'audience engagement', 'response'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'What should the opening of a presentation include?',
          type: 'multiple-choice',
          options: [
            'A clear claim and a preview of main points.',
            'All of the evidence in detail.',
            'An apology for being nervous.',
            'A list of sources.',
          ],
          correctAnswer: 'A clear claim and a preview of main points.',
          hint: 'The opening sets up what the audience will hear.',
          explanation:
            'A strong opening orients the audience by stating the claim and previewing the structure, making it easier to follow the presentation.',
          standardCode: '8.SL.4',
        },
        {
          index: 1,
          question:
            'How can a speaker emphasize a salient point during a presentation?',
          type: 'short-answer',
          correctAnswer:
            'A speaker can pause before the key point, speak slowly and clearly, use vocal emphasis, and display supporting visual aids to draw attention to the most important evidence.',
          hint: 'Think about how delivery can highlight importance.',
          explanation:
            'Vocal techniques and visual aids signal to the audience that certain points deserve special attention, making the presentation more effective.',
          standardCode: '8.SL.4',
        },
        {
          index: 2,
          question:
            'Why is it important to explain how evidence supports your claim, not just present the evidence?',
          type: 'multiple-choice',
          options: [
            'Without explanation, the audience may not understand the connection between the evidence and the claim.',
            'Explanation is optional and wastes time.',
            'The audience should figure out the connection themselves.',
            'Evidence always speaks for itself.',
          ],
          correctAnswer:
            'Without explanation, the audience may not understand the connection between the evidence and the claim.',
          hint: 'Think about whether a statistic alone proves your point.',
          explanation:
            'Reasoning bridges the gap between evidence and claim, ensuring the audience understands why the evidence matters.',
          standardCode: '8.SL.4',
        },
        {
          index: 3,
          question:
            'List two techniques for engaging your audience during a presentation.',
          type: 'short-answer',
          correctAnswer:
            'Make eye contact with different audience members and vary your vocal tone to avoid a monotone delivery.',
          hint: 'Think about what keeps you attentive when listening to a speaker.',
          explanation:
            'Eye contact creates connection, and vocal variation maintains interest. Both are essential for keeping an audience engaged.',
          standardCode: '8.SL.4',
        },
        {
          index: 4,
          question:
            'What should a strong closing include?',
          type: 'multiple-choice',
          options: [
            'A summary of the argument and a memorable final statement.',
            'New evidence not mentioned earlier.',
            'An apology for taking too long.',
            'A complete re-reading of all the evidence.',
          ],
          correctAnswer: 'A summary of the argument and a memorable final statement.',
          hint: 'The closing wraps up and leaves a lasting impression.',
          explanation:
            'A strong closing reinforces the main argument and ends with a statement that stays with the audience, such as a call to action or thought-provoking question.',
          standardCode: '8.SL.4',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Describe the three-part structure of an effective presentation.',
            type: 'short-answer',
            correctAnswer:
              'An effective presentation has an opening (states the claim and previews main points), a body (presents evidence organized by reasons), and a closing (summarizes the argument and ends memorably).',
            standardCode: '8.SL.4',
          },
          {
            question:
              'Emphasizing salient points means:',
            type: 'multiple-choice',
            options: [
              'Highlighting the most important and compelling evidence.',
              'Giving equal time to every detail.',
              'Speaking very quickly through key evidence.',
              'Skipping the evidence entirely.',
            ],
            correctAnswer: 'Highlighting the most important and compelling evidence.',
            standardCode: '8.SL.4',
          },
          {
            question:
              'You are presenting a claim that your school should add a new elective. Write a brief opening that states the claim and previews two supporting reasons.',
            type: 'short-answer',
            correctAnswer:
              '"Our school should add a financial literacy elective because students need practical money skills and because research shows that financial education reduces debt later in life. Today I will present evidence for each of these reasons."',
            standardCode: '8.SL.4',
          },
        ],
      },
    },
  },
  {
    slug: 'grade8-ela-media-analysis',
    title: 'Media Analysis',
    description:
      'Analyze the purpose of information presented in diverse media and formats, evaluating the motives behind its presentation.',
    subject: 'ela',
    grade: 8,
    gradeBand: '6-8',
    topicCluster: 'Speaking & Listening',
    standardCodes: ['8.SL.2', '8.SL.3'],
    content: {
      intro: {
        title: 'Media Analysis',
        text: 'We consume media constantly — news articles, videos, podcasts, social media posts, advertisements, and infographics. Each piece of media is created with a purpose and shaped by the choices of its creator. In this module you will learn to analyze diverse media formats, identify the creator\'s purpose and motives, and evaluate how effectively the media communicates its message.',
        culturalHook:
          'Next time you see an ad or a viral video, pause and ask: Who made this? Why? What do they want me to think, feel, or do?',
      },
      segments: [
        {
          index: 0,
          title: 'Identifying Purpose and Motive',
          text: 'Every piece of media has a purpose: to inform, persuade, entertain, or sell. Behind the purpose is a motive — what the creator gains. A news organization informs but also seeks viewers. An advertiser entertains but ultimately sells. Identifying both purpose and motive helps you consume media critically.',
          keyVocabulary: ['purpose', 'motive', 'inform', 'persuade', 'entertain', 'sell'],
        },
        {
          index: 1,
          title: 'Analyzing Techniques Across Formats',
          text: 'Different media formats use different techniques. Video uses camera angles, music, and editing. Print uses headlines, images, and layout. Social media uses brevity, hashtags, and visuals. Analyze how the format\'s unique tools shape the message. A dramatic camera zoom creates urgency; a calm infographic suggests objectivity.',
          keyVocabulary: ['camera angles', 'editing', 'layout', 'hashtags', 'format'],
          example:
            'A documentary about ocean pollution might use slow underwater footage of marine life tangled in plastic (pathos) paired with statistics on screen (logos) to persuade viewers to reduce plastic use.',
        },
        {
          index: 2,
          title: 'Evaluating Credibility and Bias in Media',
          text: 'Apply the same credibility criteria you use for written texts: Who created it? What are their qualifications? Is the information supported by evidence? Is there a noticeable bias? Media that presents only one side of an issue, uses emotionally manipulative techniques, or lacks sources should be viewed with skepticism.',
          keyVocabulary: ['credibility', 'bias', 'skepticism', 'evidence', 'one-sided'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'What is the difference between purpose and motive in media?',
          type: 'short-answer',
          correctAnswer:
            'Purpose is what the media aims to do (inform, persuade, entertain). Motive is what the creator gains from it (viewers, revenue, influence).',
          hint: 'Think about the "what" versus the "why" behind media creation.',
          explanation:
            'Purpose describes the function of the media; motive describes the creator\'s underlying interest. Both must be considered for critical analysis.',
          standardCode: '8.SL.2',
        },
        {
          index: 1,
          question:
            'A social media post uses a shocking headline and a dramatic image but provides no sources. What should you be skeptical about?',
          type: 'multiple-choice',
          options: [
            'The credibility of the information, since there are no sources to verify it.',
            'Nothing — social media is always accurate.',
            'The image quality.',
            'The number of likes it received.',
          ],
          correctAnswer:
            'The credibility of the information, since there are no sources to verify it.',
          hint: 'Think about what makes information reliable.',
          explanation:
            'Shocking headlines and images without sources are common in unreliable media. Credible information can be verified through cited evidence.',
          standardCode: '8.SL.3',
        },
        {
          index: 2,
          question:
            'How do camera angles in a video shape the viewer\'s perception?',
          type: 'short-answer',
          correctAnswer:
            'A low angle looking up at a person makes them appear powerful. A high angle looking down makes them appear small or vulnerable. Close-ups create intimacy or intensity. These choices shape how the viewer feels about the subject.',
          hint: 'Think about how looking up at someone versus down at them changes your impression.',
          explanation:
            'Camera angles are a visual rhetoric tool. Creators choose angles deliberately to influence how viewers perceive subjects and situations.',
          standardCode: '8.SL.2',
        },
        {
          index: 3,
          question:
            'Which of the following is a sign of bias in media?',
          type: 'multiple-choice',
          options: [
            'Presenting only one side of an issue.',
            'Including multiple perspectives.',
            'Citing peer-reviewed sources.',
            'Using neutral language.',
          ],
          correctAnswer: 'Presenting only one side of an issue.',
          hint: 'Bias shows when information is unbalanced.',
          explanation:
            'One-sided presentation is a strong indicator of bias because it omits information that might challenge the creator\'s preferred narrative.',
          standardCode: '8.SL.3',
        },
        {
          index: 4,
          question:
            'A documentary uses sad music during scenes about poverty and upbeat music during scenes about charity donations. What is the effect of this technique?',
          type: 'multiple-choice',
          options: [
            'The music creates emotional associations — sadness with the problem and hope with the solution — guiding the viewer\'s feelings.',
            'The music has no effect on the viewer.',
            'The music is randomly chosen.',
            'The music replaces the need for factual content.',
          ],
          correctAnswer:
            'The music creates emotional associations — sadness with the problem and hope with the solution — guiding the viewer\'s feelings.',
          hint: 'Think about how music in movies affects your emotions.',
          explanation:
            'Music is a powerful pathos tool in video media. It shapes emotional responses and can make the creator\'s message feel more urgent or hopeful.',
          standardCode: '8.SL.2',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Explain how you would evaluate the credibility of a social media infographic about climate change.',
            type: 'short-answer',
            correctAnswer:
              'Check who created it and their qualifications, whether the data is sourced from reputable institutions, whether the information is corroborated by other sources, and whether it presents a balanced view or only one perspective.',
            standardCode: '8.SL.3',
          },
          {
            question:
              'Media that uses emotionally manipulative techniques without evidence should be viewed with:',
            type: 'multiple-choice',
            options: [
              'Skepticism',
              'Complete trust',
              'Indifference',
              'Enthusiasm',
            ],
            correctAnswer: 'Skepticism',
            standardCode: '8.SL.3',
          },
          {
            question:
              'Choose a piece of media you have encountered recently (an ad, video, or article). Identify its purpose, one technique it uses, and whether it shows any signs of bias.',
            type: 'short-answer',
            correctAnswer:
              'Example: A cereal commercial\'s purpose is to sell. It uses bright colors and a catchy jingle (techniques) to appeal to children. It shows bias by presenting only positive claims about the cereal without mentioning high sugar content.',
            standardCode: '8.SL.2',
          },
        ],
      },
    },
  },
]
