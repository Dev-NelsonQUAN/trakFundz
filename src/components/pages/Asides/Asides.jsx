import React from "react";
import "./Aside.css";
import logo from "../../../assets/trakFundzLogo.svg";

const Asides = () => {
  return (
    <div className="AsideHolder">
      <div className="sideImageHold">
        <div className="holdImageAndFont">
          <div className="holdImg">
            <img src={logo} className="holdBG" alt="" />
          </div>

          <div className="holdFont">
            <h2 className="signUpFont"> Manage Your finances on Trackfundz </h2>
            {/* <div className="createAccount">
              <p className="create"> Create an account with ease and </p>

              <p className="enjoyTxt">
                {" "}
                enjoy 30days free trial with Trakfundz{" "}
              </p> */}
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Asides;
