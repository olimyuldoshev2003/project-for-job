import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import "./Swiper3Home.css";

//For Images
import img1S4 from "../../assets/image 18.svg";
//For Images
import img2S4 from "../../assets/image 79.svg";
import img3S4 from "../../assets/image 81.svg";
import img4S4 from "../../assets/image 80.svg";
import CardsS4 from "../CardsS4/CardsS4";

const Swiper3Home = () => {
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
          <CardsS4 imagesS3={img1S4} />
        </SwiperSlide>
        <SwiperSlide>
          <CardsS4 imagesS3={img2S4} />
        </SwiperSlide>
        <SwiperSlide>
          <CardsS4 imagesS3={img3S4} />
        </SwiperSlide>
        <SwiperSlide>
          <CardsS4 imagesS3={img4S4} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Swiper3Home;
