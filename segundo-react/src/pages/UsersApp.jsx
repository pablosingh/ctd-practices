import React, { useState } from 'react';
import FetchList from '../components/FetchList';

export default function UsersApp() {
  const [endpoint, setEndpoint] = useState('users');
  const handleEndpoint = () => {
    endpoint == 'users' ? setEndpoint('comments') : setEndpoint('users');
  };
  return (
    <>
      <h1>Lista:</h1>
      <button onClick={handleEndpoint}>Endpoint</button>
      <FetchList endpoint={endpoint} />
    </>
  );
}
