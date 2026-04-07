const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  const button = item.querySelector('.faq-question');

  button.addEventListener('click', () => {
    const isOpen = item.classList.contains('is-open');
    faqItems.forEach((faq) => faq.classList.remove('is-open'));
    if (!isOpen) item.classList.add('is-open');
  });
});

const mainImage = document.getElementById('galleryMainImage');
const thumbs = document.querySelectorAll('.thumb');

thumbs.forEach((thumb) => {
  thumb.addEventListener('click', () => {
    thumbs.forEach((item) => item.classList.remove('is-active'));
    thumb.classList.add('is-active');

    const image = thumb.dataset.image;
    const alt = thumb.dataset.alt || 'Grafika produktu';

    if (mainImage) {
      mainImage.src = image;
      mainImage.alt = alt;
    }
  });
});

const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.site-nav a[href^="#"]');

const setActiveLink = () => {
  let currentId = '';

  sections.forEach((section) => {
    const top = window.scrollY;
    const offset = section.offsetTop - 140;
    const height = section.offsetHeight;
    if (top >= offset && top < offset + height) currentId = section.getAttribute('id');
  });

  navLinks.forEach((link) => {
    link.classList.toggle('is-active', link.getAttribute('href') === `#${currentId}`);
  });
};

window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);
