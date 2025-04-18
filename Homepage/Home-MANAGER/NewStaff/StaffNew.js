document.addEventListener("DOMContentLoaded", () => {
    // Handle hamburger menu toggle
    document.querySelector(".menu").addEventListener("click", () => {
        toggleNav();
    });
});

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

// If the form is submitted successfully
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    // Simulate form submission
    setTimeout(() => {
        alert("New staff account created successfully!");
        window.location.href = "index.html";  // Redirect to index page
    }, 1000);  // Simulate a delay for submission
});
