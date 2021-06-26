const bars = document.querySelector(".header__bars");
const times = document.querySelector(".header__times");

const content = document.querySelector(".header__content");

bars.addEventListener("click", () => {
  content.classList.add("active");
  bars.style.display = "none";
  times.style.display = "block";
});
times.addEventListener("click", () => {
  content.classList.remove("active");
  bars.style.display = "block";
  times.style.display = "none";
});
