// One option for a question data structure - an array of objects
const questions = [
    {
        question: "This is question 1?",
        answers: [
            { answer: "Answer from array", correct: false },
            { answer: "Answer from array t", correct: true },
            { answer: "Answer from array", correct: false },
            { answer: "Answer from array", correct: false },
        ],
    },
    {
        question: "This is question 2?",
        answers: [
            { answer: "Answer from array", correct: false },
            { answer: "Answer from array t", correct: true },
            { answer: "Answer from array", correct: false },
            { answer: "Answer from array", correct: false },
        ],
    },
    {
        question: "This is question 3?",
        answers: [
            { answer: "Answer from array", correct: false },
            { answer: "Answer from array t", correct: true },
            { answer: "Answer from array", correct: false },
            { answer: "Answer from array", correct: false },
        ],
    },
    {
        question: "This is question 4?",
        answers: [
            { answer: "Answer from array", correct: false },
            { answer: "Answer from array t", correct: true },
            { answer: "Answer from array", correct: false },
            { answer: "Answer from array", correct: false },
        ],
    },
    {
        question: "This is question 4?",
        answers: [
            { answer: "Answer from array", correct: false },
            { answer: "Answer from array t", correct: true },
            { answer: "Answer from array", correct: false },
            { answer: "Answer from array", correct: false },
        ],
    },
    {
        question: "This is question 4?",
        answers: [
            { answer: "Answer from array", correct: false },
            { answer: "Answer from array t", correct: true },
            { answer: "Answer from array", correct: false },
            { answer: "Answer from array", correct: false },
        ],
    },
    {
        question: "This is question 4?",
        answers: [
            { answer: "Answer from array", correct: false },
            { answer: "Answer from array t", correct: true },
            { answer: "Answer from array", correct: false },
            { answer: "Answer from array", correct: false },
        ],
    },
    {
        question: "This is question 4?",
        answers: [
            { answer: "Answer from array", correct: false },
            { answer: "Answer from array t", correct: true },
            { answer: "Answer from array", correct: false },
            { answer: "Answer from array", correct: false },
        ],
    },
    {
        question: "This is question 4?",
        answers: [
            { answer: "Answer from array", correct: false },
            { answer: "Answer from array t", correct: true },
            { answer: "Answer from array", correct: false },
            { answer: "Answer from array", correct: false },
        ],
    },
];

// Declare constants
const startButton = document.getElementById("startQuiz");
const instructions = document.getElementById("instructionSection");
const questionsBox = document.getElementById("questionsBox");
const answerButtons = document.getElementsByClassName("answerBtn");
const question = document.getElementById("question");
const nextButton = document.getElementById("nextQuestion");
let questionIndex = 0;
let score = 0;

function updateButton(button) {
    // Loop through questions array, using the index to access the questions
    button.innerText = `${questions[questionIndex].answers[i].answer} ${i + 1}`;
    button.classList.remove("secondary-color");
    button.disabled = false;
}

function nextButtonEvent() {
    nextButton.classList.remove("d-none");
    nextButton.addEventListener("click", () => {
        // Order matters, first make the changes to hidden elements on the page
        question.innerText = questions[questionIndex].question;
        for (i = 0; i < answerButtons.length; i++) {
            updateButton(answerButtons[i]);
        }
    });
}

function disableButtons() {
    for (let button of answerButtons) {
        button.disabled = true;
    }
    nextButtonEvent();
}

function isCorrect(i) {
    console.log(i);
    console.log(questions[questionIndex].answers);
}

function answerClick(button, index) {
    button.addEventListener("click", function (e) {
        e.target.classList.add("secondary-color");
        disableButtons();
        if (questions[questionIndex].answers[index].correct) {
            score++;
        }
        console.log(score);
        questionIndex++;
    });
}

function showAnswers() {
    for (i = 0; i < answerButtons.length; i++) {
        // Loop through questions array, using the index to access the questions
        updateButton(answerButtons[i]);
        // Access the event parameter to target the element
        answerClick(answerButtons[i], i);
    }
}

startButton.addEventListener("click", () => {
    // Order matters, first make the changes to hidden elements on the page
    question.innerText = questions[questionIndex].question;
    showAnswers();

    // Then change display of instructions
    instructions.classList.add("d-lg-none");
    questionsBox.classList.remove("d-none");
});
