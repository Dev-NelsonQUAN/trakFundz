import React from "react";
import "./Header.css";
import Logo from "../../../assets/trakFundzLogo.svg";
import { FaArrowDown } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { IoIosArrowDown, IoIosMenu } from "react-icons/io";

const Header = () => {
  const Nav = useNavigate();
  return (
    <div className="headerContainer">
      <div className="headerContainerInner">
        <div className="headerLeft">
          <div className="headerLeftOne">
            <img className="holdLogo" src={Logo} alt="TrakFundz Logo" />
          </div>

          <div className="headerLeftTwo">
            <ul>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "HeaderIsActive" : "HeaderNotActive"
                }
              >
                <li>
                  {" "}
                  Features <IoIosArrowDown />
                </li>
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  isActive ? "HeaderIsActive" : "HeaderNotActive"
                }
              >
                <li> Why TrakFundz </li>
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  isActive ? "HeaderIsActive" : "HeaderNotActive"
                }
              >
                <li> Pricing </li>
              </NavLink>
            </ul>
          </div>
        </div>

        <div className="headerRight">
          <button className="landingPLoginBtn" onClick={() => Nav("/login")}>
            {" "}
            Log In{" "}
          </button>
          <button className="signupBtn" onClick={() => Nav("/Signup")}>
            {" "}
            Get Started{" "}
          </button>

        </div>
          <div className="menu">
              <IoIosMenu/>
          </div>
      </div>
    </div>
  );
};

export default Header;
