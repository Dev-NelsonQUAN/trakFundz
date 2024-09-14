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
              <div className="userDashboardTopOneInner">
                <div className="userDashboardTopOneUp">
                  <p className="userDashAmount"> Available Balance </p>
                  <p className="userPrice"> ₦ 0.00 </p>
                </div>

                <div className="userDashboardTopOneDown">
                  <div className="uDashTopOneDownUp">
                    <nav className="greenUDTargetReached"> </nav>
                    <nav className="redUDTargetReached"> </nav>
                  </div>

                  <h2 className="uDashExpTrack"> Expense Tracker </h2>
                </div>
              </div>
            </div>

            <div className="userDashboardTopTwo">
              <div className="userDashboardTopTwoInner">
                <div className="userDashboardTopTwoUp">
                  <p className="userDashAmount"> Total Budget Reached </p>
                  <p className="userTwoPrice"> ₦ 0.00 </p>
                </div>

                <div className="userDashboardTopTwoDown">
                  <div className="uDashTopTwoDownUp">
                    <nav className="greenUDTargetReached"> </nav>
                    <nav className="redUDTargetReached"> </nav>
                  </div>

                  <h2 className="uDashExpTrack"> Budget Planner </h2>
                </div>
              </div>
            </div>

            <div className="uDTopThree">
              <div className="userDashboardTopThreeInner">
                <div className="userDashboardTopThreeUp">
                  <p className="userDashThreemount"> Total Debt Paid </p>
                  <p className="userThreePrice"> ₦ 0.00 </p>
                </div>

                <div className="userDashboardTopThreeDown">
                  <div className="uDashTopTwoThreeUDownUp">
                    <nav className="greenUDTargetThreeReached"> </nav>
                    <nav className="redUDTargetThreeReached"> </nav>
                  </div>

                  <h2 className="uDashThreeExpTrack"> Debt Manager </h2>
                </div>
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

            <div className="uDBottomCenterDown">
              <div className="uDBottomCenterDownInner"></div>
            </div>
          </div>
        </div>

        <div className="uDRight">
          <div className="uDTransaction">
            <h6 className="uDTransactionHistory"> Transaction History </h6>
            <div className="uDTransactionNoAct">
              <p className="noActivity"> No activity </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserBoard;
