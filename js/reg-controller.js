const registrationForm = document.getElementById("reg-form");

registrationForm.addEventListener("submit", register);

async function register(event) {
  event.preventDefault();
  const firstname = document.getElementById("firstname").value;
  const sex = document.getElementById("sex").value;
  const dob = document.getElementById("dob").value;
  const surname = document.getElementById("surname").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const mobile_phone = document.getElementById("mobile_phone").value;

  console.log(mobile_phone);

  const dobValue = dob; // dob is already the value from the URL parameter
  // Convert the date format from dd/mm/yyyy to yyyy-mm-dd
  const parts = dobValue.split('/');
  const formattedDob = `${parts[2]}-${parts[1]}-${parts[0]}`;


  const response = await fetch("http://45.35.12.118:9004/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ firstname, surname, email, sex, dob:formattedDob, mobile_phone, password })
  });

  const responseData = await response.json();

  if (response.ok) {
    localStorage.setItem("sex", sex);
    localStorage.setItem("dob", dob);
    localStorage.setItem("mobile_phone", mobile_phone);
    // Registration successful
    window.location.href = "login.html";
  } else {
    // Registration failed
    const errorMessage = document.getElementById("registration-error-message");
    errorMessage.textContent = responseData.error;
  }
}
