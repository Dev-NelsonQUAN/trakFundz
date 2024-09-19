import React, { useEffect, useState } from "react";
import "./ExpenseTrackerDashboard.css";
import { FaCirclePlus } from "react-icons/fa6";
import AddIncome from "../AddIncome/AddIncome";
import axios from "axios";

const url = "https://trackfundz-wmhv.onrender.com/api/v1";

const ExpenseTrackerDashboard = () => {
  const [user, setUser] = useState();
  const [expenses, setExpenses] = useState([]);
  const [history, setHistory] = useState([]);
  const [addIncome, setAddIncome] = useState(false);

  const getUser = async () => {
    try {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        // Handle login redirect
      }
      const response = await axios.get(`${url}/oneuser/${userId}`);
      setUser(response?.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const createExpense = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
  
    // Ensure there is only one valid expense
    const validExpense = expenses.find(exp => exp.amount > 0 && exp.expense && exp.description);
  
    if (!validExpense) {
      console.error("No valid expense to submit.");
      return;
    }
  
    try {
      await axios.post(
        `${url}/expenses/create`,
        validExpense, // Sending the single expense object
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAddIncome(false);
      setExpenses([]); // Reset the expenses array after submission
    } catch (err) {
      console.log(err);
    }
  };

  const addFields = () => {
    if (expenses.length === 10) return;
    setExpenses((prev) => [
      ...prev,
      {
        expense: "",
        amount: "",
        description: "",
      },
    ]);
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newExpenses = [...expenses];
    newExpenses[index] = {
      ...newExpenses[index],
      [name]: name === "amount" ? Number(value) : value,
    };
    setExpenses(newExpenses);
  };

  return (
    <div className="exTrackDashboard">
      <div className="exTrackDashInner">
        <div className="exTrackLeft">
          <div className="exTrackLeftTop">
            <div className="exTrackTopOne">
              <p className="exTrackDebt">Available Balance</p>
              <p className="exPrice">₦ {user?.availableBalance}</p>
            </div>

            <div className="exTopThree">
              <div className="exTopThreeInner">
                <FaCirclePlus
                  className="exIncomeCirclePlus"
                  onClick={() => setAddIncome(true)}
                />
                <h5 className="exAddIncome">Add Income </h5>
                {addIncome ? <AddIncome setAddIncome={setAddIncome} /> : null}
              </div>
            </div>
          </div>

          <div className="exTrackMiddle">
            <div className="exTrackMiddleTop">
              <h3 className="exTrack">Expense</h3>
              <p className="exInput">(Input Your expenses here.)</p>
            </div>

            <form onSubmit={createExpense}>
              {expenses?.map((expense, index) => (
                <div className="exMidshowInputs" key={index}>
                  <div className="exMidshowInputInner">
                    <div className="exMidShowInputLeft">
                      <input
                        className="exExpenseInput"
                        type="text"
                        name="expense"
                        value={expense.expense}
                        onChange={(e) => handleChange(index, e)}
                        placeholder="Expense"
                      />
                    </div>
                    <div className="exMidShowInputRight">
                      <input
                        className="exDescInput"
                        type="text"
                        name="description"
                        value={expense.description}
                        onChange={(e) => handleChange(index, e)}
                        placeholder="Description"
                      />
                      <input
                        className="exAmountInput"
                        type="number"
                        name="amount"
                        value={expense.amount}
                        onChange={(e) => handleChange(index, e)}
                        placeholder="Amount"
                        min="0.01" // Ensures the input is a positive number greater than zero
                        step="0.01" // Allows decimal values
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

        <div className="exTrackRight">
          <div className="exTrackTransaction">
            <h6 className="exTransactionHistory">Transaction History</h6>
            <ul className="exTransactionNoAct">
              {history.map((data, index) => (
                <li key={index}>
                  <p>{new Date().toDateString()}</p>
                  <p>{data.amount}</p>
                  <p>{data.description}</p>
                  <p>{data.expense}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTrackerDashboard;
