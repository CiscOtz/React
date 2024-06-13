import React, { useState } from 'react';
import InsercionDeTareas from './InsercionDeTareas';
import ListaDeTareas from './ListaDeTareas';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [discardedTodos, setDiscardedTodos] = useState([]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text, completed: false }];
    setTodos(newTodos);
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    if (newTodos[index].completed) {
      setCompletedTodos([...completedTodos, newTodos[index]]);
    } else {
      setCompletedTodos(completedTodos.filter((_, i) => i !== index));
    }
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    const discardedTodo = newTodos.splice(index, 1);
    setTodos(newTodos);
    setDiscardedTodos([...discardedTodos, ...discardedTodo]);
  };

  return (
    <div className="app container">
      <h1 className="text-center my-4">Lista de Tareas</h1>
      <InsercionDeTareas addTodo={addTodo} />
      <ListaDeTareas todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
      {/* Renderizar otros componentes según sea necesario */}
    </div>
  );
}

export default App;

