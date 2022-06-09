import $ from "./jquery.js";

//-------------------------------------------
$("button").on("click", function () {
  //   console.log($("#uname").val());

  // let username = $("#uname").val();
  $.ajax({
    url: "../interfaces/login.php", // 请求地址
    type: "get", // 请求类型
    data: {
      username: $("#uname").val(),
    }, // 需要发送的数据
    dataType: "json", // 接收的数据类型
    beforeSend(xhr) {}, // 请求前执行
    dataFilter(response) {
      return response;
    }, // 数据筛选
    success(data) {
      console.log(data, "success");
    }, // 成功 接收来自dataFilter的数据 如果没有dataFilter 默认获得response
    error(xhr) {
      console.log(xhr);
    }, // 失败
    complete(xhr) {
      console.log("complete");
    }, // 完成时执行 无论成功或失败
  });
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
