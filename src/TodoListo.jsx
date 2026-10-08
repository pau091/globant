import React, { useState } from 'react';

export default function TodoList() {
  // Estado para la lista de tareas
  const [todos, setTodos] = useState([]);

  // 1. Agregar tarea manteniendo la inmutabilidad
  const handleAddTodo = () => {
    const newTodo = {
      // Clave única usando crypto.randomUUID() para evitar usar el índice del arreglo
      id: crypto.randomUUID(),
      text: 'TODO Item' // Texto genérico requerido por las especificaciones
    };

    // Copiamos el arreglo previo y agregamos el nuevo elemento al final
    setTodos(prevTodos => [...prevTodos, newTodo]);
  };

  // 2. Eliminar la primera (más antigua) tarea manteniendo la inmutabilidad
  const handleDeleteFirstTodo = () => {
    // Si la lista está vacía, no hace nada
    if (todos.length === 0) return;

    // slice(1) devuelve un nuevo arreglo omitiendo el primer elemento (índice 0)
    setTodos(prevTodos => prevTodos.slice(1));
  };

  return (
    <main>
      <h1>Lista de Tareas</h1>

      {/* Botón para agregar tareas genéricas */}
      <button onClick={handleAddTodo}>
        Add TODO
      </button>

      {/* Botón para eliminar la primera tarea */}
      <button onClick={handleDeleteFirstTodo}>
        Delete First TODO
      </button>

      {/* Renderizado semántico de la lista de tareas */}
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