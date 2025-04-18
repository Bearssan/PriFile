document.addEventListener("DOMContentLoaded", () => {
    // Add event listeners to the buttons
    document.getElementById("manager-btn").addEventListener("click", () => {
        window.location.href = "frontend/Homepage/Home-MANAGER/NEW-MANAGER/new_manager.html";  // Redirect to New Manager Page
    });

    document.getElementById("staff-btn").addEventListener("click", () => {
        window.location.href = "frontend/Homepage/Home-MANAGER/NewStaff/StaffNew.html";  // Redirect to New Staff Page
    });

    document.getElementById("collaborator-btn").addEventListener("click", () => {
        window.location.href = "frontend/Homepage/Home-MANAGER/NewCollab/newCollab.html";  // Redirect to New Collaborator Page
    });
    
});
