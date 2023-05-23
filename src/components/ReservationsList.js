import React from 'react';
import PropTypes, { shape } from 'prop-types';
import ReservationItem from './ReservationItem';


const ReservationsList = (props) => {
  const { ReservationsData } = props;
  return (
      <>
      {ReservationsData.map((res) => {
        const {
          id, user, house, startDate, endDate,
        } = res;
        return (


          <ReservationItem
            key={id}
            housename={house.name}
            location={house.location}
            startDate={startDate}
            endDate={endDate}
            username={user.name}
          />
        );
      })}
      </>
  );
};

export default ReservationsList;

ReservationsList.propTypes = {
  ReservationsData: PropTypes.arrayOf(shape).isRequired,
};
