import React, { useState } from "react";
import "./Header.css";
import Logo from "../../../assets/trakFundzLogo.svg";
import { FaArrowDown } from "react-icons/fa";
import { RiMenuFold3Fill } from "react-icons/ri";
import { RiMenuFold4Fill } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";
import { IoIosArrowDown, IoIosMenu } from "react-icons/io";
import { IoMenu, IoMenuSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  const Nav = useNavigate();
  const [showMenuItems, setshowMenuItems] = useState(false);
  const [showIcons, setShowIcons] = useState(false);

  const showFirst = () => {
    setshowMenuItems(true);
    setShowIcons(true);
  };
  const showSecond = () => {
    setshowMenuItems(false);
    setShowIcons(false);
  };

  return (
    <div className="headerContainer">
      <div className="headerContainerInner">
        <div className="headerLeft">
          <div className="headerLeftOne" onClick={() => Nav("/")}>
            <img className="holdLogo" src={Logo} alt="TrakFundz Logo" />
          </div>

          <div className="headerLeftTwo">
            <ul>
              <NavLink
                className={({ beActive }) =>
                  beActive ? "HeaderIsActive" : "HeaderNotActive"
                }
              >
                <li className="headerTop">
                  {" "}
                  Features <IoIosArrowDown />
                </li>
              </NavLink>

              <NavLink to="/aboutUs"
                className={({ isActive }) =>
                  isActive ? "HeaderIsActive" : "HeaderNotActive"
                }
              >
                <li> Why TrakFundz  </li>

              </NavLink>

              <NavLink
                className={({ beActive }) =>
                  beActive ? "HeaderIsActive" : "HeaderNotActive"
                }
              >
                <li className="headerTop">  Pricing </li>
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
          {showIcons ? (
            <RiMenuFold3Fill size={30} onClick={showSecond} />
          ) : (
            <RiMenuFold4Fill size={30} onClick={showFirst} />
          )}
        </div>
      </div>

          {showMenuItems ? (
            <div className="holdBurger"
              data-aos="fade-left"
              style={{ position: "absolute", top: "100%", height: "40vh"}}
            >
              <Link 
              className="Link"
              // to="hero"
              offset={-500} smooth={true} duration={500}>
                <li className="burgerTxt"> Home</li>
              </Link>
              <Link 
              // to="about" 
              offset={470} smooth={true} duration={500}>
                <li className="burgerTxt">Why TrakFundz?</li>
              </Link>
              <Link 
              // to="service" 
              offset={-100} smooth={true} duration={500}>
                <li className="burgerTxt">Pricing</li>
              </Link>
              <li className="burgerTxt" onClick={() => Nav("/signup")}> Sign Up </li>
              <li className="burgerTxt" onClick={() => Nav("/login")}>Login</li>
            </div>
          ) : null}
    </div>
  );
};

export default Header;
