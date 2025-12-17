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

const startButton = document.getElementById('startQuiz');
const instructions = document.getElementById('instructionSection');
const questionsBox = document.getElementById('questionsBox');
const answerButtons = document.getElementsByClassName('answerBtn');
const question = document.getElementById('question');
console.log(answerButtons);
function showAnswers() {
  for (i = 0; i < answerButtons.length; i++) {
    answerButtons[i].innerText = questions[0].answers[i];
    answerButtons[i].addEventListener('click', function (e) {
      e.target.classList.add('secondary-color');
    });
  }
}

startButton.addEventListener('click', () => {
  question.innerText = questions[0].question;
  showAnswers();
  instructions.classList.add('d-none');
  questionsBox.classList.remove('d-none');
});
