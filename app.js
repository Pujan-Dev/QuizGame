var Question = document.getElementById('Question');
var Option = document.getElementById("Option");
var scoreDisplay = document.getElementById("score"); 
var gameOverMessage = document.getElementById("gameOver"); 
var finalScoreDisplay = document.getElementById("finalScore"); 

const questions = [
    { question: "What is 2 + 2?", answers: ["3", "4", "5", "6"], correct: 1 },
    { question: "What is the time complexity of accessing an element in an array?", answers: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], correct: 0 },
    { question: "Which of the following is a non-primitive data type in Java?", answers: ["int", "char", "String", "boolean"], correct: 2 },
    { question: "What does the acronym 'SQL' stand for?", answers: ["Structured Query Language", "Simple Query Language", "Sequential Query Language", "None of the above"], correct: 0 },
    { question: "Which of the following is used to declare a function in JavaScript?", answers: ["func myFunction() {}", "function myFunction() {}", "declare myFunction() {}", "define myFunction() {}"], correct: 1 },
    { question: "In C++, what is the default access specifier for class members?", answers: ["public", "private", "protected", "None of the above"], correct: 1 },
    { question: "Which of the following is not a programming language?", answers: ["Python", "HTML", "Java", "Ruby"], correct: 1 },
    { question: "Which of the following is a JavaScript framework?", answers: ["Django", "Angular", "Flask", "ASP.NET"], correct: 1 },
    { question: "What is the purpose of a ‘constructor’ in object-oriented programming?", answers: ["To create a copy of an object", "To initialize an object", "To destroy an object", "To change the state of an object"], correct: 1 },
    { question: "Which data structure uses LIFO (Last In, First Out) order?", answers: ["Queue", "Array", "Stack", "Linked List"], correct: 2 }
];

var question_no = 0;
var score = 0; // Initialize score

function showQuestion() {
    Question.innerHTML = questions[question_no].question;
}

function showOption() {
    Option.innerHTML = questions[question_no].answers
        .map((answer, index) =>
            `<button type="button" aria-label="Select answer ${answer}" onclick="checkAnswer(${index})">${answer}</button>`
        )
        .join("");
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === questions[question_no].correct) {
        score++;
        scoreDisplay.innerText = `Score: ${score}`; // Update score display
        nextQuestion(event)
    } else {
        alert("Incorrect! Please try again.");
    }
}

function nextQuestion(event) {
    event.preventDefault();
    question_no++;

    if (question_no < questions.length) {
        showQuestion();
        showOption();
    } else {
        gameOverMessage.style.display = "block";
        finalScoreDisplay.innerText = score; 
        menu.style.display = "none"; 
        scoreDisplay.style.display = 'none';
    }
}

function restartGame() {
    question_no = 0;
    score = 0;
    scoreDisplay.style.display = 'block';
    scoreDisplay.innerText = `Score: ${score}`;
    gameOverMessage.style.display = "none"; 
    menu.style.display = "block"; 
    showQuestion();
    showOption();
}

document.addEventListener('DOMContentLoaded', () => {
    showQuestion();
    showOption();
});
