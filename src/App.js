import './App.css';
import Landing from './components/Landing';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
