const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");

function sendHttpRequest(method, url) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);

    xhr.responseType = "json";

    xhr.onload = () => {
      resolve(xhr.response);
    };

    xhr.send();
  });
  return promise;
}

async function fetchPosts() {
  const responseData = await sendHttpRequest(
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  );

  const listOfPosts = responseData;
  for (const post of listOfPosts) {
    const postEL = document.importNode(postTemplate.content, true);
    postEL.querySelector("h2").textContent = post.title.toUpperCase();
    postEL.querySelector("p").textContent = post.body;
    listElement.append(postEL);
  }
}

fetchPosts();