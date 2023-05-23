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
    <tbody>
      <tr>
        <td>{username}</td>
        <td>{housename}</td>
        <td>{location}</td>
        <td>{formatDate(startDate)}</td>
        <td>{formatDate(endDate)}</td>
      </tr>
    </tbody>
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
