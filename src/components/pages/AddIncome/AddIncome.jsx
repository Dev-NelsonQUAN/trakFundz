import React, { useState } from "react";
import "./AddIncome.css";
import axios from "axios";

const url = "https://trackfundz-wmhv.onrender.com/api/v1";

const AddIncome = ({ setAddIncome }) => {
  const [income, setIncome] = useState();
  const [paymentName, setPaymentName] = useState();

  const addIncome = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await axios.post(
        `${url}/expenses/createIncome`,
        {
          income: parseFloat(income),
          paymentName,
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

  return (
    <div className="addIcomeHolder">
      <span className="closeIt" onClick={() => setAddIncome(false)}>
        {" "}
        X{" "}
      </span>
      <div className="whiteInner">
        <div className="whiteInnerIn">
          <div className="incomeModalTop">
            <h6 className="incomeModalH6"> Add Income </h6>
          </div>

          <div className="incomeModalBottom">
            <div className="incomeModalBottomInputs">
              <div className="incomeInputOne">
                <p className="incomeModalP"> Input amount </p>
                <input
                  className="incomeInputs"
                  type="text"
                  onChange={(e) => setIncome(e.target.value)}
                  value={income}
                />
              </div>

              <div className="incomeInputTwo">
                <p className="incomeModalP">
                  {" "}
                  (E.g, Salary, Allowance, Gift, etc.)
                </p>
                <input
                  className="incomeInputs"
                  type="text"
                  onChange={(e) => setPaymentName(e.target.value)}
                  value={paymentName}
                />
              </div>
            </div>

            <button className="incomeModalEnter" onClick={addIncome}>
              {" "}
              Enter{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddIncome;
