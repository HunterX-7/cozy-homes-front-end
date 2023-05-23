import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { func } from 'prop-types';
import { fetchReservation } from '../redux/reservationSlice';
import ReservationsList from './ReservationsList';
import reservationLogo from './images/reservation.png';


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
      <table className="reservation-table">
            <thead>
              <tr className="table-header">
                <th colSpan="5">
                  <img src={reservationLogo} alt="Reservation Logo" className='reservation-lg'/>
                </th>
              </tr>
              <tr>
                <th className="title-table">User name</th>
                <th className="title-table">House Name</th>
                <th className="title-table">Location</th>
                <th className="title-table">Start Date</th>
                <th className="title-table">End Date</th>
              </tr>
            </thead>
      <ReservationsList
        ReservationsData={reserves}
      />
      </table>
    </div>

  );
};

export default Reservations;

Reservations.propTypes = {
  SessionStatus: func.isRequired,
};
