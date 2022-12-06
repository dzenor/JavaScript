let randomNumber = Math.random();
randomNumber = randomNumber * 6;
randomNumber = Math.floor(randomNumber);
console.log(randomNumber);

let userInput = prompt("Ask your question.");
let answer = "";

switch (randomNumber) {
  case 0:
    answer = "YES";
    break;

  case 1:
    answer = "NO";
    break;

  case 2:
    answer = "MAYBE";
    break;

  case 3:
    answer = "KEEP DREAMING";
    break;

  case 4:
    answer = "NOT SURE";
    break;

  case 5:
    answer = "IN OTHER LIFE";
    break;
}

console.log(userInput);
console.log(answer);
