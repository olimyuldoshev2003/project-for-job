import React from "react";
import "./style.css";
import SwiperHome from "../../Components/SwiperHome/SwiperHome";
import HomeSection2 from "../../Components/HomeSection2/HomeSection2";

//For Images
import img1S2 from "../../assets/Brakes.svg";
import img2S2 from "../../assets/front-door-part-sqaure.svg";
import img3S2 from "../../assets/gear-box-switch.svg";
import img4S2 from "../../assets/Battery, Eectricity, Generator.svg";
import img5S2 from "../../assets/Engine.svg";
import img6S2 from "../../assets/Safety belt.svg";
import img7S2 from "../../assets/gear-box-switch.svg";
import img8S2 from "../../assets/short-light-dashboard.svg";
import img9S2 from "../../assets/line_icons.svg";
import img10S2 from "../../assets/line_icons (1).svg";
import img11S2 from "../../assets/Wheel.svg";
import img12S2 from "../../assets/Group (1).svg";

//For React Icons
import { FaArrowRight } from "react-icons/fa6";
import Swiper2Home from "../../Components/Swiper2Home/Swiper2Home";
import S4Com from "../../Components/S4Com/S4Com";
import Swiper3Home from "../../Components/Swiper3Home/Swiper3Home";
import Swiper4Home from "../../Components/Swiper4Home/Swiper4Home";

const Home = () => {
  return (
    <div>
      <section className="section_1 mt-[25px] md:px-[40px] sm:px-[5px]">
        <SwiperHome />
      </section>

      <section className="section_2 mt-[50px] grid md:grid-cols-3 sm:grid-cols-2 md:px-[40px] sm:px-[5px]">
        <HomeSection2
          imagesS2={img1S2}
          productsS2={`Оригинальные запчасти`}
          viewersS2={`730`}
        />
        <HomeSection2
          imagesS2={img2S2}
          productsS2={`Кузовные запчасти`}
          viewersS2={`730`}
        />
        <HomeSection2
          imagesS2={img3S2}
          productsS2={`Автомасла`}
          viewersS2={`730`}
        />
        <HomeSection2
          imagesS2={img4S2}
          productsS2={`Аккумуляторы`}
          viewersS2={`730`}
        />
        <HomeSection2
          imagesS2={img5S2}
          productsS2={`Неоригинальные запчасти`}
          viewersS2={`278`}
        />
        <HomeSection2
          imagesS2={img6S2}
          productsS2={`Запчасти для ТО`}
          viewersS2={`730`}
        />
        <HomeSection2
          imagesS2={img7S2}
          productsS2={`Автохимия`}
          viewersS2={`730`}
        />
        <HomeSection2
          imagesS2={img8S2}
          productsS2={`Автолампы`}
          viewersS2={`730`}
        />
        <HomeSection2
          imagesS2={img9S2}
          productsS2={`Запчасти ВАЗ, ГАЗ, КАМАЗ`}
          viewersS2={`730`}
        />
        <HomeSection2
          imagesS2={img10S2}
          productsS2={`Автостёкла`}
          viewersS2={`730`}
        />
        <HomeSection2
          imagesS2={img11S2}
          productsS2={`Диски`}
          viewersS2={`730`}
        />
        <div className="last_block_s_2 flex justify-between items-center px-[40px] sm:flex-wrap md:flex-nowrap shadow-md hover:shadow-2xl">
          <div className="block_for_image_text flex md:items-center gap-2 sm:flex-col md:flex-row sm:items-start md:flex-wrap">
            <img src={img12S2} alt="" />
            <h1 className="md:text-[20px] sm:text-[14px] font-[400] text-[#fff]">
              Поставщикам
            </h1>
          </div>
          <FaArrowRight className="text-[#fff]" />
        </div>
      </section>
      <div className="for_white_bg bg-[#fff]">
        <section className="section_3 mt-[50px] md:px-[40px] sm:px-[5px] py-[50px]">
          <div className="block_1_of_s_3 flex justify-between">
            <h1 className="font-[600] text-[24px] text-[#1B1D1F]">Автомасла</h1>
            <button className="flex items-center gap-2 bg-[#F4F5F6] p-[10px] text-[#410F9E] text-[16px] rounded-[8px]">
              Все автомасла <FaArrowRight className="text-[19px]" />
            </button>
          </div>
          <div className="block_2_of_s_3 mt-[30px]">
            <Swiper2Home />
          </div>
        </section>
        <section className="section_4 mt-[50px] md:px-[40px] sm:px-[5px]">
          <S4Com />
        </section>
        <section className="section_5 mt-[90px] md:px-[40px] sm:px-[5px]">
          <h1 className="font-[600] text-[24px] text-[#1B1D1F]">Рекомендуем</h1>
          <Swiper3Home />
        </section>
        <section className="section_5 mt-[50px] md:px-[40px] sm:px-[5px]">
          <h1 className="font-[600] text-[24px] text-[#1B1D1F]">
            Часто продаваемые
          </h1>
          <Swiper4Home />
        </section>
      </div>
    </div>
  );
};

export default Home;
