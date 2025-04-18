document.addEventListener("DOMContentLoaded", () => {
    fetchStaffList(); // Load staff data

    // Navigation menu toggle
    document.querySelector(".menu").addEventListener("click", () => {
        toggleNav(); // Toggle the side navigation
    });

    // Redirect to Add Staff Page
    document.getElementById("add-btn").addEventListener("click", () => {
        window.location.href = "/Homepage/Home-MANAGER/NewStaff-MANAGER/newstaff.html";
    });

    // Redirect to Edit Staff Page
    document.getElementById("edit-btn").addEventListener("click", () => {
        window.location.href = "";
    });

    // Show delete confirmation popup
    document.getElementById("delete-btn").addEventListener("click", () => {
        document.getElementById("delete-popup").style.display = "block";
    });

    // Hide delete confirmation popup
    document.getElementById("cancel-delete").addEventListener("click", () => {
        document.getElementById("delete-popup").style.display = "none";
    });

    // Confirm deletion of selected staff
    document.getElementById("confirm-delete").addEventListener("click", deleteSelectedStaff);
});

// Fetch the staff list from the database and populate the table
function fetchStaffList() {
    fetch("http://localhost/api/getStaff.php")
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById("staff-table");
            tableBody.innerHTML = ""; // Clear table before inserting new data

            data.forEach((staff, index) => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${staff.name}</td>
                    <td>${staff.role}</td>
                    <td><input type="checkbox" class="staff-checkbox" data-id="${staff.id}"></td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error("Error fetching staff list:", error));
}

// Delete selected staff members
function deleteSelectedStaff() {
    const selected = document.querySelectorAll(".staff-checkbox:checked");
    const idsToDelete = Array.from(selected).map(cb => cb.dataset.id);

    if (idsToDelete.length === 0) {
        alert("Please select a staff to delete.");
        return;
    }

    fetch("http://localhost/api/deleteStaff.php", {
        method: "POST",
        body: JSON.stringify({ ids: idsToDelete }),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.text())
    .then(result => {
        alert("Staff deleted successfully!");
        document.getElementById("delete-popup").style.display = "none"; // Hide popup
        fetchStaffList(); // Refresh table
    })
    .catch(error => console.error("Error deleting staff:", error));
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
