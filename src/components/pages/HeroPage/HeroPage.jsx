import React, { useState, useEffect } from "react";
import "./HeroPage.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import caroOne from "../../../assets/ECommerces.jpg"
import caroTwo from "../../../assets/flowersForECommerce.jpg"
import caroThree from "../../../assets/Jewelry2.jpg"

import polygonBig from "../../../assets/trakFundzBackPolygonBig.svg"
import polygonSmall from "../../../assets/trakfundzBackPolygon.svg"
import dashboard from "../../../assets/heropageDashboard.svg"

const HeroPage = () => {
  
  const images = [
        caroOne,
        caroTwo,
        caroThree
    ]

    const [backgroundImage, setBackgroundImage] = useState(images[0])

    setInterval(() => {
      // let currentIndex = 0
 
      // const changeBackgroundImage = () => {
        // currentIndex = (currentIndex ++) % images.length;
        // setBackgroundImage(images[currentIndex])
        // };
        if (backgroundImage == images[0]) {
          setBackgroundImage(images[1])
        } else if (backgroundImage == images[1]) {
          setBackgroundImage(images[2])
        } else if (backgroundImage == images[2]) {
          setBackgroundImage(images[0])
        } 
    }, 5000);
    // useEffect(() => {
    //   let currentIndex = 0;
 
    //   const changeBackgroundImage = () => {
    //     currentIndex = (currentIndex + 1) % images.length;
    //     setBackgroundImage(images[currentIndex])
    //   };

    //   const interval = setInterval(changeBackgroundImage, 5000)
    //   return () => {
    //     clearInterval(interval)
    //   }
    // }, [images]);
    
    const [ text ]  = useTypewriter({
      words: ["growth.", "health.", "freedom."],
      loop: true,
      typeSpeed: 250,
    });

    console.log(text)
    
  return (
    <div className="heroPageContainer" 
    // style={{ backgroundImage: `url(${backgroundImage})`, transition: "background-image 1s ease-in-out" , backgroundRepeat: "no-repeat", backgroundSize: "cover"}}
    >
      <div className="heroPageInner">
        <div className="heroPageLeft">
          <div className="heroPageLeftHold">
            <h1 className="prioritize">
              {" "}
              Prioritizing your financial <span className="autoType"> {text} </span> 
              {/* <span className="cursor"> <Cursor cursorStyle="|"/> </span> */}
            </h1>
            <p className="aboutTrakFundz">
              {" "}
              Trakfundz is the personal financial navigator that empowers you to
              effortlessly track expenses, plan budgets, and manage debt.{" "}
            </p>

            <p className="aboutTrakFundz"> Get 30 days free trial when you Sign up. </p>

            <button className="tryNowBtn"> Try Now </button>
          </div>
        </div>

        <div className="heroPageRight">
          <img className="polygonTop" src={polygonBig} alt="Polygon" />
          <div className="roundWhite"></div>
          <img className="polygonSmall" src={polygonSmall} alt="polygon" />
          <img className="dashboard" src={dashboard} alt="trakFundzDashboard" />
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
