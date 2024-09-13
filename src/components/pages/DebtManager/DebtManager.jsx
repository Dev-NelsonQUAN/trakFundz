import React from "react";
import "./DebtManager.css";
import { FaCirclePlus } from "react-icons/fa6";

const DebtManager = () => {
  return (
    <div className="debtManagerDashboard">
      <div className="debtManagerDashInner">
        <div className="debtManagerDashLeft">
          <div className="debtManagerLeftTop">
            <div className="debtManagerTopOne">
              <p className="totaldebt"> Total debt amount </p>
              <p className="debtGoalPrice"> ₦ 0.00 </p>
            </div>

            <div className="debtManTopTwo">
              <div className="debtManTopTwoUp">
                <p className="totalAmountReached"> Total debt paid </p>
                <p className="totalAmountPrice"> ₦ 0.00 </p>
              </div>

              <div className="debtManTopTwoDown">
                <div className="debtManTopTwoDownTop">
                  <div className="debtManTopTwoDownLeft">
                    <nav className="greenDMTargetReached"> </nav>
                    <p className="dMLoanPaid">Loan Paid </p>
                  </div>
                  <div className="debtManTopTwoDownRight">
                    <nav className="redDMTargetReached"> </nav>
                    <p className="dMLoanBalance">Loan balance</p>
                  </div>
                </div>

                <div className="dManTopTwoDownBottom">
                  <p className="debtManNoRec"> No Record Yet </p>
                </div>
              </div>
            </div>
          </div>

          <div className="debtManagerMiddle">
            <div className="debtManagerMiddleTop">
              <h3 className="loanPayment"> Loan Payment </h3>
              <p className="assignLoan">
                (Assign loan to know how much to pay back overtime.)
              </p>
            </div>

            <div className="debtManMiddleBottomCenter">
              <div className="debtManMidBottomDownTop">
                <div className="debtPlanMidBottomDownTopLeft">
                  <h6 className="loan"> Loan </h6>
                </div>

                <div className="debtPlanMidBottomDownTopRight">
                  <h6 className="debtManAmount"> Target </h6>
                  <h6 className="debtManDuration"> Duration </h6>
                </div>
              </div>

              <div className="debtManMidshowInputs">
                <div className="debtManMidshowInputInner">
                  <div className="debtManMidShowInputLeft">
                    <input className="debtLoanInput" type="text" />
                  </div>

                  <div className="debtManMidShowInputRight">
                    <input className="debtManAmountInput" type="text" />
                    <input className="debtManDurationInput" type="text" />
                  </div>
                </div>
              </div>

              <div className="debtManAasignPlusBtnDiv">
                <div className="debtManAddPlus">
                  <FaCirclePlus className="debtManCirclePlus" />
                </div>

                <div className="debtManAssignBtn">
                  <button className="assignLoanBtn"> Assign Loan </button>
                </div>
              </div>

              {/* <div className="bPlannerMidBottomDownRight"></div> */}
            </div>
          </div>

          <div className="debtManBottom">
            <div className="debtManBottomTop">
              <div className="debtManBottomTopLeft">
                <h3 className="debtManBottomLoan"> Loan </h3>
                <p className="debtManBottomBudget">
                  (Input amount assigned for each budget.)
                </p>
              </div>

              <div className="debtManLoanBottomTopRight">
                <button className="debtManStatusBottomBtn"> Status </button>
              </div>
            </div>

            <div className="debtManBottomCenter">
              <div className="debtManMidBottomCenterTop">
                <div className="debtManMidBottomCenterTopLeft">
                  <h6 className="debtManLoan"> Loan </h6>
                </div>

                <div className="debtManMidBottomCenterTopRight">
                  <h6 className="debtPlanBottomAmount"> Amount </h6>
                </div>
              </div>

              <div className="debtManBottomMidshowInputs">
                <div className="debtManMidBottomshowInputInner">
                  <div className="debtManMidBottomShowInputLeft">
                    <input className="debtManLoanBottomInput" type="text" />
                  </div>

                  <div className="dMMidSBottomInputRight">
                    <input className="dMMidBottomInput" type="text" />
                  </div>
                </div>
              </div>

              <div className="dMLoanBottomPlusDiv">
                <div className="dMLoanBottomAddPlus">
                  <FaCirclePlus className="dMloanBottomCirclePlus" />
                </div>
              </div>

              {/* <div className="bPlannerMidBottomDownRight"></div> */}
            </div>
          </div>
        </div>

        <div className="debtManagerRight">
          {/* <div className="budgetPlannerRightInner"> */}
          <div className="debtMangerBudget">
            <h6 className="dMRightName">Budget</h6>
            <div className="debtManHold">
              <p className="noActivity">No Activity </p>
            </div>
          </div>

          <div className="debtManTransaction">
            <h6 className="budgetTransactionHistory"> Transaction History </h6>
            <div className="bugetTransactionNoAct">
              <p className="noActivity"> No activity </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DebtManager;
