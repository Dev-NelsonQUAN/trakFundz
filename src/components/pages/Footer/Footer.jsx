import React from 'react'
import "./Footer.css"
import masterCard from "../../../assets/masterCard.svg";
import verveCard from "../../../assets/verveCard.svg";
import visaCard from "../../../assets/visaCard.svg";

const Footer = () => {
  return (
    <div className='footerContainer'>
        <div className='footerMain'>
            <h4>Copyright © 2024 TrakFundz, LLC</h4>
            </div>
        <div className='footerLogo'>
            <div className='logoIcon'>
                <img src={masterCard} alt="mastercardIcon" />
                <img src={verveCard} alt="verveCardIcon" />
                <img src={visaCard} alt="visaCardIcon" />
            </div>
        </div>
    </div>
  )
}

export default Footer