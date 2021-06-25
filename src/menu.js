import cards from './menu.json';
import menuItemTemplate from './partials/templates/menuItem.hbs';
import './sass/main.scss';
const list = document.querySelector('.js-menu');
const htmlString = menuItemTemplate(cards);
list.innerHTML = htmlString;
