import type { ModuleSeed } from '../types'

export const GRADE_11_ELA: ModuleSeed[] = [
  // ─── Reading Literature (3 modules) ─────────────────────────────
  {
    slug: 'grade11-ela-seminal-us-texts',
    title: 'Seminal U.S. Texts and Their Legacy',
    description:
      'Read and analyze seminal U.S. documents and literary works, examining how foundational ideas about liberty, justice, and identity evolve across historical periods.',
    subject: 'ela',
    grade: 11,
    gradeBand: '9-12',
    topicCluster: 'Reading Literature',
    standardCodes: ['11-12.RL.9', '11-12.RL.1'],
    content: {
      intro: {
        title: 'Seminal U.S. Texts and Their Legacy',
        text: 'From the Declaration of Independence to the Harlem Renaissance, American writers have returned again and again to questions of freedom, equality, and self-determination. In this module you will read excerpts from seminal U.S. texts spanning multiple centuries and trace how later authors reinterpret, challenge, or extend the ideas of their predecessors.',
        culturalHook:
          'Think about a speech, song, or story from your community that echoes the ideals — or the unfulfilled promises — of an earlier American document.',
      },
      segments: [
        {
          index: 0,
          title: 'Defining "Seminal" in a Literary Context',
          text: 'A seminal text is one that introduces or crystallizes ideas so powerfully that later writers feel compelled to respond. In American literature, works like the Declaration of Independence, Frederick Douglass\'s "What to the Slave Is the Fourth of July?", and Martin Luther King Jr.\'s "Letter from Birmingham Jail" form a conversation across time. Recognizing this intertextual conversation is the first step toward deep literary analysis.',
          keyVocabulary: ['seminal text', 'intertextuality', 'literary conversation'],
        },
        {
          index: 1,
          title: 'Tracing Ideas Across Eras',
          text: 'When analyzing how ideas evolve, create a timeline of key claims each author makes. Compare the language, rhetorical strategies, and assumptions of the earlier text with those of the later one. Ask: What has the later author kept? What has been challenged or redefined? How does historical context explain the shift?',
          keyVocabulary: ['rhetorical strategies', 'historical context', 'ideological evolution'],
          example:
            'Jefferson writes "all men are created equal" as a philosophical assertion in 1776. Douglass in 1852 leverages the same phrase to expose the hypocrisy of slavery, turning the founders\' language back on the nation.',
        },
        {
          index: 2,
          title: 'Writing an Intertextual Analysis',
          text: 'An effective intertextual analysis states a clear thesis about the relationship between two or more texts, provides carefully selected evidence from each, and explains how the comparison deepens understanding of both. Use signal phrases such as "Building on Jefferson\'s claim that…" or "In direct contrast to Emerson\'s notion of…" to guide your reader through the connections.',
          keyVocabulary: ['thesis', 'signal phrases', 'intertextual analysis'],
        },
        {
          index: 3,
          title: 'Application: Paired-Text Close Reading',
          text: 'Select two seminal U.S. texts that address a shared theme — for example, the meaning of freedom. Annotate each passage for key claims, rhetorical moves, and tone. Then draft a one-paragraph analysis explaining how the later text transforms the earlier one\'s central idea.',
          keyVocabulary: ['close reading', 'annotation', 'textual transformation'],
        },
      ],
      practice: [
        {
          index: 0,
          question: 'What makes a text "seminal" in American literature?',
          type: 'multiple-choice',
          options: [
            'It introduces or crystallizes ideas so powerfully that later writers respond to it.',
            'It is the longest work published in its era.',
            'It was written by a government official.',
            'It appears on a standardized-test reading list.',
          ],
          correctAnswer:
            'It introduces or crystallizes ideas so powerfully that later writers respond to it.',
          hint: 'Think about influence, not length or authorship.',
          explanation:
            'A seminal text is defined by its lasting influence on subsequent thinkers and writers, not by its length or the status of its author.',
          standardCode: '11-12.RL.9',
        },
        {
          index: 1,
          question:
            'How does Frederick Douglass\'s use of the phrase "all men are created equal" differ from Jefferson\'s original use?',
          type: 'short-answer',
          correctAnswer:
            'Douglass uses Jefferson\'s own language to expose the contradiction between the nation\'s founding ideals and the reality of slavery, turning the phrase into an indictment rather than an aspiration.',
          hint: 'Consider the audience and historical moment each writer addresses.',
          explanation:
            'Douglass recontextualizes the phrase to highlight hypocrisy, demonstrating how later authors can subvert a seminal text\'s original meaning to make a new argument.',
          standardCode: '11-12.RL.9',
        },
        {
          index: 2,
          question:
            'Which signal phrase best introduces an intertextual comparison?',
          type: 'multiple-choice',
          options: [
            'Building on Jefferson\'s claim that…',
            'In my opinion…',
            'The author says…',
            'To summarize…',
          ],
          correctAnswer: 'Building on Jefferson\'s claim that…',
          hint: 'Look for a phrase that explicitly connects two texts.',
          explanation:
            'Signal phrases like "Building on X\'s claim that…" clearly show the reader the relationship between the two texts being compared.',
          standardCode: '11-12.RL.1',
        },
        {
          index: 3,
          question:
            'Explain one strategy for tracing how an idea evolves from an earlier text to a later one.',
          type: 'short-answer',
          correctAnswer:
            'Create a timeline of key claims each author makes, then compare the language, rhetorical strategies, and assumptions of the earlier text with the later one to identify what has been kept, challenged, or redefined.',
          hint: 'Think about a step-by-step approach to comparison.',
          explanation:
            'Mapping claims chronologically helps reveal how historical context and authorial purpose shape the transformation of ideas across texts.',
          standardCode: '11-12.RL.9',
        },
        {
          index: 4,
          question:
            'A student writes: "King and Jefferson both talk about rights." How could this thesis be improved for an intertextual analysis?',
          type: 'short-answer',
          correctAnswer:
            'The thesis should specify what each author argues about rights and how King\'s argument builds on, challenges, or redefines Jefferson\'s — for example: "While Jefferson frames natural rights as self-evident philosophical truths, King redefines them as urgent moral demands that require direct action."',
          hint: 'A strong thesis names the specific relationship between the texts.',
          explanation:
            'An effective intertextual thesis goes beyond noting a shared topic; it articulates the precise nature of the dialogue between the texts.',
          standardCode: '11-12.RL.1',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Which of the following best describes the relationship between Douglass\'s 1852 speech and the Declaration of Independence?',
            type: 'multiple-choice',
            options: [
              'Douglass appropriates the Declaration\'s language to expose the nation\'s failure to extend its ideals to enslaved people.',
              'Douglass rejects every principle stated in the Declaration.',
              'Douglass copies the Declaration without adding new meaning.',
              'Douglass writes a sequel that continues Jefferson\'s argument unchanged.',
            ],
            correctAnswer:
              'Douglass appropriates the Declaration\'s language to expose the nation\'s failure to extend its ideals to enslaved people.',
            standardCode: '11-12.RL.9',
          },
          {
            question:
              'Why is historical context essential when analyzing how ideas evolve across seminal U.S. texts?',
            type: 'short-answer',
            correctAnswer:
              'Historical context reveals the social, political, and economic conditions that cause later authors to reinterpret or challenge earlier ideas, making the evolution of those ideas intelligible rather than arbitrary.',
            standardCode: '11-12.RL.1',
          },
          {
            question:
              'Write a thesis statement for an essay comparing how two seminal U.S. texts address the concept of justice.',
            type: 'short-answer',
            correctAnswer:
              'A strong response names two specific texts and articulates how the later text redefines, extends, or challenges the earlier text\'s concept of justice — for example: "While the Gettysburg Address frames justice as national unity preserved through sacrifice, King\'s \'Letter from Birmingham Jail\' reframes justice as the moral obligation to resist unjust laws through nonviolent action."',
            standardCode: '11-12.RL.9',
          },
        ],
      },
    },
  },
  {
    slug: 'grade11-ela-complex-theme-structure',
    title: 'Complex Theme and Structure Analysis',
    description:
      'Examine how authors develop two or more interacting themes over the course of a complex literary text and how structural choices — nonlinear chronology, multiple narrators, shifts in point of view — shape meaning.',
    subject: 'ela',
    grade: 11,
    gradeBand: '9-12',
    topicCluster: 'Reading Literature',
    standardCodes: ['11-12.RL.2', '11-12.RL.5'],
    content: {
      intro: {
        title: 'Complex Theme and Structure Analysis',
        text: 'Great literature rarely pursues a single idea in a straight line. Authors weave multiple themes together and use structural choices — such as flashbacks, shifting narrators, and unconventional chapter arrangements — to complicate and deepen meaning. In this module you will learn to identify interacting themes and explain how structure serves as a vehicle for thematic development.',
        culturalHook:
          'Consider a family story that is told differently depending on who tells it. How does the teller\'s perspective change the story\'s meaning?',
      },
      segments: [
        {
          index: 0,
          title: 'Identifying Interacting Themes',
          text: 'A complex text often develops themes that reinforce, complicate, or contradict one another. For example, a novel might explore both ambition and isolation, showing how the pursuit of one leads to the other. To identify interacting themes, track recurring motifs, character arcs, and conflicts, then articulate how the themes relate — do they converge, diverge, or create tension?',
          keyVocabulary: ['interacting themes', 'motif', 'thematic tension'],
        },
        {
          index: 1,
          title: 'How Structure Shapes Theme',
          text: 'Structural choices are never arbitrary. A nonlinear chronology can mirror a character\'s fragmented memory; alternating narrators can present competing truths. When analyzing structure, ask: Why does the author arrange events or perspectives this way? How would the thematic impact change if the structure were different? Connect specific structural decisions to the themes they develop.',
          keyVocabulary: ['nonlinear chronology', 'narrative perspective', 'structural purpose'],
          example:
            'In Faulkner\'s "A Rose for Emily," the non-chronological structure withholds key information, forcing readers to piece together the theme of decay and denial alongside the townspeople.',
        },
        {
          index: 2,
          title: 'Synthesizing Theme and Structure in Analysis',
          text: 'A sophisticated literary analysis demonstrates how theme and structure are inseparable. Your thesis should name both the theme(s) and the structural technique, then your body paragraphs should show, with textual evidence, how the technique develops the theme. Avoid treating structure as a mere "literary device checklist" — instead, explain its effect on the reader\'s understanding.',
          keyVocabulary: ['synthesis', 'thesis', 'textual evidence'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'What does it mean for themes to "interact" within a literary text?',
          type: 'multiple-choice',
          options: [
            'The themes reinforce, complicate, or contradict one another as the text unfolds.',
            'The themes are listed in the table of contents.',
            'Each chapter addresses a completely separate theme.',
            'The themes are stated directly by the narrator.',
          ],
          correctAnswer:
            'The themes reinforce, complicate, or contradict one another as the text unfolds.',
          hint: 'Think about how two ideas can push against or build on each other.',
          explanation:
            'Interacting themes are developed in relation to one another — they may converge, create tension, or complicate the reader\'s understanding as the narrative progresses.',
          standardCode: '11-12.RL.2',
        },
        {
          index: 1,
          question:
            'How does nonlinear chronology in "A Rose for Emily" contribute to the theme of decay?',
          type: 'short-answer',
          correctAnswer:
            'The fragmented timeline mirrors the town\'s — and Emily\'s — refusal to confront reality in sequence, allowing the theme of decay to emerge gradually through accumulated hints rather than a direct revelation.',
          hint: 'Consider what the reader learns and when, and how that shapes the feeling of the theme.',
          explanation:
            'By withholding chronological order, Faulkner forces readers to experience the theme of decay as an unsettling accumulation, which reinforces the story\'s atmosphere of denial.',
          standardCode: '11-12.RL.5',
        },
        {
          index: 2,
          question:
            'A novel alternates between two narrators who interpret the same events differently. What thematic effect might this structure create?',
          type: 'multiple-choice',
          options: [
            'It develops a theme about the subjectivity of truth and the limits of individual perspective.',
            'It makes the novel easier to read.',
            'It proves that one narrator is always correct.',
            'It eliminates the need for textual evidence in analysis.',
          ],
          correctAnswer:
            'It develops a theme about the subjectivity of truth and the limits of individual perspective.',
          hint: 'Think about what happens when two people disagree about the same event.',
          explanation:
            'Alternating narrators highlight how perspective shapes understanding, naturally developing themes related to truth, bias, and the complexity of human experience.',
          standardCode: '11-12.RL.5',
        },
        {
          index: 3,
          question:
            'Why should a literary analysis avoid treating structural devices as a "checklist"?',
          type: 'short-answer',
          correctAnswer:
            'Because naming a device without explaining its effect on theme reduces analysis to identification. A strong analysis demonstrates how the structural choice shapes the reader\'s experience and deepens thematic meaning.',
          hint: 'The goal is to explain effect, not just label techniques.',
          explanation:
            'Sophisticated analysis connects form and meaning, showing why the author\'s structural decisions matter rather than simply cataloguing them.',
          standardCode: '11-12.RL.2',
        },
        {
          index: 4,
          question:
            'Write a thesis statement that connects a structural technique to a theme for a novel you have read.',
          type: 'short-answer',
          correctAnswer:
            'A strong response names a specific text, identifies a structural technique and a theme, and explains the relationship — for example: "In The Great Gatsby, Fitzgerald\'s use of Nick as a limited first-person narrator develops the theme of illusion versus reality by filtering Gatsby\'s story through a perspective that is both admiring and unreliable."',
          hint: 'Your thesis should name the technique, the theme, and the connection between them.',
          explanation:
            'An effective thesis integrates structure and theme into a single analytical claim, providing a roadmap for the essay\'s argument.',
          standardCode: '11-12.RL.5',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Which of the following best explains how interacting themes differ from a single theme?',
            type: 'multiple-choice',
            options: [
              'Interacting themes develop in relationship to one another, creating layers of meaning that a single theme cannot achieve alone.',
              'Interacting themes appear only in novels, while single themes appear in poems.',
              'Interacting themes always contradict each other.',
              'A single theme is more complex than interacting themes.',
            ],
            correctAnswer:
              'Interacting themes develop in relationship to one another, creating layers of meaning that a single theme cannot achieve alone.',
            standardCode: '11-12.RL.2',
          },
          {
            question:
              'Explain how a specific structural choice in a text you have studied develops or complicates a central theme.',
            type: 'short-answer',
            correctAnswer:
              'A strong response identifies a specific text, names a structural choice (e.g., fragmented timeline, frame narrative, shifting point of view), explains the theme it develops, and provides textual evidence showing how the structure shapes the reader\'s understanding of that theme.',
            standardCode: '11-12.RL.5',
          },
          {
            question:
              'A student argues that flashbacks in a novel are used "for dramatic effect." What would make this analysis more rigorous?',
            type: 'short-answer',
            correctAnswer:
              'The student should specify which theme the flashbacks develop, provide evidence from the text showing how the disrupted chronology shapes the reader\'s understanding of that theme, and explain why the effect matters to the text\'s overall meaning.',
            standardCode: '11-12.RL.5',
          },
        ],
      },
    },
  },
  {
    slug: 'grade11-ela-extended-interpretation',
    title: 'Extended Literary Interpretation',
    description:
      'Develop sustained, evidence-based interpretations of literary texts by synthesizing close reading, contextual knowledge, and critical perspectives into multi-paragraph analytical arguments.',
    subject: 'ela',
    grade: 11,
    gradeBand: '9-12',
    topicCluster: 'Reading Literature',
    standardCodes: ['11-12.RL.1', '11-12.RL.3'],
    content: {
      intro: {
        title: 'Extended Literary Interpretation',
        text: 'Moving beyond paragraph-length responses, extended interpretation asks you to sustain an argument across multiple paragraphs or pages, integrating evidence from across a full text. This module teaches you to build layered claims, manage counter-interpretations, and use contextual knowledge — biographical, historical, cultural — to enrich your reading without reducing literature to a single explanation.',
        culturalHook:
          'Think about a book, film, or oral narrative that people in your community interpret in very different ways. What makes multiple interpretations possible?',
      },
      segments: [
        {
          index: 0,
          title: 'From Observation to Interpretive Claim',
          text: 'An extended interpretation begins with a genuine observation — something in the text that puzzles, surprises, or intrigues you. Transform that observation into an interpretive claim: a debatable statement about what the text means or how it achieves its effects. A strong claim is specific enough to argue and complex enough to sustain over several paragraphs.',
          keyVocabulary: ['interpretive claim', 'debatable thesis', 'textual observation'],
        },
        {
          index: 1,
          title: 'Layering Evidence and Analysis',
          text: 'Each body paragraph should advance your interpretation by introducing new evidence, analyzing it closely, and connecting it back to your thesis. Layer your evidence: combine quotations, paraphrases, and contextual details. After each piece of evidence, provide analysis that explains not just what the evidence says but why it matters to your argument.',
          keyVocabulary: ['layered evidence', 'close analysis', 'argumentative progression'],
          example:
            'A paragraph might quote a key passage, analyze its diction and imagery, then connect those findings to the historical context of Reconstruction to show how the author critiques post-war reconciliation narratives.',
        },
        {
          index: 2,
          title: 'Addressing Counter-Interpretations',
          text: 'A mature interpretation acknowledges that other readings are possible. Introduce a plausible counter-interpretation, explain the evidence that supports it, and then explain why your reading is more compelling or more fully supported. This move strengthens your argument by showing you have considered the text\'s complexity rather than oversimplifying it.',
          keyVocabulary: ['counter-interpretation', 'concession', 'rebuttal'],
        },
        {
          index: 3,
          title: 'Integrating Contextual Knowledge',
          text: 'Biographical, historical, and cultural contexts can deepen interpretation when used carefully. Context should illuminate the text, not replace it. Use contextual information to explain why an author might have made certain choices or how original audiences would have understood a passage, always tying the context back to specific textual evidence.',
          keyVocabulary: ['biographical context', 'historicist reading', 'cultural lens'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'What distinguishes an interpretive claim from a summary statement?',
          type: 'multiple-choice',
          options: [
            'An interpretive claim is debatable and argues what the text means; a summary statement restates what happens.',
            'An interpretive claim is shorter than a summary.',
            'A summary statement requires more evidence.',
            'There is no meaningful difference.',
          ],
          correctAnswer:
            'An interpretive claim is debatable and argues what the text means; a summary statement restates what happens.',
          hint: 'Think about whether someone could reasonably disagree with the statement.',
          explanation:
            'Interpretive claims propose a reading that must be supported with evidence and reasoning; summaries merely recount plot or content without arguing for a particular meaning.',
          standardCode: '11-12.RL.1',
        },
        {
          index: 1,
          question:
            'Why is it important to address counter-interpretations in an extended literary analysis?',
          type: 'short-answer',
          correctAnswer:
            'Addressing counter-interpretations demonstrates that you have considered the text\'s complexity, strengthens your own argument by showing why your reading is more compelling, and signals intellectual honesty to your reader.',
          hint: 'Think about what happens to an argument that ignores opposing views.',
          explanation:
            'Engaging with alternative readings shows analytical maturity and makes your own interpretation more persuasive by acknowledging and responding to the strongest challenges.',
          standardCode: '11-12.RL.1',
        },
        {
          index: 2,
          question:
            'A student writes: "The green light in The Great Gatsby represents hope." How could this observation become a stronger interpretive claim?',
          type: 'short-answer',
          correctAnswer:
            'The student could specify whose hope, how the symbol evolves, and what the text ultimately argues about that hope — for example: "Fitzgerald uses the green light to trace Gatsby\'s transformation of personal longing into an impossible idealism, ultimately arguing that the American Dream is sustained by illusion rather than possibility."',
          hint: 'Add specificity, stakes, and a sense of the author\'s purpose.',
          explanation:
            'Moving from identification ("represents hope") to interpretation (whose hope, how it changes, what the text argues about it) transforms a surface observation into a debatable, sustainable claim.',
          standardCode: '11-12.RL.1',
        },
        {
          index: 3,
          question:
            'When should contextual knowledge (historical, biographical) be used in literary interpretation?',
          type: 'multiple-choice',
          options: [
            'When it illuminates specific textual evidence and deepens understanding of the author\'s choices.',
            'Whenever you want to fill space in an essay.',
            'Only in the introduction.',
            'Only when the teacher assigns a historical lens.',
          ],
          correctAnswer:
            'When it illuminates specific textual evidence and deepens understanding of the author\'s choices.',
          hint: 'Context should serve the text, not replace it.',
          explanation:
            'Contextual knowledge is most effective when tied directly to textual evidence, helping explain why an author made certain choices or how audiences would have understood a passage.',
          standardCode: '11-12.RL.3',
        },
        {
          index: 4,
          question:
            'Describe how you would "layer" evidence in a body paragraph of an extended interpretation.',
          type: 'short-answer',
          correctAnswer:
            'Begin with a topic sentence that advances the thesis, introduce a quotation or paraphrase, analyze its language closely, add a contextual detail that deepens the reading, and then connect the combined evidence back to the overall argument.',
          hint: 'Think about combining different types of evidence and analysis in a single paragraph.',
          explanation:
            'Layering evidence means building a paragraph from multiple types of support — textual, analytical, and contextual — so that each layer adds depth and the paragraph as a whole moves the interpretation forward.',
          standardCode: '11-12.RL.1',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Which of the following is the strongest interpretive claim?',
            type: 'multiple-choice',
            options: [
              'Through the recurring motif of broken clocks, Morrison argues that trauma disrupts linear experience of time, forcing characters — and readers — to confront the past as a living presence.',
              'Morrison uses clocks in her novel.',
              'The novel is about time.',
              'Morrison\'s biography explains her interest in clocks.',
            ],
            correctAnswer:
              'Through the recurring motif of broken clocks, Morrison argues that trauma disrupts linear experience of time, forcing characters — and readers — to confront the past as a living presence.',
            standardCode: '11-12.RL.1',
          },
          {
            question:
              'Explain why an extended interpretation is stronger when it integrates both close reading and contextual knowledge.',
            type: 'short-answer',
            correctAnswer:
              'Close reading provides precise textual evidence, while contextual knowledge explains the conditions that shaped the text\'s creation and reception. Together they produce an interpretation that is both grounded in the text and enriched by the world beyond it, avoiding the pitfalls of either approach alone.',
            standardCode: '11-12.RL.3',
          },
          {
            question:
              'A peer\'s essay claims a novel is "about racism" but provides only plot summary. Write two sentences of feedback explaining what is missing.',
            type: 'short-answer',
            correctAnswer:
              'The essay needs a specific, debatable interpretive claim about how the novel addresses racism — not just that it does. It also needs close analysis of textual evidence (language, structure, characterization) that shows how the author develops that argument, rather than summarizing events.',
            standardCode: '11-12.RL.1',
          },
        ],
      },
    },
  },

  // ─── Reading Informational (3 modules) ──────────────────────────
  {
    slug: 'grade11-ela-integrating-complex-sources',
    title: 'Integrating Multiple Complex Sources',
    description:
      'Synthesize information from multiple complex informational texts — including primary sources, data sets, and expert analyses — to develop a coherent understanding of a topic or to solve a problem.',
    subject: 'ela',
    grade: 11,
    gradeBand: '9-12',
    topicCluster: 'Reading Informational',
    standardCodes: ['11-12.RI.7', '11-12.RI.1'],
    content: {
      intro: {
        title: 'Integrating Multiple Complex Sources',
        text: 'College and career success demands the ability to read across sources — government reports, scholarly articles, data visualizations, firsthand accounts — and weave them into a coherent understanding. This module teaches you to evaluate the credibility of each source, identify points of agreement and disagreement, and synthesize findings into an informed position.',
        culturalHook:
          'Think about a local issue your community faces. Whose voices and what kinds of evidence would you need to fully understand it?',
      },
      segments: [
        {
          index: 0,
          title: 'Assessing Source Credibility and Purpose',
          text: 'Before integrating sources, evaluate each one. Consider the author\'s credentials, the publication venue, the date, and the intended audience. Ask: What is this source\'s purpose — to inform, persuade, or advocate? Credibility does not mean neutrality; a well-sourced advocacy piece can be credible if its evidence is verifiable and its bias is transparent.',
          keyVocabulary: ['credibility', 'source evaluation', 'authorial purpose'],
        },
        {
          index: 1,
          title: 'Mapping Agreements and Conflicts',
          text: 'Create a synthesis matrix: list your sources as columns and key questions or subtopics as rows. Fill in each cell with a brief summary of what each source says about each subtopic. This reveals where sources agree, where they conflict, and where gaps remain. Conflicts between credible sources often signal complexity rather than error — explore why perspectives differ.',
          keyVocabulary: ['synthesis matrix', 'corroboration', 'conflicting evidence'],
          example:
            'Two studies might report different outcomes for the same policy. One uses national data; the other focuses on a rural county. The difference in scope explains the discrepancy and enriches your understanding.',
        },
        {
          index: 2,
          title: 'Writing a Source-Integrated Synthesis',
          text: 'A synthesis is organized by idea, not by source. Each paragraph addresses a subtopic and draws from multiple sources. Use attributive tags ("According to…", "The EPA report confirms…") to maintain clarity about which source supports which point. Your own analytical voice should frame and connect the sources rather than simply alternating between them.',
          keyVocabulary: ['synthesis', 'attributive tags', 'analytical voice'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'What is the first step before integrating multiple sources?',
          type: 'multiple-choice',
          options: [
            'Evaluate each source\'s credibility, purpose, and potential bias.',
            'Copy the longest quotation from each source.',
            'Choose the source you agree with most.',
            'Arrange sources alphabetically.',
          ],
          correctAnswer:
            'Evaluate each source\'s credibility, purpose, and potential bias.',
          hint: 'You need to know what you are working with before you combine information.',
          explanation:
            'Source evaluation ensures that you integrate reliable information and understand the perspective each source brings to the conversation.',
          standardCode: '11-12.RI.1',
        },
        {
          index: 1,
          question:
            'How does a synthesis matrix help you integrate sources?',
          type: 'short-answer',
          correctAnswer:
            'It organizes what each source says about each subtopic in a grid, revealing areas of agreement, conflict, and gaps so you can build a coherent, multi-source analysis.',
          hint: 'Think about how the matrix makes patterns visible across sources.',
          explanation:
            'A synthesis matrix transforms individual source notes into a comparative overview, making it easier to identify relationships among sources and organize your writing by idea rather than by source.',
          standardCode: '11-12.RI.7',
        },
        {
          index: 2,
          question:
            'Why should a synthesis be organized by idea rather than by source?',
          type: 'multiple-choice',
          options: [
            'Organizing by idea lets you show how sources relate to each other and builds a coherent argument.',
            'Organizing by source is always wrong.',
            'Ideas are shorter than sources.',
            'Teachers prefer shorter paragraphs.',
          ],
          correctAnswer:
            'Organizing by idea lets you show how sources relate to each other and builds a coherent argument.',
          hint: 'Consider what happens when you discuss one source at a time versus weaving them together.',
          explanation:
            'Idea-based organization allows you to place sources in conversation with one another, creating synthesis rather than a series of isolated summaries.',
          standardCode: '11-12.RI.7',
        },
        {
          index: 3,
          question:
            'Two credible studies reach different conclusions about a policy\'s effectiveness. What should you do?',
          type: 'short-answer',
          correctAnswer:
            'Investigate why the conclusions differ — differences in scope, methodology, population studied, or time frame — and explain the discrepancy in your synthesis rather than dismissing one source.',
          hint: 'Conflicting evidence is often a sign of complexity, not error.',
          explanation:
            'Exploring why credible sources disagree deepens your analysis and demonstrates sophisticated thinking about the complexity of real-world issues.',
          standardCode: '11-12.RI.1',
        },
        {
          index: 4,
          question:
            'What role do attributive tags play in a source-integrated synthesis?',
          type: 'short-answer',
          correctAnswer:
            'Attributive tags (e.g., "According to…", "The report finds…") clarify which source supports which point, maintaining transparency and helping the reader follow the writer\'s reasoning across multiple sources.',
          hint: 'Think about how the reader keeps track of where information comes from.',
          explanation:
            'Without attributive tags, readers cannot distinguish the writer\'s analysis from source material or tell which source supports a given claim, undermining the synthesis\'s credibility.',
          standardCode: '11-12.RI.7',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Which organizational strategy is most effective for a multi-source synthesis?',
            type: 'multiple-choice',
            options: [
              'Organize paragraphs by subtopic, drawing from multiple sources within each paragraph.',
              'Summarize each source in its own paragraph.',
              'List all sources in the introduction and discuss none in the body.',
              'Use only one source per paragraph to avoid confusion.',
            ],
            correctAnswer:
              'Organize paragraphs by subtopic, drawing from multiple sources within each paragraph.',
            standardCode: '11-12.RI.7',
          },
          {
            question:
              'Explain why evaluating source credibility is essential before synthesizing information from multiple texts.',
            type: 'short-answer',
            correctAnswer:
              'Without evaluating credibility, you risk building your synthesis on unreliable or biased information. Credibility assessment ensures that the evidence you integrate is verifiable and that you understand each source\'s perspective, leading to a more trustworthy and nuanced analysis.',
            standardCode: '11-12.RI.1',
          },
          {
            question:
              'Describe one situation in which conflicting sources can actually strengthen a synthesis rather than weaken it.',
            type: 'short-answer',
            correctAnswer:
              'When two credible sources disagree due to different methodologies or scopes, exploring the reason for the disagreement reveals complexity in the issue and demonstrates that the writer has engaged deeply with the evidence rather than cherry-picking a single perspective.',
            standardCode: '11-12.RI.7',
          },
        ],
      },
    },
  },
  {
    slug: 'grade11-ela-evaluating-claims-evidence',
    title: 'Evaluating Claims and Evidence',
    description:
      'Analyze the reasoning and evidence in complex informational texts, evaluating the validity and sufficiency of claims, the logic of arguments, and the relevance of supporting details.',
    subject: 'ela',
    grade: 11,
    gradeBand: '9-12',
    topicCluster: 'Reading Informational',
    standardCodes: ['11-12.RI.8', '11-12.RI.6'],
    content: {
      intro: {
        title: 'Evaluating Claims and Evidence',
        text: 'Informational texts make claims and support them — or fail to support them — with evidence and reasoning. As a critical reader, your job is to assess whether claims are valid, whether evidence is sufficient and relevant, and whether the reasoning connecting them is sound. This module equips you with tools to dissect arguments and identify logical strengths and weaknesses.',
        culturalHook:
          'Think about a time someone tried to convince you of something. What made you trust — or doubt — their argument?',
      },
      segments: [
        {
          index: 0,
          title: 'Identifying Claims, Evidence, and Reasoning',
          text: 'Every argument has three components: the claim (the position being argued), the evidence (facts, data, examples, or testimony supporting the claim), and the reasoning (the logical connection between evidence and claim). When reading, annotate each component separately. A text may contain multiple claims, each with its own supporting evidence and reasoning.',
          keyVocabulary: ['claim', 'evidence', 'reasoning', 'annotation'],
        },
        {
          index: 1,
          title: 'Testing Evidence for Sufficiency and Relevance',
          text: 'Sufficient evidence is enough to support the scope of the claim — a single anecdote cannot prove a sweeping generalization. Relevant evidence directly addresses the claim rather than a related but different point. Ask: Does this evidence actually prove what the author says it proves? Are there enough examples, data points, or expert sources to justify the conclusion?',
          keyVocabulary: ['sufficiency', 'relevance', 'generalization', 'anecdotal evidence'],
          example:
            'An editorial claims that a city\'s new recycling program is a failure, citing one resident\'s complaint. This is insufficient — one complaint does not represent the program\'s overall performance. Sufficient evidence might include participation data, waste-reduction statistics, and expert evaluation.',
        },
        {
          index: 2,
          title: 'Recognizing Logical Fallacies',
          text: 'Logical fallacies are errors in reasoning that undermine an argument. Common fallacies include false dilemma (presenting only two options when more exist), ad hominem (attacking the person rather than the argument), straw man (misrepresenting an opponent\'s position), and appeal to authority (citing an unqualified expert). Identifying fallacies helps you evaluate the strength of an argument and construct stronger arguments of your own.',
          keyVocabulary: ['logical fallacy', 'false dilemma', 'ad hominem', 'straw man'],
        },
        {
          index: 3,
          title: 'Evaluating Author\'s Point of View and Purpose',
          text: 'Every author writes from a particular point of view shaped by experience, expertise, and purpose. Evaluate how the author\'s perspective influences which evidence is included or omitted, how claims are framed, and what assumptions underlie the argument. A credible argument acknowledges its own limitations; a biased one disguises advocacy as objectivity.',
          keyVocabulary: ['point of view', 'bias', 'framing', 'assumptions'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'What are the three components of an argument?',
          type: 'multiple-choice',
          options: [
            'Claim, evidence, and reasoning.',
            'Introduction, body, and conclusion.',
            'Topic, detail, and summary.',
            'Thesis, antithesis, and synthesis.',
          ],
          correctAnswer: 'Claim, evidence, and reasoning.',
          hint: 'Think about what is being argued, what supports it, and how they connect.',
          explanation:
            'Every argument consists of a claim (the position), evidence (the support), and reasoning (the logical connection between them). Identifying all three is the foundation of critical evaluation.',
          standardCode: '11-12.RI.8',
        },
        {
          index: 1,
          question:
            'An editorial uses one resident\'s complaint to argue that a citywide program has failed. What is the problem with this evidence?',
          type: 'multiple-choice',
          options: [
            'It is insufficient — a single anecdote cannot support a claim about an entire program.',
            'It is too recent.',
            'Editorials should not use evidence.',
            'Resident complaints are never valid evidence.',
          ],
          correctAnswer:
            'It is insufficient — a single anecdote cannot support a claim about an entire program.',
          hint: 'Think about the scope of the claim versus the scope of the evidence.',
          explanation:
            'A sweeping claim about a citywide program requires broad evidence — participation data, statistical outcomes, expert analysis — not a single personal account.',
          standardCode: '11-12.RI.8',
        },
        {
          index: 2,
          question:
            'A writer argues: "Either we ban all cars from downtown or the pollution problem will never be solved." What logical fallacy is this?',
          type: 'short-answer',
          correctAnswer:
            'This is a false dilemma (also called a false dichotomy) because it presents only two extreme options — banning all cars or accepting unsolvable pollution — while ignoring alternatives like improved public transit, electric vehicle incentives, or congestion pricing.',
          hint: 'Are there really only two options?',
          explanation:
            'A false dilemma oversimplifies a complex issue by presenting only two choices. Recognizing this fallacy reveals that the argument ignores a range of viable alternatives.',
          standardCode: '11-12.RI.8',
        },
        {
          index: 3,
          question:
            'How does an author\'s point of view influence the evidence they include in an argument?',
          type: 'short-answer',
          correctAnswer:
            'An author\'s point of view shapes which evidence is selected, emphasized, or omitted. A writer advocating for a policy may highlight favorable data and downplay contrary findings, while a neutral analyst may present a broader range of evidence. Recognizing this influence helps readers assess whether the argument is balanced or one-sided.',
          hint: 'Think about what an author might choose to include versus leave out, and why.',
          explanation:
            'Point of view acts as a filter on evidence selection. Critical readers must consider what perspective drives the argument and whether important evidence has been excluded.',
          standardCode: '11-12.RI.6',
        },
        {
          index: 4,
          question:
            'What distinguishes relevant evidence from irrelevant evidence?',
          type: 'multiple-choice',
          options: [
            'Relevant evidence directly addresses the specific claim being made; irrelevant evidence addresses a related but different point.',
            'Relevant evidence is longer.',
            'Irrelevant evidence comes from experts.',
            'All evidence is equally relevant.',
          ],
          correctAnswer:
            'Relevant evidence directly addresses the specific claim being made; irrelevant evidence addresses a related but different point.',
          hint: 'Does the evidence prove this claim, or some other claim?',
          explanation:
            'Evidence must match the claim it supports. Even strong evidence is irrelevant if it proves a different point than the one the author is arguing.',
          standardCode: '11-12.RI.8',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'An author claims that standardized testing improves student achievement and cites one school\'s rising scores. Evaluate the sufficiency of this evidence.',
            type: 'short-answer',
            correctAnswer:
              'The evidence is insufficient because one school\'s results cannot support a claim about standardized testing\'s effect on student achievement broadly. Sufficient evidence would require data from many schools, controlled studies, and consideration of other variables that could explain the score increase.',
            standardCode: '11-12.RI.8',
          },
          {
            question:
              'Which of the following is an example of a straw man fallacy?',
            type: 'multiple-choice',
            options: [
              'Misrepresenting an opponent\'s position to make it easier to attack.',
              'Citing an unqualified expert.',
              'Using emotional language.',
              'Presenting two options as the only possibilities.',
            ],
            correctAnswer:
              'Misrepresenting an opponent\'s position to make it easier to attack.',
            standardCode: '11-12.RI.8',
          },
          {
            question:
              'Explain how recognizing an author\'s purpose helps you evaluate the strength of their argument.',
            type: 'short-answer',
            correctAnswer:
              'Knowing whether an author intends to inform, persuade, or advocate helps you anticipate potential bias in evidence selection and framing. An argument designed to persuade may omit contrary evidence, while one designed to inform may present a more balanced view. This awareness allows you to read more critically and seek additional sources to fill gaps.',
            standardCode: '11-12.RI.6',
          },
        ],
      },
    },
  },
  {
    slug: 'grade11-ela-foundational-documents',
    title: 'Analyzing Foundational U.S. Documents',
    description:
      'Analyze foundational U.S. documents of historical and literary significance — including the Constitution, the Bill of Rights, and landmark Supreme Court opinions — for their themes, purposes, and rhetorical features.',
    subject: 'ela',
    grade: 11,
    gradeBand: '9-12',
    topicCluster: 'Reading Informational',
    standardCodes: ['11-12.RI.9', '11-12.RI.4'],
    content: {
      intro: {
        title: 'Analyzing Foundational U.S. Documents',
        text: 'Foundational documents like the Constitution, the Federalist Papers, and landmark Supreme Court opinions are not just historical artifacts — they are living texts whose language continues to shape law, policy, and public debate. In this module you will analyze these documents for their rhetorical strategies, key terms, and enduring themes, and you will evaluate how later documents respond to and reinterpret earlier ones.',
        culturalHook:
          'Consider a law, right, or policy that directly affects your community. Can you trace it back to language in a foundational document?',
      },
      segments: [
        {
          index: 0,
          title: 'Reading Legal and Political Prose',
          text: 'Foundational documents use precise legal and political language. Words like "establish," "ordain," "due process," and "equal protection" carry specific legal meanings that differ from everyday usage. When reading these texts, define key terms in context, identify the document\'s stated purpose, and note how the author builds the argument clause by clause.',
          keyVocabulary: ['legal language', 'due process', 'equal protection', 'preamble'],
        },
        {
          index: 1,
          title: 'Rhetorical Strategies in Foundational Texts',
          text: 'Foundational documents employ deliberate rhetorical strategies. The Declaration of Independence uses parallelism and accumulation in its list of grievances. The Federalist Papers use logical argumentation and concession to persuade skeptics. Identify the audience, purpose, and occasion for each document, then analyze how the author\'s choices serve those rhetorical goals.',
          keyVocabulary: ['parallelism', 'accumulation', 'concession', 'rhetorical purpose'],
          example:
            'In Federalist No. 10, Madison concedes that factions are inevitable — a move that disarms critics — before arguing that a large republic can control their effects. The concession strengthens his persuasive appeal.',
        },
        {
          index: 2,
          title: 'Tracing Themes Across Foundational Documents',
          text: 'Key themes — liberty, equality, the balance of power, individual rights versus collective welfare — recur across foundational texts. Later documents often reinterpret earlier ones: the Fourteenth Amendment redefines citizenship in response to the original Constitution\'s silences. Trace these thematic threads to understand how the nation\'s founding ideas have been contested, expanded, and redefined.',
          keyVocabulary: ['thematic continuity', 'reinterpretation', 'amendment'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'Why is it important to define key terms in context when reading foundational documents?',
          type: 'multiple-choice',
          options: [
            'Legal and political terms carry specific meanings that differ from everyday usage, and misreading them changes the document\'s meaning.',
            'All words in foundational documents are archaic and no longer used.',
            'Defining terms is only necessary for non-English documents.',
            'Key terms are always defined in footnotes.',
          ],
          correctAnswer:
            'Legal and political terms carry specific meanings that differ from everyday usage, and misreading them changes the document\'s meaning.',
          hint: 'Think about words like "due process" — would you use that phrase casually?',
          explanation:
            'Legal precision is central to foundational documents. Misunderstanding a term like "establishment" or "equal protection" can lead to a fundamentally different reading of the document\'s intent and scope.',
          standardCode: '11-12.RI.4',
        },
        {
          index: 1,
          question:
            'How does Madison\'s use of concession in Federalist No. 10 strengthen his argument?',
          type: 'short-answer',
          correctAnswer:
            'By conceding that factions are inevitable, Madison acknowledges his opponents\' concern and avoids appearing naive. This builds credibility and allows him to redirect the argument toward his proposed solution — a large republic — which his audience is now more willing to consider.',
          hint: 'What happens when a writer agrees with part of the opposition\'s point?',
          explanation:
            'Concession is a powerful rhetorical move that builds ethos and disarms objections, making the audience more receptive to the writer\'s central claim.',
          standardCode: '11-12.RI.9',
        },
        {
          index: 2,
          question:
            'Which rhetorical strategy does the Declaration of Independence use in its list of grievances?',
          type: 'multiple-choice',
          options: [
            'Parallelism and accumulation — repeating a grammatical structure to build the weight of evidence.',
            'Understatement — minimizing the grievances to appear reasonable.',
            'Humor — using irony to mock the king.',
            'Stream of consciousness — listing grievances in random order.',
          ],
          correctAnswer:
            'Parallelism and accumulation — repeating a grammatical structure to build the weight of evidence.',
          hint: 'Notice how each grievance begins with a similar structure.',
          explanation:
            'The repeated "He has…" structure creates parallelism, and the sheer number of grievances creates accumulation, together producing an overwhelming case for independence.',
          standardCode: '11-12.RI.9',
        },
        {
          index: 3,
          question:
            'How does the Fourteenth Amendment reinterpret the original Constitution\'s concept of citizenship?',
          type: 'short-answer',
          correctAnswer:
            'The Fourteenth Amendment explicitly defines citizenship to include all persons born or naturalized in the United States, directly addressing the original Constitution\'s failure to define citizenship and its implicit exclusion of enslaved people. It extends equal protection under the law to all citizens, redefining the scope of constitutional rights.',
          hint: 'Think about who was and was not considered a citizen under the original text.',
          explanation:
            'The Fourteenth Amendment is a landmark example of how later foundational documents reinterpret and expand upon earlier ones, reshaping the nation\'s legal framework in response to historical injustice.',
          standardCode: '11-12.RI.9',
        },
        {
          index: 4,
          question:
            'What is the purpose of tracing themes across multiple foundational documents?',
          type: 'multiple-choice',
          options: [
            'It reveals how the nation\'s founding ideas have been contested, expanded, and redefined over time.',
            'It proves that all foundational documents say the same thing.',
            'It is required only for history classes, not ELA.',
            'It shows that earlier documents are always superior.',
          ],
          correctAnswer:
            'It reveals how the nation\'s founding ideas have been contested, expanded, and redefined over time.',
          hint: 'Think about how ideas like "equality" mean different things in different eras.',
          explanation:
            'Tracing themes across documents shows that foundational ideas are living and evolving. Each new document responds to earlier ones, reflecting changing values, new struggles, and expanding definitions of rights.',
          standardCode: '11-12.RI.9',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Explain how the rhetorical strategies of the Declaration of Independence serve its purpose of justifying independence to a global audience.',
            type: 'short-answer',
            correctAnswer:
              'The Declaration uses logical structure (moving from universal principles to specific grievances to a formal declaration), parallelism (the repeated "He has…" list), and an appeal to natural rights philosophy to build an airtight case. These strategies address a global audience by grounding the argument in Enlightenment principles that transcend local politics.',
            standardCode: '11-12.RI.9',
          },
          {
            question:
              'Which of the following best describes the relationship between the Bill of Rights and the original Constitution?',
            type: 'multiple-choice',
            options: [
              'The Bill of Rights explicitly guarantees individual liberties that the original Constitution addressed primarily through structural design and limited government.',
              'The Bill of Rights replaces the original Constitution.',
              'The original Constitution already listed all individual rights.',
              'The Bill of Rights applies only to state governments.',
            ],
            correctAnswer:
              'The Bill of Rights explicitly guarantees individual liberties that the original Constitution addressed primarily through structural design and limited government.',
            standardCode: '11-12.RI.9',
          },
          {
            question:
              'Define "equal protection" as used in the Fourteenth Amendment and explain why precise understanding of this term matters for interpreting the document.',
            type: 'short-answer',
            correctAnswer:
              '"Equal protection" means that no state shall deny any person within its jurisdiction the same legal protections afforded to others. Precise understanding matters because the term\'s interpretation determines the scope of civil rights — courts have used it to strike down segregation, protect voting rights, and extend anti-discrimination protections.',
            standardCode: '11-12.RI.4',
          },
        ],
      },
    },
  },

  // ─── Writing (3 modules) ────────────────────────────────────────
  {
    slug: 'grade11-ela-college-ready-argument',
    title: 'College-Ready Argument Essays',
    description:
      'Write sustained, well-structured argument essays that present a clear claim, develop it with valid reasoning and relevant evidence, address counterclaims fairly, and maintain a formal style appropriate for academic audiences.',
    subject: 'ela',
    grade: 11,
    gradeBand: '9-12',
    topicCluster: 'Writing',
    standardCodes: ['11-12.W.1', '11-12.W.1a', '11-12.W.1b'],
    content: {
      intro: {
        title: 'College-Ready Argument Essays',
        text: 'A college-ready argument essay does more than state an opinion — it enters an ongoing conversation, positions itself among existing viewpoints, and advances a claim through rigorous evidence and reasoning. This module walks you through crafting thesis statements that stake out a defensible position, building body paragraphs that balance evidence with analysis, and integrating counterclaims to strengthen rather than weaken your argument.',
        culturalHook:
          'Think about a debate in your school or community where people hold strong, opposing views. What would it take to write an argument that even your opponents would respect?',
      },
      segments: [
        {
          index: 0,
          title: 'Crafting a Defensible Thesis',
          text: 'A defensible thesis takes a specific, arguable position on a complex issue. Avoid thesis statements that are purely factual (no argument needed) or purely opinion-based (no evidence possible). A strong thesis names your position, hints at your reasoning, and acknowledges complexity. Test your thesis: if a thoughtful person could reasonably disagree, it is arguable.',
          keyVocabulary: ['defensible thesis', 'arguable claim', 'complexity'],
        },
        {
          index: 1,
          title: 'Evidence, Reasoning, and Analysis',
          text: 'Each body paragraph should follow a structure: claim → evidence → analysis → connection to thesis. Evidence can include quotations, data, historical examples, or expert testimony. Reasoning is the logical bridge that explains why the evidence supports the claim. Analysis goes further, exploring implications, nuances, or limitations of the evidence. Never let evidence speak for itself — always explain its significance.',
          keyVocabulary: ['evidence integration', 'logical reasoning', 'analytical depth'],
          example:
            'Claim: Access to high-speed internet should be classified as a public utility. Evidence: A Pew Research study found that 35% of rural households lack broadband access, limiting educational and economic opportunity. Analysis: Because internet connectivity now functions as infrastructure essential to participation in modern civic and economic life — much like electricity in the 1930s — treating it as a luxury rather than a utility deepens existing inequities.',
        },
        {
          index: 2,
          title: 'Integrating Counterclaims',
          text: 'A college-ready argument anticipates and addresses opposing viewpoints. Introduce the counterclaim fairly — do not create a straw man. Acknowledge what is valid in the opposing position, then explain why your claim is more compelling, better supported, or more complete. This move demonstrates intellectual maturity and strengthens your credibility.',
          keyVocabulary: ['counterclaim', 'concession and rebuttal', 'intellectual honesty'],
        },
        {
          index: 3,
          title: 'Style, Tone, and Formal Register',
          text: 'Academic argument demands a formal register: precise vocabulary, varied sentence structures, and an objective tone that conveys confidence without arrogance. Avoid first-person hedging ("I think maybe…") and inflammatory language. Instead, let your evidence and reasoning carry the persuasive weight. Transitions like "moreover," "however," and "consequently" signal logical relationships between ideas.',
          keyVocabulary: ['formal register', 'academic tone', 'transitional language'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'Which of the following is a defensible thesis for an argument essay?',
          type: 'multiple-choice',
          options: [
            'While social media platforms have expanded access to information, their algorithmic design prioritizes engagement over accuracy, making federal regulation of content-recommendation algorithms a necessary safeguard for democratic discourse.',
            'Social media is bad.',
            'Many people use social media every day.',
            'Social media was invented in the early 2000s.',
          ],
          correctAnswer:
            'While social media platforms have expanded access to information, their algorithmic design prioritizes engagement over accuracy, making federal regulation of content-recommendation algorithms a necessary safeguard for democratic discourse.',
          hint: 'A defensible thesis is specific, arguable, and acknowledges complexity.',
          explanation:
            'This thesis takes a specific position (regulation is necessary), acknowledges a counterpoint (expanded access), and provides reasoning (engagement over accuracy), making it both arguable and complex enough to sustain an essay.',
          standardCode: '11-12.W.1a',
        },
        {
          index: 1,
          question:
            'Why should a writer never let evidence "speak for itself"?',
          type: 'short-answer',
          correctAnswer:
            'Evidence requires analysis to show the reader how and why it supports the claim. Without explanation, readers may interpret the evidence differently or miss its relevance to the argument. The writer\'s reasoning is what transforms raw evidence into a persuasive point.',
          hint: 'Think about what happens when a reader encounters a quotation with no explanation.',
          explanation:
            'Unanalyzed evidence leaves the interpretive work to the reader, who may not draw the same conclusion the writer intends. Analysis ensures the evidence advances the argument.',
          standardCode: '11-12.W.1b',
        },
        {
          index: 2,
          question:
            'What is the difference between a concession and a rebuttal?',
          type: 'multiple-choice',
          options: [
            'A concession acknowledges what is valid in the opposing view; a rebuttal explains why your claim is still more compelling.',
            'A concession surrenders your argument; a rebuttal attacks the opponent personally.',
            'A concession is the introduction; a rebuttal is the conclusion.',
            'They are the same thing.',
          ],
          correctAnswer:
            'A concession acknowledges what is valid in the opposing view; a rebuttal explains why your claim is still more compelling.',
          hint: 'Think about agreeing with part of the other side before redirecting.',
          explanation:
            'Concession and rebuttal work together: the concession shows fairness and intellectual honesty, while the rebuttal reasserts the strength of your own position.',
          standardCode: '11-12.W.1b',
        },
        {
          index: 3,
          question:
            'Rewrite the following sentence in a formal academic register: "I think maybe schools should probably do something about cyberbullying because it\'s really bad."',
          type: 'short-answer',
          correctAnswer:
            'Schools must implement comprehensive anti-cyberbullying policies because the psychological harm caused by online harassment has been shown to impair academic performance and long-term mental health.',
          hint: 'Remove hedging, replace vague language with precise terms, and cite a reason.',
          explanation:
            'Formal academic register replaces hedging ("I think maybe") with direct assertion, vague language ("really bad") with precise claims, and casual phrasing with vocabulary appropriate for scholarly discourse.',
          standardCode: '11-12.W.1',
        },
        {
          index: 4,
          question:
            'Why does integrating counterclaims strengthen rather than weaken an argument?',
          type: 'short-answer',
          correctAnswer:
            'Integrating counterclaims shows that the writer has considered the issue from multiple angles and can still defend their position. It builds credibility, demonstrates intellectual maturity, and preemptively addresses readers\' potential objections, making the overall argument more persuasive.',
          hint: 'Consider what a reader thinks when a writer ignores the other side entirely.',
          explanation:
            'Readers trust writers who engage honestly with opposition. Ignoring counterclaims suggests the writer is either unaware of complexity or unable to defend their position against it.',
          standardCode: '11-12.W.1b',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'A student\'s thesis reads: "Homework is important." Revise this into a defensible, college-ready thesis statement.',
            type: 'short-answer',
            correctAnswer:
              'A strong revision specifies the claim and reasoning — for example: "While excessive homework can diminish student well-being, structured, purposeful assignments that reinforce classroom learning remain essential for developing independent study skills needed for college success."',
            standardCode: '11-12.W.1a',
          },
          {
            question:
              'Which of the following best describes the role of reasoning in an argument paragraph?',
            type: 'multiple-choice',
            options: [
              'Reasoning explains the logical connection between the evidence and the claim, showing why the evidence matters.',
              'Reasoning is the same as the evidence itself.',
              'Reasoning appears only in the conclusion.',
              'Reasoning is optional in a strong argument.',
            ],
            correctAnswer:
              'Reasoning explains the logical connection between the evidence and the claim, showing why the evidence matters.',
            standardCode: '11-12.W.1b',
          },
          {
            question:
              'Explain why a college-ready argument essay should maintain a formal register rather than a conversational tone.',
            type: 'short-answer',
            correctAnswer:
              'A formal register signals to the academic audience that the writer takes the subject seriously and can engage with complex ideas using precise language. It ensures that the argument\'s persuasive power comes from evidence and reasoning rather than emotional appeal or casual assertion, which academic readers expect.',
            standardCode: '11-12.W.1',
          },
        ],
      },
    },
  },
  {
    slug: 'grade11-ela-extended-research',
    title: 'Extended Research Projects',
    description:
      'Conduct sustained research to investigate a self-generated question, synthesize multiple authoritative sources, and present findings in a well-organized research paper that demonstrates command of the topic and proper citation practices.',
    subject: 'ela',
    grade: 11,
    gradeBand: '9-12',
    topicCluster: 'Writing',
    standardCodes: ['11-12.W.7', '11-12.W.8'],
    content: {
      intro: {
        title: 'Extended Research Projects',
        text: 'An extended research project goes far beyond a simple report. It begins with a genuine inquiry question, requires sustained investigation across multiple source types, and culminates in a paper that synthesizes findings into an original argument or analysis. This module guides you through every phase — from formulating a research question to presenting polished findings — preparing you for the kind of independent research expected in college.',
        culturalHook:
          'Think about a question affecting your community that cannot be answered with a single Google search. What sources and perspectives would you need to investigate it fully?',
      },
      segments: [
        {
          index: 0,
          title: 'Formulating a Research Question',
          text: 'A strong research question is specific enough to investigate thoroughly but open enough to allow discovery. Avoid yes/no questions and questions with predetermined answers. Instead, ask "how" or "why" questions that require analysis. Refine your question as you research — initial reading often reveals that your original question is too broad, too narrow, or needs reframing.',
          keyVocabulary: ['research question', 'inquiry', 'scope refinement'],
        },
        {
          index: 1,
          title: 'Finding and Evaluating Authoritative Sources',
          text: 'Extended research requires diverse, authoritative sources: peer-reviewed articles, primary documents, government data, expert interviews, and reputable journalism. Evaluate each source for credibility, currency, relevance, and potential bias. Use databases like JSTOR, Google Scholar, and government repositories. Keep a running annotated bibliography that notes each source\'s key findings and relevance to your question.',
          keyVocabulary: ['authoritative sources', 'annotated bibliography', 'peer-reviewed'],
          example:
            'For a research question about water quality in rural communities, you might consult EPA data, a peer-reviewed environmental science study, a local newspaper investigation, and interviews with community members — each offering a different type of evidence.',
        },
        {
          index: 2,
          title: 'Synthesizing Sources into an Original Argument',
          text: 'A research paper is not a summary of sources — it is your argument informed by sources. Organize your paper around your thesis and supporting claims, integrating evidence from multiple sources within each section. Use your own analytical voice to connect sources, identify patterns, explain contradictions, and draw conclusions. Proper citation (MLA, APA, or Chicago) gives credit and allows readers to verify your evidence.',
          keyVocabulary: ['synthesis', 'original argument', 'citation practices'],
        },
        {
          index: 3,
          title: 'Revision and Presentation',
          text: 'Extended research papers require multiple drafts. In revision, check that every claim is supported by evidence, every source is properly cited, and the paper\'s organization guides the reader logically from introduction through analysis to conclusion. Seek feedback from peers or mentors. The final product should demonstrate not just knowledge of the topic but mastery of the research process itself.',
          keyVocabulary: ['revision', 'peer feedback', 'research process'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'Which of the following is the strongest research question?',
          type: 'multiple-choice',
          options: [
            'How has the decline of local newspapers affected civic engagement in rural communities over the past two decades?',
            'Are newspapers important?',
            'When was the first newspaper published?',
            'Do people read news online?',
          ],
          correctAnswer:
            'How has the decline of local newspapers affected civic engagement in rural communities over the past two decades?',
          hint: 'Look for a question that is specific, analytical, and requires sustained investigation.',
          explanation:
            'This question is specific (local newspapers, rural communities, two decades), analytical (asks "how" an effect occurs), and requires multiple types of evidence to answer thoroughly.',
          standardCode: '11-12.W.7',
        },
        {
          index: 1,
          question:
            'Why is an annotated bibliography useful during the research process?',
          type: 'short-answer',
          correctAnswer:
            'An annotated bibliography tracks each source\'s key findings, credibility, and relevance to the research question. It helps the researcher organize information, identify gaps in evidence, and make informed decisions about which sources to include in the final paper.',
          hint: 'Think about what happens when you have dozens of sources and need to remember what each one contributes.',
          explanation:
            'Annotated bibliographies serve as both an organizational tool and a critical thinking exercise, requiring the researcher to evaluate each source\'s contribution before integrating it into the paper.',
          standardCode: '11-12.W.8',
        },
        {
          index: 2,
          question:
            'What is the difference between a research paper and a source summary?',
          type: 'multiple-choice',
          options: [
            'A research paper presents the writer\'s original argument informed by sources; a source summary merely reports what sources say.',
            'A research paper is longer.',
            'A source summary uses citations; a research paper does not.',
            'There is no meaningful difference.',
          ],
          correctAnswer:
            'A research paper presents the writer\'s original argument informed by sources; a source summary merely reports what sources say.',
          hint: 'Who is doing the thinking — the writer or the sources?',
          explanation:
            'In a research paper, the writer\'s analytical voice drives the argument and sources serve as evidence. In a summary, the sources drive the content and the writer\'s voice is absent.',
          standardCode: '11-12.W.7',
        },
        {
          index: 3,
          question:
            'Why might you need to refine your research question during the research process?',
          type: 'short-answer',
          correctAnswer:
            'Initial reading often reveals that the original question is too broad to investigate thoroughly, too narrow to find sufficient sources, or based on an assumption that the evidence does not support. Refining the question allows the researcher to focus on what the evidence actually reveals.',
          hint: 'Think about what happens when your reading surprises you.',
          explanation:
            'Research is an iterative process. A willingness to refine the question based on emerging evidence is a sign of intellectual maturity and leads to a stronger, more focused paper.',
          standardCode: '11-12.W.7',
        },
        {
          index: 4,
          question:
            'Why is proper citation essential in a research paper?',
          type: 'multiple-choice',
          options: [
            'It gives credit to original authors, allows readers to verify evidence, and demonstrates academic integrity.',
            'It makes the paper look longer.',
            'It is required only in college, not high school.',
            'It replaces the need for analysis.',
          ],
          correctAnswer:
            'It gives credit to original authors, allows readers to verify evidence, and demonstrates academic integrity.',
          hint: 'Think about trust, verification, and intellectual honesty.',
          explanation:
            'Citation practices are foundational to academic integrity. They protect against plagiarism, enable readers to evaluate the evidence independently, and position the writer as a trustworthy participant in scholarly conversation.',
          standardCode: '11-12.W.8',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'A student\'s research question is "Is climate change real?" Explain why this question is weak for an extended research project and propose a stronger alternative.',
            type: 'short-answer',
            correctAnswer:
              'The question is weak because the scientific consensus already answers it — there is no genuine inquiry. A stronger question would investigate a specific aspect, such as: "How have rising sea levels affected infrastructure planning in coastal communities in the southeastern United States since 2010?" This question is specific, requires analysis, and invites sustained investigation.',
            standardCode: '11-12.W.7',
          },
          {
            question:
              'Which of the following source types would be most appropriate for an extended research paper on the economic impact of automation?',
            type: 'multiple-choice',
            options: [
              'A peer-reviewed economics journal article, Bureau of Labor Statistics data, and an industry white paper.',
              'A single Wikipedia article.',
              'A social media post from a technology CEO.',
              'An encyclopedia entry written for middle school students.',
            ],
            correctAnswer:
              'A peer-reviewed economics journal article, Bureau of Labor Statistics data, and an industry white paper.',
            standardCode: '11-12.W.8',
          },
          {
            question:
              'Explain the role of the writer\'s analytical voice in a research paper and why it matters.',
            type: 'short-answer',
            correctAnswer:
              'The writer\'s analytical voice connects sources, identifies patterns, explains contradictions, and draws conclusions — it is what transforms a collection of source summaries into an original argument. Without it, the paper lacks a thesis and reads as a report rather than an analysis.',
            standardCode: '11-12.W.7',
          },
        ],
      },
    },
  },
  {
    slug: 'grade11-ela-revision-strategies',
    title: 'Revision Strategies for Polished Writing',
    description:
      'Apply advanced revision strategies — including structural reorganization, sentence-level editing for clarity and style, and feedback integration — to produce polished, publication-ready writing across genres.',
    subject: 'ela',
    grade: 11,
    gradeBand: '9-12',
    topicCluster: 'Writing',
    standardCodes: ['11-12.W.5', '11-12.W.4'],
    content: {
      intro: {
        title: 'Revision Strategies for Polished Writing',
        text: 'Revision is where good writing becomes great writing. It is not proofreading — it is rethinking, restructuring, and refining your ideas and their expression. This module teaches you to approach revision at three levels: global (organization and argument), paragraph (coherence and development), and sentence (clarity, style, and precision). You will also learn how to give and receive feedback productively.',
        culturalHook:
          'Think about a craft in your community — woodworking, quilting, cooking — where the finished product looks very different from the first attempt. Writing works the same way.',
      },
      segments: [
        {
          index: 0,
          title: 'Global Revision: Structure and Argument',
          text: 'Begin revision at the global level. Read your draft from start to finish and ask: Does my thesis still hold after everything I have written? Does each section advance the argument or introduce tangential material? Is the order of paragraphs logical? Create a reverse outline — summarize each paragraph in one sentence — to see the structure clearly. Move, merge, or delete sections as needed.',
          keyVocabulary: ['global revision', 'reverse outline', 'structural coherence'],
        },
        {
          index: 1,
          title: 'Paragraph-Level Revision: Coherence and Development',
          text: 'Each paragraph should have a clear topic sentence, sufficient evidence and analysis, and a closing sentence that connects to the next paragraph or back to the thesis. Check for coherence: do sentences within the paragraph follow a logical order? Are transitions smooth? Check for development: is there enough analysis, or does the paragraph rely too heavily on summary or quotation?',
          keyVocabulary: ['topic sentence', 'coherence', 'paragraph development'],
          example:
            'A paragraph that quotes three sources but analyzes none of them is underdeveloped. Add analysis after each quotation to explain its significance and connection to your argument.',
        },
        {
          index: 2,
          title: 'Sentence-Level Revision: Clarity, Style, and Precision',
          text: 'At the sentence level, revise for clarity (is each sentence easy to understand on first reading?), variety (do you mix short and long sentences?), precision (is every word doing necessary work?), and style (do your sentences reflect the tone appropriate to your audience and purpose?). Read aloud to catch awkward phrasing, unnecessary repetition, and rhythmic monotony.',
          keyVocabulary: ['sentence clarity', 'word precision', 'stylistic variety'],
        },
        {
          index: 3,
          title: 'Giving and Receiving Feedback',
          text: 'Productive feedback is specific, kind, and actionable. When giving feedback, point to specific passages and explain what is working and what could be improved. When receiving feedback, listen without defending your draft, ask clarifying questions, and make deliberate choices about which suggestions to accept. Feedback is a tool for growth, not a judgment of worth.',
          keyVocabulary: ['peer feedback', 'constructive criticism', 'revision plan'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'What is a reverse outline, and how does it help with global revision?',
          type: 'short-answer',
          correctAnswer:
            'A reverse outline summarizes each paragraph of a completed draft in one sentence, revealing the paper\'s actual structure. It helps the writer see whether the argument progresses logically, whether any sections are tangential, and where reorganization is needed.',
          hint: 'Think about creating an outline after writing rather than before.',
          explanation:
            'A reverse outline is a diagnostic tool that makes the draft\'s structure visible, allowing the writer to evaluate and improve organization at the global level.',
          standardCode: '11-12.W.5',
        },
        {
          index: 1,
          question:
            'Which level of revision should you begin with, and why?',
          type: 'multiple-choice',
          options: [
            'Global revision — because fixing structure and argument first prevents wasted effort on sentences that may be cut.',
            'Sentence-level — because spelling errors are most noticeable.',
            'Paragraph-level — because topic sentences come first.',
            'It does not matter what order you revise in.',
          ],
          correctAnswer:
            'Global revision — because fixing structure and argument first prevents wasted effort on sentences that may be cut.',
          hint: 'Why would you polish a sentence that might be deleted?',
          explanation:
            'Starting with global revision ensures that the overall argument and structure are sound before investing time in paragraph and sentence refinement. Revising in the wrong order can waste effort.',
          standardCode: '11-12.W.5',
        },
        {
          index: 2,
          question:
            'A paragraph quotes three sources but provides no analysis. What revision is needed?',
          type: 'short-answer',
          correctAnswer:
            'After each quotation, add analysis that explains the quotation\'s significance and connects it to the paragraph\'s claim and the paper\'s thesis. The paragraph needs the writer\'s interpretive voice, not just source material.',
          hint: 'What is missing between the evidence and the argument?',
          explanation:
            'Quotations without analysis are underdeveloped evidence. The writer must explain why each quotation matters and how it supports the argument to create a fully developed paragraph.',
          standardCode: '11-12.W.4',
        },
        {
          index: 3,
          question:
            'Why is reading your draft aloud an effective sentence-level revision strategy?',
          type: 'multiple-choice',
          options: [
            'It helps you catch awkward phrasing, monotonous rhythm, and unclear sentences that your eye might skip over.',
            'It makes the revision process take longer.',
            'Teachers require it.',
            'It replaces the need for peer feedback.',
          ],
          correctAnswer:
            'It helps you catch awkward phrasing, monotonous rhythm, and unclear sentences that your eye might skip over.',
          hint: 'Your ear catches things your eye misses.',
          explanation:
            'Reading aloud engages a different sensory channel, making it easier to detect problems with rhythm, clarity, and flow that are invisible when reading silently.',
          standardCode: '11-12.W.4',
        },
        {
          index: 4,
          question:
            'What makes feedback "actionable"?',
          type: 'short-answer',
          correctAnswer:
            'Actionable feedback points to a specific passage, explains what is or is not working, and suggests a concrete step the writer can take to improve it — for example: "Your third paragraph introduces a new claim without evidence. Add a quotation from one of your sources and explain how it supports the point."',
          hint: 'Think about the difference between "this is confusing" and "this paragraph needs a topic sentence."',
          explanation:
            'Actionable feedback gives the writer a clear path forward. Vague comments like "good job" or "needs work" do not help the writer know what to change or how.',
          standardCode: '11-12.W.5',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Explain the three levels of revision and why the order matters.',
            type: 'short-answer',
            correctAnswer:
              'The three levels are global (structure and argument), paragraph (coherence and development), and sentence (clarity and style). The order matters because global changes — like removing or reorganizing sections — can render sentence-level edits moot. Revising from large to small ensures that effort is invested in content that will remain in the final draft.',
            standardCode: '11-12.W.5',
          },
          {
            question:
              'Which of the following is the most effective piece of peer feedback?',
            type: 'multiple-choice',
            options: [
              '"Your second paragraph makes a strong claim but drops the evidence without explaining how it supports your thesis. Try adding two sentences of analysis after the quotation."',
              '"Good essay!"',
              '"I disagree with your opinion."',
              '"You need to fix everything."',
            ],
            correctAnswer:
              '"Your second paragraph makes a strong claim but drops the evidence without explaining how it supports your thesis. Try adding two sentences of analysis after the quotation."',
            standardCode: '11-12.W.5',
          },
          {
            question:
              'A student says: "I revised my paper — I fixed all the spelling errors." Explain what this student is missing about the revision process.',
            type: 'short-answer',
            correctAnswer:
              'Fixing spelling errors is proofreading, not revision. True revision involves rethinking the argument, reorganizing structure, strengthening paragraph development, and refining sentences for clarity and style. The student should start with global revision to ensure the argument is sound, then move to paragraph and sentence-level improvements.',
            standardCode: '11-12.W.5',
          },
        ],
      },
    },
  },

  // ─── Language (3 modules) ───────────────────────────────────────
  {
    slug: 'grade11-ela-academic-domain-vocabulary',
    title: 'Academic and Domain-Specific Vocabulary',
    description:
      'Acquire and use accurately general academic vocabulary and domain-specific words and phrases sufficient for reading, writing, speaking, and listening at the college and career readiness level.',
    subject: 'ela',
    grade: 11,
    gradeBand: '9-12',
    topicCluster: 'Language',
    standardCodes: ['11-12.L.6', '11-12.L.4'],
    content: {
      intro: {
        title: 'Academic and Domain-Specific Vocabulary',
        text: 'College-level reading and writing demand command of two vocabulary tiers: general academic words (like "synthesize," "paradigm," and "mitigate") that appear across disciplines, and domain-specific terms (like "judicial review," "photosynthesis," or "marginal cost") that belong to particular fields. This module teaches strategies for acquiring, understanding, and using both types of vocabulary with precision.',
        culturalHook:
          'Every community has specialized language — farming terms, fishing vocabulary, medical jargon used by elders. Academic vocabulary is simply the specialized language of school and professional life.',
      },
      segments: [
        {
          index: 0,
          title: 'General Academic Vocabulary',
          text: 'General academic words appear in texts across disciplines but are rarely used in casual conversation. Words like "assert," "constitute," "implicit," and "concurrent" are essential for understanding textbooks, scholarly articles, and professional documents. Build your academic vocabulary through wide reading, context-clue analysis, and deliberate practice using new words in your own writing and speaking.',
          keyVocabulary: ['academic vocabulary', 'context clues', 'Tier 2 words'],
        },
        {
          index: 1,
          title: 'Domain-Specific Vocabulary',
          text: 'Domain-specific terms are the technical language of a particular field. In literary analysis, terms like "motif," "denouement," and "unreliable narrator" are domain-specific. In science, terms like "mitosis" or "entropy" serve the same function. When encountering domain-specific vocabulary, use the text\'s context, glossaries, and reference materials to build precise understanding. Misusing a domain-specific term can fundamentally distort your meaning.',
          keyVocabulary: ['domain-specific vocabulary', 'Tier 3 words', 'technical precision'],
          example:
            'A student who writes "the author uses irony" without understanding the difference between verbal, situational, and dramatic irony may misidentify the technique. Precision in domain-specific vocabulary prevents this error.',
        },
        {
          index: 2,
          title: 'Strategies for Vocabulary Acquisition',
          text: 'Effective vocabulary acquisition goes beyond memorizing definitions. Use morphological analysis (breaking words into roots, prefixes, and suffixes), semantic mapping (connecting new words to known synonyms and antonyms), and contextual practice (using new words in sentences that reflect their precise meaning). Review vocabulary regularly and seek opportunities to use new words in discussion and writing.',
          keyVocabulary: ['morphological analysis', 'semantic mapping', 'contextual practice'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'What is the difference between general academic vocabulary and domain-specific vocabulary?',
          type: 'multiple-choice',
          options: [
            'General academic words appear across disciplines; domain-specific words belong to a particular field.',
            'General academic words are easier.',
            'Domain-specific words are longer.',
            'There is no meaningful difference.',
          ],
          correctAnswer:
            'General academic words appear across disciplines; domain-specific words belong to a particular field.',
          hint: 'Think about where you would encounter each type of word.',
          explanation:
            'General academic vocabulary (Tier 2) crosses subject boundaries, while domain-specific vocabulary (Tier 3) is tied to particular disciplines. Both are essential for college-level literacy.',
          standardCode: '11-12.L.6',
        },
        {
          index: 1,
          question:
            'Use morphological analysis to determine the meaning of "incontrovertible."',
          type: 'short-answer',
          correctAnswer:
            'The prefix "in-" means "not," the root "controvert" means "to dispute or argue against," and the suffix "-ible" means "able to be." Together, "incontrovertible" means "not able to be disputed" — in other words, undeniable.',
          hint: 'Break the word into its prefix, root, and suffix.',
          explanation:
            'Morphological analysis allows you to decode unfamiliar words by examining their parts, a strategy that works across thousands of academic and domain-specific terms.',
          standardCode: '11-12.L.4',
        },
        {
          index: 2,
          question:
            'Why can misusing a domain-specific term distort your meaning?',
          type: 'short-answer',
          correctAnswer:
            'Domain-specific terms carry precise technical meanings. Using "irony" when you mean "coincidence," or "hypothesis" when you mean "guess," communicates a different concept to knowledgeable readers and undermines your credibility and clarity.',
          hint: 'Think about what happens when a technical term is used loosely.',
          explanation:
            'Precision matters in academic discourse. A misused domain-specific term signals to the reader that the writer may not fully understand the concept, weakening the argument.',
          standardCode: '11-12.L.6',
        },
        {
          index: 3,
          question:
            'Which vocabulary acquisition strategy involves connecting a new word to known synonyms and antonyms?',
          type: 'multiple-choice',
          options: [
            'Semantic mapping.',
            'Morphological analysis.',
            'Contextual practice.',
            'Rote memorization.',
          ],
          correctAnswer: 'Semantic mapping.',
          hint: 'Think about creating a web of related words.',
          explanation:
            'Semantic mapping builds a network of associations around a new word, deepening understanding by connecting it to words the learner already knows.',
          standardCode: '11-12.L.4',
        },
        {
          index: 4,
          question:
            'Write a sentence using the academic word "mitigate" correctly.',
          type: 'short-answer',
          correctAnswer:
            'A strong response uses "mitigate" to mean "lessen the severity of" — for example: "Community organizations worked to mitigate the effects of the factory closure by offering job-training programs to displaced workers."',
          hint: '"Mitigate" means to make something less severe or harmful.',
          explanation:
            'Using academic vocabulary correctly in original sentences demonstrates genuine acquisition rather than surface-level memorization.',
          standardCode: '11-12.L.6',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Explain why a student preparing for college should develop both general academic and domain-specific vocabulary.',
            type: 'short-answer',
            correctAnswer:
              'General academic vocabulary is needed to comprehend and produce texts across all college courses, while domain-specific vocabulary is essential for understanding and participating in particular disciplines. Together, they enable a student to read complex materials, write with precision, and engage in scholarly conversation at the college level.',
            standardCode: '11-12.L.6',
          },
          {
            question:
              'Which strategy would best help you determine the meaning of an unfamiliar word with a Latin root?',
            type: 'multiple-choice',
            options: [
              'Morphological analysis — breaking the word into prefix, root, and suffix.',
              'Reading the word aloud repeatedly.',
              'Skipping the word and continuing.',
              'Asking a classmate for the definition.',
            ],
            correctAnswer:
              'Morphological analysis — breaking the word into prefix, root, and suffix.',
            standardCode: '11-12.L.4',
          },
          {
            question:
              'A student writes "the protagonist experiences an epiphany" but defines "epiphany" as "a sad moment." Explain the error and its impact on the analysis.',
            type: 'short-answer',
            correctAnswer:
              'An epiphany is a sudden realization or insight, not a sad moment. Misdefining the term distorts the analysis because the student may be describing a scene of grief rather than a scene of revelation. The misuse signals a fundamental misunderstanding of the literary concept and weakens the credibility of the interpretation.',
            standardCode: '11-12.L.6',
          },
        ],
      },
    },
  },
  {
    slug: 'grade11-ela-syntax-for-style',
    title: 'Syntax for Style and Effect',
    description:
      'Analyze and apply syntactic choices — including sentence length, structure, and arrangement — to achieve specific stylistic effects, control pacing, and enhance clarity in both literary and informational writing.',
    subject: 'ela',
    grade: 11,
    gradeBand: '9-12',
    topicCluster: 'Language',
    standardCodes: ['11-12.L.3', '11-12.L.1'],
    content: {
      intro: {
        title: 'Syntax for Style and Effect',
        text: 'Syntax — the arrangement of words and phrases into sentences — is one of the most powerful tools a writer has. A short, blunt sentence can deliver a shock. A long, complex sentence can mirror the unfolding of a thought. In this module you will analyze how professional authors use syntax for specific effects and learn to make deliberate syntactic choices in your own writing to control tone, pacing, emphasis, and clarity.',
        culturalHook:
          'Listen to a powerful speech or song from your community. Notice how the rhythm of the sentences — long or short, simple or layered — creates emotional impact.',
      },
      segments: [
        {
          index: 0,
          title: 'Sentence Types and Their Effects',
          text: 'English offers four sentence types: simple, compound, complex, and compound-complex. Each creates a different effect. A simple sentence ("She refused.") delivers emphasis and finality. A compound sentence joins related ideas of equal importance. A complex sentence subordinates one idea to another, guiding the reader\'s attention. A compound-complex sentence can mirror sophisticated, multi-layered thinking. Skilled writers vary sentence types to control rhythm and emphasis.',
          keyVocabulary: ['simple sentence', 'compound sentence', 'complex sentence', 'subordination'],
        },
        {
          index: 1,
          title: 'Sentence Length and Pacing',
          text: 'Short sentences accelerate pace and create urgency or emphasis. Long sentences slow the reader down, building detail or suspense. The most effective writing varies sentence length deliberately. A paragraph of uniformly long sentences becomes sluggish; a paragraph of uniformly short sentences becomes choppy. Study how authors like Toni Morrison and Ernest Hemingway use sentence length as a stylistic signature.',
          keyVocabulary: ['pacing', 'sentence variety', 'stylistic signature'],
          example:
            'Hemingway: "He was an old man who fished alone in a skiff in the Gulf Stream and he had gone eighty-four days now without taking a fish." The long opening sentence establishes a deliberate, weary rhythm that mirrors the old man\'s endurance.',
        },
        {
          index: 2,
          title: 'Syntactic Patterns: Parallelism, Inversion, and Periodic Structure',
          text: 'Advanced syntactic patterns create memorable effects. Parallelism (repeating a grammatical structure) creates rhythm and balance: "We shall fight on the beaches, we shall fight on the landing grounds." Inversion (reversing normal word order) creates emphasis: "Never have I seen such courage." Periodic sentences (delaying the main clause until the end) build suspense. Identify these patterns in texts you read and experiment with them in your writing.',
          keyVocabulary: ['parallelism', 'inversion', 'periodic sentence', 'cumulative sentence'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'What effect does a short, simple sentence typically create?',
          type: 'multiple-choice',
          options: [
            'Emphasis, finality, or urgency.',
            'Confusion.',
            'A formal, academic tone.',
            'A relaxed, meandering feel.',
          ],
          correctAnswer: 'Emphasis, finality, or urgency.',
          hint: 'Think about what "She refused." communicates versus a longer version.',
          explanation:
            'Short, simple sentences strip away qualification and deliver their content with force, making them ideal for moments of emphasis, dramatic turns, or decisive statements.',
          standardCode: '11-12.L.3',
        },
        {
          index: 1,
          question:
            'Why is sentence variety important in effective writing?',
          type: 'short-answer',
          correctAnswer:
            'Sentence variety keeps the reader engaged by preventing monotonous rhythm. It also allows the writer to control pacing — using short sentences for emphasis and longer ones for development — and to match the syntactic structure to the content\'s complexity and emotional register.',
          hint: 'Think about what happens when every sentence is the same length and structure.',
          explanation:
            'Uniform sentence structure creates monotony that dulls the reader\'s attention. Variety in length and type creates rhythm, emphasis, and engagement.',
          standardCode: '11-12.L.3',
        },
        {
          index: 2,
          question:
            'Identify the syntactic pattern in this sentence: "We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields."',
          type: 'multiple-choice',
          options: [
            'Parallelism — the repeated grammatical structure creates rhythm and emphasis.',
            'Inversion — the subject and verb are reversed.',
            'Periodic structure — the main idea comes at the end.',
            'Run-on sentence — it lacks proper punctuation.',
          ],
          correctAnswer:
            'Parallelism — the repeated grammatical structure creates rhythm and emphasis.',
          hint: 'Notice what is repeated in each clause.',
          explanation:
            'The repeated "we shall fight on/in…" structure is parallelism, which creates a powerful rhythmic effect that builds intensity and resolve.',
          standardCode: '11-12.L.1',
        },
        {
          index: 3,
          question:
            'Rewrite this choppy passage using sentence variety: "The storm arrived. It was powerful. Trees fell. Power lines snapped. The town went dark."',
          type: 'short-answer',
          correctAnswer:
            'A strong revision combines and varies sentences — for example: "When the powerful storm arrived, trees fell and power lines snapped, plunging the town into darkness." The revision uses a complex sentence structure and combines related details, creating a more fluid and vivid passage.',
          hint: 'Try combining some sentences and varying their length and structure.',
          explanation:
            'Combining choppy sentences into varied structures improves flow, clarifies relationships between ideas, and creates a more engaging reading experience.',
          standardCode: '11-12.L.3',
        },
        {
          index: 4,
          question:
            'What is a periodic sentence, and what effect does it create?',
          type: 'short-answer',
          correctAnswer:
            'A periodic sentence delays the main clause until the end, building suspense or anticipation as subordinate clauses and phrases accumulate before the key idea. For example: "Despite the rain, the mud, the exhaustion, and the fear, they marched on." The delay intensifies the impact of the final statement.',
          hint: 'Think about a sentence that makes you wait for the main point.',
          explanation:
            'Periodic sentences create suspense by withholding the main idea, forcing the reader to hold multiple details in mind before receiving the resolution.',
          standardCode: '11-12.L.3',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Analyze how Hemingway\'s opening sentence in The Old Man and the Sea uses syntax to establish tone.',
            type: 'short-answer',
            correctAnswer:
              'The long, compound sentence with repeated conjunctions ("and…and…") creates a slow, deliberate rhythm that mirrors the old man\'s patient endurance and the monotony of his eighty-four fishless days. The syntax itself embodies the weariness and persistence that define the character.',
            standardCode: '11-12.L.3',
          },
          {
            question:
              'Which syntactic pattern involves reversing normal word order for emphasis?',
            type: 'multiple-choice',
            options: [
              'Inversion.',
              'Parallelism.',
              'Periodic structure.',
              'Cumulative structure.',
            ],
            correctAnswer: 'Inversion.',
            standardCode: '11-12.L.1',
          },
          {
            question:
              'Write a short paragraph (3-4 sentences) that deliberately varies sentence length and structure to describe a moment of surprise.',
            type: 'short-answer',
            correctAnswer:
              'A strong response uses a mix of sentence types — perhaps a long sentence building detail, followed by a short sentence delivering the surprise, then a medium sentence reflecting on the moment. The variation should be purposeful, matching syntax to content.',
            standardCode: '11-12.L.3',
          },
        ],
      },
    },
  },
  {
    slug: 'grade11-ela-rhetorical-analysis',
    title: 'Rhetorical Analysis',
    description:
      'Analyze how authors use rhetorical strategies — appeals to ethos, pathos, and logos; figurative language; tone; and structural choices — to achieve their purposes and influence audiences in complex texts.',
    subject: 'ela',
    grade: 11,
    gradeBand: '9-12',
    topicCluster: 'Language',
    standardCodes: ['11-12.L.5', '11-12.L.3'],
    content: {
      intro: {
        title: 'Rhetorical Analysis',
        text: 'Rhetorical analysis examines how a text works — not just what it says, but how the author uses language, structure, and appeals to achieve a purpose with a specific audience. This module teaches you to identify and evaluate rhetorical strategies in complex texts, from political speeches to literary essays, and to write analytical essays that explain how and why those strategies are effective.',
        culturalHook:
          'Think about a speaker in your community — a pastor, coach, elder, or organizer — who is especially persuasive. What is it about their language, tone, and delivery that makes people listen?',
      },
      segments: [
        {
          index: 0,
          title: 'The Rhetorical Situation: Purpose, Audience, and Context',
          text: 'Every text exists within a rhetorical situation defined by the author\'s purpose (to inform, persuade, entertain, or provoke), the audience (who the author is addressing and what they value), and the context (the historical, social, or cultural circumstances surrounding the text). Before analyzing specific strategies, establish the rhetorical situation — it is the framework that makes every other choice meaningful.',
          keyVocabulary: ['rhetorical situation', 'purpose', 'audience', 'context'],
        },
        {
          index: 1,
          title: 'Ethos, Pathos, and Logos',
          text: 'Aristotle identified three modes of persuasion: ethos (credibility and character of the speaker), pathos (emotional appeal to the audience), and logos (logical reasoning and evidence). Most effective texts blend all three. In your analysis, identify which appeals the author relies on most heavily and evaluate whether they are appropriate and effective for the rhetorical situation.',
          keyVocabulary: ['ethos', 'pathos', 'logos', 'modes of persuasion'],
          example:
            'In "Letter from Birmingham Jail," King establishes ethos by identifying himself as a clergyman and citing theologians, appeals to pathos through vivid descriptions of racial injustice, and employs logos through careful syllogistic reasoning about just and unjust laws.',
        },
        {
          index: 2,
          title: 'Figurative Language and Tone as Rhetorical Tools',
          text: 'Figurative language — metaphor, simile, hyperbole, irony, allusion — does rhetorical work beyond ornamentation. A metaphor can reframe an issue (calling the internet "the information superhighway" implies speed and progress). Tone — the author\'s attitude toward the subject — signals how the audience should respond. Analyze how figurative language and tone work together to advance the author\'s purpose.',
          keyVocabulary: ['figurative language', 'metaphor', 'tone', 'allusion'],
        },
        {
          index: 3,
          title: 'Writing a Rhetorical Analysis Essay',
          text: 'A rhetorical analysis essay argues how an author achieves their purpose. Your thesis should name the author, text, purpose, and the primary strategies you will analyze. Each body paragraph should focus on a specific strategy, provide textual evidence, and explain its effect on the audience. Avoid simply listing strategies — instead, evaluate their effectiveness and explain why they work within the rhetorical situation.',
          keyVocabulary: ['rhetorical analysis essay', 'thesis', 'strategic evaluation'],
        },
      ],
      practice: [
        {
          index: 0,
          question:
            'What are the three components of a rhetorical situation?',
          type: 'multiple-choice',
          options: [
            'Purpose, audience, and context.',
            'Ethos, pathos, and logos.',
            'Introduction, body, and conclusion.',
            'Claim, evidence, and reasoning.',
          ],
          correctAnswer: 'Purpose, audience, and context.',
          hint: 'Think about the framework that surrounds any act of communication.',
          explanation:
            'The rhetorical situation — purpose, audience, and context — is the foundation for understanding why an author makes specific choices. It must be established before individual strategies can be meaningfully analyzed.',
          standardCode: '11-12.L.3',
        },
        {
          index: 1,
          question:
            'In "Letter from Birmingham Jail," how does King establish ethos?',
          type: 'short-answer',
          correctAnswer:
            'King establishes ethos by identifying himself as a clergyman responding to fellow clergymen, citing theologians like Augustine and Aquinas, referencing his leadership role in the civil rights movement, and adopting a measured, respectful tone even while making powerful moral arguments. These moves build credibility with his immediate audience.',
          hint: 'Think about how King presents his qualifications and character.',
          explanation:
            'Ethos is built through demonstrations of credibility, expertise, and moral character. King strategically positions himself as both a religious authority and a reasonable interlocutor.',
          standardCode: '11-12.L.5',
        },
        {
          index: 2,
          question:
            'How can a metaphor function as a rhetorical strategy rather than mere ornamentation?',
          type: 'short-answer',
          correctAnswer:
            'A metaphor can reframe how an audience thinks about an issue by mapping the characteristics of one concept onto another. For example, calling a political opponent\'s plan "a house of cards" implies fragility and inevitable collapse without needing to prove it. The metaphor does persuasive work by shaping perception.',
          hint: 'Think about how a metaphor changes the way you see an issue, not just how it sounds.',
          explanation:
            'Metaphors are rhetorical tools because they shape conceptual understanding. By comparing an unfamiliar or complex issue to something familiar, the author influences the audience\'s perception and emotional response.',
          standardCode: '11-12.L.5',
        },
        {
          index: 3,
          question:
            'What should a rhetorical analysis thesis include?',
          type: 'multiple-choice',
          options: [
            'The author, text, purpose, and the primary rhetorical strategies to be analyzed.',
            'Only the title of the text.',
            'A summary of the text\'s content.',
            'The student\'s personal opinion about the topic.',
          ],
          correctAnswer:
            'The author, text, purpose, and the primary rhetorical strategies to be analyzed.',
          hint: 'Your thesis should tell the reader exactly what you will analyze and why it matters.',
          explanation:
            'A complete rhetorical analysis thesis establishes the scope of the essay by naming the text, its author, the purpose it serves, and the specific strategies the writer will examine.',
          standardCode: '11-12.L.3',
        },
        {
          index: 4,
          question:
            'Why should a rhetorical analysis evaluate strategies rather than simply list them?',
          type: 'short-answer',
          correctAnswer:
            'Listing strategies is identification, not analysis. Evaluation explains why the strategies are effective (or ineffective) for the specific audience and purpose, demonstrating the writer\'s understanding of how rhetoric works rather than just what rhetorical terms mean.',
          hint: 'Think about the difference between naming a tool and explaining how it builds something.',
          explanation:
            'True rhetorical analysis goes beyond identification to evaluation — explaining how and why specific strategies achieve their effects within a particular rhetorical situation.',
          standardCode: '11-12.L.3',
        },
      ],
      assessment: {
        questions: [
          {
            question:
              'Explain how King uses logos in "Letter from Birmingham Jail" to argue that citizens have a moral obligation to disobey unjust laws.',
            type: 'short-answer',
            correctAnswer:
              'King constructs a logical argument by first defining the distinction between just and unjust laws (citing Augustine: "an unjust law is no law at all"), then establishing criteria for identifying unjust laws (laws imposed on a minority by a majority that does not bind itself to the same standard), and finally applying those criteria to segregation statutes. This syllogistic reasoning gives his audience a rational framework for accepting civil disobedience.',
            standardCode: '11-12.L.5',
          },
          {
            question:
              'Which of the following best describes the relationship between ethos, pathos, and logos in effective rhetoric?',
            type: 'multiple-choice',
            options: [
              'Most effective texts blend all three appeals, calibrating the balance to suit the rhetorical situation.',
              'Effective texts use only logos.',
              'Pathos and logos always conflict.',
              'Ethos is relevant only in political speeches.',
            ],
            correctAnswer:
              'Most effective texts blend all three appeals, calibrating the balance to suit the rhetorical situation.',
            standardCode: '11-12.L.5',
          },
          {
            question:
              'Write a thesis statement for a rhetorical analysis of a speech or essay you have studied, naming the author, text, purpose, and at least two strategies you would analyze.',
            type: 'short-answer',
            correctAnswer:
              'A strong response names a specific text and author, identifies the purpose, and previews at least two strategies — for example: "In her 2019 UN address, Greta Thunberg uses stark repetition and emotionally charged diction to shame world leaders into acknowledging the urgency of the climate crisis, calibrating her tone between moral outrage and data-driven reasoning to reach both the public and policymakers."',
            standardCode: '11-12.L.3',
          },
        ],
      },
    },
  },
]
