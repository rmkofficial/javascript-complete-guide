function showAlert() {
  alert("This is an alert!");
}

function showNameAlert(name) {
  alert(`Hello ${name} !`);
}

showAlert();
showNameAlert("Mert");

function combineStrings(str1, str2, str3) {
  return str1 + str2 + str3;
}

const combinedString = combineStrings("Hello, ", "World", "!");
alert(combinedString);

const task3Element = document.getElementById("task-3");
task3Element.addEventListener("click", showAlert);
