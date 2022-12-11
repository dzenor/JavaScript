let num1 = parseInt(prompt("Enter the first number"));
let num2 = parseInt(prompt("Enter the second number"));
let num3 = parseInt(prompt("Enter the third number"));

if ((num1 > num2) & num3) {
  alert(`the first number is the largest ${num1}`);
} else if (num2 > num3) {
  alert(`the second number is the largest ${num2}`);
} else {
  alert(`the third number is the largest ${num3}`);
}
