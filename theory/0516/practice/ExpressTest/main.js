const express = require("express");
const userData = require("./user_data");

const app = express();
const port = 3000;

const router = express.Router();

router.get("/users", (req, res) => {
  res.json(userData);
});

router.post("/users", (req, res) => {
  const inputData = req.body;
  inputData["id"] = userData.length + 1;

  res.json(inputData);
});

// REST API
// /users/4
//
// path parameter : req.params
// query parameter : req.query   // ?a=1&b=2
// body parameter : req.body     // post data
//
// fetch('url', {
//     body: JSON.stringify(data);
// })

router.get("/posts/:id", (req, res) => {
  const id = req.params.id;
  const inputData = req.body;
  res.json();
});

router.put("/posts/:id", (req, res) => {
  const id = req.params.id;
  const inputData = req.body;
  inputData["id"] = id;
  res.json(inputData);
});

router.delete("/posts/:id", (req, res) => {
  const id = req.params.id;

  res.json({
    id: id,
  });
});

// body-parser 모듈이 4.16 버전부터 내장으로 들어감
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
