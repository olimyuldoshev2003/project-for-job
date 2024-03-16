import React from 'react'
import "./S4Com.css"
import { BsArrowRight } from 'react-icons/bs';
import { FaArrowRight } from 'react-icons/fa6';

const S4Com = () => {

  return (
    <div className="flex md:justify-between gap-5 flex-wrap sm:justify-center">
      <div className="block_1_s_4_component rounded-[2px]">
        <h1>Моторные масла Genesis</h1>
        <button>
          Перейти <FaArrowRight />
        </button>
      </div>
      <div className="block_2_s_4_component rounded-[2px]">
        <h1>Шины зимние дешевле</h1>
        <button>
          Выбрать <FaArrowRight />
        </button>
      </div>
      <div className="block_3_s_4_component rounded-[2px]">
        <h1>Запчасти для ТО</h1>
        <button>
          Смотреть <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default S4Com