let num = 27;
//ako je deliv sa 2 ili je 0 onda je paran else neparan
if (num % 2 == 0) {
  console.log(`The number ${num} is Even number`);
} else {
  console.log(`The number${num} is odd`);
}

let num1 = parseInt(prompt("Enter a number to check if odd or even number"));
if (num1 % 2 == 0) {
  alert(`The number ${num1} is Even number`);
} else {
  alert(`The number${num1} is odd number`);
}
