import React from "react";
import { motion } from "framer-motion";
import "./HeroPage.css";
import polygonBig from "../../assets/trakFundzBackPolygonBig.svg";
import polygonSmall from "../../assets/trakfundzBackPolygon.svg";
import dashboard from "../../assets/heropageDashboard.svg";
import macHold from "../../assets/macHold.svg"
import polygonTopest from "../../assets/topestPolygon.svg"
import innerMac from "../../assets/insideMac.svg"
import iPadHold from "../../assets/iPadHold.svg"
import iPadInner from "../../assets/iPadInner.svg"
import iPhoneHold from "../../assets/iPhoneHold.svg"
import iPhoneInner from "../../assets/iPhoneInner.svg"
import androidHold from "../../assets/androidHold.svg"
import androidInner from "../../assets/androidInner.svg"
import iOSShadow from "../../assets/iOSShadow.svg"
import polySmall from "../../assets/polySmall.svg" 

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 },
};

//  ["linear-gradient(95.65deg, #9C58F5 9.63%, #605CFD 43.04%, #6404E0 66.65%)
// ", linear-gradient(90.79deg, #7F1581 16.11%, #DC14E0 39.43%, #4E054F 57.88%);
// ", linear-gradient(90.99deg, #B4B723 16.53%, #F1F463 52.97%, #989B07 81.76%);
// "]

const texts = ["growth.", "health.", "freedom."];
const gradients = ["gradient1", "gradient2", "gradient3"];

const HeroPage = () => {
  const [currentTextIndex, setCurrentTextIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 1500); // Change text every 1.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="heroPageContainer">
      <div className="heroPageInner">
        <div className="heroPageLeft">
          <div className="heroPageLeftHold">
            <div className="h1Holds">
              <h1 className="prioritize">Prioritizing your</h1>
              <h1 className="financeTxt">
                financial{" "}
                <motion.span
                  className={`autoType ${gradients[currentTextIndex]}`}
                  key={texts[currentTextIndex]}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 1 }} // Adjust duration as needed
                >
                  {texts[currentTextIndex]}
                </motion.span>
              </h1>
            </div>
            <p className="aboutTrakFundz">
              Trakfundz is the personal financial navigator that empowers you to
              effortlessly track expenses, plan budgets, and manage debt.
            </p>

            <div className="leftHoldBottom">
              <p className="getTrial">
                Get 30 days free trial when you Sign up.
              </p>
              <button className="tryNowBtn">Try Now</button>
            </div>
          </div>
        </div>

        <div className="heroPageRight">
          <img className="macHold" src={macHold} alt="MacBook mockup" />
          <img className="polygonTop" src={polygonTopest} alt="Polygon" />
          <div className="roundWhite"></div>
          <img className="innerMac" src={innerMac} alt="Inside Mac" />
          <img className="iPadHold" src={iPadHold} alt="iPad Mockup" />
          <img className="iPadInner" src={iPadInner} alt="iPad Inner Mockup" />
          <img className="iPhoneHold" src={iPhoneHold} alt="iPhone Mockup" />
          <img className="iPhoneInner" src={iPhoneInner} alt="iPhone Inner Mockup" />
          <img className="androidHold" src={androidHold} alt="Android Mockup" />
          <img className="androidInner" src={androidInner} alt="Android Inner" />
          <img className="iOSShadow" src={iOSShadow} alt="iOS Mockup Shadow" />
          <img className="polygonSmall" src={polySmall} alt="polygon" />
          {/* <img className="dashboard" src={dashboard} alt="trakFundzDashboard" /> */}
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
