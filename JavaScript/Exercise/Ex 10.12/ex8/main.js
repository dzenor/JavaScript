let op = prompt("Enter an operation");
let num1 = parseInt(prompt("Enter a first number"));
let num2 = parseInt(prompt("Enter a second number"));

if (op == "add") {
  console.log(`Sum of ${num1} and ${num2} is ${num1 + num2}`);
} else if (op == "subtract") {
  console.log(`Difference of ${num1} and ${num2} is ${num1 - num2}`);
} else if (op == "multiply") {
  console.log(`Product of ${num1} and ${num2} is ${num1 * num2}`);
} else if (op == "divide") {
  console.log(`Division of ${num1} and ${num2} is ${num1 / num2}`);
} else if (op == "modulus") {
  console.log(`Modulus of ${num1} and ${num2} is ${num1 % num2}`);
} else {
  console.log(`${op} is an invalid operation`);
}
