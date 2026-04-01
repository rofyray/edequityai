import type { ModuleSeed } from '../types'

export const GRADE_2_ELA: ModuleSeed[] = [
  {
    slug: 'grade2-ela-theme-and-lesson',
    title: 'Theme: The Lesson of a Story',
    description: 'Recount stories and determine their central message, lesson, or moral',
    subject: 'ela',
    grade: 2,
    gradeBand: 'k5',
    topicCluster: 'Reading Literature',
    standardCodes: ['2.RL.2'],
    content: {
      intro: {
        title: 'Theme: The Lesson of a Story',
        text: 'Every story teaches us something. The lesson or message of a story is called the theme. When you read a story, think about what the characters learn. That helps you find the theme! Today we will practice finding the theme in stories we read.',
      },
      segments: [
        {
          index: 0,
          title: 'What Is a Theme?',
          text: 'The theme is the big lesson or message the author wants you to learn from a story. It is not what happens in the story — it is what the story teaches. For example, if a character shares toys and then everyone is happy, the theme might be "sharing makes people feel good." Themes are often about kindness, honesty, hard work, or friendship. When you finish reading, ask yourself: what did the characters learn? That answer is usually the theme.',
          keyVocabulary: ['theme', 'lesson', 'message', 'moral'],
        },
        {
          index: 1,
          title: 'Recounting a Story',
          text: 'Before you can find the theme, you need to recount the story. Recounting means telling the important parts in order. First, tell what happened at the beginning. Then tell what happened in the middle. Finally, tell what happened at the end. Use words like first, next, then, and last. When you recount a story, you remember the key events that help you figure out the theme.',
          keyVocabulary: ['recount', 'beginning', 'middle', 'end', 'key events'],
        },
        {
          index: 2,
          title: 'Finding the Theme',
          text: 'To find the theme, look at what the main character does and what happens because of those actions. If a character lies and gets in trouble, the theme might be "it is important to tell the truth." If a character keeps trying and finally succeeds, the theme might be "never give up." The theme is not just one word like "dogs" — it is a complete idea like "true friends help each other." Practice asking: what did the character learn?',
          keyVocabulary: ['main character', 'actions', 'consequences', 'complete idea'],
        },
        {
          index: 3,
          title: 'Common Themes in Stories',
          text: 'Many stories share similar themes. Some common themes are: be kind to others, hard work pays off, be honest, treat others the way you want to be treated, and believe in yourself. When you read a new story, think about whether it fits one of these common themes. Sometimes a story has more than one lesson. The most important lesson is the main theme of the story.',
          keyVocabulary: ['common themes', 'kindness', 'honesty', 'main theme'],
        },
      ],
      practice: [
        { index: 0, question: 'A girl does not want to share her crayons. She sits alone at recess. Then she shares and makes a new friend. What is the theme?', type: 'multiple-choice', options: ['Crayons are fun to use', 'Sharing helps you make friends', 'Recess is the best time of day', 'Drawing is hard work'], correctAnswer: 'Sharing helps you make friends', hint: 'Think about what the girl learned when she shared.', explanation: 'The theme is "sharing helps you make friends" because the girl learned that sharing led to making a friend.', standardCode: '2.RL.2' },
        { index: 1, question: 'What is the theme of a story?', type: 'multiple-choice', options: ['The title of the book', 'The names of the characters', 'The lesson or message', 'Where the story takes place'], correctAnswer: 'The lesson or message', hint: 'The theme is what the story teaches you.', explanation: 'The theme is the lesson or message that the author wants the reader to learn from the story.', standardCode: '2.RL.2' },
        { index: 2, question: 'A boy keeps trying to ride his bike even though he falls. He finally learns to ride. What is the theme?', type: 'short-answer', correctAnswer: 'Never give up', hint: 'What did the boy do every time he fell?', explanation: 'The theme is "never give up" because the boy kept trying even when it was hard, and he succeeded.', standardCode: '2.RL.2' },
        { index: 3, question: 'When you recount a story, you tell the important parts in ___.', type: 'fill-blank', correctAnswer: 'order', hint: 'Think about beginning, middle, and end.', explanation: 'Recounting means retelling the important parts of the story in order — first, next, then, last.', standardCode: '2.RL.2' },
        { index: 4, question: 'A turtle tells a lie and his friends stop trusting him. What is the theme?', type: 'multiple-choice', options: ['Turtles are slow', 'It is important to tell the truth', 'Friends always agree', 'Animals can talk in stories'], correctAnswer: 'It is important to tell the truth', hint: 'What happened because the turtle lied?', explanation: 'The theme is "it is important to tell the truth" because lying caused the turtle to lose his friends\' trust.', standardCode: '2.RL.2' },
      ],
      assessment: {
        questions: [
          { question: 'A fox tricks other animals but ends up with no friends. What is the theme?', type: 'multiple-choice', options: ['Foxes are clever', 'Tricking others is not a good way to make friends', 'Animals live in the forest', 'Being alone is fun'], correctAnswer: 'Tricking others is not a good way to make friends', standardCode: '2.RL.2' },
          { question: 'What should you ask yourself to find the theme of a story?', type: 'short-answer', correctAnswer: 'What did the characters learn?', standardCode: '2.RL.2' },
          { question: 'A rabbit works hard all summer to store food. In winter she has plenty to eat. What is the theme?', type: 'multiple-choice', options: ['Rabbits like carrots', 'Hard work pays off', 'Summer is warm', 'Winter is cold'], correctAnswer: 'Hard work pays off', standardCode: '2.RL.2' },
        ],
      },
    },
  },
  {
    slug: 'grade2-ela-character-motivation',
    title: 'Character Motivation: Why Characters Act',
    description: 'Describe how characters respond to major events and challenges in a story',
    subject: 'ela',
    grade: 2,
    gradeBand: 'k5',
    topicCluster: 'Reading Literature',
    standardCodes: ['2.RL.3'],
    content: {
      intro: {
        title: 'Character Motivation: Why Characters Act',
        text: 'Characters in stories face problems and challenges, just like you do in real life. How a character responds to a problem tells us a lot about who they are. Today we will learn to describe how characters in stories respond to challenges and why they make the choices they do.',
      },
      segments: [
        {
          index: 0,
          title: 'What Is Character Motivation?',
          text: 'Motivation is the reason a character does something. Characters have feelings, wants, and needs that make them act in certain ways. If a character is hungry, their motivation might be to find food. If a character misses a friend, their motivation might be to write a letter. When you read, ask yourself: why did the character do that? The answer is their motivation.',
          keyVocabulary: ['motivation', 'reason', 'character', 'feelings'],
        },
        {
          index: 1,
          title: 'Challenges Characters Face',
          text: 'A challenge is a problem a character must deal with. Maybe a character loses something important, has a disagreement with a friend, or needs to learn something new. The challenge is what makes the story interesting. Without a challenge, there would be no story to tell! When reading, look for the problem that the character needs to solve. That is the challenge.',
          keyVocabulary: ['challenge', 'problem', 'disagreement', 'solve'],
        },
        {
          index: 2,
          title: 'How Characters Respond',
          text: 'Different characters respond to challenges in different ways. One character might feel scared but still try. Another character might ask a friend for help. Some characters make mistakes at first and then find a better way. When you describe how a character responds, think about their feelings and their actions. Use sentences like: the character felt worried, so she asked her mom for help.',
          keyVocabulary: ['respond', 'feelings', 'actions', 'describe'],
        },
        {
          index: 3,
          title: 'Using Story Details',
          text: 'Authors use details to show character motivation. Look for clue words about feelings like happy, sad, worried, proud, or frustrated. Look for what the character says and does. If a character says "I will keep trying," that shows determination. If a character says "I am sorry," that shows they learned from a mistake. These details help you understand why characters act the way they do.',
          keyVocabulary: ['details', 'clue words', 'determination', 'understand'],
        },
      ],
      practice: [
        { index: 0, question: 'Sam lost his favorite book at school. He looked in his desk, his backpack, and the lost-and-found. Why did Sam look in so many places?', type: 'short-answer', correctAnswer: 'Because he wanted to find his favorite book', hint: 'Think about what Sam lost and how he felt about it.', explanation: 'Sam was motivated to search many places because the book was important to him and he wanted to find it.', standardCode: '2.RL.3' },
        { index: 1, question: 'What is a character\'s motivation?', type: 'multiple-choice', options: ['The setting of the story', 'The reason a character does something', 'The title of the chapter', 'The ending of the story'], correctAnswer: 'The reason a character does something', hint: 'Motivation is about the "why."', explanation: 'A character\'s motivation is the reason they do something — their wants, needs, or feelings that cause them to act.', standardCode: '2.RL.3' },
        { index: 2, question: 'Maya was nervous about her first day at a new school. She took a deep breath and walked in with a smile. How did Maya respond to her challenge?', type: 'short-answer', correctAnswer: 'She was brave and walked in with a smile', hint: 'What did Maya do even though she was nervous?', explanation: 'Maya responded to her challenge by being brave. Even though she was nervous, she took a deep breath and faced the situation with a smile.', standardCode: '2.RL.3' },
        { index: 3, question: 'A character in a story says, "I will practice every day until I get it right." This shows the character is ___.', type: 'fill-blank', correctAnswer: 'determined', hint: 'Think of a word that means the character will not give up.', explanation: 'The character is determined because they plan to practice every day until they succeed, showing they will not give up.', standardCode: '2.RL.3' },
        { index: 4, question: 'Leo\'s little sister broke his toy. He was upset, but he said, "It\'s okay, it was an accident." What does this tell us about Leo?', type: 'multiple-choice', options: ['He does not like toys', 'He is kind and forgiving', 'He does not have a sister', 'He wants a new toy'], correctAnswer: 'He is kind and forgiving', hint: 'Think about how Leo treated his sister even though he was upset.', explanation: 'Leo responded with kindness and forgiveness. Even though he was upset, he understood it was an accident and chose to be kind.', standardCode: '2.RL.3' },
      ],
      assessment: {
        questions: [
          { question: 'Rosa wants to help her neighbor carry groceries. What might be her motivation?', type: 'multiple-choice', options: ['She wants to be kind', 'She wants the groceries', 'She is bored', 'She does not like her neighbor'], correctAnswer: 'She wants to be kind', standardCode: '2.RL.3' },
          { question: 'A character feels frustrated because he cannot tie his shoes. He asks his big brother to teach him. How does the character respond to his challenge?', type: 'short-answer', correctAnswer: 'He asks for help', standardCode: '2.RL.3' },
          { question: 'Which detail helps you understand a character\'s motivation?', type: 'multiple-choice', options: ['The number of pages in the book', 'What the character says and does', 'The color of the book cover', 'The name of the author'], correctAnswer: 'What the character says and does', standardCode: '2.RL.3' },
        ],
      },
    },
  },
  {
    slug: 'grade2-ela-compare-and-contrast',
    title: 'Compare and Contrast: Different Versions of Stories',
    description: 'Compare and contrast two or more versions of the same story by different authors or from different cultures',
    subject: 'ela',
    grade: 2,
    gradeBand: 'k5',
    topicCluster: 'Reading Literature',
    standardCodes: ['2.RL.9'],
    content: {
      intro: {
        title: 'Compare and Contrast: Different Versions of Stories',
        text: 'Did you know that the same story can be told in different ways? Authors from different cultures may tell a similar story, but the characters, settings, and details may change. Today we will learn to compare and contrast different versions of stories.',
      },
      segments: [
        {
          index: 0,
          title: 'What Does Compare and Contrast Mean?',
          text: 'When you compare, you tell how two things are alike or the same. When you contrast, you tell how two things are different. For stories, you might compare the characters, the setting, or the events. You can use the words "both," "alike," and "same" when comparing. Use the words "different," "but," and "however" when contrasting. Comparing and contrasting helps you think more deeply about what you read.',
          keyVocabulary: ['compare', 'contrast', 'alike', 'different'],
        },
        {
          index: 1,
          title: 'Different Versions of the Same Story',
          text: 'Many fairy tales and folktales have been retold by different authors and in different cultures. For example, the story of Cinderella has been told all around the world. In one version, the main character wears glass slippers. In another version from a different country, she might wear golden shoes. The big idea of the story is the same — a kind character is rewarded — but the details change depending on who is telling the story.',
          keyVocabulary: ['version', 'fairy tale', 'folktale', 'culture', 'retold'],
        },
        {
          index: 2,
          title: 'How to Compare Two Stories',
          text: 'When you compare two versions of a story, ask these questions: Who are the main characters in each version? Where does each story take place? What problem does the character face? How is the problem solved? What is the same in both stories? What is different? You can use a Venn diagram to organize your ideas. The middle section shows what is the same, and the outside sections show what is different.',
          keyVocabulary: ['Venn diagram', 'organize', 'main characters', 'setting'],
        },
      ],
      practice: [
        { index: 0, question: 'When you compare two stories, you tell how they are ___.', type: 'fill-blank', correctAnswer: 'alike', hint: 'Compare means to find things that are the same.', explanation: 'When you compare two stories, you tell how they are alike or similar.', standardCode: '2.RL.9' },
        { index: 1, question: 'Two versions of a fairy tale both have a kind main character who is rewarded. What is this an example of?', type: 'multiple-choice', options: ['A difference between the stories', 'A similarity between the stories', 'A problem in the stories', 'A setting of the stories'], correctAnswer: 'A similarity between the stories', hint: 'Both stories share this same idea.', explanation: 'Since both stories have a kind character who is rewarded, this is a similarity — something the stories share.', standardCode: '2.RL.9' },
        { index: 2, question: 'In one version of The Three Little Pigs, the wolf falls into a pot of soup. In another version, the wolf runs away. What are you doing when you notice this?', type: 'multiple-choice', options: ['Comparing', 'Contrasting', 'Recounting', 'Predicting'], correctAnswer: 'Contrasting', hint: 'You are noticing how the endings are different.', explanation: 'When you notice how two stories are different, you are contrasting them.', standardCode: '2.RL.9' },
        { index: 3, question: 'What graphic organizer helps you show how two stories are alike and different?', type: 'short-answer', correctAnswer: 'Venn diagram', hint: 'It uses two overlapping circles.', explanation: 'A Venn diagram uses two overlapping circles to show similarities in the middle and differences on the outside.', standardCode: '2.RL.9' },
        { index: 4, question: 'Story A takes place in a forest. Story B takes place on a farm. Both stories are about a clever rabbit. Which part is a similarity?', type: 'multiple-choice', options: ['The forest setting', 'The farm setting', 'The clever rabbit character', 'The different places'], correctAnswer: 'The clever rabbit character', hint: 'Which detail is the same in both stories?', explanation: 'The clever rabbit character appears in both stories, so that is a similarity. The settings are different, so those are contrasts.', standardCode: '2.RL.9' },
      ],
      assessment: {
        questions: [
          { question: 'When you contrast two stories, you tell how they are ___.', type: 'short-answer', correctAnswer: 'different', standardCode: '2.RL.9' },
          { question: 'Two versions of a story both have a character who learns to be honest. This is an example of what?', type: 'multiple-choice', options: ['A contrast', 'A similarity', 'A setting', 'A vocabulary word'], correctAnswer: 'A similarity', standardCode: '2.RL.9' },
          { question: 'Why do different cultures sometimes tell the same story in different ways?', type: 'multiple-choice', options: ['Because they want to copy each other', 'Because the big idea matters to many people but details reflect each culture', 'Because there is only one way to tell a story', 'Because stories are not important'], correctAnswer: 'Because the big idea matters to many people but details reflect each culture', standardCode: '2.RL.9' },
        ],
      },
    },
  },
  {
    slug: 'grade2-ela-main-idea-and-details',
    title: 'Main Idea and Details',
    description: 'Identify the main topic and key details of a multi-paragraph informational text',
    subject: 'ela',
    grade: 2,
    gradeBand: 'k5',
    topicCluster: 'Reading Informational',
    standardCodes: ['2.RI.2'],
    content: {
      intro: {
        title: 'Main Idea and Details',
        text: 'When you read a book or article that teaches you about something real, it has a main idea. The main idea is what the text is mostly about. Details are the facts and pieces of information that tell you more about the main idea. Today we will learn how to find the main idea and supporting details.',
      },
      segments: [
        {
          index: 0,
          title: 'What Is the Main Idea?',
          text: 'The main idea is the most important point the author is making. It tells what the whole text is mostly about. If you read a passage about how bees make honey, the main idea is "how bees make honey." The main idea is not a small detail — it is the big topic that all the details connect to. To find the main idea, ask yourself: what is this text mostly about? Your answer should be a short sentence or phrase that covers the whole passage.',
          keyVocabulary: ['main idea', 'topic', 'mostly about', 'author'],
        },
        {
          index: 1,
          title: 'What Are Key Details?',
          text: 'Key details are important facts that support the main idea. They give more information and help you understand the topic better. If the main idea is "how bees make honey," key details might be: bees visit flowers, bees collect nectar, and bees store nectar in the hive. Not every sentence is a key detail. Key details are the facts that connect directly to the main idea and help explain it.',
          keyVocabulary: ['key details', 'facts', 'support', 'information'],
        },
        {
          index: 2,
          title: 'Finding the Main Idea in a Paragraph',
          text: 'Often the main idea is in the first or last sentence of a paragraph. The other sentences give details. Read this example: "Dogs make great pets. They are loyal and loving. They can learn tricks. They like to play with people." The first sentence tells the main idea — dogs make great pets. The other sentences are key details that explain why dogs make great pets.',
          keyVocabulary: ['paragraph', 'first sentence', 'last sentence', 'explain'],
        },
        {
          index: 3,
          title: 'Putting Main Idea and Details Together',
          text: 'When you read informational text, use these steps. First, read the whole passage. Next, ask: what is this mostly about? That is the main idea. Then look for two or three details that tell more about the main idea. You can use a graphic organizer with the main idea on top and details below it. This helps you organize your thinking and remember what you read.',
          keyVocabulary: ['informational text', 'graphic organizer', 'organize', 'steps'],
        },
      ],
      practice: [
        { index: 0, question: 'Read this passage: "Frogs are amazing animals. They can jump very far. They start life as tadpoles in water. They use their long tongues to catch bugs." What is the main idea?', type: 'multiple-choice', options: ['Frogs catch bugs', 'Frogs are amazing animals', 'Tadpoles live in water', 'Frogs can jump'], correctAnswer: 'Frogs are amazing animals', hint: 'Which sentence tells what the whole passage is about?', explanation: 'The main idea is "frogs are amazing animals." All the other sentences give details about why frogs are amazing.', standardCode: '2.RI.2' },
        { index: 1, question: 'What are key details?', type: 'multiple-choice', options: ['The title of a book', 'Small facts that support the main idea', 'Pictures in the text', 'The author\'s name'], correctAnswer: 'Small facts that support the main idea', hint: 'Key details give more information about the main idea.', explanation: 'Key details are important facts that support and tell more about the main idea.', standardCode: '2.RI.2' },
        { index: 2, question: 'The main idea tells what a text is ___ about.', type: 'fill-blank', correctAnswer: 'mostly', hint: 'It is the big idea, not a small detail.', explanation: 'The main idea tells what the text is mostly about — the biggest, most important point.', standardCode: '2.RI.2' },
        { index: 3, question: 'Read this passage: "There are many kinds of weather. It can be sunny, rainy, snowy, or windy. Weather changes from day to day." Which is a key detail?', type: 'multiple-choice', options: ['There are many kinds of weather', 'It can be sunny, rainy, snowy, or windy', 'Weather is a word', 'The sky is blue'], correctAnswer: 'It can be sunny, rainy, snowy, or windy', hint: 'A key detail gives more information about the main idea.', explanation: 'The key detail is "it can be sunny, rainy, snowy, or windy" because it gives more information about the main idea that there are many kinds of weather.', standardCode: '2.RI.2' },
        { index: 4, question: 'Where is the main idea often found in a paragraph?', type: 'multiple-choice', options: ['In the middle only', 'In the first or last sentence', 'It is never in the paragraph', 'Only in the title'], correctAnswer: 'In the first or last sentence', hint: 'Authors often put the main idea at the beginning or end.', explanation: 'The main idea is often found in the first or last sentence of a paragraph. The other sentences give supporting details.', standardCode: '2.RI.2' },
      ],
      assessment: {
        questions: [
          { question: 'Read this passage: "Apples are a healthy snack. They have vitamins. They taste sweet. They are easy to carry in your lunchbox." What is the main idea?', type: 'multiple-choice', options: ['Apples taste sweet', 'Apples have vitamins', 'Apples are a healthy snack', 'Lunchboxes hold food'], correctAnswer: 'Apples are a healthy snack', standardCode: '2.RI.2' },
          { question: 'What question should you ask to find the main idea?', type: 'short-answer', correctAnswer: 'What is this text mostly about?', standardCode: '2.RI.2' },
          { question: 'The main idea is "birds build nests." Which is a key detail?', type: 'multiple-choice', options: ['Birds are animals', 'Birds use twigs, grass, and mud to build nests', 'The sky is big', 'Fish swim in water'], correctAnswer: 'Birds use twigs, grass, and mud to build nests', standardCode: '2.RI.2' },
        ],
      },
    },
  },
  {
    slug: 'grade2-ela-authors-purpose',
    title: 'Author\'s Purpose: What Does the Author Want to Explain?',
    description: 'Identify the main purpose of a text and what the author wants to answer, explain, or describe',
    subject: 'ela',
    grade: 2,
    gradeBand: 'k5',
    topicCluster: 'Reading Informational',
    standardCodes: ['2.RI.6'],
    content: {
      intro: {
        title: 'Author\'s Purpose: What Does the Author Want to Explain?',
        text: 'Every author writes for a reason. Some authors want to teach you about something. Some want to tell you an exciting story. Others want to make you laugh or convince you to do something. The reason an author writes is called the author\'s purpose. Today we will learn how to figure out what the author wants to explain.',
      },
      segments: [
        {
          index: 0,
          title: 'Three Main Purposes for Writing',
          text: 'Authors write for three main reasons. First, they write to inform, which means to teach you facts and information. Second, they write to entertain, which means to tell a fun or interesting story. Third, they write to persuade, which means to convince you to think or do something. When you read a text, ask: is this teaching me, entertaining me, or trying to convince me? That will help you figure out the author\'s purpose.',
          keyVocabulary: ['author\'s purpose', 'inform', 'entertain', 'persuade'],
        },
        {
          index: 1,
          title: 'Writing to Inform',
          text: 'When authors write to inform, they share facts and real information. Textbooks, articles about animals, and how-to instructions are written to inform. These texts teach you something new. You might learn how a plant grows, what life was like long ago, or how to make a paper airplane. Look for facts, headings, and real-world details. These are clues that the author\'s purpose is to inform.',
          keyVocabulary: ['inform', 'facts', 'real information', 'headings'],
        },
        {
          index: 2,
          title: 'Figuring Out What the Author Wants to Explain',
          text: 'To figure out what the author wants to explain, look at the topic and the details. The topic is what the text is about. The details tell you exactly what the author wants you to learn. If a text is about butterflies and gives details about how caterpillars become butterflies, the author wants to explain the life cycle of a butterfly. Ask yourself: what question is the author answering? That tells you what they want to explain.',
          keyVocabulary: ['topic', 'details', 'explain', 'question'],
        },
      ],
      practice: [
        { index: 0, question: 'A book gives facts about how volcanoes erupt. What is the author\'s purpose?', type: 'multiple-choice', options: ['To entertain', 'To inform', 'To persuade', 'To confuse'], correctAnswer: 'To inform', hint: 'The author is sharing real facts about volcanoes.', explanation: 'The author\'s purpose is to inform because the book shares facts and teaches the reader about how volcanoes erupt.', standardCode: '2.RI.6' },
        { index: 1, question: 'The reason an author writes a text is called the author\'s ___.', type: 'fill-blank', correctAnswer: 'purpose', hint: 'It starts with the letter p.', explanation: 'The reason an author writes is called the author\'s purpose.', standardCode: '2.RI.6' },
        { index: 2, question: 'An article explains that recycling helps keep our planet clean and asks you to recycle more. What is the author\'s purpose?', type: 'multiple-choice', options: ['To inform only', 'To entertain only', 'To persuade', 'To tell a funny story'], correctAnswer: 'To persuade', hint: 'The author wants you to do something — recycle more.', explanation: 'The author\'s purpose is to persuade because the article is trying to convince you to recycle more.', standardCode: '2.RI.6' },
        { index: 3, question: 'What question should you ask to figure out the author\'s purpose?', type: 'multiple-choice', options: ['How long is this text?', 'Is the author teaching me, entertaining me, or trying to convince me?', 'What color is the book cover?', 'Who drew the pictures?'], correctAnswer: 'Is the author teaching me, entertaining me, or trying to convince me?', hint: 'Think about the three main reasons authors write.', explanation: 'Asking whether the author is teaching, entertaining, or trying to convince you helps you figure out the author\'s purpose.', standardCode: '2.RI.6' },
        { index: 4, question: 'A passage describes what penguins eat, where they live, and how they keep warm. What does the author want to explain?', type: 'short-answer', correctAnswer: 'How penguins live', hint: 'Think about what all those details have in common.', explanation: 'The author wants to explain how penguins live by giving details about their food, habitat, and how they stay warm.', standardCode: '2.RI.6' },
      ],
      assessment: {
        questions: [
          { question: 'A book tells you step by step how to plant a seed. What is the author\'s purpose?', type: 'multiple-choice', options: ['To entertain', 'To inform', 'To persuade', 'To scare'], correctAnswer: 'To inform', standardCode: '2.RI.6' },
          { question: 'What are the three main reasons authors write?', type: 'short-answer', correctAnswer: 'To inform, to entertain, and to persuade', standardCode: '2.RI.6' },
          { question: 'A poster says "Read every day! Reading makes you smarter!" What is the author\'s purpose?', type: 'multiple-choice', options: ['To inform', 'To entertain', 'To persuade', 'To describe an animal'], correctAnswer: 'To persuade', standardCode: '2.RI.6' },
        ],
      },
    },
  },
  {
    slug: 'grade2-ela-narrative-and-opinion-writing',
    title: 'Narrative and Opinion Writing with Reasons',
    description: 'Write narratives with a sequence of events and opinions supported by reasons',
    subject: 'ela',
    grade: 2,
    gradeBand: 'k5',
    topicCluster: 'Writing',
    standardCodes: ['2.W.1', '2.W.3'],
    content: {
      intro: {
        title: 'Narrative and Opinion Writing with Reasons',
        text: 'Writing lets you share your stories and your ideas with others. When you write a narrative, you tell about something that happened in order. When you write an opinion, you tell what you think and give reasons why. Today we will practice both kinds of writing!',
      },
      segments: [
        {
          index: 0,
          title: 'What Is Narrative Writing?',
          text: 'A narrative tells a story about something that happened. It can be a real story from your life or a made-up story. Every narrative needs a beginning, a middle, and an end. In the beginning, you introduce the characters and the setting. In the middle, you tell what happened in order using words like first, then, next, and after that. At the end, you tell how the story wraps up. Good narratives include details about actions, thoughts, and feelings.',
          keyVocabulary: ['narrative', 'sequence', 'beginning', 'middle', 'end', 'details'],
        },
        {
          index: 1,
          title: 'Using Time-Order Words',
          text: 'Time-order words help your reader follow your narrative. They show the order of events. Some time-order words are: first, next, then, after that, later, and finally. Using these words makes your writing clear and easy to follow. For example: "First, I woke up early. Next, I ate breakfast. Then, I walked to school." Without time-order words, your reader might get confused about what happened when.',
          keyVocabulary: ['time-order words', 'first', 'next', 'then', 'finally'],
        },
        {
          index: 2,
          title: 'What Is Opinion Writing?',
          text: 'An opinion is what you think or believe about something. In opinion writing, you state your opinion and then give reasons to support it. Your opinion might be: "I think recess should be longer." Your reasons might be: "because kids need time to run and play" and "because exercise helps us learn better." Good opinion writing has a clear opinion statement and at least two reasons that explain why you think that way.',
          keyVocabulary: ['opinion', 'reasons', 'support', 'believe', 'statement'],
        },
        {
          index: 3,
          title: 'Giving Strong Reasons',
          text: 'Strong reasons make your opinion more convincing. A strong reason is a fact or an example that shows why your opinion makes sense. Use the word "because" to connect your opinion to your reasons. For example: "I think dogs are the best pets because they are loyal and they love to play." Weak reasons are vague, like "because I said so." Always try to give at least two strong reasons and end with a closing sentence that restates your opinion.',
          keyVocabulary: ['strong reasons', 'convincing', 'because', 'closing sentence'],
        },
      ],
      practice: [
        { index: 0, question: 'Which type of writing tells a story in order?', type: 'multiple-choice', options: ['Opinion writing', 'Narrative writing', 'A list', 'A poem'], correctAnswer: 'Narrative writing', hint: 'This type of writing has a beginning, middle, and end.', explanation: 'Narrative writing tells a story in order with a beginning, middle, and end.', standardCode: '2.W.3' },
        { index: 1, question: 'Put these time-order words in the correct order: finally, first, then, next.', type: 'short-answer', correctAnswer: 'first, next, then, finally', hint: 'Which word goes at the beginning? Which goes at the very end?', explanation: 'The correct order is: first, next, then, finally. These words show the sequence of events from start to finish.', standardCode: '2.W.3' },
        { index: 2, question: 'What must you include in opinion writing to support your opinion?', type: 'fill-blank', correctAnswer: 'reasons', hint: 'They explain why you think something.', explanation: 'In opinion writing, you must include reasons that explain why you hold your opinion.', standardCode: '2.W.1' },
        { index: 3, question: '"I think summer is the best season because we get to swim and we have no homework." Which part is the opinion?', type: 'multiple-choice', options: ['We get to swim', 'We have no homework', 'I think summer is the best season', 'Because'], correctAnswer: 'I think summer is the best season', hint: 'The opinion is what the writer thinks or believes.', explanation: '"I think summer is the best season" is the opinion because it states what the writer believes. The rest are reasons that support it.', standardCode: '2.W.1' },
        { index: 4, question: 'Which is a stronger reason for the opinion "cats make great pets"?', type: 'multiple-choice', options: ['Because I said so', 'Because cats are soft, quiet, and easy to take care of', 'Because I like them', 'Because they just are'], correctAnswer: 'Because cats are soft, quiet, and easy to take care of', hint: 'A strong reason gives specific facts or examples.', explanation: '"Because cats are soft, quiet, and easy to take care of" is a strong reason because it gives specific details that explain the opinion.', standardCode: '2.W.1' },
      ],
      assessment: {
        questions: [
          { question: 'What three parts does every narrative need?', type: 'short-answer', correctAnswer: 'A beginning, a middle, and an end', standardCode: '2.W.3' },
          { question: 'Which word best connects an opinion to a reason?', type: 'multiple-choice', options: ['And', 'Because', 'The', 'But'], correctAnswer: 'Because', standardCode: '2.W.1' },
          { question: 'Which is an example of a time-order word?', type: 'multiple-choice', options: ['Happy', 'Because', 'Next', 'Opinion'], correctAnswer: 'Next', standardCode: '2.W.3' },
        ],
      },
    },
  },
  {
    slug: 'grade2-ela-text-features',
    title: 'Using Text Features',
    description: 'Use captions, bold print, subheadings, glossaries, indexes, and icons to find information in a text',
    subject: 'ela',
    grade: 2,
    gradeBand: 'k5',
    topicCluster: 'Reading Informational',
    standardCodes: ['2.RI.5'],
    content: {
      intro: {
        title: 'Using Text Features',
        text: 'When you read a book that teaches you about something real, it often has special parts that help you find information quickly. These special parts are called text features. Captions, bold print, subheadings, and glossaries are all text features. Today we will learn how to use them to become better readers!',
      },
      segments: [
        {
          index: 0,
          title: 'What Are Text Features?',
          text: 'Text features are parts of a text that are not the main sentences and paragraphs. They are added to help the reader find and understand information. You see text features in textbooks, magazines, and nonfiction books. They include things like bold words, pictures with captions, subheadings that tell what a section is about, and glossaries that define words. Text features are like road signs — they guide you through the text.',
          keyVocabulary: ['text features', 'nonfiction', 'bold', 'captions'],
        },
        {
          index: 1,
          title: 'Bold Print and Subheadings',
          text: 'Bold print is when a word is printed in thick, dark letters. Authors use bold print to show that a word is important. You should pay extra attention to bold words. A subheading is a small title that tells you what the next section is about. Subheadings help you find information quickly. If you are looking for facts about what penguins eat, you can look for a subheading that says "What Penguins Eat" and read just that section.',
          keyVocabulary: ['bold print', 'subheading', 'section', 'important'],
        },
        {
          index: 2,
          title: 'Captions and Glossaries',
          text: 'A caption is a sentence or phrase that explains a picture or photograph. Captions give you extra information that helps you understand what you see. A glossary is a list of important words and their meanings found at the back of a book. It is like a mini-dictionary for the book you are reading. If you see a bold word and do not know what it means, check the glossary! An index is a list at the back of a book that tells you what page to find a topic on.',
          keyVocabulary: ['caption', 'glossary', 'index', 'photograph'],
        },
        {
          index: 3,
          title: 'Using Text Features to Find Information',
          text: 'You do not always need to read an entire book to find what you need. Text features help you search for information. If your teacher asks, "Where do polar bears live?" you can look at subheadings for one about habitat. You can check the index for the word "habitat" or "polar bears." You can read captions under pictures to get quick facts. Using text features saves time and makes you a smarter reader.',
          keyVocabulary: ['search', 'habitat', 'quick facts', 'smarter reader'],
        },
      ],
      practice: [
        { index: 0, question: 'What does bold print tell the reader?', type: 'multiple-choice', options: ['The word is not important', 'The word is important', 'The word is misspelled', 'The word should be skipped'], correctAnswer: 'The word is important', hint: 'Bold words stand out because they are printed in thick, dark letters.', explanation: 'Bold print tells the reader that a word is important and they should pay extra attention to it.', standardCode: '2.RI.5' },
        { index: 1, question: 'A sentence under a picture that explains what the picture shows is called a ___.', type: 'fill-blank', correctAnswer: 'caption', hint: 'It starts with the letter c.', explanation: 'A caption is a sentence or phrase under a picture that explains what the picture shows.', standardCode: '2.RI.5' },
        { index: 2, question: 'Where would you look to find the meaning of a bold word in a nonfiction book?', type: 'multiple-choice', options: ['The title page', 'The glossary', 'The cover of the book', 'The table of contents'], correctAnswer: 'The glossary', hint: 'This part of the book is like a mini-dictionary.', explanation: 'The glossary is at the back of the book and lists important words with their meanings, like a mini-dictionary.', standardCode: '2.RI.5' },
        { index: 3, question: 'What is the purpose of a subheading?', type: 'multiple-choice', options: ['To end a chapter', 'To tell you what a section is about', 'To list vocabulary words', 'To show the author\'s name'], correctAnswer: 'To tell you what a section is about', hint: 'A subheading is like a small title for a section.', explanation: 'A subheading tells you what the next section is about, helping you find information quickly.', standardCode: '2.RI.5' },
        { index: 4, question: 'You want to know what page has information about dolphins. Which text feature would help you the most?', type: 'multiple-choice', options: ['A caption', 'A glossary', 'An index', 'Bold print'], correctAnswer: 'An index', hint: 'This text feature lists topics and their page numbers.', explanation: 'An index lists topics in alphabetical order with page numbers, so you can quickly find the page about dolphins.', standardCode: '2.RI.5' },
      ],
      assessment: {
        questions: [
          { question: 'Which text feature helps you understand a picture in a nonfiction book?', type: 'multiple-choice', options: ['A glossary', 'A caption', 'Bold print', 'A subheading'], correctAnswer: 'A caption', standardCode: '2.RI.5' },
          { question: 'Name two text features that help you find information in a nonfiction book.', type: 'short-answer', correctAnswer: 'Subheadings and an index', standardCode: '2.RI.5' },
          { question: 'A book about ocean animals has a bold word "habitat." Where can you find the meaning of this word?', type: 'multiple-choice', options: ['In the glossary', 'On the front cover', 'In the title', 'In a caption'], correctAnswer: 'In the glossary', standardCode: '2.RI.5' },
        ],
      },
    },
  },
  {
    slug: 'grade2-ela-vowel-teams',
    title: 'Phonics: Vowel Teams and Patterns',
    description: 'Decode words with common vowel teams such as ai, ay, ee, ea, oa, ow, oo, ou, and igh',
    subject: 'ela',
    grade: 2,
    gradeBand: 'k5',
    topicCluster: 'Reading Foundational Skills',
    standardCodes: ['2.RF.3'],
    content: {
      intro: {
        title: 'Phonics: Vowel Teams and Patterns',
        text: 'When two vowels work together to make one sound, we call them a vowel team. Learning vowel teams helps you read many new words. Today we will practice reading words with vowel teams like ai, ay, ee, ea, oa, and more!',
      },
      segments: [
        {
          index: 0,
          title: 'What Are Vowel Teams?',
          text: 'A vowel team is two vowels that appear together in a word and make one sound. Sometimes the first vowel says its name and the second vowel is silent. For example, in the word "rain," the letters a and i work together. The a says its name and the i is silent. The same pattern happens in words like "boat" (o says its name, a is silent) and "team" (e says its name, a is silent). Knowing this pattern helps you read many words.',
          keyVocabulary: ['vowel team', 'silent vowel', 'pattern', 'decode'],
        },
        {
          index: 1,
          title: 'Common Vowel Teams: ai, ay, ee, ea',
          text: 'The vowel team "ai" makes the long a sound, as in rain, train, and wait. The vowel team "ay" also makes the long a sound, as in play, day, and say. Usually "ai" comes in the middle of a word and "ay" comes at the end. The vowel team "ee" makes the long e sound, as in tree, bee, and feet. The vowel team "ea" also makes the long e sound, as in read, seat, and leaf. Practice sounding out these words to build your reading skills.',
          keyVocabulary: ['long a', 'long e', 'ai', 'ay', 'ee', 'ea'],
        },
        {
          index: 2,
          title: 'More Vowel Teams: oa, ow, oo, ou, igh',
          text: 'The vowel team "oa" makes the long o sound, as in boat, coat, and road. The letters "ow" can also make the long o sound, as in snow, grow, and slow. The vowel team "oo" can make two different sounds: the sound in moon and food, or the sound in book and cook. The letters "ou" make the ow sound, as in cloud and house. The pattern "igh" makes the long i sound, as in night, light, and right. When you see these patterns, try the sounds you know!',
          keyVocabulary: ['long o', 'oa', 'ow', 'oo', 'ou', 'igh'],
        },
      ],
      practice: [
        { index: 0, question: 'Which vowel team do you hear in the word "train"?', type: 'multiple-choice', options: ['ee', 'ai', 'oa', 'oo'], correctAnswer: 'ai', hint: 'Look at the two vowels in the middle of the word.', explanation: 'The word "train" has the vowel team "ai," which makes the long a sound.', standardCode: '2.RF.3' },
        { index: 1, question: 'The vowel team that makes the long e sound in "leaf" is ___.', type: 'fill-blank', correctAnswer: 'ea', hint: 'Look at the two vowels in the word leaf.', explanation: 'In "leaf," the vowel team "ea" makes the long e sound.', standardCode: '2.RF.3' },
        { index: 2, question: 'Which word has the same vowel team sound as "boat"?', type: 'multiple-choice', options: ['boot', 'coat', 'bait', 'beet'], correctAnswer: 'coat', hint: 'Look for a word with the "oa" vowel team.', explanation: '"Coat" has the same "oa" vowel team as "boat," both making the long o sound.', standardCode: '2.RF.3' },
        { index: 3, question: 'Where does the vowel team "ay" usually appear in a word?', type: 'multiple-choice', options: ['At the beginning', 'In the middle', 'At the end', 'It can go anywhere'], correctAnswer: 'At the end', hint: 'Think about words like play, day, and say.', explanation: 'The vowel team "ay" usually appears at the end of a word, as in play, day, and say.', standardCode: '2.RF.3' },
        { index: 4, question: 'Which pattern makes the long i sound in the word "night"?', type: 'multiple-choice', options: ['ai', 'ea', 'igh', 'oo'], correctAnswer: 'igh', hint: 'Look at the letters between n and t.', explanation: 'The pattern "igh" in "night" makes the long i sound. Other examples include light and right.', standardCode: '2.RF.3' },
      ],
      assessment: {
        questions: [
          { question: 'What vowel team do you hear in the word "feet"?', type: 'multiple-choice', options: ['ea', 'ee', 'ai', 'oa'], correctAnswer: 'ee', standardCode: '2.RF.3' },
          { question: 'Read this word: "cloud." What vowel pattern makes the ow sound?', type: 'short-answer', correctAnswer: 'ou', standardCode: '2.RF.3' },
          { question: 'Which word has a vowel team that makes the long o sound?', type: 'multiple-choice', options: ['moon', 'snow', 'tree', 'rain'], correctAnswer: 'snow', standardCode: '2.RF.3' },
        ],
      },
    },
  },
  {
    slug: 'grade2-ela-complete-sentences',
    title: 'Writing Complete Sentences',
    description: 'Produce, expand, and rearrange complete simple and compound sentences',
    subject: 'ela',
    grade: 2,
    gradeBand: 'k5',
    topicCluster: 'Language',
    standardCodes: ['2.L.1f'],
    content: {
      intro: {
        title: 'Writing Complete Sentences',
        text: 'A complete sentence tells a whole thought. It has a subject (who or what the sentence is about) and a predicate (what happens). When you write complete sentences, your reader can understand exactly what you mean. Today we will practice writing, expanding, and improving complete sentences!',
      },
      segments: [
        {
          index: 0,
          title: 'What Makes a Sentence Complete?',
          text: 'A complete sentence needs two parts. The subject tells who or what the sentence is about. The predicate tells what the subject does or is. "The cat sleeps" is a complete sentence: "the cat" is the subject and "sleeps" is the predicate. "Runs fast" is not a complete sentence because it is missing a subject — we do not know who runs fast. Every complete sentence starts with a capital letter and ends with punctuation like a period, question mark, or exclamation point.',
          keyVocabulary: ['complete sentence', 'subject', 'predicate', 'punctuation'],
        },
        {
          index: 1,
          title: 'Fragments and How to Fix Them',
          text: 'A fragment is a group of words that looks like a sentence but is missing something. "The big brown dog" is a fragment because there is no predicate — we do not know what the dog does. To fix it, add a predicate: "The big brown dog barks loudly." "Jumped over the fence" is a fragment because there is no subject. To fix it, add a subject: "The rabbit jumped over the fence." Always check your writing to make sure every sentence is complete.',
          keyVocabulary: ['fragment', 'fix', 'add', 'check'],
        },
        {
          index: 2,
          title: 'Expanding Sentences',
          text: 'You can make your sentences better by adding details. Start with a simple sentence like "The bird sings." Then ask yourself: what kind of bird? Where does it sing? When? You might expand it to: "The little blue bird sings in the tree every morning." Adding adjectives, places, and time words makes your sentences more interesting and helps your reader picture what is happening. Expanding sentences is a great way to improve your writing.',
          keyVocabulary: ['expand', 'adjectives', 'details', 'improve'],
        },
        {
          index: 3,
          title: 'Compound Sentences',
          text: 'A compound sentence joins two complete sentences using a connecting word like "and," "but," or "so." For example: "I like apples" and "I like oranges" can become "I like apples, and I like oranges." Use "and" to add information, "but" to show a difference, and "so" to show a result. Remember to put a comma before the connecting word. Compound sentences make your writing flow better and sound more grown-up.',
          keyVocabulary: ['compound sentence', 'connecting word', 'comma', 'and', 'but', 'so'],
        },
      ],
      practice: [
        { index: 0, question: 'Which is a complete sentence?', type: 'multiple-choice', options: ['The tall tree.', 'Running to the park.', 'My dog loves to play fetch.', 'Under the big blue sky.'], correctAnswer: 'My dog loves to play fetch.', hint: 'A complete sentence has a subject and a predicate.', explanation: '"My dog loves to play fetch" is a complete sentence because it has a subject (my dog) and a predicate (loves to play fetch).', standardCode: '2.L.1f' },
        { index: 1, question: 'What two parts does every complete sentence need?', type: 'short-answer', correctAnswer: 'A subject and a predicate', hint: 'One part tells who or what, the other tells what happens.', explanation: 'Every complete sentence needs a subject (who or what the sentence is about) and a predicate (what happens).', standardCode: '2.L.1f' },
        { index: 2, question: '"The funny clown." Is this a complete sentence or a fragment?', type: 'multiple-choice', options: ['Complete sentence', 'Fragment'], correctAnswer: 'Fragment', hint: 'Does it tell what the clown does?', explanation: 'This is a fragment because it has a subject (the funny clown) but no predicate — we do not know what the clown does.', standardCode: '2.L.1f' },
        { index: 3, question: 'Which connecting word shows a difference between two ideas?', type: 'multiple-choice', options: ['And', 'But', 'So', 'Then'], correctAnswer: 'But', hint: 'This word is used when two ideas are opposite or different.', explanation: 'The word "but" is used to connect two ideas that are different, as in "I wanted to play outside, but it was raining."', standardCode: '2.L.1f' },
        { index: 4, question: 'Expand this sentence by adding a detail: "The girl reads."', type: 'short-answer', correctAnswer: 'The girl reads a book at the library.', hint: 'Add information about what she reads or where.', explanation: 'You can expand "The girl reads" by adding details like what she reads and where, for example: "The girl reads a book at the library."', standardCode: '2.L.1f' },
      ],
      assessment: {
        questions: [
          { question: 'Which is a fragment?', type: 'multiple-choice', options: ['The cat sat on the mat.', 'Running through the field.', 'We went to the store.', 'She likes ice cream.'], correctAnswer: 'Running through the field.', standardCode: '2.L.1f' },
          { question: 'What connecting word would you use to join "I was tired" and "I went to bed"?', type: 'multiple-choice', options: ['But', 'And', 'So', 'Or'], correctAnswer: 'So', standardCode: '2.L.1f' },
          { question: 'Fix this fragment by making it a complete sentence: "The brown puppy."', type: 'short-answer', correctAnswer: 'The brown puppy played in the yard.', standardCode: '2.L.1f' },
        ],
      },
    },
  },
  {
    slug: 'grade2-ela-context-clues',
    title: 'Using Context Clues for Vocabulary',
    description: 'Use sentence-level context as a clue to the meaning of a word or phrase',
    subject: 'ela',
    grade: 2,
    gradeBand: 'k5',
    topicCluster: 'Language',
    standardCodes: ['2.L.4a'],
    content: {
      intro: {
        title: 'Using Context Clues for Vocabulary',
        text: 'Sometimes when you read, you come across a word you do not know. But you do not always need a dictionary! The other words in the sentence can help you figure out what the new word means. These helpful hints are called context clues. Today we will practice using context clues to learn new words!',
      },
      segments: [
        {
          index: 0,
          title: 'What Are Context Clues?',
          text: 'Context clues are hints that the author gives in the sentence or nearby sentences to help you figure out the meaning of an unfamiliar word. The context is everything around the word — the other words, the sentence, and even the whole paragraph. For example: "The enormous elephant was the biggest animal at the zoo." The words "biggest animal" help you understand that "enormous" means very big. Good readers use context clues all the time!',
          keyVocabulary: ['context clues', 'unfamiliar', 'hints', 'meaning'],
        },
        {
          index: 1,
          title: 'Types of Context Clues',
          text: 'Authors give context clues in different ways. Sometimes they give a definition right in the sentence: "A habitat, the place where an animal lives, can be a forest or an ocean." Sometimes they give an example: "She felt jubilant, jumping up and down and cheering." Sometimes they give an opposite: "He was not shy; he was very bold and spoke to everyone." Each of these clues helps you figure out the meaning of the tricky word.',
          keyVocabulary: ['definition', 'example', 'opposite', 'tricky word'],
        },
        {
          index: 2,
          title: 'How to Use Context Clues',
          text: 'When you find a word you do not know, follow these steps. First, read the whole sentence. Next, look for clue words around the unknown word. Then, think about what would make sense in the sentence. Finally, try replacing the unknown word with your guess and see if the sentence still makes sense. If it does, you probably figured out the meaning! If it does not, reread and look for more clues.',
          keyVocabulary: ['reread', 'clue words', 'makes sense', 'guess'],
        },
      ],
      practice: [
        { index: 0, question: '"The arid desert had no rain for months and all the plants were dry." What does "arid" mean?', type: 'multiple-choice', options: ['Wet', 'Very dry', 'Cold', 'Dark'], correctAnswer: 'Very dry', hint: 'Look at the clues "no rain" and "dry."', explanation: 'The context clues "no rain" and "plants were dry" help you understand that "arid" means very dry.', standardCode: '2.L.4a' },
        { index: 1, question: 'What are context clues?', type: 'multiple-choice', options: ['Pictures in a book', 'Hints in a sentence that help you figure out a word\'s meaning', 'The title of a story', 'Bold words in a glossary'], correctAnswer: 'Hints in a sentence that help you figure out a word\'s meaning', hint: 'They are in the words around the unknown word.', explanation: 'Context clues are hints found in the sentence or nearby sentences that help you figure out the meaning of an unfamiliar word.', standardCode: '2.L.4a' },
        { index: 2, question: '"The puppy was famished, so it gobbled up all its food in seconds." What does "famished" mean?', type: 'short-answer', correctAnswer: 'Very hungry', hint: 'Think about why the puppy ate all its food so quickly.', explanation: 'The clue "gobbled up all its food in seconds" shows that the puppy was very hungry, so "famished" means very hungry.', standardCode: '2.L.4a' },
        { index: 3, question: 'What is the first step when you find a word you do not know?', type: 'multiple-choice', options: ['Skip the word', 'Close the book', 'Read the whole sentence', 'Ask a friend'], correctAnswer: 'Read the whole sentence', hint: 'You need to see all the clue words around the unknown word.', explanation: 'The first step is to read the whole sentence so you can find context clues that help you figure out the unknown word.', standardCode: '2.L.4a' },
        { index: 4, question: '"The timid kitten hid under the bed because it was scared of the loud noise." What does "timid" mean?', type: 'fill-blank', correctAnswer: 'shy or scared', hint: 'The kitten hid because it was scared.', explanation: 'The clues "hid under the bed" and "scared of the loud noise" show that "timid" means shy or easily scared.', standardCode: '2.L.4a' },
      ],
      assessment: {
        questions: [
          { question: '"The children were elated when they won the game, smiling and cheering." What does "elated" mean?', type: 'multiple-choice', options: ['Sad', 'Angry', 'Very happy', 'Confused'], correctAnswer: 'Very happy', standardCode: '2.L.4a' },
          { question: 'What should you do after you guess a word\'s meaning using context clues?', type: 'short-answer', correctAnswer: 'Try replacing the word with your guess to see if the sentence still makes sense', standardCode: '2.L.4a' },
          { question: '"The fragile vase broke into pieces when it fell." What does "fragile" mean?', type: 'multiple-choice', options: ['Strong', 'Heavy', 'Easily broken', 'Colorful'], correctAnswer: 'Easily broken', standardCode: '2.L.4a' },
        ],
      },
    },
  },
  {
    slug: 'grade2-ela-asking-answering-questions',
    title: 'Asking and Answering Questions About a Text',
    description: 'Ask and answer questions such as who, what, where, when, why, and how about key details in a text',
    subject: 'ela',
    grade: 2,
    gradeBand: 'k5',
    topicCluster: 'Reading Literature',
    standardCodes: ['2.RL.1'],
    content: {
      intro: {
        title: 'Asking and Answering Questions About a Text',
        text: 'Good readers ask questions while they read. Asking questions like who, what, where, when, why, and how helps you understand the story better. It also helps you remember important details. Today we will practice asking and answering questions about what we read!',
      },
      segments: [
        {
          index: 0,
          title: 'The Question Words',
          text: 'There are six important question words that help you understand a story. "Who" asks about the characters or people. "What" asks about what happened or what something is. "Where" asks about the place or setting. "When" asks about the time. "Why" asks about the reason something happened. "How" asks about the way something happened. These question words are your reading tools — use them every time you read!',
          keyVocabulary: ['who', 'what', 'where', 'when', 'why', 'how'],
        },
        {
          index: 1,
          title: 'Finding Answers in the Text',
          text: 'When you ask a question about a story, the answer is usually right in the text. This means you can go back to the story and point to the words that give you the answer. For example, if the story says "Maria went to the park after school," you can answer: Who? Maria. Where? The park. When? After school. Always look back at the text to find your answers. Do not just guess — use the words the author wrote.',
          keyVocabulary: ['answer', 'text', 'look back', 'point to'],
        },
        {
          index: 2,
          title: 'Asking Your Own Questions',
          text: 'You can also ask your own questions while you read. Before you read, look at the title and pictures and ask: what might this story be about? While you read, ask: why did the character do that? What will happen next? After you read, ask: what was the most important part? Asking questions keeps your brain active and helps you understand and remember the story much better.',
          keyVocabulary: ['before reading', 'during reading', 'after reading', 'predict'],
        },
      ],
      practice: [
        { index: 0, question: 'Read: "Ben and his sister walked to the library on Saturday." Who walked to the library?', type: 'multiple-choice', options: ['Ben only', 'Ben and his sister', 'Ben\'s mom', 'The librarian'], correctAnswer: 'Ben and his sister', hint: 'Look for the "who" in the sentence.', explanation: 'The sentence says "Ben and his sister walked to the library," so the answer to "who" is Ben and his sister.', standardCode: '2.RL.1' },
        { index: 1, question: 'Which question word asks about the place where something happens?', type: 'multiple-choice', options: ['Who', 'What', 'Where', 'When'], correctAnswer: 'Where', hint: 'This question word is about location.', explanation: '"Where" asks about the place or setting where something happens.', standardCode: '2.RL.1' },
        { index: 2, question: 'Read: "The fox hid in the bushes because he heard a loud noise." Why did the fox hide?', type: 'short-answer', correctAnswer: 'Because he heard a loud noise', hint: 'Look for the word "because" in the sentence.', explanation: 'The text says the fox hid "because he heard a loud noise." The word "because" tells you the reason (the why).', standardCode: '2.RL.1' },
        { index: 3, question: 'Where should you look to find the answer to a question about a story?', type: 'multiple-choice', options: ['In a different book', 'On the book cover', 'Back in the text', 'You should just guess'], correctAnswer: 'Back in the text', hint: 'The author put the answer in the words of the story.', explanation: 'You should look back in the text to find the answer. The author uses words that give you the information you need.', standardCode: '2.RL.1' },
        { index: 4, question: 'Read: "Every morning, the rooster crows at sunrise." When does the rooster crow?', type: 'fill-blank', correctAnswer: 'at sunrise', hint: 'Look for the time word in the sentence.', explanation: 'The sentence says the rooster crows "at sunrise," which answers the "when" question.', standardCode: '2.RL.1' },
      ],
      assessment: {
        questions: [
          { question: 'Read: "Lucy planted flowers in her garden because she wanted her yard to look pretty." Why did Lucy plant flowers?', type: 'multiple-choice', options: ['Because she was bored', 'Because she wanted her yard to look pretty', 'Because her mom told her to', 'Because it was raining'], correctAnswer: 'Because she wanted her yard to look pretty', standardCode: '2.RL.1' },
          { question: 'Which question word asks about a person or character?', type: 'short-answer', correctAnswer: 'Who', standardCode: '2.RL.1' },
          { question: 'Read: "The children played soccer in the field after lunch." Where did the children play soccer?', type: 'multiple-choice', options: ['At home', 'In the gym', 'In the field', 'At the store'], correctAnswer: 'In the field', standardCode: '2.RL.1' },
        ],
      },
    },
  },
  {
    slug: 'grade2-ela-character-responses',
    title: 'Describing How Characters Respond',
    description: 'Describe how characters in a story respond to major events and challenges',
    subject: 'ela',
    grade: 2,
    gradeBand: 'k5',
    topicCluster: 'Reading Literature',
    standardCodes: ['2.RL.3'],
    content: {
      intro: {
        title: 'Describing How Characters Respond',
        text: 'Characters in stories face big events and challenges, just like real people do. How a character responds shows us what kind of person they are. Some characters are brave, some are kind, and some learn important lessons. Today we will practice describing how characters respond to the events and challenges in their stories!',
      },
      segments: [
        {
          index: 0,
          title: 'Major Events and Challenges',
          text: 'A major event is something big that happens in a story and changes things for the characters. It could be a storm, moving to a new town, losing something important, or meeting someone new. A challenge is a problem or difficulty a character must face. For example, a character might need to stand up to a bully, learn a hard skill, or help a friend in trouble. Major events and challenges are what make stories exciting.',
          keyVocabulary: ['major event', 'challenge', 'difficulty', 'exciting'],
        },
        {
          index: 1,
          title: 'How Characters Respond',
          text: 'Characters respond to events in different ways. They might feel scared, happy, sad, worried, or angry. Then they take action based on their feelings. A brave character might face a challenge head-on. A thoughtful character might make a careful plan. Some characters ask for help, and others try to solve problems on their own. When you read, pay attention to what characters say, do, think, and feel — these are all parts of their response.',
          keyVocabulary: ['respond', 'feelings', 'action', 'brave', 'thoughtful'],
        },
        {
          index: 2,
          title: 'Describing a Character\'s Response',
          text: 'When you describe how a character responds, use complete sentences that include the event and the response. For example: "When the bridge broke, the troll felt worried, so he asked the birds for help building a new one." Notice how this sentence tells what happened (the bridge broke), how the character felt (worried), and what the character did (asked for help). Using this pattern helps you describe character responses clearly.',
          keyVocabulary: ['describe', 'event', 'response', 'pattern'],
        },
        {
          index: 3,
          title: 'What Responses Tell Us About Characters',
          text: 'A character\'s response tells us about their personality. If a character shares with others during a hard time, we learn that the character is generous. If a character keeps trying after failing, we learn that the character is determined. If a character apologizes when they make a mistake, we learn that the character is honest and caring. Authors use character responses to show us who the characters really are on the inside.',
          keyVocabulary: ['personality', 'generous', 'determined', 'honest'],
        },
      ],
      practice: [
        { index: 0, question: 'A storm knocks down a bird\'s nest. The bird gathers sticks and builds a new nest. How does the bird respond to the challenge?', type: 'short-answer', correctAnswer: 'The bird builds a new nest', hint: 'What does the bird do after the storm?', explanation: 'The bird responds to the challenge by gathering sticks and building a new nest, showing it is determined and resourceful.', standardCode: '2.RL.3' },
        { index: 1, question: 'What is a major event in a story?', type: 'multiple-choice', options: ['A small detail about the setting', 'Something big that happens and changes things for the characters', 'The title of the story', 'A word in bold print'], correctAnswer: 'Something big that happens and changes things for the characters', hint: 'Major events are big and important.', explanation: 'A major event is something big that happens in the story and changes things for the characters, like a storm or moving to a new place.', standardCode: '2.RL.3' },
        { index: 2, question: 'A girl drops her ice cream. She starts to cry, but then she takes a deep breath and says, "I can get another one." What does this response tell us about the girl?', type: 'multiple-choice', options: ['She does not like ice cream', 'She is strong and can handle disappointment', 'She is mean', 'She never gets upset'], correctAnswer: 'She is strong and can handle disappointment', hint: 'Think about what the girl does after she is upset.', explanation: 'The girl\'s response shows she is strong and can handle disappointment. She was upset at first but then calmed down and thought of a solution.', standardCode: '2.RL.3' },
        { index: 3, question: 'When describing how a character responds, you should tell what happened and what the character ___.', type: 'fill-blank', correctAnswer: 'did', hint: 'A response includes feelings and actions.', explanation: 'When describing a character\'s response, tell what happened (the event) and what the character did (their action).', standardCode: '2.RL.3' },
        { index: 4, question: 'A boy sees a new student sitting alone at lunch. He walks over and asks, "Do you want to sit with me?" What does this response show about the boy?', type: 'multiple-choice', options: ['He is shy', 'He is unkind', 'He is friendly and caring', 'He does not like lunch'], correctAnswer: 'He is friendly and caring', hint: 'Think about why the boy talked to the new student.', explanation: 'The boy\'s response shows he is friendly and caring because he noticed someone was alone and chose to be kind.', standardCode: '2.RL.3' },
      ],
      assessment: {
        questions: [
          { question: 'A cat gets stuck in a tree. A girl climbs up carefully and brings the cat down. How does the girl respond to the challenge?', type: 'multiple-choice', options: ['She walks away', 'She calls the police', 'She carefully climbs up and rescues the cat', 'She starts to cry'], correctAnswer: 'She carefully climbs up and rescues the cat', standardCode: '2.RL.3' },
          { question: 'What can a character\'s response to a challenge tell us?', type: 'short-answer', correctAnswer: 'It tells us about the character\'s personality', standardCode: '2.RL.3' },
          { question: 'A bear loses his way in the woods. He stays calm and follows the river back home. What does this tell us about the bear?', type: 'multiple-choice', options: ['He is scared of water', 'He is calm and smart', 'He does not like the woods', 'He is lost forever'], correctAnswer: 'He is calm and smart', standardCode: '2.RL.3' },
        ],
      },
    },
  },
]
