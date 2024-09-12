import React from "react";
import "./Layout.css";
import { Outlet } from "react-router-dom";
import SideBar from "../pages/SideBar/SideBar";
import DashboardHeader from "../pages/DashboardHeader/DashboardHeader";

const Layout = () => {
  return (
    <>
    <div className="layoutInner">
      <div className="layoutLeft">
        <SideBar />
      </div>

      <div className="layoutRight">
        <div className="dashHead">
        <DashboardHeader />
        </div>

        <div className="outletHolder">
        <Outlet />
        </div>
      </div>
    </div> 
    </>
  );
};

export default Layout;
