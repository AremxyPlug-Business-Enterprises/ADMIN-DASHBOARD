import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import SelectDateIcon from "../../assets/SelectDateIcon.png";
import ChevronDown from "../../assets/chevron-down.png";

export default function DateFilter() {
  const [selectFilter, setSelectFilter] = useState(false);
  const [selectedOption, setSelectedOption] = useState("TODAY");
  const [showCustomDatePicker, setShowCustomDatePicker] = useState(false);
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  function handleSelectFilter() {
    setSelectFilter((show) => !show);
  }

  function handleSelectOption(rangeLabel) {
    setSelectedOption(rangeLabel);
    setSelectFilter(false);

    if (rangeLabel === "CUSTOM") {
      setShowCustomDatePicker((prev) => !prev);
    } else {
      setShowCustomDatePicker(false);
    }
  }

  const handleApplyCustom = (e) => {
    e.stopPropagation();

    const start = range[0].startDate.toLocaleDateString();
    const end = range[0].endDate.toLocaleDateString();
    setSelectedOption(`${start} - ${end}`);
    setShowCustomDatePicker(false);
    setSelectFilter(false);
  };

  const options = [
    { label: "TODAY" },
    { label: "LAST 7 DAYS" },
    { label: "LAST 30 DAYS" },
    { label: "ALL TIME" },
    { label: "CUSTOM", image: ChevronDown },
  ];
  return (
    <div
      className="flex items-center justify-between gap-[0.666rem] lg:gap-[0.66rem] md:gap-[0.3856rem] rounded-[6.66px] lg:rounded-[6.66px] md:rounded-[3.86px] py-[0.333125rem] lg:py-[0.33rem] md:py-[0.1931rem] px-[0.666rem] lg:px-[0.66rem] md:px-[0.3856rem] shadow-[0px_0px_5.33px_0px_rgba(0,0,0,0.25)] lg:shadow-[0px_0px_5.33px_0px_rgba(0,0,0,0.25)] md:shadow-[0px_0px_3.09px_0px_rgba(0,0,0,0.25)] w-[7.5rem] lg:w-[12.16rem] md:w-[8rem] cursor-pointer relative"
      onClick={handleSelectFilter}
    >
      <span className="uppercase text-[#04177F] text-[0.875rem] lg:text-[1.33rem] md:text-[.77187rem] md:font-semibold leading-[1.3125rem] lg:leading-[1.998rem] md:leading-[1.1575rem] ">
        {selectedOption}
      </span>
      <img
        src={SelectDateIcon}
        alt=""
        className="w-[1.2125rem] h-[1.2125rem] lg:w-[1.24625rem] lg:h-[1.24625rem] md:w-[0.721875rem] md:h-[0.721875rem]"
      />
      {selectFilter && (
        <ul className=".poppins text-[0.75rem] text-[#494A53] w-[9.125rem]  shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] absolute top-[2.5rem] lg:top-[3.5rem] md:top-[2rem] lg:right-[0.5rem] md:right-0  bg-white z-10">
          {/* h-[2.75rem] */}
          {options.map((option, index) => (
            <li
              key={index}
              className="p-2 border-b-[0.4px] border-b-[#9C9C9C] cursor-pointer transition-all duration-300 hover:bg-[#1c0cf9ad] hover:text-white flex items-center justify-between"
              onClick={() => handleSelectOption(option.label)}
            >
              {option.label !== "CUSTOM" ? (
                <p className="">{option.label}</p>
              ) : (
                <>
                  <p className="">{option.label}</p>
                  <img
                    src={option.image}
                    alt={option.label}
                    className="w-4 h-4"
                  />
                </>
              )}
            </li>
          ))}
        </ul>
      )}

      {/* custom date picker */}
      {showCustomDatePicker && (
        <div
          className="bg-white rounded p-4 absolute top-[14rem] -right-10 lg:top-[5rem] lg:right-[10rem] md:top-[14rem] md:right-0 z-10 shadow-[0px_0px_20px_0px_rgba(139,67,255,0.5)] "
          onClick={(e) => e.stopPropagation()}
        >
          <p className="border border-[#E0E0E0] flex justify-center text-sm gap-[18rem] py-3 rounded-[4px] ">
            <span>Start Date</span>
            <span>End Date</span>
          </p>
          {/* react-date-range calendar */}
          <DateRange
            onChange={(item) => setRange([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={2}
            direction="horizontal"
            // rangeColors={["#04177F"]}
            showMonthAndYearPickers={true}
            editableDateInputs={true}
            className="shadow-[0px_23.65px_60.44px_0px_rgba(0,0,0,0.18)]"
            retainEndDateOnFirstSelection={false}
          />
          <div className="flex justify-center items-center gap-[1.25rem] mt-4  ">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowCustomDatePicker(false);
              }}
              className="px-6 py-2 bg-white rounded text-[0.8rem] leading-[0.9375rem] hover:bg-gray-100 border border-[#D0D5DD] "
            >
              Cancel
            </button>
            <button
              onClick={handleApplyCustom}
              className="bg-[#04177F] text-white px-8 py-2 text-[0.8rem] leading-[0.9375rem] rounded hover:bg-blue-900"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
