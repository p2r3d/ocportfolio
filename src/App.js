import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';

 
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/project/:id" element={<Project />} />
    </Routes>      
  )
}

export default App;
