import $ from "./jquery.js";

//下拉的列表
$(".nav-item").each((i, el) => {
  $(el).on("mouseover", function () {
    $(".item-children").css("display", "none");
    $(this).children(".item-children").css({
      display: "block",
      "border-top": "1px solid #e0e0e0",
      height: "229px",
    });
  });
  $(el).on("mouseout", function () {
    $(this).children(".item-children").css({
      "border-top": "none",
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
