const registrationForm = document.getElementById("enrollee");

registrationForm.addEventListener("submit", register);

async function register(event) {
  event.preventDefault();
  const firstname = document.getElementById("firstnameDisplay1").value;
  const sex = document.getElementById("genderDisplay1").value;
  const dob = document.getElementById("dobDisplay1").value;
  const title = document.getElementById("title1Display").value;
  const middlename = document.getElementById("middlenameDisplay1").value;
  const lastname = document.getElementById("lastnameDisplay1").value;
  const residentialaddress = document.getElementById("residentialaddressDisplay1").value;
  const permanentaddress = document.getElementById("permanentaddressDisplay1").value;
  const weight = document.getElementById("weightDisplay1").value;
  const height = document.getElementById("heightDisplay1").value;
  const eyecolor = document.getElementById("eyecolorDisplay1").value;
  const haircolor = document.getElementById("haircolorDisplay1").value;
  const phone = document.getElementById("phoneDisplay1").value;
  const physicalcondition = document.getElementById("physicalconditionDisplay1").value;
  const maidename = document.getElementById("maidenameDisplay1").value;
  const mothersmaidename = document.getElementById("mothersmaidenameDisplay1").value;
  const fathersname = document.getElementById("fathersnameDisplay1").value;
  const terminationdate = document.getElementById("terminationdateDisplay1").value;
  const employer = document.getElementById("employerDisplay1").value;
  const department = document.getElementById("departmentDisplay1").value;
  const designation = document.getElementById("designationDisplay1").value;
  const postinglga = document.getElementById("postinglgaDisplay1").value;
  const gradelevel = document.getElementById("gradelevelDisplay1").value;
  const step = document.getElementById("stepDisplay1").value;
  const firstappointmentdate = document.getElementById("firstappointmentdateDisplay1").value;
  const healthcareprovider = document.getElementById("healthcareproviderDisplay1").value;
  const surname = document.getElementById("surname").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("").value;
  const mobile_phone = document.getElementById("mobile_phone").value;


  const response = await fetch("http://45.35.12.118:9004/new-enrollee", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ firstname, lastname, middlename, sex, dob, title, step })
  });

  const responseData = await response.json();

  if (response.ok) {
    // Registration successful
    window.location.href = "login.html";
  } else {
    // Registration failed
    const errorMessage = document.getElementById("registration-error-message");
    errorMessage.textContent = responseData.error;
  }
}

