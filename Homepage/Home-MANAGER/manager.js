function toggleNav() {
    const sideNav = document.getElementById('side-nav');
    const menu = document.querySelector('.menu');

    // Toggle side navigation sliding in and out
    if (sideNav.style.left === '0px') {
        sideNav.style.left = '-250px';
        menu.classList.remove('opened');
    } else {
        sideNav.style.left = '0';
        menu.classList.add('opened');
    }
}
