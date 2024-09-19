import React from "react";
import "./App.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage/LandingPage";
import SignUp from "./components/auth/SignUp/SignUp";
import Login from "./components/auth/Login/Login";
import ForgotPassword from "./components/auth/ForgotPassword/ForgotPassword";
import VerifyEmail from "./components/auth/VerifyEmail/VerifyEmail";
import ResetPassword from "./components/auth/ResetPassword/ResetPassword";
import PasswordRecovery from "./components/auth/PasswordRecovery/PasswordRecovery";
import PasswordSuccess from "./components/auth/PasswordSuccess/PasswordSuccess";
import UserDashboard from "./components/pages/UserDashboard/UserDashboard";
import FeatureOnboard from "./components/pages/FeatureOnboard/FeatureOnboard";
import UserBoard from "./components/pages/UserDashboard/UserDashboard";
import Layout from "./components/layout/Layout";
import ExpenseTrackerDashboard from "./components/pages/ExpenseTrackerDashBoard/ExpenseTrackerDashboard";
import BudgetPlannerDashboard from "./components/pages/BudgetPlannerDashboard/BudgetPlannerDashboard";
import DebtManager from "./components/pages/DebtManager/DebtManager";
import ReportInsights from "./components/pages/ReportInsights/ReportInsights";
import Settings from "./components/pages/Settings/Settings";
import Help from "./components/pages/Help/Help"
import PrevDashBoard from "./components/pages/PrevDashBoard/PrevDashBoard"
import VerificationPage from "./components/pages/VerificationPage/VerificationPage";
import { Toaster } from "react-hot-toast";

const router = createHashRouter([
  {
    path: "/",
    element: <LandingPage />, 
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot",
    element: <ForgotPassword />,
  },
  {
    path: "/verify",
    element: <VerifyEmail />,
  },
  {
    path: "/verifySuccessful/:token",
    element: <VerificationPage/>
  },
  {
    path: "/reset",
    element: <ResetPassword />,
  },
  {
    path: "/recovery",
    element: <PasswordRecovery />,
  },
  {
    path: "/passwordSuccess",
    element: <PasswordSuccess />,
  },
  {
    path: "/featureOnboard",
    element: <FeatureOnboard />,
  },
  {
    path: "/dashboard",
    element: <Layout/>,
    // element: <UserDashboard />,
    children: [
      {
        path: "home",
        // element: <PrevDashBoard/>
        element: <UserBoard/>
      },
      {
        path: "expense-track",
        element: <ExpenseTrackerDashboard/>
      },
      {
        path: 'budget-planner',
        element: <BudgetPlannerDashboard/>
      },
      {
        path: "debt-manager",
        element: <DebtManager/>
      },
      {
        path: "report",
        element: <ReportInsights/>
      },
      {
        path: "settings",
        element: <Settings/>
      },
      {
        path: "help",
        element: <Help/>
      },
      // {
      //   path: "logout",
      //   element: <Logout/>
      // }
    ]
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster/>
    </>
  );
};

export default App;
