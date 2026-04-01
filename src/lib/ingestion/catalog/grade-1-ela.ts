import type { ModuleSeed } from '../types'

export const GRADE_1_ELA: ModuleSeed[] = [
  {
    slug: 'grade1-ela-key-details',
    title: 'Key Details in Stories',
    description: 'Ask and answer questions about key details in a text',
    subject: 'ela',
    grade: 1,
    gradeBand: 'k5',
    topicCluster: 'Reading Literature',
    standardCodes: ['1.RL.1'],
    content: {
      intro: {
        title: 'Key Details in Stories',
        text: 'When we read a story, we look for key details. Key details are the important pieces of information that help us understand what is happening. Good readers ask questions like who, what, where, when, and why to find these details. Today we will practice finding key details in stories we read.',
      },
      segments: [
        {
          index: 0,
          title: 'What Are Key Details?',
          text: 'Key details are the most important facts or ideas in a story. They tell us about the characters, what happens, and why things happen. Not every sentence in a story is a key detail. Some sentences just add extra information. A key detail helps answer a big question about the story. For example, if a story is about a girl who finds a lost puppy, the key detail might be where she found the puppy or what she did to help it. When you read, think about which parts of the story are the most important to remember.',
          keyVocabulary: ['key details', 'characters', 'important', 'facts'],
        },
        {
          index: 1,
          title: 'Asking Questions About a Story',
          text: 'Good readers ask questions before, during, and after they read. Before reading, you might ask, "What will this story be about?" While reading, you can ask, "Why did the character do that?" After reading, you might wonder, "What was the most important thing that happened?" These questions help you pay attention and find the key details. The words who, what, where, when, why, and how are great question starters. Practice asking yourself questions the next time you read a story.',
          keyVocabulary: ['questions', 'who', 'what', 'where', 'when', 'why'],
        },
        {
          index: 2,
          title: 'Finding Answers in the Text',
          text: 'After you ask a question, you need to find the answer. The answer to your question is usually right in the story. You can look back at the words and sentences to find it. This is called going back to the text. If someone asks, "Where did the bear live?" you look in the story for the sentence that tells about where the bear lives. Sometimes you need to read more than one sentence to find the full answer. Always use the words from the story to support your answer.',
          keyVocabulary: ['answer', 'text', 'support', 'sentence'],
        },
        {
          index: 3,
          title: 'Retelling with Key Details',
          text: 'When you retell a story, you share the most important parts in order. Start with what happened first, then what happened next, and finally what happened last. Use key details to make your retelling clear. You do not need to tell every single thing — just the big ideas. A good retelling helps someone who has not read the story understand what it was about. Practice retelling stories to a friend or family member using the key details you found.',
          keyVocabulary: ['retell', 'order', 'first', 'next', 'last'],
        },
      ],
      practice: [
        { index: 0, question: 'What are key details in a story?', type: 'short-answer', correctAnswer: 'Key details are the most important facts or ideas in a story.', hint: 'Think about which parts of a story help you understand what is happening.', explanation: 'Key details are the important pieces of information that tell us about the characters, events, and ideas in a story.', standardCode: '1.RL.1' },
        { index: 1, question: 'Which question word helps you find out WHO is in a story?', type: 'multiple-choice', options: ['Where', 'Who', 'When', 'How'], correctAnswer: 'Who', hint: 'This question word asks about a person or character.', explanation: 'The word "who" is used to ask about people or characters in a story.', standardCode: '1.RL.1' },
        { index: 2, question: 'When you retell a story, you should tell events in ___.', type: 'fill-blank', correctAnswer: 'order', hint: 'Think about what happened first, next, and last.', explanation: 'When retelling, we share events in order — first, next, and last — so the story makes sense.', standardCode: '1.RL.1' },
        { index: 3, question: 'Where should you look to find the answer to a question about a story?', type: 'multiple-choice', options: ['In the pictures only', 'In the text of the story', 'On a different page', 'In another book'], correctAnswer: 'In the text of the story', hint: 'The answer is usually found in the words you already read.', explanation: 'You go back to the text of the story to find answers to your questions. The words in the story support your answer.', standardCode: '1.RL.1' },
        { index: 4, question: 'A story says: "The cat sat on the red mat by the window." What is a key detail about where the cat sat?', type: 'short-answer', correctAnswer: 'The cat sat on the red mat by the window.', hint: 'Look for the words that tell where the cat is.', explanation: 'The key detail is that the cat sat on the red mat by the window. This tells us exactly where the cat was.', standardCode: '1.RL.1' },
      ],
      assessment: {
        questions: [
          { question: 'Which of these is a key detail? A) The sky was blue. B) The girl saved the kitten from the tree.', type: 'multiple-choice', options: ['The sky was blue.', 'The girl saved the kitten from the tree.'], correctAnswer: 'The girl saved the kitten from the tree.', standardCode: '1.RL.1' },
          { question: 'What question word do you use to find out WHERE something happened?', type: 'short-answer', correctAnswer: 'Where', standardCode: '1.RL.1' },
          { question: 'Why is it important to go back to the text when answering a question?', type: 'short-answer', correctAnswer: 'Going back to the text helps you find the correct answer using the words from the story.', standardCode: '1.RL.1' },
        ],
      },
    },
  },
  {
    slug: 'grade1-ela-story-structure',
    title: 'Story Structure: Characters, Settings, and Events',
    description: 'Describe characters, settings, and major events in a story using key details',
    subject: 'ela',
    grade: 1,
    gradeBand: 'k5',
    topicCluster: 'Reading Literature',
    standardCodes: ['1.RL.3'],
    content: {
      intro: {
        title: 'Story Structure',
        text: 'Every story has three important parts: characters, a setting, and events. Characters are the people or animals in the story. The setting is where and when the story takes place. Events are the things that happen. Understanding these parts helps you enjoy and remember stories better.',
      },
      segments: [
        {
          index: 0,
          title: 'Characters in a Story',
          text: 'Characters are the people, animals, or creatures in a story. The main character is the one the story is mostly about. We learn about characters by what they say, what they do, and how they feel. A character might be brave, funny, or kind. When you read, pay attention to what the character does and says. This helps you understand who they are. For example, if a character shares a toy, we know that character is generous and caring.',
          keyVocabulary: ['character', 'main character', 'brave', 'generous'],
        },
        {
          index: 1,
          title: 'The Setting of a Story',
          text: 'The setting tells us where and when a story happens. A story might take place in a forest, at a school, or in a city. The setting can also tell us the time — is it daytime or nighttime? Is it summer or winter? Sometimes the author tells us the setting right away. Other times, we figure it out from clues in the story. If the story says there is snow on the ground and the character wears a heavy coat, the setting is probably a cold, winter day.',
          keyVocabulary: ['setting', 'where', 'when', 'clues'],
        },
        {
          index: 2,
          title: 'Major Events in a Story',
          text: 'Events are the things that happen in a story. Major events are the most important things that happen. Stories usually have a beginning, a middle, and an end. In the beginning, we meet the characters and learn about the setting. In the middle, something happens — maybe a problem that the character needs to solve. At the end, the problem is solved and the story wraps up. When you retell a story, focus on the major events in the right order.',
          keyVocabulary: ['events', 'beginning', 'middle', 'end', 'problem'],
        },
        {
          index: 3,
          title: 'Putting It All Together',
          text: 'When you understand the characters, setting, and events, you understand the whole story. Try this: after you finish reading, ask yourself three questions. Who are the characters? Where does the story take place? What are the major events? If you can answer all three, you have a great understanding of the story. You can use these parts to retell the story to a friend or write about it in your journal.',
          keyVocabulary: ['retell', 'understand', 'journal'],
        },
      ],
      practice: [
        { index: 0, question: 'What is a character in a story?', type: 'multiple-choice', options: ['The place where the story happens', 'A person or animal in the story', 'The things that happen in the story', 'The title of the story'], correctAnswer: 'A person or animal in the story', hint: 'Think about who is in the story.', explanation: 'A character is a person, animal, or creature in a story. The story tells us what they do and how they feel.', standardCode: '1.RL.3' },
        { index: 1, question: 'The setting of a story tells us ___ and ___ the story takes place.', type: 'fill-blank', correctAnswer: 'where and when', hint: 'The setting answers two questions about the story.', explanation: 'The setting tells us where (the place) and when (the time) a story happens.', standardCode: '1.RL.3' },
        { index: 2, question: 'A story says: "Long ago, a little mouse lived in a barn." What is the setting?', type: 'short-answer', correctAnswer: 'A barn, long ago.', hint: 'Look for the words that tell where and when.', explanation: 'The setting is a barn (where) and long ago (when). The author told us the setting in the first sentence.', standardCode: '1.RL.3' },
        { index: 3, question: 'What are the three main parts of a story?', type: 'multiple-choice', options: ['Title, author, illustrator', 'Characters, setting, events', 'Words, sentences, paragraphs', 'Cover, pages, ending'], correctAnswer: 'Characters, setting, events', hint: 'Think about who, where, and what happens.', explanation: 'The three main parts of a story are characters (who), setting (where and when), and events (what happens).', standardCode: '1.RL.3' },
        { index: 4, question: 'In a story, the beginning, middle, and end describe the major ___.', type: 'fill-blank', correctAnswer: 'events', hint: 'These are the important things that happen in the story.', explanation: 'The major events are the important things that happen in the beginning, middle, and end of a story.', standardCode: '1.RL.3' },
      ],
      assessment: {
        questions: [
          { question: 'A story says: "Sam the dog ran through the park to find his ball." Who is the character and what is the setting?', type: 'short-answer', correctAnswer: 'The character is Sam the dog and the setting is the park.', standardCode: '1.RL.3' },
          { question: 'Which part of a story usually has a problem the character needs to solve?', type: 'multiple-choice', options: ['The beginning', 'The middle', 'The end'], correctAnswer: 'The middle', standardCode: '1.RL.3' },
          { question: 'Why is it important to know the characters, setting, and events of a story?', type: 'short-answer', correctAnswer: 'It helps you understand and retell the whole story.', standardCode: '1.RL.3' },
        ],
      },
    },
  },
  {
    slug: 'grade1-ela-character-description',
    title: 'Using Illustrations and Details to Describe Characters',
    description: 'Use illustrations and details in a story to describe its characters, setting, or events',
    subject: 'ela',
    grade: 1,
    gradeBand: 'k5',
    topicCluster: 'Reading Literature',
    standardCodes: ['1.RL.7'],
    content: {
      intro: {
        title: 'Illustrations and Details',
        text: 'Books have words and pictures. Both tell us about the story! Illustrations are the pictures in a book. They give us extra information about the characters, setting, and events. When we look at illustrations and read the words together, we understand the story even better.',
      },
      segments: [
        {
          index: 0,
          title: 'What Illustrations Tell Us',
          text: 'Illustrations are drawings or pictures in a book. An illustrator is the person who creates these pictures. Illustrations can show us things that the words do not say. For example, the words might say "the girl was happy," but the illustration shows her smiling, jumping, and clapping her hands. The picture gives us more detail about how happy she really is. Always look carefully at the illustrations when you read — they are part of the story too.',
          keyVocabulary: ['illustration', 'illustrator', 'detail', 'picture'],
        },
        {
          index: 1,
          title: 'Describing Characters with Pictures and Words',
          text: 'You can learn a lot about characters by looking at the illustrations. Pictures show us what characters look like, what they are wearing, and how they feel. A character with tears on their face is sad. A character with a big smile is happy. The words in the story also give details. If the text says "the boy was tall with curly brown hair," that is a detail about how the character looks. When you put the words and pictures together, you get the best description of the character.',
          keyVocabulary: ['describe', 'expression', 'appearance', 'feelings'],
        },
        {
          index: 2,
          title: 'Describing Settings with Illustrations',
          text: 'Illustrations help us see the setting of a story. The words might say "they walked to the pond," but the picture shows tall trees, green grass, lily pads on the water, and a bright blue sky. All of those details come from the illustration. The picture might also show us the time of day. If the sky is orange and pink, it might be sunset. Looking at the background of illustrations gives you many clues about where and when the story takes place.',
          keyVocabulary: ['background', 'clues', 'setting', 'scene'],
        },
        {
          index: 3,
          title: 'Describing Events with Illustrations',
          text: 'Pictures can also show us what is happening in the story. If the illustration shows a child building a sandcastle, that is an event. Sometimes the picture shows an event that the words only hint at. The words might say "they had fun at the beach," and the picture shows children swimming, building castles, and eating ice cream. The illustration adds more events and details to the story. When you retell a story, use details from both the words and the pictures.',
          keyVocabulary: ['event', 'action', 'retell', 'details'],
        },
      ],
      practice: [
        { index: 0, question: 'What is an illustration?', type: 'multiple-choice', options: ['The title of a book', 'A picture or drawing in a book', 'The words in a story', 'The cover of a book'], correctAnswer: 'A picture or drawing in a book', hint: 'Think about what you see on the pages besides words.', explanation: 'An illustration is a picture or drawing in a book that helps tell the story.', standardCode: '1.RL.7' },
        { index: 1, question: 'If an illustration shows a character frowning with crossed arms, how does the character probably feel?', type: 'short-answer', correctAnswer: 'The character probably feels angry or upset.', hint: 'Think about what your face and body look like when you feel that way.', explanation: 'Frowning and crossing arms usually shows that a person feels angry, upset, or frustrated. The illustration helps us understand the character\'s feelings.', standardCode: '1.RL.7' },
        { index: 2, question: 'Illustrations can tell us about the characters, ___, and events.', type: 'fill-blank', correctAnswer: 'setting', hint: 'This word means where and when the story takes place.', explanation: 'Illustrations give us details about characters, the setting, and events in a story.', standardCode: '1.RL.7' },
        { index: 3, question: 'Why should you look at both the words and pictures when reading a story?', type: 'multiple-choice', options: ['Pictures are more fun than words', 'Words and pictures together give you more details', 'You only need pictures to understand', 'Words are not important'], correctAnswer: 'Words and pictures together give you more details', hint: 'Both parts of a book give us information.', explanation: 'Words and illustrations work together. Each one gives details the other might not, so together they help you understand the full story.', standardCode: '1.RL.7' },
        { index: 4, question: 'The words say "the boy went outside." The picture shows him wearing boots and holding an umbrella. What can you tell about the weather?', type: 'short-answer', correctAnswer: 'It is rainy outside.', hint: 'Why would someone carry an umbrella?', explanation: 'The illustration shows boots and an umbrella, which tells us it is rainy. The words alone did not tell us about the weather, but the picture did.', standardCode: '1.RL.7' },
      ],
      assessment: {
        questions: [
          { question: 'What is the job of an illustrator?', type: 'short-answer', correctAnswer: 'An illustrator creates the pictures or drawings in a book.', standardCode: '1.RL.7' },
          { question: 'If a picture shows snow on the ground and bare trees, what season is the setting?', type: 'multiple-choice', options: ['Summer', 'Spring', 'Winter', 'Fall'], correctAnswer: 'Winter', standardCode: '1.RL.7' },
          { question: 'How can an illustration help you describe a character?', type: 'short-answer', correctAnswer: 'An illustration shows what a character looks like, how they feel, and what they are doing.', standardCode: '1.RL.7' },
        ],
      },
    },
  },
  {
    slug: 'grade1-ela-main-topic-retelling',
    title: 'Main Topic and Retelling',
    description: 'Identify the main topic and retell key details of an informational text',
    subject: 'ela',
    grade: 1,
    gradeBand: 'k5',
    topicCluster: 'Reading Informational',
    standardCodes: ['1.RI.2'],
    content: {
      intro: {
        title: 'Main Topic and Retelling',
        text: 'Informational texts teach us about real things like animals, places, or how things work. Every informational text has a main topic — the big idea the whole text is about. Learning to find the main topic and retell key details helps you understand and remember what you read.',
      },
      segments: [
        {
          index: 0,
          title: 'What Is an Informational Text?',
          text: 'An informational text gives us facts and real information. It is different from a made-up story. A book about how frogs grow, a page about the weather, or an article about firefighters are all informational texts. These texts teach us something new. They often have headings, photos, and labels to help us learn. When you pick up a book to learn about something real, you are reading an informational text.',
          keyVocabulary: ['informational text', 'facts', 'real', 'nonfiction'],
        },
        {
          index: 1,
          title: 'Finding the Main Topic',
          text: 'The main topic is what the whole text is mostly about. It is the big idea. If you read a text about dogs, and every paragraph talks about different kinds of dogs, the main topic is "dogs." To find the main topic, ask yourself: "What is this text mostly about?" Look at the title, the headings, and the pictures for clues. The main topic is not a small detail — it is the one big subject that covers everything in the text.',
          keyVocabulary: ['main topic', 'big idea', 'mostly about', 'subject'],
        },
        {
          index: 2,
          title: 'Key Details Support the Main Topic',
          text: 'Key details are the important facts that tell us more about the main topic. If the main topic is "how butterflies grow," then key details might include: butterflies start as eggs, caterpillars come out of the eggs, caterpillars make a chrysalis, and a butterfly comes out. Each key detail gives more information about the big idea. When you find the main topic, look for three or four key details that support it.',
          keyVocabulary: ['key details', 'support', 'information', 'facts'],
        },
        {
          index: 3,
          title: 'Retelling an Informational Text',
          text: 'When you retell an informational text, you share the main topic and the key details in your own words. Start by saying what the text is mostly about. Then share the most important facts you learned. You do not need to remember every single detail — just the big ones. A good retelling sounds like this: "This text was about baby sea turtles. I learned that they hatch on the beach, crawl to the ocean, and swim far away." Practice retelling what you read to become a stronger reader.',
          keyVocabulary: ['retell', 'own words', 'share', 'important facts'],
        },
      ],
      practice: [
        { index: 0, question: 'What is an informational text?', type: 'multiple-choice', options: ['A made-up story about animals', 'A text that gives real facts and information', 'A poem with rhyming words', 'A book with only pictures'], correctAnswer: 'A text that gives real facts and information', hint: 'Think about a text that teaches you something true.', explanation: 'An informational text gives facts and real information about a topic. It teaches us about real things.', standardCode: '1.RI.2' },
        { index: 1, question: 'The main topic is what the text is ___ about.', type: 'fill-blank', correctAnswer: 'mostly', hint: 'It is the big idea, not a small detail.', explanation: 'The main topic is what the text is mostly about — the one big idea that covers the whole text.', standardCode: '1.RI.2' },
        { index: 2, question: 'A text has the title "All About Penguins." Every paragraph talks about penguins. What is the main topic?', type: 'short-answer', correctAnswer: 'Penguins', hint: 'Look at the title and what every paragraph is about.', explanation: 'The main topic is penguins because the title says "All About Penguins" and every paragraph is about penguins.', standardCode: '1.RI.2' },
        { index: 3, question: 'What do key details do?', type: 'multiple-choice', options: ['They change the main topic', 'They support and tell more about the main topic', 'They are not important', 'They only appear in stories'], correctAnswer: 'They support and tell more about the main topic', hint: 'Key details give more information about the big idea.', explanation: 'Key details are important facts that support the main topic by telling us more about it.', standardCode: '1.RI.2' },
        { index: 4, question: 'When you retell an informational text, what should you include?', type: 'multiple-choice', options: ['Every single word from the text', 'The main topic and key details in your own words', 'Only the title', 'Made-up facts'], correctAnswer: 'The main topic and key details in your own words', hint: 'Think about sharing the big idea and the most important facts.', explanation: 'A good retelling includes the main topic and the most important key details, shared in your own words.', standardCode: '1.RI.2' },
      ],
      assessment: {
        questions: [
          { question: 'How do you find the main topic of a text?', type: 'short-answer', correctAnswer: 'Ask yourself what the text is mostly about and look at the title, headings, and pictures for clues.', standardCode: '1.RI.2' },
          { question: 'A text about apples says: Apples grow on trees. They can be red, green, or yellow. People eat apples in pies and sauce. What is the main topic?', type: 'multiple-choice', options: ['Trees', 'Apples', 'Pies', 'Colors'], correctAnswer: 'Apples', standardCode: '1.RI.2' },
          { question: 'Name one thing you should include when retelling an informational text.', type: 'short-answer', correctAnswer: 'The main topic or key details in your own words.', standardCode: '1.RI.2' },
        ],
      },
    },
  },
  {
    slug: 'grade1-ela-text-features',
    title: 'Text Features: Headings, Tables, and Glossaries',
    description: 'Know and use various text features to locate key facts or information in a text',
    subject: 'ela',
    grade: 1,
    gradeBand: 'k5',
    topicCluster: 'Reading Informational',
    standardCodes: ['1.RI.5'],
    content: {
      intro: {
        title: 'Text Features',
        text: 'Informational books have special tools called text features. Text features include headings, tables of contents, glossaries, bold words, and more. These features help readers find information quickly. Today we will learn how to use text features to find key facts.',
      },
      segments: [
        {
          index: 0,
          title: 'Headings',
          text: 'A heading is a title at the top of a section. It tells you what that part of the text is about. Headings are usually in bigger or bolder letters so they are easy to spot. If you are reading a book about animals and you see a heading that says "Animals That Swim," you know that section will be about animals that live in water. Headings help you find the part of the book you want to read without reading every single page.',
          keyVocabulary: ['heading', 'section', 'bold', 'title'],
        },
        {
          index: 1,
          title: 'Table of Contents',
          text: 'A table of contents is found at the front of a book. It is a list of all the sections or chapters in the book, along with the page numbers where each section starts. If you want to find information about a certain topic, the table of contents shows you exactly which page to turn to. For example, if the table of contents says "Chapter 3: Reptiles — page 14," you can go right to page 14 to read about reptiles.',
          keyVocabulary: ['table of contents', 'chapters', 'page number', 'list'],
        },
        {
          index: 2,
          title: 'Glossary and Bold Words',
          text: 'A glossary is like a mini dictionary at the back of a book. It lists important words from the text and tells you what they mean. The words in the glossary are in alphabetical order, just like in a real dictionary. Many informational texts also put important words in bold letters. When you see a bold word, it means that word is important and you can probably find its meaning in the glossary. Bold words help you notice new vocabulary as you read.',
          keyVocabulary: ['glossary', 'bold', 'alphabetical order', 'vocabulary', 'definition'],
        },
        {
          index: 3,
          title: 'Using Text Features Together',
          text: 'Good readers use all the text features together to find information fast. First, check the table of contents to find the right section. Next, use headings to find the exact part you need. Then, look at bold words to spot important vocabulary. Finally, use the glossary if you do not know what a word means. Using these tools makes reading informational texts easier and faster. You become a detective finding clues in the book!',
          keyVocabulary: ['tools', 'information', 'detective', 'locate'],
        },
      ],
      practice: [
        { index: 0, question: 'What does a heading tell you?', type: 'multiple-choice', options: ['Who wrote the book', 'What a section is about', 'How many pages the book has', 'When the book was published'], correctAnswer: 'What a section is about', hint: 'A heading is like a mini title for a part of the text.', explanation: 'A heading tells you what that section of the text is about. It helps you know what you will read next.', standardCode: '1.RI.5' },
        { index: 1, question: 'Where do you find a table of contents in a book?', type: 'short-answer', correctAnswer: 'At the front of the book.', hint: 'Think about where you look before you start reading the chapters.', explanation: 'A table of contents is at the front (beginning) of a book. It shows a list of sections and their page numbers.', standardCode: '1.RI.5' },
        { index: 2, question: 'A glossary is like a mini ___ at the back of a book.', type: 'fill-blank', correctAnswer: 'dictionary', hint: 'It lists words and their meanings.', explanation: 'A glossary is like a mini dictionary. It lists important words from the text and their definitions in alphabetical order.', standardCode: '1.RI.5' },
        { index: 3, question: 'Why are some words in a book printed in bold letters?', type: 'multiple-choice', options: ['Because they are the longest words', 'Because they are important vocabulary words', 'Because the printer made a mistake', 'Because they are the easiest words'], correctAnswer: 'Because they are important vocabulary words', hint: 'Bold words stand out because they are special.', explanation: 'Words are printed in bold to show they are important vocabulary. You can often find their meaning in the glossary.', standardCode: '1.RI.5' },
        { index: 4, question: 'If you want to find what page "Chapter 4: Insects" starts on, which text feature would you use?', type: 'multiple-choice', options: ['Glossary', 'Heading', 'Table of contents', 'Bold words'], correctAnswer: 'Table of contents', hint: 'This feature lists chapters and their page numbers.', explanation: 'The table of contents lists all the chapters and their page numbers, so you can find exactly where Chapter 4 starts.', standardCode: '1.RI.5' },
      ],
      assessment: {
        questions: [
          { question: 'Name two text features that help you find information in a book.', type: 'short-answer', correctAnswer: 'Headings and table of contents (or glossary and bold words).', standardCode: '1.RI.5' },
          { question: 'Where would you look to find the meaning of a bold word?', type: 'multiple-choice', options: ['The table of contents', 'The glossary', 'The heading', 'The title page'], correctAnswer: 'The glossary', standardCode: '1.RI.5' },
          { question: 'How does a heading help a reader?', type: 'short-answer', correctAnswer: 'A heading tells the reader what a section is about so they can find the information they need.', standardCode: '1.RI.5' },
        ],
      },
    },
  },
  {
    slug: 'grade1-ela-narrative-opinion-writing',
    title: 'Narrative and Opinion Writing',
    description: 'Write opinion pieces and narratives with details, sequence, and a sense of closure',
    subject: 'ela',
    grade: 1,
    gradeBand: 'k5',
    topicCluster: 'Writing',
    standardCodes: ['1.W.1', '1.W.3'],
    content: {
      intro: {
        title: 'Narrative and Opinion Writing',
        text: 'Writers share their ideas in many ways. In opinion writing, you tell what you think about something and give reasons why. In narrative writing, you tell a story about something that happened. Both kinds of writing have a beginning, details in the middle, and an ending. Today we will learn to write both opinion pieces and narratives.',
      },
      segments: [
        {
          index: 0,
          title: 'What Is Opinion Writing?',
          text: 'An opinion is what you think or believe about something. In opinion writing, you tell the reader what you think and give reasons to explain why. For example, you might write: "I think recess is the best part of the day because I get to play with my friends and run outside." Your opinion is that recess is the best, and your reason is that you play with friends and run. A good opinion piece starts with your opinion, gives at least one reason, and has a closing sentence.',
          keyVocabulary: ['opinion', 'reason', 'believe', 'closing sentence'],
        },
        {
          index: 1,
          title: 'Giving Reasons for Your Opinion',
          text: 'When you write an opinion, you need to tell the reader why you think that way. Reasons make your writing stronger. Think about the question "Why do I think this?" Your reasons should connect to your opinion. If your opinion is "Dogs make the best pets," your reasons could be: dogs are loyal, dogs like to play, and dogs can learn tricks. Try to give at least two reasons. Use words like "because" and "also" to connect your reasons to your opinion.',
          keyVocabulary: ['reasons', 'because', 'also', 'connect', 'stronger'],
        },
        {
          index: 2,
          title: 'What Is Narrative Writing?',
          text: 'A narrative is a story. In first grade, you can write narratives about things that happened to you or make up a story. A good narrative has characters, a setting, and events that happen in order. You should tell what happened first, next, and last. Use details to make your story interesting. Instead of writing "I went to the park," try writing "I ran to the big park near my house and climbed the tall, twisty slide." Details help the reader see your story in their mind.',
          keyVocabulary: ['narrative', 'sequence', 'details', 'first', 'next', 'last'],
        },
        {
          index: 3,
          title: 'Writing a Strong Ending',
          text: 'Every piece of writing needs a good ending. In opinion writing, your ending should remind the reader of your opinion. You might write: "That is why I believe pizza is the best food." In narrative writing, your ending tells what happened last or how the character felt. You might write: "I smiled all the way home because it was the best day ever." An ending gives the reader a sense of closure — a feeling that the writing is finished and complete. Do not just stop writing — give your reader a real ending.',
          keyVocabulary: ['ending', 'closure', 'complete', 'remind'],
        },
      ],
      practice: [
        { index: 0, question: 'What is an opinion?', type: 'multiple-choice', options: ['A fact that everyone agrees on', 'What you think or believe about something', 'A question you ask', 'A story about your day'], correctAnswer: 'What you think or believe about something', hint: 'An opinion is personal — it is what YOU think.', explanation: 'An opinion is what you think or believe about something. Different people can have different opinions about the same thing.', standardCode: '1.W.1' },
        { index: 1, question: 'Which sentence gives a reason for an opinion? "I like summer ___ I can go swimming."', type: 'fill-blank', correctAnswer: 'because', hint: 'This word connects an opinion to its reason.', explanation: 'The word "because" connects your opinion to your reason. It answers the question "why?"', standardCode: '1.W.1' },
        { index: 2, question: 'What is a narrative?', type: 'short-answer', correctAnswer: 'A narrative is a story that tells about events in order.', hint: 'Think about writing that tells what happened first, next, and last.', explanation: 'A narrative is a story. It tells about events in order, using details to make the story interesting for the reader.', standardCode: '1.W.3' },
        { index: 3, question: 'Which words help you put events in order in a narrative?', type: 'multiple-choice', options: ['Because, also, another', 'First, next, last', 'Big, small, medium', 'Happy, sad, angry'], correctAnswer: 'First, next, last', hint: 'These words show the sequence of events.', explanation: 'The words first, next, and last (and also then and finally) help you tell events in the right order in a narrative.', standardCode: '1.W.3' },
        { index: 4, question: 'Why is it important to write a strong ending?', type: 'short-answer', correctAnswer: 'A strong ending gives the reader a sense of closure and makes the writing feel complete.', hint: 'Think about how the reader feels when the writing just stops suddenly.', explanation: 'A strong ending gives the reader closure — a feeling that the writing is finished. It wraps up the opinion or narrative so it does not just stop.', standardCode: '1.W.1' },
      ],
      assessment: {
        questions: [
          { question: 'Write an opinion sentence about your favorite animal and give one reason.', type: 'short-answer', correctAnswer: 'I think cats are the best animals because they are soft and cuddly.', standardCode: '1.W.1' },
          { question: 'Which type of writing tells a story about events in order?', type: 'multiple-choice', options: ['Opinion writing', 'Narrative writing', 'List writing'], correctAnswer: 'Narrative writing', standardCode: '1.W.3' },
          { question: 'What should you include at the end of an opinion piece?', type: 'short-answer', correctAnswer: 'A closing sentence that reminds the reader of your opinion.', standardCode: '1.W.1' },
        ],
      },
    },
  },
  {
    slug: 'grade1-ela-word-meanings',
    title: 'Words and Their Meanings',
    description: 'Determine the meaning of unknown and multiple-meaning words using context clues',
    subject: 'ela',
    grade: 1,
    gradeBand: 'k5',
    topicCluster: 'Language',
    standardCodes: ['1.L.4'],
    content: {
      intro: {
        title: 'Words and Their Meanings',
        text: 'When you read, you will sometimes come across words you do not know. That is okay! Good readers use clues in the sentence and the words around the unknown word to figure out what it means. These are called context clues. Today we will learn how to use context clues to discover the meanings of new words.',
      },
      segments: [
        {
          index: 0,
          title: 'What Are Context Clues?',
          text: 'Context clues are the words and sentences around an unknown word that help you figure out its meaning. If you read "The enormous elephant was bigger than the car," you might not know the word enormous, but the clue "bigger than the car" tells you it means very, very big. Context clues can come before or after the unknown word. When you find a word you do not know, do not skip it. Instead, read the rest of the sentence carefully and look for clues that help you understand.',
          keyVocabulary: ['context clues', 'unknown word', 'meaning', 'sentence'],
        },
        {
          index: 1,
          title: 'Using the Sentence to Figure Out a Word',
          text: 'One way to figure out a new word is to read the whole sentence and think about what makes sense. If a sentence says "The puppy was famished, so it gobbled up all the food in its bowl," you can figure out that famished means very hungry. The clue is that the puppy ate all its food quickly. Ask yourself: "What word would make sense here?" Then check if your guess fits with the rest of the sentence. This strategy works with many new words you encounter while reading.',
          keyVocabulary: ['strategy', 'makes sense', 'guess', 'fits'],
        },
        {
          index: 2,
          title: 'Words with More Than One Meaning',
          text: 'Some words have more than one meaning. The word "bat" can mean a flying animal or a stick used to hit a baseball. The word "ring" can mean a piece of jewelry or the sound a phone makes. These are called multiple-meaning words. To figure out which meaning is correct, look at the rest of the sentence. If the sentence says "She swung the bat and hit the ball," you know bat means the stick, not the animal. The context clues tell you which meaning fits.',
          keyVocabulary: ['multiple-meaning', 'correct meaning', 'context', 'fits'],
        },
        {
          index: 3,
          title: 'Building Your Vocabulary',
          text: 'Every time you figure out a new word, your vocabulary grows. Vocabulary means all the words you know and understand. The more words you know, the better you can read, write, and talk about ideas. When you learn a new word, try to use it in a sentence of your own. You can also keep a word journal where you write new words and their meanings. The more you practice, the easier it becomes to figure out unfamiliar words on your own.',
          keyVocabulary: ['vocabulary', 'journal', 'practice', 'unfamiliar'],
        },
      ],
      practice: [
        { index: 0, question: 'What are context clues?', type: 'multiple-choice', options: ['Pictures in a book', 'Words around an unknown word that help you figure out its meaning', 'The title of a story', 'Bold words in a glossary'], correctAnswer: 'Words around an unknown word that help you figure out its meaning', hint: 'Think about the words near a word you do not know.', explanation: 'Context clues are the words and sentences around an unknown word. They give you hints about what the word means.', standardCode: '1.L.4' },
        { index: 1, question: '"The tiny kitten was so small it fit in my hand." What does tiny mean?', type: 'short-answer', correctAnswer: 'Tiny means very small.', hint: 'Look at the clue words in the sentence that describe the kitten.', explanation: 'The sentence says the kitten was "so small it fit in my hand." This context clue tells us that tiny means very small.', standardCode: '1.L.4' },
        { index: 2, question: 'A word that has more than one meaning is called a ___-meaning word.', type: 'fill-blank', correctAnswer: 'multiple', hint: 'This word means "more than one."', explanation: 'A multiple-meaning word has more than one meaning. You use context clues to figure out which meaning is correct.', standardCode: '1.L.4' },
        { index: 3, question: '"I saw a bright star in the sky." What does star mean in this sentence?', type: 'multiple-choice', options: ['A famous person', 'A shape on paper', 'A light in the night sky', 'A gold sticker'], correctAnswer: 'A light in the night sky', hint: 'Look at the clue word "sky" in the sentence.', explanation: 'The words "in the sky" are context clues. They tell us that star means a light in the night sky, not a famous person or a sticker.', standardCode: '1.L.4' },
        { index: 4, question: 'What should you do when you find a word you do not know?', type: 'short-answer', correctAnswer: 'Read the rest of the sentence and look for context clues to figure out the meaning.', hint: 'Do not skip the word — use the words around it.', explanation: 'When you find an unknown word, read the whole sentence and look for context clues. Ask yourself what word would make sense in that spot.', standardCode: '1.L.4' },
      ],
      assessment: {
        questions: [
          { question: '"The dog was exhausted after running all day and fell asleep right away." What does exhausted mean?', type: 'short-answer', correctAnswer: 'Exhausted means very tired.', standardCode: '1.L.4' },
          { question: 'Which strategy helps you figure out the meaning of an unknown word?', type: 'multiple-choice', options: ['Skip the word and keep reading', 'Use context clues in the sentence', 'Close the book', 'Ask for a new book'], correctAnswer: 'Use context clues in the sentence', standardCode: '1.L.4' },
          { question: '"She put the ring on her finger." Does ring mean a sound or a piece of jewelry?', type: 'short-answer', correctAnswer: 'Ring means a piece of jewelry because the clue says she put it on her finger.', standardCode: '1.L.4' },
        ],
      },
    },
  },
  {
    slug: 'grade1-ela-comparing-adventures',
    title: 'Comparing Adventures and Experiences',
    description: 'Compare and contrast the adventures and experiences of characters in stories',
    subject: 'ela',
    grade: 1,
    gradeBand: 'k5',
    topicCluster: 'Reading Literature',
    standardCodes: ['1.RL.9'],
    content: {
      intro: {
        title: 'Comparing Adventures and Experiences',
        text: 'Characters in different stories sometimes go on similar adventures or have similar experiences. When we compare, we look at how things are the same. When we contrast, we look at how things are different. Comparing and contrasting characters helps us understand stories in a deeper way.',
      },
      segments: [
        {
          index: 0,
          title: 'What Does It Mean to Compare?',
          text: 'When you compare two things, you look at how they are alike. Two characters in different stories might both go on a trip, both solve a problem, or both learn a lesson. For example, in one story a bear might go looking for food, and in another story a squirrel might go looking for food. Both characters are on an adventure to find something they need. When you notice things that are the same between stories, you are comparing.',
          keyVocabulary: ['compare', 'alike', 'similar', 'same'],
        },
        {
          index: 1,
          title: 'What Does It Mean to Contrast?',
          text: 'When you contrast two things, you look at how they are different. Even when two characters go on a similar adventure, the details might be different. The bear might look for food in the forest, but the squirrel might look for food in a park. The bear might be alone, but the squirrel might have a friend. These differences are contrasts. Looking at both how stories are the same and how they are different helps you think more carefully about what you read.',
          keyVocabulary: ['contrast', 'different', 'differences', 'details'],
        },
        {
          index: 2,
          title: 'Comparing Characters\' Experiences',
          text: 'Characters have experiences — things that happen to them in a story. One character might feel scared when meeting someone new, while another character feels excited. One character might learn to be brave, while another learns to be kind. When you compare experiences, think about how the characters feel, what they learn, and how they change. Ask yourself: "Did both characters have the same feelings? Did they learn the same lesson? Did their adventures end the same way?"',
          keyVocabulary: ['experiences', 'feelings', 'lessons', 'change'],
        },
        {
          index: 3,
          title: 'Using a Venn Diagram to Compare',
          text: 'A Venn diagram is a tool that helps you compare and contrast. It has two big circles that overlap in the middle. In the left circle, you write things that are true only about one story. In the right circle, you write things that are true only about the other story. In the middle where the circles overlap, you write things that are the same in both stories. Venn diagrams make it easy to see how stories are alike and different at the same time.',
          keyVocabulary: ['Venn diagram', 'overlap', 'circles', 'tool'],
        },
      ],
      practice: [
        { index: 0, question: 'What does it mean to compare two stories?', type: 'multiple-choice', options: ['To look at how they are the same', 'To look at how they are different', 'To read them out loud', 'To draw pictures of them'], correctAnswer: 'To look at how they are the same', hint: 'Comparing is about finding similarities.', explanation: 'When you compare two stories, you look at how they are the same or alike.', standardCode: '1.RL.9' },
        { index: 1, question: 'When you look at how two stories are different, you ___ them.', type: 'fill-blank', correctAnswer: 'contrast', hint: 'This word is the opposite of compare.', explanation: 'When you contrast two stories, you look at the differences between them.', standardCode: '1.RL.9' },
        { index: 2, question: 'Story A: A cat gets lost and finds its way home. Story B: A dog gets lost and finds its way home. How are these stories alike?', type: 'short-answer', correctAnswer: 'Both stories are about an animal that gets lost and finds its way home.', hint: 'Think about what happens in both stories.', explanation: 'Both stories share the same adventure — an animal gets lost and finds its way home. The characters are different (cat vs. dog), but the experience is similar.', standardCode: '1.RL.9' },
        { index: 3, question: 'What tool uses two overlapping circles to compare and contrast?', type: 'multiple-choice', options: ['A bar graph', 'A Venn diagram', 'A number line', 'A table of contents'], correctAnswer: 'A Venn diagram', hint: 'It has two circles that share a middle space.', explanation: 'A Venn diagram uses two overlapping circles. The middle section shows how things are alike, and the outer sections show differences.', standardCode: '1.RL.9' },
        { index: 4, question: 'Why is it helpful to compare and contrast characters in stories?', type: 'short-answer', correctAnswer: 'It helps you understand the stories better and think more carefully about what you read.', hint: 'Think about what you learn by looking at what is the same and different.', explanation: 'Comparing and contrasting helps you understand stories in a deeper way. You notice details and ideas you might miss if you only read one story.', standardCode: '1.RL.9' },
      ],
      assessment: {
        questions: [
          { question: 'Story A: A boy is scared to swim but tries and learns he can do it. Story B: A girl is scared to ride a bike but tries and learns she can do it. How are the characters\' experiences alike?', type: 'short-answer', correctAnswer: 'Both characters are scared to try something new but learn they can do it when they try.', standardCode: '1.RL.9' },
          { question: 'What is the difference between comparing and contrasting?', type: 'multiple-choice', options: ['Comparing finds differences; contrasting finds similarities', 'Comparing finds similarities; contrasting finds differences', 'They mean the same thing', 'Neither is about stories'], correctAnswer: 'Comparing finds similarities; contrasting finds differences', standardCode: '1.RL.9' },
          { question: 'In a Venn diagram, where do you write things that are the same about both stories?', type: 'short-answer', correctAnswer: 'In the middle where the two circles overlap.', standardCode: '1.RL.9' },
        ],
      },
    },
  },
  {
    slug: 'grade1-ela-author-reasons',
    title: 'Identifying Reasons an Author Gives',
    description: 'Identify the reasons an author gives to support points in a text',
    subject: 'ela',
    grade: 1,
    gradeBand: 'k5',
    topicCluster: 'Reading Informational',
    standardCodes: ['1.RI.8'],
    content: {
      intro: {
        title: 'Identifying Reasons an Author Gives',
        text: 'When authors write informational texts, they make points about a topic and then give reasons to support those points. A reason explains why the author thinks something is true. Learning to find the author\'s reasons helps you understand the text better and decide if you agree.',
      },
      segments: [
        {
          index: 0,
          title: 'What Is a Point?',
          text: 'A point is an important idea the author wants you to know or believe. It is the main thing the author is saying about the topic. For example, an author might make the point that "bees are important insects." That is the big idea the author wants you to understand. A point is not a small detail — it is the main message. When you read, ask yourself: "What is the author trying to tell me?" That helps you find the point.',
          keyVocabulary: ['point', 'main idea', 'author', 'message'],
        },
        {
          index: 1,
          title: 'What Are Reasons?',
          text: 'Reasons are facts or ideas that explain why the author\'s point is true. They support the point like legs support a table. If the author says "bees are important insects," the reasons might be: bees help flowers grow, bees make honey, and bees help our food supply. Each reason gives evidence that supports the big idea. Without reasons, the author\'s point is just an opinion with nothing to back it up. Reasons make the writing stronger and more convincing.',
          keyVocabulary: ['reasons', 'support', 'evidence', 'facts'],
        },
        {
          index: 2,
          title: 'Finding Reasons in a Text',
          text: 'To find reasons in a text, first figure out the author\'s main point. Then look for sentences that explain why. Authors often use signal words like "because," "for example," "one reason is," or "also" to introduce their reasons. If you read "Kids should drink water because it keeps your body healthy," the word "because" signals the reason. Practice looking for these signal words as you read. They are like arrows pointing you to the reasons.',
          keyVocabulary: ['signal words', 'because', 'for example', 'one reason'],
        },
      ],
      practice: [
        { index: 0, question: 'What is a point an author makes?', type: 'multiple-choice', options: ['A small detail in the text', 'The main idea the author wants you to know', 'A picture in the book', 'The title of a chapter'], correctAnswer: 'The main idea the author wants you to know', hint: 'It is the big idea, not a tiny detail.', explanation: 'A point is the main idea or message the author wants the reader to understand about a topic.', standardCode: '1.RI.8' },
        { index: 1, question: 'Reasons ___ the author\'s point.', type: 'fill-blank', correctAnswer: 'support', hint: 'Think about what holds up the author\'s idea.', explanation: 'Reasons support the author\'s point by explaining why it is true, like legs support a table.', standardCode: '1.RI.8' },
        { index: 2, question: '"You should eat vegetables because they give your body vitamins." What is the reason the author gives?', type: 'short-answer', correctAnswer: 'Vegetables give your body vitamins.', hint: 'Look for the word "because" — the reason comes after it.', explanation: 'The word "because" signals the reason. The reason is that vegetables give your body vitamins.', standardCode: '1.RI.8' },
        { index: 3, question: 'Which word is a signal word that introduces a reason?', type: 'multiple-choice', options: ['The', 'Because', 'And', 'A'], correctAnswer: 'Because', hint: 'This word tells you that a reason is coming next.', explanation: 'The word "because" is a signal word. It tells the reader that a reason is about to be given.', standardCode: '1.RI.8' },
        { index: 4, question: 'Why do authors give reasons in their writing?', type: 'short-answer', correctAnswer: 'Authors give reasons to explain why their point is true and to make their writing stronger.', hint: 'Think about what reasons do for the author\'s point.', explanation: 'Reasons make the author\'s writing stronger and more convincing by explaining why the point is true.', standardCode: '1.RI.8' },
      ],
      assessment: {
        questions: [
          { question: '"Dogs are great pets. They are loyal and they love to play." What is the author\'s point?', type: 'short-answer', correctAnswer: 'Dogs are great pets.', standardCode: '1.RI.8' },
          { question: 'In the text "Dogs are great pets. They are loyal and they love to play," how many reasons does the author give?', type: 'multiple-choice', options: ['One', 'Two', 'Three', 'None'], correctAnswer: 'Two', standardCode: '1.RI.8' },
          { question: 'What signal words can help you find reasons in a text?', type: 'short-answer', correctAnswer: 'Words like because, for example, one reason is, and also.', standardCode: '1.RI.8' },
        ],
      },
    },
  },
  {
    slug: 'grade1-ela-informational-writing',
    title: 'Writing Informational Texts',
    description: 'Write informative or explanatory texts that name a topic, supply facts, and provide closure',
    subject: 'ela',
    grade: 1,
    gradeBand: 'k5',
    topicCluster: 'Writing',
    standardCodes: ['1.W.2'],
    content: {
      intro: {
        title: 'Writing Informational Texts',
        text: 'Informational writing teaches the reader about a topic. When you write an informational text, you name a topic, share facts about it, and write an ending. Informational writing is about real things — not made-up stories. Today we will learn how to write informational texts that teach others something new.',
      },
      segments: [
        {
          index: 0,
          title: 'Naming Your Topic',
          text: 'The first step in informational writing is to name your topic. Your topic is what you are writing about. Start your writing by telling the reader your topic clearly. You might begin with a sentence like "I am going to teach you about frogs" or "This is about how plants grow." A clear topic sentence lets the reader know exactly what they will learn. Pick a topic you know about or have learned about so you can share real facts.',
          keyVocabulary: ['topic', 'topic sentence', 'clearly', 'subject'],
        },
        {
          index: 1,
          title: 'Supplying Facts About Your Topic',
          text: 'After you name your topic, you need to give the reader facts. Facts are true pieces of information. If your topic is frogs, some facts might be: frogs live near water, frogs eat insects, and frogs can jump very far. Try to include at least two or three facts. Write each fact in its own sentence so the reader can understand each one. Make sure your facts all connect to your topic. Do not write about dogs if your topic is frogs!',
          keyVocabulary: ['facts', 'information', 'true', 'connect'],
        },
        {
          index: 2,
          title: 'Writing a Strong Closing',
          text: 'Every informational text needs a closing — an ending that wraps things up. Your closing should remind the reader of your topic or share one final thought. You might write: "Now you know three cool facts about frogs!" or "Frogs are amazing animals that live all over the world." A strong closing does not add brand new information. Instead, it gives the reader a feeling that the writing is finished. Think of it like closing a door gently — everything is wrapped up inside.',
          keyVocabulary: ['closing', 'ending', 'wraps up', 'final thought'],
        },
        {
          index: 3,
          title: 'Putting Your Informational Text Together',
          text: 'Now let us put it all together. First, write your topic sentence to tell the reader what your writing is about. Next, write two or three sentences with facts about your topic. Last, write a closing sentence that wraps things up. Read your writing out loud to make sure it makes sense. Check that all your facts are about the same topic. You can also add details to make your facts more interesting. Instead of "cats have fur," try "cats have soft, warm fur that comes in many colors."',
          keyVocabulary: ['organize', 'details', 'read aloud', 'makes sense'],
        },
      ],
      practice: [
        { index: 0, question: 'What is the first step in informational writing?', type: 'multiple-choice', options: ['Write a closing sentence', 'Name your topic', 'Draw a picture', 'Write a story'], correctAnswer: 'Name your topic', hint: 'You need to tell the reader what you are writing about first.', explanation: 'The first step is to name your topic. This tells the reader exactly what they will learn about.', standardCode: '1.W.2' },
        { index: 1, question: 'Facts are pieces of information that are ___.', type: 'fill-blank', correctAnswer: 'true', hint: 'Facts are not made up.', explanation: 'Facts are true pieces of information. In informational writing, you share real facts about your topic.', standardCode: '1.W.2' },
        { index: 2, question: 'How many facts should you try to include in an informational text?', type: 'multiple-choice', options: ['Zero', 'At least two or three', 'Only one', 'As many as fifty'], correctAnswer: 'At least two or three', hint: 'You need more than one, but you do not need to write a whole book.', explanation: 'Try to include at least two or three facts to give the reader enough information about your topic.', standardCode: '1.W.2' },
        { index: 3, question: 'What does a closing sentence do?', type: 'short-answer', correctAnswer: 'A closing sentence wraps up the writing and reminds the reader of the topic.', hint: 'Think about the end of your writing.', explanation: 'A closing sentence wraps things up and gives the reader a feeling that the writing is finished. It reminds them of the topic.', standardCode: '1.W.2' },
        { index: 4, question: 'Which sentence is a good topic sentence for informational writing about dogs?', type: 'multiple-choice', options: ['Once upon a time there was a dog.', 'I am going to teach you about dogs.', 'Dogs are my favorite.', 'The end.'], correctAnswer: 'I am going to teach you about dogs.', hint: 'A good topic sentence clearly names the topic.', explanation: '"I am going to teach you about dogs" clearly names the topic and lets the reader know this is informational writing.', standardCode: '1.W.2' },
      ],
      assessment: {
        questions: [
          { question: 'What three parts does an informational text need?', type: 'short-answer', correctAnswer: 'A topic sentence, facts about the topic, and a closing sentence.', standardCode: '1.W.2' },
          { question: 'Which of these is a fact about the sun?', type: 'multiple-choice', options: ['The sun is my favorite thing', 'The sun gives Earth light and heat', 'The sun is pretty', 'I like sunny days'], correctAnswer: 'The sun gives Earth light and heat', standardCode: '1.W.2' },
          { question: 'Why is it important that all your facts connect to your topic?', type: 'short-answer', correctAnswer: 'So the reader can learn about one topic without getting confused by unrelated information.', standardCode: '1.W.2' },
        ],
      },
    },
  },
  {
    slug: 'grade1-ela-long-short-vowels',
    title: 'Phonics: Long and Short Vowels',
    description: 'Distinguish long from short vowel sounds in regularly spelled one-syllable words',
    subject: 'ela',
    grade: 1,
    gradeBand: 'k5',
    topicCluster: 'Reading Foundational Skills',
    standardCodes: ['1.RF.3'],
    content: {
      intro: {
        title: 'Long and Short Vowels',
        text: 'Vowels are the letters A, E, I, O, and U. Each vowel can make two main sounds: a short sound and a long sound. Knowing the difference between short and long vowel sounds helps you read and spell words correctly. Today we will learn to tell these sounds apart.',
      },
      segments: [
        {
          index: 0,
          title: 'The Vowels',
          text: 'The English alphabet has 26 letters, and five of them are vowels: A, E, I, O, and U. Every word has at least one vowel in it. Vowels are special because they can make more than one sound. When you see a vowel in a word, you need to figure out which sound it makes. Is it the short sound or the long sound? Learning to hear the difference is one of the most important reading skills in first grade.',
          keyVocabulary: ['vowels', 'A', 'E', 'I', 'O', 'U', 'sounds'],
        },
        {
          index: 1,
          title: 'Short Vowel Sounds',
          text: 'Short vowel sounds are the quick sounds vowels make in many small words. The short A sounds like the A in "cat" and "bat." The short E sounds like the E in "bed" and "pet." The short I sounds like the I in "sit" and "big." The short O sounds like the O in "hot" and "dog." The short U sounds like the U in "cup" and "bug." Many three-letter words with a consonant-vowel-consonant pattern, like "hat" or "pin," have short vowel sounds.',
          keyVocabulary: ['short vowel', 'consonant-vowel-consonant', 'quick', 'CVC'],
        },
        {
          index: 2,
          title: 'Long Vowel Sounds',
          text: 'Long vowel sounds say the name of the vowel. The long A sounds like the A in "cake" and "name." The long E sounds like the E in "tree" and "read." The long I sounds like the I in "bike" and "kite." The long O sounds like the O in "home" and "bone." The long U sounds like the U in "cute" and "tube." One common pattern is the silent E at the end of a word. When a word ends in a silent E, the vowel in the middle usually makes its long sound.',
          keyVocabulary: ['long vowel', 'says its name', 'silent E', 'pattern'],
        },
        {
          index: 3,
          title: 'Telling Long and Short Vowels Apart',
          text: 'Here is a trick to tell long and short vowels apart. Say the word slowly and listen to the vowel. Does the vowel say its name? If yes, it is a long vowel. Does it make a short, quick sound? Then it is a short vowel. Compare "cap" and "cape." In "cap," the A makes a short sound. In "cape," the A says its name — that is the long sound. The silent E at the end changed the vowel sound. Practice with pairs like "hop" and "hope," "kit" and "kite," and "tub" and "tube."',
          keyVocabulary: ['compare', 'listen', 'silent E', 'pairs'],
        },
      ],
      practice: [
        { index: 0, question: 'Which letters are the vowels?', type: 'short-answer', correctAnswer: 'A, E, I, O, and U.', hint: 'There are five of them.', explanation: 'The five vowels in the English alphabet are A, E, I, O, and U. Every word needs at least one vowel.', standardCode: '1.RF.3' },
        { index: 1, question: 'Does the word "cat" have a long or short vowel sound?', type: 'multiple-choice', options: ['Long vowel', 'Short vowel'], correctAnswer: 'Short vowel', hint: 'Say the word. Does the A say its name?', explanation: 'The word "cat" has a short A sound. The A does not say its name — it makes a quick /a/ sound.', standardCode: '1.RF.3' },
        { index: 2, question: 'A long vowel says its ___.', type: 'fill-blank', correctAnswer: 'name', hint: 'Long A sounds like the letter A.', explanation: 'A long vowel says its name. For example, long A sounds like the letter A, as in "cake."', standardCode: '1.RF.3' },
        { index: 3, question: 'Which word has a long I sound?', type: 'multiple-choice', options: ['Pin', 'Kite', 'Sit', 'Big'], correctAnswer: 'Kite', hint: 'Look for the word where I says its name.', explanation: '"Kite" has a long I sound. The silent E at the end makes the I say its name. The other words have short I sounds.', standardCode: '1.RF.3' },
        { index: 4, question: 'What does a silent E at the end of a word do to the vowel?', type: 'short-answer', correctAnswer: 'It makes the vowel say its name (long vowel sound).', hint: 'Think about the difference between "hop" and "hope."', explanation: 'A silent E at the end of a word makes the middle vowel say its name, changing it from a short to a long vowel sound.', standardCode: '1.RF.3' },
      ],
      assessment: {
        questions: [
          { question: 'Sort these words: "cake, bat, bed, bike." Which ones have long vowel sounds?', type: 'short-answer', correctAnswer: 'Cake and bike have long vowel sounds.', standardCode: '1.RF.3' },
          { question: 'Which word has a short O sound?', type: 'multiple-choice', options: ['Home', 'Bone', 'Dog', 'Rope'], correctAnswer: 'Dog', standardCode: '1.RF.3' },
          { question: 'How can you tell if a vowel sound is long or short?', type: 'short-answer', correctAnswer: 'If the vowel says its name, it is long. If it makes a quick sound, it is short.', standardCode: '1.RF.3' },
        ],
      },
    },
  },
  {
    slug: 'grade1-ela-reading-fluency',
    title: 'Fluency: Reading with Expression',
    description: 'Read with sufficient accuracy and fluency to support comprehension, including reading with purpose and understanding',
    subject: 'ela',
    grade: 1,
    gradeBand: 'k5',
    topicCluster: 'Reading Foundational Skills',
    standardCodes: ['1.RF.4'],
    content: {
      intro: {
        title: 'Reading with Expression',
        text: 'Fluent readers do not just say each word — they read with expression, purpose, and understanding. Reading with expression means making your voice match the meaning of the words. It helps you and your listeners understand and enjoy the text. Today we will practice reading fluently with purpose and expression.',
      },
      segments: [
        {
          index: 0,
          title: 'What Is Fluency?',
          text: 'Fluency means reading smoothly, at a good speed, and with expression. A fluent reader does not stop and struggle over every word. Instead, the words flow together in a natural way, almost like talking. Fluency is important because when you do not have to think too hard about each word, you can focus on understanding what the text means. Think of fluency like riding a bike smoothly instead of wobbling and stopping every few seconds.',
          keyVocabulary: ['fluency', 'smoothly', 'speed', 'expression'],
        },
        {
          index: 1,
          title: 'Reading with Purpose',
          text: 'Reading with purpose means you know why you are reading. Are you reading to learn something new? Are you reading for fun? Are you reading to find an answer to a question? When you have a purpose, you pay more attention to the words. If your purpose is to learn about tigers, you will focus on the facts about tigers. If your purpose is to enjoy a funny story, you will pay attention to the silly parts. Always think about why you are reading before you start.',
          keyVocabulary: ['purpose', 'reason', 'focus', 'attention'],
        },
        {
          index: 2,
          title: 'Reading with Expression',
          text: 'Reading with expression means using your voice to show meaning and feeling. When you see an exclamation point, your voice should sound excited or surprised: "Look at that!" When you see a question mark, your voice should go up at the end: "Where is the cat?" When a character is sad, read in a quieter, slower voice. When a character is happy, read in a bright, cheerful voice. Expression makes reading come alive and helps your listeners understand the emotions in the text.',
          keyVocabulary: ['expression', 'voice', 'exclamation point', 'question mark', 'emotions'],
        },
        {
          index: 3,
          title: 'Practicing Fluency',
          text: 'The best way to become a fluent reader is to practice. Try reading the same book or passage more than once. The first time, you might go slowly to figure out the words. The second time, you can read more smoothly. The third time, try adding expression. This is called rereading, and it is one of the best ways to build fluency. You can also listen to someone else read aloud and notice how they use their voice. Then try to read the same way. Practice a little every day and your fluency will grow.',
          keyVocabulary: ['practice', 'rereading', 'read aloud', 'build fluency'],
        },
      ],
      practice: [
        { index: 0, question: 'What does fluency mean?', type: 'multiple-choice', options: ['Reading as fast as possible', 'Reading smoothly, at a good speed, and with expression', 'Reading every word very slowly', 'Reading only easy books'], correctAnswer: 'Reading smoothly, at a good speed, and with expression', hint: 'Fluency is about reading well, not just fast.', explanation: 'Fluency means reading smoothly, at a good speed, and with expression so you can understand what you read.', standardCode: '1.RF.4' },
        { index: 1, question: 'Reading with ___ means you know why you are reading.', type: 'fill-blank', correctAnswer: 'purpose', hint: 'This word means your reason for doing something.', explanation: 'Reading with purpose means you have a reason for reading — to learn, to have fun, or to find an answer.', standardCode: '1.RF.4' },
        { index: 2, question: 'How should your voice sound when you see an exclamation point?', type: 'short-answer', correctAnswer: 'Your voice should sound excited or surprised.', hint: 'An exclamation point shows strong feeling.', explanation: 'An exclamation point means strong feeling. Your voice should sound excited, surprised, or loud to match the emotion.', standardCode: '1.RF.4' },
        { index: 3, question: 'What is one of the best ways to build reading fluency?', type: 'multiple-choice', options: ['Only read new books', 'Reread the same passage multiple times', 'Skip words you do not know', 'Read as fast as you can'], correctAnswer: 'Reread the same passage multiple times', hint: 'Practice makes perfect!', explanation: 'Rereading the same passage helps you read it more smoothly each time. This builds fluency and expression.', standardCode: '1.RF.4' },
        { index: 4, question: 'Why is fluency important for understanding what you read?', type: 'short-answer', correctAnswer: 'When you read fluently, you do not have to struggle over words, so you can focus on understanding the meaning.', hint: 'Think about what your brain can do when it is not stuck on hard words.', explanation: 'Fluency frees up your brain. When you are not struggling with each word, you can pay attention to what the text means.', standardCode: '1.RF.4' },
      ],
      assessment: {
        questions: [
          { question: 'What are three parts of reading fluency?', type: 'short-answer', correctAnswer: 'Reading smoothly, at a good speed, and with expression.', standardCode: '1.RF.4' },
          { question: 'When you see a question mark, how should your voice change?', type: 'multiple-choice', options: ['Your voice should go down', 'Your voice should go up at the end', 'Your voice should get very quiet', 'Your voice should stay the same'], correctAnswer: 'Your voice should go up at the end', standardCode: '1.RF.4' },
          { question: 'What does it mean to read with expression?', type: 'short-answer', correctAnswer: 'It means using your voice to show the meaning and feelings in the text.', standardCode: '1.RF.4' },
        ],
      },
    },
  },
]
