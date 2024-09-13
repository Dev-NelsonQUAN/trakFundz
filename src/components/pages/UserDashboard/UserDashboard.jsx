import React from "react";
import "./UserDashboard.css";
import UserDashboardMap from "../UserDashboardMap/UserDashboardMap";
import { IoArrowDown } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import DashboardRightMap from "../DashboardRightMap/DashboardRightMap";
import { FaCirclePlus } from "react-icons/fa6";

const UserBoard = () => {
  return (
    <div className="userdashboard">
      <div className="userDashboardInner">
        <div className="userDashboardLeft">
          <div className="userDashboardLeftTop">
            <div className="userDashboardTopOne">
              <p className="userDashAmount"> Total debt amount </p>
              <p className="userPrice"> ₦ 0.00 </p>
            </div>

            <div className="userDashboardLeftTwo">
              <div className="uDTopTwoUp">
                <p className="userDashAmountReached"> Total debt paid </p>
                <p className="userDashAmountPrice"> ₦ 0.00 </p>
              </div>

              <div className="uDTwoDown">
                <div className="uDTwoDownTop">
                  <div className="uDTopTwoDownLeft">
                    <nav className="greenUDTargetReached"> </nav>
                    <p className="uDPaid">Loan Paid </p>
                  </div>
                  <div className="uDTopTwoDownRight">
                    <nav className="redUDTargetReached"> </nav>
                    <p className="uDBalance">Loan balance</p>
                  </div>
                </div>

                <div className="uDTopTwoDownBottom">
                  <p className="uDNoRec"> No Record Yet </p>
                </div>
              </div>
            </div>

            <div className="uDTopThree">
              <div className="uDTopThreeInner">
                <FaCirclePlus className="uDIncomeCirclePlus" />
                <h5 className="uDAddIncome"> Add Income </h5>
              </div>
            </div>
          </div>

          <div className="uDMiddle">
            <div className="uDMiddleTop">
              <h3 className="uDMoneyFlow"> Money Flow </h3>
              <div className="uDassignLoan">
                <div className="uDPurpleRound"> </div>
                <p className="uDIncomeText"> Income </p>
                <div className="uDLightPurleRound"></div>
                <p className="uDExpenseText"> Expense </p>
              </div>
            </div>

            <div className="uDCenterDown">
              <div className="uDCenterDownInner"></div>
            </div>
          </div>

          <div className="uDBottom">
            <div className="uDBottomTop">
              <h3 className="uDExpense"> Expense Analysis </h3>
              <div className="uDLoanBottom">
                <div className="uDBottomPurpleRound"> </div>
                <p className="uDBottomIncomeText"> Income </p>
                <div className="uDBottomLightPurleRound"></div>
                <p className="uDBottomExpenseText"> Expense </p>
              </div>
            </div>

            <div className="repoBottomCenterDown">
              <div className="repoBottomCenterDownInner"></div>
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
export default UserBoard;
