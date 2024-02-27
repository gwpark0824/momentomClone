const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const Hidden_Classname = "hidden";
const USERNAME_KEY = "username"

// submit event
function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(Hidden_Classname);
    paintGreeting(username);
}

// greeting value
function paintGreeting (username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(Hidden_Classname);
}
// const savedusername from local storage
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(Hidden_Classname);
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    // show the greeting
    paintGreeting(savedUsername)
}


