import React, { useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';

export const FetchApp = () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const { data, isLoading, error, fetchData } = useFetch();
  const obj = {
    title: 'foo',
    body: 'bar',
    userId: 1,
  };
  const objUpdate = {
    id: 1,
    title: 'foo update',
    body: 'bar update',
    userId: 1,
  };
  useEffect(() => {
    fetchData(url, 'GET');
  }, []);
  return (
    <>
      <h2>FetchApp</h2>
      <button onClick={() => fetchData(url, 'GET')} className="btn btn-primary">
        GET
      </button>
      <button onClick={() => fetchData(url, 'POST', obj)} className="btn btn-primary">
        POST
      </button>
      <button onClick={() => fetchData(`${url}/1`, 'PUT', objUpdate)} className="btn btn-primary">
        PUT
      </button>
      <button onClick={() => fetchData(`${url}/1`, 'DELETE')} className="btn btn-primary">
        DELETE
      </button>
      {isLoading ? (
        <h4>Cargando...</h4>
      ) : error ? (
        <h4>Error: {error}</h4>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Id Usuario</th>
              <th scope="col">Titulo</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.length &&
              data.map((item) => {
                return (
                  <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td>{item.userId}</td>
                    <td>{item.title}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
    </>
  );
};
