import React from "react";
import "./PasswordRecovery.css";
import Logo from "../../../assets/trakFundzLogo.svg";
import checkVerify from "../../../assets/checkMailSvg.svg";

const PasswordRecovery = () => {
  return (
    <div className="passwordRecoveryHolder">
      <div className="passRecoveryImg">
        <img className="logo" src={Logo} alt="TrakFundz Logo" />
      </div>
      <form className="recoverHoldAll">
        <div className="recoverinFormHolder">
          <div className="recoverInformTop">
            <div className="holdRecoverSvg">
              <img
                className="emailRecover"
                src={checkVerify}
                alt="Email Image SVG"
              />
            </div>

            <div className="recoverEmailTxt">
              <h5 className="checkEmail"> Check your mail </h5>

              <div className="recoverHoldAllP">
                <p className="recoverP">
                  We have sent a password recovery instruction to your email.
                </p>
              </div>
            </div>
          </div>

          <div className="infromVerifyBottom">
            <button className="recoverBtn"> Open email </button>
            <p className="didntReceive">
              {" "}
              Did not receive any mail? <span className="span">
                {" "}
                Click here to resend.{" "}
              </span>{" "}
              00:59{" "} or <span className="span"> try another email address. </span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PasswordRecovery;
