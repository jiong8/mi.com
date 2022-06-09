import { Swiper } from "./swiper-7.4.1/swiper/swiper-bundle.esm.browser.js";
import $ from "./jquery.js";
//下拉的列表
$(".nav-item").each((i, el) => {
  $(el).on("mouseover", function () {
    $(".item-children").css("display", "none");
    $(this).children(".item-children").css({
      display: "block",
      /*  "border-top": "1px solid #e0e0e0", */
      height: "229px",
    });
  });
  $(el).on("mouseout", function () {
    $(this).children(".item-children").css({
      // "border-top": "none",
      height: "0",
    });
  });
});
/* ----------------------------------------------------- */
let index;
$(".more>a").on("mouseover", function () {
  index = $(this).index(".more>a");
  // console.log(index);
  $(".more>a").removeClass("active");
  $(this).addClass("active");
  $(".watch").addClass("disnone");
  $(`.watch:nth-child(${index + 1})`).removeClass("disnone");
});
//轮播图
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
