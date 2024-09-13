import React from "react";
import "./AddIncome.css";

const AddIncome = ({ setAddIncome }) => {
  // const noAdd = () => {
  //     setAddIncome
  // }
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
                <input className="incomeInputs" type="text" />
              </div>

              <div className="incomeInputTwo">
                <p className="incomeModalP">
                  {" "}
                  (E.g, Salary, Allowance, Gift, etc.)
                </p>
                <input className="incomeInputs" type="text" />
              </div>
            </div>

            <button className="incomeModalEnter" onClick={() => setAddIncome(false)}> Enter </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddIncome;
