import React from 'react'
import "./SideBar.css"
import logo from "../../../assets/trakFundzLogoReal.svg"
import { NavLink, useNavigate } from 'react-router-dom'


const SideBar = () => {
    const Nav = useNavigate()
  return (
    <div className='sideBarHolder'>
        <div className="sideBarImg">
            <img className='sideLogo' src={logo} alt="" />
        </div>

        <div className="holdDashboardFonts">
            <div className="upFonts">
                <h5 className='sideBarH5'> Dashboard </h5>
                <h5  className='sideBarH5'> Expense Tracker </h5>
                <h5 className='sideBarH5'> Budget Planner </h5>
                <NavLink to={"/dashboard/debt"}><h5 className='sideBarH5'> Debt Manager </h5></NavLink>
                <h5 className='sideBarH5'> Report Insights </h5>
                <h5 className='sideBarH5'> Settings </h5>

            </div>
            <div className="downFonts">
                <h5 className='sideBarH5'> Help </h5>
                <h5 className='sideBarH5'> Log Out</h5>
            </div>
        </div>
    </div>
  )
}

export default SideBar