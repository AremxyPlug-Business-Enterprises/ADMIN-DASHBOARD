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
      <td className="pr-[0.5rem] pl-[0.8rem] lg:py-[0.625rem] lg:text-base md:text-[0.7rem] md:py-[1rem] ">
        Habib Kamaldeen
      </td>
      <td className="lg:px-[0.8rem] lg:py-[1.2rem] lg:text-base md:text-[0.7rem] md:px-[0.5rem] md:py-[1.1rem] ">
    Point redeeem
      </td>
      <td className="lg:px-[0.8rem] lg:py-[1.2rem] lg:text-base md:text-[0.7rem] md:px-[0.5rem] md:py-[1.1rem] ">
      PTS to NGN
      </td>
      <td className="lg:px-[0.8rem] lg:py-[1.2rem] lg:text-base md:text-[0.7rem] md:px-[0.5rem] md:py-[1.1rem] ">
        00000000
      </td>
      <td className="lg:px-[0.8rem] lg:py-[1.2rem] lg:text-base md:text-[0.7rem] md:px-[0.5rem] md:py-[1.1rem] ">
        ₦25,000
      </td>

      <td className="lg:px-[0.8rem] lg:py-[1.2rem] lg:text-base md:text-[0.7rem] md:px-[0.5rem] md:py-[1.1rem]tex ">
        ₦10,000
      </td>

      <td className="lg:px-[0.8rem] lg:py-[1.2rem] lg:text-base md:text-[0.7rem] md:px-[0.5rem] md:py-[1.1rem] ">
        May 21st, 2023, <br /> 07:21:00 PM
      </td>
    </>
  );
}

function MobileUserDetails({ borderColor }) {
  let statusText = "";
  if (borderColor === "#26D06F") statusText = "Successful";
  else if (borderColor === "#F95252") statusText = "Failed";
  else if (borderColor === "#FAB329") statusText = "Pending";
  else if (borderColor === "#92ABFE") statusText = "Refunded";
  else statusText = "Unknown";

  return (
    <div className="flex justify-between py-[1.25rem] px-1 border-b border-b-[#00000033] ">
      <ul className="flex flex-col gap-2.5 items-start text-[0.875rem] leading-[1.1375rem] ">
        <li className="poppins text-[#7E7E7E] text-[10px] "> <span className="font-bold text-black"> Customer Name:</span> Habib Kamaldeen</li>
        <li className="text-[#7C7C7C] text-[10px]"> <span className="font-bold text-black"> Product:</span>  Points Redeem </li>
        <li className="text-[#7C7C7C] text-[10px] "> <span className="font-bold text-black"> Description:</span>  PTS to NGN</li>
        <li className="text-[#7C7C7C] text-[10px]"> <span className="font-bold text-black"> Order No:</span>  000000</li>
        <li className="text-[#7C7C7C] text-[10px]"> <span className="font-bold text-black"> Amount Redeemed:</span>  #10,000.00</li>
        <li className="text-[#7C7C7C] text-[10px]"> <span className="font-bold text-black"> Amount Recieved:</span>  #10,000.00</li>
        <li className="text-[#7C7C7C] text-[10px]"> <span className="font-bold text-black"> Date & Time:</span> May 21st, 2023, 07:21:00 pm </li>
      </ul>

      <div className="poppins text-[#7C7C7C] flex flex-col gap-2.5 items-end text-[0.875rem] leading-[1.1375rem]">
      <button
          className="w-[70px] h-[20px] flex items-center justify-center text-center text-[10px] rounded-[5px] border-[1px]"
          style={{ 
            borderColor: borderColor, 
            color: borderColor, 
          }}
        >
          {statusText}
        </button>
      </div>
    </div>
  );
}


// #26D06F
MobileUserDetails.propTypes = {
  borderColor: PropTypes.string,
};

export default function PointsHistoryTable() {
  // eslint-disable-next-line no-unused-vars
  const [showUserDetails, setShowUserDetails] = useState(true);
  const [selectPage, setSelectPage] = useState(false);
  return (
    <>
      {showUserDetails ? (
        <>
          <div className="hidden lg:block md:block lg:rounded-[0.75rem] md:rounded-[0.434375rem] 
           lg:mb-12 md:mb-10 lg:mt-14 md:mt-12 lg:shadow-[0px_0px_12px_0px_rgba(0,0,0,0.25)] 
           md:shadow-[0px_0px_3.53px_0px_rgba(0,0,0,0.25)] ">

            <div className="lg:mt-4 md:mt-2 w-full   overflow-auto scrollbar">
              <table className="font-semibold w-full lg:w-[1604px]  overflow-x-scroll scrollbar-hidden">

                <thead className="w-full text-left lg:text-base md:text-[0.7rem]  
                 md:leading-[0.753125rem] ">

                  <tr className="bg-[#C8D5FE] w-full  lg:w-[1604px]  overflow-x-scroll scrollbar-hidden ">
                

                    <th className="lg:px-[0.8rem] lg:py-[1.2rem] md:px-[0.5rem] md:py-[1.1rem]">
                     Customer Name
                    </th>

                    <th className="lg:px-[0.8rem] lg:py-[1.5rem] md:px-[0.5rem] md:py-[1.1rem] lg:rounded-tl-[0.5rem] md:rounded-tl-[0.434375rem]">
                    Product
                    </th>

                    <th className="lg:px-[0.8rem] lg:py-[1.2rem] md:px-[0.5rem] md:py-[1.1rem]">
                Description
                    </th>

                    <th className="lg:px-[0.8rem] lg:py-[1.2rem] md:px-[0.5rem] md:py-[1.1rem]">
                 Order No
                    </th>

                    <th className="lg:px-[0.8rem] lg:py-[1.2rem] md:px-[0.5rem] md:py-[1.1rem]">
                    Points Redeemed
                    </th>

                    <th className="lg:px-[0.8rem] lg:py-[1.2rem] md:px-[0.5rem] md:py-[1.1rem]">
                    Amount Received
                    </th>
                    <th className="lg:pl-[4rem] md:pl-[2.5rem] px-[0.5rem] py-[0.625rem] lg:rounded-tr-[0.5rem] md:rounded-tr-[0.434375rem] ">
                   Date & Time
                    </th>

                    <th className="lg:pl-[4rem] md:pl-[2.5rem] px-[0.5rem] py-[0.625rem] lg:rounded-tr-[0.5rem] md:rounded-tr-[0.434375rem] ">
                   Status
                    </th>

                  </tr>
                </thead>

                <tbody className="font-medium text-left w-full ">

                  <tr className="text-[#7E7E7E] border-b-[0.5px] border-b-[#9C9C9C]   ">
                    <UserAnalysisDetails />
                    <td className="lg:px-[0.8rem] lg:py-[1.2rem] md:py-[1rem] md:px-[0.8rem]">
                      <div className="flex items-center gap-2">
                        <StatusButton bgColor="#26D06F">
                          Successful
                        </StatusButton>

                        <img
                          src={ArrowRight}
                          alt="Arrow Right"
                          className=" w-[0.9375rem] h-[0.9375rem] cursor-pointer"
                        />

                      </div>
                      
                    </td>
                  </tr>

                  <tr className="text-[#7E7E7E] border-b-[0.5px] border-b-[#9C9C9C]   ">
                    <UserAnalysisDetails />
                    <td className="lg:px-[0.8rem] lg:py-[1.2rem] md:py-[1rem] md:px-[0.8rem]">
                      <div className="flex items-center gap-2">
                        <StatusButton bgColor="#FAB329">Pending</StatusButton>
                        <img
                          src={ArrowRight}
                          alt="Arrow Right"
                          className=" w-[0.9375rem] h-[0.9375rem] cursor-pointer"
                        />
                      </div>
                    </td>
                  </tr>

                  <tr className="text-[#7E7E7E] border-b-[0.5px] border-b-[#9C9C9C]   ">
                    <UserAnalysisDetails />
                    <td className="lg:px-[0.8rem] lg:py-[1.2rem] md:py-[1rem] md:px-[0.8rem]">
                      <div className="flex items-center gap-2">
                        <StatusButton bgColor="#F95252">Failed</StatusButton>
                        <img
                          src={ArrowRight}
                          alt="Arrow Right"
                          className=" w-[0.9375rem] h-[0.9375rem] cursor-pointer"
                        />
                      </div>
                    </td>
                  </tr>

                  <tr className="text-[#7E7E7E] border-b-[0.5px] border-b-[#9C9C9C]   ">
                    <UserAnalysisDetails />
                    <td className="lg:px-[0.8rem] lg:py-[1.2rem] md:py-[1rem] md:px-[0.8rem]">
                      <div className="flex items-center gap-2">
                        <StatusButton bgColor="#92ABFE">Refunded</StatusButton>
                        <img
                          src={ArrowRight}
                          alt="Arrow Right"
                          className=" w-[0.9375rem] h-[0.9375rem] cursor-pointer"
                        />
                      </div>
                    </td>
                  </tr>

                  <tr className="text-[#7E7E7E] border-b-[0.5px] border-b-[#9C9C9C]   ">
                    <UserAnalysisDetails />
                    <td className="lg:px-[0.8rem] lg:py-[1.2rem] md:py-[1rem] md:px-[0.8rem]">
                      <div className="flex items-center gap-2">
                        <StatusButton bgColor="#F95252">Failed</StatusButton>
                        <img
                          src={ArrowRight}
                          alt="Arrow Right"
                          className=" w-[0.9375rem] h-[0.9375rem] cursor-pointer"
                        />
                      </div>
                    </td>
                  </tr>

                  <tr className="text-[#7E7E7E] border-b-[0.5px] border-b-[#9C9C9C]   ">
                    <UserAnalysisDetails />
                    <td className="lg:px-[0.8rem] lg:py-[1.2rem] md:py-[1rem] md:px-[0.8rem]">
                      <div className="flex items-center gap-2">
                        <StatusButton bgColor="#26D06F">
                          Successful
                        </StatusButton>
                        <img
                          src={ArrowRight}
                          alt="Arrow Right"
                          className=" w-[0.9375rem] h-[0.9375rem] cursor-pointer"
                        />
                      </div>
                    </td>
                  </tr>

                  <tr className="text-[#7E7E7E] border-b-[0.5px] border-b-[#9C9C9C]   ">
                    <UserAnalysisDetails />
                    <td className="lg:px-[0.8rem] lg:py-[1.2rem] md:py-[1rem] md:px-[0.8rem]">
                      <div className="flex items-center gap-2">
                        <StatusButton bgColor="#F95252">Cancelled</StatusButton>
                        <img
                          src={ArrowRight}
                          alt="Arrow Right"
                          className=" w-[0.9375rem] h-[0.9375rem] cursor-pointer"
                        />
                      </div>
                    </td>
                  </tr>

                  <tr className="text-[#7E7E7E] border-b-[0.5px] border-b-[#9C9C9C]   ">
                    <UserAnalysisDetails />
                    <td className="lg:px-[0.8rem] lg:py-[1.2rem] md:py-[1rem] md:px-[0.8rem]">
                      <div className="flex items-center gap-2">
                        <StatusButton bgColor="#26D06F">
                          Successful
                        </StatusButton>
                        <img
                          src={ArrowRight}
                          alt="Arrow Right"
                          className=" w-[0.9375rem] h-[0.9375rem] cursor-pointer"
                        />
                      </div>
                    </td>
                  </tr>

                  <tr className="text-[#7E7E7E] border-b-[0.5px] border-b-[#9C9C9C]   ">
                    <UserAnalysisDetails />
                    <td className="lg:px-[0.8rem] lg:py-[1.2rem] md:py-[1rem] md:px-[0.8rem]">
                      <div className="flex items-center gap-2">
                        <StatusButton bgColor="#26D06F">
                          Successful
                        </StatusButton>
                        <img
                          src={ArrowRight}
                          alt="Arrow Right"
                          className=" w-[0.9375rem] h-[0.9375rem] cursor-pointer"
                        />
                      </div>
                    </td>
                  </tr>

                  <tr className="text-[#7E7E7E] border-b-[0.5px] border-b-[#9C9C9C]   ">
                    <UserAnalysisDetails />
                    <td className="lg:px-[0.8rem] lg:py-[1.2rem] md:py-[1rem] md:px-[0.8rem]">
                      <div className="flex items-center gap-2">
                        <StatusButton bgColor="#92ABFE">Refunded</StatusButton>
                        <img
                          src={ArrowRight}
                          alt="Arrow Right"
                          className=" w-[0.9375rem] h-[0.9375rem] cursor-pointer"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr className="text-[#7E7E7E] border-b-[0.5px] border-b-[#9C9C9C]   ">
                    <UserAnalysisDetails />
                    <td className="lg:px-[0.8rem] lg:py-[1.2rem] md:py-[1rem] md:px-[0.8rem]">
                      <div className="flex items-center gap-2">
                        <StatusButton bgColor="#26D06F">
                          Successful
                        </StatusButton>
                        <img
                          src={ArrowRight}
                          alt="Arrow Right"
                          className=" w-[0.9375rem] h-[0.9375rem] cursor-pointer"
                        />
                      </div>
                    </td>
                  </tr>

                </tbody>

              </table>


{/* pagination */}
<div className="flex justify-center items-center lg:mt-14 md:mt-10 lg:pb-8 md:pb-6 lg:gap-[2.875rem] lg:w-[1604px] w-full 
md:gap-[1.665rem] font-medium text-[#3D3D3D] ">

 
                <p className="flex items-center lg:gap-2 md:gap-[0.56rem] ">
                  <img
                    src={Previous}
                    alt="Previous Arrow"
                    className="lg:w-[1.25rem] lg:h-[1.25rem] md:w-[0.72375rem] h-[0.72375rem]"
                  />
                  <span className="lg:tracking-[0.5rem] md:tracking-[0.3rem] lg:text-base md:text-[0.7rem] ">
                    1 2 3 4 5 6 7 8 9
                  </span>
                  <img
                    src={Next}
                    alt="Next Arrow"
                    className="lg:w-[1.25rem] lg:h-[1.25rem] md:w-[0.72375rem] h-[0.72375rem]"
                  />
                </p>

                <span className="lg:border md:border-[0.58px] flex items-center lg:gap-[5px] md:gap-[2.9px] lg:rounded-[4px] md:rounded-[2.32px] cursor-pointer border-[#0000004d] lg:p-[4px] md:p-[2.32px] ml-2 lg:text-base md:text-[0.7rem]">
                  10
                  <img
                    src={DownArrow}
                    alt="Down Arrow"
                    className="lg:w-[0.875rem] lg:h-[0.875rem] md:w-[0.506875rem] md:h-[0.506875rem] cursor-pointer "
                  />
                </span>

                <p className="flex items-center lg:gap-[5px] md:gap-[2.9px] font-normal lg:text-base md:text-[0.7rem] ">
                  Go to
                  <input
                    type="text"
                    className="lg:border md:border-[0.58px] border-[#0000004D] outline-none lg:p-2 md:p-[0.145rem] lg:rounded-[0.25rem] md:rounded-[0.145rem] lg:w-[2.8rem] lg:h-[1.8rem] md:w-[1.62875rem] md:h-[1.039375rem] "
                  />
                </p>
              </div>

            </div>

          </div>


{/* mobile users details */}
          <div className="lg:hidden md:hidden mt-7 mb-36 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] py-[1.25rem] px-1 w-full ">
            {/*  h-[102.125rem] w-[21.4375rem]*/}
            <MobileUserDetails
              borderColor="#26D06F"
            />

            <MobileUserDetails
  
              borderColor="#F95252"
            />
            <MobileUserDetails
   
              borderColor="#FAB329"
            />
            <MobileUserDetails

              borderColor="#26D06F"
            />
            <MobileUserDetails
  
              borderColor="#F95252"
            />
            <MobileUserDetails
       
              borderColor="#FAB329"
            />
            <MobileUserDetails
              borderColor="#26D06F"
            />

            <div className="relative  w-full py-10 justify-center gap-[0.5rem] hidden">
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

      ) : (
        <div className="bg-white lg:rounded-[0.75rem] md:rounded-[0.434375rem] w-full 
         mb-10 lg:mb-12 md:mb-10 lg:mt-14 md:mt-12 lg:shadow-[0px_0px_12px_0px_rgba(0,0,0,0.25)]
          md:shadow-[0px_0px_3.53px_0px_rgba(0,0,0,0.25)]  ">

          <div className="hidden md:block lg:mt-0 md:mt-2 w-full rounded-[12px] scrollbar overflow-x-auto">
            
            <ul className="bg-[#C8D5FE] w-full flex justify-between px-[0.8rem] lg:px-[0.8rem] lg:py-[1.8rem] 
            py-[1.8rem] md:px-[0.5rem] md:py-[1.5rem] rounded-t-[0.5rem] md:w-[1038px] lg:w-[1604px]  overflow-x-scroll scrollbar-hidden
  lg:rounded-t-[0.5rem] md:rounded-t-[0.434375rem] text-left font-semibold lg:text-base lg:leading-[1.3rem] 
  md:text-[0.8rem] md:leading-[0.753125rem]">
           
              <li className="">Customer Name</li>
              <li className=""> Product </li>
              <li> Description </li>
              <li>Order No</li>
              <li> Points Redeemed </li>
              <li className=""> Amount Received </li>
              <li>  Date & Time </li>
              <li> Status</li>
            </ul>

            <div className="flex flex-col w-full justify-center items-center py-[2rem] md:w-[1034px] lg:w-[1604px]  overflow-x-auto ">
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
