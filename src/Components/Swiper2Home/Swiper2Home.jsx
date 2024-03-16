import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import "./Swiper2Home.css";

//For Images
import img1S3 from "../../assets/cards.svg";
import CardsS3 from "../CardsS3/CardsS3";
//For Images
import img2S3 from "../../assets/image 79.svg";
import img3S3 from "../../assets/image 80.svg";
import img4S3 from "../../assets/image 81.svg";

const Swiper2Home = () => {
  return (
    <div>
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
          <img src={img1S3} alt="" className="min-h-[410px]" />
        </SwiperSlide>
        <SwiperSlide>
          <CardsS3 imagesS3={img2S3} />
        </SwiperSlide>
        <SwiperSlide>
          <CardsS3 imagesS3={img3S3} />
        </SwiperSlide>
        <SwiperSlide>
          <CardsS3 imagesS3={img4S3} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Swiper2Home;
