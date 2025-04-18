document.addEventListener("DOMContentLoaded", () => {
    const toggles = document.querySelectorAll(".toggle");

    toggles.forEach(button => {
        button.addEventListener("click", function () {
            const type = this.dataset.type;
            document.querySelectorAll(`.toggle[data-type="${type}"]`).forEach(btn => {
                btn.classList.remove("active");
            });
            this.classList.add("active");
        });
    });

    document.getElementById("staff-form").addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const job = document.getElementById("job").value;
        const email = document.getElementById("email").value;

        const viewPermission = document.querySelector('.toggle[data-type="view"].active')?.innerText || "NO";
        const downloadPermission = document.querySelector('.toggle[data-type="download"].active')?.innerText || "NO";

        const staffData = {
            name: name,
            job: job,
            email: email,
            permissions: {
                view: viewPermission,
                download: downloadPermission
            }
        };

        console.log("Staff Data Submitted:", staffData);

        alert("Staff added successfully!");

        // Here you can send the data to your backend using fetch API
        // fetch('/api/add-staff', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(staffData)
        // }).then(response => response.json())
        // .then(data => console.log(data))
        // .catch(error => console.error("Error:", error));
    });

     // Home Button Click Event
     document.getElementById("submit-btn").addEventListener("click", function () {
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
    
});

