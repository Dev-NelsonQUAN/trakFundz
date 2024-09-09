import React from "react";
import "./HeroPageBottom.css";
import downSmallPolygon from "../../../assets/downSmallPoly.svg";
import moneyCalculator from "../../../assets/moneyCalculator.svg";
import homePageIncome from "../../../assets/homePageIncome.svg";
import analysisSvg from "../../../assets/analysisSvg.svg";
import bigPolygon from "../../../assets/bigPolygon.svg";

const HeroPageBottom = () => {
  return (
    <div className="HeroBottomHolder">
      <div className="HeroBottonmInner">
        <div className="HeroBottomTop">
          <h2 className="heroH2">
            {" "}
            Take Charge of your <span className="expense">
              {" "}
              expenses.{" "}
            </span>{" "}
          </h2>
          <p className="managing">
            {" "}
            Managing your finances doesn't have to be overwhelming.{" "}
          </p>
        </div>

        <div className="heroBottomDown">
          <div className="heroBottomLeft">
            <div className="circleOne"></div>
            <div className="circleTwo"></div>
            <img
              className="downSmallPolygon"
              src={downSmallPolygon}
              alt="A small skewed Polygon"
            />
            <div className="holdBox">
              <div className="topBox">
                <div className="topBoxInner">
                  <div className="holdCalcultorImg">
                    <img
                      className="moneyCaculator"
                      src={moneyCalculator}
                      alt="Currency, cart and Calculator"
                    />
                  </div>

                  <p className="trakFundzTracking">
                    {" "}
                    Trakfundz makes tracking your spending easy and efficient,
                    helping you identify areas where you can save.{" "}
                  </p>
                </div>
              </div>
              <div className="txtAndBtn">
                <div className="txtAndBtnInner">
                  <p className="signUpTrack">
                    {" "}
                    Sign up to track your expenses and get a clear picture of
                    where your money is going.{" "}
                  </p>
                  <button className="signUpNowBtn"> Sign Up Now </button>
                </div>
              </div>
            </div>

            <img
              className="homePageIncome"
              src={homePageIncome}
              alt="An income inputs and button image"
            />
            <img
              className="analysisSvg"
              src={analysisSvg}
              alt="An analysis chart image"
            />
          </div>

          <div className="heroBottomRight">
            <img
              className="bigPolygon"
              src={bigPolygon}
              alt="A big Polygon with 1px white border radius"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPageBottom;
