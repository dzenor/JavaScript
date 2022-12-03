let car = {
  model: "audi",
  color: "gray",
  year: "2010",
  weight: "2.4",
};

delete car.model;
console.log(car);

console.log(car.year.length);

let kniga = {
  ime: "Psihologija",
  author: "Morgan Hausel",
  readingStatus: true,
};

console.log(kniga.ime, kniga.author, kniga.readingStatus);

let dog = [
  {
    name: "JavaScript",
    weight: 2.3,
    breed: "pitbull",
  },
];

dog.push(kniga);
console.log(dog);

console.log(typeof car.color);

let recipe = {
  name: "pizza",
  servings: 5,

  ingrediance: ["kaskaval", "salama", "testo", "kecap"],
};

console.log(recipe);

let triagolnik = {
  stranaA: 3,
  stranaB: 3,
  stranaC: 3,
};

console.log(triagolnik.stranaA * triagolnik.stranaB * triagolnik.stranaC);
