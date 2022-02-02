/* eslint-disable array-callback-return */
import React from "react";
import "./Todo.css";
import iconCheck from "../../assets/img/icon/check-purple.png";
import iconTrash from "../../assets/img/icon/trash-purple.png";

const Todo = ({onRemoveTodo, onUpdateTodo, todo}) => {
    const deleteHandler = (e) => {
        e.preventDefault();
        onRemoveTodo(todo.id);
    };

    const isDoneHandler = (e) => {
        e.preventDefault();
        onUpdateTodo(todo);
    };

    const isDoneHandlerDubble = (e) => {
        e.preventDefault();
        onUpdateTodo(todo);
    };

    return (
        <div className="todo">
            <li onClick={isDoneHandlerDubble} className={`todo-item ${todo.completed ? "completed" : ""}`}>{todo.text}</li>
            <button onClick={isDoneHandler} className="todo-item__check">
                <img src={iconCheck} alt="" width="20" height="20" />
            </button>
            <button onClick={deleteHandler} className="todo-item__close">
                <img src={iconTrash} alt="" width="20" height="20" />
            </button>
        </div>
    );
};

export default Todo;
