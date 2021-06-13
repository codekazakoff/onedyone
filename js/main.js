let bars = document.querySelector(".nav_bars ");
let navMenu = document.querySelector(".nav_menu");
bars.addEventListener("click", () => {
  navMenu.classList.toggle("click_nav_bars");
  bars.style.display = "none !important";
});
