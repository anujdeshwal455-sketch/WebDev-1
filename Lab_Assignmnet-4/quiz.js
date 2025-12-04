
// 1) Define questions as objects in an array
const quizQuestions = [
  { question: "What is the capital of France?", answer: "paris" },
  { question: "Which language runs in the browser?", answer: "javascript" },
  { question: "What does HTML stand for?", answer: "hypertext markup language" },
  { question: "What does CSS stand for?", answer: "cascading style sheets" },
  { question: "What keyword declares a constant in JavaScript?", answer: "const" },
  // Add more to challenge yourself:
  { question: "What method converts a string to lowercase?", answer: "tolowercase" },
  { question: "What symbol is strict equality in JavaScript?", answer: "===" },
];

// 2) Utility: normalize strings for fair comparison
function normalize(input) {
  return String(input).toLowerCase().trim();
}

// 3) Run the quiz
function runQuiz() {
  let score = 0;

  alert("Welcome to the Console Quiz! You'll see prompts for each question.");

  for (let i = 0; i < quizQuestions.length; i++) {
    const { question, answer } = quizQuestions[i];

    // Ask the user
    const userInput = prompt(
      `Question ${i + 1} of ${quizQuestions.length}:\n\n${question}\n\nType your answer:`
    );

    // If user cancelled the prompt
    if (userInput === null) {
      alert("You cancelled the quiz. Your progress is saved up to this point.");
      break;
    }

    // Normalize and compare
    const userAnswer = normalize(userInput);
    const correctAnswer = normalize(answer);

    if (userAnswer === correctAnswer) {
      score++;
      alert("✅ Correct!");
    } else {
      alert(`❌ Incorrect.\nCorrect answer: ${answer}`);
    }
  }

  alert(`Final Score: ${score} / ${quizQuestions.length}`);
}

// 4) Start instructions
// Open your browser console, paste this entire file, then type:
///   runQuiz();
