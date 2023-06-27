import { useState, useEffect } from "react"

import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList';

const motivateURL = `https://type.fit/api/quotes`;

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [quote, setQuote] = useState()
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(motivateURL)
      result.json().then(json => {
        console.log(json)
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
      <Form 
        inputText={inputText} 
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
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
