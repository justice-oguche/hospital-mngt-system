const loginForm = document.getElementById("login-form");
			const loggedInDiv = document.getElementById("logged-in");
			const usernameSpan = document.getElementById("emaill");
		
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
				const username = responseData.email;
				window.location.href = "patient-dashboard.html";
				usernameSpan.textContent = email;
			
			  } else {
				console.log(response.status); // log the HTTP status code
				console.log(responseData.error); // log the error message
			  }
			}