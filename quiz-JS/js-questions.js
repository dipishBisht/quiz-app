const question = document.querySelector(`.js-question`);
const optionsp = document.querySelectorAll(`.js-questions-ul li p`);
const optionsli = document.querySelectorAll(`.js-questions-ul li`);
const queNo = document.querySelector(`.js-question-main h1 span`);
const popMsg = document.querySelector(".question-finish");
const popMsgBtn = document.querySelector(".finish-box button");
const score = document.querySelector(".finish-box section p span");
const data = [{
    queNo: 1,
    que: `What does JS stand for`,
    ans: `C`,
    options: [`Just Style`, `Java Syntax`, `JavaScript`, `Joint Standardt`]
}, {
    queNo: 2,
    que: `What is the purpose of the "addEventListener" method in JavaScript?`,
    ans: `A`,
    options: [`To handle any events`, `To handle mouse clicks`, `To create a new function`, `To add a new HTML element`]
}, {
    queNo: 3,
    que: `How can you comment out multiple lines in JavaScript?`,
    ans: `C`,
    options: [`<!-- This is a comment -->`, `'This is a comment'`, `/* This is a comment */`, `// This is a comment //`]
}, {
    queNo: 4,
    que: `What is the result of the expression 5 + '10' in JavaScript?`,
    ans: `D`,
    options: [`15`, `510`, `510.0`, `'510'`]
}, {
    queNo: 5,
    que: `Which keyword is used to declare a function in JavaScript?`,
    ans: `B`,
    options: [`func`, `function`, `def`, `declare`]
}, {
    queNo: 6,
    que: `What is the purpose of the "typeof" operator in JavaScript?`,
    ans: `D`,
    options: [`To concatenate strings`, `To multiply two numbers`, `To create a new variable`, `To check the type of a variable`]
}, {
    queNo: 7,
    que: `In JavaScript, what is the role of the "return" statement in a function?`,
    ans: `C`,
    options: [`To print a message to the console`, `To declare a new variable`, `To exit the function and return a value`, `To restart the function`]
}, {
    queNo: 8,
    que: `What is the purpose of the "JSON.parse()" method in JavaScript?`,
    ans: `B`,
    options: [`To stringify an object into a JSON format`, `To parse a JSON string and convert it to an object`, `To check if an object is of type JSON`, `To concatenate two JSON objects`]
}, {
    queNo: 9,
    que: `Which symbol is used for single-line comments in JavaScript?`,
    ans: `A`,
    options: [`//`, `/*`, `#`, `---`]
}, {
    queNo: 10,
    que: `Which of the following statements is used to terminate the execution of a loop in JavaScript?`,
    ans: `D`,
    options: [`end`, `terminate`, `stop`, `break`]
}];

let currentQueNo = 0;
let yourScore = 0;
function check(value) {
    if (value.dataset.option === data[currentQueNo].ans) {
        alert("correct answer")
        yourScore++;
    }
    else {
        alert("wrong answer")
    }
    currentQueNo++;

    if (currentQueNo < data.length)
        displayQuestion();
    else {
        score.innerText = yourScore;
        popMsg.style.scale = 1;
    }
}

function displayQuestion() {
    queNo.innerText = currentQueNo + 1;
    question.innerText = data[currentQueNo].que;
    optionsli.forEach((value, index) => {
        value.removeEventListener(`click`, clicked);
        value.addEventListener(`click`, clicked);
        optionsp[index].innerText = data[currentQueNo].options[index];
    });
}

function clicked() {
    check(this);
}

displayQuestion();

popMsgBtn.addEventListener("click", () => {
    window.location = `/quiz-main/main-interface.html`
})