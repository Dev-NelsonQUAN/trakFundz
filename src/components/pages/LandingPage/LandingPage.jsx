import React from "react";
import "./LandingPage.css";
import Header from "../Header/Header";
import HeroPageBottom from "../HeroPageBottom/HeroPageBottom";
import HeroPageMiddle from "../HeroPageMiddle/HeroPageMiddle";
import HeroPage from "../../HeroPage/HeroPage";

const LandingPage = () => {
  return (
    <div className="landingPageHolder">
      <Header />
      <HeroPage/>
      <HeroPageBottom />
      <HeroPageMiddle/>
    </div> 
  );
};

export default LandingPage;
