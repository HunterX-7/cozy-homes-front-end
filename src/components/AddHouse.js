import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { func } from 'prop-types';
import { AiFillHome } from 'react-icons/ai';
import { addHouse } from '../redux/houseSlice';
import './stylesheets/add_house.css';
import logo from './images/logo.png';

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
        <div className="form-item">
          <label htmlFor="houseNameInput">
            Enter house name:
            <input
              id="houseNameInput"
              className="house-input"
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>

        <div className="form-item">
          <label htmlFor="style">
            Enter house style:
            <input
              id="style"
              className="house-input"
              required
              type="text"
              value={style}
              onChange={(e) => setStyle(e.target.value)}

            />
          </label>
        </div>

        <div className="form-item">
          <label htmlFor="photo">
            Enter photo URL:
            <input
              id="photo"
              className="house-input"
              required
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}

            />
          </label>
        </div>

        <div className="form-item">
          <label htmlFor="location">
            Enter location:
            <input
              id="location"
              className="house-input"
              required
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}

            />
          </label>
        </div>

        <div className="form-item">
          <label htmlFor="garages">
            Enter number of garages:
            <input
              id="garages"
              className="house-input"
              required
              type="number"
              value={garage}
              onChange={(e) => setGarage(e.target.value)}

            />
          </label>
        </div>

        <div className="form-item">
          <label htmlFor="bedrooms">
            Enter number of bedrooms:
            <input
              id="bedrooms"
              className="house-input"
              required
              type="number"
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}

            />
          </label>
        </div>

        <div className="form-item">
          <label htmlFor="bathrooms">
            Enter number of bathrooms:
            <input
              id="bathrooms"
              className="house-input"
              required
              type="number"
              value={bathrooms}
              onChange={(e) => setBathrooms(e.target.value)}

            />
          </label>
        </div>

        <div className="form-item">
          <label htmlFor="area">
            Enter house area:
            <input
              id="area"
              className="house-input"
              required
              type="number"
              value={area}
              onChange={(e) => setArea(e.target.value)}

            />
          </label>
        </div>

        <div className="form-item">
          <label htmlFor="price">
            Enter daily price:
            <input
              id="price"
              className="house-input"
              required
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
        </div>

        <textarea
          className="text-area"
          required
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="write a short description"
          rows="6"
        />

        <input
          className="button"
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
        <img className="logo" src={logo} alt="gif" />
        <h2 className="models-title">ADD A NEW HOUSE</h2>
        <Form />
      </div>
    </div>
  );
};

export default AddHouse;

AddHouse.propTypes = {
  SessionStatus: func.isRequired,
};
