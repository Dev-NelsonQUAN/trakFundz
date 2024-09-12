import React from "react";
import "./BudgetPlannerDashboard.css";
import { FaPlus, FaPlusCircle } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";

const BudgetPlannerDashboard = () => {
  return (
    <div className="budgetPlannerDashboard">
      <div className="budgetPlannerDashInner">

      <div className="budgetPlannerLeft">
        <div className="budgetPlannerLeftTop">
          <div className="bPlannerTopOne">
            <p className="totalGoal"> Total target goal </p>
            <p className="totalGoalPrice"> ₦ 0.00 </p>
          </div>

          <div className="bPlannerTopTwo">
            <div className="bPlannerTopTwoUp">
              <p className="totalAmountReached"> Total amount reached </p>
              <p className="totalAmountPrice"> ₦ 0.00 </p>
            </div>

            <div className="bPlannerTopTwoDown">
              <div className="bPlanTopTwoDownTop">
                <div className="bPlanTopTwoDownLeft">
                  <nav className="greenTargetReached"> </nav>
                  <p className="targetReached">Target Reached</p>
                </div>
                <div className="bPlanTopTwoDownRight">
                  <nav className="redTargetReached"> </nav>
                  <p className="targetBalance">Target balance</p>
                </div>
              </div>

              <div className="bPlanTopTwoDownBottom">
                <p> No Record Yet </p>
              </div>
            </div>
          </div>
        </div>

        <div className="budgetPlannerMiddle">
          <div className="budgetPlannerMiddleTop">
            <h3 className="budgetPlan"> Budget Plan </h3>
            <p className="gadget">
              (Create a budget to know how much to set aside to stay on rack
              overtime.)
            </p>
          </div>

          <div className="bPlannerMiddleBottomCenter">
            <div className="bPlanMidBottomDownTop">
              <div className="bPlanMidBottomDownTopLeft">
                <h6> Budget </h6>
              </div>

              <div className="bPlanMidBottomDownTopRight">
                <h6 className="bugetPlannerTxt"> Target </h6>
                <h6 className="budgetPlannerDuration"> Duration </h6>
              </div>
            </div>

            <div className="bPlanMidshowInputs">
              <div className="bPlanMidshowInputInner">
                <div className="bPlanMidShowInputLeft">
                  <input className="budgetBudgetInput" type="text" />
                </div>

                <div className="bPlanMidShowInputRight">
                  <input className="budgetTargetInput" type="text" />
                  <input className="budgetDurationInput" type="text" />
                </div>
              </div>
            </div>

            <div className="budgetCreateBudgetPlusBtnDiv">
              <div className="holdBudgetAddPlus">
                <FaCirclePlus className="budgetCirclePlus" />
              </div>

              <div className="holdBudgetCreateBudgetBtn">
                <button className="createBudgetBtn"> Create Budget </button>
              </div>
            </div>

            {/* <div className="bPlannerMidBottomDownRight"></div> */}
          </div>
        </div>

        <div className="budgetPlannerBottom">
          <div className="budgetPlannerBottomTop">
            <div className="budgetPlannerBottomTopLeft">
              <h3 className="budgetBottomPlan"> Budget </h3>
              <p className="budgetBottomGadget">
                (Input amount assigned for each budget.)
              </p>
            </div>

            <div className="holdBudgetCreateBottomTopRight">
              <button className="budgetStatusBottomBtn"> Status </button>
            </div>
          </div>

          <div className="bPlannerBottomCenter">
            <div className="bPlanMidBottomCenterTop">
              <div className="bPlanMidBottomCenterTopLeft">
                <h6> Budget </h6>
              </div>

              <div className="bPlanMidBottomCenterTopRight">
                <h6 className="budgetPlannerBottomAmount"> Amount </h6>
              </div>
            </div>

            <div className="bPlanBottomMidshowInputs">
              <div className="bPlanMidBottomshowInputInner">
                <div className="bPlanMidBottomShowInputLeft">
                  <input className="budgetBudgetBottomInput" type="text" />
                </div>

                <div className="bPlanMidShowBottomInputRight">
                  <input className="budgetAmountBottomInput" type="text" />
                  {/* <input className="budgetDurationBottomInput" type="text" /> */}
                </div>
              </div>
            </div>

            <div className="budgetCreateBudgetBottomPlusDiv">
              <div className="holdBudgetBottomAddPlus">
                <FaCirclePlus className="budgetBottomCirclePlus" />
              </div>
            </div>

            <div className="bPlannerMidBottomDownRight"></div>
          </div>
        </div>
      </div>

      <div className="budgetPlannerRight">
        {/* <div className="budgetPlannerRightInner"> */}
          <div className="budgetPlannerBudget">
            <h6 className="budgetRigthName">Budget</h6>
            <div className="budgetPlanBudgetHold">
              <p className="noActivity">No Activity </p>
            </div>
          </div>

          <div className="budgetPlannerTransaction">
            <h6 className="budgetTransactionHistory"> Transaction History </h6>
            <div className="bugetTransactionNoAct"> 
              <p className="noActivity"> No activity  </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetPlannerDashboard;
