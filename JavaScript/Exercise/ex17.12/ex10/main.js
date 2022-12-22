let array = [1, 2, 3, 4, 6, 67, 7, 34, 123];
let largest = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] > largest) {
    largest = array[i];
  }
}

console.log(largest);
