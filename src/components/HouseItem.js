import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const HouseItem = (props) => {
  const { name, location, photo } = props;

  return (
    <Link to={`details/${name}`} className="text">
      <div className="card" id="flex">
        <img src={photo} alt="house" width="180px" height="130px" />
        <div className="info">
          <h2 className="card-name">{name}</h2>
          <p className="card-p">
            Location:
            {location}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default HouseItem;

HouseItem.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};
