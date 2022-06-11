import $ from "./jquery.js";
import cookie from "./lib/cookies.js";

let shop = cookie.get("shop");
shop = JSON.parse(shop);
let idList;
//将shop里面的每个id进行拼接传给数据库
idList = shop.map((el) => el.id).join();

$.ajax({
  type: "get",
  url: "../interfaces/shop.php",
  data: { idList },
  dataType: "json",
})
  .then((res) => {
    // console.log(res, "suc");
    let template = "";
    res.forEach((el) => {
      let pic = JSON.parse(el.picture);
      let cookieData = shop.filter((elm) => elm.id === el.id);
      template += `
      <div class="list-item"><div class="item-box" data-id='${el.id}'>
      <div class="item-table">
        <div class="item-row">
          <div class="col col-check first">
            <i class="iconfont J_check">✔</i>
          </div>
          <div class="col col-img">
            <a href=""
              ><img
                src="./${pic[0].src}"
                alt=""
                width="80"
                height="80"
            /></a>
          </div>
          <div class="col col-name">
            <h3 class="name">
              <a href="javascript:;">${el.title}</a>
            </h3>
          </div>
          <div class="col col-price "><span class='J_unitPrice'>${
            el.price
          }</span>元</div>
          <div class="col col-num">
            <div class="change-goods-num">
              <a href="javascript:;" class='J_dec' data-id='${el.id}'>-</a>
              <input type="text" value="${cookieData[0].num}" class='J_count'/>
              <a href="javascript:;" class='J_add' data-id='${el.id}'>+</a>
            </div>
          </div>
          <div class="col col-total"><span class='total-price'>${
            +el.price * cookieData[0].num
          }</span>元</div>
          <div class="col col-actions">
            <a href="javascript:;" class="del" data-id='${el.id}'>×</a>
          </div>
        </div>
      </div>
      </div>
      </div>`;
    });
    $(".list-body").html(template);
    //-------------加减操作-------------------------
    //--------------减----------------
    $(".J_dec").on("click", function () {
      if ($(this).next().val() > 1) {
        $(this)
          .next()
          .attr("value", $(this).next().val() - 1);
        shop.forEach((el) => {
          if (el.id === $(this).attr("data-id")) {
            el.num--;
          }
        });
        cookie.set("shop", JSON.stringify(shop));
        let val =
          $(this).next().val() *
          $(this).parent().parent().prev().find(".J_unitPrice").text();
        //插入val
        $(this).parent().parent().next().find(".total-price").text(val);

        //如果前面checkbox被选中,让最下方合计也变化
        if (
          $(this)
            .parent()
            .parent()
            .parent()
            .find(".J_check")
            .hasClass("checkActive")
        ) {
          $(".J_sum").text(
            $(".J_sum").text() -
              $(this).parent().parent().prev().find(".J_unitPrice").text()
          );
        }
      }
    });
    ///-----------加-----------------
    $(".J_add").on("click", function () {
      $(this)
        .prev()
        .attr("value", +$(this).prev().val() + 1);
      shop.forEach((el) => {
        if (el.id === $(this).attr("data-id")) {
          el.num++;
        }
      });
      cookie.set("shop", JSON.stringify(shop));
      let val =
        $(this).prev().val() *
        $(this).parent().parent().prev().find(".J_unitPrice").text();
      $(this).parent().parent().next().find(".total-price").text(val);
      //如果前面checkbox被选中,让最下方合计也变化
      if (
        $(this)
          .parent()
          .parent()
          .parent()
          .find(".J_check")
          .hasClass("checkActive")
      ) {
        //改合计价格
        $(".J_sum").text(
          +$(".J_sum").text() +
            +$(this).parent().parent().prev().find(".J_unitPrice").text()
        );
        //改合计数量
        $(".J_sumNum").text();
      }
      //数量
    });

    //-----------删除----------------
    $(".del").on("click", function () {
      let shop1 = cookie.get("shop");
      shop1 = JSON.parse(shop1);
      let result = shop1.filter((el) => el.id != $(this).attr("data-id"));

      cookie.set("shop", JSON.stringify(result));

      $(this).parent().parent().parent().parent().parent().remove();
    });
    //-----------------------------------------------
    //--------------------全选-------------------------
    let flag = 0;
    $(".J_allCheck").on("click", function () {
      if (flag === 0) {
        $(this).addClass("checkActive");
        $(".col-check").children(".J_check").addClass("checkActive");
        flag = 1;
        $(".cart-bar>a").removeClass("btn-disabled");
      } else {
        $(this).removeClass("checkActive");
        $(".col-check").children(".J_check").removeClass("checkActive");
        flag = 0;
        $(".cart-bar>a").addClass("btn-disabled");
      }
      if ($(".checkActive").length) {
        let val = 0;
        $.each($(".total-price"), function (i, el) {
          val += +$(el).text();
        });
        //勾选后让合计的值改变
        $(".J_sum").html(val);
      } else {
        $(".J_sum").html(0);
      }
    });
    //------------------------单选--------------------
    $(".J_check").on("click", function () {
      let flag = 1;
      let flag1 = 0;
      $(this).toggleClass("checkActive");
      if ($(this).hasClass("checkActive")) {
        let val =
          +$(".J_sum").text() +
          +$(this).parent().parent().find(".total-price").text();
        //勾选后让合计的值改变
        $(".J_sum").html(val);
        //勾选后让合计数量改变
        $(".J_sumNum").text(
          +$(this).parent().parent().find(".J_count").val() +
            +$(".J_sumNum").text()
        );
        //只要有一个勾选,结算按钮就设置可用
        $(".cart-bar>a").removeClass("btn-disabled");
      } else {
        let val =
          $(".J_sum").text() -
          $(this).parent().parent().find(".total-price").text();
        $(".J_sum").html(val);
        //勾选取消后让合计数量改变
        $(".J_sumNum").text(
          +$(".J_sumNum").text() -
            $(this).parent().parent().find(".J_count").val()
        );
      }
      //判断是不是每个都勾上了
      $(".J_check").each((i, el) => {
        if (!$(el).hasClass("checkActive")) {
          flag = 0;
        } else {
          flag1 = 1;
        }
      });
      if (flag) {
        $(".J_allCheck").addClass("checkActive");
      } else {
        $(".J_allCheck").removeClass("checkActive");
      }

      if (flag1) {
        $(".cart-bar>a").removeClass("btn-disabled");
      } else {
        $(".cart-bar>a").addClass("btn-disabled");
      }
    });
  })
  .catch((err) => {
    console.log(err, "err");
  });
