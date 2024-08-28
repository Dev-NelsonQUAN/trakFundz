import React, { useState } from "react";
import "./SignIn.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { FaRegImage } from "react-icons/fa";
import { FaEyeSlash, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


const SignIn = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [profilePicture, setProfilePicture] = useState();
  const [loading, setLoading] = useState(false);
  const [twoInputs, setTwoInputs] = useState(false)

  const Nav = useNavigate()


  const register = async (e) => {
    e.preventDefault();
    // const url = "https://final-project-ufej.onrender.com/api/v1/signup";
    const url = "https://final-project-ufej.onrender.com/api/v1";
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !phoneNumber ||
      !profilePicture
    ) {
      toast.error("All fields are required and check for errors");
    } else {
      // const url = "https://final-project-ufej.onrender.com/api/v1/signup";
      // //final-project-ufej.onrender.com/api/v1
      // axios.post(url, apiData)
      // console.log(apiData)
      try {
        // const {
        //   firstName,
        //   lastName,
        //   email,
        //   password,
        //   phoneNumber,
        //   profilePicture,
        // } = data;

        
        const data = {
          firstName,
          lastName,
          email,
          password,
          phoneNumber,
          profilePicture,
        };

        const formData = new FormData();
        for (const key in data) {
          formData.append(key, data[key]);
        }


        // const formData = new FormData();
        // formData.append("firstName", firstName);
        // formData.append("lastName", lastName);
        // formData.append("email", email);
        // formData.append("password", password);
        // formData.append("phoneNumber", phoneNumber);
        // formData.append("profilePicture", profilePicture);

        const config = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };
        //final-project-ufej.onrender.com/api/v1
        const res = await axios.post(`${url}/signup`, formData, config);
        setLoading(true);
        toast.success("Welcome user")
        Nav('/login')
        console.log(apiData);
        console.log(res, "respond to this");
      } catch (error) {
        // toast.error(error?.message)
        toast.error(error?.response?.data?.errorMessage)
        console.log(error)
        setLoading(false)
      }
      //   .then(res=>{
      //     console.log(res)
      //   })
      //   .catch(err=>{
      //     console.log(err)
      //   })
      // const now = new Date();
      // const year = now.getFullYear(); // Use getFullYear() to get the current year
      // console.log(year, "man");
    }
  };

  const now = new Date();
  const year = now.getFullYear();
  // console.log(now);
  // console.log(year);

  const imgShow = (e) => {
    const file = e.target.files[0];
    const img = URL.createObjectURL(file);
    // const img = URL.revokeObjectURL(file);

    setProfilePicture(img);
  };

  const viewPassword = () =>{
    setTwoInputs(true)
    // setShowEye(true)
  }

  const hidePassword = () => {
    setTwoInputs(false)
    // setShowEye(false)
  }

  return (
    <>
      <div className="SignUpHolder">
        <form
          className="InputHolder"
          onSubmit={register}
          // (apiData)
        >
          <label
          // htmlFor=""
          >
            {" "}
            Sign Up{" "}
          </label>
          {/* <nav> </nav> */}
          {/* <div className="ProfilePic"> </div> */}
          <div className="holdImage">
          <img className="ProfilePic" src={profilePicture} alt="" />
          <input type="file" id="1" hidden onChange={imgShow} />
          <label htmlFor="1">
            {" "}
            <FaRegImage
              style={{ position: "absolute", top: "62px", left: "230px" }}
            />{" "}
          </label>
          </div>
    
          <input
            className="regInput"
            type="text"
            placeholder="Enter your First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className="regInput"
            type="text"
            placeholder="Enter Your Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            className="regInput"
            type="email"
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="regInput"
            type="number"
            placeholder="Enter your Phone number"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />


          <div className="TwoInputHolder">
            { 
              !twoInputs 
                ?
                  <input
                  className="inputOne"
                  type="password"
                  placeholder="Enter Your Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                :
                <input
                className="inputOne"
                type="text"
                placeholder="Enter Your Password"
                onChange={(e) => setPassword(e.target.value)}
              />
          }
    
          {
            !twoInputs 
            ? 
            <FaRegEye onClick={viewPassword} style={{cursor: "pointer"}}/>
            :
            <FaRegEyeSlash onClick={hidePassword} style={{cursor: "pointer"}}/>
          }
          </div>


          <button type="Submit">{loading ? "Loading..." : "Sign In"}</button>
        </form>

        <p> © {year}, TrakFundz</p>
      </div>
      <Toaster />
    </>
  );
};

export default SignIn;
