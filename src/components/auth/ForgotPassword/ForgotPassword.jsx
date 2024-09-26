import  { useState } from "react";
import axios from "axios";
import "./ForgotPassword.css";
import Logo from "./../../../assets/trakFundzLogo.svg";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const url = "https://trackfundz-wmhv.onrender.com/api/v1"; // Ensure this is your correct API base URL

const ForgotPassword = () => {
  const Nav = useNavigate()

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false); // For handling loading state

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${url}/forgetpassword`, { email });

      if (response.status === 200) {
        toast.success("A reset link has been sent to your email.", { autoClose: 3000 });
      } else {
        toast.error(response.data.message || "Failed to send reset email.", { autoClose: 3000 });
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "An error occurred. Please try again.", { autoClose: 3000 });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forgotPassHolder">
      <div className="forgotHoldImage">
        <img className="logo" src={Logo} alt="TrakFundz Logo" onClick={() => Nav("/login")} />
      </div>

      <form className="forgotFormHold" onSubmit={handleSubmit}>
        <div className="forgotInForm">
          <div className="forgotTextHold">
            <label className="forgot"> Forgot Password? </label>
            <p className="pleaseEnter">
              Please enter the email you used to register. We'll send an email
              with instructions to reset your password.
            </p>
          </div>

          <div className="forgotLowerForm">
            <div className="forgotEmailOwnDiv">
              <p className="forgotEmail"> Email Address </p>
              <input
                type="email"
                className="emailInput"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>

            <button className="forgotReset" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Reset Password"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
