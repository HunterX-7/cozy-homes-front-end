import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { func } from 'prop-types';
import { fetchHouses } from '../redux/houseSlice';
import HousesList from '../components/HousesList';

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

    <div>

      <HousesList
        HousesData={houses}
      />
    </div>

  );
};

export default Houses;

Houses.propTypes = {
  SessionStatus: func.isRequired,
};
