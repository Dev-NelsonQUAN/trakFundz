import "./DebtLanding.css";
import { useNavigate } from "react-router-dom";
import debtPoly from "../../../assets/debtPoly.svg"
import loanBoard from "../../../assets/loanBoard.svg"
import imageBlur from "../../../assets/image blur.svg"

const DebtLanding = () => {
  const Nav = useNavigate();

  return (
    <div className="DebtLandingContainer">
      <div className="debtLandingInner">
        <div className="DebtLandingTop">
          <h1 className="debt">
            <span className="dept">Debt</span> Management
            <br /> Made Easy.
          </h1>
          <p className="stayOrganized">
            Stay organized and pay off debt with ease while
            <br /> staying on track with your goals.
          </p>
        </div>

        <div className="debtLandingBottom">
          <div className="debtLandingleft">
            <img
              className="debtManagerDiv"
              // src={loanBoard}
                  src={imageBlur}
              alt="Debt Manager Div"
            />
          </div>

          <div className="debtLandingRight">
            <div className="deptLandingTrack">
              <p className="trackYourLoan">
                Track your loans, debt balances, and repayment
                schedules with Trakfundz so as to help you pay
                down debt more effectively and plan for a
                debt-free future.
              </p>
            </div>
            <div className="deptLandingCreate">
              <p className="debtCreate">
                Create an account now to take the first step toward
                <br />a debt-free future.
              </p>
              <button
                className="debtCreateBtn"
                onClick={() => Nav("/signup")}
              >
                Create Account
              </button>
            <img className="debtPoly" src={debtPoly} alt="Skewed Polygon" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DebtLanding;
