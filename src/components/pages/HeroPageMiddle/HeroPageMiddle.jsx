import React from 'react'
import "./HeroPageMiddle.css"
// import iphone from "../../../assets/iphone.svg";
// import PolygonRight from "../../../assets/PolygonRight.svg";

const HeroPageMiddle = () => {
  return (
    <div className='heroPMid'>
        <div className='polygon11'>
            <img className= 'PolyR'src="{PolygonRight}" alt="Polygon" />
        </div >
        <div className='effortlessText'>
            <div className='effort'>
                <h2>Effortless <span className='budget'>Budgeting</span> <br/>Starts Here!</h2>
                <p>create and manage customized budgets based on your spending habits and financial goals</p>
            </div>
            <div className='trakfundText'>
                <p>TrakFundz budgeting tools provides insights and recommendations to help you stay on track and achieve your financial objectives</p></div>
            <div className='signUpText'>
                <p>Sign up now to begin planning and managing your budget effortlessly</p>
                <button>Get Started</button>
            </div>
        </div>
        <div className='iphone15'>
            <div className='gradientBox'>
                <div className='lilac'></div>
                <div className='yellow'></div>
            </div>
            <div>
                <img src="{iphone}" alt="phone" />
            </div>
        </div>
  )
}

export default HeroPageMiddle