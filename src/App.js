import { useState, useEffect } from "react"

import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList';
import Quote from './components/Quote'
import Error from "./components/Error";

const motivateURL = `https://type.fit/api/quotes`;

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [quote, setQuote] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    const getLocalTodos = () => {
      if (localStorage.getItem('todos') === null) {
        localStorage.setItem('todos', JSON.stringify([]));
      } else {
        let localTodo = JSON.parse(localStorage.getItem("todos"));
        setTodos(localTodo)
      }
    }
    getLocalTodos();
  }, [])

  useEffect(() => {
    const fetchQuote = async () => {
      const result = await fetch(motivateURL)
      result.json().then(json => {
        const randomQuote = Math.floor(Math.random() * json.length)
        if (json[randomQuote].author === null){
          setQuote(json[randomQuote].text)
        } else {
          setQuote(json[randomQuote].text + " — " + json[randomQuote].author)
        }
      })
    }
    fetchQuote();
  }, []);
  useEffect(() => {
    const handleFilter = () => {
      switch(status){
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed === true));
          break;
        case 'incomplete':
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    }
    handleFilter();
  }, [todos, status])

  useEffect(() => {
    const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
    saveLocalTodos();
  }, [todos, status])

  return (
    <div className="App">
      <header>
        <h1><a href="/">MotivaDid</a></h1>
      </header>
      <Quote
        quote={quote}
      />
      <Form 
        inputText={inputText} 
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
        setError={setError}
      />
      <Error 
        error={error}
        inputText={inputText} 
      />
      <TodoList 
        todos={todos} 
        setTodos={setTodos} 
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
