const express = require("express");
const mongoose = require("mongoose");

const PostRouter = require("./routes/post");

mongoose.connect("mongodb://127.0.0.1:27017/elice", (err) => {
  if (err) console.log("DB 연결 에러 : " + err);
  else console.log("DB 연결 성공");
});

const PORT = 3000;

const app = express();
app.set("view engine", "pug");

app.use("/posts", PostRouter);

app.listen(PORT, () => {
  console.log(`localhost:${PORT}`);
});
