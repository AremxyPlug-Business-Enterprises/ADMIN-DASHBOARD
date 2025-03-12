// import React from 'react'

import { DashboardLayout } from "../DashboardLayout";
import PointAnalysisHistory from "./PointAnalysisHistory";
import PointAnalysisStats from "./PointAnalysisStats";

export default function PointAnalysis () {
  return (
  <DashboardLayout>
         <div className="w-full ">
          <PointAnalysisStats  />
          <PointAnalysisHistory  />
         </div>
  </DashboardLayout>
  )
}

