import { useState } from "react";

import ArrowRight from "../../assets/arrow-right.png";

import { Button } from "./UserTransactionButtons";
import ProductsTransactionAnalysis from "./ProductsTransactionAnalysis";

export default function UsersSalesAnalysis() {
  

  return (
    <section className="poppins md:w-full max-md:max-w-[48rem] ">
      <div className="poppins w-full">
      <h1 className="font-semibold text-[1.25rem] leading-[1.875] lg:text-[2.33rem] lg:leading-[3.495rem] text-[#9C9C9C] md:leading-[2.02rem] md:text-[1.35rem]">
        Sales Analysis
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
        Sales Analysis
        </span>
      </p>
      <div className="flex gap-6 lg:gap-[13.29px] md:gap-[7.69px] lg:mt-4 mt-4 md:mt-2">
        <Button>Point Analysis</Button>
        <Button>Card Analysis</Button>
      </div>
    </div>
      
      <Analysis />
    </section>
  );
}


function Analysis() {
  const [salesTab, setSalesTab] = useState("All Sales");

  const selectSales = ["All Sales", "Customize Sales"];
  return (
    <div className="w-full">

        <div className="w-full flex items-center border-b lg:border-b-[1.33px] md:border-b-[0.77px] border-b-[#0000004D] md:font-medium gap-9 lg:gap-[8.33rem] md:gap-[4.8225rem] lg:mt-6 md:mt-4 ">
          {selectSales.map((product, index) => (
            <p
              key={index}
              className={`w-full py-[0.8325rem] lg:py-[0.83rem] md:py-[0.4825rem] px-[2.4968rem] lg:px-[2.49rem] md:px-[1.4468rem] leading-[1.3125rem] lg:leading-[2.49rem] md:leading-[1.4468rem] cursor-pointer text-[0.875rem] lg:text-[1.67rem] md:text-[0.9643rem] ${
                salesTab === product
                  ? "bg-[#E2F3FF] border-b-[5.33px] lg:border-b-[5.33px] md:border-b-[3.09px] border-b-[#04177F] rounded-[7.99px]"
                  : ""
              } `}
              onClick={() => setSalesTab(product)}
            >
              {product}
            </p>
          ))}
        </div>
       

         {salesTab === "All Products" && <ProductsTransactionAnalysis />}
        {salesTab === "Customize Products" && <ProductsTransactionAnalysis>
          <select name="" id="" className=".poppins font-semibold leading-[20.8px] border border-[#0000004D] rounded-[8px] w-[16rem] h-[2.75rem] outline-none flex items-center ">
            <option value="">Payment</option>
            <option value="">Telecom</option>
            <option value="">Card issuing</option>
        </select>
         </ProductsTransactionAnalysis>} 
      </div>
  )
}