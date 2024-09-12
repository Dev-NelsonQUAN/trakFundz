import React from "react";
import "./ReportInsights.css";
import { FaCirclePlus } from "react-icons/fa6";

const ReportInsights = () => {
  return (
    <div className="reportInsights">
      <div className="reportInsightsInner">
        <div className="reportInsightsLeft">
          <div className="reportInsightsLeftTop">
            <div className="repoInsightTopOne">
              <p className="repoDebt"> Total debt amount </p>
              <p className="repoPrice"> ₦ 0.00 </p>
            </div>

            <div className="repoTopTwo">
              <div className="repoTopTwoUp">
                <p className="repoAmountReached"> Total debt paid </p>
                <p className="repoAmountPrice"> ₦ 0.00 </p>
              </div>

              <div className="repoTopTwoDown">
                <div className="repoTopTwoDownTop">
                  <div className="repoTopTwoDownLeft">
                    <nav className="greenRPTargetReached"> </nav>
                    <p className="rPPaid">Loan Paid </p>
                  </div>
                  <div className="rPTopTwoDownRight">
                    <nav className="redRPTargetReached"> </nav>
                    <p className="rPBalance">Loan balance</p>
                  </div>
                </div>

                <div className="rPTopTwoDownBottom">
                  <p className="rPNoRec"> No Record Yet </p>
                </div>
              </div>
            </div>

            <div className="repoTopThree">
              <div className="repoTopThreeInner">
                <FaCirclePlus className="repoIncomeCirclePlus" />
                <h5 className="repoAddIncome"> Add Income </h5>
              </div>
            </div>
          </div>

          <div className="repoMiddle">
            <div className="repoMiddleTop">
              <h3 className="repoMoneyFlow"> Money Flow </h3>
              <div className="assignLoan">
                <div className="repoPurpleRound"> </div>
                <p className="repoIncomeText"> Income </p>
                <div className="repoLightPurleRound"></div>
                <p className="repoExpenseText"> Expense </p>
              </div>
            </div>

            <div className="repoCenterDown">
                <div className="repoCenterDownInner">
                    
                </div>
            </div>
          </div>

          <div className="repoBottom">
            <div className="repoBottomTop">
              <h3 className="repoExpense"> Expense Analysis </h3>
              <div className="assignLoanBottom">
                <div className="repoBottomPurpleRound"> </div>
                <p className="repoBottomIncomeText"> Income </p>
                <div className="repoBottomLightPurleRound"></div>
                <p className="repoBottomExpenseText"> Expense </p>
              </div>
            </div>

            <div className="repoBottomCenterDown">
                <div className="repoBottomCenterDownInner">
                    
                </div>
            </div>
          </div>



        </div>

        <div className="repoRight">
          <div className="repoTransaction">
            <h6 className="repoTransactionHistory"> Transaction History </h6>
            <div className="repoTransactionNoAct">
              <p className="noActivity"> No activity </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportInsights;
