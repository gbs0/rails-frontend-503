import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Hello World", "Learn to code"],
    typeSpeed: 20,
    loop: true
  });
}

export { loadDynamicBannerText };