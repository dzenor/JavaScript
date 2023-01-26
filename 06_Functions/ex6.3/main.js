// kalkulator

let num1 = 2;
let num2 = 4;

let operator = "*";

function calculator(n1, n2, operator) {
  let res;
  switch (operator) {
    case "-":
      res = n1 - n2;
      break;

    case "+":
      res = n1 + n2;
      break;

    case "*":
      res = n1 * n2;
      break;

    default:
      res = n1 + n2;
  }
  return res;
}

console.log(calculator(num1, num2, operator));

let result = [];

for (let i = 0; i < 10; i++) {
  let value1 = i * 5;
  let value2 = i * i;
}

// //prv nacin na pisuvanje funkcii
// function sumOfTwoNumbers(n1, n2) {
//   let res = n1 + n2;
//   return res;
// }

// console.log("prv nacin " + sumOfTwoNumbers(5, 1));

// //drugi nacin
// let sumOfTwoNumbers2 = function (n1, n2) {
//   let res = n1 + n2;
//   return res;
// };
// console.log(sumOfTwoNumbers2(5, 2));

// let sumOfTwoNumbers3 = (n1, n2) => n1 + n2;

// console.log(sumOfTwoNumbers3(5, 3));

// [1, true, 2, 4].forEach((element) => {
//   console.log(element);
// });
