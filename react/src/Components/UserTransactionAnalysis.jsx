import ArrowRight from "../assets/arrow-right.png";
import ArrowDown from "../assets/arrow-down.svg";
import SelectDateIcon from "../assets/SelectDateIcon.png";

import { Button } from "./UserTransactionButtons";
import TransactionStats from "./UserTransactionStats";
import { useState } from "react";

export default function TransactionAnalysis() {
  const [selectFilter, setSelectFilter] = useState(false);
  const [selectedOption, setSelectedOption] = useState("TODAY");
  const [productTab, setProductTab] = useState("All Products");

  const options = [
    "TODAY",
    "LAST 7 DAYS",
    "LAST 30 DAYS",
    "ALL TIME",
    "CUSTOM",
  ];
  const selectProducts = ["All Products", "Customize Products"];
  
  return (
    <section className="poppins ">
      <Transactions />
      <div className="hidden lg:block md:block">
        <p className="flex items-center lg:gap-[0.83rem] md:gap-[0.4825rem] lg:mt-8 md:mt-6  ">
          <span className="text-[#7C7C7C] font-medium lg:text-[1.66rem] md:text-[0.9644rem] lg:leading-[2.49rem] md:leading-[1.4468rem] ">
            Transactions Analysis
          </span>
          <img
            src={ArrowRight}
            alt="Arrow Right"
            className=" lg:w-[1.99rem] lg:h-[1.99rem] md:w-[1.1575rem] md:h-[1.1575rem]"
          />
        </p>

        <div className="flex items-center lg:border-b-[1.33px] md:border-b-[0.77px] border-b-[#0000004D] font-medium lg:gap-[8.33rem] md:gap-[4.8225rem] lg:mt-6 md:mt-4 ">
          {selectProducts.map((product, index) => (
            <p
              key={index}
              className={`lg:py-[0.83rem] lg:px-[2.49rem] md:py-[0.4825rem] md:px-[1.4468rem] lg:leading-[2.49rem] md:leading-[1.4468rem] cursor-pointer lg:text-[1.67rem] md:text-[0.9643rem] ${
                productTab === product
                  ? "bg-[#E2F3FF] lg:border-b-[5.33px] md:border-b-[3.09px] border-b-[#04177F] lg:rounded-[7.99px] md:rounded-[7.99px]"
                  : ""
              } `}
              onClick={() => setProductTab(product)}
            >
              {product}
            </p>
          ))}
        </div>

        <div className="lg:shadow-[0px_0px_9.19px_0px_rgba(0,0,0,0.25)] mt-6 p-4 lg:rounded-[1.33rem] md:rounded-[0.7718rem] lg:py-[3.33rem] md:py-[1.92875rem] px-[1.499rem] flex flex-col lg:gap-[1.66rem] md:gap-[0.9643rem] md:shadow-[0px_0px_5.32px_0px_rgba(0,0,0,0.25)]">
          <span className=" lg:px-6 md:px-4 flex items-center justify-between cursor-pointer">
            <span className="lg:rounded-[19.59px] md:rounded-[11.34px] bg-[#92ABFE2E] flex items-center lg:gap-[0.941875rem] md:gap-[0.5456rem] lg:py-[0.47rem] lg:px-[0.83rem] md:py-[0.2725rem] md:px-[0.4825rem] ">
              <span className="text-[0.83rem] font-semibold">NGN</span>
              <img
                src={ArrowDown}
                alt=""
                className="inline-block w-[1.31rem] h-[1.31rem] "
              />
            </span>

            {/* <input type="date" name="" id="" /> */}
            <span
              className="flex items-center justify-between gap-[0.66rem] md:gap-[0.3856rem] lg:rounded-[6.66px] md:rounded-[3.86px] lg:py-[0.33rem] md:py-[0.1931rem] lg:px-[0.66rem] md:px-[0.3856rem] lg:shadow-[0px_0px_5.33px_0px_rgba(0,0,0,0.25)] md:shadow-[0px_0px_3.09px_0px_rgba(0,0,0,0.25)] lg:w-[12.16rem] md:w-[7.040625rem] cursor-pointer relative"
              onClick={() => setSelectFilter(!selectFilter)}
            >
              <span className="uppercase text-[#04177F] lg:text-[1.33rem] md:text-[.77187rem] font-semibold lg:leading-[1.998rem] md:leading-[1.1575rem] ">
                {selectedOption}
              </span>
              <img
                src={SelectDateIcon}
                alt=""
                className="lg:w-[1.24625rem] lg:h-[1.24625rem] md:w-[0.721875rem] md:h-[0.721875rem]"
              />
              {selectFilter && (
                <ul className="poppins text-[0.75rem] text-[#494A53] w-[9.125rem]  shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] absolute lg:top-[3.5rem] md:top-[2rem] lg:right-[0.5rem] md:right-0 p-2 bg-white z-10">
                  {/* h-[2.75rem] */}
                  {options.map((option, index) => (
                    <li
                      key={index}
                      className="py-2 px-1 border-b-[0.4px] border-b-[#9C9C9C] cursor-pointer hover:bg-gray-100"
                      onClick={() => {
                        setSelectedOption(option); // Update selected option
                        setSelectFilter(false); // Close dropdown
                      }}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </span>
          </span>

          <div className="">
            <TransactionStats />
          </div>
        </div>
      </div>
    </section>
  );
}

function Transactions() {
  return (
    <div className="poppins">
      <h1 className="font-semibold text-[1.25rem] leading-[1.875] lg:text-[2.33rem] lg:leading-[3.495rem] text-[#9C9C9C] md:leading-[2.02rem] md:text-[1.35rem]">
        User Transactions
      </h1>
      <p className="flex items-center gap-2 text-base leading-6 lg:gap-2 md:gap-[0.2893rem] md:text-[0.9643rem] md:leading-[1.4459rem] text-[#9C9C9C]">
        <span className="lg:text-[1.66rem] lg:leading-[2.49rem] ">
          Dashboard
        </span>
        <img
          src={ArrowRight}
          alt="Arrow Right"
          className="w-6 h-6 lg:w-[1.99rem] lg:h-[1.99rem] md:w-[1.1568rem] md:h-[1.1568rem]"
        />
        <span className="lg:text-[1.66rem] lg:leading-[2.49rem]">
          Users Transactions
        </span>
      </p>
      <div className="flex gap-6 lg:gap-[13.29px] md:gap-[7.69px] lg:mt-4 mt-4 md:mt-2">
        <Button>Wallet Analysis</Button>
        <Button>Sales Analysis</Button>
      </div>
    </div>
  );
}
