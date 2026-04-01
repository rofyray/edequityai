import type { ModuleSeed } from '../types'

export const GRADE_K_ELA: ModuleSeed[] = [
  {
    slug: 'gradeK-ela-print-concepts',
    title: 'Print Concepts',
    description: 'Understand the organization and basic features of print',
    subject: 'ela',
    grade: 0,
    gradeBand: 'k5',
    topicCluster: 'Reading Foundations',
    standardCodes: ['K.RF.1'],
    content: {
      intro: {
        title: 'Print Concepts',
        text: 'Books are full of words and pictures that tell us stories and teach us new things. Today we will learn how books work and how the words on a page are organized. Understanding print helps us become readers!',
      },
      segments: [
        {
          index: 0,
          title: 'Parts of a Book',
          text: 'Every book has a front cover and a back cover. The front cover usually shows the title of the book and the name of the person who wrote it, called the author. Some books also have the name of the person who drew the pictures, called the illustrator. When we open a book, we hold it right-side up and start with the front cover. The title tells us what the book is about. Before we read, we can look at the cover and guess what the story might be about.',
          keyVocabulary: ['cover', 'title', 'author', 'illustrator'],
        },
        {
          index: 1,
          title: 'Reading Direction',
          text: 'When we read in English, we start at the top of the page and read to the bottom. We also read each line from left to right, just like the way you write your name. When we finish one line, we move down to the next line and start at the left side again. This is called return sweep. Try using your finger to follow the words on a page from left to right, then sweep back to the start of the next line. This helps your eyes learn where to go.',
          keyVocabulary: ['left', 'right', 'top', 'bottom', 'return sweep'],
        },
        {
          index: 2,
          title: 'Words, Letters, and Spaces',
          text: 'A page is made up of words, and words are made up of letters. Each word is separated by a space. Spaces are the little gaps between words that help us see where one word ends and the next word begins. Look at this sentence: "The cat sat." There are three words with spaces between them. Without spaces, it would look like "Thecatsat" and be very hard to read! Counting the spaces helps us figure out how many words are in a sentence.',
          keyVocabulary: ['word', 'letter', 'space', 'sentence'],
        },
        {
          index: 3,
          title: 'Pages and Page Turns',
          text: 'Books have many pages. Each page has a number so we know where we are in the book. We turn pages from right to left, one at a time, to keep going in the story. The words on each page connect to the next page. When you see a page number, it tells you which page you are reading. If someone says turn to page five, you can find the number 5 on a page. The story keeps going from the first page all the way to the last page.',
          keyVocabulary: ['page', 'page number', 'turn'],
        },
      ],
      practice: [
        { index: 0, question: 'Where do we find the title of a book?', type: 'multiple-choice', options: ['On the back cover', 'On the front cover', 'On the last page', 'Inside the book only'], correctAnswer: 'On the front cover', hint: 'Think about what you see first when you pick up a book.', explanation: 'The title of a book is found on the front cover. It tells us the name of the book.', standardCode: 'K.RF.1' },
        { index: 1, question: 'When we read English, which direction do we read?', type: 'multiple-choice', options: ['Right to left', 'Bottom to top', 'Left to right', 'Any direction'], correctAnswer: 'Left to right', hint: 'Think about which side of the page you start on.', explanation: 'In English, we read from left to right across each line.', standardCode: 'K.RF.1' },
        { index: 2, question: 'What separates one word from the next word on a page?', type: 'short-answer', correctAnswer: 'a space', hint: 'Look at the gaps between words in a sentence.', explanation: 'Spaces are the small gaps between words. They help us see where each word begins and ends.', standardCode: 'K.RF.1' },
        { index: 3, question: 'The person who writes a book is called the ___.', type: 'fill-blank', correctAnswer: 'author', hint: 'This word starts with the letter A.', explanation: 'The author is the person who writes the words in a book.', standardCode: 'K.RF.1' },
        { index: 4, question: 'How many words are in this sentence? "I like dogs."', type: 'short-answer', correctAnswer: '3', hint: 'Count the spaces between words, then add one.', explanation: 'The sentence "I like dogs" has three words: I, like, and dogs.', standardCode: 'K.RF.1' },
      ],
      assessment: {
        questions: [
          { question: 'What do we call the person who draws the pictures in a book?', type: 'short-answer', correctAnswer: 'illustrator', standardCode: 'K.RF.1' },
          { question: 'When you finish reading one line, where do you look next?', type: 'multiple-choice', options: ['Back to the right side', 'Down to the left side of the next line', 'Up to the top of the page', 'At the pictures'], correctAnswer: 'Down to the left side of the next line', standardCode: 'K.RF.1' },
          { question: 'Why are spaces important between words?', type: 'short-answer', correctAnswer: 'They help us see where one word ends and the next word begins.', standardCode: 'K.RF.1' },
        ],
      },
    },
  },
  {
    slug: 'gradeK-ela-phonological-awareness',
    title: 'Phonological Awareness',
    description: 'Recognize and produce rhyming words, count syllables, and isolate individual sounds',
    subject: 'ela',
    grade: 0,
    gradeBand: 'k5',
    topicCluster: 'Reading Foundations',
    standardCodes: ['K.RF.2'],
    content: {
      intro: {
        title: 'Phonological Awareness',
        text: 'Words are made of sounds! When we listen carefully, we can hear the little sounds inside words. Today we will learn about rhyming words, syllables, and the sounds that make up words. This will help us become better readers and spellers.',
      },
      segments: [
        {
          index: 0,
          title: 'Rhyming Words',
          text: 'Rhyming words are words that sound the same at the end. Cat and hat rhyme because they both end with the sound "at." Dog and log rhyme because they both end with "og." When you hear two words that have the same ending sound, they rhyme! Try this: does "sun" rhyme with "fun"? Yes! They both end with "un." Rhyming is like a game — once you hear the pattern, you can think of more words that sound the same at the end.',
          keyVocabulary: ['rhyme', 'sound', 'ending'],
        },
        {
          index: 1,
          title: 'Syllables',
          text: 'Every word has parts called syllables. You can feel syllables by clapping as you say a word. The word "cat" has one clap — one syllable. The word "kitten" has two claps — kit-ten — two syllables. The word "butterfly" has three claps — but-ter-fly — three syllables! Each syllable has a vowel sound in it. Try clapping along as you say your name. How many syllables does your name have? Clapping syllables helps us break big words into smaller, easier parts.',
          keyVocabulary: ['syllable', 'clap', 'parts'],
        },
        {
          index: 2,
          title: 'Beginning, Middle, and Ending Sounds',
          text: 'Words are made of individual sounds called phonemes. The word "sat" has three sounds: /s/ /a/ /t/. The first sound /s/ is the beginning sound. The sound /a/ in the middle is the middle sound. The last sound /t/ is the ending sound. If we change the beginning sound of "sat" to /m/, we get "mat." If we change the ending sound to /p/, we get "sap." Listening for each sound helps us read and spell new words.',
          keyVocabulary: ['beginning sound', 'middle sound', 'ending sound', 'phoneme'],
        },
        {
          index: 3,
          title: 'Blending Sounds Together',
          text: 'When we know the sounds in a word, we can blend them together to read the word. If someone tells you the sounds /d/ /o/ /g/, you can push them together to say "dog." Try it with /r/ /u/ /n/ — the word is "run!" Blending is like putting puzzle pieces together. You hear each sound, then slide them together smoothly to make a word. The more you practice blending, the faster you will be able to read new words all by yourself.',
          keyVocabulary: ['blend', 'sounds', 'together'],
        },
      ],
      practice: [
        { index: 0, question: 'Which word rhymes with "cat"?', type: 'multiple-choice', options: ['dog', 'hat', 'cup', 'bed'], correctAnswer: 'hat', hint: 'Listen to the ending sound of "cat." Which word ends the same way?', explanation: 'Hat rhymes with cat because they both end with the "at" sound.', standardCode: 'K.RF.2' },
        { index: 1, question: 'How many syllables are in the word "banana"?', type: 'short-answer', correctAnswer: '3', hint: 'Clap as you say ba-na-na.', explanation: 'Banana has three syllables: ba-na-na. You clap three times.', standardCode: 'K.RF.2' },
        { index: 2, question: 'What is the beginning sound in the word "fish"?', type: 'short-answer', correctAnswer: 'f', hint: 'Say "fish" slowly. What is the very first sound your mouth makes?', explanation: 'The beginning sound in "fish" is /f/.', standardCode: 'K.RF.2' },
        { index: 3, question: 'Blend these sounds together: /s/ /i/ /t/. What word do you get?', type: 'fill-blank', correctAnswer: 'sit', hint: 'Push the three sounds together smoothly.', explanation: 'When you blend /s/ /i/ /t/ together, you get the word "sit."', standardCode: 'K.RF.2' },
        { index: 4, question: 'Which pair of words rhymes?', type: 'multiple-choice', options: ['big and pig', 'run and sit', 'top and dog', 'cat and cup'], correctAnswer: 'big and pig', hint: 'Rhyming words end with the same sound.', explanation: 'Big and pig rhyme because they both end with the "ig" sound.', standardCode: 'K.RF.2' },
      ],
      assessment: {
        questions: [
          { question: 'Say a word that rhymes with "hop."', type: 'short-answer', correctAnswer: 'top', standardCode: 'K.RF.2' },
          { question: 'How many syllables are in the word "elephant"?', type: 'short-answer', correctAnswer: '3', standardCode: 'K.RF.2' },
          { question: 'What is the ending sound in the word "bed"?', type: 'short-answer', correctAnswer: 'd', standardCode: 'K.RF.2' },
        ],
      },
    },
  },
  {
    slug: 'gradeK-ela-phonics-sight-words',
    title: 'Phonics and Sight Words',
    description: 'Learn letter-sound relationships and recognize common high-frequency words',
    subject: 'ela',
    grade: 0,
    gradeBand: 'k5',
    topicCluster: 'Reading Foundations',
    standardCodes: ['K.RF.3'],
    content: {
      intro: {
        title: 'Phonics and Sight Words',
        text: 'Every letter in the alphabet makes a sound, and when we know those sounds, we can read words! Some words are used so often that we learn to read them right away — these are called sight words. Today we will practice letter sounds and sight words together.',
      },
      segments: [
        {
          index: 0,
          title: 'Consonant Sounds',
          text: 'Consonants are all the letters that are not vowels. Letters like B, C, D, F, G, and more are consonants. Each consonant makes its own sound. The letter B says /b/ like in "ball." The letter D says /d/ like in "duck." The letter M says /m/ like in "moon." When you see a letter at the beginning of a word, say its sound to start reading the word. Try it: what sound does the letter T make? It says /t/ like in "turtle." Practice saying the sound each consonant makes.',
          keyVocabulary: ['consonant', 'letter sound', 'beginning'],
        },
        {
          index: 1,
          title: 'Short Vowel Sounds',
          text: 'The vowels are A, E, I, O, and U. Vowels are very important because every word has at least one vowel sound. Short vowel sounds are: A says /a/ like in "apple," E says /e/ like in "egg," I says /i/ like in "igloo," O says /o/ like in "octopus," and U says /u/ like in "umbrella." When a vowel is in the middle of a short word, it usually makes its short sound. In the word "cat," the A makes the /a/ sound. In "pet," the E makes the /e/ sound.',
          keyVocabulary: ['vowel', 'short vowel', 'A E I O U'],
        },
        {
          index: 2,
          title: 'Decoding CVC Words',
          text: 'A CVC word has a consonant, then a vowel, then another consonant. Words like "hat," "big," "cup," and "red" are CVC words. To read a CVC word, sound out each letter: /h/ /a/ /t/ — hat! First say the beginning consonant sound, then the short vowel sound, then the ending consonant sound. Finally, blend all three sounds together. Practice with these words: "dog," "sit," "pen," "bug." You are reading real words all by yourself!',
          keyVocabulary: ['CVC', 'decode', 'sound out', 'blend'],
        },
        {
          index: 3,
          title: 'Sight Words',
          text: 'Sight words are words we see so often that we learn to read them quickly without sounding them out. Words like "the," "and," "is," "it," "a," "to," "in," and "I" are sight words. Some sight words do not follow the usual letter-sound rules, so we memorize how they look. For example, the word "the" does not sound exactly the way you might expect. The more you practice reading sight words, the faster you can read sentences and stories. Try reading this: "I can see the big dog."',
          keyVocabulary: ['sight word', 'high-frequency', 'memorize'],
        },
      ],
      practice: [
        { index: 0, question: 'What sound does the letter S make?', type: 'short-answer', correctAnswer: 's', hint: 'Think of a word that starts with S, like "sun."', explanation: 'The letter S makes the /s/ sound, like in "sun" or "sit."', standardCode: 'K.RF.3' },
        { index: 1, question: 'Which word is a CVC word?', type: 'multiple-choice', options: ['the', 'mat', 'play', 'she'], correctAnswer: 'mat', hint: 'A CVC word has a consonant, a vowel, then a consonant.', explanation: 'Mat is a CVC word: M (consonant), A (vowel), T (consonant).', standardCode: 'K.RF.3' },
        { index: 2, question: 'What is the short vowel sound in the word "pig"?', type: 'short-answer', correctAnswer: 'i', hint: 'The vowel is the letter in the middle.', explanation: 'The vowel I in "pig" makes the short /i/ sound.', standardCode: 'K.RF.3' },
        { index: 3, question: 'The letters /d/ /o/ /g/ make the word ___.', type: 'fill-blank', correctAnswer: 'dog', hint: 'Blend the three sounds together.', explanation: 'When you blend /d/ /o/ /g/, you get the word "dog."', standardCode: 'K.RF.3' },
        { index: 4, question: 'Which of these is a sight word?', type: 'multiple-choice', options: ['the', 'frog', 'jump', 'clap'], correctAnswer: 'the', hint: 'Sight words are very common words we see in almost every sentence.', explanation: '"The" is one of the most common sight words in English. We see it in almost every sentence.', standardCode: 'K.RF.3' },
      ],
      assessment: {
        questions: [
          { question: 'Sound out this word: C-A-T. What word is it?', type: 'short-answer', correctAnswer: 'cat', standardCode: 'K.RF.3' },
          { question: 'Which vowel sound do you hear in the word "cup"?', type: 'multiple-choice', options: ['a', 'e', 'i', 'o', 'u'], correctAnswer: 'u', standardCode: 'K.RF.3' },
          { question: 'Read this sentence and find the sight words: "I see a big cat." Which words are sight words?', type: 'short-answer', correctAnswer: 'I, see, a', standardCode: 'K.RF.3' },
        ],
      },
    },
  },
  {
    slug: 'gradeK-ela-vocabulary',
    title: 'Vocabulary',
    description: 'Learn new words and their meanings through context, categories, and real-life connections',
    subject: 'ela',
    grade: 0,
    gradeBand: 'k5',
    topicCluster: 'Language',
    standardCodes: ['K.L.4', 'K.L.5'],
    content: {
      intro: {
        title: 'Vocabulary',
        text: 'Words help us share our thoughts and understand the world around us. The more words we know, the more we can say, read, and learn. Today we will explore new words, what they mean, and how to figure out words we do not know yet.',
      },
      segments: [
        {
          index: 0,
          title: 'Using Clues to Learn New Words',
          text: 'When you hear or read a word you do not know, you can use clues around it to figure out what it means. These clues are called context clues. For example, if a story says "The tiny kitten fit inside a shoe," and you do not know the word "tiny," you can think about a kitten fitting inside a shoe. A shoe is small, so "tiny" must mean very small! Look at the words and pictures nearby to help you understand new words.',
          keyVocabulary: ['context clues', 'meaning', 'figure out'],
        },
        {
          index: 1,
          title: 'Sorting Words into Categories',
          text: 'Words can be sorted into groups called categories. Animals is a category that includes words like dog, cat, fish, and bird. Colors is a category that includes red, blue, green, and yellow. Food is a category with words like apple, bread, and milk. When we sort words into categories, it helps our brain organize what we know. Can you think of three words that belong in the category "toys"? Maybe ball, doll, and blocks!',
          keyVocabulary: ['category', 'sort', 'group'],
        },
        {
          index: 2,
          title: 'Opposites',
          text: 'Some words have opposite meanings. Hot and cold are opposites. Big and small are opposites. Up and down are opposites. When we learn a new word, it helps to think about its opposite. If you know the word "happy," then you can learn that "sad" means the opposite of happy. Opposites come in pairs, and knowing one word helps you understand the other. Can you think of the opposite of "fast"? The opposite of fast is "slow."',
          keyVocabulary: ['opposite', 'pair', 'meaning'],
        },
        {
          index: 3,
          title: 'Words for Actions and Describing',
          text: 'Some words tell us what someone or something does. These are action words like run, jump, eat, and sleep. Other words describe how something looks, feels, or sounds. Words like soft, loud, tall, and pretty are describing words. When you say "the fluffy bunny hops," the word "fluffy" describes the bunny and "hops" tells what the bunny does. Using action words and describing words makes our sentences more interesting and fun to hear.',
          keyVocabulary: ['action word', 'describing word', 'sentence'],
        },
      ],
      practice: [
        { index: 0, question: 'In the sentence "The enormous elephant walked slowly," what does "enormous" probably mean?', type: 'multiple-choice', options: ['Very tiny', 'Very big', 'Very fast', 'Very quiet'], correctAnswer: 'Very big', hint: 'Think about what you know about elephants and use that as a clue.', explanation: 'Elephants are known for being large animals, so "enormous" means very big.', standardCode: 'K.L.4' },
        { index: 1, question: 'Which word belongs in the "fruit" category?', type: 'multiple-choice', options: ['chair', 'apple', 'shoe', 'pencil'], correctAnswer: 'apple', hint: 'Think about which one you can eat and it grows on a tree.', explanation: 'An apple is a fruit. The other words are not foods.', standardCode: 'K.L.5' },
        { index: 2, question: 'What is the opposite of "hot"?', type: 'fill-blank', correctAnswer: 'cold', hint: 'Think about something like ice or snow.', explanation: 'Cold is the opposite of hot. Ice cream is cold, and soup is hot.', standardCode: 'K.L.5' },
        { index: 3, question: 'In the sentence "The puppy runs fast," which word is the action word?', type: 'short-answer', correctAnswer: 'runs', hint: 'Which word tells you what the puppy does?', explanation: '"Runs" is the action word because it tells what the puppy is doing.', standardCode: 'K.L.5' },
        { index: 4, question: 'Which word does NOT belong in the "animals" category?', type: 'multiple-choice', options: ['bird', 'fish', 'table', 'cat'], correctAnswer: 'table', hint: 'Three of these are living creatures. One is a piece of furniture.', explanation: 'A table is furniture, not an animal. Bird, fish, and cat are all animals.', standardCode: 'K.L.5' },
      ],
      assessment: {
        questions: [
          { question: 'Name a word that is the opposite of "big."', type: 'short-answer', correctAnswer: 'small', standardCode: 'K.L.5' },
          { question: 'What does "chilly" probably mean in this sentence? "It was a chilly day so we wore coats."', type: 'multiple-choice', options: ['Warm', 'Cold', 'Sunny', 'Windy'], correctAnswer: 'Cold', standardCode: 'K.L.4' },
          { question: 'Name two words that belong in the category "colors."', type: 'short-answer', correctAnswer: 'red, blue', standardCode: 'K.L.5' },
        ],
      },
    },
  },
  {
    slug: 'gradeK-ela-capitalization-punctuation',
    title: 'Capitalization and Punctuation',
    description: 'Use uppercase letters and end punctuation correctly when writing',
    subject: 'ela',
    grade: 0,
    gradeBand: 'k5',
    topicCluster: 'Language',
    standardCodes: ['K.L.1', 'K.L.2'],
    content: {
      intro: {
        title: 'Capitalization and Punctuation',
        text: 'When we write, we use special rules to make our writing clear. Capital letters and punctuation marks are like road signs — they tell the reader when a sentence starts, when it ends, and what kind of sentence it is. Let us learn these important writing rules!',
      },
      segments: [
        {
          index: 0,
          title: 'Capital Letters at the Start',
          text: 'Every sentence begins with a capital letter. A capital letter is the big version of a letter. For example, a lowercase "b" looks different from an uppercase "B." When you start writing a sentence, always use a capital letter for the very first word. "The dog is big" starts with a capital T. If your sentence starts with "my," you write it as "My" with a big M. Remembering to capitalize the first word helps readers know where a new sentence begins.',
          keyVocabulary: ['capital letter', 'uppercase', 'lowercase', 'sentence'],
        },
        {
          index: 1,
          title: 'Capitalizing Names and the Word I',
          text: 'Names are special words, and they always start with a capital letter. Your name starts with a capital letter. Your friend\'s name starts with a capital letter. If your name is "Maria," the M is always a capital. The word "I" is also always a capital letter, even in the middle of a sentence. You would write "Maria and I play together." Both "Maria" and "I" have capital letters because names and the word I are always capitalized.',
          keyVocabulary: ['name', 'capitalize', 'I'],
        },
        {
          index: 2,
          title: 'Periods and Question Marks',
          text: 'Every sentence needs a mark at the end to show that it is finished. A period is a tiny dot that goes at the end of a telling sentence. "I like apples." ends with a period. A question mark goes at the end of an asking sentence. "Do you like apples?" ends with a question mark because it asks something. The period looks like this: . The question mark looks like this: ? When you finish a sentence, always remember to put the right mark at the end.',
          keyVocabulary: ['period', 'question mark', 'end mark', 'telling sentence', 'asking sentence'],
        },
        {
          index: 3,
          title: 'Exclamation Points',
          text: 'Sometimes we feel very excited or surprised, and we use an exclamation point at the end of the sentence. An exclamation point looks like this: ! If you say "Wow, that is amazing!" the exclamation point shows strong feeling. "Look out!" uses an exclamation point because it is urgent. Telling sentences use periods, asking sentences use question marks, and exciting or surprising sentences use exclamation points. Choosing the right end mark helps the reader understand how to read your words.',
          keyVocabulary: ['exclamation point', 'excited', 'feeling'],
        },
      ],
      practice: [
        { index: 0, question: 'Which sentence starts correctly?', type: 'multiple-choice', options: ['the cat is soft.', 'The cat is soft.', 'the Cat is soft.', 'THE cat is soft.'], correctAnswer: 'The cat is soft.', hint: 'Only the very first letter of the first word should be capitalized.', explanation: '"The cat is soft." is correct because the first word starts with a capital letter.', standardCode: 'K.L.2' },
        { index: 1, question: 'What mark goes at the end of this sentence? "I have a red ball___"', type: 'multiple-choice', options: ['.', '?', '!'], correctAnswer: '.', hint: 'This sentence tells us something. It is not asking or showing excitement.', explanation: 'This is a telling sentence, so it ends with a period.', standardCode: 'K.L.2' },
        { index: 2, question: 'The word ___ is always written as a capital letter, even in the middle of a sentence.', type: 'fill-blank', correctAnswer: 'I', hint: 'This is a one-letter word that means "me."', explanation: 'The word "I" is always capitalized, no matter where it appears in a sentence.', standardCode: 'K.L.2' },
        { index: 3, question: 'What mark goes at the end of "Where is my shoe___"', type: 'short-answer', correctAnswer: '?', hint: 'This sentence is asking something.', explanation: 'This is a question — an asking sentence — so it ends with a question mark.', standardCode: 'K.L.2' },
        { index: 4, question: 'Which sentence uses a capital letter correctly for a name?', type: 'multiple-choice', options: ['I played with sam.', 'I played with Sam.', 'I played with SAM.', 'i played with sam.'], correctAnswer: 'I played with Sam.', hint: 'Names start with one capital letter, and so does the word "I."', explanation: '"I played with Sam." is correct because "I" is always capitalized and "Sam" is a name that starts with a capital letter.', standardCode: 'K.L.1' },
      ],
      assessment: {
        questions: [
          { question: 'What kind of end mark does an asking sentence use?', type: 'short-answer', correctAnswer: 'question mark', standardCode: 'K.L.2' },
          { question: 'Fix this sentence: "i like to run"', type: 'short-answer', correctAnswer: 'I like to run.', standardCode: 'K.L.2' },
          { question: 'What mark would you put at the end of "Watch out"?', type: 'multiple-choice', options: ['.', '?', '!'], correctAnswer: '!', standardCode: 'K.L.2' },
        ],
      },
    },
  },
  {
    slug: 'gradeK-ela-sentence-conventions',
    title: 'Sentence Conventions',
    description: 'Speak and write complete sentences with correct structure',
    subject: 'ela',
    grade: 0,
    gradeBand: 'k5',
    topicCluster: 'Language',
    standardCodes: ['K.L.1f'],
    content: {
      intro: {
        title: 'Sentence Conventions',
        text: 'A sentence is a group of words that tells a complete thought. When we speak and write in complete sentences, other people can understand exactly what we mean. Today we will learn what makes a sentence complete and how to build our own sentences.',
      },
      segments: [
        {
          index: 0,
          title: 'What Is a Complete Sentence?',
          text: 'A complete sentence tells us two things: who or what the sentence is about, and what that person or thing does. "The bird flies." is a complete sentence because it tells us who (the bird) and what it does (flies). If someone just says "the bird," that is not a complete sentence because we do not know what the bird does. If someone just says "flies," we do not know what flies. A complete sentence needs both parts to make sense.',
          keyVocabulary: ['complete sentence', 'who', 'what', 'does'],
        },
        {
          index: 1,
          title: 'The Naming Part and the Action Part',
          text: 'Every complete sentence has a naming part and an action part. The naming part tells us who or what the sentence is about. The action part tells us what happens. In the sentence "The girl runs," the naming part is "the girl" and the action part is "runs." In "My dog sleeps," the naming part is "my dog" and the action part is "sleeps." When you write a sentence, ask yourself: did I tell who or what? Did I tell what they do? If you said yes to both, you have a complete sentence!',
          keyVocabulary: ['naming part', 'action part', 'subject', 'verb'],
        },
        {
          index: 2,
          title: 'Building Longer Sentences',
          text: 'Once you can write a short complete sentence, you can make it longer by adding more details. Start with "The cat sits." Now add where: "The cat sits on the mat." Now add a describing word: "The fluffy cat sits on the red mat." Each time you add a word, the sentence paints a clearer picture. You can tell when, where, or how something happens. Try making your sentences longer by answering questions like where, when, and what kind.',
          keyVocabulary: ['details', 'longer', 'describing word', 'where'],
        },
        {
          index: 3,
          title: 'Fixing Incomplete Sentences',
          text: 'Sometimes when we talk or write quickly, we leave out part of our sentence. "Jumped high" is not complete — we do not know who jumped. We can fix it by adding a naming part: "The frog jumped high." "My little sister" is not complete either — we do not know what she did. We fix it by adding an action part: "My little sister laughed." When you check your writing, read each sentence and ask: does this tell who and what? If not, add the missing part.',
          keyVocabulary: ['incomplete', 'fix', 'missing part'],
        },
      ],
      practice: [
        { index: 0, question: 'Which is a complete sentence?', type: 'multiple-choice', options: ['The big red ball', 'Runs very fast', 'The dog barks.', 'Under the table'], correctAnswer: 'The dog barks.', hint: 'A complete sentence tells both who and what they do.', explanation: '"The dog barks." is complete because it tells us who (the dog) and what it does (barks).', standardCode: 'K.L.1f' },
        { index: 1, question: 'What is the naming part in "The fish swims"?', type: 'short-answer', correctAnswer: 'The fish', hint: 'The naming part tells you who or what the sentence is about.', explanation: '"The fish" is the naming part because it tells us who the sentence is about.', standardCode: 'K.L.1f' },
        { index: 2, question: 'Fix this incomplete sentence by adding an action part: "The baby ___."', type: 'fill-blank', correctAnswer: 'cries', hint: 'Think of something a baby does.', explanation: 'Adding an action word like "cries" makes it a complete sentence: "The baby cries."', standardCode: 'K.L.1f' },
        { index: 3, question: 'What is the action part in "My mom cooks dinner"?', type: 'short-answer', correctAnswer: 'cooks dinner', hint: 'The action part tells what happens.', explanation: '"Cooks dinner" is the action part because it tells what Mom does.', standardCode: 'K.L.1f' },
        { index: 4, question: 'Which group of words is NOT a complete sentence?', type: 'multiple-choice', options: ['I like school.', 'She sings a song.', 'The brown puppy.', 'We play outside.'], correctAnswer: 'The brown puppy.', hint: 'Find the group that does not tell what happens.', explanation: '"The brown puppy" only tells us who, but not what the puppy does. It is missing an action part.', standardCode: 'K.L.1f' },
      ],
      assessment: {
        questions: [
          { question: 'Is "Runs to school" a complete sentence? Why or why not?', type: 'short-answer', correctAnswer: 'No, because it is missing the naming part that tells who runs.', standardCode: 'K.L.1f' },
          { question: 'What two parts does every complete sentence need?', type: 'short-answer', correctAnswer: 'A naming part and an action part.', standardCode: 'K.L.1f' },
          { question: 'Which is a complete sentence?', type: 'multiple-choice', options: ['Sleeps all day.', 'The cat sleeps.', 'A very loud.', 'Under the bed.'], correctAnswer: 'The cat sleeps.', standardCode: 'K.L.1f' },
        ],
      },
    },
  },
  {
    slug: 'gradeK-ela-rhyming-words',
    title: 'Rhyming Words',
    description: 'Recognize and produce rhyming words by listening to ending sounds',
    subject: 'ela',
    grade: 0,
    gradeBand: 'k5',
    topicCluster: 'Reading Foundations',
    standardCodes: ['K.RF.2a'],
    content: {
      intro: {
        title: 'Rhyming Words',
        text: 'Rhyming words are words that sound the same at the end. When you hear "cat" and "hat," they rhyme because they both end with the same sound. Learning to hear and make rhyming words is an important step toward reading. Today we will practice finding rhymes and making our own!',
      },
      segments: [
        {
          index: 0,
          title: 'What Is a Rhyme?',
          text: 'A rhyme happens when two words share the same ending sound. Think of the words "dog" and "frog." Say them out loud — do you hear how they both end with the "og" sound? That is a rhyme! Rhymes often show up in songs and poems. "Twinkle, twinkle, little star, how I wonder what you are." Star and are rhyme because they share an ending sound. When you hear that matching sound at the end of two words, you have found a rhyme. Rhyming is all about listening to the ending sounds of words carefully.',
          keyVocabulary: ['rhyme', 'ending sound', 'match'],
        },
        {
          index: 1,
          title: 'Rhyming Families',
          text: 'Words that rhyme often belong to the same word family. The "at" family includes cat, bat, hat, mat, rat, and sat. The "an" family includes can, fan, man, pan, ran, and van. The "ig" family includes big, dig, fig, pig, and wig. Once you know the ending sound of a word family, you can create many rhyming words just by changing the first letter. Try it with the "op" family: hop, mop, pop, top, and stop all rhyme because they share the "op" ending sound.',
          keyVocabulary: ['word family', 'ending', 'pattern'],
        },
        {
          index: 2,
          title: 'Hearing Rhymes in Stories and Songs',
          text: 'Many books and songs use rhyming words. When you read a book like "Green Eggs and Ham," you hear rhymes all through the story: "Sam I am" and "ham" rhyme. When you sing "Row, Row, Row Your Boat," you hear "stream" and "dream" rhyme at the end of lines. Listening for rhymes in stories and songs helps train your ear. The next time someone reads to you, try to notice which words rhyme. You can even raise your hand each time you hear a rhyming pair!',
          keyVocabulary: ['listen', 'pair', 'story', 'song'],
        },
        {
          index: 3,
          title: 'Making Your Own Rhymes',
          text: 'You can make your own rhymes by picking a word and changing its first sound. Start with the word "make." Change the first sound to /b/ and you get "bake." Change it to /l/ and you get "lake." Change it to /r/ and you get "rake." Not every new sound will make a real word, and that is okay. If you try /z/ with "ake," you get "zake," which is not a real word. The goal is to practice thinking of words that share ending sounds. Silly words can still be fun for rhyming games!',
          keyVocabulary: ['create', 'change', 'first sound', 'real word'],
        },
      ],
      practice: [
        { index: 0, question: 'Which word rhymes with "bug"?', type: 'multiple-choice', options: ['bat', 'rug', 'beg', 'bin'], correctAnswer: 'rug', hint: 'Listen to the ending sound of "bug." Which word ends the same way?', explanation: 'Rug rhymes with bug because they both end with the "ug" sound.', standardCode: 'K.RF.2a' },
        { index: 1, question: 'Do "cake" and "lake" rhyme? Yes or no.', type: 'short-answer', correctAnswer: 'yes', hint: 'Say both words out loud and listen to the ending sounds.', explanation: 'Cake and lake both end with the "ake" sound, so they rhyme.', standardCode: 'K.RF.2a' },
        { index: 2, question: 'Name a word that rhymes with "red."', type: 'short-answer', correctAnswer: 'bed', hint: 'Think of a word that ends with the "ed" sound.', explanation: 'Bed rhymes with red because they share the "ed" ending sound. Other answers like "fed" or "said" also work.', standardCode: 'K.RF.2a' },
        { index: 3, question: 'Which pair of words does NOT rhyme?', type: 'multiple-choice', options: ['map and cap', 'sun and fun', 'dog and cat', 'pin and win'], correctAnswer: 'dog and cat', hint: 'Say each pair and listen to the endings. Which pair sounds different at the end?', explanation: 'Dog ends with "og" and cat ends with "at." They do not share the same ending sound, so they do not rhyme.', standardCode: 'K.RF.2a' },
        { index: 4, question: 'Fill in a rhyming word: "I see a bee on my ___."', type: 'fill-blank', correctAnswer: 'knee', hint: 'What word ends with the same sound as "bee" and names a body part?', explanation: 'Knee rhymes with bee because they share the "ee" ending sound.', standardCode: 'K.RF.2a' },
      ],
      assessment: {
        questions: [
          { question: 'Tell me two words that rhyme with "hop."', type: 'short-answer', correctAnswer: 'top, mop', standardCode: 'K.RF.2a' },
          { question: 'Which word rhymes with "ring"?', type: 'multiple-choice', options: ['run', 'rain', 'sing', 'rig'], correctAnswer: 'sing', standardCode: 'K.RF.2a' },
          { question: 'Does "fish" rhyme with "dish"? Explain why or why not.', type: 'short-answer', correctAnswer: 'Yes, because they both end with the "ish" sound.', standardCode: 'K.RF.2a' },
        ],
      },
    },
  },
  {
    slug: 'gradeK-ela-beginning-ending-sounds',
    title: 'Beginning and Ending Sounds',
    description: 'Isolate and pronounce the initial and final sounds in spoken words',
    subject: 'ela',
    grade: 0,
    gradeBand: 'k5',
    topicCluster: 'Reading Foundations',
    standardCodes: ['K.RF.2d'],
    content: {
      intro: {
        title: 'Beginning and Ending Sounds',
        text: 'Every word starts with a sound and ends with a sound. Listening for these sounds helps us read and spell. Today we will practice hearing the very first sound and the very last sound in words. This skill is like having super ears for reading!',
      },
      segments: [
        {
          index: 0,
          title: 'Listening for the First Sound',
          text: 'The beginning sound is the very first sound you hear when you say a word. Say the word "moon" slowly. The first sound is /m/. Now try "table." The first sound is /t/. To find the beginning sound, say the word very slowly and stretch out the start. What is the first sound in "sunny"? It is /s/. What about "jump"? It is /j/. Being able to hear the first sound in a word is one of the most important skills for learning to read because it helps you match sounds to letters.',
          keyVocabulary: ['beginning sound', 'first sound', 'initial'],
        },
        {
          index: 1,
          title: 'Listening for the Last Sound',
          text: 'The ending sound is the very last sound you hear when you say a word. Say the word "cup" slowly. The last sound is /p/. Now try "leaf." The last sound is /f/. Some ending sounds are easy to hear, like the /g/ in "dog" or the /n/ in "sun." Others can be tricky. In the word "fish," the last sound is /sh/. To hear the ending sound, say the word slowly and hold on to the last part. The ending sound helps you know which letter to write at the end of a word when you spell.',
          keyVocabulary: ['ending sound', 'last sound', 'final'],
        },
        {
          index: 2,
          title: 'Same Beginning Sound',
          text: 'Words that start with the same sound are fun to say together. "Ball," "bat," and "bus" all start with /b/. "Cat," "cup," and "car" all start with /k/. When many words in a row start with the same sound, we call it alliteration. "Silly Sam sips soup" — every word starts with /s/! Try making your own silly sentence where all the words start with the same sound. This game helps you practice isolating the beginning sound of each word so your reading gets even stronger.',
          keyVocabulary: ['same sound', 'alliteration', 'isolate'],
        },
        {
          index: 3,
          title: 'Same Ending Sound',
          text: 'Just like words can start with the same sound, words can end with the same sound too. "Bug," "pig," and "leg" all end with the /g/ sound. "Hat," "sit," and "pot" all end with /t/. Listening for ending sounds helps you sort words into groups and notice patterns. Try this game: I say a word, and you find another word with the same ending sound. If I say "bed," you could say "red" because both end with /d/. Practice with a friend and see how many matches you can find together.',
          keyVocabulary: ['ending sound', 'pattern', 'match'],
        },
      ],
      practice: [
        { index: 0, question: 'What is the beginning sound in the word "nest"?', type: 'short-answer', correctAnswer: 'n', hint: 'Say "nest" very slowly. What is the first sound your mouth makes?', explanation: 'The beginning sound in "nest" is /n/.', standardCode: 'K.RF.2d' },
        { index: 1, question: 'What is the ending sound in the word "drum"?', type: 'short-answer', correctAnswer: 'm', hint: 'Say "drum" slowly and listen to the very last sound.', explanation: 'The ending sound in "drum" is /m/.', standardCode: 'K.RF.2d' },
        { index: 2, question: 'Which word starts with the same sound as "pig"?', type: 'multiple-choice', options: ['ball', 'pan', 'dog', 'run'], correctAnswer: 'pan', hint: '"Pig" starts with /p/. Which other word starts with /p/?', explanation: 'Pan starts with /p/, just like pig.', standardCode: 'K.RF.2d' },
        { index: 3, question: 'Which two words end with the same sound?', type: 'multiple-choice', options: ['cat and cup', 'bat and sit', 'dog and pen', 'sun and hop'], correctAnswer: 'bat and sit', hint: 'Say each pair and listen to the last sound. Which pair shares the same ending?', explanation: 'Bat and sit both end with the /t/ sound.', standardCode: 'K.RF.2d' },
        { index: 4, question: 'The beginning sound of "lamp" is ___.', type: 'fill-blank', correctAnswer: 'l', hint: 'Say "lamp" slowly. What sound does your tongue make first?', explanation: 'The beginning sound of "lamp" is /l/.', standardCode: 'K.RF.2d' },
      ],
      assessment: {
        questions: [
          { question: 'What is the ending sound in the word "glass"?', type: 'short-answer', correctAnswer: 's', standardCode: 'K.RF.2d' },
          { question: 'Which word begins with the same sound as "tree"?', type: 'multiple-choice', options: ['drum', 'trip', 'frog', 'star'], correctAnswer: 'trip', standardCode: 'K.RF.2d' },
          { question: 'Say the beginning sound and the ending sound of the word "map."', type: 'short-answer', correctAnswer: 'Beginning sound is m, ending sound is p.', standardCode: 'K.RF.2d' },
        ],
      },
    },
  },
  {
    slug: 'gradeK-ela-letter-recognition',
    title: 'Letter Recognition',
    description: 'Recognize and name all upper- and lowercase letters of the alphabet',
    subject: 'ela',
    grade: 0,
    gradeBand: 'k5',
    topicCluster: 'Reading Foundations',
    standardCodes: ['K.RF.1d'],
    content: {
      intro: {
        title: 'Letter Recognition',
        text: 'The alphabet has 26 letters, and each letter has two forms: an uppercase (big) form and a lowercase (small) form. Knowing all the letters by name is one of the first steps to reading and writing. Today we will practice recognizing and naming every letter!',
      },
      segments: [
        {
          index: 0,
          title: 'Uppercase Letters',
          text: 'Uppercase letters are the big versions of each letter. They are also called capital letters. A B C D E F G H I J K L M N O P Q R S T U V W X Y Z — those are all 26 uppercase letters. We use uppercase letters at the beginning of sentences, for names, and for the word "I." Some uppercase letters are easy to spot because they have straight lines, like A, E, and T. Others have curves, like B, C, and S. Learning to recognize each uppercase letter by its shape helps you read signs, labels, and books.',
          keyVocabulary: ['uppercase', 'capital', 'alphabet', 'letter name'],
        },
        {
          index: 1,
          title: 'Lowercase Letters',
          text: 'Lowercase letters are the small versions of each letter. Most of the letters you see in books and sentences are lowercase. The lowercase letters are: a b c d e f g h i j k l m n o p q r s t u v w x y z. Some lowercase letters look similar to their uppercase partners, like c and C or s and S. Other pairs look very different, like a and A or g and G. Learning both forms is important because you will see both when you read. Practice matching each uppercase letter to its lowercase partner.',
          keyVocabulary: ['lowercase', 'small letter', 'partner', 'match'],
        },
        {
          index: 2,
          title: 'Tricky Letter Pairs',
          text: 'Some letters can be confusing because they look alike. The letters b and d are mirror images of each other — b faces right and d faces left. The letters p and q can also be tricky for the same reason. Another pair that sometimes gets mixed up is m and n because both have bumps, but m has two bumps while n has only one. The letters u and v look similar, but u has a curve at the bottom while v comes to a point. When you feel unsure, trace the letter with your finger and say its name out loud.',
          keyVocabulary: ['confusing', 'mirror', 'trace', 'b and d'],
        },
        {
          index: 3,
          title: 'Finding Letters Everywhere',
          text: 'Letters are all around you! You can find them on cereal boxes, street signs, books, shirts, and even on the screen when someone types. Practice naming the letters you see during the day. When you see a stop sign, you can name each letter: S-T-O-P. When you see your name written on a paper, name each letter. You can play a game where you try to spot every letter of the alphabet while riding in a car or walking to school. The more you practice naming letters, the faster you will recognize them.',
          keyVocabulary: ['recognize', 'name', 'spot', 'practice'],
        },
      ],
      practice: [
        { index: 0, question: 'How many letters are in the alphabet?', type: 'short-answer', correctAnswer: '26', hint: 'Think about the alphabet song and how many letters you sing.', explanation: 'The English alphabet has 26 letters, from A to Z.', standardCode: 'K.RF.1d' },
        { index: 1, question: 'Which is the lowercase form of the letter "D"?', type: 'multiple-choice', options: ['b', 'd', 'p', 'q'], correctAnswer: 'd', hint: 'The lowercase version of D faces the same direction but is smaller.', explanation: 'The lowercase form of D is d. Be careful not to confuse it with b, which faces the other direction.', standardCode: 'K.RF.1d' },
        { index: 2, question: 'What letter comes right after M in the alphabet?', type: 'fill-blank', correctAnswer: 'N', hint: 'Sing the alphabet song slowly and listen for what comes after M.', explanation: 'The letter N comes right after M in the alphabet.', standardCode: 'K.RF.1d' },
        { index: 3, question: 'Which pair of letters often gets confused because they look like mirror images?', type: 'multiple-choice', options: ['a and e', 'b and d', 's and z', 'i and l'], correctAnswer: 'b and d', hint: 'These two letters face opposite directions.', explanation: 'The letters b and d are mirror images of each other, which makes them easy to mix up.', standardCode: 'K.RF.1d' },
        { index: 4, question: 'Name the uppercase partner of the letter "g."', type: 'short-answer', correctAnswer: 'G', hint: 'Think about the big version of this letter.', explanation: 'The uppercase form of g is G. They look quite different from each other.', standardCode: 'K.RF.1d' },
      ],
      assessment: {
        questions: [
          { question: 'Name three letters that look similar in uppercase and lowercase form.', type: 'short-answer', correctAnswer: 'c, s, o', standardCode: 'K.RF.1d' },
          { question: 'Which letter is this: it has two bumps on top and sits on the line?', type: 'multiple-choice', options: ['n', 'm', 'h', 'r'], correctAnswer: 'm', standardCode: 'K.RF.1d' },
          { question: 'What is one way to tell apart the letters b and d?', type: 'short-answer', correctAnswer: 'The letter b has its bump on the right side, and d has its bump on the left side.', standardCode: 'K.RF.1d' },
        ],
      },
    },
  },
  {
    slug: 'gradeK-ela-asking-answering-questions',
    title: 'Asking and Answering Questions',
    description: 'Ask and answer questions about key details in a text',
    subject: 'ela',
    grade: 0,
    gradeBand: 'k5',
    topicCluster: 'Reading Literature',
    standardCodes: ['K.RL.1'],
    content: {
      intro: {
        title: 'Asking and Answering Questions',
        text: 'Good readers ask questions while they read. When we ask questions about a story, it helps us understand what is happening and remember important details. Today we will learn how to ask and answer questions about the stories we read and hear.',
      },
      segments: [
        {
          index: 0,
          title: 'What Are Key Details?',
          text: 'Key details are the important pieces of information in a story. They tell us who the story is about, what happens, when it happens, and where it takes place. If a story says "A little girl named Mia found a lost puppy in the park," the key details are: who — Mia, what — she found a lost puppy, and where — in the park. Key details are like puzzle pieces that help us see the whole picture. Without them, we would not understand the story very well.',
          keyVocabulary: ['key details', 'who', 'what', 'where', 'when'],
        },
        {
          index: 1,
          title: 'Asking Good Questions',
          text: 'To find key details, we can ask questions that start with special words: who, what, where, when, and why. "Who is the story about?" helps us find the characters. "What happened?" helps us find the events. "Where did it happen?" helps us find the place. "When did it happen?" helps us find the time. "Why did that happen?" helps us understand the reason. Try asking these questions the next time you hear a story. Write them down or say them out loud to help you remember.',
          keyVocabulary: ['question', 'who', 'what', 'where', 'when', 'why'],
        },
        {
          index: 2,
          title: 'Finding Answers in the Story',
          text: 'When someone asks a question about a story, you can find the answer by looking back at the text or thinking about what you heard. If the question is "Where did the bear go?" you can look through the story for the part that tells about the bear moving somewhere. Sometimes the answer is right there in one sentence. Other times you have to think about more than one part of the story. Point to the words or pictures that helped you find the answer. This shows that you really understand the story.',
          keyVocabulary: ['answer', 'look back', 'find', 'text'],
        },
        {
          index: 3,
          title: 'Practice with a Short Story',
          text: 'Here is a short story: "Ben went to the beach on a sunny day. He built a big sandcastle with his sister Lily. A wave came and knocked it down. Ben and Lily laughed and built another one." Now let us ask questions. Who is the story about? Ben and Lily. Where did they go? The beach. What did they build? A sandcastle. What knocked it down? A wave. What did they do next? They laughed and built another sandcastle. Asking and answering these questions helps you remember everything that happened.',
          keyVocabulary: ['story', 'remember', 'understand', 'character'],
        },
      ],
      practice: [
        { index: 0, question: 'In the story "Sam ate a red apple for lunch," who ate the apple?', type: 'short-answer', correctAnswer: 'Sam', hint: 'Look for the name of the person in the sentence.', explanation: 'Sam is the person who ate the apple. "Who" questions help us find the character.', standardCode: 'K.RL.1' },
        { index: 1, question: 'Which question word helps us find WHERE something happened?', type: 'multiple-choice', options: ['Who', 'What', 'Where', 'Why'], correctAnswer: 'Where', hint: 'Think about which word asks about a place.', explanation: '"Where" is the question word that asks about the place something happened.', standardCode: 'K.RL.1' },
        { index: 2, question: 'In the sentence "The frog jumped into the pond at night," when did the frog jump?', type: 'short-answer', correctAnswer: 'at night', hint: 'Look for the part that tells the time.', explanation: 'The frog jumped "at night." This is the "when" detail in the sentence.', standardCode: 'K.RL.1' },
        { index: 3, question: 'In the sentence "Emma ran home because it started to rain," why did Emma run home?', type: 'fill-blank', correctAnswer: 'because it started to rain', hint: 'Look for the word "because" — it usually tells you the reason.', explanation: 'Emma ran home because it started to rain. The word "because" signals the reason.', standardCode: 'K.RL.1' },
        { index: 4, question: 'What is a "key detail" in a story?', type: 'multiple-choice', options: ['A picture on the cover', 'An important piece of information', 'The page number', 'The name of the book'], correctAnswer: 'An important piece of information', hint: 'Key details tell us who, what, where, and when.', explanation: 'A key detail is an important piece of information in a story, like who it is about, what happens, where, or when.', standardCode: 'K.RL.1' },
      ],
      assessment: {
        questions: [
          { question: 'In the story "Tia walked her dog to the park and played fetch," what did Tia do at the park?', type: 'short-answer', correctAnswer: 'She played fetch.', standardCode: 'K.RL.1' },
          { question: 'Which question should you ask to find out who a story is about?', type: 'multiple-choice', options: ['What happened?', 'Who is in the story?', 'Where does it take place?', 'When did it happen?'], correctAnswer: 'Who is in the story?', standardCode: 'K.RL.1' },
          { question: 'Why is it helpful to ask questions while you read?', type: 'short-answer', correctAnswer: 'It helps you understand the story and remember important details.', standardCode: 'K.RL.1' },
        ],
      },
    },
  },
  {
    slug: 'gradeK-ela-retelling-stories',
    title: 'Retelling Stories',
    description: 'Retell familiar stories including key details like characters, setting, and events',
    subject: 'ela',
    grade: 0,
    gradeBand: 'k5',
    topicCluster: 'Reading Literature',
    standardCodes: ['K.RL.2'],
    content: {
      intro: {
        title: 'Retelling Stories',
        text: 'When you retell a story, you use your own words to share what happened from beginning to end. Retelling shows that you understood the story and can remember its important parts. Today we will learn how to retell stories by including the characters, setting, and main events.',
      },
      segments: [
        {
          index: 0,
          title: 'Characters and Setting',
          text: 'Before you retell a story, think about the characters and the setting. Characters are the people or animals in the story. The setting is where and when the story takes place. In "Goldilocks and the Three Bears," the characters are Goldilocks, Papa Bear, Mama Bear, and Baby Bear. The setting is the bears\' house in the woods. When you start retelling a story, first say who is in the story and where it happens. This gives your listener a clear picture before you share what happened.',
          keyVocabulary: ['character', 'setting', 'retell', 'story'],
        },
        {
          index: 1,
          title: 'Beginning, Middle, and End',
          text: 'Every story has a beginning, a middle, and an end. The beginning introduces the characters and tells us what is starting to happen. The middle is where the main action or problem occurs. The end tells us how everything works out. When you retell a story, go in order: what happened first, what happened next, and what happened last. Using words like "first," "then," "next," and "finally" helps you keep the events in the right order so your retelling makes sense.',
          keyVocabulary: ['beginning', 'middle', 'end', 'order', 'first', 'then', 'finally'],
        },
        {
          index: 2,
          title: 'Including Key Details',
          text: 'A good retelling includes the most important details but does not include every tiny thing. Think about what a listener needs to know to understand the story. In "The Three Little Pigs," the key details are: each pig built a different house, the wolf blew down the straw and stick houses, but could not blow down the brick house. You do not need to describe the color of each pig or what they ate for breakfast. Focus on the events that matter most to the story and leave out small extras.',
          keyVocabulary: ['key details', 'important', 'events', 'focus'],
        },
        {
          index: 3,
          title: 'Practice Retelling',
          text: 'Let us practice with a simple story. "A little ant found a big crumb. She tried to carry it home, but it was too heavy. She called her friends to help. Together, they carried the crumb to their anthill." To retell this story you would say: First, a little ant found a big crumb. Then, she tried to carry it but it was too heavy. Next, she called her friends. Finally, they worked together to carry it home. Notice how we kept the events in order and included only the key details.',
          keyVocabulary: ['practice', 'in order', 'own words', 'together'],
        },
      ],
      practice: [
        { index: 0, question: 'What should you tell about FIRST when retelling a story?', type: 'multiple-choice', options: ['The ending', 'The characters and setting', 'Your favorite part', 'A funny joke'], correctAnswer: 'The characters and setting', hint: 'Before sharing events, your listener needs to know who and where.', explanation: 'When retelling a story, start by telling who is in the story (characters) and where it takes place (setting).', standardCode: 'K.RL.2' },
        { index: 1, question: 'What are the three main parts of a story in order?', type: 'short-answer', correctAnswer: 'beginning, middle, and end', hint: 'Think about the first part, the main action, and how it wraps up.', explanation: 'Every story has a beginning, a middle, and an end. Retelling them in order helps your listener follow along.', standardCode: 'K.RL.2' },
        { index: 2, question: 'In "The Three Bears," Goldilocks tries three bowls of porridge. Which word helps you retell events in order?', type: 'multiple-choice', options: ['Because', 'First', 'But', 'Or'], correctAnswer: 'First', hint: 'This word signals the start of a sequence.', explanation: 'The word "first" helps you put events in order, like "First, she tried Papa Bear\'s porridge."', standardCode: 'K.RL.2' },
        { index: 3, question: 'What is the setting of a story?', type: 'fill-blank', correctAnswer: 'where and when the story takes place', hint: 'It tells you the place and time.', explanation: 'The setting is where and when the story happens, like "in the forest" or "on a rainy day."', standardCode: 'K.RL.2' },
        { index: 4, question: 'When retelling, should you include every tiny detail or only the most important ones?', type: 'multiple-choice', options: ['Every tiny detail', 'Only the most important details', 'Only the ending', 'Only what the characters say'], correctAnswer: 'Only the most important details', hint: 'Think about what your listener truly needs to understand the story.', explanation: 'A good retelling focuses on the key details — the most important events that help someone understand the story.', standardCode: 'K.RL.2' },
      ],
      assessment: {
        questions: [
          { question: 'Name the three parts of a story you should include when retelling.', type: 'short-answer', correctAnswer: 'The beginning, the middle, and the end.', standardCode: 'K.RL.2' },
          { question: 'What is the difference between a character and a setting?', type: 'short-answer', correctAnswer: 'A character is who the story is about. The setting is where and when the story takes place.', standardCode: 'K.RL.2' },
          { question: 'Which word is BEST for moving to the last event in a retelling?', type: 'multiple-choice', options: ['First', 'Then', 'Finally', 'Once'], correctAnswer: 'Finally', standardCode: 'K.RL.2' },
        ],
      },
    },
  },
  {
    slug: 'gradeK-ela-describing-connections',
    title: 'Describing Connections',
    description: 'Describe the connection between two events, ideas, or pieces of information in a text',
    subject: 'ela',
    grade: 0,
    gradeBand: 'k5',
    topicCluster: 'Reading Informational Text',
    standardCodes: ['K.RI.3'],
    content: {
      intro: {
        title: 'Describing Connections',
        text: 'When we read information books, the ideas are often connected to each other. One event can cause another, or two ideas can go together. Today we will learn how to describe the connections between events and ideas in a text. This will help us understand what we read even better!',
      },
      segments: [
        {
          index: 0,
          title: 'What Is a Connection?',
          text: 'A connection is how two things are linked together. In a book about weather, you might read "The sky got dark with clouds. Then it started to rain." The dark clouds and the rain are connected — the clouds came first and the rain followed. Connections help us understand why things happen. When you read or hear information, ask yourself: how do these ideas go together? Finding connections is like finding invisible strings that tie pieces of information to each other.',
          keyVocabulary: ['connection', 'linked', 'related', 'together'],
        },
        {
          index: 1,
          title: 'Cause and Effect',
          text: 'Sometimes one event makes another event happen. The first event is called the cause, and the second event is called the effect. If a book says "The ice cream was left in the sun, and it melted," the cause is the sun and the effect is that the ice cream melted. Signal words like "because," "so," and "then" can help you spot cause and effect. "The puppy was hungry, so it ate its food." Being hungry is the cause, and eating is the effect. Look for these patterns when you read.',
          keyVocabulary: ['cause', 'effect', 'because', 'so'],
        },
        {
          index: 2,
          title: 'Steps in Order',
          text: 'Some information texts describe steps that go in order. A book about planting a seed might say: "First, dig a hole. Next, put the seed in the hole. Then, cover it with soil. Finally, water it." Each step connects to the next one — you cannot water the seed before you put it in the ground! When ideas follow a sequence, each step depends on the one before it. Words like "first," "next," "then," and "last" help you see how the steps are connected in the right order.',
          keyVocabulary: ['steps', 'order', 'sequence', 'depends'],
        },
        {
          index: 3,
          title: 'Comparing Ideas',
          text: 'Sometimes a text tells us how two things are alike or different. A book about animals might say "Dogs and cats are both pets. Dogs like to fetch, but cats like to climb." The connection here is comparing two animals. Dogs and cats are alike because they are both pets, but different in what they enjoy. When a text tells about two things side by side, think about what makes them similar and what makes them different. This kind of connection helps you learn more about each thing.',
          keyVocabulary: ['compare', 'alike', 'different', 'similar'],
        },
      ],
      practice: [
        { index: 0, question: 'In the sentence "It was cold outside, so Maria wore a coat," what is the cause?', type: 'short-answer', correctAnswer: 'It was cold outside.', hint: 'The cause is the thing that happened first and made the other thing happen.', explanation: 'The cold weather is the cause. It is the reason Maria wore a coat. The coat is the effect.', standardCode: 'K.RI.3' },
        { index: 1, question: 'Which word signals a cause and effect connection?', type: 'multiple-choice', options: ['and', 'the', 'because', 'after'], correctAnswer: 'because', hint: 'This word tells you the reason something happened.', explanation: '"Because" is a signal word for cause and effect. It connects a reason to what happened.', standardCode: 'K.RI.3' },
        { index: 2, question: 'In a book about making a sandwich, which step comes first: "spread peanut butter" or "get two slices of bread"?', type: 'short-answer', correctAnswer: 'get two slices of bread', hint: 'Think about what you need before you can spread anything.', explanation: 'You need the bread first before you can spread peanut butter on it. The steps connect in order.', standardCode: 'K.RI.3' },
        { index: 3, question: '"Ducks and fish both live in water." This sentence describes a connection by showing how ducks and fish are ___.', type: 'fill-blank', correctAnswer: 'alike', hint: 'The sentence tells us something the two animals have in common.', explanation: 'The sentence compares ducks and fish by showing they are alike — they both live in water.', standardCode: 'K.RI.3' },
        { index: 4, question: '"The plant did not get any water, so it dried up." What is the effect?', type: 'multiple-choice', options: ['The plant grew tall', 'The plant did not get water', 'The plant dried up', 'The plant got sunny'], correctAnswer: 'The plant dried up', hint: 'The effect is what happened as a result.', explanation: 'The plant drying up is the effect. It happened because the plant did not get water (the cause).', standardCode: 'K.RI.3' },
      ],
      assessment: {
        questions: [
          { question: 'What is the connection between these two ideas? "The boy studied hard. He got a good grade on his test."', type: 'short-answer', correctAnswer: 'Studying hard caused him to get a good grade. It is a cause and effect connection.', standardCode: 'K.RI.3' },
          { question: 'Which pair of signal words helps you find steps in order?', type: 'multiple-choice', options: ['big and small', 'first and then', 'happy and sad', 'up and down'], correctAnswer: 'first and then', standardCode: 'K.RI.3' },
          { question: 'How are comparing and cause-and-effect connections different?', type: 'short-answer', correctAnswer: 'Comparing shows how things are alike or different. Cause and effect shows how one event makes another event happen.', standardCode: 'K.RI.3' },
        ],
      },
    },
  },
]
