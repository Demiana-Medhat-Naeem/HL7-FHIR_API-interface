import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from "./Registration";
import Search from './Search';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />}/> 
        <Route path="/" element={<Search />} />
      </Routes>
    </Router>
    
  );
}

export default App;