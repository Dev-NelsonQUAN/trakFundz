import React, { useState, useEffect } from "react";
import "./HeroPage.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
// import caroOne from "../../../assets/ECommerces.jpg"
// import caroTwo from "../../../assets/flowersForECommerce.jpg"
// import caroThree from "../../../assets/Jewelry2.jpg"

import polygonBig from "../../../assets/trakFundzBackPolygonBig.svg";
import polygonSmall from "../../../assets/trakfundzBackPolygon.svg";
import dashboard from "../../../assets/heropageDashboard.svg";
import Slider from "react-slick";
import { motion } from "framer-motion";

const HeroPage = () => {
  // const carouselItems = [
  //   {
  //     text: "growth",
  //     gradient: "background: linear-gradient(96deg, #9C58F5 9.63%, #605CFD 43.04%, #6404E0 66.65%);"
  //   },
  //   {
  //     text: "health",
  //     gradient: "background: linear-gradient(91deg, #7F1581 16.11%, #DC14E0 39.43%, #4E054F 57.88%);"
  //   },
  //   {
  //     text: "freedom",
  //     gradient: "background: linear-gradient(91deg, #B4B723 16.53%, #F1F463 52.97%, #989B07 81.76%);"
  //   }
  // ];

  const [text] = useTypewriter({
    words: ["growth.", "health.", "freedom."],
    loop: true,
    typeSpeed: 250,
  });

  console.log(text);

  return (
    <div
      className="heroPageContainer"
      // style={{ backgroundImage: `url(${backgroundImage})`, transition: "background-image 1s ease-in-out" , backgroundRepeat: "no-repeat", backgroundSize: "cover"}}
    >
      <div className="heroPageInner">
        <div className="heroPageLeft">
          <div className="heroPageLeftHold">
            <h1 className="prioritize"> Prioritizing your</h1>

            <h1 className="prioritizeDown">
              {" "}
              financial
              <motion.prioritzeDown
                initial={{ y: -40 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut", yoyo: "Infinity" }}
              >
                growth
              </motion.prioritzeDown>
            </h1>
            {/* <Slider {...settings}> 
                {
                  carouselItems.map((e, index) => (
                    <div style={{backgroundColor: e.gradient}}> 
                    <h2 style={{color: e.gradient}}> {e.text}</h2>
                    </div>
                    ))
                    }
                    </Slider> */}
            {/* <span className="autoType"> {text} </span> */}
            {/* <span className="cursor"> <Cursor cursorStyle="|"/> </span> */}
            <p className="aboutTrakFundz">
              {" "}
              Trakfundz is the personal financial navigator that empowers you to
              effortlessly track expenses, plan budgets, and manage debt.{" "}
            </p>

            <p className="getTrial">
              {" "}
              Get 30 days free trial when you Sign up.{" "}
            </p>

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
