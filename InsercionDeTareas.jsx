import React, { useState } from 'react';

function InsercionDeTareas({ addTodo }) {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('');
    };

    return (
        <form onSubmit={handleSubmit} className="form-inline my-4">
            <input
                type="text"
                className="form-control mr-2"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">Agregar Tarea</button>
        </form>
    );
}

export default InsercionDeTareas;
