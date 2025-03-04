/* eslint-disable react/prop-types */
// import { useState } from "react";

import DateFilter from "../DateFilter";

const CircularProgressDiv = ({ value, color }) => {
    const radius = 30; // Circle radius
    const strokeWidth = 16; // Thickness of progress stroke
    const circumference = 2 * Math.PI * radius; // Full circle circumference
    const progress = (value / 100) * circumference; // Progress based on value
  
    return (
      <svg className="lg:w-[200px] w-[147px] h-[178px] lg:h-[200px]" viewBox="0 0 80 80" style={{ transform: "rotate(0deg)" }}>
        {/* Background Circle */}
        <circle cx="40" cy="40" r={radius} stroke="#E5E7EB" strokeWidth={strokeWidth} fill="none" />
        {/* Progress Circle */}
        <circle
          cx="40"
          cy="40"
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
        />
        {/* Percentage Text */}

        <text x="50%" y="50%" textAnchor="middle" dy="5" fontSize="12" fontWeight="bold" fill="#333">
          {value}%
        </text>

      </svg>
    );
  };
  
export default function UserProfileStats() {

  const data = [
    { label: "Total Users", value: 100, color: "#04177F", total: "10,000" },
    { label: "Total Active Users", value: 70, color: "#00B074", total: "7,000" },
    { label: "Total Inactive Users", value: 30, color: "#FF5B5B", total: "3,000" },
  ];

  return (
    <div className=" w-full">
      <div className="flex justify-between items-center mb-4">
        {/* <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded-full">TODAY</span> */}
      </div>


<div className="flex flex-col-reverse md:flex-row justify-between w-full gap-10 ">

      <div className="grid grid-cols-2  md:grid-cols-3 justify-items-center items-center w-full gap-15">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-2 lg:w-[] lg:h-[]">
            <CircularProgressDiv value={item.value} color={item.color} />
            <p className="text-[#464255] lg:text-[23px] lg:leading-[33px] font-semibold text-sm text-center">{item.label}</p>
          </div>
        ))}
      </div>


<div className="flex flex-col gap-4 md:max-w-[200px] xl:max-w-[246px] lg:w-full">

    <div className="flex w-full items-end justify-end md:justify-start">
    <DateFilter />
    </div>

      <div className="mt-6  w-full  hidden md:block">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-[10px] w-full text-sm text-gray-700 mb-2">

            <span className="flex items-center gap-2">
              <span className="w-[26px] h-[26px] rounded-full" style={{ backgroundColor: item.color }}></span>
            </span>

            <div className="flex flex-col">

            <span className="font-semibold lg:text-[21px] text-[#7E7E7E] lg:leading-[31px]"> {item.label}</span>
            <span className="font-semibold lg:text-[21px] lg:leading-[31px]">{item.total}</span>
            </div>
           
          

          </div>
        ))}
      </div>

      </div>
    
      </div>


    </div>
  );
}
