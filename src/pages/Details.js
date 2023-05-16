import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Details = () => {
  const { name } = useParams(); // se usa para setear la busqueda por nombres en detalles
  const house = useSelector((state) => state.house.property.find((hous) => hous.name === name));

  return (
    <div>
      <NavBar />
      <div className="detailscontainer">
        <h1>{house.name}</h1>
        <ul>
          <li><img src={house.photo} alt="house_pic" /></li>
          <li>{house.description}</li>
          <li>
            Type:
            {house.house_type}
          </li>
          <li>
            Garages:
            {house.garage}
          </li>
          <li>
            Bedrooms:
            {house.bedrooms}
          </li>
          <li>
            Bathrooms:
            {house.bathrooms}
          </li>
          <li>
            Area m2:
            {house.area}
          </li>
          <li>
            Price:
            {house.daily_price}
          </li>

        </ul>

      </div>
    </div>
  );
};

export default Details;
