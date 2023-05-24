import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { func } from 'prop-types';
import { AiFillHome } from 'react-icons/ai';
import { Form, Button } from 'react-bootstrap';
import { addHouse } from '../redux/houseSlice';
import './stylesheets/add_house.css';
import logotype from './images/add-house-logo1.png';

const Formulario = () => {
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
      <Form onSubmit={addHousehandler} onReset={resetForm}>
        <div className="d-flex justify-content-center mt-4">
          <img className="w-25" src={logotype} alt="gif" />
        </div>
        <Form.Group className="p-2 text-center">
          <Form.Label className="text-white">House Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter house name"
            required
          />
        </Form.Group>
        <Form.Group className="p-2 text-center">
          <Form.Label className="text-white">House type</Form.Label>
          <Form.Control
            type="text"
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            placeholder="Enter house type"
            required
          />
        </Form.Group>
        <Form.Group className="p-2 text-center">
          <Form.Label className="text-white">House photo</Form.Label>
          <Form.Control
            type="text"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            placeholder="Enter image URL"
            required
          />
        </Form.Group>
        <Form.Group className="p-2 text-center">
          <Form.Label className="text-white">House address</Form.Label>
          <Form.Control
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter house address"
            required
          />
        </Form.Group>
        <Form.Group className="p-2 text-center">
          <Form.Label className="text-white">
            House garages
            {' '}
            <span className="text-secondary">(Numbers only field)</span>
          </Form.Label>
          <Form.Control
            type="number"
            value={garage}
            onChange={(e) => setGarage(e.target.value)}
            placeholder="Enter house garages"
            required
          />
        </Form.Group>
        <Form.Group className="p-2 text-center">
          <Form.Label className="text-white">
            House bedrooms
            {' '}
            <span className="text-secondary">(Numbers only field)</span>
          </Form.Label>
          <Form.Control
            type="number"
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            placeholder="Enter house bedrooms"
            required
          />
        </Form.Group>
        <Form.Group className="p-2 text-center">
          <Form.Label className="text-white">
            House bathrooms
            {' '}
            <span className="text-secondary">(Numbers only field)</span>
          </Form.Label>
          <Form.Control
            type="number"
            value={bathrooms}
            onChange={(e) => setBathrooms(e.target.value)}
            placeholder="Enter house bathrooms"
            required
          />
        </Form.Group>
        <Form.Group className="p-2 text-center">
          <Form.Label className="text-white">
            Area mt2
            {' '}
            <span className="text-secondary">(Numbers only field)</span>
          </Form.Label>
          <Form.Control
            type="number"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            placeholder="Enter house area"
            required
          />
        </Form.Group>
        <Form.Group className="p-2 text-center">
          <Form.Label className="text-white">
            Daily price
            {' '}
            <span className="text-secondary">(Numbers only field)</span>
          </Form.Label>
          <Form.Control
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Set daily price"
            required
          />
        </Form.Group>
        <Form.Group className="p-2 text-center">
          <Form.Label className="text-white">Description</Form.Label>
          <Form.Control
            className=""
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write a short description"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 mt-3 text-center">
          <Button className="mx-auto" variant="outline-light" type="submit">
            Add House
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

const AddHouseTrue = (props) => {
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
    <div className="h-100 custom-bg">
      <div className="d-none d-lg-block p-3">
        <Link to="/home">
          <AiFillHome style={{ color: 'white', fontSize: '36px' }} />
        </Link>
      </div>
      <div className="d-lg-none col-12">
        <div className="box" />
      </div>
      <div className="row justify-content-center mb-5">
        <div className="col-lg-6 rounded mb-5 form-div">
          <Formulario />
        </div>
      </div>
    </div>
  );
};

export default AddHouseTrue;

AddHouseTrue.propTypes = {
  SessionStatus: func.isRequired,
};
