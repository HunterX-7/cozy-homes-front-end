import React from 'react';
import PropTypes from 'prop-types';
import './stylesheets/reservations.css';

const ReservationItem = (props) => {
  const {
    username, housename, location, startDate, endDate,
  } = props;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <table className="reservation-table">
      <thead>
        <tr>
          <th colSpan="5" className="table-header">
            Reservation Details
          </th>
        </tr>
        <tr>
          <th>User name</th>
          <th>House Name</th>
          <th>Location</th>
          <th>Start Date</th>
          <th>End Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{username}</td>
          <td>{housename}</td>
          <td>{location}</td>
          <td>{formatDate(startDate)}</td>
          <td>{formatDate(endDate)}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ReservationItem;

ReservationItem.propTypes = {
  username: PropTypes.string.isRequired,
  housename: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
};
