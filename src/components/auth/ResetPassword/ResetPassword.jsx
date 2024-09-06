import React, { useState } from "react";
import "./ResetPassword.css";
import Logo from "../../../assets/trakFundzLogo.svg";
import { FaEyeSlash, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";


const ResetPassword = () => {
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  // const [profilePicture, setProfilePicture] = useState();
  const [loading, setLoading] = useState(false);
  const [passwordInputs, setPasswordInputs] = useState(false);
  const [confirmPasswordInput, setConfrimPasswordInput] = useState(false);


  const handlePassword = (e) => {
    const newData = e.target.value;
    setPassword(newData);
    if (newData.trim() === "") {
      toast.error("Password is required");
      setPasswordCheck(false);
    }
    if (newData.length > 0) {
      setPasswordCheck(true);
    }
    if (!containsLowercase(newData)) {
      setPasswordErrorLow(true);
    } else {
      setPasswordErrorLow(false);
    }
    if (!containsUpperrcase(newData)) {
      setPasswordErrorUpper(true);
    } else {
      setPasswordErrorUpper(false);
    }
    if (!containsNumber(newData)) {
      setPasswordErrorNumber(true);
    } else {
      setPasswordErrorNumber(false);
    }
    if (!containsSymbol(newData)) {
      setPasswordErrorSymbol(true);
    } else {
      setPasswordErrorSymbol(false);
    }
  };

  const viewPassword = () => {
    setPasswordInputs(true);
    // setShowEye(true)
  };

  const hidePassword = () => {
    setPasswordInputs(false);
    // setShowEye(false)
  };

  const viewSecPassword = () => {
    setConfrimPasswordInput(true);
  };

  const hideSecPassword = () => {
    setConfrimPasswordInput(false);
  };


  return (
    <div className="resetPassHolder">
      <div className="resetHoldImage">
        <img className="logo" src={Logo} alt="TrakFundz Logo" />
      </div>

      <form className="resetformHold">
        <div className="resetInForm">
          <div className="resetTextHold">
            <label className="resetPass"> Reset password </label>
            <p className="yourNewPass">
              {" "}
              Your new password must be differently from your previously used
              password{" "}
            </p>
          </div>

          <div className="promptInputs">
          <div className="resetInputAndBtn">
          <div className="ResetPasswordDiv"> 
                <p className="resetNewPassword"> New Password </p>
                <div className="resetTwoInputHolder">
                {!passwordInputs ? (
                  <input
                    className="inputOne"
                    type="password"
                    placeholder="New Password"
                    onChange={handlePassword}
                  />
                ) : (
                  <input
                    className="inputOne"
                    type="text"
                    placeholder="New Password"
                    onChange={handlePassword}
                  />
                )}

                
                {!passwordInputs ? (
                  <FaRegEye
                    onClick={viewPassword}
                    style={{ cursor: "pointer" }}
                  />
                ) : (
                  <FaRegEyeSlash
                    onClick={hidePassword}
                    style={{ cursor: "pointer" }}
                  />
                )}
              </div>

              <p className="resetErrorP">
                {" "}
                Must be at least 8 characters, contains uppercase, lowercase,
                and number.{" "}
              </p>
              </div>

              <div className="resetConfirmPassword">
               <p className="resetConfPass"> Confirm Password </p>
              <div className="resetTwoInputHolder">
                {!confirmPasswordInput ? (
                  <input
                    className="inputOne"
                    type="password"
                    placeholder="Confirm Your Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                ) : (
                  <input
                    className="inputOne"
                    type="text"
                    placeholder="Confirm Your Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                )}

                {!confirmPasswordInput ? (
                  <FaRegEye
                    onClick={viewSecPassword}
                    style={{ cursor: "pointer" }}
                  />
                ) : (
                  <FaRegEyeSlash
                    onClick={hideSecPassword}
                    style={{ cursor: "pointer" }}
                  />
                )}
              </div>
              <p className="resetErrorP"> Password must match </p>
              </div>


              </div>
              <button className="resetPassBtn"> Reset password </button>
              </div>
          </div>
      </form>
    </div>
  );
};

export default ResetPassword;
