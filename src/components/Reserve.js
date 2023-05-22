import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { func } from 'prop-types';
import DatePicker from 'react-datepicker';
import Selection from './Selection';
import 'react-datepicker/dist/react-datepicker.css';
import { fetchHouses } from '../redux/houseSlice';
import './stylesheets/reserve.css';

const AddReservations = (props) => {
  const { SessionStatus } = props;
  const houses = useSelector((state) => state.house.property);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const selectedHouse = location.state ? location.state : {};
  const [user, setUser] = useState({});
  const [house, setHouse] = useState(selectedHouse);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [status, setStatus] = useState('');

  useEffect(() => {
    (async () => {
      const { isLoggedIn, user } = await SessionStatus();
      if (isLoggedIn) {
        dispatch(fetchHouses());
        setUser(user);
        if (Object.keys(house).length !== 0) {
          document.querySelector('select').querySelector(`option[value="${house.id}"]`).selected = true;
        }
      } else {
        navigate('/');
      }
    })();
  }, [dispatch, house, SessionStatus, navigate]);

  const handleHouseChange = async (event) => {
    if (event.target.value !== '') {
      setHouse({
        ...house,
        id: event.target.value,
        name: event.target.name,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const Reservation = {
      user_id: user.id,
      house_id: house.id,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
    };

    const response = await fetch('http://localhost:3000/api/v1/reservations/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Reservation),
    });

    const data = await response.json();
    if (data.status === 'created') {
      setStatus('House reserved successfully');
      document.querySelector('select').value = '';
      navigate('/reservations');
    } else {
      setStatus('enter a valid format for start/end dates "dd/mm/yyyy". please ensure that StartDate is earlier than endDate ');
      setStartDate('');
      setEndDate('');
    }
  };

  return (
    <div className="contenedor col-lg-8 p-0">
      <div className="content">
        <div className="header">
          <h3>RESERVE A HOUSE</h3>
          <span className="line" />
        </div>
        <p className="description">
          Embark on a journey of unrivaled luxury as you step into
          our extraordinary collection of rental homes.
          Prepare to be captivated by a world of refinement and elegance,
          where every aspect has been thoughtfully curated to
          surpass even the loftiest of expectations.
          Immerse yourself in awe-inspiring architectural masterpieces
          and indulge in lavish amenities, as our opulent residences
          offer a lifestyle that epitomizes pure extravagance.
          Experience a new standard of sophistication and elevate your
          living to extraordinary heights.
        </p>
        <form className="form-container" onSubmit={handleSubmit}>
          <select id="houses" name="houses" className="select_house mt-3" onChange={handleHouseChange} required>
            <option value="">Select A House</option>
            {
                houses.length > 0 ? (
                  houses.map((house) => (
                    <Selection
                      key={house.id}
                      name={house.name}
                      id={house.id}
                    />
                  ))
                ) : (
                  <option value="no house">No houses avaliable</option>
                )
              }
          </select>
          <DatePicker
            className=""
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="start date: dd/mm/yyyy"
            dateFormat="dd/MM/yyyy"
            required
          />

          <DatePicker
            className=""
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            placeholderText="end date: dd/mm/yyyy"
            dateFormat="dd/MM/yyyy"
            required
          />
          <button type="submit" className="mt-3">Reserve Now</button>
        </form>
        <div className="status-notification">
          {status}
        </div>
      </div>
    </div>
  );
};

export default AddReservations;

AddReservations.propTypes = {
  SessionStatus: func.isRequired,
};
