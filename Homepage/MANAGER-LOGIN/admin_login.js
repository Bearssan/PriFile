document.getElementById('adminLoginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents the default form submission

  const email = document.getElementById('admin-email').value;
  const password = document.getElementById('admin-password').value;

  // Send a POST request to the server to verify login credentials
  fetch('/tac_admin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }), // Send email and password as JSON
  })
  .then(response => response.json()) // Parse the JSON response from the server
  .then(data => {
    if (data.status === 'success') {
      // If login is successful, redirect to the 'admin_tac.html' page
      console.log('Login successful, redirecting...');
      window.location.href = '/frontend/Homepage/MANAGER-LOGIN/TAC_ADMIN/admin_tac.html'; 
    } else {
      alert('Login failed: ' + data.message); // Show an error message if login fails
    }
  })
  .catch(error => {
    console.error('Error:', error); // Log any errors to the console
    alert('Something went wrong!'); // Display an error message if something goes wrong
  });
});
