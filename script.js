function setTheme() {
  const root = document.documentElement;
  const newTheme = root.className === 'dark' ? 'light' : 'dark';
  root.className = newTheme;
}

const lightModeBtn = document.querySelector('.light-btn');
lightModeBtn.addEventListener('click', setTheme);
