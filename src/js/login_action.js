import $ from "./jquery.js";

//-------------------------------------------
$("button").on("click", function () {
  if ($("#ucheck").is(":checked")) {
    $.ajax({
      url: "../interfaces/login.php", // 请求地址
      type: "get", // 请求类型
      data: {
        username: $("#uname").val(),
      }, // 需要发送的数据
      dataType: "json", // 接收的数据类型
    })
      .then((res) => {
        if (res[3]["has"] === true) location.href = "./index.html";
        else {
          alert("用户名密码不正确");
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  } else {
    alert("请勾选协议");
  }
});

// $("button").on("click", function () {
//   $.get(
//     "../../interfaces/login.php",
//     {
//       username: $("#username").val(),
//     },
//     function (data) {
//       $("#message").html(data.message).attr("class", data.color);
//     }
//   );
// });
