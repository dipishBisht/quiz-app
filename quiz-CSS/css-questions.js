const question = document.querySelector(`.css-question`);
const optionsp = document.querySelectorAll(`.css-questions-ul li p`);
const optionsli = document.querySelectorAll(`.css-questions-ul li`);
const queNo = document.querySelector(`.css-question-main h1 span`);
const popMsg = document.querySelector(".question-finish");
const popMsgBtn = document.querySelector(".finish-box button");
const score = document.querySelector(".finish-box section p span");
const data = [{
    queNo: 1,
    que: `What does CSS stand for`,
    ans: `B`,
    options: [`Counter Style Sheet`, `Cascading Style Sheet`, `Creative Style Sheet`, `Computer Style Sheet`]
}, {
    queNo: 2,
    que: `In CSS, what does the "Cascading" refer to`,
    ans: `B`,
    options: [`The flow of water in a cascade`, `The order of style rule application`, `The cascading effect of animations`, `The movement of elements on the page`]
}, {
    queNo: 3,
    que: `Which CSS property is used for changing the text color`,
    ans: `C`,
    options: [`text-color`, `font-color`, `color`, `text-style`]
}, {
    queNo: 4,
    que: `What is the purpose of the CSS property "margin"?`,
    ans: `B`,
    options: [`It sets the width of an element`, `It defines the space outside the border of an element`, ` It adjusts the spacing between characters in text`, ` It controls the opacity of an element`]
}, {
    queNo: 5,
    que: `Which CSS property is used for setting the background color of an element?`,
    ans: `A`,
    options: [` background-color`, `color`, `background`, `bg-color`]
}, {
    queNo: 6,
    que: `What does the CSS property "display: none;" do?`,
    ans: `D`,
    options: [`It makes the element visible`, `It changes the element's position`, `It adds extra spacing around the element`, `It hides the element`]
}, {
    queNo: 7,
    que: `What is the purpose of the CSS property "float"`,
    ans: `C`,
    options: [`It makes an element float to the top`, `It sets the vertical alignment of an element`, `It positions an element to the left or right of its container`, `It adjusts the font size of an element`]
}, {
    queNo: 8,
    que: `Which CSS selector selects all elements with a specific class`,
    ans: `B`,
    options: [`#class`, `.class`, `class()`, `class{}`]
}, {
    queNo: 9,
    que: `What is the default value of the CSS "position" property?`,
    ans: `D`,
    options: [` fixed`, `absolute`, ` relative`, `static`]
}, {
    queNo: 10,
    que: `In CSS, what does the acronym "CSS3" refer to?`,
    ans: `C`,
    options: [`Creative Style Sheet 3`, `Counter Style Sheet 3`, `Cascading Style Sheet Level 3`, `Cascading Style Script 3`]
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