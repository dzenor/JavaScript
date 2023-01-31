// 1 and 2
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  area() {
    console.log(`The area of rectangle is ${this.width * this.height}`);
  }
}
const Recatngle1 = new Rectangle(7, 2);
Recatngle1.area();
Recatngle1.area = function () {
  console.log("new implementation");
};
Recatngle1.area();
class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}
const square1 = new Square(5);
square1.area();
