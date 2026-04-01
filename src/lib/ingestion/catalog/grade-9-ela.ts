import type { ModuleSeed } from '../types'

export const GRADE_9_ELA: ModuleSeed[] = [
  // ─── Reading Literature (4 modules) ───────────────────────────
  {
    slug: 'grade9-ela-character-theme-analysis',
    title: 'Character and Theme Analysis',
    description:
      'Analyze how complex characters develop over the course of a text, interact with other characters, and advance the theme or central idea.',
    subject: 'ela',
    grade: 9,
    gradeBand: '9-12',
    topicCluster: 'Reading Literature',
    standardCodes: ['9-10.RL.2', '9-10.RL.3'],
    content: {
      intro: {
        title: 'Character and Theme Analysis',
        text: 'Great literature reveals its deepest ideas through the choices characters make, the conflicts they face, and the transformations they undergo. In this module you will learn to trace a character\'s development across a full text and explain how that development embodies the work\'s central theme.',
        culturalHook:
          'Think of someone in your community whose life story teaches a lesson. How does what happened to them reveal a bigger truth about life?',
      },
      segments: [
        {
          index: 0,
          title: 'Complex Characters and Motivation',
          text: 'A complex character possesses multiple, sometimes contradictory motivations. To analyze a character, identify what they want (motivation), what stands in their way (conflict), and how they change (arc). Track specific moments — dialogue, decisions, internal reflection — where these elements surface. Record shifts in the character\'s beliefs or behavior and consider what causes each shift.',
          keyVocabulary: ['complex character', 'motivation', 'character arc', 'internal conflict'],
        },
        {
          index: 1,
          title: 'From Character to Theme',
          text: 'A theme is an insight about life that a text communicates through its characters and events. To connect character to theme, ask: "What does this character\'s journey reveal about human experience?" If a protagonist\'s ambition leads to isolation, the theme may be that unchecked ambition erodes relationships. Support this reading with evidence showing the character\'s progression and its consequences.',
          keyVocabulary: ['theme', 'central idea', 'textual evidence', 'character progression'],
          example:
            'In a novel where a young person leaves a close-knit rural community to pursue success in a distant city, the character\'s growing loneliness despite outward achievement develops the theme that community bonds are more essential than individual accolades.',
        },
        {
          index: 2,
          title: 'Interactions Between Characters',
          text: 'Characters do not develop in isolation. Foils highlight contrasting traits; mentors prompt growth; antagonists force difficult choices. Analyze how interactions between characters — disagreements, alliances, betrayals — propel each character\'s arc and deepen the theme. Pay attention to dialogue subtext: what characters leave unsaid often matters as much as what they say.',
          keyVocabulary: ['foil', 'antagonist', 'dialogue subtext', 'character interaction'],
        },
        {
          index: 3,
          title: 'Writing a Character–Theme Analysis',
          text: 'A strong analytical paragraph begins with a claim linking character development to theme. Follow with embedded quotations that show key moments of change. Explain how each piece of evidence illustrates the character\'s transformation and what that transformation reveals thematically. Conclude by reflecting on the broader significance of the theme.',
          keyVocabulary: ['analytical claim', 'embedded quotation', 'commentary', 'significance'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'Which of the following best describes a "complex character"?',
          type: 'multiple-choice',
          options: [
            'A character with multiple, sometimes contradictory motivations who changes over the course of the text.',
            'A character who appears in many scenes.',
            'A character the reader likes.',
            'A character described with many physical details.',
          ],
          correctAnswer:
            'A character with multiple, sometimes contradictory motivations who changes over the course of the text.',
          hint: 'Complexity refers to depth of motivation and capacity for change, not quantity of appearances.',
          explanation:
            'Complex characters are defined by layered motivations and meaningful development, not by how often they appear or how likable they are.',
          standardCode: '9-10.RL.3',
        },
        {
          index: 1,
          question:
            'A protagonist begins a novel confident and self-reliant but ends it recognizing the value of asking for help. What theme might this character arc develop?',
          type: 'short-answer',
          correctAnswer:
            'The character arc suggests the theme that true strength lies in vulnerability and the willingness to rely on others, not in rigid independence.',
          hint: 'Focus on what the character learns and what that lesson says about life in general.',
          explanation:
            'The shift from self-reliance to openness reveals an insight about human connection and strength, which is the theme the arc develops.',
          standardCode: '9-10.RL.2',
        },
        {
          index: 2,
          question:
            'What is the role of a foil character in developing theme?',
          type: 'multiple-choice',
          options: [
            'A foil highlights contrasting traits in the protagonist, sharpening the reader\'s understanding of the theme.',
            'A foil is always the villain of the story.',
            'A foil provides comic relief to lighten the theme.',
            'A foil restates the theme in dialogue so readers do not miss it.',
          ],
          correctAnswer:
            'A foil highlights contrasting traits in the protagonist, sharpening the reader\'s understanding of the theme.',
          hint: 'Think about contrast and what it reveals.',
          explanation:
            'A foil character contrasts with the protagonist in ways that make the protagonist\'s traits — and the theme those traits embody — clearer to the reader.',
          standardCode: '9-10.RL.3',
        },
        {
          index: 3,
          question:
            'Why should an analytical paragraph about character and theme include embedded quotations rather than only summarizing the plot?',
          type: 'short-answer',
          correctAnswer:
            'Embedded quotations provide specific textual evidence that grounds the analysis in the author\'s language, making the argument more precise and convincing than a general plot summary.',
          hint: 'Consider the difference between telling and showing in your own writing.',
          explanation:
            'Quotations anchor claims in the text itself, allowing the writer to analyze exact language and demonstrate how the author develops character and theme.',
          standardCode: '9-10.RL.2',
        },
        {
          index: 4,
          question:
            'Which element is MOST important to include when connecting a character\'s development to a theme?',
          type: 'multiple-choice',
          options: [
            'Evidence of how the character changes and an explanation of what that change reveals about life.',
            'A biography of the author.',
            'A list of every character in the text.',
            'A comparison to a film adaptation.',
          ],
          correctAnswer:
            'Evidence of how the character changes and an explanation of what that change reveals about life.',
          hint: 'Theme emerges from character transformation, not from external information.',
          explanation:
            'The link between character and theme requires showing the character\'s change and articulating the broader insight that change illustrates.',
          standardCode: '9-10.RL.2',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Read the following passage in which a character moves from resentment toward forgiveness. Identify the theme this character arc develops and cite two specific moments that show the transformation.',
            type: 'short-answer',
            correctAnswer:
              'The character arc develops the theme that forgiveness is an act of personal liberation, not a gift to the offender. Two key moments: (1) the character\'s internal monologue shifting from anger to empathy, and (2) the scene where the character voluntarily reaches out to the person who wronged them.',
            standardCode: '9-10.RL.2',
          },
          {
            question:
              'How does the interaction between the protagonist and the foil character in the excerpt sharpen the central theme?',
            type: 'short-answer',
            correctAnswer:
              'The foil\'s contrasting response to the same challenge highlights the protagonist\'s growth and emphasizes the theme that courage requires accepting uncertainty rather than avoiding it.',
            standardCode: '9-10.RL.3',
          },
          {
            question:
              'Which of the following best states how character development connects to theme?',
            type: 'multiple-choice',
            options: [
              'A character\'s transformation across the text embodies a broader insight about human experience that is the theme.',
              'Theme is stated directly by the narrator and has nothing to do with characters.',
              'Characters are only important for advancing the plot, not the theme.',
              'A theme is the same as the topic of the story.',
            ],
            correctAnswer:
              'A character\'s transformation across the text embodies a broader insight about human experience that is the theme.',
            standardCode: '9-10.RL.2',
          },
        ],
      },
    },
  },

  {
    slug: 'grade9-ela-authors-choices',
    title: "Author's Choices: Structure and Meaning",
    description:
      'Analyze how an author\'s choices concerning structure, pacing, and point of view shape the reader\'s experience and contribute to the overall meaning of a literary text.',
    subject: 'ela',
    grade: 9,
    gradeBand: '9-12',
    topicCluster: 'Reading Literature',
    standardCodes: ['9-10.RL.5', '9-10.RL.6'],
    content: {
      intro: {
        title: "Author's Choices: Structure and Meaning",
        text: 'Every element of a literary text — from the order of events to the narrator\'s perspective — is a deliberate choice by the author. Understanding these choices helps you see how meaning is constructed rather than simply discovered. In this module you will examine how structure, pacing, and point of view shape what a reader thinks and feels.',
        culturalHook:
          'Consider a story that is told differently depending on who is telling it in your family or community. How does the teller\'s perspective change the meaning?',
      },
      segments: [
        {
          index: 0,
          title: 'Structural Choices',
          text: 'Authors choose how to organize a text: chronological order, in medias res (starting in the middle), flashbacks, parallel plotlines, or frame narratives. Each structure creates a different effect. A flashback can build suspense by withholding context; a frame narrative can add layers of interpretation. When analyzing structure, ask: "Why did the author arrange events this way, and how does that arrangement affect the reader\'s understanding?"',
          keyVocabulary: ['in medias res', 'flashback', 'frame narrative', 'parallel plotlines'],
        },
        {
          index: 1,
          title: 'Pacing and Tension',
          text: 'Pacing is the speed at which a narrative unfolds. Short sentences and rapid dialogue increase pace and build urgency. Long descriptive passages slow pace and create reflection or atmosphere. Authors manipulate pacing to control tension — accelerating toward a climax, then decelerating in the resolution. Identify where the author speeds up or slows down and explain the effect on the reader\'s emotional experience.',
          keyVocabulary: ['pacing', 'tension', 'climax', 'resolution'],
          example:
            'In a suspense scene, an author might use clipped sentences — "She ran. The door locked. Silence." — to quicken the reader\'s pulse, then shift to a slow, detailed paragraph once the danger passes.',
        },
        {
          index: 2,
          title: 'Point of View and Its Effects',
          text: 'Point of view determines what information the reader receives and whose inner life is accessible. First-person narration creates intimacy but limits the reader to one perspective. Third-person omniscient provides breadth but may reduce immediacy. An unreliable narrator forces the reader to question what is true. Analyze how the chosen point of view shapes the reader\'s sympathy, knowledge, and interpretation of events.',
          keyVocabulary: ['first-person', 'third-person omniscient', 'unreliable narrator', 'perspective'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'An author begins a novel with the climax and then shifts to events leading up to it. What structural technique is this?',
          type: 'multiple-choice',
          options: [
            'In medias res',
            'Chronological order',
            'Epilogue',
            'Stream of consciousness',
          ],
          correctAnswer: 'In medias res',
          hint: 'This Latin term means "in the middle of things."',
          explanation:
            'In medias res opens a narrative at a crucial or exciting point, then circles back to show how events unfolded, building the reader\'s curiosity.',
          standardCode: '9-10.RL.5',
        },
        {
          index: 1,
          question:
            'How does an author\'s use of short, clipped sentences during an action scene affect the reader?',
          type: 'short-answer',
          correctAnswer:
            'Short, clipped sentences quicken the pace, creating a sense of urgency and heightened tension that mirrors the rapid action in the scene.',
          hint: 'Think about how sentence length relates to the speed at which you read.',
          explanation:
            'Pacing is controlled partly through sentence length. Shorter sentences force quick reading, which physically replicates the urgency of the scene and increases emotional tension.',
          standardCode: '9-10.RL.5',
        },
        {
          index: 2,
          question:
            'Which point of view would most effectively create doubt about whether the narrator is telling the truth?',
          type: 'multiple-choice',
          options: [
            'First-person narration with hints of bias or contradiction.',
            'Third-person omniscient narration.',
            'Second-person narration.',
            'Third-person objective narration.',
          ],
          correctAnswer:
            'First-person narration with hints of bias or contradiction.',
          hint: 'An unreliable narrator needs a limited, personal perspective for the doubt to work.',
          explanation:
            'First-person narration confines the reader to one character\'s account, so contradictions or biases in that account create the hallmark doubt of an unreliable narrator.',
          standardCode: '9-10.RL.6',
        },
        {
          index: 3,
          question:
            'Why might an author use a frame narrative (a story within a story)?',
          type: 'short-answer',
          correctAnswer:
            'A frame narrative adds layers of interpretation by introducing a secondary narrator or context that shapes how the reader understands the inner story, often raising questions about reliability or perspective.',
          hint: 'Think about how hearing a story secondhand changes your understanding of it.',
          explanation:
            'Frame narratives create distance between the reader and the inner story, which can prompt reflection on perspective, truth, and the act of storytelling itself.',
          standardCode: '9-10.RL.5',
        },
        {
          index: 4,
          question:
            'An author slows the pace with a detailed description of a landscape immediately after a character receives devastating news. What is the most likely effect?',
          type: 'multiple-choice',
          options: [
            'It creates a reflective pause that lets the emotional weight of the news settle for both the character and the reader.',
            'It distracts the reader from the plot.',
            'It signals that the landscape is more important than the character.',
            'It indicates the story is ending.',
          ],
          correctAnswer:
            'It creates a reflective pause that lets the emotional weight of the news settle for both the character and the reader.',
          hint: 'Consider how slowing down after an emotional event mirrors real human processing.',
          explanation:
            'A pacing shift to slow description after a climactic moment mirrors the way people process shock, giving the reader time to absorb the emotional impact.',
          standardCode: '9-10.RL.5',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Analyze how the author\'s choice of point of view in the excerpt shapes the reader\'s understanding of the central conflict. Use specific evidence from the text.',
            type: 'short-answer',
            correctAnswer:
              'The first-person point of view limits the reader to the narrator\'s perceptions, creating sympathy for the narrator while leaving the antagonist\'s motivations ambiguous. This shapes the conflict as deeply personal and unresolved, reinforcing the theme of misunderstanding.',
            standardCode: '9-10.RL.6',
          },
          {
            question:
              'Which structural choice would BEST create suspense in a mystery narrative?',
            type: 'multiple-choice',
            options: [
              'Beginning in medias res at the moment of discovery, then using flashbacks to reveal clues gradually.',
              'Telling events in strict chronological order with no withholding of information.',
              'Using an omniscient narrator who reveals the solution in chapter one.',
              'Ending the story before the conflict is introduced.',
            ],
            correctAnswer:
              'Beginning in medias res at the moment of discovery, then using flashbacks to reveal clues gradually.',
            standardCode: '9-10.RL.5',
          },
          {
            question:
              'Explain how the author\'s pacing choices in the excerpt contribute to the overall meaning of the text. Cite at least one specific technique.',
            type: 'short-answer',
            correctAnswer:
              'The author accelerates pacing with short, fragmented sentences during the confrontation, then dramatically slows with a long descriptive passage afterward. This contrast emphasizes the theme that moments of crisis are brief but their emotional aftermath lingers.',
            standardCode: '9-10.RL.5',
          },
        ],
      },
    },
  },

  {
    slug: 'grade9-ela-comparing-world-literature',
    title: 'Comparing World Literature',
    description:
      'Compare and contrast texts from different cultures and time periods, analyzing how each text reflects its cultural context while exploring universal themes.',
    subject: 'ela',
    grade: 9,
    gradeBand: '9-12',
    topicCluster: 'Reading Literature',
    standardCodes: ['9-10.RL.7', '9-10.RL.9'],
    content: {
      intro: {
        title: 'Comparing World Literature',
        text: 'Literature transcends borders. A folktale from West Africa and a myth from ancient Greece may both grapple with justice, yet each is shaped by distinct cultural values, historical circumstances, and literary traditions. In this module you will develop the skill of cross-cultural literary comparison, learning to honor each text\'s context while identifying universal threads.',
        culturalHook:
          'Think about a story from your own heritage. If someone from the other side of the world told a similar story, what might be the same and what might be different?',
      },
      segments: [
        {
          index: 0,
          title: 'Cultural Context and Literary Meaning',
          text: 'Every text is rooted in a cultural moment. To compare world literature responsibly, begin by researching each text\'s historical and cultural background: When and where was it written? What values, beliefs, or social structures does it reflect? Understanding context prevents misreading and enriches interpretation. Note how setting, character roles, and narrative conventions differ across cultures.',
          keyVocabulary: ['cultural context', 'historical background', 'narrative conventions', 'social structures'],
        },
        {
          index: 1,
          title: 'Identifying Universal Themes',
          text: 'Universal themes — love, loss, justice, coming of age — recur across literatures worldwide. When comparing texts, articulate the shared theme precisely. Then examine how each text\'s cultural context shapes its treatment: a coming-of-age story in one culture may emphasize individual independence, while another may stress responsibility to the community. The theme is shared; the cultural expression is distinct.',
          keyVocabulary: ['universal theme', 'cultural expression', 'coming of age', 'comparative lens'],
          example:
            'Both a Japanese haiku sequence and an American free-verse poem may explore the theme of impermanence, but the haiku relies on seasonal imagery rooted in Japanese aesthetics, while the free-verse poem may use urban decay as its controlling metaphor.',
        },
        {
          index: 2,
          title: 'Analyzing Literary Techniques Across Traditions',
          text: 'Different literary traditions employ different techniques. Oral traditions favor repetition, call-and-response, and communal voice. Western modernist texts may use stream of consciousness and fragmentation. When comparing, identify each text\'s key techniques, explain how those techniques serve the theme, and discuss what each tradition\'s approach reveals about its values.',
          keyVocabulary: ['oral tradition', 'stream of consciousness', 'repetition', 'fragmentation'],
        },
        {
          index: 3,
          title: 'Crafting a Cross-Cultural Comparison',
          text: 'A strong comparative essay organizes analysis around points of comparison, not text by text. Use a structure like: "Both Text A and Text B address [theme], yet they differ in [technique/cultural value]." Provide evidence from both texts for each point. Avoid ranking one culture\'s literature above another; the goal is understanding, not judgment.',
          keyVocabulary: ['point-by-point structure', 'cross-cultural comparison', 'equitable analysis'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'Why is understanding cultural context essential before comparing texts from different traditions?',
          type: 'short-answer',
          correctAnswer:
            'Cultural context prevents misinterpretation by revealing the values, history, and literary conventions that shaped each text, allowing the reader to compare fairly and accurately.',
          hint: 'Think about what might go wrong if you judged a text from another culture using only your own cultural assumptions.',
          explanation:
            'Without cultural context, readers may impose their own values on a text and misread its meaning. Context grounds comparison in understanding rather than assumption.',
          standardCode: '9-10.RL.9',
        },
        {
          index: 1,
          question:
            'Two texts from different cultures both explore the theme of justice. Text A portrays justice as communal restoration; Text B portrays justice as individual punishment. What does this difference reveal?',
          type: 'short-answer',
          correctAnswer:
            'The difference reveals that each culture holds distinct values about justice — one prioritizing community healing and the other emphasizing individual accountability — showing how cultural context shapes thematic expression.',
          hint: 'Focus on what each culture values, as reflected in its treatment of the theme.',
          explanation:
            'Universal themes take culturally specific forms. Comparing these forms illuminates the values underlying each literary tradition.',
          standardCode: '9-10.RL.9',
        },
        {
          index: 2,
          question:
            'Which organizational strategy is MOST effective for a cross-cultural literary comparison?',
          type: 'multiple-choice',
          options: [
            'Point-by-point, organizing around shared aspects of comparison with evidence from both texts.',
            'Summarizing Text A completely, then summarizing Text B completely.',
            'Ranking the texts from best to worst.',
            'Focusing only on differences and ignoring similarities.',
          ],
          correctAnswer:
            'Point-by-point, organizing around shared aspects of comparison with evidence from both texts.',
          hint: 'The strongest comparisons keep both texts in conversation throughout the essay.',
          explanation:
            'Point-by-point structure ensures that both texts are analyzed together around each aspect of comparison, producing a cohesive and balanced essay.',
          standardCode: '9-10.RL.9',
        },
        {
          index: 3,
          question:
            'An oral tradition tale uses call-and-response, while a modernist short story uses stream of consciousness. How do both techniques serve the theme of collective memory?',
          type: 'short-answer',
          correctAnswer:
            'Call-and-response involves the audience directly, embodying collective memory through communal participation. Stream of consciousness captures memory as a personal, fragmented flow. Both explore how the past is preserved, but one emphasizes community and the other emphasizes the individual mind.',
          hint: 'Consider who is "remembering" in each technique — a group or an individual.',
          explanation:
            'Comparing techniques reveals how different traditions conceptualize the same theme: one through shared voice, the other through interior experience.',
          standardCode: '9-10.RL.7',
        },
        {
          index: 4,
          question:
            'What should a writer AVOID when comparing literature from different cultures?',
          type: 'multiple-choice',
          options: [
            'Ranking one culture\'s literature as superior to another\'s.',
            'Identifying universal themes.',
            'Providing textual evidence from both texts.',
            'Discussing different literary techniques.',
          ],
          correctAnswer:
            'Ranking one culture\'s literature as superior to another\'s.',
          hint: 'The purpose of cross-cultural comparison is understanding, not judgment.',
          explanation:
            'Equitable analysis respects each tradition on its own terms. Ranking cultures undermines the purpose of comparison and introduces bias.',
          standardCode: '9-10.RL.9',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Compare how two texts from different cultural traditions treat the theme of sacrifice. Identify the shared theme and explain how each text\'s cultural context shapes its expression.',
            type: 'short-answer',
            correctAnswer:
              'Both texts explore the theme that sacrifice for others defines true heroism. Text A, rooted in a collectivist culture, shows sacrifice as a communal expectation honored through ritual. Text B, from an individualist tradition, frames sacrifice as a personal moral choice. The cultural contexts shape whether sacrifice is seen as duty or agency.',
            standardCode: '9-10.RL.9',
          },
          {
            question:
              'Which statement best reflects the goal of comparing world literature?',
            type: 'multiple-choice',
            options: [
              'To understand how universal themes are expressed through culturally specific literary traditions.',
              'To determine which culture produces the best literature.',
              'To prove that all literature is essentially the same.',
              'To memorize facts about different countries.',
            ],
            correctAnswer:
              'To understand how universal themes are expressed through culturally specific literary traditions.',
            standardCode: '9-10.RL.9',
          },
          {
            question:
              'Explain how one literary technique from each of the two excerpts serves the same theme differently. Use specific evidence.',
            type: 'short-answer',
            correctAnswer:
              'Text A uses repetition (an oral tradition technique) to reinforce the theme of perseverance through communal chanting, while Text B uses imagery of a solitary figure against a storm to convey perseverance as individual endurance. Both develop the same theme through techniques rooted in their respective traditions.',
            standardCode: '9-10.RL.7',
          },
        ],
      },
    },
  },

  {
    slug: 'grade9-ela-narrative-structure',
    title: 'Narrative Structure',
    description:
      'Analyze how authors use narrative structure — including exposition, rising action, climax, falling action, and resolution — to create meaning and engage readers.',
    subject: 'ela',
    grade: 9,
    gradeBand: '9-12',
    topicCluster: 'Reading Literature',
    standardCodes: ['9-10.RL.5'],
    content: {
      intro: {
        title: 'Narrative Structure',
        text: 'Every story is built on a framework. Whether an author follows the classic arc or deliberately subverts it, understanding narrative structure allows you to see how a story creates tension, delivers meaning, and satisfies — or surprises — the reader. This module examines both traditional and non-traditional structures.',
        culturalHook:
          'Think about how stories are told in your community. Do they follow a clear beginning, middle, and end, or do they circle back, digress, or layer stories within stories?',
      },
      segments: [
        {
          index: 0,
          title: 'The Classic Narrative Arc',
          text: 'The traditional narrative arc moves through five stages: exposition (introducing characters and setting), rising action (building conflict), climax (the turning point), falling action (consequences unfold), and resolution (the conflict is settled). Identifying these stages helps you understand how tension is built and released. Note that some texts compress or extend certain stages for effect.',
          keyVocabulary: ['exposition', 'rising action', 'climax', 'falling action', 'resolution'],
        },
        {
          index: 1,
          title: 'Non-Linear and Experimental Structures',
          text: 'Many authors depart from the classic arc. Circular narratives end where they begin, suggesting inescapability. Fragmented narratives jump between time periods, forcing the reader to assemble meaning. Episodic structures present loosely connected scenes rather than a continuous plot. When you encounter a non-traditional structure, ask what effect the author achieves by breaking the expected pattern.',
          keyVocabulary: ['circular narrative', 'fragmented narrative', 'episodic structure', 'non-linear'],
          example:
            'A novel that opens and closes with the same scene of a character sitting in an empty room uses circular structure to suggest that despite all the events in between, nothing has fundamentally changed — reinforcing a theme of stagnation.',
        },
        {
          index: 2,
          title: 'How Structure Creates Meaning',
          text: 'Structure is not merely a container for content; it generates meaning. A story that withholds its climax until the final page creates sustained suspense. A story that places the climax in the first chapter and then traces its causes creates dramatic irony. Analyze the relationship between where key events are placed and what the reader knows or feels at each point. The structure should support the theme.',
          keyVocabulary: ['dramatic irony', 'sustained suspense', 'structural analysis', 'placement'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'What are the five stages of the classic narrative arc in order?',
          type: 'multiple-choice',
          options: [
            'Exposition, rising action, climax, falling action, resolution.',
            'Introduction, conflict, setting, theme, conclusion.',
            'Beginning, middle, end, epilogue, prologue.',
            'Character, plot, setting, conflict, theme.',
          ],
          correctAnswer:
            'Exposition, rising action, climax, falling action, resolution.',
          hint: 'The arc begins with setup and builds to a turning point before resolving.',
          explanation:
            'The classic five-stage narrative arc provides a framework for understanding how tension is built and resolved in traditional storytelling.',
          standardCode: '9-10.RL.5',
        },
        {
          index: 1,
          question:
            'A novel ends exactly where it began, with the protagonist in the same situation. What type of structure is this, and what theme might it suggest?',
          type: 'short-answer',
          correctAnswer:
            'This is a circular narrative structure. It might suggest a theme of inescapability, stagnation, or the cyclical nature of human experience, implying that the character cannot break free of their circumstances.',
          hint: 'Think about what it means when a story returns to its starting point.',
          explanation:
            'Circular structures use repetition of the opening situation to reinforce themes about cycles, entrapment, or the inability to change.',
          standardCode: '9-10.RL.5',
        },
        {
          index: 2,
          question:
            'How does a fragmented narrative structure affect the reader\'s experience?',
          type: 'multiple-choice',
          options: [
            'It forces the reader to actively piece together the timeline and meaning, creating engagement and often reflecting themes of memory or disorientation.',
            'It makes the story easier to understand.',
            'It eliminates the need for a climax.',
            'It always indicates poor writing.',
          ],
          correctAnswer:
            'It forces the reader to actively piece together the timeline and meaning, creating engagement and often reflecting themes of memory or disorientation.',
          hint: 'Consider what happens when events are presented out of order.',
          explanation:
            'Fragmented structure mirrors the complexity of memory or trauma and requires active reading, which deepens engagement and thematic resonance.',
          standardCode: '9-10.RL.5',
        },
        {
          index: 3,
          question:
            'Why might an author place the climax in the first chapter rather than near the end?',
          type: 'short-answer',
          correctAnswer:
            'Placing the climax first creates dramatic irony: the reader knows the outcome and reads subsequent chapters to understand how and why it happened. This shifts focus from "what happens" to "why it happens," deepening thematic exploration.',
          hint: 'Think about what the reader knows versus what the characters know in this arrangement.',
          explanation:
            'An early climax reorients the reader\'s attention from suspense to causality and meaning, which can serve themes about inevitability or consequence.',
          standardCode: '9-10.RL.5',
        },
        {
          index: 4,
          question:
            'Which of the following best explains the relationship between structure and theme?',
          type: 'multiple-choice',
          options: [
            'The way a story is organized reinforces its central theme by controlling what the reader knows and feels at each point.',
            'Structure and theme are unrelated elements of a text.',
            'Theme determines structure, but structure never affects theme.',
            'All stories with the same structure have the same theme.',
          ],
          correctAnswer:
            'The way a story is organized reinforces its central theme by controlling what the reader knows and feels at each point.',
          hint: 'Think of structure as a tool the author uses to shape meaning.',
          explanation:
            'Structure and theme are deeply interconnected. The arrangement of events controls the reader\'s experience, which in turn shapes how the theme is received and understood.',
          standardCode: '9-10.RL.5',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Identify the narrative structure used in the excerpt and explain how it contributes to the text\'s central theme. Use specific evidence.',
            type: 'short-answer',
            correctAnswer:
              'The excerpt uses a non-linear structure with flashbacks interspersed in the present-day narrative. This structure mirrors the protagonist\'s struggle with memory and loss, reinforcing the theme that the past is always present. Evidence includes the abrupt shifts between past and present tense at key emotional moments.',
            standardCode: '9-10.RL.5',
          },
          {
            question:
              'Which narrative structure would BEST support a theme about the repetitive nature of historical injustice?',
            type: 'multiple-choice',
            options: [
              'A circular narrative that ends where it begins, suggesting the cycle has not been broken.',
              'A straightforward chronological narrative with a happy resolution.',
              'An episodic structure with unrelated vignettes.',
              'A story told entirely in dialogue with no narration.',
            ],
            correctAnswer:
              'A circular narrative that ends where it begins, suggesting the cycle has not been broken.',
            standardCode: '9-10.RL.5',
          },
          {
            question:
              'Compare the structural choices in two short excerpts and explain how each structure creates a different effect on the reader despite both texts addressing the same theme.',
            type: 'short-answer',
            correctAnswer:
              'Excerpt A uses a traditional arc that builds slowly to a climax, creating suspense and emotional investment. Excerpt B uses a fragmented structure that disorients the reader. Both address the theme of loss, but A makes the reader experience loss as a single devastating moment, while B replicates the disjointed, recurring nature of grief.',
            standardCode: '9-10.RL.5',
          },
        ],
      },
    },
  },

  // ─── Reading Informational (4 modules) ────────────────────────
  {
    slug: 'grade9-ela-synthesising-sources',
    title: 'Synthesising Multiple Sources',
    description:
      'Synthesise information from multiple authoritative sources to develop a coherent understanding of a topic, resolving conflicting information where necessary.',
    subject: 'ela',
    grade: 9,
    gradeBand: '9-12',
    topicCluster: 'Reading Informational',
    standardCodes: ['9-10.RI.7'],
    content: {
      intro: {
        title: 'Synthesising Multiple Sources',
        text: 'In the real world, no single source tells the whole story. Researchers, journalists, and informed citizens draw on multiple sources, weigh their credibility, and combine their insights into a unified understanding. This module teaches you to move beyond summarizing individual sources and toward true synthesis — weaving ideas together to create something new.',
        culturalHook:
          'Imagine your community is debating a local issue. One neighbor reads the newspaper, another watches the news, and a third consults a community elder. How would you combine their perspectives to understand the full picture?',
      },
      segments: [
        {
          index: 0,
          title: 'Summary vs. Synthesis',
          text: 'A summary restates what a single source says. Synthesis goes further: it identifies connections, contradictions, and patterns across multiple sources to build a new understanding. To synthesise, first summarize each source individually. Then ask: Where do these sources agree? Where do they disagree? What new insight emerges when I consider them together? Synthesis is the foundation of research-based thinking.',
          keyVocabulary: ['summary', 'synthesis', 'connections', 'contradictions', 'patterns'],
        },
        {
          index: 1,
          title: 'Evaluating Source Credibility',
          text: 'Before synthesizing, assess each source\'s credibility. Consider the author\'s expertise, the publication\'s reputation, the date, and potential biases. A synthesis built on unreliable sources is itself unreliable. Use the CRAAP test (Currency, Relevance, Authority, Accuracy, Purpose) as a quick framework. Prioritize primary sources and peer-reviewed research when possible.',
          keyVocabulary: ['credibility', 'bias', 'CRAAP test', 'primary source', 'peer-reviewed'],
          example:
            'A student researching water quality would weigh a peer-reviewed environmental study more heavily than an unsigned blog post, while acknowledging that a local resident\'s firsthand account provides valuable primary-source evidence.',
        },
        {
          index: 2,
          title: 'Resolving Conflicting Information',
          text: 'Sources often disagree. When you encounter conflicting information, do not simply pick the source you prefer. Instead, investigate why the sources differ. Consider differences in methodology, sample size, perspective, or date of publication. Acknowledge the disagreement in your writing and explain which source you find more credible and why. Transparency about conflict strengthens your synthesis.',
          keyVocabulary: ['conflicting information', 'methodology', 'transparency', 'credibility assessment'],
        },
        {
          index: 3,
          title: 'Writing a Synthesis',
          text: 'Organize your synthesis around themes or questions, not source by source. Use signal phrases to attribute ideas ("According to Source A… however, Source B argues…"). Draw explicit connections between sources. End with an insight that none of the individual sources provided alone — this is the hallmark of genuine synthesis.',
          keyVocabulary: ['signal phrase', 'thematic organization', 'attribution', 'integrated insight'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'What is the key difference between summary and synthesis?',
          type: 'multiple-choice',
          options: [
            'Summary restates a single source; synthesis combines multiple sources to create a new understanding.',
            'Summary is longer than synthesis.',
            'Synthesis copies directly from sources; summary paraphrases.',
            'There is no difference; they are the same skill.',
          ],
          correctAnswer:
            'Summary restates a single source; synthesis combines multiple sources to create a new understanding.',
          hint: 'Synthesis creates something new from multiple inputs.',
          explanation:
            'Summary is a building block of synthesis, but synthesis goes beyond individual sources to identify patterns, contradictions, and new insights.',
          standardCode: '9-10.RI.7',
        },
        {
          index: 1,
          question:
            'Two sources disagree about the effectiveness of a community program. Source A, a peer-reviewed study, finds positive results. Source B, a newspaper editorial, calls the program a failure. How should you handle this conflict in your synthesis?',
          type: 'short-answer',
          correctAnswer:
            'Acknowledge both perspectives, then evaluate credibility: the peer-reviewed study likely has stronger methodology and evidence. Explain why you weigh it more heavily while noting the editorial may raise valid concerns about implementation that the study does not address.',
          hint: 'Do not simply choose one source. Explain the disagreement and assess credibility.',
          explanation:
            'Responsible synthesis addresses conflict transparently, weighs source credibility using clear criteria, and draws on the strengths of each source.',
          standardCode: '9-10.RI.7',
        },
        {
          index: 2,
          question:
            'Which organizational strategy is BEST for a synthesis essay?',
          type: 'multiple-choice',
          options: [
            'Organizing around themes or questions, integrating multiple sources within each section.',
            'Summarizing Source 1, then Source 2, then Source 3 separately.',
            'Listing quotations without commentary.',
            'Writing only about the source you agree with most.',
          ],
          correctAnswer:
            'Organizing around themes or questions, integrating multiple sources within each section.',
          hint: 'A synthesis weaves sources together rather than presenting them in isolation.',
          explanation:
            'Thematic organization keeps multiple sources in conversation throughout the essay, which is essential for genuine synthesis.',
          standardCode: '9-10.RI.7',
        },
        {
          index: 3,
          question:
            'What does the "A" in the CRAAP test stand for, and why does it matter for synthesis?',
          type: 'short-answer',
          correctAnswer:
            'The first "A" stands for Authority — the expertise and credentials of the author. It matters because a synthesis is only as strong as the sources it draws on; authoritative sources provide more reliable evidence.',
          hint: 'Think about who wrote the source and why their background matters.',
          explanation:
            'Authority helps determine whether a source\'s claims are backed by expertise, which directly affects the reliability of any synthesis that incorporates it.',
          standardCode: '9-10.RI.7',
        },
        {
          index: 4,
          question:
            'What is the hallmark of a genuine synthesis?',
          type: 'multiple-choice',
          options: [
            'An insight that emerges from combining sources and that no individual source provided alone.',
            'A direct quotation from the longest source.',
            'A bibliography with many entries.',
            'Agreement with every source consulted.',
          ],
          correctAnswer:
            'An insight that emerges from combining sources and that no individual source provided alone.',
          hint: 'The purpose of synthesis is to create something new from multiple inputs.',
          explanation:
            'True synthesis produces an integrated insight — a claim or understanding that only becomes visible when multiple sources are considered together.',
          standardCode: '9-10.RI.7',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Given three sources on the same topic, write a synthesis paragraph that identifies a pattern across all three and explains a new insight that emerges from considering them together.',
            type: 'short-answer',
            correctAnswer:
              'All three sources address the impact of technology on rural education. Source A highlights improved access, Source B warns of a digital divide, and Source C documents mixed results. The synthesized insight is that technology benefits rural students only when accompanied by infrastructure investment and teacher training — a conclusion no single source states outright.',
            standardCode: '9-10.RI.7',
          },
          {
            question:
              'Which approach to conflicting sources demonstrates the STRONGEST synthesis skills?',
            type: 'multiple-choice',
            options: [
              'Acknowledging the disagreement, evaluating each source\'s credibility, and explaining which evidence is more convincing and why.',
              'Ignoring the source that disagrees with your thesis.',
              'Quoting both sources without commentary.',
              'Choosing the most recent source regardless of its quality.',
            ],
            correctAnswer:
              'Acknowledging the disagreement, evaluating each source\'s credibility, and explaining which evidence is more convincing and why.',
            standardCode: '9-10.RI.7',
          },
          {
            question:
              'Explain why organizing a synthesis essay by themes rather than source-by-source produces stronger analysis.',
            type: 'short-answer',
            correctAnswer:
              'Thematic organization forces the writer to integrate sources within each section, drawing direct connections and contrasts. Source-by-source organization tends to produce isolated summaries that never interact, preventing the emergence of new insights that define genuine synthesis.',
            standardCode: '9-10.RI.7',
          },
        ],
      },
    },
  },

  {
    slug: 'grade9-ela-evaluating-rhetoric',
    title: 'Evaluating Rhetoric',
    description:
      'Evaluate the effectiveness of rhetorical strategies — including appeals to ethos, pathos, and logos — in persuasive and argumentative texts.',
    subject: 'ela',
    grade: 9,
    gradeBand: '9-12',
    topicCluster: 'Reading Informational',
    standardCodes: ['9-10.RI.6', '9-10.RI.8'],
    content: {
      intro: {
        title: 'Evaluating Rhetoric',
        text: 'Rhetoric is the art of persuasion. Every speech, editorial, and advertisement uses rhetorical strategies to move an audience. By learning to identify and evaluate these strategies, you become a more critical reader and a more effective communicator. This module focuses on the three classical appeals — ethos, pathos, and logos — and how to assess their effectiveness.',
        culturalHook:
          'Think about a time someone in your community persuaded others to take action. What made their argument convincing — their character, their emotion, their evidence, or some combination?',
      },
      segments: [
        {
          index: 0,
          title: 'The Three Classical Appeals',
          text: 'Ethos appeals to the speaker\'s credibility and character. Pathos appeals to the audience\'s emotions. Logos appeals to logic and evidence. Effective rhetoric typically combines all three, but the balance varies by purpose and audience. Identify each appeal by asking: Is the author building trust (ethos)? Stirring feelings (pathos)? Presenting evidence and reasoning (logos)?',
          keyVocabulary: ['ethos', 'pathos', 'logos', 'rhetorical appeal', 'credibility'],
        },
        {
          index: 1,
          title: 'Rhetorical Devices and Their Effects',
          text: 'Beyond the three appeals, authors use specific devices: repetition for emphasis, rhetorical questions to engage the audience, parallelism for rhythm and clarity, and antithesis to sharpen contrast. When evaluating rhetoric, name the device, quote the example, and explain its intended effect on the audience. Consider whether the device strengthens or weakens the argument.',
          keyVocabulary: ['repetition', 'rhetorical question', 'parallelism', 'antithesis'],
          example:
            '"Ask not what your country can do for you — ask what you can do for your country." This antithesis flips the expected relationship between citizen and nation, creating a memorable call to service (pathos and logos combined).',
        },
        {
          index: 2,
          title: 'Evaluating Effectiveness and Identifying Fallacies',
          text: 'An appeal is effective when it is appropriate to the audience and purpose, supported by credible evidence, and logically sound. Watch for fallacies — errors in reasoning that undermine an argument: ad hominem (attacking the person instead of the idea), straw man (misrepresenting the opponent\'s position), false dilemma (presenting only two options when more exist), and bandwagon (arguing something is right because many people support it). Naming fallacies is part of rigorous rhetorical evaluation.',
          keyVocabulary: ['fallacy', 'ad hominem', 'straw man', 'false dilemma', 'bandwagon'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'A speaker begins by describing their twenty years of experience in education before presenting their argument about school funding. Which rhetorical appeal is the speaker primarily using?',
          type: 'multiple-choice',
          options: [
            'Ethos — establishing credibility through experience.',
            'Pathos — stirring the audience\'s emotions.',
            'Logos — presenting statistical evidence.',
            'None — experience is not a rhetorical strategy.',
          ],
          correctAnswer:
            'Ethos — establishing credibility through experience.',
          hint: 'Ethos is about the speaker\'s trustworthiness and expertise.',
          explanation:
            'By citing their professional experience, the speaker builds ethos, asking the audience to trust their argument because of their demonstrated expertise.',
          standardCode: '9-10.RI.6',
        },
        {
          index: 1,
          question:
            'Identify the rhetorical device in the following sentence and explain its effect: "We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields."',
          type: 'short-answer',
          correctAnswer:
            'The device is repetition (specifically anaphora — repeating "we shall fight" at the beginning of each clause). Its effect is to build determination and unity, creating an emotional rhythm that rallies the audience to persevere.',
          hint: 'Look for the repeated phrase at the beginning of each clause.',
          explanation:
            'Anaphora creates emphasis and emotional momentum through repetition, making the speaker\'s resolve feel relentless and inspiring the audience to share it.',
          standardCode: '9-10.RI.6',
        },
        {
          index: 2,
          question:
            'A politician argues: "My opponent is not a good parent, so their education policy cannot be trusted." What fallacy is this?',
          type: 'multiple-choice',
          options: [
            'Ad hominem — attacking the person rather than the argument.',
            'Straw man — misrepresenting the opponent\'s position.',
            'Bandwagon — arguing from popularity.',
            'False dilemma — presenting only two options.',
          ],
          correctAnswer:
            'Ad hominem — attacking the person rather than the argument.',
          hint: 'The attack targets the opponent\'s personal life, not their policy.',
          explanation:
            'Ad hominem fallacies divert attention from the actual argument by attacking the character or personal life of the opponent, which is irrelevant to the merits of their policy.',
          standardCode: '9-10.RI.8',
        },
        {
          index: 3,
          question:
            'Why is it important to evaluate whether a rhetorical appeal is appropriate to its audience?',
          type: 'short-answer',
          correctAnswer:
            'An appeal that resonates with one audience may fall flat or even offend another. Evaluating audience appropriateness reveals whether the rhetoric is genuinely persuasive or merely manipulative, and whether the speaker understands and respects their audience.',
          hint: 'Think about how the same argument might land differently with different groups.',
          explanation:
            'Effective rhetoric is audience-aware. Evaluating appropriateness is part of determining whether the persuasion is ethical and likely to succeed.',
          standardCode: '9-10.RI.6',
        },
        {
          index: 4,
          question:
            'Which of the following is a false dilemma?',
          type: 'multiple-choice',
          options: [
            '"You are either with us or against us."',
            '"Studies show a 30% improvement in outcomes."',
            '"As a doctor, I recommend this treatment."',
            '"Many families in our community have faced this hardship."',
          ],
          correctAnswer:
            '"You are either with us or against us."',
          hint: 'A false dilemma presents only two options when more actually exist.',
          explanation:
            'The statement forces a binary choice, ignoring the possibility of nuanced positions. This is a false dilemma because real-world situations rarely have only two options.',
          standardCode: '9-10.RI.8',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Read the persuasive excerpt and identify at least two rhetorical appeals used. Evaluate whether each appeal is effective and explain your reasoning with textual evidence.',
            type: 'short-answer',
            correctAnswer:
              'The excerpt uses ethos (the author cites their research credentials) and pathos (a vivid anecdote about a struggling family). The ethos is effective because it establishes authority before presenting data. The pathos is effective because the anecdote puts a human face on the statistics, making the argument emotionally compelling without replacing evidence.',
            standardCode: '9-10.RI.6',
          },
          {
            question:
              'Which rhetorical strategy would be MOST effective when addressing an audience of scientists?',
            type: 'multiple-choice',
            options: [
              'A strong logos appeal with data, methodology, and logical reasoning.',
              'An emotional story with no supporting evidence.',
              'A personal attack on the opposing researcher.',
              'A bandwagon argument citing public opinion polls.',
            ],
            correctAnswer:
              'A strong logos appeal with data, methodology, and logical reasoning.',
            standardCode: '9-10.RI.6',
          },
          {
            question:
              'Identify one fallacy in the excerpt and explain how it weakens the author\'s argument.',
            type: 'short-answer',
            correctAnswer:
              'The author commits a straw man fallacy by misrepresenting the opposing position as advocating for no regulation at all, when in fact opponents support moderate regulation. This weakens the argument because readers familiar with the actual opposing view will find the author\'s rebuttal unconvincing and potentially dishonest.',
            standardCode: '9-10.RI.8',
          },
        ],
      },
    },
  },

  {
    slug: 'grade9-ela-delineating-arguments',
    title: 'Delineating and Evaluating Arguments',
    description:
      'Delineate and evaluate the reasoning and evidence in argumentative texts, identifying claims, counterclaims, and the sufficiency of supporting evidence.',
    subject: 'ela',
    grade: 9,
    gradeBand: '9-12',
    topicCluster: 'Reading Informational',
    standardCodes: ['9-10.RI.8'],
    content: {
      intro: {
        title: 'Delineating and Evaluating Arguments',
        text: 'Arguments are everywhere — in editorials, speeches, policy proposals, and academic papers. A skilled reader can break an argument into its component parts, assess the quality of its evidence, and determine whether its reasoning holds up under scrutiny. This module teaches you to delineate (map out) and evaluate arguments systematically.',
        culturalHook:
          'Think about a disagreement you have witnessed in your community. Did both sides present evidence? Was one side more convincing? What made the difference?',
      },
      segments: [
        {
          index: 0,
          title: 'Claims, Reasons, and Evidence',
          text: 'Every argument has a central claim — the main point the author wants the audience to accept. Supporting the claim are reasons (logical explanations of why the claim is true) and evidence (facts, statistics, examples, or expert testimony that back up each reason). To delineate an argument, identify the claim first, then map each reason and its supporting evidence. This structure reveals the argument\'s logic.',
          keyVocabulary: ['claim', 'reason', 'evidence', 'delineate', 'argument structure'],
        },
        {
          index: 1,
          title: 'Counterclaims and Rebuttals',
          text: 'Strong arguments address opposing viewpoints. A counterclaim is a position that challenges the central claim. A rebuttal is the author\'s response to the counterclaim. Evaluate whether the author represents counterclaims fairly (or creates a straw man) and whether the rebuttal is convincing. An argument that ignores counterclaims entirely is weaker than one that engages and refutes them.',
          keyVocabulary: ['counterclaim', 'rebuttal', 'opposing viewpoint', 'straw man'],
          example:
            'An editorial arguing for renewable energy might acknowledge the counterclaim that solar and wind are intermittent, then rebut it with evidence about battery storage improvements. This engagement strengthens the argument.',
        },
        {
          index: 2,
          title: 'Evaluating Sufficiency and Relevance of Evidence',
          text: 'Not all evidence is created equal. Evaluate evidence by asking: Is it sufficient (enough to support the claim)? Is it relevant (directly connected to the claim)? Is it credible (from a reliable source)? A single anecdote does not prove a general claim; outdated statistics may not reflect current reality. Strong readers demand evidence that is adequate in quantity, directly related, and trustworthy.',
          keyVocabulary: ['sufficiency', 'relevance', 'credibility', 'anecdotal evidence'],
        },
        {
          index: 3,
          title: 'Mapping an Argument',
          text: 'Create a visual or written map of an argument: place the central claim at the top, branch out to reasons, then attach evidence to each reason. Add counterclaims and rebuttals as a parallel branch. This map makes gaps visible — if a reason lacks evidence or a counterclaim has no rebuttal, the argument has a weakness. Use this technique when reading or planning your own arguments.',
          keyVocabulary: ['argument map', 'logical gap', 'evidence chain', 'analytical framework'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'What is the first step in delineating an argument?',
          type: 'multiple-choice',
          options: [
            'Identify the central claim.',
            'Count the number of paragraphs.',
            'Find the author\'s biography.',
            'Highlight every adjective.',
          ],
          correctAnswer: 'Identify the central claim.',
          hint: 'The claim is the foundation of the argument; everything else supports it.',
          explanation:
            'Delineating starts with the central claim because it is the point the entire argument is built to support. Reasons and evidence branch from it.',
          standardCode: '9-10.RI.8',
        },
        {
          index: 1,
          question:
            'An author argues that a new highway should be built. Their only evidence is a personal story about a long commute. Is this evidence sufficient? Explain.',
          type: 'short-answer',
          correctAnswer:
            'No, a single personal anecdote is not sufficient evidence for a policy claim. The argument would need additional evidence — such as traffic data, cost-benefit analysis, and environmental impact studies — to adequately support the claim.',
          hint: 'Think about whether one person\'s experience can prove a general claim.',
          explanation:
            'Anecdotal evidence can illustrate a point but cannot by itself prove a broad claim. Sufficiency requires multiple types of credible evidence.',
          standardCode: '9-10.RI.8',
        },
        {
          index: 2,
          question:
            'What is a counterclaim, and why does addressing one strengthen an argument?',
          type: 'short-answer',
          correctAnswer:
            'A counterclaim is a position that opposes the central claim. Addressing it shows the author has considered other viewpoints and can defend their position against challenges, making the argument more thorough and credible.',
          hint: 'Think about what an opponent might say and why responding to them matters.',
          explanation:
            'Engaging with counterclaims demonstrates intellectual honesty and thoroughness, both of which strengthen the audience\'s trust in the argument.',
          standardCode: '9-10.RI.8',
        },
        {
          index: 3,
          question:
            'Which of the following is the best example of relevant evidence for the claim "Schools should offer more arts education"?',
          type: 'multiple-choice',
          options: [
            'A study showing that students with arts education score higher on creative problem-solving assessments.',
            'A statistic about the number of professional athletes in the country.',
            'A quote about the importance of physical fitness.',
            'Data on international trade patterns.',
          ],
          correctAnswer:
            'A study showing that students with arts education score higher on creative problem-solving assessments.',
          hint: 'Relevant evidence directly connects to the specific claim being made.',
          explanation:
            'This study directly links arts education to a measurable student outcome, making it relevant to the claim. The other options address unrelated topics.',
          standardCode: '9-10.RI.8',
        },
        {
          index: 4,
          question:
            'When mapping an argument, what does a missing branch (a reason without evidence) indicate?',
          type: 'multiple-choice',
          options: [
            'A logical gap that weakens the argument.',
            'A stylistic choice by the author.',
            'Strong persuasion through mystery.',
            'That the argument is complete.',
          ],
          correctAnswer: 'A logical gap that weakens the argument.',
          hint: 'An unsupported reason is an unproven reason.',
          explanation:
            'A reason without evidence is an assertion, not a proven point. Argument mapping reveals these gaps so readers (and writers) can assess and address weaknesses.',
          standardCode: '9-10.RI.8',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Delineate the argument in the excerpt: identify the central claim, at least two supporting reasons with their evidence, and one counterclaim with its rebuttal.',
            type: 'short-answer',
            correctAnswer:
              'Central claim: Community gardens improve neighborhood well-being. Reason 1: They increase access to fresh food (evidence: USDA data on food deserts). Reason 2: They strengthen social bonds (evidence: survey data showing increased neighbor interaction). Counterclaim: Gardens require costly maintenance. Rebuttal: Volunteer programs and grants offset costs, as shown by three successful case studies.',
            standardCode: '9-10.RI.8',
          },
          {
            question:
              'Which flaw MOST weakens an argument?',
            type: 'multiple-choice',
            options: [
              'A central claim supported only by anecdotal evidence with no counterclaim addressed.',
              'Using a formal tone throughout the text.',
              'Including more than three pieces of evidence.',
              'Addressing multiple counterclaims.',
            ],
            correctAnswer:
              'A central claim supported only by anecdotal evidence with no counterclaim addressed.',
            standardCode: '9-10.RI.8',
          },
          {
            question:
              'Evaluate the sufficiency and relevance of the evidence presented in the excerpt. Identify at least one strength and one weakness in the author\'s use of evidence.',
            type: 'short-answer',
            correctAnswer:
              'Strength: The author provides recent statistical data from a credible research institution, which is both relevant and authoritative. Weakness: The author relies on a single study and does not address alternative explanations for the data, making the evidence insufficient to fully support the broad claim.',
            standardCode: '9-10.RI.8',
          },
        ],
      },
    },
  },

  {
    slug: 'grade9-ela-analyzing-seminal-texts',
    title: 'Analyzing Seminal U.S. and World Texts',
    description:
      'Analyze seminal documents and speeches for their themes, purposes, and rhetorical features, understanding how they reflect and shape historical and cultural contexts.',
    subject: 'ela',
    grade: 9,
    gradeBand: '9-12',
    topicCluster: 'Reading Informational',
    standardCodes: ['9-10.RI.8', '9-10.RI.9'],
    content: {
      intro: {
        title: 'Analyzing Seminal U.S. and World Texts',
        text: 'Certain documents and speeches have shaped the course of history: the Declaration of Independence, Lincoln\'s Gettysburg Address, and speeches by global leaders have defined national identities and inspired movements. In this module you will learn to analyze these seminal texts not only for what they say but for how they say it — examining rhetoric, purpose, audience, and historical impact.',
        culturalHook:
          'Is there a speech, letter, or document that holds special meaning in your family or community? What makes it powerful beyond its words?',
      },
      segments: [
        {
          index: 0,
          title: 'Historical and Cultural Context',
          text: 'A seminal text cannot be fully understood without its context. Before analyzing, research: What was happening historically when the text was written or delivered? Who was the intended audience? What problem or crisis was the text responding to? Context reveals why certain rhetorical choices were made and why the text resonated (or was controversial) in its time.',
          keyVocabulary: ['seminal text', 'historical context', 'intended audience', 'rhetorical situation'],
        },
        {
          index: 1,
          title: 'Purpose, Audience, and Rhetorical Strategy',
          text: 'Seminal texts are crafted for specific purposes: to declare independence, to rally a nation, to demand justice, to mourn. Identify the primary purpose, then analyze how the author tailors their rhetoric to the audience. Examine the balance of ethos, pathos, and logos. Note how the author uses tone, diction, and syntax to reinforce the purpose. A eulogy and a call to arms use very different strategies even when addressing the same audience.',
          keyVocabulary: ['purpose', 'diction', 'syntax', 'tone', 'rhetorical strategy'],
          example:
            'In the Gettysburg Address, Lincoln uses simple, elevated diction and parallel structure ("of the people, by the people, for the people") to transform a battlefield dedication into a redefinition of the nation\'s purpose.',
        },
        {
          index: 2,
          title: 'Themes and Enduring Significance',
          text: 'Seminal texts often articulate themes that transcend their historical moment: justice, liberty, equality, sacrifice, unity. Analyze which themes the text develops and how those themes continue to resonate today. Consider how later speakers and writers have referenced or reinterpreted the text. A document\'s enduring significance lies in its ability to speak to new audiences and new contexts.',
          keyVocabulary: ['enduring significance', 'transcendent theme', 'reinterpretation', 'legacy'],
        },
        {
          index: 3,
          title: 'Comparative Analysis of Seminal Texts',
          text: 'Comparing two seminal texts deepens your understanding of both. Choose texts that address a similar theme — such as freedom — from different eras or cultures. Analyze how each text defines the theme, what rhetorical strategies it employs, and what its historical context contributes to its message. The comparison illuminates how enduring ideas evolve across time and place.',
          keyVocabulary: ['comparative analysis', 'evolving ideas', 'cross-era comparison'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'Why is understanding historical context essential when analyzing a seminal text?',
          type: 'short-answer',
          correctAnswer:
            'Historical context reveals the circumstances that prompted the text, the audience\'s concerns and values, and why the author made specific rhetorical choices. Without context, the reader may misinterpret the text\'s purpose and significance.',
          hint: 'Think about what you would miss if you read a wartime speech without knowing a war was happening.',
          explanation:
            'Seminal texts are responses to specific moments. Context anchors interpretation in historical reality rather than modern assumptions.',
          standardCode: '9-10.RI.9',
        },
        {
          index: 1,
          question:
            'Lincoln\'s phrase "of the people, by the people, for the people" uses which rhetorical device?',
          type: 'multiple-choice',
          options: [
            'Parallelism (and specifically anaphora with the repeated preposition pattern).',
            'Simile.',
            'Hyperbole.',
            'Onomatopoeia.',
          ],
          correctAnswer:
            'Parallelism (and specifically anaphora with the repeated preposition pattern).',
          hint: 'Look at the repeated grammatical structure.',
          explanation:
            'The parallel prepositional phrases create rhythm, emphasis, and memorability, distilling a complex idea about democracy into a compact, powerful statement.',
          standardCode: '9-10.RI.9',
        },
        {
          index: 2,
          question:
            'How can a seminal text from a different era still be significant today?',
          type: 'short-answer',
          correctAnswer:
            'A seminal text remains significant when its themes — such as justice, equality, or freedom — transcend the original context and continue to speak to contemporary issues. Later generations reinterpret and apply the text\'s ideas to new struggles and situations.',
          hint: 'Think about themes that are universal enough to matter in any era.',
          explanation:
            'Enduring significance comes from themes that resonate across time. Seminal texts serve as touchstones for ongoing cultural and political conversations.',
          standardCode: '9-10.RI.9',
        },
        {
          index: 3,
          question:
            'What is the primary purpose of comparing two seminal texts that address the same theme from different eras?',
          type: 'multiple-choice',
          options: [
            'To understand how enduring ideas evolve across time and how different contexts shape their expression.',
            'To determine which text is better written.',
            'To memorize more historical facts.',
            'To prove that all texts say the same thing.',
          ],
          correctAnswer:
            'To understand how enduring ideas evolve across time and how different contexts shape their expression.',
          hint: 'Comparison is about understanding evolution and variation, not ranking.',
          explanation:
            'Comparative analysis reveals how the same theme — such as liberty — is defined, defended, and communicated differently depending on historical and cultural context.',
          standardCode: '9-10.RI.9',
        },
        {
          index: 4,
          question:
            'Which element should you analyze FIRST when approaching a seminal text you have never read before?',
          type: 'multiple-choice',
          options: [
            'The historical and cultural context in which the text was created.',
            'The number of paragraphs.',
            'The author\'s other works.',
            'Whether the text has been made into a movie.',
          ],
          correctAnswer:
            'The historical and cultural context in which the text was created.',
          hint: 'Context provides the lens through which all other analysis becomes meaningful.',
          explanation:
            'Beginning with context establishes the foundation for understanding purpose, audience, and rhetorical choices, all of which depend on knowing the circumstances of the text\'s creation.',
          standardCode: '9-10.RI.9',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Analyze the rhetorical strategies used in the provided seminal text excerpt. Identify the purpose, audience, and at least two rhetorical techniques, explaining how each serves the author\'s goal.',
            type: 'short-answer',
            correctAnswer:
              'The excerpt\'s purpose is to call citizens to collective action during a national crisis. The audience is the general public. The author uses parallelism to create rhythmic urgency and an appeal to pathos through vivid imagery of shared suffering. Both techniques serve the goal of unifying the audience and motivating them to act.',
            standardCode: '9-10.RI.9',
          },
          {
            question:
              'Which best describes the enduring significance of a seminal text?',
            type: 'multiple-choice',
            options: [
              'Its themes continue to resonate with new audiences and can be reinterpreted in new contexts.',
              'It is the longest document from its era.',
              'It uses the most advanced vocabulary of its time.',
              'It was written by a famous person.',
            ],
            correctAnswer:
              'Its themes continue to resonate with new audiences and can be reinterpreted in new contexts.',
            standardCode: '9-10.RI.9',
          },
          {
            question:
              'Compare the provided excerpts from two seminal texts that address the theme of equality. Explain how each text\'s historical context shapes its definition of equality and the rhetorical strategies it uses.',
            type: 'short-answer',
            correctAnswer:
              'Text A, written during a revolution, defines equality as the natural right of all citizens and uses declarative, legal language to assert it as self-evident. Text B, written during a civil rights movement, defines equality as a promise unfulfilled and uses emotional appeals and repetition to demand its realization. Both seek equality but from different positions: one establishing a principle, the other demanding its enforcement.',
            standardCode: '9-10.RI.9',
          },
        ],
      },
    },
  },

  // ─── Writing (4 modules) ──────────────────────────────────────
  {
    slug: 'grade9-ela-argument-sophisticated-evidence',
    title: 'Argument Writing with Sophisticated Evidence',
    description:
      'Write arguments that support claims with clear reasoning and relevant, sufficient evidence from credible sources, using sophisticated integration techniques.',
    subject: 'ela',
    grade: 9,
    gradeBand: '9-12',
    topicCluster: 'Writing',
    standardCodes: ['9-10.W.1'],
    content: {
      intro: {
        title: 'Argument Writing with Sophisticated Evidence',
        text: 'At the high-school level, argument writing demands more than stating an opinion and listing reasons. You must craft a precise, debatable claim; support it with evidence that is relevant, sufficient, and credible; integrate that evidence smoothly into your prose; and address counterclaims with intellectual honesty. This module elevates your argument writing to meet those expectations.',
        culturalHook:
          'Think about an issue that matters to your community. If you had to convince a skeptical audience, what kind of evidence would be most persuasive — and why?',
      },
      segments: [
        {
          index: 0,
          title: 'Crafting a Precise, Debatable Claim',
          text: 'A strong argument begins with a claim that is specific, debatable, and defensible. Avoid vague statements ("Pollution is bad") and instead make a focused assertion ("Municipal investment in green infrastructure reduces urban flooding more cost-effectively than traditional drainage systems"). A precise claim gives your argument direction and signals to the reader exactly what you will prove.',
          keyVocabulary: ['debatable claim', 'thesis', 'specificity', 'defensible position'],
        },
        {
          index: 1,
          title: 'Selecting and Evaluating Evidence',
          text: 'Not all evidence is equal. Prioritize evidence that is relevant (directly supports your claim), sufficient (enough to be convincing), and credible (from authoritative sources). Use a mix of evidence types: statistics, expert testimony, case studies, and logical reasoning. Evaluate each piece before including it: Is the source reliable? Is the data current? Does it actually prove what you need it to prove?',
          keyVocabulary: ['relevant evidence', 'sufficient evidence', 'credible source', 'evidence types'],
          example:
            'To argue for green infrastructure, you might cite a peer-reviewed study on stormwater management (statistics), an interview with a civil engineer (expert testimony), and a case study of a city that implemented green infrastructure successfully (real-world example).',
        },
        {
          index: 2,
          title: 'Integrating Evidence Smoothly',
          text: 'Sophisticated evidence integration means weaving quotations and data into your own sentences rather than dropping them in without context. Use signal phrases ("According to Dr. Martinez…"), embed short quotations within your sentences, and always follow evidence with commentary that explains its significance. The pattern is: claim → evidence → explanation. Never let evidence speak for itself.',
          keyVocabulary: ['signal phrase', 'embedded quotation', 'commentary', 'evidence integration'],
        },
        {
          index: 3,
          title: 'Addressing Counterclaims',
          text: 'A mature argument anticipates and responds to opposing viewpoints. Introduce the counterclaim fairly, then rebut it with evidence and reasoning. Avoid dismissing the counterclaim out of hand; instead, acknowledge any valid points before explaining why your position is stronger. This intellectual honesty builds your credibility (ethos) and strengthens the overall argument.',
          keyVocabulary: ['counterclaim', 'rebuttal', 'concession', 'intellectual honesty'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'Which of the following is the most precise, debatable claim?',
          type: 'multiple-choice',
          options: [
            '"Year-round schooling improves long-term retention of math skills for students in low-income districts."',
            '"School is important."',
            '"Everyone should learn math."',
            '"Education has changed over the years."',
          ],
          correctAnswer:
            '"Year-round schooling improves long-term retention of math skills for students in low-income districts."',
          hint: 'A precise claim names a specific population, outcome, and position.',
          explanation:
            'This claim is specific (year-round schooling, math skills, low-income districts), debatable (not everyone agrees), and defensible (evidence can be gathered).',
          standardCode: '9-10.W.1',
        },
        {
          index: 1,
          question:
            'A student writes: "Studies show this is true." What is wrong with this evidence integration, and how should it be improved?',
          type: 'short-answer',
          correctAnswer:
            'The integration is vague — it does not name the source, specify the study, or explain the findings. It should be revised to include a signal phrase, specific data, and commentary: "According to a 2024 study by the National Education Association, students in year-round programs retained 15% more math content over summer — a finding that supports the claim that schedule reform enhances learning."',
          hint: 'Think about what information is missing and what a reader would need to trust this evidence.',
          explanation:
            'Sophisticated integration names the source, specifies the evidence, and explains its connection to the claim. Vague references undermine credibility.',
          standardCode: '9-10.W.1',
        },
        {
          index: 2,
          question:
            'Why is it important to address counterclaims in an argument essay?',
          type: 'multiple-choice',
          options: [
            'It demonstrates intellectual honesty and strengthens the argument by showing the writer has considered and can refute opposing views.',
            'It makes the essay longer.',
            'It shows the writer is uncertain about their position.',
            'It is only necessary if the teacher requires it.',
          ],
          correctAnswer:
            'It demonstrates intellectual honesty and strengthens the argument by showing the writer has considered and can refute opposing views.',
          hint: 'Think about what happens to your credibility if you ignore the other side.',
          explanation:
            'Addressing counterclaims builds ethos and makes the argument more persuasive by demonstrating thorough thinking and a willingness to engage with complexity.',
          standardCode: '9-10.W.1',
        },
        {
          index: 3,
          question:
            'What is the correct pattern for presenting evidence in an argument paragraph?',
          type: 'multiple-choice',
          options: [
            'Claim → evidence → explanation of significance.',
            'Evidence → evidence → evidence with no commentary.',
            'Claim → conclusion with no evidence.',
            'Quotation → quotation → personal opinion.',
          ],
          correctAnswer:
            'Claim → evidence → explanation of significance.',
          hint: 'Evidence needs context before it and analysis after it.',
          explanation:
            'The claim-evidence-explanation pattern ensures that every piece of evidence is introduced with purpose and followed by analysis that connects it to the argument.',
          standardCode: '9-10.W.1',
        },
        {
          index: 4,
          question:
            'A student uses only one personal anecdote to support a broad policy claim. What feedback would you give?',
          type: 'short-answer',
          correctAnswer:
            'A single anecdote is insufficient and not representative enough to support a broad claim. The student should add credible, varied evidence — such as statistics, expert testimony, and case studies — to meet the standard of sufficiency. The anecdote can remain as an illustrative example but should not be the sole support.',
          hint: 'Think about whether one story can prove a claim about a whole population or system.',
          explanation:
            'Sufficient evidence requires multiple types of support from credible sources. Anecdotes illustrate but do not prove general claims.',
          standardCode: '9-10.W.1',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Write a debatable claim about a community issue and outline three pieces of evidence you would use to support it. For each piece, explain why it is relevant and credible.',
            type: 'short-answer',
            correctAnswer:
              'Claim: "Expanding public transit routes in rural counties would reduce transportation-related barriers to employment." Evidence 1: Department of Transportation data on commute times (relevant: directly measures the barrier; credible: government source). Evidence 2: A case study of a rural county that expanded transit and saw employment increases (relevant: real-world example; credible: published report). Evidence 3: Expert testimony from a regional planner (relevant: professional insight; credible: subject-matter authority).',
            standardCode: '9-10.W.1',
          },
          {
            question:
              'Which revision BEST improves the sentence "Some people say this is a problem"?',
            type: 'multiple-choice',
            options: [
              '"According to a 2025 report by the Appalachian Regional Commission, inadequate broadband access affects 40% of rural households, creating significant educational disparities."',
              '"Lots of people think there is an issue."',
              '"This is obviously a huge problem that everyone knows about."',
              '"Problems exist in many areas."',
            ],
            correctAnswer:
              '"According to a 2025 report by the Appalachian Regional Commission, inadequate broadband access affects 40% of rural households, creating significant educational disparities."',
            standardCode: '9-10.W.1',
          },
          {
            question:
              'Draft a counterclaim paragraph for an argument essay. State the counterclaim fairly, concede any valid point, then rebut it with evidence and reasoning.',
            type: 'short-answer',
            correctAnswer:
              'Opponents argue that expanding public transit in rural areas is too expensive given low ridership projections. This concern has merit: initial infrastructure costs are substantial. However, a 2024 Federal Transit Administration study found that rural transit investments generate a 3:1 return in economic activity over ten years, and ridership increases steadily as routes become established. The long-term economic and social benefits outweigh the upfront costs.',
            standardCode: '9-10.W.1',
          },
        ],
      },
    },
  },

  {
    slug: 'grade9-ela-research-based-expository',
    title: 'Research-Based Expository Writing',
    description:
      'Write informative and explanatory texts based on research, organizing complex ideas clearly and integrating information from multiple credible sources.',
    subject: 'ela',
    grade: 9,
    gradeBand: '9-12',
    topicCluster: 'Writing',
    standardCodes: ['9-10.W.2', '9-10.W.7'],
    content: {
      intro: {
        title: 'Research-Based Expository Writing',
        text: 'Expository writing explains, informs, and clarifies. When grounded in research, it becomes a powerful tool for sharing knowledge. This module teaches you to conduct focused research, organize complex information logically, and present it in clear, engaging prose that credits its sources and serves its audience.',
        culturalHook:
          'Imagine a younger student in your community asks you to explain something complex — like how a local ecosystem works or why a historical event happened. How would you research the answer and make it understandable?',
      },
      segments: [
        {
          index: 0,
          title: 'Developing a Research Question',
          text: 'Strong expository writing begins with a focused research question — one that is specific enough to answer thoroughly but broad enough to sustain a multi-paragraph essay. Avoid questions that can be answered with a single fact. Instead, ask "how" or "why" questions that require explanation: "How does soil composition affect crop yields in the Mississippi Delta?" is more productive than "What is soil?"',
          keyVocabulary: ['research question', 'focused inquiry', 'specificity', 'scope'],
        },
        {
          index: 1,
          title: 'Finding and Evaluating Sources',
          text: 'Use a variety of source types: academic articles, government reports, reputable journalism, and primary sources. Evaluate each source for credibility, relevance, and currency. Take organized notes that distinguish between direct quotations, paraphrases, and your own ideas. Track bibliographic information from the start to avoid scrambling during citation.',
          keyVocabulary: ['source evaluation', 'paraphrase', 'bibliographic information', 'primary source'],
          example:
            'For a paper on water quality, you might use an EPA report (government data), a university study (peer-reviewed research), a local newspaper article (community perspective), and an interview with a water treatment operator (primary source).',
        },
        {
          index: 2,
          title: 'Organizing Complex Information',
          text: 'Choose an organizational pattern that serves your topic: cause-and-effect, compare-and-contrast, problem-and-solution, or chronological. Use clear topic sentences, transitions, and headings (when appropriate) to guide the reader. Each paragraph should develop one main idea with integrated evidence. The goal is to make complex information accessible without oversimplifying it.',
          keyVocabulary: ['organizational pattern', 'topic sentence', 'transitions', 'coherence'],
        },
        {
          index: 3,
          title: 'Integrating Sources and Avoiding Plagiarism',
          text: 'Integrate sources through direct quotation, paraphrase, and summary. Always attribute ideas to their sources using in-text citations. Plagiarism — presenting someone else\'s words or ideas as your own — is a serious ethical violation. When in doubt, cite. Use quotation marks for exact language and cite paraphrases with the author and date. A well-integrated source supports your voice rather than replacing it.',
          keyVocabulary: ['in-text citation', 'plagiarism', 'attribution', 'academic integrity'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'Which research question is MOST appropriate for a multi-paragraph expository essay?',
          type: 'multiple-choice',
          options: [
            '"How has the decline of coal mining affected economic opportunities in Appalachian communities over the past two decades?"',
            '"What color is coal?"',
            '"Is coal good or bad?"',
            '"When was coal discovered?"',
          ],
          correctAnswer:
            '"How has the decline of coal mining affected economic opportunities in Appalachian communities over the past two decades?"',
          hint: 'The best research question requires explanation and can sustain multiple paragraphs.',
          explanation:
            'This question is specific, asks "how," requires research across multiple sources, and can sustain a full essay. The others are too simple, vague, or argumentative.',
          standardCode: '9-10.W.7',
        },
        {
          index: 1,
          question:
            'What is the difference between paraphrasing and quoting, and when should you use each?',
          type: 'short-answer',
          correctAnswer:
            'Quoting uses the source\'s exact words in quotation marks; paraphrasing restates the idea in your own words. Use quoting when the original language is particularly powerful or precise; use paraphrasing when you want to convey the idea more concisely or in a way that fits your writing style. Both require citation.',
          hint: 'Think about when the original words matter and when the idea is what matters.',
          explanation:
            'Choosing between quoting and paraphrasing depends on whether the source\'s exact language adds value. Both must be cited to maintain academic integrity.',
          standardCode: '9-10.W.2',
        },
        {
          index: 2,
          question:
            'A student writes a paragraph that is entirely paraphrased from one source with no citation. Is this plagiarism?',
          type: 'multiple-choice',
          options: [
            'Yes — paraphrased ideas still require citation because the ideas belong to the original author.',
            'No — paraphrasing in your own words means you own the idea.',
            'Only if the teacher notices.',
            'Only if the original source is a book.',
          ],
          correctAnswer:
            'Yes — paraphrased ideas still require citation because the ideas belong to the original author.',
          hint: 'Plagiarism is about ideas and credit, not just exact words.',
          explanation:
            'Plagiarism includes presenting someone else\'s ideas as your own, even when rephrased. All borrowed ideas must be attributed.',
          standardCode: '9-10.W.2',
        },
        {
          index: 3,
          question:
            'Which organizational pattern would BEST suit an essay explaining why a river\'s water quality has changed over time?',
          type: 'multiple-choice',
          options: [
            'Cause-and-effect, tracing the factors that led to changes in water quality.',
            'Compare-and-contrast between two unrelated rivers.',
            'Alphabetical order of vocabulary terms.',
            'Random arrangement of interesting facts.',
          ],
          correctAnswer:
            'Cause-and-effect, tracing the factors that led to changes in water quality.',
          hint: 'The essay needs to explain why something happened — what caused the change.',
          explanation:
            'Cause-and-effect organization directly serves the goal of explaining why water quality changed, connecting specific factors to specific outcomes.',
          standardCode: '9-10.W.2',
        },
        {
          index: 4,
          question:
            'Why is it important to use multiple types of sources in a research-based essay?',
          type: 'short-answer',
          correctAnswer:
            'Multiple source types provide different perspectives and types of evidence — data, expert analysis, firsthand accounts, and community context. This variety strengthens the essay\'s credibility and gives the reader a more complete understanding of the topic.',
          hint: 'Think about what each type of source contributes that others cannot.',
          explanation:
            'Source diversity ensures that the essay is well-rounded, credible, and considers the topic from multiple angles rather than a single perspective.',
          standardCode: '9-10.W.7',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Write a focused research question about a topic relevant to your community and identify three types of sources you would consult. Explain why each source type is valuable for your topic.',
            type: 'short-answer',
            correctAnswer:
              'Research question: "How has broadband access (or lack thereof) affected educational outcomes in rural Appalachian schools?" Sources: (1) FCC broadband deployment data — provides objective, quantitative evidence of access gaps; (2) a peer-reviewed education journal article — offers expert analysis of the relationship between connectivity and learning; (3) interviews with local teachers — provide firsthand, community-level perspectives that national data may miss.',
            standardCode: '9-10.W.7',
          },
          {
            question:
              'Which revision BEST improves the integration of a source in this sentence: "Water is polluted. (Smith, 2024)"?',
            type: 'multiple-choice',
            options: [
              '"According to Smith (2024), agricultural runoff has increased nitrogen levels in the watershed by 35%, contributing to significant water quality decline."',
              '"Water is bad. (Smith, 2024)."',
              '"Smith said something about water."',
              '"2024 study. Pollution. Bad."',
            ],
            correctAnswer:
              '"According to Smith (2024), agricultural runoff has increased nitrogen levels in the watershed by 35%, contributing to significant water quality decline."',
            standardCode: '9-10.W.2',
          },
          {
            question:
              'Explain the difference between organizing a research essay source-by-source versus organizing it by main ideas. Which approach is stronger and why?',
            type: 'short-answer',
            correctAnswer:
              'Source-by-source organization summarizes each source separately, which produces isolated summaries rather than integrated analysis. Organizing by main ideas weaves multiple sources into each section, creating coherence and allowing the writer to synthesize information. The main-idea approach is stronger because it demonstrates analytical thinking and produces a more unified, reader-friendly essay.',
            standardCode: '9-10.W.2',
          },
        ],
      },
    },
  },

  {
    slug: 'grade9-ela-narrative-techniques',
    title: 'Narrative Techniques',
    description:
      'Write narratives that use literary techniques — including dialogue, pacing, description, reflection, and multiple plot lines — to develop experiences, events, and characters.',
    subject: 'ela',
    grade: 9,
    gradeBand: '9-12',
    topicCluster: 'Writing',
    standardCodes: ['9-10.W.3'],
    content: {
      intro: {
        title: 'Narrative Techniques',
        text: 'Narrative writing at the high-school level goes beyond simple storytelling. It employs deliberate techniques — dialogue that reveals character, pacing that builds tension, sensory description that immerses the reader, and reflection that adds depth. This module helps you craft narratives that are not just engaging stories but carefully constructed works of art.',
        culturalHook:
          'Think about the best storyteller you know. What do they do that makes their stories come alive — voices, pauses, vivid details, surprises? Those are narrative techniques in action.',
      },
      segments: [
        {
          index: 0,
          title: 'Dialogue That Reveals Character',
          text: 'Effective dialogue does more than convey information; it reveals personality, relationships, and subtext. Each character should have a distinct voice shaped by their background, education, and emotional state. Use dialogue tags sparingly and let the words themselves do the work. Pay attention to what characters do not say — silences and evasions can be as revealing as speech.',
          keyVocabulary: ['dialogue', 'subtext', 'voice', 'characterization', 'dialogue tag'],
        },
        {
          index: 1,
          title: 'Pacing: Controlling the Reader\'s Experience',
          text: 'Pacing determines how quickly or slowly a narrative unfolds. Speed up with short sentences, rapid dialogue exchanges, and action verbs to create urgency. Slow down with sensory description, internal reflection, and longer sentence structures to build atmosphere or emotional depth. Vary pacing deliberately: a tense scene followed by a reflective pause creates rhythm and keeps the reader engaged.',
          keyVocabulary: ['pacing', 'urgency', 'atmosphere', 'rhythm', 'variation'],
          example:
            'Fast: "She grabbed the rope. Pulled. The knot held." Slow: "The morning light crept across the worn floorboards, warming the edges of the quilt that had been her grandmother\'s, each stitch a small prayer against forgetting."',
        },
        {
          index: 2,
          title: 'Sensory Description and Imagery',
          text: 'Strong narratives engage all five senses. Instead of telling the reader "the kitchen was old," show it: "The linoleum curled at the edges, and the air smelled of coffee grounds and woodsmoke." Choose details that do double duty — revealing setting while also conveying mood or character. Avoid overloading descriptions; select the most telling details and let the reader\'s imagination fill in the rest.',
          keyVocabulary: ['sensory detail', 'imagery', 'showing vs. telling', 'selective detail'],
        },
        {
          index: 3,
          title: 'Reflection and Thematic Depth',
          text: 'Reflection is the narrator\'s or character\'s contemplation of the meaning of events. It adds thematic depth, transforming a sequence of events into a story with significance. Place reflective moments after key events — a character pauses to consider what a loss means, or a narrator looks back and understands something they did not understand at the time. Reflection is what elevates narrative from anecdote to literature.',
          keyVocabulary: ['reflection', 'thematic depth', 'retrospective narration', 'significance'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'What makes dialogue effective in a narrative?',
          type: 'multiple-choice',
          options: [
            'It reveals character, advances the plot, and conveys subtext beyond the literal words.',
            'It is always written in complete, grammatically correct sentences.',
            'It includes as many dialogue tags as possible.',
            'It summarizes what already happened.',
          ],
          correctAnswer:
            'It reveals character, advances the plot, and conveys subtext beyond the literal words.',
          hint: 'Think about what dialogue does beyond simply conveying information.',
          explanation:
            'Effective dialogue serves multiple narrative purposes simultaneously: it characterizes, moves the story forward, and often communicates underlying tensions or emotions through subtext.',
          standardCode: '9-10.W.3',
        },
        {
          index: 1,
          question:
            'Rewrite the telling sentence "He was nervous" as a showing sentence that uses sensory detail.',
          type: 'short-answer',
          correctAnswer:
            'Example: "His fingers drummed the edge of the table, and he kept glancing at the door, the collar of his shirt dark with sweat." This shows nervousness through specific physical details the reader can visualize.',
          hint: 'Describe what nervousness looks, sounds, or feels like in the body.',
          explanation:
            'Showing through sensory detail immerses the reader in the experience, while telling merely labels the emotion. Effective narrative relies on showing to create immediacy.',
          standardCode: '9-10.W.3',
        },
        {
          index: 2,
          question:
            'How does varying pacing improve a narrative?',
          type: 'short-answer',
          correctAnswer:
            'Varying pacing creates rhythm and keeps the reader engaged. Fast pacing builds tension and urgency during action, while slow pacing allows for emotional depth, reflection, and atmosphere. The contrast between fast and slow sections makes each more effective.',
          hint: 'Think about what happens if every scene moves at the same speed.',
          explanation:
            'A narrative with uniform pacing becomes monotonous. Variation mirrors the natural rhythm of experience — bursts of action interspersed with moments of quiet — creating a more compelling reading experience.',
          standardCode: '9-10.W.3',
        },
        {
          index: 3,
          question:
            'What is the purpose of reflection in a narrative?',
          type: 'multiple-choice',
          options: [
            'To add thematic depth by showing the character\'s or narrator\'s understanding of the significance of events.',
            'To make the story longer.',
            'To repeat the plot events in different words.',
            'To provide a bibliography.',
          ],
          correctAnswer:
            'To add thematic depth by showing the character\'s or narrator\'s understanding of the significance of events.',
          hint: 'Reflection transforms events into meaning.',
          explanation:
            'Reflection elevates a narrative from a simple sequence of events to a story with thematic resonance. It is where meaning crystallizes for both the character and the reader.',
          standardCode: '9-10.W.3',
        },
        {
          index: 4,
          question:
            'A student writes: "The room was nice. It had things in it. She liked it." What feedback would you give to improve the sensory description?',
          type: 'short-answer',
          correctAnswer:
            'Replace vague words ("nice," "things") with specific sensory details: name particular objects, describe textures, colors, sounds, and smells. For example: "Sunlight angled through the dusty window onto a shelf of leather-bound books, and the faint scent of lavender rose from a bowl of dried flowers on the mantel." Specific details create atmosphere and reveal character.',
          hint: 'Identify the vague words and replace them with concrete, sensory-rich alternatives.',
          explanation:
            'Vague description fails to engage the reader\'s senses or imagination. Specific, carefully chosen details create vivid scenes and convey mood without telling the reader what to feel.',
          standardCode: '9-10.W.3',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Write a short narrative passage (4-6 sentences) that uses dialogue to reveal a character\'s personality without stating it directly.',
            type: 'short-answer',
            correctAnswer:
              'Example: "You going to eat that?" Marcus asked, already reaching across the table. His mother slapped his hand away. "I just sat down, Marcus." He grinned, unrepentant. "Time waits for no biscuit." He said it the way he said everything — like the world was a joke only he was quick enough to catch. The dialogue reveals Marcus as bold, humorous, and irrepressible without stating those traits directly.',
            standardCode: '9-10.W.3',
          },
          {
            question:
              'Which technique BEST creates urgency in a narrative climax?',
            type: 'multiple-choice',
            options: [
              'Short, clipped sentences with action verbs and minimal description.',
              'Long, detailed paragraphs describing the setting.',
              'Extensive internal reflection by the character.',
              'A footnote explaining the significance of the scene.',
            ],
            correctAnswer:
              'Short, clipped sentences with action verbs and minimal description.',
            standardCode: '9-10.W.3',
          },
          {
            question:
              'Write a reflective passage (3-4 sentences) in which a narrator looks back on a past event and articulates its significance.',
            type: 'short-answer',
            correctAnswer:
              'Example: "I did not understand it then — why my grandfather stood so long at the edge of the field every evening, watching nothing in particular. It was years before I realized he was not watching the field at all. He was holding still long enough to hear what the land had to say. That patience, I think, was the most useful thing he ever tried to teach me." The reflection transforms a simple memory into a statement about patience and listening.',
            standardCode: '9-10.W.3',
          },
        ],
      },
    },
  },

  {
    slug: 'grade9-ela-revision-strategies',
    title: 'Revision Strategies',
    description:
      'Develop and strengthen writing through planning, revising, editing, and rewriting, focusing on purpose, audience, organization, style, and conventions.',
    subject: 'ela',
    grade: 9,
    gradeBand: '9-12',
    topicCluster: 'Writing',
    standardCodes: ['9-10.W.5'],
    content: {
      intro: {
        title: 'Revision Strategies',
        text: 'Writing is rewriting. The first draft captures ideas; revision shapes them into clear, purposeful, and polished prose. This module teaches you to move beyond surface-level editing (fixing commas) to deep revision — rethinking structure, strengthening arguments, sharpening language, and ensuring every element serves your purpose and audience.',
        culturalHook:
          'Think about a craft tradition in your community — woodworking, quilting, cooking. The first attempt is never the final product. Revision in writing works the same way: each pass makes the work stronger.',
      },
      segments: [
        {
          index: 0,
          title: 'Revision vs. Editing',
          text: 'Revision and editing are different processes. Revision addresses big-picture concerns: Is the thesis clear? Does the organization make sense? Is the evidence sufficient? Are counterclaims addressed? Editing addresses sentence-level issues: grammar, spelling, punctuation, and word choice. Always revise before you edit — there is no point polishing sentences that may be cut or reorganized.',
          keyVocabulary: ['revision', 'editing', 'big-picture concerns', 'sentence-level concerns'],
        },
        {
          index: 1,
          title: 'Strategies for Deep Revision',
          text: 'Use these strategies to revise deeply: (1) Reverse outline — after drafting, outline what each paragraph actually says and check whether the order is logical. (2) Read aloud — hearing your prose reveals awkward phrasing, repetition, and unclear passages. (3) Purpose check — reread each paragraph and ask whether it directly serves the thesis. Cut or rewrite anything that does not. (4) Peer review — a trusted reader can identify gaps, confusion, and weak evidence that you may overlook.',
          keyVocabulary: ['reverse outline', 'read aloud', 'purpose check', 'peer review'],
          example:
            'A student creates a reverse outline and discovers that paragraphs three and five make the same point. She combines them into one stronger paragraph and uses the freed space to develop a neglected counterclaim.',
        },
        {
          index: 2,
          title: 'Revising for Audience and Style',
          text: 'Consider your audience throughout revision. Is the tone appropriate — formal for an academic essay, conversational for a blog post? Is the vocabulary accessible to your readers without being condescending? Vary sentence structure to create rhythm: mix short, punchy sentences with longer, complex ones. Eliminate unnecessary words — tighten every sentence so it communicates its idea as efficiently as possible.',
          keyVocabulary: ['audience awareness', 'tone', 'sentence variety', 'concision'],
        },
        {
          index: 3,
          title: 'Editing for Conventions',
          text: 'Once revision is complete, edit for conventions: subject-verb agreement, consistent verb tense, correct pronoun use, proper punctuation (especially commas, semicolons, and apostrophes), and accurate spelling. Read the paper backward sentence by sentence to catch errors your eye might skip when reading forward. Use grammar tools as a supplement, not a replacement, for your own knowledge.',
          keyVocabulary: ['conventions', 'subject-verb agreement', 'verb tense', 'proofreading'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'What is the key difference between revision and editing?',
          type: 'multiple-choice',
          options: [
            'Revision addresses big-picture issues like structure and argument; editing addresses sentence-level issues like grammar and punctuation.',
            'Revision and editing are the same thing.',
            'Editing comes first; revision comes second.',
            'Revision only fixes spelling.',
          ],
          correctAnswer:
            'Revision addresses big-picture issues like structure and argument; editing addresses sentence-level issues like grammar and punctuation.',
          hint: 'Think about the scale of changes each process involves.',
          explanation:
            'Revision and editing operate at different levels. Revision reshapes content and structure; editing polishes language and corrects errors. Revising first prevents wasted effort on sentences that may be cut.',
          standardCode: '9-10.W.5',
        },
        {
          index: 1,
          question:
            'What is a reverse outline, and how does it help with revision?',
          type: 'short-answer',
          correctAnswer:
            'A reverse outline is created after drafting by summarizing what each paragraph actually says (as opposed to what you intended it to say). It helps with revision by revealing organizational problems — paragraphs out of order, repeated points, missing evidence, or sections that do not serve the thesis.',
          hint: 'Think about outlining backward — starting with the draft rather than before writing.',
          explanation:
            'A reverse outline provides an honest map of the draft\'s actual structure, making it easier to identify and fix organizational weaknesses.',
          standardCode: '9-10.W.5',
        },
        {
          index: 2,
          question:
            'Why should you revise before you edit?',
          type: 'multiple-choice',
          options: [
            'Because revision may lead to cutting or rewriting entire sections, making earlier editing unnecessary.',
            'Because editing is more important than revision.',
            'Because teachers require revision to come first.',
            'Because you cannot edit and revise at the same time.',
          ],
          correctAnswer:
            'Because revision may lead to cutting or rewriting entire sections, making earlier editing unnecessary.',
          hint: 'Think about what happens if you perfect a sentence and then delete the whole paragraph.',
          explanation:
            'Revising first ensures that the content and structure are strong before you invest time polishing individual sentences. Editing a draft that still needs structural revision is inefficient.',
          standardCode: '9-10.W.5',
        },
        {
          index: 3,
          question:
            'A peer reviewer tells you that paragraph four feels out of place. What revision strategy should you use?',
          type: 'short-answer',
          correctAnswer:
            'Create a reverse outline to see where paragraph four fits in the overall argument. Then either move it to a more logical position, merge it with a related paragraph, or cut it if it does not serve the thesis. Peer feedback identifies the problem; the reverse outline helps you find the solution.',
          hint: 'Think about a strategy that reveals the big picture of your essay\'s organization.',
          explanation:
            'A reverse outline combined with peer feedback is a powerful revision tool. The feedback flags the issue, and the outline provides the structural perspective needed to fix it.',
          standardCode: '9-10.W.5',
        },
        {
          index: 4,
          question:
            'Which of the following is a sentence-level editing concern, NOT a revision concern?',
          type: 'multiple-choice',
          options: [
            'A comma splice in the third sentence of paragraph two.',
            'The thesis is unclear.',
            'The essay lacks a counterclaim.',
            'The organizational pattern does not fit the topic.',
          ],
          correctAnswer:
            'A comma splice in the third sentence of paragraph two.',
          hint: 'Editing deals with grammar and punctuation; revision deals with content and structure.',
          explanation:
            'A comma splice is a grammatical error — a sentence-level concern addressed during editing. The other options involve content, argument, and organization, which are revision concerns.',
          standardCode: '9-10.W.5',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Given a short draft paragraph, create a reverse outline entry for it and identify one revision and one editing improvement.',
            type: 'short-answer',
            correctAnswer:
              'Reverse outline: "Paragraph argues that community gardens reduce food insecurity but provides only one statistic and no counterclaim." Revision improvement: Add a second piece of evidence and address the counterclaim that gardens are seasonal. Editing improvement: Fix the run-on sentence in line three by adding a period or semicolon.',
            standardCode: '9-10.W.5',
          },
          {
            question:
              'Which revision strategy is MOST useful for identifying organizational problems?',
            type: 'multiple-choice',
            options: [
              'Creating a reverse outline of the draft.',
              'Running a spell-check.',
              'Adding more quotations.',
              'Changing the font size.',
            ],
            correctAnswer: 'Creating a reverse outline of the draft.',
            standardCode: '9-10.W.5',
          },
          {
            question:
              'Explain why reading a draft aloud is an effective revision and editing strategy. What specific problems does it help you catch?',
            type: 'short-answer',
            correctAnswer:
              'Reading aloud engages a different cognitive process than silent reading, making it easier to catch awkward phrasing, unintended repetition, overly long sentences, unclear transitions, and missing words. It also helps you hear whether the tone is appropriate for your audience and whether the prose has a pleasing rhythm.',
            standardCode: '9-10.W.5',
          },
        ],
      },
    },
  },
]
