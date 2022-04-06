import "./Dashboard.css";
import React, { useState, useEffect } from "react";
import Form from "../Form/Form";
import TodoList from "../TodoList/TodoList";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, set, onValue} from "firebase/database";

function Dashboard() {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");

  const navigate = useNavigate();

  const db = getDatabase();


  const saveTodos = (newTodos) => {
    // localStorage.setItem("todos", JSON.stringify(newTodos));
    
    const userId = localStorage.getItem("userId");
    const db = getDatabase();
    set(ref(db, userId + "/todoData"), 
      newTodos
    );
  };

  const getLocalTodos = () => {
 
    const db = getDatabase();
    
    const userId = localStorage.getItem("userId");

    const todoRef = ref(db, userId + "/todoData");

    onValue(todoRef, (snapshot) => {
      const data = snapshot.val();
      if(snapshot.val() === '') {
        let localData = JSON.parse(localStorage.getItem("todos"));
        setTodos(localData);
      }
      
      setTodos(data ?? []);
    });
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
    newTodos[todoIdnex] = {
      ...newTodos[todoIdnex],
      completed: !todo.completed,
    };
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
      <div className="Dashboard">
        <div className="todo-container">
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

export default Dashboard;
