import React from "react";

//react icons
import { IoSearchOutline } from "react-icons/io5";

const SearchInput = () => {
  return (
    <div className="relative md:w-[360px] sm:w-[230px]">
      <input
        type="text"
        name=""
        id=""
        placeholder="Введите номер запчасти или VIN"
        className=" bg-[#F4F5F6] rounded-[6px] border-[1px] border-[#DEDEE2] w-[100%] p-[10px_10px] outline-none text-[#000] placeholder:text-[#55556D] text-[15px]"
      />
      <button className="absolute right-[10px] top-[12px]">
        <IoSearchOutline className="w-[24px] h-[24px] text-[#410F9E]" />
      </button>
    </div>
  );
};

export default SearchInput;
