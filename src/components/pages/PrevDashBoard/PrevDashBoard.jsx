import React from "react";
import "./PrevDashBoard.css";
import UserDashboardMap from "../UserDashboardMap/UserDashboardMap";
import { IoArrowDown } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import DashboardRightMap from "../DashboardRightMap/DashboardRightMap";

const UserBoard = () => {
  const roll = [
    {
      balanceName: "Available Balance",
      amount: "0.00",
      trackerName: "Expense Tracker",
      backgroundColor: "#DBBFFF",
    },
    {
      balanceName: "Total Balance",
      amount: "0.00",
      trackerName: "Budget Planner",
      backgroundColor: "#FBFDC7",
    },
    {
      balanceName: "Total Balance",
      amount: "0.00",
      trackerName: "Debt Manager",
      backgroundColor: "#E2BDFF",
    },
  ];

  const dashRight = [
    {
      theName: "Expense",
      activity: "No Activity",
      background: "#E8D8FD"

    },
    {
      theName: "Budget",
      activity: "No Activty",
      background: "#FEFFEF"
    },
    {
      theName: "Loan Payment",
      activity: "No Activity",
      background: "#E8D0FF"
    }
  ]

  return (
    <div className="dashboardHolder">
      <div className="dashboardInner">
        <div className="dashboardLeft">
          <div className="dashboardLeftTop">
            {roll.map((e, id) => {
              return (
                <UserDashboardMap
                  e={e}
                  key={id}
                  id={id}
                  backgroundColor={e.backgroundColor}
                />
              );
            })}
          </div>
          <div className="dashboardLeftMiddle">
            <div className="dBoardLeftMiddleTop">
              <p className="moneyFlow"> Money Flow </p>

              <div className="incomeExpenseHolder">
                <div className="incomeExpense">
                  <div className="purpleRound"> </div>
                  <p className="incomeText"> Income </p>
                  <div className="lightPurleRound"></div>
                  <p className="expenseText"> Expense </p>
                </div>

                <div className="incomeSelect">
                  <div className="expenseSelect">
                    <IoIosArrowDown />
                    <p className="expense"> Expense Tracker </p>
                  </div>

                  <div className="weekSelect">
                    <IoIosArrowDown />
                    <p className="thisWeek"> This week </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dBoardLeftBottom">
              <div className="dBoardLeftBotInnerTop">
                <hr />
                <hr />
                <hr />
                <hr />
              </div>
              <div className="dBoardLeftBotInnerBottom"></div>
            </div>
          </div>

          <div className="dashboardLeftBottom">
            <div className="dBoardLeftBottomTop"></div>
          </div>
        </div>

        <div className="dashboardRight">
            <div className="dashboardRightInner">
              {
                dashRight.map((e, index) => (
                  <DashboardRightMap e={e} key={index} backgroundColor={e.background} />
                ))
              }
            </div>
        </div>
      </div>
    </div>
  );
};

export default UserBoard;