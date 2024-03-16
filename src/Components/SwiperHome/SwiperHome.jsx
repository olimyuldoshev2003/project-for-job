import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

//For Images
import imageSwiperMobileSize from "../../assets/Group 73726.png";

const SwiperHome = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg_swiper_home p-[20px]">
            <div className="texts_for_desktop_size sm:hidden md:block">
              <h1 className="text-[40px] max-w-[620px] font-[700] text-[#fff]">
                Оригинальные автомасла cо скидкой
                <span className="text-[#fff] bg-[orange] p-[10px] rounded-[12px]">
                  15%
                </span>
              </h1>
              <p className="mt-[60px] text-[18px] font-[400] text-[#FFFFFF] text-start">
                Акция действует с 1 по 30 июня 2021
              </p>
            </div>
            <div className="texts_for_mobile_size sm:flex sm:justify-between sm:flex-wrap md:hidden">
              <div className="block_1_swiper_mobile_size">
                <h1 className="text-[23px] max-w-[330px] font-[600] text-[#151e55] leading-[40px]">
                  Оригинальные автозапчасти cо скидкой
                  <span className="text-[orange] bg-[#fff] p-[10px] rounded-[12px] ml-[10px]">
                    15%
                  </span>
                </h1>
                <p className="mt-[20px] text-[16px] font-[400] text-[#3D3D4B] max-w-[132px]">
                  Акция действует с 1 по 30 июня 2021
                </p>
              </div>
              <div className="block_2_swiper_mobile_size">
                <img src={imageSwiperMobileSize} className="w-[260px]" alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg_swiper_home p-[20px]">
            <div className="texts_for_desktop_size sm:hidden md:block">
              <h1 className="text-[40px] max-w-[620px] font-[700] text-[#fff]">
                Оригинальные автомасла cо скидкой
                <span className="text-[#fff] bg-[orange] p-[10px] rounded-[12px]">
                  15%
                </span>
              </h1>
              <p className="mt-[60px] text-[18px] font-[400] text-[#FFFFFF] text-start">
                Акция действует с 1 по 30 июня 2021
              </p>
            </div>
            <div className="texts_for_mobile_size sm:flex sm:justify-between sm:flex-wrap md:hidden">
              <div className="block_1_swiper_mobile_size">
                <h1 className="text-[23px] max-w-[330px] font-[600] text-[#151e55] leading-[40px]">
                  Оригинальные автозапчасти cо скидкой
                  <span className="text-[orange] bg-[#fff] p-[10px] rounded-[12px] ml-[10px]">
                    15%
                  </span>
                </h1>
                <p className="mt-[20px] text-[16px] font-[400] text-[#3D3D4B] max-w-[132px]">
                  Акция действует с 1 по 30 июня 2021
                </p>
              </div>
              <div className="block_2_swiper_mobile_size">
                <img src={imageSwiperMobileSize} className="w-[260px]" alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg_swiper_home p-[20px]">
            <div className="texts_for_desktop_size sm:hidden md:block">
              <h1 className="text-[40px] max-w-[620px] font-[700] text-[#fff]">
                Оригинальные автомасла cо скидкой
                <span className="text-[#fff] bg-[orange] p-[10px] rounded-[12px]">
                  15%
                </span>
              </h1>
              <p className="mt-[60px] text-[18px] font-[400] text-[#FFFFFF] text-start">
                Акция действует с 1 по 30 июня 2021
              </p>
            </div>
            <div className="texts_for_mobile_size sm:flex sm:justify-between sm:flex-wrap md:hidden">
              <div className="block_1_swiper_mobile_size">
                <h1 className="text-[23px] max-w-[330px] font-[600] text-[#151e55] leading-[40px]">
                  Оригинальные автозапчасти cо скидкой
                  <span className="text-[orange] bg-[#fff] p-[10px] rounded-[12px] ml-[10px]">
                    15%
                  </span>
                </h1>
                <p className="mt-[20px] text-[16px] font-[400] text-[#3D3D4B] max-w-[132px]">
                  Акция действует с 1 по 30 июня 2021
                </p>
              </div>
              <div className="block_2_swiper_mobile_size">
                <img src={imageSwiperMobileSize} className="w-[260px]" alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg_swiper_home p-[20px]">
            <div className="texts_for_desktop_size sm:hidden md:block">
              <h1 className="text-[40px] max-w-[620px] font-[700] text-[#fff]">
                Оригинальные автомасла cо скидкой
                <span className="text-[#fff] bg-[orange] p-[10px] rounded-[12px]">
                  15%
                </span>
              </h1>
              <p className="mt-[20px] text-[18px] font-[400] text-[#FFFFFF] text-start">
                Акция действует с 1 по 30 июня 2021
              </p>
            </div>
            <div className="texts_for_mobile_size sm:flex sm:justify-between sm:flex-wrap md:hidden">
              <div className="block_1_swiper_mobile_size">
                <h1 className="text-[23px] max-w-[330px] font-[600] text-[#151e55] leading-[40px]">
                  Оригинальные автозапчасти cо скидкой
                  <span className="text-[orange] bg-[#fff] p-[10px] rounded-[12px] ml-[10px]">
                    15%
                  </span>
                </h1>
                <p className="mt-[60px] text-[16px] font-[400] text-[#3D3D4B] max-w-[132px]">
                  Акция действует с 1 по 30 июня 2021
                </p>
              </div>
              <div className="block_2_swiper_mobile_size">
                <img src={imageSwiperMobileSize} className="w-[260px]" alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperHome;
