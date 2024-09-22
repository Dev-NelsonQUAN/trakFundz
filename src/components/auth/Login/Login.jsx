import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import Logo from "../../../assets/trakFundzLogo.svg";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";


const Login = () => {
  const Nav = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordCheck, setpasswordCheck] = useState("none");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("first")
    if (!email || !password) {
      toast.error("Email and Password is required");
      // toast.error(res?.message);
      setLoading(false);
    } else {
      const apiData = { email, password };
      const url = "https://trackfundz-wmhv.onrender.com/api/v1";
      try {
        setLoading(true);
        const res = await axios.post(`${url}/login`, apiData);
        if (res.data) {
          console.log(res.data)
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userId", res.data.data._id)
        } 

        toast.success("Welcome User");
        Nav("/dashboard/home");
      } catch (error) {
        toast.error("This is an error");
        setLoading(false);
      } finally {
        setLoading(false)
      }
    } 
  };

  const viewPassword = () => {
    setShowPassword(true);
  };
  return (
    <>
      <div className="LoginHolder">
        <div className="HoldImage">
          <img className="loginLogo" src={Logo} alt="TrakFundz Logo" />
        </div>
        <form className="formHold" onSubmit={handleLogin}>
          <div className="inForm">
            <div className="loginTextHold">
              <label className="welcome"> Welcome Back! </label>
              <p className="please"> Please enter your login details below. </p>
            </div>

            <div className="lowerForm">
              <div className="emailOwnDiv">
                <p className="email"> Email Address </p>
                <input
                  type="email"
                  className="emailInput"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="passwordOwnDiv">
                <p className="password"> Password </p>
                <div
                  className="passWordInputHolder"
                  style={
                    passwordCheck == "wrong"
                      ? { border: "1px solid red" }
                      : null
                  }
                >
                  <input
                    type={!showPassword ? "password" : "text"}
                    className="passwordInput"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  {!showPassword ? (
                    <FaRegEyeSlash
                      onClick={viewPassword}
                      style={{ cursor: "pointer" }}
                    />
                  ) : (
                    <FaRegEye
                      onClick={() => setShowPassword(false)}
                      style={{ cursor: "pointer" }}
                    />
                  )}
                </div>
              </div>

              <div className="holdForget">
                <p className="forgotPassW" onClick={() => Nav("/forgot")}>
                  {" "}
                  Forgot Password?{" "}
                </p>
              </div>
            </div>

            <div className="btnLow">
              <button className="loginBtn" type="submit" >
                {loading ? "Loading..." : "Log In"}
              </button>
              <p className="haveAccount">
                {" "}
                You don't have an account?{" "}
                <span className="span" onClick={() => Nav("/signup")}>
                  Sign Up
                </span>{" "}
              </p>
            </div>
          </div>
        </form>
      </div>
      {/* <Toaster />                                                                                                                                                                                                                                                                                                                  */}
    </>
  );
};

export default Login;
