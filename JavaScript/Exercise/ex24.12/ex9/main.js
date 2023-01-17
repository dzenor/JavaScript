function printEven(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      console.log(arr[i]);
    }
  }
}

let arr1 = [13, 23, 12, 45, 22, 48];
console.log(printEven(arr1));
