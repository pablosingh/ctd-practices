import React from 'react';

const Item = ({ name, isDone }) => (
  <li>
    {name} : {isDone ? '✅' : '❌'}{' '}
  </li>
);

export default function TodoApp() {
  const arrayTodo = [
    { name: 'tarea 1', isDone: true },
    { name: 'tarea 2', isDone: true },
    { name: 'tarea 3', isDone: false },
    { name: 'tarea 4', isDone: true },
    { name: 'tarea 5', isDone: false },
    { name: 'tarea 6', isDone: true },
    { name: 'tarea 7', isDone: true },
  ];
  return (
    <>
      <h1>TodoApp con Array</h1>
      <ul>
        {arrayTodo.map((to, i) => (
          <Item key={i} name={to.name} isDone={to.isDone} />
        ))}
      </ul>
    </>
  );
}
