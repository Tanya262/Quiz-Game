//DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");


const quizQuestions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "London", correct: false},
            { text: "Berlin", correct: false},
            { text: "Paris", correct: true},
            { text: "Madrid", correct: false},
        ],
    },
    {
        question: "Which plant is known as the Red Planet?",
        answers: [
            { text: "Venus", correct: false},
            { text: "Mars", correct: true},
            { text: "Jupiter", correct: false},
            { text: "Saturn", correct: false},
        ],
    },
    {
        question: "What is the largest Ocean on Earth?",
        answers: [
            { text: "Atlantic Ocean", correct: false},
            { text: "Pacific Ocean", correct: true},
            { text: "Indian Ocean", correct: false},
            { text: "Arctic Ocean", correct: false},
        ],
    },
    {
        question: "Which of these is not a Programming Language?",
        answers: [
            { text: "Java", correct: false},
            { text: "Python", correct: false},
            { text: "Banana", correct: true},
            { text: "JavaScript", correct: false},
        ],
    },
];

//QUIZ STATE VARS
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

//event listerners

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
    // reset vars
    currentQuestionIndex = 0;
    scoreSpan.textContent = 0;

    startScreen.classList.remove("active");
    quizScreen.classList.add("active");

    showQuestion()
}

function showQuestion() {
    // reset state
    answersDisabled = false;

    const currentQuestion = quizQuestions[currentQuestionIndex]

    currentQuestionSpan.textContent = currentQuestionIndex + 1

    const progressPercent = (currentQuestion / quizQuestions.length) * 100;
    progressBar.style.width = progressPercent + "%"

    questionText.textContent = currentQuestion.question

    //todo: explain this in a sec
    answersContainer.innerHTML = "";

    currentQuestion.answers.forEach(answer=> {
        const button = document.createElement("button")
        button.textContent = answer.text
        button.classList.add("answer-btn")

        //what is database? it's a property of the button element that allows you to store custom data
        button.dataset
    })
}

function restartQuiz() {
    console.log("quiz re-started");
}

