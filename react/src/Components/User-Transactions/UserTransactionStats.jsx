/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button } from "./UserTransactionButtons";

const CircularProgressDiv = ({ value, color, rotateValue }) => {
  const radius = 30; // Circle radius
  const strokeWidth = 6; // Thickness of progress stroke
  const circumference = 2 * Math.PI * radius; // Full circle circumference
  const progress = (value / 100) * circumference; // Progress based on value
  return (
    <svg
      // width="110"
      // height="110"
      className="w-28 h-28 md:w-[4.8225rem] md:h-[4.8225rem] lg:w-[6.875rem] lg:h-[6.875rem]"
      viewBox="0 0 80 80"
      //   className="rotate-[90deg]"
      style={{ transform: "rotate(90deg)" }}
    >
      {/* Background Circle */}
      <circle
        cx="40"
        cy="40"
        r={radius}
        stroke="#D3D3D3"
        strokeWidth={strokeWidth}
        fill="none"
      />
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
        strokeLinecap="round"
        transform={`rotate(${rotateValue}, 40 40)`} // Rotates to start from top
      />
    </svg>
  );
};

export default function TransactionStats() {
  const [showAll, setShowAll] = useState(false);

  const data = [
    {
      label: "All Transactions",
      value: 70,
      color: "#04177F",
      rotateValue: -50,
    },
    { label: "Successful", value: 50, color: "#17E506", rotateValue: 5 },
    { label: "Failed", value: 80, color: "#F95252", rotateValue: -100 },
    { label: "Pending", value: 20, color: "#FFA733", rotateValue: 90 },
    { label: "Refunded", value: 35, color: "#1C0CF9", rotateValue: 50 },
    { label: "Canceled", value: 45, color: "#E62E05", rotateValue: 20 },
  ];

  return (
    <div className=".poppins w-full">
      <div className="hidden w-full md:flex lg:mb-8 md:mb-6 justify-between items-center ">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col w-full lg:gap-[0.5rem] md:gap-[0.29rem]  "
          >
            {/* gap-[0.99rem] md:gap-[0.5788rem] gap-[0.29rem] */}
            <CircularProgressDiv
              value={item.value}
              color={item.color}
              rotateValue={item.rotateValue}
            />
            <p className="text-[#7E7E7E] lg:text-base md:text-[0.7rem] font-semibold  ">
              {item.label}
            </p>
            {/* text-[1.33rem] */}
            <p className="lg:text-[0.875rem] md:text-[0.675rem] font-semibold ">
              Volume: 10,000
            </p>
            <p className="lg:text-[0.875rem] md:text-[0.675rem] font-semibold ">
              Value: ₦10,000
            </p>
          </div>
        ))}
      </div>

      <div className="md:hidden w-full">
        <div className="grid grid-cols-2 gap-[0.875rem] ">
          {data.slice(0, showAll ? data.length : 2).map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <CircularProgressDiv
                value={item.value}
                color={item.color}
                rotateValue={item.rotateValue}
              />
              <p className="text-[#7E7E7E] font-medium mb-1">
                {item.label}
              </p>
              <p className="text-sm mb-1">Volume: 10,000</p>
              <p className="text-sm mb-1 ">Value: ₦10,000</p>
            </div>
          ))}
        </div>

        
        <div className="flex justify-center my-4">
        {!showAll ?
          <Button
            onClick={() => setShowAll((show) => !show)}
          >
            View All Transactions Analysis
          </Button>
          : 
          <Button
            onClick={() => setShowAll(false)}
          >
            View Less Transactions Analysis
          </Button>
        }
        </div>
      </div>
    </div>
  );
}
