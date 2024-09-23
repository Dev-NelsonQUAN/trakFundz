import { useEffect, useState } from "react";
import "./BudgetPlannerDashboard.css";
import { FaArrowDown } from "react-icons/fa6";
import axios from "axios";
import ProgressBar from "@ramonak/react-progress-bar";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const url = "https://trackfundz-wmhv.onrender.com/api/v1";

const BudgetPlannerDashboard = () => {
  const Nav = useNavigate();
  const [user, setUser] = useState();
  const [description, setDescription] = useState();
  const [target, setTarget] = useState();
  const [duration, setDuration] = useState();
  const [reload, setReload] = useState(false);
  const [history, setHistory] = useState([]);
  const [amounts, setAmounts] = useState({});
  const [savingHistory, setSavingHistory] = useState([]);

  const token = localStorage.getItem("token");

  const createBudget = async (e) => {
    e.preventDefault();
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
      toast.success("Budget Created Successfully");
      // setTimeout(() => {
      // }, 1000);
      setReload((prev) => !prev);
    } catch (err) {
      console.log(err);
    }
  };

  const getUser = async () => {
    try {
      const userId = localStorage.getItem("userId");

      if (!userId) {
        Nav("/login");
        toast.error("Please Login again");
        // throw new Error('User ID not found in localStorage.');
      }
      const response = await axios.get(`${url}/oneuser/${userId}`);
      setUser(response?.data.data);
      // setLoading(false);
    } catch (err) {
      console.log(err);
      
      // setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, [reload]);

  const getBudgetHistory = async () => {
    try {
      const response = await axios.get(`${url}/budget/history`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response?.data?.data);
      setHistory(response?.data?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBudgetHistory();
  }, [reload]);

  const handleAmountChange = (id, value) => {
    setAmounts((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const saveForBudget = async (id) => {
    try {
      const amount = amounts[id] || 0;
      await axios.put(
        `${url}/budget/save/${id}`,
        {
          amount,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Budget Saved Successfully");

      setTimeout(() => {
        setReload((prev) => !prev);
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  };

  const getSavingsHistory = async () => {
    try {
      const response = await axios.get(
        `${url}/budget/allbudgetSavingshistory`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSavingHistory(response?.data?.data);
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(user);

  useEffect(() => {
    getSavingsHistory();
  }, [reload]);

 

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
                    <input
                      className="budgetBudgetInput"
                      type="text"
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
                    />
                  </div>

                  <div className="bPlanMidShowInputRight">
                    <input
                      className="budgetTargetInput"
                      type="text"
                      onChange={(e) => setTarget(e.target.value)}
                      value={target}
                    />
                    <input
                      className="budgetDurationInput"
                      type="text"
                      onChange={(e) => setDuration(e.target.value)}
                      value={duration}
                    />
                  </div>
                </div>
              </div>

              <div className="budgetCreateBudgetPlusBtnDiv">
                <div className="holdBudgetCreateBudgetBtn">
                  <button className="createBudgetBtn" onClick={createBudget}>
                    {" "}
                    Create Budget{" "}
                  </button>
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

              {/* <div className="holdBudgetCreateBottomTopRight">
                <button className="budgetStatusBottomBtn"> Status </button>
              </div> */}
            </div>

            <div className="bPlannerBottomCenter">
              <div className="bPlanMidBottomCenterTop">
                <div className="bPlanMidBottomCenterTopLeft">
                  <h6> Budget </h6>
                </div>

                <div className="bPlanMidBottomCenterTopRight">
                  <h6 className="budgetPlannerBottomAmount"> Amount </h6>
                </div>

                <div className="bPlanMidBottomCenterTopRight"></div>
              </div>

              <div className="bPlanBottomMidshowInputs">
                {history.map((e) => (
                  <div className="bPlanMidBottomshowInputInner" key={e?._id}>
                    <div className="bPlanMidBottomShowInputLeft">
                      <input
                        className="budgetBudgetBottomInput"
                        type="text"
                        readOnly
                        value={e?.description}
                      />
                    </div>

                    <div className="bPlanMidShowBottomInputRight">
                      <input
                        className="budgetAmountBottomInput"
                        type="number"
                        onChange={(ev) =>
                          handleAmountChange(e?._id, ev.target.value)
                        }
                        value={amounts[e?._id] || ""}
                      />
                    </div>

                    <div className="bPlanMidShowBottomInputRight">
                      <button
                        className="budgetAmountBottomInput"
                        onClick={() => saveForBudget(e?._id)}
                      >
                        {" "}
                        Submit{" "}
                      </button>
                      {/* <input className="budgetDurationBottomInput" type="text" /> */}
                    </div>
                  </div>
                ))}
              </div>

              <div className="budgetCreateBudgetBottomPlusDiv">
                {/* <div className="holdBudgetBottomAddPlus">
                  <FaCirclePlus className="budgetBottomCirclePlus" />
                </div> */}
              </div>

              <div className="bPlannerMidBottomDownRight"></div>
            </div>
          </div>
        </div>

        <div className="budgetPlannerRight">
          {/* <div className="budgetPlannerRightInner"> */}
          <div className="budgetPlannerBudget">
            <h6 className="budgetRigthName">Budget</h6>
            {history.map((e) => (
              <div className="divMap" key={e?._id}>
                <div className="divMappest">
                  <span className="mapSpan">
                    <p> {e?.description}</p>
                    <p> {e?.target} </p>
                  </span>
                  <ProgressBar
                    completed={parseInt(e?.percentage)}
                    bgColor="yellow"
                  />
                </div>
              </div>
            ))}
            <div className="budgetPlanBudgetHold">
              <p className="noActivity"> {user?.totalBudget} </p>
            </div>
          </div>

          <div className="budgetPlannerTransaction">
            <h6 className="budgetTransactionHistory"> Transaction History </h6>
            <div className="bugetTransactionNoAct">
              <div className="budgetTransMapAct">
                {savingHistory.map((e) => (
                  <div className="budgetsHistory" key={e?._id}>
                    <span className="budSpan">
                      <FaArrowDown />
                      <p className="budP">{e?.date}</p>
                      <p className="budP"> ₦{e?.amount} </p>
                      <p className="budP"> {e?.budget} </p>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default BudgetPlannerDashboard;