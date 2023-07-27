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

registrationForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const regUserName = document.getElementById("reg-name").value;
  const regUserEmail = document.getElementById("reg-email").value;
  const regPassword = document.getElementById("reg-password").value;

  const userData = JSON.parse(localStorage.getItem("user-data")) || [];

  if (regUserEmail && regPassword) {
    localStorage.setItem(
      "user-data",
      JSON.stringify([
        ...userData,
        { name: regUserName, email: regUserEmail, password: regPassword },
      ])
    );
    message.innerText = "Registration Successful. You can now login";
  } else {
    message.innerText = "Email or Password cannot be empty";
  }

  registrationForm.reset();
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const loginUserEmail = document.getElementById("email").value;
  const loginPassword = document.getElementById("password").value;

  // Retrieve user data from local storage
  const userData = JSON.parse(localStorage.getItem("user-data")) || [];

  // higher-order array methods
  let isValidUser = false;
  let currentUserData;
  userData.forEach((item) => {
    if (item.email === loginUserEmail && item.password === loginPassword) {
      isValidUser = true;
      currentUserData = item;
    }
  });

  if (isValidUser) {
    localStorage.setItem("current-user-name", currentUserData.name);
    localStorage.setItem("current-user-email", currentUserData.email);
    message.innerText = "Login successful.";
  } else {
    message.innerText = "Invalid username or password.";
  }
  loginForm.reset();
});
