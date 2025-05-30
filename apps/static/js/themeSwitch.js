const moonIcon = document.getElementById("mode-switcher-moon");
const sunIcon = document.getElementById("mode-switcher-sun");

let darkmode = localStorage.getItem("darkmode");

function enableDarkmode() {
    console.log("click");
    
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
  moonIcon.classList.remove("active");
  sunIcon.classList.add("active");
}

function disableDarkmode() {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", "inactive");
  sunIcon.classList.remove("active");
  moonIcon.classList.add("active");
}


if (darkmode === "active") {
  enableDarkmode();
} else {
  disableDarkmode();
}


moonIcon.addEventListener("click", enableDarkmode);
sunIcon.addEventListener("click", disableDarkmode);
