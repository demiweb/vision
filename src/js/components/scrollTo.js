export default function scrollToNext() {
  const scrollDown = 'js-scroll-down';

  document.addEventListener('click', (e) => {
    const btn = e.target.closest(`.${scrollDown}`);

    if (!btn) return;

    e.preventDefault();
    const target = btn.closest('section').nextElementSibling;
    if (!target) return;

    target.scrollIntoView({
      behavior: 'smooth',
    });
  });
}
