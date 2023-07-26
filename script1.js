const questions = [
  {
    question: "What is the currency of India?",
    answers: [
      { text: "Dollar", correct: false },
      { text: "Euro", correct: false },
      { text: "Rupees", correct: true },
      { text: "Yen", correct: false },
    ],
  },
  {
    question: "What is the largest mammal in the world?",
    answers: [
      { text: "Hippopotamus", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "In which year did India gain Independence?",
    answers: [
      { text: "1945", correct: false },
      { text: "1950", correct: false },
      { text: "1952", correct: false },
      { text: "1947", correct: true },
    ],
  },
  {
    question: "Who is the first Prime Minister of India?",
    answers: [
      { text: "Jawaharlal Nehru", correct: true },
      { text: "Mahatma Gandhi", correct: false },
      { text: "Indira Gandhi", correct: false },
      { text: "Rajiv Gandhi", correct: false },
    ],
  },
  {
    question: "What is the nationa animal of India?",
    answers: [
      { text: "Tiger", correct: true },
      { text: "Lion", correct: false },
      { text: "Elephant", correct: false },
      { text: "Peacock", correct: false },
    ],
  },
  {
    question: "Which festival is known as Festival of Lights?",
    answers: [
      { text: "Diwali", correct: true },
      { text: "Holi", correct: false },
      { text: "Durga Puja", correct: false },
      { text: "Eid", correct: false },
    ],
  },
  {
    question: "What is the national flower of India?",
    answers: [
      { text: "Rose", correct: false },
      { text: "Lotus", correct: true },
      { text: "Jasmine", correct: false },
      { text: "Sunflower", correct: false },
    ],
  },
  {
    question: "What is the largest planet in our Solar Sytem",
    answers: [
      { text: "Mars", correct: false },
      { text: "Venus", correct: false },
      { text: "Saturn", correct: false },
      { text: "Jupiter", correct: true },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-btn");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerText = "Next";
  nextButton.style.display = "none";
  showQuestion();
}

function showQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerText = `${questionNo}. ${currentQuestion.question}`;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("button");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach((button) => {
    debugger;
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) handleNextButton();
  else startQuiz();
});

function handleNextButton() {
  currentQuestionIndex++;
  resetButtonState();
  if (currentQuestionIndex < questions.length) showQuestion();
  else showScore();
}

function resetButtonState() {
  nextButton.style.display = "none";

  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function showScore() {
  questionElement.innerText = `You scored ${score} out of ${questions.length} !`;
  nextButton.innerText = "Play Again";
  nextButton.style.display = "block";
}

startQuiz();
