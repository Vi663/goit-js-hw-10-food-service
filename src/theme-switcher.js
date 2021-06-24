const body = document.querySelector('body');
const radiobox = document.getElementById("theme-switch-toggle");
// const radiobox = document.querySelector(".theme-switch__control");
const icon = document.querySelectorAll(".theme-switch__icon");
const switchBox = document.querySelector(".theme-switch");

switchBox.addEventListener("click", themeSwitcher);
function themeSwitcher(e) {
  if (e.target === radiobox) {
    body.classList.toggle("dark-theme");
  }
  //else if (e.currentTarget === switchBox) {
  //   body.classList.toggle("dark-theme");
  //   radiobox = checked;
  // };
};