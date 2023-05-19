import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHouses } from '../redux/houseSlice';
import RemoveHouseList from './RemoveHouseList';

const RemoveHouse = () => {
  const houses = useSelector((state) => state.house.property);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);

  return (

    <div>
      <RemoveHouseList
        data={houses}
      />

    </div>
  );
};

export default RemoveHouse;
