import { useEffect, useState } from "react";
import "./DebtManager.css";
import axios from "axios";
import ProgressBar from "@ramonak/react-progress-bar";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaArrowDown } from "react-icons/fa6";

const url = "https://trackfundz-wmhv.onrender.com/api/v1";

const DebtManager = () => {
  const Nav = useNavigate();
  const [user, setUser] = useState();
  const [debtOwed, setDebtOwed] = useState();
  const [description, setDescription] = useState();
  const [duration, setDuration] = useState();
  const [reload, setReload] = useState(false);
  const [amounts, setAmounts] = useState({});
  const [debt, setDebt] = useState([]);
  const [fullDebt, setFullDebt] = useState([]);
  const [loading, setLoading] = useState({});
  // const token = localStorage.getItem("token");

  const addDebt = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await axios.post(
        `${url}/debt/create`,
        {
          debtOwed: parseFloat(debtOwed),
          description,
          duration,
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );
      // setAddIncome(false);
      toast.success('Debt Added Successfully')
      setReload((prev) => !prev);
    } catch (err) {
      toast.error(err.response.data.message || err.response.data.errorMessage)
      if (err.response.data.message === "Oops! Access denied. Please sign in.") {
        Nav('/login')
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
      }
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
      setUser(response?.data?.data);
    } catch (err) {
      console.log(err);

      // setLoading(false);
    }
  };
  useEffect(() => {
    getUser();
  }, [reload]);

  const getPaidHistory = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(`${url}/debt/history`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      console.log(response?.data?.data);
      setDebt(response?.data?.data);
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(debt);
  useEffect(() => {
    getPaidHistory();
  }, [reload]);
  const handleAmountChange = (id, value) => {
    setAmounts((prevAmounts) => ({
      ...prevAmounts,
      [id]: value,  // Store amount specific to the debt ID
    }));
  };

  const payDebt = async (id) => {
    const token = localStorage.getItem("token");

    // Set loading state for the specific debt item
    setLoading((prev) => ({
      ...prev,
      [id]: true,
    }));

    try {
      await axios.put(
        `${url}/debt/pay/${id}`,
        {
          amount: parseFloat(amounts[id]),
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        }
      );
      toast.success("Debt Payment Successful");
      setAmounts((prev) => ({
        ...prev,
        [id]: ''  // Reset amount for the specific debt
      }));
      setReload((prev) => !prev);
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      // Reset loading state after the API call
      setLoading((prev) => ({
        ...prev,
        [id]: false,
      }));
    }
  };


  // useEffect(() => {
  //   payDebt();
  // }, [reload]);

  const getDebtSavingHistory = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(`${url}/debt/debtpaymentHistory`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      setFullDebt(response?.data?.data);
      // setReload((prev) => !prev);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDebtSavingHistory();
  }, [reload]);

  return (
    <div className="debtManagerDashboard">
      <div className="debtManagerDashInner">
        <div className="debtManagerDashLeft">
          <div className="debtManagerLeftTop">
            <div className="debtManagerTopOne">
              <p className="totaldebt"> Total debt amount </p>
              <p className="debtGoalPrice"> ₦ {user?.totalDebtAmount} </p>
            </div>

            <div className="debtManTopTwo">
              <div className="debtManTopTwoUp">
                <p className="totalAmountReached"> Total debt paid </p>
                <p className="totalAmountPrice"> ₦ {user?.totaldebtPaid} </p>
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
                  <h6 className="debtManAmount"> Amount </h6>
                  <h6 className="debtManDuration"> Duration </h6>
                </div>
              </div>

              <div className="debtManMidshowInputs">
                <div className="debtManMidshowInputInner">
                  <div className="debtManMidShowInputLeft">
                    <input
                      className="debtLoanInput"
                      type="text"
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
                    />
                  </div>

                  <div className="debtManMidShowInputRight">
                    <input
                      className="debtManAmountInput"
                      type="text"
                      onChange={(e) => setDebtOwed(e.target.value)}
                      value={debtOwed}
                    />
                    <input
                      className="debtManDurationInput"
                      type="text"
                      onChange={(e) => setDuration(e.target.value)}
                      value={duration}
                    />
                  </div>
                </div>
              </div>

              <div className="debtManAasignPlusBtnDiv">
                <div className="debtManAssignBtn">
                  <button className="assignLoanBtn" onClick={addDebt}>
                    {" "}
                    Assign Loan{" "}
                  </button>
                </div>
              </div>
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
            </div>

            <div className="debtManBottomCenter">
              <div className="debtManMidBottomCenterTop">
                <div className="debtManMidBottomCenterTopLeft">
                  <h6 className="debtManLoan"> Loan </h6>
                </div>

                <div className="debtManMidBottomCenterTopRight">
                  <h6 className="debtPlanBottomAmount"> Amount </h6>
                </div>

                <div className="debtManMidBottomCenterTopRight">
                  {/* <h6 className="debtPlanBottomAmount"> Amount </h6> */}
                </div>
              </div>

              <div className="debtManBottomMidshowInputs">
                {
                  debt.length > 0 ? (
                    debt.map((i) => (
                      <div className="debtManMidBottomshowInputInner" key={i._id}>
                        <div className="debtManMidBottomShowInputLeft">
                          <input
                            className="debtManLoanBottomInput"
                            type="text"
                            readOnly
                            value={i?.description}
                          />
                        </div>

                        <div className="dMMidSBottomInputRight">
                          <input
                            className="dMMidBottomInput"
                            type="number"
                            onChange={(e) => handleAmountChange(i._id, e.target.value)}
                            value={amounts[i._id] || ''}  // Set the value specific to each debt
                          />
                        </div>

                        <div className="dMMidSBottomInputRight">
                          <button
                            className="dMMidBottomInput"
                            onClick={() => payDebt(i._id)}
                            disabled={loading[i._id]}
                          >
                            {loading[i._id] ? "Paying..." : "Submit"}
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No debt records found.</p>
                  )
                }
              </div>

              <div className="dMLoanBottomPlusDiv">
                {/* <div className="dMLoanBottomAddPlus">
                  <FaCirclePlus className="dMloanBottomCirclePlus" />
                </div> */}
              </div>

              {/* <div className="bPlannerMidBottomDownRight"></div> */}
            </div>
          </div>
        </div>

        <div className="debtManagerRight">
          <div className="debtPlannerRightInner">
            <h6 className="dMRightName"> Debt </h6>
            <div className="debtMangerBudget">
              {debt.map((e) => (
                <div className="debtMap" key={e?._id}>
                  <div className="debtMapHold">
                    <span className="debtMappest">
                      <p> {e?.description} </p>
                      <p> {e?.debtOwed} </p>
                    </span>
                    <ProgressBar
                      completed={parseInt(e?.percentage)}
                      bgColor="#B369FE"
                      baseBgColor="white"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="debtManTransaction">
            <h6 className="budgetTransactionHistory"> Transaction History </h6>
            <div className="bugetTransactionNoAct">
              <div className="exTransactionNoAct">
                {fullDebt.length > 0 ? (
                  fullDebt.map((e) => (
                    <div key={e?._id} className="budgetsHistory">
                      <span className="budSpan">
                        <FaArrowDown color="red"/>
                        <p className="debtP">{e?.date}</p>
                        <p className="debtP">₦{e?.amount}</p>
                        <p className="debtP">{e?.description}</p>
                      </span>
                    </div>
                  ))
                ) : (
                  <p>No transaction history available.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DebtManager;
