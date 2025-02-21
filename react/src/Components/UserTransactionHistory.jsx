import ArrowRight from "../assets/arrow-right.png";
import SearchIcon from "../assets/SearchIcon.png";
import Calendar from "../assets/calendar.png";
import Export from "../assets/export.png";
import Filter from "../assets/filter-icon.png";

import UserTransactionDetails from "./UserTransactionDetails";
import { Button } from "./UserTransactionButtons";

import { useState } from "react";

export default function TransactionHistory() {
  const [openFilter, setOpenFilter] = useState(false);
  return (
    <div className="lg:mt-10 md:mt-8 mt-8 relative">
      <div className="poppins">
        <p className="flex items-center gap-[0.595625rem] lg:gap-[0.595rem] md:gap-[0.345rem] lg:mt-8 lg:mb-4 md:mt-6 md:mb-3 ">
          <span className="text-[#7C7C7C] font-medium text-base lg:text-[1.19rem] md:text-[0.69rem] lg:leading-[2.49rem] md:leading-[1.035rem] ">
            Transactions History
          </span>
          <img
            src={ArrowRight}
            alt="Arrow Right"
            className="w-6 lg:w-[1.99rem] md:w-[0.828rem] h-6 lg:h-[1.99rem] md:h-[0.828rem]"
          />
        </p>
      </div>
      <div className="hidden lg:block md:block">
      <Search setOpenFilter={setOpenFilter} />
      <UserTransactionDetails />
      {openFilter && <Filters setOpenFilter={setOpenFilter} />}
      </div>
    </div>
  );
}

export function Search({ setOpenFilter }) {
  return (
    <div className=" flex flex-col md:flex-row justify-between items-center relative">
      <input
        type="text"
        name=""
        id=""
        className="lg:rounded-[0.475rem] md:rounded-[0.276rem] lg:py-[0.595rem] lg:px-[0.8335rem] lg:pl-7 md:py-[0.345rem] md:px-[0.483rem] md:pl-5 lg:border-[0.95px] md:border-[0.55px] border-[#D0D5DD] lg:drop-shadow-[0px_0.95px_1.91px_rgba(16,24,40,0.05)] md:drop-shadow-[0px_0.55px_1.1px_rgba(16,24,40,0.05)]  text-[#667085] lg:text-[0.95rem] md:text-[0.5518rem] "
        placeholder="Search"
      />
      {/* lg:w-[26.62125rem] lg:h-[2.62875rem] md:w-[15.418rem] md:h-[1.565rem] */}
      <img
        src={SearchIcon}
        alt="Search Icon"
        className="absolute lg:top-1/3 lg:left-[0.5rem] md:top-[0.65rem] md:left-[0.3rem] lg:w-[0.8925rem] lg:h-[0.8925rem] md:w-[0.5175rem] md:h-[0.5175rem] placeholder:text-[#667085] text-[#667085] lg:text-[0.9531rem] md:text-[0.5518rem] lg:leading-[1.429375rem] md:leading-[0.828rem] "
      />
      <span className="flex items-center lg:gap-[0.625rem] md:gap-[0.361875rem] ">
        <p className="poppins flex items-center lg:gap-[0.625rem] md:gap-[0.361875rem] lg:rounded-[4px] md:rounded-[2.32px] lg:border md:border-[0.58px] border-[#D0D5DD] md:p-[0.361875rem] lg:px-[0.625rem] lg:py-[0.55rem] font-medium lg:text-[1.19rem] md:text-[0.69rem] text-[#344054] mr-2 ">
          <span className="">2024-01-07</span>
          <span className="">~</span>
          <span className="">2024-01-08</span>
          <img
            src={Calendar}
            alt="Calendar Icon"
            className="lg:w-[1.25rem] lg:h-[1.265rem] md:w-[0.72375rem] md:h-[0.733125rem] "
          />
        </p>
        <button className="flex items-center lg:gap-[0.476rem] md:gap-[0.27625rem] lg:border-[0.95px] md:border-[0.55px] border-[#D0D5DD] lg:py-[0.595rem] lg:px-[1.07rem] md:py-[0.345rem] md:px-[0.6206rem] lg:rounded-[7.62px] md:rounded-[0.27625rem] justify-center lg:drop-shadow-[0px_0.95px_1.91px_rgba(16,24,40,0.05)] md:drop-shadow-[0px_0.55px_1.1px_rgba(16,24,40,0.05)] cursor-pointer ">
          <img
            src={Export}
            alt="Export Icon"
            className="lg:w-[1.191rem] lg:h-[1.191rem] md:w-[0.69rem] md:h-[0.69rem] "
          />
          <span className="lg:text-[0.953rem] md:text-[0.5518rem] text-[#344054] font-semibold">
            Export
          </span>
        </button>
        <button
          className="flex items-center lg:gap-[0.476rem] md:gap-[0.27625rem] lg:border-[0.95px] md:border-[0.55px] border-[#D0D5DD] lg:py-[0.595rem] lg:px-[1.07rem] md:py-[0.345rem] md:px-[0.6206rem] lg:rounded-[7.62px] md:rounded-[0.27625rem] justify-center lg:drop-shadow-[0px_0.95px_1.91px_rgba(16,24,40,0.05)] md:drop-shadow-[0px_0.55px_1.1px_rgba(16,24,40,0.05)] cursor-pointer "
          onClick={() => setOpenFilter((prev) => !prev)}
        >
          <img src={Filter} alt="Filter Icon" className="w-[1.191rem]" />
          <span className="lg:text-[0.953rem] md:text-[0.5518rem] text-[#344054] font-semibold">
            Filters
          </span>
        </button>
      </span>
    </div>
  );
}

function Filters({ setOpenFilter }) {
  return (
    <div className="backdrop-filter bg-[rgb(255,255,255)] bg-opacity-50 absolute lg:top-[8rem] md:top-[4.5rem] lg:left-0 md:left-[12rem] lg:w-full flex items-center justify-center ">
      <div className="poppins lg:border-[0.5px] md:border-[0.29px] border-[#7E7E7E] lg:rounded-[0.75rem] md:rounded-[0.434375rem] lg:w-full lg:h-[36.47rem] md:w-[36.3425rem] md:h-[24.05375rem] lg:py-[1.4375rem] lg:px-[1.375rem] md:py-[0.8325rem] md:px-[0.79625rem] lg:shadow-[0px_0px_12px_0px_rgba(0,0,0,0.25)] md:shadow-[0px_0px_6.95px_0px_rgba(0,0,0,0.25)]  ">
        {/* w-[62.75rem] md:h-[21.05375rem]*/}
        <h5 className="lg:text-[1.5rem] md:text-[0.86875rem] font-medium lg:leading-[1.95rem] md:leading-[1.1293rem] lg:pb-4 md:pb-3 ">
          Filters
        </h5>
        <ul className="grid grid-cols-3 lg:gap-[1.5rem] md:gap-[0.86875rem] ">
          <li className="flex flex-col lg:gap-[0.625rem] md:gap-[0.36187rem] ">
            <label
              htmlFor="transaction-status"
              className="font-semibold text-[#7E7E7E] lg:text-base md:text-[0.579rem] "
            >
              Status
            </label>
            <select
              name=""
              id="transaction-status"
              className="poppins font-semibold outline-none lg:border-[0.4px] border-[#9C9C9C] lg:w-[19rem] lg:h-[3.1875rem] md:w-[11.00437rem] md:h-[1.846rem] md:border-[0.23px] "
            >
              {/* w-[19rem] h-[3.1875rem] */}
              <option
                value=""
                className="shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] "
              ></option>
              <option
                value=""
                className="shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] "
              >
                All Transactions
              </option>
              {/* <hr className=" border-t-[0.4px] border-t-[#9C9C9C] w-1/2 " /> */}
              <option
                value=""
                className="shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)]"
              >
                Successful
              </option>
              <option
                value=""
                className="shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)]"
              >
                Failed
              </option>
              <option
                value=""
                className="shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)]"
              >
                Pending
              </option>
              <option
                value=""
                className="shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)]"
              >
                Refund
              </option>
              <option
                value=""
                className="shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)]"
              >
                Cancelled
              </option>
            </select>
          </li>
          <li className="flex flex-col gap-[0.625rem]">
            <label
              htmlFor="products"
              className="font-semibold text-[#7E7E7E] lg:text-base md:text-[0.579rem] "
            >
              Product
            </label>
            <select
              name=""
              id="products"
              className="poppins font-semibold lg:border-[0.4px] border-[#9C9C9C] lg:w-[19rem] lg:h-[3.1875rem] md:w-[11.00437rem] md:h-[1.846rem] md:border-[0.23px]"
            >
              <option
                value=""
                className="shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] "
              ></option>
              <option value="">All Products</option>
              <option value="">Telecom</option>
              <option value="">Payments</option>
              <option value="">Card issuing</option>
            </select>
          </li>
          <li className="flex flex-col gap-[0.625rem] ">
            <label
              htmlFor="payment-method"
              className="font-semibold text-[#7E7E7E] lg:text-base md:text-[0.579rem] "
            >
              Payment method
            </label>
            <select
              name=""
              id="payment-method"
              className="poppins font-semibold lg:border-[0.4px] border-[#9C9C9C] lg:w-[19rem] lg:h-[3.1875rem] md:w-[11.00437rem] md:h-[1.846rem] md:border-[0.23px] "
            >
              <option
                value=""
                className="shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] "
              ></option>
              <option value="">NGN</option>
              <option value="">USD</option>
              <option value="">GBP</option>
              <option value="">EUR</option>
              <option value="">AUD</option>
              <option value="">KES</option>
            </select>
          </li>
          <li className="flex flex-col gap-[0.625rem] ">
            <label
              htmlFor="user-id"
              className="font-semibold text-[#7E7E7E] lg:text-base md:text-[0.579rem] "
            >
              User ID
            </label>
            <input
              type="number"
              className="lg:border-[0.4px] border-[#9C9C9C] lg:w-[19rem] lg:h-[3.1875rem] md:w-[11.00437rem] md:h-[1.846rem] font-medium p-2 md:border-[0.23px] "
              id="user-id"
            />
          </li>
          <li className="flex flex-col gap-[0.625rem] ">
            <label
              htmlFor="username"
              className="font-semibold text-[#7E7E7E] lg:text-base md:text-[0.579rem]"
            >
              Username
            </label>
            <input
              type="text"
              className="lg:border-[0.4px] border-[#9C9C9C] lg:w-[19rem] lg:h-[3.1875rem] md:w-[11.00437rem] md:h-[1.846rem] font-medium p-2 md:border-[0.23px] "
              id="username"
            />
          </li>
          <li className="flex flex-col gap-[0.625rem] ">
            <label
              htmlFor="customer-email"
              className="font-semibold text-[#7E7E7E] lg:text-base md:text-[0.579rem]"
            >
              Customer Email
            </label>
            <input
              type="email"
              className="lg:border-[0.4px] border-[#9C9C9C] lg:w-[19rem] lg:h-[3.1875rem] md:w-[11.00437rem] md:h-[1.846rem] font-medium p-2 md:border-[0.23px] "
              id="customer-email"
            />
          </li>
          <li className="flex flex-col gap-[0.625rem] ">
            <label
              htmlFor="Virtual Account"
              className="font-semibold text-[#7E7E7E] lg:text-base md:text-[0.579rem]"
            >
              Virtual Account
            </label>
            <input
              type="text"
              className="lg:border-[0.4px] border-[#9C9C9C] lg:w-[19rem] lg:h-[3.1875rem] md:w-[11.00437rem] md:h-[1.846rem] font-medium p-2 md:border-[0.23px] "
              id="Virtual Account"
            />
          </li>
          <li className="flex flex-col gap-[0.625rem] ">
            <label
              htmlFor="order-no"
              className="font-semibold text-[#7E7E7E] lg:text-base md:text-[0.579rem]"
            >
              Order No
            </label>
            <input
              type="number"
              className="lg:border-[0.4px] border-[#9C9C9C] lg:w-[19rem] lg:h-[3.1875rem] md:w-[11.00437rem] md:h-[1.846rem] font-medium p-2 md:border-[0.23px] "
              id="order-no"
            />
          </li>
          <li className="flex flex-col gap-[0.625rem] ">
            <label
              htmlFor="transaction-id"
              className="font-semibold text-[#7E7E7E] lg:text-base md:text-[0.579rem]"
            >
              Transaction ID
            </label>
            <input
              type="number"
              className="lg:border-[0.4px] border-[#9C9C9C] lg:w-[19rem] lg:h-[3.1875rem] md:w-[11.00437rem] md:h-[1.846rem] font-medium p-2 md:border-[0.23px] "
              id="transaction-id"
            />
          </li>
          <li className="flex flex-col gap-[0.625rem] ">
            <label
              htmlFor="ref-no"
              className="font-semibold text-[#7E7E7E] lg:text-base md:text-[0.579rem]"
            >
              Reference No
            </label>
            <input
              type="number"
              className="lg:border-[0.4px] border-[#9C9C9C] lg:w-[19rem] lg:h-[3.1875rem] md:w-[11.00437rem] md:h-[1.846rem] font-medium p-2 md:border-[0.23px] "
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
