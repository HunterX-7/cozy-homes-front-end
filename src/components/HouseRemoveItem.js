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

    <tbody>
      <tr>
        <td className="my-auto text-center fs-4">
          {name}
          <span className="d-none">{id}</span>
        </td>
        <td className="text-center">
          <button
            type="button"
            className="btn btn-sm btn-danger"
            onClick={() => deleteHandler(id)}
          >
            X
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default HouseRemoveItem;

HouseRemoveItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
