/* Quiz Game using ony Javascript*/
/*import promptSync from 'prompt-sync';
const prompt = promptSync();

// Quiz data structure
const quizData = {
  Science: {
    Easy: [
      { question: "What planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter"], answer: 2 },
      { question: "What is the chemical symbol for water?", options: ["H20", "O2", "CO2"], answer: 1 },
      { question: "How many planets are in the solar system?", options: ["7", "8", "9"], answer: 2 },
      { question: "What gas do plants absorb?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen"], answer: 2 },
      { question: "What organ pumps blood in the body?", options: ["Lungs", "Heart", "Kidneys"], answer: 2 }
    ],
    Medium: [
      { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome"], answer: 2 },
      { question: "Which planet has the most gravity?", options: ["Earth", "Jupiter", "Mars"], answer: 2 },
      { question: "Which gas is most abundant in the Earth’s atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen"], answer: 3 },
      { question: "Who proposed the theory of relativity?", options: ["Einstein", "Newton", "Galileo"], answer: 1 },
      { question: "What is the hardest natural substance on Earth?", options: ["Diamond", "Iron", "Gold"], answer: 1 }
    ],
    Hard: [
      { question: "What is the heaviest naturally occurring element?", options: ["Uranium", "Lead", "Osmium"], answer: 1 },
      { question: "What particle is known as the God particle?", options: ["Neutron", "Higgs boson", "Photon"], answer: 2 },
      { question: "Which planet has the longest day?", options: ["Venus", "Mars", "Mercury"], answer: 1 },
      { question: "Which element has the highest melting point?", options: ["Iron", "Tungsten", "Gold"], answer: 2 },
      { question: "What’s the atomic number of hydrogen?", options: ["1", "2", "3"], answer: 1 }
    ]
  },
  History: {
    Easy: [
      { question: "Who was the first president of the United States?", options: ["George Washington", "Abraham Lincoln", "John Adams"], answer: 1 },
      { question: "In what year did World War II end?", options: ["1942", "1945", "1948"], answer: 2 },
      { question: "Which country gifted the Statue of Liberty to the USA?", options: ["Germany", "France", "Italy"], answer: 2 },
      { question: "Who was known as the Iron Lady?", options: ["Margaret Thatcher", "Indira Gandhi", "Angela Merkel"], answer: 1 },
      { question: "When did the moon landing occur?", options: ["1965", "1969", "1972"], answer: 2 }
    ],
    Medium: [
      { question: "When did the Titanic sink?", options: ["1912", "1915", "1908"], answer: 1 },
      { question: "Who discovered America?", options: ["Christopher Columbus", "Leif Erikson", "Amerigo Vespucci"], answer: 1 },
      { question: "When was the Declaration of Independence signed?", options: ["1776", "1800", "1850"], answer: 1 },
      { question: "Who wrote the Communist Manifesto?", options: ["Karl Marx", "Lenin", "Stalin"], answer: 1 },
      { question: "What year was the Berlin Wall torn down?", options: ["1989", "1990", "1991"], answer: 1 }
    ],
    Hard: [
      { question: "In what year did the Roman Empire fall?", options: ["476", "530", "610"], answer: 1 },
      { question: "Who was the first emperor of Rome?", options: ["Caesar", "Augustus", "Nero"], answer: 2 },
      { question: "What was the capital of the Byzantine Empire?", options: ["Rome", "Constantinople", "Athens"], answer: 2 },
      { question: "Who was the only U.S. president to resign?", options: ["Richard Nixon", "Jimmy Carter", "Gerald Ford"], answer: 1 },
      { question: "When was the French Revolution?", options: ["1789", "1804", "1820"], answer: 1 }
    ]
  },
  Entertainment: {
    Easy: [
      { question: "What year was the first Harry Potter movie released?", options: ["2001", "2003", "2005"], answer: 1 },
      { question: "Who directed 'Inception'?", options: ["Steven Spielberg", "Christopher Nolan", "James Cameron"], answer: 2 },
      { question: "Who is the lead actor in 'Pirates of the Caribbean'?", options: ["Orlando Bloom", "Johnny Depp", "Keira Knightley"], answer: 2 },
      { question: "Which band was Freddie Mercury part of?", options: ["Queen", "The Beatles", "The Rolling Stones"], answer: 1 },
      { question: "Which movie won Best Picture in 2020?", options: ["1917", "Joker", "Parasite"], answer: 3 }
    ],
    Medium: [
      { question: "Which actor played the Joker in 'The Dark Knight'?", options: ["Heath Ledger", "Joaquin Phoenix", "Jack Nicholson"], answer: 1 },
      { question: "Who directed 'Pulp Fiction'?", options: ["Quentin Tarantino", "Martin Scorsese", "Steven Spielberg"], answer: 1 },
      { question: "What movie has the quote 'Say hello to my little friend'?", options: ["Scarface", "Goodfellas", "The Godfather"], answer: 1 },
      { question: "Who directed the Lord of the Rings trilogy?", options: ["George Lucas", "Peter Jackson", "Steven Spielberg"], answer: 2 },
      { question: "What was the first feature-length animated movie?", options: ["Fantasia", "Snow White", "Bambi"], answer: 2 }
    ],
    Hard: [
      { question: "Which Hitchcock movie featured a crop-duster scene?", options: ["Psycho", "Vertigo", "North by Northwest"], answer: 3 },
      { question: "Who played Hannibal Lecter in 'The Silence of the Lambs'?", options: ["Robert De Niro", "Anthony Hopkins", "Jack Nicholson"], answer: 2 },
      { question: "Which movie holds the record for highest box-office earnings?", options: ["Avatar", "Avengers: Endgame", "Titanic"], answer: 1 },
      { question: "What was the first movie to win the Academy Award for Best Picture?", options: ["Wings", "Gone with the Wind", "The Broadway Melody"], answer: 1 },
      { question: "Which film featured the line 'I'll be back'?", options: ["The Terminator", "Rambo", "Die Hard"], answer: 1 }
    ]
  }
};

// Difficulty point values
const pointValues = {
  Easy: 1,
  Medium: 2,
  Hard: 3
};

// Display categories
function displayCategories() {
  console.log("\nCategories:");
  const categories = Object.keys(quizData);
  categories.forEach((cat, index) => {
    console.log(`${index + 1}. ${cat}`);
  });
  return categories;
}

// Ask for category selection
function chooseCategory(categories) {
  let categoryIndex;
  while (true) {
    categoryIndex = parseInt(prompt("Choose a category number: ")) - 1;
    if (categoryIndex >= 0 && categoryIndex < categories.length) {
      return categories[categoryIndex];
    } else {
      console.log("Invalid category choice. Please try again.");
    }
  }
}

// Ask for difficulty selection
function chooseDifficulty() {
  const difficulties = ["Easy", "Medium", "Hard"];
  let difficulty;
  while (true) {
    difficulty = prompt("Choose difficulty (Easy, Medium, Hard): ");
    if (difficulties.includes(difficulty)) {
      return difficulty;
    } else {
      console.log("Invalid difficulty choice. Please try again.");
    }
  }
}

// Ask the user a quiz question
function askQuestion(question, options) {
  console.log(`\n${question}`);
  options.forEach((option, index) => {
    console.log(`${index + 1}. ${option}`);
  });
  let answer = parseInt(prompt("Your answer: "));
  return answer;
}

// Main game function
function playQuiz() {
  let score = 0;
  let playAgain = true;

  while (playAgain) {
    const categories = displayCategories();
    const selectedCategory = chooseCategory(categories);
    const selectedDifficulty = chooseDifficulty();

    console.log(`\nStarting quiz in ${selectedCategory} (${selectedDifficulty})`);

    const questions = quizData[selectedCategory][selectedDifficulty];
    questions.forEach((q) => {
      const userAnswer = askQuestion(q.question, q.options);
      if (userAnswer === q.answer) {
        console.log("Correct!");
        score += pointValues[selectedDifficulty];
      } else {
        console.log(`Wrong! The correct answer was ${q.options[q.answer - 1]}.`);
      }
    });

    console.log(`Your current score is: ${score}`);

    const continueGame = prompt("Do you want to play again? (yes/no): ");
    playAgain = continueGame.toLowerCase() === 'yes';
  }

  console.log(`Game over! Your final score is: ${score}`);
}

// Start the game
playQuiz();*/

/**************************************************** */
import promptSync from 'prompt-sync';
import chalk from 'chalk'; // Import chalk for colored output

const prompt = promptSync();

// Quiz data structure with new questions
const quizData = {
  Science: {
    Easy: [
      { question: "What is the chemical symbol for oxygen?", options: ["O", "Ox", "O2"], answer: 3 },
      { question: "What does DNA stand for?", options: ["Deoxyribonucleic Acid", "Dinucleic Acid", "Dioxide Nitrogen Acid"], answer: 1 },
      { question: "Which planet is closest to the sun?", options: ["Mercury", "Venus", "Earth"], answer: 1 },
      { question: "What is the hardest natural substance?", options: ["Diamond", "Gold", "Iron"], answer: 1 },
      { question: "What is the boiling point of water?", options: ["90°C", "100°C", "110°C"], answer: 2 }
    ],
    Medium: [
      { question: "What is the most abundant gas in Earth's atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide"], answer: 2 },
      { question: "What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "100,000 km/s"], answer: 1 },
      { question: "Who developed the theory of general relativity?", options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei"], answer: 2 },
      { question: "What is the smallest unit of matter?", options: ["Atom", "Molecule", "Electron"], answer: 1 },
      { question: "What part of the cell contains genetic material?", options: ["Nucleus", "Cytoplasm", "Membrane"], answer: 1 }
    ],
    Hard: [
      { question: "What is the heaviest naturally occurring element?", options: ["Uranium", "Plutonium", "Lead"], answer: 1 },
      { question: "What is the chemical formula for glucose?", options: ["C6H12O6", "H2O", "CO2"], answer: 1 },
      { question: "Which planet has the longest day?", options: ["Venus", "Mars", "Mercury"], answer: 1 },
      { question: "What is the powerhouse of the cell?", options: ["Mitochondria", "Nucleus", "Ribosome"], answer: 1 },
      { question: "What particle is known as the 'God particle'?", options: ["Higgs boson", "Neutron", "Electron"], answer: 1 }
    ]
  },
  History: {
    Easy: [
      { question: "Who was the first president of the United States?", options: ["George Washington", "Thomas Jefferson", "John Adams"], answer: 1 },
      { question: "In what year did World War II end?", options: ["1945", "1944", "1943"], answer: 1 },
      { question: "Who discovered America?", options: ["Christopher Columbus", "Leif Erikson", "Ferdinand Magellan"], answer: 1 },
      { question: "Who was the main author of the Declaration of Independence?", options: ["Benjamin Franklin", "Thomas Jefferson", "George Washington"], answer: 2 },
      { question: "What empire was led by Julius Caesar?", options: ["Roman", "Greek", "Ottoman"], answer: 1 }
    ],
    Medium: [
      { question: "What year did the Berlin Wall fall?", options: ["1989", "1990", "1987"], answer: 1 },
      { question: "Who was the British Prime Minister during most of World War II?", options: ["Winston Churchill", "Neville Chamberlain", "Margaret Thatcher"], answer: 1 },
      { question: "In what year did the Titanic sink?", options: ["1912", "1910", "1915"], answer: 1 },
      { question: "What war was fought between the North and South regions in the United States?", options: ["Civil War", "Revolutionary War", "World War I"], answer: 1 },
      { question: "Who was the last emperor of China?", options: ["Puyi", "Sun Yat-sen", "Mao Zedong"], answer: 1 }
    ],
    Hard: [
      { question: "What was the name of the ship that brought the Pilgrims to America?", options: ["Mayflower", "Santa Maria", "Beagle"], answer: 1 },
      { question: "Who was the first emperor of Rome?", options: ["Augustus", "Nero", "Caligula"], answer: 1 },
      { question: "Which empire was ruled by Genghis Khan?", options: ["Mongol", "Ottoman", "Roman"], answer: 1 },
      { question: "What year did the French Revolution begin?", options: ["1789", "1790", "1791"], answer: 1 },
      { question: "Who discovered penicillin?", options: ["Alexander Fleming", "Marie Curie", "Isaac Newton"], answer: 1 }
    ]
  },
  Entertainment: {
    Easy: [
      { question: "Who directed the movie 'Jurassic Park'?", options: ["Steven Spielberg", "James Cameron", "George Lucas"], answer: 1 },
      { question: "What is the name of the wizarding school in 'Harry Potter'?", options: ["Hogwarts", "Durmstrang", "Beauxbatons"], answer: 1 },
      { question: "Which actor played Iron Man?", options: ["Robert Downey Jr.", "Chris Hemsworth", "Chris Evans"], answer: 1 },
      { question: "What is the name of the fictional country in 'Black Panther'?", options: ["Wakanda", "Asgard", "Latveria"], answer: 1 },
      { question: "Which movie features a character named Jack Sparrow?", options: ["Pirates of the Caribbean", "The Mummy", "Treasure Island"], answer: 1 }
    ],
    Medium: [
      { question: "Who won the first American Idol?", options: ["Kelly Clarkson", "Carrie Underwood", "Jennifer Hudson"], answer: 1 },
      { question: "What is the highest-grossing movie of all time?", options: ["Avatar", "Avengers: Endgame", "Titanic"], answer: 2 },
      { question: "What year was Netflix founded?", options: ["1997", "2005", "2010"], answer: 1 },
      { question: "What is the name of Han Solo's ship?", options: ["Millennium Falcon", "X-Wing", "Star Destroyer"], answer: 1 },
      { question: "Who directed 'Inception'?", options: ["Christopher Nolan", "Quentin Tarantino", "David Fincher"], answer: 1 }
    ],
    Hard: [
      { question: "What year did 'Friends' premiere on TV?", options: ["1994", "1996", "1999"], answer: 1 },
      { question: "What is the name of the coffee shop in 'Friends'?", options: ["Central Perk", "Coffee Bean", "Starbucks"], answer: 1 },
      { question: "What planet is Chewbacca from?", options: ["Kashyyyk", "Tatooine", "Dagobah"], answer: 1 },
      { question: "Which director is known for the 'Pulp Fiction'?", options: ["Quentin Tarantino", "Steven Spielberg", "Martin Scorsese"], answer: 1 },
      { question: "Who voiced Darth Vader?", options: ["James Earl Jones", "Harrison Ford", "Mark Hamill"], answer: 1 }
    ]
  }
};

// Points based on difficulty
const pointValues = { Easy: 1, Medium: 2, Hard: 3 };

// Function to display categories with chalk styling
function displayCategories() {
  console.log(chalk.bold.blue("\nCategories:"));
  return Object.keys(quizData).map((category, index) => {
    console.log(chalk.yellow(`${index + 1}. ${category}`));
    return category;
  });
}

// Function to choose a category
function chooseCategory(categories) {
  let choice;
  do {
    choice = parseInt(prompt(chalk.green("Choose a category by number: ")));
  } while (isNaN(choice) || choice < 1 || choice > categories.length);
  return categories[choice - 1];
}

// Function to choose a difficulty level

function chooseDifficulty() {
  let difficulty;
  const difficulties = ["Easy", "Medium", "Hard"];
  console.log(chalk.bold.blue("\nChoose a difficulty:"));
  difficulties.forEach((level, index) => {

    console.log(chalk.yellow(`${index + 1}. ${level}`));
  });
  do {
    difficulty = parseInt(prompt(chalk.green("Choose a difficulty by number: ")));
  } while (isNaN(difficulty) || difficulty < 1 || difficulty > 3);
  return difficulties[difficulty - 1];
}

// Function to ask a question
function askQuestion(question, options) {
  console.log(chalk.bold.magentaBright(`\n${question}`));
  options.forEach((option, index) => {
    console.log(chalk.cyan(`${index + 1}. ${option}`));
  });
  let answer;
  do {
    answer = parseInt(prompt(chalk.green("Your answer: ")));
  } while (isNaN(answer) || answer < 1 || answer > options.length);
  return answer;
}

// Main game function
function playQuiz() {
  console.log(chalk.bold.blueBright("Welcome to the Quiz Game!\n"));
  const categories = displayCategories();
  const category = chooseCategory(categories);
  const difficulty = chooseDifficulty();

  console.log(chalk.bold.blueBright(`\nYou chose: ${category} - ${difficulty} difficulty\n`));
  
  const questions = quizData[category][difficulty];
  let score = 0;

  // Ask each question
  questions.forEach((questionData, index) => {
    console.log(chalk.bold.yellow(`\nQuestion ${index + 1}:`));
    const userAnswer = askQuestion(questionData.question, questionData.options);
    if (userAnswer === questionData.answer) {
      console.log(chalk.greenBright("Correct!"));
      score += pointValues[difficulty];
    } else {
      console.log(chalk.redBright(`Incorrect! The correct answer was: ${questionData.options[questionData.answer - 1]}`));
    }
    console.log(chalk.bold.blue(`Your current score: ${score}\n`));
  });

  console.log(chalk.bold.magentaBright(`\nFinal score: ${score}`));
  const playAgain = prompt(chalk.green("\nWould you like to play again? (Yes/No): ")).toLowerCase();
  if (playAgain === 'yes') {
    playQuiz();
  } else {
    console.log(chalk.blueBright("Thank you for playing! Goodbye."));
  }
}

// Start the quiz
playQuiz();