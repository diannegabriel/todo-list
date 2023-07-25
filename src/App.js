import { useState, useEffect } from "react";

import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Quote from "./components/Quote";
import Error from "./components/Error";
import Clipboard from "./components/Clipboard";

const motivateURL = `https://type.fit/api/quotes`;

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [quote, setQuote] = useState("");
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

  // Functions as the quote generator
  useEffect(() => {
    const fetchQuote = async () => {
      const result = await fetch(motivateURL);
      result.json().then((json) => {
        const randomQuote = Math.floor(Math.random() * json.length);
        if (json[randomQuote].author === null) {
          setQuote(json[randomQuote].text);
        } else {
          setQuote(
            json[randomQuote].text +
              " — " +
              json[randomQuote].author.split(",")[0]
          );
        }
      });
    };
    fetchQuote();
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
    <main className="App">
      <header>
        <h1>MotivaDid</h1>
      </header>
      <section>
        <article>
          <Error error={error} inputText={inputText} />
          <Clipboard />
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
        </article>
        <Quote quote={quote} />
      </section>
    </main>
  );
}

export default App;
