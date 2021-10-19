import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos }) => {
  const handleInputText = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const handleTodoSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { 
        id: Math.random()*1000,
        text: inputText,
        completed: false
      }
    ]);
  };
  return (
    <form>
      <input onChange={handleInputText} type="text" className="todo-input" />
      <button onClick={handleTodoSubmit} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;