import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import {Routes, Route} from 'react-router-dom';
import Pokemon from './pages/Pokemon';

function App() {
  if(!localStorage.getItem('email')) return <Login />
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Pokemon/:pokemonId' element={<Pokemon />} />
    </Routes>
  );
}

export default App;
