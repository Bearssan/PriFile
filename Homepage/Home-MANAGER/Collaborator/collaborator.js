document.addEventListener("DOMContentLoaded", () => {
    fetchCollaboratorList(); // Load collaborator data

    // Redirect to Add Collaborator Page
    document.getElementById("add-btn").addEventListener("click", () => {
        window.location.href = "/Homepage/Home-MANAGER/NewCollaborator-MANAGER/newcollaborator.html";
    });

    // Redirect to Upload Collaborator Page
    document.getElementById("upload-btn").addEventListener("click", () => {
        window.location.href = "/Homepage/Home-MANAGER/UploadCollaborator/uploadcollaborator.html";
    });

    // Show delete confirmation popup
    document.getElementById("delete-btn").addEventListener("click", () => {
        document.getElementById("delete-popup").style.display = "block";
    });

    // Hide delete confirmation popup
    document.getElementById("cancel-delete").addEventListener("click", () => {
        document.getElementById("delete-popup").style.display = "none";
    });

    // Confirm deletion of selected collaborators
    document.getElementById("confirm-delete").addEventListener("click", deleteSelectedCollaborators);
});

// Fetch collaborator list and display in table
function fetchCollaboratorList() {
    fetch("http://localhost/api/getCollaborators.php")
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById("collaborator-table");
            tableBody.innerHTML = ""; // Clear table before inserting new data

            data.forEach((collaborator, index) => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${collaborator.name}</td>
                    <td>${collaborator.role}</td>
                    <td><input type="checkbox" class="collaborator-checkbox" data-id="${collaborator.id}"></td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error("Error fetching collaborator list:", error));
}

// Delete selected collaborators
function deleteSelectedCollaborators() {
    const selected = document.querySelectorAll(".collaborator-checkbox:checked");
    const idsToDelete = Array.from(selected).map(cb => cb.dataset.id);

    if (idsToDelete.length === 0) {
        alert("Please select a collaborator to delete.");
        return;
    }

    fetch("http://localhost/api/deleteCollaborator.php", {
        method: "POST",
        body: JSON.stringify({ ids: idsToDelete }),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.text())
    .then(result => {
        alert("Collaborator deleted successfully!");
        document.getElementById("delete-popup").style.display = "none"; // Hide popup
        fetchCollaboratorList(); // Refresh table
    })
    .catch(error => console.error("Error deleting collaborator:", error));
}

// Function to toggle the side navigation
function toggleNav() {
    const sideNav = document.getElementById("side-nav");
    const menu = document.querySelector(".menu");

    if (sideNav.style.left === "0px") {
        sideNav.style.left = "-250px";
        menu.classList.remove("opened");
    } else {
        sideNav.style.left = "0";
        menu.classList.add("opened");
    }
}
