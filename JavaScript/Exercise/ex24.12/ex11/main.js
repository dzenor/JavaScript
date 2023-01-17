function fibonacci(n) {
  let n1 = 0;
  let n2 = 1;
  let count = 2;
  let n3;
  console.log(n1, n2);
  while (count < n) {
    n3 = n1 + n2;
    console.log(n3);
    n1 = n2;
    n2 = n3;
    count++;
  }
}

n1 = parseInt(prompt("enter a number"));
fibonacci(n1);
