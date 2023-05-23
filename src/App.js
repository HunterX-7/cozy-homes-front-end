import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Route, Routes, useLocation, useNavigate,
} from 'react-router-dom';
import Houses from './pages/Houses';
import Details from './pages/Details';
import AddHouse from './components/AddHouse';
import RemoveHouse from './components/RemoveHouse';
import SplashLogin from './components/SplashLogin';
import SplashSignup from './components/SplashSignup';
import Reservations from './components/Reservations';
import AddReservation from './components/Reserve';
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';

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
    <>
      <div className="d-lg-none p-0">
        {location.pathname !== '/' && location.pathname !== '/signup' && <NavBar handleLogout={handleLogout} />}
      </div>
      <div className="col-lg-3 d-none d-lg-block p-0">
        {location.pathname !== '/' && location.pathname !== '/signup' && location.pathname !== '/reserve' && location.pathname !== '/add' && <SideBar handleLogout={handleLogout} />}
      </div>
      <Routes>
        <Route path="/" element={<SplashLogin SessionStatus={SessionStatus} />} />
        <Route path="/signup" element={<SplashSignup SessionStatus={SessionStatus} />} />
        <Route path="/home" element={<Houses SessionStatus={SessionStatus} />} />
        <Route path="/details/:name" element={<Details />} />
        <Route path="/add" element={<AddHouse SessionStatus={SessionStatus} />} />
        <Route path="/remove" element={<RemoveHouse SessionStatus={SessionStatus} />} />
        <Route path="/reserve" element={<AddReservation SessionStatus={SessionStatus} />} />
        <Route path="/reservations" element={<Reservations SessionStatus={SessionStatus} />} />
      </Routes>
    </>
  );
};
export default App;
