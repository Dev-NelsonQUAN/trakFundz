// a~import React from "react";
import "./HeroPageMiddle.css";
// import iPhone from "../../../assets/iPhone .svg";
import PolygonRight from "../../../assets/PolygonRight.svg";
import heroSmallPolygon from "../../../assets/heroMiddleSmallpolygon.svg";
import iOSLatest from "../../../assets/iOSLatest.svg";
import { useNavigate } from "react-router-dom";

const HeroPageMiddle = () => {
  const Nav = useNavigate();

  return (
    <div className="heroPMid">
      <div className="heroMPidInner">
        <div className="polygon11">
          <img className="PolyR" src={PolygonRight} alt="Polygon" />
        </div>

        <div className="heroPMidCenter">
          <div className="heroPMidTop">
            <h2 className="effortTxt">
              Effortless <span className="budget">Budgeting</span> <br />
              Starts Here!
            </h2>
            <p className="createPTxt">
              Create and manage customized budgets based on your
              <br /> spending habits and financial goals
            </p>
          </div>

          <div className="heroPMidBottom">
            <p className="trakFundzBudgeting">
              TrakFundz budgeting tools provides insights and recommendations to
              help you stay on track and achieve your financial objectives
            </p>

            <div className="signUpTxtDiv">
              <div className="signUpTxtDivInner">
                <p className="signUpEffortlessly">
                  Sign up now to begin planning and managing
                  <br /> your budget effortlessly.
                </p>

                <button
                  className="getStartedCenterBtn"
                  onClick={() => Nav("/signup")}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div> 

          <div className="smallPolyCentre">
            <img className="polyRightSmall" src={heroSmallPolygon} alt="" />
          </div>
        </div>

        <div className="heroMidRight">
          <div className="holdMidIOS">
            <img className="iOSLatest" src={iOSLatest} alt="phone" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPageMiddle;
