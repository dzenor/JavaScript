$(document).ready(function () {
  //   $("p").hide();
  //   $("#test").hide();
  //   $("*").hide();
  //   $("[href]").hide();
  //   $("p").click(function () {
  //     $("p").hide();
  //   $("p").dblclick(function () {
  //     $("p").hide();
  //   });
  //   $("p").mouseenter(function () {
  //     $(this).hide();
  //   });
  //   $("button").click(function () {
  //     $("p").show();
  //   });
  //   $("p").toggle();
  //   $("div").fadeOut();
  //   $("div").slideUp();
  $("#testimg").mouseover(function () {
    $(this).animate({ height: "200px", width: "200px", left: "-11px" });
  });
  $("#testimg").mouseout(function () {
    $(this).animate({ height: "178px", width: "178px", left: "0px" });
  });
  //   $("p").append("YES!");
  //   $("div").remove();
  $("p").addClass("important");

  $("p").click(function () {
    $(this).toggleClass();
  });
  $("#text").css({
    "background-color": "green",
    color: "white",
    "font-size": "25px",
    padding: "15px",
  });
});
