// import React from 'react'

import { DashboardLayout } from "../DashboardLayout"

import UsersProfileAnalysis from "./usersProfileAnalysis"
import UserProfileHistory  from  "./UsersProfileHistory"



const UsersAnalysis = () => {
  return (
<DashboardLayout>
<div className="w-full ">
    <UsersProfileAnalysis  />
    <UserProfileHistory />
    </div>
</DashboardLayout>
  )
}

export default UsersAnalysis