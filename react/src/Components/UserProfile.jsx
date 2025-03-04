
import { DashboardLayout } from "./DashboardLayout"
import arrow from "../assets/arrow-right.png"
import waitlist from "../assets/pad with list.svg"
import password from "../assets/rest_password.svg"
import unblock from "../assets/unblock.svg"
import deletes from "../assets/deletes.svg"
import analysis from "../assets/analysis.svg"
import neewsletter from "../assets/newspaper.svg"
import block from "../assets/block.svg"
import find from "../assets/user_find.svg"
import pin from "../assets/user_pin.svg"
import { Link } from "react-router-dom"

const userData = [
  {title: 'User Analysis', img: analysis, path: "/UserProfile/UsersProfileAnalysis" },
  {title: 'Find user Account', img: find, path: "/UserProfile/FindUser" },
  {title: 'Waitlist', img: waitlist, path: "/UserProfile/UnblockUser"},
  {title: 'Reset User PIN', img: pin, path: "/UserProfile/ResetPin"},
  {title: 'Reset User Password', img: password, path: "/UserProfile/ResetPassword"},
  {title: 'Newsletter', img: neewsletter, path: "/UserProfile/UnblockUser"},
  {title: 'Block User Account', img: block, path: "/UserProfile/BlockUser"},
  {title: 'Unblock User Account', img: unblock,  path: "/UserProfile/UnblockUser" },
  {title: 'Delete User Account', img: deletes, path: "/UserProfile/UnblockUser"},
]


export const UserProfile = () => {
  return (
<DashboardLayout>
<section className="flex flex-col gap-10 lg:gap-15 w-full">

  <div className="flex flex-col gap-4">
    <h1 className="text-[#9C9C9C]   text-xl leading-[30px] font-semibold
    md:text-[0.9644rem] lg:leading-[56px] lg:text-[37px] md:leading-[1.4468rem] " >Users Profiles</h1>
      <p className="flex items-center gap-2 md:gap-[0.4825rem]  " >
           <span className="text-[#7C7C7C] font-medium lg:text-[1.66rem] text-base
            md:text-[0.9644rem] lg:leading-[2.49rem] md:leading-[1.4468rem] " >
        Dashboard
           </span>
           <img
             src={arrow}
             alt="Arrow Right"
             className=" lg:w-[1.99rem] lg:h-[1.99rem] md:w-[1.1575rem] md:h-[1.1575rem]  w-6 h-6"
           />
             <span className="text-[#A3A3A3] font-[400]  md:text-[0.9644rem]  text-base
             lg:leading-[2.49rem] lg:text-[26px] md:leading-[1.4468rem] ">
          Users Profiles
           </span>
         </p>

  </div>


  <div className="grid grid-cols-3 justify-items-center lg:gap-10 gap-5">
    {userData.map((u,i)=> (
      <Link to={u?.path}key={i} className="flex flex-col items-center justify-center  gap-4 py-[11px] px-[10px]
      bg-[#E4EBE9] border-[#9C9C9C] lg:max-w-[360px] lg:w-full lg:h-[239px] w-[100px] h-[125px]  md:w-[208px] md:h-[138px] rounded-[8px] lg:rounded-[16px]">
       
<img src={u.img} alt="profile_icon"   className="lg:w-[100px] lg:h-[100px] w-[53px] h-[53px] md:[57px] md:[57px]"/>
        <h1 className="lg:text-[22px] lg:leading-[33px] text-[12px] leading-[17px] md:text-[12px] md:leading-[19px] font-normal lg:font-medium text-[#000000] text-center">{u.title}</h1>
</Link>
   
    ))}
  </div>


</section>
</DashboardLayout>
 )
}
