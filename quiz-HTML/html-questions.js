const question = document.querySelector(`.html-question`);
const optionsp = document.querySelectorAll(`.html-questions-ul li p`);
const optionsli = document.querySelectorAll(`.html-questions-ul li`);
const queNo = document.querySelector(`.html-question-main h1 span`);
const popMsg = document.querySelector(".question-finish");
const popMsgBtn = document.querySelector(".finish-box button");
const score = document.querySelector(".finish-box section p span");
const data = [{
    queNo: 1,
    que: `Which of these tags is an empty tag`,
    ans: `D`,
    options: [`strong`, `p`, `em`, `br`]
}, {
    queNo: 2,
    que: `Which of these html tags creates the smallest heading`,
    ans: `C`,
    options: [`h1`, `h8`, `h6`, `h3`]
}, {
    queNo: 3,
    que: `Which HTML tag is used to define the header for a document or a section?`,
    ans: `B`,
    options: [`<h1>`, ` <header>`, ` <head>`, `<title>`]
}, {
    queNo: 4,
    que: `What's the <br> tag for`,
    ans: `A`,
    options: [`Its add a line break`, `It bolds the text`, `It gives emphasis to text`, `It make font size big of the text`]
}, {
    queNo: 5,
    que: `Which HTML tag is used for creating a hyperlink`,
    ans: `C`,
    options: [`<a>`, `<link>`, `<href>`, `<hyperlink>`]
}, {
    queNo: 6,
    que: `What does HTML stand for`,
    ans: `A`,
    options: [`HyperText Markup Language`, `HyperText Modeling Language`, `HyperText Markup Leveler`, `Hyper Transfer Markup Language`]
}, {
    queNo: 7,
    que: `Which HTML tag is used for creating an ordered list`,
    ans: `B`,
    options: [`<ul>`, `<ol>`, `<li>`, `<od>`]
}, {
    queNo: 8,
    que: `What does the "href" attribute in an anchor (<a>) tag define`,
    ans: `D`,
    options: [`Hyperlink Reference`, `Hyper Transfer File`, `Hyper Transfer Reference`, `Hypertext Reference`]
}, {
    queNo: 9,
    que: `Which HTML tag is used for creating a table?`,
    ans: `C`,
    options: [` <row>`, `<section>`, `<table>`, ` <div>`]
}, {
    queNo: 10,
    que: `In HTML, which attribute is used to define inline styles`,
    ans: `D`,
    options: [`class`, `inline`, `id`, `style`]
}];

let currentQueNo = 0;
let yourScore = 0;
function check(value) {
    if (value.dataset.option === data[currentQueNo].ans) {
        alert("correct answer");
        yourScore++;
    }
    else {
        alert("wrong answer");
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