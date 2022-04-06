import React from "react";
import Todo from "../Todo/Todo";
import "./TodoList.css";

const TodoList = ({ onUpdateTodo, onRemoveTodo, todos, status }) => (
    <div className="todo-list-container">
        <ul className="todo-list">
            {todos.map((todo) => {
                const isAll = status === "all";
                const isCompleted = status === "completed";
                const newProps = {
                    onUpdateTodo: onUpdateTodo,
                    onRemoveTodo: onRemoveTodo,
                    todo: todo,
                    key: todo.id
                };

                if (isAll) {
                    return <Todo {...newProps} />;
                } else if (isCompleted === todo.completed) {
                    return <Todo {...newProps} />;
                }

                return null;
            })}
        </ul>
    </div>
);

export default TodoList;
