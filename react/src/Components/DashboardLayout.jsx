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
    <div className={`fixed z-1   px-[5px] lg:pr-[60px] flex top-0 w-full items-center justify-between
     bg-white lg:h-[120px] h-[74px] border-1 gap-[10%] border-b-gray-400  ${dashboardOpen ? "md:pl-[25%]" : "md:pl-[10%]"}`}>
        <div onClick={()=> setDashboardOpen(true)} className="flex w-[15%]  md:hidden">
      <img src= {menu} className="w-[30px] h-[30px]" alt="" />
        </div>
        {/* Switching of accounts */}
      <div className={`flex md:ml-[20px]  w-[40%] justify-between items-center lg:border-1 border-[0.29px]
       border-[#000] opacity-[30%] px-[4.91px] py-[12px] 
       lg:rounded-[12px] rounded-[6px] lg:p-[5px] h-[50%]  md:h-[70%] ${dashboardOpen ? "md:w-[25%]" : "md:w-[30%]"}`}>
        <div className='flex lg:gap-[5px] gap-[3px]'>
    <img src={Profile1} className='lg:w-[24px] lg:h-[24px] w-[14px] h-[14px]' alt="" />
    <p className="lg:text-[16px] md:text-[14px] md:leading-[19px] text-[8px] leading-[12px] font-[400] 
    lg:leading-[24px] lg:font-[600] text-black">
        Business Profile</p>
        </div>
        <img src={ArrowDown} alt="" className="lg:h-[24px] lg:w-[24px] h-[12px] w-[12px] " />
      </div>
      <div className={`w-[25%] ${dashboardOpen ? "md:w-[25%]" : "md:w-[30%]"} `}>
  <p className="lg:text-[16px] lg:leading-[24px] lg:font-[600] text-black
  text-[14px] leading-[19px] font-[500]">
    Admin dashboard</p>
      </div>
      <div className='flex md:w-[25%] w-[30%] justify-between md:gap-[30px]'>
      <div className=" gap-[5px] md:flex hidden">
        <p className="text-[16px] leading-[24px] font-[600] text-black">Light</p>
      
    <div  className="w-[51px] h-[22.23px] rounded-[12px]  relative bg-gray-400  ">
        <p className='absolute left-0 top-0  text-[20px] w-[22.23px] h-full rounded-full bg-white'/>
        </div>
      <p className="text-[16px] leading-[24px] font-[600] text-black">Dark</p>
      </div>
      <div className={`flex lg:gap-[20%] gap-[10%] ${dashboardOpen ? "md:w-[25%]" : "md:w-[30%]"}`}>
        <img src={Notification} className="md:hidden flex w-[20px] h-[20px]" alt="notification" />
<img src={logOutIcon} className="lg:w-[24px] lg:h-[24px] h-[20px] w-[20px]" alt="logout" />
<img src={ArrowDown} className="lg:w-[24px] lg:h-[24px] w-[20px] h-[20px]" alt="arrowDown" />
</div>
</div>
    </div>
{/* SIDE BAR */}
{dashboardOpen ?  (
    <div className='fixed h-screen z-2 lg:w-[23%] md:w-[30%]  w-[70%]
     bg-[#04177F] border-1 rounded-r-[25px] p-[15px]'>
     <div className=" flex flex-col h-[45%] justify-between w-full md:w-full
      ">
    <div className="flex h-[30%]  items-center justify-between">
      
    <img src={Logo} className="w-[118px] h-[17px]" alt="" />
    
   <img onClick={()=> {
    setDashboardOpen(false)
   }} src={Menu} className="w-[30px] h-[30px]" alt="" />
    </div>
    <div className='flex flex-col border-t-1   h-[70%]  gap-[10px] md:gap-[25px] 
     justify-between border-white py-[20px] lg:py-[35px]'>
    <div className="flex gap-[10px] h-[50%] w-[100%] justify-center">
<img src={ProfileLogo} className='self-start w-[60px] h-[60px]' alt="" />
<div className="flex flex-col gap-[5px] lg:gap-[7px] w-full">
    <div className="flex flex-col justify-between gap-[3px] md:gap-[7px] ">
    <p className="text-white text-[14px] leading-[21px] lg:text-[16px]
     lg:leading-[23px] font-[500]">AremxyPlug Business Ent, LTD</p>
    <p className="text-white text-[12px] leading-[18px] font-[600]">admin@aremxyPlug.com</p>
    <p className="text-white text-[12px] leading-[18px] font-[600]">ID:AP/ADM/001</p>
   </div>
    <div className="flex gap-[5px]">
        <p className="text-white text-[12px] leading-[18px] font-[600]">Admin</p>
        <p className="text-white text-[12px] leading-[18px] font-[600]">Verified</p>
    </div>
    
    </div>
   
</div>
<Link to ="/dashboard" className='flex gap-[15px] h-[50%] w-full justify-left mt-[20px]  lg:mt-[10px] bg-[#F2FAFF1A] 
     rounded-[10px] md:py-[20px] md:px-[15px] py-[16px] px-[14px] items-center '>
        <img className="md:h-[40px] md:w-[40px] h-[24px] w-[24px]" src={DashboardIcon} alt="" />
    <p className='text-white font-[600] text-[16px] leading-[23px]'>
        Dashboard
        </p>
    </Link>
    </div>
    </div>
    {/* Dashboard components are listed where you are to
     link all your webpages to relating to the dashboard */}
    <div className='flex flex-col mt-[10px]  Feature h-[55%] border-t-1 border-white   gap-[20px]'>
<p className="lg:text-[16px] font-[500] mt-4 text-[14px] leading-[24px] lg:leading-[24px] lg:font-[600]
 text-white">
    FEATURES
</p>
<div className="flex flex-col h-[75%] gap-[25px] w-full overflow-y-scroll ">
    {/* User Transaction */}
<Link to="/UserTransaction" className="flex gap-[12px] w-full items-center">
<img className="w-[24px] h-[24px]" src={UserTransaction} alt="" />
<p className="lg:text-[14px] text-[16px] leading-[24px] lg:leading-[21px] font-[400]
 lg:font-[600] text-white">User Transaction</p>
</Link>
{/* User Profile */}
<Link to="/UserProfile" className="flex gap-[12px] w-full items-center">
<img className="w-[24px] h-[24px]" src={UserProfile} alt="" />
    <p className="lg:text-[14px] text-[16px] leading-[24px] lg:leading-[21px] lg:font-[600] font-[500] text-white">
        User Profile
    </p>
   
</Link>
{/* Finance Management */}
<Link className="flex gap-[12px] w-full items-center" to="/FinanceManagement">
<img className="w-[24px] h-[24px]" src={FinanceManagement} alt="" />
    
    <p className="lg:text-[14px] lg:leading-[21px] text-[16px] leading-[24px] lg:font-[600] font-[500] text-white">
        Finance management
        </p>
</Link>
{/* Product Management */}
<Link className="flex gap-[15px] w-full items-center">
<img className="w-[24px] h-[24px]" src={ProductManagement} alt="" />
    <p className='lg:text-[14px] lg:leading-[21px] lg:font-[600] text-[16px] font-[500] leading-[24px] text-white'>
        Product Maangement
    </p>
  
</Link>
{/* Staff Management  */}
<Link to="/StaffManagement" className="flex gap-[15px] w-full items-center">
<img className="w-[24px] h-[24px]" src={StaffMgt} alt="" />
    <p className="lg:text-[14px] lg:leading-[21px] lg:font-[600] font-[500]
     text-[16px] leading-[24px] text-white">
        Staff Management
    </p>

</Link>
{/* Web Configuration */}
<Link to="/WebConfig" className="flex gap-[15px]  w-full items-center">
<img src={WebConfig} className='w-[24px] h-[24px]' alt="" />
    <p className="lg:text-[14px] lg:leading-[21px] text-[16px] leading-[24px]
     lg:font-[600] font-[500] text-white">
        Web Configuration
    </p>
  </Link>
  {/* Notfication */}
<Link to ="/Notification" className='flex w-full gap-[15px] items-center '>
<img src={Notification} className="w-[24px] h-[24px]" alt="" />
    <p className="lg:text-[14px] lg:leading-[21px] text-[16px] leading-[24px] lg:font-[600] font-[500] text-white">
        Notification
    </p>
  
</Link>
{/* ProfileSettings */}
<Link to="/ProfileSettings" className='flex w-full  items-center gap-[15px]'>
<img src={ProfileSettings} className="w-[24px] h-[24px]" alt="" />
    <p className="lg:text-[14px] lg:leading-[21px] text-[16px] 
    leading-[24px] lg:font-[600] font-[500] text-white">
        Profile settings</p>

</Link>
</div>
<Link to="/" className="flex gap-[15px] h-[6%] mb-[20px]  justify-start items-center w-full">
<img src={logOutIcon} className="w-[24px] h-[24px]" alt="" />
    <p className="lg:text-[14px] lg:leading-[21px] text-[16px] leading-[24px]
     font-[500] lg:font-[600] text-white">
        LogOut</p>
</Link>
    </div>
    </div>
): (
 <div className='fixed md:flex md:flex-col md:justify-between hidden top-0 h-screen
  z-2 lg:w-[6%] md:w-[7%]
 bg-[#04177F] border-1 rounded-r-[25px] lg:p-[5px] lg:pb-[25px] '>
    <div className='flex flex-col gap-[55px] items-center md:py-[40px] border-b-1 border-white'>
  <img onClick={()=> setDashboardOpen(true)} src={Menu} className='w-[40px] h-[40px]' alt="" />
  <img src={ProfileLogo} className=" w-[45px] h-[45px]" alt="" />
  <Link to="/dashboard" className="w-[45px] h-[45px] p-2 bg-[#F2FAFF1A] rounded-[10px]">
  <img src={DashboardIcon} className="w-full h-full " alt="" />
  </Link>
    </div>
    <div className='flex flex-col  items-center
     gap-[30px] h-[50%] Feature overflow-y-scroll pt-[40px]'>
        <Link to="/UserTransaction" className="w-[36px] h-[29.2px]">
   <img className="w-full h-full" src={UserTransaction} alt="" />
   </Link>
   <Link to="/UserProfile" className='w-[36px] h-[29.2px]'>
   <img className="w-full h-full" src={UserProfile} alt="" />
   </Link>
   <Link to="/FinanceManagement" className="w-[36px] h-[29.2px]">
   <img className="w-full h-full" src={FinanceManagement} alt="" />
   </Link>
   <Link to ="/ProductManagement" className="w-[36px] h-[29.2px]">
   <img className="w-full h-full" src={ProductManagement} alt="" />
   </Link>
   <Link to ="/StaffManagement" className="w-[36px] h-[29.2px]">
   <img className="w-full h-full" src={StaffMgt} alt="" />
   </Link>
   <Link to ="/WebConfig" className="w-[36px] h-[29.2px]">
   <img className="w-full h-full" src={WebConfig} alt="" />
   </Link>
   <Link to ="/Notification" className="w-[36px] h-[29.2px]">
   <img className="w-full h-full" src={Notification} alt="" />
   </Link>
   <Link to ="/ProfileSettings" className="w-[36px] h-[29.2px]">
   <img className="w-full h-full" src={ProfileSettings} alt="" />
   </Link>
    </div>
    {/* Log-Out */}
    <Link to="/" className="w-full py-[20px] flex mt-[20px] items-center justify-center">
   <img className="w-[36px] h-[29.2px]" src={logOutIcon} alt="" />
     </Link>
     </div>
)}
<div className={`flex pt-[100px] px-[20px] 
     ${dashboardOpen ? "md:pl-[27%] md:pt-[200px]" : "md:pl-[10%]  md:pt-[200px]"}`}>
{children}
</div>

    </div>
  )
}
