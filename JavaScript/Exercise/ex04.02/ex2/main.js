let number = parseInt("100");
console.log(number);

let fruits = ["apple", "banana", "grape"];
fruits.fill("cherry");
console.log(fruits);

let message = ["javascript", "is", "fun"];
let joinedMessage = message.join(" ");
console.log(joinedMessage);

let primeNumbers = [2, 3, 5, 7];
let evenNumbers = [2, 4, 6, 8];
let joinedArrays = primeNumbers.concat(evenNumbers);
console.log(joinedArrays);

let numbers = [1, 3, 4, 9, 8];
function isEven(element) {
  return element % 2 == 0;
}

let evenNumber = numbers.find(isEven);
console.log(evenNumber);

//map
let numbers1 = [2, 4, 6, 8, 10];
function square(number) {
  return number * number;
}

let square_numbers = numbers1.map(square);
console.log(square_numbers);

//for each
let numbers2 = [1, 3, 4, 9, 8];
function computeSquare(element1) {
  console.log(element1 * element1);
}

numbers2.forEach(computeSquare);
