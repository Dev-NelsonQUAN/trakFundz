import { useEffect, useState } from "react";
import "./DashboardHeader.css";
import { IoMenu } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { FaTimes } from "react-icons/fa";
import SideBar from "../SideBar/SideBar";
// import url from "../../auth/SignUp/SignUp"

const url = "https://trackfundz-wmhv.onrender.com/api/v1"

const DashboardHeader = () => {
  const Nav = useNavigate();

  const [user, setUser] = useState()
  const [showSiderBar, setShowSideBar] = useState(false)

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
      console.log(err);
      
    }
  };
  useEffect(() => {
    getUser();
  }, []);




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
                <FaUserCircle size={100} className="dummyUserIcon" />
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
