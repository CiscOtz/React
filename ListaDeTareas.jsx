import React from 'react';
import TodoItem from './TodoItem';

function ListaDeTareas({ todos, toggleComplete, removeTodo }) {
    return (
        <div>
            {todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    index={index}
                    todo={todo}
                    toggleComplete={toggleComplete}
                    removeTodo={removeTodo}
                />
            ))}
        </div>
    );
}

export default ListaDeTareas;
