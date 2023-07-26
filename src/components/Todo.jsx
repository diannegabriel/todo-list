import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  const handleComplete = () => {
    setTodos(todos.map((item) => {
      if (item.id === todo.id) {
        return {
          ...item,
          completed: !item.completed
        }
      }
      return item;
    }));
  }
  const handleDelete = () => {
    setTodos(todos.filter(elem => elem.id !== todo.id))
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ''}`} onClick={handleComplete}>
        {text}
      </li>
      <div className="todo-buttons">
        {/* <button className="complete-btn">
          <i className="fas fa-check"></i>
        </button> */}
        <button className="trash-button" onClick={handleDelete}>
          <i className="fas fa-eraser"></i>
        </button>
      </div>
    </div>
  )
};

export default Todo;