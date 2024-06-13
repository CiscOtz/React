import React from 'react';

function TodoItem({ todo, index, toggleComplete, removeTodo }) {
    return (
        <div className="todo-item d-flex justify-content-between align-items-center my-2 p-2 border">
            <span style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
                {todo.text}
            </span>
        <div>
                <button className="btn btn-success btn-sm mx-1" onClick={() => toggleComplete(index)}>Completar</button>
                <button className="btn btn-danger btn-sm mx-1" onClick={() => removeTodo(index)}>Eliminar</button>
        </div>
    </div>
    );
}

export default TodoItem;
