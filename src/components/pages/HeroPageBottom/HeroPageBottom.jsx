import "./HeroPageBottom.css";
// import downSmallPolygon from "../../../assets/downSmallPoly.svg";
// import moneyCalculator from "../../../assets/moneyCalculator.svg";
// import homePageIncome from "../../../assets/homePageIncome.svg";
// import analysisSvg from "../../../assets/analysisSvg.svg";
import bigPolygon from "../../../assets/bigPolygon.svg";
// import calculatorMoney from "../../../assets/realCalculator.svg";
// import speechBubble from "../../../assets/speechBubble.svg";
import { useNavigate } from "react-router-dom";
import expenseTrak from "../../../assets/expenseTrak.svg"


const HeroPageBottom = () => {
  const Nav = useNavigate();

  return (
    <div className="HeroBottomHolder">
      <div className="HeroBottonmInner">
        <div className="HeroBottomTop">

          <div className="holdExpenses">
            <h2 className="heroH2"> Take Charge of</h2>

            <h2 className="heroH2below">
              your <span className="expense"> expenses. </span>{" "}
            </h2>
          </div>
          <p className="managing">
            Managing your finances doesn't have to be overwhelming.{" "}
          </p>
        </div>

        <div className="heroBottomDown">
          <div className="heroBottomLeft">
            <img className="heroBottomImg" src={expenseTrak} alt="" />
            {/* <div className="circleOne"></div>
            <div className="circleTwo"></div> */}
            {/* <img
              className="downSmallPolygon"
              src={downSmallPolygon}
              alt="A small skewed Polygon"
            /> */}

            {/* <div className="holdBox"> */}
              {/* <div className="topBox"> */}
                {/* <div className="topBoxInner"> */}
                  {/* <div className="holdCalcultorImg">
                    <img
                      className="moneyCaculator"
                      src={calculatorMoney}
                      alt="Currency, cart and Calculator"
                    />
                  </div> */}

                  {/* <p className="trakFundzTracking">
                    {" "}
                    Trakfundz makes tracking your spending
                    <br /> easy and efficient,
                    helping you identify
                    <br />areas where you can save.{" "}
                  </p> */}
                  {/* <img
                    className="speechBubble"
                    src={speechBubble}
                    alt="Speech Bubble"
                  /> */}
                {/* </div> */}
              {/* </div> */}

              <div className="txtAndBtn">
                <div className="txtAndBtnInner">
                  <p className="signUpTrack">
                    {" "}
                    Sign up to track your expenses and get a clear
                    picture of where your money is going.{" "}
                  </p>
                  <button className="signUpNowBtn" onClick={() => Nav("/signup")}>
                    {" "}
                    Sign Up Now{" "}
                  </button>
                </div>
              </div>
            </div>
{/* 
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
          </div> */}
{/* 
          {/* <div className="heroBottomRight"> */}
            <img
              className="bigPolygon"
              src={bigPolygon}
              alt="A big Polygon with 1px white border radius"
            />
          </div> 
        {/* </div> */}
      </div>
    </div>
  );
};

export default HeroPageBottom;