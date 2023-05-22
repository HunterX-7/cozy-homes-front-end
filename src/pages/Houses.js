import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { func } from 'prop-types';
import { fetchHouses } from '../redux/houseSlice';
import HouseCarousel from '../components/HouseCarrusel';

const Houses = (props) => {
  const { SessionStatus } = props;
  const houses = useSelector((state) => state.house.property);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const { isLoggedIn } = await SessionStatus();
      if (isLoggedIn) {
        dispatch(fetchHouses());
      } else {
        navigate('/');
      }
    })();
  }, [dispatch, SessionStatus, navigate]);

  return (
    <>
      <div className="d-none d-lg-block col-lg-8 p-0">
        <div className="col-12">
          <div className="box" />
        </div>
        <h2 className="text-center">LATEST PROPERTIES</h2>
        <p className="text-center">Please select a property</p>
        <hr className="new1 mx-auto" />
        <HouseCarousel HousesData={houses} />
      </div>
      <div className="d-lg-none p-5">
        <div className="col-12">
          <div className="box" />
        </div>
        <h2 className="text-center">LATEST PROPERTIES</h2>
        <p className="text-center">Please select a property</p>
        <hr className="new1 mx-auto" />
        <HouseCarousel HousesData={houses} />
      </div>
    </>
  );
};

export default Houses;

Houses.propTypes = {
  SessionStatus: func.isRequired,
};
