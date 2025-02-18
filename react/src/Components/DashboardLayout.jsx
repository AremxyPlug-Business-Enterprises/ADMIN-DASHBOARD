import React, {useState} from 'react';
import Profile1 from "../assets/profile-2user.png";
import ArrowDown from "../assets/arrow-down.svg";
import logOutIcon from "../assets/logout.svg";
import Logo from "../assets/Logo.svg";
import Menu from "../assets/menu1.svg";
import  ProfileLogo from "../assets/ProfileLogo.svg";
import DashboardIcon from "../assets/dashboardIcon.svg";
import { Link } from 'react-router-dom';
import UserTransaction from "../assets/UserTransaction.svg";
import UserProfile from "../assets/UserProfile.svg";
import FinanceManagement from "../assets/FinanceManagement.svg";
import ProductManagement from "../assets/ProductMgt.svg";
import StaffMgt from "../assets/StaffMgt.svg";
import WebConfig from "../assets/WebConfig.svg";
import Notification from "../assets/Notification.svg";
import ProfileSettings from "../assets/ProfileSettings.svg"
import menu from "../assets/menu.svg"


//This is the layout of the dashboard which contains the navbar and sidebar
export const DashboardLayout = ({children}) => {
    const [dashboardOpen, setDashboardOpen] = useState(true);
  return (
    <div className="w-full relative">
        {/* THE NAVBAR */}
    <div className="fixed z-1  lg:pl-[400px] px-[5px] lg:pr-[60px] flex top-0 w-full items-center justify-between
     bg-white lg:h-[120px] h-[74px] border-1 border-b-gray-400">
        <div onClick={()=> setDashboardOpen(true)} className="md:flex w-[25%]  lg:hidden">
      <img src= {menu} classname="w-[30px] h-[30px]" alt="" />
        </div>
        {/* Switching of accounts */}
      <div className='flex w-[25%] lg:w-[30%] justify-between items-center lg:border-1 border-[0.29px]
       border-[#000] opacity-[30%] px-[4.91px] py-[12px] 
       lg:rounded-[12px] lg:p-[5px] h-[70%]'>
        <div className='flex lg:gap-[5px] gap-[3px]'>
    <img src={Profile1} className='lg:w-[24px] lg:h-[24px] w-[14px] h-[14px]' alt="" />
    <p className="lg:text-[16px] text-[14px] leading-[19px] font-[400] 
    lg:leading-[24px] lg:font-[600] text-black">
        Business Profile</p>
        </div>
        <img src={ArrowDown} alt="" className="lg:h-[24px] lg:w-[24px] h-[12px] w-[12px] " />
      </div>
      <div classNme="w-[25%] lg:w-[30%]">
  <p className="lg:text-[16px] lg:leading-[24px] lg:font-[600] text-black
  text-[14px] leading-[19px] font-[400]">
    Admin dashboard</p>
      </div>
      <div className='flex w-[25%] lg:w-[30%] justify-between gap-[5px]'>
      <div className=" gap-[5px] lg:flex hidden">
        <p className="text-[16px] leading-[24px] font-[600] text-black">Light</p>
      
    <div  className="w-[51px] h-[22.23px] rounded-[12px]  relative bg-gray-400  ">
        <p className='absolute left-0 top-0  text-[20px] w-[22.23px] h-full rounded-full bg-white'/>
        </div>
      <p className="text-[16px] leading-[24px] font-[600] text-black">Dark</p>
      </div>
      <div className='flex gap-[5px]'>
        <img src={Notification} className="lg:hidden flex w-[20px] h-[20px]" alt="notification" />
<img src={logOutIcon} className="lg:w-[24px] lg:h-[24px] h-[20px] w-[20px]" alt="logout" />
<img src={ArrowDown} className="lg:w-[24px] lg:h-[24px] w-[20px] h-[20px]" alt="arrowDown" />
</div>
</div>
    </div>
{/* SIDE BAR */}
{dashboardOpen ?  (
    <div className='absolute top-0 h-screen z-2 lg:w-[25%] w-[100%] bg-[#04177F] border-1 rounded-r-[25px] p-[15px] '>
    <div className="flex h-[120px] items-center justify-between">
        <Link to ="/">
    <img src={Logo} className="w-[118px] h-[17px]" alt="" />
    </Link>
   <img onClick={()=> {
    setDashboardOpen(false)
   }} src={Menu} className="w-[30px] h-[30px]" alt="" />
    </div>
    <div className='flex flex-col border-y-1 border-white py-[20px] lg:py-[30px]'>
    <div className="flex gap-[10px] w-[100%] justify-center">
<img src={ProfileLogo} className='self-start w-[60px] h-[60px]' alt="" />
<div className="flex flex-col lg:gap-[7px] w-full">
    <p className="text-white text-[14px] leading-[21px] lg:text-[16px] lg:leading-[23px] font-[600]">AremxyPlug Business Ent, LTD</p>
    <p className="text-white text-[12px] leading-[18px] font-[600]">admin@aremxyPlug.com</p>
    <p className="text-white text-[12px] leading-[18px] font-[600]">ID:AP/ADM/001</p>

    <div className="flex gap-[5px]">
        <p className="text-white text-[12px] leading-[18px] font-[600]">Admin</p>
        <p className="text-white text-[12px] leading-[18px] font-[600]">Verified</p>
    </div>
    
    </div>
   
</div>
<Link to ="/dashboard" className='flex gap-[15px] w-full justify-left mt-[10px] bg-[#F2FAFF1A] 
     rounded-[10px] py-[20px] px-[15px]'>
        <img src={DashboardIcon} alt="" />
    <p className='text-white font-[600] text-[16px] leading-[23px]'>
        Dashboard
        </p>
    </Link>
    </div>
    {/* Dashboard components are listed where you are to
     link all your webpages to relating to the dashboard */}
    <div className='flex flex-col mt-[25px] Feature h-[300px]  gap-[35px]'>
<p className="lg:text-[16px] text-[20px] leading-[30px] lg:leading-[24px] lg:font-[600] text-white">
    FEATURES
</p>
<div className="flex flex-col gap-[15px] w-full overflow-y-scroll ">
    {/* User Transaction */}
<div className="flex gap-[12px] w-full items-center">
<img className="w-[24px] h-[24px]" src={UserTransaction} alt="" />
<p className="lg:text-[14px] lg:leading-[21px] lg:font-[600] text-white">User Transaction</p>
</div>
{/* User Profile */}
<div className="flex gap-[12px] w-full items-center">
<img className="w-[24px] h-[24px]" src={UserProfile} alt="" />
    <p className="lg:text-[14px] text-[16px] leading-[24px] lg:leading-[21px] lg:font-[600] text-white">
        User Profile
    </p>
   
</div >
{/* Finance Management */}
<div className="flex gap-[12px] w-full items-center">
<img className="w-[24px] h-[24px]" src={FinanceManagement} alt="" />
    
    <p className="lg:text-[14px] lg:leading-[21px] text-[16px] leading-[24px] lg:font-[600] text-white">
        Finance management
        </p>
</div>
{/* Product Management */}
<div className="flex gap-[15px] w-full items-center">
<img className="w-[24px] h-[24px]" src={ProductManagement} alt="" />
    <p className='lg:text-[14px] lg:leading-[21px] lg:font-[600] text-[16px] leading-[24px] text-white'>
        Product Maangement
    </p>
  
</div>
{/* Staff Management  */}
<div className="flex gap-[15px] w-full items-center">
<img className="w-[24px] h-[24px]" src={StaffMgt} alt="" />
    <p className="lg:text-[14px] lg:leading-[21px] lg:font-[600] text-[16px] leading-[24px] text-white">
        Staff Management
    </p>

</div>
{/* Web Configuration */}
<div className="flex gap-[15px]  w-full items-center">
<img src={WebConfig} className='w-[24px] h-[24px]' alt="" />
    <p className="lg:text-[14px] lg:leading-[21px] text-[16px] leading-[24px] lg:font-[600] text-white">
        Web Configuration
    </p>
  </div>
  {/* Notfication */}
<div className='flex w-full gap-[15px] items-center '>
<img src={Notification} className="w-[24px] h-[24px]" alt="" />
    <p className="lg:text-[14px] lg:leading-[21px] text-[16px] leading-[24px] lg:font-[600] text-white">
        Notification
    </p>
  
</div>
{/* ProfileSettings */}
<Link className='flex w-full items-center gap-[15px]'>
<img src={ProfileSettings} className="w-[24px] h-[24px]" alt="" />
    <p className="lg:text-[14px] lg:leading-[21px] text-[16px] leading-[24px] lg:font-[600] text-white">
        Profile settings</p>

</Link>
</div>
<Link to="/" className="flex gap-[15px] items-center w-full">
<img src={logOutIcon} className="w-[24px] h-[24px]" alt="" />
    <p className="lg:text-[14px] lg:leading-[21px] text-[16px] leading-[24px] lg:font-[600] text-white">
        LogOut</p>
</Link>
    </div>
    </div>
): (
 <div className='absolute lg:flex lg:flex-col hidden top-0 h-screen z-2 w-[5%] 
 bg-[#04177F] border-1 rounded-r-[25px] lg:p-[15px]'>
    <div className='flex flex-col gap-[15px] lg:py-[40px] border-b-1 border-white'>
  <img onClick={()=> setDashboardOpen(true)} src={Menu} className='w-[40px] h-[40px]' alt="" />
  <img src={Logo} className="w-[60px] h-[60px]" alt="" />
  <img src={DashboardIcon} className="w-[40px] h-[40px] p-2 bg-[#F2FAFF1A] rounded-[10px]" alt="" />
    </div>
    <div className='flex flex-col gap-[30px] h-[400px] Feature overflow-y-scroll pt-[40px]'>
        <Link to="/UserTransaction" className="w-[36px] h-[29.2px]">
   <img className="w-full h-full" src={UserTransaction} alt="" />
   </Link>
   <Link to="/UserProfile" className='w-[36px] h-[29.2px]'>
   <img className="w-full h-full" src={UserProfile} alt="" />
   </Link>

   <img className="w-[36px] h-[29.2px]" src={FinanceManagement} alt="" />
   <img className="w-[36px] h-[29.2px]" src={ProductManagement} alt="" />
   <img className="w-[36px] h-[29.2px]" src={StaffMgt} alt="" />
   <img className="w-[36px] h-[29.2px]" src={WebConfig} alt="" />
   <img className="w-[36px] h-[29.2px]" src={Notification} alt="" />
   <img className="w-[36px] h-[29.2px]" src={ProfileSettings} alt="" />
    </div>
    {/* Log-Out */}
    <Link to="/" className="w-[36px] h-[29.2px] flex mt-[20px] items-center justify-center">
   <img className="w-full h-full" src={logOutIcon} alt="" />
     </Link>
     </div>
)}
{children}
    </div>
  )
}
