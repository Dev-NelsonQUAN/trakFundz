import React from 'react'
import "./PasswordSuccess.css"
import Logo from "../../../assets/trakFundzLogo.svg";
import checkVerify from "../../../assets/passwordSuccess.svg";

const PasswordSuccess = () => {
  return (
    <div className="passwordSuccessHolder">
    <div className="passSuccessImg">
      <img className="logo" src={Logo} alt="TrakFundz Logo" />
    </div>
    <div className="successHoldAll">
      <div className="successinFormHolder">
        <div className="successInformTop">
          <div className="holdSuccessSvg">
            <img
              className="emailSuccess"
              src={checkVerify}
              alt="Email Image SVG"
            />
          </div>

          <div className="successEmailTxt">
            <p className="passwordChanged"> Password changed successfully </p>

            {/* <div className="recoverHoldAllP">
              <p className="recoverP">
                We have sent a password recovery instruction to your email.
              </p>
            </div> */}
          </div>
        </div>

        <div className="infromVerifyBottom">
          <button className="recoverBtn"> Log In </button>
          {/* <p className="didntReceive">
            {" "}
            Did not receive any mail? <span>
              {" "}
              Click here to resend.{" "}
            </span>{" "}
            00:59{" "} or <span> try another email address. </span>
          </p> */}
        </div>
      </div>
    </div>
  </div>
  )
}

export default PasswordSuccess