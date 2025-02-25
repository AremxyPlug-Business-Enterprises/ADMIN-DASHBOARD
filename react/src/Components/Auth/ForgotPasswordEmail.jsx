/* eslint-disable react/prop-types */
import  { useState } from 'react'
// import { UseGlobalContext } from '../Context';


import blueLogo from '../../assets/LogoBlue.svg'

import sms from '../../assets/sms.svg'
import axios from  'axios'

export const ForgotPasswordEmail = ({ setShowForgotOtp, setShowForgot }) => {


    // const {example} = UseGlobalContext()

const [error, setError] = useState(false)
const [formData, setFormdata] = useState({
email: ''
})




const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await axios.post("", formData);
    setError(false);
    setShowForgot(false)
    setShowForgotOtp(true)
    console.log('Yes')

  } catch (error) {
    console.log('error', error)
    setError(false);
  }
};

const handleToggle = () => {
  setShowForgot(false)
  setShowForgotOtp(true)
}


  return (

<section className='w-full flex items-center  justify-center'>


  <div className='w-full h-[357px] md:h-full relative flex flex-col gap-15 items-center 
  justify-center  md:ml-0 rounded-l-[29px] md:rounded-none'>


    {/* <div className='absolute top-[10px] md:top-[190px] lg:top-[10px] left-[13px]'>
    <img 
    src={blueLogo}
    alt='' 
    className=' lg:w-[63px] lg:h-[30px]  w-[39px] h-[21px]'

     />
    </div> */}



{/* Form */}
<div className='flex flex-col items-center justify-center lg:h-[590px] max-w-[606px]  
h-[366px] -ml-2 md:m-5 bg-white w-[95%]  lg:w-full 
relative bg- border-[1px] border-[#0000004D]  rounded-[25px]'>

<div className='absolute top-[20px] left-[13px]'>
    <img 
    src={blueLogo}
    alt='' 
    className=' lg:w-[63px] lg:h-[30px]  w-[30px] h-[18px]'

     />
    </div>




<h1 className='absolute top-[45px] md:top-[55px] lg:top-[55px] text-center font-medium text-base text-[#000000] '>Input your domain email to reset <br className='md:hidden block '  />your password.
</h1>
    
  <form onSubmit={handleSubmit} className='flex flex-col gap-10 lg:gap-5 max-w-[375px] w-full px-5 mt-18 lg:mt-0  '>

    <div className='flex flex-col gap-[10px]'>
    <label className='text-[#000000] lg:text-base text-sm leading-[11px] font-semibold'> Email</label>
      <div className={` border-[1px] border-[#9C9C9C] h-[51px] w-full flex items-center justify-center p-3 
        
         ${error ? "border-[1px] border-[#F95252]" : ""}`}>
        <input type='email' placeholder='' required className='w-full border-0 outline-none'   />
        <img 
        src={sms}  
        alt=''
        name='d_name'
        value={formData.email}
        onChange={(e) => setFormdata({ ...formData, d_name: e.target.value })}
         className='w-6 h-6 placeholder:text-base placeholder:font-medium'/>
      </div>
    </div>

  

{ error && <h1 className='text-[#F95252] font-semibold lg:text-sm'>incorrect email..</h1>}



    <div className='flex items-center justify-center w-full'>
      <button onClick={handleToggle}  className='bg-[#04177F] py-[1px] px-[35px] ms:rounded-[8px] rounded-[5px]
       text-white text-center md:h-[38px] md:w-[205px] lg:w-[123px] w-full h-[44px] cursor-pointer'>
Reset
      </button>
    </div>


  </form>
</div>

  </div>

</section>
  
  )

}
