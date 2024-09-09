import React, { useState } from "react";
import Asides from "../Asides/Asides";
import "./FeatureOnboard.css";
import { useNavigate } from "react-router-dom";

const FeatureOnboard = () => {
  const Nav = useNavigate();

  const [selectedButtons, setselectedButtons] = useState([false, false, false])

  const select = [
    {
      label: "Expense Tracking",
       backgroundColor: "#DBBFFF",
    },
    {
      label: "Budget Planning",
      backgroundColor: "#FBFDC7",
    },
    {
      label: "Debt Management",
      backgroundColor: "#E2BDFF",
    },
  ];

  const handleClick = (index) => {
    const newSelectedButtons = [...selectedButtons]
    newSelectedButtons[index] = !newSelectedButtons[index]
    setselectedButtons(newSelectedButtons)
  }

  return (
    <div className="FeatureOnboardHolder">
      <Asides />

      <div className="whitePartHolder">
        <div className="whitePartInner">
          <div className="holdTop">
            <div className="holdTopInner">
              <div className="holdFeaturesHeadFonts">
                <h1 className="featuresH1">
                  {" "}
                  What financial management goal are you trying to acheive?{" "}
                </h1>
                <p className="featuresP">
                  {" "}
                  This information would be used to personalize your account.{" "}
                </p>
              </div>

              <div className="holdotherInputs">
                {select.map((e, index) => (
                  <button className="allInputs" 
                  index={index}
                  style={{background: selectedButtons[index] ? "grey" : e.backgroundColor}}
                  onClick={() => handleClick(index)}
                  > {e?.label} </button>
                ))}
              </div>
            </div>
          </div>
          <div className="holdBottom">
            <button className="continueBtn" onClick={() => Nav("/dashboard/home")}>
              {" "}
              Continue{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureOnboard;
