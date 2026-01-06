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
];

// Declare constants
const startButton = document.getElementById("startQuiz");
const instructions = document.getElementById("instructionSection");
const questionsBox = document.getElementById("questionsBox");
const questionEl = document.getElementById("question");
const nextButton = document.getElementById("nextQuestion");
// the ... spread operator expands an list/array-like item into an array for easy use of array methods later.
const answerButtons = [...document.getElementsByClassName("answerBtn")];

// Variables that will change.
let questionIndex = 0;
let score = 0;
// Control the question state for double clicks.
let hasAnswered = false;

// Declare functions

// Renders the question in UI, does not mix game logic with UI elements.

/**
 * Updates the DOM to display the current question and its potential answers.
 * Resets the UI state for the new question, including button styles and visibility.
 * * @returns {void}
 */
function renderQuestion() {
    const current = questions[questionIndex];

    questionEl.innerText = current.question;
    nextButton.classList.add("d-none");
    hasAnswered = false;

    current.answers.forEach((answer, i) => {
        const btn = answerButtons[i];
        btn.innerText = answer.answer;
        btn.classList.remove("secondary-color");
        btn.disabled = false;
    });
}

// Game logic

/**
 * Handles the logic when a user selects an answer.
 * Validates the selection, updates the score, and toggles UI feedback.
 * * @param {number} index - The index of the selected answer within the current question's answer array.
 * @returns {void}
 */
function selectAnswer(index) {
    // Prevent double clicks based on variable. Ends code here.
    if (hasAnswered) return;

    // If hasAnswered is false, set to true first to prevent further interaction.
    hasAnswered = true;
    const selected = questions[questionIndex].answers[index];

    answerButtons[index].classList.add("secondary-color");
    // Disable buttons
    answerButtons.forEach((btn) => (btn.disabled = true));
    // Show next button
    nextButton.classList.remove("d-none");

    // increment score if correct
    if (selected.correct) score++;
}

/**
 * Advances the quiz to the next step.
 * Increments the question counter and determines whether to show a new question or the final results.
 * * @returns {void}
 */
function nextQuestion() {
    // increment question for next round
    questionIndex++;

    // Ternary operator with boolean expression

    // Is the questionIndex less than the length?
    questionIndex < questions.length
        ? // If it is less, render the next question
          renderQuestion()
        : // Else, show alert
          alert(`Quiz Finished! Score: ${score}`);
}

// Add event listeners onces
answerButtons.forEach((btn, i) =>
    btn.addEventListener("click", () => selectAnswer(i))
);

nextButton.addEventListener("click", nextQuestion);

startButton.addEventListener("click", () => {
    instructions.classList.add("d-none");
    questionsBox.classList.remove("d-none");
    renderQuestion();
});
