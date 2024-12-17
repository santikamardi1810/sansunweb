// Toggle class Active
const navbarNav = document.querySelector(".navbar-nav");
// ketika othermenu di klik
document.querySelector("#othermenu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan nav
const othermenu = document.querySelector("#othermenu");

document.addEventListener("click", function (e) {
  if (!othermenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
