import { debounce } from 'throttle-debounce';

export const {
  isAndroid,
  isCordova,
  isEdge,
  isFirefox,
  isChrome,
  isChromeIOS,
  isChromiumBased,
  isIE,
  isIOS,
  isOpera,
  isSafari,
} = {
  isAndroid: /Android/.test(navigator.userAgent),
  isCordova: !!window.cordova,
  isEdge: /Edge/.test(navigator.userAgent),
  isFirefox: /Firefox/.test(navigator.userAgent),
  isChrome: /Google Inc/.test(navigator.vendor),
  isChromeIOS: /CriOS/.test(navigator.userAgent),
  isChromiumBased: !!window.chrome && !/Edge/.test(navigator.userAgent),
  isIE: /Trident/.test(navigator.userAgent),
  isIOS: /(iPhone|iPad|iPod)/.test(navigator.platform),
  isOpera: /OPR/.test(navigator.userAgent),
  isSafari: /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent),
};

export const isWebkit = isChrome
  || isChromiumBased
  || isChromeIOS
  || isSafari
  || isAndroid
  || isIOS;

export const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints;

export function setVhProperty() {
  function setProperty() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  const onResize = debounce(66, setProperty);

  setProperty();
  window.addEventListener('resize', onResize);
}
