import React from 'react';
import './styles/App.css';
import Sidebar from './components/sidebar.js';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Account from './pages/Account';
import Settings from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/account' element={<Account/>}/>
            <Route path='/settings' element={<Settings/>}/>
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
