import React from 'react'
import './Rectangle.css'
import FrameIMG from '../../assets/FrameIMG.svg'
import ImageMission from "../../assets/ImageMission.svg"
import ImageGoal from "../../assets/ImageGoal.svg"


const Rectangle = () => {
  return (
    <div className='RecHolder'>
        <div className='RecText'>
            <h3 className='recTrak'>At Trakfundz, we understand that managing your finances can be overwhelming. That’s why we’ve created a powerful, three-in-one solution to help you take control of your money with ease. </h3>
        </div>
        <div className='MissionHolder'>
            <div className='mission'>
                <div className='imageMission'>
                    <img src={ImageMission} alt="" />
                </div>
                <div className='missionText'>
                <h1>Our Mission</h1>
                <p>Our mission is to empower individuals to take control of their financial lives with ease and confidence. We are a passionate team of software developers who came together with a shared vision: to create a comprehensive solution for expense tracking, budget planning, and debt management.</p>
                </div>
            </div>
            <div className='vision'>
            <div className='goalText'>
                <h1>Our Goal</h1>
                <p>We envision a world where managing personal finances is no longer a source of stress but a path to empowerment and financial freedom. Our goal is to provide a tool that simplifies financial management, making it easier for individuals to understand their spending, plan their budgets, and manage their debt effectively.</p>
                </div>
                <div className='imageGoal'>
                    <img src={ImageGoal} alt="" />
                </div>
                
            </div>
        </div>
        <div className='whyHolder'>
            <div><h1>WHY CHOOSE US?</h1></div>
            <div className='boxText'>
                <div className='box1'>
                    <h3>Comprehensive Expense Tracking.</h3>
                    <p>Our intuitive expense tracking tool allows you to categorize and monitor your spending effortlessly. Whether it's daily coffee runs or monthly subscriptions, Trakfundz helps you keep tabs on every transaction, giving you the clarity you need to make informed financial decisions.</p>
                </div>
                <div className='box2'>
                    <h3>Smart Budget Planning. </h3>
                    <p>Trakfundz offers customizable budget plans tailored to your needs, helping you allocate your funds effectively. Set limits, track progress, and adjust as needed. Trakfundz makes it simple to stay on top of your budget and avoid overspending.</p>
                </div>
                <div className='box3'>
                    <h3>Effective Debt Management.</h3>
                    <p>Trakfundz provides tools to monitor your debt balances, create repayment plans, and track your progress. With clear visuals and actionable insights, you can tackle your debt head-on and work towards a debt-free future.</p>
                </div>
            </div>
        </div>
        <div className='story'>
            <div className='ourStory'>
                <h1> Our Story</h1>
                <p >Trakfundz was born out of a hackathon in 2024, where six innovative software developers united to tackle a common challenge: 
simplifying financial management for everyday people. What started as a collaborative project quickly transformed into a 
commitment to making personal finance accessible and intuitive. Driven by a desire to solve real-world problems, our team 
leveraged their diverse expertise in software development, user experience design, and financial technology to build a 
platform that truly meets the needs of users. We focused on creating an app that not only tracks expenses and manages 
budgets but also helps users tackle debt and achieve their financial goals.</p>
            </div>
        </div>
    </div>
    
  )
}

export default Rectangle