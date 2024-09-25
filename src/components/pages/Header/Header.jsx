import { useEffect, useState } from "react";
import "./Header.css";
import Logo from "../../../assets/trakFundzLogo.svg";
import { RiMenuFold3Fill } from "react-icons/ri";
import { RiMenuFold4Fill } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import { IoClose, IoMenu } from "react-icons/io5";
import Aos from "aos";
import "aos/dist/aos.css";

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

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="headerContainer">
      <div className="headerContainerInner">
        <div className="headerLeft">
          {/* <Link> */}
          <div className="headerLeftOne" onClick={() => Nav("/")}>
            <img className="holdLogo" src={Logo} alt="TrakFundz Logo" />
          </div>
          {/* </Link> */}

          <div className="headerLeftTwo">
            <ul>
              {/* <NavLink
                className={({ beActive }) =>
                  beActive ? "HeaderIsActive" : "HeaderNotActive"
                }
              >
                <li className="headerTop">
                  {" "}
                  Features <IoIosArrowDown />
                </li>
              </NavLink> */}

              <NavLink
                to="/aboutUs"
                className={({ isActive }) =>
                  isActive ? "HeaderIsActive" : "HeaderNotActive"
                }
              >
                <li> Why TrakFundz </li>
              </NavLink>

              <Link
                to="pricing"
                offset={3}
                smooth={true}
                duration={500}
                className={({ beActive }) =>
                  beActive ? "HeaderIsActive" : "HeaderNotActive"
                }
              >
                <li className="headerTop"> Pricing </li>
              </Link>
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
            <IoClose
              style={{ color: "white" }}
              size={30}
              onClick={showSecond}
            />
          ) : (
            <IoMenu style={{ color: "white" }} size={30} onClick={showFirst} />
          )}
        </div>
      </div>

      {showMenuItems ? (
        <div
          className="holdBurger"
          data-aos="fade-left"
          style={{ position: "absolute", top: "100%", height: "30vh", fontFamily:"Helvetica" }}
        >

          {/* <NavLink onClick={() => Nav("/")}>
          <Link
            className="Link"
            to="home"
            offset={-500}
            smooth={true}
            duration={500}
          >
            <li className="burgerTxt"> Home</li>
          </Link>
          </NavLink> */}

          <NavLink
          to="/aboutus"
          style={{textDecoration: "none"}}
            // to="about"
            // offset={470}
            // smooth={true}
            // duration={500}
          >
            <li className="burgerTxt" sty>Why TrakFundz?</li>
          </NavLink>
          <Link
            to="pricing"
            offset={4}
            smooth={true}
            duration={500}
          >
            <li className="burgerTxt">Pricing</li>
          </Link>
          <li className="burgerTxt" onClick={() => Nav("/signup")}>
            {" "}
            Sign Up{" "}
          </li>
          <li className="burgerTxt" onClick={() => Nav("/login")}>
            Login
          </li>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
