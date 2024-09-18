import React, { useState } from "react";
import "./SignUp.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { FaRegImage } from "react-icons/fa";
import { FaEyeSlash, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/trakFundzLogoReal.svg";

const SignUp = () => {
  const [toogle, setToogle] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  // const [profilePicture, setProfilePicture] = useState();
  const [loading, setLoading] = useState(false);
  const [passwordInputs, setPasswordInputs] = useState(false);
  const [confirmPasswordInput, setConfrimPasswordInput] = useState(false);
  const [emailError, setEmailError] = useState();
  const [emailerrorShow, setEmailErrorShow] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState();
  const [passwordErrorLow, setPasswordErrorLow] = useState();
  const [passwordErrorUpper, setPasswordErrorUpper] = useState();
  const [passwordErrorNumber, setPasswordErrorNumber] = useState();
  const [passwordErrorSymbol, setPasswordErrorSymbol] = useState();

  const Nav = useNavigate();

  const containsLowercase = (input) => {
    // Check if the input string contains at least one lowercase character
    return /[a-z]/.test(input);
  };

  const containsUpperrcase = (input) => {
    // Check if the input string contains at least one lowercase character
    return /[A-Z]/.test(input);
  };

  const containsNumber = (input) => {
    // Check if the input string contains at least one number
    return /\d/.test(input);
  };

  const containsSymbol = (input) => {
    // Check if the input string contains at least one symbol (special character)
    return /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(input);
  };

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

  const register = async (e) => {
    e.preventDefault();

    // validate your beans here 
    
    setLoading(true);
  
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !phoneNumber
    ) {
      toast.error("All fields are required.");
      setLoading(false);
    } else {
      const apiData = {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        phoneNumber,
      };

      const url = "https://trackfundz-wmhv.onrender.com/api/v1";

      try {
        const res = await axios.post(`${url}/signup`, apiData);
        setLoading(false);
        toast.success(res?.message);
        Nav(`/verify?email=${email}`);
        console.log(url, apiData);
        console.log(res, "respond to this");
      } catch (error) {
        // toast.error(error?.message)
        toast.error(error?.response?.data?.message);
        console.log(error, "This is an error");
        setLoading(false);
      }
    }
  };

  // const now = new Date();
  // const year = now.getFullYear();
  // console.log(now);
  // console.log(year);

  // const imgShow = (e) => {
  //   const file = e.target.files[0];
  //   const img = URL.createObjectURL(file);
  //   // const img = URL.revokeObjectURL(file);

  //   setProfilePicture(img);
  // };

  const viewPassword = () => {
    setPasswordInputs(true);
    setShowEye(true)
  };

  const hidePassword = () => {
    setPasswordInputs(false);
    setShowEye(false)
  };

  const viewSecPassword = () => {
    setConfrimPasswordInput(true);
  };

  const hideSecPassword = () => {
    setConfrimPasswordInput(false);
  };

  return (
    <>
      <div className="signUpHolder">
        <div className="sideImageHolder">
          <div className="holdImageAndFont">
            <div className="holdImg">
              <img src={logo} className="holdBG" alt="" />
            </div>

            <div className="holdFont">
              <h2 className="signUpFont"> Sign up on Trackfundz </h2>
              <div className="createAccount">
                <p className="create"> Create an account with ease and </p>

                <p className="enjoyTxt">
                  {" "}
                  enjoy 30days free trial with Trakfundz{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="holdFormAll">
          <div className="InsideFormHolder">
            <div className="onTopForm">
              <div className="alreadyHolder">
                <p className="already">
                  {" "}
                  Already have an account?{" "}
                  <span className="loginSpan" onClick={() => Nav("/login")}>
                    Login
                  </span>
                </p>
              </div>
              <div className="personalInfoHolder">
                <h4 className="personalH4"> Personal Information </h4>
                <p className="infoP">
                  {" "}
                  The infomation would be used to create your account.
                </p>
              </div>

              {/* <button onClick={() => Nav("/verify")}> Test </button> */}
            </div>

            <div className="formHolder">
              <form
                className="InputHolder"
                onSubmit={register}
              >
                <div className="firstAndLastNameInput">
                  <div className="firstNameDiv">
                    <p className="firstName"> First Name </p>
                    <input
                      className="nameInput"
                      type="text"
                      required
                      placeholder="First Name"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>

                  <div className="secondNameDiv">
                    <p className="lastName"> Last Name </p>
                    <input
                      className="nameInput"
                      type="text"
                      required
                      placeholder="Last Name"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="emailInputDiv">
                  <p className="signEmail"> Email Address </p>
                  <input
                    className="regInput"
                    type="email"
                    required
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* {emailerrorShow ? <span> {emailError} </span> : null} */}
                <div className="phoneNumDiv">
                  <p className="phone"> Phone Number</p>
                  <input
                    className="regInput"
                    type="number"
                    required
                    maxLength={11}
                    placeholder="Phone number"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>

                <div className="enterPasswordDiv">
                  <p className="enterPassword"> Enter Password </p>
                  <div className="TwoInputHolder">
                    <input
                      className="inputOne"
                      type={passwordInputs ? 'text' : 'password' }
                      required
                      placeholder="Enter Your Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />


                    {!passwordInputs ? (
                      <FaRegEyeSlash
                        onClick={viewPassword}
                        style={{ cursor: "pointer" }}
                      />
                    ) : (
                      <FaRegEye
                        onClick={hidePassword}
                        style={{ cursor: "pointer" }}
                      />
                    )}
                  </div>

                  <p className="errorP">
                    {" "}
                    Must be at least 8 characters, contains uppercase,
                    lowercase, and number.{" "}
                  </p>
                </div>

                <div className="enterPasswordDiv">
                  <p className="enterPassword"> Confirm Password </p>
                  <div className="TwoInputHolder">
                  <input
                      className="inputOne"
                      type={confirmPasswordInput ? 'text' : 'password' }
                      required
                      placeholder="Enter Your Password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  
                    {!confirmPasswordInput ? (
                      <FaRegEyeSlash
                        onClick={viewSecPassword}
                        style={{ cursor: "pointer" }}
                      />
                    ) : (
                      <FaRegEye
                        onClick={hideSecPassword}
                        style={{ cursor: "pointer" }}
                      />
                    )}
                  </div>
                  <p className="errorP"> Password must match </p>
                </div>

                <div className="BtnDiv">
                  <button className="Btn" 
                  type="Submit">
                    {loading ? "Loading..." : "Create Account"}
                  </button>

                  <p className="byCreate">
                    {" "}
                    By creating an account, you agree to our{" "}
                    <span className="span"> Terms of service </span> and{" "}
                    <span className="span"> Privacy policy </span>{" "}
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* <p className="yearP"> © {year}, TrakFundz</p> */}
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default SignUp;

// const config = {
//   headers: {
//     "Content-Type": "multipart/form-data",
//   },
// };

// const data = {
//   firstName,
//   lastName,
//   email,
//   password,
//   confirmPassword,
//   phoneNumber,
//   // profilePicture,
// };

// const formData = new FormData();
// for (const key in data) {
//   formData.append(key, data[key]);
//   console.log(formData);
// }

// const formData = new FormData();
// formData.append("firstName", firstName);
// formData.append("lastName", lastName);
// formData.append("email", email);
// formData.append("password", password);
// formData.append("phoneNumber", phoneNumber);
// formData.append("profilePicture", profilePicture);
