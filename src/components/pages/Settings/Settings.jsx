import { useEffect, useState } from "react";
import "./Settings.css";
import toast from "react-hot-toast";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const url = "https://trackfundz-wmhv.onrender.com/api/v1";

const Settings = () => {
  const [reload, setReload] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);
  const [files, setFiles] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });
  const navigate = useNavigate();

  // Fetch user data from API
  const getUserData = async () => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    if (!userId || !token) {
      navigate("/login");
      toast.error("Please login again");
      return;
    }

    try {
      const response = await axios.get(`${url}/oneuser/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const userData = response.data.data;
      setUser((prev) => ({
        ...prev,
        firstName: userData.firstName || "",
        lastName: userData.lastName || "",
        email: userData.email || "",
        phoneNumber: userData.phoneNumber || "",  // Use empty string if phoneNumber is not available
      })); // Prefill form inputs with user data
      setProfilePicture(response.data.data.profilePicture); // Set profile picture
    } catch (err) {
      toast.error(err.response?.data?.message || "Error fetching data");
      if (err.response?.data?.message === "Oops! Access denied. Please sign in.") {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        navigate("/login");
      }
    }
  };

  // Update user profile (picture + data)
  const updateUserProfile = async () => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    if (!userId || !token) {
      toast.error("Please login again");
      navigate("/login");
      return;
    }
    setLoading(true);
    try {
      const formData = new FormData();
      if (files) {
        formData.append("profilePicture", files);
      }// Add profile picture
      formData.append("firstName", user.firstName);
      formData.append("lastName", user.lastName);
      if (user.phoneNumber) {
        formData.append("phoneNumber", user.phoneNumber);
      }

      const res = await axios.put(`${url}/update/${userId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success(res.data.message || "Profile updated successfully");
      setReload((prev) => !prev);

    } catch (err) {
      console.log(err);

      toast.error(err.response?.data?.message || err.response?.data?.errorMessage || "Error updating profile");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserData();
  }, [reload]);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const imgShow = (e) => {
    const file = e.target.files[0];
    setFiles(file);
    const img = URL.createObjectURL(file);
    setProfilePicture(img);
  };

  return (
    <div className="settingsHolder">
      <div className="settingsInner">
        <div className="settingsInnerIn">
          <div className="settingsInnerTop">
            <div className="holdSettingsImg">
              {profilePicture ? (
                <img className="settingsImg" src={profilePicture} alt="Profile" />
              ) : (
                <label htmlFor="1">
                  <FaUserCircle size={100} className="dummyUserIcon" />
                </label>
              )}
              <input type="file" id="1" hidden onChange={imgShow} className="SettingImagePreview" />

            </div>
            <div className="holdSettingsEmail">
              <h4 className="settingsName">{user.firstName} {user.lastName}</h4>
              <p className="settingsEmailName">{user.email}</p>
            </div>
          </div>

          <div className="settingsInputsHolder">
            <div className="settingsInputsHolderTop">
              <input
                className="settingsFirstName"
                name="firstName"
                placeholder="First Name"
                type="text"
                value={user.firstName}
                onChange={handleChange}
              />
              <input
                className="settingsSecondName"
                name="lastName"
                placeholder="Last Name"
                type="text"
                value={user.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="settingsInputHolderBottom">
              <input
                className="settingsEmail"
                name="email"
                placeholder="Email"
                type="text"
                value={user.email}
                disabled
              />
              <input
                className="settingsPhoneNum"
                name="phoneNumber"
                placeholder="Phone Number"
                type="number"
                value={user.phoneNumber}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value.length <= 11) {
                    handleChange(e);  // Update state only if the value has 11 or fewer digits
                  }
                }}
                onInput={(e) => {
                  if (e.target.value.length > 11) {
                    e.target.value = e.target.value.slice(0, 11);  // Trim excess digits if necessary
                  }
                }}
              />
            </div>
            <div className="settingsInnerBotRight">
              <button className="settingsCancelBtn" onClick={() => navigate(-1)}>Cancel</button>
              <button className="settingsSaveBtn" onClick={updateUserProfile} disabled={loading}>
                {loading ? "Updating..." : "Save Changes"}
              </button>
            </div>
          </div>

          <div className="settingsInnerBottom">

          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
