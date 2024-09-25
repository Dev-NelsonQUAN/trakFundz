import { useEffect, useState } from "react";
import "./ExpenseTrackerDashboard.css";
import { FaCirclePlus } from "react-icons/fa6";
import AddIncome from "../AddIncome/AddIncome";
import axios from "axios";
import { IoArrowDown } from "react-icons/io5";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  // Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const url = "https://trackfundz-wmhv.onrender.com/api/v1";


const ExpenseTrackerDashboard = () => {
  const Nav = useNavigate();
  const [user, setUser] = useState();
  const [history, setHistory] = useState([]);
  const [addIncome, setAddIncome] = useState(false);
  const [expense, setExpense] = useState('')
  const [amount, setAmount] = useState('')
  const [description, setDescription] = useState('')
  const [reload, setReload] = useState(false);
  const [timePeriod, setTimePeriod] = useState("today");
  const [data, setData] = useState([]);

  const token = localStorage.getItem('token')
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
    try {
      await axios.post(`${url}/expenses/create`,
        {
          amount: parseInt(amount), expense, description
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );
      setAddIncome(false);
      setAmount('');
      setExpense('');
      setDescription('');
      toast.success('Expense Added Successfully')
      setReload((prev) => !prev);
    } catch (err) {
      // console.log(err);
      toast.error(err.response.data.message)
      if (err.response.data.message === "Oops! Access denied. Please sign in.") {
        Nav('/login')
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
      }
    }
  };


  const getTransactionChart = async () => {
    try {
      const response = await axios.get(`${url}/expenses/expensehistory`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
      )
      setHistory(response.data.data)
      setReload((prev) => !prev);
    } catch (err) {
      console.log(err);

    }
  }
  useEffect(() => {
    getTransactionChart()
    console.log(history);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reload])

  const getExpensePrday = async () => {
    try {
      const response = await axios.get(`${url}/expenses/expensehistory`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
      )
      setData(response.data.data)
      setReload((prev) => !prev);
    } catch (err) {
      // console.log(err);
      if (err.response.data.message === "Oops! Access denied. Please sign in.") {
        Nav('/login')
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
      }

    }
  }
  useEffect(() => {
    getExpensePrday()
  }, [])

  const groupExpensesByType = (data) => {
    const groupedData = {};
  
    data.forEach((item) => {
      if (groupedData[item.expense]) {
        // If the expense type already exists, sum the amounts
        groupedData[item.expense] += item.amount;
      } else {
        // Otherwise, set the initial amount for that expense
        groupedData[item.expense] = item.amount;
      }
    });
  
    // Convert the grouped object into an array that can be used by Recharts
    return Object.keys(groupedData).map((expense) => ({
      expense, // Expense name
      expenseAmount: groupedData[expense], // Total amount for that expense
    }));
  };

  const filterDataByPeriod = () => {
    const now = new Date();
    let filteredData = [];

    if (timePeriod === "today") {
      filteredData = data.filter((item) => {
        const date = new Date(item.createdAt);
        return date.toDateString() === now.toDateString();
      });
    } else if (timePeriod === "week") {
      filteredData = data.filter((item) => {
        const date = new Date(item.createdAt);
        const diffInDays = (now - date) / (1000 * 3600 * 24);
        return diffInDays <= 7 && diffInDays >= 0;
      });
    } else if (timePeriod === "month") {
      filteredData = data.filter((item) => {
        const date = new Date(item.createdAt);
        return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
      });
    } else if (timePeriod === "year") {
      filteredData = data.filter((item) => {
        const date = new Date(item.createdAt);
        return date.getFullYear() === now.getFullYear();
      });
    }

    // Map and sort the filtered data
    return groupExpensesByType(filteredData);
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

            <div className="exTopTwo">
              {/* <div className="exTopTwoUp"> */}
              <p className="exAmountReached"> Total amount Spent </p>
              <p className="exPrice">₦{user?.totalExpenses}</p>
              {/* </div> */}
            </div>

            <div className="exTopThree">
              <div className="exTopThreeInner">
                <FaCirclePlus
                  className="exIncomeCirclePlus"
                  onClick={() => setAddIncome(true)}
                />
                <h5 className="exAddIncome">Add Income </h5>
                {addIncome ? <div className="expAddIncomeModal"><AddIncome setAddIncome={setAddIncome} /></div> : null}
              </div>
            </div>
          </div>

          <div className="exTrackMiddle">
            <div className="exTrackMiddleTop">
              <h3 className="exTrack">Expense</h3>
              <p className="exInput">(Input Your expenses here.)</p>
            </div>

            <form onSubmit={createExpense}>
              <div className="exMidshowInputs">
                <div className="exMidshowInputInner">
                  <div className="exMidShowInputLeft">
                    <input
                      className="exExpenseInput"
                      type="text"
                      name="expense"
                      value={expense}
                      onChange={(e) => setExpense(e.target.value)}
                      placeholder="Expense Category eg(Data,cloth,food)"
                    />
                  </div>
                  <div className="exMidShowInputRight">
                    <input
                      className="exDescInput"
                      type="text"
                      name="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Description"
                    />
                    <input
                      className="exAmountInput"
                      type="number"
                      name="amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="Amount"
                      min="0.01"
                      step="0.01"
                    />
                  </div>
                </div>
              </div>

              <button type="submit" className="clickSubmit">Submit</button>
            </form>
          </div>
          <div className="uDMiddle">
            <div className="uDMiddleTop">
              <h3 className="uDMoneyFlow">Expense</h3>
              <div className="userDashboardFilterButtonWrap">
                <button onClick={() => setTimePeriod("today")}>Today</button>
                <button onClick={() => setTimePeriod("week")}>Week</button>
                <button onClick={() => setTimePeriod("month")}>Month</button>
                <button onClick={() => setTimePeriod("year")}>Year</button>
              </div>
            </div>

            <div className="uDCenterDown">
              <div className="uDCenterDownInner">
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={filterDataByPeriod()}>
                    <CartesianGrid strokeDasharray="2 1" />
                    <XAxis dataKey="expense" />
                    <YAxis />
                    <Legend />
                    <Bar dataKey="expenseAmount" name="Expense" fill="#DAC1F9" barSize={15} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        <div className="exTrackRight">
          <div className="exTrackTransaction">
            <h6 className="exTransactionHistory">Transaction History</h6>
            <div className="exTransactionNoAct">

              {history?.map((data, index) => (
                <ul key={index}>
                  <IoArrowDown style={{ color: 'red' }} />
                  <li className="expTracnationList">{new Date().toDateString()}</li>
                  <li className="expTracnationListAmount">{data.amount}</li>
                  <li className="expTracnationList">{data.description}</li>
                  <li className="expTracnationList">{data.expense}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTrackerDashboard;
