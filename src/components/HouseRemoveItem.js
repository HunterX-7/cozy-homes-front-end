import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteHouse } from '../redux/houseSlice';

const HouseRemoveItem = (props) => {
  const { name, id } = props;

  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteHouse(id));
  };
  return (

    <div className="info">
      <h2 className="card-name">
        {name}
        <span>{id}</span>
      </h2>
      <button
        type="button"
        className="del-btn"
        onClick={() => deleteHandler(id)}
      >
        Remove
      </button>
    </div>
  );
};

export default HouseRemoveItem;

HouseRemoveItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
