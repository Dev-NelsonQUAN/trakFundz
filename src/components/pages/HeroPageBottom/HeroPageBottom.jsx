import React from "react";
import "./HeroPageBottom.css";
import downSmallPolygon from "../../../assets/downSmallPoly.svg";
import moneyCalculator from "../../../assets/moneyCalculator.svg";
import homePageIncome from "../../../assets/homePageIncome.svg";
import analysisSvg from "../../../assets/analysisSvg.svg";
import bigPolygon from "../../../assets/bigPolygon.svg";
// import Cal from "../../../assets/Cal.png"

const HeroPageBottom = () => {
  return (
    <div className="HeroBottomHolder">
      <div className="HeroBottonmInner">
        <div className="HeroBottomTop">
          <h2 className="heroH2">
            Take Charge of <span className="newSpan">your <span className="expense"> expenses.</span></span></h2>
          <p className="managing">
            Managing your finances doesn't have to be overwhelming.{" "}
          </p>
        </div>
        {/* <img src={Cal} alt="" /> */}
      </div>
    </div>
  );
};

export default HeroPageBottom;
