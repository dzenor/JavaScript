$(document).ready(function () {
  $("#selected-plays > li").addClass("horizontal");
  $("#selected-plays  li:not('.horizontal')").addClass("sub-level");
  $("a[href^='mailto:']").addClass("mailto");
  $("a[href$='.pdf']").addClass("pdflink");
  $("a[href^='http']").addClass("henrylink");
  $("tr:even").addClass("alt");
  $("tr:nth-child(odd)").addClass("alt");
  $("td:contains(Henry)").addClass("highlight");
  $("td:contains(Henry)").next().addClass("highlight");
  $("td:contains(Henry)").next().next().addClass("highlight");

  $("#submit").click(function (e) {
    e.preventDefault();
    let selectedRadio = $("input[type='radio']:checked");
    console.log(selectedRadio);
    let multiSelectedItems = $(
      "input[type='password'],input[type='text']:disabled"
    );
    console.log(selectedRadio);
    console.log(multiSelectedItems);
  });
});
