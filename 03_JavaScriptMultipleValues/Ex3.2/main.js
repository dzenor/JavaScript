// kreiranje na prazen na arej
let shoppingList = [];
// dodavanje na vrednisto vo arrejot
shoppingList.push("Milk", "Bread", "Apples");
// naoganje na pozicijata na vrednosta "Bread"
let indexOfBread = shoppingList.indexOf("Bread");
// nacin za updejtiranje na odredane vrednos vo arej
// arr.splice(index na pozijata kade sakeme da dodademe,
//            broj na elementi sto sakame da gi izbriseme,
//            vrednostite sto gi dodavame : "Bananas", "Eggs");
shoppingList.splice(indexOfBread, 1, "Bananas", "Eggs");
// shoppingList.pop() go brise posledniot element od arejot i ja vrakja negovata vrednost
console.log("Poslediot izbrishan element: ", shoppingList.pop());
// ja sortira vrednosta od A do Z, ili od a do z ili od pomalo do pogolemo i obratno
// vo zavisnost od koja vrednost se naogja vo elementite
shoppingList.sort();
//shoppingList.indexOf("Milk") go naogja prviot index na odredena vrednost i go vrakja kako broj
console.log(shoppingList.indexOf("Milk"));
// isto kako i gore
let indexOfBanana = shoppingList.indexOf("Bananas");
// posle odredeniot index dodavame elementi bez da go briseme elementot
shoppingList.splice(indexOfBanana + 1, 0, "Carrots", "Lettuce");
// kreirame nov arej so dva elementi
let newshoppingList = ["Juice", "Pop"];
// shoppingList.concat(); spojuvame dadeni arrei vo nov arej;
let combinedShoppingList = shoppingList.concat(
  newshoppingList,
  newshoppingList
);
// combinedShoppingList.lastIndexOf("Pop") go naogjame poslednioto povtoruvanje na odredana vrednost i go vrakjame kako broj
let lastIndexOf = combinedShoppingList.lastIndexOf("Pop");
console.log(lastIndexOf);
console.log(combinedShoppingList);
