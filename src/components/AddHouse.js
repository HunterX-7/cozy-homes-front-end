import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { func } from 'prop-types';
import { AiFillHome } from 'react-icons/ai';
import { addHouse } from '../redux/houseSlice';
import './stylesheets/add_house.css';
import logotype from './images/add-house-logo1.png';

const Form = () => {
  const [name, setName] = useState('');
  const [style, setStyle] = useState('');
  const [photo, setPhoto] = useState('');
  const [location, setLocation] = useState('');
  const [garage, setGarage] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [area, setArea] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addHousehandler = (e) => {
    e.preventDefault();

    const house = {
      name,
      style,
      photo,
      location,
      garage,
      bedrooms,
      bathrooms,
      area,
      price,
      description,
    };
    dispatch(addHouse(house));
    e.target.reset();
    navigate('/');
  };

  const resetForm = () => {
    setName('');
    setStyle('');
    setPhoto('');
    setLocation('');
    setGarage('');
    setBedrooms('');
    setBathrooms('');
    setArea('');
    setPrice('');
    setDescription('');
  };

  return (
    <>
      <form
        className="house-form"
        onSubmit={addHousehandler}
        onReset={resetForm}
      >
        <img className="logotype" src={logotype} alt="gif" />
        <div className="border-grey-name">
          <div className="border-green">
            <div className="form-item">
              <input
                id="houseNameInput"
                className="house-input-name"
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter house name"
              />
            </div>
          </div>
        </div>

        <div className="sides">
          <div className="left-side">
            <div className="border-grey">
              <div className="border-green">
                <div className="form-item">
                  <input
                    id="style"
                    className="house-input"
                    required
                    type="text"
                    value={style}
                    onChange={(e) => setStyle(e.target.value)}
                    placeholder="Enter house style:"
                  />
                </div>
              </div>
            </div>

            <div className="border-grey">
              <div className="border-green">
                <div className="form-item">
                  <input
                    id="photo"
                    className="house-input"
                    required
                    type="text"
                    value={photo}
                    onChange={(e) => setPhoto(e.target.value)}
                    placeholder="Enter photo URL:"
                  />
                </div>
              </div>
            </div>

            <div className="border-grey">
              <div className="border-green">
                <div className="form-item">
                  <input
                    id="location"
                    className="house-input"
                    required
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter location:"
                  />
                </div>
              </div>
            </div>

            <div className="border-grey">
              <div className="border-green">
                <div className="form-item">
                  <input
                    id="garages"
                    className="house-input"
                    required
                    type="number"
                    value={garage}
                    onChange={(e) => setGarage(e.target.value)}
                    placeholder="Num of garages:"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="right-side">
            <div className="border-grey">
              <div className="border-green">
                <div className="form-item">
                  <input
                    id="bedrooms"
                    className="house-input"
                    required
                    type="number"
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                    placeholder="Num of bedrooms:"
                  />
                </div>
              </div>
            </div>

            <div className="border-grey">
              <div className="border-green">
                <div className="form-item">
                  <input
                    id="bathrooms"
                    className="house-input"
                    required
                    type="number"
                    value={bathrooms}
                    onChange={(e) => setBathrooms(e.target.value)}
                    placeholder="Num of bathrooms:"
                  />
                </div>
              </div>
            </div>

            <div className="border-grey">
              <div className="border-green">
                <div className="form-item">
                  <input
                    id="area"
                    className="house-input"
                    required
                    type="number"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    placeholder="Enter house area:"
                  />
                </div>
              </div>
            </div>

            <div className="border-grey">
              <div className="border-green">
                <div className="form-item">
                  <input
                    id="price"
                    className="house-input"
                    required
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Enter daily price:"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-grey-text">
          <div className="border-green-text">
            <textarea
              className="text-area"
              required
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="write a short description"
              rows="6"
            />
          </div>
        </div>

        <input
          className="button-add-house"
          type="submit"
          value="Add house"
          title="Click this or press enter to submit"
        />
      </form>
    </>
  );
};

const AddHouse = (props) => {
  const { SessionStatus } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const { isLoggedIn } = await SessionStatus();
      if (!isLoggedIn) {
        navigate('/');
      }
    })();
  }, [dispatch, SessionStatus, navigate]);

  return (

    <div className="main_cont">
      <Link to="/home" className="home-button">
        <AiFillHome style={{ color: 'white', fontSize: '36px' }} />
      </Link>
      <div className="internal_cont">
        <Form />
      </div>
    </div>
  );
};

export default AddHouse;

AddHouse.propTypes = {
  SessionStatus: func.isRequired,
};
