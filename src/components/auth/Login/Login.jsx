import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
  };

  const viewPassword = () => {
    setShowPassword(true);
  };
  return (
    <>
      <div className="LoginHolder">
        <form>
          <label> Login </label>
          <input
            type="email"
            className="emailInput"
            placeholder="Pls enter your email"
          />
          <div className="passWordInputHolder">
            {!showPassword ? (
              <input
                type="password"
                className="passwordInput"
                placeholder="Enter Your Password"
                onChange={(e) => setEmail(e.target.value)}
              />
            ) : (
              <input type="text" className="passwordInput" 
              onChange={(e) => setPassword(e.target.value)}
              />
            )}

            {!showPassword ? (
              <FaRegEye onClick={viewPassword} style={{ cursor: "pointer" }} />
            ) : (
              <FaRegEyeSlash
                onClick={() => setShowPassword(false)}
                style={{ cursor: "pointer" }}
              />
            )}
          </div>

          <button className="loginBtn"> Login </button>
        </form>
      </div>
    </>
  );
};

export default Login;
