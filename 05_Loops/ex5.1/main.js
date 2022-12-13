let max = parseInt(prompt("Enter max value for guessing"));
max++;
let guessingNumber = Math.floor(Math.random() * max);
alert(guessingNumber);

let rightNumber = false;
-
while (!rightNumber) {
  let userNumber = parseInt(prompt("Enter a number between 0 and " + max));
  if (guessingNumber === userNumber) {
    alert("You guessed it");
    rightNumber = true;
  } else if (guessingNumber < userNumber) {
    alert("You guessed higher than the number!");
  } else {
    alert("You guessed lower than the number!");
  }
}
