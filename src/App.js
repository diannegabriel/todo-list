import { useState } from "react"
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  return (
    <div className="App">
      <header>
        <h1><a href="/">Dianne's Todo List</a></h1>
      </header>
      <Form setInputText={setInputText}/>
      <TodoList inputText={inputText}/>
    </div>
  );
}

export default App;
