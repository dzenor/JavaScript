let side1 = parseInt(prompt("Enter the first side of the triangle"));
let side2 = parseInt(prompt("Enter the second side of the triangle"));
let side3 = parseInt(prompt("Enter the third side of the triangle"));

if (side1 == side2 && side1 == side3) {
  alert("Equilateral triangle");
} else if (side1 == side2 || side2 == side3) {
  alert("Isosceles triangle");
} else {
  alert("Scalene triangle");
}
