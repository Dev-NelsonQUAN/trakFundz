import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"; // To access the token from the URL params
import { toast } from "react-hot-toast"; // Using toast for messages
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import "./ResetPassword.css";
import Logo from "../../../assets/trakFundzLogo.svg";

const ResetPassword = () => {
  const navigate = useNavigate()
  const { token } = useParams(); // Get token from URL params
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordInputs, setPasswordInputs] = useState(false);
  const [confirmPasswordInput, setConfirmPasswordInput] = useState(false);

  // Password validation helpers
  const containsLowercase = (str) => /[a-z]/.test(str);
  const containsUppercase = (str) => /[A-Z]/.test(str);
  const containsNumber = (str) => /\d/.test(str);
  const containsSymbol = (str) => /[!@#$%^&*(),.?":{}|<>]/.test(str);

  const handlePassword = (e) => {
    const newData = e.target.value;
    setPassword(newData);
    // Validate password as per your conditions
    if (newData.trim() === "") {
      toast.error("Password is required");
    } else if (!containsLowercase(newData) || !containsUppercase(newData) || !containsNumber(newData) || !containsSymbol(newData)) {
      // toast.error("Password must be 8 characters, contain uppercase, lowercase, number, and symbol");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(`https://trackfundz-wmhv.onrender.com/api/v1/verifyPassword/${token}`, {
        password
      });

      if (response.status === 200) {
        toast.success("Password reset successfully!");
        navigate('/login')
      } else {
        toast.error("Failed to reset password");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="resetPassHolder">
      <div className="resetHoldImage">
        <img className="logo" src={Logo} alt="TrakFundz Logo" />
      </div>

      <form className="resetformHold" onSubmit={handleSubmit}>
        <div className="resetInForm">
          <div className="resetTextHold">
            <label className="resetPass"> Reset Password </label>
            <p className="yourNewPass">
              Your new password must be different from your previously used password.
            </p>
          </div>

          <div className="promptInputs">
            <div className="resetInputAndBtn">
              <div className="ResetPasswordDiv">
                <p className="resetNewPassword"> New Password </p>
                <div className="resetTwoInputHolder">
                  {!passwordInputs ? (
                    <input
                      className="ResetPasswordInput"
                      type="password"
                      placeholder="New Password"
                      onChange={handlePassword}
                      required
                    />
                  ) : (
                    <input
                      className="ResetPasswordInput"
                      type="text"
                      placeholder="New Password"
                      onChange={handlePassword}
                      required
                    />
                  )}

                  {!passwordInputs ? (
                    <FaRegEye onClick={() => setPasswordInputs(true)} style={{ cursor: "pointer" }} />
                  ) : (
                    <FaRegEyeSlash onClick={() => setPasswordInputs(false)} style={{ cursor: "pointer" }} />
                  )}
                </div>
                <p className="resetErrorP">
                  Must be at least 8 characters, contains uppercase, lowercase, number, and symbol.
                </p>
              </div>

              <div className="resetConfirmPassword">
                <p className="resetConfPass"> Confirm Password </p>
                <div className="resetTwoInputHolder">
                  {!confirmPasswordInput ? (
                    <input
                      className="ResetPasswordInput"
                      type="password"
                      placeholder="Confirm Your Password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  ) : (
                    <input
                      className="ResetPasswordInput"
                      type="text"
                      placeholder="Confirm Your Password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  )}

                  {!confirmPasswordInput ? (
                    <FaRegEye onClick={() => setConfirmPasswordInput(true)} style={{ cursor: "pointer" }} />
                  ) : (
                    <FaRegEyeSlash onClick={() => setConfirmPasswordInput(false)} style={{ cursor: "pointer" }} />
                  )}
                </div>
                <p className="resetErrorP"> Password must match. </p>
              </div>
            </div>
            <button className="resetPassBtn" type="submit" disabled={loading}>
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
