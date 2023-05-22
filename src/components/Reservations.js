import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { func } from 'prop-types';
import { fetchReservation } from '../redux/reservationSlice';
import ReservationsList from './ReservationsList';

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

    <div className="col-lg-8 p-0">
      <div className="col-12">
        <div className="box" />
      </div>
      <div className="col-12">
        <div className="box" />
      </div>
      <ReservationsList
        ReservationsData={reserves}
      />
    </div>

  );
};

export default Reservations;

Reservations.propTypes = {
  SessionStatus: func.isRequired,
};
