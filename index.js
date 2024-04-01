//* quiz interface

const interBtn = document.querySelectorAll(".ui-btn");
const getStarted = document.querySelector(".get-started-interface");
const logFace = document.querySelector(".login-interface");
const loginBackBtn = document.querySelector(".back-btn-2");


//* get started interface
const startedBackBtn = document.querySelector(".back-btn");
const userName = document.querySelector(".create-account-form").firstElementChild;
const createBtn = document.querySelector(".create-account-form").lastElementChild;
const passwordBox = userName.nextElementSibling;

//* Login Interface

const logUsername = document.querySelector(".login-interface-form").firstElementChild;
const logPassword = logUsername.nextElementSibling;
const loginBtn = document.querySelector(".login-interface-form").lastElementChild;

//* Database

let allUsername = [];
let allPassword = [];



//# quiz interface code

interBtn.forEach((value) => {
    value.addEventListener("click", () => {
        value.id === "started-btn" ? startedComing() : loginComing();
    });
});

startedBackBtn.addEventListener("click", () => {
    // getStarted.style.left = "150%";
    window.location = "/quiz-main/main-interface.html";
});

loginBackBtn.addEventListener("click", () => {
    logFace.style.left = "150%";
});

function startedComing() {
    getStarted.style.left = "50%";
};

function loginComing() {
    logFace.style.left = "50%";
};

//# get strted interface code


// Save user to localStorage
let subUser = (localStorage.getItem("username")).split(',')
let subPass = (localStorage.getItem("password")).split(',')
allUsername = subUser.flat(Infinity);
allPassword = subPass.flat(Infinity);

// createBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (userName.value !== "" && passwordBox.value !== "") {
//         if (allUsername.includes(userName.value)) {
//             alert("Username Already Exists");
//         } else {
//             a = userName.value;
//             let b = passwordBox.value;  
//             allUsername.push(a);
//             allPassword.push(b);
//             ua=a;
//             // Save user to localStorage
//             localStorage.setItem("username", allUsername);
//             localStorage.setItem("password", allPassword);

//             alert('Account Created Sucessfully')
//             window.location = "/quiz-main/main-interface.html"
//             // Clear input fields
//             userName.value = "";
//             passwordBox.value = "";
//         }
//     } else
//         alert("Enter Your Details")
// });


// //* Login Interface Code

// loginBtn.addEventListener("click", (e) => {
//     e.preventDefault();

//     if (logUsername.value != "" && logPassword.value !== "") {
//         if (allUsername.includes(logUsername.value) && allPassword.includes(logPassword.value) && allUsername.indexOf(logUsername.value) === allPassword.indexOf(logPassword.value)) {
//             a = logUsername.value;
//             alert(`Welcome Back ${a}`);
//             localStorage.setItem("currentUser",a);
//             window.location = "/quiz-main/main-interface.html"
//         } else {
//             alert("Enter Correct Details");
//         }
//     } else
//         alert('Enter Username');
// });
document.addEventListener('contextmenu', event => event.preventDefault());
//     if (event.ctrlKey && event.shiftKey && event.key === 'J') {

//         event.preventDefault();
//     }
// document.addEventListener('keydown', function (event) {


//     if (event.ctrlKey && event.shiftKey && event.key === 'I') {
//         event.preventDefault();
//     }

//     if (event.metaKey && event.altKey && event.key === 'I') {
//         event.preventDefault();
//     }

//     if (event.key === 'F12') {
//         event.preventDefault();
//     }
// });



