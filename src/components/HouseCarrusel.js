import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import { TiSocialPinterestCircular, TiSocialTwitterCircular, TiSocialFacebookCircular } from 'react-icons/ti';
import SwiperNavButtons from './SwiperNavButtons';

const HouseCarousel = (props) => {
  const { HousesData } = props;

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={25}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      }}
    >
      {HousesData.map((house) => {
        const {
          name, photo, description, id,
        } = house;
        return (
          <SwiperSlide key={id}>
            <Link to={`/details/${name}`} className="text">
              <img src={photo} alt={name} className="d-block shadow-lg rounded w-100 mb-2" />
            </Link>
            <div className="swiper-caption">
              <h3 className="text-center">{name}</h3>
              <hr className="new1 mx-auto" />
              <p className="text-center">{description}</p>
              <div className="h4 w-100 mb-5 text-center">
                <a
                  href="https://github.com/HunterX-7/cozy-homes-front-end"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TiSocialFacebookCircular style={{ color: 'gray', fontSize: '36px' }} />
                  <i className="px-2" />
                </a>
                <a
                  href="https://github.com/HunterX-7/cozy-homes-front-end"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TiSocialTwitterCircular style={{ color: 'gray', fontSize: '36px' }} />
                  <i className="px-2" />
                </a>
                <a
                  href="https://github.com/HunterX-7/cozy-homes-front-end"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TiSocialPinterestCircular style={{ color: 'gray', fontSize: '36px' }} />
                  <i className="px-2" />
                </a>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
      <SwiperNavButtons />
    </Swiper>
  );
};

export default HouseCarousel;

HouseCarousel.propTypes = {
  HousesData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
