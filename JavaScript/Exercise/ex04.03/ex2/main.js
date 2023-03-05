$(document).ready(function () {
  $(".menu").hide();
  $(".cross").hide();
  $(".hamburger").click(function () {
    $(".menu").show();
    $(".cross").show();
    $(".hamburger").hide();
  });

  $(".cross").click(function () {
    $(".menu").hide();
    $(".cross").hide();
    $(".hamburger").show();
  });
});
