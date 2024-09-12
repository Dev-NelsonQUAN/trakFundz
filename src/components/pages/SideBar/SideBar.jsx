import React from "react";
import "./SideBar.css";
import logo from "../../../assets/trakFundzLogoReal.svg";
import { NavLink, useNavigate } from "react-router-dom";

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
