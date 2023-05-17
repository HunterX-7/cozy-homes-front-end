import React from 'react';
import PropTypes, { shape } from 'prop-types';
import HouseRemoveItem from './HouseRemoveItem';

const RemoveHouseList = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <div className="group">
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
    </div>
  );
};

export default RemoveHouseList;

RemoveHouseList.propTypes = {
  data: PropTypes.arrayOf(shape).isRequired,
};
