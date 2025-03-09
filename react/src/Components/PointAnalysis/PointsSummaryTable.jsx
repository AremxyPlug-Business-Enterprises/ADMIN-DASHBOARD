// import React from 'react'

import Previous from "../../assets/Previous.png";
import Next from "../../assets/Next.png";
import DownArrow from "../../assets/down.png";
import ArrowDown from "../../assets/arrow-down.svg";
import ArrowRight from "../../assets/arrow-right.png";
import PreviousArrow from "../../assets/previous-arrow.png";
import NoTransaction from "../../assets/no-transaction.png";


import { useState } from "react";
import PropTypes from "prop-types";
import { StatusButton } from "../UserTransactionButtons";

function UserAnalysisDetails() {
  return (
    <>
      <td className="pr-[0.5rem] pl-[0.8rem] lg:py-[0.625rem] lg:text-base md:text-[0.7rem] md:py-[1rem] 
      text-start md:text-center">
        Habib Kamaldeen
      </td>

      <td className="lg:px-[0.8rem] lg:py-[1.2rem] lg:text-base md:text-[0.7rem] md:px-[0.5rem] md:py-[1.1rem] 
       text-start md:text-center ">
      50,000.00
      </td>

      <td className="lg:px-[0.8rem] lg:py-[1.2rem] lg:text-base md:text-[0.7rem] md:px-[0.5rem] md:py-[1.1rem] 
      text-start md:text-center ">
      10,000.00
      </td>
      <td className="lg:px-[0.8rem] lg:py-[1.2rem] lg:text-base md:text-[0.7rem] text-start md:text-center
       md:px-[0.5rem] md:py-[1.1rem] pt-[12px]  flex items-center justify-center gap-1 md:gap-3">
       20,000.00
       <img
                          src={ArrowRight}
                          alt="Arrow Right"
                          className=" w-[0.9375rem] h-[0.9375rem] cursor-pointer"
                        />
      </td>
    </>
  );
}

function MobileUserDetails({ orderId, description, product, bgColor }) {
  let statusText = "";
  if (bgColor === "#26D06F") statusText = "Successful";
  else if (bgColor === "#F95252") statusText = "Failed";
  else if (bgColor === "#FAB329") statusText = "Pending";
  else if (bgColor === "#92ABFE") statusText = "Refunded";
  else statusText = "Unknown";

  return (
    <div className="flex justify-between py-[1.25rem] px-1 border-b border-b-[#00000033] ">
      <ul className="flex flex-col gap-2.5 items-start text-[0.875rem] leading-[1.1375rem] ">
        <li className="poppins text-[#7E7E7E] ">Habib Kamaldeen</li>
        <li className="text-[#7C7C7C]">{orderId}</li>
        <li className="text-[#7C7C7C] ">{product}</li>
        <li className="poppins">{description}</li>
      </ul>
      <ul className="poppins text-[#7C7C7C] flex flex-col gap-2.5 items-end text-[0.875rem] leading-[1.1375rem] ">
        <li>
          <StatusButton bgColor={bgColor}>{statusText}</StatusButton>
        </li>
        <li>₦25,000</li>
        <li className="w-[6.5rem]">
          <span className=" ">May 21st, 2023, 07:21:00 pm</span>
          <img
            src={ArrowRight}
            alt="Arrow Right"
            className=" w-5 h-5 cursor-pointer inline"
          />
        </li>
      </ul>
    </div>
  );
}
// #26D06F
MobileUserDetails.propTypes = {
  orderId: PropTypes.number,
  description: PropTypes.string,
  product: PropTypes.string,
  bgColor: PropTypes.string,
};

export default function PointsSummaryTable() {
  // eslint-disable-next-line no-unused-vars
  const [showUserDetails, setShowUserDetails] = useState(true);
  const [selectPage, setSelectPage] = useState(false);
  return (
    <>
      {showUserDetails ? 
      (
        <>
          <div className=" lg:block md:block lg:rounded-[0.75rem] md:rounded-[0.434375rem] w-full  rounded-[12px]
           lg:mb-12 md:mb-10 lg:mt-14 md:mt-12 mt-7 lg:shadow-[0px_0px_12px_0px_rgba(0,0,0,0.25)]
            md:shadow-[0px_0px_3.53px_0px_rgba(0,0,0,0.25)] ">

            <div className="lg:mt-4 md:mt-2 w-full rounded-[12px]">

              <table className="font-semibold w-full ">

                <thead className="w-full text-left lg:text-base md:text-[0.7rem]  max-w-full
                 md:leading-[0.753125rem] lg:h-[89px]">

                  <tr className="bg-[#C8D5FE] w-full  rounded-[12px]   ">
             

                    <th className="lg:px-[0.8rem] lg:py-[1.2rem] md:px-[0.5rem] md:py-[1.1rem] text-center">
                     Customer Name
                    </th>

                    <th className="lg:px-[0.8rem] lg:py-[1.2rem] md:px-[0.5rem] md:py-[1.1rem] text-center">
                    Transaction Points
                    </th>

                    <th className="lg:px-[0.8rem] lg:py-[1.2rem] md:px-[0.5rem] md:py-[1.1rem] text-center">
                    Referral Points
                    </th>

                    <th className="lg:px-[0.8rem] lg:py-[1.2rem] md:px-[0.5rem] md:py-[1.1rem] text-center">
                    Total Points Balance
                    </th>

                  </tr>

                </thead>

                <tbody className="font-medium text-left w-full ">

                  <tr className="text-[#7E7E7E] border-b-[0.5px] border-b-[#9C9C9C]   ">
                    <UserAnalysisDetails />
                  </tr>

                  <tr className="text-[#7E7E7E] border-b-[0.5px] border-b-[#9C9C9C]   ">
                    <UserAnalysisDetails />
             
                  </tr>

                  <tr className="text-[#7E7E7E] border-b-[0.5px] border-b-[#9C9C9C]   ">
                    <UserAnalysisDetails />
             
                  </tr>

                  <tr className="text-[#7E7E7E] border-b-[0.5px] border-b-[#9C9C9C]   ">
                    <UserAnalysisDetails />
             
                  </tr>

                  <tr className="text-[#7E7E7E] border-b-[0.5px] border-b-[#9C9C9C]   ">
                    <UserAnalysisDetails />
             
                  </tr>

                  <tr className="text-[#7E7E7E] border-b-[0.5px] border-b-[#9C9C9C]   ">
                    <UserAnalysisDetails />
             
                  </tr>

                  <tr className="text-[#7E7E7E] border-b-[0.5px] border-b-[#9C9C9C]   ">
                    <UserAnalysisDetails />
             
                  </tr>

                  <tr className="text-[#7E7E7E] border-b-[0.5px] border-b-[#9C9C9C]   ">
                    <UserAnalysisDetails />
             
                  </tr>

                  <tr className="text-[#7E7E7E] border-b-[0.5px] border-b-[#9C9C9C]   ">
                    <UserAnalysisDetails />
             
                  </tr>

                  <tr className="text-[#7E7E7E] border-b-[0.5px] border-b-[#9C9C9C]   ">
                    <UserAnalysisDetails />
             
                  </tr>

                  <tr className="text-[#7E7E7E] border-b-[0.5px] border-b-[#9C9C9C]   ">
                    <UserAnalysisDetails />
             
                  </tr>

                </tbody>

              </table>

{/* pagination */}
<div className="w-full hidden md:flex justify-center py-5">

  <div className="flex  justify-center items-center 
    lg:mt-14 md:mt-10 lg:pb-8 md:pb-6 
    gap-2 sm:gap-4 lg:gap-8 
    font-medium text-[#3D3D3D] 
     w-full ">
    
    {/* Page Numbers */}
    <p className="flex items-center justify-center gap-2 w-[180px] h-[29px] md:w-[355px] sm:gap-2 lg:gap-4  ">
      <img
        src={Previous}
        alt="Previous Arrow"
        className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5"
      />
      <span className=" sm:tracking-wide lg:tracking-[0.5rem] 
        text-xs sm:text-sm lg:text-base">
        1 2 3 4 5 6 7 8 9
      </span>
      <img
        src={Next}
        alt="Next Arrow"
        className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5"
      />
    </p>

    {/* Page 10 Dropdown */}
    <span className="border border-[#0000004d] 
      flex items-center 
      gap-1 sm:gap-2 lg:gap-[5px] 
      rounded-sm sm:rounded-md 
      cursor-pointer 
      p-1 sm:p-2 lg:p-[4px] 
      text-xs sm:text-sm lg:text-base">
      10
      <img
        src={DownArrow}
        alt="Down Arrow"
        className="w-2 sm:w-3 lg:w-[0.875rem] 
          h-2 sm:h-3 lg:h-[0.875rem] 
          cursor-pointer"
      />
    </span>

    {/* Go To Input */}
    <p className="flex items-center 
      gap-1 sm:gap-2 lg:gap-[5px] 
      font-normal 
      text-xs sm:text-sm lg:text-base">
      Go to
      <input
        type="text"
        className="border border-[#0000004D] 
          outline-none 
          p-1 sm:p-1.5 lg:p-2 
          rounded-sm 
          w-10 sm:w-12 lg:w-14 
          h-6 sm:h-7 lg:h-8"
      />
    </p>
  </div>

</div>


{/* mobile pagination */}
            <div className="relative  w-full py-10 justify-center gap-[0.5rem] flex md:hidden ">

              <ul className="flex items-center border-[0.71px] border-[#D0D5DD] rounded-[5.72px] 
              shadow-[0px_0.71px_1.43px_0px_rgba(16,24,40,0.05)] cursor-pointer ">
                <li className="py-[0.6rem] px-2    ">
                  <img
                    src={PreviousArrow}
                    alt="Previous Arrow"
                    className="w-[12px] max-w-none"
                  />
                </li>

                <li className="py-[0.6rem] px-2 border-x-[0.71px] border-x-[#D0D5DD] ">
                  1
                </li>
                <li className="py-[0.6rem] px-2 border-r-[0.71px] border-r-[#D0D5DD] ">
                  2
                </li>
                <li className="py-[0.6rem] px-2 border-r-[0.71px] border-r-[#D0D5DD] ">
                  ...
                </li>
                <li className="py-[0.6rem] px-2 border-r-[0.71px] border-r-[#D0D5DD] ">
                  9
                </li>
                <li className="py-[0.6rem] px-2 border-r-[0.71px] border-r-[#D0D5DD] ">
                  10
                </li>
                <li className="py-[0.6rem] px-2 border-r-[#D0D5DD] ">
                  <img
                    src={PreviousArrow}
                    alt="Next Arrow"
               className="w-[12px] rotate-180 max-w-none"
                  />
                </li>
              </ul>

              <p className="relative flex items-center gap-[0.40rem] border-[0.71px] border-[#D0D5DD] rounded-[5.72px] shadow-[0px_0.71px_1.43px_0px_rgba(16,24,40,0.05)] p-[0.446875rem] cursor-pointer ">
                10
                <img
                  src={ArrowDown}
                  alt="arrow down"
                  className={`w-[1rem] h-[1rem] transition-all duration-300 ${
                    selectPage ? "rotate-180" : ""
                  } `}
                  onClick={() => setSelectPage((prev) => !prev)}
                />
              </p>

              {selectPage && (
                <ul className=".poppins flex flex-col gap-y-2 text-[0.625rem] leading-[0.56375rem] text-[#494A53] absolute py-2 px-1.5 top-[5.5rem] right-[12rem] bg-white shadow-[0px_2.25px_5.64px_0px_rgba(0,0,0,0.25)]">
                  <li className="pb-1 transition-all duration-500 hover:bg-gray-300 w-full py-2.5 px-1.5 cursor-pointer">10 / Page</li>
                  <li className="pb-1 transition-all duration-500 hover:bg-gray-300 w-full py-2.5 px-1.5 cursor-pointer">20 / Page</li>
                  <li className="pb-1 transition-all duration-500 hover:bg-gray-300 w-full py-2.5 px-1.5 cursor-pointer">30 / Page</li>
                  <li className="pb-1 transition-all duration-500 hover:bg-gray-300 w-full py-2.5 px-1.5 cursor-pointer">40 / Page</li>
                  <li className="text-[6.76px] pb-1 transition-all duration-500 hover:bg-gray-300 w-full py-2.5 px-1.5 cursor-pointer">50 / Page</li>
                  <li className="text-[6.76px] pb-1 transition-all duration-500 hover:bg-gray-300 w-full py-2.5 px-1.5 cursor-pointer">100 / Page</li>
                </ul>
              )}

              <span className="flex items-center gap-[3px] text-[0.625rem] leading-[0.8125rem] text-[#3D3D3D]  ">
               <h1 className="text-[10px]"> Go to </h1> 
                <input
                  type="number"
                  className="p-[0.446875rem] w-[2.8125rem] h-[43px] 
                  text-base font-medium leading-[20.8px] rounded-sm border border-[#0000004D]  "
                />
              </span>
            </div>

            </div>

          </div>

          <div className="lg:hidden md:hidden hidden mt-7 mb-36 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] py-[1.25rem] px-1 w-full ">
            {/*  h-[102.125rem] w-[21.4375rem]*/}
            <MobileUserDetails
              orderId="0000000"
              description="Data Top-up"
              product="MTN SME 100GB"
              bgColor="#26D06F"
            />
            <MobileUserDetails
              orderId="8990000"
              description="Virtual Account"
              product="NGN Waitlist Top-up"
              bgColor="#F95252"
            />
            <MobileUserDetails
              orderId="0000000"
              description="Data Top-up"
              product="MTN CG 100GB"
              bgColor="#FAB329"
            />
            <MobileUserDetails
              orderId="7676556"
              description="Flat Conversion"
              product="NGN to USD"
              bgColor="#26D06F"
            />
            <MobileUserDetails
              orderId="0000000"
              description="TV Subscription"
              product="Gotv Max"
              bgColor="#F95252"
            />
            <MobileUserDetails
              orderId="0000000"
              description="Data Top-up"
              product="MTN CG 100GB"
              bgColor="#FAB329"
            />
            <MobileUserDetails
              orderId="7676556"
              description="Flat Conversion"
              product="NGN to USD"
              bgColor="#26D06F"
            />

            <div className="relative flex w-full py-10 justify-center gap-[0.5rem] bg-red-500">
              <ul className="flex items-center border-[0.71px] border-[#D0D5DD] rounded-[5.72px] shadow-[0px_0.71px_1.43px_0px_rgba(16,24,40,0.05)] cursor-pointer ">
                <li className="py-[0.6rem] px-[1rem]  ">
                  <img
                    src={PreviousArrow}
                    alt="Previous Arrow"
                    className="w-[0.89375rem] "
                  />
                </li>
                <li className="py-[0.6rem] px-[1rem] border-x-[0.71px] border-x-[#D0D5DD] ">
                  1
                </li>
                <li className="py-[0.6rem] px-[1rem] border-r-[0.71px] border-r-[#D0D5DD] ">
                  2
                </li>
                <li className="py-[0.6rem] px-[1rem] border-r-[0.71px] border-r-[#D0D5DD] ">
                  ...
                </li>
                <li className="py-[0.6rem] px-[1rem] border-r-[0.71px] border-r-[#D0D5DD] ">
                  9
                </li>
                <li className="py-[0.6rem] px-[1rem] border-r-[0.71px] border-r-[#D0D5DD] ">
                  10
                </li>
                <li className="py-[0.6rem] px-[1rem] border-r-[#D0D5DD] ">
                  <img
                    src={PreviousArrow}
                    alt="Next Arrow"
                    className="w-[0.89375rem] h-[0.89375rem] rotate-180 "
                  />
                </li>
              </ul>

              <p className="relative flex items-center gap-[0.40rem] border-[0.71px] border-[#D0D5DD] rounded-[5.72px] shadow-[0px_0.71px_1.43px_0px_rgba(16,24,40,0.05)] p-[0.446875rem] cursor-pointer ">
                10
                <img
                  src={ArrowDown}
                  alt="arrow down"
                  className={`w-[1rem] h-[1rem] transition-all duration-300 ${
                    selectPage ? "rotate-180" : ""
                  } `}
                  onClick={() => setSelectPage((prev) => !prev)}
                />
              </p>
              {selectPage && (
                <ul className=".poppins flex flex-col gap-y-2 text-[0.625rem] leading-[0.56375rem] text-[#494A53] absolute py-2 px-1.5 top-[5.5rem] right-[12rem] bg-white shadow-[0px_2.25px_5.64px_0px_rgba(0,0,0,0.25)]">
                  <li className="pb-1 transition-all duration-500 hover:bg-gray-300 w-full py-2.5 px-1.5 cursor-pointer">10 / Page</li>
                  <li className="pb-1 transition-all duration-500 hover:bg-gray-300 w-full py-2.5 px-1.5 cursor-pointer">20 / Page</li>
                  <li className="pb-1 transition-all duration-500 hover:bg-gray-300 w-full py-2.5 px-1.5 cursor-pointer">30 / Page</li>
                  <li className="pb-1 transition-all duration-500 hover:bg-gray-300 w-full py-2.5 px-1.5 cursor-pointer">40 / Page</li>
                  <li className="text-[6.76px] pb-1 transition-all duration-500 hover:bg-gray-300 w-full py-2.5 px-1.5 cursor-pointer">50 / Page</li>
                  <li className="text-[6.76px] pb-1 transition-all duration-500 hover:bg-gray-300 w-full py-2.5 px-1.5 cursor-pointer">100 / Page</li>
                </ul>
              )}
              <span className="flex items-center gap-[5px] text-[0.625rem] leading-[0.8125rem] text-[#3D3D3D] ">
                Go to
                <input
                  type="number"
                  className="p-[0.446875rem] w-[2.8125rem] h-[1.8125rem] text-base font-medium leading-[20.8px] rounded-sm border border-[#0000004D]  "
                />
              </span>
            </div>
          </div>

        </>

      ) :
      
      (
        <div className="bg-re-500 lg:rounded-[0.75rem] md:rounded-[0.434375rem] w-full  
         mb-10 lg:mb-12 md:mb-10 lg:mt-14 md:mt-12 lg:shadow-[0px_0px_12px_0px_rgba(0,0,0,0.25)] md:shadow-[0px_0px_3.53px_0px_rgba(0,0,0,0.25)]  ">

          <div className="hidden md:block lg:mt-0 md:mt-2 w-full rounded-[12px] ">
            
            <ul className="bg-[#C8D5FE] w-full flex justify-between px-[0.8rem] lg:px-[0.8rem] lg:py-[1.8rem] 
            py-[1.8rem] md:px-[0.5rem] md:py-[1.5rem] rounded-t-[0.5rem]  md:w-[1038px] 
  lg:rounded-t-[0.5rem] md:rounded-t-[0.434375rem] text-left font-semibold lg:text-base lg:leading-[1.3rem] lg:w-full
  md:text-[0.8rem] md:leading-[0.753125rem]">
          
              <li className="">Customer Name</li>
              <li> Transaction Points </li>
              <li>Referral Points</li>
              <li>Total Points Balance</li>
 
            </ul>

            <div className="flex flex-col w-full justify-center items-center py-[2rem] md:w-[1034px]
              ">
              <img
                src={NoTransaction}
                alt="No Transaction Image"
                className="w-[30rem] h-[26rem] "
              />
              <p className="font-medium text-[1.5rem] leading-[3rem] text-[#0000004D] ">
                No Transaction Found !
              </p>
            </div>
            {/* text-[2.5rem] leading-[3.25rem] */}
          </div>

          <div className="md:hidden flex flex-col w-full justify-center items-center py-[2rem]  ">
            <img
              src={NoTransaction}
              alt="No Transaction Image"
              className="w-[18.96125rem] h-[16.72375rem] md:w-[30rem] md:h-[26rem] opacity-80 "
            />
            <p className=".poppins font-medium text-[1.17375rem] md:text-[1.5rem] leading-[3rem] text-[#0000004D] ">
              No Transaction Found !
            </p>
          </div>

        </div>

      )}
    </>
  );
}

// #26D06F #F95252 #FAB329 #92ABFE
