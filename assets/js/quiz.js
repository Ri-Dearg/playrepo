// One option for a question data structure - an array of objects
const questions = [
    {
        question: 'This is question 1?',
        answers: [
            'Answer from array',
            'Answer from array',
            'Answer from array',
            'Answer from array',
        ],
    },
    {
        question: 'This is question 2?',
        answers: [
            'Answer from array',
            'Answer from array',
            'Answer from array',
            'Answer from array',
        ],
    },
    {
        question: 'This is question 3?',
        answers: [
            'Answer from array',
            'Answer from array',
            'Answer from array',
            'Answer from array',
        ],
    },
    {
        question: 'This is question 4?',
        answers: [
            'Answer from array',
            'Answer from array',
            'Answer from array',
            'Answer from array',
        ],
    },
];

// Declare constants
const startButton = document.getElementById('startQuiz');
const instructions = document.getElementById('instructionSection');
const questionsBox = document.getElementById('questionsBox');
const answerButtons = document.getElementsByClassName('answerBtn');
const question = document.getElementById('question');

function showAnswers() {
    for (i = 0; i < answerButtons.length; i++) {
        // Loop through questions array, using the index to access the questions
        answerButtons[i].innerText = questions[0].answers[i];
        // Access the event parameter to target the element
        answerButtons[i].addEventListener('click', function (e) {
            e.target.classList.add('secondary-color');
        });
    }
}

startButton.addEventListener('click', () => {
    // Order matters, first make the changes to hidden elements on the page
    question.innerText = questions[0].question;
    showAnswers();

    // Then change display of instructions
    instructions.classList.add('d-none');
    questionsBox.classList.remove('d-none');
});
