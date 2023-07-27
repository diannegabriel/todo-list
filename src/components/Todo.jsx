import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  const handleComplete = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  const handleDelete = () => {
    setTodos(todos.filter((elem) => elem.id !== todo.id));
  };
  return (
    <div className="todo">
      <li onClick={handleComplete} className="todo-item">
        <a className={`${todo.completed ? "completed btn" : ""}`}>
          {text}
          <svg
            className={`${todo.completed ? "stroke-active" : "stroke"}`}
            viewBox="0 0 154 13"
          >
            <use href="#line"></use>
          </svg>
        </a>
      </li>
      <div className="todo-buttons">
        <button className="erase-button" onClick={handleDelete}>
          <i className="fas fa-eraser"></i>
        </button>
      </div>
    </div>
  );
};

export default Todo;
