const theList = [
  "Laurence",
  "Svekis",
  true,
  35,
  null,
  undefined,
  { test: "one", score: 55 },
  ["one", "two"],
];

theList.shift("Laurance");
theList.pop();
theList.pop();
theList.pop();
theList.pop();
theList.pop();
theList.pop();

theList.unshift("FIRST");

theList.splice(2, 0, "hello world");

theList.splice(2, 0, "MIDDLE");

theList.push("Last");
console.log(theList);
