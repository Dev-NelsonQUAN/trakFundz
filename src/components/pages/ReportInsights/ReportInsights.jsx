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
  const [data, setData] = useState([
    { date: "2024-01-01", amount: 4000, value: 20000  },
    { date: "2024-01-02", amount: 3000, value: 4000  },
    { date: "2024-01-03", amount: 5000, value: 19000  },
    { date: "2024-01-04", amount: 89000, value: 67000  },
    { date: "2024-01-05", amount: 7000, value: 40000  },
    { date: "2024-01-6", amount: 80000, value: 25000  },
  ]);

  const [data2, setData2] = useState([
    {  expense : "Transportation", amount: 2000, value: 3200 },
    {  expense : "Food", amount: 500, value: 4000 },
    {  expense : "Data", amount: 600, value: 1200 },
    {  expense : "Hospitality", amount: 2000, value: 3200 },
    {  expense : "Music Subscription", amount: 2000, value: 3200 },
    {  expense : "Entertainment", amount: 2000, value: 3200 },
  ])
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
              <div className="assignLoan">
                <div className="repoPurpleRound"> </div>
                <p className="repoIncomeText"> Income </p>
                <div className="repoLightPurleRound"></div>
                <p className="repoExpenseText"> Expense </p>
              </div>
            </div>

            <div className="repoCenterDown">
                <div className="repoCenterDownInner">
                <ResponsiveContainer width="100%" height={340}>
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="2 1"/>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="amount" fill="#6404E0" barSize={20}/>
                    <Bar dataKey="value" fill="#DAC1F9" barSize={20} 
                    // stroke="#F9FB7D"
                    />
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
                  <BarChart data2={data2}>
                    <CartesianGrid strokeDasharray="2 1"/>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="amount" fill="#6404E0" barSize={20}/>
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
