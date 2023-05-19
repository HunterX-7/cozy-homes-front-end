import React from 'react';
import PropTypes from 'prop-types';

const ReservationItem = (props) => {
  const {
    username, housename, location, startDate, endDate,
  } = props;

  return (
    <table>
      <thead>
        <tr>
          <th>User name </th>
          <th>House Name </th>
          <th>Location </th>
          <th>Start Date </th>
          <th>End Date </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{username}</td>
          <td>{housename}</td>
          <td>{location}</td>
          <td>{startDate}</td>
          <td>{endDate}</td>
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
