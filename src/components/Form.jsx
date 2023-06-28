import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos, setStatus, error, setError }) => {
  const handleInputText = (e) => {
    setInputText(e.target.value);
  };
  const handleTodoSubmit = (e) => {
    e.preventDefault();
    if (inputText.length === 0) {
      console.log("Error!")
      setError(true)
    } else {
      setTodos([
        ...todos,
        { 
          id: todos.length,
          text: inputText,
          completed: false
        }
      ]);
      setInputText('');
    }
  };
  const handleStatusChange = (e) => {
    setStatus(e.target.value)
  }
  return (
    <form>
      <input onChange={handleInputText} value={inputText} type="text" className="todo-input"/>
      <button onClick={handleTodoSubmit} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={handleStatusChange} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
      <div className="error-container">
        {error&&inputText.length === 0?
          <label>Please add a thing to do</label>:""
        }
      </div>
    </form>
  );
};

export default Form;