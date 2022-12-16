let lesson = {
  name: "JavaScript",
  difficulty: 10,
  mandatory: true,
};

for (const prop in lesson) {
  console.log(prop + ": " + lesson[prop]);
}
