import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Modal,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import AccumulatorCards from "../../Components/AccumulatorCards/AccumulatorCards";

//For images
import img1AccCards from "../../assets/image 98.svg";
import img2AccCards from "../../assets/image 95.svg";
import img3AccCards from "../../assets/image 97.svg";
import filterIcon from "../../assets/FilterIcon.svg";

const Accumulator = () => {
  const [modalFilter, setModalFilter] = useState(false);

  return (
    <div className="pt-[10px]">
      <section className="section_1 md:px-[40px] sm:px-[5px]">
        <h1 className="text-[#1B1D1F] text-[24px] font-[500]">
          Каталог аккумуляторов
        </h1>
        <div className="block_filter_with_btn_inside_modal_mobile_size sm:block md:hidden w-[100%] bg-[#fff] mt-[20px] p-[10px]">
          <button
            className="flex justify-center items-center w-[100%] py-[10px] border-[1px] border-[#DEDEE2]"
            onClick={() => setModalFilter(true)}
          >
            <img src={filterIcon} alt="" /> Фильтры
          </button>
        </div>
        <div className="block_filter_and_items mt-[30px] flex">
          <div className="filter_block lg:w-[400px] md:w-[600px] sm:hidden md:block bg-[#fff] p-[12px]">
            <div className="accordion_1">
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <h1 className="text-[#1B1D1F] text-[500] font-[18px]">
                    Бренд
                  </h1>
                </AccordionSummary>
                <AccordionDetails>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Быстрый поиск"
                    className="border-[1px] border-[#DEDEE2] outline-none p-[10px] w-[100%]"
                  />
                  <div className="for_checkbox_label mt-[20px] flex flex-col gap-3">
                    <div className="label_input_1 flex items-center gap-3 ">
                      <input
                        type="checkbox"
                        className="w-[20px] h-[20px] outline-none cursor-pointer"
                        name=""
                        id="bosh"
                      />
                      <label className="cursor-pointer" htmlFor="bosh">
                        Bosh (1450)
                      </label>
                    </div>
                    <div className="label_input_2 flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-[20px] h-[20px] outline-none cursor-pointer"
                        name=""
                        id="varta"
                      />
                      <label className="cursor-pointer" htmlFor="varta">
                        Varta
                      </label>
                    </div>
                    <div className="label_input_3 flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-[20px] h-[20px] outline-none cursor-pointer"
                        name=""
                        id="delco"
                      />
                      <label className="cursor-pointer" htmlFor="delco">
                        Ac Delco
                      </label>
                    </div>
                    <div className="label_input_4 flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-[20px] h-[20px] outline-none cursor-pointer"
                        name=""
                        id="banner"
                      />
                      <label className="cursor-pointer" htmlFor="banner">
                        Banner
                      </label>
                    </div>
                    <div className="label_input_5 flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-[20px] h-[20px] outline-none cursor-pointer"
                        name=""
                        id="berga"
                      />
                      <label className="cursor-pointer" htmlFor="berga">
                        Berga
                      </label>
                    </div>
                  </div>
                  <div className="for_link mt-[20px]">
                    <Link to={``} className="text-[blue]">
                      Показать все
                    </Link>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="accordion_2">
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <h1 className="text-[#1B1D1F] text-[500] font-[18px]">
                    Емкость батареи, А/ч
                  </h1>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="for_inputs flex">
                    <input
                      type="text"
                      className="w-[100%] p-[10px] bg-[#F4F5F6] border-[1px] border-[#DEDEE2] outline-none"
                      placeholder="от 30"
                      name=""
                      id=""
                    />
                    <input
                      type="text"
                      className="w-[100%] p-[10px] bg-[#F4F5F6] border-[1px] border-[#DEDEE2] outline-none"
                      name=""
                      id=""
                      placeholder="до 430"
                    />
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="accordion_3">
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <h1 className="text-[#1B1D1F] text-[500] font-[18px]">
                    Крепление аккумулятора
                  </h1>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="for_checkbox_label flex flex-col gap-3">
                    <div className="label_input_1 flex items-center gap-3 ">
                      <input
                        type="checkbox"
                        className="w-[20px] h-[20px] outline-none cursor-pointer"
                        name=""
                        id="type1"
                      />
                      <label className="cursor-pointer" htmlFor="type1">
                        B00
                      </label>
                    </div>
                    <div className="label_input_2 flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-[20px] h-[20px] outline-none cursor-pointer"
                        name=""
                        id="type2"
                      />
                      <label className="cursor-pointer" htmlFor="type2">
                        B03
                      </label>
                    </div>
                    <div className="label_input_3 flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-[20px] h-[20px] outline-none cursor-pointer"
                        name=""
                        id="type3"
                      />
                      <label className="cursor-pointer" htmlFor="type3">
                        B06
                      </label>
                    </div>
                    <div className="label_input_4 flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-[20px] h-[20px] outline-none cursor-pointer"
                        name=""
                        id="type4"
                      />
                      <label className="cursor-pointer" htmlFor="type4">
                        B09
                      </label>
                    </div>
                    <div className="label_input_5 flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-[20px] h-[20px] outline-none cursor-pointer"
                        name=""
                        id="type5"
                      />
                      <label className="cursor-pointer" htmlFor="type5">
                        B13
                      </label>
                    </div>
                  </div>
                  <div className="for_link mt-[20px]">
                    <Link to={``} className="text-[blue]">
                      Показать все
                    </Link>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="accordion_4">
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <h1 className="text-[#1B1D1F] text-[500] font-[18px]">
                    Клеммы
                  </h1>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="for_checkbox_label flex flex-col gap-3">
                    <div className="label_input_1 flex items-center gap-3 ">
                      <input
                        type="checkbox"
                        className="w-[20px] h-[20px] outline-none cursor-pointer"
                        name=""
                        id="firstOne"
                      />
                      <label className="cursor-pointer" htmlFor="firstOne">
                        1
                      </label>
                    </div>
                    <div className="label_input_2 flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-[20px] h-[20px] outline-none cursor-pointer"
                        name=""
                        id="devideByThree"
                      />
                      <label className="cursor-pointer" htmlFor="devideByThree">
                        1/3
                      </label>
                    </div>
                    <div className="label_input_3 flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-[20px] h-[20px] outline-none cursor-pointer"
                        name=""
                        id="twentyOne"
                      />
                      <label className="cursor-pointer" htmlFor="twentyOne">
                        21 (234)
                      </label>
                    </div>
                    <div className="label_input_4 flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-[20px] h-[20px] outline-none cursor-pointer"
                        name=""
                        id="firstThree"
                      />
                      <label className="cursor-pointer" htmlFor="firstThree">
                        3 (JIS)
                      </label>
                    </div>
                    <div className="label_input_5 flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-[20px] h-[20px] outline-none cursor-pointer"
                        name=""
                        id="eight"
                      />
                      <label className="cursor-pointer" htmlFor="eight">
                        8
                      </label>
                    </div>
                  </div>
                  <div className="for_link mt-[20px]">
                    <Link to={``} className="text-[blue]">
                      Показать все
                    </Link>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="accordion_5">
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <h1 className="text-[#1B1D1F] text-[500] font-[18px]">
                    Напряжение, В
                  </h1>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="for_checkbox_label flex flex-col gap-3">
                    <div className="label_input_1 flex items-center gap-3 ">
                      <input
                        type="checkbox"
                        className="w-[20px] h-[20px] outline-none cursor-pointer"
                        name=""
                        id="twelve"
                      />
                      <label className="cursor-pointer" htmlFor="twelve">
                        12
                      </label>
                    </div>
                    <div className="label_input_2 flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-[20px] h-[20px] outline-none cursor-pointer"
                        name=""
                        id="firstSix"
                      />
                      <label className="cursor-pointer" htmlFor="firstSix">
                        6
                      </label>
                    </div>
                  </div>
                  {/* <div className="for_link mt-[20px]">
                    <Link to={``} className="text-[blue]">
                      Показать все
                    </Link>
                  </div> */}
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="accordion_6">
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <h1 className="text-[#1B1D1F] text-[500] font-[18px]">
                    Номинальная мощность, Вт
                  </h1>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="for_inputs flex">
                    <input
                      type="text"
                      className="w-[100%] p-[10px] bg-[#F4F5F6] border-[1px] border-[#DEDEE2] outline-none"
                      placeholder="от 290"
                      name=""
                      id=""
                    />
                    <input
                      type="text"
                      className="w-[100%] p-[10px] bg-[#F4F5F6] border-[1px] border-[#DEDEE2] outline-none"
                      name=""
                      id=""
                      placeholder="до 2400"
                    />
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="accordion_7">
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <h1 className="text-[#1B1D1F] text-[500] font-[18px]">
                    Расположение полюсных выводов
                  </h1>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="for_checkbox_label flex flex-col gap-3">
                    <div className="label_input_1 flex items-center gap-3 ">
                      <input
                        type="checkbox"
                        className="w-[20px] h-[20px] outline-none cursor-pointer"
                        name=""
                        id="firstZero"
                      />
                      <label className="cursor-pointer" htmlFor="firstZero">
                        0 (обратная)
                      </label>
                    </div>
                    <div className="label_input_2 flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-[20px] h-[20px] outline-none cursor-pointer"
                        name=""
                        id="secondOne"
                      />
                      <label className="cursor-pointer" htmlFor="secondOne">
                        1 (прямая)
                      </label>
                    </div>
                    <div className="label_input_3 flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-[20px] h-[20px] outline-none cursor-pointer"
                        name=""
                        id="secondThree"
                      />
                      <label className="cursor-pointer" htmlFor="secondThree">
                        3
                      </label>
                    </div>
                    <div className="label_input_4 flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-[20px] h-[20px] outline-none cursor-pointer"
                        name=""
                        id="secondSix"
                      />
                      <label className="cursor-pointer" htmlFor="secondSix">
                        6
                      </label>
                    </div>
                    <div className="label_input_5 flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-[20px] h-[20px] outline-none cursor-pointer"
                        name=""
                        id="firstNine"
                      />
                      <label className="cursor-pointer" htmlFor="firstNine">
                        9
                      </label>
                    </div>
                  </div>
                  <div className="for_link mt-[20px]">
                    <Link to={``} className="text-[blue]">
                      Показать все
                    </Link>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="accordion_8">
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <h1 className="text-[#1B1D1F] text-[500] font-[18px]">
                    Серия
                  </h1>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="for_checkbox_label flex flex-col gap-3">
                    <div className="label_input_1 flex items-center gap-3 ">
                      <input
                        type="checkbox"
                        className="w-[20px] h-[20px] outline-none cursor-pointer"
                        name=""
                        id="secondZero"
                      />
                      <label className="cursor-pointer" htmlFor="secondZero">
                        0 (обратная)
                      </label>
                    </div>
                    <div className="label_input_2 flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-[20px] h-[20px] outline-none cursor-pointer"
                        name=""
                        id="thirdOne"
                      />
                      <label className="cursor-pointer" htmlFor="thirdOne">
                        1 (прямая)
                      </label>
                    </div>
                    <div className="label_input_3 flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-[20px] h-[20px] outline-none cursor-pointer"
                        name=""
                        id="thirdThree"
                      />
                      <label className="cursor-pointer" htmlFor="thirdThree">
                        3
                      </label>
                    </div>
                    <div className="label_input_4 flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-[20px] h-[20px] outline-none cursor-pointer"
                        name=""
                        id="thirdSix"
                      />
                      <label className="cursor-pointer" htmlFor="thirdSix">
                        6
                      </label>
                    </div>
                    <div className="label_input_5 flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-[20px] h-[20px] outline-none cursor-pointer"
                        name=""
                        id="secondNine"
                      />
                      <label className="cursor-pointer" htmlFor="secondNine">
                        9
                      </label>
                    </div>
                  </div>
                  <div className="for_link mt-[20px]">
                    <Link to={``} className="text-[blue]">
                      Показать все
                    </Link>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="accordion_9">
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <h1 className="text-[#1B1D1F] text-[500] font-[18px]">
                    Ток холодной прокрутки DIN, А
                  </h1>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="for_inputs flex">
                    <input
                      type="text"
                      className="w-[100%] p-[10px] bg-[#F4F5F6] border-[1px] border-[#DEDEE2] outline-none"
                      placeholder="от 8"
                      name=""
                      id=""
                    />
                    <input
                      type="text"
                      className="w-[100%] p-[10px] bg-[#F4F5F6] border-[1px] border-[#DEDEE2] outline-none"
                      name=""
                      id=""
                      placeholder="до 680"
                    />
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="accordion_10">
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <h1 className="text-[#1B1D1F] text-[500] font-[18px]">
                    Ток холодной прокрутки EN, А
                  </h1>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="for_inputs flex">
                    <input
                      type="text"
                      className="w-[100%] p-[10px] bg-[#F4F5F6] border-[1px] border-[#DEDEE2] outline-none"
                      placeholder="от 0"
                      name=""
                      id=""
                    />
                    <input
                      type="text"
                      className="w-[100%] p-[10px] bg-[#F4F5F6] border-[1px] border-[#DEDEE2] outline-none"
                      name=""
                      id=""
                      placeholder="до 1450"
                    />
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
            <button className="bg-[#F4F5F6] w-[100%] py-[10px] mt-[20px] text-[#7A7680] text-[18px] font-[400]">
              Сбросить фильтры
            </button>
          </div>
          <div className="item_block flex justify-center flex-wrap w-[130%] gap-3">
            <AccumulatorCards imgAccCard={img1AccCards} accName={`Bosh`} />
            <AccumulatorCards imgAccCard={img2AccCards} accName={`Bosh`} />
            <AccumulatorCards imgAccCard={img3AccCards} accName={`Varta`} />
            <AccumulatorCards imgAccCard={img3AccCards} accName={`Varta`} />
            <AccumulatorCards imgAccCard={img1AccCards} accName={`Bosh`} />
            <AccumulatorCards imgAccCard={img2AccCards} accName={`Bosh`} />
            <AccumulatorCards imgAccCard={img2AccCards} accName={`Bosh`} />
            <AccumulatorCards imgAccCard={img3AccCards} accName={`VArta`} />
            <AccumulatorCards imgAccCard={img1AccCards} accName={`Bosh`} />
            <AccumulatorCards imgAccCard={img3AccCards} accName={`Varta`} />
            <AccumulatorCards imgAccCard={img1AccCards} accName={`Bosh`} />
            <AccumulatorCards imgAccCard={img2AccCards} accName={`Bosh`} />
            <AccumulatorCards imgAccCard={img2AccCards} accName={`Bosh`} />
            <AccumulatorCards imgAccCard={img3AccCards} accName={`Varta`} />
            <AccumulatorCards imgAccCard={img1AccCards} accName={`Bosh`} />
          </div>
        </div>
        <div className="for_modal_mobile_size sm:block md:hidden">
          <Modal
            open={modalFilter}
            onClose={() => setModalFilter(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center items-center"
          >
            <Box className="w-[280px] h-[90vh] overflow-auto p-[10px] bg-[#fff] rounded-[10px]">
              <span className="fixed right-[30px] top-[10px] text-[#fff] text-[40px]" onClick={() => setModalFilter(false)}>&times;</span>
              <h1 className="text-center text-[23px] font-[600]">Filter</h1>
                <div className="accordion_1 mt-[20px]">
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <h1 className="text-[#1B1D1F] text-[500] font-[18px]">
                        Бренд
                      </h1>
                    </AccordionSummary>
                    <AccordionDetails>
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Быстрый поиск"
                        className="border-[1px] border-[#DEDEE2] outline-none p-[10px] w-[100%]"
                      />
                      <div className="for_checkbox_label mt-[20px] flex flex-col gap-3">
                        <div className="label_input_1 flex items-center gap-3 ">
                          <input
                            type="checkbox"
                            className="w-[20px] h-[20px] outline-none cursor-pointer"
                            name=""
                            id="bosh"
                          />
                          <label className="cursor-pointer" htmlFor="bosh">
                            Bosh (1450)
                          </label>
                        </div>
                        <div className="label_input_2 flex items-center gap-3">
                          <input
                            type="checkbox"
                            className="w-[20px] h-[20px] outline-none cursor-pointer"
                            name=""
                            id="varta"
                          />
                          <label className="cursor-pointer" htmlFor="varta">
                            Varta
                          </label>
                        </div>
                        <div className="label_input_3 flex items-center gap-3">
                          <input
                            type="checkbox"
                            className="w-[20px] h-[20px] outline-none cursor-pointer"
                            name=""
                            id="delco"
                          />
                          <label className="cursor-pointer" htmlFor="delco">
                            Ac Delco
                          </label>
                        </div>
                        <div className="label_input_4 flex items-center gap-3">
                          <input
                            type="checkbox"
                            className="w-[20px] h-[20px] outline-none cursor-pointer"
                            name=""
                            id="banner"
                          />
                          <label className="cursor-pointer" htmlFor="banner">
                            Banner
                          </label>
                        </div>
                        <div className="label_input_5 flex items-center gap-3">
                          <input
                            type="checkbox"
                            className="w-[20px] h-[20px] outline-none cursor-pointer"
                            name=""
                            id="berga"
                          />
                          <label className="cursor-pointer" htmlFor="berga">
                            Berga
                          </label>
                        </div>
                      </div>
                      <div className="for_link mt-[20px]">
                        <Link to={``} className="text-[blue]">
                          Показать все
                        </Link>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div className="accordion_2">
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <h1 className="text-[#1B1D1F] text-[500] font-[18px]">
                        Емкость батареи, А/ч
                      </h1>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="for_inputs flex">
                        <input
                          type="text"
                          className="w-[100%] p-[10px] bg-[#F4F5F6] border-[1px] border-[#DEDEE2] outline-none"
                          placeholder="от 30"
                          name=""
                          id=""
                        />
                        <input
                          type="text"
                          className="w-[100%] p-[10px] bg-[#F4F5F6] border-[1px] border-[#DEDEE2] outline-none"
                          name=""
                          id=""
                          placeholder="до 430"
                        />
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div className="accordion_3">
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <h1 className="text-[#1B1D1F] text-[500] font-[18px]">
                        Крепление аккумулятора
                      </h1>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="for_checkbox_label flex flex-col gap-3">
                        <div className="label_input_1 flex items-center gap-3 ">
                          <input
                            type="checkbox"
                            className="w-[20px] h-[20px] outline-none cursor-pointer"
                            name=""
                            id="type1"
                          />
                          <label className="cursor-pointer" htmlFor="type1">
                            B00
                          </label>
                        </div>
                        <div className="label_input_2 flex items-center gap-3">
                          <input
                            type="checkbox"
                            className="w-[20px] h-[20px] outline-none cursor-pointer"
                            name=""
                            id="type2"
                          />
                          <label className="cursor-pointer" htmlFor="type2">
                            B03
                          </label>
                        </div>
                        <div className="label_input_3 flex items-center gap-3">
                          <input
                            type="checkbox"
                            className="w-[20px] h-[20px] outline-none cursor-pointer"
                            name=""
                            id="type3"
                          />
                          <label className="cursor-pointer" htmlFor="type3">
                            B06
                          </label>
                        </div>
                        <div className="label_input_4 flex items-center gap-3">
                          <input
                            type="checkbox"
                            className="w-[20px] h-[20px] outline-none cursor-pointer"
                            name=""
                            id="type4"
                          />
                          <label className="cursor-pointer" htmlFor="type4">
                            B09
                          </label>
                        </div>
                        <div className="label_input_5 flex items-center gap-3">
                          <input
                            type="checkbox"
                            className="w-[20px] h-[20px] outline-none cursor-pointer"
                            name=""
                            id="type5"
                          />
                          <label className="cursor-pointer" htmlFor="type5">
                            B13
                          </label>
                        </div>
                      </div>
                      <div className="for_link mt-[20px]">
                        <Link to={``} className="text-[blue]">
                          Показать все
                        </Link>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div className="accordion_4">
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <h1 className="text-[#1B1D1F] text-[500] font-[18px]">
                        Клеммы
                      </h1>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="for_checkbox_label flex flex-col gap-3">
                        <div className="label_input_1 flex items-center gap-3 ">
                          <input
                            type="checkbox"
                            className="w-[20px] h-[20px] outline-none cursor-pointer"
                            name=""
                            id="firstOne"
                          />
                          <label className="cursor-pointer" htmlFor="firstOne">
                            1
                          </label>
                        </div>
                        <div className="label_input_2 flex items-center gap-3">
                          <input
                            type="checkbox"
                            className="w-[20px] h-[20px] outline-none cursor-pointer"
                            name=""
                            id="devideByThree"
                          />
                          <label
                            className="cursor-pointer"
                            htmlFor="devideByThree"
                          >
                            1/3
                          </label>
                        </div>
                        <div className="label_input_3 flex items-center gap-3">
                          <input
                            type="checkbox"
                            className="w-[20px] h-[20px] outline-none cursor-pointer"
                            name=""
                            id="twentyOne"
                          />
                          <label className="cursor-pointer" htmlFor="twentyOne">
                            21 (234)
                          </label>
                        </div>
                        <div className="label_input_4 flex items-center gap-3">
                          <input
                            type="checkbox"
                            className="w-[20px] h-[20px] outline-none cursor-pointer"
                            name=""
                            id="firstThree"
                          />
                          <label
                            className="cursor-pointer"
                            htmlFor="firstThree"
                          >
                            3 (JIS)
                          </label>
                        </div>
                        <div className="label_input_5 flex items-center gap-3">
                          <input
                            type="checkbox"
                            className="w-[20px] h-[20px] outline-none cursor-pointer"
                            name=""
                            id="eight"
                          />
                          <label className="cursor-pointer" htmlFor="eight">
                            8
                          </label>
                        </div>
                      </div>
                      <div className="for_link mt-[20px]">
                        <Link to={``} className="text-[blue]">
                          Показать все
                        </Link>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div className="accordion_5">
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <h1 className="text-[#1B1D1F] text-[500] font-[18px]">
                        Напряжение, В
                      </h1>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="for_checkbox_label flex flex-col gap-3">
                        <div className="label_input_1 flex items-center gap-3 ">
                          <input
                            type="checkbox"
                            className="w-[20px] h-[20px] outline-none cursor-pointer"
                            name=""
                            id="twelve"
                          />
                          <label className="cursor-pointer" htmlFor="twelve">
                            12
                          </label>
                        </div>
                        <div className="label_input_2 flex items-center gap-3">
                          <input
                            type="checkbox"
                            className="w-[20px] h-[20px] outline-none cursor-pointer"
                            name=""
                            id="firstSix"
                          />
                          <label className="cursor-pointer" htmlFor="firstSix">
                            6
                          </label>
                        </div>
                      </div>
                      {/* <div className="for_link mt-[20px]">
                    <Link to={``} className="text-[blue]">
                      Показать все
                    </Link>
                  </div> */}
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div className="accordion_6">
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <h1 className="text-[#1B1D1F] text-[500] font-[18px]">
                        Номинальная мощность, Вт
                      </h1>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="for_inputs flex">
                        <input
                          type="text"
                          className="w-[100%] p-[10px] bg-[#F4F5F6] border-[1px] border-[#DEDEE2] outline-none"
                          placeholder="от 290"
                          name=""
                          id=""
                        />
                        <input
                          type="text"
                          className="w-[100%] p-[10px] bg-[#F4F5F6] border-[1px] border-[#DEDEE2] outline-none"
                          name=""
                          id=""
                          placeholder="до 2400"
                        />
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div className="accordion_7">
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <h1 className="text-[#1B1D1F] text-[500] font-[18px]">
                        Расположение полюсных выводов
                      </h1>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="for_checkbox_label flex flex-col gap-3">
                        <div className="label_input_1 flex items-center gap-3 ">
                          <input
                            type="checkbox"
                            className="w-[20px] h-[20px] outline-none cursor-pointer"
                            name=""
                            id="firstZero"
                          />
                          <label className="cursor-pointer" htmlFor="firstZero">
                            0 (обратная)
                          </label>
                        </div>
                        <div className="label_input_2 flex items-center gap-3">
                          <input
                            type="checkbox"
                            className="w-[20px] h-[20px] outline-none cursor-pointer"
                            name=""
                            id="secondOne"
                          />
                          <label className="cursor-pointer" htmlFor="secondOne">
                            1 (прямая)
                          </label>
                        </div>
                        <div className="label_input_3 flex items-center gap-3">
                          <input
                            type="checkbox"
                            className="w-[20px] h-[20px] outline-none cursor-pointer"
                            name=""
                            id="secondThree"
                          />
                          <label
                            className="cursor-pointer"
                            htmlFor="secondThree"
                          >
                            3
                          </label>
                        </div>
                        <div className="label_input_4 flex items-center gap-3">
                          <input
                            type="checkbox"
                            className="w-[20px] h-[20px] outline-none cursor-pointer"
                            name=""
                            id="secondSix"
                          />
                          <label className="cursor-pointer" htmlFor="secondSix">
                            6
                          </label>
                        </div>
                        <div className="label_input_5 flex items-center gap-3">
                          <input
                            type="checkbox"
                            className="w-[20px] h-[20px] outline-none cursor-pointer"
                            name=""
                            id="firstNine"
                          />
                          <label className="cursor-pointer" htmlFor="firstNine">
                            9
                          </label>
                        </div>
                      </div>
                      <div className="for_link mt-[20px]">
                        <Link to={``} className="text-[blue]">
                          Показать все
                        </Link>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div className="accordion_8">
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <h1 className="text-[#1B1D1F] text-[500] font-[18px]">
                        Серия
                      </h1>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="for_checkbox_label flex flex-col gap-3">
                        <div className="label_input_1 flex items-center gap-3 ">
                          <input
                            type="checkbox"
                            className="w-[20px] h-[20px] outline-none cursor-pointer"
                            name=""
                            id="secondZero"
                          />
                          <label
                            className="cursor-pointer"
                            htmlFor="secondZero"
                          >
                            0 (обратная)
                          </label>
                        </div>
                        <div className="label_input_2 flex items-center gap-3">
                          <input
                            type="checkbox"
                            className="w-[20px] h-[20px] outline-none cursor-pointer"
                            name=""
                            id="thirdOne"
                          />
                          <label className="cursor-pointer" htmlFor="thirdOne">
                            1 (прямая)
                          </label>
                        </div>
                        <div className="label_input_3 flex items-center gap-3">
                          <input
                            type="checkbox"
                            className="w-[20px] h-[20px] outline-none cursor-pointer"
                            name=""
                            id="thirdThree"
                          />
                          <label
                            className="cursor-pointer"
                            htmlFor="thirdThree"
                          >
                            3
                          </label>
                        </div>
                        <div className="label_input_4 flex items-center gap-3">
                          <input
                            type="checkbox"
                            className="w-[20px] h-[20px] outline-none cursor-pointer"
                            name=""
                            id="thirdSix"
                          />
                          <label className="cursor-pointer" htmlFor="thirdSix">
                            6
                          </label>
                        </div>
                        <div className="label_input_5 flex items-center gap-3">
                          <input
                            type="checkbox"
                            className="w-[20px] h-[20px] outline-none cursor-pointer"
                            name=""
                            id="secondNine"
                          />
                          <label
                            className="cursor-pointer"
                            htmlFor="secondNine"
                          >
                            9
                          </label>
                        </div>
                      </div>
                      <div className="for_link mt-[20px]">
                        <Link to={``} className="text-[blue]">
                          Показать все
                        </Link>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div className="accordion_9">
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <h1 className="text-[#1B1D1F] text-[500] font-[18px]">
                        Ток холодной прокрутки DIN, А
                      </h1>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="for_inputs flex">
                        <input
                          type="text"
                          className="w-[100%] p-[10px] bg-[#F4F5F6] border-[1px] border-[#DEDEE2] outline-none"
                          placeholder="от 8"
                          name=""
                          id=""
                        />
                        <input
                          type="text"
                          className="w-[100%] p-[10px] bg-[#F4F5F6] border-[1px] border-[#DEDEE2] outline-none"
                          name=""
                          id=""
                          placeholder="до 680"
                        />
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div className="accordion_10">
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <h1 className="text-[#1B1D1F] text-[500] font-[18px]">
                        Ток холодной прокрутки EN, А
                      </h1>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="for_inputs flex">
                        <input
                          type="text"
                          className="w-[100%] p-[10px] bg-[#F4F5F6] border-[1px] border-[#DEDEE2] outline-none"
                          placeholder="от 0"
                          name=""
                          id=""
                        />
                        <input
                          type="text"
                          className="w-[100%] p-[10px] bg-[#F4F5F6] border-[1px] border-[#DEDEE2] outline-none"
                          name=""
                          id=""
                          placeholder="до 1450"
                        />
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <button className="bg-[#F4F5F6] w-[100%] py-[10px] mt-[20px] text-[#7A7680] text-[18px] font-[400]">
                  Сбросить фильтры
                </button>
                <button className="bg-[#002e5c] w-[100%] py-[10px] mt-[20px] text-[#f9f9fa] text-[18px] font-[400]">
                  Филтровать
                </button>
            </Box>
          </Modal>
        </div>
      </section>
    </div>
  );
};

export default Accumulator;
