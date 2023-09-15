function add(a, b) {
  return a + b;
}

console.log(add(1, 2));
console.log(add(5, 10));

//

const hobbies = ["Sports", "Cooking"];

function printHobbies(h) {
  h.push("NEW HOBBY");
  console.log(h);
}

printHobbies(hobbies);

//

function createTaxCalculator(tax) {
  function calculateTax(amount) {
    return amount * tax;
  }

  return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

console.log(calculateVatAmount(100));
console.log(calculateIncomeTaxAmount(200));

//

let userName = "Max";

function greetUser() {
  // let name = userName;
  console.log("Hi " + name);
}

let name = "Anna";

greetUser();
