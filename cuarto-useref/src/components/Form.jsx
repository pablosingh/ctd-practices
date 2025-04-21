import React, { useEffect, useRef } from 'react';
import { useForm } from '../hooks/useForm';

export const Form = () => {
  const initialForm = {
    email: '',
    password: '',
  };
  const { email, password, onInputChange } = useForm(initialForm);
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
  };
  const focusRef = useRef();
  useEffect(() => {
    focusRef.current.focus();
  }, []);
  return (
    <>
      <h1>Form</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input ref={focusRef} value={email} type="email" className="form-control" id="email" name="email" onChange={onInputChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input value={password} type="password" className="form-control" id="password" name="password" onChange={onInputChange} />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </>
  );
};
