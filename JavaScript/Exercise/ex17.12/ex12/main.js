let Restaurant = {
  Name: "REMO",
  Cake: "CheeseCake",
  Ingidients: ["Cream Chese", "Sugar", "Vanila Extract"],
};
for (elements in Restaurant) {
  console.log(elements);
}

for (elements in Restaurant.Ingidients) {
  console.log(Restaurant.Ingidients[elements]);
}
