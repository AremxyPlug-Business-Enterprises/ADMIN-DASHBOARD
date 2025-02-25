/* eslint-disable react/prop-types */
import { useState } from 'react';

import blueLogo from '../../assets/LogoBlue.svg';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const ForgotPasswordOtp = ({ setShowForgotOtp, setShowForgot, setShowConfirm }) => {
  const [error, setError] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const navigate = useNavigate()

  const handleChange = (index, value) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpCode = otp.join('');
    try {
      await axios.post("", { otp: otpCode });
      setError(false);
      setShowForgot(false)
      setShowForgotOtp(false)
      setShowConfirm(true);

      navigate('#')
    } catch (error) {
      console.log('error', error);
      setError(false);
    }
  };



  const handleToggle = () => {
    setShowForgot(false)
    setShowForgotOtp(false)
    setShowConfirm(true);
    console.log('Yes')
  }
  

  return (

<section className='w-full flex items-center   justify-center'>



<div className='w-full h-[357px] md:h-full relative flex flex-col gap-15 items-center 
  justify-center  md:ml-0 rounded-l-[29px] md:rounded-none'>

{/* Form */}
<div className='flex flex-col items-center justify-center lg:h-[590px] max-w-[606px]  h-[356px] md:h-[420px]   md:mt-7 lg:mt-0
 w-[97%] -ml-2 lg:w-full relative bg-white border-[1px] border-[#0000004D]  rounded-[25px]'>


<div className='absolute top-[20px] left-[13px]'>
    <img 
    src={blueLogo}
    alt='' 
    className=' lg:w-[63px] lg:h-[30px]  w-[30px] h-[18px]'

     />
    </div>




    <h1 className='absolute top-[48px] md:top-[55px] lg:top-[55px] text-center font-medium text-base text-[#000000] '>Verification code has been sent to <br className='block lg:hidden'  /> your email - <br className='hidden lg:block'  /> Habib@aremxy.com
    </h1>
    
  <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-5 md:gap-10 lg:gap-5
   max-w-[375px] w-full px-5 mt-18 md:mt-0  '>


  <div className='flex gap-3 mt-15'>
            {otp.map((digit, index) => (
              <input
                key={index}
                type='text'
                maxLength='1'
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                className={`w-10 h-10 text-center border-[1px] border-[#0000004D] rounded-md text-lg font-semibold outline-none ${error ? 'border-[#F95252]' : 'border-[#9C9C9C]'}`}
              />
            ))}
          </div>

          { error && <h1 className='text-[#F95252] font-semibold lg:text-sm text-center'>Incorrect verification code</h1>}

          <div className='flex justify-between items-center w-full px-5 '>
          <h1 className='text-[#04177F] text-[10px] leading-[12px] font-medium'> 60sec</h1>

          <h1 className='text-[#04177F] text-[10px] leading-[12px] font-medium'> Resend OTP</h1>
          
          </div>
  


    <div className='flex items-center justify-center w-full'>
      <button type='button' onClick={handleToggle} className='bg-[#04177F] py-[1px] px-[35px] ms:rounded-[8px] 
      rounded-[5px] text-white text-center md:h-[38px] lg:w-[123px] w-[205px] h-[44px] cursor-pointer'>

Contnue

      </button>
      
    </div>


  </form>

</div>

  </div>




</section>
  );
};


