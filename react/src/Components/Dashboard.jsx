import React from 'react'
import { Link } from 'react-router-dom'
import { DashboardLayout } from './DashboardLayout'
export const Dashboard = () => {
  return (
    // You can erase the code to start the dashboard design here
    <div className="flex justify-center mt-[20px]">
        <DashboardLayout/>
       <p className ="text-[20px] font-[700] text-blue-400">Dashboard Boom!!!!</p> 
        </div>
  )
}
