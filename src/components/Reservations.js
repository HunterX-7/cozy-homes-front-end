import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { func } from 'prop-types';
import { fetchReservation } from '../redux/reservationSlice';
import ReservationsList from './ReservationsList';
import reservationLogo from './images/reservation.png';
import './stylesheets/reservations.css';

const Reservations = (props) => {
  const { SessionStatus } = props;
  const reserves = useSelector((state) => state.reservation.reservation);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const { isLoggedIn, user } = await SessionStatus();
      if (isLoggedIn) {
        dispatch(fetchReservation(user));
      } else {
        navigate('/');
      }
    })();
  }, [dispatch, SessionStatus, navigate]);

  return (

    <div className="container col-lg-8 p-0">
      <div className="col-12">
        <div className="box" />
      </div>
      <div className="d-none d-lg-block col-12">
        <div className="box" />
      </div>
      <div className="">
        <table className="table table-striped table-sm table-hover">
          <thead>
            <tr className="table-header">
              <th colSpan="4">
                <img src={reservationLogo} alt="Reservation Logo" className="w-25" />
              </th>
            </tr>
            <tr>
              <th className="title-table">Name</th>
              <th className="title-table">House</th>
              <th className="title-table">Start Date</th>
              <th className="title-table">End Date</th>
            </tr>
          </thead>
          <ReservationsList
            ReservationsData={reserves}
          />
        </table>
      </div>

    </div>

  );
};

export default Reservations;

Reservations.propTypes = {
  SessionStatus: func.isRequired,
};
