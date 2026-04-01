import type { ModuleSeed } from '../types'

export const GRADE_12_ELA: ModuleSeed[] = [
  // ─── Reading Literature (3 modules) ───────────────────────────
  {
    slug: 'grade12-ela-extended-interpretation-complex-texts',
    title: 'Extended Interpretation of Complex Texts',
    description:
      'Construct extended interpretations of complex literary works by synthesizing textual evidence, considering ambiguity, and articulating nuanced readings that go beyond surface meaning.',
    subject: 'ela',
    grade: 12,
    gradeBand: '9-12',
    topicCluster: 'Reading Literature',
    standardCodes: ['11-12.RL.1', '11-12.RL.3', '11-12.RL.10'],
    content: {
      intro: {
        title: 'Extended Interpretation of Complex Texts',
        text: 'Great literature resists simple answers. A single novel, poem, or play can sustain multiple interpretations, each grounded in different textual evidence and critical lenses. In this module you will learn to develop extended, evidence-based interpretations of complex literary works — the kind of sustained analytical thinking expected in college seminars and professional life.',
        culturalHook:
          'Think of a story from your community that different generations interpret differently. What makes one story hold so many meanings?',
      },
      segments: [
        {
          index: 0,
          title: 'Embracing Ambiguity in Literature',
          text: 'Complex texts deliberately resist single, tidy meanings. Authors use unreliable narrators, symbolic imagery, open endings, and layered diction to create ambiguity. Rather than searching for "the" answer, skilled readers identify where the text is deliberately ambiguous and explain what each possible reading reveals. An extended interpretation acknowledges this complexity and builds a coherent argument for one reading while recognizing others.',
          keyVocabulary: ['ambiguity', 'unreliable narrator', 'symbolic imagery', 'extended interpretation'],
        },
        {
          index: 1,
          title: 'Building an Interpretation Through Evidence Chains',
          text: 'An extended interpretation moves beyond citing a single quotation. Instead, you construct an evidence chain: a sequence of passages from across the text that, taken together, support your reading. Each piece of evidence should build on the previous one, showing how the author develops the idea progressively. Connect evidence to your thesis by explaining not just what the passage says but why it matters to your overall argument.',
          keyVocabulary: ['evidence chain', 'thesis', 'progressive development', 'analytical reasoning'],
          example:
            'To argue that Gatsby represents the corruption of the American Dream, you might trace the green light from its first appearance (hope) through the middle chapters (obsession) to the final pages (disillusionment), showing how Fitzgerald transforms the symbol across the narrative arc.',
        },
        {
          index: 2,
          title: 'Accounting for Counterreadings',
          text: 'A mature interpretation does not ignore evidence that complicates its thesis. Instead, it addresses counterreadings — alternative interpretations supported by different evidence in the same text. Acknowledge the counterreading, explain its merit, and then show why your interpretation is more fully supported or more illuminating. This dialectical move strengthens your analysis and demonstrates intellectual honesty.',
          keyVocabulary: ['counterreading', 'dialectical reasoning', 'intellectual honesty', 'qualifying claims'],
        },
        {
          index: 3,
          title: 'Sustaining Interpretation Across a Full Essay',
          text: 'An extended interpretation typically unfolds across multiple paragraphs or pages. Organize your essay so that each body section advances the argument by introducing new evidence, deepening earlier claims, or addressing complications. Use transitions that signal analytical movement ("This complexity deepens when…," "Read alongside the earlier scene…"). Your conclusion should not merely restate the thesis but reflect on what the interpretation reveals about the work as a whole.',
          keyVocabulary: ['essay structure', 'analytical transitions', 'reflective conclusion'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'What is the primary difference between a basic interpretation and an extended interpretation of a literary text?',
          type: 'multiple-choice',
          options: [
            'An extended interpretation builds a sustained argument using an evidence chain and addresses counterreadings.',
            'An extended interpretation is simply longer than a basic one.',
            'An extended interpretation avoids using textual evidence.',
            'An extended interpretation focuses only on the author\'s biography.',
          ],
          correctAnswer:
            'An extended interpretation builds a sustained argument using an evidence chain and addresses counterreadings.',
          hint: 'Think about what makes an interpretation "extended" beyond just length.',
          explanation:
            'An extended interpretation is distinguished by its depth of reasoning — constructing evidence chains, acknowledging ambiguity, and engaging with counterreadings — not merely by word count.',
          standardCode: '11-12.RL.1',
        },
        {
          index: 1,
          question:
            'Why should a skilled reader embrace ambiguity in a complex text rather than seek a single correct meaning?',
          type: 'short-answer',
          correctAnswer:
            'Complex texts deliberately use ambiguity to create multiple layers of meaning. Embracing ambiguity allows the reader to explore richer, more nuanced interpretations and demonstrates a mature understanding of how literature works.',
          hint: 'Consider what the author gains by making a text ambiguous.',
          explanation:
            'Authors craft ambiguity intentionally. Recognizing and analyzing it rather than resolving it prematurely leads to deeper, more sophisticated readings.',
          standardCode: '11-12.RL.1',
        },
        {
          index: 2,
          question:
            'Which of the following best describes an "evidence chain"?',
          type: 'multiple-choice',
          options: [
            'A sequence of passages from across the text that progressively support an interpretation.',
            'A single quotation placed at the beginning of an essay.',
            'A list of page numbers where the main character appears.',
            'A summary of the plot in chronological order.',
          ],
          correctAnswer:
            'A sequence of passages from across the text that progressively support an interpretation.',
          hint: 'Think about the word "chain" — how do links connect?',
          explanation:
            'An evidence chain links multiple passages that build on one another, showing how the author develops an idea across the whole text rather than relying on a single moment.',
          standardCode: '11-12.RL.1',
        },
        {
          index: 3,
          question:
            'Explain how addressing a counterreading strengthens rather than weakens your interpretation.',
          type: 'short-answer',
          correctAnswer:
            'Addressing a counterreading shows intellectual honesty and demonstrates that your interpretation holds up even when alternative evidence is considered. It strengthens your argument by proving you have weighed competing possibilities and still found your reading more compelling.',
          hint: 'Think about what happens in a debate when you ignore the other side.',
          explanation:
            'Engaging with counterreadings is a dialectical move that makes your argument more robust and credible, showing you have considered the full complexity of the text.',
          standardCode: '11-12.RL.3',
        },
        {
          index: 4,
          question:
            'What should a conclusion in an extended interpretation essay do beyond restating the thesis?',
          type: 'multiple-choice',
          options: [
            'Reflect on what the interpretation reveals about the work as a whole.',
            'Introduce entirely new evidence not discussed in the body.',
            'Summarize the plot of the text.',
            'List all the literary devices used in the text.',
          ],
          correctAnswer:
            'Reflect on what the interpretation reveals about the work as a whole.',
          hint: 'A strong conclusion looks forward, not just backward.',
          explanation:
            'A reflective conclusion moves beyond restatement to consider the larger significance of the interpretation, showing the reader why the analysis matters.',
          standardCode: '11-12.RL.10',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'A novel ends with the protagonist standing at a crossroads, and the text never reveals which path she takes. How does this ambiguity contribute to the work\'s theme of self-determination?',
            type: 'short-answer',
            correctAnswer:
              'The open ending mirrors the theme of self-determination by placing the choice in the reader\'s hands, suggesting that the act of choosing — not the specific path chosen — is what defines the protagonist\'s agency.',
            standardCode: '11-12.RL.1',
          },
          {
            question:
              'Which approach best demonstrates an extended interpretation?',
            type: 'multiple-choice',
            options: [
              'Tracing a recurring symbol from its first appearance through its transformation at the climax and its final resonance in the closing scene.',
              'Quoting a single memorable line and explaining what it means.',
              'Listing every character in the novel and describing each one.',
              'Retelling the plot in your own words.',
            ],
            correctAnswer:
              'Tracing a recurring symbol from its first appearance through its transformation at the climax and its final resonance in the closing scene.',
            standardCode: '11-12.RL.3',
          },
          {
            question:
              'Why is it important to use analytical transitions such as "This complexity deepens when…" in an extended interpretation essay?',
            type: 'short-answer',
            correctAnswer:
              'Analytical transitions signal to the reader that the argument is advancing and building on previous points rather than merely listing evidence. They show the logical progression of the interpretation.',
            standardCode: '11-12.RL.10',
          },
        ],
      },
    },
  },
  {
    slug: 'grade12-ela-comparing-literary-movements',
    title: 'Comparing Literary Movements',
    description:
      'Compare and contrast the assumptions, techniques, and cultural contexts of major literary movements — such as Romanticism, Realism, Modernism, and Postmodernism — by analyzing representative texts from each.',
    subject: 'ela',
    grade: 12,
    gradeBand: '9-12',
    topicCluster: 'Reading Literature',
    standardCodes: ['11-12.RL.5', '11-12.RL.9'],
    content: {
      intro: {
        title: 'Comparing Literary Movements',
        text: 'Literature does not exist in a vacuum. Every text is shaped by the literary movement in which it was produced — a set of shared beliefs about art, truth, and the human condition. By comparing movements such as Romanticism, Realism, Modernism, and Postmodernism, you can see how writers across eras responded to the world around them and to one another.',
        culturalHook:
          'Consider how the music or art of your own community has changed over generations. What caused those shifts?',
      },
      segments: [
        {
          index: 0,
          title: 'What Is a Literary Movement?',
          text: 'A literary movement is a group of writers who share philosophical assumptions, stylistic techniques, and cultural concerns during a particular historical period. Movements arise in response to social change, technological shifts, or reactions against previous movements. Understanding a movement means knowing its core beliefs about truth, beauty, and the purpose of art — not just memorizing dates.',
          keyVocabulary: ['literary movement', 'philosophical assumptions', 'stylistic techniques', 'cultural context'],
        },
        {
          index: 1,
          title: 'Key Movements in Overview',
          text: 'Romanticism (late 1700s–mid 1800s) valued emotion, nature, and individual imagination. Realism (mid–late 1800s) sought to depict ordinary life without idealization. Modernism (early 1900s) fragmented form and questioned grand narratives. Postmodernism (mid 1900s–present) plays with irony, self-reference, and the instability of meaning. Each movement emerged partly as a critique of the one before it.',
          keyVocabulary: ['Romanticism', 'Realism', 'Modernism', 'Postmodernism', 'grand narratives'],
          example:
            'Modernist writers like Virginia Woolf rejected the linear plots of Realist novelists like George Eliot, using stream-of-consciousness to capture the fragmented nature of inner experience.',
        },
        {
          index: 2,
          title: 'Analyzing Texts Within Their Movement',
          text: 'When analyzing a text through the lens of its literary movement, ask: What does this text assume about truth and reality? What techniques does it use, and how do those techniques reflect the movement\'s values? How does the text respond to earlier traditions? Grounding your analysis in these questions keeps your comparison substantive rather than superficial.',
          keyVocabulary: ['critical lens', 'textual assumptions', 'literary tradition', 'substantive comparison'],
        },
        {
          index: 3,
          title: 'Crafting a Cross-Movement Comparison',
          text: 'A strong comparative essay does not simply describe each movement in separate sections. Instead, it organizes around points of comparison — such as how each movement treats the concept of the self, or how each uses narrative structure. Use a point-by-point structure to draw direct connections and contrasts, and support each point with specific textual evidence from representative works.',
          keyVocabulary: ['point-by-point structure', 'representative works', 'direct contrasts'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'What makes a group of writers a "literary movement"?',
          type: 'multiple-choice',
          options: [
            'They share philosophical assumptions, stylistic techniques, and cultural concerns during a particular historical period.',
            'They all live in the same city.',
            'They all write in the same genre.',
            'They all publish in the same decade.',
          ],
          correctAnswer:
            'They share philosophical assumptions, stylistic techniques, and cultural concerns during a particular historical period.',
          hint: 'Think about what connects writers beyond geography or timing.',
          explanation:
            'A literary movement is defined by shared ideas about art and truth, not merely by proximity in time or place.',
          standardCode: '11-12.RL.9',
        },
        {
          index: 1,
          question:
            'How did Modernism respond to the traditions of Realism?',
          type: 'short-answer',
          correctAnswer:
            'Modernism rejected Realism\'s commitment to linear plots and objective depictions of ordinary life. Instead, Modernist writers fragmented narrative structure, used stream-of-consciousness, and questioned whether objective truth was even possible.',
          hint: 'Think about what Realist writers valued and how Modernist writers challenged those values.',
          explanation:
            'Literary movements often emerge as critiques of the movements that preceded them. Understanding this dialectical relationship deepens comparative analysis.',
          standardCode: '11-12.RL.9',
        },
        {
          index: 2,
          question:
            'Which organizational strategy is most effective for a cross-movement comparison?',
          type: 'multiple-choice',
          options: [
            'A point-by-point structure organized around specific themes or techniques.',
            'A chronological summary of each movement in separate sections.',
            'A biographical overview of each author.',
            'A list of all texts published during each period.',
          ],
          correctAnswer:
            'A point-by-point structure organized around specific themes or techniques.',
          hint: 'Which structure forces you to draw direct connections?',
          explanation:
            'Point-by-point organization ensures the essay actively compares rather than merely describing each movement in isolation.',
          standardCode: '11-12.RL.5',
        },
        {
          index: 3,
          question:
            'Explain what it means to say that Postmodernism plays with "the instability of meaning."',
          type: 'short-answer',
          correctAnswer:
            'Postmodernist texts suggest that language and narrative do not deliver stable, fixed truths. They use irony, self-reference, and contradictory narratives to show that meaning is constructed and can shift depending on perspective.',
          hint: 'Think about how a Postmodern text might undermine its own story.',
          explanation:
            'Postmodernism challenges the assumption that texts convey a single reliable truth, which is a key departure from earlier movements like Realism.',
          standardCode: '11-12.RL.9',
        },
        {
          index: 4,
          question:
            'When analyzing a text through the lens of its literary movement, which question is LEAST useful?',
          type: 'multiple-choice',
          options: [
            'How many copies did the text sell?',
            'What does this text assume about truth and reality?',
            'How does the text respond to earlier traditions?',
            'What techniques does it use that reflect the movement\'s values?',
          ],
          correctAnswer: 'How many copies did the text sell?',
          hint: 'Which question is about commerce rather than literary analysis?',
          explanation:
            'Sales figures tell us about popularity, not about the text\'s relationship to its literary movement. The other questions address assumptions, techniques, and tradition — the core of movement-based analysis.',
          standardCode: '11-12.RL.5',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Compare how a Romantic poem and a Modernist poem might each represent nature. What differences in technique and philosophy would you expect?',
            type: 'short-answer',
            correctAnswer:
              'A Romantic poem would likely celebrate nature as a source of sublime beauty and spiritual renewal, using elevated diction and regular meter. A Modernist poem might present nature through fragmented imagery and free verse, questioning whether the natural world can still offer meaning in an industrialized age.',
            standardCode: '11-12.RL.9',
          },
          {
            question:
              'Which of the following best captures the relationship between successive literary movements?',
            type: 'multiple-choice',
            options: [
              'Each movement typically emerges as a response to or critique of the assumptions of the preceding movement.',
              'Each movement copies the techniques of the preceding movement.',
              'Literary movements are unrelated to one another.',
              'Each movement improves upon the one before it in a linear progression.',
            ],
            correctAnswer:
              'Each movement typically emerges as a response to or critique of the assumptions of the preceding movement.',
            standardCode: '11-12.RL.9',
          },
          {
            question:
              'Why is it insufficient to organize a cross-movement comparison as separate summaries of each movement?',
            type: 'short-answer',
            correctAnswer:
              'Separate summaries describe each movement in isolation without drawing direct connections or contrasts. A strong comparison must juxtapose specific techniques, themes, or assumptions side by side so the reader can see how the movements relate to and differ from each other.',
            standardCode: '11-12.RL.5',
          },
        ],
      },
    },
  },
  {
    slug: 'grade12-ela-authors-philosophical-perspective',
    title: "Author's Philosophical Perspective",
    description:
      'Analyze how an author\'s philosophical perspective — their beliefs about human nature, morality, and knowledge — shapes every element of a literary work, from character development to narrative structure.',
    subject: 'ela',
    grade: 12,
    gradeBand: '9-12',
    topicCluster: 'Reading Literature',
    standardCodes: ['11-12.RL.4', '11-12.RL.6'],
    content: {
      intro: {
        title: "Author's Philosophical Perspective",
        text: 'Every author writes from a philosophical perspective — a set of beliefs about human nature, free will, morality, and what can be known. This perspective shapes choices about character, structure, language, and theme. By identifying an author\'s philosophical stance, you unlock a deeper layer of meaning in any text.',
        culturalHook:
          'Think of an elder or leader in your community whose worldview deeply shapes how they tell stories. How does what they believe change the stories they choose to tell?',
      },
      segments: [
        {
          index: 0,
          title: 'Identifying Philosophical Perspective',
          text: 'An author\'s philosophical perspective is revealed through patterns in the text, not through a single statement. Look at what the narrator and characters value, how moral conflicts are resolved (or left unresolved), and what assumptions the text makes about human agency. Common philosophical frameworks in literature include existentialism (meaning is self-created), determinism (forces beyond our control shape destiny), transcendentalism (nature and intuition reveal truth), and absurdism (the universe offers no inherent meaning).',
          keyVocabulary: ['philosophical perspective', 'existentialism', 'determinism', 'transcendentalism', 'absurdism'],
        },
        {
          index: 1,
          title: 'How Perspective Shapes Character and Plot',
          text: 'An existentialist author creates characters who define themselves through choices, often in crisis. A determinist author may show characters swept along by heredity, environment, or fate. The plot structure itself reflects philosophical assumptions: an existentialist narrative may resist closure because meaning remains open, while a naturalist narrative may drive inevitably toward a predetermined outcome.',
          keyVocabulary: ['character agency', 'plot structure', 'narrative closure', 'naturalism'],
          example:
            'In Camus\'s The Stranger, Meursault\'s detachment from social norms reflects Camus\'s absurdist philosophy — the character embodies the belief that the universe is indifferent to human desire for meaning.',
        },
        {
          index: 2,
          title: 'How Perspective Shapes Language and Tone',
          text: 'Philosophical perspective also shapes diction and tone. A Romantic author may use elevated, emotionally charged language that assumes beauty and truth are accessible through feeling. A Modernist with a skeptical epistemology may use fragmented syntax and irony to suggest that language itself is insufficient to capture reality. Analyzing the relationship between philosophy and style deepens your reading considerably.',
          keyVocabulary: ['diction', 'tone', 'epistemology', 'fragmented syntax', 'irony'],
        },
        {
          index: 3,
          title: 'Writing About Philosophical Perspective',
          text: 'When writing about an author\'s philosophical perspective, state your claim early: "Author X\'s [philosophical stance] is evident in [specific textual elements]." Use evidence from character choices, plot structure, language, and thematic resolution. Avoid reducing the text to a philosophy lesson — the goal is to show how philosophy and artistry intertwine, creating a richer reading experience.',
          keyVocabulary: ['claim', 'textual elements', 'artistry', 'thematic resolution'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'How is an author\'s philosophical perspective typically revealed in a literary work?',
          type: 'multiple-choice',
          options: [
            'Through patterns in character values, moral conflict resolution, and assumptions about human agency.',
            'Through a direct statement at the beginning of the book.',
            'Through the author\'s biography on the dust jacket.',
            'Through the number of pages in the text.',
          ],
          correctAnswer:
            'Through patterns in character values, moral conflict resolution, and assumptions about human agency.',
          hint: 'Authors rarely announce their philosophy — you have to find it in the text.',
          explanation:
            'Philosophical perspective is embedded in the texture of the narrative: how characters act, how conflicts resolve, and what the text assumes about the world.',
          standardCode: '11-12.RL.6',
        },
        {
          index: 1,
          question:
            'How would a determinist author\'s plot structure likely differ from an existentialist author\'s?',
          type: 'short-answer',
          correctAnswer:
            'A determinist author would likely create a plot that drives toward an inevitable outcome shaped by forces beyond the character\'s control. An existentialist author would create a plot centered on characters making defining choices, often with an open or ambiguous ending.',
          hint: 'Think about how each philosophy views human agency.',
          explanation:
            'Plot structure reflects philosophical assumptions about whether individuals shape their destinies or are shaped by external forces.',
          standardCode: '11-12.RL.6',
        },
        {
          index: 2,
          question:
            'Which philosophical framework holds that the universe offers no inherent meaning?',
          type: 'multiple-choice',
          options: [
            'Absurdism',
            'Transcendentalism',
            'Romanticism',
            'Realism',
          ],
          correctAnswer: 'Absurdism',
          hint: 'Think of Camus and the idea that the universe is indifferent.',
          explanation:
            'Absurdism, associated with writers like Camus, holds that the universe is indifferent to human desires for meaning, and individuals must create their own significance.',
          standardCode: '11-12.RL.4',
        },
        {
          index: 3,
          question:
            'Explain how a Modernist author\'s skeptical epistemology might be reflected in their use of language.',
          type: 'short-answer',
          correctAnswer:
            'A Modernist with a skeptical epistemology might use fragmented syntax, stream-of-consciousness, and irony to suggest that language is insufficient to capture reality fully, reflecting the belief that objective truth is elusive or impossible.',
          hint: 'Think about what happens to writing style when an author doubts language\'s reliability.',
          explanation:
            'When authors doubt the capacity of language to represent truth, they experiment with form — fragmenting sentences, disrupting linear narrative, and layering irony.',
          standardCode: '11-12.RL.4',
        },
        {
          index: 4,
          question:
            'What should you avoid when writing an essay about an author\'s philosophical perspective?',
          type: 'multiple-choice',
          options: [
            'Reducing the text to a philosophy lesson rather than showing how philosophy and artistry intertwine.',
            'Using textual evidence to support your claim.',
            'Stating your claim early in the essay.',
            'Analyzing character choices and language.',
          ],
          correctAnswer:
            'Reducing the text to a philosophy lesson rather than showing how philosophy and artistry intertwine.',
          hint: 'The goal is literary analysis, not a philosophy summary.',
          explanation:
            'The essay should demonstrate how philosophical assumptions shape the artistic choices in the text, not merely label the text with a philosophical term.',
          standardCode: '11-12.RL.6',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Choose a novel or play you have read this year. Identify the author\'s philosophical perspective and explain how it shapes one specific element of the text (character, plot, or language).',
            type: 'short-answer',
            correctAnswer:
              'Answers will vary. A strong response identifies a specific philosophical stance (e.g., existentialism, determinism), names a specific textual element, and explains the connection with evidence.',
            standardCode: '11-12.RL.6',
          },
          {
            question:
              'Which of the following is the best thesis for an essay on philosophical perspective in literature?',
            type: 'multiple-choice',
            options: [
              'Dostoevsky\'s existentialist belief that suffering reveals authentic selfhood shapes Raskolnikov\'s tormented interior monologues and the novel\'s open moral resolution.',
              'Dostoevsky was a Russian author who wrote many novels.',
              'Crime and Punishment is about a man who commits a crime.',
              'Existentialism is an important philosophy.',
            ],
            correctAnswer:
              'Dostoevsky\'s existentialist belief that suffering reveals authentic selfhood shapes Raskolnikov\'s tormented interior monologues and the novel\'s open moral resolution.',
            standardCode: '11-12.RL.6',
          },
          {
            question:
              'Explain why analyzing tone and diction is essential to understanding an author\'s philosophical perspective.',
            type: 'short-answer',
            correctAnswer:
              'Tone and diction reveal the author\'s underlying assumptions about the world. Elevated, emotional language may signal Romantic idealism, while ironic, fragmented language may signal Modernist skepticism. These stylistic choices are inseparable from the author\'s philosophy.',
            standardCode: '11-12.RL.4',
          },
        ],
      },
    },
  },

  // ─── Reading Informational (3 modules) ────────────────────────
  {
    slug: 'grade12-ela-evaluating-competing-arguments',
    title: 'Evaluating Competing Arguments',
    description:
      'Evaluate the reasoning, evidence, and rhetorical strategies of two or more arguments on the same issue, determining which is most convincing and identifying logical fallacies.',
    subject: 'ela',
    grade: 12,
    gradeBand: '9-12',
    topicCluster: 'Reading Informational',
    standardCodes: ['11-12.RI.6', '11-12.RI.8'],
    content: {
      intro: {
        title: 'Evaluating Competing Arguments',
        text: 'In civic life, academic study, and professional settings, you will constantly encounter competing arguments about the same issue. Being able to evaluate each argument\'s reasoning, evidence, and rhetorical strategies — and to determine which is most persuasive — is one of the most critical skills you can develop as a reader and thinker.',
        culturalHook:
          'Think of a recent debate in your community where people held strong opposing views. How did you decide which side made the better case?',
      },
      segments: [
        {
          index: 0,
          title: 'Mapping the Structure of an Argument',
          text: 'Before evaluating an argument, map its structure: identify the central claim, the supporting reasons, and the evidence for each reason. Also note the warrants — the often-unstated assumptions that connect evidence to claims. A well-structured argument has clear logical connections between evidence, reasons, and the central claim; a poorly structured one relies on gaps, leaps, or hidden assumptions.',
          keyVocabulary: ['central claim', 'supporting reasons', 'evidence', 'warrants', 'logical connections'],
        },
        {
          index: 1,
          title: 'Identifying Logical Fallacies',
          text: 'Logical fallacies are errors in reasoning that undermine an argument\'s validity. Common fallacies include straw man (misrepresenting the opponent\'s position), ad hominem (attacking the person instead of the argument), false dilemma (presenting only two options when more exist), and appeal to authority (citing credentials instead of evidence). Recognizing these fallacies allows you to see where an argument breaks down.',
          keyVocabulary: ['logical fallacy', 'straw man', 'ad hominem', 'false dilemma', 'appeal to authority'],
          example:
            'An editorial arguing that we must either ban all technology in schools or accept total screen dependency commits a false dilemma — many moderate positions exist between these extremes.',
        },
        {
          index: 2,
          title: 'Assessing Evidence Quality',
          text: 'Not all evidence is equal. Evaluate evidence by asking: Is it relevant to the claim? Is it sufficient in quantity and scope? Is it current? Is the source credible and unbiased? Competing arguments often use different types of evidence — statistics, expert testimony, case studies, analogies — and the strength of the evidence often determines which argument is more convincing.',
          keyVocabulary: ['relevance', 'sufficiency', 'credibility', 'bias', 'evidence types'],
        },
        {
          index: 3,
          title: 'Writing a Comparative Evaluation',
          text: 'When writing a comparative evaluation of competing arguments, present each argument fairly before rendering your judgment. Use a structure that juxtaposes the arguments on specific points — such as evidence quality, logical reasoning, and acknowledgment of counterarguments. Conclude by explaining which argument is more convincing and why, grounding your judgment in the criteria you have applied.',
          keyVocabulary: ['comparative evaluation', 'fair representation', 'juxtaposition', 'reasoned judgment'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'What are "warrants" in the context of argument analysis?',
          type: 'multiple-choice',
          options: [
            'The often-unstated assumptions that connect evidence to claims.',
            'The footnotes at the bottom of a page.',
            'The author\'s biographical credentials.',
            'The counterarguments presented by the opposition.',
          ],
          correctAnswer:
            'The often-unstated assumptions that connect evidence to claims.',
          hint: 'Warrants are the logical bridges that are often invisible.',
          explanation:
            'Warrants are the underlying assumptions that make evidence logically relevant to a claim. Identifying them is crucial for evaluating whether an argument is sound.',
          standardCode: '11-12.RI.8',
        },
        {
          index: 1,
          question:
            'An argument claims that a policy is wrong because its author once failed a class. Which logical fallacy is this?',
          type: 'multiple-choice',
          options: [
            'Ad hominem',
            'Straw man',
            'False dilemma',
            'Circular reasoning',
          ],
          correctAnswer: 'Ad hominem',
          hint: 'This fallacy attacks the person rather than the argument.',
          explanation:
            'Ad hominem attacks the character or history of the person making the argument rather than addressing the argument\'s reasoning or evidence.',
          standardCode: '11-12.RI.8',
        },
        {
          index: 2,
          question:
            'Explain why it is important to present each competing argument fairly before rendering your judgment.',
          type: 'short-answer',
          correctAnswer:
            'Fair representation ensures intellectual honesty and credibility. If you misrepresent an argument to make it easier to dismiss, you commit a straw man fallacy and weaken your own analysis.',
          hint: 'What happens to your credibility if you distort the other side?',
          explanation:
            'Fair representation is essential for ethical argumentation and prevents the evaluator from committing the very fallacies they are supposed to identify.',
          standardCode: '11-12.RI.6',
        },
        {
          index: 3,
          question:
            'Which of the following is the best question to ask when assessing evidence quality?',
          type: 'multiple-choice',
          options: [
            'Is the evidence relevant, sufficient, current, and from a credible source?',
            'Is the evidence long enough to fill a page?',
            'Does the evidence come from a famous person?',
            'Is the evidence written in formal language?',
          ],
          correctAnswer:
            'Is the evidence relevant, sufficient, current, and from a credible source?',
          hint: 'Think about the criteria that determine whether evidence actually supports a claim.',
          explanation:
            'Evaluating evidence requires checking relevance, sufficiency, recency, and source credibility — not length, fame, or formality.',
          standardCode: '11-12.RI.8',
        },
        {
          index: 4,
          question:
            'Two editorials argue opposite sides of a policy debate. One uses peer-reviewed research and acknowledges counterarguments; the other relies on anecdotes and personal attacks. Which is more convincing and why?',
          type: 'short-answer',
          correctAnswer:
            'The editorial using peer-reviewed research and acknowledging counterarguments is more convincing because it provides credible, relevant evidence and demonstrates intellectual honesty by addressing opposing views, while the other relies on weaker evidence and logical fallacies.',
          hint: 'Apply the evidence-quality criteria you learned.',
          explanation:
            'Stronger evidence and honest engagement with counterarguments are hallmarks of a more persuasive and logically sound argument.',
          standardCode: '11-12.RI.6',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Identify and explain one logical fallacy in the following statement: "Anyone who opposes this new law clearly hates children."',
            type: 'short-answer',
            correctAnswer:
              'This is a false dilemma combined with an ad hominem attack. It reduces a complex policy debate to a binary (support or hate children) and attacks the character of opponents rather than engaging with their reasoning.',
            standardCode: '11-12.RI.8',
          },
          {
            question:
              'What is the first step in evaluating a competing argument?',
            type: 'multiple-choice',
            options: [
              'Map the argument\'s structure by identifying the central claim, supporting reasons, evidence, and warrants.',
              'Decide immediately whether you agree with the argument.',
              'Look up the author\'s political affiliation.',
              'Count the number of sources cited.',
            ],
            correctAnswer:
              'Map the argument\'s structure by identifying the central claim, supporting reasons, evidence, and warrants.',
            standardCode: '11-12.RI.8',
          },
          {
            question:
              'Explain why an argument that uses only anecdotal evidence is less convincing than one supported by multiple types of evidence.',
            type: 'short-answer',
            correctAnswer:
              'Anecdotal evidence represents individual cases that may not be representative of broader patterns. An argument supported by statistics, expert testimony, and case studies provides a more comprehensive and reliable foundation, making it more convincing.',
            standardCode: '11-12.RI.6',
          },
        ],
      },
    },
  },
  {
    slug: 'grade12-ela-analyzing-constitutional-legal-texts',
    title: 'Analyzing Constitutional and Legal Texts',
    description:
      'Analyze foundational U.S. documents and legal texts for purpose, audience, rhetorical strategy, and the relationship between constitutional principles and their real-world application.',
    subject: 'ela',
    grade: 12,
    gradeBand: '9-12',
    topicCluster: 'Reading Informational',
    standardCodes: ['11-12.RI.8', '11-12.RI.9'],
    content: {
      intro: {
        title: 'Analyzing Constitutional and Legal Texts',
        text: 'The U.S. Constitution, the Bill of Rights, landmark Supreme Court opinions, and other legal documents are among the most consequential texts you will ever read. Understanding how to analyze their language, structure, and rhetorical strategies is essential for informed citizenship and for engaging in meaningful civic discourse.',
        culturalHook:
          'Think about a law or rule in your community that people interpret differently. What about its language allows for different readings?',
      },
      segments: [
        {
          index: 0,
          title: 'Purpose and Audience of Legal Texts',
          text: 'Legal texts serve specific purposes: constitutions establish governing principles, statutes create enforceable rules, and court opinions interpret both. Each has a primary audience — legislators, judges, citizens — and the language is crafted accordingly. Understanding purpose and audience helps you see why legal texts use the specific structures and diction they do.',
          keyVocabulary: ['constitutions', 'statutes', 'court opinions', 'purpose', 'audience', 'diction'],
        },
        {
          index: 1,
          title: 'Close Reading of Constitutional Language',
          text: 'Constitutional language is deliberately broad and sometimes ambiguous, allowing interpretation across centuries. Close reading involves examining word choice (why "shall" vs. "may"), sentence structure (how clauses limit or expand rights), and the relationship between sections. Pay attention to qualifiers, exceptions, and terms that have been subject to ongoing legal debate.',
          keyVocabulary: ['close reading', 'qualifiers', 'exceptions', 'constitutional interpretation', 'deliberate ambiguity'],
          example:
            'The Second Amendment\'s phrase "a well regulated Militia" has been interpreted differently by originalists and living-constitutionalists, leading to very different conclusions about gun rights.',
        },
        {
          index: 2,
          title: 'Rhetorical Strategies in Legal Arguments',
          text: 'Legal texts employ rhetorical strategies including precedent (citing earlier decisions), analogy (comparing the current case to similar situations), and appeals to foundational values (liberty, equality, due process). When reading a Supreme Court opinion, identify the majority\'s reasoning, the evidence it cites, and how it anticipates and counters the dissent. The dissent, in turn, often reveals weaknesses in the majority opinion.',
          keyVocabulary: ['precedent', 'analogy', 'majority opinion', 'dissent', 'foundational values'],
        },
        {
          index: 3,
          title: 'Connecting Principles to Real-World Application',
          text: 'The power of constitutional analysis lies in connecting abstract principles to concrete situations. When analyzing a legal text, trace how a broad principle (e.g., "equal protection under the law") has been applied in specific cases. Evaluate whether the application is consistent with the principle\'s original language and intent, and consider how evolving social contexts shape interpretation.',
          keyVocabulary: ['equal protection', 'application', 'original language', 'evolving interpretation', 'social context'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'Why is constitutional language often deliberately broad and ambiguous?',
          type: 'multiple-choice',
          options: [
            'To allow interpretation and application across changing circumstances and centuries.',
            'Because the Founders were careless writers.',
            'To confuse ordinary citizens.',
            'Because legal language must always be vague.',
          ],
          correctAnswer:
            'To allow interpretation and application across changing circumstances and centuries.',
          hint: 'Think about why a document meant to last centuries might need flexibility.',
          explanation:
            'Broad language gives the Constitution the flexibility to be applied to situations the Founders could not have anticipated, which is essential for a living governing document.',
          standardCode: '11-12.RI.9',
        },
        {
          index: 1,
          question:
            'What is the role of a dissenting opinion in a Supreme Court case?',
          type: 'short-answer',
          correctAnswer:
            'A dissenting opinion presents the reasoning of justices who disagree with the majority. It often reveals weaknesses or alternative interpretations in the majority\'s argument and may influence future legal thought and decisions.',
          hint: 'Think about why the Court publishes disagreements alongside its decisions.',
          explanation:
            'Dissents serve as a check on majority reasoning, preserve alternative interpretations for future consideration, and contribute to the ongoing development of constitutional law.',
          standardCode: '11-12.RI.8',
        },
        {
          index: 2,
          question:
            'Which of the following is an example of the rhetorical strategy of precedent?',
          type: 'multiple-choice',
          options: [
            'A court citing an earlier decision to justify its ruling in the current case.',
            'A court using emotional language to persuade the public.',
            'A court listing the qualifications of the justices.',
            'A court describing the weather on the day of the ruling.',
          ],
          correctAnswer:
            'A court citing an earlier decision to justify its ruling in the current case.',
          hint: 'Precedent involves looking backward to earlier decisions.',
          explanation:
            'Citing precedent means referencing previous rulings to establish legal consistency and strengthen the logical foundation of the current decision.',
          standardCode: '11-12.RI.8',
        },
        {
          index: 3,
          question:
            'Explain why the difference between "shall" and "may" matters in legal language.',
          type: 'short-answer',
          correctAnswer:
            '"Shall" indicates a mandatory requirement or obligation, while "may" indicates permission or discretion. In legal texts, this distinction determines whether an action is required or merely allowed, which has significant real-world consequences.',
          hint: 'Think about the difference between being told you must do something and being told you can do something.',
          explanation:
            'Legal diction is precise because subtle word choices determine rights, obligations, and the scope of governmental power.',
          standardCode: '11-12.RI.9',
        },
        {
          index: 4,
          question:
            'How does tracing the application of "equal protection" across multiple court cases deepen your understanding of the principle?',
          type: 'short-answer',
          correctAnswer:
            'Tracing application across cases shows how the abstract principle has been interpreted in different social contexts, revealing both its flexibility and its limitations. It demonstrates that constitutional principles are living ideas shaped by ongoing debate.',
          hint: 'Consider what you learn by seeing one principle applied many different ways.',
          explanation:
            'Connecting abstract principles to concrete cases is the essence of constitutional analysis and reveals how law evolves in response to social change.',
          standardCode: '11-12.RI.9',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Read the following simplified excerpt: "Congress shall make no law abridging the freedom of speech." Explain one way this language has been interpreted broadly and one way it has been interpreted narrowly.',
            type: 'short-answer',
            correctAnswer:
              'Broadly: The First Amendment protects not just spoken words but also symbolic speech, such as wearing armbands or burning flags. Narrowly: "Speech" does not protect certain categories like true threats, incitement to imminent violence, or defamation.',
            standardCode: '11-12.RI.9',
          },
          {
            question:
              'Which rhetorical strategy involves comparing the current case to a similar past situation to justify a ruling?',
            type: 'multiple-choice',
            options: [
              'Analogy',
              'Alliteration',
              'Hyperbole',
              'Foreshadowing',
            ],
            correctAnswer: 'Analogy',
            standardCode: '11-12.RI.8',
          },
          {
            question:
              'Why is it important to read both the majority opinion and the dissent when analyzing a Supreme Court decision?',
            type: 'short-answer',
            correctAnswer:
              'Reading both provides a complete picture of the legal reasoning. The majority explains the ruling, while the dissent exposes potential weaknesses, offers alternative interpretations, and preserves arguments that may shape future law.',
            standardCode: '11-12.RI.8',
          },
        ],
      },
    },
  },
  {
    slug: 'grade12-ela-integrating-quantitative-qualitative-evidence',
    title: 'Integrating Quantitative and Qualitative Evidence',
    description:
      'Synthesize quantitative data (charts, statistics, data sets) with qualitative evidence (interviews, case studies, narrative accounts) to build comprehensive, well-supported analyses of complex issues.',
    subject: 'ela',
    grade: 12,
    gradeBand: '9-12',
    topicCluster: 'Reading Informational',
    standardCodes: ['11-12.RI.7', '11-12.RI.1'],
    content: {
      intro: {
        title: 'Integrating Quantitative and Qualitative Evidence',
        text: 'Complex issues demand more than one type of evidence. Statistics can reveal patterns, but they cannot tell individual stories. Interviews and narratives convey lived experience, but they cannot prove broad trends. By learning to integrate quantitative and qualitative evidence, you become a more complete analyst — one who can see both the forest and the trees.',
        culturalHook:
          'Think about a challenge in your community. What would the numbers alone miss? What would personal stories alone miss?',
      },
      segments: [
        {
          index: 0,
          title: 'Understanding Quantitative Evidence',
          text: 'Quantitative evidence uses numbers to describe, compare, and measure: statistics, percentages, data sets, charts, and graphs. Its strength is generalizability — it can reveal patterns across large populations. When reading quantitative evidence, check for sample size, source credibility, potential bias, and whether the data actually supports the claim being made.',
          keyVocabulary: ['quantitative evidence', 'statistics', 'generalizability', 'sample size', 'data literacy'],
        },
        {
          index: 1,
          title: 'Understanding Qualitative Evidence',
          text: 'Qualitative evidence captures depth and nuance: interviews, case studies, ethnographies, and narrative accounts. Its strength is richness — it can reveal context, motivation, and human experience that numbers cannot. When reading qualitative evidence, consider the representativeness of the cases, the researcher\'s perspective, and whether the conclusions are supported by the details provided.',
          keyVocabulary: ['qualitative evidence', 'case studies', 'ethnography', 'narrative accounts', 'representativeness'],
        },
        {
          index: 2,
          title: 'Strategies for Integration',
          text: 'Effective integration does not simply present quantitative and qualitative evidence side by side. Instead, use one type to illuminate or complicate the other. For example, present a statistic showing a 40% increase in rural hospital closures, then use a patient\'s narrative to show what that statistic means for a real family. Or use interview data to generate questions that quantitative data can then test. Always explain the relationship between the two types of evidence explicitly.',
          keyVocabulary: ['integration', 'illuminate', 'complicate', 'mixed methods', 'explicit connection'],
          example:
            'A report might state that 68% of students in a region lack internet access (quantitative), then include a student interview describing how she drives 30 minutes to a library to complete homework (qualitative). Together, the evidence is far more powerful than either alone.',
        },
        {
          index: 3,
          title: 'Writing an Integrated Analysis',
          text: 'When writing an integrated analysis, organize around the issue or claim rather than around the type of evidence. Each paragraph should weave together relevant quantitative and qualitative evidence to support its point. Use transitions that signal the relationship: "These statistics are brought into focus by…" or "While the data shows X, interviews reveal that…" Conclude by reflecting on what the combined evidence reveals that neither type could show alone.',
          keyVocabulary: ['integrated analysis', 'organizational structure', 'transitions', 'synthesized conclusion'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'What is the primary strength of quantitative evidence?',
          type: 'multiple-choice',
          options: [
            'It can reveal patterns across large populations through measurable data.',
            'It tells individual stories with emotional depth.',
            'It is always more accurate than qualitative evidence.',
            'It does not require interpretation.',
          ],
          correctAnswer:
            'It can reveal patterns across large populations through measurable data.',
          hint: 'Think about what numbers do best.',
          explanation:
            'Quantitative evidence excels at identifying broad patterns and trends that can be generalized across populations, but it cannot capture individual experience or context.',
          standardCode: '11-12.RI.7',
        },
        {
          index: 1,
          question:
            'Explain why simply placing quantitative and qualitative evidence side by side is not true integration.',
          type: 'short-answer',
          correctAnswer:
            'True integration requires the writer to explicitly explain how the two types of evidence relate to each other — how one illuminates, complicates, or deepens the other. Without this explicit connection, the evidence remains separate rather than synthesized.',
          hint: 'Think about the difference between a list and a conversation.',
          explanation:
            'Integration is an analytical act, not a formatting choice. The writer must create meaning by connecting the two types of evidence in the reader\'s mind.',
          standardCode: '11-12.RI.7',
        },
        {
          index: 2,
          question:
            'Which of the following transitions best signals integration of evidence types?',
          type: 'multiple-choice',
          options: [
            '"While the data shows a trend, interviews reveal the human impact behind those numbers."',
            '"Here is a chart. Here is an interview."',
            '"The numbers speak for themselves."',
            '"In conclusion, both types of evidence exist."',
          ],
          correctAnswer:
            '"While the data shows a trend, interviews reveal the human impact behind those numbers."',
          hint: 'Look for the transition that connects the two types of evidence.',
          explanation:
            'This transition explicitly shows the relationship between quantitative (data/trend) and qualitative (human impact) evidence, which is the hallmark of integration.',
          standardCode: '11-12.RI.7',
        },
        {
          index: 3,
          question:
            'When evaluating qualitative evidence, which of these should you consider?',
          type: 'multiple-choice',
          options: [
            'The representativeness of the cases, the researcher\'s perspective, and whether conclusions are supported by details.',
            'Only whether the story is emotionally moving.',
            'The number of pages the case study occupies.',
            'Whether the researcher has a doctoral degree.',
          ],
          correctAnswer:
            'The representativeness of the cases, the researcher\'s perspective, and whether conclusions are supported by details.',
          hint: 'Think about what makes qualitative evidence trustworthy.',
          explanation:
            'Strong qualitative evidence is representative, conducted from an acknowledged perspective, and has conclusions clearly grounded in the details provided.',
          standardCode: '11-12.RI.1',
        },
        {
          index: 4,
          question:
            'A report states that test scores improved by 15% after a new tutoring program, but interviews with teachers reveal that many students were excluded from testing. How does the qualitative evidence complicate the quantitative finding?',
          type: 'short-answer',
          correctAnswer:
            'The teacher interviews suggest that the 15% improvement may be misleading because students who might have scored lower were excluded from the data. The qualitative evidence reveals a selection bias that the statistics alone cannot show, complicating the claim of improvement.',
          hint: 'Think about what the numbers might be hiding.',
          explanation:
            'This is a classic example of qualitative evidence revealing a limitation in quantitative data, demonstrating why integration produces more honest and complete analysis.',
          standardCode: '11-12.RI.7',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Why is an analysis that integrates both quantitative and qualitative evidence generally stronger than one using only a single type?',
            type: 'short-answer',
            correctAnswer:
              'Integrated analysis is stronger because quantitative evidence reveals broad patterns while qualitative evidence provides depth and context. Together they compensate for each other\'s limitations, producing a more complete, nuanced, and persuasive understanding of the issue.',
            standardCode: '11-12.RI.7',
          },
          {
            question:
              'Which strategy best demonstrates integration of evidence types?',
            type: 'multiple-choice',
            options: [
              'Presenting a statistic and then using a narrative account to illustrate what the statistic means for real people.',
              'Putting all charts in one section and all interviews in another.',
              'Using only qualitative evidence because it is more personal.',
              'Ignoring qualitative evidence because it is not scientific.',
            ],
            correctAnswer:
              'Presenting a statistic and then using a narrative account to illustrate what the statistic means for real people.',
            standardCode: '11-12.RI.7',
          },
          {
            question:
              'Describe a situation in which qualitative evidence might generate a hypothesis that quantitative evidence could then test.',
            type: 'short-answer',
            correctAnswer:
              'For example, interviews with students might reveal that many feel isolated while learning remotely. This qualitative insight could generate the hypothesis that remote learners report lower well-being scores. A survey with a large sample could then quantitatively test whether this pattern holds broadly.',
            standardCode: '11-12.RI.1',
          },
        ],
      },
    },
  },

  // ─── Writing (3 modules) ──────────────────────────────────────
  {
    slug: 'grade12-ela-sustained-argument-essays',
    title: 'Sustained Argument Essays',
    description:
      'Compose sustained argumentative essays that develop a precise claim through logically organized evidence, address counterarguments substantively, and maintain a formal, authoritative voice throughout.',
    subject: 'ela',
    grade: 12,
    gradeBand: '9-12',
    topicCluster: 'Writing',
    standardCodes: ['11-12.W.1', '11-12.W.1a', '11-12.W.1b'],
    content: {
      intro: {
        title: 'Sustained Argument Essays',
        text: 'A sustained argument essay is the backbone of academic and professional writing. Unlike a five-paragraph essay, a sustained argument develops over many pages, building complexity as it goes. You must maintain a precise claim, organize evidence logically, address counterarguments with substance, and write in a voice that commands authority — skills that transfer directly to college essays, policy briefs, and professional reports.',
        culturalHook:
          'Think about the most persuasive person you know. What makes their arguments stick? Chances are they build their case step by step, anticipate objections, and speak with confidence.',
      },
      segments: [
        {
          index: 0,
          title: 'Crafting a Precise, Arguable Claim',
          text: 'A sustained argument begins with a precise, arguable claim — a thesis that takes a clear position on a debatable issue and can be supported with evidence. Avoid claims that are too broad ("Education is important") or merely factual ("The Constitution was ratified in 1788"). A strong claim narrows the issue and signals the argument\'s direction: "Universal pre-K programs would reduce the achievement gap more effectively than after-school tutoring because they intervene at the critical stage of cognitive development."',
          keyVocabulary: ['precise claim', 'arguable thesis', 'debatable issue', 'narrowing'],
        },
        {
          index: 1,
          title: 'Logical Organization Across Multiple Pages',
          text: 'In a sustained argument, each section or paragraph should advance the argument, not merely list evidence. Use one of several organizational patterns: building from least to most compelling evidence, addressing and refuting counterarguments before presenting your own case, or developing a chain of reasoning where each section depends on the one before it. Signal your structure with clear topic sentences and transitions.',
          keyVocabulary: ['organizational patterns', 'chain of reasoning', 'topic sentences', 'transitions'],
          example:
            'A chain-of-reasoning structure might argue: (1) early childhood is the most critical period for cognitive development → (2) access to quality pre-K is unequal across income levels → (3) universal pre-K would equalize access → (4) equalized access would reduce the achievement gap.',
        },
        {
          index: 2,
          title: 'Substantive Counterargument Engagement',
          text: 'A sustained argument does not dismiss counterarguments — it engages with them substantively. Present the strongest version of the opposing position (steelmanning), acknowledge its valid points, and then explain why your position is still more compelling. This may involve showing that the counterargument relies on weaker evidence, addresses a different question, or leads to less desirable consequences.',
          keyVocabulary: ['counterargument', 'steelmanning', 'concession', 'rebuttal', 'substantive engagement'],
        },
        {
          index: 3,
          title: 'Maintaining a Formal, Authoritative Voice',
          text: 'The voice of a sustained argument essay should be formal but not stiff, confident but not arrogant. Use precise academic vocabulary, avoid colloquialisms and first-person hedging ("I think maybe"), and vary sentence structure to maintain reader engagement. An authoritative voice earns the reader\'s trust and reinforces the credibility of your argument.',
          keyVocabulary: ['formal register', 'authoritative voice', 'academic vocabulary', 'sentence variety', 'credibility'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'Which of the following is the most precise, arguable claim?',
          type: 'multiple-choice',
          options: [
            'Universal pre-K would reduce the achievement gap more effectively than after-school tutoring because it intervenes at the critical stage of cognitive development.',
            'Education is important for everyone.',
            'Pre-K programs exist in many states.',
            'Some people disagree about education policy.',
          ],
          correctAnswer:
            'Universal pre-K would reduce the achievement gap more effectively than after-school tutoring because it intervenes at the critical stage of cognitive development.',
          hint: 'A strong claim takes a clear position on a debatable issue and signals its reasoning.',
          explanation:
            'This claim is specific, debatable, and previews the argument\'s reasoning. The other options are too vague, factual, or observational.',
          standardCode: '11-12.W.1a',
        },
        {
          index: 1,
          question:
            'Explain the difference between dismissing a counterargument and steelmanning it.',
          type: 'short-answer',
          correctAnswer:
            'Dismissing a counterargument ignores or trivializes the opposing view. Steelmanning presents the strongest possible version of the opposing argument, acknowledges its valid points, and then explains why your position is still more compelling. Steelmanning strengthens your own argument by showing you can address serious opposition.',
          hint: 'Think about which approach shows more intellectual rigor.',
          explanation:
            'Steelmanning is the gold standard of counterargument engagement because it demonstrates that your position withstands the best possible challenge.',
          standardCode: '11-12.W.1b',
        },
        {
          index: 2,
          question:
            'Which organizational pattern builds each section on the conclusion of the previous one?',
          type: 'multiple-choice',
          options: [
            'Chain of reasoning',
            'Chronological order',
            'Compare and contrast',
            'Random order',
          ],
          correctAnswer: 'Chain of reasoning',
          hint: 'Think about links in a chain — each depends on the one before it.',
          explanation:
            'A chain of reasoning creates a logical progression where each section\'s conclusion serves as the premise for the next, building cumulative force.',
          standardCode: '11-12.W.1',
        },
        {
          index: 3,
          question:
            'Why should you avoid first-person hedging phrases like "I think maybe" in a sustained argument essay?',
          type: 'short-answer',
          correctAnswer:
            'Hedging phrases weaken the writer\'s authority and signal uncertainty rather than confidence. In a formal argument, the evidence should speak through the writer\'s assured voice. Instead of "I think maybe this could work," write "The evidence demonstrates that this approach is effective."',
          hint: 'Consider how hedging affects the reader\'s trust in your argument.',
          explanation:
            'An authoritative voice is essential to persuasion. Hedging undermines the writer\'s credibility and makes the argument less convincing.',
          standardCode: '11-12.W.1',
        },
        {
          index: 4,
          question:
            'What is the primary purpose of each paragraph in a sustained argument essay?',
          type: 'multiple-choice',
          options: [
            'To advance the argument by introducing new evidence, deepening claims, or addressing complications.',
            'To repeat the thesis in different words.',
            'To summarize a source without analysis.',
            'To fill space until the essay reaches the required length.',
          ],
          correctAnswer:
            'To advance the argument by introducing new evidence, deepening claims, or addressing complications.',
          hint: 'Think about forward movement in an argument.',
          explanation:
            'Every paragraph in a sustained argument should push the argument forward. Repetition, summary without analysis, and filler all undermine the essay\'s effectiveness.',
          standardCode: '11-12.W.1',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Draft a precise, arguable claim on a topic of your choice that could sustain a multi-page essay. Explain why it is arguable and how it signals the essay\'s direction.',
            type: 'short-answer',
            correctAnswer:
              'Answers will vary. A strong response presents a specific, debatable claim (not a fact or vague opinion), explains what makes it arguable (reasonable people could disagree), and shows how the claim previews the argument\'s structure.',
            standardCode: '11-12.W.1a',
          },
          {
            question:
              'Which of the following best describes steelmanning?',
            type: 'multiple-choice',
            options: [
              'Presenting the strongest version of the opposing argument before explaining why your position is more compelling.',
              'Weakening the opposing argument by misrepresenting it.',
              'Ignoring counterarguments entirely.',
              'Agreeing with the opposing argument and abandoning your claim.',
            ],
            correctAnswer:
              'Presenting the strongest version of the opposing argument before explaining why your position is more compelling.',
            standardCode: '11-12.W.1b',
          },
          {
            question:
              'Explain how a chain-of-reasoning organizational pattern helps sustain an argument across multiple pages.',
            type: 'short-answer',
            correctAnswer:
              'A chain of reasoning builds cumulative force because each section depends on the preceding one. This creates a logical progression that carries the reader through a complex argument, making it easier to follow and harder to dismiss because rejecting any link requires addressing the entire chain.',
            standardCode: '11-12.W.1',
          },
        ],
      },
    },
  },
  {
    slug: 'grade12-ela-senior-research-project',
    title: 'Senior Research Project',
    description:
      'Conduct a capstone research project that synthesizes multiple sources, develops an original thesis, follows academic conventions for citation and formatting, and demonstrates command of the full research process.',
    subject: 'ela',
    grade: 12,
    gradeBand: '9-12',
    topicCluster: 'Writing',
    standardCodes: ['11-12.W.7', '11-12.W.8', '11-12.W.9'],
    content: {
      intro: {
        title: 'Senior Research Project',
        text: 'The senior research project is the capstone of your high school writing career. It asks you to choose a significant question, investigate it through multiple credible sources, develop an original thesis, and present your findings in a formal paper that adheres to academic conventions. This project demonstrates your readiness for college-level research and independent intellectual work.',
        culturalHook:
          'What question about your community, your region, or your world keeps you up at night? The senior research project is your chance to pursue that question with the full power of academic inquiry.',
      },
      segments: [
        {
          index: 0,
          title: 'Choosing and Refining a Research Question',
          text: 'A strong research question is specific enough to be answerable yet broad enough to sustain extended investigation. Begin with a topic you care about, then narrow it by asking "how" or "why" questions. Test your question against three criteria: Is it debatable (not a simple fact)? Is it researchable (sources exist)? Is it significant (it matters beyond the classroom)? Refine iteratively as you read.',
          keyVocabulary: ['research question', 'specificity', 'significance', 'iterative refinement'],
        },
        {
          index: 1,
          title: 'Finding, Evaluating, and Organizing Sources',
          text: 'Use academic databases, library catalogs, and credible digital archives to find sources. Evaluate each source for authority (who wrote it?), accuracy (is it supported by evidence?), currency (is it up to date?), and purpose (why was it written?). Organize your sources using an annotated bibliography or digital tool, noting how each source relates to your research question and thesis.',
          keyVocabulary: ['academic databases', 'annotated bibliography', 'authority', 'accuracy', 'currency', 'purpose'],
          example:
            'For a project on rural broadband access, you might use Census Bureau data (quantitative), academic journal articles on the digital divide (peer-reviewed analysis), and local newspaper interviews with affected families (qualitative/narrative).',
        },
        {
          index: 2,
          title: 'Developing an Original Thesis',
          text: 'Your thesis is the original argument you develop from your research — not a summary of what others have said. After reading widely, identify a gap in the existing discussion, a new connection between sources, or a perspective that challenges the consensus. State your thesis clearly and position it within the scholarly conversation: "While previous research focuses on X, this paper argues Y because Z."',
          keyVocabulary: ['original thesis', 'scholarly conversation', 'gap in research', 'positioning'],
        },
        {
          index: 3,
          title: 'Drafting, Citing, and Revising',
          text: 'Draft your paper with a clear introduction (question, context, thesis), organized body sections (each advancing the argument with evidence), and a reflective conclusion. Cite all sources using a standard format (MLA or APA). Integrate quotations smoothly — introduce them, present them, and explain their significance. Revise for argument strength, evidence integration, clarity, and mechanical correctness. Treat revision as a substantive intellectual process, not just proofreading.',
          keyVocabulary: ['MLA', 'APA', 'quotation integration', 'revision', 'argument strength'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'Which of the following research questions best meets the criteria of being debatable, researchable, and significant?',
          type: 'multiple-choice',
          options: [
            'How does the lack of rural broadband access affect educational outcomes for students in Appalachian communities?',
            'What year was the internet invented?',
            'Is the internet good or bad?',
            'How many people use the internet?',
          ],
          correctAnswer:
            'How does the lack of rural broadband access affect educational outcomes for students in Appalachian communities?',
          hint: 'A strong research question is specific, debatable, and significant.',
          explanation:
            'This question is specific (rural broadband in Appalachia), debatable (the extent and nature of the effect are arguable), and significant (it addresses real educational equity issues).',
          standardCode: '11-12.W.7',
        },
        {
          index: 1,
          question:
            'What does it mean to position your thesis within the scholarly conversation?',
          type: 'short-answer',
          correctAnswer:
            'Positioning your thesis means showing how your argument relates to what other researchers have already said. You acknowledge existing perspectives, identify a gap or disagreement, and explain how your thesis contributes something new to the discussion.',
          hint: 'Think of the scholarly conversation as an ongoing discussion you are joining.',
          explanation:
            'An original thesis does not exist in a vacuum — it gains significance by engaging with and building upon existing scholarship.',
          standardCode: '11-12.W.7',
        },
        {
          index: 2,
          question:
            'Which of the following is the best way to integrate a quotation into a research paper?',
          type: 'multiple-choice',
          options: [
            'Introduce the quotation with context, present it, and then explain its significance to your argument.',
            'Drop the quotation into the paragraph without introduction or explanation.',
            'Use the quotation as your entire paragraph.',
            'Paraphrase the quotation without citation.',
          ],
          correctAnswer:
            'Introduce the quotation with context, present it, and then explain its significance to your argument.',
          hint: 'Think of the introduce-present-explain method.',
          explanation:
            'Smooth quotation integration requires context (why are we reading this?), the quotation itself, and analysis (why does it matter?). Dropped quotations and unattributed paraphrases are common errors.',
          standardCode: '11-12.W.8',
        },
        {
          index: 3,
          question:
            'Why should revision be treated as a substantive intellectual process rather than just proofreading?',
          type: 'short-answer',
          correctAnswer:
            'Revision involves rethinking the argument, reorganizing sections for logical clarity, strengthening evidence, and deepening analysis. Proofreading only catches surface errors. True revision can fundamentally improve the quality and persuasiveness of the research paper.',
          hint: 'Think about the difference between fixing a typo and rethinking a paragraph.',
          explanation:
            'Substantive revision is where the greatest improvements in writing quality occur. It requires the writer to re-see the argument as a reader would.',
          standardCode: '11-12.W.9',
        },
        {
          index: 4,
          question:
            'When evaluating a source, which criterion asks "Why was this written?"',
          type: 'multiple-choice',
          options: [
            'Purpose',
            'Authority',
            'Currency',
            'Accuracy',
          ],
          correctAnswer: 'Purpose',
          hint: 'Each evaluation criterion corresponds to a different question about the source.',
          explanation:
            'Purpose examines the motivation behind a text — was it written to inform, persuade, sell, or entertain? Understanding purpose helps identify potential bias.',
          standardCode: '11-12.W.8',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Write a refined research question on a topic of your choice and explain how it meets the criteria of being debatable, researchable, and significant.',
            type: 'short-answer',
            correctAnswer:
              'Answers will vary. A strong response presents a specific "how" or "why" question, explains why reasonable people could disagree about the answer, identifies available source types, and articulates why the question matters beyond the classroom.',
            standardCode: '11-12.W.7',
          },
          {
            question:
              'Which of the following best describes an "original thesis" in a research paper?',
            type: 'multiple-choice',
            options: [
              'An argument the writer develops from research that contributes something new to the scholarly conversation.',
              'A summary of all the sources the writer read.',
              'A question the writer asks at the beginning of the paper.',
              'A fact that everyone already agrees on.',
            ],
            correctAnswer:
              'An argument the writer develops from research that contributes something new to the scholarly conversation.',
            standardCode: '11-12.W.7',
          },
          {
            question:
              'Explain why an annotated bibliography is a valuable tool during the research process, not just a formatting requirement.',
            type: 'short-answer',
            correctAnswer:
              'An annotated bibliography forces the researcher to evaluate each source critically, summarize its contribution, and articulate how it relates to the research question. This process deepens understanding, reveals gaps, and helps organize the eventual paper.',
            standardCode: '11-12.W.8',
          },
        ],
      },
    },
  },
  {
    slug: 'grade12-ela-multimedia-presentations',
    title: 'Multimedia Presentations',
    description:
      'Design and deliver multimedia presentations that strategically integrate text, images, audio, video, and data visualizations to communicate complex ideas clearly and persuasively to a specific audience.',
    subject: 'ela',
    grade: 12,
    gradeBand: '9-12',
    topicCluster: 'Writing',
    standardCodes: ['11-12.W.2', '11-12.W.6'],
    content: {
      intro: {
        title: 'Multimedia Presentations',
        text: 'In college and career, you will regularly present complex ideas using multimedia — slide decks, video essays, podcasts, and interactive displays. A strong multimedia presentation does not merely decorate an argument with images; it strategically selects and integrates media to clarify, enhance, and persuade. This module teaches you to think like a designer and a communicator at the same time.',
        culturalHook:
          'Think about a presentation or video that changed how you understood something. What made the combination of words, images, and sound so powerful?',
      },
      segments: [
        {
          index: 0,
          title: 'Audience and Purpose Analysis',
          text: 'Before designing any presentation, analyze your audience and purpose. Who will receive this? What do they already know? What do you want them to understand, feel, or do after the presentation? Your answers shape every design decision — from vocabulary level to color palette to media choices. A presentation for community members requires different design choices than one for an academic panel.',
          keyVocabulary: ['audience analysis', 'purpose', 'design decisions', 'communication goals'],
        },
        {
          index: 1,
          title: 'Strategic Media Selection',
          text: 'Each medium has strengths: text conveys precise arguments, images create emotional impact and spatial understanding, data visualizations reveal patterns, audio adds tone and human voice, and video combines multiple modes. Choose media based on what each does best for your specific content. Avoid decorative media — every image, chart, or clip should serve a clear communicative purpose.',
          keyVocabulary: ['media selection', 'communicative purpose', 'data visualization', 'multimodal', 'decorative vs. functional'],
          example:
            'If you are presenting data on income inequality, a well-designed bar chart communicates the pattern more quickly and powerfully than a paragraph of statistics. But a photograph of an affected community adds an emotional dimension the chart cannot.',
        },
        {
          index: 2,
          title: 'Design Principles for Clarity',
          text: 'Effective presentations follow core design principles: contrast (make important elements stand out), alignment (create visual order), repetition (establish consistency), and proximity (group related items). Limit text on slides — use bullet points or key phrases, not paragraphs. Choose readable fonts and high-contrast color schemes. White space is your ally; cluttered slides overwhelm audiences.',
          keyVocabulary: ['contrast', 'alignment', 'repetition', 'proximity', 'white space', 'visual hierarchy'],
        },
        {
          index: 3,
          title: 'Delivery and Integration',
          text: 'The presentation itself is a performance. Speak clearly, maintain eye contact, and use your slides as visual support — not a script. Integrate media seamlessly: introduce a video before playing it, explain what a chart shows before displaying it, and pause after significant visuals to let the audience absorb them. Practice transitions between media types to maintain flow and pacing.',
          keyVocabulary: ['delivery', 'eye contact', 'pacing', 'transitions', 'visual support'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'Why should audience analysis come before any design decisions in a multimedia presentation?',
          type: 'short-answer',
          correctAnswer:
            'Audience analysis determines vocabulary level, media choices, tone, and complexity. Designing before understanding the audience risks creating a presentation that is too advanced, too simple, or irrelevant to the viewers\' needs and expectations.',
          hint: 'Think about what happens when a presentation does not fit its audience.',
          explanation:
            'All effective communication begins with understanding the recipient. Media choices that work for one audience may fail for another.',
          standardCode: '11-12.W.6',
        },
        {
          index: 1,
          question:
            'Which of the following is an example of decorative rather than functional media use?',
          type: 'multiple-choice',
          options: [
            'Adding a generic stock photo of people smiling that has no connection to the presentation content.',
            'Including a bar chart that illustrates the key data point in your argument.',
            'Playing an audio clip of an interview that provides firsthand evidence.',
            'Showing a map that locates the community discussed in your presentation.',
          ],
          correctAnswer:
            'Adding a generic stock photo of people smiling that has no connection to the presentation content.',
          hint: 'Decorative media looks nice but serves no communicative purpose.',
          explanation:
            'Functional media directly supports the presentation\'s argument or content. Decorative media fills space without adding meaning and can actually distract the audience.',
          standardCode: '11-12.W.2',
        },
        {
          index: 2,
          question:
            'List the four core design principles for presentation clarity.',
          type: 'short-answer',
          correctAnswer:
            'Contrast, alignment, repetition, and proximity. Contrast makes important elements stand out, alignment creates visual order, repetition establishes consistency, and proximity groups related items together.',
          hint: 'Think of the acronym CARP.',
          explanation:
            'These four principles, often remembered as CARP, provide a framework for creating visually clear and professional presentations.',
          standardCode: '11-12.W.6',
        },
        {
          index: 3,
          question:
            'What is the most important rule about text on presentation slides?',
          type: 'multiple-choice',
          options: [
            'Limit text to key phrases or bullet points — do not write full paragraphs.',
            'Write complete paragraphs so the audience can read along.',
            'Use the smallest font possible to fit more information.',
            'Copy your essay directly onto the slides.',
          ],
          correctAnswer:
            'Limit text to key phrases or bullet points — do not write full paragraphs.',
          hint: 'Think about what happens when an audience tries to read and listen at the same time.',
          explanation:
            'Slides with too much text force the audience to choose between reading and listening. Key phrases guide attention while the speaker provides detail verbally.',
          standardCode: '11-12.W.6',
        },
        {
          index: 4,
          question:
            'Why should you introduce a video clip before playing it during a presentation?',
          type: 'short-answer',
          correctAnswer:
            'Introducing a clip tells the audience what to pay attention to and how it connects to your argument. Without an introduction, the audience may not understand why the clip is relevant or what they should take away from it.',
          hint: 'Think about what context does for comprehension.',
          explanation:
            'Seamless integration of media requires framing — the speaker must connect each media element to the presentation\'s central argument before and after showing it.',
          standardCode: '11-12.W.2',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'You are creating a presentation on food insecurity in your region. Name two types of media you would include and explain the communicative purpose of each.',
            type: 'short-answer',
            correctAnswer:
              'Answers will vary. A strong response names two distinct media types (e.g., a data visualization showing hunger statistics and a video interview with a local food bank director) and explains how each serves a specific purpose — one reveals patterns, the other humanizes the data.',
            standardCode: '11-12.W.2',
          },
          {
            question:
              'Which design principle ensures that related items on a slide appear near each other?',
            type: 'multiple-choice',
            options: [
              'Proximity',
              'Contrast',
              'Repetition',
              'Alignment',
            ],
            correctAnswer: 'Proximity',
            standardCode: '11-12.W.6',
          },
          {
            question:
              'Explain why practicing transitions between media types is important for an effective presentation.',
            type: 'short-answer',
            correctAnswer:
              'Awkward transitions between media types break the flow and distract the audience. Practicing ensures smooth pacing, helps the speaker introduce and contextualize each medium, and maintains the audience\'s engagement and comprehension throughout.',
            standardCode: '11-12.W.6',
          },
        ],
      },
    },
  },

  // ─── Speaking & Listening (3 modules) ─────────────────────────
  {
    slug: 'grade12-ela-sustained-academic-discussion',
    title: 'Sustained Academic Discussion',
    description:
      'Participate in and lead sustained academic discussions that build on others\' ideas, use evidence to support positions, manage disagreement productively, and arrive at deeper understanding through collaborative inquiry.',
    subject: 'ela',
    grade: 12,
    gradeBand: '9-12',
    topicCluster: 'Speaking & Listening',
    standardCodes: ['11-12.SL.1', '11-12.SL.1a', '11-12.SL.1c'],
    content: {
      intro: {
        title: 'Sustained Academic Discussion',
        text: 'Sustained academic discussion is more than a conversation — it is collaborative thinking. In a seminar, a meeting, or a panel, participants build on one another\'s ideas, challenge assumptions with evidence, and work toward deeper collective understanding. This module prepares you to lead and participate in the kind of extended intellectual exchange expected in college and professional life.',
        culturalHook:
          'Think about a time your community came together to solve a problem through conversation. What made that discussion productive?',
      },
      segments: [
        {
          index: 0,
          title: 'Preparation and Active Listening',
          text: 'Sustained discussion requires preparation. Come with notes, annotated texts, and questions. During discussion, practice active listening: focus on the speaker, resist planning your response while they talk, and take notes on key points. Active listening allows you to build on what others say rather than merely waiting for your turn to speak.',
          keyVocabulary: ['preparation', 'active listening', 'annotated texts', 'collaborative inquiry'],
        },
        {
          index: 1,
          title: 'Building on Others\' Ideas',
          text: 'In sustained discussion, each contribution should connect to what came before. Use phrases that show connection: "Building on what [name] said…," "I agree with [name]\'s point about X, and I\'d extend it to…," or "That makes me reconsider my earlier claim because…" This creates a chain of collective reasoning rather than a series of unrelated monologues.',
          keyVocabulary: ['building on ideas', 'collective reasoning', 'connection phrases', 'intellectual generosity'],
          example:
            'Instead of saying "I think the author is unreliable," say "Building on Maria\'s observation about the contradictory details in chapter three, I think we can argue that the author is deliberately creating an unreliable narrator."',
        },
        {
          index: 2,
          title: 'Using Evidence in Discussion',
          text: 'Academic discussion requires evidence, not just opinion. Reference specific passages, data, or examples to support your claims. When challenging another participant, point to specific evidence: "I see your point, but on page 47, the author states X, which seems to contradict that reading." Evidence-based discussion elevates the conversation and prevents it from drifting into unsupported assertion.',
          keyVocabulary: ['evidence-based discussion', 'textual reference', 'specific passages', 'supported claims'],
        },
        {
          index: 3,
          title: 'Managing Disagreement Productively',
          text: 'Disagreement is essential to academic discussion — it pushes thinking forward. Manage it productively by distinguishing between the idea and the person, asking clarifying questions before challenging, and framing disagreements as opportunities for inquiry: "That\'s an interesting reading. I see it differently because… Can we look at the evidence together?" Productive disagreement leads to deeper understanding for everyone.',
          keyVocabulary: ['productive disagreement', 'clarifying questions', 'intellectual respect', 'collaborative inquiry'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'Why is active listening essential to sustained academic discussion?',
          type: 'multiple-choice',
          options: [
            'It allows you to build on what others say and create a chain of collective reasoning.',
            'It lets you memorize everyone\'s exact words.',
            'It gives you time to plan a completely unrelated point.',
            'It is required by classroom rules but has no intellectual purpose.',
          ],
          correctAnswer:
            'It allows you to build on what others say and create a chain of collective reasoning.',
          hint: 'Think about what happens to a discussion when no one listens.',
          explanation:
            'Active listening is the foundation of collaborative inquiry. Without it, a discussion becomes a series of disconnected monologues rather than collective thinking.',
          standardCode: '11-12.SL.1',
        },
        {
          index: 1,
          question:
            'Rewrite the following statement to build on a classmate\'s idea: "I think the theme is about power." Assume a classmate just argued that the protagonist is trapped by social expectations.',
          type: 'short-answer',
          correctAnswer:
            'Building on your point about the protagonist being trapped by social expectations, I think we can see that the broader theme is about power — specifically, how social expectations function as a form of invisible power that constrains individual agency.',
          hint: 'Start by connecting to the classmate\'s specific idea.',
          explanation:
            'Building on ideas means explicitly connecting your contribution to the previous speaker\'s point, extending or deepening the collective analysis.',
          standardCode: '11-12.SL.1c',
        },
        {
          index: 2,
          question:
            'Which of the following is the best way to challenge someone\'s interpretation during a discussion?',
          type: 'multiple-choice',
          options: [
            '"I see your point, but on page 47 the author states X, which seems to suggest a different reading. Can we look at that passage together?"',
            '"You\'re wrong."',
            '"I disagree. Next topic."',
            '"That\'s just your opinion."',
          ],
          correctAnswer:
            '"I see your point, but on page 47 the author states X, which seems to suggest a different reading. Can we look at that passage together?"',
          hint: 'A productive challenge uses evidence and invites collaboration.',
          explanation:
            'This response acknowledges the other person\'s view, introduces specific evidence, and invites collaborative examination — the hallmarks of productive academic disagreement.',
          standardCode: '11-12.SL.1c',
        },
        {
          index: 3,
          question:
            'Why is preparation important before a sustained academic discussion?',
          type: 'short-answer',
          correctAnswer:
            'Preparation — including notes, annotated texts, and prepared questions — ensures you can contribute substantively with evidence rather than relying on vague impressions. It raises the quality of the entire discussion because prepared participants generate more insightful observations and questions.',
          hint: 'Think about how preparation affects the quality of what you say.',
          explanation:
            'Without preparation, participants fall back on surface-level reactions. Preparation enables the depth of engagement that sustained discussion requires.',
          standardCode: '11-12.SL.1a',
        },
        {
          index: 4,
          question:
            'What is the difference between productive disagreement and unproductive disagreement?',
          type: 'multiple-choice',
          options: [
            'Productive disagreement uses evidence, respects the person, and advances understanding; unproductive disagreement attacks the person or dismisses the idea without engagement.',
            'Productive disagreement is louder.',
            'There is no difference.',
            'Productive disagreement avoids all conflict.',
          ],
          correctAnswer:
            'Productive disagreement uses evidence, respects the person, and advances understanding; unproductive disagreement attacks the person or dismisses the idea without engagement.',
          hint: 'Think about disagreements that leave everyone smarter versus those that shut conversation down.',
          explanation:
            'Productive disagreement is evidence-based, respectful, and forward-looking. It distinguishes between the idea and the person and treats conflict as an opportunity for deeper inquiry.',
          standardCode: '11-12.SL.1',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Describe three specific strategies you would use to lead a productive academic discussion on a controversial topic.',
            type: 'short-answer',
            correctAnswer:
              'Answers will vary. Strong responses might include: (1) establishing ground rules for evidence-based discussion, (2) asking open-ended questions that require textual evidence, (3) modeling building-on language, (4) redirecting personal attacks toward ideas, or (5) summarizing and synthesizing periodically to maintain focus.',
            standardCode: '11-12.SL.1a',
          },
          {
            question:
              'Which phrase best demonstrates "building on" a classmate\'s idea?',
            type: 'multiple-choice',
            options: [
              '"Extending Jordan\'s point about symbolism, I notice the same symbol appears in a very different context in chapter eight, which complicates the reading."',
              '"I have a completely different topic to discuss."',
              '"I already said that."',
              '"Anyway, here is my idea."',
            ],
            correctAnswer:
              '"Extending Jordan\'s point about symbolism, I notice the same symbol appears in a very different context in chapter eight, which complicates the reading."',
            standardCode: '11-12.SL.1c',
          },
          {
            question:
              'Explain why evidence-based discussion is more valuable than opinion-based discussion in academic settings.',
            type: 'short-answer',
            correctAnswer:
              'Evidence-based discussion grounds claims in verifiable, shared material that all participants can examine. This creates a common foundation for analysis, prevents the conversation from becoming a contest of personal preferences, and leads to conclusions that are more rigorous and defensible.',
            standardCode: '11-12.SL.1',
          },
        ],
      },
    },
  },
  {
    slug: 'grade12-ela-formal-debate',
    title: 'Formal Debate',
    description:
      'Prepare and deliver formal debates using structured formats, including constructing cases with evidence, anticipating and refuting opposing arguments, and adhering to time constraints and procedural conventions.',
    subject: 'ela',
    grade: 12,
    gradeBand: '9-12',
    topicCluster: 'Speaking & Listening',
    standardCodes: ['11-12.SL.3', '11-12.SL.4', '11-12.SL.6'],
    content: {
      intro: {
        title: 'Formal Debate',
        text: 'Formal debate is the most structured form of argumentation. It requires you to construct a case, anticipate and refute opposing arguments, think on your feet during cross-examination, and speak persuasively under time pressure. These skills — logical reasoning, quick analysis, poised delivery — serve you in courtrooms, boardrooms, and civic forums for the rest of your life.',
        culturalHook:
          'Think about a time you had to argue for something you believed in with someone who disagreed. Now imagine doing that with structure, evidence, and time limits. That is formal debate.',
      },
      segments: [
        {
          index: 0,
          title: 'Debate Formats and Roles',
          text: 'Common debate formats include Lincoln-Douglas (one-on-one, values-focused), Policy (two-on-two, evidence-heavy), and Parliamentary (flexible, persuasion-focused). Each format assigns roles: the affirmative argues for change, and the negative defends the status quo. Understanding format and role helps you focus your preparation and strategic choices.',
          keyVocabulary: ['Lincoln-Douglas', 'Policy debate', 'Parliamentary debate', 'affirmative', 'negative', 'status quo'],
        },
        {
          index: 1,
          title: 'Constructing Your Case',
          text: 'A debate case consists of a clear resolution (the proposition being debated), a framework (the values or criteria for judging the debate), and contentions (the main arguments supported by evidence). Each contention should include a claim, a warrant (reasoning), and evidence (data, expert testimony, examples). Organize contentions from strongest to most nuanced.',
          keyVocabulary: ['resolution', 'framework', 'contentions', 'claim-warrant-evidence', 'case construction'],
          example:
            'For the resolution "Resolved: Universal basic income would reduce poverty," an affirmative case might include contentions on pilot program success data, economic modeling, and the inadequacy of current welfare systems.',
        },
        {
          index: 2,
          title: 'Refutation and Cross-Examination',
          text: 'Refutation is the art of responding to your opponent\'s arguments. Effective refutation identifies the weakest link in the opponent\'s reasoning, presents counter-evidence, and explains why your position is stronger. During cross-examination, ask strategic questions designed to expose contradictions or gaps: "You cited a study from 2010 — are you aware that a 2024 replication failed to reproduce those results?"',
          keyVocabulary: ['refutation', 'cross-examination', 'counter-evidence', 'strategic questioning', 'weakest link'],
        },
        {
          index: 3,
          title: 'Delivery Under Pressure',
          text: 'Formal debate demands confident, clear delivery within strict time limits. Speak at a pace your audience can follow, maintain eye contact with the judge and audience, and use vocal variety to emphasize key points. Manage nervousness by focusing on your preparation and your arguments rather than on yourself. End each speech with a strong summary that crystallizes your position.',
          keyVocabulary: ['delivery', 'time management', 'vocal variety', 'eye contact', 'closing summary'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'What are the three main components of a debate case?',
          type: 'multiple-choice',
          options: [
            'Resolution, framework, and contentions.',
            'Introduction, body, and conclusion.',
            'Characters, setting, and plot.',
            'Hypothesis, method, and results.',
          ],
          correctAnswer: 'Resolution, framework, and contentions.',
          hint: 'Think about the building blocks specific to debate, not essay writing.',
          explanation:
            'A debate case is structured around the resolution (what is being debated), the framework (the criteria for judgment), and the contentions (the main arguments with evidence).',
          standardCode: '11-12.SL.4',
        },
        {
          index: 1,
          question:
            'Explain the difference between the affirmative and negative positions in a debate.',
          type: 'short-answer',
          correctAnswer:
            'The affirmative argues in favor of the resolution and proposes change from the current situation. The negative defends the status quo or argues against the resolution, contending that the proposed change is unnecessary, harmful, or less desirable.',
          hint: 'Think about who wants change and who defends things as they are.',
          explanation:
            'Understanding the structural roles helps debaters focus their arguments appropriately and anticipate the strategic needs of their position.',
          standardCode: '11-12.SL.3',
        },
        {
          index: 2,
          question:
            'What is the most effective approach to refuting an opponent\'s argument?',
          type: 'multiple-choice',
          options: [
            'Identify the weakest link in the reasoning, present counter-evidence, and explain why your position is stronger.',
            'Simply say "I disagree" and move on.',
            'Ignore the opponent\'s argument entirely.',
            'Attack the opponent\'s character.',
          ],
          correctAnswer:
            'Identify the weakest link in the reasoning, present counter-evidence, and explain why your position is stronger.',
          hint: 'Effective refutation targets reasoning, not people.',
          explanation:
            'Strategic refutation focuses on the logical or evidentiary weakness of the argument, presents counter-evidence, and explains the comparative advantage of your position.',
          standardCode: '11-12.SL.3',
        },
        {
          index: 3,
          question:
            'Why is it important to maintain eye contact and vocal variety during a debate?',
          type: 'short-answer',
          correctAnswer:
            'Eye contact establishes credibility and connection with the judge and audience. Vocal variety — changes in pace, volume, and tone — emphasizes key points and keeps the audience engaged. Together, they make the delivery more persuasive and professional.',
          hint: 'Think about what makes a speaker compelling to listen to.',
          explanation:
            'Delivery skills are essential because even strong arguments lose impact if delivered in a monotone or while staring at notes.',
          standardCode: '11-12.SL.6',
        },
        {
          index: 4,
          question:
            'During cross-examination, what type of question is most strategically effective?',
          type: 'multiple-choice',
          options: [
            'A question designed to expose a contradiction or gap in the opponent\'s evidence.',
            'A question about the opponent\'s personal life.',
            'A question that restates your own argument.',
            'A yes-or-no question about an uncontested fact.',
          ],
          correctAnswer:
            'A question designed to expose a contradiction or gap in the opponent\'s evidence.',
          hint: 'Cross-examination is a strategic tool, not casual conversation.',
          explanation:
            'Effective cross-examination questions are designed to weaken the opponent\'s case by revealing inconsistencies, outdated evidence, or logical gaps.',
          standardCode: '11-12.SL.3',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Construct a brief outline for an affirmative case on the resolution: "Resolved: Public universities should be tuition-free." Include a framework and two contentions with evidence types.',
            type: 'short-answer',
            correctAnswer:
              'Answers will vary. A strong response includes a framework (e.g., evaluated on the basis of educational equity and economic benefit), and two contentions with specific evidence types (e.g., Contention 1: Tuition-free models increase enrollment among low-income students — supported by data from countries with free university education; Contention 2: Reduced student debt stimulates economic growth — supported by economic modeling studies).',
            standardCode: '11-12.SL.4',
          },
          {
            question:
              'Which debate format is typically values-focused and involves one-on-one argumentation?',
            type: 'multiple-choice',
            options: [
              'Lincoln-Douglas',
              'Policy',
              'Parliamentary',
              'Mock Trial',
            ],
            correctAnswer: 'Lincoln-Douglas',
            standardCode: '11-12.SL.3',
          },
          {
            question:
              'Explain why ending each debate speech with a strong summary is important.',
            type: 'short-answer',
            correctAnswer:
              'A strong closing summary crystallizes the speaker\'s most important points in the judge\'s and audience\'s minds. Because listeners remember the last thing they hear most clearly, the summary is a critical opportunity to reinforce the strength of your case and the weaknesses of your opponent\'s.',
            standardCode: '11-12.SL.6',
          },
        ],
      },
    },
  },
  {
    slug: 'grade12-ela-multimedia-analysis',
    title: 'Multimedia Analysis',
    description:
      'Critically analyze multimedia sources — including speeches, documentaries, podcasts, and digital media — evaluating how creators use rhetorical strategies, media techniques, and design choices to inform, persuade, and manipulate audiences.',
    subject: 'ela',
    grade: 12,
    gradeBand: '9-12',
    topicCluster: 'Speaking & Listening',
    standardCodes: ['11-12.SL.2', '11-12.SL.3', '11-12.SL.5'],
    content: {
      intro: {
        title: 'Multimedia Analysis',
        text: 'You consume multimedia constantly — videos, podcasts, social media, news broadcasts, and documentaries. But how often do you stop to analyze how these sources are constructed to shape your thinking? Critical multimedia analysis teaches you to decode the rhetorical strategies, media techniques, and design choices that creators use to inform, persuade, and sometimes manipulate audiences.',
        culturalHook:
          'Think about a video or podcast that changed your mind about something. What techniques did the creator use to get past your defenses?',
      },
      segments: [
        {
          index: 0,
          title: 'Rhetorical Strategies in Multimedia',
          text: 'Multimedia creators use the same rhetorical strategies as written texts — ethos (credibility), pathos (emotion), and logos (logic) — but deploy them through additional channels. A documentary establishes ethos through expert interviews, creates pathos through music and close-up footage of affected people, and builds logos through data visualizations and narrated arguments. Identifying these strategies across multiple channels is the foundation of multimedia analysis.',
          keyVocabulary: ['ethos', 'pathos', 'logos', 'rhetorical strategies', 'multiple channels'],
        },
        {
          index: 1,
          title: 'Media Techniques and Their Effects',
          text: 'Every media technique is a choice with consequences. Camera angles (low angle = power, high angle = vulnerability), editing pace (fast cuts = urgency, slow cuts = contemplation), sound design (music, silence, ambient noise), and graphic design (color, font, layout) all influence how the audience receives information. Analyze not just what is said but how it is presented, and ask what effect each technique has on your perception.',
          keyVocabulary: ['camera angles', 'editing pace', 'sound design', 'graphic design', 'media techniques'],
          example:
            'A news segment might use dramatic music and rapid editing to make a routine event feel like a crisis, manipulating the viewer\'s emotional response through media techniques rather than factual content.',
        },
        {
          index: 2,
          title: 'Detecting Bias and Manipulation',
          text: 'All media is constructed from a perspective, but some sources cross the line from perspective into manipulation. Red flags include: presenting only one side of an issue, using emotional music to bypass logical analysis, showing misleading data visualizations (e.g., truncated y-axes), quoting sources out of context, and using loaded language. A critical viewer asks: What is left out? Who benefits from this framing? What would the opposing view look like?',
          keyVocabulary: ['bias', 'manipulation', 'framing', 'loaded language', 'misleading data', 'critical viewing'],
        },
        {
          index: 3,
          title: 'Writing a Multimedia Analysis',
          text: 'A multimedia analysis essay describes the source, identifies its purpose and audience, analyzes specific rhetorical strategies and media techniques with examples, evaluates effectiveness and potential bias, and concludes with a judgment about the source\'s reliability and persuasive power. Use timestamps, screenshots, or transcribed quotations as evidence. Treat the multimedia source with the same analytical rigor you would apply to a written text.',
          keyVocabulary: ['multimedia analysis essay', 'timestamps', 'transcribed quotations', 'analytical rigor', 'reliability'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'How does a documentary typically establish ethos?',
          type: 'multiple-choice',
          options: [
            'Through expert interviews and credible sourcing.',
            'Through dramatic background music.',
            'Through fast-paced editing.',
            'Through close-up shots of emotional subjects.',
          ],
          correctAnswer: 'Through expert interviews and credible sourcing.',
          hint: 'Ethos is about credibility — what makes a source seem trustworthy?',
          explanation:
            'Expert interviews and credible sourcing establish the documentary\'s authority and trustworthiness. Music and close-ups serve pathos, and editing pace serves pacing and tone.',
          standardCode: '11-12.SL.2',
        },
        {
          index: 1,
          question:
            'Explain how a truncated y-axis on a bar chart can mislead viewers.',
          type: 'short-answer',
          correctAnswer:
            'A truncated y-axis (one that does not start at zero) exaggerates the visual difference between bars, making small differences look dramatic. Viewers who glance at the chart without reading the axis may be misled into thinking the difference is much larger than it actually is.',
          hint: 'Think about what happens when you zoom in on a tiny part of a graph.',
          explanation:
            'Data visualization is a powerful tool, and manipulating axis scales is one of the most common ways to mislead audiences with technically accurate but visually deceptive charts.',
          standardCode: '11-12.SL.3',
        },
        {
          index: 2,
          question:
            'Which of the following questions is most useful for detecting manipulation in a multimedia source?',
          type: 'multiple-choice',
          options: [
            'What is left out, and who benefits from this framing?',
            'Is the production quality high?',
            'How many views does the source have?',
            'Is the narrator\'s voice pleasant?',
          ],
          correctAnswer: 'What is left out, and who benefits from this framing?',
          hint: 'Manipulation is often about what is not shown.',
          explanation:
            'Asking what is omitted and who benefits from the framing exposes the constructedness of the source and reveals potential bias or manipulation.',
          standardCode: '11-12.SL.3',
        },
        {
          index: 3,
          question:
            'A news segment uses dramatic music and rapid editing to cover a routine city council meeting. What effect do these media techniques have?',
          type: 'short-answer',
          correctAnswer:
            'The dramatic music and rapid editing create a sense of urgency and crisis that is not warranted by the routine content. These techniques manipulate the viewer\'s emotional response, making the event seem more alarming or significant than it actually is.',
          hint: 'Think about how the techniques change your perception of the event.',
          explanation:
            'Media techniques can create emotional responses that override the viewer\'s rational assessment of the content, which is why critical analysis of technique is so important.',
          standardCode: '11-12.SL.5',
        },
        {
          index: 4,
          question:
            'What types of evidence should you use in a multimedia analysis essay?',
          type: 'multiple-choice',
          options: [
            'Timestamps, screenshots, transcribed quotations, and descriptions of media techniques.',
            'Only your personal opinions.',
            'Only a summary of the content.',
            'Unrelated sources that support your view.',
          ],
          correctAnswer:
            'Timestamps, screenshots, transcribed quotations, and descriptions of media techniques.',
          hint: 'Treat multimedia with the same rigor you would apply to a written text.',
          explanation:
            'Specific, verifiable evidence — timestamps, screenshots, transcriptions — anchors your analysis in the actual source and makes your claims testable.',
          standardCode: '11-12.SL.2',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Choose a documentary, podcast, or news segment you have watched recently. Identify one rhetorical strategy and one media technique the creator used, and explain their effect on the audience.',
            type: 'short-answer',
            correctAnswer:
              'Answers will vary. A strong response names a specific source, identifies a rhetorical strategy (ethos, pathos, or logos) with evidence, identifies a media technique (camera angle, editing, sound design) with a specific example, and explains how each shapes the audience\'s understanding or emotional response.',
            standardCode: '11-12.SL.2',
          },
          {
            question:
              'Which media technique is most associated with creating a sense of urgency?',
            type: 'multiple-choice',
            options: [
              'Fast-paced editing with rapid cuts.',
              'Slow, lingering shots.',
              'Silence with no music.',
              'A single static camera angle.',
            ],
            correctAnswer: 'Fast-paced editing with rapid cuts.',
            standardCode: '11-12.SL.5',
          },
          {
            question:
              'Explain why critical multimedia analysis is an essential skill for informed citizenship in the digital age.',
            type: 'short-answer',
            correctAnswer:
              'In the digital age, citizens are constantly exposed to multimedia that uses sophisticated techniques to inform, persuade, and manipulate. Without the ability to decode rhetorical strategies, media techniques, and potential bias, individuals are vulnerable to misinformation and manipulation, making critical analysis essential for democratic participation.',
            standardCode: '11-12.SL.3',
          },
        ],
      },
    },
  },
]
