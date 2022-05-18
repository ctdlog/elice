const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// const userData = require("./users");

const router = express.Router();
const app = express();
const port = 3000;

mongoose.connect(
  "mongodb://127.0.0.1:27017/elice",
  {
    useNewUrlParser: true,
  },
  (err) => {
    if (err) console.log(err);
    else console.log("연결 성공");
  }
);

// Define Schemes
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
});

const UsersModel = mongoose.model("newUsers", userSchema);

app.get("/users", (req, res, next) => {
  async function findUsers() {
    const users = await UsersModel.find({});
    res.json(users);
  }
  findUsers();
});

app.post("/users", (req, res) => {
  const newUserData = req.body;
  const newUser = new UsersModel(newUserData);
  newUser.save().then(() => res.send("saved!"));
});

// router.get("/users", (req, res) => {
//   res.json(userData);
// });

// router.post("/users", (req, res) => {
//   const inputData = req.body;
//   inputData["id"] = userData.length + 1;

//   res.json(inputData);
// });

// router.put("/users/:id", (req, res) => {
//   const id = req.params.id;
//   const inputData = req.body;
//   inputData["id"] = id;

//   res.json(inputData);
// });

// router.delete("/users/:id", (req, res) => {
//   const id = req.params.id;

//   res.json({
//     message: `${id}가 삭제되었습니다.`,
//   });
// });

// 요청이 들어오면
// 1번
app.use(cors());
// 2번
app.use(express.json()); // body-parser 내장되어서
app.use(router);

app.listen(port, () => {
  console.log(`localhost:${port}`);
});
