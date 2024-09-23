import "./FreeTrial.css";
import masterPoly from "../../../assets/masterTopPoly.svg";
import masterBottomPoly from "../../../assets/masterPolyBottom.svg";
import { useNavigate } from "react-router-dom";

const FreeTrial = () => {
  const Nav = useNavigate()

  return (
    <div className="freeTrialMain">
      <div className="freeTrialMainInner">
        <div className="freeTrialInnerTop">
          <h1 className="ready">
            <img className="masterPoly" src={masterPoly} alt="" />
            Ready to <span className="master"> Master</span>
            <br /> Your Money?
          </h1>
        </div>

        <div className="freeTrialInnerMiddle">
          <div className="oneMonths">
            <div className="oneMonthsInner">
              <div className="oneTop">
                <h1 className="One"> 1 </h1>
                <p className="oneMonth"> MONTH </p>
              </div>

              {/* <div className="oneBottom"> */}
              <p className="oneBottomText">
                {" "}
                ₦900/<span className="months"> Month </span>
              </p>
              {/* </div> */}
            </div>
          </div>

          <div className="twelveMonths">
            <div className="twelveMonthsInner">
              <div className="twelveTop">
                <h1 className="twelve"> 12 </h1>
                <p className="twelveMonth"> MONTHS </p>
              </div>

              {/* <div className="oneBottom"> */}
              <p className="twelveBottomText">
                {" "}
                ₦7,200/<span className="twelvemonths"> Month </span>
              </p>
              {/* </div> */}

              <p className="twelveBottomDownText">
                {" "}
                ₦ 900 / <span className="twelveDownmonths"> Month </span>
              </p>
            </div>
          </div>

          <div className="sixMonths">
            <div className="sixMonthsInner">
              <div className="sixTop">
                <h1 className="six"> 6 </h1>
                <p className="sixMonth"> MONTHS </p>
              </div>

              {/* <div className="oneBottom"> */}
              <p className="sixBottomText">
                {" "}
                ₦5,400/<span className="sixmonths">Month </span>
              </p>
              {/* </div> */}
            </div>
          </div>

          <img className="bottomPoly" src={masterBottomPoly} alt="Polygon" />
          <div className="freeTrialDivUp"> Free Trial </div>
        </div>

        <div className="freeTrialBottom">
          <p className="startThirtyDays">
            {" "}
            Start your 30days free trial now to see how our app can help you
            track expenses,
            <br /> plan your budget, and manage debt effortlessly. No strings
            attached, just
            <br /> smarter financial management and you can cancel anytime.{" "}
          </p>
          <p className="yourPath">
            Your path to better financial health starts here!
          </p>
          <button className="masterFreeBtn"
            onClick={() => Nav ("/signup")}
          > Start Free Trial Now </button>
        </div>
      </div>
    </div>
  );
};

export default FreeTrial;
