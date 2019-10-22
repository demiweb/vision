import anime from 'animejs';

class Stagger {
  constructor(wrap) {
    this.wrap = wrap;
    this.els = wrap.querySelectorAll('.js-stagger-el');
    this.tl = anime.timeline({ easing: 'easeOutQuad' });
  }

  animate(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.tl
          .add({
            targets: this.els,
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 1000,
            delay: anime.stagger(200),
          });

        observer.unobserve(entry.target);
      }
    });
  }

  _addObserver() {
    this.observer = new IntersectionObserver(this.animate.bind(this));
    this.observer.observe(this.wrap);
  }

  init() {
    this._addObserver();
  }
}

export default function animateStagger() {
  const staggerWraps = [...document.querySelectorAll('.js-stagger-wrap')];
  if (!staggerWraps.length) return;

  staggerWraps.forEach((wrap) => {
    const stagger = new Stagger(wrap);
    stagger.init();
  });
}
