const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const MemoryStore = require("memorystore")(session);

const UserRouter = require("./routes/user");
const UserAPIRouter = require("./routes/api/user");
const PostRouter = require("./routes/post");
const PostAPIRouter = require("./routes/api/post");

mongoose.connect("mongodb://127.0.0.1:27017/elice", (err) => {
  if (err) console.log("DB 연결 에러 : " + err);
  else console.log("DB 연결 성공");
});

const PORT = 4000;

const app = express();
app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use(
  session({
    secret: "elice", // 아무 값이나 넣어도 됨
    resave: false,
    saveUninitialized: false,
    store: new MemoryStore({ checkPeriod: 10 * 60 * 1000 }),
    cookie: {
      maxAge: 10 * 60 * 1000, // 10분
    },
  })
);

function isAuth(req, res, next) {
  console.log(req.session);
  if (req.session.user) next();
  else res.redirect("/users/login");
}

app.use(express.json());
app.use("/users", isAdmin, UserRouter);
app.use("/api/users", UserAPIRouter);
app.use("/posts", isAuth, PostRouter);
app.use("/api/posts", isAuth, PostAPIRouter);

app.get("/", (req, res) => {
  res.redirect("/posts");
}); 

app.listen(PORT, () => {
  console.log(`listen localhost:${PORT}`);
});
