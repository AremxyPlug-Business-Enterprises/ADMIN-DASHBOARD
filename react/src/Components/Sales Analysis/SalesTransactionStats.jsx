/* eslint-disable react/prop-types */

import { PieChart, Pie, Cell } from "recharts";

export default function AllSalesStats() {
  const data = [
    { name: "Telecom", value: 10000, color: "#018FAE" },
    { name: "Payments", value: 10000, color: "#4A9F5F" },
    { name: "Card Issuing", value: 10000, color: "#6E0593" },
  ];

  const totalSales = {
    volume: 30000,
    value: 30000,
  };

  const tempValue = 26000;
  return (
    <>
      <div className="hidden md:flex flex-col w-full ">
        <div className="flex lg:gap-6 w-full">
          {data.map((item, index) => (
            <div key={index} className="flex items-start w-full mt-6 ">
              {/* Circular Progress Chart */}
              <div className="">
                <PieChart width={110} height={120}>
                  <Pie
                    data={[
                      { value: item.value },
                      // { value: totalSales.volume - item.value },
                      { value: totalSales.volume - tempValue },
                    ]}
                    cx={50}
                    cy={50}
                    innerRadius={30}
                    outerRadius={50}
                    startAngle={80}
                    endAngle={450}
                    dataKey="value"
                    stroke="none"
                  >
                    <Cell fill={item.color} />
                    <Cell fill="transparent" />
                  </Pie>

                  {/* Inner Pie (for the gray center) */}
                  <Pie
                    data={[{ value: totalSales.volume }]}
                    cx={50}
                    cy={50}
                    innerRadius={0}
                    outerRadius={40}
                    dataKey="value"
                    stroke="none"
                  >
                    <Cell fill="#D3D3D3" />
                  </Pie>
                </PieChart>
              </div>

              <div className="flex items-center gap-[0.6643rem] ">
                <span
                  style={{ backgroundColor: item.color }}
                  className="lg:h-5 lg:w-5 md:h-[0.72375rem] md:w-[0.72375rem] block rounded-[50%]"
                ></span>
                {/* Category Title */}
                <ul className=".poppins font-semibold md:text-[0.77rem] lg:text-base">
                  <li className="text-[#7E7E7E] ">{item.name}</li>

                  <li className="">
                    <span className="">Volume: </span>
                    {item.value.toLocaleString()}
                  </li>
                  <li className="">
                    <span className="">Value:</span> ₦
                    {item.value.toLocaleString()}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Total Sales Card */}
        <div className="mt-10 lg:w-[20rem] md:w-[10rem] md:rounded-[5.79px] lg:rounded-[13.29px] flex items-center lg:gap-4 md:gap-3 md:p-2 lg:p-4 lg:shadow-[0px_0px_5.32px_0px_rgba(0,0,0,0.25)] md:shadow-[0px_0px_2.32px_0px_rgba(0,0,0,0.25)] ">
          <div className="lg:w-[3.5rem] lg:h-[3.5rem] md:w-[2rem] md:h-[2rem] lg:rounded-[12.5px] md:rounded-[5.79px] bg-[#04177F] "></div>
          <div className=".poppins flex flex-col lg:gap-y-1 font-semibold md:text-[0.77rem] lg:text-base ">
            <h3 className="lg:text-[1.2rem] md:text-[0.9625rem] text-[#7E7E7E]">
              Total Sales
            </h3>
            <p className="">Volume: {totalSales.volume.toLocaleString()}</p>
            <p className="">Value: ₦ {totalSales.value.toLocaleString()}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between gap-[10rem] md:hidden w-full">
        {data.slice(0, 2).map((item, index) => (
          <div key={index} className="w-full mt-6 ">
            {/* Circular Progress Chart */}
            <div className="w-full">
              <PieChart width={110} height={120}>
                <Pie
                  data={[
                    { value: item.value },
                    // { value: totalSales.volume - item.value },
                    { value: totalSales.volume - tempValue },
                  ]}
                  cx={50}
                  cy={50}
                  innerRadius={30}
                  outerRadius={50}
                  startAngle={80}
                  endAngle={450}
                  dataKey="value"
                  stroke="none"
                >
                  <Cell fill={item.color} />
                  <Cell fill="transparent" />
                </Pie>

                {/* Inner Pie (for the gray center) */}
                <Pie
                  data={[{ value: totalSales.volume }]}
                  cx={50}
                  cy={50}
                  innerRadius={0}
                  outerRadius={40}
                  dataKey="value"
                  stroke="none"
                >
                  <Cell fill="#D3D3D3" />
                </Pie>
              </PieChart>
            </div>

            <div className="flex  items-center gap-[0.6rem] ">
              <span
                style={{ backgroundColor: item.color }}
                className="h-4 w-4 text-transparent rounded-[50%]"
              ></span>
              {/* Category Title */}
              <ul className=".poppins text-[13.31px] flex flex-col gap-y-1">
                <li className="text-[#7E7E7E] text-[15.02px]">{item.name}</li>

                <li className="">
                  <span className="">Volume: </span>
                  {item.value.toLocaleString()}
                </li>
                <li className="">
                  <span className="">Value:</span> ₦
                  {item.value.toLocaleString()}
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export function CustomizeSalesStats({ selectValue, setSalesTab }) {
  const data = {
    Telecom: {
      color: "#018FAE",
      data: [
        { name: "Airtime Top Up", value: 10000, volume: 10000 },
        { name: "Data Top Up", value: 10000, volume: 10000 },
        { name: "Education Pins", value: 10000, volume: 10000 },
        { name: "TV Subscription", value: 10000, volume: 10000 },
        { name: "Electricity Bills", value: 10000, volume: 10000 },
        { name: "Airtime Conversion", value: 10000, volume: 10000 },
        { name: "Bulk SMS", value: 10000, volume: 10000 },
        { name: "Recharge Card Printing", value: 10000, volume: 10000 },
      ],
    },
    Payments: {
      color: "#4A9F5F",
      data: [
        { name: "Virtual Accounts", value: 10000, volume: 10000 },
        { name: "Money Transfer", value: 10000, volume: 10000 },
        { name: "Wallet Transfer", value: 10000, volume: 10000 },
        { name: "Card Payments", value: 10000, volume: 10000 },
        { name: "International Transfer", value: 10000, volume: 10000 },
        { name: "Withdrawal", value: 10000, volume: 10000 },
        { name: "Fiat Conversion", value: 10000, volume: 10000 },
        { name: "Crypto Conversion", value: 10000, volume: 10000 },
        { name: "Crypto Top-up", value: 10000, volume: 10000 },
        { name: "Points Redeem", value: 10000, volume: 10000 },
        { name: "Bank USSD", value: 10000, volume: 10000 },
        { name: "Request Money", value: 10000, volume: 10000 },
        { name: "Payment Link", value: 10000, volume: 10000 },
        { name: "Scan QR Code", value: 10000, volume: 10000 },
      ],
    },
    "Card Issuing": {
      color: "#6E0593",
      data: [
        { name: "Card Top Up", value: 10000, volume: 10000 },
        { name: "Card Withdrawal", value: 10000, volume: 10000 },
        { name: "Card Transfer", value: 10000, volume: 10000 },
      ],
    },
  };

  const totalSales = {
    volume: 30000,
    value: 30000,
  };

  const tempValue = 26000;
  return (
    <div className="flex flex-col w-full ">
      <div className="grid grid-cols-4 w-full overflow-y-auto max-h-[17rem] md:max-h-[15rem]">
        <Chart
          tempValue={tempValue}
          totalSales={totalSales}
          Alldata={data}
          selectValue={selectValue}
        />
      </div>

      {/* Sales Card */}
      <div className="mt-6 md:mt-10 ml-4 lg:w-[20rem] md:w-[9.771875rem] w-[12rem] rounded-[10px] md:rounded-[5.79px] lg:rounded-[13.29px] flex items-center lg:gap-4 gap-3 p-4 md:p-2 lg:p-4 lg:shadow-[0px_0px_5.32px_0px_rgba(0,0,0,0.25)] shadow-[0px_0px_2.32px_0px_rgba(0,0,0,0.25)] ">
        <div
          style={{ backgroundColor: data[selectValue].color }}
          className="lg:w-[3.5rem] lg:h-[3.5rem] md:w-[2rem] md:h-[2rem] w-[2rem] h-[2rem] rounded-[5.79px] lg:rounded-[12.5px] md:rounded-[5.79px] "
        ></div>
        <div className=".poppins flex flex-col lg:gap-y-1 md:font-semibold text-[14px] md:text-[0.65rem] lg:text-base">
          <h3 className="lg:text-[1.2rem] text-[14.5px] md:text-[0.72375rem] text-[#7E7E7E]">
            {selectValue === "Card Issuing" ? "Card" : selectValue} Sales
          </h3>
          <p className="">Volume: {totalSales.volume.toLocaleString()}</p>
          <p className="">Value: ₦ {totalSales.value.toLocaleString()}</p>
        </div>
      </div>

      <button
        className="bg-[#04177F] ml-4 transition-all duration-300 hover:bg-[#04167fe8] text-[15px] lg:text-[1rem] md:text-[0.660625rem] leading-[1.40625rem] lg:leading-6 md:leading-[1.155rem] text-white w-[15rem] h-[3.125rem] lg:w-[13.8125rem] md:w-[9.15125rem] lg:h-[2.75rem] md:h-[1.82rem] py-[0.8325rem] lg:py-[0.625rem] md:py-[0.413125rem] px-[1.664375rem] lg:px-[1.25rem] md:px-[0.825625rem] rounded-[0.3125rem] lg:rounded-[0.75rem] md:rounded-[0.495625rem] font-medium cursor-pointer .poppins mt-12 "
        onClick={() => setSalesTab("All Sales")}
      >
        View All Sales Analysis
      </button>
    </div>
  );
}

function Chart({ tempValue, totalSales, Alldata, selectValue }) {
  const data = Alldata[selectValue] || { color: "", data: [] };
  return (
    <>
      {data.data.map((item, index) => (
        <div key={index} className="flex w-full mt-6 ">
          {/* Circular Progress Chart */}

          <PieChart width={90} height={90}>
            <Pie
              data={[
                { value: item.value },
                // { value: totalSales.volume - item.value },
                { value: totalSales.volume - tempValue },
              ]}
              cx={50}
              cy={50}
              innerRadius={25}
              outerRadius={32}
              startAngle={80}
              endAngle={450}
              dataKey="value"
              stroke="none"
            >
              <Cell fill={data.color} />
              <Cell fill="transparent" />
            </Pie>

            {/* Inner Pie (for the gray center) */}
            <Pie
              data={[{ value: totalSales.volume }]}
              cx={50}
              cy={50}
              innerRadius={0}
              outerRadius={25}
              dataKey="value"
              stroke="none"
            >
              <Cell fill="#D3D3D3" />
            </Pie>
          </PieChart>

          <div className="flex items-center md:gap-[0.6643rem] w-full md:w-auto ">
            <span
              style={{ backgroundColor: data.color }}
              className="w-[0.75rem] h-[0.75rem] lg:h-4 lg:w-4 md:h-[0.7rem] md:w-[0.7rem] block rounded-[50%]"
            ></span>
            {/* Category Title */}
            <ul className=".poppins md:font-semibold text-[11.5px] md:text-[0.65rem] lg:text-[0.671875rem]  ">
              <li className="text-[#7E7E7E] ">{item.name}</li>

              <li className="">
                <span className="">Volume: </span>
                {item.volume.toLocaleString()}
              </li>
              <li className="">
                <span className="">Value:</span> ₦{item.value.toLocaleString()}
              </li>
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}
