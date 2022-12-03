//ex1
let arr = ["red", "blue", "green"];
console.log(arr[0]);
console.log(arr.indexOf("blue"));

//ex2
let arr1 = ["audi", "mercedes", "bmw", "toyota", "golf"];
console.log(arr1.slice(2));

//ex3
let arr2 = ["audi", "mercedes", "bmw", "toyota", "golf"];
console.log(arr2[arr2.length - 1]);

//ex4
let arr3 = ["audi", "mercedes", "bmw", "toyota", "golf"];
console.log(arr3.sort());

//ex5
let arr4 = ["audi", "mercedes", "bmw", "toyota", "golf"];
console.log(arr4.reverse());

//ex6
let numbers = [6, 7, 9, 8, 10];
let randomnumbers = numbers[Math.floor(Math.random() * numbers.length)];
console.log(randomnumbers);

//ex7
let numbers1 = [6, 7, 9, 8, 10];
let minnumbers = Math.min.apply(Math, numbers);
console.log(minnumbers);

//ex8
let numbers2 = [6, 7, 8, 9, 10];
let maxnumbers = Math.max.apply(Math, numbers);
console.log(maxnumbers);

//ex9
let arr5 = ["audi", "mercedes", "bmw", "toyota", "golf"];
arr5.push("passat");
console.log(arr5);
