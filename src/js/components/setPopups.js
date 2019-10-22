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

  onClose() {
    if (this.name === 'showreel') {
      this.closeShowreel();
    }
  }

  createOverlay() {
    this.overlay = document.createElement('div');
    this.overlay.className = 'popup-overlay';

    const img = this.btn.querySelector('img');
    const { top, left } = img.getBoundingClientRect();
    this.overlay.style.width = `${img.clientWidth}px`;
    this.overlay.style.height = `${img.clientHeight}px`;
    this.overlay.style.left = `${left}px`;
    this.overlay.style.top = `${top}px`;
    setTimeout(() => {
      this.overlay.style.transform = 'scale(30)';
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

  closeShowreel() {
    this.wrap.style.zIndex = '';
  }

  init() {
    super.init();
  }
}

const popup = new MyPopup();

export default popup;
