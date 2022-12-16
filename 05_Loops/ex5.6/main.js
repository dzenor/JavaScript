let myArray = [];
for (let i = 0; i < 10; i++) {
  myArray.push(i);
}
console.log(myArray);

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

console.log("--------------");

for (let dzeno of myArray) {
  console.log(dzeno);
}
