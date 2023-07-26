import React, { useState, useEffect } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Error from "./Error";

const Clipboard = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [error, setError] = useState(false);

  // Functions as the "grabber" of the todos from local storage
  useEffect(() => {
    const getLocalTodos = () => {
      if (localStorage.getItem("todos") === null) {
        localStorage.setItem("todos", JSON.stringify([]));
      } else {
        let localTodo = JSON.parse(localStorage.getItem("todos"));
        setTodos(localTodo);
      }
    };
    getLocalTodos();
  }, []);

  useEffect(() => {
    const handleFilter = () => {
      switch (status) {
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "incomplete":
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };
    handleFilter();
  }, [todos, status]);

  useEffect(() => {
    const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    };
    saveLocalTodos();
  }, [todos, status]);

  return (
    <div className="clipboard">
      <div className="board">
        <div className="clip"></div>
        <div className="paper">
          <p>THIS IS THE CLIPBOARD</p>
          <Error error={error} inputText={inputText} />
          <Form
            inputText={inputText}
            setInputText={setInputText}
            todos={todos}
            setTodos={setTodos}
            setStatus={setStatus}
            setError={setError}
          />
          <TodoList
            todos={todos}
            setTodos={setTodos}
            filteredTodos={filteredTodos}
          />
        </div>
      </div>
    </div>
  );
};

export default Clipboard;
