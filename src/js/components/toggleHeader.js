import { throttle, debounce } from 'throttle-debounce';

const IS_SMALL = 'is-small';

class Header {
  constructor(header) {
    this.header = header;
    this.allowToggle = false;
  }

  toggle() {
    if (!window.matchMedia('(min-width: 992px)').matches) return;

    this.allowToggle = window.pageYOffset > 100;
    if (this.allowToggle) {
      this.header.classList.add(IS_SMALL);
    } else {
      this.header.classList.remove(IS_SMALL);
    }
  }

  removeSmallClass() {
    if (window.matchMedia('(min-width: 992px)').matches) return;
    if (!this.header.classList.contains(IS_SMALL)) return;
    this.header.classList.remove(IS_SMALL);
  }

  resize() {
    this.removeSmallClass();
  }

  _resize() {
    this.onResize = debounce(200, this.resize.bind(this));
    window.addEventListener('resize', this.onResize);
  }

  _toggleHeader() {
    this.onScroll = throttle(66, this.toggle.bind(this));
    window.addEventListener('scroll', this.onScroll);
  }

  init() {
    this._toggleHeader();
    this._resize();
  }
}

export default function toggleHeader() {
  const header = document.querySelector('.js-header');
  if (!header) return;

  const h = new Header(header);
  h.init();
}
