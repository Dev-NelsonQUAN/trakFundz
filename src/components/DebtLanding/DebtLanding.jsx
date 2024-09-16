import React from "react";
import "./DebtLanding.css";

const DebtLanding = () => {
  return (
    <div className="DebtLandingContainer">
      <div className="debtLandingInner">
        <div className="DebtLandingTop">
          <div className="debtLandEasy">
            <h1 className="debt">
              <span className="dept">Debt</span> Management.
              <br /> Made Easy
            </h1>
            <p className="stayOrganized">
              Stay organized and pay off debt with ease while staying on track
              with your goals.
            </p>
          </div>
          <div className="deptLandingTrack">
            <p className="trackYourLoan">
              Track your loans, debt balances, and repayment schedules with
              Trakfundz so as to help you pay down debt more effectively and
              plan for a debt-free future.
            </p>
          </div>
          <div className="deptLandingCreate">
            <p className="debbtCreate">
              Create an account now to take the first step toward a debt-free
              future.
            </p>
            <button className="debtCreateBtn">Create Account</button>
          </div>
        </div>

        <div className="debtLandingBottom">

        </div>
      </div>
    </div>
  );
};

export default DebtLanding;
