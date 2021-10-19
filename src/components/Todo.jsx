import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  const handleDelete = (e) => {
    e.preventDefault();
    setTodos(todos.filter(elem => elem.id !== todo.id))
  };
  return (
    <div className="todo">
      <li className="todo-item">
        {text}
      </li>
      <button className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={handleDelete}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  )
};

export default Todo;