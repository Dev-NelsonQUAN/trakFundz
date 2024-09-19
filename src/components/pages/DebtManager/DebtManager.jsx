import React, { useEffect, useState } from "react";
import "./DebtManager.css";
import { FaCirclePlus } from "react-icons/fa6";
import axios from "axios";

const url = "https://trackfundz-wmhv.onrender.com/api/v1";

const DebtManager = () => {
  const [user, setUser] = useState()
  const [debtOwed, setDebtOwed] = useState();
  const [description, setDescription] = useState();
  const [duration, setDuration] = useState();

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
                <div className="debtManAddPlus">
                  <FaCirclePlus className="debtManCirclePlus" />
                </div>

                <div className="debtManAssignBtn">
                  <button className="assignLoanBtn"
                  onClick={addDebt}
                  > Assign Loan </button>
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
