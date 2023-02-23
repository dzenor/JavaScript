class Rook {
  constructor(color, icon, player) {
    this.color = color;
    this.icon = icon;
    this.player = player;
  }
}
const rook = new Rook({ color: "black", icon: "rook", player: 2 });
const serializeObject = (obj) => {
  return JSON.parse(JSON.stringify(rook));
};
const deserializeObject = (obj) => {
  return new Rook(obj);
};
console.log("original object:", rook);
const serializedObj = serializeObject(rook);
console.log("serialized object:", serializedObj);
const deserializeObj = deserializeObject(serializedObj);
console.log("deserialize object:", deserializeObj);

let myObject = {
  name: "John Doe",
  age: 15,
  email: "test@test.com",
};

console.log(myObject);

let converted = JSON.stringify(myObject);
console.log(converted);

const obj = JSON.parse('{ "name": "John", "age": 30, "city": "New York" }');
document.getElementById(
  "demo"
).innerText += `Name: ${obj.name}, Age: ${obj.age}, City:${obj.city}`;

fetch("example.json")
  .then((response) => response.json())
  .then((json) => console.log(json));

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .catch((error) => "Something bad has happened")
  .then((json) => console.log(json));

let courses =
  '[{"title": "PHP","reviews": []},{"title": "Javascript","reviews": [5,5,4.5,4,5,5,5,4.5]  },{"title": "Python","reviews": [5,5,4,4,5,3,5,4,4,5]},{"title": "Machine Learning", "reviews": [5,5,4.5]}]';

function average_reviews(data) {
  let courses = JSON.parse(data);
  for (let i = 0; i < courses.length; i++) {
    let review = courses[i];
    try {
      if (review.length === 0) {
        throw "No reviews";
      } else if (review.length < 5) {
        throw "Not enough reviews yet";
      }
      let sumReviews = 0;
      for (let j = 0; j < review.length; j++) {
        sumReviews += review[j];
      }
      let average_reviews = sumReviews / review.length;
      courses[i].average_rating = average_reviews.toFixed(1);
    } catch (err) {
      courses[i].average_rating = err;
    }
  }
}
