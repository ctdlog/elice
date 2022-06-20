import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import styles from "../../styles/Todo/Todo.module.scss";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleAddClick = () => {
    if (text) {
      const id =
        todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1;
      const newTodo = {
        id: id,
        isFinish: false,
        content: text,
      };
      setTodoList([...todoList, newTodo]);
      setText("");
    }
  };

  useEffect(() => {
    let isAllFinish = true;
    todoList.forEach((todo) => {
      if (!todo.isFinish) {
        isAllFinish = false;
      }
    });

    if (todoList.length === 0) {
      setMessage("할 일을 추가해주세요.");
    } else if (isAllFinish) {
      setMessage("모든 할 일을 마쳤습니다!");
    } else {
      setMessage("아직 할 일이 남았습니다.");
    }
  }, [todoList]);

  return (
    <div className={styles.container}>
      <div className={styles.input_area}>
        <input value={text} onChange={handleTextChange} />
        <button onClick={handleAddClick}>추가</button>
      </div>
      <div>
        <TodoList todoList={todoList} setTodoList={setTodoList} />
      </div>
      <hr />
      <div className={styles.message}>{message}</div>
    </div>
  );
};

export default Todo;
