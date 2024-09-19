import React from "react";
import "./ForgotPassword.css";
import Logo from "./../../../assets/trakFundzLogo.svg";

const url = "https://trackfundz-wmhv.onrender.com/api/v1";

const ForgotPassword = () => {
  const handleForgot = async (e) => {
    e.preventDefault();

    // validate your beans here

    setLoading(true);

    if (!email) {
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

      try {
        const res = await axios.post(`${url}/signup`, apiData);
        setLoading(false);
        toast.success(res?.message);
        Nav("/recovery");
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

  return (
    <div className="forgotPassHolder">
      <div className="forgotHoldImage">
        <img className="logo" src={Logo} alt="TrakFundz Logo" />
      </div>
      <form className="forgotFormHold">
        <div className="forgotInForm">
          <div className="forgotTextHold">
            <label className="forgot"> Forgot Password? </label>
            <p className="pleaseEnter">
              {" "}
              Please enter the email you used to register. We'll send an email
              with instructions to reset your password.{" "}
            </p>
          </div>

          <div className="forgotLowerForm">
            <div className="forgotEmailOwnDiv">
              <p className="forgotEmail"> Email Address </p>
              <input type="email" className="emailInput" placeholder="Email" />
            </div>

            <button className="forgotReset" type="submit"> Reset Password </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
