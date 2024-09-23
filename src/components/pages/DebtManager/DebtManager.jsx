import { useEffect, useState } from "react";
import "./DebtManager.css";
import axios from "axios";
import ProgressBar from "@ramonak/react-progress-bar";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

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

  const token = localStorage.getItem("token");

  const addDebt = async (e) => {
    e.preventDefault();
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
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // setAddIncome(false);
      setTimeout(() => {
        setReload((prev) => !prev);
      }, 1000);
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
      setUser(response?.data?.data);
      // setLoading(false);
    } catch (err) {
      // setLoading(false);
    }
  };
  useEffect(() => {
    getUser();
  }, [reload]);

  const handleAmountChange = (id, value) => {
    setAmounts((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const getPaidHistory = async () => {
    try {
      const response = await axios.get(`${url}/debt/history`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response?.data?.data);
      setDebt(response?.data?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPaidHistory();
  }, []);

  const payDebt = async (id) => {
    console.log("working");
    try {
      const amount = amounts[id] || 0;
      await axios.put(
        `${url}/debt/pay/${id}`,
        {
          amount,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Debt successfully added");
      toast.success(amount.data.message);
      // setDebt(response?.data?.data)
      // setTimeout(() => {
      //   setReload((prev) => !prev);
      // }, 1000);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    payDebt();
  }, [reload]);

  const getDebtSavingHistory = async () => {
    try {
      const response = await axios.get(`${url}/debt/debtpaymentHistory`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setFullDebt(response?.data?.data);
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
                {/* <div className="debtManAddPlus">
                  <FaCirclePlus className="debtManCirclePlus" />
                </div> */}

                <div className="debtManAssignBtn">
                  <button className="assignLoanBtn" onClick={addDebt}>
                    {" "}
                    Assign Loan{" "}
                  </button>
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

              {/* <div className="debtManLoanBottomTopRight">
                <button className="debtManStatusBottomBtn"> Status </button>
              </div> */}
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
                {debt.map((e) => (
                  <div className="debtManMidBottomshowInputInner" key={e?._id}>
                    <div className="debtManMidBottomShowInputLeft">
                      <input
                        className="debtManLoanBottomInput"
                        type="text"
                        readOnly
                        value={e?.description}
                      />
                    </div>

                    <div className="dMMidSBottomInputRight">
                      <input
                        className="dMMidBottomInput"
                        type="number"
                        onChange={(ev) =>
                          handleAmountChange(e?._id, ev.target.value)
                        }
                        value={amounts[e?._id] || ""}
                      />
                    </div>

                    <div className="dMMidSBottomInputRight">
                      <button
                        className="dMMidBottomInput"
                        // type="text"
                        onClick={() => payDebt(e?._id)}
                      >
                        {" "}
                        Submit{" "}
                      </button>
                    </div>
                  </div>
                ))}
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
              <div>
                {fullDebt.map((e) => (
                  <div key={e?._id}>
                    <span>
                      <p> {e?.date} </p>
                      <p> ₦{e?.amount} </p>
                      <p> {e?.budget} </p>
                    </span>
                  </div>
                ))}
              </div>
              {/* <p className="noActivity"> No activity </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DebtManager;
