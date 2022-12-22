let arr1 = [1, 2, 3, 4, 5];
let arr2 = [2, 3, 4, 5, 6];
let product = [];

for (i = 0; i < arr1.length; i++) {
  product[i] = arr1[i] * arr2[i];

  console.log(`The product of ${arr1[i]} and ${arr2[i]} is ${product[i]}`);
}
