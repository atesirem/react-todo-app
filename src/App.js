import "./App.css";
import React, { useState, useEffect } from "react";
import Form from "./components/Form/Form";
import TodoList from "./components/TodoList/TodoList";

function App() {
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");

    const saveTodos = (newTodos) => {
        localStorage.setItem("todos", JSON.stringify(newTodos));
    };

    const getLocalTodos = () => {
        if (localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify([]));
        } else {
            let localData = JSON.parse(localStorage.getItem("todos"));
            setTodos(localData);
        }
    };

    const handleSelectChange = (newValue) => {
        setStatus(newValue);
        saveTodos(todos);
    };

    const handleAddTodo = (newTodo) => {
        const newTodos = [...todos, newTodo];
        setTodos(newTodos);
        saveTodos(newTodos);
    };

    const handleUpdateTodo = (todo) => {
        const todoIdnex = todos.findIndex((item) => item.id === todo.id);
        const newTodos = [...todos];
        newTodos[todoIdnex] = { ...newTodos[todoIdnex], completed: !todo.completed };
        setTodos(newTodos);
        saveTodos(newTodos);
        getLocalTodos();
    };

    const handleRemoveTodo = (todoId) => {
        const newTodos = todos.filter((el) => el.id !== todoId);
        setTodos(newTodos);
        saveTodos(newTodos);
        getLocalTodos();
    };

    useEffect(() => {
        getLocalTodos();
    }, []);

    return (
        <div className="App">
            <div className="form-container">
                <h1>TODO APP</h1>
                <Form onAddTodo={handleAddTodo} onSelectChange={handleSelectChange} />
                <TodoList
                    status={status}
                    todos={todos}
                    onUpdateTodo={handleUpdateTodo}
                    onRemoveTodo={handleRemoveTodo}
                />
            </div>
        </div>
    );
}

export default App;
