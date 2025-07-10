// index.js or at bottom of HTML
var sidenav = document.querySelector(".side-navbar");

function shownavbar() {
    sidenav.classList.add("active");
}

function closenavbar() {
    sidenav.classList.remove("active");
}
