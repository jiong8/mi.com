import $ from "./jquery.js";

class registerAction {
  constructor() {}
  init() {
    this.setaction();
  }
  setaction() {
    $("button").on("click", function () {
      if ($("#ucheck").is(":checked")) {
        $.ajax({
          url: "../interfaces/register.php", // 请求地址
          type: "get", // 请求类型
          data: {
            username: $("#country").val(),
            phone: $("#phone").val(),
          }, // 需要发送的数据
          dataType: "json", // 接收的数据类型
        })
          .then((res) => {
            switch (res[1].error) {
              case 1:
                alert("注册失败,用户名有重复");
                break;
              case 0:
                alert("注册成功");
                break;

              default:
                alert("预期之外的错误");
                break;
            }
          })
          .catch((err) => {
            console.log(err, "error");
          });
      } else {
        alert("请勾选协议");
      }
    });
  }
}
export default registerAction;
