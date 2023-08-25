const dropdownContainer = document.querySelector(".dropdown-container");
const menuTitle = document.querySelector(".menu-title");
const dropdown = document.querySelector(".dropdown");

menuTitle.addEventListener("click", e => {
  if (e.target === e.currentTarget) {
    dropdown.classList.toggle("visible");
  }
});

window.addEventListener("click", e => {
  if (!dropdownContainer.contains(e.target)) {
    dropdown.classList.remove("visible");
  }
});
