import 'core-js/features/symbol';
import 'core-js/features/array/from';
import 'core-js/features/promise';
import 'intersection-observer';
import './lib/polyfill';
import smoothscroll from 'smoothscroll-polyfill';

import sayHello from './lib/sayHello';
import setHTMLClassNames from './components/setHTMLClassNames';
import setLazy from './components/setLazy';
import { setVhProperty } from './helpers';
import mySlider from './components/sliders/setSliders';
import setTextareaHeight from './components/setTextareaHeight';
import menu from './components/toggleMenu';
import toggleHeader from './components/toggleHeader';
import scrollToNext from './components/scrollTo';
import myPopup from './components/setPopups';

document.addEventListener('DOMContentLoaded', () => {
  smoothscroll.polyfill();
  sayHello();
  setHTMLClassNames();
  setLazy();
  setVhProperty();
  mySlider.init();
  setTextareaHeight();
  menu.init();
  toggleHeader();
  scrollToNext();
  myPopup.init();
});

window.setLazy = setLazy;
