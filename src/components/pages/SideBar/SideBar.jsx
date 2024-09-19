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
  
  const handleLogout = () =>{
    Nav("/login")
    localStorage.removeItem("token")
    localStorage.removeItem("userId")
  }

  return (
    <div className="sideBarHolder">
      <div className="sideBarImg">
        <img className="sideLogo" src={logo} alt="" />
      </div>

      <div className="holdDashboardFonts">
        <div className="upFonts">
          <NavLink 
            className={({isActive}) =>
            isActive ? "HeaderActive" : "HeaderNotActive"
          }
          to={"/dashboard/home"}>
            <div className="innerF">
              {/* <li className="dashLI">  */}
              <AiFillHome /> 
                Dashboard 
                {/* </li> */}
            </div>
          </NavLink>

          <NavLink  
            className={({isActive}) => 
            isActive ? "HeaderActive" : "HeaderNotActive"
            }
          to={"/dashboard/expense-track"}>
            <div className="innerF">
              <GiTakeMyMoney />
              {/* <li className="dashLI"> */}
                 Expense Tracker 
                 {/* </li> */}
            </div>
          </NavLink>

          <NavLink
           className={({isActive}) => 
          isActive ? "HeaderActive" : "HeaderNotActive"
          }
          to={"/dashboard/budget-planner"}>
            <div className="innerF">
              <GiPiggyBank/>
              {/* <li className="dashLI">  */}
                Budget Planner
                {/* </li> */}
            </div>
          </NavLink>

          <NavLink 
            className={({isActive}) =>
             isActive ? "HeaderActive" : "HeaderNotActive"
            }
          to={"/dashboard/debt-manager"}>
            <div className="innerF">
              <GiPiggyBank />
              {/* <li className="dashLI">  */}
                Debt Manager 
                {/* </li> */}
            </div>
          </NavLink>

          <NavLink 
           className={({isActive}) =>
            isActive ? "HeaderActive" : "HeaderNotActive"
          }
          to={"/dashboard/report"}>
            <div className="innerF">
              <GiReceiveMoney />
              {/* <li className="dashLI">  */}
                Report Insights 
                {/* </li> */}
            </div>
          </NavLink>

          <NavLink 
            className={({isActive}) => 
              isActive ? "HeaderActive" : "HeaderNotActive"
            }
          to={"/dashboard/settings"}>
            <div className="innerF">
              <IoSettingsSharp />
              {/* <li className="dashLI">  */}
                Settings 
                {/* </li> */}
            </div>
          </NavLink>
        </div>

        <div className="downFonts">
          <NavLink 
            className={({isActive}) =>
            isActive ? "HeaderActive" : "HeaderNotActive"
            }
            to={"/dashboard/help"}
          >
            <div className="innerF">
              <TbHelpTriangle />
              {/* <li className="dashLI">  */}
                Help 
                {/* </li> */}
            </div>
          </NavLink>

          <NavLink
          className="HeaderNotActive"
            // className={({isActive}) =>
            // isActive ? "HeaderActive" : "HeaderNotActive"
            // } 
            onClick={handleLogout}
          >
            <div className="innerF">
              <AiOutlinePoweroff />
              {/* <li className="dashLI">  */}
                Log Out
                {/* </li> */}
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
