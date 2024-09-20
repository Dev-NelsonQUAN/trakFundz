import React from "react";
import "./VerifyEmail.css";
import Logo from "../../../assets/trakFundzLogo.svg";
import emailVerify from "../../../assets/emailVerifySvg.svg";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const Nav = useNavigate();

  return (
    <div className="verifyPassword">
      <div className="holdImageVerify">
        <img className="verifyLogo" src={Logo} alt="TrakFundz Logo" />
      </div>

      <form className="formHoldVerify">
        <div className="inFormVerify">
          <div className="informVerifyTop">
            <div className="holdVerifySvg">
              <img
                className="emailVerify"
                src={emailVerify}
                alt="Email message SVG"
              />
            </div>
            <div className="holdOtherTxt">
              <h5 className="emailTxt"> Email Verification </h5>

              <div className="holdAllP">
                <p className="verP">
                    {" "}
                    Hey TrakFundzer, you're almost ready to start enjoying
                    <br /> Trakfundz. A verification link has been sent to your mail
                    <br /> please check your mail to verify your email address.
                </p>
              </div>
            </div>
          </div>

          <div className="infromVerifyBottom">
            <p className="verDidntReceive">
              {" "}
              Did not receive any mail? 
              <span className="verSpan"> Resend Mail </span> 00:59{" "}
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default VerifyEmail;
