$(document).ready(function () {
  $.ajax({
    url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita",
    success: function (data) {
      data.drinks.forEach((element) => {
        console.log(element);
        $(".card-container").append(` <div class="card">
        <img src="${element.strDrinkThumb}" alt="" />
        <h3>${element.strDrink}</h3>
        <h3>${element.strGlass}</h3>
        <h3>${element.strIngredient1}</h3>
        <h3>${element.strIBA}</h3>
        <h3></h3>
        <h3></h3>
        <h3></h3>
        <h3></h3>
        <h3></h3>
        <h3></h3>
        <p></p>
      </div>
      
        `);
      });
    },
  });
  $(".coctail-container").hide();
  $("#btnYes").click(function (e) {
    e.preventDefault();
    $(".container").hide();
    $(".coctail-container").show();
  });
});
