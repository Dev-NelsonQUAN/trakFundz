import "./Footer.css";
import Instagram from "../../../assets/Instagram.svg";
import Twitter from "../../../assets/Twitter.svg";
import Facebook from "../../../assets/Facebook.svg";
import Whatsapp from "../../../assets/Whatsapp.svg";
// import XIcon from "../../../assets/XIcon.svg"

const Footer = () => {
  const now = new Date();
  const year = now.getFullYear();
  console.log(year);

  return (
    <div className="footerContainer">
      <div className="footerContainerInner">
        <div className="footerMain">
          <h4>Copyright © {year} TrakFundz, LLC</h4>
        </div>
        <div className="footerLogo">
          <p className="contactEmail">@trakfundz@gmail.com</p>
          <div className="logoIcon">
            <img src={Instagram} alt="Instagram" className="socialIcon" />
            <img src={Twitter} alt="Twitter" className="socialIcon" />
            <img src={Facebook} alt="Facebook" className="socialIcon" />
            <img src={Whatsapp} alt="Whatsapp" className="socialIcon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
