import React, { useEffect, useState } from "react";
import "./VerifyEmail.css";
import Logo from "../../../assets/trakFundzLogo.svg";
import emailVerify from "../../../assets/emailVerifySvg.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const url = "https://trackfundz-wmhv.onrender.com/api/v1";

const VerifyEmail = () => {
  const Nav = useNavigate();
  const [email, setEmail] = useState()

  const verify = async () => {
    const userId = localStorage.getItem("userId");
    try {
      const response = await axios.post(`${url}/reverify`, {email});
      setEmail(response?.data?.data);
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() =>{
  //   getUser()
  // }, []);

  return (
    <div className="verifyPassword">
      <div className="holdImageVerify">
        <img className="verifyLogo" src={Logo} alt="TrakFundz Logo" 
          onClick={() => Nav("/login")}
        />
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
                  Hey user, you're almost ready to start enjoying
                  <br /> Trakfundz. A verification link has been sent to your
                  mail
                  <br /> please check your mail to verify your email address.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="infromVerifyBottom">
            <p className="verDidntReceive">
              {" "}
              Did not receive any mail?
              <span className="verSpan" onClick={verify}> Resend Mail </span>
            </p>
          </div> */}
        </div>
      </form>
    </div>
  );
};

export default VerifyEmail;



// import React, { useEffect, useState } from "react";
// import "./VerifyEmail.css";
// import Logo from "../../../assets/trakFundzLogo.svg";
// import emailVerify from "../../../assets/emailVerifySvg.svg";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const url = "https://trackfundz-wmhv.onrender.com/api/v1";

// const VerifyEmail = () => {
//   const Nav = useNavigate();
//   const [email, setEmail] = useState('');
//   const [loading, setLoading] = useState(false);
//   // const [error, setError] = useState('');

//   const verify = async () => {
//     const userId = localStorage.getItem("userId");
    
//     if (!email) {
//       setError("Please enter a valid email address.");
//       return;
//     }

//     setLoading(true);
//     setError('');

//     try {
//       const response = await axios.post(`${url}/reverify`, { email, userId });
//       alert("Verification email sent!");
//       setEmail('');
//     } catch (err) {
//       // setError("Failed to resend verification email. Please try again.");
//       console.log(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="verifyPassword">
//       <div className="holdImageVerify">
//         <img className="verifyLogo" src={Logo} alt="TrakFundz Logo" />
//       </div>

//       <form className="formHoldVerify" onSubmit={(e) => e.preventDefault()}>
//         <div className="inFormVerify">
//           <div className="informVerifyTop">
//             <div className="holdVerifySvg">
//               <img
//                 className="emailVerify"
//                 src={emailVerify}
//                 alt="Email message SVG"
//               />
//             </div>
//             <div className="holdOtherTxt">
//               <h5 className="emailTxt">Email Verification</h5>

//               <div className="holdAllP">
//                 <p className="verP">
//                   Hey user, you're almost ready to start enjoying
//                   <br /> Trakfundz. A verification link has been sent to your
//                   mail. Please check your mail to verify your email address.
//                 </p>
//                 {/* {error && <p className="errorMsg">{error}</p>} */}
//               </div>
//             </div>
//           </div>

//           <div className="infromVerifyBottom">
//             <p className="verDidntReceive">
//               Did not receive any mail?
//               <span className="verSpan" onClick={verify}>
//                 {loading ? ' Resending...' : ' Resend Mail'}
//               </span>
//             </p>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default VerifyEmail;