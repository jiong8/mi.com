import $ from "./jquery.js";
import cookie from "./cookies.js";
class productRender {
  constructor() {}
  init() {
    this.setaction();
  }
  setaction() {
    //---动态获取数据渲染-----
    let id = location.search.split("=")[1];
    $.ajax({
      url: "../interfaces/item.php",
      type: "get",
      data: { id },
      dataType: "json",
    })
      .then((res) => {
        let pic = JSON.parse(res.picture);
        //左边的图片加载进去
        let ptype = JSON.parse(res.type);
        let colorindex = 0;
        let template = `
    <img src="./${pic[1].src}" alt="1111" />
    `;
        $(".product-left").html(template);

        $(".J_pnavT").text(res.title);

        template = `<h2>${res.title}</h2>`;
        $(".product-right>h2").replaceWith(template);
        template = `<span>${res.price}元<del>999元</del></span>`;
        $(".price-info").html(template);
        template = ` <ul>
    <li>
      ${res.title}
      <span>${res.price}元<del>999元</del></span>
    </li>
  </ul>
  <div class="total-price">总计: ${res.price}元</div>`;
        $(".selected-list").html(template);
        //右边内容加载(选择版本)
        template = "";
        ptype.forEach((element) => {
          template += `<li>
        <a href="javascript:;">${element.type}</a>
      </li>`;
        });
        $(".type").html(template);
        //默认打开页面时是第一个选中
        $(".type>li").eq(0).addClass("active");
        template = "";
        //右边内容加载(选择颜色)
        ptype[0].color.forEach((el) => {
          template += ` <li>
        <a href="javascript:;">${el}</a>
      </li>`;
        });
        $(".color").html(template);
        $(".color>li").eq(0).addClass("active");

        //选择版本和颜色后切换价格和对应型号
        $(".buy-box-child").on("click", ".type>li", function () {
          //   console.log();
          let index = $(this).index(".type>li");
          $(".type>li").removeClass("active");
          $(this).addClass("active");
          template = "";
          //右边内容加载(选择颜色)
          ptype[index].color.forEach((el) => {
            template += ` <li>
          <a href="javascript:;">${el}</a>
        </li>`;
          });
          $(".color").html(template);
          //   $(".color>li").removeClass("active");
          if (colorindex >= 0 && colorindex < $(".color>li").length) {
            $(".color>li").eq(colorindex).addClass("active");
          } else {
            colorindex = 0;
            $(".color>li").eq(colorindex).addClass("active");
          }

          //价格设置

          template = `<span>${ptype[index].price}元<del>999元</del></span>`;
          $(".price-info").html(template);
          template = ` <ul>
      <li>
        ${res.title}
        <span>${ptype[index].price}元<del>999元</del></span>
      </li>
    </ul>
    <div class="total-price">总计: ${ptype[index].price}元</div>`;
          $(".selected-list").html(template);
        });

        //点击改变颜色
        $(".buy-box-child").on("click", ".color>li", function () {
          colorindex = $(this).index(".color>li");
          $(".color>li").removeClass("active");
          $(this).addClass("active");
        });

        //------cookie里面存取数据,(购物车页面需要使用)
        $(".sale-btn").on("click", function () {
          additem(res.id, "1");
        });
      })
      .catch((err) => {
        console.log(err);
      });

    //-------product固定定位--------
    window.onscroll = window.onresize = function () {
      let top = document.documentElement.scrollTop;
      if (top > 140) {
        $(".xm-product-box").css({
          position: "fixed",
          "margin-top": 0,
          top: 0,
          left: 0,
        });
      } else {
        $(".xm-product-box").css({
          position: "relative",
          "margin-top": "100px",
          top: 0,
          left: 0,
        });
      }
    };

    //---用于cookie添加--
    function additem(id, num) {
      let product = {
        id,
        num,
      };
      //拿取cookie里的shop
      let shop = cookie.get("shop");
      //如果shop为null,就要先进行第一次赋值,不为空就进行判断是否存在相同id,
      //对同id的num进行相加操作,而不是重复入栈
      if (shop) {
        shop = JSON.parse(shop); //cookie拿到的是字符串,转成数组
        if (shop.some((el) => el.id === id)) {
          //这里通过id判断是否为重复商品
          let index = shop.findIndex((elm) => elm.id === id);
          let count = parseInt(shop[index].num);
          count += parseInt(num);
          shop[index].num = count;
        } else {
          shop.push(product);
        }
      } else {
        shop = [];
        shop.push(product);
      }
      //每次操作完之后将cookie重新设置
      cookie.set("shop", JSON.stringify(shop));
    }
  }
}
export default productRender;
// //---动态获取数据渲染-----
// let id = location.search.split("=")[1];
// $.ajax({
//   url: "../interfaces/item.php",
//   type: "get",
//   data: { id },
//   dataType: "json",
// })
//   .then((res) => {
//     let pic = JSON.parse(res.picture);
//     //左边的图片加载进去
//     let ptype = JSON.parse(res.type);
//     let colorindex = 0;
//     let template = `
//     <img src="./${pic[1].src}" alt="1111" />
//     `;
//     $(".product-left").html(template);

//     $(".J_pnavT").text(res.title);

//     template = `<h2>${res.title}</h2>`;
//     $(".product-right>h2").replaceWith(template);
//     template = `<span>${res.price}元<del>999元</del></span>`;
//     $(".price-info").html(template);
//     template = ` <ul>
//     <li>
//       ${res.title}
//       <span>${res.price}元<del>999元</del></span>
//     </li>
//   </ul>
//   <div class="total-price">总计: ${res.price}元</div>`;
//     $(".selected-list").html(template);
//     //右边内容加载(选择版本)
//     template = "";
//     ptype.forEach((element) => {
//       template += `<li>
//         <a href="javascript:;">${element.type}</a>
//       </li>`;
//     });
//     $(".type").html(template);
//     //默认打开页面时是第一个选中
//     $(".type>li").eq(0).addClass("active");
//     template = "";
//     //右边内容加载(选择颜色)
//     ptype[0].color.forEach((el) => {
//       template += ` <li>
//         <a href="javascript:;">${el}</a>
//       </li>`;
//     });
//     $(".color").html(template);
//     $(".color>li").eq(0).addClass("active");

//     //选择版本和颜色后切换价格和对应型号
//     $(".buy-box-child").on("click", ".type>li", function () {
//       //   console.log();
//       let index = $(this).index(".type>li");
//       $(".type>li").removeClass("active");
//       $(this).addClass("active");
//       template = "";
//       //右边内容加载(选择颜色)
//       ptype[index].color.forEach((el) => {
//         template += ` <li>
//           <a href="javascript:;">${el}</a>
//         </li>`;
//       });
//       $(".color").html(template);
//       //   $(".color>li").removeClass("active");
//       if (colorindex >= 0 && colorindex < $(".color>li").length) {
//         $(".color>li").eq(colorindex).addClass("active");
//       } else {
//         colorindex = 0;
//         $(".color>li").eq(colorindex).addClass("active");
//       }

//       //价格设置

//       template = `<span>${ptype[index].price}元<del>999元</del></span>`;
//       $(".price-info").html(template);
//       template = ` <ul>
//       <li>
//         ${res.title}
//         <span>${ptype[index].price}元<del>999元</del></span>
//       </li>
//     </ul>
//     <div class="total-price">总计: ${ptype[index].price}元</div>`;
//       $(".selected-list").html(template);
//     });

//     //点击改变颜色
//     $(".buy-box-child").on("click", ".color>li", function () {
//       colorindex = $(this).index(".color>li");
//       $(".color>li").removeClass("active");
//       $(this).addClass("active");
//     });

//     //------cookie里面存取数据,(购物车页面需要使用)
//     $(".sale-btn").on("click", function () {
//       additem(res.id, "1");
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// //-------product固定定位--------
// window.onscroll = window.onresize = function () {
//   let top = document.documentElement.scrollTop;
//   if (top > 140) {
//     $(".xm-product-box").css({
//       position: "fixed",
//       "margin-top": 0,
//       top: 0,
//       left: 0,
//     });
//   } else {
//     $(".xm-product-box").css({
//       position: "relative",
//       "margin-top": "100px",
//       top: 0,
//       left: 0,
//     });
//   }
// };

// //---用于cookie添加--
// function additem(id, num) {
//   let product = {
//     id,
//     num,
//   };
//   //拿取cookie里的shop
//   let shop = cookie.get("shop");
//   //如果shop为null,就要先进行第一次赋值,不为空就进行判断是否存在相同id,
//   //对同id的num进行相加操作,而不是重复入栈
//   if (shop) {
//     shop = JSON.parse(shop); //cookie拿到的是字符串,转成数组
//     if (shop.some((el) => el.id === id)) {
//       //这里通过id判断是否为重复商品
//       let index = shop.findIndex((elm) => elm.id === id);
//       let count = parseInt(shop[index].num);
//       count += parseInt(num);
//       shop[index].num = count;
//     } else {
//       shop.push(product);
//     }
//   } else {
//     shop = [];
//     shop.push(product);
//   }
//   //每次操作完之后将cookie重新设置
//   cookie.set("shop", JSON.stringify(shop));
// }
