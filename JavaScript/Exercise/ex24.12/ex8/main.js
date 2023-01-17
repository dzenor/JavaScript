function randomNumberr(start, end) {
  let randomNumber = Math.floor(Math.random() * end + start);
  return console.log(randomNumber);
}

console.log(randomNumberr(1, 100));
