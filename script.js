const body = document.querySelector('body');
// nav
const nav = document.querySelector('nav');
const lightModeBtn = document.querySelector('.light-btn');
const navLinks = nav.querySelectorAll('a');
// header
const header = document.querySelector('header');
const headerH1 = header.querySelector('h1');
// main
const main = document.querySelector('main');
const articles = main.querySelectorAll('article');
const articlesLinks = main.querySelectorAll('a');
const articlesH2 = main.querySelector('h2');

// light/dark mode implementation
lightModeBtn.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  nav.classList.toggle('light-nav-border');
  articlesH2.classList.toggle('light-articles-h2');
  headerH1.classList.toggle('light-header-h1');
  navLinks.forEach(item => {
    item.classList.toggle('light-nav-links');
  });
  articlesLinks.forEach(item => {
    item.classList.toggle('light-articles-a');
  });
  articles.forEach(item => {
    item.classList.toggle('light-articles');
  });
});

lightModeBtn.addEventListener('mousedown', () => {
  lightModeBtn.classList.add('light-btn');
});
