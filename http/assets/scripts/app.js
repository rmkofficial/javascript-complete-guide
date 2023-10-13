const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

xhr.responseType = "json";

xhr.onload = () => {
  const listOfPosts = xhr.response;
  console.log(listOfPosts);
  for (const post of listOfPosts) {
    const postEL = document.importNode(postTemplate.content, true);
    postEL.querySelector("h2").textContent = post.title.toUpperCase();
    postEL.querySelector("p").textContent = post.body;
    listElement.append(postEL);
  }
};

xhr.send();
