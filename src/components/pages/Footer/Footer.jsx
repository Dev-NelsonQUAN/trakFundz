
// import React from 'react'
// import "./Footer.css"
// import Instagram from "../../../assets/Intagram.svg"
// import Twitter from "../../../assets/Twitter.svg"
// import Facebook from "../../../assets/Facebook.svg"
// import Whatsapp from "../../../assets/Whatsapp.svg"


// const Footer = () => {
//   return (
//     <div className='footerContainer'>
//         <div className='footerMain'>
//             <h4>Copyright © 2024 TrakFundz, LLC</h4>
//             </div>
//         <div className='footerLogo'>
//             <div className='logoIcon'>
//               <p>@trakfund@gmail.com</p>
//               <img src={Instagram} alt="" />
//               <img src={Twitter} alt="" />
//               <img src={Facebook} alt="" />
//               <img src={Whatsapp} alt="" />
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Footer


import React from 'react'
import "./Footer.css"
import Instagram from "../../../assets/Instagram.svg"
import Twitter from "../../../assets/Twitter.svg"
import Facebook from "../../../assets/Facebook.svg"
import Whatsapp from "../../../assets/Whatsapp.svg"

const Footer = () => {

    const now = new Date()
    const year = now.getFullYear() 
    console.log(year)


  return (
    <div className='footerContainer'>
        <div className='footerMain'>
            <h4>Copyright © 2024 TrakFundz, LLC</h4>
        </div>
        <div className='footerLogo'>
            <div className='logoIcon'>
              <p className='contactEmail'>@trakfund@gmail.com</p>
              <img src={Instagram} alt="Instagram" className='socialIcon' />
              <img src={Twitter} alt="Twitter" className='socialIcon' />
              <img src={Facebook} alt="Facebook" className='socialIcon' />
              <img src={Whatsapp} alt="Whatsapp" className='socialIcon' />
            </div>
        </div>
      </div>
  );
};

export default Footer