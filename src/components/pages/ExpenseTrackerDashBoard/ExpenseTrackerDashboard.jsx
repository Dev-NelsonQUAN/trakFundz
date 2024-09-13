import React, { useState } from "react";
import "./ExpenseTrackerDashboard.css";
import { FaCirclePlus } from "react-icons/fa6";

const initialState = [
  {
    expence: "",
    desc: "",
    amount: "",
  },
];

const ExpenseTrackerDashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const [history, setHistory] = useState([])

  const addFields = () => {
    if (expenses.length === 10) return;
    setExpenses((prev) => [
      ...prev,
      {
        expence: "",
        amount: "",
        desc: "",
      },
    ]);
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newInputs = [...expenses];
    newInputs[index] = { ...newInputs[index], [name]: value };
    setExpenses(newInputs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setHistory(expenses)
  };

  console.log('history', history)

  return (
    <div className="exTrackDashboard">
      <div className="exTrackDashInner">
        <div className="exTrackLeft">
          <div className="exTrackLeftTop">
            <div className="exTrackTopOne">
              <p className="exTrackDebt"> Total debt amount </p>
              <p className="exPrice"> ₦ 0.00 </p>
            </div>

            <div className="exTopTwo">
              <div className="exTopTwoUp">
                <p className="exAmountReached"> Total debt paid </p>
                <p className="exAmountPrice"> ₦ 0.00 </p>
              </div>

              <div className="exTopTwoDown">
                <div className="exTopTwoDownTop">
                  <div className="exTopTwoDownLeft">
                    <nav className="GreenEXTargetReached"> </nav>
                    <p className="exPaid">Loan Paid </p>
                  </div>
                  <div className="exTopTwoDownRight">
                    <nav className="redEXTargetReached"> </nav>
                    <p className="exBalance">Loan balance</p>
                  </div>
                </div>

                <div className="exTopTwoDownBottom">
                  <p className="exNoRec"> No Record Yet </p>
                </div>
              </div>
            </div>

            <div className="exTopThree">
              <div className="exTopThreeInner">
                <FaCirclePlus className="exIncomeCirclePlus" />
                <h5 className="exAddIncome"> Add Income </h5>
              </div>
            </div>
          </div>

          <div className="exTrackMiddle">
            <div className="exTrackMiddleTop">
              <h3 className="exTrack"> Expense </h3>
              <p className="exInput">(Input Your expenses here.)</p>
            </div>

            <div className="exMiddleBottomCenter">
              <div className="exMidBottomDownTop">
                <div className="exsMidBottomDownTopLeft">
                  <h6> Expense </h6>
                </div>

                <div className="exMidBottomDownTopRight">
                  <h6 className="exTxtDesc"> Description </h6>
                  <h6 className="exAmount"> Amount </h6>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {expenses?.map((expense, index) => (
                  <div className="exMidshowInputs" key={expense.amount}>
                    <div className="exMidshowInputInner">
                      <div className="exMidShowInputLeft">
                        <input
                          className="exExpenseInput"
                          type="text"
                          required
                          name="expence"
                          value={expense.expence}
                           onChange={(e) => handleChange(index, e)}
                        />
                      </div>

                      <div className="exMidShowInputRight">
                        <input
                          className="exDescInput"
                          type="text"
                          required
                          name="desc"
                          value={expense.desc}
                           onChange={(e) => handleChange(index, e)}
                        />
                        <input
                          className="exAmountnput"
                          type="text"
                          required
                          name="amount"
                          value={expense.amount}
                           onChange={(e) => handleChange(index, e)}
                        />
                      </div>
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={addFields}
                  className="exBudgetPlusBtnDiv"
                >
                  <FaCirclePlus className="exCirclePlus" />
                </button>

                <button type="submit">Submit</button>
              </form>
            </div>
          </div>

          <div className="exBottom">
            <div className="exBottomTop">
              <h3 className="exExpense"> Expense Analysis </h3>
              <div className="assignExBottom">
                <div className="exBottomPurpleRound"> </div>
                <p className="exBottomIncomeText"> Income </p>
                <div className="exBottomLightPurleRound"></div>
                <p className="exBottomExpenseText"> Expense </p>
              </div>
            </div>

            <div className="exBottomCenterDown">
              <div className="exBottomCenterDownInner"></div>
            </div>
          </div>
        </div>

        <div className="exTrackRight">
          <div className="exTrackTransaction">
            <h6 className="exTransactionHistory"> Transaction History </h6>
            <ul className="exTransactionNoAct">
              {/* {history.length ? (
                
                ))
              ) : (
                <li className="noActivity"> No activity </li>
              )} */}

              {
                history.map((data, index) => (
                  <li key={index}>
                    <p>{new Date().toDateString()}</p>
                    <p>{data.amount}</p>
                    <p>{data.desc}</p>
                    <p>{data.expence}</p>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTrackerDashboard;
