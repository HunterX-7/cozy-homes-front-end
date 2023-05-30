import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { func } from 'prop-types';
import { fetchHouses } from '../redux/houseSlice';
import RemoveHouseList from './RemoveHouseList';
import RemoveLogo from './images/remove-house.png';

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

    <div className="container col-lg-8 p-0">
      <div className="col-12">
        <div className="box" />
      </div>
      <div className="d-none d-lg-block col-12">
        <div className="box" />
      </div>
      <div className="">
        <table className="table table-striped table-bordered table-sm table-hover">
          <thead>
            <tr className="table-header">
              <th colSpan="2">
                <img src={RemoveLogo} alt="Remove Logo" className="w-25" />
              </th>
            </tr>
            <tr>
              <th className="text-center">House</th>
              <th className="text-center">Remove</th>
            </tr>
          </thead>
          <RemoveHouseList
            data={houses}
          />
        </table>
      </div>
    </div>
  );
};

export default RemoveHouse;

RemoveHouse.propTypes = {
  SessionStatus: func.isRequired,
};
