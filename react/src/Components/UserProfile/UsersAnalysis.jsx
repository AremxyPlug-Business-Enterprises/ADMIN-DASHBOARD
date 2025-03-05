// import React from 'react'

import { DashboardLayout } from "../DashboardLayout"
import UserProfileAnalysisTable from "./UserProfileAnalysisTable"
import UsersProfileAnalysis from "./usersProfileAnalysis"



const UsersAnalysis = () => {
  return (
<DashboardLayout>
<div className="w-full ">
    <UsersProfileAnalysis  />
    <UserProfileAnalysisTable />
    </div>
</DashboardLayout>
  )
}

export default UsersAnalysis