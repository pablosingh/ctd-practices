import React from 'react';

const Item = ({ name, isDone }) => {
  return (
    <li>
      {name} : {isDone ? '✅' : '❌'}
    </li>
  );
};

export default function Todo() {
  return (
    <>
      <h1>Todo App</h1>
      <ul>
        <Item name="Tarea 1" isDone={true} />
        <Item name="Tarea 2" isDone={true} />
        <Item name="Tarea 3" isDone={true} />
        <Item name="Tarea 4" isDone={false} />
        <Item name="Tarea 5" isDone={true} />
      </ul>
    </>
  );
}
