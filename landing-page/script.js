const menu = document.querySelector('#menu-icon');
const navlist = document.querySelector('.navlist');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('open');
};

const sr = ScrollReveal({
  distance: '65px',
  duration: 2000,
  delay: 450,
  reset: true,
});

sr.reveal('.hero-text', { delay: 200, origin: 'top' });
sr.reveal('.hero-img', { delay: 450, origin: 'right' });
sr.reveal('.icons', { delay: 250, origin: 'left' });
sr.reveal('.scroll-down', { delay: 500, origin: 'top' });
