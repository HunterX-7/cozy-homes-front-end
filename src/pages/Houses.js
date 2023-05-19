import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHouses } from '../redux/houseSlice';
import HousesList from '../components/HousesList';

const Houses = () => {
  const houses = useSelector((state) => state.house.property);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);

  return (

    <div>

      <HousesList
        HousesData={houses}
      />
    </div>

  );
};

export default Houses;
