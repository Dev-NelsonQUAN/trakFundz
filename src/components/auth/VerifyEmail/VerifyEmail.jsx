import React from "react";
import "./VerifyEmail.css";
import Logo from "../../../assets/trakFundzLogo.svg";
import emailVerify from "../../../assets/emailVerifySvg.svg";

const VerifyEmail = () => {
  return (
    <div className="verifyPassword">
      <div className="holdImageVerify">
        <img className="logo" src={Logo} alt="TrakFundz Logo" />
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
                  Hey Trak, you're almost ready to start enjoying Trakfundz.{" "}
                </p>
                <p className="verP">
                  {" "}
                  Simply click on the button bellow to verify your{" "}
                </p>
                <p className="verP"> email address. </p>
              </div>
            </div>
          </div>

          <div className="infromVerifyBottom">
            <button className="verBtn"> Verify email  </button>
            <p className="didntReceive"> Did not receive any mail? Check your spam inbox or <span className="span"> Click here to resend. </span> 00:59 </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default VerifyEmail;
