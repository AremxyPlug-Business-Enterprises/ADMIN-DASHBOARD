import React from 'react'
import { UseGlobalContext } from '../Context';
import { Link } from 'react-router-dom';
export const Login = () => {
    const {example} = UseGlobalContext()
  return (
    <div className="flex flex-col justify-center gap-[20px] items-center h-full w-full">
<h1 className='text-[20px] font-[700]'>{example}</h1>
<p className="text-[16px] text-green-400 font-[600]">Lorem ipsum dolor sit amet, consectetur 
    adipisicing elit. Alias iusto distinctio 
    reprehenderit perspiciatis fugiat natus?</p>
    <Link to ="/dashboard" className='px-[16px] py-[24px] bg-blue-400 text-white font-[600]'>
    Let's go make  an example
    </Link>
    </div>
  
  )
}
