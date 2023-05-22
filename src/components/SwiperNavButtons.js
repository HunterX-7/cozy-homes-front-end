import React from 'react';
import { useSwiper } from 'swiper/react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns d-flex justify-content-between">
      <button type="button" className="swiper-nav-btn" onClick={() => swiper.slidePrev()}>
        <BiLeftArrow style={{ color: 'white', fontSize: '24px' }} />
        <i />
      </button>
      <button type="button" className="swiper-nav-btn" onClick={() => swiper.slideNext()}>
        <BiRightArrow style={{ color: 'white', fontSize: '24px' }} />
        <i />
      </button>
    </div>
  );
};

export default SwiperNavButtons;
