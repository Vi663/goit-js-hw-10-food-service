import { setTheme, getTheme } from './utils';

const body = document.querySelector('body');
const radiobox = document.getElementById("theme-switch-toggle");

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

let initialTheme = body.classList.add(`${Theme.LIGHT}`);
let currentTheme = '';
radiobox.addEventListener("change", onClassChange);
const savedTheme = getTheme();

function onClassChange() {
  body.classList.toggle(`${Theme.LIGHT}`);
  body.classList.toggle(`${Theme.DARK}`);
  currentTheme = body.className;
  setTheme(currentTheme);
};

if (savedTheme) {
  initialTheme = body.classList.replace(`${Theme.LIGHT}`, `${savedTheme}`);
  if (savedTheme == `${Theme.DARK}`) {
    radiobox.checked = true;
  }
};