import { useEffect, useState } from "react";
import "./Settings.css";
import toast from "react-hot-toast";
import { FaRegImage } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 

const url = "https://trackfundz-wmhv.onrender.com/api/v1";

const Settings = () => {
  const [changeSettings, setChangeSettings] = useState(null);
  const [reload, setReload] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);
  const [files, setFiles] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); 

  const getImage = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token"); 

      if (!userId) {
        navigate("/login");
        toast.error("Please login again");
        return; 
      }

      // GET user data
      const get = await axios.get(`${url}/oneuser/${userId}`);
      setUser(get.data.data);

      // POST request to update user data
      if (files) {
        const res = await axios.post(`${url}/update/${userId}`, files, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });
        setChangeSettings(res.data.data.message);
      }
    } catch (err) {
      console.error(err);
      toast.error("Error fetching data");
    }
  };

  useEffect(() => {
    getImage();
  }, [reload]);

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
              <img className="settingsImg" src={profilePicture} alt="Profile" /> 
              <input type="file" id="1" hidden onChange={imgShow} />
              <label htmlFor="1">
                <FaRegImage />
              </label>
            </div>

            <div className="holdSettingsEmail">
              <h4 className="settingsName">{user?.firstName}</h4> 
              <p className="settingsEmailName">yinkaowodun123@gmail.com</p> 
            </div>
          </div>

          <div className="settingsInputsHolder">
            <div className="settingsInputsHolderTop">
              <input className="settingsFirstName" placeholder="First Name" type="text" />
              <input className="settingsSecondName" placeholder="Second Name" type="text" />
            </div>
            <div className="settingsInputHolderBottom">
              <input className="settingsEmail" placeholder="Email" type="text" />
              <input className="settingsPhoneNum" placeholder="Phone Number" type="text" />
              <input className="settingsPassword" placeholder="Password" type="password" />
            </div>
          </div>

          <div className="settingsInnerBottom">
            <div className="settingsInnerBotRight">
              <button className="settingsCancelBtn">Cancel</button>
              <button className="settingsSaveBtn" onClick={() => setReload(prev => !prev)}>Save Changes</button> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;