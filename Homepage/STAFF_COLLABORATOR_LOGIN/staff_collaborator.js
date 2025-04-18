document.getElementById("staffLoginForm").addEventListener("submit", function (e) {
  e.preventDefault();  // Prevents form submission and page reload

  const email = document.getElementById("staff-email").value;
  const password = document.getElementById("staff-password").value;  // This line captures the password input, if you need it for further verification or processing.

  // Basic email validation using regular expression
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !emailPattern.test(email)) {
    // If the email is invalid, alert the user and stop further processing
    alert("Please enter a valid email address.");
    return;
  }

  if (email && password) { // Check if both email and password are provided
    alert(`TAC has been sent to ${email}`);  // Simulated TAC sent alert
    window.location.href = "frontend/Homepage/STAFF_COLLABORATOR_LOGIN/STAFF_TAC/staff_tac.html";  // Redirect to TAC verification page
  } else {
    alert("Please enter both email and password.");
  }
});
