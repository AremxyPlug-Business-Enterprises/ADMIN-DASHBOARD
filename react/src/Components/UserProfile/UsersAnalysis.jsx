// import React from 'react'

import { DashboardLayout } from "../DashboardLayout"
import UsersProfileAnalysis from "./usersProfileAnalysis"
import UsersProfileHistory from "./UsersProfileHistory"


const UsersAnalysis = () => {
  return (
<DashboardLayout>
<div className="w-full ">
    <UsersProfileAnalysis  />
    <UsersProfileHistory />
    </div>
</DashboardLayout>
  )
}

export default UsersAnalysis