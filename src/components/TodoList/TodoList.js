import React from "react";
import Todo from "../Todo/Todo";
import "./TodoList.css";

const TodoList = ({ onUpdateTodo, onRemoveTodo, todos, status }) => (
    <div className="todo-container">
        <ul className="todo-list">
            {todos.map((todo) => {
                const isAll = status === "all";
                const isCompleted = status === "completed";
                const newPorps = {
                    onUpdateTodo: onUpdateTodo,
                    onRemoveTodo: onRemoveTodo,
                    todo: todo,
                    key: todo.id
                };

                if (isAll) {
                    return <Todo {...newPorps} />;
                } else if (isCompleted === todo.completed) {
                    return <Todo {...newPorps} />;
                }

                return null;
            })}
        </ul>
    </div>
);

export default TodoList;
