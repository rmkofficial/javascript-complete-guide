const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
  const result = num1 + num2;
  alert(`The result is: ${result} `);
}

add(1, 2);
add(5, 9);

currentResult = currentResult + 10;

let calculationDescription = `(  ${currentResult} + 10) * 2`;
let errorMessage = "An error occurred!";

outputResult(currentResult, calculationDescription);
