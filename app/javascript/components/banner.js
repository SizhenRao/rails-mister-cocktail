import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["A cocktail", "A cocktail for each city"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
