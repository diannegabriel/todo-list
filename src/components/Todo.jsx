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
    <>
      <svg id="stroke" xmlns="http://www.w3.org/2000/svg" width="0" height="0">
        <defs>
          <path
            id="line"
            d="M2 2c49.7 2.6 100 3.1 150 1.7-46.5 2-93 4.4-139.2 7.3 45.2-1.5 90.6-1.8 135.8-.6"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            vector-effect="non-scaling-stroke"
          />
        </defs>
      </svg>
      <div className="todo">
        <li onClick={handleComplete}>
          <a className={`todo-item ${todo.completed ? "completed btn" : ""}`}>
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
    </>
  );
};

export default Todo;
