import { DashboardLayout } from "../DashboardLayout";


export default function SalesAnalysis() {
  return (
    <DashboardLayout>
          <div className="w-full ">
            <TransactionAnalysis />
            <TransactionHistory />
          </div>
        </DashboardLayout>
  )
}
