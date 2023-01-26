let start = 10;
function countdown(countdownVal) {
  console.log(countdownVal);
  if (countdownVal < 1) {
    return 1;
  } else {
    countdown(countdownVal - 1);
  }
}

console.log(countdown(start));
