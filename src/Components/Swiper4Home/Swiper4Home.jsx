import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import "./Swiper4Home.css";

//For Images
import img1S5 from "../../assets/image 81.svg";
//For Images
import img2S5 from "../../assets/image 80.svg";
import img3S5 from "../../assets/image 18.svg";
import img4S5 from "../../assets/image 79.svg";
import CardsS5 from "../CardsS5/CardsS5";

const Swiper4Home = () => {
  return (
    <div className="mt-[30px]">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          890: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1020: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CardsS5 imagesS3={img1S5} />
        </SwiperSlide>
        <SwiperSlide>
          <CardsS5 imagesS3={img2S5} />
        </SwiperSlide>
        <SwiperSlide>
          <CardsS5 imagesS3={img3S5} />
        </SwiperSlide>
        <SwiperSlide>
          <CardsS5 imagesS3={img4S5} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Swiper4Home;
