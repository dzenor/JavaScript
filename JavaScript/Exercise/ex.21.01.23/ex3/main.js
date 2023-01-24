function java(str) {
  if (str.lenght < 3) {
    return false;
  }

  front = str.substring(0, 4);
  if (front == "Java") {
    return true;
  } else {
    return false;
  }
}

console.log(java("JavaScript"));
console.log(java("Java"));
console.log(java("dzen"));
console.log(java("Jahjhsakt"));
