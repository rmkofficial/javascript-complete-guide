const button = document.querySelector("button");
const form = document.querySelector("form");
const div = document.querySelector("div");

// const buttonClickHandler = (event) => {
//   event.target.disabled = true;
//   console.log(event);
// };

// button.addEventListener("click", buttonClickHandler);
// button.addEventListener("mouseenter", buttonClickHandler);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formInputs = event.target.querySelectorAll("input");
  formInputs.forEach((input) => {
    console.log(input.value);
  });
});

// setTimeout(() => {
//   button.removeEventListener("click", buttonClickHandler);
// }, 2000);

div.addEventListener("click", (event) => {
  console.log("CLICKED DIV");
  console.log(event);
});

button.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("CLICKED BUTTON");
  console.log(event);
});
