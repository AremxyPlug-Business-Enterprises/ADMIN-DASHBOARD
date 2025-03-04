// import React from 'react'

import { useState } from "react";

import ArrowRight from "../../assets/arrow-right.png";

// import ArrowDown from "../../assets/arrow-down.svg";
// import DateFilter from "../DateFilter";

import UserProfileStats from "./UserProfileStats";



const  UsersProfileAnalysis = () => {

  const [productTab, setProductTab] = useState("All Users");
  
  const selectProducts = ["All Users", "Customize Users"];
  
  return (
    <section className="poppins md:w-full max-md:max-w-[48rem] ">
      <Transactions />
      <div className="w-full">

    

        <div className="w-full flex items-center border-b lg:border-b-[1.33px] md:border-b-[0.77px] border-b-[#0000004D] md:font-medium gap-9 lg:gap-[8.33rem] md:gap-[4.8225rem] lg:mt-6 md:mt-4 ">
          {selectProducts.map((users, index) => (
            <p
              key={index}
              className={`w-full py-[0.8325rem] lg:py-[0.83rem] md:py-[0.4825rem] px-[2.4968rem] lg:px-[2.49rem] 
                md:px-[1.4468rem]lg:leading-[2.49rem] md:leading-[1.4468rem] cursor-pointer text-[14px]  leading-[21px]  lg:text-[1.67rem] md:text-[0.9643rem] 
                ${ productTab === users
                  ? "bg-[#E2F3FF] border-b-[5.33px] lg:border-b-[5.33px] md:border-b-[3.09px] border-b-[#04177F] rounded-[7.99px]"
                  : ""
              } `}
              onClick={() => setProductTab(users)}
            >
              {users}
            </p>
          ))}
        </div>

        <div className="w-full lg:shadow-[0px_0px_9.19px_0px_rgba(0,0,0,0.25)] mt-8 md:mt-6 p-[1.25rem] rounded-2xl lg:rounded-[1.33rem] md:rounded-[0.7718rem] lg:py-[3.33rem] md:py-[1.92875rem] md:px-[0.8rem] flex flex-col gap-[2.5rem] border border-[#77777733] lg:gap-[1.66rem] md:gap-[0.9643rem] md:shadow-[0px_0px_5.32px_0px_rgba(0,0,0,0.25)]">
        

          <div className="">
            <UserProfileStats />
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
        Users Analysis
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
          Users Analysis
        </span>
      </p>

    
    </div>
  );
}


export default UsersProfileAnalysis