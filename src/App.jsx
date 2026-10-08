import React, { useState } from 'react';

export default function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    const newTodo = {
      id: crypto.randomUUID(),
      text: 'TODO Item'
    };
    setTodos(prevTodos => [...prevTodos, newTodo]);
  };

  const handleDeleteFirstTodo = () => {
    if (todos.length === 0) return;
    setTodos(prevTodos => prevTodos.slice(1));
  };

  return (
    <main>
      <h1>Lista de Tareas</h1>

      <button onClick={handleAddTodo}>
        Add TODO
      </button>

      <button onClick={handleDeleteFirstTodo}>
        Delete First TODO
      </button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
          </li>
        ))}
      </ul>
    </main>
  );
}