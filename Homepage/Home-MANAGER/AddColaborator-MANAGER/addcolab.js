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

// Toggle permission between YES/NO
function togglePermission(permission) {
    const yesButton = document.querySelector(`.toggle.${permission}.yes`);
    const noButton = document.querySelector(`.toggle.${permission}.no`);

    if (yesButton.classList.contains('active')) {
        yesButton.classList.remove('active');
        noButton.classList.add('active');
    } else {
        yesButton.classList.add('active');
        noButton.classList.remove('active');
    }
}
