function randomIntBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomIntBetween(1, 10));

function productDescription(strings, productName, productPrice) {
  return { name: productName, price: productPrice };
}

const prodName = "JavaScript Course";
const prodPrice = 29.99;

const productOutput = productDescription`This product (${prodName}) is ${prodPrice}.`;
console.log(productOutput);
