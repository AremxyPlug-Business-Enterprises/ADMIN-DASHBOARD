import { useState } from "react";
import PropTypes from "prop-types";


import ArrowRight from "../../assets/arrow-right.png";
import FilterArrow from "../../assets/filter-arrow-down.png";

import { Search } from "../User-Transactions/UserTransactionHistory";
import { Button } from "../User-Transactions/UserTransactionButtons";
import SalesTransactionDetails from "./SalesTransactionDetails";



export default function SalesHistory() {
  const [openFilter, setOpenFilter] = useState(false);
  return (
    <div className="lg:mt-10 mt-8 relative w-full">
      <div className=".poppins w-full">
        <p className="flex items-center gap-[0.595625rem] lg:gap-[0.595rem] md:gap-[0.345rem] mb-4 lg:mt-8 lg:mb-4 md:mt-6 md:mb-3 w-full">
          <span className="text-[#7C7C7C] md:font-medium text-base lg:text-[1.19rem] md:text-[0.69rem] lg:leading-[2.49rem] md:leading-[1.035rem] ">
            Sales History
          </span>
          <img
            src={ArrowRight}
            alt="Arrow Right"
            className="w-6 lg:w-[1.99rem] md:w-[0.828rem] h-6 lg:h-[1.99rem] md:h-[0.828rem]"
          />
        </p>
      </div>

      <div className="">
        <Search setOpenFilter={setOpenFilter} />
        {openFilter && <Filters setOpenFilter={setOpenFilter} />}
        <SalesTransactionDetails />
      </div>

    </div>
  );
}

function Filters({ setOpenFilter }) {
  const [showStatus, setShowStatus] = useState("");
  const [showProducts, setShowProducts] = useState("");
  const [showPaymentMethod, setShowPaymentMethod] = useState("");

  // show/hide dropdowns
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [showPaymentMethodDropdown, setShowPaymentMethodDropdown] =
    useState(false);

  function toggleStatusDropdown() {
    setShowStatusDropdown((prev) => !prev);
    setShowProductsDropdown(false);
    setShowPaymentMethodDropdown(false);
  }
  function toggleProductsDropdown() {
    setShowProductsDropdown((prev) => !prev);
    setShowStatusDropdown(false);
    setShowPaymentMethodDropdown(false);
  }
  function togglePaymentDropdown() {
    setShowPaymentMethodDropdown((prev) => !prev);
    setShowProductsDropdown(false);
    setShowStatusDropdown(false);
  }

  function closeDropdowns() {
    setShowStatusDropdown(false);
    setShowProductsDropdown(false);
    setShowPaymentMethodDropdown(false);
  }

//   const statuses = [
//     "All Transactions",
//     "Successful",
//     "Failed",
//     "Pending",
//     "Refund",
//     "Cancelled",
//   ];
//   const products = ["All Products", "Telecom", "Payments", "Card issung"];
  const productTypes = ["Telecom", "Payments", "Card issung"];
  const paymentMethods = ["NGN", "USD", "GBP", "EUR", "AUD", "KES"];
  return (
    <div className="backdrop-filter w-[50%] md:w-[75%] bg-opacity-50 absolute top-[14rem] lg:top-[8rem] md:top-[4.5rem] right-0 flex items-center justify-center ">
      <div className=".poppins border-[0.5px] lg:border-[0.5px] bg-[rgb(255,255,255)] md:border-[0.29px] right-0 border-[#7E7E7E] rounded-[0.75rem] lg:rounded-[0.75rem] md:rounded-[0.434375rem] w-full lg:h-[23.224375rem] md:h-[16rem] py-[1.4375rem] lg:py-[1.4375rem] md:py-[0.8325rem] px-[1.375rem] lg:px-[1.375rem] md:px-[0.79625rem] lg:shadow-[0px_0px_12px_0px_rgba(0,0,0,0.25)] md:shadow-[0px_0px_6.95px_0px_rgba(0,0,0,0.25)] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.25)] ">
        <h5 className="text-base lg:text-[1.5rem] md:text-[0.86875rem] font-medium leading-[1.3rem] lg:leading-[1.95rem] md:leading-[1.1293rem] pb-3 lg:pb-4 ">
          Filters
        </h5>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-[1.5rem] md:gap-[0.86875rem] ">
          <li className="relative flex flex-col gap-[0.625rem] lg:gap-[0.625rem] md:gap-[0.36187rem] ">
            <p className="relative font-semibold text-[#7E7E7E] lg:text-base md:text-[0.579rem] ">
              Products
            </p>
            <span
              className="relative font-medium leading-[1.3rem] text-[#7C7C7C] lg:border-[0.4px] border-[0.4px] border-[#9C9C9C] h-[3.1875rem] lg:h-[3.1875rem] md:h-[1.846rem] md:border-[0.23px] transition-all duration-300 p-4 flex items-center md:text-[0.8rem] lg:text-base "
              onClick={toggleStatusDropdown}
            >
              {showStatus}
              <img
                src={FilterArrow}
                alt="Arrow down"
                className={`lg:w-6 lg:h-6 w-6 h-6 md:w-[0.868125rem] md:h-[0.868125rem] absolute right-1 lg:top-3 transition-transform duration-300 ${
                  showStatusDropdown ? "rotate-180" : ""
                }`}
              />
            </span>
            {showStatusDropdown && (
              <ul className="shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] absolute left-0 top-[5.5rem] md:top-[4rem] lg:top-[5.5rem] w-full bg-white pt-2 pb-6 px-1">
                {/* {statuses.map((stat, index) => (
                  <li
                    key={index}
                    className="py-2 px-1  border-b-[0.4px] border-b-[#9c9c9c6b] md:border-b-[0.23px] transition-colors hover:bg-blue-400 hover:text-white duration-300 font-medium md:text-[0.57875rem] lg:text-base lg:leading-[1.3rem] md:leading-[0.7525rem] text-[#7C7C7C]  "
                    onClick={() => {
                      setShowStatus(stat);
                      closeDropdowns();
                    }}
                  >
                    {stat}
                  </li>
                ))} */}
              </ul>
            )}
            {/* w-[19rem] h-[3.1875rem] */}
          </li>
          <li className="relative flex flex-col gap-[0.625rem] lg:gap-[0.625rem] md:gap-[0.36187rem] ">
            <p className="relative font-semibold text-[#7E7E7E] lg:text-base md:text-[0.579rem] ">
              Product Type
            </p>
            <span
              className="relative font-medium leading-[1.3rem] text-[#7C7C7C] lg:border-[0.4px] border-[0.4px] border-[#9C9C9C] h-[3.1875rem] lg:h-[3.1875rem] md:h-[1.846rem] md:border-[0.23px] transition-all duration-300 p-4 flex items-center md:text-[0.8rem] lg:text-base "
              onClick={toggleProductsDropdown}
            >
              {showProducts}
              <img
                src={FilterArrow}
                alt="Arrow down"
                className={`lg:w-6 lg:h-6 w-6 h-6 md:w-[0.868125rem] md:h-[0.868125rem] absolute right-1 lg:top-3 transition-transform duration-300 ${
                  showProductsDropdown ? "rotate-180" : ""
                }`}
              />
            </span>
            {showProductsDropdown && (
              <ul className="shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] absolute left-0 top-[5.5rem] md:top-[4rem] lg:top-[5.5rem] w-full bg-white z-1 pt-2 pb-6 px-1">
                {productTypes.map((prod, index) => (
                  <li
                    key={index}
                    className="py-2 px-1  border-b-[0.4px] border-b-[#9c9c9c6b] md:border-b-[0.23px] transition-colors hover:bg-blue-400 hover:text-white duration-300 font-medium md:text-[0.57875rem] lg:text-base lg:leading-[1.3rem] md:leading-[0.7525rem] text-[#7C7C7C] "
                    onClick={() => {
                      setShowProducts(prod);
                      closeDropdowns();
                    }}
                  >
                    {prod}
                  </li>
                ))}
              </ul>
            )}
            {/* w-[19rem] h-[3.1875rem] */}
          </li>
          <li className="relative flex flex-col gap-[0.625rem] lg:gap-[0.625rem] md:gap-[0.36187rem] ">
            <p className="relative font-semibold text-[#7E7E7E] lg:text-base md:text-[0.579rem] ">
              Payment method
            </p>
            <span
              className="relative font-medium leading-[1.3rem] text-[#7C7C7C] lg:border-[0.4px] border-[0.4px] border-[#9C9C9C] h-[3.1875rem] lg:h-[3.1875rem] md:h-[1.846rem] md:border-[0.23px] transition-all duration-300 p-4 flex items-center md:text-[0.8rem] lg:text-base "
              onClick={togglePaymentDropdown}
            >
              {showPaymentMethod}
              <img
                src={FilterArrow}
                alt="Arrow down"
                className={`w-6 h-6 lg:w-6 lg:h-6 md:w-[0.868125rem] md:h-[0.868125rem] absolute right-1 lg:top-3 transition-transform duration-300 ${
                  showPaymentMethodDropdown ? "rotate-180" : ""
                }`}
              />
            </span>
            {showPaymentMethodDropdown && (
              <ul className="shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] absolute left-0 md:top-[4rem] lg:top-[5.5rem] top-[5.5rem] w-full bg-white pt-2 pb-6 px-1">
                {paymentMethods.map((payment, index) => (
                  <li
                    key={index}
                    className="py-2 px-1  border-b-[0.4px] border-b-[#9c9c9c6b] md:border-b-[0.23px] transition-colors hover:bg-blue-400 hover:text-white duration-300 font-medium md:text-[0.57875rem] lg:text-base lg:leading-[1.3rem] md:leading-[0.7525rem] text-[#7C7C7C] "
                    onClick={() => {
                      setShowPaymentMethod(payment);
                      closeDropdowns();
                    }}
                  >
                    {payment}
                  </li>
                ))}
              </ul>
            )}
            {/* w-[19rem] h-[3.1875rem] */}
          </li>
          
          <li className="flex flex-col  gap-[0.625rem] lg:gap-[0.625rem] md:gap-[0.36187rem] ">
            <label
              htmlFor="user-id"
              className="font-semibold text-[#7E7E7E] lg:text-base md:text-[0.579rem] "
            >
              User ID
            </label>
            <input
              type="number"
              className=".poppins outline-none lg:border-[0.4px] border-[0.4px]  border-[#9C9C9C] h-[3.1875rem] lg:h-[3.1875rem] md:h-[1.846rem] md:border-[0.23px] p-4 md:text-[0.8rem] lg:text-base font-medium leading-[1.3rem] text-[#7C7C7C] "
              id="user-id"
            />
          </li>
          <li className="flex flex-col  gap-[0.625rem] lg:gap-[0.625rem] md:gap-[0.36187rem] ">
            <label
              htmlFor="username"
              className="font-semibold text-[#7E7E7E] lg:text-base md:text-[0.579rem]"
            >
              Username
            </label>
            <input
              type="text"
              className=".poppins outline-none lg:border-[0.4px] border-[0.4px]  border-[#9C9C9C] h-[3.1875rem] lg:h-[3.1875rem] md:h-[1.846rem] md:border-[0.23px] p-4 md:text-[0.8rem] lg:text-base font-medium leading-[1.3rem] text-[#7C7C7C] "
              id="username"
            />
          </li>
          <li className="flex flex-col  gap-[0.625rem] lg:gap-[0.625rem] md:gap-[0.36187rem] ">
            <label
              htmlFor="customer-email"
              className="font-semibold text-[#7E7E7E] lg:text-base md:text-[0.579rem]"
            >
              Customer Email
            </label>
            <input
              type="email"
              className=".poppins outline-none lg:border-[0.4px] border-[0.4px]  border-[#9C9C9C] h-[3.1875rem] lg:h-[3.1875rem] md:h-[1.846rem] md:border-[0.23px] p-4 md:text-[0.8rem] lg:text-base font-medium leading-[1.3rem] text-[#7C7C7C] "
              id="customer-email"
            />
          </li>
         
        </ul>

        <div className="flex items-center justify-center mt-8 lg:pb-6  md:pb-0 ">
          <Button onClick={() => setOpenFilter(false)}>Apply Filter</Button>
        </div>
        
      </div>
    </div>
  );
}

Filters.propTypes = {
  setOpenFilter: PropTypes.func,
};