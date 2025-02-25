import  { useState } from 'react'
// import { UseGlobalContext } from '../Context';
import { Link } from 'react-router-dom';
import saly from '../../assets/Saly-13 (1).svg'
import blueLogo from '../../assets/LogoBlue.svg'
import eyes from "../../assets/eye.svg"
import hideEyes from "../../assets/eye-slash.svg"
import sms from '../../assets/sms.svg'
import axios from  'axios'
import { ForgotPasswordEmail } from './ForgotPasswordEmail';
import { ForgotPasswordOtp } from './ForgotPasswordOtp';
import ConfirmForgot from './ConfirmForgot';


export const Login = () => {
    // const {example} = UseGlobalContext()

const [ showForgot, setShowForgot] = useState(false)
const [ showForgotOtp, setShowForgotOtp] = useState(false)
const [ showConfirm, setShowConfirm] = useState(false)

const [showPassword, setShowPassword] = useState(false)
const [error, setError] = useState(false)
const [formData, setFormdata] = useState({
  d_name: "",
  password: ""
})

const handleShowPassword = () => {
  setShowPassword((prev) =>!prev)
}

const handleShowForgot =() => {
 setShowForgot(!showForgot)
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


// const handleToggle = () => {
//   setShowForgot(false);
//   setShowForgotOtp(false)
// }

  return (

<section className='w-full flex items-center  justify-center'>
{/* { showForgot && showForgotOtp && showConfirm && <div onClick={handleToggle} className='bg-[#e3e3e3] z-[100] '></div> } */}



<div className={`flex flex-col md:flex-row  min-h-screen  items-center justify-center 
lg:items-start lg:justiy-center  relative overflow-x-hidden py-7 md:py-0 w-full  
max-w-[1440px]
${showForgot  || showForgotOtp  || showConfirm? "bg-[#04177F] md:bg-[#e3e3e3]" : "bg-[#04177F] md:bg-white "}
`}>

  <div className='max-w-[667px] md:h-[1024px] w-full md:min-h-screen flex items-center justify-center
   bg-[#04177F] h-[353px]'>
    
    <img 
    src={saly}
    alt='' 
    className='max-w-[500px] w-full md:max-h-[500px] h-[353px]'
     />

  </div>


  <div className={`w-full h-[536px] md:h-full relative flex flex-col gap-15 items-center justify-center
    ml-4 mt-2 rounded-l-[29px] md:rounded-none
   ${showForgot || showForgotOtp || showConfirm ? "bg-[#e3e3e3]" : "bg-white "}
   `}>


    <div className='absolute top-[20px] left-[13px]'>
    <img 
    src={blueLogo}
    alt='' 
    className=' lg:w-[63px] lg:h-[30px]  w-[39px] h-[21px]'

     />
    </div>

<div className='flex flex-col justify-center items-center text-center gap-[10px] md:mt-20  lg:mt-5'>
  <h1 className='text-[#000000] font-bold lg:text-[32px] text-2xl lg:leading-[48px] ' > Welcome to AremxyPlug!</h1>
  <p className='text-[#000000] font-bold text-base' >The Official Admin Account.</p>
</div>


{ showForgot && 
<div className='absolute z-[1000] lg:h-[590px] lg:w-[606px] w-[95%] h-[363px]  top-[60px] md:top-[150px] 
lg:top-[200px]  '>
  <ForgotPasswordEmail  setShowForgotOtp={setShowForgotOtp} setShowForgot={setShowForgot} />
  </div>}

  { showForgotOtp && 
<div className='absolute z-[1000] lg:h-[590px] lg:w-[606px] w-[95%] h-[363px]  top-[60px] md:top-[150px] 
lg:top-[200px]  '>
  <ForgotPasswordOtp   setShowConfirm={setShowConfirm}  
  setShowForgot={setShowForgot} 
  setShowForgotOtp={setShowForgotOtp}  />
  </div>}

  { showConfirm && 
<div className='absolute z-[1000] lg:h-[590px] lg:w-[606px] w-[95%] h-[363px]  top-[60px] md:top-[150px] 
lg:top-[200px]  '>
  <ConfirmForgot 
/>
  </div>}




{/* Form */}
<div className='w-full flex items-center justify-center lg:mt-[200px] '>


 

  <form onSubmit={handleSubmit} className='flex flex-col gap-6 lg:gap-5 max-w-[375px] w-full px-5'>

    <div className='flex flex-col gap-[10px]'>
    <label className='text-[#000000] lg:text-base text-sm leading-[11px] font-semibold'> Domain name</label>
      <div className={` border-[1px] border-[#9C9C9C] h-[51px] w-full flex 
      items-center justify-center p-3 
        
         ${error ? "border-[1px] border-[#F95252]" : ""}`}>
        <input type='email' placeholder='' required className='w-full border-0 outline-none'   />
        <img 
        src={sms}  
        alt=''
        name='d_name'
        value={formData.d_name}
        onChange={(e) => setFormdata({ ...formData, d_name: e.target.value })}
         className='w-6 h-6 placeholder:text-base placeholder:font-medium'/>
      </div>
    </div>

    <div className={`flex flex-col gap-[10px] `}>
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


    </div>


{ error && <h1 className='text-[#F95252] font-semibold lg:text-sm'>incorrect password..</h1>}



    <div className='flex lg:flex-col flex-row-reverse w-full justify-between items-center md:items-start gap-1'>
      <Link to='#'
      onClick={handleShowForgot}
       className='text-[#04177F] text-sm font-medium lg:font-semibold'> Forgot Password?</Link>

      <div className='flex items-center gap-1'>
        <input type='checkbox' className='cursor-pointer' />
        <h1 className='lg:text-[#7C7C7C] text-[#344054] text-sm lg:text-[12px] font-medium'>Remember me next time!</h1>
      </div>

    </div>

    <div className='flex items-center justify-center w-full'>
      <button type='submit'  className='bg-[#04177F] py-[1px] px-[35px] ms:rounded-[8px] rounded-[5px] text-white text-center md:h-[38px] lg:w-[123px] w-full h-[44px] cursor-pointer'>
Sign in
      </button>
    </div>


  </form>

</div>

  </div>


</div>

</section>
  
  )

}
