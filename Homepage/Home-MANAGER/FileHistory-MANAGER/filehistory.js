document.addEventListener("DOMContentLoaded", function () {
    const historyTable = document.getElementById("history-table");

    // Example Data (Replace with actual database data)
    const historyData = [
        { no: 1, fileName: "Report.pdf", date: "2024-04-02", activity: "Downloaded" },
        { no: 2, fileName: "Project.zip", date: "2024-04-01", activity: "Uploaded" }
    ];

    // Populate table with data
    historyData.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.no}</td>
            <td>${item.fileName}</td>
            <td>${item.date}</td>
            <td>${item.activity}</td>
        `;
        historyTable.appendChild(row);
    });

    // Home Button Click Event
    document.getElementById("home-btn").addEventListener("click", function () {
        window.location.href = "/Homepage/Home-MANAGER/manager.html"; // Change this path  if needed
    });

    document.addEventListener("DOMContentLoaded", () => {
        // Toggle side navigation visibility
        document.querySelector(".menu").addEventListener("click", () => {
            toggleNav(); // Toggle the side navigation
        });
    });
    
    // Toggle function for side navigation
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
    document.addEventListener("DOMContentLoaded", () => {
        // Toggle side navigation visibility
        document.querySelector(".menu").addEventListener("click", () => {
            toggleNav(); // Toggle the side navigation
        });
    });
    
    // Toggle function for side navigation
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
    
});
