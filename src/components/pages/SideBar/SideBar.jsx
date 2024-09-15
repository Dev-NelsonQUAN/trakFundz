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
            <div className="sideBarH5">
              <div className="sideIcons">
                <AiFillHome
                  className="iconHomeDash"
                  style={{ fontSize: "20px" }}
                />
              </div>
              <div className="h5SideTxt">
              <h5>Dashboard </h5>
              </div>
            </div>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "HeaderActive" : "HeaderNotActive"
            }
            to={"/dashboard/expense-track"}
          >
            <div className="sideBarH5">
              <GiTakeMyMoney
                className="iconExpense"
                style={{ fontSize: "23px" }}
              />
              <h5>Expense Tracker </h5>
            </div>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "HeaderActive" : "HeaderNotActive"
            }
            to={"/dashboard/budget-planner"}
          >
            <div className="sideBarH5">
              <GiPiggyBank
                className="iconPiggyBudget"
                style={{ fontSize: "23px" }}
              />
              <h5>Budget Planner </h5>
            </div>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "HeaderActive" : "HeaderNotActive"
            }
            to={"/dashboard/debt-manager"}
          >
            <div className="sideBarH5">
              <GiReceiveMoney
                className="iconDebt"
                style={{ fontSize: "23px" }}
              />
              Debt Manager{" "}
            </div>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "HeaderActive" : "HeaderNotActive"
            }
            to={"/dashboard/report"}
          >
            <div className="sideBarH5">
              <FcBullish className="iconRepo" style={{ fontSize: "23px" }} />
              <h5>Report Insights </h5>
            </div>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "HeaderActive" : "HeaderNotActive"
            }
            to={"/dashboard/settings"}
          >
            <div className="sideBarH5">
              <IoSettingsSharp
                className="iconSettings"
                style={{ fontSize: "23px" }}
              />
              <h5>Settings </h5>
            </div>
          </NavLink>
        </div>

        <div className="downFonts">
          <NavLink
            className={({ isActive }) =>
              isActive ? "HeaderActive" : "HeaderNotActive"
            }
            to={"/dashboard/help"}
          >
            <div className="sideBarH5">
              <TbHelpTriangle className="icon" style={{ fontSize: "23px" }} />
              <h5>Help </h5>
            </div>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "HeaderActive" : "HeaderNotActive"
            }
            to={"/"}
          >
            <div className="sideBarH5">
              <AiOutlinePoweroff style={{ fontSize: "23px" }} />
              <h5>Log Out</h5>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
