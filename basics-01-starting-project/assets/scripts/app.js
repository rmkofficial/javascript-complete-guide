const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserInputNumber() {
  return parseInt(userInput.value);
}

//Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeClac, calcNumber) {
  const calcDescription = `${resultBeforeClac} ${operator} ${calcNumber}`;
  outputResult(calcDescription, currentResult); //from vendor file
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntry.operation);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  const enteredNumber = getUserInputNumber();
  if (
    (calculationType !== "Add" &&
      calculationType !== "Substract" &&
      calculationType !== "Multiply" &&
      calculationType !== "Divide") ||
    enteredNumber === 0 ||
    !enteredNumber
  ) {
    return;
  }

  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === "Add") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "Substract") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "Multiply") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog("Add", initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult("Add");
}

function subtract() {
  calculateResult("Substract");
}

function multiply() {
  calculateResult("Multiply");
}

function divide() {
  calculateResult("Divide");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
