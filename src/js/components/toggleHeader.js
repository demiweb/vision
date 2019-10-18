import { throttle } from 'throttle-debounce';

const IS_SMALL = 'is-small';

class Header {
  constructor(header) {
    this.header = header;
    this.allowToggle = false;
  }

  toggle() {
    this.allowToggle = window.pageYOffset > 100;
    if (this.allowToggle) {
      this.header.classList.add(IS_SMALL);
    } else {
      this.header.classList.remove(IS_SMALL);
    }
  }

  _toggleHeader() {
    this.onScroll = throttle(66, this.toggle.bind(this));
    window.addEventListener('scroll', this.onScroll);
  }

  init() {
    this._toggleHeader();
  }
}

export default function toggleHeader() {
  const header = document.querySelector('.js-header');
  if (!header) return;

  const h = new Header(header);
  h.init();
}
