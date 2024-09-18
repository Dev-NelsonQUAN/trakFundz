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
                  <p className="userDashAmount"> Available balance </p>
                  <p className="userPrice"> ₦ 0.00 </p>
                </div>

                <div className="userDashboardTopOneDown">
                  <div className="uDashTopOneDownUp">
                    <nav className="greenUDTargetReached"> </nav>
                    <nav className="redUDTargetReached"> </nav>
                  </div>

                  <p className="uDashBTrack"> Expense Tracker </p>
                </div>
              </div>
            </div>

            <div className="userDashboardTopTwo">
              <div className="userDashboardTopTwoInner">
                <div className="userDashboardTopTwoUp">
                  <p className="userDashAmounTwo"> Total budget reached </p>
                  <p className="userTwoPrice"> ₦ 0.00 </p>
                </div>

                <div className="userDashboardTopTwoDown">
                  <div className="uDashTopTwoDownUp">
                    <nav className="greenUDTargetReached"> </nav>
                    <nav className="redUDTargetReached"> </nav>
                  </div>

                  <p className="uDashBudGTrack"> Budget Planner </p>
                </div>
              </div>
            </div>

            <div className="uDTopThree">
              <div className="userDashboardTopThreeInner">
                <div className="userDashboardTopThreeUp">
                  <p className="userDashThreeAmount"> Total debt paid </p>
                  <p className="userThreePrice"> ₦ 0.00 </p>
                </div>

                <div className="userDashboardTopThreeDown">
                  <div className="uDashTopTwoThreeUDownUp">
                    <nav className="greenUDTargetThreeReached"> </nav>
                    <nav className="redUDTargetThreeReached"> </nav>
                  </div>

                  <p className="uDashThreeDebtTrack"> Debt Manager </p>
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
              <h3 className="uDExpense"> Recent transaction </h3>
              <div className="uDLoanBottom">
                <div className="uDBottomPurpleRound"> </div>
                <p className="uDBottomIncomeText"> Income </p>
                <div className="uDBottomLightPurleRound"></div>
                <p className="uDBottomExpenseText"> Expense </p>
              </div>
            </div>

            <div className="uDBottomCenterDown">
              <div className="uDBottomCenterDownInner">
                <div className="uDashBottomcenterDownTop">
                  <p className="uDBCDTFont"> Date </p>
                  <p className="uDBCDTFont"> Amount </p>
                  <p className="uDBCDTFont"> Description </p>
                  <p className="uDBCDTFont"> Expense </p>
                </div>

                <div className="uDashBottomcenterDownList">
                  <p className="uDBCDTFontList"> 1/17/24 </p>
                  <p className="uDBCDTFontList"> ₦12,000 </p>
                  <p className="uDBCDTFontList"> The Place </p>
                  <p className="uDBCDTFontList"> food </p>
                </div>

                <div className="uDashBottomcenterDownTop">
                  <p className="uDBCDTFontList"> Date </p>
                  <p className="uDBCDTFontList"> ₦2,000 </p>
                  <p className="uDBCDTFontList"> Airtel Data </p>
                  <p className="uDBCDTFontList"> Internet Data </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="uDRight">
          <div className="uDTransaction">
            <h6 className="uDTransactionHistory"> Expense </h6>
            <div className="uDTransactionNoAct">
              <p className="totAmountSPent"> Total amount spent </p>
              <h6 className="theAmount"> ₦ 40, 500 </h6>
              <div className="uRighTopTwoThreeUDownUp">
                <nav className="greenUDTargetThreeReached"> </nav>
                <p className="uRightInc"> Income </p>
                <nav className="redUDTargetThreeReached"> </nav>
                <p className="uRightExP"> Expense </p>
              </div>
              <p className="amountAnalys">
                {" "}
                You have spent ₦ 15, 000
                <br /> compared to last week
              </p>
              {/* <p className="noActivity"> No activity </p> */}
            </div>
          </div>

          <div className="uDTransTwo">
            <h6 className="uDTransTwoBudget"> Budget </h6>
            <div className="uDTransactionNoActTwo">
              <div className="uDTransProgressOne">
                <div className="uDTransProgressOneTop">
                <p className="leftItem"> iPhone 15 Promax </p>
                <p className="rightItem"> ₦ 15,0000 </p>
                </div>

                <div className="uDTransProgressiveOne">
                  
                </div>
              </div>

              <div className="uDTransProgressTwo">
                <div className="uDTransProgressTwoTop">
                <p className="leftItem"> Modern duplex aparte </p>
                <p className="rightItem"> ₦ 2,000,000,000 </p>
                </div>

                <div className="uDTransProgressiveTwo">
                  
                </div>
              </div>

              <div className="uDTransProgressThree">
                <div className="uDTransProgressThreeTop">
                <p className="leftItem"> GLE 450 White </p>
                <p className="rightItem"> ₦ 130,000,000, 000 </p>
                </div>

                <div className="uDTransProgressiveThree">
                  
                </div>
              </div>
 
            </div>
          </div>

          <div className="uDTransThree">
            <h6 className="uDTransThreeBudget"> Budget </h6>
            <div className="uDTransactionNoActThree">
              <div className="uDTransProgressThreeOne">
                <div className="uDTransProgressThreeOneTop">
                <p className="leftItem"> iPhone 16 Promax </p>
                <p className="rightItem"> ₦ 3,00,000,000 </p>
                </div>

                <div className="uDTransProgressiveOne">
                  
                </div>
              </div>

              <div className="uDTransProgressThreeTwo">
                <div className="uDTransProgressThreeTwoTop">
                <p className="leftItem"> Friday Night </p>
                <p className="rightItem"> ₦ 15,000,000 </p>
                </div>

                <div className="uDTransProgressiveTwo">
                  
                </div>
              </div>

              <div className="uDTransProgressThreeThree">
                <div className="uDTransProgressThreeThreeTop">
                <p className="leftItem"> Tesla baby </p>
                <p className="rightItem"> ₦ 315,000,000,000,000,000 </p>
                </div>

                <div className="uDTransProgressiveThree">
                  
                </div>
              </div>
 
            </div>
          </div>
          {/* <div className="uDTransThree"></div> */}
          
        </div>
      </div>
    </div>
  );
};
export default UserBoard;