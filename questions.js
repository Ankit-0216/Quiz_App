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
      { text: "Tiger", correct: false },
      { text: "Lion", correct: true },
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
      { text: "Venus", correct: true },
      { text: "Saturn", correct: false },
      { text: "Jupiter", correct: false },
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
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;

  //to display the answers
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

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
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
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length} !`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.lenght) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
