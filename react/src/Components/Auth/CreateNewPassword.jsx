import  { useState } from 'react'
// import { UseGlobalContext } from '../Context';
// import { Link } from 'react-router-dom';
import key from '../../assets/Key Folder.svg'
import blueLogo from '../../assets/LogoBlue.svg'
import eyes from "../../assets/eye.svg"
import hideEyes from "../../assets/eye-slash.svg"

import axios from  'axios'


export const CreateNewPassword = () => {
    // const {example} = UseGlobalContext()
const [showPassword, setShowPassword] = useState(false)
const [error, setError] = useState(false)
const [formData, setFormdata] = useState({
 password: "",
  password_confirmation: ""
})

const handleShowPassword = () => {
  setShowPassword((prev) =>!prev)
}



const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await axios.post("", formData);
    setError(false);

  } catch (error) {
    console.log('error', error)
    setError(true);
  }
};


  return (

<section className='w-full flex items-center  justify-center'>



<div className='flex flex-col md:flex-row  min-h-screen  items-center justify-center lg:items-start lg:justiy-center  relative bg-[#04177F] md:bg-white overflow-x-hidden py-7 md:py-0 w-full  max-w-[1440px]'>

  <div className='max-w-[667px] md:h-[1024px] w-full md:min-h-screen flex items-center justify-center
   bg-[#04177F] h-[353px]'>
    
    <img 
    src={key}
    alt='' 
    className='max-w-[500px] w-full md:max-h-[500px] h-[353px]'

     />

  </div>


  <div className='w-full h-[536px] md:h-full relative flex flex-col gap-15 items-center justify-center bg-white ml-4 mt-2 rounded-l-[29px] md:rounded-none'>


    <div className='absolute top-[20px] left-[13px]'>
    <img 
    src={blueLogo}
    alt='' 
    className=' lg:w-[63px] lg:h-[30px]  w-[39px] h-[21px]'

     />
    </div>
{/* 
<div className='flex flex-col justify-center items-center text-center gap-[10px] md:mt-20  lg:mt-5'>
  <h1 className='text-[#000000] font-bold lg:text-[32px] text-2xl lg:leading-[48px] ' > Welcome to AremxyPlug!</h1>
  <p className='text-[#000000] font-bold text-base' >The Official Admin Account.</p>
</div> */}

{/* Form */}
<div className='w-full flex flex-col items-center justify-center mt-0 gap-[14px] lg:mt-[200px]'>
    

    <h1 className='lg:text-[18px] text-base text-[#000000] font-medium lg:leading-[27px]'>Create New Password</h1>

  <form onSubmit={handleSubmit} className='flex flex-col gap-6 lg:gap-5 max-w-[375px] w-full px-5'>



      <label className='lg:text-[#000000] lg:text-base lg:font-semibold font-medium text-[#344054] text-sm'> Password</label>
      <div className={`border-[1px] border-[#9C9C9C] h-[51px] w-full flex items-center justify-center p-3
         ${error ? "border-[1px] border-[#F95252]" : ""}
        `}>
        <input type={`${showPassword ? "password" : "text"}`} placeholder='' required  className='w-full outline-none border-0'  />
        <img  onClick={handleShowPassword}
        src={`${showPassword ?  eyes : hideEyes} `}
        alt=''
          name='password'
        value={formData.password}
        onChange={(e) => setFormdata({ ...formData, password: e.target.value })}
         className='w-6 h-6 cursor-pointer placeholder:text-base placeholder:font-medium'/>
      </div>


      <div className={`flex flex-col gap-[10px] `}>
      <label className='lg:text-[#000000] lg:text-base lg:font-semibold font-medium text-[#344054] text-sm'>Confirm Password</label>
      <div className={`border-[1px] border-[#9C9C9C] h-[51px] w-full flex items-center justify-center p-3
         ${error ? "border-[1px] border-[#F95252]" : ""}
        `}>
        <input type={`${showPassword ? "password" : "text"}`} placeholder='' required  className='w-full outline-none border-0'  />
        <img  onClick={handleShowPassword}
        src={`${showPassword ?  eyes : hideEyes} `}
        alt=''
          name='password_confirmation'
        value={formData.password_confirmation}
        onChange={(e) => setFormdata({ ...formData, password_confirmation: e.target.value })}
         className='w-6 h-6 cursor-pointer placeholder:text-base placeholder:font-medium'/>
      </div>



  



    </div>


{ error && <h1 className='text-[#F95252] font-semibold lg:text-sm'>Password must have At least one alphabetical character, 
    At least one digit, Contains at least one special character (e.g., !@#$%^&*) 
    and Minimum length of 8 characters.
.</h1>}


{/* 
    <div className='flex lg:flex-col flex-row-reverse w-full justify-between items-center md:items-start gap-1'>
      <Link to='/dashboard/forgot-password' className='text-[#04177F] text-sm font-medium lg:font-semibold'>Forgot Password?</Link>
      <div className='flex items-center gap-1'>
        <input type='checkbox' className='cursor-pointer' />
        <h1 className='lg:text-[#7C7C7C] text-[#344054] text-sm lg:text-[12px] font-medium'>Remember me next time!</h1>
      </div>

    </div> */}

    <div className='flex items-center justify-center w-full'>
      <button type='submit'  className='bg-[#04177F] py-[1px] px-[35px] ms:rounded-[8px] rounded-[5px] text-white text-center md:h-[38px] lg:w-[123px] w-full h-[44px] cursor-pointer'>
Continue
      </button>
    </div>


  </form>
</div>

  </div>


</div>

</section>
  
  )

}
