import React, { useState } from 'react';
import { UserContext } from './UserContext';

// const user = {
//   name: 'Pablo',
//   lastname: 'Singh',
//   email: 'pablo@email.com',
//   job: 'FullStack Developer',
// };

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  return <UserContext.Provider value={{ user, setUser, country: 'Argentina', currency: 'pesos' }}>{children}</UserContext.Provider>;
};
