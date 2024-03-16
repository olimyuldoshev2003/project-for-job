import React from "react";

//For Images
import imgStar from "../../assets/1.svg";

//For React Icons
import { BsCart } from "react-icons/bs";

const CardsS5 = ({ imagesS3 }) => {
  return (
    <div className="border-[1px] border-[#DEDEE2] p-[17px] w-[300px] rounded-[10px] hover:shadow-md min-h-[410px] cursor-pointer">
      <div className="for_img flex justify-center">

      <img src={imagesS3} alt="" className=" object-fill" />
      </div>
      <div className="for_block_2_swiper">
        <div className="for_flex_the_block_image_text flex items-center justify-between">
          <h1 className="text-[14px] font-[400] text-[#7A7680]">
            Артикул: <span className="text-[#4a4a4b]">153789</span>
          </h1>
          <div className="for_image_and_text flex items-center gap-1">
            <img src={imgStar} alt="" />
            <h3 className="text-[#1C1D1E] text-[14px] font-[400]">4.0 (51)</h3>
          </div>
        </div>
        <h2 className="mt-[10px] text-[16px] font-[600] text-[#1B1D1F]">
          Mobil SUPER 3000 X1 5W-40, 1 л. Масло моторное.
        </h2>
        <div className="block_for_price_and_btn_cart flex justify-between items-center mt-[20px]">
          <div className="block_for_price flex gap-1">
            <h1 className="text-[#1B1D1F] text-[30px] font-[600]">2 334 ₽</h1>
            <h4 className="line-through text-[#7A7680] text-[16px] font-[400]">
              2 864 ₽
            </h4>
          </div>
          <BsCart className="text-[#410F9E] text-[40px] p-[7px] border-[2px] border-[#410F9E] cursor-pointer rounded-[15%] hover:bg-[#410F9E] hover:text-[#fff]" />
        </div>
      </div>
    </div>
  );
};

export default CardsS5;
