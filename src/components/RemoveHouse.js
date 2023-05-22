import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { func } from 'prop-types';
import { fetchHouses } from '../redux/houseSlice';
import RemoveHouseList from './RemoveHouseList';

const RemoveHouse = (props) => {
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
      <RemoveHouseList
        data={houses}
      />

    </div>
  );
};

export default RemoveHouse;

RemoveHouse.propTypes = {
  SessionStatus: func.isRequired,
};
