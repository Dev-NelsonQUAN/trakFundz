import React, { useEffect, useState } from "react";
import "./BudgetPlannerDashboard.css";
import { FaPlus, FaPlusCircle } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import axios from "axios";

const url = "https://trackfundz-wmhv.onrender.com/api/v1";

const BudgetPlannerDashboard = () => {
  const [user, setUser] = useState()
  const [description, setDescription] = useState()
  const [target,setTarget] = useState()
  const [duration, setDuration] = useState()
    // const [loading, setLoading] = useState()

    const createBudget = async (e) => {
      e.preventDefault();
      const token = localStorage.getItem("token");
      try {
        await axios.post(
          `${url}/budget/newBudget`,
          {
            description,
            target: parseFloat(target),
            duration,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setAddIncome(false);
      } catch (err) {
        console.log(err);
      }
    };

    const getUser = async () => {
      try {
        const userId = localStorage.getItem('userId');
        
        if (!userId) {
          Nav("/login")
          toast.error("Please Login again")
          // throw new Error('User ID not found in localStorage.');
        }
        const response = await axios.get(`${url}/oneuser/${userId}`);
        setUser(response?.data.data);
        // setLoading(false);
      } catch (err) {
        // setLoading(false);
      }
    };
    useEffect(() => {
      getUser();
    }, []);
  


  console.log(user)

  return (
    <div className="budgetPlannerDashboard">
      <div className="budgetPlannerDashInner">

      <div className="budgetPlannerLeft">
        <div className="budgetPlannerLeftTop">
          <div className="bPlannerTopOne">
            <p className="totalGoal"> Total target goal </p>
            <p className="totalGoalPrice"> ₦ {user?.totalTargetGoal} </p>
          </div>

          <div className="bPlannerTopTwo">
            <div className="bPlannerTopTwoUp">
              <p className="totalAmountReached"> Total amount reached </p>
              <p className="totalAmountPrice"> ₦ {user?.totalAmountSaved} </p>
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
                <p className="noRecs"> No Record Yet </p>
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
                  <input className="budgetBudgetInput" type="text" 
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  />
                </div>

                <div className="bPlanMidShowInputRight">
                  <input className="budgetTargetInput" type="text" 
                  onChange={(e) => setTarget(e.target.value)}
                  value={target}
                  />
                  <input className="budgetDurationInput" type="text" 
                  onChange={(e) => setDuration(e.target.value)}
                  value={duration}
                  />
                </div>
              </div>
            </div>

            <div className="budgetCreateBudgetPlusBtnDiv">
              <div className="holdBudgetAddPlus">
                <FaCirclePlus className="budgetCirclePlus" />
              </div>

              <div className="holdBudgetCreateBudgetBtn">
                <button className="createBudgetBtn"
                onClick={createBudget}
                > Create Budget </button>
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
              <p className="noActivity"> {user?.totalBudget} </p>
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
