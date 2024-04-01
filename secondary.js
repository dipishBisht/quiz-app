const putUsername=document.querySelector(".side-panel h2");

const tempName=localStorage.getItem("currentUser");
    putUsername.innerText=tempName;