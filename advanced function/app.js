function add(a, b) {
  return a + b;
}

console.log(add(1, 2));
console.log(add(5, 10));

const hobbies = ["Sports", "Cooking"];

function printHobbies(h) {
  h.push("NEW HOBBY");
  console.log(h);
}

printHobbies(hobbies);
