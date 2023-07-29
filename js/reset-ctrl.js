const resetPasswordForm = document.getElementById("reset-password-form");
const resetPasswordMessage = document.getElementById("reset-password-message");

resetPasswordForm.addEventListener("submit", resetPassword);

async function resetPassword(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;

  const response = await fetch("http://45.35.12.118:9004/change-password-request", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email })
  });

  const responseData = await response.json();

  if (response.ok) {
    // Password reset request was successful
    resetPasswordMessage.textContent = responseData.message;
    resetPasswordMessage.style.color = "green";
  } else {
    // Password reset request failed
    resetPasswordMessage.textContent = responseData.error;
    resetPasswordMessage.style.color = "red";
  }
}
