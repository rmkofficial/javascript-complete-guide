const defaultResult = 0;
let currentResult = defaultResult;

// Gets input from input field
function getUserInputNumber() {
  return parseInt(userInput.value);
}


//Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeClac, calcNumber) {
  const calcDescription = `${resultBeforeClac} ${operator} ${calcNumber}`;
  outputResult(calcDescription, currentResult); //from vendor file
}

function add() {
  const enteredNumber = getUserInputNumber();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
}

function subtract() {
  const enteredNumber = getUserInputNumber();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserInputNumber();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWriteOutput("*", initialResult, enteredNumber);
}

function divide() {
  const enteredNumber = getUserInputNumber();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
