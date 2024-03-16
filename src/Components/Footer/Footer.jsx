import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#2F2B4A] py-[30px] px-[40px] mt-[80px]">
      <div className="footer_block_1 flex md:justify-between flex-wrap gap-7 sm:justify-center">
        <div className="min_block_1_of_f_block_1">
          <h1 className="text-[#FFFFFF] text-[18px] font-[400]">
            Меню компании
          </h1>
          <div className="links flex flex-col gap-1 mt-[20px]">
            <Link to={``} className="text-[#f4f5f691] text-[16px] font-[400] hover:text-[white] hover:underline">
              Что такое Oner
            </Link>
            <Link to={``} className="text-[#f4f5f691] text-[16px] font-[400] hover:text-[white] hover:underline">
              Реквизиты и информация
            </Link>
            <Link to={``} className="text-[#f4f5f691] text-[16px] font-[400] hover:text-[white] hover:underline">
              Новости
            </Link>
            <Link to={``} className="text-[#f4f5f691] text-[16px] font-[400] hover:text-[white] hover:underline">
              Вакансии
            </Link>
            <Link to={``} className="text-[#f4f5f691] text-[16px] font-[400] hover:text-[white] hover:underline">
              Поставщикам
            </Link>
            <Link to={``} className="text-[#f4f5f691] text-[16px] font-[400] hover:text-[white] hover:underline">
              Контакты
            </Link>
          </div>
        </div>
        <div className="min_block_2_of_f_block_1">
          <h1 className="text-[#FFFFFF] text-[18px] font-[400]">Каталоги</h1>
          <div className="links flex flex-col gap-1 mt-[20px]">
            <Link to={``} className="text-[#f4f5f691] text-[16px] font-[400] hover:text-[white] hover:underline">
              Оригинальные запчасти
            </Link>
            <Link to={``} className="text-[#f4f5f691] text-[16px] font-[400] hover:text-[white] hover:underline">
              Неоригинальные запчасти
            </Link>
            <Link to={``} className="text-[#f4f5f691] text-[16px] font-[400] hover:text-[white] hover:underline">
              Запчасти для ТО
            </Link>
            <Link to={``} className="text-[#f4f5f691] text-[16px] font-[400] hover:text-[white] hover:underline">
              Автомасла
            </Link>
            <Link to={``} className="text-[#f4f5f691] text-[16px] font-[400] hover:text-[white] hover:underline">
              Аккумуляторы
            </Link>
            <Link to={``} className="text-[#f4f5f691] text-[16px] font-[400] hover:text-[white] hover:underline">
              Распродажа
            </Link>
          </div>
        </div>
        <div className="min_block_3_of_f_block_1">
          <h1 className="text-[#FFFFFF] text-[18px] font-[400]">Помощь</h1>
          <div className="links flex flex-col gap-1 mt-[20px]">
            <Link to={``} className="text-[#f4f5f691] text-[16px] font-[400] hover:text-[white] hover:underline">
              Часто задаваемые вопросы
            </Link>
            <Link to={``} className="text-[#f4f5f691] text-[16px] font-[400] hover:text-[white] hover:underline">
              Консультация Online
            </Link>
            <Link to={``} className="text-[#f4f5f691] text-[16px] font-[400] hover:text-[white] hover:underline">
              Оплата заказа
            </Link>
            <Link to={``} className="text-[#f4f5f691] text-[16px] font-[400] hover:text-[white] hover:underline">
              Доставка заказа
            </Link>
            <Link to={``} className="text-[#f4f5f691] text-[16px] font-[400] hover:text-[white] hover:underline">
              Возврат товара
            </Link>
            <Link to={``} className="text-[#f4f5f691] text-[16px] font-[400] hover:text-[white] hover:underline">
              Забыл пароль
            </Link>
          </div>
        </div>
        <div className="min_block_4_of_f_block_1">
          <h1 className="text-[#FFFFFF] text-[18px] font-[400]">
            Товары и бренды
          </h1>
          <div className="links flex flex-col gap-1 mt-[20px]">
            <Link to={``} className="text-[#f4f5f691] text-[16px] font-[400] hover:text-[white] hover:underline">
              Список брендов
            </Link>
            <Link to={``} className="text-[#f4f5f691] text-[16px] font-[400] hover:text-[white] hover:underline">
              Популярные товары
            </Link>
            <Link to={``} className="text-[#f4f5f691] text-[16px] font-[400] hover:text-[white] hover:underline">
              Наличие на складах
            </Link>
          </div>
        </div>
        <div className="min_block_5_of_f_block_1">
          <div className="block_1 flex items-start gap-3 bg-[#313e5c] h-[80px] p-[17px] rounded-[10px]">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.97963 3.72497C1.22145 2.32106 2.33735 1.28906 3.74573 1.07476C5.09517 0.869437 6.9464 0.666992 9.00008 0.666992C11.0538 0.666992 12.905 0.869437 14.2544 1.07476C15.6628 1.28906 16.7787 2.32105 17.0205 3.72497C17.1891 4.70342 17.3334 5.94637 17.3334 7.33366C17.3334 8.72095 17.1891 9.9639 17.0205 10.9424C16.7787 12.3463 15.6628 13.3783 14.2544 13.5926C13.0199 13.7804 11.3654 13.9658 9.52015 13.996L4.42402 17.0074C3.86851 17.3356 3.16675 16.9352 3.16675 16.29V13.4536C2.03888 13.0786 1.18721 12.1475 0.97963 10.9424C0.811091 9.9639 0.666748 8.72095 0.666748 7.33366C0.666748 5.94637 0.811091 4.70342 0.97963 3.72497ZM4.00008 5.66699C4.00008 5.20676 4.37318 4.83366 4.83342 4.83366H13.1667C13.627 4.83366 14.0001 5.20676 14.0001 5.66699C14.0001 6.12723 13.627 6.50033 13.1667 6.50033H4.83342C4.37318 6.50033 4.00008 6.12723 4.00008 5.66699ZM4.00008 9.00033C4.00008 8.54009 4.37318 8.16699 4.83342 8.16699H8.16675C8.62699 8.16699 9.00008 8.54009 9.00008 9.00033C9.00008 9.46056 8.62699 9.83366 8.16675 9.83366H4.83342C4.37318 9.83366 4.00008 9.46056 4.00008 9.00033Z"
                fill="white"
              />
            </svg>
            <div>
              <h1 className="text-[#fff] md:text-[19px] sm:text-[14px]">Консультация Online</h1>
              <h3 className="text-[#fff] md:text-[19px] sm:text-[14px]">Задавайте вопросы</h3>
            </div>
          </div>
          <div className="block_2 mt-[15px] flex items-start gap-2">
            <div className="block_circle w-[20px] h-[20px] bg-[#49C171] rounded-full opacity-[30%] flex justify-center items-center"></div>
            <h4 className="text-[#fff] max-w-[152px] md:text-[19px] sm:text-[14px]">Сервис работает в обычном режиме</h4>
          </div>
        </div>
      </div>
      <div className="footer_block_2"></div>
    </footer>
  );
};

export default Footer;
