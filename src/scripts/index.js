import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

import './components/app-bar';
import './components/footer-restaurant';
import App from './views/app';
import swRegister from './utils/sw-register';
// import data from '../DATA.json';

const hamburgerIcon = document.querySelector('.hamburger-icon');
const menuBar = document.querySelector('.menu-bar');
const closeIcon = document.querySelector('.close-icon');

const show = () => {
  menuBar.style.display = 'flex';
  menuBar.style.top = '0';
};

const close = () => {
  menuBar.style.top = '-100%';
};

hamburgerIcon.addEventListener('click', show);
closeIcon.addEventListener('click', close);

const app = new App({
  button: document.querySelector('.hamburger-icon'),
  drawer: document.querySelector('.menu-bar'),
  content: document.querySelector('.close-icon'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
