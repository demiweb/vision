import { IS_ACTIVE, NO_SCROLL, IS_HIDDEN } from '../constants';

import Burger from '../lib/burger';

const {
  MENU,
  BURGER,
  CLOSE,
  HAS_CLOSE_ICON,
  IS_TOP,
  HAS_OPEN_MENU,
} = {
  MENU: 'js-menu',
  BURGER: 'js-burger',
  CLOSE: 'js-menu-close',
  HAS_CLOSE_ICON: 'has-close-icon',
  IS_TOP: 'is-top',
  HAS_OPEN_MENU: 'has-open-menu',
};

class Menu extends Burger {
  constructor() {
    super();
    this.menus = [...document.querySelectorAll(`.${MENU}`)];
    this.menuBtn = document.querySelector(`.${BURGER}[data-menu-target="main_menu"]`);
    this.formBtn = document.querySelector(`.${BURGER}[data-menu-target="form_menu"]`);
    this.logo = document.querySelector('.js-logo');
  }

  get openedMenus() {
    return this.menus.filter((menu) => menu.classList.contains(IS_ACTIVE));
  }

  toggleLogoAndBodyState() {
    document.body.classList.toggle(NO_SCROLL);
    document.body.classList.toggle(HAS_OPEN_MENU);
    this.logo.classList.toggle(IS_TOP);
  }

  addLogoAndBodyOpenMenuState() {
    document.body.classList.add(NO_SCROLL);
    document.body.classList.add(HAS_OPEN_MENU);
    this.logo.classList.add(IS_TOP);
  }

  removeLogoAndBodyOpenMenuState() {
    document.body.classList.remove(NO_SCROLL);
    document.body.classList.remove(HAS_OPEN_MENU);
    this.logo.classList.remove(IS_TOP);
  }


  onToggle() {
    if (this.name === 'form_menu') {
      this.addLogoAndBodyOpenMenuState();

      if (this.openedMenus.length > 0) {
        this.openedMenus.forEach((menu) => {
          if (menu === this.target) return;
          menu.classList.remove(IS_ACTIVE);
          this.menuBtn.classList.remove(IS_ACTIVE);
        });
      }

      this.menuBtn.classList.add(CLOSE);
      this.menuBtn.classList.add(HAS_CLOSE_ICON);
    }

    if (this.name === 'main_menu') {
      this.toggleLogoAndBodyState();
    }
  }

  onClose() {
    this.removeLogoAndBodyOpenMenuState();
    this.menuBtn.classList.remove(CLOSE);
    this.menuBtn.classList.remove(HAS_CLOSE_ICON);
  }

  closeOnBtnClick(e) {
    const btn = e.target.closest(`.${CLOSE}`);
    if (!btn) return;

    e.preventDefault();
    this.close();
  }

  _closeOnBtnClick() {
    document.addEventListener('click', this.closeOnBtnClick.bind(this));
  }

  init() {
    super.init();
    this._closeOnBtnClick();
  }
}


const menu = new Menu();

export default menu;
