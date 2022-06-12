import $ from "./jquery.js";

class loginStyle {
  constructor() {}
  init() {
    this.setStyle();
  }
  setStyle() {
    //用户名输入框动画
    $("#uname").on("blur", function () {
      if ($("#uname").val() && $("#password").val()) {
        $("button").css({ opacity: 1, cursor: "pointer" });
        $("button").removeAttr("disabled");
      } else {
        $("button").css({ opacity: 0.4, cursor: "default" });
        $("button").attr("disabled", "true");
      }
      if ($("#uname").val()) {
        // console.log(1);
        $(".label_name").css({
          "font-size": "12px",
          top: "10px",
        });
        $(".hint_1").css("display", "none");
      } else {
        $(".label_name").css({
          "font-size": "17px",
          top: "20px",
          color: "#f04645",
        });
        $("#uname").css("background-color", "#fcf2f3");
        $(".hint_1").css("display", "block");
      }
    });
    $("#uname").on("focus", function () {
      // console.log(1);
      $(".label_name").css({
        "font-size": "12px",
        top: "10px",
      });
      $("#uname").on("input", function () {
        if ($("#uname").val()) {
          $(".hint_1").css("display", "none");
          $("#uname").css("background-color", "#fff");
          $(".label_name").css({
            color: "rgba(0, 0, 0, 0.4)",
          });
        } else {
          $(".hint_1").css("display", "block");
        }
      });
    });
    //密码输入框动画
    $("#password").on("blur", function () {
      if ($("#uname").val() && $("#password").val()) {
        $("button").css({ opacity: 1, cursor: "pointer" });
        $("button").removeAttr("disabled");
      } else {
        $("button").css({ opacity: 0.4, cursor: "default" });
        $("button").attr("disabled", "true");
      }
      if ($("#password").val()) {
        $(".label_pwd").css({
          "font-size": "12px",
          top: "10px",
        });
        // console.log($(".label_pwd"));
        $(".hint_2").css("display", "none");
      } else {
        $(".label_pwd").css({
          "font-size": "17px",
          top: "20px",
          color: "#f04645",
        });
        $("#password").css("background-color", "#fcf2f3");
        $(".hint_2").css("display", "block");
      }
    });
    $("#password").on("focus", function () {
      // console.log(1);
      $(".label_pwd").css({
        "font-size": "12px",
        top: "10px",
      });

      $("#password").on("input", function () {
        if ($("#password").val()) {
          $(".hint_2").css("display", "none");
          $("#password").css("background-color", "#fff");
          $(".label_pwd").css({
            color: "rgba(0, 0, 0, 0.4)",
          });
        } else {
          $(".hint_2").css("display", "block");
        }
      });
    });
  }
}
export default loginStyle;

// //用户名输入框动画
// $("#uname").on("blur", function () {
//   if ($("#uname").val() && $("#password").val()) {
//     $("button").css({ opacity: 1, cursor: "pointer" });
//     $("button").removeAttr("disabled");
//   } else {
//     $("button").css({ opacity: 0.4, cursor: "default" });
//     $("button").attr("disabled", "true");
//   }
//   if ($("#uname").val()) {
//     // console.log(1);
//     $(".label_name").css({
//       "font-size": "12px",
//       top: "10px",
//     });
//     $(".hint_1").css("display", "none");
//   } else {
//     $(".label_name").css({
//       "font-size": "17px",
//       top: "20px",
//       color: "#f04645",
//     });
//     $("#uname").css("background-color", "#fcf2f3");
//     $(".hint_1").css("display", "block");
//   }
// });
// $("#uname").on("focus", function () {
//   // console.log(1);
//   $(".label_name").css({
//     "font-size": "12px",
//     top: "10px",
//   });
//   $("#uname").on("input", function () {
//     if ($("#uname").val()) {
//       $(".hint_1").css("display", "none");
//       $("#uname").css("background-color", "#fff");
//       $(".label_name").css({
//         color: "rgba(0, 0, 0, 0.4)",
//       });
//     } else {
//       $(".hint_1").css("display", "block");
//     }
//   });
// });
// //密码输入框动画
// $("#password").on("blur", function () {
//   if ($("#uname").val() && $("#password").val()) {
//     $("button").css({ opacity: 1, cursor: "pointer" });
//     $("button").removeAttr("disabled");
//   } else {
//     $("button").css({ opacity: 0.4, cursor: "default" });
//     $("button").attr("disabled", "true");
//   }
//   if ($("#password").val()) {
//     $(".label_pwd").css({
//       "font-size": "12px",
//       top: "10px",
//     });
//     // console.log($(".label_pwd"));
//     $(".hint_2").css("display", "none");
//   } else {
//     $(".label_pwd").css({
//       "font-size": "17px",
//       top: "20px",
//       color: "#f04645",
//     });
//     $("#password").css("background-color", "#fcf2f3");
//     $(".hint_2").css("display", "block");
//   }
// });
// $("#password").on("focus", function () {
//   // console.log(1);
//   $(".label_pwd").css({
//     "font-size": "12px",
//     top: "10px",
//   });

//   $("#password").on("input", function () {
//     if ($("#password").val()) {
//       $(".hint_2").css("display", "none");
//       $("#password").css("background-color", "#fff");
//       $(".label_pwd").css({
//         color: "rgba(0, 0, 0, 0.4)",
//       });
//     } else {
//       $(".hint_2").css("display", "block");
//     }
//   });
// });
