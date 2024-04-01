

//*******************************# Main App Variables

const quizBtn = document.querySelectorAll(`.letsPlay-ul li button`);
const otherProjects = document.querySelectorAll(`.others-game-ul li button`)
const closePanel = document.querySelector(".side-panel-top button");
const sidePanel = document.querySelector(".side-panel");
const openPanel = document.querySelector(".side-btn");
const lightCompo = document.querySelectorAll(".light-theme-component")
const checkbox = document.getElementById("checkbox")
const signOut=document.querySelector(".side-panel a");

quizBtn[0].addEventListener(`click`, () => {
    window.location = `/quiz-HTML/html-questions.html`;
});

quizBtn[1].addEventListener(`click`, () => {
    window.location = `/quiz-CSS/css-questions.html`;
});

quizBtn[2].addEventListener(`click`, () => {
    window.location = `/quiz-JS/js-questions.html`;
});

otherProjects[0].addEventListener(`click`, () => {
    window.location = `/calculator.html`;
});

otherProjects[1].addEventListener(`click`, () => {
    window.location = `/RockPaperScissors.html`;
});

otherProjects[2].addEventListener(`click`, () => {
    window.location = `/todo-list.html`;
});

let theme = "Dark";
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    if (theme === "Dark") {
        lightCompo[0].style.backgroundColor = "#eee";
        document.body.style.backgroundColor = "#eee"
        for (let x = 1; x < lightCompo.length; x++) {
            lightCompo[x].style.color = "#333";
        }
        theme = "Light";
    }
    else {
        lightCompo[0].style.backgroundColor = "#18191e";
        document.body.style.backgroundColor = "#18191e";
        for (let x = 1; x < lightCompo.length; x++) {
            lightCompo[x].style.color = "#fff";
        }
        theme = "Dark";
    }
});

openPanel.addEventListener("click", () => {
    sidePanel.style.left = "0%";
    document.body.style.overflowY = "hidden";
    sidePanel.style.filter = "none";
});

closePanel.addEventListener("click", () => {
    sidePanel.style.left = "-180%";
    document.body.style.overflowY = "visible";

});

signOut.addEventListener("click",()=>{
    alert('Signed Out Succesfully')
    window.location="/index.html";
})