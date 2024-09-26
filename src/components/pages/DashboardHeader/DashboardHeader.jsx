import { useState, useContext } from "react";
import "./DashboardHeader.css";
import { IoMenu } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import SideBar from "../SideBar/SideBar";
import UserContext from "../../../context/UserContext";

// import url from "../../auth/SignUp/SignUp"

// const url = "https://trackfundz-wmhv.onrender.com/api/v1"

const DashboardHeader = () => {
  const { user } = useContext(UserContext);

  // const [user, setUser] = useState()
  const [showSiderBar, setShowSideBar] = useState(false)

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
        <div className="MenuHolder">
          {
            showSiderBar ? <FaTimes className="DashbaordMenuIcon" onClick={() => setShowSideBar(!showSiderBar)} /> : <IoMenu onClick={() => setShowSideBar(!showSiderBar)} className="DashbaordMenuIcon" />
          }
        </div>
        {
          showSiderBar &&
          <div className="MobileSidebar">
            <SideBar setShowSideBar={setShowSideBar} />
          </div>
        }
        <div className="dashboardHeaderRight">
          <div className="dashHeaderRightRight">
            <div className="roundImgIcon">
              {user?.profilePicture ? (
                <img className="dashboardHeaderImage" src={user?.profilePicture} alt="Profile" />
              ) : (
                <FaUserCircle size={30} className="dummyUserIcon" />
              )}
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
