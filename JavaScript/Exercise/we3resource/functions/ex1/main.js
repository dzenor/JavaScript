// let x = 32243;
// let stringOfX = x.toString();
// let arrayOfX = stringOfX.split("").reverse().join("");
// console.log(parseInt(arrayOfX));

function reverseNumber(n) {
  let stringOfX = n.toString();
  let arrayOfX = stringOfX.split("").reverse().join("");
  return parseInt(arrayOfX);
}
console.log(reverseNumber(32243));
