console.log("loaded instruction...");

const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

// Toggle menu og overlay
burger.addEventListener("click", () => {
  menu.classList.toggle("show");
  overlay.classList.toggle("show");
});

// Klik på overlay lukker menu
overlay.addEventListener("click", () => {
  menu.classList.remove("show");
  overlay.classList.remove("show");
});
