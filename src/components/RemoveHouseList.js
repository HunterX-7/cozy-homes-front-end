import React from 'react';
import PropTypes, { shape } from 'prop-types';
import HouseRemoveItem from './HouseRemoveItem';

const RemoveHouseList = (props) => {
  const { data } = props;
  return (
    <>
      {data.map((house) => {
        const {
          name, id,
        } = house;
        return (
          <HouseRemoveItem
            key={id}
            id={id}
            name={name}
          />
        );
      })}
    </>
  );
};

export default RemoveHouseList;

RemoveHouseList.propTypes = {
  data: PropTypes.arrayOf(shape).isRequired,
};
