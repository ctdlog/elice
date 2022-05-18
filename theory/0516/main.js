// const express = require("express");

// const app = express();

// console.log(app);

const obj = {
  name: "hello",
};

const fs = require("fs");

fs.writeFile("data.json", JSON.stringify(obj), "UTF-8", (err) => {
  if (err) console.log("에러 발생", err);
  else {
    const newObj = require("./data.json");
    console.log(newObj);
  }
});
