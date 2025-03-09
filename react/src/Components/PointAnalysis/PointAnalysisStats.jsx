import ArrowRight from "../../assets/arrow-right.png";
import ArrowDown from "../../assets/arrow-down.svg";
import DateFilter from "../DateFilter";
import { Button } from "../UserTransactionButtons";

const statdata = [
    {color: "#D5F6E3", title:"Transaction Points", point: "10,000,000"},
    {color: "#92ABFE2E", title:"Referral Points", point: "10,000,000"},
    {color: "#FDCECE", title:"Total Points", point: "30,000,000"},
]

export default function PointAnalysisStats () {
  return (
  <section className="flex flex-col gap-8 lg:gap-20 w-full items-center justify-center">

        <div className="poppins w-full">
          <h1 className="font-semibold text-[1.25rem] leading-[1.875] lg:text-[2.33rem] lg:leading-[3.495rem] text-[#9C9C9C] md:leading-[2.02rem] md:text-[1.35rem]">
    Point Analysis
          </h1>
          <p className="flex items-center gap-2 text-base leading-6 lg:gap-2 md:gap-[0.2893rem] md:text-[0.9643rem] md:leading-[1.4459rem] text-[#9C9C9C]">
            <span className="lg:text-[1.66rem] lg:leading-[2.49rem] ">
              Dashboard
            </span>
            <img
              src={ArrowRight}
              alt="Arrow Right"
              className="w-6 h-6 lg:w-[1.99rem] lg:h-[1.99rem] md:w-[1.1568rem] md:h-[1.1568rem]"
            />
            <span className="lg:text-[1.66rem] lg:leading-[2.49rem]">
           Point Analysis
            </span>
          </p>
          <div className="flex gap-6 lg:gap-[13.29px] md:gap-[7.69px] lg:mt-4 mt-4 md:mt-2">
            <Button > Transactions </Button>
            <Button> Referrals </Button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between lg:max-w-[1247px] rounded-[12px] border-[1px] border-[#77777733]
         w-full lg:h-[440px] lg:gap-[109px] gap-[10px] lg:px-12 h-[166px] max-w-[353px] md:max-w-[722px] md:w-full p-5 lg:py-10" 
        style={{ boxShadow: " 0px 0px 7px 0px #00000040"}}
        >

           
                <span className="w-full px-3 lg:px-6 md:px-4 flex items-center justify-between cursor-pointer">
                  <span className="rounded-[4px] lg:rounded-[19.59px] md:rounded-[11.34px] bg-[#92ABFE2E] flex items-center gap-[0.941875rem] lg:gap-[0.941875rem] md:gap-[0.5456rem] py-[0.470625rem] lg:py-[0.47rem] md:py-[0.2725rem] px-[0.8325rem] lg:px-[0.83rem] md:px-[0.4825rem] ">
                    <span className="text-[0.83rem] md:font-semibold">NGN</span>
                    <img
                      src={ArrowDown}
                      alt=""
                      className="inline-block w-[1.318125rem] h-[1.318125rem] lg:w-[1.31rem] lg:h-[1.31rem] md:w-[0.76375rem] md:h-[0.76375rem] "
                    />
                  </span>
      
                  {/* <input type="date" name="" id="" /> */}
                  <DateFilter />
                  
                </span>

                <div className="flex  lg:gap-12 gap-8 w-full "
                >
                    {
                        statdata.map((s,index)=> (
                            <div 
                            key={index} 
                            style={{ backgroundColor: s.color}}
            className={`lg:max-w-[350px] lg:w-full lg:h-[200px] w-[94px] md:w-[202px] h-[64px]  lg:rounded-[47px] p-1  gap-1 
             flex flex-col items-center justify-center md:rounded-[27px]`}>
                <h1 className="flex  items-center justify-center text-center text-[#000000] lg:text-[28px] lg:leading-[120%] text-[12px] lg:gap-[14px]
                leading-[100%] font-medium">{s.title} <span><img
                      src={ArrowDown}
                      alt=""
                      className="block w-3 h-3 
                      lg:w-6 lg:h-6 md:w-[0.76375rem] md:h-[0.76375rem] "
                    /></span></h1>

                <p className="text-[#000000] lg:text-[32px] lg:leading-[120%] text-[12px] leading-[100%] font-semibold">{s.point}</p>

                            </div>
                        ))
                    }
                </div>

        </div>

  </section>
  )
}