import React, { useState } from "react";
import "./ReportInsights.css";
import { FaCirclePlus } from "react-icons/fa6";
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
import { useNavigate } from "react-router-dom";


const url = "https://trackfundz-wmhv.onrender.com/api/v1";



const ReportInsights = () => {
  const Nav = useNavigate();
  const [user, setUser] = useState();
  const [timePeriod, setTimePeriod] = useState("week");
  const [data, setData] = useState([
    { date: "2024-01-01", amount: 4000, value: 20000 },
    { date: "2024-01-08", amount: 3000, value: 4000 },
    { date: "2024-02-01", amount: 5000, value: 19000 },
    { date: "2024-03-01", amount: 89000, value: 67000 },
    { date: "2024-04-01", amount: 7000, value: 40000 },
    { date: "2024-05-01", amount: 80000, value: 25000 },
    { date: "2024-09-25", amount: 80000, value: 25000 },
    { date: "2024-09-24", amount: 80000, value: 25000 },
    { date: "2024-09-23", amount: 80000, value: 25000 },
    { date: "2024-09-22", amount: 80000, value: 25000 },
    { date: "2024-09-21", amount: 80000, value: 25000 },
  ]);

  const filterDataByPeriod = () => {
    const now = new Date();
    let filteredData = [];

    if (timePeriod === "today") {
      // Filter for today's data only
      filteredData = data.filter((item) => {
        const date = new Date(item.date);
        return date.toDateString() === now.toDateString();
      });
    } else if (timePeriod === "week") {
      // Filter by last 7 days
      filteredData = data.filter((item) => {
        const date = new Date(item.date);
        const diffInDays = (now - date) / (1000 * 3600 * 24); // Difference in days
        return diffInDays <= 7 && diffInDays >= 0; // Last 7 days
      });
    } else if (timePeriod === "month") {
      // Filter by the current month
      filteredData = data.filter((item) => {
        const date = new Date(item.date);
        return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
      });
    } else if (timePeriod === "year") {
      // Filter by the current year
      filteredData = data.filter((item) => {
        const date = new Date(item.date);
        return date.getFullYear() === now.getFullYear();
      });
    }

    // Add today's data if not already in the filtered data
    const todayExists = filteredData.some(item => {
      const date = new Date(item.date);
      return date.toDateString() === now.toDateString();
    });

    if (!todayExists && timePeriod === "today") {
      filteredData.push({
        date: now.toISOString().split("T")[0], // Add today in "YYYY-MM-DD" format
        amount: 0,
        value: 0,
      });
    }

    return filteredData;
  };
  return (
    <div className="reportInsights">
      <div className="reportInsightsInner">
        <div className="reportInsightsLeft">
          <div className="reportInsightsLeftTop">
            <div className="repoInsightTopOne">
              <p className="repoDebt"> Total debt amount </p>
              <p className="repoPrice"> ₦ 0.00 </p>
            </div>

            <div className="repoTopTwo">
              <div className="repoTopTwoUp">
                <p className="repoAmountReached"> Total debt paid </p>
                <p className="repoAmountPrice"> ₦ 0.00 </p>
              </div>

              <div className="repoTopTwoDown">
                <div className="repoTopTwoDownTop">
                  <div className="repoTopTwoDownLeft">
                    <nav className="greenRPTargetReached"> </nav>
                    <p className="rPPaid">Loan Paid </p>
                  </div>
                  <div className="rPTopTwoDownRight">
                    <nav className="redRPTargetReached"> </nav>
                    <p className="rPBalance">Loan balance</p>
                  </div>
                </div>

                <div className="rPTopTwoDownBottom">
                  <p className="rPNoRec"> No Record Yet </p>
                </div>
              </div>
            </div>

            <div className="repoTopThree">
              <div className="repoTopThreeInner">
                <FaCirclePlus className="repoIncomeCirclePlus" />
                <h5 className="repoAddIncome"> Add Income </h5>
              </div>
            </div>
          </div>

          <div className="repoMiddle">
            <div className="repoMiddleTop">
              <h3 className="repoMoneyFlow"> Money Flow </h3>
              {/* <div className="assignLoan">
                <div className="repoPurpleRound"> </div>
                <p className="repoIncomeText"> Income </p>
                <div className="repoLightPurleRound"></div>
                <p className="repoExpenseText"> Expense </p>
              </div> */}
              <div>
                <button onClick={() => setTimePeriod("today")}>Today</button>
                <button onClick={() => setTimePeriod("week")}>Week</button>
                <button onClick={() => setTimePeriod("month")}>Month</button>
                <button onClick={() => setTimePeriod("year")}>Year</button>
              </div>
            </div>

            <div className="repoCenterDown">
              <div className="repoCenterDownInner">
                <ResponsiveContainer width="100%" height={340}>
                  <BarChart data={filterDataByPeriod()}>
                    <CartesianGrid strokeDasharray="2 1" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="amount" fill="#6404E0" barSize={20} />
                    <Bar dataKey="value" fill="#DAC1F9" barSize={20} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="repoBottom">
            <div className="repoBottomTop">
              <h3 className="repoExpense"> Expense Analysis </h3>
              <div className="assignLoanBottom">
                <div className="repoBottomPurpleRound"> </div>
                <p className="repoBottomIncomeText"> Income </p>
                <div className="repoBottomLightPurleRound"></div>
                <p className="repoBottomExpenseText"> Expense </p>
              </div>
            </div>

            <div className="repoBottomCenterDown">
              <div className="repoBottomCenterDownInner">
                <ResponsiveContainer width="100%" height={340}>
                  <BarChart data2={data}>
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



        </div>

        <div className="repoRight">
          <div className="repoTransaction">
            <h6 className="repoTransactionHistory"> Transaction History </h6>
            <div className="repoTransactionNoAct">
              <p className="noActivity"> No activity </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportInsights;
