const defaultResult = 0;
let currentResult = defaultResult;

function getUserInputNumber() {
  return parseInt(userInput.value);
}

function add() {
  const enteredNumber = getUserInputNumber();
  const calcDescription = `${currentResult} + ${enteredNumber}`;
  currentResult = currentResult + enteredNumber;
  outputResult(calcDescription, currentResult);
}

addBtn.addEventListener("click", add);
