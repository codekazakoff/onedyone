let bars = document.querySelector(".nav_bars ");
let navMenu = document.querySelector(".nav_menu");
let section = document.querySelector("#section");
bars.addEventListener("click", () => {
  navMenu.classList.toggle("click_nav_bars");
  section.classList.toggle("section_mt_5");
  bars.style.display = "none !important";
});
