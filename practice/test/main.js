fetch("https://elice-server.herokuapp.com/auth/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    id: "id1@gmail.com",
    title: "asdas",
    content: "asddads",
    nickname: "asddsa",
  }),
})
  .then((response) => response.json())
  .then((result) => {
    console.log("결과: ", result);
  });
