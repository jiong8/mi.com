import $ from "./jquery.js";
//数据库拿数据
$.ajax({
  type: "get",
  url: "../interfaces/getitems.php",
  // data: "data",
  dataType: "json",
})
  .then((res) => {
    let template = "";
    let template1 = "";
    console.log(res.length);
    res.forEach((element) => {
      let pic = JSON.parse(element.picture);

      template += `<div class="right-item">
        <a href="./product.html?id=${element.id}">
          <div class="figure figure-img">
            <img src="./${pic[0].src}" alt="${pic[0].alt}" />
          </div>
          <h3 class="title1">${element.title}</h3>
          <p class="desc">天玑8100 | 真旗舰芯</p>
          <p class="price">
            <span>${element.price}元起</span>
            <del>2099元</del>
          </p>
        </a>
      </div>`;
      if (element.id == 100008) {
        template1 = `  <a href="./product.html?id=${element.id}">
      <img src="./${pic[4].src}" alt="" />
    </a>`;
      }
    });
    $(".right").eq(0).html(template);
    $(".left").eq(0).html(template1);
  })
  .catch((err) => {
    console.log(err, "err");
    s;
  });
