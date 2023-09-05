const button = document.querySelector("button");

const buttonClickHandler = () => {
  alert("Button was clicked!");
};

button.addEventListener("click", buttonClickHandler);

setTimeout(() => {
  button.removeEventListener("click", buttonClickHandler);
}, 2000);
