// Questions Array 
const questions = [
    {
        question: "What is 12 × 8?",
        options: ["96", "88", "104"],
        answer: "96"
    },
    {
        question: "What is the value of 45 ÷ 5?",
        options: ["7", "8", "9"],
        answer: "9"
    },
    {
        question: "What is the square root of 144?",
        options: ["10", "11", "12"],
        answer: "12"
    },
    {
        question: "Solve: 3² + 4²",
        options: ["25", "49", "14"],
        answer: "25"
    },
    {
        question: "What is 15% of 200?",
        options: ["20", "25", "30"],
        answer: "30"
    }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 10;
let timer;

// Shuffle Questions
function shuffleQuestions() {
    questions.sort(() => Math.random() - 0.5);
}

// Start Timer
function startTimer() {
    timeLeft = 10;
    document.getElementById("time").textContent = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time").textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timer);
            document.getElementById("feedback").textContent = "Time's up!";
        }
    }, 1000);
}

// Display Question
function displayQuestion() {
    clearInterval(timer);
    startTimer();

    document.getElementById("feedback").textContent = "";

    const q = questions[currentQuestion];
    document.getElementById("question").textContent = q.question;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => checkAnswer(option);
        optionsDiv.appendChild(btn);
    });
}

// Check Answer
function checkAnswer(selected) {
    clearInterval(timer);

    if (selected === questions[currentQuestion].answer) {
        score++;
        document.getElementById("feedback").textContent = "Correct!";
    } else {
        document.getElementById("feedback").textContent = "Incorrect!";
    }

    document.getElementById("score").textContent = "Score: " + score;
}

// Next Question
function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        document.getElementById("question").textContent = "Quiz Completed!";
        document.getElementById("options").innerHTML = "";
        document.getElementById("feedback").textContent = "Final Score: " + score;
        document.getElementById("timer").style.display = "none";
    }
}

// Start Quiz
function startQuiz() {
    shuffleQuestions();
    displayQuestion();
}

document.getElementById("nextBtn").addEventListener("click", nextQuestion);

// Initialize Quiz
startQuiz();
