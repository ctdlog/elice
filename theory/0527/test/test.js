const express = require("express");

const app = express();
app.set("view engine", "pug");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  // DB에서 post 정보를 가져옴
  const posts = [{
    post_id: 2,
    title: "Hello, world",
    writer: "레오",
    createdAt: "2022-05-23",
    hit: 4345,
  }, {
    post_id: 1,
    title: "안녕하세요",
    writer: "수니",
    createdAt: "2022-05-23",
    hit: 2423,
  }]

  res.render("ex1", {title: "Hello", posts});
});

app.listen(3000, () => {
  console.log("localhost:3000");
})