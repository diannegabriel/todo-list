import React from "react";

const Form = ({
  inputText,
  setInputText,
  todos,
  setTodos,
  setStatus,
  setError,
}) => {
  const handleInputText = (e) => {
    setInputText(e.target.value);
  };
  const handleTodoSubmit = (e) => {
    e.preventDefault();
    if (inputText.length === 0) {
      setError(true);
    } else {
      setTodos([
        ...todos,
        {
          id: todos.length,
          text: inputText,
          completed: false,
        },
      ]);
      setInputText("");
      setError(false);
    }
  };
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form>
      <div className="text-input">
        <input
          onChange={handleInputText}
          value={inputText}
          type="text"
          className="todo-input"
          maxLength="100"
          placeholder="Write your task here"
        />
        <button
          onClick={handleTodoSubmit}
          className="todo-button"
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </button>
      </div>
      <div className="select">
        <select
          onChange={handleStatusChange}
          name="todos"
          className="filter-todo"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
