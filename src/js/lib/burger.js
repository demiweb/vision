import { IS_ACTIVE } from '../constants';

export default class Burger {
  init() {
    document.addEventListener('click', this.toggle.bind(this));
  }

  toggle(e) {
    this.btn = e.target.closest(`.${Burger.classNames.burger}`);
    if (!this.btn) return;

    e.preventDefault();
    e.stopPropagation();

    this.name = this.btn.getAttribute('data-menu-target');
    this.target = this.name
      ? document.querySelector(`.${Burger.classNames.menu}[data-menu="${this.name}"]`)
      : document.querySelector(`.${Burger.classNames.menu}`);

    this.btn.classList.toggle(IS_ACTIVE);
    this.target.classList.toggle(IS_ACTIVE);

    if (this.onToggle) {
      this.onToggle();
    }

    if (!this.target.classList.contains(IS_ACTIVE) && this.onClose) {
      this.onClose();
    }
  }

  close() {
    this.burgers = [...document.querySelectorAll(`.${Burger.classNames.burger}`)];
    this.targets = [...document.querySelectorAll(`.${Burger.classNames.menu}`)];

    if (this.burgers.length > 0 && this.targets.length > 0) {
      this.burgers.forEach((btn) => btn.classList.remove(IS_ACTIVE));
      this.targets.forEach((menu) => menu.classList.remove(IS_ACTIVE));


      if (this.onClose) {
        this.onClose();
      }
    }
  }
}

Burger.classNames = {
  burger: 'js-burger',
  menu: 'js-menu',
};
