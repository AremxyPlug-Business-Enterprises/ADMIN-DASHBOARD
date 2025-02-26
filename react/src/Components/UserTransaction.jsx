import TransactionAnalysis from "./UserTransactionAnalysis";
import { DashboardLayout } from "./DashboardLayout";
import TransactionHistory from "./UserTransactionHistory";

export const UserTransaction = () => {
  return (
    <DashboardLayout>
        <div className="w-full ">
          <TransactionAnalysis />
          <TransactionHistory />
        </div>
    </DashboardLayout>
  );
};