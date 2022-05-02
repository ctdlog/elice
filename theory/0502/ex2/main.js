function parsingPostIds(posts) {
  return new Promise((reslove, reject) => {
    const postsIds = [];
    posts.map((post) => {
      postsIds.push(post.id);
    });
    reslove(postsIds);
  });
}

function displayPost(post) {
  return new Promise((resolve, reject) => {
    try {
      let html = `<h2>${post.title}</h2>`;
      html += `<p>${post.body}</p>`;

      document.getElementById("posts").innerHTML = html;

      resolve();
    } catch (err) {
      reject(err);
    }
  });
}

function getPost(id) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => response.json())
    .then(displayPost)
    .catch((err) => console.log(err));
}

function displayBtns(postsIds) {
  postsIds.map((id) => {
    let html = `<button onclick="getPost(${id})">${id}</button>`;
    document.getElementById("btns").innerHTML += html;
  });
}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then(parsingPostIds)
  .then(displayBtns)
  .catch((err) => console.log(err));
