const toggleButton = document.querySelector("#hamburger-icon");
const closeButton = document.getElementById("close-icon");
const navbarList = document.querySelector("#nav-list");

toggleButton.addEventListener("click", () => {
    console.log("click");
    
  navbarList.classList.add("navigation__items--active");

  if (navbarList.classList.contains("navigation__items--active")) {
    toggleButton.style.display = "none";
    closeButton.style.display = "block";
  }
});

closeButton.addEventListener("click", () => {
  navbarList.classList.remove("navigation__items--active");
  toggleButton.style.display = "block";
  closeButton.style.display = "none";
});

