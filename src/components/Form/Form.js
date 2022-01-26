import React from "react";
import './Form.css';


const Form = (props) => {
  const todoHandler = (e) => {
    props.setEnteredTodoValue(e.target.value);
  }
  const submitTodoHandler = (e) => {
    e.preventDefault();
    props.setTodos([...props.todos, {text: props.enteredTodoValue, completed: false, id: Math.random() * 1000 }])
    props.setEnteredTodoValue('');
  }
  const statusHandler = (e) => {
    e.preventDefault();
    props.setStatus(e.target.value)
  }
  return (
    <form >
      <input type="text" value={props.enteredTodoValue} onChange={todoHandler} className="todo-input" />
      <button type="submit" onClick={submitTodoHandler} className="todo-button">Add</button>
      <select className="select" onChange={statusHandler}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </form>
  );
}


export default Form;