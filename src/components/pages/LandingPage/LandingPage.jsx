import React from "react";
import "./LandingPage.css";
import HeroPage from '../HeroPage/HeroPage'
import Header from "../Header/Header";
import HeroPageBottom from "../HeroPageBottom/HeroPageBottom";

const LandingPage = () => {
    
  return (
    <div className="landingPageHolder">
    <Header/>
    <HeroPage/>
    <HeroPageBottom/>
    </div>
  );
};

export default LandingPage;
