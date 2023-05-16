import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHouses } from '../redux/houseSlice';
import HousesList from '../components/HousesList';
import NavBar from '../components/NavBar';

const Houses = () => {
  const houses = useSelector((state) => state.house.property);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);

  return (

    <div>
      <NavBar />
      <div>
        <HousesList
          HousesData={houses}
        />
      </div>
    </div>
  );
};

export default Houses;
