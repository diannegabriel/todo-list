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
        id: todos.length,
        text: inputText,
        completed: false
      }
    ]);
    setInputText('');
  };
  return (
    <form>
      <input onChange={handleInputText} value={inputText} type="text" className="todo-input" />
      <button onClick={handleTodoSubmit} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Incomplete</option>
        </select>
      </div>
    </form>
  );
};

export default Form;