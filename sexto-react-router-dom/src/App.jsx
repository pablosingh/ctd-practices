import React from 'react';
import { NavBar } from './components/NavBar';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './routes/Home';
import { About } from './routes/About';
import { Contact } from './routes/Contact';
import { UserProvider } from './context/UserProvider';
import { Login } from './routes/Login';

const App = () => {
  return (
    <UserProvider>
      <h2>App de Navegacion</h2>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/*" element={<Navigate to="/" />}></Route>
      </Routes>
    </UserProvider>
  );
};

export default App;
