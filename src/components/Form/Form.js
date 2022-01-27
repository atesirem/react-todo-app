import React, { useState } from "react";
import "./Form.css";

const Form = ({ onAddTodo, onSelectChange }) => {
    const [enteredTodoValue, setEnteredTodoValue] = useState("");

    const todoHandler = (e) => {
        setEnteredTodoValue(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        onAddTodo({ text: enteredTodoValue, completed: false, id: Math.random() * 1000 });
        setEnteredTodoValue("");
    };

    const statusHandler = (e) => {
        e.preventDefault();
        onSelectChange(e.target.value);
    };

    return (
        <form onSubmit={submitTodoHandler}>
            <input type="text" value={enteredTodoValue} onChange={todoHandler} className="todo-input" />
            <button type="submit" className="todo-button">
                Add
            </button>
            <select className="select" onChange={statusHandler}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </form>
    );
};

export default Form;
