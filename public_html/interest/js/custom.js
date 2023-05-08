$(document).ready(function () {
  $(".got-it-btn").click(function () {
    $("#add-to-cart-box").css("display", "none");
  });
  $(".cartt").click(function () {
    $("#add-to-cart-box").css("display", "flex");
  });
});
