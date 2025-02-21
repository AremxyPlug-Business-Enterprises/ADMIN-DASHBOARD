const CircularProgressDiv = ({ value, color, rotateValue }) => {
  const radius = 30; // Circle radius
  const strokeWidth = 6; // Thickness of progress stroke
  const circumference = 2 * Math.PI * radius; // Full circle circumference
  const progress = (value / 100) * circumference; // Progress based on value
  return (
    <svg
      width="110"
      height="110"
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
    <div className="poppins">
      {/* Transaction Circles */}
      <div className="lg:mb-8 md:mb-6 flex justify-between items-center ">
        {data.map((item, index) => (
            <div key={index} className="flex flex-col lg:gap-[0.5rem] md:gap-[0.29rem] ">
                {/* gap-[0.99rem] md:gap-[0.5788rem] gap-[0.29rem] */}
            <CircularProgressDiv
              value={item.value}
              color={item.color}
              rotateValue={item.rotateValue}
            />
            <p className="text-[#7E7E7E] lg:text-base md:text-[0.7718rem] font-semibold  ">{item.label}</p>
            {/* text-[1.33rem] */}
            <p className="lg:text-[0.875rem] md:text-[0.675rem] font-semibold ">Volume: 10,000</p>
            <p className="lg:text-[0.875rem] md:text-[0.675rem] font-semibold ">Value: ₦10,000</p>
          </div>
        ))}
      </div>
    </div>
  );
}
