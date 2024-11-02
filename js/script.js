function toggleMenu() {
  document.getElementById("hamburger-button").classList.toggle("hidden");

  document.getElementById("close-button").classList.toggle("hidden");

  document.getElementById("mobile-nav-links-container").classList.toggle("hidden");
}

function toggleTheme() {
  // Check the current theme and toggle between 'light' and 'dark'
  const currentTheme = document.body.getAttribute("data-theme");

  if (currentTheme === "light") {
    document.body.setAttribute("data-theme", "dark");
  } else {
    document.body.setAttribute("data-theme", "light");
  }

  // Toggle logo visibility for light and dark themes
  document.querySelectorAll(".element-for-light-theme").forEach(element => {
    element.classList.toggle("hidden");
  });

  document.querySelectorAll(".element-for-dark-theme").forEach(element => {
    element.classList.toggle("hidden");
  });
  
}
