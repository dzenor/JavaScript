let n1 = 0;
let n2 = 1;
let n3;
let fibnum = 8;
count = 2;

while (count <= fibnum) {
  n3 = n1 + n2;

  console.log(n3);

  n1 = n2;

  n2 = n3;

  count++;
}
