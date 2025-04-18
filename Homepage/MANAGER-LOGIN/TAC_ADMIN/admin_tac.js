async function submitAdminTAC() {
  const tac = document.getElementById("admin-tac").value.trim();
  if (!tac) return alert("Please enter the TAC");

  try {
    const response = await fetch("http://localhost:3000/verify-tac-admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tac }),
    });

    const data = await response.json();
    if (data.success) {
      alert("Admin TAC Verified");
      window.location.href = "admin-home.html"; // Redirect after successful verification
    } else {
      alert("Invalid TAC for Admin");
    }
  } catch (err) {
    alert("Error verifying TAC.");
    console.error(err);
  }
}
