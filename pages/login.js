// login.js
$(document).ready(function () {
  const loginForm = document.getElementById("loginForm");

  function handleSubmit(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "admin@admin.com" && password === "123456") {
      alert("Login successful");
    } else {
      alert("Incorrect email or password");
    }

    loginForm.reset();
  }

  loginForm.addEventListener("submit", handleSubmit);
});
