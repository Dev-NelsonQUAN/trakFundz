<<<<<<< HEAD
import React from 'react'
import "./SideBar.css"
import logo from "../../../assets/trakFundzLogoReal.svg"
import { NavLink, useNavigate } from 'react-router-dom'

=======
import React from "react";
import "./SideBar.css";
import logo from "../../../assets/trakFundzLogoReal.svg";
import { NavLink, useNavigate } from "react-router-dom";
>>>>>>> be7132accad0b46e0fc2d2daa29f2fae79a9ef93

const SideBar = () => {
    const Nav = useNavigate()
  return (
    <div className="sideBarHolder">
      <div className="sideBarImg">
        <img className="sideLogo" src={logo} alt="" />
      </div>

      <div className="holdDashboardFonts">
        <div className="upFonts">
          <NavLink
            className={({ isActive }) =>
              isActive ? "HeaderActive" : "HeaderNotActive"
            } 
            to={"/dashboard/home"}
          >
            <h5 className="sideBarH5"> Dashboard </h5>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "HeaderActive" : "HeaderNotActive"
            }
            to={"/dashboard/expense-track"}
          >
            <h5 className="sideBarH5"> Expense Tracker </h5>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "HeaderActive" : "HeaderNotActive"
            }
            to={"/dashboard/budget-planner"}
          >
            <h5 className="sideBarH5"> Budget Planner </h5>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "HeaderActive" : "HeaderNotActive"
            }
            to={"/dashboard/debt-manager"}
          >
            <h5 className="sideBarH5"> Debt Manager </h5>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "HeaderActive" : "HeaderNotActive"
            }
            to={"/dashboard/report"}
          >
            <h5 className="sideBarH5"> Report Insights </h5>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "HeaderActive" : "HeaderNotActive"
            }
            to={"/dashboard/settings"}
          >
            <h5 className="sideBarH5"> Settings </h5>
          </NavLink>
        </div>

<<<<<<< HEAD
        <div className="holdDashboardFonts">
            <div className="upFonts">
                <h5 className='sideBarH5'> Dashboard </h5>
                <h5  className='sideBarH5'> Expense Tracker </h5>
                <h5 className='sideBarH5'> Budget Planner </h5>
                <NavLink to={"/dashboard/debt"}><h5 className='sideBarH5'> Debt Manager </h5></NavLink>
                <h5 className='sideBarH5'> Report Insights </h5>
                <h5 className='sideBarH5'> Settings </h5>
=======
>>>>>>> be7132accad0b46e0fc2d2daa29f2fae79a9ef93

        <div className="downFonts">
          <NavLink
            className={({ isActive }) =>
              isActive ? "HeaderActive" : "HeaderNotActive"
            }
            to={"/dashboard/help"}
          >
            <h5 className="sideBarH5"> Help </h5>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "HeaderActive" : "HeaderNotActive"
            }
            to={"/"}
          >
            <h5 className="sideBarH5"> Log Out</h5>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
