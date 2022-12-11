let num1 = parseInt(prompt("Enter the first number"));
let num2 = parseInt(prompt("Enter the second number"));

if (num1 > num2) {
  alert("The first number is bigger than second");
} else if (num2 > num1) {
  alert("The second number is bigger than first");
} else {
  alert(`The number ${num1} and ${num2} are equal`);
}
