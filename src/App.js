import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Route, Routes, useLocation, useNavigate,
} from 'react-router-dom';
import Houses from './pages/Houses';
import Details from './pages/Details';
import AddHouse from './components/AddHouse';
import RemoveHouse from './components/RemoveHouse';
import Reserve from './components/Reserve';
import SplashLogin from './components/SplashLogin';
import SplashSignup from './components/SplashSignup';
import Reservations from './components/Reservations';
import Navbar from './components/NavBar';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const SessionStatus = async () => {
    if (sessionStorage.getItem('cozy_user')) {
      const tempUser = JSON.parse(sessionStorage.getItem('cozy_user'));
      const response = await fetch('http://localhost:3000/api/v1/accounts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: tempUser }),
      });

      const data = await response.json();
      if (data.login) {
        return {
          isLoggedIn: true,
          user: JSON.parse(sessionStorage.getItem('cozy_user')),
        };
      }
      sessionStorage.removeItem('cozy_user');
    }
    return {
      isLoggedIn: false,
      user: {},
    };
  };
  const handleLogout = () => {
    sessionStorage.removeItem('cozy_user');
    navigate('/');
  };

  return (
    <div>
      {location.pathname !== '/' && location.pathname !== '/signup' && <Navbar handleLogout={handleLogout} />}
      <Routes>
        <Route path="/" element={<SplashLogin SessionStatus={SessionStatus} />} />
        <Route path="/signup" element={<SplashSignup SessionStatus={SessionStatus} />} />
        <Route path="/home" element={<Houses />} />
        <Route path="/details/:name" element={<Details />} />
        <Route path="/add" element={<AddHouse />} />
        <Route path="/remove" element={<RemoveHouse />} />
        <Route path="/reserve" element={<Reserve SessionStatus={SessionStatus} />} />
        <Route path="/reservations" element={<Reservations SessionStatus={SessionStatus} />} />
      </Routes>
    </div>
  );
};
export default App;
