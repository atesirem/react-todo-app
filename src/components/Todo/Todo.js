/* eslint-disable array-callback-return */
import React from "react";
import "./Todo.css";
import iconCheck from "../../assets/img/icon/check.png";
import iconTrash from "../../assets/img/icon/trash.png";

const Todo = (props) => {
    const deleteHandler = (e) => {
        e.preventDefault();
        props.onRemoveTodo(props.todo.id);
    };

    const isDoneHandler = (e) => {
        e.preventDefault();
        props.onUpdateTodo(props.todo);
    };

    return (
        <div className="todo">
            <li className={`todo-item ${props.todo.completed ? "completed" : ""}`}>{props.todo.text}</li>
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
