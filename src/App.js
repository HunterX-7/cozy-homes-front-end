import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Houses from './components/Houses';


const App = () => (
  <Routes>
    <Route path="/" element={<Houses />} />
  </Routes>
);

export default App;
