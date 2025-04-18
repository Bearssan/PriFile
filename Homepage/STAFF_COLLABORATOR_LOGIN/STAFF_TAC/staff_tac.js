async function submitStaffTAC() {
    const tac = document.getElementById("staff-tac").value.trim();
    if (!tac) return alert("Please enter the TAC");
  
    try {
      const response = await fetch("http://localhost:3000/verify-tac-staff", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tac }),
      });
  
      const data = await response.json();
      if (data.success) {
        alert("TAC Verified");
        window.location.href = "index.html";
      } else {
        alert("Invalid TAC for Staff");
      }
    } catch (err) {
      alert("Error verifying TAC.");
      console.error(err);
    }
  }
  