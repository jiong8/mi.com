import { Swiper } from "./swiper-7.4.1/swiper/swiper-bundle.esm.browser.js";
const mySwiper = new Swiper(".swiper", {
  loop: true, // 循环模式选项
  speed: 500,
  effect: "fade",
  // 如果需要分页器
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    disableOnInteraction: false,
  },

  // 如果需要前进后退按钮
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
