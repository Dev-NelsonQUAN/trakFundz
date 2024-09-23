import "./SideBar.css";
import logo from "../../../assets/trakFundzLogoReal.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { GiTakeMyMoney, GiPiggyBank, GiReceiveMoney } from "react-icons/gi";
import { IoSettingsSharp } from "react-icons/io5";
import { TbHelpTriangle } from "react-icons/tb";
import { AiOutlinePoweroff } from "react-icons/ai";

const SideBar = ({ setShowSideBar }) => {
  const Nav = useNavigate();

  const handleLogout = () => {
    Nav("/login");
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
  };

  const handleNavigation = (path) => {
    Nav(path);
    if (setShowSideBar) {
      setShowSideBar(false);
    }
  };

  return (
    <div className="sideBarHolder">
      <div className="sideBarImg" onClick={() => handleNavigation("/")}>
        <img className="sideLogo" src={logo} alt="" />
      </div>

      <div className="holdDashboardFonts">
        <div className="upFonts">
          <NavLink
            className={({ isActive }) =>
              isActive ? "HeaderActive" : "HeaderNotActive"
            }
            to="/dashboard/home"
            onClick={() => handleNavigation("/dashboard/home")}
          >
            <div className="innerF">
              <AiFillHome />
              Dashboard
            </div>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "HeaderActive" : "HeaderNotActive"
            }
            to="/dashboard/expense-track"
            onClick={() => handleNavigation("/dashboard/expense-track")}
          >
            <div className="innerF">
              <GiTakeMyMoney />
              Expense Tracker
            </div>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "HeaderActive" : "HeaderNotActive"
            }
            to="/dashboard/budget-planner"
            onClick={() => handleNavigation("/dashboard/budget-planner")}
          >
            <div className="innerF">
              <GiPiggyBank />
              Budget Planner
            </div>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "HeaderActive" : "HeaderNotActive"
            }
            to="/dashboard/debt-manager"
            onClick={() => handleNavigation("/dashboard/debt-manager")}
          >
            <div className="innerF">
              <GiPiggyBank />
              Debt Manager
            </div>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "HeaderActive" : "HeaderNotActive"
            }
            to="/dashboard/report"
            onClick={() => handleNavigation("/dashboard/report")}
          >
            <div className="innerF">
              <GiReceiveMoney />
              Report Insights
            </div>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "HeaderActive" : "HeaderNotActive"
            }
            to="/dashboard/settings"
            onClick={() => handleNavigation("/dashboard/settings")}
          >
            <div className="innerF">
              <IoSettingsSharp />
              Settings
            </div>
          </NavLink>
        </div>

        <div className="downFonts">
          <NavLink
            className={({ isActive }) =>
              isActive ? "HeaderActive" : "HeaderNotActive"
            }
            to="/dashboard/help"
            onClick={() => handleNavigation("/dashboard/help")}
          >
            <div className="innerF">
              <TbHelpTriangle />
              Help
            </div>
          </NavLink>

          <div
            className="HeaderNotActive"
            onClick={handleLogout}
          >
            <div className="innerF">
              <AiOutlinePoweroff />
              Log Out
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
