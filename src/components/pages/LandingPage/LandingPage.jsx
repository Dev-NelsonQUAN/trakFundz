import React from "react";
import "./LandingPage.css";
import Header from "../Header/Header";
import HeroPageBottom from "../HeroPageBottom/HeroPageBottom";
import HeroPageMiddle from "../HeroPageMiddle/HeroPageMiddle";
import HeroPage from "../HeroPage/HeroPage";
import DebtLanding from "../DebtLanding/DebtLanding";
import FreeTrial from "../FreeTrialPage/FreeTrial";
import Footer from "../Footer/Footer";

const LandingPage = () => {
  return (
    <div className="landingPageHolder">
      <HeroPage/>
      <HeroPageBottom />
      <HeroPageMiddle/>
      {/* <DebtLanding/> */}
      {/* <FreeTrial/>
      <Footer/> */}
    </div> 
  );
};

export default LandingPage;
