const title = document.querySelector("h1");
title.innerText = "Exercise example for 9.3";
console.dir(title);

title.classList.add("red");
console.log(title.classList);

const paragraph = document.querySelector("p");
paragraph.id = "MyP";
console.dir(paragraph);

paragraph.style.color = "green";

console.log(document.URL);
paragraph.innerText = document.URL;
