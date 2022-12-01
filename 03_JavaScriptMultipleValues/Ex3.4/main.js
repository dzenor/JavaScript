let myCar = {
  weight: 2.4,
  door: 4,
  horsePwrs: 200,
  brand: "Audi",
  color: "gray",
};
console.log("MyCar color: ", myCar.color);

let prop = "color";

myCar[prop] = "red";

console.log("MyCar new color: ", myCar.color);

prop = "forSale";

myCar[prop] = true;

console.log(`Car ${myCar.brand} ${myCar.door}`);
console.log("For sale: ", myCar.forSale);
