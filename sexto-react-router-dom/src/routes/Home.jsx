import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const Home = () => {
  const { user, country, currency } = useContext(UserContext);
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Email</th>
            <th scope="col">Profesion</th>
            <th scope="col">Pais</th>
            <th scope="col">Moneda</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user?.name}</td>
            <td>{user?.lastname}</td>
            <td>{user?.email}</td>
            <td>{user?.job}</td>
            <td>{country}</td>
            <td>{currency}</td>
          </tr>
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={() => console.log(user, country)}>
        user
      </button>
    </>
  );
};
