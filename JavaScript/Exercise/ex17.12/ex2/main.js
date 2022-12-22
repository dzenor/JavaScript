let num = 9182821;
let count = 0;

while (num != 0) {
  num = Math.floor(num / 10);
  count++;
}

let num1 = 9182821;

console.log(`The number of digits of the number  ${num} is ${count}`);
