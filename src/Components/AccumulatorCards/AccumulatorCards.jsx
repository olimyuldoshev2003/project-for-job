import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React from "react";

//For icons of MUI
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccumulatorCards = ({ imgAccCard, accName }) => {
  return (
    <div className="p-[24px] bg-[#fff]">
      <div className="block_1_img">
        <img src={imgAccCard} alt="" />
      </div>
      <div className="block_2_texts mt-[20px] flex flex-col gap-[10px]">
        <h1 className={"text-[18px] font-[600] text-[#1B1D1F]"}>{accName}</h1>
        <p className={`text-[#1B1D1F] text-[16px] font-[400] max-w-[267px]`}>
          Батарея аккумуляторная "S4 Silver", 12в 60а/ч
        </p>
        <p className="text-[16px] font-[400] text-[#7A7680]">
          Артикул: <span className="text-[#5e5ef8]">0092S40240</span>
        </p>
      </div>
      <div className="block_3_btn mt-[20px]">
        <button className="text-[16px] font-[400] text-[#410F9E] text-center w-[100%] py-[10px] bg-[#5946D71A] rounded-[4px] hover:bg-[#410F9E] hover:text-[#fff] hover:duration-500">
          Цены от 12 739 ₽
        </button>
      </div>
      <div className="for_accordion mt-[20px]">
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h1 className="text-[16px] text-[500] text-[gray]">
              More Information
            </h1>
          </AccordionSummary>
          <AccordionDetails>
            <div className="block_text_accordion ">
              <p className="text-[16px] font-[400] text-[#7A7680] max-w-[216px]">
                Напряжение, B: <span className="text-[#1B1D1F]">12</span>
              </p>
              <p className="text-[16px] font-[400] text-[#7A7680] max-w-[216px]">
                Емкость батареи, B: <span className="text-[#1B1D1F]">60</span>
              </p>
              <p className="text-[16px] font-[400] text-[#7A7680] max-w-[216px]">
                Расположение полюсных выводов, B:{" "}
                <span className="text-[#1B1D1F]">0 (обратная)</span>
              </p>
              <p className="text-[16px] font-[400] text-[#7A7680] max-w-[216px]">
                Клеммы, B: <span className="text-[#1B1D1F]">1</span>
              </p>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default AccumulatorCards;
