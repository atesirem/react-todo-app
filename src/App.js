import './App.css';
import React, {useState, useEffect} from "react"
import Form from './components/Form/Form';
import TodoList from './components/TodoList/TodoList';

function App() {

 

  const [enteredTodoValue, setEnteredTodoValue] = useState('');
  const [enteredTodos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const saveTodos = () => {
      localStorage.setItem('todos', JSON.stringify(enteredTodos))
      
  }
  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let localData = JSON.parse(localStorage.getItem('todos')); 
      setTodos(localData)
    }
  }

  useEffect(() => {
    getLocalTodos()
  }, [])

  useEffect(() => {
    filterHandler();
    saveTodos();
  }, [enteredTodos,status])

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(enteredTodos.filter((todo) => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(enteredTodos.filter((todo) => todo.completed === false))
        break;
      default:
        setFilteredTodos(enteredTodos);
        break;
    }
  }

  

  return (
    <div className="App">
      <div className='form-container'>
        <h1>TODO APP</h1>
        <Form todos={enteredTodos} setTodos={setTodos} enteredTodoValue={enteredTodoValue} setEnteredTodoValue={setEnteredTodoValue} setStatus={setStatus} ></Form>
        <TodoList status={status} todos={enteredTodos} setTodos={setTodos} filteredTodos={filteredTodos}></TodoList>
      </div>
    </div>
  );
}

export default App;
