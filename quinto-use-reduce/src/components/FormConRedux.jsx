import React, { useReducer } from 'react';
import { useForm } from '../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';

export const FormConRedux = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { todoInput, onInputChange } = useForm({ todo: '' });
  const addTask = (event) => {
    event.preventDefault();
    if (todoInput.trim() == '') return;
    const newTodo = {
      id: new Date().getTime(),
      name: todoInput,
      done: false,
    };
    const addTodo = {
      type: '[TODO]: Add task',
      payload: newTodo,
    };
    console.log(todoInput);
    dispatch(addTodo);
  };
  const finishTask = (id) => {
    console.log(id);
    const editTodo = {
      type: '[TODO]: finish task',
      payload: id,
    };
    dispatch(editTodo);
  };
  const deleteTask = (id) => {
    const deleteTask = {
      type: '[TODO]: Delete task',
      payload: id,
    };
    dispatch(deleteTask);
  };
  const deleteAll = () => {
    dispatch({
      type: '[TODO]: Delete All',
      payload: null,
    });
  };
  return (
    <>
      <form onSubmit={addTask}>
        <div className="form-group">
          <label htmlFor="todoInput">Tarea</label>
          <input type="text" className="form-control" id="todoInput" placeholder="Tarea" name="todoInput" onChange={onInputChange} />
        </div>
        <button type="submit" className="btn btn-primary m-1">
          Agregar Tarea
        </button>
        <button type="button" className="btn btn-danger" onClick={() => deleteAll()}>
          Borrar Todas las Tareas
        </button>
      </form>
      <button className="btn btn-info" onClick={() => console.log(state)}>
        Estado
      </button>
      <ul className="list-group">
        {state?.map((todo) => {
          return (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={todo.id}>
              <span>{todo.name}</span>
              <input type="checkbox" value={todo.done} onChange={() => finishTask(todo.id)} />
              <button className="btn btn-danger" onClick={() => deleteTask(todo.id)}>
                Borrar
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
