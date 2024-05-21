const questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyperlinking Text Management Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        options: ["<style>", "<script>", "<css>", "<link>"],
        answer: "<style>"
    },
    {
        question: "What is the correct syntax for referring to an external script called 'script.js'?",
        options: ["<script src='script.js'>", "<script href='script.js'>", "<script ref='script.js'>", "<script name='script.js'>"],
        answer: "<script src='script.js'>"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        options: ["alert('Hello World');", "msg('Hello World');", "alertBox('Hello World');", "msgBox('Hello World');"],
        answer: "alert('Hello World');"
    },
    {
        question: "How do you create a function in JavaScript?",
        options: ["function = myFunction()", "function myFunction()", "function: myFunction()", "createFunction myFunction()"],
        answer: "function myFunction()"
    },
    {
        question: "How do you call a function named 'myFunction'?",
        options: ["call myFunction()", "call function myFunction()", "myFunction()", "execute myFunction()"],
        answer: "myFunction()"
    },
    {
        question: "How do you write an IF statement in JavaScript?",
        options: ["if i == 5 then", "if (i == 5)", "if i = 5", "if (i == 5) then"],
        answer: "if (i == 5)"
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        options: ["text-color", "color", "font-color", "text-style"],
        answer: "color"
    },
    {
        question: "Which CSS property is used to control the layout of the items in a flex container?",
        options: ["display", "align-items", "justify-content", "flex-direction"],
        answer: "flex-direction"
    },
    {
        question: "Which CSS property is used to create space between the element's border and its content?",
        options: ["margin", "padding", "border-spacing", "spacing"],
        answer: "padding"
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
        button.classList.remove('correct', 'wrong','clicked');
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
            localStorage.setItem('quizScore', score);
            window.location.href = 'score.html';
        }, 500);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    loadQuestion();
});
