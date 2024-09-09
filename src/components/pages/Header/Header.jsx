import React from "react";
import "./Header.css";
import Logo from "../../../assets/trakFundzLogo.svg";
import { FaArrowDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

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
              <li>
                {" "}
                Features <IoIosArrowDown />
              </li>
              <li> Why TrakFundz </li>
              <li> Pricing </li>
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
      </div>
    </div>
  );
};

export default Header;
