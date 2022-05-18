const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://127.0.0.1:27017/elice",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) console.log("연결 에러");
    else console.log("연결 성공");
  }
);

// Define Schemes
const todoSchema = new mongoose.Schema(
  {
    todoid: { type: Number, required: true, unique: true },
    content: { type: String, required: true },
    completed: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model("Todo", todoSchema);

const todo = new Todo({
  todoid: 1,
  content: "MongoDB",
  completed: false,
});

todo.save().then(() => console.log("Saved successfully"));

// 전체 가져오기
const all = Todo.find({});

// 특정 ID 가져오기
const todo1 = Todo.findOne({
  todoid: 1,
});

Todo.updateOne({ todoid: 1 }, { content: "Hello" }, { new: true });

Todo.deleteOne({
  todoid: 1,
});
