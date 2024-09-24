import { useEffect, useState } from "react";
import "./UserDashboard.css";
import axios from "axios";
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
import ProgressBar from "@ramonak/react-progress-bar";

const url = "https://trackfundz-wmhv.onrender.com/api/v1";

const UserBoard = () => {
  const Nav = useNavigate();
  const [user, setUser] = useState();
  const [data, setData] = useState([]);
  const [history, setHistory] = useState([]);
  const [debt, setDebt] = useState([]);
  const userToken = localStorage.getItem('token')

  const getPaidHistory = async () => {
    try {
      const response = await axios.get(`${url}/debt/history`, {
        headers: {
          'Authorization': `Bearer ${userToken}`,
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
  }, []);
  const getBudgetHistory = async () => {
    try {
      const response = await axios.get(`${url}/budget/history`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
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
  }, []);

  const getUser = async () => {
    try {
      const userId = localStorage.getItem("userId");

      if (!userId) {
        Nav("/login");
      }
      const response = await axios.get(`${url}/oneuser/${userId}`);
      setUser(response?.data.data);
    } catch (err) {
      console.log(err);

    }
  };

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getTransactionChart = async () => {
    try {
      const response = await axios.get(`${url}/expenses/expensehistory`, {
        headers: {
          'Authorization': `Bearer ${userToken}`
        }
      }
      )
      console.log(response.data.data);
      setData(response.data.data)
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
    getTransactionChart()
  }, [])
  return (
    <div className="userdashboard"
    // ref={ref}
    >
      <div className="userDashboardInner">
        <div className="userDashboardLeft">
          <div className="userDashboardLeftTop">
            <div className="userDashboardTopOne">
              <div className="userDashboardTopOneInner">
                <div className="userDashboardTopTwoUp">
                  <p className="userDashAmount">Available balance</p>
                  <p className="userPrice">₦ {user?.availableBalance}</p>
                </div>

                <div className="userDashboardTopOneDown">
                  <div className="uDashTopOneDownUp">
                    <nav className="greenUDTargetReached"></nav>
                    <nav className="redUDTargetReached"></nav>
                  </div>

                  <p className="uDashBTrack">Expense Tracker</p>
                </div>
              </div>
            </div>

            <div className="userDashboardTopTwo">
              <div className="userDashboardTopOneInner">
                <div className="userDashboardTopTwoUp">
                  <p className="userDashAmounTwo">Total budget reached</p>
                  <p className="userTwoPrice">₦ {user?.totalTargetGoal}</p>
                </div>

                <div className="userDashboardTopTwoDown">
                  <div className="uDashTopTwoDownUp">
                    <nav className="greenUDTargetReached"></nav>
                    <nav className="redUDTargetReached"></nav>
                  </div>

                  <p className="uDashBudGTrack">Budget Planner</p>
                </div>
              </div>
            </div>

            <div className="uDTopThree">
              <div className="userDashboardTopOneInner">
                <div className="userDashboardTopThreeUp">
                  <p className="userDashThreeAmount">Total debt paid</p>
                  <p className="userThreePrice">₦ {user?.totalDebtAmount}</p>
                </div>

                <div className="userDashboardTopThreeDown">
                  <div className="uDashTopTwoThreeUDownUp">
                    <nav className="greenUDTargetThreeReached"></nav>
                    <nav className="redUDTargetThreeReached"></nav>
                  </div>

                  <p className="uDashThreeDebtTrack">Debt Manager</p>
                </div>
              </div>
            </div>
          </div>

          <div className="uDMiddle">
            <div className="uDMiddleTop">
              <h3 className="uDMoneyFlow">Money Flow</h3>
              <div className="uDassignLoan">
                <div className="uDLightPurleRound"></div>
                <p className="uDExpenseText">Expense</p>
              </div>
            </div>

            <div className="uDCenterDown">
              <div className="uDCenterDownInner">
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="2 1" />
                    <XAxis dataKey="datePaid" />
                    <YAxis />
                    <Legend />
                    <Bar dataKey="amount" fill="#6404E0" barSize={20} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="uDBottom">
            <div className="uDBottomTop">
              <h3 className="uDExpense">Recent transaction</h3>
              <div className="uDLoanBottom">
                <div className="uDBottomPurpleRound"></div>
                <p className="uDBottomIncomeText">Income</p>
                <div className="uDBottomLightPurleRound"></div>
                <p className="uDBottomExpenseText">Expense</p>
              </div>
            </div>

            <div className="uDBottomCenterDown">
              <div className="uDBottomCenterDownInner">
                <div className="uDashBottomcenterDownTop">
                  <p className="uDBCDTFont">Date</p>
                  <p className="uDBCDTFont">Amount</p>
                  <p className="uDBCDTFont">Description</p>
                  <p className="uDBCDTFont">Expense</p>
                </div>

                {
                  data.map((i) => (
                    <div className="uDashBottomcenterDownList" key={i._id}>
                      <p className="uDBCDTFontList">
                        {new Date(i.createdAt).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </p>
                      <p className="uDBCDTFontList">{i.amount}</p>
                      <p className="uDBCDTFontList">{i.description}</p>
                      <p className="uDBCDTFontList">{i.expense
                      }</p>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>

        <div className="uDRight">
          <div className="uDTransaction">
            <h6 className="uDTransactionHistory">Expense</h6>
            <div className="uDTransactionNoAct">
              <p className="totAmountSPent">Total amount spent</p>
              <h6 className="theAmount">₦{user?.totalExpenses}</h6>
            </div>
          </div>

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
                    labelColor="black"
                  />
                </div>
              </div>
            ))}
            <div className="budgetPlanBudgetHold">
              <p className="noActivity"> {user?.totalBudget} </p>
            </div>
          </div>

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
        </div>
      </div>
    </div>
  );
};

export default UserBoard;