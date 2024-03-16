import React from 'react'

const HomeSection2 = ({imagesS2, productsS2, viewersS2}) => {
  return (
    <div className="flex items-center gap-4 sm:flex-col md:flex-row shadow-md hover:shadow-2xl p-[16px] cursor-pointer">
      <div className="block_1_image">
        <img src={imagesS2} alt="" />
      </div>
      <div className="block_2_texts">
        <h1 className="text-[20px] font-[400] text-[#1B1D1F]">{productsS2}</h1>
        <p className="flex items-center gap-2 text-[#505255] text-[14px] font-[400]">
          <span>{viewersS2}</span>товаров
        </p>
      </div>
    </div>
  );
}

export default HomeSection2