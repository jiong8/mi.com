import $ from "./jquery.js";

$.ajax({
  type: "get",
  url: "../interfaces/getitems.php",
  dataType: "json",
})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log((err) => {
      console.log(err);
    });
  });
