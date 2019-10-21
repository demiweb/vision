import Popup from '../lib/popup';
import { IS_ACTIVE } from '../constants';

const SHOW_DURATION = 1000;

class MyPopup extends Popup {
  constructor() {
    super();
    this.wrap = null;
    this.overlay = null;
  }

  onOpen() {
    if (this.name === 'showreel') {
      this.openShowreel();
    }
  }

  createOverlay() {
    this.overlay = document.createElement('div');
    this.overlay.className = 'popup-overlay';
    setTimeout(() => {
      this.overlay.classList.add(IS_ACTIVE);
    }, 100);

    this.wrap.appendChild(this.overlay);
  }

  removeOverlay() {
    this.overlay.parentNode.removeChild(this.overlay);
  }

  openShowreel() {
    this.wrap = this.btn.parentNode;
    this.wrap.style.zIndex = '20';
    this.createOverlay();

    setTimeout(this.removeOverlay.bind(this), SHOW_DURATION);
  }

  init() {
    super.init();
  }
}

const myPopup = new MyPopup();

export default myPopup;
