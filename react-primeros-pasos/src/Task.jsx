import React, { useState } from 'react';
import AddTask from './AddTask';

export default function Task() {
  const todoInitial = [
    { id: 1, name: 'tarea 1', isDone: true },
    { id: 2, name: 'tarea 2', isDone: true },
    { id: 3, name: 'tarea 3', isDone: false },
    { id: 4, name: 'tarea 4', isDone: true },
    { id: 5, name: 'tarea 5', isDone: false },
    { id: 6, name: 'tarea 6', isDone: true },
    { id: 7, name: 'tarea 7', isDone: true },
  ];
  const [arrayTodo, setArrayTodo] = useState(todoInitial);
  const handleArrayTodo = (taskStr) => {
    const newTask = {
      id: arrayTodo.length + 1,
      name: taskStr,
      isDone: false,
    };
    setArrayTodo([...arrayTodo, newTask]);
  };
  return (
    <>
      <h1>Task Form</h1>
      <AddTask handle={handleArrayTodo} />
      <ul>
        {arrayTodo.map((todo) => (
          <li key={todo.id}>
            {todo.id} {todo.name} {todo.isDone ? '✅' : '❌'}
          </li>
        ))}
      </ul>
    </>
  );
}
