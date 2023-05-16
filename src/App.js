import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Houses from './pages/Houses';
import Details from './pages/Details';
import AddHouse from './components/AddHouse';
import RemoveHouse from './components/RemoveHouse';
import Reserve from './components/Reserve';

const App = () => (
  <Routes>
    <Route path="/" element={<Houses />} />
    <Route path="/details/:name" element={<Details />} />
    <Route path="/add" element={<AddHouse />} />
    <Route path="/remove" element={<RemoveHouse />} />
    <Route path="/reserve" element={<Reserve />} />
    <Route path="/*" element={<Houses />} />
  </Routes>
);

export default App;
