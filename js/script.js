const form = document.getElementById('register');

form.addEventListener('submit', event => {
  event.preventDefault(); // prevent form submission

  // get form data and put it in an object
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  // make the POST request
  fetch('http://45.35.12.118:9004/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      // handle the response data
      console.log(data);
    })
    .catch(error => {
      // handle errors
      console.error(error);
    });
});
