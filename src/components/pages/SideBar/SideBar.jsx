import React from "react";
import "./SideBar.css";
import logo from "../../../assets/trakFundzLogoReal.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { GiTakeMyMoney } from "react-icons/gi";
import { GiPiggyBank } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import { FcBullish } from "react-icons/fc";
import { IoSettingsSharp } from "react-icons/io5";
import { TbHelpTriangle } from "react-icons/tb";
import { AiOutlinePoweroff } from "react-icons/ai";

const SideBar = () => {
  const Nav = useNavigate();
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
            <h5 className="sideBarH5">
              <AiFillHome
                className="iconHomeDash"
                style={{ fontSize: "20px" }}
              />
              Dashboard{" "}
            </h5>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "HeaderActive" : "HeaderNotActive"
            }
            to={"/dashboard/expense-track"}
          >
            <h5 className="sideBarH5">
              <GiTakeMyMoney
                className="iconExpense"
                style={{ fontSize: "23px" }}
              />
              Expense Tracker{" "}
            </h5>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "HeaderActive" : "HeaderNotActive"
            }
            to={"/dashboard/budget-planner"}
          >
            <h5 className="sideBarH5">
              <GiPiggyBank
                className="iconPiggyBudget"
                style={{ fontSize: "23px" }}
              />
              Budget Planner{" "}
            </h5>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "HeaderActive" : "HeaderNotActive"
            }
            to={"/dashboard/debt-manager"}
          >
            <h5 className="sideBarH5">
              <GiReceiveMoney
                className="iconDebt"
                style={{ fontSize: "23px", color: "red" }}
              />
              Debt Manager{" "}
            </h5>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "HeaderActive" : "HeaderNotActive"
            }
            to={"/dashboard/report"}
          >
            <h5 className="sideBarH5">
              <FcBullish className="iconRepo" style={{ fontSize: "23px", color: "red" }} />
              Report Insights{" "}
            </h5>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "HeaderActive" : "HeaderNotActive"
            }
            to={"/dashboard/settings"}
          >
            <h5 className="sideBarH5">
              <IoSettingsSharp
                className="iconSettings"
                style={{ fontSize: "23px" }}
              />
              Settings{" "}
            </h5>
          </NavLink>
        </div>

        <div className="downFonts">
          <NavLink
            className={({ isActive }) =>
              isActive ? "HeaderActive" : "HeaderNotActive"
            }
            to={"/dashboard/help"}
          >
            <h5 className="sideBarH5">
              <TbHelpTriangle className="icon" style={{ fontSize: "23px" }} />
              Help{" "}
            </h5>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "HeaderActive" : "HeaderNotActive"
            }
            to={"/"}
          >
            <h5 className="sideBarH5">
              <AiOutlinePoweroff  style={{fontSize: "23px"}}/>
              Log Out
            </h5>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
