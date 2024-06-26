const questions = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correct: "Paris"
    },
    {
        question: "What is the capital of Germany?",
        choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correct: "Berlin"
    },
    {
        question: "What is the capital of Spain?",
        choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correct: "Madrid"
    },
    {
        question: "What is the capital of Portugal?",
        choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correct: "Lisbon"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const choiceButtons = document.getElementsByClassName('choice');

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    for (let i = 0; i < choiceButtons.length; i++) {
        const button = choiceButtons[i];
        button.innerText = currentQuestion.choices[i];
        button.classList.remove('correct', 'wrong');
    }
}

function selectAnswer(choiceId) {
    const selectedButton = document.getElementById(choiceId);
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedButton.innerText === currentQuestion.correct) {
        selectedButton.classList.add('correct');
        score++;
    } else {
        selectedButton.classList.add('wrong');
    }

    Array.from(document.getElementsByClassName('choice')).forEach(button => {
        button.disabled = true;
    });

    document.getElementById('next-button').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }

    Array.from(document.getElementsByClassName('choice')).forEach(button => {
        button.disabled = false;
    });

    document.getElementById('next-button').style.display = 'none';
}

function showResult() {
    const quizContainer = document.getElementById('quiz');
    const resultElement = document.getElementById('result');

    quizContainer.innerHTML = `<h2>You scored ${score} out of ${questions.length}</h2>`;
    resultElement.innerText = '';
}

document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
    document.getElementById('next-button').style.display = 'none';
});
