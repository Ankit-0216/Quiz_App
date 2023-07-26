const loginForm = document.getElementById("loginForm");
const registrationForm = document.getElementById("registrationForm");
const loginButton = document.getElementById("loginButton");
const registerButton = document.getElementById("registerButton");
const message = document.getElementById("message");

loginButton.addEventListener("click", () => {
    loginForm.classList.remove("hidden");
    registrationForm.classList.add("hidden");
});

registerButton.addEventListener("click", (event) => {
    loginForm.classList.add("hidden");
    registrationForm.classList.remove("hidden");
});

registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const regUserEmail = document.getElementById("reg-email").value;
    const regPassword = document.getElementById("reg-password").value;

    const userData = JSON.parse(localStorage.getItem("user-data")) || [];

    localStorage.setItem(
        "user-data",
        JSON.stringify([
            ...userData,
            {email: regUserEmail, password: regPassword }
        ])
    );

    message.innerText = "Registration Successful. You can now login"
})

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const loginUserEmail = document.getElementById("email").value;
    const loginPassword = document.getElementById("password").value;

    const userData = JSON.parse(localStorage.getItem("user-data")) || [];

    let isValidUser = false;
    userData.forEach((item) => {
        if (item.email === loginUserEmail && item.password === loginPassword)
           isValidUser = true;
    });

    if (isValidUser) {
        localStorage.setItem("current-user-email", loginUserEmail);
        message.innerText = "Login Succeessful";
    } else {
        message.innerText = "Invalid username or password.";
    }
    loginForm.reset();
});