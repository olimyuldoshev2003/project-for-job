import React, {useState} from "react";
import "./Header.css"

//react icons
import { IoLocationOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";

//For Images
import logoHeader from "../../assets/logo.svg";
import SearchInput from "../SearchInput/SearchInput";
import { Link } from "react-router-dom";
import img1HeaderMobileSize from "../../assets/Brakes.svg";
import img2HeaderMobileSize from "../../assets/front-door-part-sqaure.svg";
import img3HeaderMobileSize from "../../assets/gear-box-switch.svg";
import img4HeaderMobileSize from "../../assets/Battery, Eectricity, Generator.svg";
import img5HeaderMobileSize from "../../assets/Engine.svg";
import img6HeaderMobileSize from "../../assets/Safety belt.svg";
import img7HeaderMobileSize from "../../assets/gear-box-switch.svg";
import img8HeaderMobileSize from "../../assets/short-light-dashboard.svg";
import img9HeaderMobileSize from "../../assets/line_icons.svg";
import img10HeaderMobileSize from "../../assets/line_icons (1).svg";
import img11HeaderMobileSize from "../../assets/Wheel.svg";
import img12HeaderMobileSize from "../../assets/Group (1).svg";

const Header = () => {

  const [isMenuClicked, setIsMenuClicked] = useState(false);

  return (
    <header className="pt-[20px] md:px-[40px] sm:px-[5px] shadow-2xl flex flex-col gap-2  py-3 bg-[#fff] animation_header">
      <div className="header_block_1 flex gap-3 items-center justify-between">
        <div className="menu_for_mobile_size sm:block lg:hidden">
          <IoMenu
            className="text-[42px] cursor-pointer"
            onClick={() => {
              setIsMenuClicked(!isMenuClicked);
            }}
          />
        </div>
        <Link to={`/`}>
          <img src={logoHeader} alt="" />
        </Link>
        <div className="search_input_block sm:hidden lg:block">
          <SearchInput />
        </div>
        <div className="block_icon_text_1 flex items-center gap-[5px]">
          <IoLocationOutline className="w-[24px] h-[24px] text-[#410F9E]" />
          <h1 className="text-[16px] font-[400] text-[#1B1D1F] sm:hidden lg:block">
            Санкт-Петербург
          </h1>
        </div>
        <div className="block_icon_text_2 md:flex md:items-center md:gap-[5px] sm:hidden">
          <LuPhoneCall className="w-[24px] h-[24px] text-[#410F9E]" />
          <h1 className="md:text-[14px] xl:text-[18px] font-[600] text-[#1B1D1F]">
            +7 (347) 229-46-45
          </h1>
        </div>
        <div className="for_icon_cart sm:block md:hidden">
          <BsCart className="text-[#410F9E] text-[26px]" />
        </div>
        <div className="block_icon_text_3 flex items-center gap-[5px]">
          <FaRegUser className="w-[24px] h-[24px] text-[#410F9E]" />
          <h1 className="login_singUp_links flex items-center gap-1 text-[16px] font-[400] text-[#1B1D1F] sm:hidden lg:block">
            <Link to={``}>Вход</Link>
            <span>/</span>
            <Link to={``}>Регистрация</Link>
          </h1>
        </div>
      </div>
      <div className="header_block_2 border-t-[1px] border-t-[#E3E3E8] pt-[20px] flex justify-between items-center">
        <div className="button_all_categories">
          <button className="flex items-center gap-3 bg-[#410F9E] p-[12px] rounded-[9px] text-[#fff] text-[16px] font-[600]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.16683 8.83268C1.70641 8.83268 1.3335 8.45977 1.3335 7.99935C1.3335 7.53893 1.70641 7.16602 2.16683 7.16602C2.62725 7.16602 3.00016 7.53893 3.00016 7.99935C3.00016 8.45977 2.62725 8.83268 2.16683 8.83268Z"
                fill="white"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.00033 8.83268C7.53991 8.83268 7.16699 8.45977 7.16699 7.99935C7.16699 7.53893 7.53991 7.16602 8.00033 7.16602C8.46074 7.16602 8.83366 7.53893 8.83366 7.99935C8.83366 8.45977 8.46074 8.83268 8.00033 8.83268Z"
                fill="white"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.8333 8.83268C13.3729 8.83268 13 8.45977 13 7.99935C13 7.53893 13.3729 7.16602 13.8333 7.16602C14.2937 7.16602 14.6667 7.53893 14.6667 7.99935C14.6667 8.45977 14.2937 8.83268 13.8333 8.83268Z"
                fill="white"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.16683 14.6667C1.70641 14.6667 1.3335 14.2937 1.3335 13.8333C1.3335 13.3729 1.70641 13 2.16683 13C2.62725 13 3.00016 13.3729 3.00016 13.8333C3.00016 14.2937 2.62725 14.6667 2.16683 14.6667Z"
                fill="white"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.00033 14.6667C7.53991 14.6667 7.16699 14.2937 7.16699 13.8333C7.16699 13.3729 7.53991 13 8.00033 13C8.46074 13 8.83366 13.3729 8.83366 13.8333C8.83366 14.2937 8.46074 14.6667 8.00033 14.6667Z"
                fill="white"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.8333 14.6667C13.3729 14.6667 13 14.2937 13 13.8333C13 13.3729 13.3729 13 13.8333 13C14.2937 13 14.6667 13.3729 14.6667 13.8333C14.6667 14.2937 14.2937 14.6667 13.8333 14.6667Z"
                fill="white"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.16683 2.99967C1.70641 2.99967 1.3335 2.62676 1.3335 2.16634C1.3335 1.70592 1.70641 1.33301 2.16683 1.33301C2.62725 1.33301 3.00016 1.70592 3.00016 2.16634C3.00016 2.62676 2.62725 2.99967 2.16683 2.99967Z"
                fill="white"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.00033 2.99967C7.53991 2.99967 7.16699 2.62676 7.16699 2.16634C7.16699 1.70592 7.53991 1.33301 8.00033 1.33301C8.46074 1.33301 8.83366 1.70592 8.83366 2.16634C8.83366 2.62676 8.46074 2.99967 8.00033 2.99967Z"
                fill="white"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.8333 2.99967C13.3729 2.99967 13 2.62676 13 2.16634C13 1.70592 13.3729 1.33301 13.8333 1.33301C14.2937 1.33301 14.6667 1.70592 14.6667 2.16634C14.6667 2.62676 14.2937 2.99967 13.8333 2.99967Z"
                fill="white"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h2 className="sm:hidden md:block">Все категории</h2>
          </button>
        </div>
        <nav className="navigation_bar lg:flex lg:items-center sm:hidden">
          <ul className="flex items-center flex-wrap  gap-[5px] text-[16px] font-[400] text-[#1B1D1F]">
            <li>
              <Link
                to={``}
                className="p-[10px] hover:bg-[#F4F5F6] hover:rounded-[8px]"
              >
                Запчасти для ТО
              </Link>
            </li>
            <li>
              <Link
                to={``}
                className="p-[10px] hover:bg-[#F4F5F6] hover:rounded-[8px]"
              >
                Автомасла
              </Link>
            </li>
            <li>
              <Link
                to={``}
                className="p-[10px] hover:bg-[#F4F5F6] hover:rounded-[8px]"
              >
                Оригинальные запчасти
              </Link>
            </li>
            <li>
              <Link
                to={``}
                className="p-[10px] hover:bg-[#F4F5F6] hover:rounded-[8px]"
              >
                Неоригинальные запчасти
              </Link>
            </li>
            <li>
              <Link
                to={``}
                className="p-[10px] hover:bg-[#F4F5F6] hover:rounded-[8px]"
              >
                Лампочки
              </Link>
            </li>
            <li>
              <Link
                to={`/accumulator`}
                className="p-[10px] hover:bg-[#F4F5F6] hover:rounded-[8px]"
              >
                Аккумуляторы
              </Link>
            </li>
          </ul>
        </nav>
        <div className="search_input_for_mobile_size sm:block lg:hidden">
          <SearchInput />
        </div>
        <div className="button_cart md:flex md:items-center sm:hidden">
          <button className="flex items-center gap-1 text-[#1B1D1F] bg-[#F4F5F6] p-[8px_17px] rounded-[8px]">
            <BsCart className="text-[#410F9E] text-[26px]" />
            <h3 className="text-[16px] font-[400]">Корзина</h3>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="20" height="20" rx="10" fill="#FB6019" />
              <path
                d="M10.1025 8.05273C10.5036 8.05273 10.8841 8.13021 11.2441 8.28516C11.6042 8.43555 11.9163 8.64974 12.1807 8.92773C12.4495 9.20117 12.6615 9.52018 12.8164 9.88477C12.9714 10.2493 13.0488 10.6413 13.0488 11.0605C13.0488 11.4798 12.9691 11.8717 12.8096 12.2363C12.6501 12.6009 12.4313 12.9222 12.1533 13.2002C11.8799 13.4736 11.5563 13.6878 11.1826 13.8428C10.8089 13.9932 10.4033 14.0684 9.96582 14.0684C9.52832 14.0684 9.13184 14.0046 8.77637 13.877C8.4209 13.7448 8.11784 13.5671 7.86719 13.3438C7.61654 13.1204 7.41829 12.863 7.27246 12.5713C7.12663 12.2751 7.0446 11.9583 7.02637 11.6211H8.35254C8.37077 11.7806 8.4209 11.9355 8.50293 12.0859C8.58952 12.2318 8.70345 12.3662 8.84473 12.4893C8.986 12.6077 9.15234 12.7035 9.34375 12.7764C9.53516 12.8447 9.74251 12.8789 9.96582 12.8789C10.2074 12.8789 10.4352 12.8333 10.6494 12.7422C10.8636 12.6465 11.0505 12.5212 11.21 12.3662C11.3695 12.2067 11.4925 12.0153 11.5791 11.792C11.6702 11.5641 11.7158 11.3203 11.7158 11.0605C11.7158 10.8008 11.6702 10.5592 11.5791 10.3359C11.4925 10.1081 11.3695 9.91667 11.21 9.76172C11.0505 9.60221 10.8636 9.47689 10.6494 9.38574C10.4352 9.29004 10.2074 9.24219 9.96582 9.24219C9.68783 9.24219 9.44401 9.29915 9.23438 9.41309C9.0293 9.52246 8.86296 9.64323 8.73535 9.77539C8.57585 9.9349 8.44824 10.1058 8.35254 10.2881H7.23828L7.79883 5.18164H12.4883V6.43945H8.92676L8.70801 8.53809C8.81283 8.45605 8.93815 8.3763 9.08398 8.29883C9.20703 8.23503 9.35286 8.17806 9.52148 8.12793C9.69466 8.0778 9.88835 8.05273 10.1025 8.05273Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* {isMenuClicked ? ( */}
        <div className={`${isMenuClicked ? `block showed_menu`:`hidden hidden_menu`} top-[148px] w-[100%]bg-[#fff] mt-[24px]`}>
          <nav className="navigation_bar_mobile_size sm:flex sm:items-center lg:hidden">
            <ul className="flex flex-col justify-center w-[100%] gap-[5px] font-[400] text-[#1B1D1F] px-[10px]">
              <li>
                <Link
                  to={``}
                  className="p-[10px] hover:bg-[#F4F5F6] hover:rounded-[8px] flex items-center gap-3 text-[#1B1D1F] text-[17px] font-[500]"
                >
                  <img
                    src={img5HeaderMobileSize}
                    alt=""
                    className="w-[30px] h-[30px]"
                  />
                  Запчасти для ТО
                </Link>
              </li>
              <li>
                <Link
                  to={``}
                  className="p-[10px] hover:bg-[#F4F5F6] hover:rounded-[8px] flex items-center gap-3 text-[#1B1D1F] text-[17px] font-[500]"
                >
                  <img
                    src={img3HeaderMobileSize}
                    alt=""
                    className="w-[30px] h-[30px]"
                  />
                  Автомасла
                </Link>
              </li>
              <li>
                <Link
                  to={``}
                  className="p-[10px] hover:bg-[#F4F5F6] hover:rounded-[8px] flex items-center gap-3 text-[#1B1D1F] text-[17px] font-[500]"
                >
                  <img
                    src={img1HeaderMobileSize}
                    alt=""
                    className="w-[30px] h-[30px]"
                  />
                  Оригинальные запчасти
                </Link>
              </li>
              <li>
                <Link
                  to={``}
                  className="p-[10px] hover:bg-[#F4F5F6] hover:rounded-[8px] flex items-center gap-3 text-[#1B1D1F] text-[17px] font-[500]"
                >
                  <img
                    src={img2HeaderMobileSize}
                    alt=""
                    className="w-[30px] h-[30px]"
                  />
                  Неоригинальные запчасти
                </Link>
              </li>
              <li>
                <Link
                  to={``}
                  className="p-[10px] hover:bg-[#F4F5F6] hover:rounded-[8px] flex items-center gap-3 text-[#1B1D1F] text-[17px] font-[500]"
                >
                  <img
                    src={img5HeaderMobileSize}
                    alt=""
                    className="w-[30px] h-[30px]"
                  />
                  Лампочки
                </Link>
              </li>
              <li>
                <Link
                  to={`/accumulator`}
                  className="p-[10px] hover:bg-[#F4F5F6] hover:rounded-[8px] flex items-center gap-3 text-[#1B1D1F] text-[17px] font-[500]"
                >
                  <img
                    src={img4HeaderMobileSize}
                    alt=""
                    className="w-[30px] h-[30px]"
                  />
                  Аккумуляторы
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      {/* ) : null} */}
    </header>
  );
};

export default Header;
