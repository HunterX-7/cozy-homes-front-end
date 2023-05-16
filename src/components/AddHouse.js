import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addHouse } from '../redux/houseSlice';

/* import '../styles/add_motorcycle.css'; */

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
        <input
          className="house-input"
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="house name"
        />
        <input
          className="house-input"
          required
          type="text"
          value={style}
          onChange={(e) => setStyle(e.target.value)}
          placeholder="house type"
        />
        <input
          className="house-input"
          required
          type="text"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          placeholder="image URL"
        />
        <input
          className="house-input"
          required
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="location"
        />
        <input
          className="house-input"
          required
          type="number"
          value={garage}
          onChange={(e) => setGarage(e.target.value)}
          placeholder="number of garages"
        />
        <input
          className="house-input"
          required
          type="number"
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
          placeholder="number of bedrooms"
        />
        <input
          className="house-input"
          required
          type="number"
          value={bathrooms}
          onChange={(e) => setBathrooms(e.target.value)}
          placeholder="number of bathrooms"
        />
        <input
          className="house-input"
          required
          type="number"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          placeholder="set area m2"
        />
        <input
          className="house-input"
          required
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="set daily price"
        />
        <textarea
          className="house-input"
          required
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="write a short description"
          rows="6"
        />

        <input
          className=""
          type="submit"
          value="Add house"
          title="Click this or press enter to submit"
        />
      </form>
    </>
  );
};

const AddHouse = () => (
  <div className="">
    <h2 className="models-title">ADD A NEW HOUSE</h2>
    <Form />
  </div>
);

export default AddHouse;
