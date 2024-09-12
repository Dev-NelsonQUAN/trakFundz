import React from "react";
import "./Settings.css";

const Settings = () => {
  return (
    <div className="settingsHolder">
      <div className="settingsInner">
        <div className="settingsInnerIn">
          <div className="settingsInnerTop">
            <div className="holdSettingsImg">
              <img className="settingsImg" src="" alt="" />
            </div>

            <div className="holdSettingsEmail">
              <h4 className="settingsName"> Adeyinka Owoduna </h4>
              <p className="settingsEmailName"> yinkaowodun123@gmail.com </p>
            </div>
          </div>

          <div className="settingsInputsHolder">
            <div className="settingsInputsHolderTop">
              <input className="settingsFirstName" placeholder="First Name" type="text" />
              <input className="settingsSecondName" placeholder="Second Name" type="text" />
            </div>
            <div className="settingsInputHolderBottom">
              <input className="settingsEmail" placeholder="Email" type="text" />
              <input className="settingsPhoneNum"  placeholder="Phone Number" type="text" />
              <input className="settingsPassword" placeholder="Password" type="password" />
            </div>
          </div>

          <div className="settingsInnerBottom">
            <div className="settingsInnerBotRight">
              <button className="settingsCancelBtn"> Cancel </button>
              <button className="settingsSaveBtn"> Save Changes </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
