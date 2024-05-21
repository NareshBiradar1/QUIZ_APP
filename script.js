const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Mars", "Venus"],
        answer: "Jupiter"
    },
    // Add more questions here...
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionButtons = [
    document.getElementById('option1'),
    document.getElementById('option2'),
    document.getElementById('option3'),
    document.getElementById('option4')
];
const scoreElement = document.getElementById('scoreValue');

optionButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        checkAnswer(button, index);
    });
});

function loadQuestion() {
    const q = questions[currentQuestion];
    questionElement.textContent = q.question;

    optionButtons.forEach((button, index) => {
        button.textContent = q.options[index];
        button.classList.remove('correct', 'wrong');
        button.disabled = false;
    });

    scoreElement.textContent = score;
}

function checkAnswer(button, index) {
    const q = questions[currentQuestion];
    button.classList.add('clicked');
    if (q.options[index] === q.answer) {
        score++;
        scoreElement.textContent = score;
        button.classList.add('correct');
    } else {
        button.classList.add('wrong');
        optionButtons.forEach((btn, idx) => {
            if (q.options[idx] === q.answer) {
                btn.classList.add('correct');
            }
        });
    }

    optionButtons.forEach(btn => btn.disabled = true);

    currentQuestion++;
    if (currentQuestion < questions.length) {
        setTimeout(loadQuestion, 500);
    } else {
        setTimeout(() => {
            alert('Quiz finished! Your score: ' + score);
            window.location.href = 'index.html';
        }, 500);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    loadQuestion();
});
