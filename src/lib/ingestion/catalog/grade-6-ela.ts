import type { ModuleSeed } from '../types'

export const GRADE_6_ELA: ModuleSeed[] = [
  // ── Reading Literature (4 modules) ──────────────────────────
  {
    slug: 'grade6-ela-citing-textual-evidence',
    title: 'Citing Textual Evidence',
    description:
      'Cite textual evidence to support analysis of what the text says explicitly as well as inferences drawn from the text',
    subject: 'ela',
    grade: 6,
    gradeBand: '6-8',
    topicCluster: 'Reading Literature',
    standardCodes: ['6.RL.1'],
    content: {
      intro: {
        title: 'Citing Textual Evidence',
        text: 'Strong readers do more than just state opinions about a story — they back up every claim with evidence taken directly from the text. Today you will learn how to locate relevant evidence, quote or paraphrase it accurately, and explain how it supports your analysis. This skill is the foundation of every literature discussion you will have in middle school and beyond.',
        culturalHook:
          'Imagine a family member telling you about something that happened at work. You would ask, "How do you know?" The same thinking applies when we read — we need proof from the text.',
      },
      segments: [
        {
          index: 0,
          title: 'Explicit vs. Inferential Meaning',
          text: 'When you read a passage, some information is stated directly — this is explicit meaning. For example, "The girl wore a red coat" tells you exactly what she wore. Other ideas are implied, meaning the author gives you clues and expects you to figure out the rest. If the text says "She shivered and pulled her thin jacket tight," you can infer it is cold outside even though the author never says so. Both explicit and inferential meanings need textual evidence to be supported.',
          keyVocabulary: ['explicit', 'inferential', 'implied', 'textual evidence'],
        },
        {
          index: 1,
          title: 'How to Select Strong Evidence',
          text: 'Not all evidence is equally useful. Strong evidence directly connects to the point you are making. It is specific rather than vague, and it comes from key moments in the text such as dialogue, turning points, or descriptive passages. When choosing evidence, ask yourself: "Does this quote clearly support my claim?" If you have to stretch to make the connection, look for a better piece of evidence. Always include enough of the quote so the reader understands the context, but avoid copying entire paragraphs when a sentence or two will do.',
          keyVocabulary: ['relevant', 'specific', 'context', 'claim'],
          example:
            'Claim: The narrator feels isolated. Strong evidence: "I sat alone at the long table while laughter echoed from every other corner of the room." This quote directly shows isolation.',
        },
        {
          index: 2,
          title: 'Quoting vs. Paraphrasing',
          text: 'You can present evidence by quoting the exact words from the text or by paraphrasing — restating the idea in your own words. Use a direct quote when the author\'s specific language is important. Use a paraphrase when you want to condense a longer passage. In both cases, you must tell the reader where the evidence comes from. Phrases like "According to the text," "The author states," and "In paragraph three" help introduce your evidence smoothly and show your reader that you are grounding your analysis in the text.',
          keyVocabulary: ['quoting', 'paraphrasing', 'introduce evidence', 'cite'],
        },
        {
          index: 3,
          title: 'Explaining Your Evidence',
          text: 'Dropping a quote into your writing is not enough. After presenting your evidence you must explain how it supports your point. This is sometimes called the "so what" step. For example, after quoting a character\'s angry dialogue you might write, "This shows that the character has reached a breaking point and can no longer hide his frustration." The pattern is Claim → Evidence → Explanation, often called C-E-E. Practicing this pattern will make your literary analysis clear and convincing every time.',
          keyVocabulary: ['explanation', 'C-E-E', 'analysis', 'support'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'What is the difference between explicit and inferential meaning in a text?',
          type: 'multiple-choice',
          options: [
            'Explicit meaning is stated directly; inferential meaning is figured out from clues.',
            'Explicit meaning is hidden; inferential meaning is stated directly.',
            'There is no difference between them.',
            'Explicit meaning is only found in nonfiction texts.',
          ],
          correctAnswer:
            'Explicit meaning is stated directly; inferential meaning is figured out from clues.',
          hint: 'Think about whether the information is right there on the page or something you have to figure out.',
          explanation:
            'Explicit meaning is directly stated in the text, while inferential meaning requires the reader to use clues and reasoning to arrive at a conclusion.',
          standardCode: '6.RL.1',
        },
        {
          index: 1,
          question:
            'A student claims a character is brave. Which piece of evidence best supports that claim?',
          type: 'multiple-choice',
          options: [
            '"She liked chocolate ice cream."',
            '"She stepped in front of the younger children and faced the growling dog."',
            '"Her house was on Oak Street."',
            '"She finished her homework early."',
          ],
          correctAnswer:
            '"She stepped in front of the younger children and faced the growling dog."',
          hint: 'Look for the quote that shows the character doing something courageous.',
          explanation:
            'Stepping in front of younger children to face danger is a direct example of bravery. The other options do not relate to courage.',
          standardCode: '6.RL.1',
        },
        {
          index: 2,
          question:
            'When should you use a direct quote instead of a paraphrase?',
          type: 'short-answer',
          correctAnswer:
            'Use a direct quote when the author\'s exact words are important to your point or when the specific language is powerful.',
          hint: 'Think about when the author\'s own words matter more than a summary.',
          explanation:
            'Direct quotes preserve the author\'s precise wording, which is important when the language itself strengthens your argument or reveals something about tone and style.',
          standardCode: '6.RL.1',
        },
        {
          index: 3,
          question: 'What does the C-E-E pattern stand for in literary analysis?',
          type: 'multiple-choice',
          options: [
            'Character, Event, Ending',
            'Claim, Evidence, Explanation',
            'Context, Example, Evaluation',
            'Cause, Effect, Evidence',
          ],
          correctAnswer: 'Claim, Evidence, Explanation',
          hint: 'Each letter represents a step in building a strong analytical paragraph.',
          explanation:
            'C-E-E stands for Claim, Evidence, Explanation. You state your point, support it with a quote or paraphrase, and then explain how the evidence proves your point.',
          standardCode: '6.RL.1',
        },
        {
          index: 4,
          question:
            'Why is it important to explain your evidence after presenting it?',
          type: 'short-answer',
          correctAnswer:
            'Explaining your evidence shows the reader how the quote supports your claim and makes your analysis clear and convincing.',
          hint: 'Think about what happens if you just drop a quote with no commentary.',
          explanation:
            'Without explanation, the reader has to guess how the evidence connects to the claim. The explanation is the "so what" step that ties everything together.',
          standardCode: '6.RL.1',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'A passage states: "Marcus clenched his fists and turned away without a word." A student writes: "Marcus is angry." What should the student add to strengthen this analysis?',
            type: 'multiple-choice',
            options: [
              'A summary of the whole story.',
              'The quote from the text and an explanation of how it shows anger.',
              'A personal story about being angry.',
              'A definition of the word angry.',
            ],
            correctAnswer:
              'The quote from the text and an explanation of how it shows anger.',
            standardCode: '6.RL.1',
          },
          {
            question:
              'Which phrase is an effective way to introduce textual evidence in your writing?',
            type: 'multiple-choice',
            options: [
              '"I think that..."',
              '"According to the text..."',
              '"Everyone knows..."',
              '"It is obvious that..."',
            ],
            correctAnswer: '"According to the text..."',
            standardCode: '6.RL.1',
          },
          {
            question:
              'Explain the difference between quoting and paraphrasing, and give one reason you might choose each.',
            type: 'short-answer',
            correctAnswer:
              'Quoting uses the author\'s exact words and is best when specific language matters. Paraphrasing restates the idea in your own words and is useful for condensing longer passages.',
            standardCode: '6.RL.1',
          },
        ],
      },
    },
  },

  {
    slug: 'grade6-ela-theme',
    title: 'Determining Theme',
    description:
      'Determine a theme or central idea of a text and how it is conveyed through particular details; provide a summary distinct from personal opinions',
    subject: 'ela',
    grade: 6,
    gradeBand: '6-8',
    topicCluster: 'Reading Literature',
    standardCodes: ['6.RL.2'],
    content: {
      intro: {
        title: 'Determining Theme',
        text: 'A theme is the underlying message or life lesson an author communicates through a story, poem, or play. Unlike a topic, which can be expressed in a single word like "courage," a theme is a complete statement such as "True courage means standing up for others even when it is difficult." In this module you will learn to trace how specific details build toward a theme and how to summarize a text without inserting your own opinions.',
        culturalHook:
          'Stories told around dinner tables and campfires carry themes too. Think about a tale your family retells — what bigger truth does it teach?',
      },
      segments: [
        {
          index: 0,
          title: 'Theme vs. Topic',
          text: 'Many readers confuse topic and theme. The topic is the broad subject — friendship, loss, growing up. The theme is what the author says about that subject. If the topic is "friendship," the theme might be "Friendship requires sacrifice and honesty to endure." To find the theme, start by naming the topic and then ask, "What does the author believe about this topic?" Your answer, stated as a full sentence, is the theme.',
          keyVocabulary: ['theme', 'topic', 'message', 'central idea'],
        },
        {
          index: 1,
          title: 'Tracing Theme Through Details',
          text: 'Authors weave themes into their writing through character actions, dialogue, conflict, and resolution. Pay attention to how a character changes from the beginning to the end of the story. If a character starts out selfish and learns to share, the details of that transformation point toward a theme about generosity. Repeated images or symbols — such as a locked door that finally opens — can also signal the theme. Collect these details like puzzle pieces, and the theme will emerge when you put them together.',
          keyVocabulary: ['character change', 'conflict', 'resolution', 'symbol'],
          example:
            'In a story where a boy refuses help from classmates, struggles alone, and finally accepts a teammate\'s assistance to win the relay race, the details trace a theme about the strength found in teamwork.',
        },
        {
          index: 2,
          title: 'Theme in Poetry and Drama',
          text: 'Poems and plays also carry themes, but they reveal them differently. In poetry, look at imagery, figurative language, and any refrain — a line repeated for emphasis. In drama, focus on dialogue and stage directions. A character who slams a door or whispers a confession is giving you a detail that contributes to the theme. Regardless of genre, the strategy remains the same: gather details, identify the topic, and state the author\'s message in a complete sentence.',
          keyVocabulary: ['imagery', 'figurative language', 'refrain', 'stage directions'],
        },
        {
          index: 3,
          title: 'Summarizing Without Personal Opinion',
          text: 'A strong summary retells the most important events in order and connects them to the theme, all without adding your personal feelings. Avoid phrases like "I think" or "I liked the part where." Instead, use objective language: "The story follows a girl who overcomes her fear of public speaking by joining the debate team." End your summary by stating the theme the details support. This keeps your summary focused and text-based rather than opinion-based.',
          keyVocabulary: ['summary', 'objective', 'text-based', 'retell'],
        },
      ],
      practice: [
        {
          index: 0,
          question: 'Which of the following is a theme rather than a topic?',
          type: 'multiple-choice',
          options: [
            'Friendship',
            'Honesty is the foundation of trust.',
            'Dogs',
            'School life',
          ],
          correctAnswer: 'Honesty is the foundation of trust.',
          hint: 'A theme is a complete statement, not just a single word.',
          explanation:
            'A theme expresses a full idea about a topic. "Honesty is the foundation of trust" makes a claim about honesty, whereas the other options are simply topics.',
          standardCode: '6.RL.2',
        },
        {
          index: 1,
          question:
            'A character begins a story as a bully and ends the story apologizing to those he hurt. Which theme do these details best support?',
          type: 'multiple-choice',
          options: [
            'Bullies always get caught.',
            'People can change when they recognize the harm they cause.',
            'School is a difficult place.',
            'Apologies do not matter.',
          ],
          correctAnswer:
            'People can change when they recognize the harm they cause.',
          hint: 'Focus on the character\'s transformation from beginning to end.',
          explanation:
            'The character\'s change from bully to someone who apologizes traces a theme about personal growth and accountability.',
          standardCode: '6.RL.2',
        },
        {
          index: 2,
          question:
            'In a poem, the line "rise again, rise again" appears at the end of each stanza. What might this refrain suggest about the theme?',
          type: 'short-answer',
          correctAnswer:
            'The refrain suggests a theme about resilience or perseverance — the idea that one should keep getting back up after setbacks.',
          hint: 'A repeated line emphasizes the poet\'s most important message.',
          explanation:
            'Refrains highlight the central message. Repeating "rise again" emphasizes that the speaker values persistence in the face of difficulty.',
          standardCode: '6.RL.2',
        },
        {
          index: 3,
          question:
            'Which of the following is an objective summary rather than a personal response?',
          type: 'multiple-choice',
          options: [
            '"I really loved the ending because it was surprising."',
            '"The story follows a boy who learns that keeping promises earns the respect of his community."',
            '"This was the best story I have ever read."',
            '"I think the character should have made a different choice."',
          ],
          correctAnswer:
            '"The story follows a boy who learns that keeping promises earns the respect of his community."',
          hint: 'An objective summary avoids personal feelings and sticks to what the text says.',
          explanation:
            'An objective summary retells events and connects them to the theme without inserting opinions. The correct answer does exactly that.',
          standardCode: '6.RL.2',
        },
        {
          index: 4,
          question:
            'Explain how you would find the theme of a short story in three steps.',
          type: 'short-answer',
          correctAnswer:
            'First, identify the topic. Second, gather key details such as character changes, conflicts, and resolutions. Third, state what the author is saying about the topic in a complete sentence.',
          hint: 'Think about the process: topic first, then details, then a full statement.',
          explanation:
            'Finding theme is a step-by-step process: name the broad topic, collect supporting details, and combine them into a theme statement.',
          standardCode: '6.RL.2',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'A story ends with the main character giving away her prize money to help rebuild a neighbor\'s home. Which theme is best supported?',
            type: 'multiple-choice',
            options: [
              'Winning is the most important thing.',
              'Generosity and community matter more than personal gain.',
              'Money is not real.',
              'Neighbors are always friendly.',
            ],
            correctAnswer:
              'Generosity and community matter more than personal gain.',
            standardCode: '6.RL.2',
          },
          {
            question:
              'What is the difference between a summary and a personal response?',
            type: 'short-answer',
            correctAnswer:
              'A summary objectively retells the main events and connects them to the theme. A personal response includes the reader\'s own feelings and opinions.',
            standardCode: '6.RL.2',
          },
          {
            question:
              'Which detail would be LEAST helpful in determining the theme of a story?',
            type: 'multiple-choice',
            options: [
              'How the main character changes over time.',
              'The color of the wallpaper in a minor scene.',
              'The resolution of the central conflict.',
              'Repeated symbols or images.',
            ],
            correctAnswer:
              'The color of the wallpaper in a minor scene.',
            standardCode: '6.RL.2',
          },
        ],
      },
    },
  },

  {
    slug: 'grade6-ela-character-analysis',
    title: 'Character Analysis',
    description:
      'Describe how a particular story\'s or drama\'s plot unfolds and how the characters respond or change as the plot moves toward a resolution',
    subject: 'ela',
    grade: 6,
    gradeBand: '6-8',
    topicCluster: 'Reading Literature',
    standardCodes: ['6.RL.3'],
    content: {
      intro: {
        title: 'Character Analysis',
        text: 'Characters are the heart of every story. Understanding why characters act the way they do — and how they change — helps you unlock deeper meaning in literature. In this module you will learn to analyze characters by examining their traits, motivations, and responses to conflict, and you will trace how those responses drive the plot toward its resolution.',
        culturalHook:
          'Think about someone in your community who overcame a challenge. What traits helped them? Characters in stories face similar journeys.',
      },
      segments: [
        {
          index: 0,
          title: 'Character Traits and Evidence',
          text: 'A character trait is a quality that describes how a person thinks, feels, or behaves — brave, stubborn, generous, anxious. Authors rarely tell you a trait outright. Instead, they show it through actions, dialogue, thoughts, and how other characters react. If a character shares her last sandwich with a stranger, the author is showing generosity. When you identify a trait, always point to the specific evidence in the text that reveals it.',
          keyVocabulary: ['character trait', 'evidence', 'dialogue', 'actions'],
        },
        {
          index: 1,
          title: 'Motivation and Conflict',
          text: 'Motivation is the reason a character acts. It might be a desire, a fear, or a sense of duty. Conflict — the main problem the character faces — tests that motivation. A character motivated by loyalty might face a conflict that forces her to choose between two friends. Understanding motivation and conflict helps you predict what a character will do next and explains why the plot moves in a particular direction.',
          keyVocabulary: ['motivation', 'conflict', 'internal conflict', 'external conflict'],
          example:
            'A boy motivated by his promise to his grandmother (motivation) must decide whether to stay home and help with the farm or leave for a basketball scholarship (conflict).',
        },
        {
          index: 2,
          title: 'How Characters Change',
          text: 'Dynamic characters change over the course of a story. They may gain new understanding, shift their attitude, or grow in maturity. Static characters stay the same. Tracking a character\'s change from beginning to middle to end reveals important lessons the author wants to convey. Ask yourself: "What was this character like at the start? What happened to challenge them? How are they different at the end?" Your answers trace the character\'s arc and often connect directly to the theme.',
          keyVocabulary: ['dynamic', 'static', 'character arc', 'growth'],
        },
        {
          index: 3,
          title: 'Characters and Plot Resolution',
          text: 'The choices characters make drive the plot forward. Each decision creates consequences that lead to new events until the story reaches its resolution. In a well-crafted story, the resolution feels earned because it grows out of everything the character has experienced. When analyzing a story, connect the character\'s final decision or realization to the conflicts they faced earlier. This connection shows that you understand not just what happened, but why it happened.',
          keyVocabulary: ['resolution', 'consequences', 'plot', 'decision'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'Which method does an author most often use to reveal a character trait?',
          type: 'multiple-choice',
          options: [
            'Listing the trait in a chart at the end of the chapter.',
            'Showing the trait through the character\'s actions, dialogue, and thoughts.',
            'Putting the trait in the title of the book.',
            'Having the character state their trait aloud in every scene.',
          ],
          correctAnswer:
            'Showing the trait through the character\'s actions, dialogue, and thoughts.',
          hint: 'Authors prefer to show rather than tell.',
          explanation:
            'Authors reveal traits indirectly through what characters do, say, and think. Readers must infer the trait from these details.',
          standardCode: '6.RL.3',
        },
        {
          index: 1,
          question:
            'What is the difference between a dynamic character and a static character?',
          type: 'short-answer',
          correctAnswer:
            'A dynamic character changes over the course of the story, while a static character stays the same.',
          hint: 'Think about the words "dynamic" (changing) and "static" (staying put).',
          explanation:
            'Dynamic characters undergo growth or transformation in response to events. Static characters remain unchanged from beginning to end.',
          standardCode: '6.RL.3',
        },
        {
          index: 2,
          question:
            'A character is motivated by fear of failure. She avoids trying out for the soccer team, but her best friend convinces her to go. She makes the team and gains confidence. What type of conflict did she face?',
          type: 'multiple-choice',
          options: [
            'Character vs. nature',
            'Character vs. self (internal conflict)',
            'Character vs. society',
            'Character vs. technology',
          ],
          correctAnswer: 'Character vs. self (internal conflict)',
          hint: 'The struggle is happening inside the character\'s own mind.',
          explanation:
            'The character\'s fear of failure is an internal conflict — a battle within herself. Overcoming it is the key to her growth.',
          standardCode: '6.RL.3',
        },
        {
          index: 3,
          question:
            'Why is it important to connect a character\'s choices to the plot resolution?',
          type: 'short-answer',
          correctAnswer:
            'Connecting choices to the resolution shows you understand why the story ended the way it did and how the character\'s actions drove the plot.',
          hint: 'Think about cause and effect in storytelling.',
          explanation:
            'A resolution grows out of a character\'s decisions. Tracing that connection demonstrates deep comprehension of the story\'s structure.',
          standardCode: '6.RL.3',
        },
        {
          index: 4,
          question:
            'A character shares food with a rival during a snowstorm. What trait does this action reveal?',
          type: 'multiple-choice',
          options: [
            'Selfishness',
            'Compassion',
            'Laziness',
            'Impatience',
          ],
          correctAnswer: 'Compassion',
          hint: 'Sharing with someone you compete against shows a kind quality.',
          explanation:
            'Helping a rival in need reveals compassion — the character puts another person\'s welfare above the competition.',
          standardCode: '6.RL.3',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'A character starts a story boasting about doing everything alone and ends the story thanking the people who helped him. What does this change reveal about the character?',
            type: 'short-answer',
            correctAnswer:
              'The character changed from being prideful and independent to valuing teamwork and gratitude, showing dynamic growth.',
            standardCode: '6.RL.3',
          },
          {
            question:
              'Which detail best reveals a character\'s motivation?',
            type: 'multiple-choice',
            options: [
              'The setting of the story.',
              'The character\'s thoughts about what they want and why.',
              'The number of pages in the chapter.',
              'The font the author uses.',
            ],
            correctAnswer:
              'The character\'s thoughts about what they want and why.',
            standardCode: '6.RL.3',
          },
          {
            question:
              'In a play, a character says, "I will not let this town forget what happened." What can you infer about the character\'s motivation?',
            type: 'multiple-choice',
            options: [
              'The character wants to move away and start over.',
              'The character is motivated by a desire for justice or remembrance.',
              'The character is afraid of the town.',
              'The character wants to become mayor.',
            ],
            correctAnswer:
              'The character is motivated by a desire for justice or remembrance.',
            standardCode: '6.RL.3',
          },
        ],
      },
    },
  },

  {
    slug: 'grade6-ela-point-of-view',
    title: 'Point of View',
    description:
      'Explain how an author develops the point of view of the narrator or speaker in a text',
    subject: 'ela',
    grade: 6,
    gradeBand: '6-8',
    topicCluster: 'Reading Literature',
    standardCodes: ['6.RL.6'],
    content: {
      intro: {
        title: 'Point of View',
        text: 'Every story is told from a particular vantage point called the point of view. The narrator\'s perspective shapes what you know, what you feel, and how you interpret events. In this module you will explore first-person, third-person limited, and third-person omniscient points of view and examine how authors use each one to influence a reader\'s experience.',
        culturalHook:
          'Think about two people describing the same family event — each person\'s version sounds a little different because of their point of view.',
      },
      segments: [
        {
          index: 0,
          title: 'Types of Point of View',
          text: 'In first-person point of view, the narrator is a character in the story and uses "I" and "we." You only know what that character sees, thinks, and feels. In third-person limited, the narrator is outside the story but follows one character closely, using "he," "she," or "they." In third-person omniscient, the narrator knows the thoughts and feelings of all characters. Identifying the point of view is the first step in understanding how an author controls the information you receive.',
          keyVocabulary: ['first-person', 'third-person limited', 'third-person omniscient', 'narrator'],
        },
        {
          index: 1,
          title: 'How Point of View Shapes Understanding',
          text: 'Point of view determines what information the reader has access to. A first-person narrator might be unreliable — they could exaggerate, lie, or simply not know the full truth. A third-person omniscient narrator can reveal secrets that no single character knows. When you recognize the point of view, you can ask critical questions: "Is this narrator trustworthy? What might be missing from this account? How would the story change if told by a different character?"',
          keyVocabulary: ['unreliable narrator', 'perspective', 'bias', 'trustworthy'],
          example:
            'In a first-person story, the narrator says, "Everyone at school hates me." But if the story were told from a classmate\'s perspective, you might learn that people actually tried to include the narrator. Point of view can limit or distort truth.',
        },
        {
          index: 2,
          title: 'Author\'s Purpose in Choosing Point of View',
          text: 'Authors choose a point of view deliberately. First person creates intimacy — you feel close to the narrator. Third-person limited lets the author control suspense by hiding information that other characters know. Third-person omniscient allows the author to explore multiple sides of a conflict. When analyzing a text, consider why the author made that choice and how it affects your emotions and understanding as a reader.',
          keyVocabulary: ['author\'s purpose', 'intimacy', 'suspense', 'multiple perspectives'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'A story begins: "I never expected to find a letter hidden inside the old piano." What point of view is this?',
          type: 'multiple-choice',
          options: [
            'Third-person omniscient',
            'Second person',
            'First person',
            'Third-person limited',
          ],
          correctAnswer: 'First person',
          hint: 'Look at the pronoun the narrator uses to refer to themselves.',
          explanation:
            'The use of "I" signals first-person point of view, meaning the narrator is a character in the story.',
          standardCode: '6.RL.6',
        },
        {
          index: 1,
          question:
            'How does a third-person omniscient narrator differ from a third-person limited narrator?',
          type: 'short-answer',
          correctAnswer:
            'A third-person omniscient narrator knows the thoughts and feelings of all characters, while a third-person limited narrator only reveals the inner life of one character.',
          hint: 'Omniscient means "all-knowing."',
          explanation:
            'The key difference is access. Omniscient narrators can enter every character\'s mind; limited narrators are restricted to one.',
          standardCode: '6.RL.6',
        },
        {
          index: 2,
          question:
            'Why might an author choose first-person point of view for a mystery story?',
          type: 'multiple-choice',
          options: [
            'So the reader knows exactly who committed the crime from the start.',
            'So the reader discovers clues at the same pace as the narrator, building suspense.',
            'Because first person is the only way to write a mystery.',
            'So every character\'s thoughts are revealed.',
          ],
          correctAnswer:
            'So the reader discovers clues at the same pace as the narrator, building suspense.',
          hint: 'First person limits what you know to what the narrator knows.',
          explanation:
            'First person restricts information to the narrator\'s experience, which keeps the reader guessing and builds suspense.',
          standardCode: '6.RL.6',
        },
        {
          index: 3,
          question:
            'A narrator says, "Everybody agreed it was the best day ever." Could this be an example of an unreliable narrator? Explain.',
          type: 'short-answer',
          correctAnswer:
            'Yes, because the narrator may be exaggerating. It is unlikely that literally everybody agreed, so the narrator\'s perspective may be biased.',
          hint: 'Think about whether one person can truly know what everybody thinks.',
          explanation:
            'Unreliable narrators present information that may not be fully accurate. Claiming universal agreement is a sign of exaggeration or bias.',
          standardCode: '6.RL.6',
        },
        {
          index: 4,
          question:
            'If a story about a conflict between two siblings is told from only one sibling\'s point of view, what might the reader miss?',
          type: 'multiple-choice',
          options: [
            'Nothing — one sibling knows everything.',
            'The other sibling\'s thoughts, feelings, and reasons for their actions.',
            'The setting of the story.',
            'The names of the characters.',
          ],
          correctAnswer:
            'The other sibling\'s thoughts, feelings, and reasons for their actions.',
          hint: 'A limited point of view hides the inner world of other characters.',
          explanation:
            'When the story follows only one sibling, the reader does not have access to the other sibling\'s perspective, which may lead to an incomplete understanding of the conflict.',
          standardCode: '6.RL.6',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'A passage uses "he thought" and "she wondered" for multiple characters. What point of view is the author using?',
            type: 'multiple-choice',
            options: [
              'First person',
              'Second person',
              'Third-person limited',
              'Third-person omniscient',
            ],
            correctAnswer: 'Third-person omniscient',
            standardCode: '6.RL.6',
          },
          {
            question:
              'Explain one advantage and one disadvantage of using a first-person narrator.',
            type: 'short-answer',
            correctAnswer:
              'Advantage: the reader feels close to the narrator and experiences events personally. Disadvantage: the reader only sees one perspective and may miss important information.',
            standardCode: '6.RL.6',
          },
          {
            question:
              'How would a story about a neighborhood disagreement change if it were told from a third-person omniscient point of view instead of first person?',
            type: 'short-answer',
            correctAnswer:
              'The reader would learn the thoughts and feelings of all neighbors, gaining a fuller understanding of every side of the disagreement instead of just one person\'s version.',
            standardCode: '6.RL.6',
          },
        ],
      },
    },
  },

  // ── Reading Informational (4 modules) ───────────────────────
  {
    slug: 'grade6-ela-central-idea',
    title: 'Central Idea',
    description:
      'Determine a central idea of a text and how it is conveyed through particular details; provide a summary distinct from personal opinions',
    subject: 'ela',
    grade: 6,
    gradeBand: '6-8',
    topicCluster: 'Reading Informational',
    standardCodes: ['6.RI.2'],
    content: {
      intro: {
        title: 'Central Idea',
        text: 'Every informational text is built around a central idea — the most important point the author wants you to understand. Unlike a topic, which is a broad subject, the central idea is a specific claim or insight supported by details throughout the text. In this module you will practice identifying the central idea, tracing the details that develop it, and writing an objective summary.',
        culturalHook:
          'When a community leader gives a speech at a town meeting, there is always one main point they want everyone to remember. That main point is the central idea.',
      },
      segments: [
        {
          index: 0,
          title: 'Central Idea vs. Topic',
          text: 'The topic of an article might be "clean water." The central idea goes further: "Access to clean water remains a challenge in many rural communities because aging infrastructure has not been updated." Notice the central idea makes a specific statement about the topic. To find it, ask, "What is the one thing the author most wants me to understand?" The answer, expressed as a full sentence, is the central idea.',
          keyVocabulary: ['central idea', 'topic', 'specific statement', 'main point'],
        },
        {
          index: 1,
          title: 'Supporting Details',
          text: 'Authors develop the central idea through supporting details — facts, statistics, examples, and explanations. In an article about clean water, supporting details might include the number of communities affected, a quote from a local official, and an example of a school that installed a new filtration system. Each detail adds depth and proof. When you read, underline or note details that connect back to the central idea.',
          keyVocabulary: ['supporting details', 'facts', 'statistics', 'examples'],
          example:
            'Central idea: School gardens improve student nutrition. Supporting details: a study showing students ate 30% more vegetables, a quote from a school nurse, and before-and-after lunch tray photos.',
        },
        {
          index: 2,
          title: 'Writing an Objective Summary',
          text: 'An objective summary captures the central idea and its key supporting details without adding personal opinions. Begin with a sentence that states the central idea. Follow with two to three sentences covering the most important details. End by noting the author\'s conclusion. Leave out phrases like "I believe" or "The best part was." Your summary should be a concise, neutral retelling that someone who has not read the article could understand.',
          keyVocabulary: ['objective', 'summary', 'concise', 'neutral'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'What is the difference between a topic and a central idea?',
          type: 'multiple-choice',
          options: [
            'A topic is a full sentence; a central idea is a single word.',
            'A topic is a broad subject; a central idea is the specific point the author makes about it.',
            'They are the same thing.',
            'A central idea is only found in fiction.',
          ],
          correctAnswer:
            'A topic is a broad subject; a central idea is the specific point the author makes about it.',
          hint: 'One is a word or phrase; the other is a complete statement.',
          explanation:
            'The topic names the subject broadly, while the central idea expresses the author\'s specific message about that subject.',
          standardCode: '6.RI.2',
        },
        {
          index: 1,
          question:
            'An article about bike lanes includes a statistic: "Cities with protected bike lanes saw a 40% decrease in cycling accidents." What role does this detail play?',
          type: 'multiple-choice',
          options: [
            'It introduces a new topic.',
            'It supports the central idea that bike lanes improve safety.',
            'It is the author\'s personal opinion.',
            'It contradicts the central idea.',
          ],
          correctAnswer:
            'It supports the central idea that bike lanes improve safety.',
          hint: 'A statistic is a type of supporting detail.',
          explanation:
            'The statistic provides factual evidence that strengthens the central idea about bike-lane safety.',
          standardCode: '6.RI.2',
        },
        {
          index: 2,
          question:
            'Which sentence would NOT belong in an objective summary?',
          type: 'multiple-choice',
          options: [
            '"The article explains how community gardens reduce food insecurity."',
            '"I think everyone should start a garden."',
            '"The author cites research from three universities."',
            '"The article concludes that gardens benefit both nutrition and mental health."',
          ],
          correctAnswer: '"I think everyone should start a garden."',
          hint: 'Objective summaries do not include personal opinions.',
          explanation:
            'The phrase "I think" signals a personal opinion, which has no place in an objective summary.',
          standardCode: '6.RI.2',
        },
        {
          index: 3,
          question:
            'Describe the steps you would follow to identify the central idea of an article.',
          type: 'short-answer',
          correctAnswer:
            'First, identify the topic. Then look for the most important point the author makes about that topic. Finally, check that the supporting details in the article develop that point.',
          hint: 'Start broad with the topic and narrow down to the specific claim.',
          explanation:
            'Finding the central idea is a process of narrowing from a broad topic to the author\'s specific, supported claim.',
          standardCode: '6.RI.2',
        },
        {
          index: 4,
          question:
            'Why is it important to leave personal opinions out of a summary?',
          type: 'short-answer',
          correctAnswer:
            'Leaving out personal opinions keeps the summary accurate and focused on what the author actually wrote, ensuring the reader gets an unbiased understanding of the text.',
          hint: 'Think about the purpose of a summary — to retell, not to react.',
          explanation:
            'Summaries are meant to represent the text faithfully. Personal opinions shift focus away from the author\'s ideas to the reader\'s feelings.',
          standardCode: '6.RI.2',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'An article\'s opening paragraph states: "Solar energy is becoming more affordable, making it a realistic option for families in rural areas." What is the central idea?',
            type: 'multiple-choice',
            options: [
              'Solar energy is expensive.',
              'Solar energy\'s growing affordability makes it practical for rural families.',
              'Rural families do not use electricity.',
              'Solar panels are difficult to install.',
            ],
            correctAnswer:
              'Solar energy\'s growing affordability makes it practical for rural families.',
            standardCode: '6.RI.2',
          },
          {
            question:
              'List two types of supporting details an author might use to develop a central idea.',
            type: 'short-answer',
            correctAnswer:
              'Examples include facts, statistics, examples, expert quotes, anecdotes, and research findings.',
            standardCode: '6.RI.2',
          },
          {
            question:
              'Write one sentence that could begin an objective summary of an article about the benefits of reading.',
            type: 'short-answer',
            correctAnswer:
              'The article argues that regular reading strengthens vocabulary, improves focus, and builds empathy.',
            standardCode: '6.RI.2',
          },
        ],
      },
    },
  },

  {
    slug: 'grade6-ela-argument-analysis',
    title: 'Argument Analysis',
    description:
      'Trace and evaluate the argument and specific claims in a text, distinguishing claims that are supported by reasons and evidence from claims that are not',
    subject: 'ela',
    grade: 6,
    gradeBand: '6-8',
    topicCluster: 'Reading Informational',
    standardCodes: ['6.RI.8'],
    content: {
      intro: {
        title: 'Argument Analysis',
        text: 'Informational and persuasive texts often present an argument — a claim backed by reasons and evidence. A skilled reader does not simply accept every argument; they evaluate whether the claims are well-supported. In this module you will learn to identify claims, trace supporting reasons, and distinguish strong evidence from unsupported assertions.',
        culturalHook:
          'Debates happen everywhere — on the school bus, at the dinner table, in community meetings. Learning to evaluate arguments helps you make informed decisions in everyday life.',
      },
      segments: [
        {
          index: 0,
          title: 'Claims, Reasons, and Evidence',
          text: 'A claim is a statement the author wants you to believe, such as "Schools should start later in the morning." A reason explains why the claim makes sense: "Students perform better when they are well rested." Evidence is the proof that backs up the reason — a study showing improved test scores in schools that delayed start times. Strong arguments link all three: claim, reason, and evidence. Weak arguments may state a claim without providing convincing reasons or rely on opinions instead of facts.',
          keyVocabulary: ['claim', 'reason', 'evidence', 'assertion'],
        },
        {
          index: 1,
          title: 'Evaluating the Strength of Evidence',
          text: 'Not all evidence is equal. Data from a scientific study is generally stronger than one person\'s opinion. A specific statistic is more convincing than a vague statement like "many people agree." When evaluating an argument, ask: Is the evidence relevant to the claim? Is it from a credible source? Is there enough of it? If the answer to any of these is no, the argument is weaker than it appears.',
          keyVocabulary: ['credible', 'relevant', 'sufficient', 'evaluate'],
          example:
            'Claim: Recycling reduces landfill waste. Strong evidence: "According to the EPA, recycling diverted 69 million tons of waste from landfills in 2018." Weak evidence: "I heard recycling helps."',
        },
        {
          index: 2,
          title: 'Supported vs. Unsupported Claims',
          text: 'A supported claim has clear reasons and verifiable evidence behind it. An unsupported claim is stated as fact but lacks proof. For example, "Our town\'s water is the cleanest in the state" is unsupported unless the author provides test results or data. When you encounter a claim, highlight it and then look for the reasons and evidence that follow. If you cannot find any, mark the claim as unsupported.',
          keyVocabulary: ['supported', 'unsupported', 'verifiable', 'proof'],
        },
        {
          index: 3,
          title: 'Tracing an Argument Across a Text',
          text: 'Arguments unfold over multiple paragraphs. The claim is often in the introduction. Body paragraphs develop reasons, and each reason is backed by evidence. The conclusion may restate the claim and call the reader to action. To trace an argument, annotate each paragraph with its role: claim, reason, evidence, or conclusion. This map lets you see whether the argument is logical and complete or if important pieces are missing.',
          keyVocabulary: ['trace', 'annotate', 'logical', 'structure'],
        },
      ],
      practice: [
        {
          index: 0,
          question: 'What three components make up a strong argument?',
          type: 'multiple-choice',
          options: [
            'Title, introduction, conclusion',
            'Claim, reason, evidence',
            'Opinion, feeling, guess',
            'Summary, theme, vocabulary',
          ],
          correctAnswer: 'Claim, reason, evidence',
          hint: 'Think about what you need to prove a point.',
          explanation:
            'A strong argument starts with a claim, supports it with reasons, and backs those reasons up with evidence.',
          standardCode: '6.RI.8',
        },
        {
          index: 1,
          question:
            'Which piece of evidence is stronger: "A 2023 study found that students who read 20 minutes daily scored 15% higher on comprehension tests" or "Lots of people say reading is good"?',
          type: 'short-answer',
          correctAnswer:
            'The study with specific data is stronger because it is specific, measurable, and comes from a credible source.',
          hint: 'Compare the specificity and source of each piece of evidence.',
          explanation:
            'Specific data from a study is more credible and verifiable than a vague claim about what "lots of people" say.',
          standardCode: '6.RI.8',
        },
        {
          index: 2,
          question:
            'An editorial states: "Electric buses are the best option for our city." The author provides no data or expert opinions. Is this claim supported or unsupported?',
          type: 'multiple-choice',
          options: [
            'Supported, because the author sounds confident.',
            'Unsupported, because no evidence or reasons are provided.',
            'Supported, because it is published in a newspaper.',
            'Unsupported, because electric buses do not exist.',
          ],
          correctAnswer:
            'Unsupported, because no evidence or reasons are provided.',
          hint: 'A claim needs reasons and evidence, not just confidence.',
          explanation:
            'Without data, studies, or expert opinions, the claim remains an assertion. Being published does not automatically make a claim supported.',
          standardCode: '6.RI.8',
        },
        {
          index: 3,
          question:
            'Explain how you would trace an argument across a three-paragraph article.',
          type: 'short-answer',
          correctAnswer:
            'Identify the claim in the first paragraph, find the reasons and evidence in the second paragraph, and note how the third paragraph restates the claim or calls the reader to action.',
          hint: 'Think about the role each paragraph plays in building the argument.',
          explanation:
            'Tracing an argument means mapping claim, reasons, evidence, and conclusion across the text to see if the argument is complete and logical.',
          standardCode: '6.RI.8',
        },
        {
          index: 4,
          question:
            'Why is it important to evaluate arguments rather than accept them at face value?',
          type: 'multiple-choice',
          options: [
            'Because all arguments are wrong.',
            'Because evaluating helps you make informed decisions based on strong evidence.',
            'Because teachers require it.',
            'Because arguments are always boring.',
          ],
          correctAnswer:
            'Because evaluating helps you make informed decisions based on strong evidence.',
          hint: 'Think about the real-world value of critical thinking.',
          explanation:
            'Evaluating arguments protects you from misinformation and helps you form opinions based on solid evidence rather than unsupported claims.',
          standardCode: '6.RI.8',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'An article claims schools should serve breakfast because "a USDA study found that students who eat breakfast score 17% higher on math tests." Is this evidence relevant and credible?',
            type: 'multiple-choice',
            options: [
              'No, because the USDA is not a real organization.',
              'Yes, because it is a specific statistic from a credible government source directly related to the claim.',
              'No, because it only mentions math.',
              'Yes, but only if the reader likes math.',
            ],
            correctAnswer:
              'Yes, because it is a specific statistic from a credible government source directly related to the claim.',
            standardCode: '6.RI.8',
          },
          {
            question:
              'What is the difference between a supported claim and an unsupported claim?',
            type: 'short-answer',
            correctAnswer:
              'A supported claim is backed by reasons and verifiable evidence. An unsupported claim is stated without proof or relies only on opinion.',
            standardCode: '6.RI.8',
          },
          {
            question:
              'Which question is most useful for evaluating the evidence in an argument?',
            type: 'multiple-choice',
            options: [
              'Is the font size large enough?',
              'Is the evidence relevant, credible, and sufficient?',
              'Does the author use long sentences?',
              'Is the title interesting?',
            ],
            correctAnswer:
              'Is the evidence relevant, credible, and sufficient?',
            standardCode: '6.RI.8',
          },
        ],
      },
    },
  },

  {
    slug: 'grade6-ela-authors-purpose',
    title: "Author's Purpose",
    description:
      "Determine an author's point of view or purpose in a text and explain how it is conveyed in the text",
    subject: 'ela',
    grade: 6,
    gradeBand: '6-8',
    topicCluster: 'Reading Informational',
    standardCodes: ['6.RI.6'],
    content: {
      intro: {
        title: "Author's Purpose",
        text: "Every author writes with a purpose — to inform, to persuade, to entertain, or to explain. Recognizing why an author wrote a text helps you read it more critically. In this module you will learn to identify the author's purpose, recognize the techniques they use to achieve it, and explain how their point of view shapes the text.",
        culturalHook:
          'When a local newspaper writes about a new community center, is the goal to share facts, convince people to visit, or both? Asking this question is how you start thinking about purpose.',
      },
      segments: [
        {
          index: 0,
          title: 'The Four Main Purposes',
          text: "Authors generally write to inform, persuade, entertain, or explain. An informational article about weather patterns aims to inform. An editorial urging voters to support a park bond aims to persuade. A humorous essay about a family road trip aims to entertain. A how-to guide on building a birdhouse aims to explain. Some texts have more than one purpose — a persuasive article may also inform — but one purpose is usually dominant. Identifying it helps you understand the author's goal.",
          keyVocabulary: ['inform', 'persuade', 'entertain', 'explain', 'dominant purpose'],
        },
        {
          index: 1,
          title: "Techniques That Reveal Purpose",
          text: "Authors use specific techniques to achieve their purpose. To persuade, they may use emotional language, rhetorical questions, and strong opinion words like 'must' or 'should.' To inform, they rely on facts, data, and neutral language. To entertain, they use humor, vivid descriptions, and surprising details. Noticing these techniques is like finding fingerprints — they point directly to the author's purpose.",
          keyVocabulary: ['emotional language', 'rhetorical question', 'neutral language', 'technique'],
          example:
            'A sentence like "We must act now before it is too late" uses urgency and the word "must" to persuade. A sentence like "The average temperature rose 1.2 degrees over the past decade" uses data to inform.',
        },
        {
          index: 2,
          title: "Author's Point of View",
          text: "Point of view in informational text refers to the author's attitude or stance on a topic. An author who believes public libraries are essential will choose details, examples, and word choices that support libraries. Even seemingly neutral texts can carry a point of view through the details the author includes — or leaves out. To identify point of view, look at which side of an issue gets more attention and what tone the author uses.",
          keyVocabulary: ['point of view', 'stance', 'tone', 'bias'],
        },
        {
          index: 3,
          title: 'Explaining How Purpose Is Conveyed',
          text: "To explain how an author conveys purpose, connect the techniques to the goal. You might write: 'The author's purpose is to persuade readers to support the new trail. She achieves this by using statistics about health benefits and emotional language about children playing outdoors.' This kind of analysis shows that you understand not only what the author is doing but how they are doing it.",
          keyVocabulary: ['convey', 'analysis', 'connect', 'goal'],
        },
      ],
      practice: [
        {
          index: 0,
          question: 'What are the four main purposes for writing?',
          type: 'multiple-choice',
          options: [
            'Inform, persuade, entertain, explain',
            'Read, write, speak, listen',
            'Fiction, nonfiction, poetry, drama',
            'Introduction, body, conclusion, bibliography',
          ],
          correctAnswer: 'Inform, persuade, entertain, explain',
          hint: 'Think about the different reasons someone would sit down to write.',
          explanation:
            'The four main purposes — inform, persuade, entertain, and explain — cover the primary goals an author may have.',
          standardCode: '6.RI.6',
        },
        {
          index: 1,
          question:
            'An article includes the sentence: "Every citizen should demand better sidewalks." What is the likely purpose?',
          type: 'multiple-choice',
          options: [
            'To entertain with a funny story about sidewalks.',
            'To persuade readers to take action about sidewalks.',
            'To explain how sidewalks are built.',
            'To inform readers about the history of sidewalks.',
          ],
          correctAnswer:
            'To persuade readers to take action about sidewalks.',
          hint: 'The word "should" and the command "demand" suggest the author wants action.',
          explanation:
            'Words like "should" and "demand" signal persuasion — the author wants the reader to believe and act on the claim.',
          standardCode: '6.RI.6',
        },
        {
          index: 2,
          question:
            "How can you tell if an author's point of view is biased?",
          type: 'short-answer',
          correctAnswer:
            'Look for one-sided language, details that only support one perspective, emotional words, and missing counterarguments. These clues suggest bias.',
          hint: 'Bias shows up in what the author includes and what they leave out.',
          explanation:
            'Bias is revealed through imbalanced coverage, loaded language, and the absence of opposing viewpoints.',
          standardCode: '6.RI.6',
        },
        {
          index: 3,
          question:
            'A how-to article about making a compost bin uses step-by-step instructions and neutral language. What is the primary purpose?',
          type: 'multiple-choice',
          options: [
            'To persuade',
            'To entertain',
            'To explain',
            'To argue',
          ],
          correctAnswer: 'To explain',
          hint: 'Step-by-step instructions are a hallmark of which purpose?',
          explanation:
            'Step-by-step instructions and neutral language indicate the author\'s primary purpose is to explain how to do something.',
          standardCode: '6.RI.6',
        },
        {
          index: 4,
          question:
            "Explain how you would describe an author's purpose and point of view in one analytical sentence.",
          type: 'short-answer',
          correctAnswer:
            "State the purpose, name the author's stance, and identify the techniques used. Example: 'The author's purpose is to persuade readers that recess is essential, using research data and emotional anecdotes to convey a pro-recess point of view.'",
          hint: 'Combine purpose, stance, and technique into one sentence.',
          explanation:
            'A strong analytical sentence ties together what the author is trying to do, what they believe, and how they achieve it.',
          standardCode: '6.RI.6',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'An article about endangered species includes photographs of baby animals and the sentence "We cannot let these innocent creatures disappear." What is the author\'s purpose?',
            type: 'multiple-choice',
            options: [
              'To inform readers about animal biology.',
              'To persuade readers to care about endangered species.',
              'To entertain readers with cute photos.',
              'To explain how animals reproduce.',
            ],
            correctAnswer:
              'To persuade readers to care about endangered species.',
            standardCode: '6.RI.6',
          },
          {
            question:
              "Explain one technique an author might use to inform and one technique they might use to persuade.",
            type: 'short-answer',
            correctAnswer:
              'To inform, an author uses facts, data, and neutral language. To persuade, an author uses emotional language, opinion words like "must" or "should," and rhetorical questions.',
            standardCode: '6.RI.6',
          },
          {
            question:
              "An author writes only about the benefits of a new highway and never mentions drawbacks. What does this suggest about the author's point of view?",
            type: 'short-answer',
            correctAnswer:
              'It suggests the author has a biased point of view in favor of the highway, since they omit counterarguments and drawbacks.',
            standardCode: '6.RI.6',
          },
        ],
      },
    },
  },

  {
    slug: 'grade6-ela-text-structure',
    title: 'Text Structure',
    description:
      'Analyze how a particular sentence, paragraph, chapter, or section fits into the overall structure of a text and contributes to the development of ideas',
    subject: 'ela',
    grade: 6,
    gradeBand: '6-8',
    topicCluster: 'Reading Informational',
    standardCodes: ['6.RI.5'],
    content: {
      intro: {
        title: 'Text Structure',
        text: 'The way an author organizes information is called text structure. Different structures serve different purposes: some compare, some explain causes and effects, and some describe problems and solutions. Recognizing text structure helps you predict what kind of information is coming, understand how ideas connect, and remember what you read more effectively.',
        culturalHook:
          'Think about giving someone directions to your house. You would naturally use a sequence structure — step by step. Authors choose structures the same way, based on what makes their ideas clearest.',
      },
      segments: [
        {
          index: 0,
          title: 'Common Text Structures',
          text: 'The five most common text structures are chronological order (sequence), cause and effect, compare and contrast, problem and solution, and description. Chronological order presents events in time order. Cause and effect explains why something happens and what results. Compare and contrast shows similarities and differences. Problem and solution identifies an issue and proposes a fix. Description paints a detailed picture of a topic. Each structure organizes ideas in a way that fits the author\'s purpose.',
          keyVocabulary: ['chronological', 'cause and effect', 'compare and contrast', 'problem and solution', 'description'],
        },
        {
          index: 1,
          title: 'Signal Words',
          text: 'Authors use signal words — also called transition words — to guide readers through a text structure. "First," "next," and "finally" signal chronological order. "Because," "as a result," and "therefore" signal cause and effect. "However," "similarly," and "on the other hand" signal compare and contrast. "The issue is" and "one solution" signal problem and solution. Spotting these words helps you identify the structure quickly and follow the author\'s logic.',
          keyVocabulary: ['signal words', 'transition', 'logic', 'organize'],
          example:
            '"Because the river flooded, many roads were closed. As a result, students could not get to school." The words "because" and "as a result" signal a cause-and-effect structure.',
        },
        {
          index: 2,
          title: 'How Sections Contribute to the Whole',
          text: 'In a longer text, each section has a specific role. An opening section may introduce the problem. A middle section may present evidence or describe causes. A closing section may propose solutions or summarize findings. When you analyze structure, ask: "What job does this section do? How does it connect to the sections before and after it?" Understanding these connections helps you see the big picture of how the author develops ideas.',
          keyVocabulary: ['section', 'role', 'connection', 'develop'],
        },
        {
          index: 3,
          title: 'Why Structure Matters',
          text: 'Recognizing text structure is a powerful reading strategy. It helps you take better notes, predict what comes next, and organize your own writing. When you know an article is structured as problem and solution, you can set up a two-column chart before you even start reading. When you know a passage uses cause and effect, you can draw arrows connecting events. Using structure as a tool makes you a more efficient and confident reader.',
          keyVocabulary: ['strategy', 'predict', 'notes', 'efficient'],
        },
      ],
      practice: [
        {
          index: 0,
          question: 'What are the five common text structures?',
          type: 'short-answer',
          correctAnswer:
            'Chronological order, cause and effect, compare and contrast, problem and solution, and description.',
          hint: 'Think about the different ways information can be organized.',
          explanation:
            'These five structures cover the main patterns authors use to organize informational text.',
          standardCode: '6.RI.5',
        },
        {
          index: 1,
          question:
            'An article says: "Unlike dogs, cats are largely independent animals." What text structure does this sentence signal?',
          type: 'multiple-choice',
          options: [
            'Chronological order',
            'Cause and effect',
            'Compare and contrast',
            'Problem and solution',
          ],
          correctAnswer: 'Compare and contrast',
          hint: 'The word "unlike" highlights a difference between two things.',
          explanation:
            '"Unlike" is a signal word for compare and contrast, indicating the author is highlighting differences between dogs and cats.',
          standardCode: '6.RI.5',
        },
        {
          index: 2,
          question:
            'Which signal words indicate a cause-and-effect structure?',
          type: 'multiple-choice',
          options: [
            'First, next, finally',
            'Because, as a result, therefore',
            'However, similarly, on the other hand',
            'For example, such as, including',
          ],
          correctAnswer: 'Because, as a result, therefore',
          hint: 'These words connect a reason to an outcome.',
          explanation:
            '"Because," "as a result," and "therefore" all connect a cause to its effect.',
          standardCode: '6.RI.5',
        },
        {
          index: 3,
          question:
            'An article begins by describing pollution in a river and ends by recommending a cleanup initiative. What text structure is used?',
          type: 'multiple-choice',
          options: [
            'Chronological order',
            'Description',
            'Problem and solution',
            'Compare and contrast',
          ],
          correctAnswer: 'Problem and solution',
          hint: 'The article identifies an issue and then proposes a fix.',
          explanation:
            'The article follows a problem-and-solution structure: it presents pollution as the problem and a cleanup as the solution.',
          standardCode: '6.RI.5',
        },
        {
          index: 4,
          question:
            'Why does recognizing text structure help you become a better reader?',
          type: 'short-answer',
          correctAnswer:
            'It helps you predict what information is coming, organize your notes, understand how ideas connect, and remember what you read.',
          hint: 'Think about what you can do once you know how a text is organized.',
          explanation:
            'Knowing the structure gives you a mental framework for processing and retaining information.',
          standardCode: '6.RI.5',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'A paragraph reads: "The town faced severe drought. As a result, farmers lost half their crops. Therefore, the council approved an emergency water plan." What text structure is used?',
            type: 'multiple-choice',
            options: [
              'Compare and contrast',
              'Chronological order',
              'Cause and effect',
              'Description',
            ],
            correctAnswer: 'Cause and effect',
            standardCode: '6.RI.5',
          },
          {
            question:
              'Explain how the opening section of an informational article contributes to the overall text.',
            type: 'short-answer',
            correctAnswer:
              'The opening section introduces the topic, states the central idea, and sets up the structure the rest of the article will follow, giving the reader a framework for understanding what comes next.',
            standardCode: '6.RI.5',
          },
          {
            question:
              'Which graphic organizer would best match a compare-and-contrast text structure?',
            type: 'multiple-choice',
            options: [
              'A timeline',
              'A Venn diagram',
              'A flowchart',
              'A numbered list',
            ],
            correctAnswer: 'A Venn diagram',
            standardCode: '6.RI.5',
          },
        ],
      },
    },
  },

  // ── Writing (4 modules) ─────────────────────────────────────
  {
    slug: 'grade6-ela-argument-writing',
    title: 'Argument Writing: Claim, Evidence, and Counterclaim',
    description:
      'Write arguments to support claims with clear reasons and relevant evidence, including addressing counterclaims',
    subject: 'ela',
    grade: 6,
    gradeBand: '6-8',
    topicCluster: 'Writing',
    standardCodes: ['6.W.1'],
    content: {
      intro: {
        title: 'Argument Writing: Claim, Evidence, and Counterclaim',
        text: 'Argument writing asks you to take a position on an issue, support it with evidence, and address the other side fairly. This is different from simply stating an opinion — an argument uses logic and proof. In this module you will learn to craft a clear claim, organize reasons and evidence, acknowledge counterclaims, and write a strong conclusion that reinforces your position.',
        culturalHook:
          'Have you ever tried to convince a parent or guardian to let you do something? You probably gave reasons and even addressed their concerns. That is argument writing in action.',
      },
      segments: [
        {
          index: 0,
          title: 'Writing a Clear Claim',
          text: 'Your claim is the position you are arguing. It should be a clear, debatable statement — not a fact and not a vague opinion. "Pizza is food" is a fact, not a claim. "Pizza should be served in school cafeterias every day" is a claim because reasonable people could disagree. Place your claim in the introduction so readers know your position from the start. A strong claim sets the direction for your entire essay.',
          keyVocabulary: ['claim', 'debatable', 'position', 'introduction'],
        },
        {
          index: 1,
          title: 'Supporting with Reasons and Evidence',
          text: 'Each body paragraph should present one reason that supports your claim, followed by evidence. Evidence can be facts, statistics, expert opinions, or examples. After presenting evidence, explain how it supports your reason and connects back to the claim. This is the same C-E-E pattern — Claim, Evidence, Explanation — used in literary analysis. Two to three strong reasons with solid evidence are more persuasive than five weak ones.',
          keyVocabulary: ['reasons', 'evidence', 'body paragraph', 'C-E-E'],
          example:
            'Claim: Schools should have longer recess. Reason: Physical activity improves focus. Evidence: "A 2020 study found that students who had 30 minutes of recess scored 12% higher on afternoon tests." Explanation: This data proves that more recess leads to better academic performance.',
        },
        {
          index: 2,
          title: 'Addressing Counterclaims',
          text: 'A counterclaim is the opposing side\'s argument. Addressing it shows you understand the full issue and strengthens your credibility. You can acknowledge the counterclaim and then refute it with evidence. For example: "Some argue that longer recess wastes instructional time. However, research shows that the improved focus after recess actually increases learning efficiency." Use transitions like "Some may argue," "Critics suggest," or "On the other hand" to introduce the counterclaim.',
          keyVocabulary: ['counterclaim', 'refute', 'credibility', 'acknowledge'],
        },
        {
          index: 3,
          title: 'Conclusion',
          text: 'Your conclusion should restate your claim in a fresh way, summarize your strongest reasons, and leave the reader with something to think about — a call to action, a thought-provoking question, or a forward-looking statement. Avoid introducing new evidence in the conclusion. Instead, tie everything together so the reader finishes your essay feeling convinced and informed.',
          keyVocabulary: ['conclusion', 'restate', 'call to action', 'summarize'],
        },
      ],
      practice: [
        {
          index: 0,
          question: 'Which of the following is a strong, debatable claim?',
          type: 'multiple-choice',
          options: [
            'Water is made of hydrogen and oxygen.',
            'Schools should require students to learn a second language starting in kindergarten.',
            'Some people like chocolate.',
            'The earth revolves around the sun.',
          ],
          correctAnswer:
            'Schools should require students to learn a second language starting in kindergarten.',
          hint: 'A claim must be debatable — people could reasonably disagree.',
          explanation:
            'This statement takes a clear position that can be argued for or against. The other options are facts or vague opinions.',
          standardCode: '6.W.1',
        },
        {
          index: 1,
          question: 'What is the purpose of addressing a counterclaim in your argument?',
          type: 'short-answer',
          correctAnswer:
            'Addressing a counterclaim shows you understand the opposing side and strengthens your argument by refuting it with evidence.',
          hint: 'Think about why acknowledging the other side makes your argument stronger.',
          explanation:
            'Acknowledging and refuting a counterclaim demonstrates fairness and critical thinking, which increases your credibility.',
          standardCode: '6.W.1',
        },
        {
          index: 2,
          question:
            'A student writes: "Recycling is good because it helps." What is wrong with this evidence?',
          type: 'multiple-choice',
          options: [
            'It is too specific.',
            'It is vague and provides no concrete data or examples.',
            'It is a counterclaim.',
            'It is a conclusion.',
          ],
          correctAnswer:
            'It is vague and provides no concrete data or examples.',
          hint: 'Strong evidence is specific and verifiable.',
          explanation:
            'Saying recycling "helps" without specifying how or providing data is too vague to be persuasive evidence.',
          standardCode: '6.W.1',
        },
        {
          index: 3,
          question:
            'Which transition phrase effectively introduces a counterclaim?',
          type: 'multiple-choice',
          options: [
            '"For example,"',
            '"In conclusion,"',
            '"Some may argue that"',
            '"First,"',
          ],
          correctAnswer: '"Some may argue that"',
          hint: 'Counterclaim transitions acknowledge the opposing view.',
          explanation:
            '"Some may argue that" signals you are about to present the other side\'s position before refuting it.',
          standardCode: '6.W.1',
        },
        {
          index: 4,
          question:
            'What should a conclusion do in an argument essay?',
          type: 'short-answer',
          correctAnswer:
            'A conclusion should restate the claim, summarize the strongest reasons, and leave the reader with a call to action or a thought-provoking final statement.',
          hint: 'The conclusion wraps everything up without adding new evidence.',
          explanation:
            'The conclusion reinforces the argument and gives the reader a lasting impression of the writer\'s position.',
          standardCode: '6.W.1',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'A student\'s claim is: "Our school should start a composting program." Write one sentence that addresses a counterclaim and refutes it.',
            type: 'short-answer',
            correctAnswer:
              'Some may argue that composting is messy and time-consuming; however, modern composting bins are odor-free and require only five minutes of maintenance per day.',
            standardCode: '6.W.1',
          },
          {
            question:
              'Which element should NOT appear in the conclusion of an argument essay?',
            type: 'multiple-choice',
            options: [
              'A restatement of the claim.',
              'A summary of key reasons.',
              'Brand-new evidence not mentioned in the body.',
              'A call to action.',
            ],
            correctAnswer:
              'Brand-new evidence not mentioned in the body.',
            standardCode: '6.W.1',
          },
          {
            question:
              'Explain the C-E-E pattern and why it is important in argument writing.',
            type: 'short-answer',
            correctAnswer:
              'C-E-E stands for Claim, Evidence, Explanation. It ensures that each point is supported by proof and that the writer explains how the evidence connects to the claim, making the argument logical and convincing.',
            standardCode: '6.W.1',
          },
        ],
      },
    },
  },

  {
    slug: 'grade6-ela-narrative-writing',
    title: 'Narrative Writing',
    description:
      'Write narratives to develop real or imagined experiences using effective technique, relevant descriptive details, and well-structured event sequences',
    subject: 'ela',
    grade: 6,
    gradeBand: '6-8',
    topicCluster: 'Writing',
    standardCodes: ['6.W.3'],
    content: {
      intro: {
        title: 'Narrative Writing',
        text: 'Narrative writing tells a story — real or imagined — with a clear beginning, middle, and end. Great narratives pull readers in with vivid details, meaningful dialogue, and a sequence of events that builds toward a satisfying conclusion. In this module you will learn techniques for engaging your reader from the first sentence and crafting a story that feels complete.',
        culturalHook:
          'Every family has stories that get retold at gatherings. The best storytellers use details and pacing to keep everyone listening. That is exactly what narrative writing asks you to do on paper.',
      },
      segments: [
        {
          index: 0,
          title: 'Engaging Openings',
          text: 'The opening of your narrative should hook the reader immediately. You can start with action ("I sprinted down the gravel road, my lungs burning"), dialogue ("\'Don\'t open that door,\' my grandmother whispered"), or a surprising detail ("The letter had been hidden inside the piano for forty years"). Avoid starting with "One day" or "This story is about" — these openings are generic and do not create interest. Your first sentence should make the reader want to know what happens next.',
          keyVocabulary: ['hook', 'opening', 'action', 'dialogue'],
        },
        {
          index: 1,
          title: 'Developing the Plot',
          text: 'A strong narrative follows a plot arc: exposition introduces characters and setting, rising action builds tension through a conflict, the climax is the turning point, falling action shows the aftermath, and the resolution wraps things up. Each event should connect logically to the next. Use transitions like "later that evening," "without warning," and "by the time" to move the story forward smoothly. Pacing matters — slow down for important moments and speed up through less critical ones.',
          keyVocabulary: ['plot arc', 'exposition', 'climax', 'resolution', 'pacing'],
          example:
            'Exposition: A girl moves to a new town. Rising action: She struggles to make friends. Climax: She stands up for a classmate being bullied. Falling action: Other students begin to include her. Resolution: She realizes bravery earned her real friendships.',
        },
        {
          index: 2,
          title: 'Descriptive Details and Sensory Language',
          text: 'Descriptive details bring a story to life. Instead of writing "The room was messy," write "Crumpled papers covered the floor, and a half-eaten sandwich balanced on the edge of the desk." Use sensory language that appeals to sight, sound, smell, taste, and touch. These details help the reader see, hear, and feel your story rather than just reading words on a page. Choose details that matter — ones that reveal character, set mood, or advance the plot.',
          keyVocabulary: ['sensory language', 'descriptive details', 'mood', 'vivid'],
        },
        {
          index: 3,
          title: 'Dialogue and Conclusion',
          text: 'Dialogue reveals character and moves the plot forward. Each character should sound distinct — a grandmother speaks differently from a twelve-year-old. Use dialogue tags like "said," "whispered," and "shouted" sparingly, and let the words themselves convey emotion. Your conclusion should resolve the conflict and leave the reader with a sense of completion. It might include a reflection by the narrator or a final image that echoes the story\'s theme.',
          keyVocabulary: ['dialogue', 'dialogue tags', 'conclusion', 'reflection'],
        },
      ],
      practice: [
        {
          index: 0,
          question: 'Which opening best hooks the reader?',
          type: 'multiple-choice',
          options: [
            '"This story is about a boy who finds a map."',
            '"One day something happened."',
            '"The map was drawn in faded ink on the back of a grocery receipt."',
            '"I am going to tell you a story."',
          ],
          correctAnswer:
            '"The map was drawn in faded ink on the back of a grocery receipt."',
          hint: 'A hook uses a surprising or vivid detail to create curiosity.',
          explanation:
            'This opening creates immediate curiosity with a specific, unexpected image. The other options are generic and do not engage the reader.',
          standardCode: '6.W.3',
        },
        {
          index: 1,
          question: 'Put the five parts of a plot arc in order.',
          type: 'short-answer',
          correctAnswer:
            'Exposition, rising action, climax, falling action, resolution.',
          hint: 'Start with the introduction and end with how things wrap up.',
          explanation:
            'The plot arc moves from introduction (exposition) through building tension (rising action) to the turning point (climax), then the aftermath (falling action), and finally the wrap-up (resolution).',
          standardCode: '6.W.3',
        },
        {
          index: 2,
          question:
            'Rewrite this sentence using sensory language: "The kitchen smelled good."',
          type: 'short-answer',
          correctAnswer:
            'The warm scent of cinnamon and baking bread drifted through the kitchen, making my stomach growl.',
          hint: 'Name the specific smells and describe the feeling they create.',
          explanation:
            'Sensory language replaces vague words with specific details that appeal to the senses, helping the reader experience the scene.',
          standardCode: '6.W.3',
        },
        {
          index: 3,
          question:
            'Why is it important for each character\'s dialogue to sound different?',
          type: 'multiple-choice',
          options: [
            'So the story is longer.',
            'So readers can distinguish characters and each one feels realistic.',
            'Because teachers require it.',
            'Because all characters must use formal language.',
          ],
          correctAnswer:
            'So readers can distinguish characters and each one feels realistic.',
          hint: 'People in real life speak differently based on age, background, and personality.',
          explanation:
            'Distinct dialogue makes characters feel real and helps the reader tell them apart, adding depth to the narrative.',
          standardCode: '6.W.3',
        },
        {
          index: 4,
          question:
            'What should the conclusion of a narrative do?',
          type: 'multiple-choice',
          options: [
            'Introduce a brand-new conflict.',
            'Resolve the conflict and leave the reader with a sense of completion.',
            'List all the characters.',
            'Repeat the opening sentence word for word.',
          ],
          correctAnswer:
            'Resolve the conflict and leave the reader with a sense of completion.',
          hint: 'The ending wraps up the story satisfactorily.',
          explanation:
            'A narrative conclusion resolves the central conflict and may include a reflection or final image that reinforces the story\'s theme.',
          standardCode: '6.W.3',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Write one sentence that could serve as a narrative hook about discovering something unexpected in a library.',
            type: 'short-answer',
            correctAnswer:
              'Between the dusty pages of a book no one had checked out in thirty years, a folded photograph slipped onto my shoe.',
            standardCode: '6.W.3',
          },
          {
            question:
              'Which element of narrative writing helps the reader see, hear, and feel the story?',
            type: 'multiple-choice',
            options: [
              'A bibliography',
              'Sensory language and descriptive details',
              'A table of contents',
              'Bullet points',
            ],
            correctAnswer: 'Sensory language and descriptive details',
            standardCode: '6.W.3',
          },
          {
            question:
              'Explain why pacing is important in narrative writing.',
            type: 'short-answer',
            correctAnswer:
              'Pacing controls how fast or slow the story moves. Slowing down at important moments builds tension and emotion, while speeding up through less critical events keeps the reader engaged.',
            standardCode: '6.W.3',
          },
        ],
      },
    },
  },

  {
    slug: 'grade6-ela-research-writing',
    title: 'Research Writing',
    description:
      'Conduct short research projects to answer a question, drawing on several sources and refocusing the inquiry when appropriate',
    subject: 'ela',
    grade: 6,
    gradeBand: '6-8',
    topicCluster: 'Writing',
    standardCodes: ['6.W.7'],
    content: {
      intro: {
        title: 'Research Writing',
        text: 'Research writing goes beyond personal knowledge — it requires gathering information from multiple sources, evaluating their reliability, and synthesizing findings into a clear, organized report. In this module you will learn how to form a research question, find and evaluate sources, take effective notes, and present your findings in a well-structured piece of writing.',
        culturalHook:
          'Imagine your community wants to build a new playground. Before choosing a design, someone has to research what is safest and most popular. Research writing uses the same skills.',
      },
      segments: [
        {
          index: 0,
          title: 'Forming a Research Question',
          text: 'A research question guides your entire project. It should be specific enough to answer in a short report but broad enough that you can find multiple sources. "What is water?" is too broad. "What is the pH level of Lake Erie on March 5?" is too narrow. "How does water pollution affect freshwater fish populations?" is just right. A good research question begins with "how," "why," or "what effect" and cannot be answered with a simple yes or no.',
          keyVocabulary: ['research question', 'specific', 'broad', 'inquiry'],
        },
        {
          index: 1,
          title: 'Finding and Evaluating Sources',
          text: 'Use multiple sources — books, reputable websites, articles, and interviews — to gather information. Evaluate each source by asking: Who wrote it? Is the author an expert? When was it published? Is the information supported by evidence? Reliable sources include government websites, educational institutions, and published research. Be cautious of sources with no author, heavy bias, or outdated information. Using at least three credible sources strengthens your report.',
          keyVocabulary: ['credible', 'reliable', 'evaluate', 'bias'],
          example:
            'A .gov or .edu website is generally more reliable than a personal blog with no cited sources.',
        },
        {
          index: 2,
          title: 'Note-Taking and Avoiding Plagiarism',
          text: 'As you research, take notes in your own words. Write down key facts, statistics, and quotes, and always record the source so you can cite it later. Plagiarism — copying someone else\'s words or ideas without credit — is a serious issue. To avoid it, paraphrase information and use quotation marks when you include exact wording. A simple citation, such as noting the author and source title, shows that you are giving credit where it is due.',
          keyVocabulary: ['note-taking', 'plagiarism', 'paraphrase', 'citation'],
        },
        {
          index: 3,
          title: 'Organizing and Presenting Findings',
          text: 'Organize your report with an introduction that states your research question and thesis, body paragraphs that each cover one key finding, and a conclusion that summarizes what you learned. Use transitions to connect ideas across paragraphs. Include a simple list of sources at the end. If your research leads you in an unexpected direction, refocus your question — good researchers adapt when the evidence points somewhere new.',
          keyVocabulary: ['thesis', 'organize', 'refocus', 'transitions'],
        },
      ],
      practice: [
        {
          index: 0,
          question: 'Which research question is best for a short report?',
          type: 'multiple-choice',
          options: [
            'What is science?',
            'How does deforestation affect rainfall patterns in tropical regions?',
            'Is water wet?',
            'What happened yesterday?',
          ],
          correctAnswer:
            'How does deforestation affect rainfall patterns in tropical regions?',
          hint: 'The best question is specific but not too narrow.',
          explanation:
            'This question is focused enough for a short report, uses "how," and requires evidence from multiple sources.',
          standardCode: '6.W.7',
        },
        {
          index: 1,
          question:
            'Why should you use at least three sources in a research report?',
          type: 'short-answer',
          correctAnswer:
            'Multiple sources allow you to cross-check information, reduce bias, and provide a more complete picture of the topic.',
          hint: 'Relying on one source can give a one-sided view.',
          explanation:
            'Using multiple sources ensures accuracy and gives the reader confidence that the findings are well-supported.',
          standardCode: '6.W.7',
        },
        {
          index: 2,
          question: 'What is plagiarism?',
          type: 'multiple-choice',
          options: [
            'Writing your own opinion about a topic.',
            'Copying someone else\'s words or ideas without giving credit.',
            'Using a dictionary to look up a word.',
            'Reading a book for research.',
          ],
          correctAnswer:
            'Copying someone else\'s words or ideas without giving credit.',
          hint: 'It involves taking credit for work that is not yours.',
          explanation:
            'Plagiarism means presenting another person\'s words or ideas as your own. It is avoided by paraphrasing and citing sources.',
          standardCode: '6.W.7',
        },
        {
          index: 3,
          question:
            'A student finds that her research question about "the history of space travel" is too broad. How should she refocus?',
          type: 'short-answer',
          correctAnswer:
            'She should narrow the question to a specific aspect, such as "How did the Apollo 11 mission change public interest in space exploration?"',
          hint: 'Focus on one event, time period, or effect.',
          explanation:
            'Narrowing a broad question makes the research manageable and the report more focused and detailed.',
          standardCode: '6.W.7',
        },
        {
          index: 4,
          question:
            'Which source is most likely credible for a report on nutrition?',
          type: 'multiple-choice',
          options: [
            'An anonymous blog post with no citations.',
            'A peer-reviewed article from a university nutrition department.',
            'A social media comment from a stranger.',
            'A five-year-old advertisement for a diet product.',
          ],
          correctAnswer:
            'A peer-reviewed article from a university nutrition department.',
          hint: 'Credible sources come from experts and are supported by evidence.',
          explanation:
            'A peer-reviewed university article is written by experts and checked for accuracy, making it highly credible.',
          standardCode: '6.W.7',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Explain two strategies for avoiding plagiarism in a research report.',
            type: 'short-answer',
            correctAnswer:
              'Paraphrase information into your own words and cite your sources. Use quotation marks for any exact wording taken from a source.',
            standardCode: '6.W.7',
          },
          {
            question:
              'What should you do if your research leads you in an unexpected direction?',
            type: 'multiple-choice',
            options: [
              'Ignore the new information and stick to the original plan.',
              'Refocus your research question to reflect what the evidence shows.',
              'Stop the project entirely.',
              'Copy information from the first source you find.',
            ],
            correctAnswer:
              'Refocus your research question to reflect what the evidence shows.',
            standardCode: '6.W.7',
          },
          {
            question:
              'What three parts should a research report include?',
            type: 'short-answer',
            correctAnswer:
              'An introduction with the research question and thesis, body paragraphs covering key findings, and a conclusion that summarizes the results along with a list of sources.',
            standardCode: '6.W.7',
          },
        ],
      },
    },
  },

  {
    slug: 'grade6-ela-informational-essay',
    title: 'Informational Essay',
    description:
      'Write informative/explanatory texts to examine a topic and convey ideas, concepts, and information through the selection and organization of relevant content',
    subject: 'ela',
    grade: 6,
    gradeBand: '6-8',
    topicCluster: 'Writing',
    standardCodes: ['6.W.2'],
    content: {
      intro: {
        title: 'Informational Essay',
        text: 'An informational essay teaches the reader about a topic using facts, definitions, details, and examples — without arguing a position. Your job is to explain clearly and organize logically so that someone unfamiliar with the topic walks away informed. In this module you will learn to write a strong thesis, develop body paragraphs with relevant content, use transitions, and craft a conclusion that reinforces the main ideas.',
        culturalHook:
          'If a younger student asked you to explain how your school lunch program works, you would organize your answer step by step. That is informational writing.',
      },
      segments: [
        {
          index: 0,
          title: 'Thesis and Introduction',
          text: 'The thesis of an informational essay states the topic and previews the key points you will cover. For example: "The water cycle consists of three main stages — evaporation, condensation, and precipitation — that work together to recycle Earth\'s water." Your introduction should begin with a hook to capture interest, provide brief background information, and end with the thesis. This structure gives the reader a roadmap for the essay.',
          keyVocabulary: ['thesis', 'introduction', 'hook', 'preview'],
        },
        {
          index: 1,
          title: 'Body Paragraphs with Relevant Content',
          text: 'Each body paragraph should focus on one key point related to the thesis. Start with a topic sentence that introduces the point. Follow with facts, definitions, examples, or quotations that develop it. End with a sentence that ties the paragraph back to the thesis. Select only the most relevant content — including too many minor details can confuse the reader. Aim for depth over breadth: it is better to explain three points well than to mention six points superficially.',
          keyVocabulary: ['topic sentence', 'relevant content', 'develop', 'depth'],
          example:
            'Topic sentence: "Evaporation is the first stage of the water cycle." Supporting details: definition of evaporation, the role of heat, examples of evaporation from oceans and lakes.',
        },
        {
          index: 2,
          title: 'Transitions and Cohesion',
          text: 'Transitions connect paragraphs and ideas so the essay flows smoothly. Use words and phrases like "in addition," "for example," "as a result," and "in contrast" to guide the reader from one point to the next. Good transitions create cohesion — the sense that every part of the essay belongs together. Without them, even well-researched essays can feel choppy and disconnected.',
          keyVocabulary: ['transitions', 'cohesion', 'flow', 'connected'],
        },
        {
          index: 3,
          title: 'Conclusion',
          text: 'The conclusion of an informational essay restates the thesis and summarizes the main points without introducing new information. It may also explain why the topic matters or suggest what the reader might explore next. A strong conclusion leaves the reader with a clear understanding of the topic and a sense of closure. Think of it as the final snapshot that ties the whole essay together.',
          keyVocabulary: ['conclusion', 'restate', 'summarize', 'closure'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'What is the purpose of a thesis in an informational essay?',
          type: 'multiple-choice',
          options: [
            'To state an opinion and argue for it.',
            'To introduce the topic and preview the key points.',
            'To list every detail about the topic.',
            'To entertain the reader with a story.',
          ],
          correctAnswer:
            'To introduce the topic and preview the key points.',
          hint: 'A thesis is like a roadmap for the reader.',
          explanation:
            'In an informational essay, the thesis tells the reader what the topic is and what key points will be covered.',
          standardCode: '6.W.2',
        },
        {
          index: 1,
          question:
            'Why should each body paragraph focus on only one key point?',
          type: 'short-answer',
          correctAnswer:
            'Focusing on one point per paragraph keeps the writing clear and organized, allowing the writer to develop each idea with sufficient depth.',
          hint: 'Think about what happens when too many ideas are crammed into one paragraph.',
          explanation:
            'One-point paragraphs are easier to follow and allow for detailed development, which improves reader comprehension.',
          standardCode: '6.W.2',
        },
        {
          index: 2,
          question:
            'Which transition word signals that an additional point is being added?',
          type: 'multiple-choice',
          options: [
            '"However"',
            '"In addition"',
            '"In contrast"',
            '"On the other hand"',
          ],
          correctAnswer: '"In addition"',
          hint: 'You are looking for a word that adds more information, not one that shows a difference.',
          explanation:
            '"In addition" signals that the writer is presenting another supporting point, building on the previous idea.',
          standardCode: '6.W.2',
        },
        {
          index: 3,
          question:
            'What should you avoid including in the conclusion of an informational essay?',
          type: 'multiple-choice',
          options: [
            'A restatement of the thesis.',
            'A summary of the main points.',
            'Brand-new information or details.',
            'A statement about why the topic matters.',
          ],
          correctAnswer: 'Brand-new information or details.',
          hint: 'The conclusion wraps up — it does not open new doors.',
          explanation:
            'Introducing new information in the conclusion confuses the reader and undermines the essay\'s structure.',
          standardCode: '6.W.2',
        },
        {
          index: 4,
          question:
            'Write a thesis statement for an informational essay about the benefits of community libraries.',
          type: 'short-answer',
          correctAnswer:
            'Community libraries provide free access to books, technology, and educational programs that benefit people of all ages.',
          hint: 'State the topic and preview two or three key points.',
          explanation:
            'A strong thesis names the topic (community libraries) and previews the key points (books, technology, and educational programs).',
          standardCode: '6.W.2',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Which element belongs in the introduction of an informational essay?',
            type: 'multiple-choice',
            options: [
              'A list of sources.',
              'A hook, background information, and thesis.',
              'A counterclaim and refutation.',
              'The conclusion.',
            ],
            correctAnswer: 'A hook, background information, and thesis.',
            standardCode: '6.W.2',
          },
          {
            question:
              'Explain why transitions are important in an informational essay.',
            type: 'short-answer',
            correctAnswer:
              'Transitions connect ideas and paragraphs so the essay flows smoothly and the reader can follow the writer\'s logic from one point to the next.',
            standardCode: '6.W.2',
          },
          {
            question:
              'A student writes a body paragraph about volcanoes that includes facts about volcanoes, a paragraph about dinosaurs, and a recipe for lava cake. What is wrong with this paragraph?',
            type: 'multiple-choice',
            options: [
              'It is too short.',
              'It includes irrelevant content that does not relate to the topic sentence.',
              'It has too many transitions.',
              'It is missing a hook.',
            ],
            correctAnswer:
              'It includes irrelevant content that does not relate to the topic sentence.',
            standardCode: '6.W.2',
          },
        ],
      },
    },
  },

  // ── Language (3 modules) ────────────────────────────────────
  {
    slug: 'grade6-ela-word-relationships',
    title: 'Word Relationships',
    description:
      'Demonstrate understanding of word relationships by distinguishing among words with similar but distinct meanings (synonyms, antonyms, analogies)',
    subject: 'ela',
    grade: 6,
    gradeBand: '6-8',
    topicCluster: 'Language',
    standardCodes: ['6.L.5'],
    content: {
      intro: {
        title: 'Word Relationships',
        text: 'Words do not exist in isolation — they are connected through relationships. Understanding these relationships helps you choose the most precise word for any situation, improve your vocabulary, and comprehend challenging texts. In this module you will explore synonyms, antonyms, analogies, and the subtle differences between words that seem similar but carry distinct meanings.',
        culturalHook:
          'Choosing the right word is like picking the right tool from a toolbox. A hammer and a mallet are similar, but each is better for a different job. Words work the same way.',
      },
      segments: [
        {
          index: 0,
          title: 'Synonyms and Shades of Meaning',
          text: 'Synonyms are words with similar meanings, but they rarely mean exactly the same thing. "Happy," "joyful," and "ecstatic" all describe positive feelings, yet "ecstatic" is far more intense than "happy." These differences are called shades of meaning. Choosing the right synonym makes your writing more precise. Ask yourself: How strong is the feeling? Is the word formal or informal? Does it fit the tone of my sentence? Paying attention to these questions sharpens your word choice.',
          keyVocabulary: ['synonyms', 'shades of meaning', 'precise', 'tone'],
        },
        {
          index: 1,
          title: 'Antonyms',
          text: 'Antonyms are words with opposite meanings — hot and cold, generous and selfish, expand and contract. Knowing antonyms helps you understand unfamiliar words. If you know "timid" means shy, you can reason that its antonym, "bold," means confident and daring. Antonyms also add contrast to your writing. Saying "The morning was calm, but the afternoon was chaotic" uses antonyms to create a vivid comparison.',
          keyVocabulary: ['antonyms', 'opposite', 'contrast', 'comparison'],
          example:
            'Antonym pairs: ancient/modern, abundant/scarce, harmony/discord. Each pair highlights a clear contrast.',
        },
        {
          index: 2,
          title: 'Analogies',
          text: 'An analogy shows a relationship between two pairs of words. "Pilot is to airplane as captain is to ship" means that a pilot operates an airplane the same way a captain operates a ship. Analogies test your ability to see patterns — part to whole, cause to effect, synonym to synonym, tool to user. To solve an analogy, first identify the relationship in the given pair, then find or create a pair with the same relationship.',
          keyVocabulary: ['analogy', 'relationship', 'pattern', 'pair'],
        },
        {
          index: 3,
          title: 'Choosing the Most Precise Word',
          text: 'Precision in word choice elevates your writing from good to great. Instead of saying "The dog moved across the yard," consider whether the dog walked, trotted, dashed, or limped. Each word creates a different picture. When you revise your writing, circle vague words and replace them with more specific alternatives. A thesaurus is a helpful tool, but always check that the replacement word fits the context and tone of your sentence.',
          keyVocabulary: ['precise', 'specific', 'revise', 'thesaurus'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'Which word is the most intense synonym for "angry"?',
          type: 'multiple-choice',
          options: ['Annoyed', 'Irritated', 'Furious', 'Upset'],
          correctAnswer: 'Furious',
          hint: 'Think about which word shows the strongest feeling.',
          explanation:
            '"Furious" is the most intense, indicating extreme anger, while "annoyed" and "irritated" are milder.',
          standardCode: '6.L.5',
        },
        {
          index: 1,
          question: 'What is the antonym of "abundant"?',
          type: 'short-answer',
          correctAnswer: 'Scarce',
          hint: '"Abundant" means plenty. What word means very little?',
          explanation:
            '"Scarce" means in short supply, which is the opposite of "abundant," meaning plentiful.',
          standardCode: '6.L.5',
        },
        {
          index: 2,
          question:
            'Complete the analogy: "Brush is to painter as _____ is to surgeon."',
          type: 'multiple-choice',
          options: ['Canvas', 'Scalpel', 'Easel', 'Gallery'],
          correctAnswer: 'Scalpel',
          hint: 'A brush is the tool a painter uses. What tool does a surgeon use?',
          explanation:
            'The analogy is tool to user. A brush is a painter\'s tool; a scalpel is a surgeon\'s tool.',
          standardCode: '6.L.5',
        },
        {
          index: 3,
          question:
            'A student writes: "The cat went up the tree." Which revision uses more precise language?',
          type: 'multiple-choice',
          options: [
            '"The cat moved up the tree."',
            '"The cat scrambled up the oak tree."',
            '"The cat was by the tree."',
            '"Something happened with the cat and the tree."',
          ],
          correctAnswer: '"The cat scrambled up the oak tree."',
          hint: 'Look for the option with the most specific verb and noun.',
          explanation:
            '"Scrambled" is more precise than "went" or "moved," and "oak tree" is more specific than just "tree."',
          standardCode: '6.L.5',
        },
        {
          index: 4,
          question:
            'Explain why "walked" and "strutted" are synonyms but not interchangeable in every sentence.',
          type: 'short-answer',
          correctAnswer:
            'Both mean to move on foot, but "strutted" implies confidence or pride. Using "strutted" in a sad scene would not fit the tone.',
          hint: 'Think about the different feelings each word creates.',
          explanation:
            'Synonyms carry different connotations and tones. "Strutted" adds a layer of attitude that "walked" does not, so context determines which is appropriate.',
          standardCode: '6.L.5',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Arrange these synonyms from least to most intense: "dislike," "detest," "hate."',
            type: 'short-answer',
            correctAnswer: 'Dislike, hate, detest.',
            standardCode: '6.L.5',
          },
          {
            question:
              'Complete the analogy: "Calm is to storm as peace is to _____."',
            type: 'multiple-choice',
            options: ['Quiet', 'Conflict', 'Happiness', 'Sleep'],
            correctAnswer: 'Conflict',
            standardCode: '6.L.5',
          },
          {
            question:
              'Why is using precise vocabulary important in writing?',
            type: 'short-answer',
            correctAnswer:
              'Precise vocabulary creates clearer images, conveys exact meaning, and makes writing more engaging and effective for the reader.',
            standardCode: '6.L.5',
          },
        ],
      },
    },
  },

  {
    slug: 'grade6-ela-context-clues',
    title: 'Context Clues',
    description:
      'Determine or clarify the meaning of unknown and multiple-meaning words and phrases using context clues',
    subject: 'ela',
    grade: 6,
    gradeBand: '6-8',
    topicCluster: 'Language',
    standardCodes: ['6.L.4'],
    content: {
      intro: {
        title: 'Context Clues',
        text: 'When you encounter an unfamiliar word, the surrounding text often holds the key to its meaning. These hints are called context clues. Skilled readers use them to figure out definitions on the fly without reaching for a dictionary every time. In this module you will learn four types of context clues and practice applying them to unlock the meaning of unknown words.',
        culturalHook:
          'If someone at a family gathering uses a word you have never heard, you probably figure out what it means from the rest of the conversation. That is using context clues in real life.',
      },
      segments: [
        {
          index: 0,
          title: 'Definition and Restatement Clues',
          text: 'Sometimes the author defines the word right in the sentence. "Photosynthesis, the process by which plants convert sunlight into food, occurs mainly in the leaves." The phrase after the comma is the definition. A restatement clue says the same thing in different words, often introduced by "in other words," "that is," or "also known as." Spotting these clues is the quickest way to determine a word\'s meaning without leaving the page.',
          keyVocabulary: ['definition clue', 'restatement', 'convert', 'determine'],
        },
        {
          index: 1,
          title: 'Synonym and Antonym Clues',
          text: 'A synonym clue places a familiar word near the unknown word. "The boy was elated — thrilled, even — when he saw the puppy." "Thrilled" is a synonym that helps you understand "elated." An antonym clue uses an opposite to hint at meaning. "Unlike her timid sister, Rosa was audacious." Since "timid" is the opposite, you can infer that "audacious" means bold or daring. Words like "unlike," "but," and "however" often signal antonym clues.',
          keyVocabulary: ['synonym clue', 'antonym clue', 'infer', 'signal words'],
          example:
            'Antonym clue: "The trail was arduous, not the easy hike we had expected." "Easy" is the antonym, so "arduous" means difficult.',
        },
        {
          index: 2,
          title: 'Example and Inference Clues',
          text: 'An example clue gives instances of the unknown word. "Nocturnal animals, such as owls, bats, and raccoons, are most active at night." The examples help you figure out that "nocturnal" means active at night. An inference clue requires more reasoning. "After three days without rain, the reservoir dwindled." You can infer from the drought context that "dwindled" means shrank or decreased. Inference clues demand that you combine the clue with your own knowledge.',
          keyVocabulary: ['example clue', 'inference clue', 'reasoning', 'context'],
        },
        {
          index: 3,
          title: 'Multiple-Meaning Words',
          text: 'Some words have more than one meaning. "Bank" can mean the side of a river or a place to keep money. Context tells you which meaning applies. "She sat on the bank and watched the fish swim past" clearly refers to the river\'s edge. When you encounter a multiple-meaning word, read the full sentence — and sometimes the sentences around it — to determine the intended meaning. This skill prevents misunderstandings and improves reading comprehension.',
          keyVocabulary: ['multiple-meaning', 'intended meaning', 'context', 'comprehension'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'In the sentence "The arid, or extremely dry, desert stretched for miles," what type of context clue is used?',
          type: 'multiple-choice',
          options: [
            'Antonym clue',
            'Example clue',
            'Definition/restatement clue',
            'Inference clue',
          ],
          correctAnswer: 'Definition/restatement clue',
          hint: 'The meaning is given directly after the comma.',
          explanation:
            'The phrase "or extremely dry" restates the meaning of "arid," making it a definition/restatement clue.',
          standardCode: '6.L.4',
        },
        {
          index: 1,
          question:
            'In "Unlike the gaps fragile vase, the sturdy mug survived the fall," what does "fragile" most likely mean?',
          type: 'multiple-choice',
          options: ['Strong', 'Delicate and easily broken', 'Expensive', 'Large'],
          correctAnswer: 'Delicate and easily broken',
          hint: '"Unlike" signals an antonym clue. "Sturdy" is the opposite.',
          explanation:
            '"Unlike" and "sturdy" set up a contrast, so "fragile" means the opposite of sturdy — delicate and easily broken.',
          standardCode: '6.L.4',
        },
        {
          index: 2,
          question:
            'Use context clues to define "benevolent" in this sentence: "The benevolent neighbor brought soup to every sick family on the block."',
          type: 'short-answer',
          correctAnswer:
            '"Benevolent" means kind and generous. The clue is the neighbor\'s caring action of bringing soup to sick families.',
          hint: 'What kind of person would bring soup to sick neighbors?',
          explanation:
            'The action of helping sick families suggests that "benevolent" means kind, caring, or generous.',
          standardCode: '6.L.4',
        },
        {
          index: 3,
          question:
            'The word "bat" appears in two sentences: "She swung the bat at the pitch" and "A bat flew out of the cave." How do context clues help?',
          type: 'short-answer',
          correctAnswer:
            'In the first sentence, "swung" and "pitch" indicate a baseball bat. In the second, "flew" and "cave" indicate the flying mammal. The surrounding words clarify the intended meaning.',
          hint: 'Look at the other words in each sentence for clues about which meaning is intended.',
          explanation:
            'Context clues like "swung/pitch" and "flew/cave" distinguish between the two meanings of "bat."',
          standardCode: '6.L.4',
        },
        {
          index: 4,
          question:
            'Which type of context clue requires the most reasoning from the reader?',
          type: 'multiple-choice',
          options: [
            'Definition clue',
            'Restatement clue',
            'Inference clue',
            'Synonym clue',
          ],
          correctAnswer: 'Inference clue',
          hint: 'This type does not give you the answer directly — you have to figure it out.',
          explanation:
            'Inference clues do not state or restate the meaning. The reader must combine textual hints with prior knowledge to determine the word\'s meaning.',
          standardCode: '6.L.4',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'In "Luminous stars filled the night sky, their bright light visible for miles," what does "luminous" mean?',
            type: 'multiple-choice',
            options: ['Dark', 'Bright or glowing', 'Tiny', 'Fast'],
            correctAnswer: 'Bright or glowing',
            standardCode: '6.L.4',
          },
          {
            question:
              'Explain how you would use context clues to figure out the meaning of an unknown word in a sentence.',
            type: 'short-answer',
            correctAnswer:
              'Read the surrounding words and sentences for hints such as definitions, synonyms, antonyms, examples, or logical inferences. Use those clues to determine the word\'s meaning.',
            standardCode: '6.L.4',
          },
          {
            question:
              'The word "crane" can mean a machine or a bird. In "The crane lifted the steel beam to the top of the building," which meaning is intended and how do you know?',
            type: 'short-answer',
            correctAnswer:
              'It means a machine. The context clues "lifted," "steel beam," and "building" indicate construction equipment, not a bird.',
            standardCode: '6.L.4',
          },
        ],
      },
    },
  },

  {
    slug: 'grade6-ela-figurative-meaning',
    title: 'Figurative Meaning',
    description:
      'Interpret figures of speech such as metaphors, similes, personification, and hyperbole in context',
    subject: 'ela',
    grade: 6,
    gradeBand: '6-8',
    topicCluster: 'Language',
    standardCodes: ['6.L.5'],
    content: {
      intro: {
        title: 'Figurative Meaning',
        text: 'Figurative language uses words in creative ways that go beyond their literal meaning. When someone says "time flies," they do not mean time has wings — they mean it passes quickly. Authors use figurative language to create vivid images, stir emotions, and make their writing memorable. In this module you will learn to identify and interpret similes, metaphors, personification, and hyperbole.',
        culturalHook:
          'Everyday speech is full of figurative language. "I am starving" (hyperbole) and "the wind whispered" (personification) are phrases you probably hear — and use — all the time.',
      },
      segments: [
        {
          index: 0,
          title: 'Similes and Metaphors',
          text: 'A simile compares two unlike things using "like" or "as." "Her smile was as bright as the sun" compares a smile to the sun. A metaphor makes the comparison directly without "like" or "as." "Her smile was a sunbeam" says the smile is a sunbeam, creating an even stronger image. Both devices help readers see ordinary things in a new way. When you encounter a simile or metaphor, identify the two things being compared and think about what quality they share.',
          keyVocabulary: ['simile', 'metaphor', 'comparison', 'imagery'],
        },
        {
          index: 1,
          title: 'Personification',
          text: 'Personification gives human qualities to nonhuman things. "The wind howled through the canyon" gives the wind the human ability to howl. "The old house groaned under the weight of snow" makes the house sound alive. Personification helps readers connect emotionally with objects, nature, or abstract ideas. It turns the ordinary into something vivid and relatable. To interpret personification, ask: "What human quality is being given, and what effect does it create?"',
          keyVocabulary: ['personification', 'human qualities', 'vivid', 'effect'],
          example:
            '"The alarm clock screamed at 6 a.m." gives the clock the human action of screaming, emphasizing how jarring and loud the alarm feels.',
        },
        {
          index: 2,
          title: 'Hyperbole',
          text: 'Hyperbole is extreme exaggeration used for emphasis or humor — not meant to be taken literally. "I have told you a million times" does not mean literally one million; it emphasizes frustration at repeating something. "My backpack weighs a ton" highlights how heavy it feels. Hyperbole adds energy and emotion to writing and speech. When you spot hyperbole, identify the exaggeration and consider the real feeling or idea the speaker wants to convey.',
          keyVocabulary: ['hyperbole', 'exaggeration', 'emphasis', 'literal'],
        },
        {
          index: 3,
          title: 'Interpreting Figurative Language in Context',
          text: 'To interpret figurative language, look at the surrounding sentences for clues about tone and meaning. If a poem describes a storm and then says "the sky wept," the context tells you the personification creates a mood of sadness. Figurative language can change meaning depending on context — "a heart of stone" could mean cruelty in one passage and strength in another. Always consider what the author is trying to make you feel or understand when they use figurative language.',
          keyVocabulary: ['interpret', 'tone', 'mood', 'context'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'Identify the figure of speech: "The classroom was a zoo after the teacher left."',
          type: 'multiple-choice',
          options: ['Simile', 'Metaphor', 'Personification', 'Hyperbole'],
          correctAnswer: 'Metaphor',
          hint: 'Is the comparison using "like" or "as"? If not, it is the other type of comparison.',
          explanation:
            'The sentence directly compares the classroom to a zoo without using "like" or "as," making it a metaphor.',
          standardCode: '6.L.5',
        },
        {
          index: 1,
          question:
            'What does the personification in "The stars danced across the night sky" suggest?',
          type: 'short-answer',
          correctAnswer:
            'It suggests that the stars appeared to twinkle and move playfully, creating an image of beauty and liveliness in the night sky.',
          hint: 'Dancing is a human action. What feeling does it add to the stars?',
          explanation:
            'Giving stars the ability to dance creates a lively, joyful image and helps the reader visualize the night sky as dynamic.',
          standardCode: '6.L.5',
        },
        {
          index: 2,
          question:
            '"I am so hungry I could eat a horse." What figure of speech is this?',
          type: 'multiple-choice',
          options: ['Simile', 'Metaphor', 'Personification', 'Hyperbole'],
          correctAnswer: 'Hyperbole',
          hint: 'Is this an extreme exaggeration not meant literally?',
          explanation:
            'Eating a horse is an extreme exaggeration meant to emphasize how hungry the speaker is. This is hyperbole.',
          standardCode: '6.L.5',
        },
        {
          index: 3,
          question:
            'How do you tell the difference between a simile and a metaphor?',
          type: 'short-answer',
          correctAnswer:
            'A simile uses "like" or "as" to compare two things, while a metaphor states that one thing is another without using "like" or "as."',
          hint: 'Look for two key words that one uses and the other does not.',
          explanation:
            'The presence of "like" or "as" is the signal for a simile. Without those words, a direct comparison is a metaphor.',
          standardCode: '6.L.5',
        },
        {
          index: 4,
          question:
            'In a sad poem, the line "the rain cried against the windowpane" uses personification. What mood does it create?',
          type: 'multiple-choice',
          options: ['Joyful', 'Angry', 'Sorrowful', 'Humorous'],
          correctAnswer: 'Sorrowful',
          hint: 'Crying is associated with sadness. How does that connect to the poem\'s tone?',
          explanation:
            'Giving rain the human action of crying mirrors the sad tone of the poem and deepens the sorrowful mood.',
          standardCode: '6.L.5',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              '"Life is a roller coaster." Identify the figure of speech and explain its meaning.',
            type: 'short-answer',
            correctAnswer:
              'This is a metaphor. It means that life has ups and downs, just like a roller coaster, emphasizing that experiences vary between exciting highs and difficult lows.',
            standardCode: '6.L.5',
          },
          {
            question:
              'Which sentence contains a simile?',
            type: 'multiple-choice',
            options: [
              '"The world is a stage."',
              '"She ran as fast as a cheetah."',
              '"The thunder grumbled."',
              '"I have a mountain of homework."',
            ],
            correctAnswer: '"She ran as fast as a cheetah."',
            standardCode: '6.L.5',
          },
          {
            question:
              'Explain why authors use figurative language instead of literal language.',
            type: 'short-answer',
            correctAnswer:
              'Figurative language creates vivid images, stirs emotions, and makes writing more engaging and memorable than plain literal statements.',
            standardCode: '6.L.5',
          },
        ],
      },
    },
  },
]
