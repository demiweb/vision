import anime from 'animejs';

export default function animateEntrance() {
  const {
    header,
    logo,
    heroBlock,
    heroPhone,
  } = {
    logo: document.querySelector('.js-logo'),
    header: document.querySelector('.js-header'),
    heroBlock: document.querySelector('.hero__block'),
    heroPhone: document.querySelector('.hero__phone'),
  };

  const tl = anime.timeline({ easing: 'easeOutQuad' });

  if (heroBlock) {
    tl
      .add({
        targets: heroBlock,
        opacity: [0, 1],
        duration: 750,
      });
  }

  tl
    .add({
      targets: logo,
      opacity: [0, 1],
      translateX: ['-100%', '0%'],
      duration: 750,
    });
  if (heroPhone) {
    tl
      .add({
        targets: heroPhone,
        opacity: [0, 1],
        translateX: ['100%', '0%'],
        duration: 750,
      }, '-=1000');
  }
  tl
    .add({
      targets: header,
      translateX: ['100%', '0%'],
      duration: 750,
    });
}
