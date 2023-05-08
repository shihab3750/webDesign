$(document).ready(function () {
  $(".cartt").click(function () {
    $("#add-to-cart-box").css("display", "flex");
    $("#atcb-content").show();
    $("#atcb-content").append(
      "<div id='atcb-text'>You have successfully added this item to your cart!</div>"
    );
  });

  $(".got-it-btn").click(function () {
    $("#add-to-cart-box").css("display", "none");
    $("#atcb-content").hide();
    $("#atcb-content #atcb-text").remove();
  });
});
