import $ from "./jquery.js";

class registerStyle {
  constructor() {}
  init() {
    this.setStyle();
  }
  setStyle() {
    //国家输入框动画
    $("#country").on("blur", function () {
      if ($("#country").val() && $("#phone").val() && $("#numeric").val()) {
        $("button").css({ opacity: 1, cursor: "pointer" });
        $("button").removeAttr("disabled");
      } else {
        $("button").css({ opacity: 0.4, cursor: "default" });
        $("button").attr("disabled", "true");
      }
      if ($("#country").val()) {
        // console.log(1);
        $(".label_country").css({
          "font-size": "12px",
          top: "10px",
        });
        $(".hint_1").css("display", "none");
      } else {
        $(".label_country").css({
          "font-size": "17px",
          top: "20px",
          color: "#f04645",
        });
        $("#country").css("background-color", "#fcf2f3");
        $(".hint_1").css("display", "block");
      }
    });
    $("#country").on("focus", function () {
      // console.log(1);
      $(".label_country").css({
        "font-size": "12px",
        top: "10px",
      });
      $("#country").on("input", function () {
        if ($("#country").val()) {
          $(".hint_1").css("display", "none");
          $("#country").css("background-color", "#fff");
          $(".label_country").css({
            color: "rgba(0, 0, 0, 0.4)",
          });
        } else {
          $(".hint_1").css("display", "block");
        }
      });
    });
    //号码输入框动画
    $("#phone").on("blur", function () {
      if ($("#country").val() && $("#phone").val() && $("#numeric").val()) {
        $("button").css({ opacity: 1, cursor: "pointer" });
        $("button").removeAttr("disabled");
      } else {
        $("button").css({ opacity: 0.4, cursor: "default" });
        $("button").attr("disabled", "true");
      }
      if ($("#phone").val()) {
        $(".label_phone").css({
          "font-size": "12px",
          top: "10px",
        });
        // console.log($(".label_pwd"));
        $(".hint_2").css("display", "none");
      } else {
        $(".label_phone").css({
          "font-size": "17px",
          top: "20px",
          color: "#f04645",
        });
        $("#phone").css("background-color", "#fcf2f3");
        $(".hint_2").css("display", "block");
      }
    });
    $("#phone").on("focus", function () {
      // console.log(1);
      $(".label_phone").css({
        "font-size": "12px",
        top: "10px",
      });

      $("#phone").on("input", function () {
        if ($("#phone").val()) {
          $(".hint_2").css("display", "none");
          $("#phone").css("background-color", "#fff");
          $(".label_phone").css({
            color: "rgba(0, 0, 0, 0.4)",
          });
        } else {
          $(".hint_2").css("display", "block");
        }
      });
    });
    //--numberic
    //密码输入框动画
    $("#numeric").on("blur", function () {
      if ($("#country").val() && $("#phone").val() && $("#numeric").val()) {
        $("button").css({ opacity: 1, cursor: "pointer" });
        $("button").removeAttr("disabled");
      } else {
        $("button").css({ opacity: 0.4, cursor: "default" });
        $("button").attr("disabled", "true");
      }
      if ($("#numeric").val()) {
        $(".label_numeric").css({
          "font-size": "12px",
          top: "10px",
        });
        // console.log($(".label_pwd"));
        $(".hint_3").css("display", "none");
      } else {
        $(".label_numeric").css({
          "font-size": "17px",
          top: "20px",
          color: "#f04645",
        });
        $("#numeric").css("background-color", "#fcf2f3");
        $(".hint_3").css("display", "block");
      }
    });
    $("#numeric").on("focus", function () {
      // console.log(1);
      $(".label_numeric").css({
        "font-size": "12px",
        top: "10px",
      });

      $("#numeric").on("input", function () {
        if ($("#numeric").val()) {
          $(".hint_3").css("display", "none");
          $("#numeric").css("background-color", "#fff");
          $(".label_numeric").css({
            color: "rgba(0, 0, 0, 0.4)",
          });
        } else {
          $(".hint_3").css("display", "block");
        }
      });
    });
  }
}
export default registerStyle;
