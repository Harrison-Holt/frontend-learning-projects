let currentQuestion = 0;
let score = 0;

const questions = [
    { question: "What year did Napoleon become emperor?", answers: { a: "1821", b: "1799", c: "1793", d: "1804" }, correct_answer: "d" },
    { question: "What year did the Battle of Hastings take place?", answers: { a: "1051", b: "1066", c: "985", d: "1537" }, correct_answer: "b" },
    { question: "What year did the American Revolution officially begin?", answers: { a: "1775", b: "1776", c: "1781", d: "1765" }, correct_answer: "a" },
    { question: "In what year was the Magna Carta signed?", answers: { a: "1215", b: "1415", c: "1305", d: "1500" }, correct_answer: "a" },
    { question: "What year did the Roman Empire fall?", answers: { a: "312", b: "476", c: "589", d: "410" }, correct_answer: "b" },
    { question: "When did the French Revolution start?", answers: { a: "1789", b: "1799", c: "1776", d: "1804" }, correct_answer: "a" },
    { question: "What year did Christopher Columbus first land in the Americas?", answers: { a: "1492", b: "1482", c: "1502", d: "1512" }, correct_answer: "a" },
    { question: "In what year was the Berlin Wall built?", answers: { a: "1948", b: "1961", c: "1971", d: "1989" }, correct_answer: "b" },
    { question: "When was the first manned moon landing?", answers: { a: "1969", b: "1972", c: "1965", d: "1959" }, correct_answer: "a" },
    { question: "What year did the Industrial Revolution begin in England?", answers: { a: "1750", b: "1820", c: "1700", d: "1850" }, correct_answer: "a" }
];

function displayQuestions() {
    let question = questions[currentQuestion]; 
    document.getElementById("question").textContent = question.question;
    const answersElement = document.getElementById("answers");
    answersElement.innerHTML = ""; 

    for (let key in question.answers) {
        let li = document.createElement("li");
        li.textContent = question.answers[key];
        li.onclick = () => checkAnswer(key);
        answersElement.appendChild(li);
    }
}

function checkAnswer(answer) {
    if (answer === questions[currentQuestion].correct_answer) {
        score++;
        document.getElementById("result").textContent = "Right!";
    } else {
        document.getElementById("result").textContent = "Wrong!";
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestions();
    } else {
        document.getElementById("quiz-container").innerHTML = `Quiz Completed! Your score is ${score}`; 
    }
}

displayQuestions();
