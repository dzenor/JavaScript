colors = ["black", "purple", "red", "orange"];
console.log(colors.length); //4 elements

console.log((lastElement = colors[colors.length - 1])); //orange

numbers = [12, 24, 36];
numbers[5] = 48;
console.log(numbers.length);

console.log(numbers);

shoppingList = ["milk", "bread", "apples"];
console.log(shoppingList.length);
shoppingList[1] = "bannanas";

console.log(shoppingList);

shoppingList.splice(1, 0, "lemon", "waterlemon");
shoppingList.push("grapes");

console.log(shoppingList);

let myArr = colors.concat(shoppingList);

console.log(myArr);

// arr8 = [2,6,7,8];
// let findValue = arr8.find(function(e) );

console.log(myArr.sort());

shoppingList1 = [];

shoppingList1.push("milk", "bread", "apples");
shoppingList1.splice(1, 1, "bannanas", "eggs");

shoppingList1.pop();
console.log(shoppingList1);
shoppingList1.sort();
console.log(shoppingList1);
console.log(shoppingList1[2]);
shoppingList1.splice(1, 0, "carrots", "letuce");
console.log(shoppingList1);
anotherList = ["juice", "pop"];
shoppingList1.concat(anotherList);
let myList = shoppingList1.concat(anotherList);
console.log(myList);
