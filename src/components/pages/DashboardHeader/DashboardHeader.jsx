import React from "react";
import "./DashboardHeader.css";
import { IoNotifications } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import imgProflie from "../../../assets/imgProfile.svg"


const DashboardHeader = () => {
  return (
    <div className="DashboardHeaderHolder">
      <div className="dashboardHeaderInner">
        <div className="dashboardHeaderLeft">
          <h3 className="welcomeName"> Welcome, Adeyinka! </h3>
          <p className="afterWelcomeName">
            {" "}
            It is the best time to manage your finances.{" "}
          </p>
        </div>

        <div className="dashboardHeaderRight">
            <div className="dashHeaderRightLeft">
                <input className="searchInput" type="text" placeholder="Search here..."/>
                <IoSearch className="searchIcon" />

                <div className="holdNotificationIcon"> 
                    {/* <IoNotifications/> */}
                    <IoMdNotifications className="notificationIcon"/>

                </div>
            </div>
            <div className="dashHeaderRightRight">
                <div className="roundImgIcon">
                    <img  className="imgProfile" src={imgProflie} alt="An african melanin popping lady" />
                </div>
                <div className="holdProfileInfo">
                    <h4 className="headerName"> Adeyinka Owoduna </h4>
                    <p className="headerEmail"> yinkaowodun123@gmail.com </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
