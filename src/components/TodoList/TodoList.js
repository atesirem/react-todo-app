import React from "react";
import Todo from "../Todo/Todo";
import "./TodoList.css";

const TodoList = ({setTodos,todos,filteredTodos}) => {

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo setTodos={setTodos} todos={todos} todo={todo} id={todo.id} key={todo.id} />
        ))}
      </ul>
    </div>
  )
}


export default TodoList;