
// import { UseGlobalContext } from '../Context';

import saly from '../../assets/Saly-13 (1).svg'
import blueLogo from '../../assets/LogoBlue.svg'


export const CreatePasswordConfirmation = () => {
    // const {example} = UseGlobalContext()



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
<div className='flex flex-col items-center justify-center lg:max-h-[590px] max-w-[606px] lg:h-full h-[356px] mt-15 md:m-5
 w-[92%] lg:w-full
relative bg-white border-[1px] border-[#0000004D]  rounded-[25px]'>

<div className='absolute top-[20px] left-[13px]'>
    <img 
    src={blueLogo}
    alt='' 
    className=' lg:w-[63px] lg:h-[30px]  w-[30px] h-[18px]'

     />
    </div>


<div className='absolute top-[45px] md:top-[55px] lg:top-[55px]  space-y-4'>

<h1 className=' text-center font-semibold text-base text-[#000000] '> Your have successfully  <br className='md:hidden block '  /> created a <br className='lg:hidden block' /> new password.
</h1>

<h1 className=' text-center font-semibold text-base text-[#7E7E7E] '> Sign in to your admin account to start  <br className='lg:hidden block' />  operation!</h1>
</div>


<div className='lg:w-[200px] lg:h-[200px] w-[86px] h-[86px] mt-[300px] md:mt-0'>
<h1></h1>
</div>


<div className='flex items-center justify-center w-full'>
      <button type='submit'  className='bg-[#04177F] py-[1px] px-[35px] md:rounded-[8px] rounded-[5px]
       text-white text-center md:h-[38px] lg:w-[123px] max-w-[307px] w-full h-[44px] cursor-pointer'>
Continue
      </button>
    </div>
    
  <form  className='flex flex-col gap-10 lg:gap-5 max-w-[375px] w-full px-5 mt-18 lg:mt-0  '>

   

  








  </form>
</div>

  </div>


</div>

</section>
  
  )

}
