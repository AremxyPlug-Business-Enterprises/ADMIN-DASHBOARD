import { DashboardLayout } from "../DashboardLayout"
import userIcon from "../../assets/pin.svg";
import { useState } from "react";


const ResetPin = () => {

  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <DashboardLayout>

  <section className=" flex flex-col gap-7 w-full pb-10">

   {/* overlay layer */}
           {show && (
             <div className="bg-[#5F5F5F78] z-[1000] fixed inset-0 top-0 bg-opacity-50"></div>
           )}
   
           {/* overlay layer */}
           {showConfirm && (
             <div className="bg-[#5F5F5F78] z-[1000] fixed inset-0 top-0 bg-opacity-50"></div>
           )}
   
   {/* Modal */}
           {show && (
             <div className="w-full flex items-center justify-center">
               <div
                 className="lg:w-[840px] w-[98%] h-[465px] flex flex-col items-center justify-center gap-15
     absolute md:top-[280px] top-[170px] z-[2000] bg-white rounded-[20px]"
                 style={{
                   boxShadow: "0px 0px 20px 0px #00000040",
                 }}
               >
   
   <div className="flex flex-col gap-5 w-full">
   
   <div className="bg-[#04177F] max-w-full h-[22px]"></div>
                 <h1 className="text-[#000000] lg:text-[21px] lg:leading-[32px] font-semibold text-center">
                   {" "}
                   Are you sure you want to reset this user pin?
                 </h1>
                 </div>
   
                 <img
                   src={userIcon}
                   alt=""
                   className="lg:w-[150px] lg:h-[150px]"
                 />
   
                 <div className="flex items-center gap-3">
                   <div className="flex items-center justify-center w-full">
                     <button           onClick={() => {
                       setShow(false)
                       setShowConfirm(true)}
                     }
                  
                       className="bg-[#04177F] py-[1px] px-[35px] ms:rounded-[8px] rounded-[5px] text-white text-center md:h-[38px] lg:w-[123px] w-full h-[44px] cursor-pointer"
                     >
                       Yes
                     </button>
                   </div>
   
                   <div className="flex items-center justify-center w-full">
                     <button
                      
                       onClick={() => setShow(false)}
                       className=" py-[1px] px-[35px] ms:rounded-[8px] rounded-[5px]
          text-[#F95252] text-center md:h-[38px] lg:w-[123px] w-full h-[44px] cursor-pointer"
                     >
                       Cancel
                     </button>
                   </div>
                 </div>
   
               </div>
             </div>
           )}
   
           {/*Confirm  Modal */}
           {showConfirm && (
             <div className="w-full flex items-center justify-center">
               <div
                 className="lg:w-[840px] w-[93%] h-[465px] flex flex-col items-center justify-between gap-10 py-7
     absolute md:top-[270px] top-[180px] z-[2000] bg-white rounded-[20px]"
                 style={{
                   boxShadow: "0px 0px 20px 0px #00000040",
                 }}
               >
   
                 <div className="flex flex-col gap-5 w-full">
   
                   <div className="bg-[#04177F] max-w-full h-[22px]"></div>
                 <h1 className="text-[#000000] lg:text-[21px] lg:leading-[32px] font-semibold text-center">
                 User Pin been updated successfully
                 </h1>
   
                 </div>
   
         
                 <div className="flex items-center gap-3">
                   <div className="flex items-center justify-center w-full">
                     <button   onClick={() => setShowConfirm(false)}
                        className="bg-[#04177F] py-[1px] px-[35px] ms:rounded-[8px] rounded-[5px] flex items-center justify-center
                         text-white text-center md:h-[38px] lg:w-[163px] w-full h-[44px] cursor-pointer"
                     >
                       Okay
                     </button>
                   </div>
   
               
   
                 </div>
               </div>
             </div>
           )}
   


  <div className="flex flex-col gap-7 w-full">
  <h1 className="text-[#04177F] lg:text-[21px] lg:leading-[32px] font-medium"> Reset User Pin</h1>

    <div className="border-[1px] border-[#CBCBCB] max-w-[1247px] w-full h-[470px] flex items-center justify-start"
    style={{ boxShadow:' 0px 0px 7px 0px #00000040' }}>

     <form className="flex flex-col gap-5 lg: ml-7 lg:ml-15">

        <div>

     
     <h1 className="text-[#9C9C9C] lg:text-[21px] lg:leading-[32px] font-medium"> Email Address/ User Id / Username</h1>

     <input type="text"
      className="border-[1px] border-[#D0D5DD] bg-[#FAFDFF] 
      lg:w-max-w-[426px] w-full h-58px] py-[10px] px-[13px] rounded-[8px]" placeholder=""/>
         </div>

         
        <div>

     
<h1 className="text-[#9C9C9C] lg:text-[21px] lg:leading-[32px] font-medium"> Enter Pin</h1>

<input type="text"
 className="border-[1px] border-[#D0D5DD] bg-[#FAFDFF] 
 lg:w-max-w-[426px] w-full h-58px] py-[10px] px-[13px] rounded-[8px]" placeholder=""/>
    </div>

    
    <div>

     
<h1 className="text-[#9C9C9C] lg:text-[21px] lg:leading-[32px] font-medium"> Confirm Pin </h1>

<input type="text"
 className="border-[1px] border-[#D0D5DD] bg-[#FAFDFF] 
 lg:w-max-w-[426px] w-full h-58px] py-[10px] px-[13px] rounded-[8px]" placeholder=""/>
    </div>

      

     <button

onClick={(e) =>{
   e.preventDefault()
    setShow(true)
  }}
        className="border-[1px] border-[#D0D5DD] bg-[#04177F]  flex items-center justify-center
        lg:w-max-w-[426px] w-full h-[58px] lg:py-[13px] lg:px-[27px] rounded-[8px]">
        <h1 className="text-white lg:text-[21px] lg:leading-[32px] font-medium"> Proceed</h1>
     </button>

     </form>

    </div>

    </div>

  </section>
          
  </DashboardLayout>
  )
}

export default ResetPin