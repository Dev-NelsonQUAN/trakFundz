import "./Footer.css";
import masterCard from "../../../assets/masterCard.svg";
import verveCard from "../../../assets/verveCard.svg";
import visaCard from "../../../assets/visaCard.svg";

const Footer = () => {

    const now = new Date()
    const year = now.getFullYear() 
    console.log(year)


  return (
    <div className="footerContainer">
      <div className="footerContainerInner">
          <h4 className="footerTxt"> Copyright © {year} TrakFundz, LLC</h4>

        <div className="footerLogo">
            <img className="masterCard" src={masterCard} alt="mastercardIcon" />
            <img  className="verveCard" src={verveCard} alt="verveCardIcon" />
            <img className="visaCard" src={visaCard} alt="visaCardIcon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
