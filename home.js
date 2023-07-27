function showName() {
  debugger;
  const userData = localStorage.getItem("current-user-name");
  const userNameElement = document.getElementById("userName");
  userNameElement.innerText = userData;
}
showName();

function timer() {}
