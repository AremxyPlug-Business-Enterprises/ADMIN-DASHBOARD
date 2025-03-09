import { useState } from "react";
// import PropTypes from "prop-types";

import ArrowRight from "../../assets/arrow-right.png";
import NoTransaction from "../../assets/no-transaction.png";

export default function SalesTransactionDetails() {
  // eslint-disable-next-line no-unused-vars
  const [showUserDetails, setShowUserDetails] = useState(true);
  // const [selectPage, setSelectPage] = useState(false);

  function formatCurrency(value) {
    const formattedCurrency = new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      // minimumSignificantDigits:"2"
    }).format(value);
    return formattedCurrency;
  }

  // ₦
  const productDetails = [
    { title: "MTN VTU", quantity: 100, amount: 10000 },
    { title: "MTN SNS", quantity: 100, amount: 10000 },
    { title: "AIRTEL VTU", quantity: 100, amount: 10000 },
    { title: "AIRTEL SNS", quantity: 100, amount: 10000 },
    { title: "GLO VTU", quantity: 100, amount: 10000 },
    { title: "GLO SNS", quantity: 100, amount: 10000 },
    { title: "9MOBILE VTU", quantity: 100, amount: 10000 },
    { title: "9MOBILE SNS", quantity: 100, amount: 10000 },
    { title: "SMILE AIRTIME", quantity: 100, amount: 10000 },
    { title: "INTERNATIONAL AIRTIME", quantity: 100, amount: 10000 },
  ];
  return (
    <>
      {showUserDetails ? (
        <div className="lg:rounded-[0.75rem] md:rounded-[0.434375rem] rounded-[4px] w-full lg:mb-12 mb-10 lg:mt-14 mt-12 lg:shadow-[0px_0px_12px_0px_rgba(0,0,0,0.25)] shadow-[0px_0px_3.53px_0px_rgba(0,0,0,0.25)] pb-20 ">
          <div className="lg:mt-4 md:mt-2 w-full">
            <ul className="font-semibold w-full text-left lg:text-base md:text-[0.7rem] text-[0.75rem] md:leading-[0.753125rem] flex justify-between items-center bg-[#C8D5FE] lg:px-[0.8rem] lg:py-[1.5rem] px-[0.5rem] py-[1.1rem] lg:rounded-t-[0.5rem] md:rounded-t-[0.434375rem] pr-[2rem] md:pr-[5rem] lg:pr-[5rem] ">
              <li>Product</li>
              <li>Quantity</li>
              <li>Total Amount</li>
            </ul>
          </div>
          <div className="lg:px-[0.8rem] px-[0.5rem]">
            {productDetails.map((item, index) => (
              <ul
                key={index}
                className="flex w-full justify-between gap-[12.5rem] md:gap-[rem] items-center font-medium md:font-semibold text-[0.75rem] md:text-[0.7rem] lg:text-base border-b-[0.5px] border-b-[#9C9C9C] lg:py-[1.5rem] py-[1.1rem]  "
              >
                <li className="w-[10.5625rem]">{item.title}</li>
                <li className="w-[10.5625rem]">{item.quantity}</li>
                <li className="flex gap-[1.5rem] w-[10.5625rem] items-center justify-end md:pr-[2rem]  ">
                  <span className="">{formatCurrency(item.amount)}</span>
                  <img
                    src={ArrowRight}
                    alt="Right Arrow"
                    className="h-[0.9375rem] w-[0.9375rem] cursor-pointer "
                  />
                </li>
              </ul>
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="hidden lg:block md:block lg:rounded-[0.75rem] md:rounded-[0.434375rem] w-full lg:mb-12 md:mb-10 lg:mt-14 md:mt-12 lg:shadow-[0px_0px_12px_0px_rgba(0,0,0,0.25)] md:shadow-[0px_0px_3.53px_0px_rgba(0,0,0,0.25)] pb-28 ">
            <div className="lg:mt-4 md:mt-2 w-full">
              <ul className="font-semibold w-full text-left lg:text-base md:text-[0.7rem] md:leading-[0.753125rem] flex justify-between items-center bg-[#C8D5FE] lg:px-[0.8rem] lg:py-[1.5rem] md:px-[0.5rem] md:py-[1.1rem] lg:rounded-t-[0.5rem] md:rounded-t-[0.434375rem] md:pr-[5rem] lg:pr-[5rem] ">
                <li>Product</li>
                <li>Quantity</li>
                <li>Total Amount</li>
              </ul>
            </div>
            <div className="hidden md:block lg:mt-4 md:mt-2 w-full rounded-[12px] ">
              <div className="flex flex-col w-full justify-center items-center py-[2rem] ">
                <img
                  src={NoTransaction}
                  alt="No Transaction Image"
                  className="w-[30rem] h-[26rem] "
                />
                <p className="font-medium text-[1.5rem] leading-[3rem] text-[#0000004D] ">
                  No Sales Record Found !
                </p>
              </div>
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex flex-col w-full justify-center items-center py-[2rem] ">
            <img
              src={NoTransaction}
              alt="No Transaction Image"
              className="w-[18.96125rem] h-[16.72375rem] md:w-[30rem] md:h-[26rem] opacity-80 "
            />
            <p className=".poppins font-medium text-[1.17375rem] md:text-[1.5rem] leading-[3rem] text-[#0000004D] ">
              No Transaction Found !
            </p>
          </div>
        </>
      )}
    </>
  );
}

// #26D06F #F95252 #FAB329 #92ABFE

// <div className="hidden md:block lg:mt-4 md:mt-2 w-full rounded-[12px] ">
//   <ul className="bg-[#C8D5FE] w-full flex justify-between px-[0.8rem] lg:px-[0.8rem] lg:py-[1.8rem] py-[1.8rem] md:px-[0.5rem] md:py-[1.5rem] rounded-t-[0.5rem] lg:rounded-t-[0.5rem] md:rounded-t-[0.434375rem] text-left font-semibold lg:text-base lg:leading-[1.3rem] md:text-[0.8rem] md:leading-[0.753125rem]">
//     <li className="">Customer Name</li>
//     <li>Products</li>
//     <li>Description</li>
//     <li>Order No</li>
//     <li>Amount</li>
//     <li>Date & Time</li>
//     <li>Status</li>
//   </ul>

//   <div className="flex flex-col w-full justify-center items-center py-[2rem] ">
//     <img
//       src={NoTransaction}
//       alt="No Transaction Image"
//       className="w-[30rem] h-[26rem] "
//     />
//     <p className="font-medium text-[1.5rem] leading-[3rem] text-[#0000004D] ">
//       No Transaction Found !
//     </p>
//   </div>
//   {/* text-[2.5rem] leading-[3.25rem] */}
// </div>

// <div className="md:hidden flex flex-col w-full justify-center items-center py-[2rem] ">
//   <img
//     src={NoTransaction}
//     alt="No Transaction Image"
//     className="w-[18.96125rem] h-[16.72375rem] md:w-[30rem] md:h-[26rem] opacity-80 "
//   />
//   <p className=".poppins font-medium text-[1.17375rem] md:text-[1.5rem] leading-[3rem] text-[#0000004D] ">
//     No Transaction Found !
//   </p>
// </div>
// <; className="bg-white lg:rounded-[0.75rem] md:rounded-[0.434375rem] w-full mb-10 lg:mb-12 md:mb-10 lg:mt-14 md:mt-12 lg:shadow-[0px_0px_12px_0px_rgba(0,0,0,0.25)] md:shadow-[0px_0px_3.53px_0px_rgba(0,0,0,0.25)]  ">
