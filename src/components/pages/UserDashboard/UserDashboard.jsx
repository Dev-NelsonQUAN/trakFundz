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
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import ProgressBar from "@ramonak/react-progress-bar";

const url = "https://trackfundz-wmhv.onrender.com/api/v1";

const UserBoard = () => {
  const Nav = useNavigate();
  const [user, setUser] = useState();
  const [data, setData] = useState([
    { date: "2024-01-01", amount: 4000, value: 20000 },
    { date: "2024-01-02", amount: 3000, value: 4000 },
    { date: "2024-01-03", amount: 5000, value: 19000 },
    { date: "2024-01-04", amount: 89000, value: 67000 },
    { date: "2024-01-05", amount: 7000, value: 40000 },
    { date: "2024-01-6", amount: 80000, value: 25000 },
  ]);
  const userToken = localStorage.getItem('token')
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

  // console.log(user);

  // const ref = useRef(null);

  // useEffect(() => {
  //   if (ref.current) {
  //     ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  // }, []);
  const getTransactionChart = async () => {
    try {
      const response = await axios.get(`${url}/expenses/expensehistory`, {
        headers: {
          'Authorization': `Bearer ${userToken}`
        }
      }
      )
      console.log(response);
    } catch (err) {
      console.log(err);

    }
  }
 useEffect(()=> {
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
                <div className="uDPurpleRound"></div>
                <p className="uDIncomeText">Income</p>
                <div className="uDLightPurleRound"></div>
                <p className="uDExpenseText">Expense</p>
              </div>
            </div>

            <div className="uDCenterDown">
              <div className="uDCenterDownInner">
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="2 1" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="amount" fill="#6404E0" barSize={20} />
                    <Bar dataKey="value" fill="#DAC1F9" barSize={20}
                    // stroke="#F9FB7D"
                    />
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

                <div className="uDashBottomcenterDownList">
                  <p className="uDBCDTFontList">1/17/24</p>
                  <p className="uDBCDTFontList">₦12,000</p>
                  <p className="uDBCDTFontList">The Place</p>
                  <p className="uDBCDTFontList">food</p>
                </div>

                <div className="uDashBottomcenterDownTop">
                  <p className="uDBCDTFontList">Date</p>
                  <p className="uDBCDTFontList">₦2,000</p>
                  <p className="uDBCDTFontList">Airtel Data</p>
                  <p className="uDBCDTFontList">Internet Data</p>
                </div>
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
              {/* <div className="uRighTopTwoThreeUDownUp">
                <nav className="greenUDTargetThreeReached"></nav>
                <p className="uRightInc">Income</p>
                <nav className="redUDTargetThreeReached"></nav>
                <p className="uRightExP">Expense</p>
              </div>
              <p className="amountAnalys">
                You have spent ₦ 15,000
                <br /> compared to last week
              </p> */}
            </div>
          </div>

          <div className="uDTransTwo">
            <h6 className="uDTransTwoBudget">Budget</h6>
            <div className="uDTransactionNoActTwo">
              <div className="uDTransProgressOne">
                <div className="uDTransProgressOneTop">
                  <p className="leftItem">iPhone 15 Promax</p>
                  <p className="rightItem">₦ 150,000</p>
                </div>

                <div className="uDTransProgressiveOne">
                  <ProgressBar completed={80} bgColor="#F9FB7D" />
                </div>
              </div>

              <div className="uDTransProgressTwo">
                <div className="uDTransProgressTwoTop">
                  <p className="leftItem">Modern duplex apartment</p>
                  <p className="rightItem">₦ 2,000,000,000</p>
                </div>

                <div className="uDTransProgressiveTwo">
                  <ProgressBar completed={10} bgColor="#F9FB7D" />
                </div>
              </div>

              <div className="uDTransProgressThree">
                <div className="uDTransProgressThreeTop">
                  <p className="leftItem">GLE 450 White</p>
                  <p className="rightItem">₦ 130,000,000,000</p>
                </div>

                <div className="uDTransProgressiveThree">
                  <ProgressBar completed={40} bgColor="#F9FB7D" />
                </div>
              </div>
            </div>
          </div>

          <div className="uDTransThree">
            <h6 className="uDTransThreeBudget">Budget</h6>
            <div className="uDTransactionNoActThree">
              <div className="uDTransProgressThreeOne">
                <div className="uDTransProgressThreeOneTop">
                  <p className="leftItem">iPhone 16 Promax</p>
                  <p className="rightItem">₦ 3,000,000</p>
                </div>

                <div className="uDTransProgressiveOne">
                  <ProgressBar completed={20} bgColor="#B369FE" />

                </div>
              </div>

              <div className="uDTransProgressThreeTwo">
                <div className="uDTransProgressThreeTwoTop">
                  <p className="leftItem">Friday Night</p>
                  <p className="rightItem">₦ 15,000,000</p>
                </div>

                <div className="uDTransProgressiveTwo">
                  <ProgressBar completed={30} bgColor="#B369FE" />
                </div>
              </div>

              <div className="uDTransProgressThreeThree">
                <div className="uDTransProgressThreeThreeTop">
                  <p className="leftItem">Tesla baby</p>
                  <p className="rightItem">₦ 315,000,000,000,000,000</p>
                </div>

                <div className="uDTransProgressiveThree">
                  <ProgressBar completed={90} bgColor="#B369FE" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBoard;