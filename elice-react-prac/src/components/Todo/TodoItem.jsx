import React from "react";
import styles from "../../styles/Todo/TodoItem.module.scss";

const TodoItem = (props) => {
  const { todo, checkFunc, deleteFunc } = props;
  const [checked, setChecked] = React.useState(false);

  return (
    <li
      className={`${styles.item} ${checked ? styles.checked : ""}`}
      key={todo.id}
    >
      <input
        id={`check_${todo.id}`}
        className={styles.check}
        type="checkbox"
        onChange={(event) => {
          setChecked(event.target.checked);
          checkFunc(event.target.checked, todo.id);
        }}
      />
      <label className={styles.label} htmlFor={`check_${todo.id}`}>
        {todo.content}
      </label>
      <span
        className={styles.delete_btn}
        onClick={() => {
          deleteFunc(todo.id);
        }}
      >
        X
      </span>
    </li>
  );
};

export default TodoItem;
