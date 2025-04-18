document.getElementById("staffLoginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("collaborator-email").value;
  
    if (email) {
      alert(`TAC has been sent to ${email}`);
      window.location.href = "staff-tac-verification.html";
    }
  });
  