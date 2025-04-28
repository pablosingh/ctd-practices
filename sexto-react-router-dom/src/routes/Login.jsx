import React, { useContext } from 'react';
import { useForm } from '../hooks/useForm';
import { UserProvider } from '../context/UserProvider';
import { UserContext } from '../context/UserContext';

export const Login = () => {
  const { setUser } = useContext(UserContext);
  const initialForm = {
    name: '',
    lastname: '',
    email: '',
    job: '',
  };
  const { name, lastname, job, email, onInputChange } = useForm(initialForm);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim() == '' || lastname.trim() == '' || job.trim() == '' || email.trim() == '') return;
    setUser({
      name,
      lastname,
      job,
      email,
    });
  };
  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nombre
        </label>
        <input type="text" className="form-control" id="name" name="name" onChange={onInputChange} value={name} />
      </div>
      <div className="mb-3">
        <label htmlFor="lastname" className="form-label">
          Apellido
        </label>
        <input type="text" className="form-control" id="lastname" name="lastname" onChange={onInputChange} value={lastname} />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input type="email" className="form-control" id="email" name="email" onChange={onInputChange} value={email} />
      </div>
      <div className="mb-3">
        <label htmlFor="job" className="form-label">
          Trabajo
        </label>
        <input type="text" className="form-control" id="job" name="job" onChange={onInputChange} value={job} />
      </div>
      <button type="submit" className="btn btn-primary">
        Ingresar
      </button>
    </form>
  );
};
