// async function updatePost(reqUrl, postId, data) {
//   try {
//     if (postId < 0) throw new Error("wrong postId");

//     const res = await fetch(reqUrl + `/${postId}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json; charset=UTF-8",
//       },
//       body: JSON.stringify(data),
//     });
//     return res.json();
//   } catch (e) {
//     return Promise.reject(e);
//   }
// }

// const result = updatePost("https://jsonplaceholder.typicode.com/posts", 10, {
//   title: "example",
//   body: "Hello, world!",
// })
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// async function del(postId) {
//   try {
//     if (post < 0) throw new Error("wrong PostId");
//     const res = await fetch(
//       `https://jsonplaceholder.typicode.com/posts/${postId}`,
//       {
//         method: "DELETE",
//       }
//     );
//     console.log(await res.json());
//   } catch (err) {
//     console.log(err);
//   }
// }

// del();

async function updatePost(postId, data) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      method: "PUT",
      body: JSON.stringify({
        data,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
  return res.json();
}

const result = updatePost(1, { title: "example", body: "Hello, world!" }).then(
  (data) => console.log(data)
);
