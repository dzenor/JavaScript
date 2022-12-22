let secretNumber = Math.floor(Math.random() * 10);
let guesses = 0; // for storing the number of guesses

let number = 0;
do {
  // get input from user
  let number = parseInt(prompt("Please enter a number between 0 and 10"));
  // get the integer

  // increase the number of guesses
  guesses++;
  // check input number with the secret number provide hint if needed
  if (number > secretNumber) {
    alert("To high");
    alert(secretNumber);
  } else if (number < secretNumber) {
    alert("To low");
    alert(secretNumber);
  } else if (number == secretNumber) {
    alert(`Bravo! you're correct after ${guesses} guess(es).`);
  }
} while (number != secretNumber);
