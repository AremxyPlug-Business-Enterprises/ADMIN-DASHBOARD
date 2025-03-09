import { DashboardLayout } from "../DashboardLayout";
import SalesHistory from "./SalesHistory";
import UsersSalesAnalysis from "./UsersSalesAnalysis";


export default function SalesAnalysis() {
  return (
    <DashboardLayout>
          <div className="w-full ">
            <UsersSalesAnalysis />
            <SalesHistory />
          </div>
        </DashboardLayout>
  )
}
