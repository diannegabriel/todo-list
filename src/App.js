import { useState, useEffect } from "react"

import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList';
import Quote from './components/Quote'

const motivateURL = `https://type.fit/api/quotes`;

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [quote, setQuote] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(motivateURL)
      result.json().then(json => {
        // console.log(json[0].text)
        // console.log(json[0].author)
        const randomQuote = Math.floor(Math.random() * json.length)
        if (!json[randomQuote].author){
          setQuote(json[randomQuote].text)
        }
        setQuote(json[randomQuote].text + " — " + json[randomQuote].author)
      })
    }
    fetchData();
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
  return (
    <div className="App">
      <header>
        <h1><a href="/">MotivaDo</a></h1>
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
        error={error}
        setError={setError}
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
