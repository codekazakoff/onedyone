let bars = document.querySelector(".nav_bars ");
let navMenu = document.querySelector(".nav_menu");
console.log(navMenu);
bars.addEventListener("click", () => {
  navMenu.classList.toggle("click_nav_bars");
  bars.style.display = "none !important";
});
times.addEventListener("click", () => {
  navMenu.classList.toggle("click_nav_bars");
  bars.style.display = "block !important";
  console.log("object");
});
