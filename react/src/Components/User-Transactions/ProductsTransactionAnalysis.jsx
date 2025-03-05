import DateFilter from "./DateFilter";
import TransactionStats from "./UserTransactionStats";

import ArrowDown from "../../assets/arrow-down.svg";

export default function ProductsTransactionAnalysis({ children }) {
  return (
    <div className="w-full lg:shadow-[0px_0px_9.19px_0px_rgba(0,0,0,0.25)] mt-8 md:mt-6 p-[1.25rem] rounded-2xl lg:rounded-[1.33rem] md:rounded-[0.7718rem] lg:py-[3.33rem] md:py-[1.92875rem] md:px-[0.8rem] flex flex-col gap-[2.5rem] items-center border border-[#77777733] lg:gap-[1.66rem] md:gap-[0.9643rem] md:shadow-[0px_0px_5.32px_0px_rgba(0,0,0,0.25)]">
      <span className="w-full px-3 lg:px-6 md:px-4 flex items-center justify-between cursor-pointer">
        <span className="rounded-[4px] lg:rounded-[19.59px] md:rounded-[11.34px] bg-[#92ABFE2E] flex items-center gap-[0.941875rem] lg:gap-[0.941875rem] md:gap-[0.5456rem] py-[0.470625rem] lg:py-[0.47rem] md:py-[0.2725rem] px-[0.8325rem] lg:px-[0.83rem] md:px-[0.4825rem] ">
          <span className="text-[0.83rem] md:font-semibold">NGN</span>
          <img
            src={ArrowDown}
            alt=""
            className="inline-block w-[1.318125rem] h-[1.318125rem] lg:w-[1.31rem] lg:h-[1.31rem] md:w-[0.76375rem] md:h-[0.76375rem] "
          />
        </span>

        {children}
        {/* <input type="date" name="" id="" /> */}
        <DateFilter />
      </span>

      <div className="w-full">
        <TransactionStats />
      </div>
    </div>
  );
}
