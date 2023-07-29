const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", login);

async function login(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const response = await fetch("http://45.35.12.118:9004/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });

  const responseData = await response.json();

  if (response.ok) {
    // Login successful
    // After a successful login
    localStorage.setItem("email", email);

    window.location.href = "patient-dashboard.html";
  } else {
    // Login failed
    const errorMessage = document.getElementById("login-error-message");
    errorMessage.textContent = responseData.error;
  }
}
