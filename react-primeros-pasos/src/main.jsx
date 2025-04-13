import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import EventOne from './EventOne.jsx';
import EventScroll from './EventScroll.jsx';
import Count from './Count.jsx';
import Dashboard from './Dashboard.jsx';
import Todo from './Todo.jsx';
import TodoApp from './TodoApp.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App titulo="Este es un titulo" subtitulo={123} /> */}
    {/* <EventOne /> */}
    {/* <EventScroll /> */}
    {/* <Count /> */}
    {/* <Dashboard /> */}
    {/* <Todo /> */}
    <TodoApp />
  </StrictMode>
);
