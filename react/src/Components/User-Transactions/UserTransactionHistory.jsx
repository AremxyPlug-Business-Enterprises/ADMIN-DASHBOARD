import { useState } from "react";
import PropTypes from "prop-types";

import ArrowRight from "../../assets/arrow-right.png";
import SearchIcon from "../../assets/SearchIcon.png";
// import Calendar from "../../assets/calendar.png";
import Export from "../../assets/export.png";
import Filter from "../../assets/filter-icon.png";
import FilterArrow from "../../assets/filter-arrow-down.png";

import UserTransactionDetails from "../../Components/User-Transactions/UserTransactionDetails";
import { Button } from "../../Components/User-Transactions/UserTransactionButtons";
import { SelectDate } from "./DateFilter";




export default function TransactionHistory() {
  const [openFilter, setOpenFilter] = useState(false);
  return (
    <div className="lg:mt-10 mt-8 relative w-full">
      <div className=".poppins w-full">
        <p className="flex items-center gap-[0.595625rem] lg:gap-[0.595rem] md:gap-[0.345rem] mb-4 lg:mt-8 lg:mb-4 md:mt-6 md:mb-3 w-full">
          <span className="text-[#7C7C7C] md:font-medium text-base lg:text-[1.19rem] md:text-[0.69rem] lg:leading-[2.49rem] md:leading-[1.035rem] ">
            Transactions History
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
        <UserTransactionDetails />
        {openFilter && <Filters setOpenFilter={setOpenFilter} />}
      </div>

    </div>
  );
}

// search bar
export function Search({ setOpenFilter }) {
  return (
    <div className=" flex flex-col gap-[1.0625rem] md:gap-[1.5rem] items-start md:flex-row md:justify-between md:items-center relative w-full">
      <input
        type="text"
        name=""
        id=""
        className="w-[40%] rounded-[0.47625rem] lg:rounded-[0.475rem] md:rounded-[0.276rem] py-[0.595625rem] lg:py-[0.595rem] md:py-[0.345rem] px-[0.8335rem] lg:px-[0.8335rem] md:px-[0.483rem] pl-7 lg:pl-7 md:pl-5 border-[0.95px] lg:border-[0.95px] md:border-[0.55px] border-[#D0D5DD] drop-shadow-[0px_0.95px_1.91px_rgba(16,24,40,0.05)] lg:drop-shadow-[0px_0.95px_1.91px_rgba(16,24,40,0.05)] md:drop-shadow-[0px_0.55px_1.1px_rgba(16,24,40,0.05)]  text-[#667085] placeholder:text-[#667085] [0.9531rem] lg:text-[0.9531rem] md:text-[0.5518rem] leading-[1.429375rem] lg:leading-[1.429375rem] md:leading-[0.828rem]  outline-none"
        placeholder="Search"
      />
      {/* lg:w-[26.62125rem] lg:h-[2.62875rem] md:w-[15.418rem] md:h-[1.565rem] */}
      <img
        src={SearchIcon}
        alt="Search Icon"
        className="absolute top-[.9rem] md:top-[0.65rem] lg:top-1/3 left-2 lg:left-[0.5rem] md:left-[0.3rem] w-[0.893125rem] h-[0.893125rem] lg:w-[0.8925rem] lg:h-[0.8925rem] md:w-[0.5175rem] md:h-[0.5175rem]  "
      />
      <span className="flex flex-col w-full md:flex-row md:items-center gap-[1.0625rem] lg:gap-[0.625rem] md:gap-[0.361875rem] ">
        <SelectDate />
        <div className="w-full flex gap-6 md:gap-[0.27625rem] lg:gap-[0.47625rem]">
          <button className="w-full flex items-center gap-[0.476rem] lg:gap-[0.476rem] md:gap-[0.27625rem] border-[0.95px] lg:border-[0.95px] md:border-[0.55px] border-[#D0D5DD] py-[0.595625rem] lg:py-[0.595rem] md:py-[0.345rem] px-[1.071875rem] lg:px-[1.07rem] md:px-[0.6206rem] rounded-[7.62px] lg:rounded-[7.62px] md:rounded-[0.27625rem] justify-center drop-shadow-[0px_0.95px_1.91px_rgba(16,24,40,0.05)] lg:drop-shadow-[0px_0.95px_1.91px_rgba(16,24,40,0.05)] md:drop-shadow-[0px_0.55px_1.1px_rgba(16,24,40,0.05)] cursor-pointer ">
            {/* w-[9.6rem] */}
            <img
              src={Export}
              alt="Export Icon"
              className="w-[1.19125rem] h-[1.19125rem] lg:w-[1.191rem] lg:h-[1.191rem] md:w-[0.69rem] md:h-[0.69rem] "
            />
            <span className="text-[0.953rem] lg:text-[0.953rem] md:text-[0.5518rem] text-[#344054] md:font-semibold">
              Export
            </span>
          </button>
          <button
            className="w-full flex items-center gap-[0.476rem] lg:gap-[0.476rem] md:gap-[0.27625rem] border-[0.95px] lg:border-[0.95px] md:border-[0.55px] border-[#D0D5DD] py-[0.595625rem] lg:py-[0.595rem] md:py-[0.345rem] px-[1.071875rem] lg:px-[1.07rem] md:px-[0.6206rem] rounded-[7.62px] lg:rounded-[7.62px] md:rounded-[0.27625rem] justify-center drop-shadow-[0px_0.95px_1.91px_rgba(16,24,40,0.05)] lg:drop-shadow-[0px_0.95px_1.91px_rgba(16,24,40,0.05)] md:drop-shadow-[0px_0.55px_1.1px_rgba(16,24,40,0.05)] cursor-pointer "
            onClick={() => setOpenFilter((prev) => !prev)}
          >
            <img
              src={Filter}
              alt="Filter Icon"
              className="w-[1.19125rem] h-[1.19125rem] lg:w-[1.191rem] lg:h-[1.191rem] md:w-[0.69rem] md:h-[0.69rem]"
            />
            <span className=" text-[0.953rem] lg:text-[0.953rem] md:text-[0.5518rem] text-[#344054] md:font-semibold ">
              Filters
            </span>
          </button>
        </div>
      </span>
    </div>
  );
}
Search.propTypes = {
  setOpenFilter: PropTypes.func,
};

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

  const statuses = [
    "All Transactions",
    "Successful",
    "Failed",
    "Pending",
    "Refund",
    "Cancelled",
  ];
  const products = ["All Products", "Telecom", "Payments", "Card issung"];
  const paymentMethods = ["NGN", "USD", "GBP", "EUR", "AUD", "KES"];
  return (
    <div className="backdrop-filter w-[50%] md:w-[75%] absolute top-[14rem] lg:top-[8rem] md:top-[4.5rem] right-0 flex items-center justify-center ">
      <div className=".poppins bg-[rgb(255,255,255)] border-[0.5px] lg:border-[0.5px] md:border-[0.29px]  border-[#7E7E7E] rounded-[0.75rem] lg:rounded-[0.75rem] md:rounded-[0.434375rem] w-[21.75rem]  lg:w-full lg:h-[36.47rem] md:w-[36.3425rem] md:h-[24.05375rem] py-[1.4375rem] lg:py-[1.4375rem] md:py-[0.8325rem] px-[1.375rem] lg:px-[1.375rem] md:px-[0.79625rem] lg:shadow-[0px_0px_12px_0px_rgba(0,0,0,0.25)] md:shadow-[0px_0px_6.95px_0px_rgba(0,0,0,0.25)] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.25)] ">
        <h5 className="text-base lg:text-[1.5rem] md:text-[0.86875rem] font-medium leading-[1.3rem] lg:leading-[1.95rem] md:leading-[1.1293rem] pb-3 lg:pb-4 ">
          Filters
        </h5>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-[1.5rem] w-full md:gap-[0.86875rem] ">
          <li className="relative flex flex-col gap-[0.625rem] lg:gap-[0.625rem] md:gap-[0.36187rem] ">
            <p className="relative font-semibold text-[#7E7E7E] lg:text-base md:text-[0.579rem] ">
              Status
            </p>
            <span
              className="relative font-medium leading-[1.3rem] text-[#7C7C7C] lg:border-[0.4px] border-[0.4px] border-[#9C9C9C] h-[3.1875rem] lg:h-[3.1875rem] md:h-[1.846rem] md:border-[0.23px] transition-all duration-300 p-4 flex items-center md:text-[0.8rem] lg:text-base cursor-pointer "
              onClick={toggleStatusDropdown}
            >
              {/* w-[19rem] lg:w-[19rem]  md:w-[11.00437rem] */}
              {showStatus}
              <img
                src={FilterArrow}
                alt="Arrow down"
                className={`lg:w-6 lg:h-6 h-6 w-6 md:w-[0.868125rem] md:h-[0.868125rem] absolute right-1 lg:top-3 transition-transform duration-300 ${
                  showStatusDropdown ? "rotate-180" : ""
                }`}
              />
            </span>
            {showStatusDropdown && (
              <ul className="shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] absolute left-0 top-[5.5rem] md:top-[4rem] lg:top-[5.8rem] w-full bg-white z-1 pt-2 pb-5 px-1 cursor-pointer">
                {statuses.map((stat, index) => (
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
                ))}
              </ul>
            )}
            {/* w-[19rem] h-[3.1875rem] */}
          </li>
          <li className="relative flex flex-col gap-[0.625rem] lg:gap-[0.625rem] md:gap-[0.36187rem] ">
            <p className="relative font-semibold text-[#7E7E7E] lg:text-base md:text-[0.579rem] ">
              Product
            </p>
            <span
              className="relative font-medium leading-[1.3rem] text-[#7C7C7C] lg:border-[0.4px] border-[0.4px] border-[#9C9C9C] h-[3.1875rem] lg:h-[3.1875rem] md:h-[1.846rem] md:border-[0.23px] transition-all duration-300 p-4 flex items-center md:text-[0.8rem] lg:text-base cursor-pointer "
              onClick={toggleProductsDropdown}
            >
              {/* w-[19rem] lg:w-[19rem] md:w-[11.00437rem] */}
              {showProducts}
              <img
                src={FilterArrow}
                alt="Arrow down"
                className={`lg:w-6 lg:h-6 h-6 w-6 md:w-[0.868125rem] md:h-[0.868125rem] absolute right-1 lg:top-3 transition-transform duration-300 ${
                  showProductsDropdown ? "rotate-180" : ""
                }`}
              />
            </span>
            {showProductsDropdown && (
              <ul className="shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] absolute left-0 top-[5.5rem] md:top-[4rem] lg:top-[5.8rem] w-full bg-white z-1 pt-2 pb-5 px-1 cursor-pointer">
                {products.map((prod, index) => (
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
              className="relative font-medium leading-[1.3rem] text-[#7C7C7C] lg:border-[0.4px] border-[0.4px] border-[#9C9C9C] h-[3.1875rem] lg:h-[3.1875rem]  md:h-[1.846rem] md:border-[0.23px] transition-all duration-300 p-4 flex items-center md:text-[0.8rem] lg:text-base cursor-pointer "
              onClick={togglePaymentDropdown}
            >
              {showPaymentMethod}
              <img
                src={FilterArrow}
                alt="Arrow down"
                className={`lg:w-6 lg:h-6 h-6 w-6 md:w-[0.868125rem] md:h-[0.868125rem] absolute right-1 lg:top-3 transition-transform duration-300 ${
                  showPaymentMethodDropdown ? "rotate-180" : ""
                }`}
              />
            </span>
            {showPaymentMethodDropdown && (
              <ul className="shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] absolute left-0 top-[5.5rem] md:top-[4rem] lg:top-[5.8rem] w-full  bg-white pt-2 pb-5 px-1 cursor-pointer">
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
              className=".poppins outline-none lg:border-[0.4px] border-[0.4px] border-[#9C9C9C] h-[3.1875rem] lg:h-[3.1875rem] md:h-[1.846rem] md:border-[0.23px] p-4 md:text-[0.8rem] lg:text-base font-medium leading-[1.3rem] text-[#7C7C7C] "
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
              className=".poppins outline-none lg:border-[0.4px] border-[0.4px]  border-[#9C9C9C]  h-[3.1875rem] lg:h-[3.1875rem]  md:h-[1.846rem] md:border-[0.23px] p-4 md:text-[0.8rem] lg:text-base font-medium leading-[1.3rem] text-[#7C7C7C] "
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
              className=".poppins outline-none lg:border-[0.4px] border-[0.4px]  border-[#9C9C9C] h-[3.1875rem] lg:h-[3.1875rem]  md:h-[1.846rem] md:border-[0.23px] p-4 md:text-[0.8rem] lg:text-base font-medium leading-[1.3rem] text-[#7C7C7C] "
              id="customer-email"
            />
          </li>
          <li className="flex flex-col  gap-[0.625rem] lg:gap-[0.625rem] md:gap-[0.36187rem] ">
            <label
              htmlFor="Virtual Account"
              className="font-semibold text-[#7E7E7E] lg:text-base md:text-[0.579rem]"
            >
              Virtual Account
            </label>
            <input
              type="text"
              className=".poppins outline-none lg:border-[0.4px] border-[0.4px]  border-[#9C9C9C] h-[3.1875rem] lg:h-[3.1875rem]  md:h-[1.846rem] md:border-[0.23px] p-4 md:text-[0.8rem] lg:text-base font-medium leading-[1.3rem] text-[#7C7C7C] "
              id="Virtual Account"
            />
          </li>
          <li className="flex flex-col  gap-[0.625rem] lg:gap-[0.625rem] md:gap-[0.36187rem] ">
            <label
              htmlFor="order-no"
              className="font-semibold text-[#7E7E7E] lg:text-base md:text-[0.579rem]"
            >
              Order No
            </label>
            <input
              type="number"
              className=".poppins outline-none lg:border-[0.4px] border-[0.4px]  border-[#9C9C9C] h-[3.1875rem] lg:h-[3.1875rem]  md:h-[1.846rem] md:border-[0.23px] p-4 md:text-[0.8rem] lg:text-base font-medium leading-[1.3rem] text-[#7C7C7C] "
              id="order-no"
            />
          </li>
          <li className="flex flex-col  gap-[0.625rem] lg:gap-[0.625rem] md:gap-[0.36187rem] ">
            <label
              htmlFor="transaction-id"
              className="font-semibold text-[#7E7E7E] lg:text-base md:text-[0.579rem]"
            >
              Transaction ID
            </label>
            <input
              type="number"
              className=".poppins outline-none lg:border-[0.4px] border-[0.4px]  border-[#9C9C9C] h-[3.1875rem] lg:h-[3.1875rem]  md:h-[1.846rem] md:border-[0.23px] p-4 md:text-[0.8rem] lg:text-base font-medium leading-[1.3rem] text-[#7C7C7C] "
              id="transaction-id"
            />
          </li>
          <li className="flex flex-col  gap-[0.625rem] lg:gap-[0.625rem] md:gap-[0.36187rem] ">
            <label
              htmlFor="ref-no"
              className="font-semibold text-[#7E7E7E] lg:text-base md:text-[0.579rem]"
            >
              Reference No
            </label>
            <input
              type="number"
              className=".poppins outline-none lg:border-[0.4px] border-[0.4px]  border-[#9C9C9C] h-[3.1875rem] lg:h-[3.1875rem]  md:h-[1.846rem] md:border-[0.23px] p-4 md:text-[0.8rem] lg:text-base font-medium leading-[1.3rem] text-[#7C7C7C] "
              id="ref-no"
            />
          </li>
        </ul>

        <div className="flex items-center justify-center mt-8 pb-6  ">
          <Button onClick={() => setOpenFilter(false)}>Apply Filter</Button>
        </div>
        
      </div>
    </div>
  );
}

Filters.propTypes = {
  setOpenFilter: PropTypes.func,
};