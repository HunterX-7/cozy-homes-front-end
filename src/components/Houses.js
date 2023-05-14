import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHouse } from '../redux/houseSlice';

const Houses = () => {
  const houses = useSelector((state) => state.house.property);
  const dispatch = useDispatch();
  console.log(houses)

  useEffect(() => {
    dispatch(fetchHouse());
  }, [dispatch]);

  return (
    <div>
      {houses.map((house) => (
        <ul key={house.id}>
          <li>Location: {house.location}</li>
          <li>House Type: {house.house_type}</li>
          <li>{house.bedrooms} bedrooms</li>
        </ul>
      ))}
    </div>
  );
};

export default Houses;