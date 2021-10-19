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
    }))
  }
  const handleDelete = () => {
    setTodos(todos.filter(elem => elem.id !== todo.id))
  };
  return (
    <div className="todo">
      <li className="todo-item">
        {text}
      </li>
      <button className="complete-btn" onClick={handleComplete}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={handleDelete}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  )
};

export default Todo;