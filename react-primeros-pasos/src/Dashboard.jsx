import React from 'react';

export default function Dashboard() {
  const stateLogged = true;
  return (
    <>
      <h1>Dashboard</h1>
      <h3>Usuario logueado ? {stateLogged ? <p>Si esta logueado</p> : <p>No esta logueado</p>}</h3>
    </>
  );
}
