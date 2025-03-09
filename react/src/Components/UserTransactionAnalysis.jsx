import { useState } from "react";

import ArrowRight from "../assets/arrow-right.png";
import ArrowDown from "../assets/arrow-down.svg";

import { Button } from "./UserTransactionButtons";
import TransactionStats from "./UserTransactionStats";
import DateFilter from "./DateFilter";



export default function TransactionAnalysis() {
  const [productTab, setProductTab] = useState("All Products");
  
  const selectProducts = ["All Products", "Customize Products"];
  
  return (
    <section className="poppins md:w-full max-md:max-w-[48rem] ">
      <Transactions />
      <div className="w-full">
        <p className="flex items-center gap-[0.375rem] lg:gap-[0.83rem] md:gap-[0.4825rem] my-6 lg:mt-8 md:mt-6  ">
          <span className="text-[#7C7C7C] font-normal md:font-medium text-base leading-[1.3rem] lg:text-[1.66rem] md:text-[0.9644rem] lg:leading-[2.49rem] md:leading-[1.4468rem] ">
            Transactions Analysis
          </span>
          <img
            src={ArrowRight}
            alt="Arrow Right"
            className="w-6 h-6 lg:w-[1.99rem] lg:h-[1.99rem] md:w-[1.1575rem] md:h-[1.1575rem]"
          />
        </p>

        <div className="w-full flex items-center border-b lg:border-b-[1.33px] md:border-b-[0.77px] border-b-[#0000004D] md:font-medium gap-9 lg:gap-[8.33rem] md:gap-[4.8225rem] lg:mt-6 md:mt-4 ">
          {selectProducts.map((product, index) => (
            <p
              key={index}
              className={`w-full py-[0.8325rem] lg:py-[0.83rem] md:py-[0.4825rem] px-[2.4968rem] lg:px-[2.49rem] md:px-[1.4468rem] leading-[1.3125rem] lg:leading-[2.49rem] md:leading-[1.4468rem] cursor-pointer text-[0.875rem] lg:text-[1.67rem] md:text-[0.9643rem] ${
                productTab === product
                  ? "bg-[#E2F3FF] border-b-[5.33px] lg:border-b-[5.33px] md:border-b-[3.09px] border-b-[#04177F] rounded-[7.99px]"
                  : ""
              } `}
              onClick={() => setProductTab(product)}
            >
              {product}
            </p>
          ))}
        </div>

        <div className="w-full lg:shadow-[0px_0px_9.19px_0px_rgba(0,0,0,0.25)] mt-8 md:mt-6 p-[1.25rem] rounded-2xl lg:rounded-[1.33rem] md:rounded-[0.7718rem] lg:py-[3.33rem] md:py-[1.92875rem] md:px-[0.8rem] flex flex-col gap-[2.5rem] border border-[#77777733] lg:gap-[1.66rem] md:gap-[0.9643rem] md:shadow-[0px_0px_5.32px_0px_rgba(0,0,0,0.25)]">
          
          <span className="w-full px-3 lg:px-6 md:px-4 flex items-center justify-between cursor-pointer">
            <span className="rounded-[4px] lg:rounded-[19.59px] md:rounded-[11.34px] bg-[#92ABFE2E] flex items-center gap-[0.941875rem] lg:gap-[0.941875rem] md:gap-[0.5456rem] py-[0.470625rem] lg:py-[0.47rem] md:py-[0.2725rem] px-[0.8325rem] lg:px-[0.83rem] md:px-[0.4825rem] ">
              <span className="text-[0.83rem] md:font-semibold">NGN</span>
              <img
                src={ArrowDown}
                alt=""
                className="inline-block w-[1.318125rem] h-[1.318125rem] lg:w-[1.31rem] lg:h-[1.31rem] md:w-[0.76375rem] md:h-[0.76375rem] "
              />
            </span>

            {/* <input type="date" name="" id="" /> */}
            <DateFilter />
            
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
    <div className="poppins w-full">
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
