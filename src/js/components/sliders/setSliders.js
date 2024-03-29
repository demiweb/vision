import Slider from './Slider';
import classNames from './classNames';

class MySlider {
  constructor(slider) {
    this.sliderClass = slider;
    this.sliders = [];
  }

  _getOptions() {
    this.getOptions = ({
      container, prevButton, nextButton, onInit,
    }) => ({
      partners: {
        container,
        prevButton,
        nextButton,
        onInit,
        items: 1,
        mouseDrag: true,
        loop: true,
        nav: false,
        gutter: 10,
        responsive: {
          576: {
            items: 2,
          },
          992: {
            items: 3,
            gutter: 30,
          },
          1200: {
            items: 4,
          },
        },
      },
    });
  }

  _initSliders() {
    this.containers.forEach((container) => {
      if (container.classList.contains(classNames.plugin.container)) return;

      const slider = new Slider(container, this.getOptions);
      slider.init();
      this.sliders = [...this.sliders, slider];
    });
  }


  init() {
    this.containers = [...document.querySelectorAll(this.sliderClass)];
    if (!this.containers.length) return;

    this._getOptions();
    this._initSliders();
  }
}

const mySlider = new MySlider('.js-slider');
export default mySlider;
