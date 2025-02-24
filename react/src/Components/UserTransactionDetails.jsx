import Previous from "../assets/Previous.png";
import Next from "../assets/Next.png";
import DownArrow from "../assets/down.png";
import ArrowRight from "../assets/arrow-right.png";

import { StatusButton } from "./UserTransactionButtons";

function UserDetails() {
  return (
    <>
      <td className="pr-[0.5rem] pl-[0.8rem] lg:py-[0.625rem] lg:text-base md:text-[0.7rem] md:py-[1rem] ">
        Habib Kamaldeen
      </td>
      <td className="lg:px-[0.8rem] lg:py-[1.2rem] lg:text-base md:text-[0.7rem] md:py-[1rem] md:px-[1.2rem] ">
        Airtime top-up
      </td>
      <td className="lg:px-[0.8rem] lg:py-[1.2rem] lg:text-base md:text-[0.7rem] md:py-[1rem] md:px-[0.8rem] ">
        MTN VTU
      </td>
      <td className="lg:px-[0.8rem] lg:py-[1.2rem] lg:text-base md:text-[0.7rem] md:py-[1rem] md:px-[0.8rem] ">
        00000000
      </td>
      <td className="lg:px-[0.8rem] lg:py-[1.2rem] lg:text-base md:text-[0.7rem] md:py-[1rem] md:px-[0.8rem] ">
        ₦25,000
      </td>
      <td className="lg:px-[0.8rem] lg:py-[1.2rem] lg:text-base md:text-[0.7rem] md:py-[1rem] md:px-[0.8rem] ">
        May 21st, 2023, <br /> 07:21:00 PM
      </td>
    </>
  );
}

function MobileUserDetails({orderId, description, product, bgColor}) {
  let statusText = "";
  if (bgColor === "#26D06F") statusText = "Successful";
  else if (bgColor === "#F95252") statusText = "Failed";
  else if (bgColor === "#FAB329") statusText = "Pending";
  else if (bgColor === "#92ABFE") statusText = "Refunded";
  else statusText = "Unknown"; 
  
  return (
    <div className="flex justify-between py-[1.25rem] px-1 border-b border-b-[#00000033] ">
      <ul className="flex flex-col gap-2.5 items-start text-[0.875rem] leading-[1.1375rem] ">
        <li className="poppins text-[#7E7E7E] ">Habib Kamaldeen</li>
        <li className="text-[#7C7C7C]">{orderId}</li>
        <li className="text-[#7C7C7C] ">{product}</li>
        <li className="poppins">{description}</li>
      </ul>
      <ul className="poppins text-[#7C7C7C] flex flex-col gap-2.5 items-end text-[0.875rem] leading-[1.1375rem] ">
        <li>
          <StatusButton bgColor={bgColor}>{statusText}</StatusButton>
        </li>
        <li>₦25,000</li>
        <li className="w-[6.5rem]">
          <span className=" ">May 21st, 2023, 07:21:00 pm</span>
          <img
            src={ArrowRight}
            alt="Arrow Right"
            className=" w-5 h-5 cursor-pointer inline"
          />
        </li>
      </ul>
    </div>
  );
}
// #26D06F

export default function UserTransactionDetails() {
  return (
    <>
      <div className="hidden lg:block md:block lg:rounded-[0.75rem] md:rounded-[0.434375rem] w-full lg:mb-12 md:mb-10 lg:mt-14 md:mt-12 lg:shadow-[0px_0px_12px_0px_rgba(0,0,0,0.25)] md:shadow-[0px_0px_3.53px_0px_rgba(0,0,0,0.25)] ">
        <div className="lg:mt-4 md:mt-2 ">
          <table className="font-semibold ">
            <thead className="text-left lg:text-base md:text-[0.7rem] md:leading-[0.753125rem] ">
              <tr className="bg-[#C8D5FE] ">
                <th className="lg:px-[0.8rem] lg:py-[1.2rem] md:px-[0.8rem] md:py-[0.325rem] lg:rounded-tl-[0.5rem] md:rounded-tl-[0.434375rem]">
                  Customer Name
                </th>
                <th className="lg:px-[0.8rem] lg:py-[1.2rem] md:px-[0.8rem] md:py-[0.325rem]">
                  Products
                </th>
                <th className="lg:px-[0.8rem] lg:py-[1.2rem] md:px-[0.8rem] md:py-[0.325rem]">
                  Description
                </th>
                <th className="lg:px-[0.8rem] lg:py-[1.2rem] md:px-[0.8rem] md:py-[0.325rem]">
                  Order No
                </th>
                <th className="lg:px-[0.8rem] lg:py-[1.2rem] md:px-[0.8rem] md:py-[0.325rem]">
                  Amount
                </th>
                <th className="lg:px-[0.8rem] lg:py-[1.2rem] md:px-[0.8rem] md:py-[0.8rem]">
                  Date & Time
                </th>
                <th className="lg:pl-[4rem] md:pl-4 px-[0.8rem] py-[0.625rem] lg:rounded-tr-[0.5rem] md:rounded-tr-[0.434375rem] ">
                  Status
                </th>
              </tr>
            </thead>

            <tbody className="font-medium text-left ">
              <tr className="text-[#7E7E7E] border-b-[0.5px] border-b-[#9C9C9C]   ">
                <UserDetails />
                <td className="lg:px-[0.8rem] lg:py-[1.2rem] md:py-[1rem] md:px-[0.8rem]">
                  <div className="flex items-center gap-2">
                    <StatusButton bgColor="#26D06F">Successful</StatusButton>
                    <img
                      src={ArrowRight}
                      alt="Arrow Right"
                      className=" w-[0.9375rem] h-[0.9375rem] cursor-pointer"
                    />
                  </div>
                </td>
              </tr>

              <tr className="text-[#7E7E7E] border-b-[0.5px] border-b-[#9C9C9C]   ">
                <UserDetails />
                <td className="lg:px-[0.8rem] lg:py-[1.2rem] md:py-[1rem] md:px-[0.8rem]">
                  <div className="flex items-center gap-2">
                    <StatusButton bgColor="#FAB329">Pending</StatusButton>
                    <img
                      src={ArrowRight}
                      alt="Arrow Right"
                      className=" w-[0.9375rem] h-[0.9375rem] cursor-pointer"
                    />
                  </div>
                </td>
              </tr>

              <tr className="text-[#7E7E7E] border-b-[0.5px] border-b-[#9C9C9C]   ">
                <UserDetails />
                <td className="lg:px-[0.8rem] lg:py-[1.2rem] md:py-[1rem] md:px-[0.8rem]">
                  <div className="flex items-center gap-2">
                    <StatusButton bgColor="#F95252">Failed</StatusButton>
                    <img
                      src={ArrowRight}
                      alt="Arrow Right"
                      className=" w-[0.9375rem] h-[0.9375rem] cursor-pointer"
                    />
                  </div>
                </td>
              </tr>

              <tr className="text-[#7E7E7E] border-b-[0.5px] border-b-[#9C9C9C]   ">
                <UserDetails />
                <td className="lg:px-[0.8rem] lg:py-[1.2rem] md:py-[1rem] md:px-[0.8rem]">
                  <div className="flex items-center gap-2">
                    <StatusButton bgColor="#92ABFE">Refunded</StatusButton>
                    <img
                      src={ArrowRight}
                      alt="Arrow Right"
                      className=" w-[0.9375rem] h-[0.9375rem] cursor-pointer"
                    />
                  </div>
                </td>
              </tr>

              <tr className="text-[#7E7E7E] border-b-[0.5px] border-b-[#9C9C9C]   ">
                <UserDetails />
                <td className="lg:px-[0.8rem] lg:py-[1.2rem] md:py-[1rem] md:px-[0.8rem]">
                  <div className="flex items-center gap-2">
                    <StatusButton bgColor="#F95252">Failed</StatusButton>
                    <img
                      src={ArrowRight}
                      alt="Arrow Right"
                      className=" w-[0.9375rem] h-[0.9375rem] cursor-pointer"
                    />
                  </div>
                </td>
              </tr>

              <tr className="text-[#7E7E7E] border-b-[0.5px] border-b-[#9C9C9C]   ">
                <UserDetails />
                <td className="lg:px-[0.8rem] lg:py-[1.2rem] md:py-[1rem] md:px-[0.8rem]">
                  <div className="flex items-center gap-2">
                    <StatusButton bgColor="#26D06F">Successful</StatusButton>
                    <img
                      src={ArrowRight}
                      alt="Arrow Right"
                      className=" w-[0.9375rem] h-[0.9375rem] cursor-pointer"
                    />
                  </div>
                </td>
              </tr>

              <tr className="text-[#7E7E7E] border-b-[0.5px] border-b-[#9C9C9C]   ">
                <UserDetails />
                <td className="lg:px-[0.8rem] lg:py-[1.2rem] md:py-[1rem] md:px-[0.8rem]">
                  <div className="flex items-center gap-2">
                    <StatusButton bgColor="#F95252">Cancelled</StatusButton>
                    <img
                      src={ArrowRight}
                      alt="Arrow Right"
                      className=" w-[0.9375rem] h-[0.9375rem] cursor-pointer"
                    />
                  </div>
                </td>
              </tr>

              <tr className="text-[#7E7E7E] border-b-[0.5px] border-b-[#9C9C9C]   ">
                <UserDetails />
                <td className="lg:px-[0.8rem] lg:py-[1.2rem] md:py-[1rem] md:px-[0.8rem]">
                  <div className="flex items-center gap-2">
                    <StatusButton bgColor="#26D06F">Successful</StatusButton>
                    <img
                      src={ArrowRight}
                      alt="Arrow Right"
                      className=" w-[0.9375rem] h-[0.9375rem] cursor-pointer"
                    />
                  </div>
                </td>
              </tr>

              <tr className="text-[#7E7E7E] border-b-[0.5px] border-b-[#9C9C9C]   ">
                <UserDetails />
                <td className="lg:px-[0.8rem] lg:py-[1.2rem] md:py-[1rem] md:px-[0.8rem]">
                  <div className="flex items-center gap-2">
                    <StatusButton bgColor="#26D06F">Successful</StatusButton>
                    <img
                      src={ArrowRight}
                      alt="Arrow Right"
                      className=" w-[0.9375rem] h-[0.9375rem] cursor-pointer"
                    />
                  </div>
                </td>
              </tr>

              <tr className="text-[#7E7E7E] border-b-[0.5px] border-b-[#9C9C9C]   ">
                <UserDetails />
                <td className="lg:px-[0.8rem] lg:py-[1.2rem] md:py-[1rem] md:px-[0.8rem]">
                  <div className="flex items-center gap-2">
                    <StatusButton bgColor="#92ABFE">Refunded</StatusButton>
                    <img
                      src={ArrowRight}
                      alt="Arrow Right"
                      className=" w-[0.9375rem] h-[0.9375rem] cursor-pointer"
                    />
                  </div>
                </td>
              </tr>
              <tr className="text-[#7E7E7E] border-b-[0.5px] border-b-[#9C9C9C]   ">
                <UserDetails />
                <td className="lg:px-[0.8rem] lg:py-[1.2rem] md:py-[1rem] md:px-[0.8rem]">
                  <div className="flex items-center gap-2">
                    <StatusButton bgColor="#26D06F">Successful</StatusButton>
                    <img
                      src={ArrowRight}
                      alt="Arrow Right"
                      className=" w-[0.9375rem] h-[0.9375rem] cursor-pointer"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="flex justify-center items-center lg:mt-14 md:mt-10 lg:pb-8 md:pb-6 lg:gap-[2.875rem] md:gap-[1.665rem] font-medium text-[#3D3D3D] ">
            <p className="flex items-center lg:gap-2 md:gap-[0.56rem] ">
              <img
                src={Previous}
                alt="Previous Arrow"
                className="lg:w-[1.25rem] lg:h-[1.25rem] md:w-[0.72375rem] h-[0.72375rem]"
              />
              <span className="lg:tracking-[0.5rem] md:tracking-[0.3rem] lg:text-base md:text-[0.7rem] ">
                1 2 3 4 5 6 7 8 9
              </span>
              <img
                src={Next}
                alt="Next Arrow"
                className="lg:w-[1.25rem] lg:h-[1.25rem] md:w-[0.72375rem] h-[0.72375rem]"
              />
            </p>
            <span className="lg:border md:border-[0.58px] flex items-center lg:gap-[5px] md:gap-[2.9px] lg:rounded-[4px] md:rounded-[2.32px] cursor-pointer border-[#0000004d] lg:p-[4px] md:p-[2.32px] ml-2 lg:text-base md:text-[0.7rem]">
              10
              <img
                src={DownArrow}
                alt="Down Arrow"
                className="lg:w-[0.875rem] lg:h-[0.875rem] md:w-[0.506875rem] md:h-[0.506875rem] cursor-pointer "
              />
            </span>
            <p className="flex items-center lg:gap-[5px] md:gap-[2.9px] font-normal lg:text-base md:text-[0.7rem] ">
              Go to
              <input
                type="text"
                className="lg:border md:border-[0.58px] border-[#0000004D] outline-none lg:p-2 md:p-[0.145rem] lg:rounded-[0.25rem] md:rounded-[0.145rem] lg:w-[2.8rem] lg:h-[1.8rem] md:w-[1.62875rem] md:h-[1.039375rem] "
              />
            </p>
          </div>
        </div>
      </div>

      <div className="lg:hidden md:hidden mt-7 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] py-[1.25rem] px-1 w-full ">
        {/*  h-[102.125rem] w-[21.4375rem]*/}
        <MobileUserDetails orderId='0000000' description='Data Top-up' product='MTN SME 100GB' bgColor='#26D06F' />
        <MobileUserDetails orderId='8990000' description='Virtual Account' product='NGN Waitlist Top-up' bgColor='#F95252' />
        <MobileUserDetails orderId='0000000' description='Data Top-up' product='MTN CG 100GB' bgColor='#FAB329' />
        <MobileUserDetails orderId='7676556' description='Flat Conversion' product='NGN to USD' bgColor='#26D06F' />
        <MobileUserDetails orderId='0000000' description='TV Subscription' product='Gotv Max' bgColor='#F95252' />
        <MobileUserDetails orderId='0000000' description='Data Top-up' product='MTN CG 100GB' bgColor='#FAB329' />
        <MobileUserDetails orderId='7676556' description='Flat Conversion' product='NGN to USD' bgColor='#26D06F' />
      </div>
    </>
  );
}

// #26D06F #F95252 #FAB329 #92ABFE