import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'

import Home from './views/Home';
import Task from './views/Task';
import Sync from './views/Sync';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/task' element={ <Task /> } />
        <Route path='/task/:id' element={ <Task /> } />
        <Route path='/sync' element={ <Sync /> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
