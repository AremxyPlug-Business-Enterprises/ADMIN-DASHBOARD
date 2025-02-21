import { useState } from 'react';
import saly from '../../assets/Saly-13 (1).svg';
import blueLogo from '../../assets/LogoBlue.svg';

import axios from 'axios';

export const ForgotPasswordOtp = () => {
  const [error, setError] = useState(true);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

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
      await axios.post("https://your-api-url.com/verify-otp", { otp: otpCode });
      setError(false);
    } catch (error) {
      console.log('error', error);
      setError(true);
    }
  };

  return (

<section className='w-full flex items-center bg-[#e3e3e3]  justify-center'>



<div className='flex flex-col md:flex-row  min-h-screen md:h-[1024px] overflow-hidden md:bg-[#e3e3e3]  items-center justify-center lg:items-start 
lg:justiy-center  relative bg-[#04177F] overflow-x-hidden py-7 md:py-0 w-full
  max-w-[1440px]'>

  <div className='max-w-[667px] md:h-[1024px] w-full md:min-h-screen flex items-center justify-center
   bg-[#04177F] h-[353px]'>
    
    <img 
    src={saly}
    alt='' 
    className='max-w-[500px] w-full md:max-h-[500px] h-[353px]'

     />

  </div>


  <div className='w-full h-[536px] md:h-full relative flex flex-col gap-15 items-center justify-center
   bg-[#e3e3e3] ml-4 mt-2 md:ml-0 rounded-l-[29px] md:rounded-none'>


    <div className='absolute top-[10px] md:top-[190px] lg:top-[10px] left-[13px]'>
    <img 
    src={blueLogo}
    alt='' 
    className=' lg:w-[63px] lg:h-[30px]  w-[39px] h-[21px]'

     />
    </div>

<div className='flex flex-col justify-center items-center text-center gap-[10px] md:mt-20  lg:mt-5 absolute top-[35px] md:top-[155px] lg:top-[8px]'>
  <h1 className='text-[#000000] font-bold lg:text-[32px] text-2xl lg:leading-[48px] ' > Welcome to AremxyPlug!</h1>
  <p className='text-[#000000] font-bold text-base' >The Official Admin Account.</p>
</div>

{/* Form */}
<div className='flex flex-col items-center justify-center lg:max-h-[590px] max-w-[606px] lg:h-full h-[356px] md:h-[500px] mt-15 md:mt-[150px]
 w-[92%] lg:w-full
relative bg-white border-[1px] border-[#0000004D]  rounded-[25px]'>

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
      <button type='submit'  className='bg-[#04177F] py-[1px] px-[35px] ms:rounded-[8px] 
      rounded-[5px] text-white text-center md:h-[38px] lg:w-[123px] w-[205px] h-[44px] cursor-pointer'>
Contnue
      </button>
    </div>


  </form>
</div>

  </div>


</div>

</section>
  );
};


