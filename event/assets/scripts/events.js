const button = document.querySelector("button");

const buttonClickHandler = (event) => {
  event.target.disabled = true;
  console.log(event);
};

// button.addEventListener("click", buttonClickHandler);
button.addEventListener("mouseenter", buttonClickHandler);

// setTimeout(() => {
//   button.removeEventListener("click", buttonClickHandler);
// }, 2000);
