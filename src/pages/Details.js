import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { BiLeftArrow } from 'react-icons/bi';
import { TbSquareRotated } from 'react-icons/tb';
import { IoIosArrowForward, IoIosArrowDropright } from 'react-icons/io';
import { HiColorSwatch } from 'react-icons/hi';
import { RxGear } from 'react-icons/rx';

const Details = () => {
  const { name } = useParams();
  const house = useSelector((state) => state.house.property.find((hous) => hous.name === name));

  return (
    <>
      <div className="col-lg-5 my-auto p-3">
        <div className="col-12">
          <div className="box" />
        </div>
        <div className="d-none d-lg-block col-12">
          <div className="box" />
        </div>
        <h1 className="d-lg-none text-center">{house.name}</h1>
        <div className="d-none d-lg-block col-12">
          <div className="box" />
        </div>
        <img src={house.photo} alt="house_pic" className="d-block shadow-lg rounded w-100 mb-3" />
        <p className="text-center mb-3">{house.description}</p>
        <div className="d-flex justify-content-center mb-1">
          <TbSquareRotated className="my-auto" style={{ color: '#1c2331', fontSize: '40px' }} />
        </div>
        <p className="text-center">Example View</p>
        <div className="d-flex">
          <button type="button" className="text-start swiper-nav-btn">
            <BiLeftArrow style={{ color: 'white', fontSize: '24px' }} />
            <i />
          </button>
        </div>
      </div>
      <div className="col-lg-3 p-3">
        <div className="d-none d-lg-block col-12">
          <div className="box" />
        </div>
        <div className="d-none d-lg-block col-12">
          <div className="box" />
        </div>
        <h1 className="d-none d-lg-block text-end">{house.name}</h1>
        <p className="text-end fw-bold">
          With a daily price of
          {' '}
          {house.price}
          $
          {' '}
          on the property!
        </p>
        <table className="table table-striped table-borderless">
          <thead>
            <tr>
              <th scope="col">Style</th>
              <td className="text-end">{house.style}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="col">Garages</th>
              <td className="text-end">{house.garage}</td>
            </tr>
            <tr>
              <th scope="col">Bedrooms</th>
              <td className="text-end">{house.bedrooms}</td>
            </tr>
            <tr>
              <th scope="col">Bathrooms</th>
              <td className="text-end">{house.bathrooms}</td>
            </tr>
            <tr>
              <th scope="col">Area</th>
              <td className="text-end">
                {house.area}
                {' '}
                mt2
              </td>
            </tr>
          </tbody>
        </table>
        <p className="text-end fw-bold fs-5 mb-4">
          Location:
          {' '}
          {house.location}
        </p>
        <p className="text-end fw-bold fs-6 mb-4">
          DISCOVER MORE PROPERTIES
          <IoIosArrowForward className="mb-1" style={{ color: '#1c2331', fontSize: '18px' }} />
        </p>
        <p className="text-end mb-5">
          <HiColorSwatch style={{ color: '#1c2331', fontSize: '65px' }} />
        </p>
        <div className="d-flex justify-content-end">
          <button type="button" className="text-white detail-btn">
            <RxGear className="me-2" style={{ color: 'white', fontSize: '20px' }} />
            Configure
            <IoIosArrowDropright className="ms-2" style={{ color: 'white', fontSize: '20px' }} />
            <i />
          </button>
        </div>

      </div>

    </>
  );
};

export default Details;
