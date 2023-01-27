class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

let per1 = new Person("dzenis", "redzovic");

let per2 = new Person("onur", "mehmed");

console.log(per1.firstName, per1.lastName);
console.log(per2.firstName, per2.lastName);

function personFunction(person) {
  console.log(person.firstName, person.lastName);
}

personFunction(per1);
personFunction(per2);

class PersonMethods {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  greet() {
    console.log("hi there! i am " + this.firstName);
  }

  compliment(name, object) {
    return "thats wonderful" + object + ", " + name;
  }
}

let ana = new PersonMethods("ana", "cvetkovska");
let nate = new PersonMethods("natalija", "nikolikj");

ana.greet();
nate.greet();

let anaCompliment = ana.compliment(nate.firstName, "dress");
console.log(anaCompliment);
