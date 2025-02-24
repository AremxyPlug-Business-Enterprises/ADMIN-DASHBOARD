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
    <div className="lg:mt-10 mt-8 relative w-full">
      <div className="poppins w-full">
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

export function Search({ setOpenFilter }) {
  return (
    <div className=" flex flex-col gap-[1.0625rem] md:gap-0 items-start md:flex-row md:justify-between md:items-center relative w-full">
      <input
        type="text"
        name=""
        id=""
        className="w-full md:w-[20.5rem] rounded-[0.47625rem] lg:rounded-[0.475rem] md:rounded-[0.276rem] py-[0.595625rem] lg:py-[0.595rem] md:py-[0.345rem] px-[0.8335rem] lg:px-[0.8335rem] md:px-[0.483rem] pl-7 lg:pl-7 md:pl-5 border-[0.95px] lg:border-[0.95px] md:border-[0.55px] border-[#D0D5DD] drop-shadow-[0px_0.95px_1.91px_rgba(16,24,40,0.05)] lg:drop-shadow-[0px_0.95px_1.91px_rgba(16,24,40,0.05)] md:drop-shadow-[0px_0.55px_1.1px_rgba(16,24,40,0.05)]  text-[#667085] placeholder:text-[#667085] [0.9531rem] lg:text-[0.9531rem] md:text-[0.5518rem] leading-[1.429375rem] lg:leading-[1.429375rem] md:leading-[0.828rem]  outline-none"
        placeholder="Search"
      />
      {/* lg:w-[26.62125rem] lg:h-[2.62875rem] md:w-[15.418rem] md:h-[1.565rem] */}
      <img
        src={SearchIcon}
        alt="Search Icon"
        className="absolute top-[.9rem] md:top-[0.65rem] lg:top-1/3 left-2 lg:left-[0.5rem] md:left-[0.3rem] w-[0.893125rem] h-[0.893125rem] lg:w-[0.8925rem] lg:h-[0.8925rem] md:w-[0.5175rem] md:h-[0.5175rem]  "
      />
      <span className="flex flex-col w-full md:w-auto md:flex-row md:items-center gap-[1.0625rem] lg:gap-[0.625rem] md:gap-[0.361875rem] ">
        <p className="poppins w-full flex items-center justify-center gap-[0.625rem] lg:gap-[0.625rem] md:gap-[0.361875rem] rounded-[4px] lg:rounded-[4px] md:rounded-[2.32px] border lg:border md:border-[0.58px] border-[#D0D5DD] p-[0.625rem] px-10 md:p-[0.361875rem] lg:px-[0.625rem] lg:py-[0.55rem] md:font-medium text-base lg:text-[1.19rem] md:text-[0.69rem] text-[#344054] mr-2 ">
          <span className="">2024-01-07</span>
          <span className="">~</span>
          <span className="">2024-01-08</span>
          <img
            src={Calendar}
            alt="Calendar Icon"
            className="w-[1.25rem] h-[1.265625rem] lg:w-[1.25rem] lg:h-[1.265rem] md:w-[0.72375rem] md:h-[0.733125rem] "
          />
        </p>
        <div className="flex gap-6 md:gap-[0.27625rem] lg:gap-[0.47625rem]">
          <button className="w-full md:w-auto flex items-center gap-[0.476rem] lg:gap-[0.476rem] md:gap-[0.27625rem] border-[0.95px] lg:border-[0.95px] md:border-[0.55px] border-[#D0D5DD] py-[0.595625rem] lg:py-[0.595rem] md:py-[0.345rem] px-[1.071875rem] lg:px-[1.07rem] md:px-[0.6206rem] rounded-[7.62px] lg:rounded-[7.62px] md:rounded-[0.27625rem] justify-center drop-shadow-[0px_0.95px_1.91px_rgba(16,24,40,0.05)] lg:drop-shadow-[0px_0.95px_1.91px_rgba(16,24,40,0.05)] md:drop-shadow-[0px_0.55px_1.1px_rgba(16,24,40,0.05)] cursor-pointer ">
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
          className="w-full md:w-auto flex items-center gap-[0.476rem] lg:gap-[0.476rem] md:gap-[0.27625rem] border-[0.95px] lg:border-[0.95px] md:border-[0.55px] border-[#D0D5DD] py-[0.595625rem] lg:py-[0.595rem] md:py-[0.345rem] px-[1.071875rem] lg:px-[1.07rem] md:px-[0.6206rem] rounded-[7.62px] lg:rounded-[7.62px] md:rounded-[0.27625rem] justify-center drop-shadow-[0px_0.95px_1.91px_rgba(16,24,40,0.05)] lg:drop-shadow-[0px_0.95px_1.91px_rgba(16,24,40,0.05)] md:drop-shadow-[0px_0.55px_1.1px_rgba(16,24,40,0.05)] cursor-pointer "
          onClick={() => setOpenFilter((prev) => !prev)}
        >
          <img src={Filter} alt="Filter Icon" className="w-[1.19125rem] h-[1.19125rem] lg:w-[1.191rem] lg:h-[1.191rem] md:w-[0.69rem] md:h-[0.69rem]" />
          <span className=" text-[0.953rem] lg:text-[0.953rem] md:text-[0.5518rem] text-[#344054] md:font-semibold">
            Filters
          </span>
        </button>
        </div>
      </span>
    </div>
  );
}

function Filters({ setOpenFilter }) {
  return (
    <div className="backdrop-filter bg-[rgb(255,255,255)] bg-opacity-50 absolute top-[14rem] lg:top-[8rem] md:top-[4.5rem] lg:left-0 md:left-[12rem] w-auto lg:w-full flex items-center justify-center ">
      <div className="poppins border-[0.5px] lg:border-[0.5px] md:border-[0.29px] border-[#7E7E7E] rounded-[0.75rem] lg:rounded-[0.75rem] md:rounded-[0.434375rem] w-[21.75rem]  lg:w-full lg:h-[36.47rem] md:w-[36.3425rem] md:h-[24.05375rem] py-[1.4375rem] lg:py-[1.4375rem] md:py-[0.8325rem] px-[1.375rem] lg:px-[1.375rem] md:px-[0.79625rem] lg:shadow-[0px_0px_12px_0px_rgba(0,0,0,0.25)] md:shadow-[0px_0px_6.95px_0px_rgba(0,0,0,0.25)] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.25)] ">
        <h5 className="text-base lg:text-[1.5rem] md:text-[0.86875rem] font-medium leading-[1.3rem] lg:leading-[1.95rem] md:leading-[1.1293rem] pb-3 lg:pb-4 ">
          Filters
        </h5>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-[1.5rem] md:gap-[0.86875rem] ">
          <li className="flex flex-col gap-[0.625rem] lg:gap-[0.625rem] md:gap-[0.36187rem] ">
            <label
              htmlFor="transaction-status"
              className="font-semibold text-[#7E7E7E] lg:text-base md:text-[0.579rem] "
            >
              Status
            </label>
            <select
              name=""
              id="transaction-status"
              className="poppins font-semibold outline-none lg:border-[0.4px] border-[0.4px]  border-[#9C9C9C] w-[19rem] h-[3.1875rem] lg:w-[19rem] lg:h-[3.1875rem] md:w-[11.00437rem] md:h-[1.846rem] md:border-[0.23px] "
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
          <li className="flex flex-col  gap-[0.625rem] lg:gap-[0.625rem] md:gap-[0.36187rem] ">
            <label
              htmlFor="products"
              className="font-semibold text-[#7E7E7E] lg:text-base md:text-[0.579rem] "
            >
              Product
            </label>
            <select
              name=""
              id="products"
              className="poppins font-semibold outline-none lg:border-[0.4px] border-[0.4px]  border-[#9C9C9C] w-[19rem] h-[3.1875rem] lg:w-[19rem] lg:h-[3.1875rem] md:w-[11.00437rem] md:h-[1.846rem] md:border-[0.23px] "
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
          <li className="flex flex-col  gap-[0.625rem] lg:gap-[0.625rem] md:gap-[0.36187rem] ">
            <label
              htmlFor="payment-method"
              className="font-semibold text-[#7E7E7E] lg:text-base md:text-[0.579rem] "
            >
              Payment method
            </label>
            <select
              name=""
              id="payment-method"
              className="poppins font-semibold outline-none lg:border-[0.4px] border-[0.4px]  border-[#9C9C9C] w-[19rem] h-[3.1875rem] lg:w-[19rem] lg:h-[3.1875rem] md:w-[11.00437rem] md:h-[1.846rem] md:border-[0.23px] "
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
          <li className="flex flex-col  gap-[0.625rem] lg:gap-[0.625rem] md:gap-[0.36187rem] ">
            <label
              htmlFor="user-id"
              className="font-semibold text-[#7E7E7E] lg:text-base md:text-[0.579rem] "
            >
              User ID
            </label>
            <input
              type="number"
              className="poppins outline-none lg:border-[0.4px] border-[0.4px]  border-[#9C9C9C] w-[19rem] h-[3.1875rem] lg:w-[19rem] lg:h-[3.1875rem] md:w-[11.00437rem] md:h-[1.846rem] md:border-[0.23px] font-medium p-2 "
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
              className="poppins outline-none lg:border-[0.4px] border-[0.4px]  border-[#9C9C9C] w-[19rem] h-[3.1875rem] lg:w-[19rem] lg:h-[3.1875rem] md:w-[11.00437rem] md:h-[1.846rem] md:border-[0.23px] font-medium p-2 "
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
              className="poppins outline-none lg:border-[0.4px] border-[0.4px]  border-[#9C9C9C] w-[19rem] h-[3.1875rem] lg:w-[19rem] lg:h-[3.1875rem] md:w-[11.00437rem] md:h-[1.846rem] md:border-[0.23px] font-medium p-2 "
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
              className="poppins outline-none lg:border-[0.4px] border-[0.4px]  border-[#9C9C9C] w-[19rem] h-[3.1875rem] lg:w-[19rem] lg:h-[3.1875rem] md:w-[11.00437rem] md:h-[1.846rem] md:border-[0.23px] font-medium p-2 "
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
              className="poppins outline-none lg:border-[0.4px] border-[0.4px]  border-[#9C9C9C] w-[19rem] h-[3.1875rem] lg:w-[19rem] lg:h-[3.1875rem] md:w-[11.00437rem] md:h-[1.846rem] md:border-[0.23px] font-medium p-2 "
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
              className="poppins outline-none lg:border-[0.4px] border-[0.4px]  border-[#9C9C9C] w-[19rem] h-[3.1875rem] lg:w-[19rem] lg:h-[3.1875rem] md:w-[11.00437rem] md:h-[1.846rem] md:border-[0.23px] font-medium p-2 "
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
              className="poppins outline-none lg:border-[0.4px] border-[0.4px]  border-[#9C9C9C] w-[19rem] h-[3.1875rem] lg:w-[19rem] lg:h-[3.1875rem] md:w-[11.00437rem] md:h-[1.846rem] md:border-[0.23px] font-medium p-2 "
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
