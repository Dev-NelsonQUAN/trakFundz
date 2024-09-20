import React, { useEffect, useState } from "react";
import "./DashboardHeader.css";
import { IoNotifications } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import imgProflie from "../../../assets/imgProfile.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import axios from "axios";
import toast from "react-hot-toast";
// import url from "../../auth/SignUp/SignUp"

const url = "https://trackfundz-wmhv.onrender.com/api/v1"

const DashboardHeader = () => {
  const Nav = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState()
  // const [loading, setLoading] = useState()

const getUser = async () => {
  try {
    const userId = localStorage.getItem('userId');
    
    if (!userId) {
      Nav("/login")
      toast.error("Please Login again")
      // throw new Error('User ID not found in localStorage.');
    }
    const response = await axios.get(`${url}/oneuser/${userId}`);
    setUser(response?.data.data);
    // setLoading(false);
  } catch (err) {
    // setLoading(false);
  }
};
useEffect(() => {
  getUser();
}, []);

  console.log(user)

  return (
    <div className="DashboardHeaderHolder">
      <div className="dashboardHeaderInner">
        <div className="dashboardHeaderLeft">
          <h3 className="welcomeName"> Welcome, {user?.firstName}! </h3>
          <p className="afterWelcomeName">
            {" "}
            It is the best time to manage your finances.{" "}
          </p>
        </div>

        <div className="dashboardHeaderRight">
          {/* <div className="dashboardHeaderRightInner"> */}
          <div
            className={
              location.pathname === "/dashboard/home"
                ? "dashHeaderRightLeftNone"
                : "dashHeaderRightLeft"
            }
          >
{/* uDTransProgressiveOne */}

            <input
              className="searchInput"
              type="text"
              placeholder="Search here..."
            />
            <IoSearch className="searchIcon" />
          </div>

          <div className="dashHeaderRightRight">
            <div className="roundImgIcon">
              {/* <img
                className="imgProfile"
                src={imgProflie}
                alt="An african melanin popping lady"
              /> */}
              <CgProfile className="imgProfile"/>
            </div>
            <div className="holdProfileInfo">
              <h4 className="headerName"> {user?.firstName} {user?.lastName} </h4>
              <p className="headerEmail"> {user?.email} </p>
            </div>
          </div>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default DashboardHeader;
