let num1 = parseInt(prompt("enter the first number"));
let num2 = parseInt(prompt("enter the second number"));
let num3 = parseInt(prompt("enter the third number"));

if (num1 >= num2 && num1 <= num3) {
  console.log(`${num1} is between the range ${num2} and ${num3}`);
} else {
  console.log(`${num1} is outside the range ${num2} and ${num3}`);
}
