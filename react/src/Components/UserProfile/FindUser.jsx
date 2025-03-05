import { DashboardLayout } from "../DashboardLayout"
import blueLogo from '../../assets/LogoBlue.svg';
import good from "../../assets/good.svg"
import bad from "../../assets/bad.svg"
import { useState } from "react";


const FindUser = () => {
const [ showBlock, setShowBlock] = useState(false)
const [ showResult, setShowResult] = useState(false)

const handleToggle = () => {
  setShowBlock(!showBlock)
}

  return (
    <DashboardLayout>

  <section className=" flex flex-col gap-7 w-full pb-10">


  <div className="flex flex-col gap-7 w-full">
  <h1 className="text-[#04177F] lg:text-[21px] lg:leading-[32px] font-medium"> Find User</h1>

    <div className="border-[1px] border-[#CBCBCB] max-w-[1247px] w-full h-[311px] flex items-center justify-start"
    style={{ boxShadow:' 0px 0px 7px 0px #00000040' }}>

     <form className="flex flex-col gap-5 lg: ml-7 lg:ml-15">
     <h1 className="text-[#9C9C9C] lg:text-[21px] lg:leading-[32px] font-medium"> Email Address/ User Id / Username</h1>

     <input type="text"
      className="border-[1px] border-[#D0D5DD] bg-[#FAFDFF] 
      lg:w-max-w-[426px] w-full h-58px] py-[10px] px-[13px] rounded-[8px]" placeholder=""/>

     <button

     onClick={(e) => {
      e.preventDefault()
      setShowResult(!showResult)
     }}
        className="border-[1px] border-[#D0D5DD] bg-[#04177F]  flex items-center justify-center
        lg:w-max-w-[426px] w-full h-[58px] lg:py-[13px] lg:px-[27px] rounded-[8px]">
        <h1 className="text-white lg:text-[21px] lg:leading-[32px] font-medium"> Search</h1>
     </button>
     </form>

    </div>

    </div>



{  showResult &&
  <div className="max-w-[1247px] lg:min-h-[896px] w-full border-[1px] border-[#CBCBCB] rounded-t-[20px]">

  <div className="rounded-t-[20px] lg:h-[100px] w-full flex items-center justify-start 
  bg-[url('./../assets/bg-gradient.svg)]"
  style={{
    backgroundImage: "../../assets/bg-gradient.svg",
    width: '100%',
    height: '100px'
  
  }}>
<img 
src={blueLogo}
alt='' 
className=' lg:w-[100px] lg:h-[48px]  w-[30px] h-[18px]'

 />
  </div>


{/* form */}
<div className="w-full flex items-center justify-center  p-5">

  <div className="flex flex-col w-full  md:gap-[62px] max-w-[1023px]">

    <div className="flex flex-col md:flex-row items-end justify-end w-full gap-6">

  <button  onClick={handleToggle}
  className="bg-[#538CF4] w-[140px] h-[50px] flex items-center justify-center
  p-[10px] rounded-[10px] gap-[10px] cursor-pointer"
  
  style={{
    boxShadow: "0px 1px 5.3px 0px #DD934E75 inset"
  }}>
    {showBlock?   
       <h1 className="text-white text-xl leading-[30px] font-medium">Unblock</h1>
  :         <h1 className="text-white text-xl leading-[30px] font-medium">Block</h1>  }

  </button>

  <button className="bg-[#F63535] w-[140px] h-[50px] flex items-center justify-center
  p-[10px] rounded-[10px] gap-[10px]"
  
  style={{
    boxShadow: "0px 1px 5.3px 0px #DD934E75 inset"
  }}>
    <h1 className="text-white text-xl leading-[30px] font-medium">Delete</h1>
  </button>

    </div>

    <div className="">
      <form className="flex flex-col gap-[26px]">

        <div className="gap-1 flex flex-col">
          <h1 className="text-[#000000] text-xl leading-[30px] font-medium" >Alexa Rawles</h1>
          <p className="text-[#A0A0A0] text-base font-[400]" > alexarawles@123</p>
        </div>


<div className="flex flex-col md:flex-row items-center gap-5 md:gap-10">

<div className="flex flex-col max-w-[540px] w-full gap-2">
          <label htmlFor="" className="text-[#A0A0A0] text-base font-medium">Country</label>
          <input type=""  
          placeholder="Nigeria"
          className="bg-[#F9F9F9] border-[1px] border-[#E0E0E0] rounded-[8px] px-3
           placeholder:text-[#000000] text-base h-[52px] w-full outline-none"
          
          />
        </div>


        <div className="flex flex-col max-w-[540px] w-full gap-2">
          <label htmlFor="" className="text-[#A0A0A0] text-base font-medium">user ID</label>
          <input type=""  
          placeholder="000000"
          className="bg-[#F9F9F9] border-[1px] border-[#E0E0E0] rounded-[8px] px-3
           placeholder:text-[#000000] text-base h-[52px] w-full outline-none"
          
          />
        </div>


</div>


<div className="flex flex-col md:flex-row items-center gap-5 md:gap-10">

<div className="flex flex-col max-w-[540px] w-full gap-2">
          <label htmlFor="" className="text-[#A0A0A0] text-base font-medium">Email</label>
          <input type=""  
          placeholder="Habib@aremxy.com"
          className="bg-[#F9F9F9] border-[1px] border-[#E0E0E0] rounded-[8px] px-3
           placeholder:text-[#000000] text-base h-[52px] w-full outline-none"
          
          />
        </div>


        <div className="flex flex-col max-w-[540px] w-full gap-2">
          <label htmlFor="" className="text-[#A0A0A0] text-base font-medium">Phone Number</label>
          <input type=""  
          placeholder="091389 23389"
          className="bg-[#F9F9F9] border-[1px] border-[#E0E0E0] rounded-[8px] px-3
           placeholder:text-[#000000] text-base h-[52px] w-full outline-none"
          
          />
        </div>


</div>

<div className="flex flex-col md:flex-row items-center gap-5 md:gap-10">

<div className="flex flex-col max-w-[540px] w-full gap-2">
          <label htmlFor="" className="text-[#A0A0A0] text-base font-medium">Signup Date & Time</label>
          <input type=""  
          placeholder="May 21st, 2023, 07:21:00 PM"
          className="bg-[#F9F9F9] border-[1px] border-[#E0E0E0] rounded-[8px] px-3
           placeholder:text-[#000000] text-base h-[52px] w-full outline-none"
          
          />
        </div>


        <div className="flex flex-col max-w-[540px] w-full gap-2">
          <label htmlFor="" className="text-[#A0A0A0] text-base font-medium">Last Activity</label>
          <input type=""  
          placeholder="1 Min ago"
          className="bg-[#F9F9F9] border-[1px] border-[#E0E0E0] rounded-[8px] px-3
           placeholder:text-[#000000] text-base h-[52px] w-full outline-none"
          
          />
        </div>


</div>

<div className="flex flex-col md:flex-row items-center gap-5 md:gap-10 pt-4">

<div className="flex flex-col md:flex-row max-w-[540px] items-center w-full gap-2">
          <label htmlFor="" className="text-[#A0A0A0] text-base font-medium">Account Status :</label>
<button className={` h-[52px] rounded-[12px] max-w-[254px]
w-full flex items-center justify-center
${showBlock ? 'border-[#870E0E] bg-[#FFD2D2]' : 'border-[#14870E]   bg-[#E4FFD2] '}

`}>
<h1 className={` leading-[30px] text-xl font-medium
  ${showBlock ? 'text-[#B01616] ' : 'text-[#16B03C]'}
`}>   {showBlock?  " Inactive " : "Active" }</h1>

</button>
        </div>


        <div className="flex flex-col md:flex-row max-w-[540px] items-center w-full gap-2">
          <label htmlFor="" className="text-[#A0A0A0] text-base font-medium">Verified Status :</label>
<button className={`border-[1px] bg-white h-[52px] rounded-[12px] max-w-[254px]
w-full flex items-center justify-center gap-2
${showBlock ? 'border-[#870E0E]' : 'border-[#26D06F] '}
`}>
{showBlock ? 
( <div className="flex items-center gap-2"><img src={ bad }
className="w-[28px] h-[28px]"
/>
<h1 className="text-[#B01616] leading-[30px] font-medium">Not Verfied</h1>
</div>)
:
( <div className="flex gap-2 items-center">
<img src={ good}
className="w-[28px] h-[28px]"
/>
<h1 className="text-[#16B03C] leading-[30px] font-medium">Verfied</h1>
</div>)}


</button>
        </div>


</div>
      
      </form>

    </div>

  </div>
    
</div>

</div>


}
  
  </section>
          
  </DashboardLayout>
  )
}

export default FindUser