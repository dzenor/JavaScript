function simpleInt(principle, rate, time) {
  let finalAmt = (principle * time * rate) / 100;
  return console.log(finalAmt);
}
simpleInt(2000, 3, 2);
