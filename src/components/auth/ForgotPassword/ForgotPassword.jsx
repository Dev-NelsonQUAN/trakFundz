import React from "react";
import "./ForgotPassword.css";
import Logo from "./../../../assets/trakFundzLogo.svg";

const ForgotPassword = () => {
  return (
    <div className="forgotPassHolder">
      <div className="forgotHoldImage">
        <img className="logo" src={Logo} alt="TrakFundz Logo" />
      </div>
      <form className="forgotFormHold">
        <div className="forgotInForm">
          <div className="forgotTextHold">
            <label className="forgot"> Forgot Password? </label>
            <p className="pleaseEnter">
              {" "}
              Please enter the email you used to register. We'll send an email
              with instructions to reset your password.{" "}
            </p>
          </div>

          <div className="forgotLowerForm">
            <div className="forgotEmailOwnDiv">
              <p className="forgotEmail"> Email Address </p>
              <input type="email" className="emailInput" placeholder="Email" />
            </div>

            <button className="forgotReset"> Reset Password </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
