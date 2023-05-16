import React from 'react';
import PropTypes, { shape } from 'prop-types';
import HouseItem from './HouseItem';

const HousesList = (props) => {
  const { HousesData } = props;
  return (
    <div className="group">
      {HousesData.map((house) => {
        const {
          name, photo, location, id,
        } = house;
        return (
          <HouseItem
            key={id}
            name={name}
            location={location}
            photo={photo}
          />
        );
      })}
    </div>
  );
};

export default HousesList;

HousesList.propTypes = {
  HousesData: PropTypes.arrayOf(shape).isRequired,
};
