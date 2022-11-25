alert("Self-Check Quiz");

const c = "5";
console.log(typeof c);
//string

const b = 91;
console.log(typeof b);
//number

let empty1 = undefined;
let empty2 = null;
//its better to set null

let a = "Hello";
a = "world";
console.log(a);
//the output of the following is world

let e = "world";
let f = "Hello ${e}";
console.log(f);
//Hello world

let g = "Hello";
g = prompt("world");
console.log(g);
//world

let i = 5;
let j = 70;
let k = "5";
j++;
console.log(j);
//j is 71

let result = 3 + (4 * 2) / 8;
console.log(result);
//result is 4

let firstNum = 5;
let secondNum = 10;
firstNum++;
secondNum--;
let total = ++firstNum + secondNum;
console.log(total);
let total2 = 500 + 100 / 5 + total--;
console.log(total2);
//total1 is 16
//total2 is 536

const l = 5;
const m = 10;
console.log(l > 0 && b > 0);
console.log(a == 5 && b == 4);
console.log(true || false);
console.log(a == 3 || b == 10);
console.log(a == 3 || b == 7);
