
const radiobox = document.querySelector("theme-switch__control");
const icon = document.querySelectorAll("theme-switch__icon");
const toolbar = document.querySelector("theme-switch__marker");
body.classList.add("light-theme");
radiobox.addEventListener("click", themeSwitcher);
function themeSwitcher (e) {
  icon.addEventListener("click", changeTheme);
  toolbar.addEventListener("click", changeTheme);
  body.classList.toggle("light-theme");
}

function changeTheme (e) {
  body.classList.toggle("dark-theme");
  icon.removeEventListener("click", changeTheme);
  toolbar.removeEventListener("click", changeTheme);
}