// import React from 'react'

import blueLogo from '../../assets/LogoBlue.svg' ;
import { Link } from 'react-router-dom';

const ConfirmForgot = () => {


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


<div className='absolute top-[45px] md:top-[55px] lg:top-[55px] text-center
'>

    <div className='flex flex-col gap-4'>
    <h1  className=' font-semibold text-base text-[#000000] '
> 
    
    Your Password has been reset <br className='md:hidden block '  />successfully.
</h1>

<p  className=' text-center font-semibold text-base text-[#7E7E7E]'>
    Create a New Password to Log In to <br className='md:hidden block '  />your Admin Account.</p>
    </div>

</div>


    
  <div  className='flex flex-col gap-10 lg:gap-5 max-w-[375px]
   w-full px-5 mt-[260px] lg:mt-[370px] '>


    <div className='flex items-center justify-center w-full'>
      <button type='button'  className='bg-[#04177F] py-[1px] px-[35px] ms:rounded-[8px] 
      rounded-[5px] text-white text-center md:h-[38px] md:w-[205px] lg:w-[123px] w-full h-[44px]
        cursor-pointer flex items-center justify-center'>
                <Link to='/dashboard/create-password'>
Continue
</Link>
      </button>
    </div>


  </div>
</div>

  </div>

</section>
  )
}

export default ConfirmForgot