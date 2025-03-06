// import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Example } from "./Components/Example";
import { Login } from "./Components/Auth/Login";
import { Dashboard } from "./Components/Dashboard";
import { ProductMgt } from "./Components/ProductMgt";
import { StaffMgt } from "./Components/StaffMgt";
import { UserProfile } from "./Components/UserProfile";
import { FinanceMgt } from "./Components/FinanceMgt";
import { Notification } from "./Components/Notification";
import { UserTransaction } from "./Components/User-Transactions/UserTransaction";
import { WebConfig } from "./Components/WebConfig";
import { ProfileSettings } from "./Components/ProfileSettings";
import { CreateNewPassword } from "./Components/Auth/CreateNewPassword";
import FindUser from "./Components/UserProfile/FindUser";
import BlockUser from "./Components/UserProfile/BlockUser";
import UnblockUser from "./Components/UserProfile/UnBlockUser";
import ResetPin from "./Components/UserProfile/ResetPin";
import ResetPassword from "./Components/UserProfile/ResetPassword";
import DeleteUser from "./Components/UserProfile/DeleteUser";
import UsersAnalysis from "./Components/UserProfile/usersAnalysis";

// import { CreatePasswordConfirmation,  } from "./Components/Auth/Confirmation";
export const Router = () => {
  return (
    <Routes>
      {/* An example on how to create routes for your pages */}
      <Route path="/example" element={<Example />} />
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboard/create-password"
        element={<CreateNewPassword />}
      />

     {/* user profile */}
     <Route path="/UserProfile/UsersProfileAnalysis" element={<UsersAnalysis />}  />
     <Route path="/UserProfile/FindUser" element={<FindUser/>}  />
     <Route path="/UserProfile/BlockUser" element={<BlockUser />}  />
     <Route path="/UserProfile/DeleteUser" element={<DeleteUser />}  />
     <Route path="/UserProfile/UnblockUser" element={<UnblockUser/>}  />
     <Route path="/UserProfile/ResetPin" element={<ResetPin />}  />
     <Route path="/UserProfile/ResetPassword" element={<ResetPassword />}  />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/UserTransaction" element={<UserTransaction />} />
      <Route path="/UserProfile" element={<UserProfile />} />
      <Route path="/StaffManagement" element={<StaffMgt />} />
      <Route path="/ProductManagement" element={<ProductMgt />} />
      <Route path="/FinanceManagement" element={<FinanceMgt />} />
      <Route path="/WebConfig" element={<WebConfig />} />
      <Route path="/Notification" element={<Notification />} />
      <Route path="/ProfileSettings" element={<ProfileSettings />} />
    </Routes>
  );
};
