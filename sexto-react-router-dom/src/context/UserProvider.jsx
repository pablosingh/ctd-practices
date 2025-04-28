import React from 'react';
import { UserContext } from './UserContext';

const user = {
  name: 'Pablo',
  lastname: 'Singh',
  email: 'pablo@email.com',
  job: 'FullStack Developer',
};

export const UserProvider = ({ children }) => {
  return <UserContext.Provider value={{ user, country: 'Argentina', currency: 'pesos' }}>{children}</UserContext.Provider>;
};
